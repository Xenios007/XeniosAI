export class SecurityEvolutionRoadmap {
  constructor({
    roadmapName,
    objectives = [],
    principles = [],
    secureDefaults = [],
    automationAreas = [],
    verificationFactors = [],
    maturityStages = [],
    visionCharacteristics = [],
    relationshipFlow = [],
    preservesPrinciples = true,
    minimizesDisruption = true,
    technologyIndependent = true,
    supportsIncrementalAdoption = true,
    improvesResilience = true,
    replacesEstablishedResponsibilities = false,
    productRoadmapSpecific = false,
    vendorStrategySpecific = false
  }) {
    this.roadmapName = roadmapName;
    this.objectives = Object.freeze([...objectives]);
    this.principles = Object.freeze([...principles]);
    this.secureDefaults = Object.freeze([...secureDefaults]);
    this.automationAreas = Object.freeze([...automationAreas]);
    this.verificationFactors = Object.freeze([...verificationFactors]);
    this.maturityStages = Object.freeze([...maturityStages]);
    this.visionCharacteristics = Object.freeze([...visionCharacteristics]);
    this.relationshipFlow = Object.freeze([...relationshipFlow]);
    this.preservesPrinciples = Boolean(preservesPrinciples);
    this.minimizesDisruption = Boolean(minimizesDisruption);
    this.technologyIndependent = Boolean(technologyIndependent);
    this.supportsIncrementalAdoption = Boolean(supportsIncrementalAdoption);
    this.improvesResilience = Boolean(improvesResilience);
    this.replacesEstablishedResponsibilities = Boolean(replacesEstablishedResponsibilities);
    this.productRoadmapSpecific = Boolean(productRoadmapSpecific);
    this.vendorStrategySpecific = Boolean(vendorStrategySpecific);

    Object.freeze(this);
  }
}
