export class AggregateReference {
  constructor({
    sourceAggregate,
    targetAggregate,
    referenceName,
    targetIdentity,
    containsTargetRoot = false,
    transfersOwnership = false,
    directObjectReference = false
  }) {
    this.sourceAggregate = sourceAggregate;
    this.targetAggregate = targetAggregate;
    this.referenceName = referenceName;
    this.targetIdentity = targetIdentity;
    this.containsTargetRoot = Boolean(containsTargetRoot);
    this.transfersOwnership = Boolean(transfersOwnership);
    this.directObjectReference = Boolean(directObjectReference);

    Object.freeze(this);
  }
}
