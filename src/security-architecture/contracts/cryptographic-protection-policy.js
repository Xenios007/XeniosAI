export class CryptographicProtectionPolicy {
  constructor({
    policyName,
    informationAsset,
    classification,
    encryptionCoverage = [],
    dataAtRestLocations = [],
    dataInTransitChannels = [],
    integrityTargets = [],
    authenticityTargets = [],
    signatureCapabilities = [],
    riskAlignedEncryption = true,
    protectsAtRest = true,
    protectsInTransit = true,
    preservesIntegrity = true,
    verifiesAuthenticity = true,
    supportsNonRepudiation = true,
    secureAcrossTrustBoundaries = true,
    auditable = true,
    algorithmSpecific = false,
    vendorSpecific = false
  }) {
    this.policyName = policyName;
    this.informationAsset = informationAsset;
    this.classification = classification;
    this.encryptionCoverage = Object.freeze([...encryptionCoverage]);
    this.dataAtRestLocations = Object.freeze([...dataAtRestLocations]);
    this.dataInTransitChannels = Object.freeze([...dataInTransitChannels]);
    this.integrityTargets = Object.freeze([...integrityTargets]);
    this.authenticityTargets = Object.freeze([...authenticityTargets]);
    this.signatureCapabilities = Object.freeze([...signatureCapabilities]);
    this.riskAlignedEncryption = Boolean(riskAlignedEncryption);
    this.protectsAtRest = Boolean(protectsAtRest);
    this.protectsInTransit = Boolean(protectsInTransit);
    this.preservesIntegrity = Boolean(preservesIntegrity);
    this.verifiesAuthenticity = Boolean(verifiesAuthenticity);
    this.supportsNonRepudiation = Boolean(supportsNonRepudiation);
    this.secureAcrossTrustBoundaries = Boolean(secureAcrossTrustBoundaries);
    this.auditable = Boolean(auditable);
    this.algorithmSpecific = Boolean(algorithmSpecific);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
