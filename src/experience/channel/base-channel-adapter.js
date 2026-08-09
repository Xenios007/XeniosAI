import { Attachment } from '../contracts/attachment.js';
import { ChannelCapabilities } from '../contracts/channel-capabilities.js';
import { ExperienceRequest } from '../contracts/experience-request.js';
import { ExperienceResponse } from '../contracts/experience-response.js';
import { RenderedResponse } from '../contracts/rendered-response.js';
import { EXPERIENCE_ERROR_CODES } from '../constants.js';
import { ExperienceError } from '../errors/experience-error.js';
import { ChannelAdapter } from './channel-adapter.js';

export class BaseChannelAdapter extends ChannelAdapter {
  constructor(channel, capabilities) {
    super();
    this._channel = channel;
    this.capabilities = capabilities instanceof ChannelCapabilities
      ? capabilities
      : new ChannelCapabilities(capabilities);
  }

  get channel() {
    return this._channel;
  }

  getCapabilities() {
    return this.capabilities;
  }

  normalizeInboundPayload(payload, { clock }) {
    if (!payload?.userId) {
      throw new ExperienceError(
        EXPERIENCE_ERROR_CODES.INVALID_REQUEST,
        'Experience payload must include a userId.'
      );
    }

    const attachments = (payload.attachments ?? []).map(attachment => new Attachment(attachment));

    return new ExperienceRequest({
      channel: this.channel,
      userId: payload.userId,
      locale: payload.locale ?? 'en-US',
      timestamp: payload.timestamp ?? clock.now().toISOString(),
      messageText: payload.messageText ?? '',
      attachments,
      metadata: payload.metadata ?? {}
    });
  }

  renderOutboundResponse(response) {
    const outbound = response instanceof ExperienceResponse
      ? response
      : new ExperienceResponse(response);

    this.#assertCapabilities(outbound);

    return new RenderedResponse({
      channel: this.channel,
      payload: {
        text: outbound.text,
        attachments: outbound.attachments,
        buttons: outbound.buttons,
        quickReplies: outbound.quickReplies,
        cards: outbound.cards
      }
    });
  }

  #assertCapabilities(response) {
    if (response.attachments.length > 0 && !this.capabilities.supportsImages && !this.capabilities.supportsFileUploads) {
      throw new ExperienceError(
        EXPERIENCE_ERROR_CODES.RENDERING_NOT_SUPPORTED,
        `Channel "${this.channel}" does not support attachments.`
      );
    }

    if (response.buttons.length > 0 && !this.capabilities.supportsButtons) {
      throw new ExperienceError(
        EXPERIENCE_ERROR_CODES.RENDERING_NOT_SUPPORTED,
        `Channel "${this.channel}" does not support buttons.`
      );
    }

    if (response.quickReplies.length > 0 && !this.capabilities.supportsQuickReplies) {
      throw new ExperienceError(
        EXPERIENCE_ERROR_CODES.RENDERING_NOT_SUPPORTED,
        `Channel "${this.channel}" does not support quick replies.`
      );
    }

    if (response.cards.length > 0 && !this.capabilities.supportsRichCards) {
      throw new ExperienceError(
        EXPERIENCE_ERROR_CODES.RENDERING_NOT_SUPPORTED,
        `Channel "${this.channel}" does not support rich cards.`
      );
    }
  }
}
