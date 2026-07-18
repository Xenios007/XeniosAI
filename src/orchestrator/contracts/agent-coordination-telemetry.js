export class AgentCoordinationTelemetry {
  constructor({
    participatingAgents = [],
    executionOrder = [],
    executionDurationMs = 0,
    inputs = {},
    outputs = {},
    failures = [],
    correlationId,
    decisionHistory = []
  }) {
    this.participatingAgents = Object.freeze([...participatingAgents]);
    this.executionOrder = Object.freeze([...executionOrder]);
    this.executionDurationMs = executionDurationMs;
    this.inputs = Object.freeze({ ...inputs });
    this.outputs = Object.freeze({ ...outputs });
    this.failures = Object.freeze([...failures]);
    this.correlationId = correlationId;
    this.decisionHistory = Object.freeze([...decisionHistory]);

    Object.freeze(this);
  }
}
