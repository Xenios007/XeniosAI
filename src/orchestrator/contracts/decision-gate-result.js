export class DecisionGateResult {
  constructor({
    gate,
    passed,
    reasons = [],
    failureClassification = undefined
  }) {
    this.gate = gate;
    this.passed = Boolean(passed);
    this.reasons = Object.freeze([...reasons]);
    this.failureClassification = failureClassification;

    Object.freeze(this);
  }
}
