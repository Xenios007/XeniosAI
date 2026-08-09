export class DeploymentUnit {
  constructor({
    unitName,
    serviceName,
    ownsRuntimeProcess = true,
    ownsConfiguration = true,
    ownsScalingPolicy = true,
    ownsLifecycle = true,
    ownsHealth = true,
    ownsOperationalMetrics = true,
    sharesInternalRuntimeState = false,
    coordinatedDeploymentRequired = false,
    altersBusinessOwnership = false,
    vendorSpecific = false
  }) {
    this.unitName = unitName;
    this.serviceName = serviceName;
    this.ownsRuntimeProcess = Boolean(ownsRuntimeProcess);
    this.ownsConfiguration = Boolean(ownsConfiguration);
    this.ownsScalingPolicy = Boolean(ownsScalingPolicy);
    this.ownsLifecycle = Boolean(ownsLifecycle);
    this.ownsHealth = Boolean(ownsHealth);
    this.ownsOperationalMetrics = Boolean(ownsOperationalMetrics);
    this.sharesInternalRuntimeState = Boolean(sharesInternalRuntimeState);
    this.coordinatedDeploymentRequired = Boolean(coordinatedDeploymentRequired);
    this.altersBusinessOwnership = Boolean(altersBusinessOwnership);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
