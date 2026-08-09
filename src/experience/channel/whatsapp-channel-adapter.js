import { CHANNEL_TYPES } from '../contracts/channel-types.js';
import { BaseChannelAdapter } from './base-channel-adapter.js';

export class WhatsAppChannelAdapter extends BaseChannelAdapter {
  constructor() {
    super(CHANNEL_TYPES.WHATSAPP, {
      supportsText: true,
      supportsImages: true,
      supportsButtons: false,
      supportsQuickReplies: false,
      supportsFileUploads: true,
      supportsRichCards: false
    });
  }
}
