import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ORCHESTRATOR_ERROR_CODES,
  REASONING_DECISION_CATEGORIES,
  REASONING_EXECUTION_STRATEGIES,
  REASONING_PIPELINE_STAGES,
  ReasoningDecisionOutput,
  ReasoningPipelineDescriptor,
  ReasoningPipelineInput,
  addAiOrchestrator
} from '../../src/orchestrator/index.js';

test('reasoning pipeline exposes the canonical ARCH-004-03 stage order', () => {
  const descriptor = new ReasoningPipelineDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    REASONING_PIPELINE_STAGES.INPUT,
    REASONING_PIPELINE_STAGES.INTENT_ANALYSIS,
    REASONING_PIPELINE_STAGES.GOAL_EXTRACTION,
    REASONING_PIPELINE_STAGES.CONTEXT_EVALUATION,
    REASONING_PIPELINE_STAGES.KNOWLEDGE_ASSESSMENT,
    REASONING_PIPELINE_STAGES.TOOL_PLANNING,
    REASONING_PIPELINE_STAGES.EXECUTION_STRATEGY,
    REASONING_PIPELINE_STAGES.CONFIDENCE_EVALUATION,
    REASONING_PIPELINE_STAGES.DECISION_OUTPUT
  ]);
});

test('reasoning pipeline stages document purpose, responsibility, and explainability outputs', () => {
  const descriptor = new ReasoningPipelineDescriptor();
  const confidenceStage = descriptor.getStage(REASONING_PIPELINE_STAGES.CONFIDENCE_EVALUATION);

  assert.equal(confidenceStage.sequence, 8);
  assert.match(confidenceStage.responsibility, /clarification/);
  assert.ok(confidenceStage.produces.includes('confidence level'));
});

test('reasoning pipeline rejects skipped or reordered stages', () => {
  const descriptor = new ReasoningPipelineDescriptor();
  const stages = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== REASONING_PIPELINE_STAGES.KNOWLEDGE_ASSESSMENT);

  const result = descriptor.validateTraversal(stages);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /knowledge-assessment/);
  assert.throws(
    () => descriptor.assertTraversal(stages),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.REASONING_TRAVERSAL_INVALID
  );
});

test('reasoning decision output validates explainable orchestration decisions', () => {
  const descriptor = new ReasoningPipelineDescriptor();
  const decision = new ReasoningDecisionOutput({
    intent: 'pricing',
    goals: ['calculate stay price'],
    contextUsed: ['normalized request', 'retrieved knowledge'],
    selectedTools: ['Pricing Service'],
    confidenceLevel: 0.82,
    decisionCategory: REASONING_DECISION_CATEGORIES.TOOL_EXECUTION,
    executionStrategy: REASONING_EXECUTION_STRATEGIES.SINGLE_TOOL_INVOCATION,
    knowledgeRequired: true,
    rationale: 'Authoritative pricing requires a business service.'
  });

  const result = descriptor.validateDecisionOutput(decision);

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, []);
});

test('reasoning pipeline sends low-confidence decisions to clarification', () => {
  const descriptor = new ReasoningPipelineDescriptor();

  const result = descriptor.validateDecisionOutput({
    intent: 'booking',
    goals: ['reserve a property'],
    contextUsed: ['normalized request'],
    selectedTools: ['Booking Service'],
    confidenceLevel: 0.4,
    decisionCategory: REASONING_DECISION_CATEGORIES.TOOL_EXECUTION,
    executionStrategy: REASONING_EXECUTION_STRATEGIES.SINGLE_TOOL_INVOCATION
  });

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /clarification/);
});

test('reasoning pipeline rejects business ownership responsibility claims', () => {
  const descriptor = new ReasoningPipelineDescriptor();

  assert.throws(
    () =>
      descriptor.assertDecisionOutput({
        intent: 'availability',
        goals: ['check availability'],
        contextUsed: ['normalized request'],
        selectedTools: ['Calendar Service'],
        confidenceLevel: 0.86,
        decisionCategory: REASONING_DECISION_CATEGORIES.TOOL_EXECUTION,
        executionStrategy: REASONING_EXECUTION_STRATEGIES.SINGLE_TOOL_INVOCATION,
        responsibilityClaims: ['availability']
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.REASONING_DECISION_INVALID
  );
});

test('reasoning pipeline input preserves lifecycle-prepared inputs immutably', () => {
  const input = new ReasoningPipelineInput({
    normalizedRequest: { text: 'What is the price?' },
    executionContext: { channel: 'web' },
    sessionMetadata: { locale: 'en' },
    retrievedMemory: ['previous preference'],
    retrievedKnowledge: ['policy snippet']
  });

  assert.equal(input.executionContext.channel, 'web');
  assert.throws(() => input.retrievedMemory.push('mutation'));
});

test('reasoning pipeline descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addAiOrchestrator(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ReasoningPipelineDescriptor');

  assert.ok(descriptor instanceof ReasoningPipelineDescriptor);
  assert.equal(descriptor.describe().length, 9);
});
