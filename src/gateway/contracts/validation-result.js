export class ValidationResult {
  constructor({
    isValid,
    errors = []
  }) {
    this.isValid = isValid;
    this.errors = Object.freeze([...errors]);
    Object.freeze(this);
  }
}
