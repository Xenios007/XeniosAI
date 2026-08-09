export class EventConsumptionRecord {
  constructor({
    eventId,
    eventName,
    consumer,
    supportedVersions = [],
    processingStatus,
    localProcessingOnly = true,
    modifiedForeignBusinessState = false,
    failureInformation = undefined
  }) {
    this.eventId = eventId;
    this.eventName = eventName;
    this.consumer = consumer;
    this.supportedVersions = Object.freeze([...supportedVersions]);
    this.processingStatus = processingStatus;
    this.localProcessingOnly = Boolean(localProcessingOnly);
    this.modifiedForeignBusinessState = Boolean(modifiedForeignBusinessState);
    this.failureInformation = failureInformation;

    Object.freeze(this);
  }
}
