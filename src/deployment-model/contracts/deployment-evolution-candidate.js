export class DeploymentEvolutionCandidate {
  constructor({
    capabilityName,
    evolutionArea,
    businessBenefit,
    preservesBusinessOwnership = true,
    preservesDomainBoundaries = true,
    preservesServiceResponsibilities = true,
    preservesDataOwnership = true,
    preservesPlatformPrinciples = true,
    incrementalModernization = true,
    backwardCompatible = true,
    reducesOperationalComplexity = true,
    improvesAutomation = true,
    strengthensResilience = true,
    avoidsVendorLockIn = true,
    implementationTimelinePrescribed = false
  }) {
    this.capabilityName = capabilityName;
    this.evolutionArea = evolutionArea;
    this.businessBenefit = businessBenefit;
    this.preservesBusinessOwnership = Boolean(preservesBusinessOwnership);
    this.preservesDomainBoundaries = Boolean(preservesDomainBoundaries);
    this.preservesServiceResponsibilities = Boolean(preservesServiceResponsibilities);
    this.preservesDataOwnership = Boolean(preservesDataOwnership);
    this.preservesPlatformPrinciples = Boolean(preservesPlatformPrinciples);
    this.incrementalModernization = Boolean(incrementalModernization);
    this.backwardCompatible = Boolean(backwardCompatible);
    this.reducesOperationalComplexity = Boolean(reducesOperationalComplexity);
    this.improvesAutomation = Boolean(improvesAutomation);
    this.strengthensResilience = Boolean(strengthensResilience);
    this.avoidsVendorLockIn = Boolean(avoidsVendorLockIn);
    this.implementationTimelinePrescribed = Boolean(implementationTimelinePrescribed);

    Object.freeze(this);
  }
}
