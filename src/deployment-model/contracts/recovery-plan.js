export class RecoveryPlan {
  constructor({
    planName,
    recoveryModel,
    priorityOrder = [],
    architectureCapabilities = [],
    backupPrinciples = [],
    replicationObjectives = [],
    infrastructureAreas = [],
    applicationAreas = [],
    dataAreas = [],
    rtoDefinedByGovernance = true,
    rpoDefinedByGovernance = true,
    geographicallyIndependent = true,
    backupsIsolatedFromOperations = true,
    repeatableRecovery = true,
    authoritativeDataFirst = true,
    platformSpecific = false
  }) {
    this.planName = planName;
    this.recoveryModel = recoveryModel;
    this.priorityOrder = Object.freeze([...priorityOrder]);
    this.architectureCapabilities = Object.freeze([...architectureCapabilities]);
    this.backupPrinciples = Object.freeze([...backupPrinciples]);
    this.replicationObjectives = Object.freeze([...replicationObjectives]);
    this.infrastructureAreas = Object.freeze([...infrastructureAreas]);
    this.applicationAreas = Object.freeze([...applicationAreas]);
    this.dataAreas = Object.freeze([...dataAreas]);
    this.rtoDefinedByGovernance = Boolean(rtoDefinedByGovernance);
    this.rpoDefinedByGovernance = Boolean(rpoDefinedByGovernance);
    this.geographicallyIndependent = Boolean(geographicallyIndependent);
    this.backupsIsolatedFromOperations = Boolean(backupsIsolatedFromOperations);
    this.repeatableRecovery = Boolean(repeatableRecovery);
    this.authoritativeDataFirst = Boolean(authoritativeDataFirst);
    this.platformSpecific = Boolean(platformSpecific);

    Object.freeze(this);
  }
}
