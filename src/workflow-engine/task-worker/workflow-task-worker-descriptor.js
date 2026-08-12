import { PlatformError } from '../../foundation/errors/platform-error.js';
import { WorkflowTaskWorkerProfile } from '../contracts/workflow-task-worker-profile.js';
import { WorkflowEngineValidationResult } from '../contracts/workflow-engine-validation-result.js';
import {
  WORKFLOW_ACTIVITY_FAILURE_TYPES, WORKFLOW_ACTIVITY_RESULT_FIELDS, WORKFLOW_ATTEMPT_BINDINGS,
  WORKFLOW_ATTEMPT_STATES, WORKFLOW_BACKPRESSURE_ACTIONS, WORKFLOW_CAPABILITY_MATCH_FIELDS,
  WORKFLOW_DEAD_LETTER_CAUSES, WORKFLOW_DELIVERY_MODELS, WORKFLOW_DISPATCH_INTENT_FIELDS,
  WORKFLOW_LEASE_FIELDS, WORKFLOW_QUEUE_CAPABILITIES, WORKFLOW_TASK_IDENTITY_FIELDS,
  WORKFLOW_TASK_STATES_V2, WORKFLOW_TASK_WORKER_BOUNDARIES, WORKFLOW_TASK_WORKER_ERROR_CODE,
  WORKFLOW_TASK_WORKER_QUALITY_ATTRIBUTES, WORKFLOW_TASK_WORKER_RESPONSIBILITIES,
  WORKFLOW_TASK_WORKER_RULES, WORKFLOW_WORK_CONCEPTS, WORKFLOW_WORKER_IDENTITY_FIELDS,
  WORKFLOW_WORKER_LIFECYCLE, WORKFLOW_WORKER_OPERATIONS
} from '../task-worker-constants.js';

const MAP = Object.freeze({
  concepts: WORKFLOW_WORK_CONCEPTS, responsibilities: WORKFLOW_TASK_WORKER_RESPONSIBILITIES,
  taskIdentityFields: WORKFLOW_TASK_IDENTITY_FIELDS, attemptBindings: WORKFLOW_ATTEMPT_BINDINGS,
  taskStates: WORKFLOW_TASK_STATES_V2, attemptStates: WORKFLOW_ATTEMPT_STATES,
  dispatchIntentFields: WORKFLOW_DISPATCH_INTENT_FIELDS, queueCapabilities: WORKFLOW_QUEUE_CAPABILITIES,
  deliveryModels: WORKFLOW_DELIVERY_MODELS, workerIdentityFields: WORKFLOW_WORKER_IDENTITY_FIELDS,
  workerLifecycle: WORKFLOW_WORKER_LIFECYCLE, capabilityMatchFields: WORKFLOW_CAPABILITY_MATCH_FIELDS,
  leaseFields: WORKFLOW_LEASE_FIELDS, resultFields: WORKFLOW_ACTIVITY_RESULT_FIELDS,
  failureTypes: WORKFLOW_ACTIVITY_FAILURE_TYPES, deadLetterCauses: WORKFLOW_DEAD_LETTER_CAUSES,
  backpressureActions: WORKFLOW_BACKPRESSURE_ACTIONS, operations: WORKFLOW_WORKER_OPERATIONS,
  qualityAttributes: WORKFLOW_TASK_WORKER_QUALITY_ATTRIBUTES, architecturalRules: WORKFLOW_TASK_WORKER_RULES,
  architectureBoundaries: WORKFLOW_TASK_WORKER_BOUNDARIES
});
const REQUIRED_TRUE = Object.freeze({
  runtimeOwnsTasks: 'The Workflow Engine must own durable task identity, state, eligibility, and completion.',
  logicalAttemptSeparation: 'Logical tasks must remain distinct from bounded activity attempts.',
  durableIntentBeforeDispatch: 'Task eligibility and dispatch intent must be durable before worker delivery.',
  stableIdentities: 'Tasks, attempts, dispatches, leases, workers, results, and operations require stable identities.',
  queueDrivenCoordination: 'Executable activity attempts must use queue-driven worker coordination.',
  queueNotStateAuthority: 'Queue infrastructure must not become workflow, task, or business state authority.',
  workerAuthentication: 'Every worker must authenticate through approved workload identity.',
  workerAuthorization: 'Every worker must be authorized for the exact activity, scope, and authority.',
  registeredCapabilityMatching: 'Worker routing must validate registered capability and contract compatibility.',
  tenantPropertyIsolation: 'Tenant and property scope must be preserved through routing, execution, result, and evidence.',
  leastPrivilegeCredentials: 'Workers must receive minimum context and task-scoped mediated credentials.',
  statelessWorkers: 'Workers should remain stateless between attempts where practical.',
  boundedLeasesAndFencing: 'Activity execution must use bounded leases, visibility, and fencing.',
  heartbeatOnlyLiveness: 'Heartbeats indicate liveness and progress, not completion.',
  resultValidationBeforeCompletion: 'Worker results must be authenticated and validated before task completion.',
  attemptFailureSeparateFromTaskFailure: 'Attempt failure must remain distinct from logical task failure.',
  engineControlsRetry: 'The Workflow Engine must coordinate attempt-level retry.',
  reconcileBeforeRetry: 'Uncertain material effects must be reconciled before retry.',
  effectivelyOnceControls: 'Material outcomes require stable identity, idempotency, deduplication, validation, and domain invariants.',
  duplicateLateResultsHarmless: 'Duplicate and late results must not cause duplicate logical completion.',
  controlledDeadLetterRecovery: 'Dead-letter recovery must load authoritative task state and reconcile before reprocessing.',
  explicitLoadControls: 'Priority, fairness, rate limiting, backpressure, circuit breaking, and bulkheads must be explicit.',
  gracefulDrain: 'Planned worker removal should drain active attempts safely.',
  evidencePreserved: 'Task and activity evidence must survive failure, cancellation, and recovery.',
  vendorNeutral: 'Task and worker semantics must remain vendor neutral.',
  technologyIndependent: 'Task and worker semantics must remain technology independent.'
});
const REQUIRED_FALSE = Object.freeze({
  workerWritesWorkflowState: 'Workers must not write authoritative workflow or task state directly.',
  workerInfersScope: 'Workers must not infer or replace tenant or property scope.',
  workerBroadensAuthority: 'Workers must not broaden effective workflow authority.',
  deliveryAckMeansCompletion: 'Queue acknowledgement must not mean task or business completion.',
  workerSuccessMeansCompletion: 'Worker success assertion must not bypass result and completion validation.',
  workerInventsRetry: 'Workers must not invent attempt-level retries.',
  workerInventsCompensation: 'Workers must not invent compensation semantics.',
  queueIsOnlyIntentRecord: 'Queue state must not be the only record of activity intent.',
  universalExactlyOnce: 'The architecture must not claim universal exactly-once physical execution.',
  blindDeadLetterReplay: 'Blind dead-letter replay is prohibited for material actions.',
  heartbeatMeansCompletion: 'Heartbeat must not be treated as task completion.',
  genericWorkersReplaceHumansAgents: 'Human and agent performers must not be reduced to generic infrastructure workers.',
  selectsQueueComputeLanguage: 'ARCH-015-04 does not select queue, compute, language, or workflow products.',
  definesAdjacentChapterDetails: 'ARCH-015-04 does not define detailed interaction, reliability-policy, transition-storage, or API contracts.'
});

export class WorkflowTaskWorkerDescriptor {
  concepts() { return values(MAP.concepts); }
  responsibilities() { return values(MAP.responsibilities); }
  taskIdentityFields() { return values(MAP.taskIdentityFields); }
  attemptBindings() { return values(MAP.attemptBindings); }
  taskStates() { return values(MAP.taskStates); }
  attemptStates() { return values(MAP.attemptStates); }
  dispatchIntentFields() { return values(MAP.dispatchIntentFields); }
  queueCapabilities() { return values(MAP.queueCapabilities); }
  deliveryModels() { return values(MAP.deliveryModels); }
  workerIdentityFields() { return values(MAP.workerIdentityFields); }
  workerLifecycle() { return values(MAP.workerLifecycle); }
  capabilityMatchFields() { return values(MAP.capabilityMatchFields); }
  leaseFields() { return values(MAP.leaseFields); }
  resultFields() { return values(MAP.resultFields); }
  failureTypes() { return values(MAP.failureTypes); }
  deadLetterCauses() { return values(MAP.deadLetterCauses); }
  backpressureActions() { return values(MAP.backpressureActions); }
  operations() { return values(MAP.operations); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof WorkflowTaskWorkerProfile
      ? profileInput : new WorkflowTaskWorkerProfile(profileInput);
    const errors = [];
    if (!profile.profileName) errors.push('Workflow task and worker profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Tasks, Activities, and Workers must include documented ${key}.`);
      }
    }
    if (errors.length) throw new PlatformError(
      WORKFLOW_TASK_WORKER_ERROR_CODE, 'Tasks, Activities, and Workers violates ARCH-015-04.', { errors });
    return validation(errors);
  }
}
function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) {
  return new WorkflowEngineValidationResult({ isValid: errors.length === 0, errors });
}
