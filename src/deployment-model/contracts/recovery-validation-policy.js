export class RecoveryValidationPolicy {
  constructor({
    policyName,
    validationActivities = [],
    testingActivities = [],
    governanceControls = [],
    validatesBeforeProduction = true,
    testedRegularly = true,
    businessReadinessRequired = true,
    infrastructureRecoveryAloneSufficient = false,
    platformSpecific = false
  }) {
    this.policyName = policyName;
    this.validationActivities = Object.freeze([...validationActivities]);
    this.testingActivities = Object.freeze([...testingActivities]);
    this.governanceControls = Object.freeze([...governanceControls]);
    this.validatesBeforeProduction = Boolean(validatesBeforeProduction);
    this.testedRegularly = Boolean(testedRegularly);
    this.businessReadinessRequired = Boolean(businessReadinessRequired);
    this.infrastructureRecoveryAloneSufficient = Boolean(infrastructureRecoveryAloneSufficient);
    this.platformSpecific = Boolean(platformSpecific);

    Object.freeze(this);
  }
}
