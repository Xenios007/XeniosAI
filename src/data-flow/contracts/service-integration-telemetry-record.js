export class ServiceIntegrationTelemetryRecord {
  constructor({
    correlationId,
    sourceService,
    targetService,
    requestDurationMs,
    success,
    retryCount,
    responseStatus,
    failureReason = undefined
  }) {
    this.correlationId = correlationId;
    this.sourceService = sourceService;
    this.targetService = targetService;
    this.requestDurationMs = requestDurationMs;
    this.success = Boolean(success);
    this.retryCount = retryCount;
    this.responseStatus = responseStatus;
    this.failureReason = failureReason;

    Object.freeze(this);
  }
}
