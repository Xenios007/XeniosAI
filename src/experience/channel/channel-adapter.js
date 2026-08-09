export class ChannelAdapter {
  get channel() {
    throw new Error('ChannelAdapter.channel must be implemented by a subclass.');
  }

  getCapabilities() {
    throw new Error('ChannelAdapter.getCapabilities must be implemented by a subclass.');
  }

  normalizeInboundPayload() {
    throw new Error('ChannelAdapter.normalizeInboundPayload must be implemented by a subclass.');
  }

  renderOutboundResponse() {
    throw new Error('ChannelAdapter.renderOutboundResponse must be implemented by a subclass.');
  }
}
