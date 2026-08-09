export class ServiceCatalogEntry {
  constructor({
    serviceName,
    displayName,
    primaryDomain,
    purpose,
    primaryResponsibility,
    owns = [],
    dependsOn = [],
    provides = [],
    consumers = []
  }) {
    this.serviceName = serviceName;
    this.displayName = displayName;
    this.primaryDomain = primaryDomain;
    this.purpose = purpose;
    this.primaryResponsibility = primaryResponsibility;
    this.owns = Object.freeze([...owns]);
    this.dependsOn = Object.freeze([...dependsOn]);
    this.provides = Object.freeze([...provides]);
    this.consumers = Object.freeze([...consumers]);

    Object.freeze(this);
  }
}
