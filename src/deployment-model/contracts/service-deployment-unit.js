export class ServiceDeploymentUnit {
  constructor({
    serviceName,
    businessCapability,
    deploymentBoundary,
    ownership = [],
    independentlyDeployable = true,
    sharesDeploymentLifecycle = false,
    requiresPlatformWideDowntime = false,
    requiresCoordinatedRelease = false,
    requiresGlobalConfigurationChange = false,
    crossesBusinessOwnership = false,
    altersBusinessBehavior = false,
    platformSpecific = false
  }) {
    this.serviceName = serviceName;
    this.businessCapability = businessCapability;
    this.deploymentBoundary = deploymentBoundary;
    this.ownership = Object.freeze([...ownership]);
    this.independentlyDeployable = Boolean(independentlyDeployable);
    this.sharesDeploymentLifecycle = Boolean(sharesDeploymentLifecycle);
    this.requiresPlatformWideDowntime = Boolean(requiresPlatformWideDowntime);
    this.requiresCoordinatedRelease = Boolean(requiresCoordinatedRelease);
    this.requiresGlobalConfigurationChange = Boolean(requiresGlobalConfigurationChange);
    this.crossesBusinessOwnership = Boolean(crossesBusinessOwnership);
    this.altersBusinessBehavior = Boolean(altersBusinessBehavior);
    this.platformSpecific = Boolean(platformSpecific);

    Object.freeze(this);
  }
}
