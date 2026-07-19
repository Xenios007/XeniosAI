export class ObservabilityDomain {
  constructor({
    domainName,
    responsibility,
    visibleElements = [],
    supportsBusinessContext = true,
    supportsEndToEndVisibility = true,
    emitsContinuousEvidence = true,
    vendorSpecific = false
  }) {
    this.domainName = domainName;
    this.responsibility = responsibility;
    this.visibleElements = Object.freeze([...visibleElements]);
    this.supportsBusinessContext = Boolean(supportsBusinessContext);
    this.supportsEndToEndVisibility = Boolean(supportsEndToEndVisibility);
    this.emitsContinuousEvidence = Boolean(emitsContinuousEvidence);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
