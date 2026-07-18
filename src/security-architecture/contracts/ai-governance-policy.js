export class AiGovernancePolicy {
  constructor({
    policyName,
    modelGovernanceActivities = [],
    supplyChainComponents = [],
    riskTypes = [],
    oversightActivities = [],
    observabilityEvents = [],
    governanceActivities = [],
    externalDependenciesReviewed = true,
    modelVendorIndependent = true,
    riskControlsPreventiveDetectiveCorrective = true,
    oversightRiskBased = true,
    auditable = true,
    aiAssumesOrganizationalResponsibility = false,
    modelSelectionSpecific = false,
    promptEngineeringSpecific = false,
    vendorSpecific = false
  }) {
    this.policyName = policyName;
    this.modelGovernanceActivities = Object.freeze([...modelGovernanceActivities]);
    this.supplyChainComponents = Object.freeze([...supplyChainComponents]);
    this.riskTypes = Object.freeze([...riskTypes]);
    this.oversightActivities = Object.freeze([...oversightActivities]);
    this.observabilityEvents = Object.freeze([...observabilityEvents]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.externalDependenciesReviewed = Boolean(externalDependenciesReviewed);
    this.modelVendorIndependent = Boolean(modelVendorIndependent);
    this.riskControlsPreventiveDetectiveCorrective = Boolean(riskControlsPreventiveDetectiveCorrective);
    this.oversightRiskBased = Boolean(oversightRiskBased);
    this.auditable = Boolean(auditable);
    this.aiAssumesOrganizationalResponsibility = Boolean(aiAssumesOrganizationalResponsibility);
    this.modelSelectionSpecific = Boolean(modelSelectionSpecific);
    this.promptEngineeringSpecific = Boolean(promptEngineeringSpecific);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
