import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { RECOMMENDATIONS_DECISION_SUPPORT_ERROR_CODE, RecommendationsDecisionSupportDescriptor as Descriptor, RecommendationsDecisionSupportProfile as Profile } from '../../src/analytics-decision-intelligence/index.js';

const keys = ['responsibilities', 'recommendationFields', 'alternativeFields', 'explanationFields', 'confidenceFields', 'approvalFields', 'decisionFields', 'outcomeFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia service recovery decision support', ...profile }); };

test('ARCH-028-07 exposes recommendations alternatives explanations confidence approvals decisions and outcomes', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.recommendationFields().includes('preferred-alternative-reference'));
  assert.ok(descriptor.alternativeFields().includes('risk-summary'));
  assert.ok(descriptor.explanationFields().includes('supporting-evidence-references'));
  assert.ok(descriptor.confidenceFields().includes('calibration-evidence-reference'));
  assert.ok(descriptor.approvalFields().includes('required-approver-role'));
  assert.ok(descriptor.decisionFields().includes('accepted-rejected-or-modified'));
  assert.ok(descriptor.outcomeFields().includes('authoritative-source-reference'));
});

test('ARCH-028-07 validates recommendation and decision-support safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ recommendationAsCommand: true, alternativesHidden: true, explanationFabricated: true, confidenceAsCertainty: true, approvalBypassed: true, operationalStateMutated: true, outcomeAsCausation: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /recommendations as commands/);
  assert.match(result.errors.join('\n'), /hidden alternatives/);
  assert.match(result.errors.join('\n'), /confidence as certainty/);
  assert.match(result.errors.join('\n'), /operational-state mutation/);
});

test('ARCH-028-07 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { explanationFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === RECOMMENDATIONS_DECISION_SUPPORT_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).alternativeFields.push('x'), TypeError);
});
