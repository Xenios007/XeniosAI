import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { MODEL_SELECTION_ROUTING_FALLBACK_BUDGETS_ERROR_CODE, ModelSelectionRoutingFallbackBudgetsDescriptor as Descriptor, ModelSelectionRoutingFallbackBudgetsProfile as Profile } from '../../src/ai-model-operations-evaluation-learning/index.js';

const keys = ['responsibilities', 'taskProfileFields', 'selectionPolicyFields', 'qualityGateFields', 'safetyGateFields', 'routingDecisionFields', 'latencyFields', 'privacyFields', 'availabilityFields', 'fallbackFields', 'budgetFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia model routing', ...profile }); };

test('ARCH-029-03 exposes task profiles gates routing latency privacy availability fallback and budgets', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.taskProfileFields().includes('required-capability-profile'));
  assert.ok(descriptor.selectionPolicyFields().includes('deterministic-tie-breaker'));
  assert.ok(descriptor.qualityGateFields().includes('evaluation-evidence-reference'));
  assert.ok(descriptor.privacyFields().includes('provider-training-use-result'));
  assert.ok(descriptor.fallbackFields().includes('safe-refusal-condition'));
  assert.ok(descriptor.budgetFields().includes('spend-limit'));
});

test('ARCH-029-03 validates routing fallback and budget safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ cheapestModelOnly: true, gateBypassed: true, privacyIgnored: true, budgetExceeded: true, incompatibleFallback: true, unlimitedFallback: true, routingOutcomeDirectlyLearns: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /cheapest-model-only selection/);
  assert.match(result.errors.join('\n'), /gate bypass/);
  assert.match(result.errors.join('\n'), /budget overrun/);
  assert.match(result.errors.join('\n'), /incompatible fallback/);
});

test('ARCH-029-03 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { fallbackFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === MODEL_SELECTION_ROUTING_FALLBACK_BUDGETS_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).taskProfileFields.push('x'), TypeError);
});
