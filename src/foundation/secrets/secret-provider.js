import { ERROR_CODES } from '../constants.js';
import { PlatformError } from '../errors/platform-error.js';

export class SecretProvider {
  getSecret() {
    throw new Error('SecretProvider.getSecret must be implemented by a subclass.');
  }

  getRequiredSecret(key) {
    const value = this.getSecret(key);

    if (!value) {
      throw new PlatformError(
        ERROR_CODES.SECRET_MISSING,
        `Required secret "${key}" was not found.`
      );
    }

    return value;
  }
}
