export class ApiErrorContract {
  constructor({
    code,
    category,
    message,
    correlationId,
    validationDetails = []
  }) {
    this.code = code;
    this.category = category;
    this.message = message;
    this.correlationId = correlationId;
    this.validationDetails = Object.freeze([...validationDetails]);

    Object.freeze(this);
  }
}
