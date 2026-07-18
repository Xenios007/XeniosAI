export class RuntimeComponent {
  constructor({
    componentName,
    runtimeLayer,
    operationalResponsibility,
    serviceOwner,
    stateless = true,
    ownsProcessLifecycle = true,
    ownsResourceAllocation = true,
    ownsRuntimeConfiguration = true,
    ownsHealthReporting = true,
    ownsScalingPolicy = true,
    altersBusinessBehavior = false,
    vendorSpecific = false
  }) {
    this.componentName = componentName;
    this.runtimeLayer = runtimeLayer;
    this.operationalResponsibility = operationalResponsibility;
    this.serviceOwner = serviceOwner;
    this.stateless = Boolean(stateless);
    this.ownsProcessLifecycle = Boolean(ownsProcessLifecycle);
    this.ownsResourceAllocation = Boolean(ownsResourceAllocation);
    this.ownsRuntimeConfiguration = Boolean(ownsRuntimeConfiguration);
    this.ownsHealthReporting = Boolean(ownsHealthReporting);
    this.ownsScalingPolicy = Boolean(ownsScalingPolicy);
    this.altersBusinessBehavior = Boolean(altersBusinessBehavior);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
