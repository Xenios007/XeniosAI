export class EventDefinition {
  constructor({
    eventName,
    publisher,
    version = 1,
    businessIdentifier,
    requiredPayloadFields = [],
    supportedVersions = [version],
    consumers = []
  }) {
    this.eventName = eventName;
    this.publisher = publisher;
    this.version = version;
    this.businessIdentifier = businessIdentifier;
    this.requiredPayloadFields = Object.freeze([...requiredPayloadFields]);
    this.supportedVersions = Object.freeze([...supportedVersions]);
    this.consumers = Object.freeze([...consumers]);

    Object.freeze(this);
  }
}
