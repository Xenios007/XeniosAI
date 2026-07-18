export class RenderedResponse {
  constructor({ channel, payload, metadata = {} }) {
    this.channel = channel;
    this.payload = payload;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
