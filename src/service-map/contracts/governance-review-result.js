export class GovernanceReviewResult {
  constructor({ isApproved, errors = [], changeRequest = null }) {
    this.isApproved = Boolean(isApproved);
    this.errors = Object.freeze([...errors]);
    this.changeRequest = changeRequest;

    Object.freeze(this);
  }

  static approved(changeRequest) {
    return new GovernanceReviewResult({
      isApproved: true,
      changeRequest
    });
  }

  static rejected({ errors, changeRequest = null }) {
    return new GovernanceReviewResult({
      isApproved: false,
      errors,
      changeRequest
    });
  }
}
