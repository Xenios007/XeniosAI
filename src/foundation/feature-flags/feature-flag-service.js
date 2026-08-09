import { ERROR_CODES } from '../constants.js';
import { PlatformError } from '../errors/platform-error.js';

export class FeatureFlagService {
  isEnabled() {
    throw new Error('FeatureFlagService.isEnabled must be implemented by a subclass.');
  }

  requireFlag(flagName) {
    if (!this.isEnabled(flagName)) {
      throw new PlatformError(
        ERROR_CODES.FEATURE_FLAG_MISSING,
        `Feature flag "${flagName}" is disabled or undefined.`
      );
    }
  }
}
