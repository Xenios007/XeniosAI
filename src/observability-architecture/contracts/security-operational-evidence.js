export class SecurityOperationalEvidence {
  constructor({
    evidenceType,
    identity,
    action,
    affectedResource,
    securityDecision,
    businessContext = {},
    correlationId,
    riskType,
    zeroTrustActivity,
    technologyNeutral = true,
    exposesSensitiveImplementationDetails = false
  }) {
    this.evidenceType = evidenceType;
    this.identity = identity;
    this.action = action;
    this.affectedResource = affectedResource;
    this.securityDecision = securityDecision;
    this.businessContext = Object.freeze({ ...businessContext });
    this.correlationId = correlationId;
    this.riskType = riskType;
    this.zeroTrustActivity = zeroTrustActivity;
    this.technologyNeutral = Boolean(technologyNeutral);
    this.exposesSensitiveImplementationDetails = Boolean(exposesSensitiveImplementationDetails);

    Object.freeze(this);
  }
}
