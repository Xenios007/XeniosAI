export class ReferenceImplementationOverviewProfile {
  constructor({
    portfolioName,
    referenceMissionQuestions = [], portfolioReferenceTiers = [], referenceStakeholderNeeds = [],
    referenceTargetStateCharacteristics = [], referenceQualityAttributes = [], referenceAdoptionPathSteps = [],
    referenceSuccessMeasures = [], referenceDeclarationFields = [], architecturalRules = [],
    referencesMakeArchitectureObservableThroughReproducibleEvidence = true,
    portfolioBeginsWithCasaLluviaAndExpandsToEnterpriseOperation = true,
    referenceValueMeasuredThroughDemonstratedOutcomesAndConformance = true,
    crossCuttingRequirementsIncludedInEveryCompleteScenario = true,
    consumersReusePatternsNotUndocumentedImplementationAccidents = true,
    referenceMaintenanceHasNamedOwnershipAndLifecycle = true, everyReferenceDeclaresAllValidationCriteriaFields = true,
    consumersCopyEntireSolutionInsteadOfSelectingReusablePatterns = false, referencePortfolioLeftUnversionedOrUnmaintained = false,
    referenceLimitationsLeftUndisclosed = false, referenceRetirementOccursWithoutGovernedFeedback = false
  }) {
    this.portfolioName = portfolioName;
    for (const [key, value] of Object.entries({
      referenceMissionQuestions, portfolioReferenceTiers, referenceStakeholderNeeds, referenceTargetStateCharacteristics,
      referenceQualityAttributes, referenceAdoptionPathSteps, referenceSuccessMeasures, referenceDeclarationFields,
      architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      referencesMakeArchitectureObservableThroughReproducibleEvidence, portfolioBeginsWithCasaLluviaAndExpandsToEnterpriseOperation,
      referenceValueMeasuredThroughDemonstratedOutcomesAndConformance, crossCuttingRequirementsIncludedInEveryCompleteScenario,
      consumersReusePatternsNotUndocumentedImplementationAccidents, referenceMaintenanceHasNamedOwnershipAndLifecycle,
      everyReferenceDeclaresAllValidationCriteriaFields, consumersCopyEntireSolutionInsteadOfSelectingReusablePatterns,
      referencePortfolioLeftUnversionedOrUnmaintained, referenceLimitationsLeftUndisclosed, referenceRetirementOccursWithoutGovernedFeedback
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
