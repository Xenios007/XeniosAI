import { EXPERIENCE_ERROR_CODES } from '../constants.js';
import { ExperienceError } from '../errors/experience-error.js';

export class ChannelRegistry {
  constructor(adapters = []) {
    this.adapters = new Map(adapters.map(adapter => [adapter.channel, adapter]));
  }

  register(adapter) {
    this.adapters.set(adapter.channel, adapter);
    return this;
  }

  getRequired(channel) {
    const adapter = this.adapters.get(channel);

    if (!adapter) {
      throw new ExperienceError(
        EXPERIENCE_ERROR_CODES.CHANNEL_NOT_SUPPORTED,
        `Channel "${channel}" is not supported by the Experience Layer.`
      );
    }

    return adapter;
  }

  listCapabilities() {
    return [...this.adapters.values()].map(adapter => ({
      channel: adapter.channel,
      capabilities: adapter.getCapabilities()
    }));
  }
}
