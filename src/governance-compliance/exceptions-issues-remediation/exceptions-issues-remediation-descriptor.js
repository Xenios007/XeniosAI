import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  CLOSURE_AUTHORITY_FACTORS,
  COMPENSATING_CONTROL_REQUIREMENTS,
  CONTRIBUTING_FACTORS,
  CORRECTIVE_ACTION_TYPES,
  DOMAIN_ISSUE_AREAS,
  EMERGENCY_EXCEPTION_FIELDS,
  EXCEPTION_AUTHORITY_FACTORS,
  EXCEPTION_CLOSURE_CONDITIONS,
  EXCEPTION_ELIGIBILITY_REASONS,
  EXCEPTION_EXTENSION_FACTORS,
  EXCEPTION_LIFECYCLE_STAGES,
  EXCEPTION_RECORD_FIELDS,
  EXCEPTION_REVOCATION_TRIGGERS,
  EXCEPTION_SCOPE_DIMENSIONS,
  EXCEPTION_STATES,
  EXCEPTIONS_ISSUES_REMEDIATION_ARCHITECTURAL_RULES,
  EXCEPTIONS_ISSUES_REMEDIATION_GOVERNANCE_AREAS,
  EXCEPTIONS_ISSUES_REMEDIATION_MEASURES,
  EXCEPTIONS_ISSUES_REMEDIATION_OBJECTIVES,
  EXCEPTIONS_ISSUES_REMEDIATION_PRINCIPLES,
  EXCEPTIONS_ISSUES_REMEDIATION_QUALITY_ATTRIBUTES,
  FINDING_FIELDS,
  FUTURE_EXCEPTIONS_ISSUES_REMEDIATION_CAPABILITIES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  IMMEDIATE_CONTAINMENT_ACTIONS,
  INTERIM_CONTROL_FIELDS,
  ISSUE_CLASSIFICATIONS,
  ISSUE_CLOSURE_REQUIREMENTS,
  ISSUE_LIFECYCLE_STAGES,
  ISSUE_MANAGEMENT_RESPONSE_FIELDS,
  ISSUE_PRIORITY_FACTORS,
  ISSUE_RECORD_FIELDS,
  ISSUE_REPORT_FIELDS,
  ISSUE_SEVERITY_LEVELS,
  ISSUE_SOURCES,
  ISSUE_STATES,
  ISSUE_TYPES,
  OVERDUE_REMEDIATION_REQUIREMENTS,
  PREVENTIVE_ACTION_TYPES,
  RECURRING_ISSUE_RESPONSE_ACTIONS,
  REMEDIATION_CHANGE_CONTROL_FACTORS,
  REMEDIATION_DEADLINE_FACTORS,
  REMEDIATION_EVIDENCE_TYPES,
  REMEDIATION_OWNERSHIP_FIELDS,
  REMEDIATION_PLAN_FIELDS,
  REMEDIATION_VALIDATION_CRITERIA,
  REOPENING_TRIGGERS,
  RETEST_FIELDS,
  RISK_ACCEPTANCE_REQUIREMENTS,
  ROOT_CAUSE_ANALYSIS_AREAS,
  SYSTEMIC_ISSUE_SCOPES,
  UNAUTHORIZED_CONDITION_ACTIONS
} from '../constants.js';
import { ExceptionsIssuesRemediationProfile } from '../contracts/exceptions-issues-remediation-profile.js';
import { GovernanceComplianceValidationResult } from '../contracts/governance-compliance-validation-result.js';

export class ExceptionsIssuesRemediationDescriptor {
  objectives() { return values(EXCEPTIONS_ISSUES_REMEDIATION_OBJECTIVES); }
  principles() { return values(EXCEPTIONS_ISSUES_REMEDIATION_PRINCIPLES); }
  exceptionEligibilityReasons() { return values(EXCEPTION_ELIGIBILITY_REASONS); }
  exceptionScopeDimensions() { return values(EXCEPTION_SCOPE_DIMENSIONS); }
  exceptionRecordFields() { return values(EXCEPTION_RECORD_FIELDS); }
  exceptionLifecycleStages() { return values(EXCEPTION_LIFECYCLE_STAGES); }
  exceptionStates() { return values(EXCEPTION_STATES); }
  exceptionAuthorityFactors() { return values(EXCEPTION_AUTHORITY_FACTORS); }
  compensatingControlRequirements() { return values(COMPENSATING_CONTROL_REQUIREMENTS); }
  emergencyExceptionFields() { return values(EMERGENCY_EXCEPTION_FIELDS); }
  exceptionExtensionFactors() { return values(EXCEPTION_EXTENSION_FACTORS); }
  exceptionRevocationTriggers() { return values(EXCEPTION_REVOCATION_TRIGGERS); }
  exceptionClosureConditions() { return values(EXCEPTION_CLOSURE_CONDITIONS); }
  issueTypes() { return values(ISSUE_TYPES); }
  findingFields() { return values(FINDING_FIELDS); }
  issueSources() { return values(ISSUE_SOURCES); }
  issueRecordFields() { return values(ISSUE_RECORD_FIELDS); }
  issueClassifications() { return values(ISSUE_CLASSIFICATIONS); }
  issuePriorityFactors() { return values(ISSUE_PRIORITY_FACTORS); }
  severityLevels() { return values(ISSUE_SEVERITY_LEVELS); }
  issueLifecycleStages() { return values(ISSUE_LIFECYCLE_STAGES); }
  issueStates() { return values(ISSUE_STATES); }
  containmentActions() { return values(IMMEDIATE_CONTAINMENT_ACTIONS); }
  rootCauseAnalysisAreas() { return values(ROOT_CAUSE_ANALYSIS_AREAS); }
  contributingFactors() { return values(CONTRIBUTING_FACTORS); }
  correctiveActionTypes() { return values(CORRECTIVE_ACTION_TYPES); }
  preventiveActionTypes() { return values(PREVENTIVE_ACTION_TYPES); }
  remediationPlanFields() { return values(REMEDIATION_PLAN_FIELDS); }
  remediationOwnershipFields() { return values(REMEDIATION_OWNERSHIP_FIELDS); }
  changeControlFactors() { return values(REMEDIATION_CHANGE_CONTROL_FACTORS); }
  interimControlFields() { return values(INTERIM_CONTROL_FIELDS); }
  deadlineFactors() { return values(REMEDIATION_DEADLINE_FACTORS); }
  overdueRequirements() { return values(OVERDUE_REMEDIATION_REQUIREMENTS); }
  validationCriteria() { return values(REMEDIATION_VALIDATION_CRITERIA); }
  retestFields() { return values(RETEST_FIELDS); }
  closureRequirements() { return values(ISSUE_CLOSURE_REQUIREMENTS); }
  closureAuthorityFactors() { return values(CLOSURE_AUTHORITY_FACTORS); }
  riskAcceptanceRequirements() { return values(RISK_ACCEPTANCE_REQUIREMENTS); }
  reopeningTriggers() { return values(REOPENING_TRIGGERS); }
  recurringIssueResponseActions() { return values(RECURRING_ISSUE_RESPONSE_ACTIONS); }
  systemicIssueScopes() { return values(SYSTEMIC_ISSUE_SCOPES); }
  unauthorizedConditionActions() { return values(UNAUTHORIZED_CONDITION_ACTIONS); }
  domainIssueAreas() { return values(DOMAIN_ISSUE_AREAS); }
  remediationEvidenceTypes() { return values(REMEDIATION_EVIDENCE_TYPES); }
  managementResponseFields() { return values(ISSUE_MANAGEMENT_RESPONSE_FIELDS); }
  issueReportFields() { return values(ISSUE_REPORT_FIELDS); }
  measures() { return values(EXCEPTIONS_ISSUES_REMEDIATION_MEASURES); }
  governanceAreas() { return values(EXCEPTIONS_ISSUES_REMEDIATION_GOVERNANCE_AREAS); }
  qualityAttributes() { return values(EXCEPTIONS_ISSUES_REMEDIATION_QUALITY_ATTRIBUTES); }
  architecturalRules() { return values(EXCEPTIONS_ISSUES_REMEDIATION_ARCHITECTURAL_RULES); }
  futureCapabilities() { return values(FUTURE_EXCEPTIONS_ISSUES_REMEDIATION_CAPABILITIES); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof ExceptionsIssuesRemediationProfile
      ? profileInput
      : new ExceptionsIssuesRemediationProfile(profileInput);
    const errors = [];

    if (!profile.remediationName) errors.push('Exceptions, Issues, and Remediation profile must have a name.');
    for (const [field, getter, message] of validationMappings(this)) {
      appendMissing(errors, profile[field], getter(), message);
    }
    if (profile.exceptionsTemporary !== true) errors.push('Exceptions must be temporary, visible, and time bounded.');
    if (profile.exceptionRequiresAuthority !== true) errors.push('Exceptions require explicit authority over the affected requirement and residual risk.');
    if (profile.bindingObligationsRequireQualifiedAuthority !== true) errors.push('Internal exceptions cannot override binding obligations without qualified authority.');
    if (profile.oneIssueOwnerRequired !== true) errors.push('Every material issue must have one accountable owner.');
    if (profile.containBeforeCorrecting !== true) errors.push('Immediate harm must be contained before long-term remediation.');
    if (profile.rootCauseRequired !== true) errors.push('Remediation must address causes and contributing factors where proportionate.');
    if (profile.closureRequiresEvidence !== true) errors.push('Closure requires verified evidence of outcome and control effectiveness.');
    if (profile.overdueIsRiskDecision !== true) errors.push('Overdue remediation is a risk decision requiring escalation and authorized disposition.');
    if (profile.recurrenceRequiresSystemicReview !== true) errors.push('Recurring issues require systemic review and governance escalation.');
    if (profile.compensatingControlsRequired !== true) errors.push('Exceptions require compensating controls and monitoring.');
    if (profile.expiredExceptionInvalid !== true) errors.push('Expired exceptions must not remain treated as valid.');
    if (profile.remediationThroughControlledChange !== true) errors.push('Production remediation must be governed through controlled change.');
    if (profile.closureAuthoritySeparatedWhenRequired !== true) errors.push('Remediation execution must be separated from closure authority when risk requires it.');
    if (profile.historyPreservedOnReopen !== true) errors.push('Reopened issues must preserve original history.');
    if (profile.retrospectiveApprovalNotConcealment !== true) errors.push('Retrospective approval must not conceal unauthorized activity.');
    if (profile.vendorNeutral !== true) errors.push('Exceptions, Issues, and Remediation must remain vendor neutral.');
    if (profile.technologyIndependent !== true) errors.push('Exceptions, Issues, and Remediation must remain technology independent.');
    if (profile.prescribesCaseManagementTool === true) errors.push('Exceptions, Issues, and Remediation does not prescribe a case-management tool.');
    if (profile.prescribesAuditPlatform === true) errors.push('Exceptions, Issues, and Remediation does not prescribe an audit platform.');
    if (profile.prescribesTicketingSystem === true) errors.push('Exceptions, Issues, and Remediation does not prescribe a ticketing system.');
    if (profile.prescribesRiskProduct === true) errors.push('Exceptions, Issues, and Remediation does not prescribe a risk product.');
    if (profile.prescribesRegulatoryFramework === true) errors.push('Exceptions, Issues, and Remediation does not prescribe a regulatory framework.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    const counts = {
      objectives: 17,
      principles: 9,
      exceptionEligibilityReasons: 9,
      exceptionScopeDimensions: 16,
      exceptionRecordFields: 25,
      exceptionLifecycleStages: 9,
      exceptionStates: 12,
      exceptionAuthorityFactors: 13,
      compensatingControlRequirements: 9,
      emergencyExceptionFields: 12,
      exceptionExtensionFactors: 13,
      exceptionRevocationTriggers: 10,
      exceptionClosureConditions: 6,
      issueTypes: 18,
      findingFields: 7,
      issueSources: 21,
      issueRecordFields: 31,
      issueClassifications: 20,
      issuePriorityFactors: 19,
      severityLevels: 4,
      issueLifecycleStages: 11,
      issueStates: 16,
      containmentActions: 13,
      rootCauseAnalysisAreas: 23,
      contributingFactors: 16,
      correctiveActionTypes: 12,
      preventiveActionTypes: 13,
      remediationPlanFields: 19,
      remediationOwnershipFields: 9,
      changeControlFactors: 13,
      interimControlFields: 10,
      deadlineFactors: 11,
      overdueRequirements: 8,
      validationCriteria: 10,
      retestFields: 10,
      closureRequirements: 10,
      closureAuthorityFactors: 10,
      riskAcceptanceRequirements: 8,
      reopeningTriggers: 8,
      recurringIssueResponseActions: 10,
      systemicIssueScopes: 10,
      unauthorizedConditionActions: 8,
      domainIssueAreas: 8,
      remediationEvidenceTypes: 15,
      managementResponseFields: 11,
      issueReportFields: 14,
      measures: 19,
      governanceAreas: 18,
      qualityAttributes: 12,
      architecturalRules: 20,
      futureCapabilities: 13
    };

    for (const [field, expected] of Object.entries(counts)) {
      assertLength(errors, this[field](), expected, field);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        GOVERNANCE_COMPLIANCE_ERROR_CODES.EXCEPTIONS_ISSUES_REMEDIATION_INVALID,
        'Exceptions, Issues, and Remediation violates ARCH-012-09.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function validationMappings(descriptor) {
  return [
    ['objectives', () => descriptor.objectives(), 'Exceptions, Issues, and Remediation objectives must include'],
    ['principles', () => descriptor.principles(), 'Exceptions, Issues, and Remediation principles must include'],
    ['exceptionEligibilityReasons', () => descriptor.exceptionEligibilityReasons(), 'Exception eligibility must include'],
    ['exceptionScopeDimensions', () => descriptor.exceptionScopeDimensions(), 'Exception scope dimensions must include'],
    ['exceptionRecordFields', () => descriptor.exceptionRecordFields(), 'Exception records must include'],
    ['exceptionLifecycleStages', () => descriptor.exceptionLifecycleStages(), 'Exception lifecycle must include'],
    ['exceptionStates', () => descriptor.exceptionStates(), 'Exception states must include'],
    ['exceptionAuthorityFactors', () => descriptor.exceptionAuthorityFactors(), 'Exception authority must reflect'],
    ['compensatingControlRequirements', () => descriptor.compensatingControlRequirements(), 'Compensating controls must'],
    ['emergencyExceptionFields', () => descriptor.emergencyExceptionFields(), 'Emergency exceptions must define'],
    ['exceptionExtensionFactors', () => descriptor.exceptionExtensionFactors(), 'Exception extension evaluation must consider'],
    ['exceptionRevocationTriggers', () => descriptor.exceptionRevocationTriggers(), 'Exception revocation triggers must include'],
    ['exceptionClosureConditions', () => descriptor.exceptionClosureConditions(), 'Exception closure conditions must include'],
    ['issueTypes', () => descriptor.issueTypes(), 'Issue types must include'],
    ['findingFields', () => descriptor.findingFields(), 'Findings must distinguish'],
    ['issueSources', () => descriptor.issueSources(), 'Issue sources must include'],
    ['issueRecordFields', () => descriptor.issueRecordFields(), 'Issue records must include'],
    ['issueClassifications', () => descriptor.issueClassifications(), 'Issue classifications must include'],
    ['issuePriorityFactors', () => descriptor.issuePriorityFactors(), 'Issue priority must consider'],
    ['severityLevels', () => descriptor.severityLevels(), 'Severity levels must include'],
    ['issueLifecycleStages', () => descriptor.issueLifecycleStages(), 'Issue lifecycle must include'],
    ['issueStates', () => descriptor.issueStates(), 'Issue states must include'],
    ['containmentActions', () => descriptor.containmentActions(), 'Immediate containment may include'],
    ['rootCauseAnalysisAreas', () => descriptor.rootCauseAnalysisAreas(), 'Root-cause analysis must examine'],
    ['contributingFactors', () => descriptor.contributingFactors(), 'Contributing factors must include'],
    ['correctiveActionTypes', () => descriptor.correctiveActionTypes(), 'Corrective actions must include'],
    ['preventiveActionTypes', () => descriptor.preventiveActionTypes(), 'Preventive actions must include'],
    ['remediationPlanFields', () => descriptor.remediationPlanFields(), 'Remediation plans must define'],
    ['remediationOwnershipFields', () => descriptor.remediationOwnershipFields(), 'Remediation ownership must cover'],
    ['changeControlFactors', () => descriptor.changeControlFactors(), 'Remediation change control must consider'],
    ['interimControlFields', () => descriptor.interimControlFields(), 'Interim controls must define'],
    ['deadlineFactors', () => descriptor.deadlineFactors(), 'Remediation deadlines must reflect'],
    ['overdueRequirements', () => descriptor.overdueRequirements(), 'Overdue remediation must require'],
    ['validationCriteria', () => descriptor.validationCriteria(), 'Remediation validation must determine'],
    ['retestFields', () => descriptor.retestFields(), 'Retesting must define'],
    ['closureRequirements', () => descriptor.closureRequirements(), 'Issue closure must require'],
    ['closureAuthorityFactors', () => descriptor.closureAuthorityFactors(), 'Closure authority must reflect'],
    ['riskAcceptanceRequirements', () => descriptor.riskAcceptanceRequirements(), 'Risk acceptance must require'],
    ['reopeningTriggers', () => descriptor.reopeningTriggers(), 'Reopening triggers must include'],
    ['recurringIssueResponseActions', () => descriptor.recurringIssueResponseActions(), 'Recurring issue response must include'],
    ['systemicIssueScopes', () => descriptor.systemicIssueScopes(), 'Systemic issue scopes must include'],
    ['unauthorizedConditionActions', () => descriptor.unauthorizedConditionActions(), 'Unauthorized condition actions must include'],
    ['domainIssueAreas', () => descriptor.domainIssueAreas(), 'Domain issue areas must include'],
    ['remediationEvidenceTypes', () => descriptor.remediationEvidenceTypes(), 'Remediation evidence must include'],
    ['managementResponseFields', () => descriptor.managementResponseFields(), 'Management response must include'],
    ['issueReportFields', () => descriptor.issueReportFields(), 'Issue reporting must provide'],
    ['measures', () => descriptor.measures(), 'Exceptions, Issues, and Remediation measures must include'],
    ['governanceAreas', () => descriptor.governanceAreas(), 'Exceptions, Issues, and Remediation governance must cover'],
    ['qualityAttributes', () => descriptor.qualityAttributes(), 'Exceptions, Issues, and Remediation quality attributes must include'],
    ['architecturalRules', () => descriptor.architecturalRules(), 'Exceptions, Issues, and Remediation architectural rules must include'],
    ['futureCapabilities', () => descriptor.futureCapabilities(), 'Future Exceptions, Issues, and Remediation capabilities must include']
  ];
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function assertLength(errors, actual, expected, label) {
  if (actual.length !== expected) errors.push(`Exceptions, Issues, and Remediation must include documented ${label}.`);
}

function validation(errors) {
  return new GovernanceComplianceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
