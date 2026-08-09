export class ErrorEnvelope {
  constructor(code, message, correlationId, details = undefined) {
    this.code = code;
    this.message = message;
    this.correlationId = correlationId;
    this.details = details;
    Object.freeze(this);
  }
}
