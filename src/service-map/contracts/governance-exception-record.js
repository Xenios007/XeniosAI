export class GovernanceExceptionRecord {
  constructor({
    exceptionId,
    serviceName,
    scope,
    reason,
    approvedBy,
    adrRef,
    expiresAt = null
  }) {
    this.exceptionId = exceptionId;
    this.serviceName = serviceName;
    this.scope = scope;
    this.reason = reason;
    this.approvedBy = approvedBy;
    this.adrRef = adrRef;
    this.expiresAt = expiresAt;

    Object.freeze(this);
  }
}
