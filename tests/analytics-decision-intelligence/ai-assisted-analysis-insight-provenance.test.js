import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { AI_ASSISTED_ANALYSIS_INSIGHT_PROVENANCE_ERROR_CODE, AiAssistedAnalysisInsightProvenanceDescriptor as Descriptor, AiAssistedAnalysisInsightProvenanceProfile as Profile } from '../../src/analytics-decision-intelligence/index.js';

const keys = ['responsibilities', 'requestFields', 'retrievalFields', 'calculationFields', 'insightFields', 'claimFields', 'citationFields', 'reviewFields', 'outputFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia occupancy analysis', ...profile }); };

test('ARCH-028-08 exposes requests retrieval calculations insights citations review and safe output', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.requestFields().includes('natural-language-question'));
  assert.ok(descriptor.retrievalFields().includes('data-product-version-reference'));
  assert.ok(descriptor.calculationFields().includes('deterministic-expression'));
  assert.ok(descriptor.insightFields().includes('model-version-reference'));
  assert.ok(descriptor.claimFields().includes('fact-inference-or-recommendation'));
  assert.ok(descriptor.citationFields().includes('source-content-hash'));
  assert.ok(descriptor.outputFields().includes('generated-and-derived-labels'));
});

test('ARCH-028-08 validates AI-assisted analysis and provenance safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ ungroundedClaim: true, unsupportedCitation: true, promptPolicyBypassed: true, protectedPayloadInTelemetry: true, modelOutputAsSourceTruth: true, confidenceAsCompletion: true, operationalStateMutated: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /ungrounded claims/);
  assert.match(result.errors.join('\n'), /unsupported citations/);
  assert.match(result.errors.join('\n'), /prompt-policy bypass/);
  assert.match(result.errors.join('\n'), /model output as source truth/);
});

test('ARCH-028-08 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { citationFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === AI_ASSISTED_ANALYSIS_INSIGHT_PROVENANCE_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).claimFields.push('x'), TypeError);
});
