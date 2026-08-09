export class KeyLifecycleRecord {
  constructor({
    keyName,
    keyType,
    purpose,
    owner,
    lifecycleStages = [],
    separatedPurposes = [],
    governanceActivities = [],
    destroyPreventsRecovery = true,
    archivalExplicitlyRequired = false,
    reusedAcrossPurposes = false,
    auditable = true,
    vendorSpecific = false
  }) {
    this.keyName = keyName;
    this.keyType = keyType;
    this.purpose = purpose;
    this.owner = owner;
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.separatedPurposes = Object.freeze([...separatedPurposes]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.destroyPreventsRecovery = Boolean(destroyPreventsRecovery);
    this.archivalExplicitlyRequired = Boolean(archivalExplicitlyRequired);
    this.reusedAcrossPurposes = Boolean(reusedAcrossPurposes);
    this.auditable = Boolean(auditable);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
