export class AggregateDefinition {
  constructor({
    aggregateName,
    owningContext,
    ownerService,
    aggregateRoot,
    internalEntities = [],
    valueObjects = [],
    businessRules = [],
    invariants = [],
    lifecycleStates = [],
    externalReferences = [],
    sharedOwnership = false,
    containsExternalAggregateRoot = false,
    persistenceModel = false
  }) {
    this.aggregateName = aggregateName;
    this.owningContext = owningContext;
    this.ownerService = ownerService;
    this.aggregateRoot = aggregateRoot;
    this.internalEntities = Object.freeze([...internalEntities]);
    this.valueObjects = Object.freeze([...valueObjects]);
    this.businessRules = Object.freeze([...businessRules]);
    this.invariants = Object.freeze([...invariants]);
    this.lifecycleStates = Object.freeze([...lifecycleStates]);
    this.externalReferences = Object.freeze([...externalReferences]);
    this.sharedOwnership = Boolean(sharedOwnership);
    this.containsExternalAggregateRoot = Boolean(containsExternalAggregateRoot);
    this.persistenceModel = Boolean(persistenceModel);

    Object.freeze(this);
  }
}
