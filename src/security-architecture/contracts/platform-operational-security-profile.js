export class PlatformOperationalSecurityProfile {
  constructor({
    platformArea,
    infrastructureAreas = [],
    hardeningPractices = [],
    configurationControls = [],
    administrativeControls = [],
    observabilityEvents = [],
    containmentActions = [],
    governanceActivities = [],
    zeroTrustInfrastructure = true,
    attackSurfaceMinimized = true,
    configurationProtected = true,
    administrativeAccessIndependent = true,
    containmentMinimizesDisruption = true,
    continuouslyMonitored = true,
    vendorSpecific = false
  }) {
    this.platformArea = platformArea;
    this.infrastructureAreas = Object.freeze([...infrastructureAreas]);
    this.hardeningPractices = Object.freeze([...hardeningPractices]);
    this.configurationControls = Object.freeze([...configurationControls]);
    this.administrativeControls = Object.freeze([...administrativeControls]);
    this.observabilityEvents = Object.freeze([...observabilityEvents]);
    this.containmentActions = Object.freeze([...containmentActions]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.zeroTrustInfrastructure = Boolean(zeroTrustInfrastructure);
    this.attackSurfaceMinimized = Boolean(attackSurfaceMinimized);
    this.configurationProtected = Boolean(configurationProtected);
    this.administrativeAccessIndependent = Boolean(administrativeAccessIndependent);
    this.containmentMinimizesDisruption = Boolean(containmentMinimizesDisruption);
    this.continuouslyMonitored = Boolean(continuouslyMonitored);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
