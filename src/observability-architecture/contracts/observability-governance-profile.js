export class ObservabilityGovernanceProfile {
  constructor({
    governanceName,
    objectives = [],
    modelStages = [],
    principles = [],
    ownershipResponsibilities = [],
    integrityRequirements = [],
    businessContext = [],
    standardizationAreas = [],
    explainabilityAreas = [],
    responsibilityOwners = [],
    evidenceLifecycleStages = [],
    telemetryGovernanceConsiderations = [],
    aiGovernanceRequirements = [],
    securityAlignmentActivities = [],
    qualityAssuranceConsiderations = [],
    governanceMetrics = [],
    improvementActivities = [],
    relationshipStages = [],
    architecturalRules = [],
    futureCapabilities = [],
    explicitOwnershipAssigned = true,
    evidenceIntegrityPreserved = true,
    businessContextPreserved = true,
    standardsEnforced = true,
    explainabilitySupported = true,
    securityAligned = true,
    lifecycleGoverned = true,
    continuousImprovementEnabled = true,
    technologyNeutral = true,
    vendorNeutral = true,
    governanceOrganizationSpecific = false,
    operationalProcessSpecific = false,
    observabilityProductSpecific = false,
    implementationTechnologySpecific = false
  }) {
    this.governanceName = governanceName;
    this.objectives = Object.freeze([...objectives]);
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.ownershipResponsibilities = Object.freeze([...ownershipResponsibilities]);
    this.integrityRequirements = Object.freeze([...integrityRequirements]);
    this.businessContext = Object.freeze([...businessContext]);
    this.standardizationAreas = Object.freeze([...standardizationAreas]);
    this.explainabilityAreas = Object.freeze([...explainabilityAreas]);
    this.responsibilityOwners = Object.freeze([...responsibilityOwners]);
    this.evidenceLifecycleStages = Object.freeze([...evidenceLifecycleStages]);
    this.telemetryGovernanceConsiderations = Object.freeze([...telemetryGovernanceConsiderations]);
    this.aiGovernanceRequirements = Object.freeze([...aiGovernanceRequirements]);
    this.securityAlignmentActivities = Object.freeze([...securityAlignmentActivities]);
    this.qualityAssuranceConsiderations = Object.freeze([...qualityAssuranceConsiderations]);
    this.governanceMetrics = Object.freeze([...governanceMetrics]);
    this.improvementActivities = Object.freeze([...improvementActivities]);
    this.relationshipStages = Object.freeze([...relationshipStages]);
    this.architecturalRules = Object.freeze([...architecturalRules]);
    this.futureCapabilities = Object.freeze([...futureCapabilities]);
    this.explicitOwnershipAssigned = Boolean(explicitOwnershipAssigned);
    this.evidenceIntegrityPreserved = Boolean(evidenceIntegrityPreserved);
    this.businessContextPreserved = Boolean(businessContextPreserved);
    this.standardsEnforced = Boolean(standardsEnforced);
    this.explainabilitySupported = Boolean(explainabilitySupported);
    this.securityAligned = Boolean(securityAligned);
    this.lifecycleGoverned = Boolean(lifecycleGoverned);
    this.continuousImprovementEnabled = Boolean(continuousImprovementEnabled);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.governanceOrganizationSpecific = Boolean(governanceOrganizationSpecific);
    this.operationalProcessSpecific = Boolean(operationalProcessSpecific);
    this.observabilityProductSpecific = Boolean(observabilityProductSpecific);
    this.implementationTechnologySpecific = Boolean(implementationTechnologySpecific);

    Object.freeze(this);
  }
}
