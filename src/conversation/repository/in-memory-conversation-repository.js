import { ConversationRepository } from './conversation-repository.js';

export class InMemoryConversationRepository extends ConversationRepository {
  constructor() {
    super();
    this.conversations = new Map();
    this.sessions = new Map();
    this.participantIndex = new Map();
  }

  findByParticipant(channel, participantId) {
    const key = `${channel}:${participantId}`;
    const conversationId = this.participantIndex.get(key);
    return conversationId ? this.conversations.get(conversationId) : undefined;
  }

  saveConversation(conversation) {
    this.conversations.set(conversation.conversationId, conversation);

    for (const participant of conversation.participants) {
      const key = `${participant.channel ?? conversation.lastChannel}:${participant.participantId}`;
      this.participantIndex.set(key, conversation.conversationId);
    }

    return conversation;
  }

  getSession(conversationId) {
    return this.sessions.get(conversationId);
  }

  saveSession(session) {
    this.sessions.set(session.conversationId, session);
    return session;
  }
}
