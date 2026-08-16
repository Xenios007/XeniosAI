import { PlatformError } from '../../foundation/errors/platform-error.js';
import { KnowledgeMemoryOperationsProfile } from '../contracts/operations-observability-performance-profile.js';
import { KnowledgeMemoryValidationResult } from '../contracts/knowledge-memory-validation-result.js';
import {
  KNOWLEDGE_MEMORY_ALERT_FIELDS, KNOWLEDGE_MEMORY_CAPACITY_FACTORS,
  KNOWLEDGE_MEMORY_CONTEXT_OPERATION_AREAS, KNOWLEDGE_MEMORY_CORRELATION_IDENTITIES,
  KNOWLEDGE_MEMORY_DEGRADED_MODE_FIELDS, KNOWLEDGE_MEMORY_HEALTH_DIMENSIONS,
  KNOWLEDGE_MEMORY_HEALTH_FIELDS, KNOWLEDGE_MEMORY_LATENCY_BUDGET_FIELDS,
  KNOWLEDGE_MEMORY_MEMORY_OPERATION_AREAS, KNOWLEDGE_MEMORY_METRIC_DIMENSIONS,
  KNOWLEDGE_MEMORY_OBSERVABILITY_SIGNALS, KNOWLEDGE_MEMORY_OPERATIONAL_CAPABILITIES,
  KNOWLEDGE_MEMORY_OPERATIONAL_DEGRADED_MODES, KNOWLEDGE_MEMORY_OPERATIONS_BOUNDARIES,
  KNOWLEDGE_MEMORY_OPERATIONS_ERROR_CODE, KNOWLEDGE_MEMORY_OPERATIONS_OBJECTIVES,
  KNOWLEDGE_MEMORY_OPERATIONS_QUALITY_ATTRIBUTES, KNOWLEDGE_MEMORY_OPERATIONS_RULES,
  KNOWLEDGE_MEMORY_PROCESSING_STAGES, KNOWLEDGE_MEMORY_QUEUE_FIELDS,
  KNOWLEDGE_MEMORY_READINESS_REQUIREMENTS, KNOWLEDGE_MEMORY_RECOVERY_OBJECTIVES,
  KNOWLEDGE_MEMORY_RELIABILITY_MECHANISMS, KNOWLEDGE_MEMORY_RETRIEVAL_OPERATION_SIGNALS,
  KNOWLEDGE_MEMORY_SERVICE_CATALOG_FIELDS, KNOWLEDGE_MEMORY_SERVICE_LEVEL_INDICATORS,
  KNOWLEDGE_MEMORY_SYNCHRONIZATION_FIELDS
} from '../operations-observability-performance-constants.js';

const METADATA = Object.freeze({
  objectives: KNOWLEDGE_MEMORY_OPERATIONS_OBJECTIVES,
  operationalCapabilities: KNOWLEDGE_MEMORY_OPERATIONAL_CAPABILITIES,
  catalogFields: KNOWLEDGE_MEMORY_SERVICE_CATALOG_FIELDS,
  readinessRequirements: KNOWLEDGE_MEMORY_READINESS_REQUIREMENTS,
  healthDimensions: KNOWLEDGE_MEMORY_HEALTH_DIMENSIONS,
  healthFields: KNOWLEDGE_MEMORY_HEALTH_FIELDS,
  synchronizationFields: KNOWLEDGE_MEMORY_SYNCHRONIZATION_FIELDS,
  processingStages: KNOWLEDGE_MEMORY_PROCESSING_STAGES,
  retrievalSignals: KNOWLEDGE_MEMORY_RETRIEVAL_OPERATION_SIGNALS,
  memoryOperationAreas: KNOWLEDGE_MEMORY_MEMORY_OPERATION_AREAS,
  contextOperationAreas: KNOWLEDGE_MEMORY_CONTEXT_OPERATION_AREAS,
  observabilitySignals: KNOWLEDGE_MEMORY_OBSERVABILITY_SIGNALS,
  metricDimensions: KNOWLEDGE_MEMORY_METRIC_DIMENSIONS,
  correlationIdentities: KNOWLEDGE_MEMORY_CORRELATION_IDENTITIES,
  alertFields: KNOWLEDGE_MEMORY_ALERT_FIELDS,
  serviceLevelIndicators: KNOWLEDGE_MEMORY_SERVICE_LEVEL_INDICATORS,
  latencyBudgetFields: KNOWLEDGE_MEMORY_LATENCY_BUDGET_FIELDS,
  capacityFactors: KNOWLEDGE_MEMORY_CAPACITY_FACTORS,
  queueFields: KNOWLEDGE_MEMORY_QUEUE_FIELDS,
  reliabilityMechanisms: KNOWLEDGE_MEMORY_RELIABILITY_MECHANISMS,
  degradedModes: KNOWLEDGE_MEMORY_OPERATIONAL_DEGRADED_MODES,
  degradedModeFields: KNOWLEDGE_MEMORY_DEGRADED_MODE_FIELDS,
  recoveryObjectives: KNOWLEDGE_MEMORY_RECOVERY_OBJECTIVES,
  qualityAttributes: KNOWLEDGE_MEMORY_OPERATIONS_QUALITY_ATTRIBUTES,
  architecturalRules: KNOWLEDGE_MEMORY_OPERATIONS_RULES,
  architectureBoundaries: KNOWLEDGE_MEMORY_OPERATIONS_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  outcomeBasedHealth: 'ARCH-016-09 requires outcomeBasedHealth.',
  accountableOwnership: 'ARCH-016-09 requires accountableOwnership.',
  readinessRequired: 'ARCH-016-09 requires readinessRequired.',
  healthSemanticsConsistent: 'ARCH-016-09 requires healthSemanticsConsistent.',
  publicHealthMinimized: 'ARCH-016-09 requires publicHealthMinimized.',
  sourceLifecycleOperated: 'ARCH-016-09 requires sourceLifecycleOperated.',
  acceptanceDistinctFromPublication: 'ARCH-016-09 requires acceptanceDistinctFromPublication.',
  quarantineIsolated: 'ARCH-016-09 requires quarantineIsolated.',
  poisonItemsIsolated: 'ARCH-016-09 requires poisonItemsIsolated.',
  lifecycleVisible: 'ARCH-016-09 requires lifecycleVisible.',
  representationsCompatible: 'ARCH-016-09 requires representationsCompatible.',
  retrievalQualityMonitored: 'ARCH-016-09 requires retrievalQualityMonitored.',
  feedbackNonAuthoritative: 'ARCH-016-09 requires feedbackNonAuthoritative.',
  memoryInspectionPrivileged: 'ARCH-016-09 requires memoryInspectionPrivileged.',
  lifecycleJobsSafe: 'ARCH-016-09 requires lifecycleJobsSafe.',
  contextLifecycleOperated: 'ARCH-016-09 requires contextLifecycleOperated.',
  correctionPropagated: 'ARCH-016-09 requires correctionPropagated.',
  deletionPropagated: 'ARCH-016-09 requires deletionPropagated.',
  integrationMonitored: 'ARCH-016-09 requires integrationMonitored.',
  evaluationGoverned: 'ARCH-016-09 requires evaluationGoverned.',
  operationalToolingGoverned: 'ARCH-016-09 requires operationalToolingGoverned.',
  telemetryPurposeBound: 'ARCH-016-09 requires telemetryPurposeBound.',
  telemetryMinimized: 'ARCH-016-09 requires telemetryMinimized.',
  correlationEndToEnd: 'ARCH-016-09 requires correlationEndToEnd.',
  telemetryGoverned: 'ARCH-016-09 requires telemetryGoverned.',
  scopeAwareDiagnostics: 'ARCH-016-09 requires scopeAwareDiagnostics.',
  alertsActionable: 'ARCH-016-09 requires alertsActionable.',
  anomalyNeedsInvestigation: 'ARCH-016-09 requires anomalyNeedsInvestigation.',
  outcomeSlos: 'ARCH-016-09 requires outcomeSlos.',
  lifecycleReliabilityMeasured: 'ARCH-016-09 requires lifecycleReliabilityMeasured.',
  latencyBudgeted: 'ARCH-016-09 requires latencyBudgeted.',
  latencyComponentsSeparated: 'ARCH-016-09 requires latencyComponentsSeparated.',
  capacityModeled: 'ARCH-016-09 requires capacityModeled.',
  independentScaling: 'ARCH-016-09 requires independentScaling.',
  tenantFairness: 'ARCH-016-09 requires tenantFairness.',
  overloadControlled: 'ARCH-016-09 requires overloadControlled.',
  lifecycleWorkPrioritized: 'ARCH-016-09 requires lifecycleWorkPrioritized.',
  optimizationPreservesControls: 'ARCH-016-09 requires optimizationPreservesControls.',
  cacheScopeBound: 'ARCH-016-09 requires cacheScopeBound.',
  reliabilityMechanismsApplied: 'ARCH-016-09 requires reliabilityMechanismsApplied.',
  divergenceContained: 'ARCH-016-09 requires divergenceContained.',
  degradedModesContracted: 'ARCH-016-09 requires degradedModesContracted.',
  safeDegradation: 'ARCH-016-09 requires safeDegradation.',
  authoritativeStateBackedUp: 'ARCH-016-09 requires authoritativeStateBackedUp.',
  backupsGoverned: 'ARCH-016-09 requires backupsGoverned.',
  resurrectionPrevented: 'ARCH-016-09 requires resurrectionPrevented.',
  recoveryReconciled: 'ARCH-016-09 requires recoveryReconciled.',
  recoveryExercised: 'ARCH-016-09 requires recoveryExercised.',
  fallbackGoverned: 'ARCH-016-09 requires fallbackGoverned.',
  releaseGoverned: 'ARCH-016-09 requires releaseGoverned.',
  administrationRestricted: 'ARCH-016-09 requires administrationRestricted.',
  evidenceProtected: 'ARCH-016-09 requires evidenceProtected.',
  vendorNeutral: 'ARCH-016-09 requires vendorNeutral.',
  technologyIndependent: 'ARCH-016-09 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  processUptimeEqualsHealth: 'ARCH-016-09 prohibits processUptimeEqualsHealth.',
  publicHealthExposesTopology: 'ARCH-016-09 prohibits publicHealthExposesTopology.',
  acceptanceMeansPublication: 'ARCH-016-09 prohibits acceptanceMeansPublication.',
  quarantineRetrievable: 'ARCH-016-09 prohibits quarantineRetrievable.',
  networkAccessMeansSynchronization: 'ARCH-016-09 prohibits networkAccessMeansSynchronization.',
  incompatibleRepresentationsMixed: 'ARCH-016-09 prohibits incompatibleRepresentationsMixed.',
  feedbackChangesAuthority: 'ARCH-016-09 prohibits feedbackChangesAuthority.',
  memoryInspectionUnprivileged: 'ARCH-016-09 prohibits memoryInspectionUnprivileged.',
  telemetryCopiesProtectedContent: 'ARCH-016-09 prohibits telemetryCopiesProtectedContent.',
  metricLabelsContainSensitiveIds: 'ARCH-016-09 prohibits metricLabelsContainSensitiveIds.',
  anomalyProvesAbuse: 'ARCH-016-09 prohibits anomalyProvesAbuse.',
  securityBreachUsesErrorBudget: 'ARCH-016-09 prohibits securityBreachUsesErrorBudget.',
  averagesOnly: 'ARCH-016-09 prohibits averagesOnly.',
  tenantCanExhaustSharedCapacity: 'ARCH-016-09 prohibits tenantCanExhaustSharedCapacity.',
  propertyPriorityGrantsAccess: 'ARCH-016-09 prohibits propertyPriorityGrantsAccess.',
  cacheHitAuthorizes: 'ARCH-016-09 prohibits cacheHitAuthorizes.',
  optimizationWeakensLifecycle: 'ARCH-016-09 prohibits optimizationWeakensLifecycle.',
  backpressureDelaysDeletionIndefinitely: 'ARCH-016-09 prohibits backpressureDelaysDeletionIndefinitely.',
  restoreResurrectsRecords: 'ARCH-016-09 prohibits restoreResurrectsRecords.',
  fallbackWeakensPolicy: 'ARCH-016-09 prohibits fallbackWeakensPolicy.',
  administrationAllowsUnrestrictedBrowsing: 'ARCH-016-09 prohibits administrationAllowsUnrestrictedBrowsing.',
  directDatabaseAccess: 'ARCH-016-09 prohibits directDatabaseAccess.',
  selectsOperationsProduct: 'ARCH-016-09 prohibits selectsOperationsProduct.'
});

export class KnowledgeMemoryOperationsDescriptor {
  objectives() { return values(METADATA.objectives); }
  operationalCapabilities() { return values(METADATA.operationalCapabilities); }
  catalogFields() { return values(METADATA.catalogFields); }
  readinessRequirements() { return values(METADATA.readinessRequirements); }
  healthDimensions() { return values(METADATA.healthDimensions); }
  healthFields() { return values(METADATA.healthFields); }
  synchronizationFields() { return values(METADATA.synchronizationFields); }
  processingStages() { return values(METADATA.processingStages); }
  retrievalSignals() { return values(METADATA.retrievalSignals); }
  memoryOperationAreas() { return values(METADATA.memoryOperationAreas); }
  contextOperationAreas() { return values(METADATA.contextOperationAreas); }
  observabilitySignals() { return values(METADATA.observabilitySignals); }
  metricDimensions() { return values(METADATA.metricDimensions); }
  correlationIdentities() { return values(METADATA.correlationIdentities); }
  alertFields() { return values(METADATA.alertFields); }
  serviceLevelIndicators() { return values(METADATA.serviceLevelIndicators); }
  latencyBudgetFields() { return values(METADATA.latencyBudgetFields); }
  capacityFactors() { return values(METADATA.capacityFactors); }
  queueFields() { return values(METADATA.queueFields); }
  reliabilityMechanisms() { return values(METADATA.reliabilityMechanisms); }
  degradedModes() { return values(METADATA.degradedModes); }
  degradedModeFields() { return values(METADATA.degradedModeFields); }
  recoveryObjectives() { return values(METADATA.recoveryObjectives); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof KnowledgeMemoryOperationsProfile
      ? input
      : new KnowledgeMemoryOperationsProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Knowledge and Memory operations profile must have a name.');
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
        errors.push(`Knowledge and Memory Operations must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        KNOWLEDGE_MEMORY_OPERATIONS_ERROR_CODE,
        'Knowledge and Memory Operations, Observability, and Performance violates ARCH-016-09.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) {
  return new KnowledgeMemoryValidationResult({ isValid: errors.length === 0, errors });
}
