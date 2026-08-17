export class SinglePropertyHospitalityReferenceProfile {
  constructor({
    referenceName,
    scenarioActors = [], businessCapabilities = [], domainOwnershipMappings = [], requestFlowSteps = [],
    configurableValues = [], availabilityModelDimensions = [], pricingModelOutputFields = [],
    reservationWorkflowStates = [], reservationWorkflowConcerns = [], dataPrivacyControls = [],
    knowledgeTopicAreas = [], businessFactQuerySources = [], observabilitySignals = [], failureScenarios = [],
    referenceAcceptanceCriteria = [], architecturalRules = [],
    aiMayCollectMissingInputsAndExplainThePricingResult = true, sameInputsProduceTheSameAuthoritativeRate = true,
    bookedIntervalCannotBeConfirmedTwice = true, occupancyPolicyEnforcedByABusinessService = true,
    aiOutputCannotChangeReservationStateDirectly = true, guestDataAbsentFromLogsAndSyntheticFixtures = true,
    failureAndRecoveryAreObservable = true,
    configurationBypassesOccupancySecurityPrivacyAuthorizationOrPlatformControls = false,
    integrationFeedUpdatesAvailabilityRepositoryDirectly = false, aiCalculatesOrInventsTheTotal = false,
    commandsLackTenantPropertyScopeOrRequiredIdempotency = false
  }) {
    this.referenceName = referenceName;
    for (const [key, value] of Object.entries({
      scenarioActors, businessCapabilities, domainOwnershipMappings, requestFlowSteps, configurableValues,
      availabilityModelDimensions, pricingModelOutputFields, reservationWorkflowStates, reservationWorkflowConcerns,
      dataPrivacyControls, knowledgeTopicAreas, businessFactQuerySources, observabilitySignals, failureScenarios,
      referenceAcceptanceCriteria, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      aiMayCollectMissingInputsAndExplainThePricingResult, sameInputsProduceTheSameAuthoritativeRate,
      bookedIntervalCannotBeConfirmedTwice, occupancyPolicyEnforcedByABusinessService,
      aiOutputCannotChangeReservationStateDirectly, guestDataAbsentFromLogsAndSyntheticFixtures,
      failureAndRecoveryAreObservable, configurationBypassesOccupancySecurityPrivacyAuthorizationOrPlatformControls,
      integrationFeedUpdatesAvailabilityRepositoryDirectly, aiCalculatesOrInventsTheTotal,
      commandsLackTenantPropertyScopeOrRequiredIdempotency
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
