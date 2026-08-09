export class ExperienceRequest {
  constructor({
    channel,
    userId,
    locale = 'en-US',
    timestamp,
    messageText = '',
    attachments = [],
    metadata = {}
  }) {
    this.channel = channel;
    this.userId = userId;
    this.locale = locale;
    this.timestamp = timestamp;
    this.messageText = messageText;
    this.attachments = Object.freeze([...attachments]);
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
