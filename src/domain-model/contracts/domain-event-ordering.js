export class DomainEventOrdering {
  constructor({
    aggregateName,
    orderedEvents = [],
    assumesGlobalOrdering = false,
    preservesAggregateOrder = true
  }) {
    this.aggregateName = aggregateName;
    this.orderedEvents = Object.freeze([...orderedEvents]);
    this.assumesGlobalOrdering = Boolean(assumesGlobalOrdering);
    this.preservesAggregateOrder = Boolean(preservesAggregateOrder);

    Object.freeze(this);
  }
}
