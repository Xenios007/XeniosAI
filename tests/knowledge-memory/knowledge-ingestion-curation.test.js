import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  KNOWLEDGE_CHUNKING_STRATEGIES,
  KNOWLEDGE_INGESTION_ERROR_CODE,
  KNOWLEDGE_INGESTION_PIPELINE_STAGES,
  KNOWLEDGE_INGESTION_RULES,
  KNOWLEDGE_INTAKE_OUTCOMES,
  KNOWLEDGE_PROCESSING_STATES,
  KNOWLEDGE_QUALITY_GATES,
  KNOWLEDGE_QUARANTINE_REASONS,
  KnowledgeIngestionCurationDescriptor,
  KnowledgeIngestionCurationProfile,
  addKnowledgeMemory
} from '../../src/knowledge-memory/index.js';

test('ARCH-016-03 exposes intake, quarantine, pipeline, and chunking semantics', () => {
  const descriptor = new KnowledgeIngestionCurationDescriptor();
  assert.ok(descriptor.intakeOutcomes().includes(KNOWLEDGE_INTAKE_OUTCOMES.UNCERTAIN));
  assert.ok(descriptor.quarantineReasons().includes(KNOWLEDGE_QUARANTINE_REASONS.PROMPT_INJECTION));
  assert.deepEqual(descriptor.pipelineStages(), Object.values(KNOWLEDGE_INGESTION_PIPELINE_STAGES));
  assert.ok(descriptor.chunkingStrategies().includes(KNOWLEDGE_CHUNKING_STRATEGIES.TABLE));
});

test('ARCH-016-03 exposes quality gates, processing states, and publication boundaries', () => {
  const descriptor = new KnowledgeIngestionCurationDescriptor();
  assert.ok(descriptor.qualityGates().includes(KNOWLEDGE_QUALITY_GATES.PUBLICATION_READY));
  assert.ok(descriptor.processingStates().includes(KNOWLEDGE_PROCESSING_STATES.QUARANTINED));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_INGESTION_RULES.HANDOFF_NOT_ACTIVATION));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_INGESTION_RULES.AI_BOUNDARY));
});

test('ARCH-016-03 validates profiles and rejects ingestion shortcuts', () => {
  const descriptor = new KnowledgeIngestionCurationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'registeredSourcesRequired', 'sourceWorkloadAuthenticated', 'intakeScopeBound',
    'idempotentAcquisition', 'synchronizationReconciled', 'deletionGoverned', 'intakeValidated',
    'unsafeContentQuarantined', 'processingIsolated', 'originalPreserved', 'actualTypeDetected',
    'structurePreserved', 'extractionDerived', 'processingMethodsVersioned',
    'normalizationMeaningPreserved', 'metadataProvenance', 'classificationPropagated',
    'sensitiveDataGoverned', 'chunkBoundariesPreserved', 'contentAwareChunking',
    'aiEnrichmentDerived', 'curatorAuthorized', 'separationOfDuties', 'qualityGatesRequired',
    'publicationHandoffOnly', 'processingProvenance', 'reprocessingControlled', 'retryBounded',
    'poisonContentIsolated', 'tenantPropertyIsolation', 'temporaryDataDeleted',
    'providerGoverned', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'ingestionActivatesKnowledge', 'uploadGrantsPublication', 'duplicateMergesScopes',
    'failedSyncMeansDeletion', 'extensionDefinesType', 'extractionIsSourceTruth',
    'normalizationChangesMeaning', 'classificationBecomesLessRestrictive', 'chunksCrossBoundaries',
    'oneChunkStrategy', 'aiChangesAuthority', 'aiPublishesItself', 'curatorSelfApprovesCritical',
    'readinessMeansActivation', 'reprocessingReplacesActive', 'retriesUnsafeContent',
    'externalProviderDefinesMeaning', 'directDatabaseAccess', 'selectsProcessingProvider'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /scan-and-quarantine/);
  assert.match(validation.errors.join('\n'), /requires registeredSourcesRequired/);
  assert.match(validation.errors.join('\n'), /prohibits ingestionActivatesKnowledge/);
});

test('ARCH-016-03 detects incomplete metadata', () => {
  class IncompleteDescriptor extends KnowledgeIngestionCurationDescriptor {
    qualityGates() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === KNOWLEDGE_INGESTION_ERROR_CODE
  );
});

test('ARCH-016-03 profile is immutable', () => {
  const profile = complete(new KnowledgeIngestionCurationDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.pipelineStages.push('other'), TypeError);
});

test('ARCH-016-03 descriptor is registered', () => {
  const descriptor = addKnowledgeMemory(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('KnowledgeIngestionCurationDescriptor');
  assert.ok(descriptor instanceof KnowledgeIngestionCurationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'sourceClasses', 'contentClasses', 'acquisitionModels', 'intakeOutcomes',
    'quarantineReasons', 'pipelineStages', 'chunkingStrategies', 'qualityGates',
    'processingStates', 'failureTypes', 'ingestionApis', 'ingestionEvents', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new KnowledgeIngestionCurationProfile({ profileName: 'Knowledge Ingestion', ...metadata });
}
