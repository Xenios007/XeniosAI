export class InteractionValidationResult {
  constructor({ isAllowed, errors = [], warnings = [], interaction = null }) {
    this.isAllowed = Boolean(isAllowed);
    this.errors = Object.freeze([...errors]);
    this.warnings = Object.freeze([...warnings]);
    this.interaction = interaction;

    Object.freeze(this);
  }

  static allowed(interaction, warnings = []) {
    return new InteractionValidationResult({
      isAllowed: true,
      warnings,
      interaction
    });
  }

  static rejected(interaction, errors) {
    return new InteractionValidationResult({
      isAllowed: false,
      errors,
      interaction
    });
  }
}
