import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  BACKUP_CAPABILITIES,
  DATA_LIFECYCLE_STAGES,
  DEPLOYMENT_MODEL_ERROR_CODES,
  FUTURE_STORAGE_CAPABILITIES,
  STORAGE_CATEGORY_NAMES,
  STORAGE_CONSISTENCY_MODELS,
  STORAGE_GOVERNANCE_CONTROLS,
  STORAGE_ISOLATION_AREAS,
  STORAGE_OBJECTIVES,
  STORAGE_PROTECTION_CAPABILITIES,
  DataLifecyclePolicy,
  StorageBackupPolicy,
  StorageCategory,
  StorageOwnershipRecord,
  StorageTopologyDescriptor,
  addDeploymentModel
} from '../../src/deployment-model/index.js';

test('storage topology exposes objectives, architecture flow, and lifecycle stages', () => {
  const descriptor = new StorageTopologyDescriptor();

  assert.ok(descriptor.objectives().includes(STORAGE_OBJECTIVES.DATA_DURABILITY));
  assert.ok(descriptor.objectives().includes(STORAGE_OBJECTIVES.SERVICE_AUTONOMY));
  assert.deepEqual(descriptor.storageFlow(), [
    STORAGE_CATEGORY_NAMES.TRANSACTIONAL,
    STORAGE_CATEGORY_NAMES.SEARCH,
    STORAGE_CATEGORY_NAMES.VECTOR,
    STORAGE_CATEGORY_NAMES.OBJECT,
    STORAGE_CATEGORY_NAMES.ANALYTICAL,
    STORAGE_CATEGORY_NAMES.BACKUP_ARCHIVE
  ]);
  assert.ok(descriptor.lifecycleStages().includes(DATA_LIFECYCLE_STAGES.ARCHIVED));
});

test('storage topology registers documented storage categories and consistency models', () => {
  const descriptor = new StorageTopologyDescriptor();

  assert.equal(descriptor.getCategory(STORAGE_CATEGORY_NAMES.TRANSACTIONAL).sourceOfTruth, true);
  assert.equal(descriptor.getCategory(STORAGE_CATEGORY_NAMES.TRANSACTIONAL).consistencyModel, STORAGE_CONSISTENCY_MODELS.STRONG);
  assert.equal(descriptor.getCategory(STORAGE_CATEGORY_NAMES.SEARCH).derived, true);
  assert.equal(descriptor.getCategory(STORAGE_CATEGORY_NAMES.VECTOR).derived, true);
  assert.equal(descriptor.getCategory(STORAGE_CATEGORY_NAMES.ANALYTICAL).consistencyModel, STORAGE_CONSISTENCY_MODELS.EVENTUAL);
});

test('storage topology preserves documented data ownership examples', () => {
  const descriptor = new StorageTopologyDescriptor();

  assert.deepEqual(descriptor.listOwnership().map(record => [record.businessData, record.owningService]), [
    ['Reservation', 'Reservation Service'],
    ['Guest', 'Guest Service'],
    ['Property', 'Property Service'],
    ['Payment', 'Payment Service'],
    ['Identity', 'Identity Service'],
    ['Knowledge', 'Knowledge Service']
  ]);
});

test('storage topology rejects invalid categories and derived sources of truth', () => {
  assert.throws(
    () =>
      new StorageTopologyDescriptor({
        categories: [
          new StorageCategory({
            categoryName: 'Database Product',
            primaryResponsibility: '',
            responsibilities: [],
            consistencyModel: 'vendor-specific',
            derived: true,
            sourceOfTruth: true,
            independentlyScalable: false,
            technologySpecific: true
          })
        ],
        ownership: []
      }),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.STORAGE_CATEGORY_INVALID &&
      error.details.errors.some(message => message.includes('Unsupported storage category')) &&
      error.details.errors.some(message => message.includes('operational purpose')) &&
      error.details.errors.some(message => message.includes('source of truth')) &&
      error.details.errors.some(message => message.includes('technology neutral'))
  );
});

test('storage topology validates service-owned authoritative data', () => {
  const descriptor = new StorageTopologyDescriptor();
  const valid = descriptor.validateOwnership(
    new StorageOwnershipRecord({
      businessData: 'Reservation',
      owningService: 'Reservation Service',
      storageCategory: STORAGE_CATEGORY_NAMES.TRANSACTIONAL
    })
  );
  const invalid = descriptor.validateOwnership({
    businessData: '',
    owningService: '',
    storageCategory: 'Shared Database',
    onlyOwnerMayModify: false,
    directForeignStorageManipulation: true,
    sharedOperationalDatabase: true,
    ownershipByStorageLocation: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /business data/);
  assert.match(invalid.errors.join('\n'), /owning service/);
  assert.match(invalid.errors.join('\n'), /private storage/);
  assert.match(invalid.errors.join('\n'), /shared operational databases/);
});

test('storage topology validates governed data lifecycle', () => {
  const descriptor = new StorageTopologyDescriptor();
  const valid = descriptor.validateLifecycle(
    new DataLifecyclePolicy({
      dataName: 'Reservation',
      stages: Object.values(DATA_LIFECYCLE_STAGES)
    })
  );
  const invalid = descriptor.validateLifecycle({
    dataName: '',
    stages: [DATA_LIFECYCLE_STAGES.CREATED, DATA_LIFECYCLE_STAGES.DELETED_WHERE_PERMITTED],
    deletionGoverned: false,
    regulatoryRequirementsMet: false,
    historyPreserved: false,
    technologySpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /business information/);
  assert.match(invalid.errors.join('\n'), /5 stages/);
  assert.match(invalid.errors.join('\n'), /regulatory requirements/);
  assert.match(invalid.errors.join('\n'), /historical business information/);
});

test('storage topology validates backup and recovery policy', () => {
  const descriptor = new StorageTopologyDescriptor();
  const valid = descriptor.validateBackup(
    new StorageBackupPolicy({
      storageCategory: STORAGE_CATEGORY_NAMES.BACKUP_ARCHIVE,
      capabilities: Object.values(BACKUP_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateBackup({
    storageCategory: 'Unknown Storage',
    capabilities: [BACKUP_CAPABILITIES.FULL_BACKUPS],
    recoveryValidated: false,
    backupIsOperationalStore: true,
    supportsDisasterRecovery: false,
    retentionGoverned: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /unknown storage category/);
  assert.match(invalid.errors.join('\n'), /point-in-time-recovery/);
  assert.match(invalid.errors.join('\n'), /not operational data stores/);
  assert.match(invalid.errors.join('\n'), /disaster recovery/);
});

test('storage topology validates isolation, protection, governance, and cache rules', () => {
  const descriptor = new StorageTopologyDescriptor();
  const capabilities = descriptor.validateCapabilities({
    isolation: Object.values(STORAGE_ISOLATION_AREAS),
    protection: Object.values(STORAGE_PROTECTION_CAPABILITIES),
    governance: Object.values(STORAGE_GOVERNANCE_CONTROLS)
  });
  const cache = descriptor.validateCache();
  const invalid = descriptor.validateCache({
    reconstructable: false,
    permanentStorage: true,
    authoritative: true
  });

  assert.equal(capabilities.isValid, true);
  assert.equal(cache.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /reconstructable/);
  assert.match(invalid.errors.join('\n'), /permanent storage/);
  assert.match(invalid.errors.join('\n'), /authoritative business data/);
});

test('storage topology reports future capabilities without implementing them', () => {
  const descriptor = new StorageTopologyDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_STORAGE_CAPABILITIES.MULTI_REGION_REPLICATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_STORAGE_CAPABILITIES.DISTRIBUTED_VECTOR_INDEXING));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_STORAGE_CAPABILITIES.AUTONOMOUS_STORAGE_OPTIMIZATION));
});

test('storage topology assertion rejects incomplete topology metadata', () => {
  assert.throws(
    () => new StorageTopologyDescriptor({ categories: [], ownership: [] }).assertTopology(),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.STORAGE_TOPOLOGY_INVALID &&
      error.details.errors.some(message => message.includes('storage categories')) &&
      error.details.errors.some(message => message.includes('data ownership examples'))
  );
});

test('storage topology descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeploymentModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('StorageTopologyDescriptor');

  assert.ok(descriptor instanceof StorageTopologyDescriptor);
  assert.equal(descriptor.assertTopology().isValid, true);
});
