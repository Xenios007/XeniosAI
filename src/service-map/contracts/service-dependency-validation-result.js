export class ServiceDependencyValidationResult {
  constructor({ isAllowed, errors = [], dependency = null }) {
    this.isAllowed = Boolean(isAllowed);
    this.errors = Object.freeze([...errors]);
    this.dependency = dependency;

    Object.freeze(this);
  }

  static allowed(dependency) {
    return new ServiceDependencyValidationResult({
      isAllowed: true,
      dependency
    });
  }

  static rejected({ dependency = null, errors = [] }) {
    return new ServiceDependencyValidationResult({
      isAllowed: false,
      dependency,
      errors
    });
  }
}
