export class AggregateInvariantCheck {
  constructor({
    aggregateName,
    invariant,
    aggregateRoot,
    checkedByRoot = true,
    preserved = true
  }) {
    this.aggregateName = aggregateName;
    this.invariant = invariant;
    this.aggregateRoot = aggregateRoot;
    this.checkedByRoot = Boolean(checkedByRoot);
    this.preserved = Boolean(preserved);

    Object.freeze(this);
  }
}
