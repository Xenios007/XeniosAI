import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { EXPERIMENTATION_CAUSAL_ANALYSIS_ERROR_CODE, ExperimentationCausalAnalysisDescriptor as Descriptor, ExperimentationCausalAnalysisProfile as Profile } from '../../src/analytics-decision-intelligence/index.js';

const keys = ['responsibilities', 'experimentFields', 'hypothesisFields', 'populationFields', 'allocationFields', 'guardrailFields', 'observationFields', 'evidenceFields', 'ethicsReviewFields', 'terminationFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia inquiry experiment', ...profile }); };

test('ARCH-028-06 exposes hypotheses populations allocation guardrails evidence ethics and termination', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.hypothesisFields().includes('causal-question'));
  assert.ok(descriptor.populationFields().includes('consent-requirements'));
  assert.ok(descriptor.allocationFields().includes('reproducible-seed-reference'));
  assert.ok(descriptor.guardrailFields().includes('breach-action'));
  assert.ok(descriptor.evidenceFields().includes('known-limitations'));
  assert.ok(descriptor.ethicsReviewFields().includes('fairness-assessment'));
  assert.ok(descriptor.terminationFields().includes('assignment-outcome-reconciliation'));
});

test('ARCH-028-06 validates experimentation and causal-analysis safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ hiddenHypothesisChange: true, unconsentedAssignment: true, allocationManipulated: true, guardrailIgnored: true, correlationAsCausation: true, experimentOutputAsSourceTruth: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /hidden hypothesis changes/);
  assert.match(result.errors.join('\n'), /unconsented assignment/);
  assert.match(result.errors.join('\n'), /ignored guardrails/);
  assert.match(result.errors.join('\n'), /correlation as causation/);
});

test('ARCH-028-06 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { evidenceFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === EXPERIMENTATION_CAUSAL_ANALYSIS_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).hypothesisFields.push('x'), TypeError);
});
