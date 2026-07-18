export class MessageProcessingRecord {
  constructor({
    messageId,
    consumer,
    status,
    idempotent = false,
    duplicateDetected = false,
    acknowledged = false,
    retryCount = 0,
    deadLettered = false,
    expired = false,
    failureReason = undefined
  }) {
    this.messageId = messageId;
    this.consumer = consumer;
    this.status = status;
    this.idempotent = Boolean(idempotent);
    this.duplicateDetected = Boolean(duplicateDetected);
    this.acknowledged = Boolean(acknowledged);
    this.retryCount = retryCount;
    this.deadLettered = Boolean(deadLettered);
    this.expired = Boolean(expired);
    this.failureReason = failureReason;

    Object.freeze(this);
  }
}
