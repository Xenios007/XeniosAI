import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { FAILURE_COMPENSATION_RESPONSES, TENANT_LIFECYCLE_EVENTS, TENANT_LIFECYCLE_PROVISIONING_ERROR_CODE, TENANT_LIFECYCLE_STATES, TENANT_MIGRATION_STEPS, TenantLifecycleProvisioningDescriptor, TenantLifecycleProvisioningProfile, addMultiTenancy } from '../../src/multi-tenancy/index.js';

const METADATA_KEYS = ['lifecyclePrinciples', 'lifecycleStates', 'transitionContractFields', 'requestInputs', 'assessmentAreas', 'approvalElements', 'provisioningSteps', 'provisioningDomains', 'manifestProperties', 'concurrencyDistinctions', 'failureResponses', 'readinessChecks', 'activationPreconditions', 'activeStateChanges', 'restrictionExamples', 'suspensionExceptions', 'reactivationChecks', 'migrationSteps', 'offboardingPlanElements', 'exportRequirements', 'retentionClassifications', 'retirementConditions', 'reconciliationFindings', 'lifecycleEvents', 'lifecycleRoles', 'evidenceQuestions', 'serviceObjectives', 'architecturalRules'];

test('ARCH-018-03 exposes lifecycle state, transition, and request metadata', () => { const descriptor = new TenantLifecycleProvisioningDescriptor(); assert.ok(descriptor.lifecycleStates().includes(TENANT_LIFECYCLE_STATES.SUSPENDED)); assert.ok(descriptor.lifecycleStates().includes(TENANT_LIFECYCLE_STATES.RETIRED)); assert.ok(descriptor.transitionContractFields().includes('command-identifier-and-idempotency-key')); assert.ok(descriptor.requestInputs().includes('legal-and-business-identity')); });

test('ARCH-018-03 exposes provisioning, migration, and failure-handling metadata', () => { const descriptor = new TenantLifecycleProvisioningDescriptor(); assert.ok(descriptor.provisioningDomains().includes('data-and-runtime')); assert.ok(descriptor.migrationSteps().includes(TENANT_MIGRATION_STEPS.CUTOVER)); assert.ok(descriptor.failureResponses().includes(FAILURE_COMPENSATION_RESPONSES.COMPENSATE)); assert.ok(descriptor.reconciliationFindings().includes('orphaned-resources')); });

test('ARCH-018-03 exposes offboarding, retirement, and event metadata', () => { const descriptor = new TenantLifecycleProvisioningDescriptor(); assert.ok(descriptor.exportRequirements().includes('integrity-protected')); assert.ok(descriptor.retirementConditions().includes('eligible-resources-and-derivatives-are-deleted')); assert.ok(descriptor.lifecycleEvents().includes(TENANT_LIFECYCLE_EVENTS.RETIRED)); assert.ok(descriptor.lifecycleRoles().includes('tenant-lifecycle-owner')); });

test('ARCH-018-03 validates profiles and rejects lifecycle shortcuts', () => {
  const descriptor = new TenantLifecycleProvisioningDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ activationRequiresValidation: false, providersOwnResourceLifecycle: false, resourceCreationAloneActivates: true, migrationChangesTenantIdentifier: true, invoiceStatusModifiesAuthorization: true, retiredIdentifiersReused: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /activation to follow validation/);
  assert.match(validation.errors.join('\n'), /resource creation alone/);
  assert.match(validation.errors.join('\n'), /changing the tenant identifier/);
  assert.match(validation.errors.join('\n'), /invoice status alone/);
  assert.match(validation.errors.join('\n'), /identifiers from being reused/);
});

test('ARCH-018-03 detects incomplete tenant lifecycle and provisioning metadata', () => { class IncompleteDescriptor extends TenantLifecycleProvisioningDescriptor { lifecycleStates() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === TENANT_LIFECYCLE_PROVISIONING_ERROR_CODE); });

test('ARCH-018-03 profile is immutable and descriptor is registered', () => {
  const descriptor = addMultiTenancy(new ServiceCollection()).buildServiceProvider().getRequiredService('TenantLifecycleProvisioningDescriptor');
  assert.ok(descriptor instanceof TenantLifecycleProvisioningDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.lifecycleStates.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new TenantLifecycleProvisioningProfile({ profileName: 'Tenant Lifecycle and Provisioning', ...metadata }); }
