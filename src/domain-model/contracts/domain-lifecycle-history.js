export class DomainLifecycleHistory {
  constructor({
    lifecycleName,
    aggregateId,
    states = [],
    events = [],
    preservesHistory = true,
    rewritesHistory = false
  }) {
    this.lifecycleName = lifecycleName;
    this.aggregateId = aggregateId;
    this.states = Object.freeze([...states]);
    this.events = Object.freeze([...events]);
    this.preservesHistory = Boolean(preservesHistory);
    this.rewritesHistory = Boolean(rewritesHistory);

    Object.freeze(this);
  }
}
