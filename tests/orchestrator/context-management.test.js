import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  CONTEXT_ASSEMBLY_STAGES,
  CONTEXT_LAYERS,
  CONTEXT_TELEMETRY_FIELDS,
  ContextAssemblyCoordinator,
  ContextCandidate,
  ORCHESTRATOR_ERROR_CODES,
  addAiOrchestrator
} from '../../src/orchestrator/index.js';

test('context management exposes the canonical ARCH-004-06 assembly pipeline', () => {
  const coordinator = new ContextAssemblyCoordinator();

  assert.deepEqual(coordinator.canonicalStageNames(), [
    CONTEXT_ASSEMBLY_STAGES.IDENTIFY_NEED,
    CONTEXT_ASSEMBLY_STAGES.COLLECT_CANDIDATES,
    CONTEXT_ASSEMBLY_STAGES.REMOVE_DUPLICATES,
    CONTEXT_ASSEMBLY_STAGES.RESOLVE_CONFLICTS,
    CONTEXT_ASSEMBLY_STAGES.RANK_IMPORTANCE,
    CONTEXT_ASSEMBLY_STAGES.APPLY_TOKEN_BUDGET,
    CONTEXT_ASSEMBLY_STAGES.ASSEMBLE_CONTEXT,
    CONTEXT_ASSEMBLY_STAGES.DELIVER_TO_REASONING
  ]);
});

test('context management exposes documented layers, priority, and telemetry fields', () => {
  const coordinator = new ContextAssemblyCoordinator();

  assert.ok(coordinator.layers().includes(CONTEXT_LAYERS.USER_REQUEST));
  assert.ok(coordinator.layers().includes(CONTEXT_LAYERS.POLICY));
  assert.equal(coordinator.priorityOrder()[0], CONTEXT_LAYERS.BUSINESS);
  assert.ok(coordinator.telemetryFields().includes(CONTEXT_TELEMETRY_FIELDS.FINAL_TOKEN_USAGE));
  assert.equal(coordinator.getStage(CONTEXT_ASSEMBLY_STAGES.RANK_IMPORTANCE).sequence, 5);
});

test('context management identifies minimal default context needs', () => {
  const coordinator = new ContextAssemblyCoordinator();

  assert.deepEqual(
    coordinator.identifyNeed({
      purpose: 'answer public FAQ',
      correlationId: 'corr-1'
    }),
    [CONTEXT_LAYERS.USER_REQUEST, CONTEXT_LAYERS.POLICY]
  );
});

test('context management collects only selected layers and enforces minimization', () => {
  const coordinator = new ContextAssemblyCoordinator();
  const collected = coordinator.collectCandidates({
    purpose: 'answer policy question',
    requiredLayers: [CONTEXT_LAYERS.USER_REQUEST, CONTEXT_LAYERS.KNOWLEDGE],
    correlationId: 'corr-1',
    candidates: [
      candidate('request', CONTEXT_LAYERS.USER_REQUEST, 'What is checkout?', 1),
      candidate('knowledge', CONTEXT_LAYERS.KNOWLEDGE, 'Checkout is 11 AM.', 1),
      candidate('memory', CONTEXT_LAYERS.MEMORY, 'Guest prefers late checkout.', 1),
      candidate('denied', CONTEXT_LAYERS.KNOWLEDGE, 'Restricted note.', 1, { accessAllowed: false }),
      candidate('sensitive', CONTEXT_LAYERS.KNOWLEDGE, 'Sensitive note.', 1, { sensitive: true })
    ]
  });

  assert.deepEqual(
    collected.map((item) => item.contextId),
    ['request', 'knowledge']
  );
});

test('context management removes duplicates by keeping the strongest candidate', () => {
  const coordinator = new ContextAssemblyCoordinator();
  const deduplicated = coordinator.removeDuplicates([
    candidate('low', CONTEXT_LAYERS.CONVERSATION, 'same fact', 1, { relevance: 0.2 }),
    candidate('high', CONTEXT_LAYERS.KNOWLEDGE, 'same fact', 1, { relevance: 0.9, authority: 0.9 })
  ]);

  assert.equal(deduplicated.length, 1);
  assert.equal(deduplicated[0].contextId, 'high');
});

test('context management resolves conflicts using documented authority priority', () => {
  const coordinator = new ContextAssemblyCoordinator();
  const resolved = coordinator.resolveConflicts([
    candidate('memory-price', CONTEXT_LAYERS.MEMORY, 'Old price is 100.', 1, {
      metadata: { conflictKey: 'price' }
    }),
    candidate('business-price', CONTEXT_LAYERS.BUSINESS, 'Current price is 120.', 1, {
      metadata: { conflictKey: 'price' }
    }),
    candidate('knowledge-policy', CONTEXT_LAYERS.KNOWLEDGE, 'Policy applies.', 1, {
      metadata: { conflictKey: 'policy' }
    })
  ]);

  assert.deepEqual(
    resolved.map((item) => item.contextId),
    ['business-price', 'knowledge-policy']
  );
});

test('context management ranks importance and applies token budgets', () => {
  const coordinator = new ContextAssemblyCoordinator();
  const ranked = coordinator.rankImportance([
    candidate('low', CONTEXT_LAYERS.CONVERSATION, 'low value', 5, { relevance: 0.2 }),
    candidate('high', CONTEXT_LAYERS.BUSINESS, 'high value', 4, {
      relevance: 1,
      authority: 1,
      confidence: 1
    }),
    candidate('mid', CONTEXT_LAYERS.SESSION, 'middle value', 3, { relevance: 0.7 })
  ]);
  const budgeted = coordinator.applyTokenBudget(ranked, 7);

  assert.equal(ranked[0].contextId, 'high');
  assert.deepEqual(
    budgeted.selected.map((item) => item.contextId),
    ['high', 'mid']
  );
  assert.deepEqual(
    budgeted.omitted.map((item) => item.contextId),
    ['low']
  );
});

test('context management assembles and delivers traceable working context', () => {
  const coordinator = new ContextAssemblyCoordinator({ clock: fixedClock() });
  const workingContext = coordinator.assemble({
    purpose: 'prepare reasoning input',
    requiredLayers: [CONTEXT_LAYERS.USER_REQUEST, CONTEXT_LAYERS.KNOWLEDGE, CONTEXT_LAYERS.POLICY],
    tokenBudget: 10,
    correlationId: 'corr-1',
    candidates: [
      candidate('request', CONTEXT_LAYERS.USER_REQUEST, 'What is checkout?', 2),
      candidate('knowledge', CONTEXT_LAYERS.KNOWLEDGE, 'Checkout is 11 AM.', 3, {
        relevance: 1,
        authority: 1
      }),
      candidate('policy', CONTEXT_LAYERS.POLICY, 'No sensitive data.', 2)
    ]
  });

  assert.equal(workingContext.deliveredToReasoning, true);
  assert.equal(workingContext.telemetry.finalTokenUsage, 7);
  assert.equal(workingContext.telemetry.assemblyDurationMs, 10);
  assert.equal(workingContext.correlationId, 'corr-1');
});

test('context management rejects untraceable or over-budget working context delivery', () => {
  const coordinator = new ContextAssemblyCoordinator();
  const workingContext = coordinator.assembleContext({
    request: {
      purpose: 'prepare reasoning input',
      tokenBudget: 1,
      correlationId: 'corr-1'
    },
    selected: [
      new ContextCandidate({
        contextId: 'request',
        layer: CONTEXT_LAYERS.USER_REQUEST,
        content: 'What is checkout?',
        tokenCost: 2
      })
    ]
  });

  assert.throws(
    () => coordinator.deliverToReasoning(workingContext),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.CONTEXT_ASSEMBLY_INVALID
  );
});

test('context assembly coordinator is available through DI registration', () => {
  const services = new ServiceCollection();

  addAiOrchestrator(services);
  const provider = services.buildServiceProvider();
  const coordinator = provider.getRequiredService('ContextAssemblyCoordinator');

  assert.ok(coordinator instanceof ContextAssemblyCoordinator);
  assert.equal(coordinator.describePipeline().length, 8);
});

function candidate(contextId, layer, content, tokenCost, overrides = {}) {
  return new ContextCandidate({
    contextId,
    layer,
    content,
    tokenCost,
    relevance: 0.6,
    authority: 0.5,
    recency: 0.5,
    confidence: 0.8,
    traceId: `trace-${contextId}`,
    ...overrides
  });
}

function fixedClock() {
  const instants = [
    new Date('2026-07-18T00:00:00.000Z'),
    new Date('2026-07-18T00:00:00.010Z')
  ];

  return () => instants.shift() ?? new Date('2026-07-18T00:00:00.010Z');
}
