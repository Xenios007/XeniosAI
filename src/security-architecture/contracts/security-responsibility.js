export class SecurityResponsibility {
  constructor({
    responsibility,
    primaryOwner,
    clearlyAssigned = true,
    continuouslyReviewed = true,
    changesBusinessResponsibility = false,
    vendorSpecific = false
  }) {
    this.responsibility = responsibility;
    this.primaryOwner = primaryOwner;
    this.clearlyAssigned = Boolean(clearlyAssigned);
    this.continuouslyReviewed = Boolean(continuouslyReviewed);
    this.changesBusinessResponsibility = Boolean(changesBusinessResponsibility);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
