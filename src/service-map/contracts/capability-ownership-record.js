export class CapabilityOwnershipRecord {
  constructor({
    capability,
    ownerServiceName,
    responsibilities = [],
    dataOwnership = []
  }) {
    this.capability = capability;
    this.ownerServiceName = ownerServiceName;
    this.responsibilities = Object.freeze([...responsibilities]);
    this.dataOwnership = Object.freeze([...dataOwnership]);

    Object.freeze(this);
  }
}
