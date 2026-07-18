export class EntityReference {
  constructor({
    sourceEntity,
    targetEntity,
    referenceName,
    targetIdentityName,
    embeddedForeignObject = false,
    transfersOwnership = false
  }) {
    this.sourceEntity = sourceEntity;
    this.targetEntity = targetEntity;
    this.referenceName = referenceName;
    this.targetIdentityName = targetIdentityName;
    this.embeddedForeignObject = Boolean(embeddedForeignObject);
    this.transfersOwnership = Boolean(transfersOwnership);

    Object.freeze(this);
  }
}
