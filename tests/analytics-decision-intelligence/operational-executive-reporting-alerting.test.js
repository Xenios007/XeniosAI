import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { OPERATIONAL_EXECUTIVE_REPORTING_ALERTING_ERROR_CODE, OperationalExecutiveReportingAlertingDescriptor as Descriptor, OperationalExecutiveReportingAlertingProfile as Profile } from '../../src/analytics-decision-intelligence/index.js';

const keys = ['responsibilities', 'dashboardFields', 'reportFields', 'thresholdFields', 'alertFields', 'subscriptionFields', 'freshnessFields', 'drillThroughFields', 'deliveryFields', 'useCases', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia reporting', ...profile }); };

test('ARCH-028-04 exposes dashboards reports thresholds subscriptions freshness drill-through and accessible delivery', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.dashboardFields().includes('metric-version-references'));
  assert.ok(descriptor.thresholdFields().includes('evaluation-window'));
  assert.ok(descriptor.subscriptionFields().includes('subscription-purpose'));
  assert.ok(descriptor.freshnessFields().includes('maximum-acceptable-age'));
  assert.ok(descriptor.drillThroughFields().includes('row-scope-policy'));
  assert.ok(descriptor.deliveryFields().includes('accessible-output-format'));
  assert.ok(descriptor.useCases().includes('occupancy-dashboard'));
});

test('ARCH-028-04 validates reporting and alerting safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ hiddenFilters: true, staleResultUnmarked: true, inaccessibleDelivery: true, crossTenantDrillThrough: true, telemetryAsBusinessTruth: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /hidden filters/);
  assert.match(result.errors.join('\n'), /unmarked stale results/);
  assert.match(result.errors.join('\n'), /cross-tenant drill-through/);
  assert.match(result.errors.join('\n'), /telemetry as business truth/);
});

test('ARCH-028-04 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { deliveryFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === OPERATIONAL_EXECUTIVE_REPORTING_ALERTING_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).dashboardFields.push('x'), TypeError);
});
