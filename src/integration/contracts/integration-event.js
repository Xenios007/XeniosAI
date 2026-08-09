export class IntegrationEvent {
  constructor({
    eventId,
    eventType,
    owner,
    occurredAt,
    payload = {},
    correlationId,
    metadata = {}
  }) {
    this.eventId = eventId;
    this.eventType = eventType;
    this.owner = owner;
    this.occurredAt = occurredAt;
    this.payload = Object.freeze({ ...payload });
    this.correlationId = correlationId;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
