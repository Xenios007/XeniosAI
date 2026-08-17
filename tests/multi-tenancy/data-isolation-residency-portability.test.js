import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { DATA_FAIL_CLOSED_CONDITIONS, DATA_ISOLATION_RESIDENCY_PORTABILITY_ERROR_CODE, DATA_OWNERSHIP_SCOPES, ERASURE_PROPAGATION_TARGETS, MIGRATION_ARCHITECTURE_STEPS, DataIsolationResidencyPortabilityDescriptor, DataIsolationResidencyPortabilityProfile, addMultiTenancy } from '../../src/multi-tenancy/index.js';

const METADATA_KEYS = ['dataIsolationPrinciples', 'dataScope', 'dataOwnershipScopes', 'tenantOwnershipAttributeRules', 'sharedRelationalStorageControls', 'partitionedDedicatedStorageRequirements', 'objectFileStorageControls', 'cacheIsolationPreventions', 'searchIndexSafeguards', 'knowledgeMemoryPreventions', 'eventsMessagingControls', 'observabilityDataControls', 'encryptionKeyPatterns', 'residencyPolicyFields', 'sovereigntyConstraints', 'placementEnforcementChecks', 'dataTransferRequirements', 'retentionMetadataFields', 'legalHoldControls', 'erasurePropagationTargets', 'backupIsolationDesignElements', 'tenantRestoreSteps', 'portabilityPackageContents', 'exportArchitectureControls', 'migrationArchitectureSteps', 'dataLineageQuestions', 'dataOperationalControls', 'dataTestingAssuranceRequirements', 'dataFailClosedConditions', 'contaminationResponseActions', 'architecturalRules'];

test('ARCH-018-05 exposes data scope, ownership, and storage metadata', () => { const descriptor = new DataIsolationResidencyPortabilityDescriptor(); assert.ok(descriptor.dataOwnershipScopes().includes(DATA_OWNERSHIP_SCOPES.DEIDENTIFIED)); assert.ok(descriptor.dataScope().includes('graph-relationships-and-embeddings')); assert.ok(descriptor.sharedRelationalStorageControls().includes('multi-tenant-negative-tests')); assert.ok(descriptor.objectFileStorageControls().includes('non-guessable-references')); });

test('ARCH-018-05 exposes residency, sovereignty, and placement metadata', () => { const descriptor = new DataIsolationResidencyPortabilityDescriptor(); assert.ok(descriptor.residencyPolicyFields().includes('approved-processors-and-sub-processors')); assert.ok(descriptor.sovereigntyConstraints().includes('key-custody')); assert.ok(descriptor.placementEnforcementChecks().includes('current-migration-state')); assert.ok(descriptor.dataFailClosedConditions().includes(DATA_FAIL_CLOSED_CONDITIONS.RESIDENCY)); });

test('ARCH-018-05 exposes erasure, portability, and migration metadata', () => { const descriptor = new DataIsolationResidencyPortabilityDescriptor(); assert.ok(descriptor.erasurePropagationTargets().includes(ERASURE_PROPAGATION_TARGETS.INTEGRATION_QUEUES)); assert.ok(descriptor.portabilityPackageContents().includes('manifest-checksums-versions-and-exclusions')); assert.ok(descriptor.migrationArchitectureSteps().includes(MIGRATION_ARCHITECTURE_STEPS.RECONCILE)); assert.ok(descriptor.contaminationResponseActions().includes('immediate-containment')); });

test('ARCH-018-05 validates profiles and rejects isolation shortcuts', () => {
  const descriptor = new DataIsolationResidencyPortabilityDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ tenantOwnershipExplicitForEveryAsset: false, crossTenantTransferRequiresExplicitContract: false, objectUrlProvesAuthorization: true, indefiniteRetentionAllowed: true, silenceEvidenceOfDeletion: true, crossTenantTransferInferredFromRelationship: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /explicit for every tenant-scoped data asset/);
  assert.match(validation.errors.join('\n'), /explicit exchange contract/);
  assert.match(validation.errors.join('\n'), /object URL or storage path/);
  assert.match(validation.errors.join('\n'), /indefinite retention/);
  assert.match(validation.errors.join('\n'), /silence as evidence of deletion/);
  assert.match(validation.errors.join('\n'), /organizational relationship/);
});

test('ARCH-018-05 detects incomplete data isolation, residency, and portability metadata', () => { class IncompleteDescriptor extends DataIsolationResidencyPortabilityDescriptor { dataScope() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === DATA_ISOLATION_RESIDENCY_PORTABILITY_ERROR_CODE); });

test('ARCH-018-05 profile is immutable and descriptor is registered', () => {
  const descriptor = addMultiTenancy(new ServiceCollection()).buildServiceProvider().getRequiredService('DataIsolationResidencyPortabilityDescriptor');
  assert.ok(descriptor instanceof DataIsolationResidencyPortabilityDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.dataScope.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new DataIsolationResidencyPortabilityProfile({ profileName: 'Data Isolation, Residency, and Portability', ...metadata }); }
