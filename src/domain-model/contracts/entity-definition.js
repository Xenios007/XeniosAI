export class EntityDefinition {
  constructor({
    entityName,
    owningContext,
    ownerService,
    identityName,
    responsibilities = [],
    behaviors = [],
    lifecycleStates = [],
    invariants = [],
    references = [],
    future = false
  }) {
    this.entityName = entityName;
    this.owningContext = owningContext;
    this.ownerService = ownerService;
    this.identityName = identityName;
    this.responsibilities = Object.freeze([...responsibilities]);
    this.behaviors = Object.freeze([...behaviors]);
    this.lifecycleStates = Object.freeze([...lifecycleStates]);
    this.invariants = Object.freeze([...invariants]);
    this.references = Object.freeze([...references]);
    this.future = Boolean(future);

    Object.freeze(this);
  }
}
