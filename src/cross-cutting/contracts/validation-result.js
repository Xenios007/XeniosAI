export class CrossCuttingValidationResult {
  constructor({
    isValid,
    errors = []
  }) {
    this.isValid = isValid;
    this.errors = Object.freeze([...errors]);
    Object.freeze(this);
  }
}
