import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { DEVELOPER_EXPERIENCE_PORTAL_OVERVIEW_ERROR_CODE, DeveloperExperiencePortalOverviewDescriptor as Descriptor, DeveloperExperiencePortalOverviewProfile as Profile } from '../../src/developer-experience-portal/index.js';

const keys = ['responsibilities', 'authorities', 'capabilities', 'consumers', 'requestContextFields', 'resourceFields', 'lifecycleStates', 'boundaries', 'casaLluviaJourneys', 'governanceControls', 'failureRecovery', 'successMeasures', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia developer portal overview', ...profile }); };

test('ARCH-031-01 exposes portal product authority context lifecycle journeys measures and assurance', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.responsibilities().includes('measurable-developer-facing-product'));
  assert.ok(descriptor.authorities().includes('provider-services-authorize-owned-resources'));
  assert.ok(descriptor.requestContextFields().includes('developer-organization'));
  assert.deepEqual(descriptor.lifecycleStates(), ['discover', 'request', 'review', 'enabled', 'rejected', 'active', 'restricted', 'deprecated', 'retired']);
  assert.ok(descriptor.casaLluviaJourneys().includes('casa-lluvia-sandbox-access'));
  assert.ok(descriptor.successMeasures().includes('time-to-first-successful-call'));
  assert.ok(descriptor.assuranceEvidence().includes('architecture-conformance-tests'));
});

test('ARCH-031-01 validates portal authority security accessibility and machine-assistance boundaries', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ secondControlPlane: true, portalAuthorizesProviderResources: true, visibleControlImpliesPermission: true, embedsCredentialsOrSecrets: true, selfServiceBypassesGuardrails: true, clientInfersCompletion: true, eventsExposeProtectedPayloads: true, supportAccessUnaudited: true, generatedArtifactsUntraceable: true, inaccessibleReviewOrSupport: true, machineSilentlyApproves: true, providerSpecificLockIn: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /second control plane/);
  assert.match(result.errors.join('\n'), /visible controls from implying permission/);
  assert.match(result.errors.join('\n'), /embedded credentials or secrets/);
  assert.match(result.errors.join('\n'), /silently approving access publication or permission expansion/);
});

test('ARCH-031-01 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { requestContextFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === DEVELOPER_EXPERIENCE_PORTAL_OVERVIEW_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).successMeasures.push('x'), TypeError);
});
