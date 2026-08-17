import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { CROSS_TENANT_SCENARIOS, ISOLATION_PROFILE_CATEGORIES, TENANT_DOMAIN_ISOLATION_ERROR_CODE, TENANT_DOMAIN_PRINCIPLES, TENANT_FAILURE_CONDITIONS, TENANT_ISOLATION_DIMENSIONS, TENANT_ISOLATION_MODELS, TenantDomainIsolationDescriptor, TenantDomainIsolationProfile, addMultiTenancy } from '../../src/multi-tenancy/index.js';

const METADATA_KEYS = ['domainPrinciples', 'domainConcepts', 'aggregateRules', 'identifierRequirements', 'aliasTypes', 'hierarchyLevels', 'propertyTransferConcerns', 'registryFields', 'isolationObjectives', 'isolationDimensions', 'isolationModels', 'isolationProfileCategories', 'isolationSelectionFactors', 'placementAttributes', 'ownershipChecks', 'dataModelRules', 'scopeClassifications', 'crossTenantScenarios', 'recoveryUnits', 'operationalControls', 'assuranceMethods', 'failureConditions', 'architecturalRules', 'architectureBoundaries'];

test('ARCH-018-02 exposes domain, identity, and hierarchy metadata', () => { const descriptor = new TenantDomainIsolationDescriptor(); assert.ok(descriptor.domainPrinciples().includes(TENANT_DOMAIN_PRINCIPLES.STABLE_IDENTITY)); assert.ok(descriptor.domainPrinciples().includes(TENANT_DOMAIN_PRINCIPLES.HIERARCHY_NOT_ACCESS)); assert.ok(descriptor.identifierRequirements().includes('never-recycled')); assert.ok(descriptor.hierarchyLevels().includes('organizational-unit')); });

test('ARCH-018-02 exposes isolation dimension, model, and profile category metadata', () => { const descriptor = new TenantDomainIsolationDescriptor(); assert.ok(descriptor.isolationDimensions().includes(TENANT_ISOLATION_DIMENSIONS.CRYPTOGRAPHIC)); assert.ok(descriptor.isolationDimensions().includes(TENANT_ISOLATION_DIMENSIONS.TEMPORAL)); assert.ok(descriptor.isolationModels().includes(TENANT_ISOLATION_MODELS.HYBRID)); assert.ok(descriptor.isolationProfileCategories().includes(ISOLATION_PROFILE_CATEGORIES.RESILIENCE)); });

test('ARCH-018-02 exposes cross-tenant, recovery, and failure metadata', () => { const descriptor = new TenantDomainIsolationDescriptor(); assert.ok(descriptor.crossTenantScenarios().includes(CROSS_TENANT_SCENARIOS.MARKETPLACE)); assert.ok(descriptor.recoveryUnits().includes('deployment-cell')); assert.ok(descriptor.failureConditions().includes(TENANT_FAILURE_CONDITIONS.ROUTING)); assert.ok(descriptor.assuranceMethods().includes('negative-authorization-tests')); });

test('ARCH-018-02 validates profiles and rejects isolation shortcuts', () => {
  const descriptor = new TenantDomainIsolationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ stableOpaqueIdentifiers: false, providerOwnershipValidation: false, aliasIsIdentity: true, clientChoosesPlacement: true, defaultPartitionFallback: true, ordinaryApiCrossTenantQuery: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /stable, opaque, immutable/);
  assert.match(validation.errors.join('\n'), /providers to validate tenant ownership/);
  assert.match(validation.errors.join('\n'), /aliases as tenant identity/);
  assert.match(validation.errors.join('\n'), /arbitrary placement targets/);
  assert.match(validation.errors.join('\n'), /default partition/);
  assert.match(validation.errors.join('\n'), /general cross-tenant queries/);
});

test('ARCH-018-02 detects incomplete tenant domain and isolation metadata', () => { class IncompleteDescriptor extends TenantDomainIsolationDescriptor { isolationDimensions() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === TENANT_DOMAIN_ISOLATION_ERROR_CODE); });

test('ARCH-018-02 profile is immutable and descriptor is registered', () => {
  const descriptor = addMultiTenancy(new ServiceCollection()).buildServiceProvider().getRequiredService('TenantDomainIsolationDescriptor');
  assert.ok(descriptor instanceof TenantDomainIsolationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.isolationDimensions.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new TenantDomainIsolationProfile({ profileName: 'Tenant Domain and Isolation Model', ...metadata }); }
