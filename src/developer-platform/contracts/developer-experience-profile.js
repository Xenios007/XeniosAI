export class DeveloperExperienceProfile {
  constructor({
    experienceName,
    objectives = [], principles = [], actors = [], contextFields = [], journeyStages = [], journeyStates = [],
    journeyStateFields = [], humanJourneySteps = [], aiJourneySteps = [], pairedJourneyFields = [], delegationFields = [],
    aiStopConditions = [], interactionChannels = [], contractFields = [], feedbackClasses = [], measures = [],
    architecturalRules = [], futureCapabilities = [], architectureDiscoverableBeforeImplementation = true,
    materialActionsBoundToIntent = true, mandatoryControlsVisible = true, authoritativeValidationPreserved = true,
    journeyStateResumable = true, humanAccountabilityExplicit = true, aiAuthorityExplicitlyDelegated = true,
    technicalCapabilityNotAuthority = true, tenantPropertyContextPreserved = true, sensitiveContextMinimized = true,
    failuresRecoverable = true, operationalOwnershipIntegrated = true, analyticsPrivacyPreserved = true,
    accessibilityValidated = true, outcomeMeasuresRequired = true, vendorNeutral = true, technologyIndependent = true,
    resolvesArchitectureConflictsAutomatically = false, infersAuthorityFromCredentials = false,
    bypassesPolicyForSelfService = false, usesProductionDataByDefault = false, treatsDeploymentAsCompletion = false
  }) {
    this.experienceName = experienceName;
    for (const [key, value] of Object.entries({ objectives, principles, actors, contextFields, journeyStages, journeyStates,
      journeyStateFields, humanJourneySteps, aiJourneySteps, pairedJourneyFields, delegationFields, aiStopConditions,
      interactionChannels, contractFields, feedbackClasses, measures, architecturalRules, futureCapabilities })) {
      this[key] = Object.freeze([...value]);
    }
    for (const [key, value] of Object.entries({ architectureDiscoverableBeforeImplementation, materialActionsBoundToIntent,
      mandatoryControlsVisible, authoritativeValidationPreserved, journeyStateResumable, humanAccountabilityExplicit,
      aiAuthorityExplicitlyDelegated, technicalCapabilityNotAuthority, tenantPropertyContextPreserved, sensitiveContextMinimized,
      failuresRecoverable, operationalOwnershipIntegrated, analyticsPrivacyPreserved, accessibilityValidated,
      outcomeMeasuresRequired, vendorNeutral, technologyIndependent, resolvesArchitectureConflictsAutomatically,
      infersAuthorityFromCredentials, bypassesPolicyForSelfService, usesProductionDataByDefault, treatsDeploymentAsCompletion })) {
      this[key] = Boolean(value);
    }
    Object.freeze(this);
  }
}