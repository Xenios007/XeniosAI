import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_INCIDENT_CONTROLS,
  AI_INCIDENT_TYPES,
  CONTRIBUTING_CONDITION_TYPES,
  CRISIS_CONTINUITY_TRANSITION_CRITERIA,
  DATA_INCIDENT_TYPES,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  EXTERNAL_PROVIDER_PROBLEM_REQUIREMENTS,
  FUTURE_INCIDENT_PROBLEM_CAPABILITIES,
  INCIDENT_CLASSIFICATION_DIMENSIONS,
  INCIDENT_COMMUNICATION_FIELDS,
  INCIDENT_CONTAINMENT_OPTIONS,
  INCIDENT_DETECTION_SOURCES,
  INCIDENT_DIAGNOSIS_ACTIVITIES,
  INCIDENT_EVIDENCE_TYPES,
  INCIDENT_EXAMPLES,
  INCIDENT_IMPACT_DIMENSIONS,
  INCIDENT_LIFECYCLE_STAGES,
  INCIDENT_MEASURES,
  INCIDENT_PRIORITY_USES,
  INCIDENT_PROBLEM_ARCHITECTURAL_RULES,
  INCIDENT_PROBLEM_GOVERNANCE_AREAS,
  INCIDENT_PROBLEM_OBJECTIVES,
  INCIDENT_PROBLEM_PRINCIPLES,
  INCIDENT_PROBLEM_QUALITY_ATTRIBUTES,
  INCIDENT_RECORD_FIELDS,
  INCIDENT_RECOVERY_VERIFICATION_DIMENSIONS,
  INCIDENT_RESTORATION_OPTIONS,
  INCIDENT_ROLES,
  INCIDENT_STATES,
  INCIDENT_URGENCY_FACTORS,
  INTEGRATION_INCIDENT_TYPES,
  IncidentProblemManagementDescriptor,
  IncidentProblemManagementProfile,
  KNOWN_ERROR_FIELDS,
  MAJOR_INCIDENT_REQUIREMENTS,
  MULTI_TENANT_INCIDENT_REQUIREMENTS,
  POST_INCIDENT_REVIEW_AREAS,
  POST_INCIDENT_REVIEW_CULTURE_ATTRIBUTES,
  POST_RESTORATION_OBSERVATION_CHECKS,
  PROBLEM_EXAMPLES,
  PROBLEM_IDENTIFICATION_SOURCES,
  PROBLEM_LIFECYCLE_STAGES,
  PROBLEM_MEASURES,
  PROBLEM_PRIORITY_FACTORS,
  PROBLEM_RECORD_FIELDS,
  PROBLEM_REMEDIATION_TYPES,
  PROPERTY_INCIDENT_CONTEXT,
  RECURRING_INCIDENT_TRIGGERS,
  REMEDIATION_VERIFICATION_CRITERIA,
  ROOT_CAUSE_ANALYSIS_DIMENSIONS,
  SECURITY_INCIDENT_REQUIREMENTS,
  TENANT_PROPERTY_INCIDENT_COMMUNICATION_FIELDS,
  WORKAROUND_FIELDS,
  WORKFLOW_INCIDENT_TYPES,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

function completeProfile(overrides = {}) {
  return new IncidentProblemManagementProfile({
    managementName: 'Incident and Problem Management',
    objectives: Object.values(INCIDENT_PROBLEM_OBJECTIVES),
    principles: Object.values(INCIDENT_PROBLEM_PRINCIPLES),
    incidentExamples: Object.values(INCIDENT_EXAMPLES),
    problemExamples: Object.values(PROBLEM_EXAMPLES),
    detectionSources: Object.values(INCIDENT_DETECTION_SOURCES),
    incidentRecordFields: Object.values(INCIDENT_RECORD_FIELDS),
    classificationDimensions: Object.values(INCIDENT_CLASSIFICATION_DIMENSIONS),
    impactDimensions: Object.values(INCIDENT_IMPACT_DIMENSIONS),
    urgencyFactors: Object.values(INCIDENT_URGENCY_FACTORS),
    priorityUses: Object.values(INCIDENT_PRIORITY_USES),
    incidentLifecycleStages: Object.values(INCIDENT_LIFECYCLE_STAGES),
    incidentStates: Object.values(INCIDENT_STATES),
    incidentRoles: Object.values(INCIDENT_ROLES),
    diagnosisActivities: Object.values(INCIDENT_DIAGNOSIS_ACTIVITIES),
    containmentOptions: Object.values(INCIDENT_CONTAINMENT_OPTIONS),
    workaroundFields: Object.values(WORKAROUND_FIELDS),
    restorationOptions: Object.values(INCIDENT_RESTORATION_OPTIONS),
    recoveryVerificationDimensions: Object.values(INCIDENT_RECOVERY_VERIFICATION_DIMENSIONS),
    observationChecks: Object.values(POST_RESTORATION_OBSERVATION_CHECKS),
    majorIncidentRequirements: Object.values(MAJOR_INCIDENT_REQUIREMENTS),
    crisisTransitionCriteria: Object.values(CRISIS_CONTINUITY_TRANSITION_CRITERIA),
    communicationFields: Object.values(INCIDENT_COMMUNICATION_FIELDS),
    tenantPropertyCommunicationFields: Object.values(TENANT_PROPERTY_INCIDENT_COMMUNICATION_FIELDS),
    evidenceTypes: Object.values(INCIDENT_EVIDENCE_TYPES),
    securityIncidentRequirements: Object.values(SECURITY_INCIDENT_REQUIREMENTS),
    dataIncidentTypes: Object.values(DATA_INCIDENT_TYPES),
    aiIncidentTypes: Object.values(AI_INCIDENT_TYPES),
    aiIncidentControls: Object.values(AI_INCIDENT_CONTROLS),
    workflowIncidentTypes: Object.values(WORKFLOW_INCIDENT_TYPES),
    integrationIncidentTypes: Object.values(INTEGRATION_INCIDENT_TYPES),
    problemIdentificationSources: Object.values(PROBLEM_IDENTIFICATION_SOURCES),
    problemRecordFields: Object.values(PROBLEM_RECORD_FIELDS),
    problemLifecycleStages: Object.values(PROBLEM_LIFECYCLE_STAGES),
    problemPriorityFactors: Object.values(PROBLEM_PRIORITY_FACTORS),
    rootCauseAnalysisDimensions: Object.values(ROOT_CAUSE_ANALYSIS_DIMENSIONS),
    contributingConditionTypes: Object.values(CONTRIBUTING_CONDITION_TYPES),
    knownErrorFields: Object.values(KNOWN_ERROR_FIELDS),
    remediationTypes: Object.values(PROBLEM_REMEDIATION_TYPES),
    remediationVerificationCriteria: Object.values(REMEDIATION_VERIFICATION_CRITERIA),
    postIncidentReviewAreas: Object.values(POST_INCIDENT_REVIEW_AREAS),
    reviewCultureAttributes: Object.values(POST_INCIDENT_REVIEW_CULTURE_ATTRIBUTES),
    recurringIncidentTriggers: Object.values(RECURRING_INCIDENT_TRIGGERS),
    multiTenantIncidentRequirements: Object.values(MULTI_TENANT_INCIDENT_REQUIREMENTS),
    propertyIncidentContext: Object.values(PROPERTY_INCIDENT_CONTEXT),
    externalProviderProblemRequirements: Object.values(EXTERNAL_PROVIDER_PROBLEM_REQUIREMENTS),
    incidentMeasures: Object.values(INCIDENT_MEASURES),
    problemMeasures: Object.values(PROBLEM_MEASURES),
    governanceAreas: Object.values(INCIDENT_PROBLEM_GOVERNANCE_AREAS),
    qualityAttributes: Object.values(INCIDENT_PROBLEM_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(INCIDENT_PROBLEM_ARCHITECTURAL_RULES),
    futureCapabilities: Object.values(FUTURE_INCIDENT_PROBLEM_CAPABILITIES),
    ...overrides
  });
}

test('incident and problem management exposes documented incident response metadata', () => {
  const descriptor = new IncidentProblemManagementDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(INCIDENT_PROBLEM_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(INCIDENT_PROBLEM_PRINCIPLES));
  assert.ok(descriptor.incidentExamples().includes(INCIDENT_EXAMPLES.SERVICE_COMMITMENT_VIOLATION));
  assert.ok(descriptor.detectionSources().includes(INCIDENT_DETECTION_SOURCES.OPERATOR_OBSERVATION));
  assert.ok(descriptor.incidentRecordFields().includes(INCIDENT_RECORD_FIELDS.CLOSURE_AND_REVIEW_STATUS));
  assert.ok(descriptor.classificationDimensions().includes(INCIDENT_CLASSIFICATION_DIMENSIONS.CONTINUITY_RELATED));
  assert.ok(descriptor.impactDimensions().includes(INCIDENT_IMPACT_DIMENSIONS.EXTERNAL_PARTNERS));
  assert.ok(descriptor.urgencyFactors().includes(INCIDENT_URGENCY_FACTORS.EXTERNAL_COMMUNICATION_COMMITMENTS));
  assert.ok(descriptor.incidentLifecycleStages().includes(INCIDENT_LIFECYCLE_STAGES.REVIEW_AND_IMPROVE));
  assert.ok(descriptor.incidentStates().includes(INCIDENT_STATES.TRANSFERRED_TO_CONTINUITY_OPERATIONS));
  assert.ok(descriptor.incidentRoles().includes(INCIDENT_ROLES.PROBLEM_OWNER));
  assert.ok(descriptor.containmentOptions().includes(INCIDENT_CONTAINMENT_OPTIONS.INCREASE_REVIEW_OR_APPROVAL));
});

test('incident and problem management exposes recovery, specialized incident, problem, review, and governance metadata', () => {
  const descriptor = new IncidentProblemManagementDescriptor();

  assert.ok(descriptor.diagnosisActivities().includes(INCIDENT_DIAGNOSIS_ACTIVITIES.IDENTIFY_RESTORATION_OPTIONS));
  assert.ok(descriptor.workaroundFields().includes(WORKAROUND_FIELDS.EXPIRATION_OR_REVIEW_DATE));
  assert.ok(descriptor.restorationOptions().includes(INCIDENT_RESTORATION_OPTIONS.EMERGENCY_CHANGE));
  assert.ok(descriptor.recoveryVerificationDimensions().includes(INCIDENT_RECOVERY_VERIFICATION_DIMENSIONS.PROPERTY_CONFIRMATION));
  assert.ok(descriptor.majorIncidentRequirements().includes(MAJOR_INCIDENT_REQUIREMENTS.POST_INCIDENT_REVIEW));
  assert.ok(descriptor.crisisTransitionCriteria().includes(CRISIS_CONTINUITY_TRANSITION_CRITERIA.STRATEGIC_BUSINESS_PRIORITIZATION_REQUIRED));
  assert.ok(descriptor.evidenceTypes().includes(INCIDENT_EVIDENCE_TYPES.PARTNER_REPORTS));
  assert.ok(descriptor.securityIncidentRequirements().includes(SECURITY_INCIDENT_REQUIREMENTS.CONFIRM_SECURITY_POSTURE_ON_RECOVERY));
  assert.ok(descriptor.aiIncidentControls().includes(AI_INCIDENT_CONTROLS.REVERT_POLICY_OR_PROMPT_CHANGES));
  assert.ok(descriptor.problemIdentificationSources().includes(PROBLEM_IDENTIFICATION_SOURCES.OPERATOR_EXPERIENCE));
  assert.ok(descriptor.problemLifecycleStages().includes(PROBLEM_LIFECYCLE_STAGES.CLOSE_AND_LEARN));
  assert.ok(descriptor.rootCauseAnalysisDimensions().includes(ROOT_CAUSE_ANALYSIS_DIMENSIONS.ENVIRONMENTAL_CONDITIONS));
  assert.ok(descriptor.knownErrorFields().includes(KNOWN_ERROR_FIELDS.REVIEW_OR_EXPIRATION_DATE));
  assert.ok(descriptor.remediationTypes().includes(PROBLEM_REMEDIATION_TYPES.DATA_CORRECTION));
  assert.ok(descriptor.postIncidentReviewAreas().includes(POST_INCIDENT_REVIEW_AREAS.WHAT_SHOULD_IMPROVE));
  assert.ok(descriptor.governanceAreas().includes(INCIDENT_PROBLEM_GOVERNANCE_AREAS.SENSITIVE_INFORMATION));
  assert.ok(descriptor.architecturalRules().includes(INCIDENT_PROBLEM_ARCHITECTURAL_RULES.REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_INCIDENT_PROBLEM_CAPABILITIES.FEDERATED_PROBLEM_INTELLIGENCE));
});

test('incident and problem management validates complete and incomplete profiles', () => {
  const descriptor = new IncidentProblemManagementDescriptor();
  const valid = descriptor.validateProfile(completeProfile());
  const invalid = descriptor.validateProfile(completeProfile({
    managementName: '',
    objectives: [INCIDENT_PROBLEM_OBJECTIVES.RAPID_RESTORATION_OF_BUSINESS_OUTCOMES],
    principles: [INCIDENT_PROBLEM_PRINCIPLES.RESTORE_BUSINESS_OUTCOMES_FIRST],
    incidentExamples: [INCIDENT_EXAMPLES.GUEST_JOURNEY_FAILURE],
    problemExamples: [PROBLEM_EXAMPLES.ARCHITECTURAL_WEAKNESS],
    detectionSources: [INCIDENT_DETECTION_SOURCES.BUSINESS_OUTCOME_MONITORING],
    incidentRecordFields: [INCIDENT_RECORD_FIELDS.INCIDENT_IDENTIFIER],
    classificationDimensions: [INCIDENT_CLASSIFICATION_DIMENSIONS.BUSINESS_CAPABILITY],
    impactDimensions: [INCIDENT_IMPACT_DIMENSIONS.GUESTS],
    urgencyFactors: [INCIDENT_URGENCY_FACTORS.ACTIVE_GUEST_IMPACT],
    priorityUses: [INCIDENT_PRIORITY_USES.RESPONSE_OBJECTIVE],
    incidentLifecycleStages: [INCIDENT_LIFECYCLE_STAGES.DETECT_OR_REPORT],
    incidentStates: [INCIDENT_STATES.NEW],
    incidentRoles: [INCIDENT_ROLES.INCIDENT_OWNER],
    diagnosisActivities: [INCIDENT_DIAGNOSIS_ACTIVITIES.ESTABLISH_KNOWN_FACTS],
    containmentOptions: [INCIDENT_CONTAINMENT_OPTIONS.DISABLE_UNSAFE_FUNCTIONALITY],
    workaroundFields: [WORKAROUND_FIELDS.APPLICABLE_CONDITION],
    restorationOptions: [INCIDENT_RESTORATION_OPTIONS.RESTART_OR_FAILOVER],
    recoveryVerificationDimensions: [INCIDENT_RECOVERY_VERIFICATION_DIMENSIONS.GUEST_JOURNEY_COMPLETION],
    observationChecks: [POST_RESTORATION_OBSERVATION_CHECKS.STABILITY],
    majorIncidentRequirements: [MAJOR_INCIDENT_REQUIREMENTS.EXPLICIT_DECLARATION],
    problemRecordFields: [PROBLEM_RECORD_FIELDS.PROBLEM_IDENTIFIER],
    problemLifecycleStages: [PROBLEM_LIFECYCLE_STAGES.IDENTIFY],
    governanceAreas: [INCIDENT_PROBLEM_GOVERNANCE_AREAS.CLASSIFICATION],
    architecturalRules: [INCIDENT_PROBLEM_ARCHITECTURAL_RULES.PRIORITIZE_BUSINESS_AND_GUEST_RESTORATION],
    restoresBusinessOutcomesFirst: false,
    separatesRestorationFromRootCause: false,
    accountableIncidentOwnerRequired: false,
    evidenceDistinguishesFactsHypothesesActions: false,
    containmentBeforeExpansion: false,
    contextualCommunicationRequired: false,
    blamelessLearningEnabled: false,
    remediationOwned: false,
    priorityUsesImpactUrgencyRisk: false,
    recoveryVerifiedEndToEnd: false,
    workaroundsGovernedTemporary: false,
    majorIncidentsUseCommandStructures: false,
    securityAuthorityPreserved: false,
    tenantPropertyDataSecurityBoundariesProtected: false,
    problemsIdentifiedProactivelyAndReactively: false,
    systemicContributorsPreserved: false,
    knownErrorsGoverned: false,
    remediationThroughControlledChange: false,
    riskReductionVerifiedBeforeClosure: false,
    improvementActionsTracked: false,
    humanAuthorityPreserved: false,
    technologyIndependent: false,
    vendorNeutral: false,
    ticketingProductSpecific: true,
    serviceManagementFrameworkSpecific: true,
    securityProceduresReplaced: true,
    commandStructureRedefined: true,
    technicalRecoverySufficient: true,
    unsupportedConclusionsAllowed: true,
    undocumentedPermanentWorkaround: true,
    simplisticSingleCauseRequired: true,
    supplierResponsibilityEliminatesXeniosAccountability: true
  }));

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /consistent-incident-handling/);
  assert.match(invalid.errors.join('\n'), /separate-restoration-from-root-cause/);
  assert.match(invalid.errors.join('\n'), /booking-or-availability-disruption/);
  assert.match(invalid.errors.join('\n'), /defective-implementation/);
  assert.match(invalid.errors.join('\n'), /guest-reports/);
  assert.match(invalid.errors.join('\n'), /detection-and-reporting-time/);
  assert.match(invalid.errors.join('\n'), /service/);
  assert.match(invalid.errors.join('\n'), /properties/);
  assert.match(invalid.errors.join('\n'), /booking-deadlines/);
  assert.match(invalid.errors.join('\n'), /command-level/);
  assert.match(invalid.errors.join('\n'), /Record and Correlate/);
  assert.match(invalid.errors.join('\n'), /assessing/);
  assert.match(invalid.errors.join('\n'), /incident-commander/);
  assert.match(invalid.errors.join('\n'), /trace-dependencies/);
  assert.match(invalid.errors.join('\n'), /reduce-ai-autonomy/);
  assert.match(invalid.errors.join('\n'), /authorized-scope/);
  assert.match(invalid.errors.join('\n'), /rollback/);
  assert.match(invalid.errors.join('\n'), /booking-correctness/);
  assert.match(invalid.errors.join('\n'), /no-recurrence/);
  assert.match(invalid.errors.join('\n'), /dedicated-command/);
  assert.match(invalid.errors.join('\n'), /problem prevention/);
  assert.match(invalid.errors.join('\n'), /Ticketing products are outside ARCH-011-05 scope/);
  assert.match(invalid.errors.join('\n'), /Technical recovery alone is insufficient/);
});

test('incident and problem management assertion rejects incomplete metadata', () => {
  class IncompleteIncidentProblemManagementDescriptor extends IncidentProblemManagementDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteIncidentProblemManagementDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.INCIDENT_PROBLEM_MANAGEMENT_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('incident and problem management descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('IncidentProblemManagementDescriptor');

  assert.ok(descriptor instanceof IncidentProblemManagementDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
