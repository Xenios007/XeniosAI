export class WorkflowAndBusinessServiceReferenceProfile {
  constructor({
    referenceName,
    workflowReferenceBoundedServices = [], serviceOwnershipResponsibilities = [], commandFields = [],
    commandProviderValidations = [], queryCharacteristics = [], eventFields = [], reservationWorkflowSteps = [],
    workflowStateElements = [], idempotencyExamples = [], concurrencyControls = [], failureScenarios = [],
    reconciliationCheckedRecords = [], observabilityTraceCorrelationPoints = [], referenceAcceptanceCriteria = [],
    architecturalRules = [],
    servicesOwnAndProtectTheirRepositories = true, duplicateCommandsDoNotDuplicateMaterialEffects = true,
    crossServiceWorkflowRecoversAfterWorkerRestart = true, partialFailureProducesVisibleStateAndCompensation = true,
    eventsCorrespondToCommittedFacts = true, tenantContextRemainsPresentInEveryBoundary = true,
    businessStateChangesAreDeterministicServiceCommands = true, workflowsCoordinateButDoNotOwnDomainTruth = true,
    localTransactionsAndReliableEventsReplaceSharedTransactions = true, reconciliationIsAFirstClassRecoveryControl = true,
    workflowStateDuplicatesAuthoritativeServiceRecords = false, distributedSharedDatabaseTransactionIsUsed = false,
    notificationFailureAutomaticallyReversesBooking = false, reconciliationDifferencesSilentlyOverwriteData = false,
    readModelsActAsAlternativeAuthorities = false
  }) {
    this.referenceName = referenceName;
    for (const [key, value] of Object.entries({
      workflowReferenceBoundedServices, serviceOwnershipResponsibilities, commandFields, commandProviderValidations,
      queryCharacteristics, eventFields, reservationWorkflowSteps, workflowStateElements, idempotencyExamples,
      concurrencyControls, failureScenarios, reconciliationCheckedRecords, observabilityTraceCorrelationPoints,
      referenceAcceptanceCriteria, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      servicesOwnAndProtectTheirRepositories, duplicateCommandsDoNotDuplicateMaterialEffects,
      crossServiceWorkflowRecoversAfterWorkerRestart, partialFailureProducesVisibleStateAndCompensation,
      eventsCorrespondToCommittedFacts, tenantContextRemainsPresentInEveryBoundary,
      businessStateChangesAreDeterministicServiceCommands, workflowsCoordinateButDoNotOwnDomainTruth,
      localTransactionsAndReliableEventsReplaceSharedTransactions, reconciliationIsAFirstClassRecoveryControl,
      workflowStateDuplicatesAuthoritativeServiceRecords, distributedSharedDatabaseTransactionIsUsed,
      notificationFailureAutomaticallyReversesBooking, reconciliationDifferencesSilentlyOverwriteData,
      readModelsActAsAlternativeAuthorities
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
