import assert from 'node:assert/strict';
import test from 'node:test';

import { ServiceCollection } from '../../src/foundation/di/service-collection.js';
import {
  AGENT_RUNTIME_EXECUTION_ERROR_CODE,
  AgentRuntimeExecutionDescriptor,
  AgentRuntimeExecutionProfile,
  CANCELLATION_STEPS,
  CHECKPOINT_CONTENT_FIELDS,
  CHECKPOINT_TRIGGERS,
  COMPLETION_VALIDATION_CHECKS,
  CONCURRENCY_CONTROLS,
  CONTEXT_CYCLE_STEPS,
  CORE_STATE_TRANSITIONS,
  EXECUTION_LIMIT_TYPES,
  EXECUTION_LOOP_STEPS,
  EXECUTION_STATES,
  EXECUTION_STATE_CATEGORIES,
  FAILURE_CLASSIFICATIONS,
  INITIALIZATION_REQUIREMENTS,
  LIMIT_ENFORCEMENT_ACTIONS,
  RECOVERY_OPTIONS,
  RUNTIME_ADMISSION_CHECKS,
  RUNTIME_ADMISSION_INPUTS,
  RUNTIME_ADMISSION_OUTCOMES,
  RUNTIME_ARCHITECTURAL_RULES,
  RUNTIME_ARCHITECTURE_BOUNDARIES,
  RUNTIME_COMPONENTS,
  RUNTIME_EVENTS,
  RUNTIME_EVIDENCE_FIELDS,
  RUNTIME_IDENTITY_BINDINGS,
  RUNTIME_ISOLATION_DIMENSIONS,
  RUNTIME_OBSERVABILITY_SIGNALS,
  RUNTIME_QUALITY_ATTRIBUTES,
  SCHEDULING_FACTORS,
  SIDE_EFFECT_CLASSIFICATIONS,
  SIDE_EFFECT_LEDGER_FIELDS,
  STATE_TRANSITION_CONTRACT_FIELDS,
  STEP_BOUNDARY_OPERATIONS,
  TASK_FIELDS,
  TASK_STATES,
  WAIT_TYPES,
  addAiAgentFramework
} from '../../src/ai-agent-framework/index.js';
import { PlatformError } from '../../src/foundation/index.js';

test('ARCH-014-03 exposes admission, identity binding, runtime components, and execution state controls', () => {
  const descriptor = new AgentRuntimeExecutionDescriptor();

  assert.ok(descriptor.admissionInputs().includes(RUNTIME_ADMISSION_INPUTS.REQUESTED_GOAL));
  assert.ok(descriptor.admissionChecks().includes(RUNTIME_ADMISSION_CHECKS.NO_SUSPENSION_STOP));
  assert.deepEqual(descriptor.admissionOutcomes(), Object.values(RUNTIME_ADMISSION_OUTCOMES));
  assert.ok(descriptor.identityBindings().includes(RUNTIME_IDENTITY_BINDINGS.AUTHORITY_GRANT));
  assert.ok(descriptor.runtimeComponents().includes(RUNTIME_COMPONENTS.RECONCILIATION_CONTROLLER));
  assert.ok(descriptor.executionStates().includes(EXECUTION_STATES.WAITING_FOR_APPROVAL));
  assert.ok(descriptor.stateCategories().includes(EXECUTION_STATE_CATEGORIES.TERMINAL));
});

test('ARCH-014-03 exposes transition, initialization, step, task, loop, scheduling, isolation, and concurrency metadata', () => {
  const descriptor = new AgentRuntimeExecutionDescriptor();

  assert.ok(descriptor.transitionContractFields().includes(STATE_TRANSITION_CONTRACT_FIELDS.PERMITTED_FOLLOWING_STATES));
  assert.ok(descriptor.coreStateTransitions().includes(CORE_STATE_TRANSITIONS.COMPLETING_TO_COMPLETED));
  assert.ok(descriptor.initializationRequirements().includes(INITIALIZATION_REQUIREMENTS.INITIAL_EVIDENCE));
  assert.ok(descriptor.stepBoundaryOperations().includes(STEP_BOUNDARY_OPERATIONS.REVALIDATE_AUTHORITY));
  assert.ok(descriptor.taskStates().includes(TASK_STATES.SUPERSEDED));
  assert.ok(descriptor.taskFields().includes(TASK_FIELDS.COMPLETION_CRITERIA));
  assert.ok(descriptor.executionLoopSteps().includes(EXECUTION_LOOP_STEPS.DECIDE_NEXT_STATE));
  assert.ok(descriptor.schedulingFactors().includes(SCHEDULING_FACTORS.DATA_RESIDENCY_CONSTRAINTS));
  assert.ok(descriptor.isolationDimensions().includes(RUNTIME_ISOLATION_DIMENSIONS.CREDENTIALS));
  assert.ok(descriptor.concurrencyControls().includes(CONCURRENCY_CONTROLS.COMPARE_AND_SET));
});

test('ARCH-014-03 exposes limits, context, side effects, checkpoints, waits, cancellation, recovery, closure, and evidence', () => {
  const descriptor = new AgentRuntimeExecutionDescriptor();

  assert.ok(descriptor.executionLimitTypes().includes(EXECUTION_LIMIT_TYPES.FINANCIAL_COST));
  assert.ok(descriptor.limitEnforcementActions().includes(LIMIT_ENFORCEMENT_ACTIONS.HARD_STOP));
  assert.ok(descriptor.contextCycleSteps().includes(CONTEXT_CYCLE_STEPS.MINIMIZE_CONTENT));
  assert.ok(descriptor.sideEffectClassifications().includes(SIDE_EFFECT_CLASSIFICATIONS.UNKNOWN_EFFECT));
  assert.ok(descriptor.sideEffectLedgerFields().includes(SIDE_EFFECT_LEDGER_FIELDS.RECONCILIATION_STATE));
  assert.ok(descriptor.checkpointContentFields().includes(CHECKPOINT_CONTENT_FIELDS.SIDE_EFFECT_LEDGER));
  assert.ok(descriptor.checkpointTriggers().includes(CHECKPOINT_TRIGGERS.BEFORE_MATERIAL_ACTION));
  assert.ok(descriptor.waitTypes().includes(WAIT_TYPES.WORKFLOW_CALLBACK));
  assert.ok(descriptor.cancellationSteps().includes(CANCELLATION_STEPS.RECONCILE_ACTIONS));
  assert.ok(descriptor.failureClassifications().includes(FAILURE_CLASSIFICATIONS.RECONCILIATION_FAILURE));
  assert.ok(descriptor.recoveryOptions().includes(RECOVERY_OPTIONS.TERMINATE_SAFELY));
  assert.ok(descriptor.completionValidationChecks().includes(COMPLETION_VALIDATION_CHECKS.MATERIAL_ACTIONS_RECONCILED));
  assert.ok(descriptor.closureSteps().includes('revoke-execution-credentials'));
  assert.ok(descriptor.runtimeEvents().includes(RUNTIME_EVENTS.LIMIT_WARNING));
  assert.ok(descriptor.observabilitySignals().includes(RUNTIME_OBSERVABILITY_SIGNALS.RECONCILIATION_BACKLOG));
  assert.ok(descriptor.evidenceFields().includes(RUNTIME_EVIDENCE_FIELDS.COMPLETION_VALIDATION));
  assert.ok(descriptor.qualityAttributes().includes(RUNTIME_QUALITY_ATTRIBUTES.PORTABILITY));
});

test('ARCH-014-03 validates complete profiles and rejects runtime boundary violations', () => {
  const descriptor = new AgentRuntimeExecutionDescriptor();

  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);

  const invalid = descriptor.validateProfile({
    admissionBeforeMaterialState: false,
    approvedVersionBinding: false,
    stateMachineOutsideModel: false,
    authoritativeLimits: false,
    modelControlsStateMachine: true,
    runtimeOwnsBusinessRules: true,
    naturalLanguageIdempotency: true,
    silentGoalReduction: true,
    terminalStateReactivation: true,
    confidenceMakesTaskReady: true,
    schedulerChangesAuthority: true,
    agentExtendsHardLimits: true,
    repeatMaterialActionOnLostResponse: true,
    inventedCompensation: true,
    modelAssertionCompletesExecution: true,
    selectsRuntimeProduct: true
  });

  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /requested-agent/);
  assert.match(invalid.errors.join('\n'), /no-suspension-or-emergency-stop-applies/);
  assert.match(invalid.errors.join('\n'), /authority-grant/);
  assert.match(invalid.errors.join('\n'), /Executions must be admitted before creating material state/);
  assert.match(invalid.errors.join('\n'), /The model must not control the execution state machine/);
  assert.match(invalid.errors.join('\n'), /Identical natural-language goals must not be treated as idempotency keys/);
  assert.match(invalid.errors.join('\n'), /ARCH-014-03 does not select runtime/);
});

test('ARCH-014-03 assertion detects incomplete runtime metadata', () => {
  class IncompleteDescriptor extends AgentRuntimeExecutionDescriptor {
    admissionInputs() { return []; }
  }

  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    error => error instanceof PlatformError &&
      error.code === AGENT_RUNTIME_EXECUTION_ERROR_CODE &&
      error.details.errors.some(message => message.includes('documented admissionInputs'))
  );
});

test('ARCH-014-03 descriptor is available through AI agent framework dependency injection', () => {
  const services = addAiAgentFramework(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('AgentRuntimeExecutionDescriptor');

  assert.ok(descriptor instanceof AgentRuntimeExecutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  assert.ok(descriptor.architecturalRules().includes(RUNTIME_ARCHITECTURAL_RULES.VENDOR_MODEL_NEUTRAL));
  assert.ok(descriptor.architectureBoundaries().includes(RUNTIME_ARCHITECTURE_BOUNDARIES.PRODUCT_SELECTION));
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['admissionInputs', 'admissionChecks', 'admissionOutcomes', 'identityBindings',
    'runtimeComponents', 'executionStates', 'stateCategories', 'transitionContractFields',
    'coreStateTransitions', 'initializationRequirements', 'stepBoundaryOperations', 'taskStates',
    'taskFields', 'executionLoopSteps', 'schedulingFactors', 'isolationDimensions', 'concurrencyControls',
    'executionLimitTypes', 'limitEnforcementActions', 'contextCycleSteps', 'sideEffectClassifications',
    'sideEffectLedgerFields', 'checkpointContentFields', 'checkpointTriggers', 'waitTypes',
    'cancellationSteps', 'failureClassifications', 'recoveryOptions', 'completionValidationChecks',
    'closureSteps', 'runtimeEvents', 'observabilitySignals', 'evidenceFields', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries']) values[key] = descriptor[key]();
  return new AgentRuntimeExecutionProfile({ runtimeName: 'Agent Runtime and Execution Model', ...values });
}
