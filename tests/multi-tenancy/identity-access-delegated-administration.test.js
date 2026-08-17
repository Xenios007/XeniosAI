import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { IDENTITY_ACCESS_DELEGATED_ADMINISTRATION_ERROR_CODE, IDENTITY_CATEGORIES, MEMBERSHIP_LIFECYCLE_STAGES, ROLE_CATEGORIES, IdentityAccessDelegatedAdministrationDescriptor, IdentityAccessDelegatedAdministrationProfile, addMultiTenancy } from '../../src/multi-tenancy/index.js';

const METADATA_KEYS = ['accessPrinciples', 'identityCategories', 'identityMembershipCardinalities', 'membershipFields', 'membershipLifecycleStages', 'federationRequirements', 'justInTimeConditions', 'tenantSelectionControls', 'tenantContextClaims', 'authorizationFactors', 'resourceOwnershipChecks', 'roleCategories', 'propertyScopedAccessGrants', 'delegableResponsibilities', 'delegationProhibitions', 'delegationRules', 'segregationOfDutiesExamples', 'workloadIdentityControls', 'integrationIdentityControls', 'workflowAgentAuthorityElements', 'supportSessionFields', 'emergencyAccessRequirements', 'crossTenantCapabilityRequirements', 'sessionTokenBoundaries', 'cachingProhibitions', 'accessLifecycleTriggers', 'protectedAccessDataTypes', 'accessEvidenceTypes', 'accessReviewAreas', 'failureConditions', 'testingRequirements', 'architecturalRules'];

test('ARCH-018-04 exposes identity, membership, and role metadata', () => { const descriptor = new IdentityAccessDelegatedAdministrationDescriptor(); assert.ok(descriptor.identityCategories().includes(IDENTITY_CATEGORIES.AGENT)); assert.ok(descriptor.membershipLifecycleStages().includes(MEMBERSHIP_LIFECYCLE_STAGES.RECERTIFIED)); assert.ok(descriptor.roleCategories().includes(ROLE_CATEGORIES.TENANT_AUDITOR)); assert.ok(descriptor.identityMembershipCardinalities().includes('multiple-independent-tenant-memberships')); });

test('ARCH-018-04 exposes authorization, delegation, and segregation metadata', () => { const descriptor = new IdentityAccessDelegatedAdministrationDescriptor(); assert.ok(descriptor.authorizationFactors().includes('entitlement-and-quota-state')); assert.ok(descriptor.delegationRules().includes('revoking-a-parent-grant-invalidates-dependent-grants')); assert.ok(descriptor.delegationProhibitions().includes('access-another-tenant')); assert.ok(descriptor.segregationOfDutiesExamples().includes('executing-and-reviewing-emergency-access')); });

test('ARCH-018-04 exposes support, cross-tenant, and evidence metadata', () => { const descriptor = new IdentityAccessDelegatedAdministrationDescriptor(); assert.ok(descriptor.supportSessionFields().includes('redaction-and-export-controls')); assert.ok(descriptor.crossTenantCapabilityRequirements().includes('strong-segregation-from-tenant-facing-apis')); assert.ok(descriptor.accessEvidenceTypes().includes('denied-and-suspicious-cross-tenant-attempts')); assert.ok(descriptor.testingRequirements().includes('cross-tenant-api-segregation')); });

test('ARCH-018-04 validates profiles and rejects access shortcuts', () => {
  const descriptor = new IdentityAccessDelegatedAdministrationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ missingScopeFailsClosed: false, providerValidatesResourceOwnership: false, clientHeaderSufficientAuthority: true, tenantAdminGrantsCrossTenantAuthority: true, childWorkflowExpandsAuthority: true, delegationExceedsDelegatorScope: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /missing or ambiguous scope to fail closed/);
  assert.match(validation.errors.join('\n'), /client-supplied tenant header/);
  assert.match(validation.errors.join('\n'), /cross-tenant platform authority/);
  assert.match(validation.errors.join('\n'), /expanding delegated authority/);
  assert.match(validation.errors.join('\n'), /exceeding the delegator/);
});

test('ARCH-018-04 detects incomplete identity, access, and delegated administration metadata', () => { class IncompleteDescriptor extends IdentityAccessDelegatedAdministrationDescriptor { roleCategories() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === IDENTITY_ACCESS_DELEGATED_ADMINISTRATION_ERROR_CODE); });

test('ARCH-018-04 profile is immutable and descriptor is registered', () => {
  const descriptor = addMultiTenancy(new ServiceCollection()).buildServiceProvider().getRequiredService('IdentityAccessDelegatedAdministrationDescriptor');
  assert.ok(descriptor instanceof IdentityAccessDelegatedAdministrationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.roleCategories.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new IdentityAccessDelegatedAdministrationProfile({ profileName: 'Identity, Access, and Delegated Administration', ...metadata }); }
