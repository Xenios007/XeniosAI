export class FutureAiCapabilityCandidate {
  constructor({
    capabilityId,
    displayName,
    domain,
    potentialEnhancements = [],
    maturityStage,
    implementationCommitted = false,
    notes = undefined
  }) {
    this.capabilityId = capabilityId;
    this.displayName = displayName;
    this.domain = domain;
    this.potentialEnhancements = Object.freeze([...potentialEnhancements]);
    this.maturityStage = maturityStage;
    this.implementationCommitted = Boolean(implementationCommitted);
    this.notes = notes;

    Object.freeze(this);
  }
}
