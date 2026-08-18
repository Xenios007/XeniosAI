import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ReferenceImplementationValidationResult } from '../contracts/reference-implementation-validation-result.js';
import { WorkflowAndBusinessServiceReferenceProfile } from '../contracts/workflow-and-business-service-reference-profile.js';
import * as constants from '../workflow-and-business-service-reference-constants.js';

const METADATA = Object.freeze({
  workflowReferenceBoundedServices: constants.WORKFLOW_REFERENCE_BOUNDED_SERVICES, serviceOwnershipResponsibilities: constants.SERVICE_OWNERSHIP_RESPONSIBILITIES,
  commandFields: constants.COMMAND_FIELDS, commandProviderValidations: constants.COMMAND_PROVIDER_VALIDATIONS,
  queryCharacteristics: constants.QUERY_CHARACTERISTICS, eventFields: constants.EVENT_FIELDS,
  reservationWorkflowSteps: constants.RESERVATION_WORKFLOW_STEPS, workflowStateElements: constants.WORKFLOW_STATE_ELEMENTS,
  idempotencyExamples: constants.IDEMPOTENCY_EXAMPLES, concurrencyControls: constants.CONCURRENCY_CONTROLS,
  failureScenarios: constants.WORKFLOW_FAILURE_SCENARIOS, reconciliationCheckedRecords: constants.RECONCILIATION_CHECKED_RECORDS,
  observabilityTraceCorrelationPoints: constants.OBSERVABILITY_TRACE_CORRELATION_POINTS,
  referenceAcceptanceCriteria: constants.WORKFLOW_REFERENCE_ACCEPTANCE_CRITERIA, architecturalRules: constants.WORKFLOW_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  servicesOwnAndProtectTheirRepositories: 'ARCH-020-06 requires services to own and protect their repositories.',
  duplicateCommandsDoNotDuplicateMaterialEffects: 'ARCH-020-06 requires duplicate commands to not duplicate material effects.',
  crossServiceWorkflowRecoversAfterWorkerRestart: 'ARCH-020-06 requires a cross-service workflow to recover after worker restart.',
  partialFailureProducesVisibleStateAndCompensation: 'ARCH-020-06 requires partial failure to produce visible state and compensation.',
  eventsCorrespondToCommittedFacts: 'ARCH-020-06 requires events to correspond to committed facts.',
  tenantContextRemainsPresentInEveryBoundary: 'ARCH-020-06 requires tenant context to remain present in every boundary.',
  businessStateChangesAreDeterministicServiceCommands: 'ARCH-020-06 requires business state changes to be deterministic service commands.',
  workflowsCoordinateButDoNotOwnDomainTruth: 'ARCH-020-06 requires workflows to coordinate but not own domain truth.',
  localTransactionsAndReliableEventsReplaceSharedTransactions: 'ARCH-020-06 requires local transactions and reliable events to replace shared transactions.',
  reconciliationIsAFirstClassRecoveryControl: 'ARCH-020-06 requires reconciliation to be a first-class recovery control.'
});

const REQUIRED_FALSE = Object.freeze({
  workflowStateDuplicatesAuthoritativeServiceRecords: 'ARCH-020-06 prohibits workflow state from duplicating authoritative service records.',
  distributedSharedDatabaseTransactionIsUsed: 'ARCH-020-06 prohibits a distributed shared-database transaction from being used.',
  notificationFailureAutomaticallyReversesBooking: 'ARCH-020-06 prohibits notification failure from automatically reversing a booking.',
  reconciliationDifferencesSilentlyOverwriteData: 'ARCH-020-06 prohibits reconciliation differences from silently overwriting data.',
  readModelsActAsAlternativeAuthorities: 'ARCH-020-06 prohibits read models from acting as alternative authorities.'
});

export class WorkflowAndBusinessServiceReferenceDescriptor {
  workflowReferenceBoundedServices() { return values(METADATA.workflowReferenceBoundedServices); } serviceOwnershipResponsibilities() { return values(METADATA.serviceOwnershipResponsibilities); }
  commandFields() { return values(METADATA.commandFields); } commandProviderValidations() { return values(METADATA.commandProviderValidations); }
  queryCharacteristics() { return values(METADATA.queryCharacteristics); } eventFields() { return values(METADATA.eventFields); }
  reservationWorkflowSteps() { return values(METADATA.reservationWorkflowSteps); } workflowStateElements() { return values(METADATA.workflowStateElements); }
  idempotencyExamples() { return values(METADATA.idempotencyExamples); } concurrencyControls() { return values(METADATA.concurrencyControls); }
  failureScenarios() { return values(METADATA.failureScenarios); } reconciliationCheckedRecords() { return values(METADATA.reconciliationCheckedRecords); }
  observabilityTraceCorrelationPoints() { return values(METADATA.observabilityTraceCorrelationPoints); } referenceAcceptanceCriteria() { return values(METADATA.referenceAcceptanceCriteria); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof WorkflowAndBusinessServiceReferenceProfile ? input : new WorkflowAndBusinessServiceReferenceProfile(input);
    const errors = [];
    if (!profile.referenceName) errors.push('Workflow and Business Service Reference profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Workflow and Business Service Reference must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.WORKFLOW_AND_BUSINESS_SERVICE_REFERENCE_ERROR_CODE, 'Workflow and Business Service Reference violates ARCH-020-06.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ReferenceImplementationValidationResult({ isValid: errors.length === 0, errors }); }
