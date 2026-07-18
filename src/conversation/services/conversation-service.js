import { CONVERSATION_STATES } from '../constants.js';
import { ConversationContext } from '../contracts/conversation-context.js';
import { ConversationMessage } from '../contracts/conversation-message.js';
import { ConversationRecord } from '../contracts/conversation-record.js';
import { ConversationResponse } from '../contracts/conversation-response.js';
import { ConversationSession } from '../contracts/conversation-session.js';
import { Participant } from '../contracts/participant.js';

export class ConversationService {
  constructor({
    clock,
    idGenerator,
    logger,
    meter,
    repository,
    stateMachine,
    aiPort,
    sessionTtlMinutes = 30
  }) {
    this.clock = clock;
    this.idGenerator = idGenerator;
    this.logger = logger;
    this.meter = meter;
    this.repository = repository;
    this.stateMachine = stateMachine;
    this.aiPort = aiPort;
    this.sessionTtlMinutes = sessionTtlMinutes;
  }

  async forwardRequest(gatewayRequest) {
    const now = this.clock.now();
    const participant = new Participant({
      participantId: gatewayRequest.userId,
      role: 'guest',
      channel: gatewayRequest.channel
    });

    const existingConversation = this.repository.findByParticipant(
      gatewayRequest.channel,
      gatewayRequest.userId
    );

    const baseConversation = existingConversation ?? new ConversationRecord({
      conversationId: this.idGenerator.generate(),
      state: CONVERSATION_STATES.NEW,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      lastChannel: gatewayRequest.channel,
      participants: [participant],
      messages: [],
      metadata: {
        latestCorrelationId: gatewayRequest.correlationId
      },
      stateTransitions: [],
      handoff: {
        pendingTasks: [],
        aiActions: []
      }
    });

    const session = this.#restoreOrCreateSession(baseConversation.conversationId, now);
    const message = new ConversationMessage({
      messageId: this.idGenerator.generate(),
      requestId: gatewayRequest.requestId,
      correlationId: gatewayRequest.correlationId,
      senderRole: 'guest',
      senderId: gatewayRequest.userId,
      channel: gatewayRequest.channel,
      timestamp: gatewayRequest.timestamp,
      content: gatewayRequest.messageText,
      attachments: gatewayRequest.attachments,
      metadata: gatewayRequest.metadata
    });

    const transition = this.stateMachine.activate(
      baseConversation.state,
      now.toISOString(),
      'message-received'
    );

    const updatedConversation = new ConversationRecord({
      conversationId: baseConversation.conversationId,
      state: transition.toState,
      createdAt: baseConversation.createdAt,
      updatedAt: now.toISOString(),
      lastChannel: gatewayRequest.channel,
      participants: this.#mergeParticipants(baseConversation.participants, participant),
      messages: [...baseConversation.messages, message],
      metadata: {
        ...baseConversation.metadata,
        latestCorrelationId: gatewayRequest.correlationId
      },
      stateTransitions: [...baseConversation.stateTransitions, transition],
      handoff: baseConversation.handoff
    });

    this.repository.saveConversation(updatedConversation);
    this.repository.saveSession(session);

    const context = new ConversationContext({
      conversation: updatedConversation,
      session,
      latestMessage: message,
      history: updatedConversation.messages,
      participants: updatedConversation.participants,
      handoff: updatedConversation.handoff
    });

    this.logger.info('Conversation context prepared.', {
      conversationId: updatedConversation.conversationId,
      sessionId: session.sessionId,
      state: updatedConversation.state
    });
    this.meter.incrementCounter('conversation_requests_total', 1, {
      channel: gatewayRequest.channel,
      state: updatedConversation.state
    });

    const downstreamResult = await this.aiPort.processConversation(context);

    return new ConversationResponse({
      accepted: true,
      context,
      downstreamResult
    });
  }

  #restoreOrCreateSession(conversationId, now) {
    const existingSession = this.repository.getSession(conversationId);

    if (existingSession && new Date(existingSession.expiresAt).getTime() > now.getTime()) {
      return new ConversationSession({
        ...existingSession,
        updatedAt: now.toISOString()
      });
    }

    const expiresAt = new Date(now.getTime() + this.sessionTtlMinutes * 60 * 1000);
    return new ConversationSession({
      sessionId: this.idGenerator.generate(),
      conversationId,
      status: 'active',
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      expiresAt: expiresAt.toISOString()
    });
  }

  #mergeParticipants(existingParticipants, incomingParticipant) {
    const present = existingParticipants.some(
      participant =>
        participant.participantId === incomingParticipant.participantId &&
        participant.channel === incomingParticipant.channel
    );

    return present ? existingParticipants : [...existingParticipants, incomingParticipant];
  }
}
