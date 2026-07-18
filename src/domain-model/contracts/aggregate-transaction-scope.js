export class AggregateTransactionScope {
  constructor({
    transactionName,
    aggregateName,
    modifiedAggregates = [],
    modifiedThroughRoot = true,
    invariantsPreserved = true,
    crossAggregateCoordination = [],
    sharedTransaction = false
  }) {
    this.transactionName = transactionName;
    this.aggregateName = aggregateName;
    this.modifiedAggregates = Object.freeze([...modifiedAggregates]);
    this.modifiedThroughRoot = Boolean(modifiedThroughRoot);
    this.invariantsPreserved = Boolean(invariantsPreserved);
    this.crossAggregateCoordination = Object.freeze([...crossAggregateCoordination]);
    this.sharedTransaction = Boolean(sharedTransaction);

    Object.freeze(this);
  }
}
