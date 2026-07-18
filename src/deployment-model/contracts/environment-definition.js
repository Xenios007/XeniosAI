export class EnvironmentDefinition {
  constructor({
    environmentName,
    primaryResponsibility,
    characteristics = [],
    dataStrategy,
    allowsMockServices = false,
    productionEquivalent = false,
    liveBusinessOperations = false,
    disasterRecovery = false,
    conflictingResponsibilities = false,
    repurposed = false
  }) {
    this.environmentName = environmentName;
    this.primaryResponsibility = primaryResponsibility;
    this.characteristics = Object.freeze([...characteristics]);
    this.dataStrategy = dataStrategy;
    this.allowsMockServices = Boolean(allowsMockServices);
    this.productionEquivalent = Boolean(productionEquivalent);
    this.liveBusinessOperations = Boolean(liveBusinessOperations);
    this.disasterRecovery = Boolean(disasterRecovery);
    this.conflictingResponsibilities = Boolean(conflictingResponsibilities);
    this.repurposed = Boolean(repurposed);

    Object.freeze(this);
  }
}
