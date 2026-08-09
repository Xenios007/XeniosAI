export class MessagingMessageProfile {
  constructor({
    messageName,
    category,
    modelStages = [],
    principles = [],
    lifecycleStages = [],
    ownershipResponsibilities = [],
    deliveryCharacteristics = [],
    reliabilityPrinciples = [],
    observabilityTelemetry = [],
    securityControls = [],
    governanceActivities = [],
    representsIntent = true,
    initiatesFutureAction = true,
    independentlyProcessed = true,
    producerConsumerDecoupled = true,
    orderingOnlyWhenBusinessRequired = true,
    technologyNeutral = true,
    brokerSpecific = false,
    serializationSpecific = false,
    vendorSpecific = false,
    exposesInternalImplementation = false
  }) {
    this.messageName = messageName;
    this.category = category;
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.ownershipResponsibilities = Object.freeze([...ownershipResponsibilities]);
    this.deliveryCharacteristics = Object.freeze([...deliveryCharacteristics]);
    this.reliabilityPrinciples = Object.freeze([...reliabilityPrinciples]);
    this.observabilityTelemetry = Object.freeze([...observabilityTelemetry]);
    this.securityControls = Object.freeze([...securityControls]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.representsIntent = Boolean(representsIntent);
    this.initiatesFutureAction = Boolean(initiatesFutureAction);
    this.independentlyProcessed = Boolean(independentlyProcessed);
    this.producerConsumerDecoupled = Boolean(producerConsumerDecoupled);
    this.orderingOnlyWhenBusinessRequired = Boolean(orderingOnlyWhenBusinessRequired);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.brokerSpecific = Boolean(brokerSpecific);
    this.serializationSpecific = Boolean(serializationSpecific);
    this.vendorSpecific = Boolean(vendorSpecific);
    this.exposesInternalImplementation = Boolean(exposesInternalImplementation);

    Object.freeze(this);
  }
}
