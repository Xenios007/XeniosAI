import assert from 'node:assert/strict';
import test from 'node:test';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AGENT_ALERT_CONDITIONS,
  AGENT_AUDIT_EVENTS,
  AGENT_CONTAINMENT_ACTIONS,
  AGENT_DOMAIN_EVENTS,
  AGENT_HEALTH_DIMENSIONS,
  AGENT_HEALTH_STATES,
  AGENT_INCIDENT_TYPES,
  AGENT_METRICS,
  AGENT_OPERATIONAL_OWNERSHIP_ROLES,
  AGENT_OPERATIONAL_READINESS_ITEMS,
  AGENT_OPERATIONAL_RESPONSIBILITIES,
  AGENT_OPERATIONAL_SCOPE,
  AGENT_OPERATIONS_ARCHITECTURAL_RULES,
  AGENT_OPERATIONS_BOUNDARIES,
  AGENT_OPERATIONS_OBSERVABILITY_EVALUATION_ERROR_CODE,
  AGENT_OPERATIONS_QUALITY_ATTRIBUTES,
  AGENT_RUNBOOK_TOPICS,
  AGENT_SERVICE_COMMITMENTS,
  AGENT_SERVICE_MODEL_FIELDS,
  AGENT_SIGNAL_TYPES,
  BUSINESS_OBSERVABILITY_OUTCOMES,
  CAPACITY_DIMENSIONS,
  CHANGE_OPERATION_FIELDS,
  CONTINUITY_FAILURE_MODES,
  CONTROLLED_ROLLOUT_STAGES,
  COST_ATTRIBUTION_DIMENSIONS,
  DETERMINISTIC_EVALUATION_CHECKS,
  DRIFT_AREAS,
  DRIFT_RESPONSES,
  EVALUATION_DATASET_FIELDS,
  EVALUATION_LAYERS,
  EVALUATION_METHODS,
  EVALUATION_METRICS,
  EVALUATION_SCENARIO_FIELDS,
  FEEDBACK_PROCESSING_STEPS,
  FEEDBACK_SOURCES,
  GRACEFUL_DEGRADATION_MODES,
  HUMAN_INTERVENTION_ACTIONS,
  MODEL_BASED_EVALUATION_CONTROLS,
  OPERATIONAL_EVIDENCE_PURPOSES,
  OPERATIONAL_REVIEW_DIMENSIONS,
  PERFORMANCE_DIMENSIONS,
  PROHIBITED_LOG_CONTENT,
  QUALITY_OBSERVABILITY_SIGNALS,
  RECOVERY_REQUIREMENTS,
  RELEASE_GATE_REQUIREMENTS,
  ROLLBACK_SCOPES,
  TRACE_CORRELATION_POINTS,
  AgentOperationsObservabilityEvaluationDescriptor,
  AgentOperationsObservabilityEvaluationProfile,
  addAiAgentFramework
} from '../../src/ai-agent-framework/index.js';

test('ARCH-014-09 exposes operational scope, ownership, readiness, service, health, signal, metric, log, trace, and event metadata', () => {
  const descriptor = new AgentOperationsObservabilityEvaluationDescriptor();

  assert.ok(descriptor.operationalScope().includes(AGENT_OPERATIONAL_SCOPE.EVALUATION_SUITES));
  assert.ok(descriptor.ownershipRoles().includes(AGENT_OPERATIONAL_OWNERSHIP_ROLES.SECURITY_CONTACT));
  assert.ok(descriptor.responsibilities().includes(AGENT_OPERATIONAL_RESPONSIBILITIES.OPERATIONAL_EVIDENCE));
  assert.ok(descriptor.readinessItems().includes(AGENT_OPERATIONAL_READINESS_ITEMS.SUSPENSION_CONTROLS));
  assert.ok(descriptor.serviceModelFields().includes(AGENT_SERVICE_MODEL_FIELDS.RECOVERY_OBJECTIVES));
  assert.ok(descriptor.serviceCommitments().includes(AGENT_SERVICE_COMMITMENTS.TENANT_ISOLATION));
  assert.ok(descriptor.healthDimensions().includes(AGENT_HEALTH_DIMENSIONS.GOVERNANCE));
  assert.ok(descriptor.healthStates().includes(AGENT_HEALTH_STATES.RESTRICTED));
  assert.ok(descriptor.signalTypes().includes(AGENT_SIGNAL_TYPES.PROVIDER_NOTIFICATIONS));
  assert.ok(descriptor.metrics().includes(AGENT_METRICS.CONTEXT_RETRIEVAL_QUALITY));
  assert.ok(descriptor.logEvents().includes('reconciliation'));
  assert.ok(descriptor.prohibitedLogContent().includes(PROHIBITED_LOG_CONTENT.UNRESTRICTED_HIDDEN_REASONING));
  assert.ok(descriptor.traceCorrelationPoints().includes(TRACE_CORRELATION_POINTS.EXTERNAL_PROVIDER));
  assert.ok(descriptor.domainEvents().includes(AGENT_DOMAIN_EVENTS.EVALUATION_FAILED));
  assert.ok(descriptor.auditEvents().includes(AGENT_AUDIT_EVENTS.LIFECYCLE_TRANSITION));
});

test('ARCH-014-09 exposes business, quality, dashboard, alert, evaluation, dataset, scenario, release, rollout, and drift metadata', () => {
  const descriptor = new AgentOperationsObservabilityEvaluationDescriptor();

  assert.ok(descriptor.businessOutcomes().includes(BUSINESS_OBSERVABILITY_OUTCOMES.CORRECT_PRICE_PRESENTATION));
  assert.ok(descriptor.qualitySignals().includes(QUALITY_OBSERVABILITY_SIGNALS.TENANT_ISOLATION_VIOLATION));
  assert.ok(descriptor.dashboardFields().includes('current-restrictions'));
  assert.ok(descriptor.alertFields().includes('required-action'));
  assert.ok(descriptor.alertConditions().includes(AGENT_ALERT_CONDITIONS.EVIDENCE_GAP));
  assert.ok(descriptor.evaluationMethods().includes(EVALUATION_METHODS.RED_TEAMING));
  assert.ok(descriptor.evaluationLayers().includes(EVALUATION_LAYERS.PRODUCTION));
  assert.ok(descriptor.datasetFields().includes(EVALUATION_DATASET_FIELDS.DATA_RIGHTS));
  assert.ok(descriptor.scenarioFields().includes(EVALUATION_SCENARIO_FIELDS.PROHIBITED_OUTCOMES));
  assert.ok(descriptor.deterministicChecks().includes(DETERMINISTIC_EVALUATION_CHECKS.REQUIRED_APPROVAL));
  assert.ok(descriptor.modelEvaluationControls().includes(MODEL_BASED_EVALUATION_CONTROLS.DISAGREEMENT_HANDLING));
  assert.ok(descriptor.evaluationMetrics().includes(EVALUATION_METRICS.AUTHORITY_COMPLIANCE));
  assert.ok(descriptor.releaseGateRequirements().includes(RELEASE_GATE_REQUIREMENTS.NO_UNAUTHORIZED_ACTIONS));
  assert.ok(descriptor.rolloutStages().includes(CONTROLLED_ROLLOUT_STAGES.HUMAN_APPROVAL_MODE));
  assert.ok(descriptor.driftAreas().includes(DRIFT_AREAS.PROVIDER_BEHAVIOR));
  assert.ok(descriptor.driftResponses().includes(DRIFT_RESPONSES.AUTONOMY_REDUCTION));
});

test('ARCH-014-09 exposes incident, containment, change, rollback, capacity, performance, cost, continuity, recovery, intervention, feedback, review, quality, rules, and boundaries', () => {
  const descriptor = new AgentOperationsObservabilityEvaluationDescriptor();

  assert.ok(descriptor.incidentTypes().includes(AGENT_INCIDENT_TYPES.INABILITY_TO_CANCEL));
  assert.ok(descriptor.containmentActions().includes(AGENT_CONTAINMENT_ACTIONS.REVOKE_CREDENTIALS));
  assert.ok(descriptor.changeFields().includes(CHANGE_OPERATION_FIELDS.STOP_CONDITIONS));
  assert.ok(descriptor.rollbackScopes().includes(ROLLBACK_SCOPES.MODEL_ROUTING));
  assert.ok(descriptor.capacityDimensions().includes(CAPACITY_DIMENSIONS.PEAK_EVENTS));
  assert.ok(descriptor.performanceDimensions().includes(PERFORMANCE_DIMENSIONS.END_TO_END_COMPLETION));
  assert.ok(descriptor.costAttributionDimensions().includes(COST_ATTRIBUTION_DIMENSIONS.EVALUATION));
  assert.ok(descriptor.continuityFailureModes().includes(CONTINUITY_FAILURE_MODES.EVIDENCE_OUTAGE));
  assert.ok(descriptor.degradationModes().includes(GRACEFUL_DEGRADATION_MODES.SAFE_UNAVAILABILITY));
  assert.ok(descriptor.recoveryRequirements().includes(RECOVERY_REQUIREMENTS.REVALIDATE_AUTHORITY));
  assert.ok(descriptor.humanInterventionActions().includes(HUMAN_INTERVENTION_ACTIONS.TAKEOVER));
  assert.ok(descriptor.runbookTopics().includes(AGENT_RUNBOOK_TOPICS.SECURE_RESTORATION));
  assert.ok(descriptor.evidencePurposes().includes(OPERATIONAL_EVIDENCE_PURPOSES.TENANT_REPORTING));
  assert.ok(descriptor.feedbackSources().includes(FEEDBACK_SOURCES.OUTCOME_ANALYTICS));
  assert.ok(descriptor.feedbackProcessingSteps().includes(FEEDBACK_PROCESSING_STEPS.CONVERTED_TO_EVALUATION_OR_REMEDIATION));
  assert.ok(descriptor.reviewDimensions().includes(OPERATIONAL_REVIEW_DIMENSIONS.PROVIDER_RISK));
  assert.ok(descriptor.qualityAttributes().includes(AGENT_OPERATIONS_QUALITY_ATTRIBUTES.ACCOUNTABILITY));
  assert.ok(descriptor.architecturalRules().includes(AGENT_OPERATIONS_ARCHITECTURAL_RULES.NO_MODEL_ONLY_EVALUATION));
  assert.ok(descriptor.architectureBoundaries().includes(AGENT_OPERATIONS_BOUNDARIES.ENTERPRISE_OPERATIONS_REPLACEMENT));
});

test('ARCH-014-09 validates complete profiles and rejects operations observability violations', () => {
  const descriptor = new AgentOperationsObservabilityEvaluationDescriptor();

  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);

  const invalid = descriptor.validateProfile({
    businessOutcomeHealth: false,
    correlatedEvidence: false,
    lifecycleEvaluation: false,
    ownedProductionAgents: false,
    infrastructureOnlyHealth: true,
    unrestrictedDeliberationObservability: true,
    unownedActiveAgents: true,
    modelJudgeOnlyHighRiskControl: true,
    averageScoreHidesCriticalFailures: true,
    operativeShadowActions: true,
    providerChangeNotProduction: true,
    lowCostPoorOutcomeEfficient: true,
    selectsObservabilityProduct: true,
    replacesEnterpriseOperations: true
  });

  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /agent-definitions/);
  assert.match(invalid.errors.join('\n'), /accountable-owner/);
  assert.match(invalid.errors.join('\n'), /Agent health must include safe, authorized, reliable/);
  assert.match(invalid.errors.join('\n'), /Infrastructure availability alone must not establish agent health/);
  assert.match(invalid.errors.join('\n'), /ARCH-014-09 does not select observability products/);
  assert.match(invalid.errors.join('\n'), /ARCH-014-09 does not replace ARCH-011 Enterprise Operations/);
});

test('ARCH-014-09 assertion detects incomplete operations metadata', () => {
  class IncompleteDescriptor extends AgentOperationsObservabilityEvaluationDescriptor {
    operationalScope() { return []; }
  }

  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    error => error instanceof PlatformError &&
      error.code === AGENT_OPERATIONS_OBSERVABILITY_EVALUATION_ERROR_CODE &&
      error.details.errors.some(message => message.includes('documented operationalScope'))
  );
});

test('ARCH-014-09 descriptor is available through AI agent framework dependency injection', () => {
  const services = addAiAgentFramework(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('AgentOperationsObservabilityEvaluationDescriptor');

  assert.ok(descriptor instanceof AgentOperationsObservabilityEvaluationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['operationalScope', 'ownershipRoles', 'responsibilities', 'readinessItems',
    'serviceModelFields', 'serviceCommitments', 'healthDimensions', 'healthStates', 'healthStateActions',
    'signalTypes', 'metrics', 'logEvents', 'prohibitedLogContent', 'traceCorrelationPoints',
    'domainEvents', 'auditEvents', 'businessOutcomes', 'qualitySignals', 'dashboardFields', 'alertFields',
    'alertConditions', 'evaluationMethods', 'evaluationLayers', 'datasetFields', 'scenarioFields',
    'deterministicChecks', 'modelEvaluationControls', 'evaluationMetrics', 'releaseGateRequirements',
    'rolloutStages', 'driftAreas', 'driftResponses', 'incidentTypes', 'containmentActions',
    'changeFields', 'rollbackScopes', 'capacityDimensions', 'performanceDimensions',
    'costAttributionDimensions', 'continuityFailureModes', 'degradationModes', 'recoveryRequirements',
    'humanInterventionActions', 'runbookTopics', 'evidencePurposes', 'feedbackSources',
    'feedbackProcessingSteps', 'reviewDimensions', 'qualityAttributes', 'architecturalRules',
    'architectureBoundaries']) values[key] = descriptor[key]();
  return new AgentOperationsObservabilityEvaluationProfile({
    operationsName: 'Agent Operations, Observability, and Evaluation',
    ...values
  });
}
