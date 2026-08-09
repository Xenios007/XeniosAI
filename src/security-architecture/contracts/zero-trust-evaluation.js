export class ZeroTrustEvaluation {
  constructor({
    request,
    subject,
    subjectType,
    boundary,
    decisionFlow = [],
    principles = [],
    contextGroups = [],
    riskFactors = [],
    observabilityEvents = [],
    governanceActivities = [],
    explicitlyVerified = true,
    leastPrivilege = true,
    assumesBreach = true,
    continuouslyValidated = true,
    authorizationEvaluated = true,
    policyDriven = true,
    auditable = true,
    networkTrusted = false,
    permanentTrust = false,
    vendorSpecific = false
  }) {
    this.request = request;
    this.subject = subject;
    this.subjectType = subjectType;
    this.boundary = boundary;
    this.decisionFlow = Object.freeze([...decisionFlow]);
    this.principles = Object.freeze([...principles]);
    this.contextGroups = Object.freeze([...contextGroups]);
    this.riskFactors = Object.freeze([...riskFactors]);
    this.observabilityEvents = Object.freeze([...observabilityEvents]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.explicitlyVerified = Boolean(explicitlyVerified);
    this.leastPrivilege = Boolean(leastPrivilege);
    this.assumesBreach = Boolean(assumesBreach);
    this.continuouslyValidated = Boolean(continuouslyValidated);
    this.authorizationEvaluated = Boolean(authorizationEvaluated);
    this.policyDriven = Boolean(policyDriven);
    this.auditable = Boolean(auditable);
    this.networkTrusted = Boolean(networkTrusted);
    this.permanentTrust = Boolean(permanentTrust);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
