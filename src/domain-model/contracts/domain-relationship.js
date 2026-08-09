export class DomainRelationship {
  constructor({ sourceDomain, targetDomain, relationshipType, description, transfersOwnership = false }) {
    this.sourceDomain = sourceDomain;
    this.targetDomain = targetDomain;
    this.relationshipType = relationshipType;
    this.description = description;
    this.transfersOwnership = Boolean(transfersOwnership);

    Object.freeze(this);
  }
}
