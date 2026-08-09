export class EventEnvelope {
  constructor({
    eventId,
    eventName,
    eventVersion,
    timestamp,
    correlationId,
    sourceService,
    businessIdentifier,
    payload = {},
    completedBusinessFact = true,
    publisherAwareOfConsumers = false,
    metadata = {}
  }) {
    this.eventId = eventId;
    this.eventName = eventName;
    this.eventVersion = eventVersion;
    this.timestamp = timestamp;
    this.correlationId = correlationId;
    this.sourceService = sourceService;
    this.businessIdentifier = businessIdentifier;
    this.payload = Object.freeze({ ...payload });
    this.completedBusinessFact = Boolean(completedBusinessFact);
    this.publisherAwareOfConsumers = Boolean(publisherAwareOfConsumers);
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
