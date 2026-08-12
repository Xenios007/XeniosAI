export class WorkflowEngineOverviewProfile {
  constructor({
    engineName,
    requiredProperties = [], nonWorkflowCapabilities = [], useCriteria = [], inappropriateCriteria = [], goals = [],
    principles = [], concepts = [], logicalPlanes = [], capabilities = [], actors = [], classifications = [],
    definitionFields = [], definitionLifecycle = [], executionIdentityFields = [], executionStates = [],
    authoritativeStateFields = [], operationActions = [], qualityAttributes = [], architecturalRules = [],
    architectureBoundaries = [], futureCapabilities = [],
    definitionsFirstClassIdentities = true, executionsFirstClassIdentities = true,
    accountableOperationalOwnership = true, durableAuthoritativeState = true, deterministicTransitions = true,
    definitionVersionBinding = true, businessRulesRemainInDomainServices = true, publicContractsOnly = true,
    taskAttemptSeparation = true, queueDrivenWorkers = true, workersDoNotOwnState = true,
    identityAuthorityBeforeAction = true, tenantPropertyIsolation = true, eventValidation = true,
    durableIdempotentTimers = true, authenticatedHumanDecisions = true, boundedAgentParticipation = true,
    boundedRetriesResources = true, effectivelyOnceByControls = true, reconcileBeforeMaterialRetry = true,
    domainDefinedCompensationOnly = true, controlledCancellation = true, explicitCompletion = true,
    attributableEvidence = true, safeOperationalControl = true, vendorNeutral = true, technologyIndependent = true,
    replacesBusinessServices = false, ownsBusinessData = false, replacesAiOrchestrator = false,
    replacesAgentFramework = false, conversationAsProcessState = false, guaranteesUniversalExactlyOnce = false,
    infersAuthority = false, infersApprovalFromSilence = false, workerCodeHidesProcess = false,
    selectsWorkflowProduct = false, definesLaterChapterDetails = false
  }) {
    this.engineName = engineName;
    for (const [key, value] of Object.entries({ requiredProperties, nonWorkflowCapabilities, useCriteria,
      inappropriateCriteria, goals, principles, concepts, logicalPlanes, capabilities, actors, classifications,
      definitionFields, definitionLifecycle, executionIdentityFields, executionStates, authoritativeStateFields,
      operationActions, qualityAttributes, architecturalRules, architectureBoundaries, futureCapabilities })) {
      this[key] = Object.freeze([...value]);
    }
    for (const [key, value] of Object.entries({ definitionsFirstClassIdentities, executionsFirstClassIdentities,
      accountableOperationalOwnership, durableAuthoritativeState, deterministicTransitions, definitionVersionBinding,
      businessRulesRemainInDomainServices, publicContractsOnly, taskAttemptSeparation, queueDrivenWorkers,
      workersDoNotOwnState, identityAuthorityBeforeAction, tenantPropertyIsolation, eventValidation,
      durableIdempotentTimers, authenticatedHumanDecisions, boundedAgentParticipation, boundedRetriesResources,
      effectivelyOnceByControls, reconcileBeforeMaterialRetry, domainDefinedCompensationOnly, controlledCancellation,
      explicitCompletion, attributableEvidence, safeOperationalControl, vendorNeutral, technologyIndependent,
      replacesBusinessServices, ownsBusinessData, replacesAiOrchestrator, replacesAgentFramework,
      conversationAsProcessState, guaranteesUniversalExactlyOnce, infersAuthority, infersApprovalFromSilence,
      workerCodeHidesProcess, selectsWorkflowProduct, definesLaterChapterDetails })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}