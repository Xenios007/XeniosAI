export class ApiContractProfile {
  constructor({
    apiName,
    category,
    modelStages = [],
    designPrinciples = [],
    categoryCharacteristics = [],
    ownershipResponsibilities = [],
    contractElements = [],
    lifecycleStages = [],
    versioningRequirements = [],
    discoverabilityElements = [],
    securityControls = [],
    reliabilityConsiderations = [],
    qualityAttributes = [],
    governanceActivities = [],
    exposesBusinessCapability = true,
    preservesServiceOwnership = true,
    stableVersionedInterface = true,
    implementationIndependent = true,
    discoverable = true,
    governed = true,
    technologyNeutral = true,
    protocolSpecific = false,
    vendorSpecific = false,
    exposesInternalImplementation = false
  }) {
    this.apiName = apiName;
    this.category = category;
    this.modelStages = Object.freeze([...modelStages]);
    this.designPrinciples = Object.freeze([...designPrinciples]);
    this.categoryCharacteristics = Object.freeze([...categoryCharacteristics]);
    this.ownershipResponsibilities = Object.freeze([...ownershipResponsibilities]);
    this.contractElements = Object.freeze([...contractElements]);
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.versioningRequirements = Object.freeze([...versioningRequirements]);
    this.discoverabilityElements = Object.freeze([...discoverabilityElements]);
    this.securityControls = Object.freeze([...securityControls]);
    this.reliabilityConsiderations = Object.freeze([...reliabilityConsiderations]);
    this.qualityAttributes = Object.freeze([...qualityAttributes]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.exposesBusinessCapability = Boolean(exposesBusinessCapability);
    this.preservesServiceOwnership = Boolean(preservesServiceOwnership);
    this.stableVersionedInterface = Boolean(stableVersionedInterface);
    this.implementationIndependent = Boolean(implementationIndependent);
    this.discoverable = Boolean(discoverable);
    this.governed = Boolean(governed);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.protocolSpecific = Boolean(protocolSpecific);
    this.vendorSpecific = Boolean(vendorSpecific);
    this.exposesInternalImplementation = Boolean(exposesInternalImplementation);

    Object.freeze(this);
  }
}
