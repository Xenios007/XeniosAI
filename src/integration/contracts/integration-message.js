export class IntegrationMessage {
  constructor({
    messageId,
    messageType,
    owner,
    payload = {},
    correlationId,
    metadata = {}
  }) {
    this.messageId = messageId;
    this.messageType = messageType;
    this.owner = owner;
    this.payload = Object.freeze({ ...payload });
    this.correlationId = correlationId;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
