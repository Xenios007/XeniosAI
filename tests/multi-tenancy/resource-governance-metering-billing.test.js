import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { LIMIT_TYPES, RESOURCE_GOVERNANCE_METERING_BILLING_ERROR_CODE, RESPONSIBILITY_CAPABILITIES, WORKLOAD_CLASSES, ResourceGovernanceMeteringBillingDescriptor, ResourceGovernanceMeteringBillingProfile, addMultiTenancy } from '../../src/multi-tenancy/index.js';

const METADATA_KEYS = ['governancePrinciples', 'responsibilityCapabilities', 'governedResourceFamilies', 'resourceScopeFields', 'quotaFields', 'limitTypes', 'quotaHierarchyLevels', 'admissionControlFactors', 'fairSchedulingMechanisms', 'noisyNeighborProtectionTargets', 'workloadClasses', 'gracefulDegradationActions', 'capacityReservationFields', 'dedicatedResourceRequirements', 'usageRecordFields', 'measurementSemanticsFields', 'collectionArchitectureSteps', 'usageCorrectionFields', 'tenantUsageViewItems', 'usageNotificationFields', 'aiAgentBudgetAreas', 'workflowResourceControls', 'integrationResourceControls', 'exportMigrationGovernanceDeclarations', 'capacityPlanningInputs', 'resourceAnomalyIndicators', 'governanceEvidenceItems', 'governanceReconciliationComparisons', 'governanceFailureBehaviors', 'governanceTestingAreas', 'architecturalRules'];

test('ARCH-018-08 exposes responsibility, resource, and quota metadata', () => { const descriptor = new ResourceGovernanceMeteringBillingDescriptor(); assert.ok(descriptor.responsibilityCapabilities().includes(RESPONSIBILITY_CAPABILITIES.ADMISSION_CONTROL)); assert.ok(descriptor.governedResourceFamilies().includes('agent-runs-tool-calls-and-delegation')); assert.ok(descriptor.limitTypes().includes(LIMIT_TYPES.PLATFORM_SAFETY)); assert.ok(descriptor.quotaHierarchyLevels().includes('actor-or-integration-connection')); });

test('ARCH-018-08 exposes scheduling, workload, and degradation metadata', () => { const descriptor = new ResourceGovernanceMeteringBillingDescriptor(); assert.ok(descriptor.fairSchedulingMechanisms().includes('weighted-fair-queues')); assert.ok(descriptor.workloadClasses().includes(WORKLOAD_CLASSES.SECURITY_INCIDENT)); assert.ok(descriptor.gracefulDegradationActions().includes('preserve-core-transactional-and-safety-operations')); assert.ok(descriptor.noisyNeighborProtectionTargets().includes('operator-attention')); });

test('ARCH-018-08 exposes metering, budget, and reconciliation metadata', () => { const descriptor = new ResourceGovernanceMeteringBillingDescriptor(); assert.ok(descriptor.usageRecordFields().includes('idempotency-and-integrity-information')); assert.ok(descriptor.aiAgentBudgetAreas().includes('agent-steps-and-delegations')); assert.ok(descriptor.governanceReconciliationComparisons().includes('invoices-with-approved-rated-results')); assert.ok(descriptor.governanceTestingAreas().includes('billing-traceability')); });

test('ARCH-018-08 validates profiles and rejects governance shortcuts', () => {
  const descriptor = new ResourceGovernanceMeteringBillingDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ oneTenantCannotExhaustAnothers: false, usageRecordsImmutable: false, runtimeAsksIfChargeWasPaid: true, agentBypassesBudgetViaChildrenOrRetries: true, failingConnectionConsumesSharedRetryCapacity: true, estimatedDataChargedAsConfirmedUsage: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must not exhaust resources/);
  assert.match(validation.errors.join('\n'), /usage records to be immutable/);
  assert.match(validation.errors.join('\n'), /whether a charge was paid/);
  assert.match(validation.errors.join('\n'), /spawning children/);
  assert.match(validation.errors.join('\n'), /shared retry capacity/);
  assert.match(validation.errors.join('\n'), /estimated data as confirmed usage/);
});

test('ARCH-018-08 detects incomplete resource governance, metering, and billing metadata', () => { class IncompleteDescriptor extends ResourceGovernanceMeteringBillingDescriptor { limitTypes() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === RESOURCE_GOVERNANCE_METERING_BILLING_ERROR_CODE); });

test('ARCH-018-08 profile is immutable and descriptor is registered', () => {
  const descriptor = addMultiTenancy(new ServiceCollection()).buildServiceProvider().getRequiredService('ResourceGovernanceMeteringBillingDescriptor');
  assert.ok(descriptor instanceof ResourceGovernanceMeteringBillingDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.limitTypes.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new ResourceGovernanceMeteringBillingProfile({ profileName: 'Resource Governance, Metering, and Billing', ...metadata }); }
