import { PlatformError } from '../../foundation/errors/platform-error.js';
import { KnowledgeIngestionCurationProfile } from '../contracts/knowledge-ingestion-curation-profile.js';
import { KnowledgeMemoryValidationResult } from '../contracts/knowledge-memory-validation-result.js';
import {
  KNOWLEDGE_ACQUISITION_MODELS,
  KNOWLEDGE_CHUNKING_STRATEGIES,
  KNOWLEDGE_CONTENT_CLASSES,
  KNOWLEDGE_INGESTION_APIS,
  KNOWLEDGE_INGESTION_BOUNDARIES,
  KNOWLEDGE_INGESTION_ERROR_CODE,
  KNOWLEDGE_INGESTION_EVENTS,
  KNOWLEDGE_INGESTION_OBJECTIVES,
  KNOWLEDGE_INGESTION_PIPELINE_STAGES,
  KNOWLEDGE_INGESTION_QUALITY_ATTRIBUTES,
  KNOWLEDGE_INGESTION_RULES,
  KNOWLEDGE_INTAKE_OUTCOMES,
  KNOWLEDGE_PROCESSING_FAILURES,
  KNOWLEDGE_PROCESSING_STATES,
  KNOWLEDGE_QUALITY_GATES,
  KNOWLEDGE_QUARANTINE_REASONS,
  KNOWLEDGE_SOURCE_CLASSES
} from '../ingestion-curation-constants.js';

const METADATA = Object.freeze({
  objectives: KNOWLEDGE_INGESTION_OBJECTIVES,
  sourceClasses: KNOWLEDGE_SOURCE_CLASSES,
  contentClasses: KNOWLEDGE_CONTENT_CLASSES,
  acquisitionModels: KNOWLEDGE_ACQUISITION_MODELS,
  intakeOutcomes: KNOWLEDGE_INTAKE_OUTCOMES,
  quarantineReasons: KNOWLEDGE_QUARANTINE_REASONS,
  pipelineStages: KNOWLEDGE_INGESTION_PIPELINE_STAGES,
  chunkingStrategies: KNOWLEDGE_CHUNKING_STRATEGIES,
  qualityGates: KNOWLEDGE_QUALITY_GATES,
  processingStates: KNOWLEDGE_PROCESSING_STATES,
  failureTypes: KNOWLEDGE_PROCESSING_FAILURES,
  ingestionApis: KNOWLEDGE_INGESTION_APIS,
  ingestionEvents: KNOWLEDGE_INGESTION_EVENTS,
  qualityAttributes: KNOWLEDGE_INGESTION_QUALITY_ATTRIBUTES,
  architecturalRules: KNOWLEDGE_INGESTION_RULES,
  architectureBoundaries: KNOWLEDGE_INGESTION_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  registeredSourcesRequired: 'ARCH-016-03 requires registeredSourcesRequired.',
  sourceWorkloadAuthenticated: 'ARCH-016-03 requires sourceWorkloadAuthenticated.',
  intakeScopeBound: 'ARCH-016-03 requires intakeScopeBound.',
  idempotentAcquisition: 'ARCH-016-03 requires idempotentAcquisition.',
  synchronizationReconciled: 'ARCH-016-03 requires synchronizationReconciled.',
  deletionGoverned: 'ARCH-016-03 requires deletionGoverned.',
  intakeValidated: 'ARCH-016-03 requires intakeValidated.',
  unsafeContentQuarantined: 'ARCH-016-03 requires unsafeContentQuarantined.',
  processingIsolated: 'ARCH-016-03 requires processingIsolated.',
  originalPreserved: 'ARCH-016-03 requires originalPreserved.',
  actualTypeDetected: 'ARCH-016-03 requires actualTypeDetected.',
  structurePreserved: 'ARCH-016-03 requires structurePreserved.',
  extractionDerived: 'ARCH-016-03 requires extractionDerived.',
  processingMethodsVersioned: 'ARCH-016-03 requires processingMethodsVersioned.',
  normalizationMeaningPreserved: 'ARCH-016-03 requires normalizationMeaningPreserved.',
  metadataProvenance: 'ARCH-016-03 requires metadataProvenance.',
  classificationPropagated: 'ARCH-016-03 requires classificationPropagated.',
  sensitiveDataGoverned: 'ARCH-016-03 requires sensitiveDataGoverned.',
  chunkBoundariesPreserved: 'ARCH-016-03 requires chunkBoundariesPreserved.',
  contentAwareChunking: 'ARCH-016-03 requires contentAwareChunking.',
  aiEnrichmentDerived: 'ARCH-016-03 requires aiEnrichmentDerived.',
  curatorAuthorized: 'ARCH-016-03 requires curatorAuthorized.',
  separationOfDuties: 'ARCH-016-03 requires separationOfDuties.',
  qualityGatesRequired: 'ARCH-016-03 requires qualityGatesRequired.',
  publicationHandoffOnly: 'ARCH-016-03 requires publicationHandoffOnly.',
  processingProvenance: 'ARCH-016-03 requires processingProvenance.',
  reprocessingControlled: 'ARCH-016-03 requires reprocessingControlled.',
  retryBounded: 'ARCH-016-03 requires retryBounded.',
  poisonContentIsolated: 'ARCH-016-03 requires poisonContentIsolated.',
  tenantPropertyIsolation: 'ARCH-016-03 requires tenantPropertyIsolation.',
  temporaryDataDeleted: 'ARCH-016-03 requires temporaryDataDeleted.',
  providerGoverned: 'ARCH-016-03 requires providerGoverned.',
  vendorNeutral: 'ARCH-016-03 requires vendorNeutral.',
  technologyIndependent: 'ARCH-016-03 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  ingestionActivatesKnowledge: 'ARCH-016-03 prohibits ingestionActivatesKnowledge.',
  uploadGrantsPublication: 'ARCH-016-03 prohibits uploadGrantsPublication.',
  duplicateMergesScopes: 'ARCH-016-03 prohibits duplicateMergesScopes.',
  failedSyncMeansDeletion: 'ARCH-016-03 prohibits failedSyncMeansDeletion.',
  extensionDefinesType: 'ARCH-016-03 prohibits extensionDefinesType.',
  extractionIsSourceTruth: 'ARCH-016-03 prohibits extractionIsSourceTruth.',
  normalizationChangesMeaning: 'ARCH-016-03 prohibits normalizationChangesMeaning.',
  classificationBecomesLessRestrictive: 'ARCH-016-03 prohibits classificationBecomesLessRestrictive.',
  chunksCrossBoundaries: 'ARCH-016-03 prohibits chunksCrossBoundaries.',
  oneChunkStrategy: 'ARCH-016-03 prohibits oneChunkStrategy.',
  aiChangesAuthority: 'ARCH-016-03 prohibits aiChangesAuthority.',
  aiPublishesItself: 'ARCH-016-03 prohibits aiPublishesItself.',
  curatorSelfApprovesCritical: 'ARCH-016-03 prohibits curatorSelfApprovesCritical.',
  readinessMeansActivation: 'ARCH-016-03 prohibits readinessMeansActivation.',
  reprocessingReplacesActive: 'ARCH-016-03 prohibits reprocessingReplacesActive.',
  retriesUnsafeContent: 'ARCH-016-03 prohibits retriesUnsafeContent.',
  externalProviderDefinesMeaning: 'ARCH-016-03 prohibits externalProviderDefinesMeaning.',
  directDatabaseAccess: 'ARCH-016-03 prohibits directDatabaseAccess.',
  selectsProcessingProvider: 'ARCH-016-03 prohibits selectsProcessingProvider.'
});

export class KnowledgeIngestionCurationDescriptor {
  objectives() { return values(METADATA.objectives); }
  sourceClasses() { return values(METADATA.sourceClasses); }
  contentClasses() { return values(METADATA.contentClasses); }
  acquisitionModels() { return values(METADATA.acquisitionModels); }
  intakeOutcomes() { return values(METADATA.intakeOutcomes); }
  quarantineReasons() { return values(METADATA.quarantineReasons); }
  pipelineStages() { return values(METADATA.pipelineStages); }
  chunkingStrategies() { return values(METADATA.chunkingStrategies); }
  qualityGates() { return values(METADATA.qualityGates); }
  processingStates() { return values(METADATA.processingStates); }
  failureTypes() { return values(METADATA.failureTypes); }
  ingestionApis() { return values(METADATA.ingestionApis); }
  ingestionEvents() { return values(METADATA.ingestionEvents); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof KnowledgeIngestionCurationProfile
      ? input
      : new KnowledgeIngestionCurationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Knowledge ingestion and curation profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) {
        if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
      }
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) {
      if (profile[key] !== true) errors.push(message);
    }
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) {
      if (profile[key] === true) errors.push(message);
    }
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Knowledge Ingestion and Curation must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        KNOWLEDGE_INGESTION_ERROR_CODE,
        'Knowledge Ingestion and Curation violates ARCH-016-03.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function result(errors) {
  return new KnowledgeMemoryValidationResult({ isValid: errors.length === 0, errors });
}
