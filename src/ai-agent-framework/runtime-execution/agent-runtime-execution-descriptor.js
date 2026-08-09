import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AgentFrameworkValidationResult } from '../contracts/agent-framework-validation-result.js';
import { AgentRuntimeExecutionProfile } from '../contracts/agent-runtime-execution-profile.js';
import {
  AGENT_RUNTIME_EXECUTION_ERROR_CODE, CANCELLATION_STEPS, CHECKPOINT_CONTENT_FIELDS, CLOSURE_STEPS,
  CHECKPOINT_TRIGGERS, COMPLETION_VALIDATION_CHECKS, CONCURRENCY_CONTROLS, CONTEXT_CYCLE_STEPS,
  CORE_STATE_TRANSITIONS, EXECUTION_LIMIT_TYPES, EXECUTION_LOOP_STEPS, EXECUTION_STATES,
  EXECUTION_STATE_CATEGORIES, FAILURE_CLASSIFICATIONS, INITIALIZATION_REQUIREMENTS,
  LIMIT_ENFORCEMENT_ACTIONS, RECOVERY_OPTIONS, RUNTIME_ADMISSION_CHECKS, RUNTIME_ADMISSION_INPUTS,
  RUNTIME_ADMISSION_OUTCOMES, RUNTIME_ARCHITECTURAL_RULES, RUNTIME_ARCHITECTURE_BOUNDARIES,
  RUNTIME_COMPONENTS, RUNTIME_EVENTS, RUNTIME_EVIDENCE_FIELDS, RUNTIME_IDENTITY_BINDINGS,
  RUNTIME_ISOLATION_DIMENSIONS, RUNTIME_OBSERVABILITY_SIGNALS, RUNTIME_QUALITY_ATTRIBUTES,
  SCHEDULING_FACTORS, SIDE_EFFECT_CLASSIFICATIONS, SIDE_EFFECT_LEDGER_FIELDS,
  STATE_TRANSITION_CONTRACT_FIELDS, STEP_BOUNDARY_OPERATIONS, TASK_FIELDS, TASK_STATES, WAIT_TYPES
} from '../runtime-execution-constants.js';

const MAP = Object.freeze({
  admissionInputs: RUNTIME_ADMISSION_INPUTS,
  admissionChecks: RUNTIME_ADMISSION_CHECKS,
  admissionOutcomes: RUNTIME_ADMISSION_OUTCOMES,
  identityBindings: RUNTIME_IDENTITY_BINDINGS,
  runtimeComponents: RUNTIME_COMPONENTS,
  executionStates: EXECUTION_STATES,
  stateCategories: EXECUTION_STATE_CATEGORIES,
  transitionContractFields: STATE_TRANSITION_CONTRACT_FIELDS,
  coreStateTransitions: CORE_STATE_TRANSITIONS,
  initializationRequirements: INITIALIZATION_REQUIREMENTS,
  stepBoundaryOperations: STEP_BOUNDARY_OPERATIONS,
  taskStates: TASK_STATES,
  taskFields: TASK_FIELDS,
  executionLoopSteps: EXECUTION_LOOP_STEPS,
  schedulingFactors: SCHEDULING_FACTORS,
  isolationDimensions: RUNTIME_ISOLATION_DIMENSIONS,
  concurrencyControls: CONCURRENCY_CONTROLS,
  executionLimitTypes: EXECUTION_LIMIT_TYPES,
  limitEnforcementActions: LIMIT_ENFORCEMENT_ACTIONS,
  contextCycleSteps: CONTEXT_CYCLE_STEPS,
  sideEffectClassifications: SIDE_EFFECT_CLASSIFICATIONS,
  sideEffectLedgerFields: SIDE_EFFECT_LEDGER_FIELDS,
  checkpointContentFields: CHECKPOINT_CONTENT_FIELDS,
  checkpointTriggers: CHECKPOINT_TRIGGERS,
  waitTypes: WAIT_TYPES,
  cancellationSteps: CANCELLATION_STEPS,
  failureClassifications: FAILURE_CLASSIFICATIONS,
  recoveryOptions: RECOVERY_OPTIONS,
  completionValidationChecks: COMPLETION_VALIDATION_CHECKS,
  closureSteps: CLOSURE_STEPS,
  runtimeEvents: RUNTIME_EVENTS,
  observabilitySignals: RUNTIME_OBSERVABILITY_SIGNALS,
  evidenceFields: RUNTIME_EVIDENCE_FIELDS,
  qualityAttributes: RUNTIME_QUALITY_ATTRIBUTES,
  architecturalRules: RUNTIME_ARCHITECTURAL_RULES,
  architectureBoundaries: RUNTIME_ARCHITECTURE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  admissionBeforeMaterialState: 'Executions must be admitted before creating material state.',
  approvedVersionBinding: 'Every execution must bind to an approved agent version.',
  scopeAuthorityBeforeWork: 'Identity, tenant, property, goal, and authority must be established before work.',
  stateMachineOutsideModel: 'The execution state machine must remain outside model control.',
  authoritativeExternalState: 'The runtime must maintain authoritative external state.',
  enforceableTransitions: 'State transitions must be explicit and enforceable.',
  idempotentAttributableTransitions: 'State transitions must be idempotent and attributable.',
  boundedSteps: 'Runtime work must execute as bounded steps.',
  validateBeforeAdvance: 'Results must be validated before advancing execution state.',
  authoritativeLimits: 'Limits must be established and tracked authoritatively.',
  tenantPropertyIsolation: 'Tenant and property isolation must be preserved.',
  credentialsOutsideModelContext: 'Credentials must remain outside model context.',
  idempotencyAndReconciliation: 'External actions must use idempotency and reconciliation.',
  sideEffectLedger: 'Material actions must be captured in a side-effect ledger.',
  recoveryCheckpoints: 'Checkpoints must be appropriate to recovery needs.',
  authorityRevalidation: 'Authority must be revalidated on resume and at sensitive boundaries.',
  stopControls: 'Pause, suspension, cancellation, expiration, and termination must be supported.',
  noBlindMaterialRetries: 'Material actions must not be blindly retried.',
  businessOwnedCompensation: 'Compensation must be defined by owning business services or workflows.',
  independentCompletionValidation: 'Completion must be verified independently of model assertion.',
  revokeCredentialsOnClosure: 'Execution credentials must be revoked at closure.',
  evidenceProducing: 'Runtime execution must produce operational and governance evidence.',
  workflowOwnsDurableProcess: 'Durable deterministic process semantics must remain with the Workflow Engine.',
  vendorModelNeutral: 'Runtime execution must remain vendor and model neutral.'
});

const REQUIRED_FALSE = Object.freeze({
  modelControlsStateMachine: 'The model must not control the execution state machine.',
  runtimeOwnsBusinessRules: 'The runtime must not own business rules.',
  runtimeOwnsWorkflowDefinitions: 'The runtime must not own workflow definitions.',
  runtimeOwnsKnowledgeTruth: 'The runtime must not own knowledge truth.',
  runtimeOwnsToolImplementation: 'The runtime must not own tool implementation.',
  naturalLanguageIdempotency: 'Identical natural-language goals must not be treated as idempotency keys.',
  silentGoalReduction: 'Admission must not silently reduce or expand the requested goal.',
  terminalStateReactivation: 'Terminal executions must not return to active states.',
  confidenceMakesTaskReady: 'Model confidence alone must not make a task ready.',
  schedulerChangesAuthority: 'Scheduling must not change authority or tenant scope.',
  agentRaisesOwnPriority: 'Agents must not raise their own priority beyond authorized policy.',
  uncontrolledParallelism: 'Parallelism must not be introduced solely because multiple model calls are available.',
  agentExtendsHardLimits: 'An agent must not extend its own hard limits.',
  secretsInCheckpoints: 'Checkpoints must not indiscriminately store secrets.',
  repeatMaterialActionOnLostResponse: 'Resume must not repeat material action solely because a prior response was lost.',
  blindMaterialRetries: 'Material actions must not be retried blindly.',
  inventedCompensation: 'Agents must not invent compensation actions.',
  modelAssertionCompletesExecution: 'Model assertion alone must not complete an execution.',
  exactlyOnceClaimWithoutEvidence: 'Agents must not claim exactly-once completion without deterministic service evidence.',
  selectsRuntimeProduct: 'ARCH-014-03 does not select runtime, scheduler, queue, or state-store products.'
});

export class AgentRuntimeExecutionDescriptor {
  admissionInputs() { return values(MAP.admissionInputs); }
  admissionChecks() { return values(MAP.admissionChecks); }
  admissionOutcomes() { return values(MAP.admissionOutcomes); }
  identityBindings() { return values(MAP.identityBindings); }
  runtimeComponents() { return values(MAP.runtimeComponents); }
  executionStates() { return values(MAP.executionStates); }
  stateCategories() { return values(MAP.stateCategories); }
  transitionContractFields() { return values(MAP.transitionContractFields); }
  coreStateTransitions() { return values(MAP.coreStateTransitions); }
  initializationRequirements() { return values(MAP.initializationRequirements); }
  stepBoundaryOperations() { return values(MAP.stepBoundaryOperations); }
  taskStates() { return values(MAP.taskStates); }
  taskFields() { return values(MAP.taskFields); }
  executionLoopSteps() { return values(MAP.executionLoopSteps); }
  schedulingFactors() { return values(MAP.schedulingFactors); }
  isolationDimensions() { return values(MAP.isolationDimensions); }
  concurrencyControls() { return values(MAP.concurrencyControls); }
  executionLimitTypes() { return values(MAP.executionLimitTypes); }
  limitEnforcementActions() { return values(MAP.limitEnforcementActions); }
  contextCycleSteps() { return values(MAP.contextCycleSteps); }
  sideEffectClassifications() { return values(MAP.sideEffectClassifications); }
  sideEffectLedgerFields() { return values(MAP.sideEffectLedgerFields); }
  checkpointContentFields() { return values(MAP.checkpointContentFields); }
  checkpointTriggers() { return values(MAP.checkpointTriggers); }
  waitTypes() { return values(MAP.waitTypes); }
  cancellationSteps() { return values(MAP.cancellationSteps); }
  failureClassifications() { return values(MAP.failureClassifications); }
  recoveryOptions() { return values(MAP.recoveryOptions); }
  completionValidationChecks() { return values(MAP.completionValidationChecks); }
  closureSteps() { return values(MAP.closureSteps); }
  runtimeEvents() { return values(MAP.runtimeEvents); }
  observabilitySignals() { return values(MAP.observabilitySignals); }
  evidenceFields() { return values(MAP.evidenceFields); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof AgentRuntimeExecutionProfile ? profileInput : new AgentRuntimeExecutionProfile(profileInput);
    const errors = [];
    if (!profile.runtimeName) errors.push('Agent Runtime and Execution profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Agent Runtime and Execution must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(AGENT_RUNTIME_EXECUTION_ERROR_CODE, 'Agent Runtime and Execution violates ARCH-014-03.', { errors });
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new AgentFrameworkValidationResult({ isValid: errors.length === 0, errors }); }
