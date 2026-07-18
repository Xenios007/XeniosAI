export class DeploymentEnvironment {
  constructor({
    environmentName,
    isolated = true,
    behaviorConsistent = true,
    operationallySeparate = true,
    supportsRepeatableDeployment = true,
    vendorSpecific = false
  }) {
    this.environmentName = environmentName;
    this.isolated = Boolean(isolated);
    this.behaviorConsistent = Boolean(behaviorConsistent);
    this.operationallySeparate = Boolean(operationallySeparate);
    this.supportsRepeatableDeployment = Boolean(supportsRepeatableDeployment);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
