export class DomainEvent {
  constructor({
    eventId,
    eventName,
    owningService,
    occurredAt,
    aggregateId,
    payload = {},
    metadata = {}
  }) {
    this.eventId = eventId;
    this.eventName = eventName;
    this.owningService = owningService;
    this.occurredAt = occurredAt;
    this.aggregateId = aggregateId;
    this.payload = Object.freeze({ ...payload });
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
