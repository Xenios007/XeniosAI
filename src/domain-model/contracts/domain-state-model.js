export class DomainStateModel {
  constructor({ domainName, ownerService, entityName, states = [] }) {
    this.domainName = domainName;
    this.ownerService = ownerService;
    this.entityName = entityName;
    this.states = Object.freeze([...states]);

    Object.freeze(this);
  }
}
