import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../../api-sdk/contracts/api-sdk-validation-result.js';
import { DataIsolationResidencyPortabilityProfile } from '../contracts/data-isolation-residency-portability-profile.js';
import * as constants from '../data-isolation-residency-portability-constants.js';

const METADATA = Object.freeze({
  dataIsolationPrinciples: constants.DATA_ISOLATION_PRINCIPLES, dataScope: constants.DATA_SCOPE,
  dataOwnershipScopes: constants.DATA_OWNERSHIP_SCOPES, tenantOwnershipAttributeRules: constants.TENANT_OWNERSHIP_ATTRIBUTE_RULES,
  sharedRelationalStorageControls: constants.SHARED_RELATIONAL_STORAGE_CONTROLS,
  partitionedDedicatedStorageRequirements: constants.PARTITIONED_DEDICATED_STORAGE_REQUIREMENTS,
  objectFileStorageControls: constants.OBJECT_FILE_STORAGE_CONTROLS, cacheIsolationPreventions: constants.CACHE_ISOLATION_PREVENTIONS,
  searchIndexSafeguards: constants.SEARCH_INDEX_SAFEGUARDS, knowledgeMemoryPreventions: constants.KNOWLEDGE_MEMORY_PREVENTIONS,
  eventsMessagingControls: constants.EVENTS_MESSAGING_CONTROLS, observabilityDataControls: constants.OBSERVABILITY_DATA_CONTROLS,
  encryptionKeyPatterns: constants.ENCRYPTION_KEY_PATTERNS, residencyPolicyFields: constants.RESIDENCY_POLICY_FIELDS,
  sovereigntyConstraints: constants.SOVEREIGNTY_CONSTRAINTS, placementEnforcementChecks: constants.PLACEMENT_ENFORCEMENT_CHECKS,
  dataTransferRequirements: constants.DATA_TRANSFER_REQUIREMENTS, retentionMetadataFields: constants.RETENTION_METADATA_FIELDS,
  legalHoldControls: constants.LEGAL_HOLD_CONTROLS, erasurePropagationTargets: constants.ERASURE_PROPAGATION_TARGETS,
  backupIsolationDesignElements: constants.BACKUP_ISOLATION_DESIGN_ELEMENTS, tenantRestoreSteps: constants.TENANT_RESTORE_STEPS,
  portabilityPackageContents: constants.PORTABILITY_PACKAGE_CONTENTS, exportArchitectureControls: constants.EXPORT_ARCHITECTURE_CONTROLS,
  migrationArchitectureSteps: constants.MIGRATION_ARCHITECTURE_STEPS, dataLineageQuestions: constants.DATA_LINEAGE_QUESTIONS,
  dataOperationalControls: constants.DATA_OPERATIONAL_CONTROLS, dataTestingAssuranceRequirements: constants.DATA_TESTING_ASSURANCE_REQUIREMENTS,
  dataFailClosedConditions: constants.DATA_FAIL_CLOSED_CONDITIONS, contaminationResponseActions: constants.CONTAMINATION_RESPONSE_ACTIONS,
  architecturalRules: constants.DATA_ISOLATION_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  tenantOwnershipExplicitForEveryAsset: 'ARCH-018-05 requires tenant ownership to be explicit for every tenant-scoped data asset.',
  everyProviderEnforcesOwnership: 'ARCH-018-05 requires every provider to enforce ownership at its trust boundary.',
  isolationIncludesDerivedData: 'ARCH-018-05 requires isolation to include primary and derived data.',
  sharedStorageRequiresTenantAwareSafeguards: 'ARCH-018-05 requires shared storage to use tenant-aware keys, queries, constraints, and tests.',
  placementAndOwnershipSeparateConcepts: 'ARCH-018-05 requires placement and ownership to be treated as separate concepts.',
  residencyAppliesBeyondPrimaryStores: 'ARCH-018-05 requires residency to apply to replicas, backups, indexes, telemetry, and processors.',
  encryptionSupplementsAuthorization: 'ARCH-018-05 requires encryption to support isolation without replacing authorization.',
  minimizationAppliesToCopiesAndContext: 'ARCH-018-05 requires data minimization to apply to copies, exports, logs, and AI context.',
  retentionAndHoldPolicyDrivenTraceable: 'ARCH-018-05 requires retention and legal hold to be policy driven and traceable.',
  erasurePropagatesToDerivatives: 'ARCH-018-05 requires erasure to propagate to eligible derivatives.',
  portabilityUsesGovernedManifests: 'ARCH-018-05 requires portability to use governed manifests and documented formats.',
  restoreAndMigrationPreserveBoundaries: 'ARCH-018-05 requires restore and migration to preserve tenant boundaries and business time.',
  backupsRetainTenantAttributes: 'ARCH-018-05 requires backups to retain tenant ownership, classification, encryption, residency, retention, and access restrictions.',
  lineageSupportsExitAndAudit: 'ARCH-018-05 requires lineage to support tenant exit, incident response, audit, and data-subject obligations.',
  exportJobsHaveQuotas: 'ARCH-018-05 requires export jobs to have quotas and avoid degrading other tenants’ service.',
  crossTenantTransferRequiresExplicitContract: 'ARCH-018-05 requires cross-tenant transfer to use an explicit exchange contract.'
});

const REQUIRED_FALSE = Object.freeze({
  objectUrlProvesAuthorization: 'ARCH-018-05 prohibits an object URL or storage path from being treated as proof of authorization.',
  physicalIsolationEstablishesAuthorization: 'ARCH-018-05 prohibits physical separation alone from establishing actor authorization.',
  keySeparationCompensatesMissingAuthorization: 'ARCH-018-05 prohibits key separation from compensating for a missing authorization check, unsafe query, or mixed AI context.',
  indefiniteRetentionAllowed: 'ARCH-018-05 prohibits indefinite retention unless explicitly justified and approved.',
  silenceEvidenceOfDeletion: 'ARCH-018-05 prohibits treating silence as evidence of deletion.',
  dataSilentlyReassigned: 'ARCH-018-05 prohibits silently reassigning data to make an inconsistency disappear.',
  deidentificationByNameRemovalAlone: 'ARCH-018-05 prohibits treating display-name removal alone as sufficient de-identification.',
  crossTenantTransferInferredFromRelationship: 'ARCH-018-05 prohibits inferring cross-tenant transfer from an organizational relationship.'
});

export class DataIsolationResidencyPortabilityDescriptor {
  dataIsolationPrinciples() { return values(METADATA.dataIsolationPrinciples); } dataScope() { return values(METADATA.dataScope); }
  dataOwnershipScopes() { return values(METADATA.dataOwnershipScopes); } tenantOwnershipAttributeRules() { return values(METADATA.tenantOwnershipAttributeRules); }
  sharedRelationalStorageControls() { return values(METADATA.sharedRelationalStorageControls); }
  partitionedDedicatedStorageRequirements() { return values(METADATA.partitionedDedicatedStorageRequirements); }
  objectFileStorageControls() { return values(METADATA.objectFileStorageControls); } cacheIsolationPreventions() { return values(METADATA.cacheIsolationPreventions); }
  searchIndexSafeguards() { return values(METADATA.searchIndexSafeguards); } knowledgeMemoryPreventions() { return values(METADATA.knowledgeMemoryPreventions); }
  eventsMessagingControls() { return values(METADATA.eventsMessagingControls); } observabilityDataControls() { return values(METADATA.observabilityDataControls); }
  encryptionKeyPatterns() { return values(METADATA.encryptionKeyPatterns); } residencyPolicyFields() { return values(METADATA.residencyPolicyFields); }
  sovereigntyConstraints() { return values(METADATA.sovereigntyConstraints); } placementEnforcementChecks() { return values(METADATA.placementEnforcementChecks); }
  dataTransferRequirements() { return values(METADATA.dataTransferRequirements); } retentionMetadataFields() { return values(METADATA.retentionMetadataFields); }
  legalHoldControls() { return values(METADATA.legalHoldControls); } erasurePropagationTargets() { return values(METADATA.erasurePropagationTargets); }
  backupIsolationDesignElements() { return values(METADATA.backupIsolationDesignElements); } tenantRestoreSteps() { return values(METADATA.tenantRestoreSteps); }
  portabilityPackageContents() { return values(METADATA.portabilityPackageContents); } exportArchitectureControls() { return values(METADATA.exportArchitectureControls); }
  migrationArchitectureSteps() { return values(METADATA.migrationArchitectureSteps); } dataLineageQuestions() { return values(METADATA.dataLineageQuestions); }
  dataOperationalControls() { return values(METADATA.dataOperationalControls); } dataTestingAssuranceRequirements() { return values(METADATA.dataTestingAssuranceRequirements); }
  dataFailClosedConditions() { return values(METADATA.dataFailClosedConditions); } contaminationResponseActions() { return values(METADATA.contaminationResponseActions); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof DataIsolationResidencyPortabilityProfile ? input : new DataIsolationResidencyPortabilityProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Data isolation, residency, and portability profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Data Isolation, Residency, and Portability must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.DATA_ISOLATION_RESIDENCY_PORTABILITY_ERROR_CODE, 'Data Isolation, Residency, and Portability violates ARCH-018-05.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
