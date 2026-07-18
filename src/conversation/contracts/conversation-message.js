export class ConversationMessage {
  constructor({
    messageId,
    requestId,
    correlationId,
    senderRole,
    senderId,
    channel,
    timestamp,
    content,
    attachments = [],
    metadata = {}
  }) {
    this.messageId = messageId;
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.senderRole = senderRole;
    this.senderId = senderId;
    this.channel = channel;
    this.timestamp = timestamp;
    this.content = content;
    this.attachments = Object.freeze([...attachments]);
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
