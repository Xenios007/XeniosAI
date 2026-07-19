export class IntegrationDomainProfile {
  constructor({
    domainName,
    communicationModels = [],
    participantTypes = [],
    qualityAttributes = [],
    supportsDistinctCommunicationStyle = true,
    governedByCommonPrinciples = true,
    independentlyGoverned = true,
    vendorSpecific = false
  }) {
    this.domainName = domainName;
    this.communicationModels = Object.freeze([...communicationModels]);
    this.participantTypes = Object.freeze([...participantTypes]);
    this.qualityAttributes = Object.freeze([...qualityAttributes]);
    this.supportsDistinctCommunicationStyle = Boolean(supportsDistinctCommunicationStyle);
    this.governedByCommonPrinciples = Boolean(governedByCommonPrinciples);
    this.independentlyGoverned = Boolean(independentlyGoverned);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
