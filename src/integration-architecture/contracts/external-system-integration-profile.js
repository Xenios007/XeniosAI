export class ExternalSystemIntegrationProfile {
  constructor({
    integrationName,
    category,
    modelStages = [],
    principles = [],
    categoryExamples = [],
    boundaryResponsibilities = [],
    dataExchangePrinciples = [],
    securityControls = [],
    reliabilityConsiderations = [],
    observabilityTelemetry = [],
    governanceActivities = [],
    preservesServiceAutonomy = true,
    governedContracts = true,
    protectsOrganizationalBoundaries = true,
    enterpriseSecurityApplied = true,
    supportsLongTermEvolution = true,
    approvedBusinessCapabilityOnly = true,
    stableIntegrationContract = true,
    externalFailureResilient = true,
    minimizesInformationDisclosure = true,
    internalArchitectureHidden = true,
    vendorNeutral = true,
    technologyNeutral = true,
    vendorSpecific = false,
    cloudProviderSpecific = false,
    middlewareSpecific = false,
    apiSpecific = false,
    protocolSpecific = false,
    implementationTechnologySpecific = false,
    exposesInternalImplementation = false,
    couplesToExternalAvailability = false
  }) {
    this.integrationName = integrationName;
    this.category = category;
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.categoryExamples = Object.freeze([...categoryExamples]);
    this.boundaryResponsibilities = Object.freeze([...boundaryResponsibilities]);
    this.dataExchangePrinciples = Object.freeze([...dataExchangePrinciples]);
    this.securityControls = Object.freeze([...securityControls]);
    this.reliabilityConsiderations = Object.freeze([...reliabilityConsiderations]);
    this.observabilityTelemetry = Object.freeze([...observabilityTelemetry]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.preservesServiceAutonomy = Boolean(preservesServiceAutonomy);
    this.governedContracts = Boolean(governedContracts);
    this.protectsOrganizationalBoundaries = Boolean(protectsOrganizationalBoundaries);
    this.enterpriseSecurityApplied = Boolean(enterpriseSecurityApplied);
    this.supportsLongTermEvolution = Boolean(supportsLongTermEvolution);
    this.approvedBusinessCapabilityOnly = Boolean(approvedBusinessCapabilityOnly);
    this.stableIntegrationContract = Boolean(stableIntegrationContract);
    this.externalFailureResilient = Boolean(externalFailureResilient);
    this.minimizesInformationDisclosure = Boolean(minimizesInformationDisclosure);
    this.internalArchitectureHidden = Boolean(internalArchitectureHidden);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.vendorSpecific = Boolean(vendorSpecific);
    this.cloudProviderSpecific = Boolean(cloudProviderSpecific);
    this.middlewareSpecific = Boolean(middlewareSpecific);
    this.apiSpecific = Boolean(apiSpecific);
    this.protocolSpecific = Boolean(protocolSpecific);
    this.implementationTechnologySpecific = Boolean(implementationTechnologySpecific);
    this.exposesInternalImplementation = Boolean(exposesInternalImplementation);
    this.couplesToExternalAvailability = Boolean(couplesToExternalAvailability);

    Object.freeze(this);
  }
}
