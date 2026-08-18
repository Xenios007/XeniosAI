import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { ENTERPRISE_ACTORS, MULTI_PROPERTY_ARCHITECTURAL_RULES, MULTI_PROPERTY_ENTERPRISE_REFERENCE_ERROR_CODE, MultiPropertyEnterpriseReferenceDescriptor, MultiPropertyEnterpriseReferenceProfile, addReferenceImplementations } from '../../src/reference-implementations/index.js';

const METADATA_KEYS = ['enterpriseActors', 'hierarchyLevels', 'enterpriseCapabilities', 'accessModelDimensions', 'configurationPrecedenceLevels', 'dataIsolationControls', 'knowledgeAndMemoryScopes', 'crossPropertyWorkflowSteps', 'integrationTopologyDimensions', 'resourceGovernanceScopes', 'deploymentVariants', 'operationsVisibilityDimensions', 'failureScenarios', 'referenceAcceptanceCriteria', 'architecturalRules'];

test('ARCH-020-04 exposes actor, hierarchy, and enterprise-capability metadata', () => { const descriptor = new MultiPropertyEnterpriseReferenceDescriptor(); assert.ok(descriptor.enterpriseActors().includes(ENTERPRISE_ACTORS.CORPORATE_TEAM)); assert.ok(descriptor.hierarchyLevels().includes('region-or-brand')); assert.ok(descriptor.enterpriseCapabilities().includes('identity-federation')); });

test('ARCH-020-04 exposes access-model, configuration-precedence, and data-isolation metadata', () => { const descriptor = new MultiPropertyEnterpriseReferenceDescriptor(); assert.ok(descriptor.accessModelDimensions().includes('resource-ownership')); assert.ok(descriptor.configurationPrecedenceLevels().includes('mandatory-platform-controls')); assert.ok(descriptor.dataIsolationControls().includes('dedicated-placement')); });

test('ARCH-020-04 exposes knowledge/memory, cross-property workflow, and integration-topology metadata', () => { const descriptor = new MultiPropertyEnterpriseReferenceDescriptor(); assert.ok(descriptor.knowledgeAndMemoryScopes().includes('property-local-knowledge')); assert.ok(descriptor.crossPropertyWorkflowSteps().includes('preserve-per-property-authorization')); assert.ok(descriptor.integrationTopologyDimensions().includes('residency')); });

test('ARCH-020-04 exposes resource-governance, deployment, operations, failure, acceptance, and architectural-rule metadata', () => {
  const descriptor = new MultiPropertyEnterpriseReferenceDescriptor();
  assert.ok(descriptor.resourceGovernanceScopes().includes('cell'));
  assert.ok(descriptor.deploymentVariants().includes('regional-cells'));
  assert.ok(descriptor.operationsVisibilityDimensions().includes('tier'));
  assert.ok(descriptor.failureScenarios().includes('federation-outage'));
  assert.ok(descriptor.referenceAcceptanceCriteria().includes('provider-services-reject-cross-tenant-resources'));
  assert.ok(descriptor.architecturalRules().includes(MULTI_PROPERTY_ARCHITECTURAL_RULES.PORTFOLIO_HIERARCHY_DOES_NOT_IMPLY_VISIBILITY));
});

test('ARCH-020-04 validates profiles and rejects isolation shortcuts', () => {
  const descriptor = new MultiPropertyEnterpriseReferenceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ providerServicesRejectCrossTenantResources: false, crossPropertyAccessIsAnExplicitPortfolioGrant: false, portfolioHierarchyAutomaticallyGrantsDataAccess: true, tenantSpecificRestoreCanOverwriteAnotherTenant: true, sharedServicesSkipProviderSideTenantValidation: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /reject cross-tenant resources/);
  assert.match(validation.errors.join('\n'), /explicit portfolio grant/);
  assert.match(validation.errors.join('\n'), /automatically granting data access/);
  assert.match(validation.errors.join('\n'), /restore from overwriting another tenant/);
  assert.match(validation.errors.join('\n'), /skipping provider-side tenant validation/);
});

test('ARCH-020-04 detects incomplete multi-property enterprise reference metadata', () => { class IncompleteDescriptor extends MultiPropertyEnterpriseReferenceDescriptor { dataIsolationControls() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === MULTI_PROPERTY_ENTERPRISE_REFERENCE_ERROR_CODE); });

test('ARCH-020-04 profile is immutable and descriptor is registered', () => {
  const descriptor = addReferenceImplementations(new ServiceCollection()).buildServiceProvider().getRequiredService('MultiPropertyEnterpriseReferenceDescriptor');
  assert.ok(descriptor instanceof MultiPropertyEnterpriseReferenceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.dataIsolationControls.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new MultiPropertyEnterpriseReferenceProfile({ referenceName: 'Multi-Property Enterprise Reference', ...metadata }); }
