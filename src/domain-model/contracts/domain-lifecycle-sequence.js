export class DomainLifecycleSequence {
  constructor({ steps = [], rulesBeforeTransition = true, aggregateBeforeTransition = true, eventAfterCommit = true }) {
    this.steps = Object.freeze([...steps]);
    this.rulesBeforeTransition = Boolean(rulesBeforeTransition);
    this.aggregateBeforeTransition = Boolean(aggregateBeforeTransition);
    this.eventAfterCommit = Boolean(eventAfterCommit);

    Object.freeze(this);
  }
}
