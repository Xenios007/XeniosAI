export class IntegrationDecisionModel {
  constructor({
    decisionName,
    stages = [],
    contractElements = [],
    avoidedAssumptions = [],
    communicationStyles = [],
    reliabilityCapabilities = [],
    securityControls = [],
    governanceActivities = [],
    ownershipResponsibilities = [],
    businessArchitectureDrivesDecisions = true,
    supportsMultipleCommunicationModels = true,
    asynchronousWhenAppropriate = true,
    reliabilityDesignedUpfront = true,
    observableThroughoutLifecycle = true,
    securityConsistentlyApplied = true,
    compatibilityPreferred = true,
    explicitlyOwned = true,
    technologyDefinesBoundary = false,
    vendorSpecific = false
  }) {
    this.decisionName = decisionName;
    this.stages = Object.freeze([...stages]);
    this.contractElements = Object.freeze([...contractElements]);
    this.avoidedAssumptions = Object.freeze([...avoidedAssumptions]);
    this.communicationStyles = Object.freeze([...communicationStyles]);
    this.reliabilityCapabilities = Object.freeze([...reliabilityCapabilities]);
    this.securityControls = Object.freeze([...securityControls]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.ownershipResponsibilities = Object.freeze([...ownershipResponsibilities]);
    this.businessArchitectureDrivesDecisions = Boolean(businessArchitectureDrivesDecisions);
    this.supportsMultipleCommunicationModels = Boolean(supportsMultipleCommunicationModels);
    this.asynchronousWhenAppropriate = Boolean(asynchronousWhenAppropriate);
    this.reliabilityDesignedUpfront = Boolean(reliabilityDesignedUpfront);
    this.observableThroughoutLifecycle = Boolean(observableThroughoutLifecycle);
    this.securityConsistentlyApplied = Boolean(securityConsistentlyApplied);
    this.compatibilityPreferred = Boolean(compatibilityPreferred);
    this.explicitlyOwned = Boolean(explicitlyOwned);
    this.technologyDefinesBoundary = Boolean(technologyDefinesBoundary);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
