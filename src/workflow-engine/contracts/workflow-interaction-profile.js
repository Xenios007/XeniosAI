export class WorkflowInteractionProfile {
  constructor({
    profileName, interactionTypes = [], eventContractFields = [], eventAcceptanceOutcomes = [], eventWaitFields = [],
    correlationCardinalities = [], eventArrivalPolicies = [], timerTypes = [], timerFields = [],
    timerMisfirePolicies = [], humanTaskStates = [], humanAssignmentTargets = [], decisionContractFields = [],
    multiPersonDecisions = [], agentTaskTypes = [], agentResultFields = [], operations = [],
    qualityAttributes = [], architecturalRules = [], architectureBoundaries = [],
    stableIdentities = true, versionedContracts = true, authenticatedAuthorizedSources = true,
    trustedTenantProperty = true, correlationNotAuthorization = true, activeWaitRequired = true,
    duplicateReplayHarmless = true, boundedArrivalPolicies = true, authoritativeOwnershipPreserved = true,
    durableTimers = true, explicitClockCalendarSemantics = true, distinctOccurrences = true,
    boundedMisfire = true, humanDecisionsAttributable = true, separationOfDuties = true,
    silenceNotApproval = true, decisionsImmutableWithCorrection = true, boundedAgentTasks = true,
    agentResultsValidated = true, deterministicRaceResolution = true, fullValidationBeforeResume = true,
    tenantPropertyIsolation = true, recoverableInteractions = true, privacyMinimized = true,
    vendorNeutral = true, technologyIndependent = true,
    endpointReceiptAdvancesState = false, correlationGrantsAuthority = false, globalOrderingAssumed = false,
    lateInputReopensTerminal = false, timerIsSleepingProcess = false, universalExactlyOnceTimer = false,
    notificationGrantsAuthority = false, freeTextControlsMaterialDecision = false, agentInfersAuthority = false,
    agentResultOwnsBusinessTruth = false, operatorForgesInteraction = false, untrustedScopeOverrides = false,
    selectsInfrastructure = false, definesAdjacentDetails = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      interactionTypes, eventContractFields, eventAcceptanceOutcomes, eventWaitFields, correlationCardinalities,
      eventArrivalPolicies, timerTypes, timerFields, timerMisfirePolicies, humanTaskStates, humanAssignmentTargets,
      decisionContractFields, multiPersonDecisions, agentTaskTypes, agentResultFields, operations,
      qualityAttributes, architecturalRules, architectureBoundaries
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      stableIdentities, versionedContracts, authenticatedAuthorizedSources, trustedTenantProperty,
      correlationNotAuthorization, activeWaitRequired, duplicateReplayHarmless, boundedArrivalPolicies,
      authoritativeOwnershipPreserved, durableTimers, explicitClockCalendarSemantics, distinctOccurrences,
      boundedMisfire, humanDecisionsAttributable, separationOfDuties, silenceNotApproval,
      decisionsImmutableWithCorrection, boundedAgentTasks, agentResultsValidated, deterministicRaceResolution,
      fullValidationBeforeResume, tenantPropertyIsolation, recoverableInteractions, privacyMinimized,
      vendorNeutral, technologyIndependent, endpointReceiptAdvancesState, correlationGrantsAuthority,
      globalOrderingAssumed, lateInputReopensTerminal, timerIsSleepingProcess, universalExactlyOnceTimer,
      notificationGrantsAuthority, freeTextControlsMaterialDecision, agentInfersAuthority,
      agentResultOwnsBusinessTruth, operatorForgesInteraction, untrustedScopeOverrides,
      selectsInfrastructure, definesAdjacentDetails
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
