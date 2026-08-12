import assert from 'node:assert/strict';
import test from 'node:test';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  WORKFLOW_ADMISSION_CHECKS, WORKFLOW_ADMISSION_OUTCOMES, WORKFLOW_CONCURRENCY_CONTROLS,
  WORKFLOW_EXECUTION_BINDINGS, WORKFLOW_RUNTIME_ARCHITECTURAL_RULES, WORKFLOW_RUNTIME_ARCHITECTURE_BOUNDARIES,
  WORKFLOW_RUNTIME_COMPONENTS, WORKFLOW_RUNTIME_EXECUTION_STATES, WORKFLOW_RUNTIME_FAILURES,
  WORKFLOW_RUNTIME_INPUTS, WORKFLOW_RUNTIME_OPERATIONS, WORKFLOW_RUNTIME_QUALITY_ATTRIBUTES,
  WORKFLOW_RUNTIME_RESPONSIBILITIES, WORKFLOW_RUNTIME_STATE_ERROR_CODE, WORKFLOW_RUNTIME_STATE_FIELDS,
  WORKFLOW_RUNTIME_STATE_INVARIANTS, WORKFLOW_STATE_REPRESENTATIONS, WORKFLOW_TASK_STATES,
  WORKFLOW_TRANSITION_FIELDS, WORKFLOW_WAIT_TYPES,
  WorkflowRuntimeStateDescriptor, WorkflowRuntimeStateProfile, addWorkflowEngine
} from '../../src/workflow-engine/index.js';

test('ARCH-015-03 exposes runtime responsibilities, inputs, admission, bindings, and components', () => {
  const descriptor = new WorkflowRuntimeStateDescriptor();
  assert.ok(descriptor.responsibilities().includes(WORKFLOW_RUNTIME_RESPONSIBILITIES.AUTHORITATIVE_STATE));
  assert.deepEqual(descriptor.inputs(), Object.values(WORKFLOW_RUNTIME_INPUTS));
  assert.ok(descriptor.admissionChecks().includes(WORKFLOW_ADMISSION_CHECKS.SUSPENSION));
  assert.deepEqual(descriptor.admissionOutcomes(), Object.values(WORKFLOW_ADMISSION_OUTCOMES));
  assert.ok(descriptor.executionBindings().includes(WORKFLOW_EXECUTION_BINDINGS.IDEMPOTENCY));
  assert.deepEqual(descriptor.components(), Object.values(WORKFLOW_RUNTIME_COMPONENTS));
});

test('ARCH-015-03 exposes lifecycle state, authoritative record, invariants, transitions, and concurrency', () => {
  const descriptor = new WorkflowRuntimeStateDescriptor();
  assert.ok(descriptor.executionStates().includes(WORKFLOW_RUNTIME_EXECUTION_STATES.RECONCILING));
  assert.ok(descriptor.stateFields().includes(WORKFLOW_RUNTIME_STATE_FIELDS.SIDE_EFFECTS));
  assert.ok(descriptor.stateInvariants().includes(WORKFLOW_RUNTIME_STATE_INVARIANTS.TERMINAL_IRREVERSIBLE));
  assert.ok(descriptor.stateRepresentations().includes(WORKFLOW_STATE_REPRESENTATIONS.HYBRID));
  assert.ok(descriptor.transitionFields().includes(WORKFLOW_TRANSITION_FIELDS.EXPECTED_VERSION));
  assert.ok(descriptor.concurrencyControls().includes(WORKFLOW_CONCURRENCY_CONTROLS.FENCING));
});

test('ARCH-015-03 exposes tasks, waits, failures, operations, quality, rules, and boundaries', () => {
  const descriptor = new WorkflowRuntimeStateDescriptor();
  assert.deepEqual(descriptor.taskStates(), Object.values(WORKFLOW_TASK_STATES));
  assert.ok(descriptor.waitTypes().includes(WORKFLOW_WAIT_TYPES.HUMAN));
  assert.ok(descriptor.failureTypes().includes(WORKFLOW_RUNTIME_FAILURES.RECONCILIATION));
  assert.ok(descriptor.operations().includes(WORKFLOW_RUNTIME_OPERATIONS.MIGRATE));
  assert.ok(descriptor.qualityAttributes().includes(WORKFLOW_RUNTIME_QUALITY_ATTRIBUTES.RECOVERABILITY));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_RUNTIME_ARCHITECTURAL_RULES.INTENT_BEFORE_DISPATCH));
  assert.ok(descriptor.architectureBoundaries().includes(WORKFLOW_RUNTIME_ARCHITECTURE_BOUNDARIES.EVENT_SOURCING));
});

test('ARCH-015-03 accepts complete profiles and rejects runtime boundary violations', () => {
  const descriptor = new WorkflowRuntimeStateDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    activeAuthorizedAdmission: false, immutableExecutionIdentity: false, exactDefinitionBinding: false,
    authoritativeStateDurable: false, monotonicStateVersions: false, deterministicTransitions: false,
    validateBeforeMutation: false, explicitAtomicityBoundary: false, staleTransitionsReevaluated: false,
    duplicateDeliveryHarmless: false, domainServicesOwnBusinessTruth: false, runtimeOnlyStateWrites: false,
    intentBeforeDispatch: false, reconcileBeforeRetry: false, effectivelyOnceControls: false,
    durableWaitsTimers: false, noLocksAcrossLongWaits: false, orderedIntegrityProtectedHistory: false,
    replayDoesNotRepeatEffects: false, terminalStatesIrreversible: false, authoritativeCompletionEvidence: false,
    recoverFromPersistedState: false, tenantPropertyIsolation: false, confusedDeputyPrevention: false,
    controlledStateRepair: false, vendorNeutral: false, technologyIndependent: false,
    workerControlsStateMachine: true, processMemoryAuthoritative: true, queueIsOnlyIntentRecord: true,
    dispatchAcknowledgementMeansCompletion: true, universalExactlyOnceClaim: true, terminalExecutionReopens: true,
    arbitraryOperatorStateEdit: true, migrationRewritesHistory: true, untrustedScopeAccepted: true,
    secretsPersistedInState: true, eventSourcingRequired: true, selectsRuntimeTechnology: true,
    definesLaterChapterDetails: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /resolve-active-definition-version/);
  assert.match(invalid.errors.join('\n'), /Authoritative workflow state must be durable/);
  assert.match(invalid.errors.join('\n'), /must not claim universal exactly-once/);
});

test('ARCH-015-03 assertion detects incomplete runtime state metadata', () => {
  class IncompleteDescriptor extends WorkflowRuntimeStateDescriptor { stateInvariants() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === WORKFLOW_RUNTIME_STATE_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented stateInvariants')));
});

test('ARCH-015-03 profile is immutable and descriptor is available through dependency injection', () => {
  const services = addWorkflowEngine(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('WorkflowRuntimeStateDescriptor');
  assert.ok(descriptor instanceof WorkflowRuntimeStateDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = completeProfile(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.ok(Object.isFrozen(profile.executionStates));
  assert.throws(() => profile.executionStates.push('unknown'), TypeError);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of [
    'responsibilities', 'inputs', 'admissionChecks', 'admissionOutcomes', 'executionBindings', 'components',
    'executionStates', 'stateFields', 'stateInvariants', 'stateRepresentations', 'transitionFields',
    'concurrencyControls', 'taskStates', 'waitTypes', 'failureTypes', 'operations', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries'
  ]) values[key] = descriptor[key]();
  return new WorkflowRuntimeStateProfile({ runtimeName: 'Workflow Runtime and State Model', ...values });
}
