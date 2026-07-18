export class DomainRuleCollaboration {
  constructor({
    operationName,
    participatingRules = [],
    owningContexts = [],
    preservesOwnership = true,
    duplicatesRule = false,
    overridesBusinessOwnership = false,
    allRulesEvaluated = true
  }) {
    this.operationName = operationName;
    this.participatingRules = Object.freeze([...participatingRules]);
    this.owningContexts = Object.freeze([...owningContexts]);
    this.preservesOwnership = Boolean(preservesOwnership);
    this.duplicatesRule = Boolean(duplicatesRule);
    this.overridesBusinessOwnership = Boolean(overridesBusinessOwnership);
    this.allRulesEvaluated = Boolean(allRulesEvaluated);

    Object.freeze(this);
  }
}
