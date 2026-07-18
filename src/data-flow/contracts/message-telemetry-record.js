export class MessageTelemetryRecord {
  constructor({
    messageId,
    correlationId,
    source,
    destination = undefined,
    messageType,
    deliveryDurationMs,
    processingDurationMs,
    success,
    retryCount,
    failureReason = undefined
  }) {
    this.messageId = messageId;
    this.correlationId = correlationId;
    this.source = source;
    this.destination = destination;
    this.messageType = messageType;
    this.deliveryDurationMs = deliveryDurationMs;
    this.processingDurationMs = processingDurationMs;
    this.success = Boolean(success);
    this.retryCount = retryCount;
    this.failureReason = failureReason;

    Object.freeze(this);
  }
}
