import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  WORKFLOW_ACTIVITY_FAILURE_TYPES, WORKFLOW_ACTIVITY_RESULT_FIELDS, WORKFLOW_ATTEMPT_BINDINGS,
  WORKFLOW_ATTEMPT_STATES, WORKFLOW_BACKPRESSURE_ACTIONS, WORKFLOW_CAPABILITY_MATCH_FIELDS,
  WORKFLOW_DEAD_LETTER_CAUSES, WORKFLOW_DELIVERY_MODELS, WORKFLOW_DISPATCH_INTENT_FIELDS,
  WORKFLOW_LEASE_FIELDS, WORKFLOW_QUEUE_CAPABILITIES, WORKFLOW_TASK_IDENTITY_FIELDS,
  WORKFLOW_TASK_STATES_V2, WORKFLOW_TASK_WORKER_BOUNDARIES, WORKFLOW_TASK_WORKER_ERROR_CODE,
  WORKFLOW_TASK_WORKER_QUALITY_ATTRIBUTES, WORKFLOW_TASK_WORKER_RESPONSIBILITIES,
  WORKFLOW_TASK_WORKER_RULES, WORKFLOW_WORK_CONCEPTS, WORKFLOW_WORKER_IDENTITY_FIELDS,
  WORKFLOW_WORKER_LIFECYCLE, WORKFLOW_WORKER_OPERATIONS,
  WorkflowTaskWorkerDescriptor, WorkflowTaskWorkerProfile, addWorkflowEngine
} from '../../src/workflow-engine/index.js';

test('ARCH-015-04 exposes work boundaries, ownership, task identity, attempts, and task states', () => {
  const descriptor = new WorkflowTaskWorkerDescriptor();
  assert.deepEqual(descriptor.concepts(), Object.values(WORKFLOW_WORK_CONCEPTS));
  assert.ok(descriptor.responsibilities().includes(WORKFLOW_TASK_WORKER_RESPONSIBILITIES.DOMAIN_SERVICE));
  assert.deepEqual(descriptor.taskIdentityFields(), Object.values(WORKFLOW_TASK_IDENTITY_FIELDS));
  assert.ok(descriptor.attemptBindings().includes(WORKFLOW_ATTEMPT_BINDINGS.IDEMPOTENCY));
  assert.ok(descriptor.taskStates().includes(WORKFLOW_TASK_STATES_V2.RETRY_SCHEDULED));
  assert.deepEqual(descriptor.attemptStates(), Object.values(WORKFLOW_ATTEMPT_STATES));
});

test('ARCH-015-04 exposes dispatch, queue, delivery, worker identity, lifecycle, matching, and leases', () => {
  const descriptor = new WorkflowTaskWorkerDescriptor();
  assert.ok(descriptor.dispatchIntentFields().includes(WORKFLOW_DISPATCH_INTENT_FIELDS.PUBLICATION));
  assert.ok(descriptor.queueCapabilities().includes(WORKFLOW_QUEUE_CAPABILITIES.REDELIVERY));
  assert.deepEqual(descriptor.deliveryModels(), Object.values(WORKFLOW_DELIVERY_MODELS));
  assert.ok(descriptor.workerIdentityFields().includes(WORKFLOW_WORKER_IDENTITY_FIELDS.WORKLOAD));
  assert.deepEqual(descriptor.workerLifecycle(), Object.values(WORKFLOW_WORKER_LIFECYCLE));
  assert.ok(descriptor.capabilityMatchFields().includes(WORKFLOW_CAPABILITY_MATCH_FIELDS.HEALTH));
  assert.ok(descriptor.leaseFields().includes(WORKFLOW_LEASE_FIELDS.TOKEN));
});

test('ARCH-015-04 exposes results, failures, dead letter, load controls, operations, quality, rules, and boundaries', () => {
  const descriptor = new WorkflowTaskWorkerDescriptor();
  assert.ok(descriptor.resultFields().includes(WORKFLOW_ACTIVITY_RESULT_FIELDS.BUSINESS));
  assert.ok(descriptor.failureTypes().includes(WORKFLOW_ACTIVITY_FAILURE_TYPES.UNCERTAIN));
  assert.ok(descriptor.deadLetterCauses().includes(WORKFLOW_DEAD_LETTER_CAUSES.POISON));
  assert.ok(descriptor.backpressureActions().includes(WORKFLOW_BACKPRESSURE_ACTIONS.QUOTAS));
  assert.ok(descriptor.operations().includes(WORKFLOW_WORKER_OPERATIONS.DRAIN));
  assert.ok(descriptor.qualityAttributes().includes(WORKFLOW_TASK_WORKER_QUALITY_ATTRIBUTES.FAIRNESS));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_TASK_WORKER_RULES.RESULT_VALIDATION));
  assert.ok(descriptor.architectureBoundaries().includes(WORKFLOW_TASK_WORKER_BOUNDARIES.QUEUE));
});

test('ARCH-015-04 accepts complete profiles and rejects worker boundary violations', () => {
  const descriptor = new WorkflowTaskWorkerDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    runtimeOwnsTasks: false, logicalAttemptSeparation: false, durableIntentBeforeDispatch: false,
    stableIdentities: false, queueDrivenCoordination: false, queueNotStateAuthority: false,
    workerAuthentication: false, workerAuthorization: false, registeredCapabilityMatching: false,
    tenantPropertyIsolation: false, leastPrivilegeCredentials: false, statelessWorkers: false,
    boundedLeasesAndFencing: false, heartbeatOnlyLiveness: false, resultValidationBeforeCompletion: false,
    attemptFailureSeparateFromTaskFailure: false, engineControlsRetry: false, reconcileBeforeRetry: false,
    effectivelyOnceControls: false, duplicateLateResultsHarmless: false, controlledDeadLetterRecovery: false,
    explicitLoadControls: false, gracefulDrain: false, evidencePreserved: false,
    vendorNeutral: false, technologyIndependent: false, workerWritesWorkflowState: true,
    workerInfersScope: true, workerBroadensAuthority: true, deliveryAckMeansCompletion: true,
    workerSuccessMeansCompletion: true, workerInventsRetry: true, workerInventsCompensation: true,
    queueIsOnlyIntentRecord: true, universalExactlyOnce: true, blindDeadLetterReplay: true,
    heartbeatMeansCompletion: true, genericWorkersReplaceHumansAgents: true,
    selectsQueueComputeLanguage: true, definesAdjacentChapterDetails: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /durable-logical-task/);
  assert.match(invalid.errors.join('\n'), /durable before worker delivery/);
  assert.match(invalid.errors.join('\n'), /must not write authoritative/);
});

test('ARCH-015-04 assertion detects incomplete task and worker metadata', () => {
  class IncompleteDescriptor extends WorkflowTaskWorkerDescriptor { leaseFields() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === WORKFLOW_TASK_WORKER_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented leaseFields')));
});

test('ARCH-015-04 profile is immutable and descriptor is available through dependency injection', () => {
  const services = addWorkflowEngine(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('WorkflowTaskWorkerDescriptor');
  assert.ok(descriptor instanceof WorkflowTaskWorkerDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = completeProfile(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.ok(Object.isFrozen(profile.attemptStates));
  assert.throws(() => profile.attemptStates.push('unknown'), TypeError);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['concepts', 'responsibilities', 'taskIdentityFields', 'attemptBindings', 'taskStates',
    'attemptStates', 'dispatchIntentFields', 'queueCapabilities', 'deliveryModels', 'workerIdentityFields',
    'workerLifecycle', 'capabilityMatchFields', 'leaseFields', 'resultFields', 'failureTypes',
    'deadLetterCauses', 'backpressureActions', 'operations', 'qualityAttributes', 'architecturalRules',
    'architectureBoundaries']) values[key] = descriptor[key]();
  return new WorkflowTaskWorkerProfile({ profileName: 'Tasks, Activities, and Workers', ...values });
}
