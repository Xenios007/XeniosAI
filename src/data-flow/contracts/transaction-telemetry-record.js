export class TransactionTelemetryRecord {
  constructor({
    transactionId,
    correlationId,
    serviceOwner,
    businessOperation,
    startTime,
    completionTime,
    durationMs,
    result,
    failureInformation = undefined
  }) {
    this.transactionId = transactionId;
    this.correlationId = correlationId;
    this.serviceOwner = serviceOwner;
    this.businessOperation = businessOperation;
    this.startTime = startTime;
    this.completionTime = completionTime;
    this.durationMs = durationMs;
    this.result = result;
    this.failureInformation = failureInformation;

    Object.freeze(this);
  }
}
