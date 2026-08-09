export class CommunicationValidationResult {
  constructor({ isValid, errors = [], contract = null }) {
    this.isValid = Boolean(isValid);
    this.errors = Object.freeze([...errors]);
    this.contract = contract;

    Object.freeze(this);
  }

  static valid(contract) {
    return new CommunicationValidationResult({
      isValid: true,
      contract
    });
  }

  static invalid({ errors, contract = null }) {
    return new CommunicationValidationResult({
      isValid: false,
      errors,
      contract
    });
  }
}
