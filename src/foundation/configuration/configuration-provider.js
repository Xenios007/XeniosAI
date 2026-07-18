import { ERROR_CODES } from '../constants.js';
import { PlatformError } from '../errors/platform-error.js';

export class ConfigurationProvider {
  get() {
    throw new Error('ConfigurationProvider.get must be implemented by a subclass.');
  }

  getOrDefault(key, defaultValue) {
    const value = this.get(key);
    return value === undefined ? defaultValue : value;
  }

  getRequired(key) {
    const value = this.get(key);

    if (value === undefined || value === null || value === '') {
      throw new PlatformError(
        ERROR_CODES.CONFIGURATION_MISSING,
        `Required configuration value "${key}" was not found.`
      );
    }

    return value;
  }
}
