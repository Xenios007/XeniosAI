export class OrchestratorExecutionDecision {
  constructor({
    decisionId,
    proposalId,
    correlationId,
    outcome,
    authorized,
    failureClassification = undefined,
    reasons = [],
    gateResults = [],
    timestamp
  }) {
    this.decisionId = decisionId;
    this.proposalId = proposalId;
    this.correlationId = correlationId;
    this.outcome = outcome;
    this.authorized = Boolean(authorized);
    this.failureClassification = failureClassification;
    this.reasons = Object.freeze([...reasons]);
    this.gateResults = Object.freeze([...gateResults]);
    this.timestamp = timestamp;

    Object.freeze(this);
  }
}
