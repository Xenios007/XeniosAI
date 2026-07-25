export class FutureIntegrationEvolutionProfile {
  constructor({
    evolutionName,
    objectives = [],
    modelStages = [],
    principles = [],
    futureCapabilities = [],
    aiDrivenCapabilities = [],
    ecosystemCapabilities = [],
    governanceCapabilities = [],
    operationalCapabilities = [],
    securityCapabilities = [],
    knowledgeCapabilities = [],
    sustainabilityFactors = [],
    successCharacteristics = [],
    relationshipFlow = [],
    architecturalRules = [],
    visionCharacteristics = [],
    preservesArchitecturalPrinciples = true,
    maintainsInteroperability = true,
    protectsEnterpriseInvestments = true,
    encouragesInnovation = true,
    minimizesDisruption = true,
    supportsEmergingTechnologies = true,
    stableAndAdaptable = true,
    businessDriven = true,
    incrementalModernization = true,
    futureProofContracts = true,
    aiStrengthensGovernance = true,
    supportsEcosystemGrowthWithoutSacrificingAutonomy = true,
    governanceProactive = true,
    sustainabilitySupported = true,
    vendorNeutral = true,
    technologyNeutral = true,
    roadmapSpecific = false,
    vendorSpecific = false,
    productSelectionSpecific = false,
    technologyCommitmentSpecific = false,
    disruptiveRedesignRequired = false,
    fragmentsIntegrationEcosystem = false,
    governanceReplacedByAi = false
  }) {
    this.evolutionName = evolutionName;
    this.objectives = Object.freeze([...objectives]);
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.futureCapabilities = Object.freeze([...futureCapabilities]);
    this.aiDrivenCapabilities = Object.freeze([...aiDrivenCapabilities]);
    this.ecosystemCapabilities = Object.freeze([...ecosystemCapabilities]);
    this.governanceCapabilities = Object.freeze([...governanceCapabilities]);
    this.operationalCapabilities = Object.freeze([...operationalCapabilities]);
    this.securityCapabilities = Object.freeze([...securityCapabilities]);
    this.knowledgeCapabilities = Object.freeze([...knowledgeCapabilities]);
    this.sustainabilityFactors = Object.freeze([...sustainabilityFactors]);
    this.successCharacteristics = Object.freeze([...successCharacteristics]);
    this.relationshipFlow = Object.freeze([...relationshipFlow]);
    this.architecturalRules = Object.freeze([...architecturalRules]);
    this.visionCharacteristics = Object.freeze([...visionCharacteristics]);
    this.preservesArchitecturalPrinciples = Boolean(preservesArchitecturalPrinciples);
    this.maintainsInteroperability = Boolean(maintainsInteroperability);
    this.protectsEnterpriseInvestments = Boolean(protectsEnterpriseInvestments);
    this.encouragesInnovation = Boolean(encouragesInnovation);
    this.minimizesDisruption = Boolean(minimizesDisruption);
    this.supportsEmergingTechnologies = Boolean(supportsEmergingTechnologies);
    this.stableAndAdaptable = Boolean(stableAndAdaptable);
    this.businessDriven = Boolean(businessDriven);
    this.incrementalModernization = Boolean(incrementalModernization);
    this.futureProofContracts = Boolean(futureProofContracts);
    this.aiStrengthensGovernance = Boolean(aiStrengthensGovernance);
    this.supportsEcosystemGrowthWithoutSacrificingAutonomy = Boolean(supportsEcosystemGrowthWithoutSacrificingAutonomy);
    this.governanceProactive = Boolean(governanceProactive);
    this.sustainabilitySupported = Boolean(sustainabilitySupported);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.roadmapSpecific = Boolean(roadmapSpecific);
    this.vendorSpecific = Boolean(vendorSpecific);
    this.productSelectionSpecific = Boolean(productSelectionSpecific);
    this.technologyCommitmentSpecific = Boolean(technologyCommitmentSpecific);
    this.disruptiveRedesignRequired = Boolean(disruptiveRedesignRequired);
    this.fragmentsIntegrationEcosystem = Boolean(fragmentsIntegrationEcosystem);
    this.governanceReplacedByAi = Boolean(governanceReplacedByAi);

    Object.freeze(this);
  }
}
