export class GatewayRequest {
  constructor({
    requestId,
    correlationId,
    channel,
    userId,
    principalId = undefined,
    timestamp,
    locale,
    messageText,
    attachments = [],
    metadata = {},
    authentication = undefined,
    authorization = undefined,
    audit = undefined
  }) {
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.channel = channel;
    this.userId = userId;
    this.principalId = principalId;
    this.timestamp = timestamp;
    this.locale = locale;
    this.messageText = messageText;
    this.attachments = Object.freeze([...attachments]);
    this.metadata = Object.freeze({ ...metadata });
    this.authentication = authentication;
    this.authorization = authorization;
    this.audit = audit;
    Object.freeze(this);
  }
}
