export class ConversationRecord {
  constructor({
    conversationId,
    state,
    createdAt,
    updatedAt,
    lastChannel,
    participants = [],
    messages = [],
    metadata = {},
    stateTransitions = [],
    handoff = {}
  }) {
    this.conversationId = conversationId;
    this.state = state;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.lastChannel = lastChannel;
    this.participants = Object.freeze([...participants]);
    this.messages = Object.freeze([...messages]);
    this.metadata = Object.freeze({ ...metadata });
    this.stateTransitions = Object.freeze([...stateTransitions]);
    this.handoff = Object.freeze({ ...handoff });
    Object.freeze(this);
  }
}
