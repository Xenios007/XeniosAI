import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { SHADOW_CANARY_EXPERIMENT_PROMOTION_ERROR_CODE, ShadowCanaryExperimentPromotionDescriptor as Descriptor, ShadowCanaryExperimentPromotionProfile as Profile } from '../../src/ai-model-operations-evaluation-learning/index.js';

const keys = ['responsibilities', 'planFields', 'stageFields', 'shadowFields', 'canaryFields', 'experimentFields', 'allocationFields', 'guardrailFields', 'stopConditionFields', 'decisionFields', 'rollbackFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia controlled promotion', ...profile }); };

test('ARCH-029-07 exposes staged shadow canary experiment allocation guardrail decision and rollback contracts', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.planFields().includes('offline-evaluation-evidence-reference'));
  assert.ok(descriptor.shadowFields().includes('side-effect-isolation-result'));
  assert.ok(descriptor.canaryFields().includes('approved-exposure-ceiling'));
  assert.ok(descriptor.experimentFields().includes('pre-registered-hypothesis'));
  assert.ok(descriptor.allocationFields().includes('deterministic-allocation-digest'));
  assert.ok(descriptor.guardrailFields().includes('within-warning-or-breached'));
  assert.ok(descriptor.stopConditionFields().includes('pause-abort-or-rollback'));
  assert.ok(descriptor.rollbackFields().includes('last-known-good-package-version'));
});

test('ARCH-029-07 validates controlled exposure and promotion safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ shadowSideEffects: true, unapprovedExposure: true, tenantMixing: true, allocationMutable: true, guardrailBypassed: true, stopConditionIgnored: true, candidateSelfPromotes: true, partialPackagePromotion: true, rollbackUnavailable: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /shadow side effects/);
  assert.match(result.errors.join('\n'), /unapproved exposure/);
  assert.match(result.errors.join('\n'), /ignored stop conditions/);
  assert.match(result.errors.join('\n'), /partial package promotion/);
});

test('ARCH-029-07 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { guardrailFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === SHADOW_CANARY_EXPERIMENT_PROMOTION_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).stageFields.push('x'), TypeError);
});
