export class DeploymentEvolutionAssessment {
  constructor({
    candidateName,
    governanceControls = [],
    technologyIndependenceTargets = [],
    sustainabilityObjectives = [],
    architectureReviewed = true,
    riskAnalyzed = true,
    compatibilityValidated = true,
    operationalReadinessReviewed = true,
    businessAligned = true,
    humanGovernancePreserved = true,
    architectureRedesignRequired = false,
    vendorDecisionEmbedded = false
  }) {
    this.candidateName = candidateName;
    this.governanceControls = Object.freeze([...governanceControls]);
    this.technologyIndependenceTargets = Object.freeze([...technologyIndependenceTargets]);
    this.sustainabilityObjectives = Object.freeze([...sustainabilityObjectives]);
    this.architectureReviewed = Boolean(architectureReviewed);
    this.riskAnalyzed = Boolean(riskAnalyzed);
    this.compatibilityValidated = Boolean(compatibilityValidated);
    this.operationalReadinessReviewed = Boolean(operationalReadinessReviewed);
    this.businessAligned = Boolean(businessAligned);
    this.humanGovernancePreserved = Boolean(humanGovernancePreserved);
    this.architectureRedesignRequired = Boolean(architectureRedesignRequired);
    this.vendorDecisionEmbedded = Boolean(vendorDecisionEmbedded);

    Object.freeze(this);
  }
}
