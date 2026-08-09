export class ExecutionTelemetryRecord {
  constructor({
    correlationId,
    requestId,
    executionDurationMs,
    participatingComponents = [],
    serviceInteractions = [],
    status,
    executionOutcome
  }) {
    this.correlationId = correlationId;
    this.requestId = requestId;
    this.executionDurationMs = executionDurationMs;
    this.participatingComponents = Object.freeze([...participatingComponents]);
    this.serviceInteractions = Object.freeze([...serviceInteractions]);
    this.status = status;
    this.executionOutcome = executionOutcome;

    Object.freeze(this);
  }
}
