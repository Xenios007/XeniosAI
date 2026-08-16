import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  KNOWLEDGE_MEMORY_HEALTH_DIMENSIONS, KNOWLEDGE_MEMORY_OPERATIONS_ERROR_CODE,
  KNOWLEDGE_MEMORY_OPERATIONS_RULES, KNOWLEDGE_MEMORY_RECOVERY_OBJECTIVES,
  KNOWLEDGE_MEMORY_RELIABILITY_MECHANISMS, KNOWLEDGE_MEMORY_SERVICE_LEVEL_INDICATORS,
  KnowledgeMemoryOperationsDescriptor, KnowledgeMemoryOperationsProfile, addKnowledgeMemory
} from '../../src/knowledge-memory/index.js';

test('ARCH-016-09 exposes multidimensional health and outcome indicators', () => {
  const descriptor = new KnowledgeMemoryOperationsDescriptor();
  assert.deepEqual(descriptor.healthDimensions(), Object.values(KNOWLEDGE_MEMORY_HEALTH_DIMENSIONS));
  assert.deepEqual(descriptor.serviceLevelIndicators(), Object.values(KNOWLEDGE_MEMORY_SERVICE_LEVEL_INDICATORS));
  assert.ok(descriptor.healthDimensions().includes(KNOWLEDGE_MEMORY_HEALTH_DIMENSIONS.MEMORY));
  assert.ok(descriptor.serviceLevelIndicators().includes(KNOWLEDGE_MEMORY_SERVICE_LEVEL_INDICATORS.DELETION));
});

test('ARCH-016-09 exposes reliability, recovery, and non-resurrection boundaries', () => {
  const descriptor = new KnowledgeMemoryOperationsDescriptor();
  assert.deepEqual(descriptor.reliabilityMechanisms(), Object.values(KNOWLEDGE_MEMORY_RELIABILITY_MECHANISMS));
  assert.deepEqual(descriptor.recoveryObjectives(), Object.values(KNOWLEDGE_MEMORY_RECOVERY_OBJECTIVES));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_MEMORY_OPERATIONS_RULES.UPTIME_NOT_ENOUGH));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_MEMORY_OPERATIONS_RULES.NO_RESURRECTION));
});

test('ARCH-016-09 validates profiles and rejects operational shortcuts', () => {
  const descriptor = new KnowledgeMemoryOperationsDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'outcomeBasedHealth', 'accountableOwnership', 'readinessRequired',
    'healthSemanticsConsistent', 'publicHealthMinimized', 'sourceLifecycleOperated',
    'acceptanceDistinctFromPublication', 'quarantineIsolated', 'poisonItemsIsolated',
    'lifecycleVisible', 'representationsCompatible', 'retrievalQualityMonitored',
    'feedbackNonAuthoritative', 'memoryInspectionPrivileged', 'lifecycleJobsSafe',
    'contextLifecycleOperated', 'correctionPropagated', 'deletionPropagated',
    'integrationMonitored', 'evaluationGoverned', 'operationalToolingGoverned',
    'telemetryPurposeBound', 'telemetryMinimized', 'correlationEndToEnd', 'telemetryGoverned',
    'scopeAwareDiagnostics', 'alertsActionable', 'anomalyNeedsInvestigation', 'outcomeSlos',
    'lifecycleReliabilityMeasured', 'latencyBudgeted', 'latencyComponentsSeparated',
    'capacityModeled', 'independentScaling', 'tenantFairness', 'overloadControlled',
    'lifecycleWorkPrioritized', 'optimizationPreservesControls', 'cacheScopeBound',
    'reliabilityMechanismsApplied', 'divergenceContained', 'degradedModesContracted',
    'safeDegradation', 'authoritativeStateBackedUp', 'backupsGoverned',
    'resurrectionPrevented', 'recoveryReconciled', 'recoveryExercised', 'fallbackGoverned',
    'releaseGoverned', 'administrationRestricted', 'evidenceProtected', 'vendorNeutral',
    'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'processUptimeEqualsHealth', 'publicHealthExposesTopology', 'acceptanceMeansPublication',
    'quarantineRetrievable', 'networkAccessMeansSynchronization',
    'incompatibleRepresentationsMixed', 'feedbackChangesAuthority',
    'memoryInspectionUnprivileged', 'telemetryCopiesProtectedContent',
    'metricLabelsContainSensitiveIds', 'anomalyProvesAbuse', 'securityBreachUsesErrorBudget',
    'averagesOnly', 'tenantCanExhaustSharedCapacity', 'propertyPriorityGrantsAccess',
    'cacheHitAuthorizes', 'optimizationWeakensLifecycle',
    'backpressureDelaysDeletionIndefinitely', 'restoreResurrectsRecords',
    'fallbackWeakensPolicy', 'administrationAllowsUnrestrictedBrowsing',
    'directDatabaseAccess', 'selectsOperationsProduct'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /business-outcome-health/);
  assert.match(validation.errors.join('\n'), /requires outcomeBasedHealth/);
  assert.match(validation.errors.join('\n'), /prohibits processUptimeEqualsHealth/);
});

test('ARCH-016-09 detects incomplete metadata', () => {
  class IncompleteDescriptor extends KnowledgeMemoryOperationsDescriptor {
    healthDimensions() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === KNOWLEDGE_MEMORY_OPERATIONS_ERROR_CODE
  );
});

test('ARCH-016-09 profile is immutable', () => {
  const profile = complete(new KnowledgeMemoryOperationsDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.healthDimensions.push('other'), TypeError);
});

test('ARCH-016-09 descriptor is registered', () => {
  const descriptor = addKnowledgeMemory(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('KnowledgeMemoryOperationsDescriptor');
  assert.ok(descriptor instanceof KnowledgeMemoryOperationsDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'operationalCapabilities', 'catalogFields', 'readinessRequirements',
    'healthDimensions', 'healthFields', 'synchronizationFields', 'processingStages',
    'retrievalSignals', 'memoryOperationAreas', 'contextOperationAreas', 'observabilitySignals',
    'metricDimensions', 'correlationIdentities', 'alertFields', 'serviceLevelIndicators',
    'latencyBudgetFields', 'capacityFactors', 'queueFields', 'reliabilityMechanisms',
    'degradedModes', 'degradedModeFields', 'recoveryObjectives', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new KnowledgeMemoryOperationsProfile({ profileName: 'Knowledge Memory Operations', ...metadata });
}
