export class ToolInvocationTelemetry {
  constructor({
    toolId,
    capabilityRequested,
    startedAt,
    endedAt,
    durationMs,
    success,
    retryCount = 0,
    correlationId
  }) {
    this.toolId = toolId;
    this.capabilityRequested = capabilityRequested;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.durationMs = durationMs;
    this.success = Boolean(success);
    this.retryCount = retryCount;
    this.correlationId = correlationId;

    Object.freeze(this);
  }
}
