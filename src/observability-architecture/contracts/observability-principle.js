export class ObservabilityPrinciple {
  constructor({
    principleName,
    responsibility,
    requiredCapabilities = [],
    businessAligned = true,
    supportsCorrelation = true,
    supportsExplainability = true,
    supportsGovernance = true,
    preservesSecurityAndPrivacy = true,
    minimallyCoupled = true,
    vendorSpecific = false
  }) {
    this.principleName = principleName;
    this.responsibility = responsibility;
    this.requiredCapabilities = Object.freeze([...requiredCapabilities]);
    this.businessAligned = Boolean(businessAligned);
    this.supportsCorrelation = Boolean(supportsCorrelation);
    this.supportsExplainability = Boolean(supportsExplainability);
    this.supportsGovernance = Boolean(supportsGovernance);
    this.preservesSecurityAndPrivacy = Boolean(preservesSecurityAndPrivacy);
    this.minimallyCoupled = Boolean(minimallyCoupled);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
