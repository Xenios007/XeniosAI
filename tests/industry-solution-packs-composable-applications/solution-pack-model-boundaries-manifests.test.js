import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { SOLUTION_PACK_MODEL_BOUNDARIES_MANIFESTS_ERROR_CODE, SolutionPackModelBoundariesManifestsDescriptor as Descriptor, SolutionPackModelBoundariesManifestsProfile as Profile } from '../../src/industry-solution-packs-composable-applications/index.js';

const keys = ['identifierFields', 'capabilityFields', 'boundedContextFields', 'dependencyFields', 'manifestFields', 'ownershipFields', 'compatibilityFields', 'contractFields', 'lifecycleStates', 'boundaryControls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia hospitality pack manifest', ...profile }); };

test('ARCH-030-02 exposes identifiers capabilities contexts dependencies manifests ownership and compatibility', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.identifierFields().includes('stable-solution-pack-identifier'));
  assert.ok(descriptor.capabilityFields().includes('authoritative-provider-reference'));
  assert.ok(descriptor.boundedContextFields().includes('explicit-context-translation-rules'));
  assert.ok(descriptor.dependencyFields().includes('failure-and-degradation-policy'));
  assert.ok(descriptor.manifestFields().includes('compatibility-declaration-reference'));
  assert.ok(descriptor.ownershipFields().includes('independent-approver-role-references'));
  assert.ok(descriptor.compatibilityFields().includes('compatible-restricted-or-incompatible'));
  assert.deepEqual(descriptor.lifecycleStates(), ['draft', 'review', 'active', 'restricted', 'superseded', 'retired']);
});

test('ARCH-030-02 validates manifest and boundary safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ identifierReusedForDifferentPack: true, undeclaredCapability: true, universalContextIntroduced: true, implicitDependency: true, unversionedManifest: true, ownerlessPack: true, compatibilityAssumed: true, platformCoreFork: true, authorityRedefined: true, tenantIsolationBypass: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /identifier reuse/);
  assert.match(result.errors.join('\n'), /implicit dependencies/);
  assert.match(result.errors.join('\n'), /ownerless packs/);
  assert.match(result.errors.join('\n'), /assumed compatibility/);
});

test('ARCH-030-02 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { manifestFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === SOLUTION_PACK_MODEL_BOUNDARIES_MANIFESTS_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).dependencyFields.push('x'), TypeError);
});
