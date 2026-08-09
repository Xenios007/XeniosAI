import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  STORAGE_PROTECTION_CAPABILITIES
} from '../constants.js';
import { DataLifecyclePolicy } from '../contracts/data-lifecycle-policy.js';
import { StorageBackupPolicy } from '../contracts/storage-backup-policy.js';
import { StorageCategory } from '../contracts/storage-category.js';
import { StorageOwnershipRecord } from '../contracts/storage-ownership-record.js';
import { StorageValidationResult } from '../contracts/storage-validation-result.js';

const STORAGE_FLOW = Object.freeze([
  STORAGE_CATEGORY_NAMES.TRANSACTIONAL,
  STORAGE_CATEGORY_NAMES.SEARCH,
  STORAGE_CATEGORY_NAMES.VECTOR,
  STORAGE_CATEGORY_NAMES.OBJECT,
  STORAGE_CATEGORY_NAMES.ANALYTICAL,
  STORAGE_CATEGORY_NAMES.BACKUP_ARCHIVE
]);

const DEFAULT_CATEGORIES = Object.freeze([
  category(STORAGE_CATEGORY_NAMES.TRANSACTIONAL, 'Operational business data', ['Reservations', 'Guests', 'Properties', 'Payments', 'Identity', 'Configuration'], STORAGE_CONSISTENCY_MODELS.STRONG, { authoritative: true, sourceOfTruth: true }),
  category(STORAGE_CATEGORY_NAMES.SEARCH, 'Full-text indexing and retrieval', ['Document indexing', 'Full-text search', 'Keyword lookup', 'Filtering', 'Ranking'], STORAGE_CONSISTENCY_MODELS.EVENTUAL, { derived: true }),
  category(STORAGE_CATEGORY_NAMES.VECTOR, 'Semantic search and AI embeddings', ['Embedding storage', 'Semantic similarity search', 'Knowledge retrieval', 'Context augmentation', 'AI memory retrieval'], STORAGE_CONSISTENCY_MODELS.EVENTUAL, { derived: true }),
  category(STORAGE_CATEGORY_NAMES.OBJECT, 'Documents, images, media, and binary assets', ['Images', 'Documents', 'PDFs', 'Videos', 'Audio', 'AI artifacts', 'Backups'], STORAGE_CONSISTENCY_MODELS.EVENTUAL),
  category(STORAGE_CATEGORY_NAMES.ANALYTICAL, 'Reporting and analytics', ['Historical reporting', 'Executive dashboards', 'Trend analysis', 'Aggregated metrics', 'Forecasting'], STORAGE_CONSISTENCY_MODELS.EVENTUAL, { derived: true }),
  category(STORAGE_CATEGORY_NAMES.BACKUP_ARCHIVE, 'Long-term protection and recovery', ['Periodic backups', 'Point-in-time recovery', 'Long-term archival', 'Regulatory retention', 'Disaster recovery support'], STORAGE_CONSISTENCY_MODELS.EVENTUAL)
]);

const DEFAULT_OWNERSHIP = Object.freeze([
  ownership('Reservation', 'Reservation Service'),
  ownership('Guest', 'Guest Service'),
  ownership('Property', 'Property Service'),
  ownership('Payment', 'Payment Service'),
  ownership('Identity', 'Identity Service'),
  ownership('Knowledge', 'Knowledge Service')
]);

export class StorageTopologyDescriptor {
  constructor({ categories = DEFAULT_CATEGORIES, ownership = DEFAULT_OWNERSHIP } = {}) {
    this.categories = new Map();
    this.ownership = new Map();

    for (const storageCategory of categories) {
      this.registerCategory(storageCategory);
    }

    for (const ownershipRecord of ownership) {
      this.registerOwnership(ownershipRecord);
    }
  }

  objectives() {
    return Object.freeze(Object.values(STORAGE_OBJECTIVES));
  }

  storageFlow() {
    return STORAGE_FLOW;
  }

  lifecycleStages() {
    return Object.freeze(Object.values(DATA_LIFECYCLE_STAGES));
  }

  isolationAreas() {
    return Object.freeze(Object.values(STORAGE_ISOLATION_AREAS));
  }

  protectionCapabilities() {
    return Object.freeze(Object.values(STORAGE_PROTECTION_CAPABILITIES));
  }

  backupCapabilities() {
    return Object.freeze(Object.values(BACKUP_CAPABILITIES));
  }

  governanceControls() {
    return Object.freeze(Object.values(STORAGE_GOVERNANCE_CONTROLS));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_STORAGE_CAPABILITIES));
  }

  listCategories() {
    return Object.freeze([...this.categories.values()]);
  }

  listOwnership() {
    return Object.freeze([...this.ownership.values()]);
  }

  getCategory(categoryName) {
    return this.categories.get(categoryName);
  }

  registerCategory(categoryInput) {
    const storageCategory = categoryInput instanceof StorageCategory ? categoryInput : new StorageCategory(categoryInput);
    const result = this.validateCategory(storageCategory);

    if (!result.isValid) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.STORAGE_CATEGORY_INVALID,
        'Storage category violates ARCH-007-05.',
        { errors: result.errors }
      );
    }

    this.categories.set(storageCategory.categoryName, storageCategory);
    return this;
  }

  registerOwnership(ownershipInput) {
    const ownershipRecord = ownershipInput instanceof StorageOwnershipRecord
      ? ownershipInput
      : new StorageOwnershipRecord(ownershipInput);
    const result = this.validateOwnership(ownershipRecord);

    if (!result.isValid) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.STORAGE_OWNERSHIP_INVALID,
        'Storage ownership violates ARCH-007-05.',
        { errors: result.errors }
      );
    }

    this.ownership.set(ownershipRecord.businessData, ownershipRecord);
    return this;
  }

  validateCategory(categoryInput) {
    const storageCategory = categoryInput instanceof StorageCategory ? categoryInput : new StorageCategory(categoryInput);
    const errors = [];

    if (!Object.values(STORAGE_CATEGORY_NAMES).includes(storageCategory.categoryName)) errors.push(`Unsupported storage category: ${storageCategory.categoryName}.`);
    if (!storageCategory.primaryResponsibility) errors.push('Storage category must define a distinct operational purpose.');
    if (storageCategory.responsibilities.length === 0) errors.push('Storage category must define responsibilities.');
    if (!Object.values(STORAGE_CONSISTENCY_MODELS).includes(storageCategory.consistencyModel)) errors.push(`Unsupported storage consistency model: ${storageCategory.consistencyModel}.`);
    if (storageCategory.independentlyScalable !== true) errors.push('Storage categories should scale independently according to workload.');
    if (storageCategory.technologySpecific === true) errors.push('Storage Topology must remain technology neutral.');
    if (storageCategory.derived === true && storageCategory.sourceOfTruth === true) errors.push('Derived storage must never become the source of truth.');
    if (storageCategory.categoryName === STORAGE_CATEGORY_NAMES.TRANSACTIONAL && storageCategory.sourceOfTruth !== true) {
      errors.push('Transactional Storage is the system of record for business operations.');
    }

    return validation(errors);
  }

  validateOwnership(ownershipInput) {
    const ownershipRecord = ownershipInput instanceof StorageOwnershipRecord
      ? ownershipInput
      : new StorageOwnershipRecord(ownershipInput);
    const errors = [];

    if (!ownershipRecord.businessData) errors.push('Storage ownership must identify business data.');
    if (!ownershipRecord.owningService) errors.push('Storage ownership must identify the owning service.');
    if (!this.categories.has(ownershipRecord.storageCategory)) errors.push(`Storage ownership references unknown category: ${ownershipRecord.storageCategory}.`);
    if (ownershipRecord.onlyOwnerMayModify !== true) errors.push('Only the owning service may modify its authoritative data.');
    if (ownershipRecord.directForeignStorageManipulation === true) errors.push('No service should directly manipulate another service private storage.');
    if (ownershipRecord.sharedOperationalDatabase === true) errors.push('Storage Topology must avoid shared operational databases.');
    if (ownershipRecord.ownershipByStorageLocation === true) errors.push('Ownership is determined by business responsibility rather than storage location.');

    return validation(errors);
  }

  validateLifecycle(policyInput) {
    const policy = policyInput instanceof DataLifecyclePolicy ? policyInput : new DataLifecyclePolicy(policyInput);
    const errors = [];

    if (!policy.dataName) errors.push('Data lifecycle policy must identify business information.');
    if (policy.stages.length !== this.lifecycleStages().length) errors.push(`Data lifecycle must include ${this.lifecycleStages().length} stages.`);
    this.lifecycleStages().forEach((stage, index) => {
      if (policy.stages[index] !== stage) errors.push(`Data lifecycle step ${index + 1} must be ${stage}; received ${policy.stages[index] ?? 'missing'}.`);
    });
    if (policy.deletionGoverned !== true) errors.push('Deletion policies must comply with business and regulatory requirements.');
    if (policy.regulatoryRequirementsMet !== true) errors.push('Data lifecycle must satisfy regulatory requirements.');
    if (policy.historyPreserved !== true) errors.push('Data lifecycle must preserve historical business information.');
    if (policy.technologySpecific === true) errors.push('Data lifecycle must remain independent of storage products.');

    return validation(errors);
  }

  validateBackup(policyInput) {
    const policy = policyInput instanceof StorageBackupPolicy ? policyInput : new StorageBackupPolicy(policyInput);
    const errors = [];

    if (!this.categories.has(policy.storageCategory)) errors.push(`Backup policy references unknown storage category: ${policy.storageCategory}.`);
    appendMissing(errors, policy.capabilities, this.backupCapabilities(), 'Backup architecture should support');
    if (policy.recoveryValidated !== true) errors.push('Recovery capability is as important as backup creation.');
    if (policy.backupIsOperationalStore === true) errors.push('Backup systems are not operational data stores.');
    if (policy.supportsDisasterRecovery !== true) errors.push('Backup architecture must support disaster recovery.');
    if (policy.retentionGoverned !== true) errors.push('Backup retention policies must be governed.');

    return validation(errors);
  }

  validateCapabilities({ isolation = [], protection = [], governance = [] } = {}) {
    const errors = [];

    appendMissing(errors, isolation, this.isolationAreas(), 'Storage isolation must include');
    appendMissing(errors, protection, this.protectionCapabilities(), 'Storage systems should support');
    appendMissing(errors, governance, this.governanceControls(), 'Storage governance must include');

    return validation(errors);
  }

  validateCache({ reconstructable = true, permanentStorage = false, authoritative = false } = {}) {
    const errors = [];

    if (reconstructable !== true) errors.push('Caches should always be reconstructable from authoritative sources.');
    if (permanentStorage === true) errors.push('Caching is an optimization layer rather than permanent storage.');
    if (authoritative === true) errors.push('Caches must not become authoritative business data.');

    return validation(errors);
  }

  assertTopology() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Storage Topology must include all documented objectives.');
    if (this.storageFlow().length !== 6) errors.push('Storage Topology must include the documented storage architecture.');
    if (this.categories.size !== 6) errors.push('Storage Topology must include all documented storage categories.');
    if (this.ownership.size !== 6) errors.push('Storage Topology must include documented data ownership examples.');

    if (errors.length > 0) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.STORAGE_TOPOLOGY_INVALID,
        'Storage Topology violates ARCH-007-05.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function category(categoryName, primaryResponsibility, responsibilities, consistencyModel, options = {}) {
  return new StorageCategory({
    categoryName,
    primaryResponsibility,
    responsibilities,
    consistencyModel,
    ...options
  });
}

function ownership(businessData, owningService) {
  return new StorageOwnershipRecord({
    businessData,
    owningService,
    storageCategory: STORAGE_CATEGORY_NAMES.TRANSACTIONAL
  });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new StorageValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
