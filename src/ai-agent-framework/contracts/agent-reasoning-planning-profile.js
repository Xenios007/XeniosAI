export class AgentReasoningPlanningProfile {
  constructor({
    reasoningName,
    reasoningResponsibilities = [], reasoningInputs = [], reasoningOutputTypes = [], reasoningOutputFields = [],
    structuredReasoningFields = [], goalInterpretationFields = [], ambiguityCategories = [],
    missingInformationClasses = [], conflictResolutionFactors = [], reasoningModes = [],
    reasoningStrategyFields = [], planFields = [], planStates = [], planCreationSteps = [],
    taskDependencyTypes = [], planConstraints = [], authorityAwareTaskFields = [],
    capabilityCatalogFields = [], planSelectionFactors = [], planValidationChecks = [],
    planApprovalBindings = [], planVersionRecordFields = [], replanningTriggers = [],
    replanningRules = [], planDriftIndicators = [], uncertaintyCategories = [], groundingSources = [],
    truthHierarchyLevels = [], validationMechanisms = [], humanDecisionRequestFields = [],
    instructionFields = [], instructionPriorityLevels = [], modelSelectionFactors = [],
    multiAgentPlanFields = [], stopConditions = [], loopDetectionSignals = [],
    observabilitySignals = [], evidenceFields = [], evaluationDimensions = [], qualityAttributes = [],
    architecturalRules = [], architectureBoundaries = [], advisoryReasoning = true,
    deterministicValidation = true, preservesGoalFidelity = true, identifiesAmbiguity = true,
    clarifiesMaterialMissingInfo = true, usesAuthoritativeSources = true, labelsAssumptions = true,
    structuredVersionedOutputs = true, boundedPlans = true, explicitDependencies = true,
    authorityAwareWithoutGranting = true, registeredCapabilitiesOnly = true, businessLogicInServices = true,
    workflowForDurableProcess = true, explicitHumanDecisions = true, planValidationBeforeActivation = true,
    materialRevisionsVersioned = true, completedEvidencePreserved = true, planDriftDetection = true,
    reasoningLoopDetection = true, localWithinGlobalConstraints = true, retrievedContentAsData = true,
    confidenceNotEvidence = true, independentValidationByRisk = true, hiddenReasoningNotEvidence = true,
    stopWhenUnsafeOrUnverifiable = true, completionRuntimeValidated = true, modelProviderNeutral = true,
    grantsAuthority = false, controlsRuntimeState = false, ownsBusinessTruth = false,
    ownsWorkflowSemantics = false, inventsRequiredValues = false, silentlyBroadensGoal = false,
    infersMissingAuthority = false, resolvesConflictByFluency = false, embedsHiddenBusinessRules = false,
    planIsAuthority = false, planIsWorkflowDefinition = false, inventsCapabilities = false,
    marksDependencySatisfiedWithoutEvidence = false, activatesUnvalidatedPlan = false,
    erasesPriorEvidenceOnReplan = false, modelConfidenceOverridesEvidence = false,
    retrievedContentAsInstructionAuthority = false, unboundedDelegation = false,
    fluentSummaryAsCompletionEvidence = false, selectsModelOrAgentLibrary = false
  }) {
    this.reasoningName = reasoningName;
    for (const [key, value] of Object.entries({
      reasoningResponsibilities, reasoningInputs, reasoningOutputTypes, reasoningOutputFields,
      structuredReasoningFields, goalInterpretationFields, ambiguityCategories, missingInformationClasses,
      conflictResolutionFactors, reasoningModes, reasoningStrategyFields, planFields, planStates,
      planCreationSteps, taskDependencyTypes, planConstraints, authorityAwareTaskFields, capabilityCatalogFields,
      planSelectionFactors, planValidationChecks, planApprovalBindings, planVersionRecordFields,
      replanningTriggers, replanningRules, planDriftIndicators, uncertaintyCategories, groundingSources,
      truthHierarchyLevels, validationMechanisms, humanDecisionRequestFields, instructionFields,
      instructionPriorityLevels, modelSelectionFactors, multiAgentPlanFields, stopConditions,
      loopDetectionSignals, observabilitySignals, evidenceFields, evaluationDimensions, qualityAttributes,
      architecturalRules, architectureBoundaries
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      advisoryReasoning, deterministicValidation, preservesGoalFidelity, identifiesAmbiguity,
      clarifiesMaterialMissingInfo, usesAuthoritativeSources, labelsAssumptions, structuredVersionedOutputs,
      boundedPlans, explicitDependencies, authorityAwareWithoutGranting, registeredCapabilitiesOnly,
      businessLogicInServices, workflowForDurableProcess, explicitHumanDecisions, planValidationBeforeActivation,
      materialRevisionsVersioned, completedEvidencePreserved, planDriftDetection, reasoningLoopDetection,
      localWithinGlobalConstraints, retrievedContentAsData, confidenceNotEvidence, independentValidationByRisk,
      hiddenReasoningNotEvidence, stopWhenUnsafeOrUnverifiable, completionRuntimeValidated, modelProviderNeutral,
      grantsAuthority, controlsRuntimeState, ownsBusinessTruth, ownsWorkflowSemantics, inventsRequiredValues,
      silentlyBroadensGoal, infersMissingAuthority, resolvesConflictByFluency, embedsHiddenBusinessRules,
      planIsAuthority, planIsWorkflowDefinition, inventsCapabilities, marksDependencySatisfiedWithoutEvidence,
      activatesUnvalidatedPlan, erasesPriorEvidenceOnReplan, modelConfidenceOverridesEvidence,
      retrievedContentAsInstructionAuthority, unboundedDelegation, fluentSummaryAsCompletionEvidence,
      selectsModelOrAgentLibrary
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
