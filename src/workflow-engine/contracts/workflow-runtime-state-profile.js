export class WorkflowRuntimeStateProfile {
  constructor({
    runtimeName,
    responsibilities = [], inputs = [], admissionChecks = [], admissionOutcomes = [], executionBindings = [],
    components = [], executionStates = [], stateFields = [], stateInvariants = [], stateRepresentations = [],
    transitionFields = [], concurrencyControls = [], taskStates = [], waitTypes = [], failureTypes = [],
    operations = [], qualityAttributes = [], architecturalRules = [], architectureBoundaries = [],
    activeAuthorizedAdmission = true, immutableExecutionIdentity = true, exactDefinitionBinding = true,
    authoritativeStateDurable = true, monotonicStateVersions = true, deterministicTransitions = true,
    validateBeforeMutation = true, explicitAtomicityBoundary = true, staleTransitionsReevaluated = true,
    duplicateDeliveryHarmless = true, domainServicesOwnBusinessTruth = true, runtimeOnlyStateWrites = true,
    intentBeforeDispatch = true, reconcileBeforeRetry = true, effectivelyOnceControls = true,
    durableWaitsTimers = true, noLocksAcrossLongWaits = true, orderedIntegrityProtectedHistory = true,
    replayDoesNotRepeatEffects = true, terminalStatesIrreversible = true, authoritativeCompletionEvidence = true,
    recoverFromPersistedState = true, tenantPropertyIsolation = true, confusedDeputyPrevention = true,
    controlledStateRepair = true, vendorNeutral = true, technologyIndependent = true,
    workerControlsStateMachine = false, processMemoryAuthoritative = false, queueIsOnlyIntentRecord = false,
    dispatchAcknowledgementMeansCompletion = false, universalExactlyOnceClaim = false,
    terminalExecutionReopens = false, arbitraryOperatorStateEdit = false, migrationRewritesHistory = false,
    untrustedScopeAccepted = false, secretsPersistedInState = false, eventSourcingRequired = false,
    selectsRuntimeTechnology = false, definesLaterChapterDetails = false
  }) {
    this.runtimeName = runtimeName;
    for (const [key, value] of Object.entries({
      responsibilities, inputs, admissionChecks, admissionOutcomes, executionBindings, components, executionStates,
      stateFields, stateInvariants, stateRepresentations, transitionFields, concurrencyControls, taskStates, waitTypes,
      failureTypes, operations, qualityAttributes, architecturalRules, architectureBoundaries
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      activeAuthorizedAdmission, immutableExecutionIdentity, exactDefinitionBinding, authoritativeStateDurable,
      monotonicStateVersions, deterministicTransitions, validateBeforeMutation, explicitAtomicityBoundary,
      staleTransitionsReevaluated, duplicateDeliveryHarmless, domainServicesOwnBusinessTruth, runtimeOnlyStateWrites,
      intentBeforeDispatch, reconcileBeforeRetry, effectivelyOnceControls, durableWaitsTimers, noLocksAcrossLongWaits,
      orderedIntegrityProtectedHistory, replayDoesNotRepeatEffects, terminalStatesIrreversible,
      authoritativeCompletionEvidence, recoverFromPersistedState, tenantPropertyIsolation, confusedDeputyPrevention,
      controlledStateRepair, vendorNeutral, technologyIndependent, workerControlsStateMachine,
      processMemoryAuthoritative, queueIsOnlyIntentRecord, dispatchAcknowledgementMeansCompletion,
      universalExactlyOnceClaim, terminalExecutionReopens, arbitraryOperatorStateEdit, migrationRewritesHistory,
      untrustedScopeAccepted, secretsPersistedInState, eventSourcingRequired, selectsRuntimeTechnology,
      definesLaterChapterDetails
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
