import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { ANALYTICS_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE, AnalyticsOperationsGovernanceAssuranceDescriptor as Descriptor, AnalyticsOperationsGovernanceAssuranceProfile as Profile } from '../../src/analytics-decision-intelligence/index.js';

const keys = ['operatingRoles', 'qualityObjectives', 'monitoringFields', 'healthStates', 'incidentClasses', 'incidentEvidence', 'modelRiskBoundaries', 'governanceArtifacts', 'assuranceActivities', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia analytics operations', ...profile }); };

test('ARCH-028-09 exposes ownership quality monitoring incidents model risk governance and assurance', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.operatingRoles().includes('analytical-product-owner'));
  assert.ok(descriptor.qualityObjectives().includes('lineage-completeness'));
  assert.ok(descriptor.monitoringFields().includes('source-freshness'));
  assert.ok(descriptor.incidentClasses().includes('unsafe-or-ungrounded-insight'));
  assert.ok(descriptor.modelRiskBoundaries().includes('model-output-remains-advisory'));
  assert.ok(descriptor.assuranceActivities().includes('architecture-conformance-tests'));
});

test('ARCH-028-09 validates analytics operations and model-risk safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ protectedPayloadsCopiedToTelemetry: true, qualityBreachIgnored: true, incidentEvidenceDiscarded: true, modelOutputChangesAuthoritativeState: true, policyBypassedUnderPressure: true, unapprovedModelPromoted: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /protected payloads in telemetry/);
  assert.match(result.errors.join('\n'), /ignored quality breaches/);
  assert.match(result.errors.join('\n'), /model output changing authoritative state/);
  assert.match(result.errors.join('\n'), /unapproved model promotion/);
});

test('ARCH-028-09 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { assuranceActivities() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === ANALYTICS_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).operatingRoles.push('x'), TypeError);
});
