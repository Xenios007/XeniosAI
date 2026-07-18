export class DecisionRecord {
  constructor({
    intentDetected,
    contextEvaluated = [],
    policiesApplied = [],
    gatesPassed = [],
    gatesFailed = [],
    finalDecision,
    timestamp,
    correlationId
  }) {
    this.intentDetected = intentDetected;
    this.contextEvaluated = Object.freeze([...contextEvaluated]);
    this.policiesApplied = Object.freeze([...policiesApplied]);
    this.gatesPassed = Object.freeze([...gatesPassed]);
    this.gatesFailed = Object.freeze([...gatesFailed]);
    this.finalDecision = finalDecision;
    this.timestamp = timestamp;
    this.correlationId = correlationId;

    Object.freeze(this);
  }
}
