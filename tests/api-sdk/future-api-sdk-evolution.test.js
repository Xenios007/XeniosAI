import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_SDK_FUTURE_BOUNDARIES, API_SDK_FUTURE_CAPABILITY_AREAS, API_SDK_FUTURE_EVOLUTION_ERROR_CODE,
  API_SDK_FUTURE_HORIZONS, API_SDK_FUTURE_INVARIANTS, API_SDK_FUTURE_RULES,
  FutureApiSdkEvolutionDescriptor, FutureApiSdkEvolutionProfile, addApiSdk
} from '../../src/api-sdk/index.js';

test('ARCH-017-10 exposes horizons, maturity, capability, and invariant metadata', () => {
  const descriptor = new FutureApiSdkEvolutionDescriptor();
  assert.deepEqual(descriptor.horizons(), Object.values(API_SDK_FUTURE_HORIZONS));
  assert.ok(descriptor.capabilityAreas().includes(API_SDK_FUTURE_CAPABILITY_AREAS.MULTIMODAL));
  assert.ok(descriptor.invariants().includes(API_SDK_FUTURE_INVARIANTS.PROVIDER_AUTHORITY));
  assert.ok(descriptor.architectureBoundaries().includes(API_SDK_FUTURE_BOUNDARIES.NO_MANDATORY_TECHNOLOGY));
});

test('ARCH-017-10 exposes adoption, evidence, stop, and governance metadata', () => {
  const descriptor = new FutureApiSdkEvolutionDescriptor();
  assert.ok(descriptor.adoptionGates().includes('portability-and-exit-readiness'));
  assert.ok(descriptor.evidenceTypes().includes('provider-and-exit-tests'));
  assert.ok(descriptor.stopCriteria().includes('tenant-or-property-isolation-not-assured'));
  assert.ok(descriptor.architecturalRules().includes(API_SDK_FUTURE_RULES.ADR_REQUIRED));
});

test('ARCH-017-10 validates complete profiles and rejects evolution shortcuts', () => {
  const descriptor = new FutureApiSdkEvolutionDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ businessFirst: false, evidenceBasedPromotion: false,
    discoveryGrantsAuthority: true, permanentPreview: true, aiAutonomousApproval: true,
    experimentProductionApproved: true, portabilityClaimUntested: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /business and domain needs/);
  assert.match(validation.errors.join('\n'), /marketplace listing as authority/);
  assert.match(validation.errors.join('\n'), /permanent preview/);
});

test('ARCH-017-10 detects incomplete evolution metadata', () => {
  class IncompleteDescriptor extends FutureApiSdkEvolutionDescriptor { horizons() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === API_SDK_FUTURE_EVOLUTION_ERROR_CODE);
});

test('ARCH-017-10 profile is immutable and descriptor is registered', () => {
  const descriptor = addApiSdk(new ServiceCollection()).buildServiceProvider()
    .getRequiredService('FutureApiSdkEvolutionDescriptor');
  assert.ok(descriptor instanceof FutureApiSdkEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.horizons.push('other'), TypeError);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of ['objectives', 'strategicDrivers', 'invariants', 'horizons', 'maturityLevels',
    'capabilityAreas', 'experimentStates', 'adoptionGates', 'evidenceTypes', 'stopCriteria',
    'architecturalRules', 'architectureBoundaries']) metadata[key] = descriptor[key]();
  return new FutureApiSdkEvolutionProfile({ profileName: 'Future API and SDK Evolution', ...metadata });
}
