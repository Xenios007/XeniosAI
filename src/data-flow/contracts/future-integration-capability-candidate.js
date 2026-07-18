export class FutureIntegrationCapabilityCandidate {
  constructor({
    capabilityId,
    displayName,
    area,
    potentialEnhancements = [],
    maturityStage,
    implementationCommitted = false
  }) {
    this.capabilityId = capabilityId;
    this.displayName = displayName;
    this.area = area;
    this.potentialEnhancements = Object.freeze([...potentialEnhancements]);
    this.maturityStage = maturityStage;
    this.implementationCommitted = Boolean(implementationCommitted);

    Object.freeze(this);
  }
}
