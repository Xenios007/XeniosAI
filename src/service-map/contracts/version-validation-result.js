export class VersionValidationResult {
  constructor({ isValid, errors = [], record = null, proposal = null }) {
    this.isValid = Boolean(isValid);
    this.errors = Object.freeze([...errors]);
    this.record = record;
    this.proposal = proposal;

    Object.freeze(this);
  }

  static valid({ record = null, proposal = null } = {}) {
    return new VersionValidationResult({
      isValid: true,
      record,
      proposal
    });
  }

  static invalid({ errors, record = null, proposal = null }) {
    return new VersionValidationResult({
      isValid: false,
      errors,
      record,
      proposal
    });
  }
}
