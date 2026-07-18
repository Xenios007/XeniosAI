export class FailureTelemetry {
  constructor({
    failureCategory,
    severity,
    component,
    recoveryStrategy,
    recoveryResult,
    durationMs = 0,
    correlationId,
    timestamp
  }) {
    this.failureCategory = failureCategory;
    this.severity = severity;
    this.component = component;
    this.recoveryStrategy = recoveryStrategy;
    this.recoveryResult = recoveryResult;
    this.durationMs = durationMs;
    this.correlationId = correlationId;
    this.timestamp = timestamp;

    Object.freeze(this);
  }
}
