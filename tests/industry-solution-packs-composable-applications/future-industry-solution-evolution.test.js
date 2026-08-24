import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { FUTURE_INDUSTRY_SOLUTION_EVOLUTION_ERROR_CODE, FutureIndustrySolutionEvolutionDescriptor as Descriptor, FutureIndustrySolutionEvolutionProfile as Profile } from '../../src/industry-solution-packs-composable-applications/index.js';

const keys = ['evolutionPrinciples', 'evolutionHorizons', 'federationContractFields', 'partnerContributionFields', 'portabilityControls', 'intelligenceControls', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Federated Casa Lluvia solution ecosystem', ...profile }); };

test('ARCH-030-10 exposes governed portable partner and federated solution evolution', () => {
  const descriptor = new Descriptor();
  assert.deepEqual(descriptor.evolutionHorizons(), ['governed-foundation', 'connected-capabilities', 'explainable-intelligence', 'portable-and-federated-ecosystem']);
  assert.ok(descriptor.federationContractFields().includes('authoritative-owner-per-material-transition'));
  assert.ok(descriptor.partnerContributionFields().includes('immutable-manifest-and-artifact-digests'));
  assert.ok(descriptor.portabilityControls().includes('tested-provider-and-partner-exit'));
  assert.ok(descriptor.intelligenceControls().includes('arch-029-versioned-evaluation-and-promotion'));
  assert.ok(descriptor.invariants().includes('federation-never-transfers-implicit-authority-or-data-rights'));
});

test('ARCH-030-10 validates controlled industry solution evolution', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ platformCoreForkAllowed: true, universalDomainModelAllowed: true, implicitFederationAuthority: true, partnerSelfPublishes: true, tenantDataSharedWithoutAuthority: true, generatedOutputBecomesTruth: true, clientInfersCompletion: true, telemetryCopiesProtectedPayload: true, irreversibleEvolution: true, aiSelfPromotes: true, extensionWeakensControls: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /forking the platform core/);
  assert.match(result.errors.join('\n'), /implicit authority through federation/);
  assert.match(result.errors.join('\n'), /tenant data sharing without authority/);
  assert.match(result.errors.join('\n'), /AI self-promotion/);
});

test('ARCH-030-10 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { federationContractFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === FUTURE_INDUSTRY_SOLUTION_EVOLUTION_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).portabilityControls.push('x'), TypeError);
});
