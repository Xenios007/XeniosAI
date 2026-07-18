export class MessageEnvelope {
  constructor({
    messageId,
    correlationId,
    timestamp,
    source,
    destination = undefined,
    messageName,
    messageType,
    version,
    payload = {},
    metadata = {}
  }) {
    this.messageId = messageId;
    this.correlationId = correlationId;
    this.timestamp = timestamp;
    this.source = source;
    this.destination = destination;
    this.messageName = messageName;
    this.messageType = messageType;
    this.version = version;
    this.payload = Object.freeze({ ...payload });
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
