export class EventTelemetryRecord {
  constructor({
    eventName,
    publisher,
    correlationId,
    timestamp,
    deliveryStatus,
    consumerCount,
    processingDurationMs,
    failureInformation = undefined
  }) {
    this.eventName = eventName;
    this.publisher = publisher;
    this.correlationId = correlationId;
    this.timestamp = timestamp;
    this.deliveryStatus = deliveryStatus;
    this.consumerCount = consumerCount;
    this.processingDurationMs = processingDurationMs;
    this.failureInformation = failureInformation;

    Object.freeze(this);
  }
}
