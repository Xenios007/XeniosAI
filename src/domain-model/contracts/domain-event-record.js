export class DomainEventRecord {
  constructor({
    eventId,
    eventName,
    eventVersion = 1,
    occurredAt,
    owningContext,
    publisherService,
    aggregateName,
    aggregateId,
    correlationId,
    facts = {},
    completedBusinessFact = true,
    businessConsistencyAchieved = true,
    transactionCommitted = true,
    publisherAwareOfConsumers = false,
    mutable = false
  }) {
    this.eventId = eventId;
    this.eventName = eventName;
    this.eventVersion = eventVersion;
    this.occurredAt = occurredAt;
    this.owningContext = owningContext;
    this.publisherService = publisherService;
    this.aggregateName = aggregateName;
    this.aggregateId = aggregateId;
    this.correlationId = correlationId;
    this.facts = deepFreeze({ ...facts });
    this.completedBusinessFact = Boolean(completedBusinessFact);
    this.businessConsistencyAchieved = Boolean(businessConsistencyAchieved);
    this.transactionCommitted = Boolean(transactionCommitted);
    this.publisherAwareOfConsumers = Boolean(publisherAwareOfConsumers);
    this.mutable = Boolean(mutable);

    Object.freeze(this);
  }
}

function deepFreeze(value) {
  if (value && typeof value === 'object') {
    for (const nestedValue of Object.values(value)) {
      deepFreeze(nestedValue);
    }

    Object.freeze(value);
  }

  return value;
}
