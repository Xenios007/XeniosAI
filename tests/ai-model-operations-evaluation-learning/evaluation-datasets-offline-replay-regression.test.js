import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { EVALUATION_DATASETS_OFFLINE_REPLAY_REGRESSION_ERROR_CODE, EvaluationDatasetsOfflineReplayRegressionDescriptor as Descriptor, EvaluationDatasetsOfflineReplayRegressionProfile as Profile } from '../../src/ai-model-operations-evaluation-learning/index.js';

const keys = ['responsibilities', 'datasetFields', 'caseFields', 'provenanceFields', 'sliceFields', 'goldenOutcomeFields', 'replayFields', 'judgeFields', 'regressionFields', 'safetyGroundingFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia evaluation replay', ...profile }); };

test('ARCH-029-06 exposes datasets provenance slices golden outcomes replay judges regression safety and grounding', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.datasetFields().includes('immutable-dataset-version'));
  assert.ok(descriptor.provenanceFields().includes('ordered-transformation-version-references'));
  assert.ok(descriptor.sliceFields().includes('slice-specific-quality-thresholds'));
  assert.ok(descriptor.goldenOutcomeFields().includes('expected-tool-use'));
  assert.ok(descriptor.replayFields().includes('generation-parameter-lock'));
  assert.ok(descriptor.judgeFields().includes('calibration-dataset-and-result-reference'));
  assert.ok(descriptor.regressionFields().includes('slice-level-results'));
  assert.ok(descriptor.safetyGroundingFields().includes('source-support-result'));
});

test('ARCH-029-06 validates reproducible evaluation and regression safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ mutablePublishedDataset: true, unprovenancedCase: true, crossTenantDataset: true, protectedDataIncluded: true, liveDependencyDuringReplay: true, aggregateOnlyDecision: true, uncalibratedModelJudge: true, regressionGateBypassed: true, evaluationDirectlyPromotes: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /mutable published datasets/);
  assert.match(result.errors.join('\n'), /live dependencies during replay/);
  assert.match(result.errors.join('\n'), /aggregate-only quality decisions/);
  assert.match(result.errors.join('\n'), /directly promoting production behavior/);
});

test('ARCH-029-06 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { replayFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === EVALUATION_DATASETS_OFFLINE_REPLAY_REGRESSION_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).sliceFields.push('x'), TypeError);
});
