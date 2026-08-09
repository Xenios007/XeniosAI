export class DomainCapability {
  constructor({ capabilityName, domainName, ownerService, description }) {
    this.capabilityName = capabilityName;
    this.domainName = domainName;
    this.ownerService = ownerService;
    this.description = description;

    Object.freeze(this);
  }
}
