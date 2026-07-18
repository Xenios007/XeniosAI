export class ConversationSession {
  constructor({
    sessionId,
    conversationId,
    status,
    createdAt,
    updatedAt,
    expiresAt
  }) {
    this.sessionId = sessionId;
    this.conversationId = conversationId;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.expiresAt = expiresAt;
    Object.freeze(this);
  }
}
