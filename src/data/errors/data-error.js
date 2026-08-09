import { PlatformError } from '../../foundation/errors/platform-error.js';

export class DataError extends PlatformError {
  constructor(code, message, details = undefined, cause = undefined) {
    super(code, message, details, cause);
    this.name = 'DataError';
  }
}
