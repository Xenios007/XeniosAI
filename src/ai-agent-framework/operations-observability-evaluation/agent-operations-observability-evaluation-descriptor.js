import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AgentFrameworkValidationResult } from '../contracts/agent-framework-validation-result.js';
import { AgentOperationsObservabilityEvaluationProfile } from '../contracts/agent-operations-observability-evaluation-profile.js';
import {
  AGENT_ALERT_CONDITIONS, AGENT_ALERT_FIELDS, AGENT_AUDIT_EVENTS, AGENT_CONTAINMENT_ACTIONS,
  AGENT_DASHBOARD_FIELDS, AGENT_DOMAIN_EVENTS, AGENT_HEALTH_DIMENSIONS, AGENT_HEALTH_STATES,
  AGENT_HEALTH_STATE_ACTIONS, AGENT_INCIDENT_TYPES, AGENT_LOG_EVENTS, AGENT_METRICS,
  AGENT_OPERATIONAL_OWNERSHIP_ROLES, AGENT_OPERATIONAL_READINESS_ITEMS, AGENT_OPERATIONAL_RESPONSIBILITIES,
  AGENT_OPERATIONAL_SCOPE, AGENT_OPERATIONS_ARCHITECTURAL_RULES, AGENT_OPERATIONS_BOUNDARIES,
  AGENT_OPERATIONS_OBSERVABILITY_EVALUATION_ERROR_CODE, AGENT_OPERATIONS_QUALITY_ATTRIBUTES,
  AGENT_RUNBOOK_TOPICS, AGENT_SERVICE_COMMITMENTS, AGENT_SERVICE_MODEL_FIELDS, AGENT_SIGNAL_TYPES,
  BUSINESS_OBSERVABILITY_OUTCOMES, CAPACITY_DIMENSIONS, CHANGE_OPERATION_FIELDS,
  CONTINUITY_FAILURE_MODES, CONTROLLED_ROLLOUT_STAGES, COST_ATTRIBUTION_DIMENSIONS,
  DETERMINISTIC_EVALUATION_CHECKS, DRIFT_AREAS, DRIFT_RESPONSES, EVALUATION_DATASET_FIELDS,
  EVALUATION_LAYERS, EVALUATION_METHODS, EVALUATION_METRICS, EVALUATION_SCENARIO_FIELDS,
  FEEDBACK_PROCESSING_STEPS, FEEDBACK_SOURCES, GRACEFUL_DEGRADATION_MODES,
  HUMAN_INTERVENTION_ACTIONS, MODEL_BASED_EVALUATION_CONTROLS, OPERATIONAL_EVIDENCE_PURPOSES,
  OPERATIONAL_REVIEW_DIMENSIONS, PERFORMANCE_DIMENSIONS, PROHIBITED_LOG_CONTENT,
  QUALITY_OBSERVABILITY_SIGNALS, RECOVERY_REQUIREMENTS, RELEASE_GATE_REQUIREMENTS,
  ROLLBACK_SCOPES, TRACE_CORRELATION_POINTS
} from '../operations-observability-evaluation-constants.js';

const MAP = Object.freeze({
  operationalScope: AGENT_OPERATIONAL_SCOPE,
  ownershipRoles: AGENT_OPERATIONAL_OWNERSHIP_ROLES,
  responsibilities: AGENT_OPERATIONAL_RESPONSIBILITIES,
  readinessItems: AGENT_OPERATIONAL_READINESS_ITEMS,
  serviceModelFields: AGENT_SERVICE_MODEL_FIELDS,
  serviceCommitments: AGENT_SERVICE_COMMITMENTS,
  healthDimensions: AGENT_HEALTH_DIMENSIONS,
  healthStates: AGENT_HEALTH_STATES,
  healthStateActions: AGENT_HEALTH_STATE_ACTIONS,
  signalTypes: AGENT_SIGNAL_TYPES,
  metrics: AGENT_METRICS,
  logEvents: AGENT_LOG_EVENTS,
  prohibitedLogContent: PROHIBITED_LOG_CONTENT,
  traceCorrelationPoints: TRACE_CORRELATION_POINTS,
  domainEvents: AGENT_DOMAIN_EVENTS,
  auditEvents: AGENT_AUDIT_EVENTS,
  businessOutcomes: BUSINESS_OBSERVABILITY_OUTCOMES,
  qualitySignals: QUALITY_OBSERVABILITY_SIGNALS,
  dashboardFields: AGENT_DASHBOARD_FIELDS,
  alertFields: AGENT_ALERT_FIELDS,
  alertConditions: AGENT_ALERT_CONDITIONS,
  evaluationMethods: EVALUATION_METHODS,
  evaluationLayers: EVALUATION_LAYERS,
  datasetFields: EVALUATION_DATASET_FIELDS,
  scenarioFields: EVALUATION_SCENARIO_FIELDS,
  deterministicChecks: DETERMINISTIC_EVALUATION_CHECKS,
  modelEvaluationControls: MODEL_BASED_EVALUATION_CONTROLS,
  evaluationMetrics: EVALUATION_METRICS,
  releaseGateRequirements: RELEASE_GATE_REQUIREMENTS,
  rolloutStages: CONTROLLED_ROLLOUT_STAGES,
  driftAreas: DRIFT_AREAS,
  driftResponses: DRIFT_RESPONSES,
  incidentTypes: AGENT_INCIDENT_TYPES,
  containmentActions: AGENT_CONTAINMENT_ACTIONS,
  changeFields: CHANGE_OPERATION_FIELDS,
  rollbackScopes: ROLLBACK_SCOPES,
  capacityDimensions: CAPACITY_DIMENSIONS,
  performanceDimensions: PERFORMANCE_DIMENSIONS,
  costAttributionDimensions: COST_ATTRIBUTION_DIMENSIONS,
  continuityFailureModes: CONTINUITY_FAILURE_MODES,
  degradationModes: GRACEFUL_DEGRADATION_MODES,
  recoveryRequirements: RECOVERY_REQUIREMENTS,
  humanInterventionActions: HUMAN_INTERVENTION_ACTIONS,
  runbookTopics: AGENT_RUNBOOK_TOPICS,
  evidencePurposes: OPERATIONAL_EVIDENCE_PURPOSES,
  feedbackSources: FEEDBACK_SOURCES,
  feedbackProcessingSteps: FEEDBACK_PROCESSING_STEPS,
  reviewDimensions: OPERATIONAL_REVIEW_DIMENSIONS,
  qualityAttributes: AGENT_OPERATIONS_QUALITY_ATTRIBUTES,
  architecturalRules: AGENT_OPERATIONS_ARCHITECTURAL_RULES,
  architectureBoundaries: AGENT_OPERATIONS_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  businessOutcomeHealth: 'Agent health must include safe, authorized, reliable, and useful business outcomes.',
  correlatedEvidence: 'Material agent outcomes must be explainable through correlated operational evidence.',
  lifecycleEvaluation: 'Evaluation must be a lifecycle control.',
  ownedProductionAgents: 'Production agents must have accountable and operational ownership.',
  operationalReadinessBeforeActivation: 'Operational readiness must be defined before activation.',
  serviceCommitmentsReflectBusinessRisk: 'Service commitments must reflect business value and risk.',
  actionableHealthStates: 'Health states must drive controlled behavior.',
  tenantPropertyTelemetryScope: 'Telemetry must preserve tenant and property scope.',
  secretSafeLogs: 'Logs must exclude secrets and unnecessary hidden reasoning.',
  tracesPreserveScope: 'Trace propagation must preserve tenant and property boundaries.',
  domainEventsMeaningful: 'Domain events must represent meaningful state and outcome changes.',
  auditEvidenceProtected: 'Audit evidence must receive stronger integrity, retention, and access control.',
  technicalSuccessRequiresBusinessSuccess: 'Technical success without business success must not be reported as complete agent success.',
  scopedDashboardAccess: 'Agent dashboard access must be scoped.',
  actionableAlerts: 'Alerts must prioritize actionable business impact.',
  multiMethodEvaluation: 'Evaluation must combine multiple methods.',
  governedEvaluationData: 'Production data must not be copied into evaluation environments without governance.',
  deterministicControlsPreferDeterministicTests: 'Deterministic requirements should use deterministic checks.',
  modelJudgesNotSoleHighRiskAssurance: 'A model judge must not be the only assurance for high-risk controls.',
  thresholdsDefinedBeforeRelease: 'Evaluation thresholds must be defined before release decisions.',
  criticalFailuresNotHiddenByAverages: 'Average scores must not conceal critical failure categories.',
  regressionAfterMaterialChange: 'Material agent changes must run relevant regression suites.',
  shadowPreservesGovernance: 'Shadow execution must preserve data governance and provider restrictions.',
  controlledRolloutStopConditions: 'Controlled rollout stages must define success and stop conditions.',
  driftRequiresEvaluation: 'Drift requires evaluation.',
  scopedContainment: 'Containment must be scoped to minimize unnecessary business disruption.',
  incidentsFeedRegression: 'Incident findings must feed regression suites.',
  providerModelChangesProduction: 'Model-provider changes are production changes.',
  rollbackReconcilesInProgress: 'Rollback must consider in-progress executions and completed material actions.',
  costAttributed: 'Cost must be attributable by agent, version, execution, tenant, property, model, provider, tool, and evaluation.',
  degradationVisible: 'Material degradation must be visible to users and operators.',
  safeRecovery: 'Recovery must restore authority, dependencies, tenant isolation, service health, and monitoring.',
  authorizedHumanIntervention: 'Operations must support authorized human intervention.',
  feedbackThroughGovernedChange: 'Feedback must be converted through governed change.',
  periodicOperationalReview: 'Periodic operational review must examine value, quality, safety, reliability, cost, drift, findings, adoption, provider risk, and retirement need.'
});

const REQUIRED_FALSE = Object.freeze({
  infrastructureOnlyHealth: 'Infrastructure availability alone must not establish agent health.',
  unrestrictedDeliberationObservability: 'Observability must not depend on unrestricted model deliberation.',
  unownedActiveAgents: 'Unowned agents should not remain active.',
  modelPerformanceOnlyCommitments: 'Service commitments must not reflect model performance alone.',
  noisyUnactionableAlerts: 'Alerting must avoid excessive noise and unactionable conditions.',
  rawModelTokenEvents: 'Domain events must not represent raw model tokens.',
  productionDataCopiedWithoutGovernance: 'Production data must not be copied into evaluation environments without governance.',
  modelJudgeOnlyHighRiskControl: 'A model judge must not be the only assurance for high-risk controls.',
  averageScoreHidesCriticalFailures: 'Average score must not conceal critical failure categories.',
  materialChangeWithoutRegression: 'Material agent change must not bypass regression evaluation.',
  operativeShadowActions: 'Shadow mode must not perform material actions.',
  driftIgnored: 'Drift must not be ignored.',
  broadContainmentOnly: 'Containment should not be unnecessarily broad.',
  symptomOnlyProblemManagement: 'Problem management must not stop at symptoms.',
  providerChangeNotProduction: 'Provider and model changes must not be treated as non-production changes.',
  rollbackIgnoresCompletedActions: 'Rollback must not ignore completed material actions.',
  lowCostPoorOutcomeEfficient: 'Low cost with poor outcomes is not efficient.',
  invisibleMaterialDegradation: 'Material degradation must not be invisible to users and operators.',
  agentFeedbackAutoModifiesBehavior: 'Agent-generated feedback must not automatically modify agent behavior.',
  selectsObservabilityProduct: 'ARCH-014-09 does not select observability products.',
  selectsEvaluationProduct: 'ARCH-014-09 does not select evaluation products.',
  definesModelTraining: 'ARCH-014-09 does not define model training.',
  selectsServiceManagementProduct: 'ARCH-014-09 does not define service-management products.',
  replacesObservabilityArchitecture: 'ARCH-014-09 does not replace ARCH-010 Observability.',
  replacesEnterpriseOperations: 'ARCH-014-09 does not replace ARCH-011 Enterprise Operations.',
  replacesGovernanceCompliance: 'ARCH-014-09 does not replace ARCH-012 Governance & Compliance.'
});

export class AgentOperationsObservabilityEvaluationDescriptor {
  operationalScope() { return values(MAP.operationalScope); }
  ownershipRoles() { return values(MAP.ownershipRoles); }
  responsibilities() { return values(MAP.responsibilities); }
  readinessItems() { return values(MAP.readinessItems); }
  serviceModelFields() { return values(MAP.serviceModelFields); }
  serviceCommitments() { return values(MAP.serviceCommitments); }
  healthDimensions() { return values(MAP.healthDimensions); }
  healthStates() { return values(MAP.healthStates); }
  healthStateActions() { return values(MAP.healthStateActions); }
  signalTypes() { return values(MAP.signalTypes); }
  metrics() { return values(MAP.metrics); }
  logEvents() { return values(MAP.logEvents); }
  prohibitedLogContent() { return values(MAP.prohibitedLogContent); }
  traceCorrelationPoints() { return values(MAP.traceCorrelationPoints); }
  domainEvents() { return values(MAP.domainEvents); }
  auditEvents() { return values(MAP.auditEvents); }
  businessOutcomes() { return values(MAP.businessOutcomes); }
  qualitySignals() { return values(MAP.qualitySignals); }
  dashboardFields() { return values(MAP.dashboardFields); }
  alertFields() { return values(MAP.alertFields); }
  alertConditions() { return values(MAP.alertConditions); }
  evaluationMethods() { return values(MAP.evaluationMethods); }
  evaluationLayers() { return values(MAP.evaluationLayers); }
  datasetFields() { return values(MAP.datasetFields); }
  scenarioFields() { return values(MAP.scenarioFields); }
  deterministicChecks() { return values(MAP.deterministicChecks); }
  modelEvaluationControls() { return values(MAP.modelEvaluationControls); }
  evaluationMetrics() { return values(MAP.evaluationMetrics); }
  releaseGateRequirements() { return values(MAP.releaseGateRequirements); }
  rolloutStages() { return values(MAP.rolloutStages); }
  driftAreas() { return values(MAP.driftAreas); }
  driftResponses() { return values(MAP.driftResponses); }
  incidentTypes() { return values(MAP.incidentTypes); }
  containmentActions() { return values(MAP.containmentActions); }
  changeFields() { return values(MAP.changeFields); }
  rollbackScopes() { return values(MAP.rollbackScopes); }
  capacityDimensions() { return values(MAP.capacityDimensions); }
  performanceDimensions() { return values(MAP.performanceDimensions); }
  costAttributionDimensions() { return values(MAP.costAttributionDimensions); }
  continuityFailureModes() { return values(MAP.continuityFailureModes); }
  degradationModes() { return values(MAP.degradationModes); }
  recoveryRequirements() { return values(MAP.recoveryRequirements); }
  humanInterventionActions() { return values(MAP.humanInterventionActions); }
  runbookTopics() { return values(MAP.runbookTopics); }
  evidencePurposes() { return values(MAP.evidencePurposes); }
  feedbackSources() { return values(MAP.feedbackSources); }
  feedbackProcessingSteps() { return values(MAP.feedbackProcessingSteps); }
  reviewDimensions() { return values(MAP.reviewDimensions); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof AgentOperationsObservabilityEvaluationProfile
      ? profileInput
      : new AgentOperationsObservabilityEvaluationProfile(profileInput);
    const errors = [];
    if (!profile.operationsName) errors.push('Agent Operations, Observability, and Evaluation profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Agent Operations, Observability, and Evaluation must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        AGENT_OPERATIONS_OBSERVABILITY_EVALUATION_ERROR_CODE,
        'Agent Operations, Observability, and Evaluation violates ARCH-014-09.',
        { errors }
      );
    }
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new AgentFrameworkValidationResult({ isValid: errors.length === 0, errors }); }
