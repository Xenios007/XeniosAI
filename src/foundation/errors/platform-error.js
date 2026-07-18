export class PlatformError extends Error {
  constructor(code, message, details = undefined, cause = undefined) {
    super(message, cause ? { cause } : undefined);
    this.name = 'PlatformError';
    this.code = code;
    this.details = details;
  }

  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      details: this.details
    };
  }
}
