export class ServiceReleasePolicy {
  constructor({
    serviceName,
    versionMetadata = [],
    compatibilityApproaches = [],
    deploymentStrategies = [],
    controlledUpgrade = true,
    fastRollback = true,
    minimalDowntime = true,
    breakingChangeMigrationPath = true,
    dependenciesExplicit = true,
    stableDependencyInterfaces = true,
    platformSpecific = false
  }) {
    this.serviceName = serviceName;
    this.versionMetadata = Object.freeze([...versionMetadata]);
    this.compatibilityApproaches = Object.freeze([...compatibilityApproaches]);
    this.deploymentStrategies = Object.freeze([...deploymentStrategies]);
    this.controlledUpgrade = Boolean(controlledUpgrade);
    this.fastRollback = Boolean(fastRollback);
    this.minimalDowntime = Boolean(minimalDowntime);
    this.breakingChangeMigrationPath = Boolean(breakingChangeMigrationPath);
    this.dependenciesExplicit = Boolean(dependenciesExplicit);
    this.stableDependencyInterfaces = Boolean(stableDependencyInterfaces);
    this.platformSpecific = Boolean(platformSpecific);

    Object.freeze(this);
  }
}
