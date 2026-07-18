export class DeploymentBoundary {
  constructor({
    unitName,
    serviceBoundaryAligned = true,
    ownsRuntimeLifecycle = true,
    ownsOperationalConfiguration = true,
    ownsResourceAllocation = true,
    ownsDeploymentCadence = true,
    violatesBusinessOwnership = false,
    introducesInfrastructureCoupling = false
  }) {
    this.unitName = unitName;
    this.serviceBoundaryAligned = Boolean(serviceBoundaryAligned);
    this.ownsRuntimeLifecycle = Boolean(ownsRuntimeLifecycle);
    this.ownsOperationalConfiguration = Boolean(ownsOperationalConfiguration);
    this.ownsResourceAllocation = Boolean(ownsResourceAllocation);
    this.ownsDeploymentCadence = Boolean(ownsDeploymentCadence);
    this.violatesBusinessOwnership = Boolean(violatesBusinessOwnership);
    this.introducesInfrastructureCoupling = Boolean(introducesInfrastructureCoupling);

    Object.freeze(this);
  }
}
