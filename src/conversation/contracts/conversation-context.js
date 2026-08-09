export class ConversationContext {
  constructor({
    conversation,
    session,
    latestMessage,
    history,
    participants,
    handoff
  }) {
    this.conversation = conversation;
    this.session = session;
    this.latestMessage = latestMessage;
    this.history = Object.freeze([...history]);
    this.participants = Object.freeze([...participants]);
    this.handoff = Object.freeze({ ...handoff });
    Object.freeze(this);
  }
}
