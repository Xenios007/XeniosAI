export class BoundaryValidationResult {
  constructor({ isValid, errors = [], boundary = null, concept = null }) {
    this.isValid = Boolean(isValid);
    this.errors = Object.freeze([...errors]);
    this.boundary = boundary;
    this.concept = concept;

    Object.freeze(this);
  }

  static valid({ boundary, concept = null }) {
    return new BoundaryValidationResult({
      isValid: true,
      boundary,
      concept
    });
  }

  static invalid({ errors, boundary = null, concept = null }) {
    return new BoundaryValidationResult({
      isValid: false,
      errors,
      boundary,
      concept
    });
  }
}
