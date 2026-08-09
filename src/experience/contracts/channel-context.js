export class ChannelContext {
  constructor({
    channel,
    userId,
    locale = 'en-US',
    timeZone = 'UTC',
    metadata = {}
  }) {
    this.channel = channel;
    this.userId = userId;
    this.locale = locale;
    this.timeZone = timeZone;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
