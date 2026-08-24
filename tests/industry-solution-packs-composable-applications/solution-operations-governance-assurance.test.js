import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { SOLUTION_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE, SolutionOperationsGovernanceAssuranceDescriptor as Descriptor, SolutionOperationsGovernanceAssuranceProfile as Profile } from '../../src/industry-solution-packs-composable-applications/index.js';

const keys = ['ownershipFields', 'serviceProfileFields', 'serviceObjectiveFields', 'runbookFields', 'incidentFields', 'rolloutFields', 'evidenceFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceActivities', 'invariants'];
const complete = descriptor => {
  const profile = {};
  for (const key of keys) profile[key] = descriptor[key]();
  return new Profile({ profileName: 'Casa Lluvia solution operations', ...profile });
};

test('ARCH-030-09 exposes ownership service objectives runbooks incidents rollout evidence and assurance', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.ownershipFields().includes('operational-owner-reference'));
  assert.ok(descriptor.serviceProfileFields().includes('approved-runbook-set-reference'));
  assert.ok(descriptor.serviceObjectiveFields().includes('customer-impact-and-journey-objectives'));
  assert.ok(descriptor.runbookFields().includes('exercise-and-validation-evidence'));
  assert.ok(descriptor.incidentFields().includes('preserved-evidence-and-correlation-references'));
  assert.ok(descriptor.rolloutFields().includes('progressive-canary-and-wave-plan'));
  assert.ok(descriptor.evidenceFields().includes('independent-assurance-approver-reference'));
  assert.deepEqual(descriptor.observabilityFields(), ['tenant-reference', 'capability', 'operation', 'policy-result', 'pack-service-and-contract-version', 'source-freshness', 'latency', 'outcome', 'correlation-identifier']);
});

test('ARCH-030-09 validates operational governance and assurance safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ sharedOwnership: true, serviceProfileUnversioned: true, telemetryCopiesProtectedPayload: true, runbookUntested: true, incidentFabricatesState: true, bigBangTenantRollout: true, rolloutWithoutRollback: true, mutableEvidence: true, selfAssurance: true, extensionWeakensControls: true, clientInfersCompletion: true, aiSelfPromotes: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /shared authoritative ownership/);
  assert.match(result.errors.join('\n'), /protected payloads in telemetry/);
  assert.match(result.errors.join('\n'), /fabricating business state/);
  assert.match(result.errors.join('\n'), /unbounded big-bang tenant rollout/);
  assert.match(result.errors.join('\n'), /extensions weakening platform controls/);
});

test('ARCH-030-09 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { incidentFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === SOLUTION_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).runbookFields.push('x'), TypeError);
});
