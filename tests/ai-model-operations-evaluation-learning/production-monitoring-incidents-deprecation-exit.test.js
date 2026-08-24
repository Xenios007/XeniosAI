import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { PRODUCTION_MONITORING_INCIDENTS_DEPRECATION_EXIT_ERROR_CODE, ProductionMonitoringIncidentsDeprecationExitDescriptor as Descriptor, ProductionMonitoringIncidentsDeprecationExitProfile as Profile } from '../../src/ai-model-operations-evaluation-learning/index.js';

const keys = ['responsibilities', 'telemetryFields', 'objectiveFields', 'driftFields', 'incidentFields', 'containmentFields', 'rollbackFields', 'deprecationFields', 'retirementFields', 'providerExitFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia production AI operations', ...profile }); };

test('ARCH-029-08 exposes behavior telemetry objectives drift incidents containment rollback retirement and provider exit', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.telemetryFields().includes('behavior-package-version'));
  assert.ok(descriptor.objectiveFields().includes('error-budget'));
  assert.ok(descriptor.driftFields().includes('input-output-quality-safety-cost-or-latency'));
  assert.ok(descriptor.incidentFields().includes('customer-business-safety-and-privacy-impact'));
  assert.ok(descriptor.containmentFields().includes('pause-restrict-disable-fallback-or-rollback'));
  assert.ok(descriptor.rollbackFields().includes('last-known-good-package-version'));
  assert.ok(descriptor.retirementFields().includes('zero-production-traffic-evidence'));
  assert.ok(descriptor.providerExitFields().includes('exit-exercise-evidence'));
});

test('ARCH-029-08 validates production operations deprecation and exit safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ unversionedTelemetry: true, protectedPayloadInTelemetry: true, crossTenantSignals: true, driftIgnored: true, incidentOwnershipMissing: true, rollbackBypassed: true, silentDeprecation: true, retirementWithTraffic: true, providerExitWithoutValidation: true, monitoringDirectlyLearns: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /unversioned telemetry/);
  assert.match(result.errors.join('\n'), /ignored drift/);
  assert.match(result.errors.join('\n'), /silent deprecation/);
  assert.match(result.errors.join('\n'), /provider exit without validation/);
});

test('ARCH-029-08 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { providerExitFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === PRODUCTION_MONITORING_INCIDENTS_DEPRECATION_EXIT_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).incidentFields.push('x'), TypeError);
});
