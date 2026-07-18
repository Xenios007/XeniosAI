export class MessageContract {
  constructor({
    messageName,
    messageType,
    style,
    producer,
    destination = undefined,
    version,
    routingStrategy,
    deliveryModel,
    payloadFields = [],
    retryPolicy = [],
    securityControls = [],
    observable = true,
    producerKnowsConsumers = false,
    implementationDetailsExposed = false,
    orderingRequired = false,
    orderingScope = undefined,
    duplicateHandlingRequired = false,
    expirationPolicy = undefined
  }) {
    this.messageName = messageName;
    this.messageType = messageType;
    this.style = style;
    this.producer = producer;
    this.destination = destination;
    this.version = version;
    this.routingStrategy = routingStrategy;
    this.deliveryModel = deliveryModel;
    this.payloadFields = Object.freeze([...payloadFields]);
    this.retryPolicy = Object.freeze([...retryPolicy]);
    this.securityControls = Object.freeze([...securityControls]);
    this.observable = Boolean(observable);
    this.producerKnowsConsumers = Boolean(producerKnowsConsumers);
    this.implementationDetailsExposed = Boolean(implementationDetailsExposed);
    this.orderingRequired = Boolean(orderingRequired);
    this.orderingScope = orderingScope;
    this.duplicateHandlingRequired = Boolean(duplicateHandlingRequired);
    this.expirationPolicy = expirationPolicy;

    Object.freeze(this);
  }
}
