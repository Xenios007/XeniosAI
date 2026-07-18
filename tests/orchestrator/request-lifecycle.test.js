import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ORCHESTRATOR_COMPONENTS,
  ORCHESTRATOR_ERROR_CODES,
  REQUEST_LIFECYCLE_STAGES,
  REQUEST_LIFECYCLE_TELEMETRY_FIELDS,
  RequestLifecycleDescriptor,
  RequestLifecycleTraceEntry,
  addAiOrchestrator
} from '../../src/orchestrator/index.js';

test('request lifecycle exposes the canonical ARCH-004-02 stage order', () => {
  const descriptor = new RequestLifecycleDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    REQUEST_LIFECYCLE_STAGES.RECEIVE_REQUEST,
    REQUEST_LIFECYCLE_STAGES.NORMALIZE_REQUEST,
    REQUEST_LIFECYCLE_STAGES.IDENTIFY_INTENT,
    REQUEST_LIFECYCLE_STAGES.BUILD_CONTEXT,
    REQUEST_LIFECYCLE_STAGES.RETRIEVE_MEMORY,
    REQUEST_LIFECYCLE_STAGES.RETRIEVE_KNOWLEDGE,
    REQUEST_LIFECYCLE_STAGES.PLAN_EXECUTION,
    REQUEST_LIFECYCLE_STAGES.EXECUTE_TOOLS,
    REQUEST_LIFECYCLE_STAGES.VALIDATE_RESULTS,
    REQUEST_LIFECYCLE_STAGES.COMPOSE_RESPONSE,
    REQUEST_LIFECYCLE_STAGES.APPLY_POLICIES,
    REQUEST_LIFECYCLE_STAGES.RETURN_RESPONSE
  ]);
});

test('request lifecycle stages include ownership and observability metadata', () => {
  const descriptor = new RequestLifecycleDescriptor();
  const retrieveKnowledge = descriptor.getStage(REQUEST_LIFECYCLE_STAGES.RETRIEVE_KNOWLEDGE);

  assert.equal(retrieveKnowledge.sequence, 6);
  assert.equal(retrieveKnowledge.component, ORCHESTRATOR_COMPONENTS.KNOWLEDGE_SERVICE);
  assert.ok(retrieveKnowledge.telemetryFields.includes(REQUEST_LIFECYCLE_TELEMETRY_FIELDS.REQUEST_ID));
  assert.ok(retrieveKnowledge.characteristics.includes('policy-compliant'));
});

test('request lifecycle rejects skipped stages', () => {
  const descriptor = new RequestLifecycleDescriptor();
  const skippedPolicyStage = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== REQUEST_LIFECYCLE_STAGES.APPLY_POLICIES);

  const result = descriptor.validateTraversal(skippedPolicyStage);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /apply-policies/);
});

test('request lifecycle rejects out of order stages', () => {
  const descriptor = new RequestLifecycleDescriptor();
  const stages = [...descriptor.canonicalStageNames()];
  const buildContextIndex = stages.indexOf(REQUEST_LIFECYCLE_STAGES.BUILD_CONTEXT);
  const identifyIntentIndex = stages.indexOf(REQUEST_LIFECYCLE_STAGES.IDENTIFY_INTENT);

  [stages[buildContextIndex], stages[identifyIntentIndex]] = [
    stages[identifyIntentIndex],
    stages[buildContextIndex]
  ];

  assert.throws(
    () => descriptor.assertTraversal(stages),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.LIFECYCLE_TRAVERSAL_INVALID
  );
});

test('request lifecycle validates mandatory telemetry per stage', () => {
  const descriptor = new RequestLifecycleDescriptor();
  const trace = descriptor.canonicalStageNames().map(
    (stage, index) =>
      new RequestLifecycleTraceEntry({
        requestId: 'request-1',
        correlationId: 'correlation-1',
        stage,
        startedAt: `2026-07-18T00:00:${String(index).padStart(2, '0')}Z`,
        endedAt: `2026-07-18T00:00:${String(index + 1).padStart(2, '0')}Z`,
        durationMs: 1,
        inputs: { sequence: index + 1 },
        outputs: {},
        errors: []
      })
  );

  const result = descriptor.validateTraceEntries(trace);

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, []);
});

test('request lifecycle detects invalid telemetry traces', () => {
  const descriptor = new RequestLifecycleDescriptor();
  const trace = descriptor.canonicalStageNames().map((stage) => ({
    requestId: 'request-1',
    correlationId: 'correlation-1',
    stage,
    startedAt: '2026-07-18T00:00:00Z',
    endedAt: '2026-07-18T00:00:01Z',
    durationMs: 1,
    inputs: {},
    outputs: {},
    errors: []
  }));

  delete trace[0].requestId;
  trace[1].durationMs = -1;

  const result = descriptor.validateTraceEntries(trace);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /requestId/);
  assert.match(result.errors.join('\n'), /durationMs/);
});

test('request lifecycle descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addAiOrchestrator(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('RequestLifecycleDescriptor');

  assert.ok(descriptor instanceof RequestLifecycleDescriptor);
  assert.equal(descriptor.describe().length, 12);
});
