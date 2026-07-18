export class OrchestrationBoundaryResult {
  constructor({ isAllowed, errors = [], responsibility = null }) {
    this.isAllowed = Boolean(isAllowed);
    this.errors = Object.freeze([...errors]);
    this.responsibility = responsibility;

    Object.freeze(this);
  }

  static allowed(responsibility) {
    return new OrchestrationBoundaryResult({
      isAllowed: true,
      responsibility
    });
  }

  static rejected({ errors, responsibility = null }) {
    return new OrchestrationBoundaryResult({
      isAllowed: false,
      errors,
      responsibility
    });
  }
}
