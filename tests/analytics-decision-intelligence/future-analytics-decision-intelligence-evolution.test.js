import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { FUTURE_ANALYTICS_DECISION_INTELLIGENCE_EVOLUTION_ERROR_CODE, FutureAnalyticsDecisionIntelligenceEvolutionDescriptor as Descriptor, FutureAnalyticsDecisionIntelligenceEvolutionProfile as Profile } from '../../src/analytics-decision-intelligence/index.js';

const keys = ['evolutionPrinciples', 'evolutionHorizons', 'realTimeAnalytics', 'causalDecisionIntelligence', 'federatedAnalytics', 'adaptiveDecisionSupport', 'researchPromotionRetirement', 'controls', 'measures', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Future Casa Lluvia analytics', ...profile }); };

test('ARCH-028-10 exposes real-time causal federated and adaptive evolution horizons', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.evolutionHorizons().includes('real-time-decision-intelligence'));
  assert.ok(descriptor.realTimeAnalytics().includes('stream-batch-source-reconciliation'));
  assert.ok(descriptor.causalDecisionIntelligence().includes('correlation-is-not-causation'));
  assert.ok(descriptor.federatedAnalytics().includes('local-source-authority-preserved'));
  assert.ok(descriptor.adaptiveDecisionSupport().includes('no-silent-production-behavior-change'));
  assert.ok(descriptor.researchPromotionRetirement().includes('arch-029-evaluation'));
});

test('ARCH-028-10 validates bounded analytics evolution', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ realTimeBypassesQuality: true, causalClaimWithoutEvidence: true, federationWeakensIsolation: true, adaptationOutsidePromotion: true, modelOutputAsSourceTruth: true, irreversibleRollout: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /real-time quality bypass/);
  assert.match(result.errors.join('\n'), /causal claims without evidence/);
  assert.match(result.errors.join('\n'), /federation weakening isolation/);
  assert.match(result.errors.join('\n'), /adaptation outside promotion/);
});

test('ARCH-028-10 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { evolutionHorizons() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === FUTURE_ANALYTICS_DECISION_INTELLIGENCE_EVOLUTION_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).controls.push('x'), TypeError);
});
