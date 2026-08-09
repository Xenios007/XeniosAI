export class IntegrationContractBoundary {
  constructor({
    boundaryName,
    contractElements = [],
    avoidedAssumptions = [],
    securityRequirements = [],
    boundarySeparations = [],
    connectivityTargets = [],
    lifecycleStages = [],
    governanceFoundations = [],
    explicitContract = true,
    preservesServiceAutonomy = true,
    looselyCoupled = true,
    businessCentric = true,
    technologyNeutral = true,
    supportsMultipleCommunicationStyles = true,
    enablesIndependentEvolution = true,
    preservesInteroperability = true,
    prescribesSingleCommunicationStyle = false,
    vendorSpecific = false
  }) {
    this.boundaryName = boundaryName;
    this.contractElements = Object.freeze([...contractElements]);
    this.avoidedAssumptions = Object.freeze([...avoidedAssumptions]);
    this.securityRequirements = Object.freeze([...securityRequirements]);
    this.boundarySeparations = Object.freeze([...boundarySeparations]);
    this.connectivityTargets = Object.freeze([...connectivityTargets]);
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.governanceFoundations = Object.freeze([...governanceFoundations]);
    this.explicitContract = Boolean(explicitContract);
    this.preservesServiceAutonomy = Boolean(preservesServiceAutonomy);
    this.looselyCoupled = Boolean(looselyCoupled);
    this.businessCentric = Boolean(businessCentric);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.supportsMultipleCommunicationStyles = Boolean(supportsMultipleCommunicationStyles);
    this.enablesIndependentEvolution = Boolean(enablesIndependentEvolution);
    this.preservesInteroperability = Boolean(preservesInteroperability);
    this.prescribesSingleCommunicationStyle = Boolean(prescribesSingleCommunicationStyle);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
