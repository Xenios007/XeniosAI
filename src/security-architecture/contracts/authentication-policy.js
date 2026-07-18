export class AuthenticationPolicy {
  constructor({
    policyName,
    principles = [],
    factors = [],
    supportsMfa = true,
    mfaForPrivilegedIdentities = true,
    mfaForHighRiskOperations = true,
    supportsMachineCredentials = true,
    supportsFederation = true,
    preservesLocalAuthorization = true,
    authenticatesBeforeAuthorization = true,
    strengthAlignedWithRisk = true,
    vendorSpecific = false
  }) {
    this.policyName = policyName;
    this.principles = Object.freeze([...principles]);
    this.factors = Object.freeze([...factors]);
    this.supportsMfa = Boolean(supportsMfa);
    this.mfaForPrivilegedIdentities = Boolean(mfaForPrivilegedIdentities);
    this.mfaForHighRiskOperations = Boolean(mfaForHighRiskOperations);
    this.supportsMachineCredentials = Boolean(supportsMachineCredentials);
    this.supportsFederation = Boolean(supportsFederation);
    this.preservesLocalAuthorization = Boolean(preservesLocalAuthorization);
    this.authenticatesBeforeAuthorization = Boolean(authenticatesBeforeAuthorization);
    this.strengthAlignedWithRisk = Boolean(strengthAlignedWithRisk);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
