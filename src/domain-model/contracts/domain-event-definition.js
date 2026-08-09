export class DomainEventDefinition {
  constructor({
    eventName,
    owningContext,
    publisherService,
    aggregateName,
    businessMeaning,
    businessIdentifier,
    requiredFacts = [],
    consumers = [],
    version = 1,
    supportedVersions = [version],
    immutable = true,
    completedFact = true,
    implementationDetail = false,
    publisherShared = false
  }) {
    this.eventName = eventName;
    this.owningContext = owningContext;
    this.publisherService = publisherService;
    this.aggregateName = aggregateName;
    this.businessMeaning = businessMeaning;
    this.businessIdentifier = businessIdentifier;
    this.requiredFacts = Object.freeze([...requiredFacts]);
    this.consumers = Object.freeze([...consumers]);
    this.version = version;
    this.supportedVersions = Object.freeze([...supportedVersions]);
    this.immutable = Boolean(immutable);
    this.completedFact = Boolean(completedFact);
    this.implementationDetail = Boolean(implementationDetail);
    this.publisherShared = Boolean(publisherShared);

    Object.freeze(this);
  }
}
