export class ConversationResponse {
  constructor({
    accepted,
    context,
    downstreamResult,
    metadata = {}
  }) {
    this.accepted = accepted;
    this.context = context;
    this.downstreamResult = downstreamResult;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
