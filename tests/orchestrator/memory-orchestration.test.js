import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  MEMORY_CATEGORIES,
  MEMORY_FRESHNESS_STATUS,
  MEMORY_OPERATION_TELEMETRY_FIELDS,
  MEMORY_ORCHESTRATION_STAGES,
  MemoryCandidate,
  MemoryOrchestrationCoordinator,
  MemoryRetrievalRequest,
  ORCHESTRATOR_ERROR_CODES,
  addAiOrchestrator
} from '../../src/orchestrator/index.js';

test('memory orchestration exposes the canonical ARCH-004-05 lifecycle order', () => {
  const coordinator = new MemoryOrchestrationCoordinator();

  assert.deepEqual(coordinator.canonicalStageNames(), [
    MEMORY_ORCHESTRATION_STAGES.NEED_MEMORY,
    MEMORY_ORCHESTRATION_STAGES.DETERMINE_MEMORY_TYPE,
    MEMORY_ORCHESTRATION_STAGES.RETRIEVE_CANDIDATES,
    MEMORY_ORCHESTRATION_STAGES.RANK_RELEVANCE,
    MEMORY_ORCHESTRATION_STAGES.VALIDATE_FRESHNESS,
    MEMORY_ORCHESTRATION_STAGES.BUILD_MEMORY_CONTEXT,
    MEMORY_ORCHESTRATION_STAGES.RETURN_CONTEXT
  ]);
});

test('memory orchestration exposes documented categories and telemetry fields', () => {
  const coordinator = new MemoryOrchestrationCoordinator();

  assert.ok(coordinator.categories().includes(MEMORY_CATEGORIES.CONVERSATION));
  assert.ok(coordinator.categories().includes(MEMORY_CATEGORIES.LONG_TERM));
  assert.ok(coordinator.telemetryFields().includes(MEMORY_OPERATION_TELEMETRY_FIELDS.CANDIDATE_COUNT));
  assert.equal(coordinator.getStage(MEMORY_ORCHESTRATION_STAGES.VALIDATE_FRESHNESS).sequence, 5);
});

test('memory orchestration rejects retrieval without an explicit purpose', async () => {
  const coordinator = new MemoryOrchestrationCoordinator({
    memoryProvider: { async retrieveMemory() { return []; } }
  });

  await assert.rejects(
    () =>
      coordinator.retrieveCandidates({
        categories: [MEMORY_CATEGORIES.CONVERSATION],
        correlationId: 'corr-1'
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.MEMORY_RETRIEVAL_UNPURPOSED
  );
});

test('memory orchestration retrieves candidates through memory systems', async () => {
  const coordinator = new MemoryOrchestrationCoordinator({
    memoryProvider: {
      async retrieveMemory(request) {
        assert.equal(request.purpose, 'personalize booking flow');
        return [
          {
            memoryId: 'memory-1',
            category: MEMORY_CATEGORIES.LONG_TERM,
            content: 'Guest prefers late check-in.',
            relevanceScore: 0.9,
            confidence: 0.8,
            userId: 'user-1'
          }
        ];
      }
    }
  });

  const candidates = await coordinator.retrieveCandidates({
    purpose: 'personalize booking flow',
    categories: [MEMORY_CATEGORIES.LONG_TERM],
    userId: 'user-1',
    correlationId: 'corr-1'
  });

  assert.equal(candidates.length, 1);
  assert.ok(candidates[0] instanceof MemoryCandidate);
});

test('memory orchestration ranks relevance over exhaustive retrieval', () => {
  const coordinator = new MemoryOrchestrationCoordinator();
  const request = new MemoryRetrievalRequest({
    purpose: 'continue active booking',
    categories: [MEMORY_CATEGORIES.SESSION],
    correlationId: 'corr-1'
  });
  const ranked = coordinator.rankRelevance(
    [
      {
        memoryId: 'low',
        category: MEMORY_CATEGORIES.SESSION,
        content: 'Older workflow state.',
        relevanceScore: 0.2,
        confidence: 0.5
      },
      {
        memoryId: 'high',
        category: MEMORY_CATEGORIES.SESSION,
        content: 'Current workflow state.',
        relevanceScore: 0.95,
        confidence: 0.9
      }
    ],
    request
  );

  assert.equal(ranked[0].memoryId, 'high');
});

test('memory orchestration validates freshness, policy, and user association before use', () => {
  const coordinator = new MemoryOrchestrationCoordinator({
    clock: () => new Date('2026-07-18T00:00:00.000Z')
  });
  const result = coordinator.validateFreshness(
    [
      {
        memoryId: 'current',
        category: MEMORY_CATEGORIES.LONG_TERM,
        content: 'Guest prefers quiet rooms.',
        relevanceScore: 0.9,
        confidence: 0.9,
        userId: 'user-1',
        expiresAt: '2026-07-19T00:00:00.000Z'
      },
      {
        memoryId: 'expired',
        category: MEMORY_CATEGORIES.LONG_TERM,
        content: 'Expired preference.',
        relevanceScore: 0.8,
        confidence: 0.8,
        userId: 'user-1',
        expiresAt: '2026-07-17T00:00:00.000Z'
      },
      {
        memoryId: 'restricted',
        category: MEMORY_CATEGORIES.LONG_TERM,
        content: 'Restricted personal data.',
        relevanceScore: 1,
        confidence: 1,
        userId: 'user-1',
        policyCompliant: false
      }
    ],
    {
      purpose: 'personalize response',
      categories: [MEMORY_CATEGORIES.LONG_TERM],
      userId: 'user-1',
      correlationId: 'corr-1'
    }
  );

  assert.equal(result.selected.length, 1);
  assert.equal(result.selected[0].memoryId, 'current');
  assert.equal(result.excluded[0].reason, MEMORY_FRESHNESS_STATUS.EXPIRED);
  assert.equal(result.excluded[1].reason, MEMORY_FRESHNESS_STATUS.POLICY_RESTRICTED);
});

test('memory orchestration builds minimal structured context with telemetry', () => {
  const coordinator = new MemoryOrchestrationCoordinator();
  const context = coordinator.buildMemoryContext({
    request: {
      purpose: 'continue workflow',
      categories: [MEMORY_CATEGORIES.EXECUTION],
      correlationId: 'corr-1',
      maxItems: 1,
      tokenBudget: 500
    },
    selected: [
      new MemoryCandidate({
        memoryId: 'step-2',
        category: MEMORY_CATEGORIES.EXECUTION,
        content: 'Pricing completed.',
        relevanceScore: 0.8,
        confidence: 0.7
      }),
      new MemoryCandidate({
        memoryId: 'step-1',
        category: MEMORY_CATEGORIES.EXECUTION,
        content: 'Calendar checked.',
        relevanceScore: 0.7,
        confidence: 0.6
      })
    ],
    excluded: [],
    retrievalDurationMs: 12
  });

  assert.equal(context.selectedMemories.length, 1);
  assert.equal(context.tokenBudget, 500);
  assert.equal(context.telemetry.retrievalDurationMs, 12);
  assert.deepEqual(context.telemetry.selectedMemories, ['step-2']);
});

test('memory orchestration delegates retrieval and returns validated context', async () => {
  const coordinator = new MemoryOrchestrationCoordinator({
    memoryProvider: {
      async retrieveMemory() {
        return [
          {
            memoryId: 'preference-1',
            category: MEMORY_CATEGORIES.LONG_TERM,
            content: 'Guest prefers late check-in.',
            relevanceScore: 0.95,
            confidence: 0.9,
            userId: 'user-1',
            expiresAt: '2026-07-19T00:00:00.000Z'
          }
        ];
      }
    },
    clock: fixedClock()
  });

  const context = await coordinator.orchestrate({
    purpose: 'personalize booking flow',
    categories: [MEMORY_CATEGORIES.LONG_TERM],
    userId: 'user-1',
    correlationId: 'corr-1'
  });

  assert.equal(context.selectedMemories.length, 1);
  assert.equal(context.telemetry.candidateCount, 1);
  assert.equal(context.telemetry.retrievalDurationMs, 10);
});

test('memory orchestration coordinator is available through DI registration', () => {
  const services = new ServiceCollection();

  addAiOrchestrator(services);
  const provider = services.buildServiceProvider();
  const coordinator = provider.getRequiredService('MemoryOrchestrationCoordinator');

  assert.ok(coordinator instanceof MemoryOrchestrationCoordinator);
  assert.equal(coordinator.describeLifecycle().length, 7);
});

function fixedClock() {
  const instants = [
    new Date('2026-07-18T00:00:00.000Z'),
    new Date('2026-07-18T00:00:00.010Z')
  ];

  return () => instants.shift() ?? new Date('2026-07-18T00:00:00.010Z');
}
