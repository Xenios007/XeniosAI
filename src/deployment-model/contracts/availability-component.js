export class AvailabilityComponent {
  constructor({
    componentName,
    redundancyTarget,
    businessCapability,
    critical = true,
    redundantInstances = true,
    independentlyRecoverable = true,
    statelessExecution = true,
    healthMonitored = true,
    automaticRecovery = true,
    loadDistributed = true,
    singlePointOfFailure = false,
    platformSpecific = false
  }) {
    this.componentName = componentName;
    this.redundancyTarget = redundancyTarget;
    this.businessCapability = businessCapability;
    this.critical = Boolean(critical);
    this.redundantInstances = Boolean(redundantInstances);
    this.independentlyRecoverable = Boolean(independentlyRecoverable);
    this.statelessExecution = Boolean(statelessExecution);
    this.healthMonitored = Boolean(healthMonitored);
    this.automaticRecovery = Boolean(automaticRecovery);
    this.loadDistributed = Boolean(loadDistributed);
    this.singlePointOfFailure = Boolean(singlePointOfFailure);
    this.platformSpecific = Boolean(platformSpecific);

    Object.freeze(this);
  }
}
