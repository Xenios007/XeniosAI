export class ExecutionDecision {
  constructor({
    outcome,
    allowed,
    reasons = []
  }) {
    this.outcome = outcome;
    this.allowed = allowed;
    this.reasons = Object.freeze([...reasons]);
    Object.freeze(this);
  }
}
