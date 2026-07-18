import { CHANNEL_TYPES } from '../contracts/channel-types.js';
import { BaseChannelAdapter } from './base-channel-adapter.js';

export class MessengerChannelAdapter extends BaseChannelAdapter {
  constructor() {
    super(CHANNEL_TYPES.MESSENGER, {
      supportsText: true,
      supportsImages: true,
      supportsButtons: true,
      supportsQuickReplies: true,
      supportsFileUploads: true,
      supportsRichCards: true
    });
  }
}
