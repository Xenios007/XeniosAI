export class AgentCoordinationRequest {
  constructor({
    requestId,
    correlationId,
    requiredCapabilities = [],
    context = {},
    strategy = undefined,
    decisionHistory = [],
    terminationConditions = [],
    metadata = {}
  }) {
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.requiredCapabilities = Object.freeze([...requiredCapabilities]);
    this.context = Object.freeze({ ...context });
    this.strategy = strategy;
    this.decisionHistory = Object.freeze([...decisionHistory]);
    this.terminationConditions = Object.freeze([...terminationConditions]);
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
