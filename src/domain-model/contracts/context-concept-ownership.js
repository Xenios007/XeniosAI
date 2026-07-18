export class ContextConceptOwnership {
  constructor({ conceptName, contextName, ownerService }) {
    this.conceptName = conceptName;
    this.contextName = contextName;
    this.ownerService = ownerService;

    Object.freeze(this);
  }
}
