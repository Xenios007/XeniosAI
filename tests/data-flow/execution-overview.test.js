import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DATA_FLOW_ERROR_CODES,
  EXECUTION_LIFECYCLE_STAGES,
  EXECUTION_PARTICIPANTS,
  EXECUTION_RESPONSIBILITIES,
  EXECUTION_STATES,
  EXECUTION_TELEMETRY_FIELDS,
  ExecutionOverviewDescriptor,
  ExecutionTelemetryRecord,
  addDataFlow
} from '../../src/data-flow/index.js';

test('execution overview exposes the canonical ARCH-005-01 lifecycle order', () => {
  const descriptor = new ExecutionOverviewDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    EXECUTION_LIFECYCLE_STAGES.RECEIVE_REQUEST,
    EXECUTION_LIFECYCLE_STAGES.NORMALIZE_REQUEST,
    EXECUTION_LIFECYCLE_STAGES.ANALYZE_INTENT,
    EXECUTION_LIFECYCLE_STAGES.BUILD_CONTEXT,
    EXECUTION_LIFECYCLE_STAGES.AUTHORIZE_EXECUTION,
    EXECUTION_LIFECYCLE_STAGES.EXECUTE_BUSINESS_OPERATIONS,
    EXECUTION_LIFECYCLE_STAGES.VALIDATE_RESULTS,
    EXECUTION_LIFECYCLE_STAGES.COMPOSE_RESPONSE,
    EXECUTION_LIFECYCLE_STAGES.RETURN_RESPONSE
  ]);
});

test('execution overview documents primary participants and responsibilities', () => {
  const descriptor = new ExecutionOverviewDescriptor();
  const orchestrator = descriptor.getParticipant(EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR);
  const dataLayer = descriptor.getParticipant(EXECUTION_PARTICIPANTS.DATA_LAYER);

  assert.equal(orchestrator.primaryResponsibility, 'Coordinate execution');
  assert.ok(orchestrator.responsibilities.includes(EXECUTION_RESPONSIBILITIES.CONTEXT_CONSTRUCTION));
  assert.equal(dataLayer.primaryResponsibility, 'Persist and retrieve data');
  assert.ok(dataLayer.boundaries[0].includes('does not make business decisions'));
});

test('execution overview rejects skipped lifecycle stages', () => {
  const descriptor = new ExecutionOverviewDescriptor();
  const skippedAuthorization = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== EXECUTION_LIFECYCLE_STAGES.AUTHORIZE_EXECUTION);

  const result = descriptor.validateLifecycle(skippedAuthorization);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /authorize-execution/);
  assert.throws(
    () => descriptor.assertLifecycle(skippedAuthorization),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.EXECUTION_LIFECYCLE_INVALID
  );
});

test('execution overview validates observable state transitions', () => {
  const descriptor = new ExecutionOverviewDescriptor();

  assert.equal(
    descriptor.validateStateTransition(EXECUTION_STATES.RECEIVED, EXECUTION_STATES.VALIDATED).isValid,
    true
  );
  assert.equal(
    descriptor.validateStateTransition(EXECUTION_STATES.RECEIVED, EXECUTION_STATES.COMPLETED).isValid,
    false
  );
  assert.throws(
    () => descriptor.assertStateTransition(EXECUTION_STATES.COMPLETED, EXECUTION_STATES.EXECUTING),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.EXECUTION_STATE_TRANSITION_INVALID
  );
});

test('execution overview validates required telemetry fields', () => {
  const descriptor = new ExecutionOverviewDescriptor();
  const telemetry = new ExecutionTelemetryRecord({
    correlationId: 'corr-1',
    requestId: 'req-1',
    executionDurationMs: 12,
    participatingComponents: [
      EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER,
      EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR,
      EXECUTION_PARTICIPANTS.DECISION_ENGINE
    ],
    serviceInteractions: ['pricing.calculate'],
    status: EXECUTION_STATES.COMPLETED,
    executionOutcome: 'response-returned'
  });

  assert.equal(descriptor.validateTelemetry(telemetry).isValid, true);
  assert.ok(descriptor.telemetryFields().includes(EXECUTION_TELEMETRY_FIELDS.EXECUTION_OUTCOME));
});

test('execution overview rejects incomplete or invalid telemetry', () => {
  const descriptor = new ExecutionOverviewDescriptor();
  const result = descriptor.validateTelemetry({
    correlationId: 'corr-1',
    requestId: 'req-1',
    executionDurationMs: -1
  });

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /participatingComponents/);
  assert.match(result.errors.join('\n'), /duration/);
});

test('execution overview enforces participant boundaries', () => {
  const descriptor = new ExecutionOverviewDescriptor();

  assert.equal(
    descriptor.validateParticipantResponsibility(
      EXECUTION_PARTICIPANTS.BUSINESS_SERVICES,
      EXECUTION_RESPONSIBILITIES.BUSINESS_CAPABILITY_EXECUTION
    ).isValid,
    true
  );
  assert.throws(
    () =>
      descriptor.assertParticipantResponsibility(
        EXECUTION_PARTICIPANTS.DATA_LAYER,
        EXECUTION_RESPONSIBILITIES.DECISION_COORDINATION
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.EXECUTION_BOUNDARY_INVALID
  );
});

test('execution overview descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDataFlow(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ExecutionOverviewDescriptor');

  assert.ok(descriptor instanceof ExecutionOverviewDescriptor);
  assert.equal(descriptor.describeLifecycle().length, 9);
});
