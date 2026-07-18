export class IdentityCategory {
  constructor({
    categoryName,
    examples = [],
    operationalRequirement,
    uniquelyIdentifiable = true,
    independentlyManaged = true,
    authenticatesIndependently = true,
    usesSharedUserCredentials = false,
    trustsNetworkLocation = false,
    vendorSpecific = false
  }) {
    this.categoryName = categoryName;
    this.examples = Object.freeze([...examples]);
    this.operationalRequirement = operationalRequirement;
    this.uniquelyIdentifiable = Boolean(uniquelyIdentifiable);
    this.independentlyManaged = Boolean(independentlyManaged);
    this.authenticatesIndependently = Boolean(authenticatesIndependently);
    this.usesSharedUserCredentials = Boolean(usesSharedUserCredentials);
    this.trustsNetworkLocation = Boolean(trustsNetworkLocation);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
