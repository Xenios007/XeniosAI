export class IntegrationPrincipleProfile {
  constructor({
    principleName,
    supportFactors = [],
    qualityAttributes = [],
    appliesAcrossEnterprise = true,
    stableAcrossTechnologyChange = true,
    businessAligned = true,
    preservesServiceAutonomy = true,
    improvesConsistency = true,
    implementationConstraint = false,
    protocolSpecific = false,
    vendorSpecific = false
  }) {
    this.principleName = principleName;
    this.supportFactors = Object.freeze([...supportFactors]);
    this.qualityAttributes = Object.freeze([...qualityAttributes]);
    this.appliesAcrossEnterprise = Boolean(appliesAcrossEnterprise);
    this.stableAcrossTechnologyChange = Boolean(stableAcrossTechnologyChange);
    this.businessAligned = Boolean(businessAligned);
    this.preservesServiceAutonomy = Boolean(preservesServiceAutonomy);
    this.improvesConsistency = Boolean(improvesConsistency);
    this.implementationConstraint = Boolean(implementationConstraint);
    this.protocolSpecific = Boolean(protocolSpecific);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
