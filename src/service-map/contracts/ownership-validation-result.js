export class OwnershipValidationResult {
  constructor({ isValid, errors = [], owner = null, capability = null }) {
    this.isValid = Boolean(isValid);
    this.errors = Object.freeze([...errors]);
    this.owner = owner;
    this.capability = capability;

    Object.freeze(this);
  }

  static valid({ owner, capability }) {
    return new OwnershipValidationResult({
      isValid: true,
      owner,
      capability
    });
  }

  static invalid({ errors, owner = null, capability = null }) {
    return new OwnershipValidationResult({
      isValid: false,
      errors,
      owner,
      capability
    });
  }
}
