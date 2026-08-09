export class TraceContext {
  constructor({
    correlationId,
    requestId,
    causationId = undefined,
    actorId = undefined,
    metadata = {}
  }) {
    this.correlationId = correlationId;
    this.requestId = requestId;
    this.causationId = causationId;
    this.actorId = actorId;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
