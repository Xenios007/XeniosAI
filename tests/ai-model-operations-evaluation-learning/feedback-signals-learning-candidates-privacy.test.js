import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { FEEDBACK_SIGNALS_LEARNING_CANDIDATES_PRIVACY_ERROR_CODE, FeedbackSignalsLearningCandidatesPrivacyDescriptor as Descriptor, FeedbackSignalsLearningCandidatesPrivacyProfile as Profile } from '../../src/ai-model-operations-evaluation-learning/index.js';

const keys = ['responsibilities', 'signalFields', 'signalTypes', 'outcomeFields', 'consentFields', 'minimizationFields', 'deidentificationFields', 'candidateFields', 'reviewFields', 'deletionFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia feedback learning', ...profile }); };

test('ARCH-029-05 exposes feedback outcomes consent minimization de-identification candidates review and deletion', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.signalTypes().includes('explicit-correction'));
  assert.ok(descriptor.outcomeFields().includes('attribution-qualification'));
  assert.ok(descriptor.consentFields().includes('withdrawal-status'));
  assert.ok(descriptor.minimizationFields().includes('redacted-sensitive-data'));
  assert.ok(descriptor.deidentificationFields().includes('re-identification-risk-result'));
  assert.ok(descriptor.candidateFields().includes('evaluation-plan-reference'));
  assert.ok(descriptor.deletionFields().includes('deletion-reconciliation-status'));
});

test('ARCH-029-05 validates feedback learning and privacy safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ rawMessageUsedForLearning: true, paymentDataIncluded: true, crossTenantAggregation: true, consentInferred: true, implicitSignalAsTruth: true, outcomeAsCausation: true, candidateAutoPromoted: true, deletionIgnored: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /raw messages for learning/);
  assert.match(result.errors.join('\n'), /payment data in learning/);
  assert.match(result.errors.join('\n'), /inferred consent/);
  assert.match(result.errors.join('\n'), /automatic candidate promotion/);
});

test('ARCH-029-05 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { deidentificationFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === FEEDBACK_SIGNALS_LEARNING_CANDIDATES_PRIVACY_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).signalTypes.push('x'), TypeError);
});
