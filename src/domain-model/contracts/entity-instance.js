export class EntityInstance {
  constructor({
    entityName,
    entityId,
    owningContext,
    ownerService,
    businessState,
    attributes = {},
    invariantsPreserved = true,
    identityChanged = false,
    persistenceStructure = false
  }) {
    this.entityName = entityName;
    this.entityId = entityId;
    this.owningContext = owningContext;
    this.ownerService = ownerService;
    this.businessState = businessState;
    this.attributes = Object.freeze({ ...attributes });
    this.invariantsPreserved = Boolean(invariantsPreserved);
    this.identityChanged = Boolean(identityChanged);
    this.persistenceStructure = Boolean(persistenceStructure);

    Object.freeze(this);
  }
}
