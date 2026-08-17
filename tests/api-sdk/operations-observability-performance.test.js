import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_SDK_HEALTH_DIMENSIONS, API_SDK_OBSERVABILITY_SIGNALS, API_SDK_OPERATIONS_ERROR_CODE,
  API_SDK_OPERATIONS_PRINCIPLES, API_SDK_OPERATIONS_RULES, API_SDK_OPERATIONAL_CAPABILITIES,
  API_SDK_PERFORMANCE_AREAS, OperationsObservabilityPerformanceDescriptor,
  OperationsObservabilityPerformanceProfile, addApiSdk
} from '../../src/api-sdk/index.js';

test('ARCH-017-09 exposes operational principles, health, and evidence metadata', () => {
  const descriptor = new OperationsObservabilityPerformanceDescriptor();
  assert.ok(descriptor.principles().includes(API_SDK_OPERATIONS_PRINCIPLES.OUTCOMES_DEFINE_HEALTH));
  assert.ok(descriptor.healthDimensions().includes(API_SDK_HEALTH_DIMENSIONS.ISOLATION));
  assert.ok(descriptor.observabilitySignals().includes(API_SDK_OBSERVABILITY_SIGNALS.AUDIT_EVIDENCE));
  assert.ok(descriptor.telemetryContextFields().includes('correlation-identifier'));
});

test('ARCH-017-09 exposes operations, capacity, and performance controls', () => {
  const descriptor = new OperationsObservabilityPerformanceDescriptor();
  assert.ok(descriptor.operationalCapabilities().includes(API_SDK_OPERATIONAL_CAPABILITIES.ADMISSION));
  assert.ok(descriptor.operationalCapabilities().includes(API_SDK_OPERATIONAL_CAPABILITIES.RECOVERY));
  assert.ok(descriptor.performanceAreas().includes(API_SDK_PERFORMANCE_AREAS.BUDGETS));
  assert.ok(descriptor.architecturalRules().includes(API_SDK_OPERATIONS_RULES.BOUNDS_OBSERVABLE));
});

test('ARCH-017-09 validates complete profiles and rejects unsafe shortcuts', () => {
  const descriptor = new OperationsObservabilityPerformanceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ endpointReachabilitySufficient: true, unboundedRetries: true,
    unrestrictedTelemetryDefault: true, unknownNotHealthy: false, providerHealthProvesIntegration: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /reachability alone/);
  assert.match(validation.errors.join('\n'), /unbounded retries/);
  assert.match(validation.errors.join('\n'), /unknown health evidence/);
});

test('ARCH-017-09 detects incomplete metadata', () => {
  class IncompleteDescriptor extends OperationsObservabilityPerformanceDescriptor {
    objectives() { return []; }
  }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === API_SDK_OPERATIONS_ERROR_CODE);
});

test('ARCH-017-09 profile is immutable and descriptor is registered', () => {
  const descriptor = addApiSdk(new ServiceCollection()).buildServiceProvider()
    .getRequiredService('OperationsObservabilityPerformanceDescriptor');
  assert.ok(descriptor instanceof OperationsObservabilityPerformanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.objectives.push('other'), TypeError);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of ['objectives', 'principles', 'definitions', 'operationalDomains', 'lifecycleStates',
    'healthDimensions', 'observabilitySignals', 'telemetryContextFields', 'operationalCapabilities',
    'performanceAreas', 'architecturalRules', 'architectureBoundaries']) metadata[key] = descriptor[key]();
  return new OperationsObservabilityPerformanceProfile({
    profileName: 'API and SDK Operations, Observability, and Performance', ...metadata
  });
}
