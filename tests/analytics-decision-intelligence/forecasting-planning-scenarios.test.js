import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { FORECASTING_PLANNING_SCENARIOS_ERROR_CODE, ForecastingPlanningScenariosDescriptor as Descriptor, ForecastingPlanningScenariosProfile as Profile } from '../../src/analytics-decision-intelligence/index.js';

const keys = ['responsibilities', 'forecastDefinitionFields', 'forecastResultFields', 'assumptionFields', 'scenarioFields', 'uncertaintyFields', 'planningInputFields', 'backtestFields', 'reconciliationFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia occupancy forecast', ...profile }); };

test('ARCH-028-05 exposes forecasts assumptions scenarios uncertainty planning backtesting and reconciliation', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.forecastDefinitionFields().includes('forecast-horizon'));
  assert.ok(descriptor.forecastResultFields().includes('prediction-intervals'));
  assert.ok(descriptor.assumptionFields().includes('supporting-evidence-references'));
  assert.ok(descriptor.scenarioFields().includes('baseline-version-reference'));
  assert.ok(descriptor.uncertaintyFields().includes('known-limitations'));
  assert.ok(descriptor.backtestFields().includes('baseline-comparison'));
  assert.ok(descriptor.reconciliationFields().includes('authoritative-actual-reference'));
});

test('ARCH-028-05 validates forecasting and planning safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ hiddenAssumption: true, pointEstimateAsCertainty: true, scenarioAsCommittedPlan: true, forecastAsSourceTruth: true, backtestSkipped: true, reconciliationIgnored: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /hidden assumptions/);
  assert.match(result.errors.join('\n'), /point estimates as certainty/);
  assert.match(result.errors.join('\n'), /forecasts as source truth/);
  assert.match(result.errors.join('\n'), /skipped backtesting/);
});

test('ARCH-028-05 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { uncertaintyFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === FORECASTING_PLANNING_SCENARIOS_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).assumptionFields.push('x'), TypeError);
});
