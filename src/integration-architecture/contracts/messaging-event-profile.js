export class MessagingEventProfile {
  constructor({
    eventName,
    category,
    modelStages = [],
    principles = [],
    lifecycleStages = [],
    ownershipResponsibilities = [],
    reliabilityPrinciples = [],
    observabilityTelemetry = [],
    securityControls = [],
    governanceActivities = [],
    representsCompletedBusinessFact = true,
    immutableAfterPublication = true,
    traceableAcrossLifecycle = true,
    producerConsumerDecoupled = true,
    ownedByOriginatingDomain = true,
    technologyNeutral = true,
    brokerSpecific = false,
    serializationSpecific = false,
    vendorSpecific = false,
    exposesInternalImplementation = false
  }) {
    this.eventName = eventName;
    this.category = category;
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.ownershipResponsibilities = Object.freeze([...ownershipResponsibilities]);
    this.reliabilityPrinciples = Object.freeze([...reliabilityPrinciples]);
    this.observabilityTelemetry = Object.freeze([...observabilityTelemetry]);
    this.securityControls = Object.freeze([...securityControls]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.representsCompletedBusinessFact = Boolean(representsCompletedBusinessFact);
    this.immutableAfterPublication = Boolean(immutableAfterPublication);
    this.traceableAcrossLifecycle = Boolean(traceableAcrossLifecycle);
    this.producerConsumerDecoupled = Boolean(producerConsumerDecoupled);
    this.ownedByOriginatingDomain = Boolean(ownedByOriginatingDomain);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.brokerSpecific = Boolean(brokerSpecific);
    this.serializationSpecific = Boolean(serializationSpecific);
    this.vendorSpecific = Boolean(vendorSpecific);
    this.exposesInternalImplementation = Boolean(exposesInternalImplementation);

    Object.freeze(this);
  }
}
