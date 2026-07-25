export class SecurityObservabilityProfile {
  constructor({
    observabilityName,
    objectives = [],
    modelStages = [],
    principles = [],
    visibilityAreas = [],
    businessContextElements = [],
    zeroTrustActivities = [],
    decisionOutcomes = [],
    leastPrivilegeObservations = [],
    identityActivities = [],
    authorizationActivities = [],
    aiSecurityActivities = [],
    integrationSecurityActivities = [],
    incidentCharacteristics = [],
    auditabilitySupports = [],
    riskVisibilityTypes = [],
    operationalEvidenceTypes = [],
    governanceActivities = [],
    qualityAttributes = [],
    relationshipStages = [],
    architecturalRules = [],
    futureCapabilities = [],
    continuouslyObservable = true,
    businessContextPreserved = true,
    zeroTrustSupported = true,
    decisionsExplainable = true,
    leastPrivilegeVerifiable = true,
    auditabilityEnabled = true,
    governanceEvidenceReliable = true,
    trustworthyCorrelatedGoverned = true,
    technologyNeutral = true,
    vendorNeutral = true,
    securityProductSpecific = false,
    siemPlatformSpecific = false,
    endpointTechnologySpecific = false,
    securityToolingSpecific = false,
    implementationMechanismSpecific = false,
    exposesSensitiveImplementationDetails = false,
    disruptsBusinessCapabilities = false
  }) {
    this.observabilityName = observabilityName;
    this.objectives = Object.freeze([...objectives]);
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.visibilityAreas = Object.freeze([...visibilityAreas]);
    this.businessContextElements = Object.freeze([...businessContextElements]);
    this.zeroTrustActivities = Object.freeze([...zeroTrustActivities]);
    this.decisionOutcomes = Object.freeze([...decisionOutcomes]);
    this.leastPrivilegeObservations = Object.freeze([...leastPrivilegeObservations]);
    this.identityActivities = Object.freeze([...identityActivities]);
    this.authorizationActivities = Object.freeze([...authorizationActivities]);
    this.aiSecurityActivities = Object.freeze([...aiSecurityActivities]);
    this.integrationSecurityActivities = Object.freeze([...integrationSecurityActivities]);
    this.incidentCharacteristics = Object.freeze([...incidentCharacteristics]);
    this.auditabilitySupports = Object.freeze([...auditabilitySupports]);
    this.riskVisibilityTypes = Object.freeze([...riskVisibilityTypes]);
    this.operationalEvidenceTypes = Object.freeze([...operationalEvidenceTypes]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.qualityAttributes = Object.freeze([...qualityAttributes]);
    this.relationshipStages = Object.freeze([...relationshipStages]);
    this.architecturalRules = Object.freeze([...architecturalRules]);
    this.futureCapabilities = Object.freeze([...futureCapabilities]);
    this.continuouslyObservable = Boolean(continuouslyObservable);
    this.businessContextPreserved = Boolean(businessContextPreserved);
    this.zeroTrustSupported = Boolean(zeroTrustSupported);
    this.decisionsExplainable = Boolean(decisionsExplainable);
    this.leastPrivilegeVerifiable = Boolean(leastPrivilegeVerifiable);
    this.auditabilityEnabled = Boolean(auditabilityEnabled);
    this.governanceEvidenceReliable = Boolean(governanceEvidenceReliable);
    this.trustworthyCorrelatedGoverned = Boolean(trustworthyCorrelatedGoverned);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.securityProductSpecific = Boolean(securityProductSpecific);
    this.siemPlatformSpecific = Boolean(siemPlatformSpecific);
    this.endpointTechnologySpecific = Boolean(endpointTechnologySpecific);
    this.securityToolingSpecific = Boolean(securityToolingSpecific);
    this.implementationMechanismSpecific = Boolean(implementationMechanismSpecific);
    this.exposesSensitiveImplementationDetails = Boolean(exposesSensitiveImplementationDetails);
    this.disruptsBusinessCapabilities = Boolean(disruptsBusinessCapabilities);

    Object.freeze(this);
  }
}
