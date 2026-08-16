import { PlatformError } from '../../foundation/errors/platform-error.js';
import { WorkflowOperationsProfile } from '../contracts/workflow-operations-profile.js';
import { WorkflowEngineValidationResult } from '../contracts/workflow-engine-validation-result.js';
import {
  WORKFLOW_ALERT_CONDITIONS,
  WORKFLOW_CAPACITY_DIMENSIONS,
  WORKFLOW_DEGRADATION_MODES,
  WORKFLOW_EXECUTION_TRIAGE_STATES,
  WORKFLOW_HEALTH_DIMENSIONS,
  WORKFLOW_HEALTH_STATES,
  WORKFLOW_OBSERVABILITY_SIGNALS,
  WORKFLOW_OPERATIONAL_ACTIONS,
  WORKFLOW_OPERATIONAL_OBJECTIVES,
  WORKFLOW_OPERATIONAL_SLIS,
  WORKFLOW_OPERATIONS_BOUNDARIES,
  WORKFLOW_OPERATIONS_ERROR_CODE,
  WORKFLOW_OPERATIONS_QUALITY_ATTRIBUTES,
  WORKFLOW_OPERATIONS_RULES,
  WORKFLOW_TELEMETRY_CORRELATIONS
} from '../operations-observability-constants.js';

const METADATA = Object.freeze({
  operationalObjectives: WORKFLOW_OPERATIONAL_OBJECTIVES,
  healthDimensions: WORKFLOW_HEALTH_DIMENSIONS,
  healthStates: WORKFLOW_HEALTH_STATES,
  observabilitySignals: WORKFLOW_OBSERVABILITY_SIGNALS,
  telemetryCorrelations: WORKFLOW_TELEMETRY_CORRELATIONS,
  serviceLevelIndicators: WORKFLOW_OPERATIONAL_SLIS,
  alertConditions: WORKFLOW_ALERT_CONDITIONS,
  capacityDimensions: WORKFLOW_CAPACITY_DIMENSIONS,
  degradationModes: WORKFLOW_DEGRADATION_MODES,
  triageStates: WORKFLOW_EXECUTION_TRIAGE_STATES,
  operationalActions: WORKFLOW_OPERATIONAL_ACTIONS,
  qualityAttributes: WORKFLOW_OPERATIONS_QUALITY_ATTRIBUTES,
  architecturalRules: WORKFLOW_OPERATIONS_RULES,
  architectureBoundaries: WORKFLOW_OPERATIONS_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  multidimensionalHealth: 'ARCH-015-09 requires multidimensionalHealth.',
  accountableOwnership: 'ARCH-015-09 requires accountableOwnership.',
  readinessRequired: 'ARCH-015-09 requires readinessRequired.',
  correlatedTelemetry: 'ARCH-015-09 requires correlatedTelemetry.',
  cardinalityControlled: 'ARCH-015-09 requires cardinalityControlled.',
  sensitiveDataProtected: 'ARCH-015-09 requires sensitiveDataProtected.',
  taskAttemptDistinction: 'ARCH-015-09 requires taskAttemptDistinction.',
  expectedWaitDistinction: 'ARCH-015-09 requires expectedWaitDistinction.',
  businessOutcomeDistinction: 'ARCH-015-09 requires businessOutcomeDistinction.',
  domainEvidenceDistinct: 'ARCH-015-09 requires domainEvidenceDistinct.',
  businessRelevantSlos: 'ARCH-015-09 requires businessRelevantSlos.',
  unknownHealthPreserved: 'ARCH-015-09 requires unknownHealthPreserved.',
  versionVisible: 'ARCH-015-09 requires versionVisible.',
  tenantPropertyScoped: 'ARCH-015-09 requires tenantPropertyScoped.',
  controlledOperations: 'ARCH-015-09 requires controlledOperations.',
  capacityEndToEnd: 'ARCH-015-09 requires capacityEndToEnd.',
  tenantFairness: 'ARCH-015-09 requires tenantFairness.',
  admissionBackpressure: 'ARCH-015-09 requires admissionBackpressure.',
  tailLatencyMeasured: 'ARCH-015-09 requires tailLatencyMeasured.',
  realisticPerformanceTesting: 'ARCH-015-09 requires realisticPerformanceTesting.',
  degradationPredefined: 'ARCH-015-09 requires degradationPredefined.',
  reconciledRecovery: 'ARCH-015-09 requires reconciledRecovery.',
  singleTransitionAuthority: 'ARCH-015-09 requires singleTransitionAuthority.',
  backlogRecoveryBounded: 'ARCH-015-09 requires backlogRecoveryBounded.',
  automationBounded: 'ARCH-015-09 requires automationBounded.',
  aiRecommendationsAdvisory: 'ARCH-015-09 requires aiRecommendationsAdvisory.',
  operationalDataGoverned: 'ARCH-015-09 requires operationalDataGoverned.',
  changesCorrelated: 'ARCH-015-09 requires changesCorrelated.',
  continuousImprovement: 'ARCH-015-09 requires continuousImprovement.',
  vendorNeutral: 'ARCH-015-09 requires vendorNeutral.',
  technologyIndependent: 'ARCH-015-09 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  uptimeEqualsHealth: 'ARCH-015-09 prohibits uptimeEqualsHealth.',
  queueDepthAloneSufficient: 'ARCH-015-09 prohibits queueDepthAloneSufficient.',
  unknownMeansHealthy: 'ARCH-015-09 prohibits unknownMeansHealthy.',
  unrestrictedMetricIdentifiers: 'ARCH-015-09 prohibits unrestrictedMetricIdentifiers.',
  transportSuccessMeansCompletion: 'ARCH-015-09 prohibits transportSuccessMeansCompletion.',
  notificationMeansDecision: 'ARCH-015-09 prohibits notificationMeansDecision.',
  operationsMutateStateDirectly: 'ARCH-015-09 prohibits operationsMutateStateDirectly.',
  averageLatencySufficient: 'ARCH-015-09 prohibits averageLatencySufficient.',
  cacheOwnsState: 'ARCH-015-09 prohibits cacheOwnsState.',
  degradationBypassesControls: 'ARCH-015-09 prohibits degradationBypassesControls.',
  blindRetry: 'ARCH-015-09 prohibits blindRetry.',
  aiRecommendationIsCommand: 'ARCH-015-09 prohibits aiRecommendationIsCommand.',
  failoverCreatesDualAuthority: 'ARCH-015-09 prohibits failoverCreatesDualAuthority.',
  uncontrolledCatchup: 'ARCH-015-09 prohibits uncontrolledCatchup.',
  universalExactlyOnce: 'ARCH-015-09 prohibits universalExactlyOnce.',
  selectsOperationsProduct: 'ARCH-015-09 prohibits selectsOperationsProduct.',
  definesAdjacentDomains: 'ARCH-015-09 prohibits definesAdjacentDomains.'
});

export class WorkflowOperationsDescriptor {
  operationalObjectives() { return values(METADATA.operationalObjectives); }
  healthDimensions() { return values(METADATA.healthDimensions); }
  healthStates() { return values(METADATA.healthStates); }
  observabilitySignals() { return values(METADATA.observabilitySignals); }
  telemetryCorrelations() { return values(METADATA.telemetryCorrelations); }
  serviceLevelIndicators() { return values(METADATA.serviceLevelIndicators); }
  alertConditions() { return values(METADATA.alertConditions); }
  capacityDimensions() { return values(METADATA.capacityDimensions); }
  degradationModes() { return values(METADATA.degradationModes); }
  triageStates() { return values(METADATA.triageStates); }
  operationalActions() { return values(METADATA.operationalActions); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof WorkflowOperationsProfile
      ? input
      : new WorkflowOperationsProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Workflow operations profile must have a name.');
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
        errors.push(`Workflow Operations, Observability, and Performance must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        WORKFLOW_OPERATIONS_ERROR_CODE,
        'Workflow Operations, Observability, and Performance violates ARCH-015-09.',
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
  return new WorkflowEngineValidationResult({ isValid: errors.length === 0, errors });
}
