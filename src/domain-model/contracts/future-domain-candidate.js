export class FutureDomainCandidate {
  constructor({
    domainName,
    responsibilities = [],
    potentialEntities = [],
    businessCapability,
    expansionReason,
    consumesDomainEvents = true,
    ownsOperationalBusinessData = true,
    modifiesForeignBusinessState = false,
    aiOwnsBusinessPolicy = false,
    technologyDriven = false,
    implemented = false
  }) {
    this.domainName = domainName;
    this.responsibilities = Object.freeze([...responsibilities]);
    this.potentialEntities = Object.freeze([...potentialEntities]);
    this.businessCapability = businessCapability;
    this.expansionReason = expansionReason;
    this.consumesDomainEvents = Boolean(consumesDomainEvents);
    this.ownsOperationalBusinessData = Boolean(ownsOperationalBusinessData);
    this.modifiesForeignBusinessState = Boolean(modifiesForeignBusinessState);
    this.aiOwnsBusinessPolicy = Boolean(aiOwnsBusinessPolicy);
    this.technologyDriven = Boolean(technologyDriven);
    this.implemented = Boolean(implemented);

    Object.freeze(this);
  }
}
