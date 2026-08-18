export class ConversationalAiAgentAndKnowledgeReferenceProfile {
  constructor({
    referenceName,
    referenceFlowSteps = [], normalizedRequestFields = [], orchestratorResponsibilities = [], orchestratorExclusions = [],
    toolAttributes = [], toolExamples = [], agentAttributes = [], knowledgeSources = [], knowledgeIngestionLineageFields = [],
    memoryQualities = [], groundingCategories = [], humanSupervisionMaterialActions = [], safetyCases = [],
    evaluationDimensions = [], evaluationDatasetCategories = [], referenceAcceptanceCriteria = [], architecturalRules = [],
    aiCannotAlterBusinessStateWithoutGovernedToolOrWorkflow = true, toolProvidersValidateActorTenantPropertyAndResource = true,
    retrievalCannotCrossTenantOrPropertyPolicy = true, memoryAdmissionIsExplicit = true,
    agentBudgetsAndStopConditionsAreEnforced = true, unsupportedAnswersStateUncertaintyOrEscalate = true,
    aiInterpretsAndOrchestratesWhileDeterministicProvidersExecute = true,
    toolDiscoveryAndInvocationAreSeparateAuthorizationDecisions = true, knowledgeRetrievalIsNotAuthority = true,
    memoryIsDeliberateAndPurposeBound = true, evaluationsAreReleaseAndOperationalEvidence = true,
    delegationCanOnlyNarrowAuthority = true,
    orchestratorOwnsBookingsRatesPaymentsPropertyDataIdentityOrAuthorization = false,
    delegationExpandsAgentAuthority = false, conversationTextIsAutomaticallyDurableMemory = false
  }) {
    this.referenceName = referenceName;
    for (const [key, value] of Object.entries({
      referenceFlowSteps, normalizedRequestFields, orchestratorResponsibilities, orchestratorExclusions,
      toolAttributes, toolExamples, agentAttributes, knowledgeSources, knowledgeIngestionLineageFields,
      memoryQualities, groundingCategories, humanSupervisionMaterialActions, safetyCases, evaluationDimensions,
      evaluationDatasetCategories, referenceAcceptanceCriteria, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      aiCannotAlterBusinessStateWithoutGovernedToolOrWorkflow, toolProvidersValidateActorTenantPropertyAndResource,
      retrievalCannotCrossTenantOrPropertyPolicy, memoryAdmissionIsExplicit, agentBudgetsAndStopConditionsAreEnforced,
      unsupportedAnswersStateUncertaintyOrEscalate, aiInterpretsAndOrchestratesWhileDeterministicProvidersExecute,
      toolDiscoveryAndInvocationAreSeparateAuthorizationDecisions, knowledgeRetrievalIsNotAuthority,
      memoryIsDeliberateAndPurposeBound, evaluationsAreReleaseAndOperationalEvidence, delegationCanOnlyNarrowAuthority,
      orchestratorOwnsBookingsRatesPaymentsPropertyDataIdentityOrAuthorization, delegationExpandsAgentAuthority,
      conversationTextIsAutomaticallyDurableMemory
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
