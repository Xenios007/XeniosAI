export class DisasterClassification {
  constructor({
    classificationType,
    examples = [],
    impactScope,
    proportionalRecovery = true,
    exceedsHighAvailability = true,
    businessImpactAssessed = true,
    platformSpecific = false
  }) {
    this.classificationType = classificationType;
    this.examples = Object.freeze([...examples]);
    this.impactScope = impactScope;
    this.proportionalRecovery = Boolean(proportionalRecovery);
    this.exceedsHighAvailability = Boolean(exceedsHighAvailability);
    this.businessImpactAssessed = Boolean(businessImpactAssessed);
    this.platformSpecific = Boolean(platformSpecific);

    Object.freeze(this);
  }
}
