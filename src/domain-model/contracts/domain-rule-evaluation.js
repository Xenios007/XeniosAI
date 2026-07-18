export class DomainRuleEvaluation {
  constructor({
    ruleName,
    evaluatedBy,
    owningContext,
    inputFacts = {},
    beforeStateChange = true,
    beforeDomainEvent = true,
    ruleSatisfied = true,
    duplicatedEvaluation = false,
    technologyConcern = false
  }) {
    this.ruleName = ruleName;
    this.evaluatedBy = evaluatedBy;
    this.owningContext = owningContext;
    this.inputFacts = Object.freeze({ ...inputFacts });
    this.beforeStateChange = Boolean(beforeStateChange);
    this.beforeDomainEvent = Boolean(beforeDomainEvent);
    this.ruleSatisfied = Boolean(ruleSatisfied);
    this.duplicatedEvaluation = Boolean(duplicatedEvaluation);
    this.technologyConcern = Boolean(technologyConcern);

    Object.freeze(this);
  }
}
