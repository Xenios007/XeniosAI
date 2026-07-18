export class QueryDefinition {
  constructor({
    queryName,
    owningService,
    requiredParameters = [],
    dataSources = [],
    optimizationStrategies = [],
    aggregated = false,
    readOnly = true
  }) {
    this.queryName = queryName;
    this.owningService = owningService;
    this.requiredParameters = Object.freeze([...requiredParameters]);
    this.dataSources = Object.freeze([...dataSources]);
    this.optimizationStrategies = Object.freeze([...optimizationStrategies]);
    this.aggregated = Boolean(aggregated);
    this.readOnly = Boolean(readOnly);

    Object.freeze(this);
  }
}
