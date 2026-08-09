export class ObservabilityResponsibility {
  constructor({
    responsibility,
    primaryOwner,
    clearlyAssigned = true,
    supportsEnterpriseConsistency = true,
    evidenceAccountable = true,
    vendorSpecific = false
  }) {
    this.responsibility = responsibility;
    this.primaryOwner = primaryOwner;
    this.clearlyAssigned = Boolean(clearlyAssigned);
    this.supportsEnterpriseConsistency = Boolean(supportsEnterpriseConsistency);
    this.evidenceAccountable = Boolean(evidenceAccountable);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
