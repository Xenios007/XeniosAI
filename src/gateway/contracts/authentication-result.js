export class AuthenticationResult {
  constructor({
    isAuthenticated,
    principalId = undefined,
    method = undefined,
    claims = {},
    failureReason = undefined
  }) {
    this.isAuthenticated = isAuthenticated;
    this.principalId = principalId;
    this.method = method;
    this.claims = Object.freeze({ ...claims });
    this.failureReason = failureReason;
    Object.freeze(this);
  }
}
