import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  WORKFLOW_INCIDENT_TYPES
} from '../constants.js';
import { EnterpriseOperationsValidationResult } from '../contracts/enterprise-operations-validation-result.js';
import { IncidentProblemManagementProfile } from '../contracts/incident-problem-management-profile.js';

const INCIDENT_LIFECYCLE = Object.freeze(Object.values(INCIDENT_LIFECYCLE_STAGES));
const PROBLEM_LIFECYCLE = Object.freeze(Object.values(PROBLEM_LIFECYCLE_STAGES));

export class IncidentProblemManagementDescriptor {
  objectives() { return Object.freeze(Object.values(INCIDENT_PROBLEM_OBJECTIVES)); }
  principles() { return Object.freeze(Object.values(INCIDENT_PROBLEM_PRINCIPLES)); }
  incidentExamples() { return Object.freeze(Object.values(INCIDENT_EXAMPLES)); }
  problemExamples() { return Object.freeze(Object.values(PROBLEM_EXAMPLES)); }
  detectionSources() { return Object.freeze(Object.values(INCIDENT_DETECTION_SOURCES)); }
  incidentRecordFields() { return Object.freeze(Object.values(INCIDENT_RECORD_FIELDS)); }
  classificationDimensions() { return Object.freeze(Object.values(INCIDENT_CLASSIFICATION_DIMENSIONS)); }
  impactDimensions() { return Object.freeze(Object.values(INCIDENT_IMPACT_DIMENSIONS)); }
  urgencyFactors() { return Object.freeze(Object.values(INCIDENT_URGENCY_FACTORS)); }
  priorityUses() { return Object.freeze(Object.values(INCIDENT_PRIORITY_USES)); }
  incidentLifecycleStages() { return INCIDENT_LIFECYCLE; }
  incidentStates() { return Object.freeze(Object.values(INCIDENT_STATES)); }
  incidentRoles() { return Object.freeze(Object.values(INCIDENT_ROLES)); }
  diagnosisActivities() { return Object.freeze(Object.values(INCIDENT_DIAGNOSIS_ACTIVITIES)); }
  containmentOptions() { return Object.freeze(Object.values(INCIDENT_CONTAINMENT_OPTIONS)); }
  workaroundFields() { return Object.freeze(Object.values(WORKAROUND_FIELDS)); }
  restorationOptions() { return Object.freeze(Object.values(INCIDENT_RESTORATION_OPTIONS)); }
  recoveryVerificationDimensions() { return Object.freeze(Object.values(INCIDENT_RECOVERY_VERIFICATION_DIMENSIONS)); }
  observationChecks() { return Object.freeze(Object.values(POST_RESTORATION_OBSERVATION_CHECKS)); }
  majorIncidentRequirements() { return Object.freeze(Object.values(MAJOR_INCIDENT_REQUIREMENTS)); }
  crisisTransitionCriteria() { return Object.freeze(Object.values(CRISIS_CONTINUITY_TRANSITION_CRITERIA)); }
  communicationFields() { return Object.freeze(Object.values(INCIDENT_COMMUNICATION_FIELDS)); }
  tenantPropertyCommunicationFields() { return Object.freeze(Object.values(TENANT_PROPERTY_INCIDENT_COMMUNICATION_FIELDS)); }
  evidenceTypes() { return Object.freeze(Object.values(INCIDENT_EVIDENCE_TYPES)); }
  securityIncidentRequirements() { return Object.freeze(Object.values(SECURITY_INCIDENT_REQUIREMENTS)); }
  dataIncidentTypes() { return Object.freeze(Object.values(DATA_INCIDENT_TYPES)); }
  aiIncidentTypes() { return Object.freeze(Object.values(AI_INCIDENT_TYPES)); }
  aiIncidentControls() { return Object.freeze(Object.values(AI_INCIDENT_CONTROLS)); }
  workflowIncidentTypes() { return Object.freeze(Object.values(WORKFLOW_INCIDENT_TYPES)); }
  integrationIncidentTypes() { return Object.freeze(Object.values(INTEGRATION_INCIDENT_TYPES)); }
  problemIdentificationSources() { return Object.freeze(Object.values(PROBLEM_IDENTIFICATION_SOURCES)); }
  problemRecordFields() { return Object.freeze(Object.values(PROBLEM_RECORD_FIELDS)); }
  problemLifecycleStages() { return PROBLEM_LIFECYCLE; }
  problemPriorityFactors() { return Object.freeze(Object.values(PROBLEM_PRIORITY_FACTORS)); }
  rootCauseAnalysisDimensions() { return Object.freeze(Object.values(ROOT_CAUSE_ANALYSIS_DIMENSIONS)); }
  contributingConditionTypes() { return Object.freeze(Object.values(CONTRIBUTING_CONDITION_TYPES)); }
  knownErrorFields() { return Object.freeze(Object.values(KNOWN_ERROR_FIELDS)); }
  remediationTypes() { return Object.freeze(Object.values(PROBLEM_REMEDIATION_TYPES)); }
  remediationVerificationCriteria() { return Object.freeze(Object.values(REMEDIATION_VERIFICATION_CRITERIA)); }
  postIncidentReviewAreas() { return Object.freeze(Object.values(POST_INCIDENT_REVIEW_AREAS)); }
  reviewCultureAttributes() { return Object.freeze(Object.values(POST_INCIDENT_REVIEW_CULTURE_ATTRIBUTES)); }
  recurringIncidentTriggers() { return Object.freeze(Object.values(RECURRING_INCIDENT_TRIGGERS)); }
  multiTenantIncidentRequirements() { return Object.freeze(Object.values(MULTI_TENANT_INCIDENT_REQUIREMENTS)); }
  propertyIncidentContext() { return Object.freeze(Object.values(PROPERTY_INCIDENT_CONTEXT)); }
  externalProviderProblemRequirements() { return Object.freeze(Object.values(EXTERNAL_PROVIDER_PROBLEM_REQUIREMENTS)); }
  incidentMeasures() { return Object.freeze(Object.values(INCIDENT_MEASURES)); }
  problemMeasures() { return Object.freeze(Object.values(PROBLEM_MEASURES)); }
  governanceAreas() { return Object.freeze(Object.values(INCIDENT_PROBLEM_GOVERNANCE_AREAS)); }
  qualityAttributes() { return Object.freeze(Object.values(INCIDENT_PROBLEM_QUALITY_ATTRIBUTES)); }
  architecturalRules() { return Object.freeze(Object.values(INCIDENT_PROBLEM_ARCHITECTURAL_RULES)); }
  futureCapabilities() { return Object.freeze(Object.values(FUTURE_INCIDENT_PROBLEM_CAPABILITIES)); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof IncidentProblemManagementProfile
      ? profileInput
      : new IncidentProblemManagementProfile(profileInput);
    const errors = [];

    if (!profile.managementName) errors.push('Incident and problem management profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Incident and problem management objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'Incident and problem management principles must include');
    appendMissing(errors, profile.incidentExamples, this.incidentExamples(), 'Incident examples must include');
    appendMissing(errors, profile.problemExamples, this.problemExamples(), 'Problem examples must include');
    appendMissing(errors, profile.detectionSources, this.detectionSources(), 'Incident detection sources must include');
    appendMissing(errors, profile.incidentRecordFields, this.incidentRecordFields(), 'Incident records should include');
    appendMissing(errors, profile.classificationDimensions, this.classificationDimensions(), 'Incident classification dimensions should include');
    appendMissing(errors, profile.impactDimensions, this.impactDimensions(), 'Incident impact must evaluate');
    appendMissing(errors, profile.urgencyFactors, this.urgencyFactors(), 'Incident urgency may be influenced by');
    appendMissing(errors, profile.priorityUses, this.priorityUses(), 'Incident priority determines');
    appendMissing(errors, profile.incidentLifecycleStages, this.incidentLifecycleStages(), 'Incident lifecycle must include');
    appendMissing(errors, profile.incidentStates, this.incidentStates(), 'Incident states should include');
    appendMissing(errors, profile.incidentRoles, this.incidentRoles(), 'Incident roles must include');
    appendMissing(errors, profile.diagnosisActivities, this.diagnosisActivities(), 'Diagnosis should');
    appendMissing(errors, profile.containmentOptions, this.containmentOptions(), 'Containment options may include');
    appendMissing(errors, profile.workaroundFields, this.workaroundFields(), 'Workarounds must define');
    appendMissing(errors, profile.restorationOptions, this.restorationOptions(), 'Restoration may use');
    appendMissing(errors, profile.recoveryVerificationDimensions, this.recoveryVerificationDimensions(), 'Recovery verification may include');
    appendMissing(errors, profile.observationChecks, this.observationChecks(), 'Observation should confirm');
    appendMissing(errors, profile.majorIncidentRequirements, this.majorIncidentRequirements(), 'Major incidents require');
    appendMissing(errors, profile.crisisTransitionCriteria, this.crisisTransitionCriteria(), 'Crisis and continuity transition may occur when');
    appendMissing(errors, profile.communicationFields, this.communicationFields(), 'Incident communication should state');
    appendMissing(errors, profile.tenantPropertyCommunicationFields, this.tenantPropertyCommunicationFields(), 'Tenant and property communication should reflect');
    appendMissing(errors, profile.evidenceTypes, this.evidenceTypes(), 'Incident evidence may include');
    appendMissing(errors, profile.securityIncidentRequirements, this.securityIncidentRequirements(), 'Security incidents require');
    appendMissing(errors, profile.dataIncidentTypes, this.dataIncidentTypes(), 'Data incidents may involve');
    appendMissing(errors, profile.aiIncidentTypes, this.aiIncidentTypes(), 'AI incidents may involve');
    appendMissing(errors, profile.aiIncidentControls, this.aiIncidentControls(), 'AI incident controls may include');
    appendMissing(errors, profile.workflowIncidentTypes, this.workflowIncidentTypes(), 'Workflow incidents may involve');
    appendMissing(errors, profile.integrationIncidentTypes, this.integrationIncidentTypes(), 'Integration incidents may involve');
    appendMissing(errors, profile.problemIdentificationSources, this.problemIdentificationSources(), 'Problems may be identified through');
    appendMissing(errors, profile.problemRecordFields, this.problemRecordFields(), 'Problem records should include');
    appendMissing(errors, profile.problemLifecycleStages, this.problemLifecycleStages(), 'Problem lifecycle must include');
    appendMissing(errors, profile.problemPriorityFactors, this.problemPriorityFactors(), 'Problem priority should consider');
    appendMissing(errors, profile.rootCauseAnalysisDimensions, this.rootCauseAnalysisDimensions(), 'Root-cause analysis should consider');
    appendMissing(errors, profile.contributingConditionTypes, this.contributingConditionTypes(), 'Contributing conditions may include');
    appendMissing(errors, profile.knownErrorFields, this.knownErrorFields(), 'Known-error information should include');
    appendMissing(errors, profile.remediationTypes, this.remediationTypes(), 'Remediation may include');
    appendMissing(errors, profile.remediationVerificationCriteria, this.remediationVerificationCriteria(), 'Remediation verification should confirm');
    appendMissing(errors, profile.postIncidentReviewAreas, this.postIncidentReviewAreas(), 'Post-incident review should evaluate');
    appendMissing(errors, profile.reviewCultureAttributes, this.reviewCultureAttributes(), 'Post-incident review should be');
    appendMissing(errors, profile.recurringIncidentTriggers, this.recurringIncidentTriggers(), 'Recurring incidents should trigger');
    appendMissing(errors, profile.multiTenantIncidentRequirements, this.multiTenantIncidentRequirements(), 'Multi-tenant incidents require');
    appendMissing(errors, profile.propertyIncidentContext, this.propertyIncidentContext(), 'Property incidents require local context including');
    appendMissing(errors, profile.externalProviderProblemRequirements, this.externalProviderProblemRequirements(), 'External provider problems require');
    appendMissing(errors, profile.incidentMeasures, this.incidentMeasures(), 'Incident measures may include');
    appendMissing(errors, profile.problemMeasures, this.problemMeasures(), 'Problem measures may include');
    appendMissing(errors, profile.governanceAreas, this.governanceAreas(), 'Incident and problem management governance covers');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Incident and problem management quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Incident and problem management architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future incident and problem capabilities may include');
    if (profile.restoresBusinessOutcomesFirst !== true) errors.push('Incident response must restore business, guest, tenant, and property outcomes first.');
    if (profile.separatesRestorationFromRootCause !== true) errors.push('Incident restoration must be separate from problem prevention.');
    if (profile.accountableIncidentOwnerRequired !== true) errors.push('Every incident must have an accountable owner.');
    if (profile.evidenceDistinguishesFactsHypothesesActions !== true) errors.push('Facts, hypotheses, decisions, actions, and outcomes must remain distinguishable.');
    if (profile.containmentBeforeExpansion !== true) errors.push('Response must contain expanding impact before broad recovery.');
    if (profile.contextualCommunicationRequired !== true) errors.push('Incident communication must provide business context, action, risk, and next updates.');
    if (profile.blamelessLearningEnabled !== true) errors.push('Learning must avoid individual blame as a systemic explanation.');
    if (profile.remediationOwned !== true) errors.push('Remediation must have accountable owners, priorities, and completion criteria.');
    if (profile.priorityUsesImpactUrgencyRisk !== true) errors.push('Incident priority must combine impact, urgency, and risk.');
    if (profile.recoveryVerifiedEndToEnd !== true) errors.push('Recovery must be verified end to end.');
    if (profile.workaroundsGovernedTemporary !== true) errors.push('Workarounds must not become undocumented permanent architecture.');
    if (profile.majorIncidentsUseCommandStructures !== true) errors.push('Major incidents require command structures under ARCH-011-03.');
    if (profile.securityAuthorityPreserved !== true) errors.push('Security incident authority remains governed by ARCH-008.');
    if (profile.tenantPropertyDataSecurityBoundariesProtected !== true) errors.push('Tenant, property, data, and security boundaries must be protected.');
    if (profile.problemsIdentifiedProactivelyAndReactively !== true) errors.push('Problems must be identified proactively and reactively.');
    if (profile.systemicContributorsPreserved !== true) errors.push('Problem management must preserve multiple contributing conditions.');
    if (profile.knownErrorsGoverned !== true) errors.push('Known errors must remain governed and reviewed.');
    if (profile.remediationThroughControlledChange !== true) errors.push('Remediation must follow controlled change.');
    if (profile.riskReductionVerifiedBeforeClosure !== true) errors.push('Problem closure requires verified risk reduction.');
    if (profile.improvementActionsTracked !== true) errors.push('Improvement actions must be tracked to completion.');
    if (profile.humanAuthorityPreserved !== true) errors.push('Future evolution must preserve human authority.');
    if (profile.technologyIndependent !== true) errors.push('Incident and Problem Management must remain technology independent.');
    if (profile.vendorNeutral !== true) errors.push('Incident and Problem Management must remain vendor neutral.');
    if (profile.ticketingProductSpecific === true) errors.push('Ticketing products are outside ARCH-011-05 scope.');
    if (profile.serviceManagementFrameworkSpecific === true) errors.push('Service-management frameworks are outside ARCH-011-05 scope.');
    if (profile.securityProceduresReplaced === true) errors.push('Security incident procedures remain governed by ARCH-008.');
    if (profile.commandStructureRedefined === true) errors.push('Command structures remain defined in ARCH-011-03.');
    if (profile.technicalRecoverySufficient === true) errors.push('Technical recovery alone is insufficient.');
    if (profile.unsupportedConclusionsAllowed === true) errors.push('Response urgency must not justify unsupported conclusions.');
    if (profile.undocumentedPermanentWorkaround === true) errors.push('Undocumented permanent workarounds are prohibited.');
    if (profile.simplisticSingleCauseRequired === true) errors.push('Problem management must not force simplistic single-cause explanations.');
    if (profile.supplierResponsibilityEliminatesXeniosAccountability === true) errors.push('Supplier responsibility does not eliminate XeniosAI accountability.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    const expected = [
      ['objectives', this.objectives(), 14],
      ['principles', this.principles(), 8],
      ['incident examples', this.incidentExamples(), 14],
      ['problem examples', this.problemExamples(), 14],
      ['detection sources', this.detectionSources(), 15],
      ['incident record fields', this.incidentRecordFields(), 29],
      ['classification dimensions', this.classificationDimensions(), 14],
      ['impact dimensions', this.impactDimensions(), 16],
      ['urgency factors', this.urgencyFactors(), 11],
      ['priority uses', this.priorityUses(), 7],
      ['incident lifecycle stages', this.incidentLifecycleStages(), 11],
      ['incident states', this.incidentStates(), 12],
      ['incident roles', this.incidentRoles(), 9],
      ['diagnosis activities', this.diagnosisActivities(), 12],
      ['containment options', this.containmentOptions(), 12],
      ['workaround fields', this.workaroundFields(), 13],
      ['restoration options', this.restorationOptions(), 14],
      ['recovery verification dimensions', this.recoveryVerificationDimensions(), 13],
      ['observation checks', this.observationChecks(), 10],
      ['major incident requirements', this.majorIncidentRequirements(), 11],
      ['crisis transition criteria', this.crisisTransitionCriteria(), 6],
      ['communication fields', this.communicationFields(), 9],
      ['tenant property communication fields', this.tenantPropertyCommunicationFields(), 8],
      ['evidence types', this.evidenceTypes(), 14],
      ['security incident requirements', this.securityIncidentRequirements(), 7],
      ['data incident types', this.dataIncidentTypes(), 10],
      ['AI incident types', this.aiIncidentTypes(), 11],
      ['AI incident controls', this.aiIncidentControls(), 8],
      ['workflow incident types', this.workflowIncidentTypes(), 9],
      ['integration incident types', this.integrationIncidentTypes(), 10],
      ['problem identification sources', this.problemIdentificationSources(), 15],
      ['problem record fields', this.problemRecordFields(), 21],
      ['problem lifecycle stages', this.problemLifecycleStages(), 10],
      ['problem priority factors', this.problemPriorityFactors(), 12],
      ['root cause analysis dimensions', this.rootCauseAnalysisDimensions(), 18],
      ['contributing condition types', this.contributingConditionTypes(), 11],
      ['known error fields', this.knownErrorFields(), 11],
      ['remediation types', this.remediationTypes(), 16],
      ['remediation verification criteria', this.remediationVerificationCriteria(), 8],
      ['post incident review areas', this.postIncidentReviewAreas(), 20],
      ['review culture attributes', this.reviewCultureAttributes(), 8],
      ['recurring incident triggers', this.recurringIncidentTriggers(), 9],
      ['multi-tenant incident requirements', this.multiTenantIncidentRequirements(), 8],
      ['property incident context', this.propertyIncidentContext(), 10],
      ['external provider problem requirements', this.externalProviderProblemRequirements(), 9],
      ['incident measures', this.incidentMeasures(), 15],
      ['problem measures', this.problemMeasures(), 10],
      ['governance areas', this.governanceAreas(), 14],
      ['quality attributes', this.qualityAttributes(), 12],
      ['architectural rules', this.architecturalRules(), 20],
      ['future capabilities', this.futureCapabilities(), 12]
    ];

    for (const [name, actual, count] of expected) {
      if (actual.length !== count) errors.push(`Incident and Problem Management must include documented ${name}.`);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.INCIDENT_PROBLEM_MANAGEMENT_INVALID,
        'Incident and Problem Management violates ARCH-011-05.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new EnterpriseOperationsValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
