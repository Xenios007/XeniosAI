export class DependencyArtifactGovernancePolicy {
  constructor({
    policyName,
    dependencyComponents = [],
    dependencyRequirements = [],
    sbomComponents = [],
    artifactTypes = [],
    thirdPartyServices = [],
    aiSupplyChainComponents = [],
    dependenciesGoverned = true,
    componentInventoryMaintained = true,
    artifactsVerifiedBeforeDeployment = true,
    externalProvidersEvaluated = true,
    trustRelationshipsExplicit = true,
    unmanagedDependenciesAllowed = false,
    vendorSpecific = false
  }) {
    this.policyName = policyName;
    this.dependencyComponents = Object.freeze([...dependencyComponents]);
    this.dependencyRequirements = Object.freeze([...dependencyRequirements]);
    this.sbomComponents = Object.freeze([...sbomComponents]);
    this.artifactTypes = Object.freeze([...artifactTypes]);
    this.thirdPartyServices = Object.freeze([...thirdPartyServices]);
    this.aiSupplyChainComponents = Object.freeze([...aiSupplyChainComponents]);
    this.dependenciesGoverned = Boolean(dependenciesGoverned);
    this.componentInventoryMaintained = Boolean(componentInventoryMaintained);
    this.artifactsVerifiedBeforeDeployment = Boolean(artifactsVerifiedBeforeDeployment);
    this.externalProvidersEvaluated = Boolean(externalProvidersEvaluated);
    this.trustRelationshipsExplicit = Boolean(trustRelationshipsExplicit);
    this.unmanagedDependenciesAllowed = Boolean(unmanagedDependenciesAllowed);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
