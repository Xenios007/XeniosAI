export class DomainEventConsumption {
  constructor({
    eventName,
    consumerContext,
    consumerService,
    supportedVersions = [],
    independentlyRelevant = true,
    localDecisionOnly = true,
    modifiesPublisherState = false,
    assumesGlobalOrdering = false,
    requiredAction = false
  }) {
    this.eventName = eventName;
    this.consumerContext = consumerContext;
    this.consumerService = consumerService;
    this.supportedVersions = Object.freeze([...supportedVersions]);
    this.independentlyRelevant = Boolean(independentlyRelevant);
    this.localDecisionOnly = Boolean(localDecisionOnly);
    this.modifiesPublisherState = Boolean(modifiesPublisherState);
    this.assumesGlobalOrdering = Boolean(assumesGlobalOrdering);
    this.requiredAction = Boolean(requiredAction);

    Object.freeze(this);
  }
}
