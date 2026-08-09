export class DomainServiceOperation {
  constructor({
    serviceName,
    operationName,
    owningContext,
    inputs = [],
    businessRules = [],
    modifiesAggregateThroughRoot = true,
    ownsBusinessState = false,
    coordinatesApplicationFlow = false,
    invokesInfrastructure = false,
    bypassesAggregateRoot = false
  }) {
    this.serviceName = serviceName;
    this.operationName = operationName;
    this.owningContext = owningContext;
    this.inputs = Object.freeze([...inputs]);
    this.businessRules = Object.freeze([...businessRules]);
    this.modifiesAggregateThroughRoot = Boolean(modifiesAggregateThroughRoot);
    this.ownsBusinessState = Boolean(ownsBusinessState);
    this.coordinatesApplicationFlow = Boolean(coordinatesApplicationFlow);
    this.invokesInfrastructure = Boolean(invokesInfrastructure);
    this.bypassesAggregateRoot = Boolean(bypassesAggregateRoot);

    Object.freeze(this);
  }
}
