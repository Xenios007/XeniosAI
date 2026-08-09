export class ContextPacket {
  constructor({
    conversationId,
    sessionId,
    state,
    latestMessage,
    history = [],
    participants = [],
    metadata = {}
  }) {
    this.conversationId = conversationId;
    this.sessionId = sessionId;
    this.state = state;
    this.latestMessage = latestMessage;
    this.history = Object.freeze([...history]);
    this.participants = Object.freeze([...participants]);
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
