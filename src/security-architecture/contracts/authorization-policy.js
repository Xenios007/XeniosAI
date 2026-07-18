export class AuthorizationPolicy {
  constructor({
    policyName,
    protectedResource,
    evaluationInputs = [],
    accessControlPrinciples = [],
    serviceChecks = [],
    aiCapabilities = [],
    administrativeOperations = [],
    observabilityEvents = [],
    governanceControls = [],
    defaultDeny = true,
    policyExternalToBusinessCode = true,
    authenticationSeparated = true,
    consistentEnforcement = true,
    preservesServiceOwnership = true,
    vendorSpecific = false
  }) {
    this.policyName = policyName;
    this.protectedResource = protectedResource;
    this.evaluationInputs = Object.freeze([...evaluationInputs]);
    this.accessControlPrinciples = Object.freeze([...accessControlPrinciples]);
    this.serviceChecks = Object.freeze([...serviceChecks]);
    this.aiCapabilities = Object.freeze([...aiCapabilities]);
    this.administrativeOperations = Object.freeze([...administrativeOperations]);
    this.observabilityEvents = Object.freeze([...observabilityEvents]);
    this.governanceControls = Object.freeze([...governanceControls]);
    this.defaultDeny = Boolean(defaultDeny);
    this.policyExternalToBusinessCode = Boolean(policyExternalToBusinessCode);
    this.authenticationSeparated = Boolean(authenticationSeparated);
    this.consistentEnforcement = Boolean(consistentEnforcement);
    this.preservesServiceOwnership = Boolean(preservesServiceOwnership);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
