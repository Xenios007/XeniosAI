import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { MULTI_TENANT_SECURITY_ARCHITECTURAL_RULES, MULTI_TENANT_SECURITY_DATA_AND_OPERATIONS_REFERENCE_ERROR_CODE, MultiTenantSecurityDataAndOperationsReferenceDescriptor, MultiTenantSecurityDataAndOperationsReferenceProfile, addReferenceImplementations } from '../../src/reference-implementations/index.js';

const METADATA_KEYS = ['trustedTenantContextFields', 'testIdentityRoles', 'dataIsolationPaths', 'dataLifecycleFixtures', 'securityControls', 'telemetryCorrelationSignals', 'capacityAndFairnessControls', 'incidentScenarios', 'incidentResponseSteps', 'backupAndRecoveryExercises', 'continuityElements', 'evidenceFields', 'referenceAcceptanceCriteria', 'architecturalRules'];

test('ARCH-020-08 exposes tenant context, identity, and isolation metadata', () => {
  const descriptor = new MultiTenantSecurityDataAndOperationsReferenceDescriptor();
  assert.ok(descriptor.trustedTenantContextFields().includes('membership-or-workload-binding'));
  assert.ok(descriptor.testIdentityRoles().includes('support-operator'));
  assert.ok(descriptor.dataIsolationPaths().includes('backups-and-exports'));
  assert.ok(descriptor.dataLifecycleFixtures().includes('provider-disposition'));
});

test('ARCH-020-08 exposes security, telemetry, and fairness metadata', () => {
  const descriptor = new MultiTenantSecurityDataAndOperationsReferenceDescriptor();
  assert.ok(descriptor.securityControls().includes('tenant-aware-provider-validation'));
  assert.ok(descriptor.telemetryCorrelationSignals().includes('incident'));
  assert.ok(descriptor.capacityAndFairnessControls().includes('graceful-degradation'));
});

test('ARCH-020-08 exposes incident, recovery, continuity, evidence, and architectural metadata', () => {
  const descriptor = new MultiTenantSecurityDataAndOperationsReferenceDescriptor();
  assert.ok(descriptor.incidentScenarios().includes('tenant-specific-corruption'));
  assert.ok(descriptor.incidentResponseSteps().includes('contain-smallest-safe-scope'));
  assert.ok(descriptor.backupAndRecoveryExercises().includes('tenant-restore-from-shared-backup'));
  assert.ok(descriptor.continuityElements().includes('return-to-normal'));
  assert.ok(descriptor.evidenceFields().includes('policy-and-version'));
  assert.ok(descriptor.architecturalRules().includes(MULTI_TENANT_SECURITY_ARCHITECTURAL_RULES.DATA_ISOLATION_INCLUDES_DERIVED_AND_OPERATIONAL_DATA));
});

test('ARCH-020-08 validates profiles and rejects unsafe tenant operations', () => {
  const descriptor = new MultiTenantSecurityDataAndOperationsReferenceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ missingConflictingOrAmbiguousScopeFailsClosed: false, workflowCompletionIsAssumedToEqualDeletion: true, tenantRestoreCanOverwriteAnotherTenant: true, supportAccessIsUnattributedOrUnbounded: true, telemetryContainsSecretsOrUnnecessarySensitiveContent: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /fail closed/);
  assert.match(validation.errors.join('\n'), /workflow completion equals deletion/);
  assert.match(validation.errors.join('\n'), /overwriting another tenant/);
  assert.match(validation.errors.join('\n'), /unattributed or unbounded support access/);
  assert.match(validation.errors.join('\n'), /secrets or unnecessary sensitive content/);
});

test('ARCH-020-08 detects incomplete multi-tenant security and operations metadata', () => {
  class IncompleteDescriptor extends MultiTenantSecurityDataAndOperationsReferenceDescriptor { evidenceFields() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === MULTI_TENANT_SECURITY_DATA_AND_OPERATIONS_REFERENCE_ERROR_CODE);
});

test('ARCH-020-08 profile is immutable and descriptor is registered', () => {
  const descriptor = addReferenceImplementations(new ServiceCollection()).buildServiceProvider().getRequiredService('MultiTenantSecurityDataAndOperationsReferenceDescriptor');
  assert.ok(descriptor instanceof MultiTenantSecurityDataAndOperationsReferenceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.incidentScenarios.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new MultiTenantSecurityDataAndOperationsReferenceProfile({ referenceName: 'Multi-Tenant Security, Data, and Operations Reference', ...metadata }); }
