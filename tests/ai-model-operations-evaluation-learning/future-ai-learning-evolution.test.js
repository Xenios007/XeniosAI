import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { FUTURE_AI_LEARNING_EVOLUTION_ERROR_CODE, FutureAiLearningEvolutionDescriptor as Descriptor, FutureAiLearningEvolutionProfile as Profile } from '../../src/ai-model-operations-evaluation-learning/index.js';

const keys = ['evolutionPrinciples', 'evolutionHorizons', 'adaptiveRouting', 'specializedModels', 'privacyPreservingLearning', 'verifiableImprovement', 'lifecycle', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Future Casa Lluvia AI learning', ...profile }); };

test('ARCH-029-10 exposes adaptive routing specialized models privacy-preserving learning and verifiable improvement', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.evolutionHorizons().includes('portable-and-federated-ecosystem'));
  assert.ok(descriptor.adaptiveRouting().includes('feedback-does-not-directly-change-routing'));
  assert.ok(descriptor.specializedModels().includes('provider-neutral-runtime-contract'));
  assert.ok(descriptor.privacyPreservingLearning().includes('privacy-techniques-create-no-implicit-data-rights'));
  assert.ok(descriptor.verifiableImprovement().includes('regression-and-non-inferiority-gates'));
  assert.ok(descriptor.lifecycle().includes('separated-approved-promotion'));
});

test('ARCH-029-10 validates controlled AI learning evolution', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ customerInteractionDirectlyRewritesBehavior: true, modelOutputAsTrainingTruth: true, tenantDataSharedWithoutAuthority: true, adaptiveRoutingBypassesPolicy: true, privacyClaimWithoutThreatModel: true, improvementClaimWithoutBaseline: true, selfPromotionAllowed: true, irreversibleLearningChange: true, extensionsWeakenControls: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /directly rewriting production behavior/);
  assert.match(result.errors.join('\n'), /adaptive routing from bypassing policy/);
  assert.match(result.errors.join('\n'), /privacy claims without a threat model/);
  assert.match(result.errors.join('\n'), /self-promotion to production/);
});

test('ARCH-029-10 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { verifiableImprovement() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === FUTURE_AI_LEARNING_EVOLUTION_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).adaptiveRouting.push('x'), TypeError);
});
