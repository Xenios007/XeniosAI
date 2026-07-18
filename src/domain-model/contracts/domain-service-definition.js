export class DomainServiceDefinition {
  constructor({
    serviceName,
    owningContext,
    ownerService,
    responsibilities = [],
    businessOperations = [],
    businessRules = [],
    collaborators = [],
    valueObjects = [],
    stateless = true,
    ownsBusinessState = false,
    applicationService = false,
    infrastructureConcern = false,
    bypassesAggregateRoot = false
  }) {
    this.serviceName = serviceName;
    this.owningContext = owningContext;
    this.ownerService = ownerService;
    this.responsibilities = Object.freeze([...responsibilities]);
    this.businessOperations = Object.freeze([...businessOperations]);
    this.businessRules = Object.freeze([...businessRules]);
    this.collaborators = Object.freeze([...collaborators]);
    this.valueObjects = Object.freeze([...valueObjects]);
    this.stateless = Boolean(stateless);
    this.ownsBusinessState = Boolean(ownsBusinessState);
    this.applicationService = Boolean(applicationService);
    this.infrastructureConcern = Boolean(infrastructureConcern);
    this.bypassesAggregateRoot = Boolean(bypassesAggregateRoot);

    Object.freeze(this);
  }
}
