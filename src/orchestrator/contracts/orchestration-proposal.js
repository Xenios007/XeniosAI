export class OrchestrationProposal {
  constructor({
    proposalId,
    correlationId,
    intent,
    intentConfidence = 0,
    goals = [],
    requiresClarification = false,
    context = {},
    policies = [],
    requiredCapabilities = [],
    availableCapabilities = [],
    authorization = {},
    confidence = undefined,
    requestedOutcome,
    timestamp = undefined,
    metadata = {}
  }) {
    this.proposalId = proposalId;
    this.correlationId = correlationId;
    this.intent = intent;
    this.intentConfidence = intentConfidence;
    this.goals = Object.freeze([...goals]);
    this.requiresClarification = Boolean(requiresClarification);
    this.context = Object.freeze({ ...context });
    this.policies = Object.freeze([...policies]);
    this.requiredCapabilities = Object.freeze([...requiredCapabilities]);
    this.availableCapabilities = Object.freeze([...availableCapabilities]);
    this.authorization = Object.freeze({ ...authorization });
    this.confidence = confidence ?? intentConfidence;
    this.requestedOutcome = requestedOutcome;
    this.timestamp = timestamp;
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
