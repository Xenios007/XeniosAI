export class DomainLifecycleTransition {
  constructor({
    lifecycleName,
    aggregateName,
    aggregateRoot,
    fromState,
    toState,
    businessAction,
    domainEvent,
    businessRulesSatisfied = true,
    aggregateConsistencySatisfied = true,
    invariantsPreserved = true,
    requestedByAggregateRoot = true,
    rewritesHistory = false
  }) {
    this.lifecycleName = lifecycleName;
    this.aggregateName = aggregateName;
    this.aggregateRoot = aggregateRoot;
    this.fromState = fromState;
    this.toState = toState;
    this.businessAction = businessAction;
    this.domainEvent = domainEvent;
    this.businessRulesSatisfied = Boolean(businessRulesSatisfied);
    this.aggregateConsistencySatisfied = Boolean(aggregateConsistencySatisfied);
    this.invariantsPreserved = Boolean(invariantsPreserved);
    this.requestedByAggregateRoot = Boolean(requestedByAggregateRoot);
    this.rewritesHistory = Boolean(rewritesHistory);

    Object.freeze(this);
  }
}
