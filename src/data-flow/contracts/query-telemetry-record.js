export class QueryTelemetryRecord {
  constructor({
    queryName,
    correlationId,
    requestId,
    owningService,
    responseDurationMs,
    resultStatus,
    dataSource,
    failureReason = undefined
  }) {
    this.queryName = queryName;
    this.correlationId = correlationId;
    this.requestId = requestId;
    this.owningService = owningService;
    this.responseDurationMs = responseDurationMs;
    this.resultStatus = resultStatus;
    this.dataSource = dataSource;
    this.failureReason = failureReason;

    Object.freeze(this);
  }
}
