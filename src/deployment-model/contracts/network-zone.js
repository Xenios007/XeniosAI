export class NetworkZone {
  constructor({
    zoneName,
    primaryResponsibility,
    responsibilities = [],
    acceptsUnrestrictedPublicTraffic = false,
    exposesInternalTopology = false,
    hostsPersistentStorage = false,
    infrastructureSpecific = false
  }) {
    this.zoneName = zoneName;
    this.primaryResponsibility = primaryResponsibility;
    this.responsibilities = Object.freeze([...responsibilities]);
    this.acceptsUnrestrictedPublicTraffic = Boolean(acceptsUnrestrictedPublicTraffic);
    this.exposesInternalTopology = Boolean(exposesInternalTopology);
    this.hostsPersistentStorage = Boolean(hostsPersistentStorage);
    this.infrastructureSpecific = Boolean(infrastructureSpecific);

    Object.freeze(this);
  }
}
