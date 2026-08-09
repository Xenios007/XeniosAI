export class BoundedContext {
  constructor({
    contextName,
    primaryResponsibility,
    ownerService,
    businessCapabilities = [],
    terminology = [],
    ownedConcepts = [],
    lifecycle = [],
    exposesContracts = true,
    sharedOwnership = false,
    duplicatesOtherContextData = false
  }) {
    this.contextName = contextName;
    this.primaryResponsibility = primaryResponsibility;
    this.ownerService = ownerService;
    this.businessCapabilities = Object.freeze([...businessCapabilities]);
    this.terminology = Object.freeze([...terminology]);
    this.ownedConcepts = Object.freeze([...ownedConcepts]);
    this.lifecycle = Object.freeze([...lifecycle]);
    this.exposesContracts = Boolean(exposesContracts);
    this.sharedOwnership = Boolean(sharedOwnership);
    this.duplicatesOtherContextData = Boolean(duplicatesOtherContextData);

    Object.freeze(this);
  }
}
