export class AgentFrameworkOverviewProfile {
  constructor({
    frameworkName,
    objectives = [], principles = [], nonAgentCapabilities = [], useCriteria = [], inappropriateCriteria = [],
    layers = [], capabilities = [], definitionFields = [], conceptIdentities = [], purposeClassifications = [],
    durationClassifications = [], interactionClassifications = [], impactClassifications = [], autonomyLevels = [],
    lifecycleStages = [], executionStates = [], executionLoopSteps = [], goalFields = [], toolBoundaryRequirements = [],
    humanParticipationRoles = [], delegationContractFields = [], contextRequirements = [], qualityAttributes = [],
    architecturalRules = [], architectureBoundaries = [], futureCapabilities = [],
    agentsFirstClassIdentities = true, accountableOwnership = true, versionedDefinitions = true,
    scopeBeforeAccess = true, authorityBeforeCapability = true, autonomyExplicit = true,
    plansWithinGoals = true, governedTools = true, deterministicBusinessServices = true,
    workflowOwnsDurableProcess = true, stateOutsideModelContext = true, validatesMaterialSteps = true,
    boundedRetriesDelegationBudgets = true, humanControls = true, attributableEvidence = true,
    evaluatedBeforeAndDuringOperation = true, suspensionStopControls = true, tenantIsolation = true,
    trustClassifiedContent = true, vendorModelNeutral = true, treatsPromptAsAgent = false,
    treatsToolAvailabilityAsAuthority = false, expandsGoalDuringPlanning = false, agentsOwnBusinessRules = false,
    replacesWorkflowEngine = false, modelContextAsExecutionRecord = false, unboundedDelegation = false,
    infersApprovalFromSilence = false, retriesMaterialActionsBlindly = false, selectsModelProvider = false,
    selectsAgentFrameworkProduct = false, replacesHumanAccountability = false
  }) {
    this.frameworkName = frameworkName;
    for (const [key, value] of Object.entries({ objectives, principles, nonAgentCapabilities, useCriteria,
      inappropriateCriteria, layers, capabilities, definitionFields, conceptIdentities, purposeClassifications,
      durationClassifications, interactionClassifications, impactClassifications, autonomyLevels, lifecycleStages,
      executionStates, executionLoopSteps, goalFields, toolBoundaryRequirements, humanParticipationRoles,
      delegationContractFields, contextRequirements, qualityAttributes, architecturalRules, architectureBoundaries,
      futureCapabilities })) {
      this[key] = Object.freeze([...value]);
    }
    for (const [key, value] of Object.entries({ agentsFirstClassIdentities, accountableOwnership, versionedDefinitions,
      scopeBeforeAccess, authorityBeforeCapability, autonomyExplicit, plansWithinGoals, governedTools,
      deterministicBusinessServices, workflowOwnsDurableProcess, stateOutsideModelContext, validatesMaterialSteps,
      boundedRetriesDelegationBudgets, humanControls, attributableEvidence, evaluatedBeforeAndDuringOperation,
      suspensionStopControls, tenantIsolation, trustClassifiedContent, vendorModelNeutral, treatsPromptAsAgent,
      treatsToolAvailabilityAsAuthority, expandsGoalDuringPlanning, agentsOwnBusinessRules, replacesWorkflowEngine,
      modelContextAsExecutionRecord, unboundedDelegation, infersApprovalFromSilence, retriesMaterialActionsBlindly,
      selectsModelProvider, selectsAgentFrameworkProduct, replacesHumanAccountability })) {
      this[key] = Boolean(value);
    }
    Object.freeze(this);
  }
}
