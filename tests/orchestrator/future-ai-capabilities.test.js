import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_CAPABILITY_MATURITY_STAGES,
  FUTURE_AI_CAPABILITY_DOMAINS,
  FUTURE_AI_EVALUATION_CRITERIA,
  FUTURE_AI_STABILITY_PRINCIPLES,
  FutureAiCapabilityCandidate,
  FutureAiCapabilityEvaluation,
  FutureAiCapabilityRegistry,
  ORCHESTRATOR_ERROR_CODES,
  addAiOrchestrator
} from '../../src/orchestrator/index.js';

test('future AI capability registry exposes all documented capability domains', () => {
  const registry = new FutureAiCapabilityRegistry();

  assert.deepEqual(
    registry.listCandidates().map((candidate) => candidate.domain),
    [
      FUTURE_AI_CAPABILITY_DOMAINS.ADVANCED_REASONING,
      FUTURE_AI_CAPABILITY_DOMAINS.ADAPTIVE_MEMORY,
      FUTURE_AI_CAPABILITY_DOMAINS.PLANNING_AND_SCHEDULING,
      FUTURE_AI_CAPABILITY_DOMAINS.AUTONOMOUS_EXECUTION,
      FUTURE_AI_CAPABILITY_DOMAINS.MULTI_AGENT_COLLABORATION,
      FUTURE_AI_CAPABILITY_DOMAINS.KNOWLEDGE_EVOLUTION,
      FUTURE_AI_CAPABILITY_DOMAINS.PERSONALIZED_INTELLIGENCE,
      FUTURE_AI_CAPABILITY_DOMAINS.LEARNING_AND_OPTIMIZATION,
      FUTURE_AI_CAPABILITY_DOMAINS.GOVERNANCE_AND_COMPLIANCE,
      FUTURE_AI_CAPABILITY_DOMAINS.HUMAN_COLLABORATION
    ]
  );
});

test('future AI capability registry preserves maturity model and stability principles', () => {
  const registry = new FutureAiCapabilityRegistry();

  assert.deepEqual(registry.maturityModel(), [
    AI_CAPABILITY_MATURITY_STAGES.REACTIVE_AI,
    AI_CAPABILITY_MATURITY_STAGES.ASSISTED_AI,
    AI_CAPABILITY_MATURITY_STAGES.COORDINATED_AI,
    AI_CAPABILITY_MATURITY_STAGES.ADAPTIVE_AI,
    AI_CAPABILITY_MATURITY_STAGES.AUTONOMOUS_AI,
    AI_CAPABILITY_MATURITY_STAGES.COLLABORATIVE_AI_PLATFORM
  ]);
  assert.ok(
    registry.stabilityPrinciples().includes(FUTURE_AI_STABILITY_PRINCIPLES.DECISION_ENGINE_AUTHORIZES)
  );
});

test('future AI capability registry stores candidates as future placeholders only', () => {
  const registry = new FutureAiCapabilityRegistry();
  const candidate = registry.getCandidate('autonomous-execution');

  assert.equal(candidate.implementationCommitted, false);
  assert.equal(candidate.domain, FUTURE_AI_CAPABILITY_DOMAINS.AUTONOMOUS_EXECUTION);
  assert.ok(candidate.potentialEnhancements.includes('Long-running processes'));
});

test('future AI capability registry rejects duplicate candidates', () => {
  const candidate = new FutureAiCapabilityCandidate({
    capabilityId: 'advanced-reasoning',
    displayName: 'Advanced Reasoning',
    domain: FUTURE_AI_CAPABILITY_DOMAINS.ADVANCED_REASONING,
    maturityStage: AI_CAPABILITY_MATURITY_STAGES.ASSISTED_AI
  });

  assert.throws(
    () => new FutureAiCapabilityRegistry({ candidates: [candidate, candidate] }),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.FUTURE_AI_CAPABILITY_DUPLICATE
  );
});

test('future AI capability evaluation accepts architecture-safe introductions', () => {
  const registry = new FutureAiCapabilityRegistry();
  const result = registry.evaluateIntroduction(
    new FutureAiCapabilityEvaluation({
      capabilityId: 'human-collaboration',
      preservesArchitecturalBoundaries: true,
      vendorIndependent: true,
      integratesThroughOrchestration: true,
      respectsBusinessOwnership: true,
      improvesExplainability: true,
      strengthensObservability: true,
      maintainsSecurityAndPrivacy: true,
      respectsDecisionEngine: true,
      followsPlatformGovernance: true,
      modularAndTestable: true
    })
  );

  assert.equal(result.accepted, true);
  assert.equal(result.errors.length, 0);
});

test('future AI capability evaluation rejects missing governance criteria', () => {
  const registry = new FutureAiCapabilityRegistry();
  const result = registry.evaluateIntroduction({
    capabilityId: 'adaptive-memory',
    preservesArchitecturalBoundaries: true
  });

  assert.equal(result.accepted, false);
  assert.ok(result.errors.length >= registry.evaluationCriteria().length - 1);
  assert.match(result.errors[0].message, /criterion/);
});

test('future AI capability evaluation rejects technology-only or redesign-driven proposals', () => {
  const registry = new FutureAiCapabilityRegistry();
  const acceptedFields = Object.fromEntries(
    Object.values(FUTURE_AI_EVALUATION_CRITERIA).map((criterion) => [criterion, true])
  );
  const result = registry.evaluateIntroduction({
    capabilityId: 'learning-and-optimization',
    ...acceptedFields,
    technologyOnlyJustification: true,
    requiresStructuralRedesign: true,
    modifiesAuthoritativeBusinessRulesAutomatically: true
  });

  assert.equal(result.accepted, false);
  assert.match(result.errors.map((error) => error.message).join('\n'), /Technology alone/);
  assert.match(result.errors.map((error) => error.message).join('\n'), /structural redesign/);
  assert.match(result.errors.map((error) => error.message).join('\n'), /business rules/);
});

test('future AI capability evaluation rejects unknown candidates without inventing them', () => {
  const registry = new FutureAiCapabilityRegistry();
  const result = registry.evaluateIntroduction({ capabilityId: 'unknown-future-ai' });

  assert.equal(result.accepted, false);
  assert.equal(result.errors[0].code, ORCHESTRATOR_ERROR_CODES.FUTURE_AI_CAPABILITY_NOT_FOUND);
});

test('future AI capability registry filters candidates by domain', () => {
  const registry = new FutureAiCapabilityRegistry();

  assert.deepEqual(
    registry.listByDomain(FUTURE_AI_CAPABILITY_DOMAINS.KNOWLEDGE_EVOLUTION).map((candidate) => candidate.capabilityId),
    ['knowledge-evolution']
  );
});

test('future AI capability registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addAiOrchestrator(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('FutureAiCapabilityRegistry');

  assert.ok(registry instanceof FutureAiCapabilityRegistry);
  assert.equal(registry.listCandidates().length, 10);
});
