import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DATA_FLOW_ERROR_CODES,
  WORKFLOW_INITIATION_SOURCES,
  WORKFLOW_LIFECYCLE_STAGES,
  WORKFLOW_RECOVERY_STRATEGIES,
  WORKFLOW_RESPONSIBILITY_OWNERS,
  WORKFLOW_STATES,
  WORKFLOW_STEP_OUTCOMES,
  WORKFLOW_TELEMETRY_FIELDS,
  WORKFLOW_TIMEOUT_ACTIONS,
  WorkflowDefinition,
  WorkflowInstance,
  WorkflowOrchestrationDescriptor,
  WorkflowStepOutcome,
  WorkflowTelemetryRecord,
  addDataFlow
} from '../../src/data-flow/index.js';

test('workflow orchestration exposes the canonical ARCH-005-05 lifecycle order', () => {
  const descriptor = new WorkflowOrchestrationDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    WORKFLOW_LIFECYCLE_STAGES.WORKFLOW_STARTED,
    WORKFLOW_LIFECYCLE_STAGES.INITIALIZE_CONTEXT,
    WORKFLOW_LIFECYCLE_STAGES.EXECUTE_STEP,
    WORKFLOW_LIFECYCLE_STAGES.VALIDATE_OUTCOME,
    WORKFLOW_LIFECYCLE_STAGES.CONTINUE_OR_COMPLETE,
    WORKFLOW_LIFECYCLE_STAGES.COMPLETE_WORKFLOW,
    WORKFLOW_LIFECYCLE_STAGES.PUBLISH_COMPLETION
  ]);
});

test('workflow orchestration exposes ownership, state, recovery, timeout, and telemetry metadata', () => {
  const descriptor = new WorkflowOrchestrationDescriptor();
  const owners = descriptor.responsibilityOwners();

  assert.equal(owners.WORKFLOW_COORDINATION, WORKFLOW_RESPONSIBILITY_OWNERS.WORKFLOW_COORDINATION);
  assert.ok(descriptor.workflowStates().includes(WORKFLOW_STATES.RETRYING));
  assert.ok(descriptor.recoveryStrategies().includes(WORKFLOW_RECOVERY_STRATEGIES.EXECUTE_COMPENSATION));
  assert.ok(descriptor.timeoutActions().includes(WORKFLOW_TIMEOUT_ACTIONS.ESCALATE));
  assert.ok(descriptor.telemetryFields().includes(WORKFLOW_TELEMETRY_FIELDS.RETRY_COUNT));
  assert.equal(descriptor.getStage(WORKFLOW_LIFECYCLE_STAGES.VALIDATE_OUTCOME).owner, WORKFLOW_RESPONSIBILITY_OWNERS.DECISION_AUTHORIZATION);
});

test('workflow orchestration registers documented workflow examples', () => {
  const descriptor = new WorkflowOrchestrationDescriptor();

  assert.equal(descriptor.getWorkflow('ReservationProcess').businessObjective, 'Complete reservation process');
  assert.equal(descriptor.getWorkflow('GuestCheckIn').businessObjective, 'Coordinate guest check-in');
  assert.equal(descriptor.getWorkflow('GuestCheckOut').businessObjective, 'Coordinate guest check-out');
  assert.equal(descriptor.getWorkflow('CancellationProcess').businessObjective, 'Coordinate reservation cancellation');
  assert.equal(descriptor.getWorkflow('PaymentProcessing').businessObjective, 'Coordinate payment processing');
  assert.equal(descriptor.getWorkflow('PropertyOnboarding').businessObjective, 'Coordinate property onboarding');
  assert.equal(descriptor.getWorkflow('KnowledgeSynchronization').businessObjective, 'Coordinate knowledge synchronization');
});

test('workflow orchestration rejects skipped lifecycle stages', () => {
  const descriptor = new WorkflowOrchestrationDescriptor();
  const skippedOutcomeValidation = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== WORKFLOW_LIFECYCLE_STAGES.VALIDATE_OUTCOME);

  const result = descriptor.validateLifecycle(skippedOutcomeValidation);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /validate-outcome/);
  assert.throws(
    () => descriptor.assertLifecycle(skippedOutcomeValidation),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.WORKFLOW_LIFECYCLE_INVALID
  );
});

test('workflow orchestration rejects definitions that centralize business logic or lack explicit steps', () => {
  const descriptor = new WorkflowOrchestrationDescriptor({ workflows: [] });

  assert.throws(
    () =>
      descriptor.registerWorkflow(
        new WorkflowDefinition({
          workflowName: 'InvalidWorkflow',
          businessObjective: 'Invalid objective',
          coordinator: 'booking-service',
          initiationSources: ['unsupported'],
          timeoutAction: 'wait-forever',
          steps: [
            {
              stepName: 'InvalidStep',
              capability: 'do-everything',
              owner: 'AI Orchestrator',
              orchestratorOwnsBusinessLogic: true,
              modifiesForeignBusinessState: true,
              compensationCapability: 'reverse-everything',
              compensationOwner: 'Other Service'
            }
          ]
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.WORKFLOW_DEFINITION_INVALID &&
      error.details.errors.some((message) => message.includes('AI Orchestrator')) &&
      error.details.errors.some((message) => message.includes('foreign business state'))
  );
});

test('workflow orchestration creates immutable workflow instances with continuation context', () => {
  const descriptor = new WorkflowOrchestrationDescriptor();
  const instance = descriptor.createWorkflow({
    workflowId: 'wf-1',
    workflowName: 'ReservationProcess',
    correlationId: 'corr-1',
    initiationSource: WORKFLOW_INITIATION_SOURCES.USER_REQUEST,
    currentState: WORKFLOW_STATES.CREATED,
    context: { requestId: 'req-1' },
    variables: { propertyId: 'property-1' },
    originalRequestActive: false
  });

  assert.equal(instance.workflowName, 'ReservationProcess');
  assert.equal(instance.originalRequestActive, false);
  assert.throws(() => {
    instance.context.requestId = 'changed';
  });
});

test('workflow orchestration rejects invalid workflow instances', () => {
  const descriptor = new WorkflowOrchestrationDescriptor();

  assert.throws(
    () =>
      descriptor.createWorkflow({
        workflowId: 'wf-1',
        workflowName: 'ReservationProcess',
        initiationSource: 'manual-shortcut',
        currentState: 'unknown',
        retryCount: -1
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.WORKFLOW_INSTANCE_INVALID &&
      error.details.errors.some((message) => message.includes('correlation ID')) &&
      error.details.errors.some((message) => message.includes('retry count'))
  );
});

test('workflow orchestration validates explicit observable state transitions', () => {
  const descriptor = new WorkflowOrchestrationDescriptor();

  assert.equal(descriptor.validateStateTransition(WORKFLOW_STATES.CREATED, WORKFLOW_STATES.INITIALIZED).isValid, true);
  assert.equal(descriptor.validateStateTransition(WORKFLOW_STATES.COMPLETED, WORKFLOW_STATES.RUNNING).isValid, false);
  assert.throws(
    () => descriptor.assertStateTransition(WORKFLOW_STATES.COMPLETED, WORKFLOW_STATES.RUNNING),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.WORKFLOW_STATE_TRANSITION_INVALID
  );
});

test('workflow orchestration validates step outcomes, recovery, and compensation ownership', () => {
  const descriptor = new WorkflowOrchestrationDescriptor();
  const instance = new WorkflowInstance({
    workflowId: 'wf-1',
    workflowName: 'ReservationProcess',
    correlationId: 'corr-1',
    initiationSource: WORKFLOW_INITIATION_SOURCES.BUSINESS_COMMAND,
    currentState: WORKFLOW_STATES.RUNNING,
    activeStep: 'ReserveInventory'
  });
  const valid = new WorkflowStepOutcome({
    workflowId: 'wf-1',
    stepName: 'ReserveInventory',
    outcome: WORKFLOW_STEP_OUTCOMES.COMPENSATION_REQUIRED,
    recoveryStrategy: WORKFLOW_RECOVERY_STRATEGIES.EXECUTE_COMPENSATION,
    compensationOwner: 'Calendar Service',
    failureReason: 'inventory-reservation-conflict'
  });
  const invalid = descriptor.validateStepOutcome(
    {
      workflowId: 'wf-2',
      stepName: 'ReserveInventory',
      outcome: WORKFLOW_STEP_OUTCOMES.COMPENSATION_REQUIRED,
      recoveryStrategy: 'restart-platform',
      compensationOwner: 'Booking Service'
    },
    instance
  );

  assert.equal(descriptor.validateStepOutcome(valid, instance).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /active workflow instance/);
  assert.match(invalid.errors.join('\n'), /failure reason/);
  assert.match(invalid.errors.join('\n'), /Calendar Service/);
});

test('workflow orchestration validates recovery consistency requirements', () => {
  const descriptor = new WorkflowOrchestrationDescriptor();
  const valid = descriptor.validateRecovery({
    strategy: WORKFLOW_RECOVERY_STRATEGIES.RESUME_FROM_LAST_SUCCESSFUL_STEP,
    resumeFromStep: 'ProcessPayment'
  });
  const invalid = descriptor.validateRecovery({
    strategy: WORKFLOW_RECOVERY_STRATEGIES.RESUME_FROM_LAST_SUCCESSFUL_STEP,
    repeatedWorkMinimized: false,
    preservesBusinessConsistency: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /last successful step/);
  assert.match(invalid.errors.join('\n'), /minimize repeated work/);
  assert.match(invalid.errors.join('\n'), /business consistency/);
});

test('workflow orchestration validates workflow telemetry', () => {
  const descriptor = new WorkflowOrchestrationDescriptor();
  const telemetry = new WorkflowTelemetryRecord({
    workflowId: 'wf-1',
    correlationId: 'corr-1',
    currentState: WORKFLOW_STATES.COMPLETED,
    completedSteps: ['ValidateReservation', 'CalculatePricing'],
    failedSteps: [],
    executionDurationMs: 48,
    retryCount: 1,
    completionStatus: WORKFLOW_STATES.COMPLETED
  });
  const invalid = descriptor.validateTelemetry({
    workflowId: 'wf-1',
    correlationId: 'corr-1',
    currentState: 'unknown',
    completedSteps: 'ValidateReservation',
    failedSteps: [],
    executionDurationMs: -1,
    retryCount: -2,
    completionStatus: WORKFLOW_STATES.FAILED
  });

  assert.equal(descriptor.validateTelemetry(telemetry).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /telemetry state/);
  assert.match(invalid.errors.join('\n'), /duration/);
  assert.match(invalid.errors.join('\n'), /completed steps/);
});

test('workflow orchestration descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDataFlow(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('WorkflowOrchestrationDescriptor');

  assert.ok(descriptor instanceof WorkflowOrchestrationDescriptor);
  assert.equal(descriptor.describeLifecycle().length, 7);
});
