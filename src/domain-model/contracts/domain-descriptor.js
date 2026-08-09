export class DomainDescriptor {
  constructor({
    domainName,
    ownerService,
    terminology = [],
    responsibilities = [],
    businessIdentities = [],
    stateNames = []
  }) {
    this.domainName = domainName;
    this.ownerService = ownerService;
    this.terminology = Object.freeze([...terminology]);
    this.responsibilities = Object.freeze([...responsibilities]);
    this.businessIdentities = Object.freeze([...businessIdentities]);
    this.stateNames = Object.freeze([...stateNames]);

    Object.freeze(this);
  }
}
