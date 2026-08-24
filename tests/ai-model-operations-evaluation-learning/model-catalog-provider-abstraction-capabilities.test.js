import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { MODEL_CATALOG_PROVIDER_ABSTRACTION_CAPABILITIES_ERROR_CODE, ModelCatalogProviderAbstractionCapabilitiesDescriptor as Descriptor, ModelCatalogProviderAbstractionCapabilitiesProfile as Profile } from '../../src/ai-model-operations-evaluation-learning/index.js';

const keys = ['responsibilities', 'modelFields', 'providerFields', 'modalities', 'capabilityFields', 'limitFields', 'residencyFields', 'costFields', 'versionFields', 'exitFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia model catalog', ...profile }); };

test('ARCH-029-02 exposes models providers modalities capabilities limits residency cost versions and exit', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.modelFields().includes('provider-model-version-reference'));
  assert.ok(descriptor.modalities().includes('tool-calling'));
  assert.ok(descriptor.capabilityFields().includes('structured-output-contract'));
  assert.ok(descriptor.limitFields().includes('cost-budget-limit'));
  assert.ok(descriptor.residencyFields().includes('provider-training-use-policy'));
  assert.ok(descriptor.versionFields().includes('immutable-version-digest'));
  assert.ok(descriptor.exitFields().includes('equivalence-evaluation-plan'));
});

test('ARCH-029-02 validates provider abstraction and catalog safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ providerSpecificConsumerContract: true, capabilityAssumed: true, limitBypassed: true, residencyUnknown: true, costUnbounded: true, mutableProductionVersion: true, exitPlanMissing: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /provider-specific consumer contracts/);
  assert.match(result.errors.join('\n'), /assumed capabilities/);
  assert.match(result.errors.join('\n'), /unknown residency/);
  assert.match(result.errors.join('\n'), /mutable production versions/);
});

test('ARCH-029-02 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { capabilityFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === MODEL_CATALOG_PROVIDER_ABSTRACTION_CAPABILITIES_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).modalities.push('x'), TypeError);
});
