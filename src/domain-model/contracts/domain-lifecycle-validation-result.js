export class DomainLifecycleValidationResult {
  constructor({ isValid, errors = [] }) {
    this.isValid = Boolean(isValid);
    this.errors = Object.freeze([...errors]);

    Object.freeze(this);
  }
}
