export class AuthorizationResult {
  constructor({
    isAuthorized,
    policy = undefined,
    failureReason = undefined
  }) {
    this.isAuthorized = isAuthorized;
    this.policy = policy;
    this.failureReason = failureReason;
    Object.freeze(this);
  }
}
