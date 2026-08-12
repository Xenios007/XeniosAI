export class WorkflowTaskWorkerProfile {
  constructor({
    profileName, concepts = [], responsibilities = [], taskIdentityFields = [], attemptBindings = [],
    taskStates = [], attemptStates = [], dispatchIntentFields = [], queueCapabilities = [], deliveryModels = [],
    workerIdentityFields = [], workerLifecycle = [], capabilityMatchFields = [], leaseFields = [],
    resultFields = [], failureTypes = [], deadLetterCauses = [], backpressureActions = [], operations = [],
    qualityAttributes = [], architecturalRules = [], architectureBoundaries = [],
    runtimeOwnsTasks = true, logicalAttemptSeparation = true, durableIntentBeforeDispatch = true,
    stableIdentities = true, queueDrivenCoordination = true, queueNotStateAuthority = true,
    workerAuthentication = true, workerAuthorization = true, registeredCapabilityMatching = true,
    tenantPropertyIsolation = true, leastPrivilegeCredentials = true, statelessWorkers = true,
    boundedLeasesAndFencing = true, heartbeatOnlyLiveness = true, resultValidationBeforeCompletion = true,
    attemptFailureSeparateFromTaskFailure = true, engineControlsRetry = true, reconcileBeforeRetry = true,
    effectivelyOnceControls = true, duplicateLateResultsHarmless = true, controlledDeadLetterRecovery = true,
    explicitLoadControls = true, gracefulDrain = true, evidencePreserved = true,
    vendorNeutral = true, technologyIndependent = true,
    workerWritesWorkflowState = false, workerInfersScope = false, workerBroadensAuthority = false,
    deliveryAckMeansCompletion = false, workerSuccessMeansCompletion = false, workerInventsRetry = false,
    workerInventsCompensation = false, queueIsOnlyIntentRecord = false, universalExactlyOnce = false,
    blindDeadLetterReplay = false, heartbeatMeansCompletion = false, genericWorkersReplaceHumansAgents = false,
    selectsQueueComputeLanguage = false, definesAdjacentChapterDetails = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      concepts, responsibilities, taskIdentityFields, attemptBindings, taskStates, attemptStates,
      dispatchIntentFields, queueCapabilities, deliveryModels, workerIdentityFields, workerLifecycle,
      capabilityMatchFields, leaseFields, resultFields, failureTypes, deadLetterCauses, backpressureActions,
      operations, qualityAttributes, architecturalRules, architectureBoundaries
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      runtimeOwnsTasks, logicalAttemptSeparation, durableIntentBeforeDispatch, stableIdentities,
      queueDrivenCoordination, queueNotStateAuthority, workerAuthentication, workerAuthorization,
      registeredCapabilityMatching, tenantPropertyIsolation, leastPrivilegeCredentials, statelessWorkers,
      boundedLeasesAndFencing, heartbeatOnlyLiveness, resultValidationBeforeCompletion,
      attemptFailureSeparateFromTaskFailure, engineControlsRetry, reconcileBeforeRetry, effectivelyOnceControls,
      duplicateLateResultsHarmless, controlledDeadLetterRecovery, explicitLoadControls, gracefulDrain,
      evidencePreserved, vendorNeutral, technologyIndependent, workerWritesWorkflowState, workerInfersScope,
      workerBroadensAuthority, deliveryAckMeansCompletion, workerSuccessMeansCompletion, workerInventsRetry,
      workerInventsCompensation, queueIsOnlyIntentRecord, universalExactlyOnce, blindDeadLetterReplay,
      heartbeatMeansCompletion, genericWorkersReplaceHumansAgents, selectsQueueComputeLanguage,
      definesAdjacentChapterDetails
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
