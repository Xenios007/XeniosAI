import { ValidationResult } from '../contracts/validation-result.js';
import { GatewayValidator } from './gateway-validator.js';

export class DefaultGatewayValidator extends GatewayValidator {
  constructor({
    maxMessageLength = 4000,
    maxAttachmentCount = 10,
    supportedChannels = []
  } = {}) {
    super();
    this.maxMessageLength = maxMessageLength;
    this.maxAttachmentCount = maxAttachmentCount;
    this.supportedChannels = new Set(supportedChannels);
  }

  validate(request) {
    const errors = [];

    if (!request.channel || !this.supportedChannels.has(request.channel)) {
      errors.push('Unsupported channel.');
    }

    if (!request.userId) {
      errors.push('User identifier is required.');
    }

    if (!request.locale) {
      errors.push('Locale is required.');
    }

    if ((request.messageText ?? '').length > this.maxMessageLength) {
      errors.push('Message content exceeds the configured length limit.');
    }

    if ((request.attachments ?? []).length > this.maxAttachmentCount) {
      errors.push('Attachment count exceeds the configured limit.');
    }

    return new ValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }
}
