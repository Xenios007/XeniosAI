import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { INDUSTRY_SOLUTION_PACKS_COMPOSABLE_APPLICATIONS_OVERVIEW_ERROR_CODE, IndustrySolutionPacksComposableApplicationsOverviewDescriptor as Descriptor, IndustrySolutionPacksComposableApplicationsOverviewProfile as Profile } from '../../src/industry-solution-packs-composable-applications/index.js';

const keys = ['responsibilities', 'authorities', 'capabilities', 'contractFields', 'packFields', 'lifecycleStates', 'boundaries', 'casaLluviaObjectives', 'governanceControls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia hospitality solution pack', ...profile }); };

test('ARCH-030-01 exposes solution pack authority composition lifecycle and Casa Lluvia objectives', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.authorities().includes('business-state-remains-owning-capability-authority'));
  assert.ok(descriptor.capabilities().includes('solution-pack-model-boundaries-and-manifests'));
  assert.ok(descriptor.boundaries().includes('compose-only-approved-capabilities'));
  assert.ok(descriptor.casaLluviaObjectives().includes('hospitality-does-not-become-universal-platform-model'));
  assert.ok(descriptor.governanceControls().includes('arch-029-ai-evaluation-and-promotion'));
});

test('ARCH-030-01 validates platform authority tenant and bounded-domain safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ platformCoreFork: true, tenantIsolationBypass: true, sharedAuthorityRedefined: true, unrestrictedUniversalDomainModel: true, businessStateReownedByPack: true, directServiceDatabaseAccess: true, optimisticCompletionInferred: true, generatedOutputAsTruth: true, extensionWeakensControls: true, aiBehaviorOutsideArch029: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /platform core forks/);
  assert.match(result.errors.join('\n'), /tenant-isolation bypass/);
  assert.match(result.errors.join('\n'), /unrestricted universal domain models/);
  assert.match(result.errors.join('\n'), /reowning business state/);
});

test('ARCH-030-01 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { boundaries() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === INDUSTRY_SOLUTION_PACKS_COMPOSABLE_APPLICATIONS_OVERVIEW_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).capabilities.push('x'), TypeError);
});
