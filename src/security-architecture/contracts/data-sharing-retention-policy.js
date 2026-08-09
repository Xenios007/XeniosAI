export class DataSharingRetentionPolicy {
  constructor({
    policyName,
    informationAsset,
    recipientIdentity,
    businessPurpose,
    sharingFactors = [],
    retentionJustifications = [],
    disposalTargets = [],
    explicitlyAuthorized = true,
    followsBusinessPolicy = true,
    retentionLimited = true,
    disposalPreventsRecovery = true,
    appliesConsistently = true,
    auditable = true,
    bypassesAuthorization = false,
    indefiniteRetention = false,
    vendorSpecific = false
  }) {
    this.policyName = policyName;
    this.informationAsset = informationAsset;
    this.recipientIdentity = recipientIdentity;
    this.businessPurpose = businessPurpose;
    this.sharingFactors = Object.freeze([...sharingFactors]);
    this.retentionJustifications = Object.freeze([...retentionJustifications]);
    this.disposalTargets = Object.freeze([...disposalTargets]);
    this.explicitlyAuthorized = Boolean(explicitlyAuthorized);
    this.followsBusinessPolicy = Boolean(followsBusinessPolicy);
    this.retentionLimited = Boolean(retentionLimited);
    this.disposalPreventsRecovery = Boolean(disposalPreventsRecovery);
    this.appliesConsistently = Boolean(appliesConsistently);
    this.auditable = Boolean(auditable);
    this.bypassesAuthorization = Boolean(bypassesAuthorization);
    this.indefiniteRetention = Boolean(indefiniteRetention);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
