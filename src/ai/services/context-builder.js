import { ContextPacket } from '../contracts/context-packet.js';

export class ContextBuilder {
  build(conversationContext) {
    return new ContextPacket({
      conversationId: conversationContext.conversation.conversationId,
      sessionId: conversationContext.session.sessionId,
      state: conversationContext.conversation.state,
      latestMessage: conversationContext.latestMessage,
      history: conversationContext.history,
      participants: conversationContext.participants,
      metadata: {
        lastChannel: conversationContext.conversation.lastChannel,
        handoff: conversationContext.handoff
      }
    });
  }
}
