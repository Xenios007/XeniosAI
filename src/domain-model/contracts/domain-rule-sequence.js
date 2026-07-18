export class DomainRuleSequence {
  constructor({ steps = [], rulesEvaluatedBeforeStateChange = true, rulesEvaluatedBeforeDomainEvent = true }) {
    this.steps = Object.freeze([...steps]);
    this.rulesEvaluatedBeforeStateChange = Boolean(rulesEvaluatedBeforeStateChange);
    this.rulesEvaluatedBeforeDomainEvent = Boolean(rulesEvaluatedBeforeDomainEvent);

    Object.freeze(this);
  }
}
