import { PlatformError } from '../../foundation/errors/platform-error.js';
import { WorkflowRuntimeStateProfile } from '../contracts/workflow-runtime-state-profile.js';
import { WorkflowEngineValidationResult } from '../contracts/workflow-engine-validation-result.js';
import {
  WORKFLOW_ADMISSION_CHECKS, WORKFLOW_ADMISSION_OUTCOMES, WORKFLOW_CONCURRENCY_CONTROLS,
  WORKFLOW_EXECUTION_BINDINGS, WORKFLOW_RUNTIME_ARCHITECTURAL_RULES, WORKFLOW_RUNTIME_ARCHITECTURE_BOUNDARIES,
  WORKFLOW_RUNTIME_COMPONENTS, WORKFLOW_RUNTIME_EXECUTION_STATES, WORKFLOW_RUNTIME_STATE_ERROR_CODE,
  WORKFLOW_RUNTIME_FAILURES, WORKFLOW_RUNTIME_INPUTS, WORKFLOW_RUNTIME_OPERATIONS,
  WORKFLOW_RUNTIME_QUALITY_ATTRIBUTES, WORKFLOW_RUNTIME_RESPONSIBILITIES, WORKFLOW_RUNTIME_STATE_FIELDS,
  WORKFLOW_RUNTIME_STATE_INVARIANTS, WORKFLOW_STATE_REPRESENTATIONS, WORKFLOW_TASK_STATES,
  WORKFLOW_TRANSITION_FIELDS, WORKFLOW_WAIT_TYPES
} from '../runtime-state-constants.js';

const MAP = Object.freeze({
  responsibilities: WORKFLOW_RUNTIME_RESPONSIBILITIES, inputs: WORKFLOW_RUNTIME_INPUTS,
  admissionChecks: WORKFLOW_ADMISSION_CHECKS, admissionOutcomes: WORKFLOW_ADMISSION_OUTCOMES,
  executionBindings: WORKFLOW_EXECUTION_BINDINGS, components: WORKFLOW_RUNTIME_COMPONENTS,
  executionStates: WORKFLOW_RUNTIME_EXECUTION_STATES, stateFields: WORKFLOW_RUNTIME_STATE_FIELDS,
  stateInvariants: WORKFLOW_RUNTIME_STATE_INVARIANTS, stateRepresentations: WORKFLOW_STATE_REPRESENTATIONS,
  transitionFields: WORKFLOW_TRANSITION_FIELDS, concurrencyControls: WORKFLOW_CONCURRENCY_CONTROLS,
  taskStates: WORKFLOW_TASK_STATES, waitTypes: WORKFLOW_WAIT_TYPES, failureTypes: WORKFLOW_RUNTIME_FAILURES,
  operations: WORKFLOW_RUNTIME_OPERATIONS, qualityAttributes: WORKFLOW_RUNTIME_QUALITY_ATTRIBUTES,
  architecturalRules: WORKFLOW_RUNTIME_ARCHITECTURAL_RULES,
  architectureBoundaries: WORKFLOW_RUNTIME_ARCHITECTURE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  activeAuthorizedAdmission: 'The runtime must admit only active and authorized workflow versions.',
  immutableExecutionIdentity: 'Each logical execution must receive one immutable identity.',
  exactDefinitionBinding: 'Every execution must bind to an exact effective definition version.',
  authoritativeStateDurable: 'Authoritative workflow state must be durable and outside process memory.',
  monotonicStateVersions: 'Authoritative state versions must advance monotonically.',
  deterministicTransitions: 'Runtime transitions must be deterministic.',
  validateBeforeMutation: 'Identity, authority, scope, contract, correlation, expected state, and policy must be validated before mutation.',
  explicitAtomicityBoundary: 'State, history, accepted input, and publication intent require an explicit atomicity boundary.',
  staleTransitionsReevaluated: 'Stale transitions must be rejected, reloaded, and reevaluated.',
  duplicateDeliveryHarmless: 'Duplicate starts, inputs, scheduling, wake-ups, timers, results, and publication must be harmless.',
  domainServicesOwnBusinessTruth: 'Owning domain services must remain authoritative for business truth.',
  runtimeOnlyStateWrites: 'Workers, agents, clients, and external services must not write authoritative workflow state.',
  intentBeforeDispatch: 'Material external-action intent must be durable before dispatch.',
  reconcileBeforeRetry: 'Uncertain material effects must be reconciled before retry.',
  effectivelyOnceControls: 'Effectively-once outcomes require identity, idempotency, deduplication, conditional writes, and reconciliation.',
  durableWaitsTimers: 'Waits and timers must be durable and restart safe.',
  noLocksAcrossLongWaits: 'Locks must not span external calls or human waits.',
  orderedIntegrityProtectedHistory: 'Runtime history must remain ordered, attributable, and integrity protected.',
  replayDoesNotRepeatEffects: 'Replay must not repeat external effects by default.',
  terminalStatesIrreversible: 'Terminal workflow states must be irreversible.',
  authoritativeCompletionEvidence: 'Completed requires authoritative state, outcome, and evidence validation.',
  recoverFromPersistedState: 'Runtime recovery must begin from authoritative persisted state.',
  tenantPropertyIsolation: 'Tenant and property isolation must apply across all runtime state and operations.',
  confusedDeputyPrevention: 'Material authority must be the intersection of workflow, initiator, task, worker, scope, and policy.',
  controlledStateRepair: 'State repair must be exceptional, approved, attributable, validated, and evidenced.',
  vendorNeutral: 'Workflow runtime semantics must remain vendor neutral.',
  technologyIndependent: 'Workflow runtime semantics must remain technology independent.'
});

const REQUIRED_FALSE = Object.freeze({
  workerControlsStateMachine: 'No worker, agent, caller, message, or model may control the state machine directly.',
  processMemoryAuthoritative: 'Process memory must not be authoritative workflow state.',
  queueIsOnlyIntentRecord: 'Queue state must not be the only record of workflow intent.',
  dispatchAcknowledgementMeansCompletion: 'Dispatch acknowledgement must not imply business or task completion.',
  universalExactlyOnceClaim: 'The runtime must not claim universal exactly-once physical delivery.',
  terminalExecutionReopens: 'Late input must not reopen a terminal execution.',
  arbitraryOperatorStateEdit: 'Operators must not edit arbitrary workflow state directly.',
  migrationRewritesHistory: 'Runtime migration must not rewrite historical version attribution.',
  untrustedScopeAccepted: 'Tenant and property scope must not be accepted solely from untrusted input.',
  secretsPersistedInState: 'Secrets, unnecessary personal data, raw model context, and hidden reasoning must not be indiscriminately persisted.',
  eventSourcingRequired: 'ARCH-015-03 does not mandate event sourcing.',
  selectsRuntimeTechnology: 'ARCH-015-03 does not select storage, queue, broker, or workflow products.',
  definesLaterChapterDetails: 'ARCH-015-03 does not define detailed worker, interaction, reliability-policy, or API contracts.'
});

export class WorkflowRuntimeStateDescriptor {
  responsibilities() { return values(MAP.responsibilities); }
  inputs() { return values(MAP.inputs); }
  admissionChecks() { return values(MAP.admissionChecks); }
  admissionOutcomes() { return values(MAP.admissionOutcomes); }
  executionBindings() { return values(MAP.executionBindings); }
  components() { return values(MAP.components); }
  executionStates() { return values(MAP.executionStates); }
  stateFields() { return values(MAP.stateFields); }
  stateInvariants() { return values(MAP.stateInvariants); }
  stateRepresentations() { return values(MAP.stateRepresentations); }
  transitionFields() { return values(MAP.transitionFields); }
  concurrencyControls() { return values(MAP.concurrencyControls); }
  taskStates() { return values(MAP.taskStates); }
  waitTypes() { return values(MAP.waitTypes); }
  failureTypes() { return values(MAP.failureTypes); }
  operations() { return values(MAP.operations); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof WorkflowRuntimeStateProfile
      ? profileInput : new WorkflowRuntimeStateProfile(profileInput);
    const errors = [];
    if (!profile.runtimeName) errors.push('Workflow runtime state profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) {
      appendMissing(errors, profile[key], values(source), `${key} must include`);
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Workflow Runtime and State Model must include documented ${key}.`);
      }
    }
    if (errors.length) throw new PlatformError(
      WORKFLOW_RUNTIME_STATE_ERROR_CODE, 'Workflow Runtime and State Model violates ARCH-015-03.', { errors });
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
