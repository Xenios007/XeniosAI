import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  MEMORY_ADMISSION_DECISIONS, MEMORY_LIFECYCLE_ERROR_CODE, MEMORY_LIFECYCLE_RULES,
  MEMORY_LIFECYCLE_STATES, MEMORY_RECORD_FIELDS, MEMORY_SCOPES, MEMORY_TYPES,
  MemoryLifecycleDescriptor, MemoryLifecycleProfile, addKnowledgeMemory
} from '../../src/knowledge-memory/index.js';

test('ARCH-016-05 exposes memory type, scope, and record semantics', () => {
  const descriptor = new MemoryLifecycleDescriptor();
  assert.deepEqual(descriptor.memoryTypes(), Object.values(MEMORY_TYPES));
  assert.deepEqual(descriptor.scopes(), Object.values(MEMORY_SCOPES));
  assert.deepEqual(descriptor.recordFields(), Object.values(MEMORY_RECORD_FIELDS));
  assert.ok(descriptor.memoryTypes().includes(MEMORY_TYPES.PREFERENCE));
});

test('ARCH-016-05 exposes admission, lifecycle, and authority boundaries', () => {
  const descriptor = new MemoryLifecycleDescriptor();
  assert.ok(descriptor.admissionDecisions().includes(MEMORY_ADMISSION_DECISIONS.PENDING_CONFIRMATION));
  assert.ok(descriptor.lifecycleStates().includes(MEMORY_LIFECYCLE_STATES.DISPUTED));
  assert.ok(descriptor.lifecycleStates().includes(MEMORY_LIFECYCLE_STATES.DELETED));
  assert.ok(descriptor.architecturalRules().includes(MEMORY_LIFECYCLE_RULES.ADMISSION_REQUIRED));
  assert.ok(descriptor.architecturalRules().includes(MEMORY_LIFECYCLE_RULES.NO_AUTHORITY));
});

test('ARCH-016-05 validates profiles and rejects memory shortcuts', () => {
  const descriptor = new MemoryLifecycleDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'deliberateRetention', 'admissionRequired', 'candidatesSeparated', 'modelOutputGoverned',
    'conversationBoundary', 'executionStateBoundary', 'domainAuthorityPreserved',
    'policyAuthorityPreserved', 'memoryNonAuthoritative', 'explicitRecordContract',
    'scopePreserved', 'promotionGoverned', 'materialChangeReadmitted', 'assertionStatesDistinct',
    'temporalSemantics', 'provenancePreserved', 'confidenceQualified', 'conflictVisible',
    'consolidationReadmitted', 'personalizationBounded', 'sensitiveInferenceControlled',
    'instructionBoundary', 'authoritiesSeparated', 'materialChangesVersioned',
    'lifecycleRecordAuthoritative', 'inactiveExcluded', 'uncertainResultsQualified',
    'completeLifecycle', 'correctionPropagated', 'deletionPropagated', 'resurrectionPrevented',
    'tombstonesMinimal', 'legalHoldSeparated', 'retentionControlled', 'trainingSeparated',
    'isolationEndToEnd', 'lifecycleEvidenceProtected', 'idempotencyAndConcurrency',
    'reconciliationEnabled', 'safeDegradation', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'transcriptCopiedByDefault', 'memoryGrantsAuthority', 'workflowStateStored', 'agentStateStored',
    'knowledgeAutoRemembered', 'modelDirectlyAdmits', 'frequencyProvesTruth', 'scopeAutoPromoted',
    'confidenceEqualsTruth', 'contradictionsBlended', 'useExtendsRetention',
    'derivedStoreAuthoritative', 'legalHoldActivatesMemory', 'deletionLeavesRepresentations',
    'restoreReactivatesMemory', 'productionMemoryTrainsModels', 'degradedModeWeakensControls',
    'directDatabaseAccess', 'selectsMemoryProduct'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /memory-type/);
  assert.match(validation.errors.join('\n'), /requires admissionRequired/);
  assert.match(validation.errors.join('\n'), /prohibits memoryGrantsAuthority/);
});

test('ARCH-016-05 detects incomplete metadata', () => {
  class IncompleteDescriptor extends MemoryLifecycleDescriptor {
    lifecycleStates() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === MEMORY_LIFECYCLE_ERROR_CODE
  );
});

test('ARCH-016-05 profile is immutable', () => {
  const profile = complete(new MemoryLifecycleDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.memoryTypes.push('other'), TypeError);
});

test('ARCH-016-05 descriptor is registered', () => {
  const descriptor = addKnowledgeMemory(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('MemoryLifecycleDescriptor');
  assert.ok(descriptor instanceof MemoryLifecycleDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'memoryTypes', 'scopes', 'recordFields', 'candidateFields', 'candidateSources',
    'admissionDecisions', 'authorityClasses', 'sensitivityClasses', 'lifecycleStates',
    'transitionFields', 'writeOperations', 'readOperations', 'degradedModes',
    'evaluationDimensions', 'qualityAttributes', 'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new MemoryLifecycleProfile({ profileName: 'Memory Lifecycle', ...metadata });
}
