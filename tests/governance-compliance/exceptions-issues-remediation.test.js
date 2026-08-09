import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  COMPENSATING_CONTROL_REQUIREMENTS,
  EXCEPTION_RECORD_FIELDS,
  EXCEPTION_STATES,
  EXCEPTIONS_ISSUES_REMEDIATION_ARCHITECTURAL_RULES,
  EXCEPTIONS_ISSUES_REMEDIATION_OBJECTIVES,
  EXCEPTIONS_ISSUES_REMEDIATION_PRINCIPLES,
  ExceptionsIssuesRemediationDescriptor,
  ExceptionsIssuesRemediationProfile,
  FUTURE_EXCEPTIONS_ISSUES_REMEDIATION_CAPABILITIES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  ISSUE_RECORD_FIELDS,
  ISSUE_SEVERITY_LEVELS,
  addGovernanceCompliance
} from '../../src/governance-compliance/index.js';

test('exceptions issues remediation exposes documented objectives, principles, exception eligibility, scope, records, lifecycle, authority, and controls', () => {
  const descriptor = new ExceptionsIssuesRemediationDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(EXCEPTIONS_ISSUES_REMEDIATION_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(EXCEPTIONS_ISSUES_REMEDIATION_PRINCIPLES));
  assert.ok(descriptor.exceptionEligibilityReasons().includes('architecture-evolution-controlled-transition'));
  assert.ok(descriptor.exceptionScopeDimensions().includes('transaction-class'));
  assert.ok(descriptor.exceptionRecordFields().includes(EXCEPTION_RECORD_FIELDS.CLOSURE_EVIDENCE));
  assert.ok(descriptor.exceptionLifecycleStages().includes('Expire, Revoke, Extend, or Close'));
  assert.ok(descriptor.exceptionStates().includes(EXCEPTION_STATES.EXTENSION_REQUESTED));
  assert.ok(descriptor.exceptionAuthorityFactors().includes('cross-enterprise-effect'));
  assert.ok(descriptor.compensatingControlRequirements().includes(COMPENSATING_CONTROL_REQUIREMENTS.RETIRED_WHEN_NO_LONGER_NEEDED));
});

test('exceptions issues remediation exposes issue classification, containment, root cause, corrective, preventive, plan, change, deadline, and closure metadata', () => {
  const descriptor = new ExceptionsIssuesRemediationDescriptor();

  assert.ok(descriptor.issueTypes().includes('unauthorized-exception'));
  assert.ok(descriptor.findingFields().includes('recommendation-or-required-outcome'));
  assert.ok(descriptor.issueSources().includes('architecture-review'));
  assert.ok(descriptor.issueRecordFields().includes(ISSUE_RECORD_FIELDS.HISTORY));
  assert.ok(descriptor.issueClassifications().includes('assurance'));
  assert.ok(descriptor.issuePriorityFactors().includes('supplier-concentration'));
  assert.deepEqual(descriptor.severityLevels(), Object.values(ISSUE_SEVERITY_LEVELS));
  assert.ok(descriptor.issueLifecycleStages().includes('Monitor Recurrence and Learn'));
  assert.ok(descriptor.issueStates().includes('not-substantiated'));
  assert.ok(descriptor.containmentActions().includes('suspend-ai-agent'));
  assert.ok(descriptor.rootCauseAnalysisAreas().includes('tenant-configuration'));
  assert.ok(descriptor.contributingFactors().includes('unmanaged-technical-debt'));
  assert.ok(descriptor.preventiveActionTypes().includes('broader-impact-analysis'));
  assert.ok(descriptor.closureRequirements().includes('closure-authority-approval'));
});

test('exceptions issues remediation exposes risk acceptance, reopening, systemic, domain, evidence, reporting, measures, rules, and future metadata', () => {
  const descriptor = new ExceptionsIssuesRemediationDescriptor();

  assert.ok(descriptor.riskAcceptanceRequirements().includes('reassessment-triggers-defined'));
  assert.ok(descriptor.reopeningTriggers().includes('closure-conditions-not-met'));
  assert.ok(descriptor.recurringIssueResponseActions().includes('governance-escalation'));
  assert.ok(descriptor.systemicIssueScopes().includes('business-capabilities'));
  assert.ok(descriptor.unauthorizedConditionActions().includes('evaluate-misconduct-or-control-failure'));
  assert.ok(descriptor.domainIssueAreas().includes('evidence-issues'));
  assert.ok(descriptor.remediationEvidenceTypes().includes('independent-assurance'));
  assert.ok(descriptor.managementResponseFields().includes('acceptance-proposal-if-applicable'));
  assert.ok(descriptor.issueReportFields().includes('closure-status'));
  assert.ok(descriptor.measures().includes('systemic-remediation-progress'));
  assert.ok(descriptor.governanceAreas().includes('recurrence'));
  assert.ok(descriptor.architecturalRules().includes(EXCEPTIONS_ISSUES_REMEDIATION_ARCHITECTURAL_RULES.PREVENT_UNSUPPORTED_RETROSPECTIVE_APPROVAL));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_EXCEPTIONS_ISSUES_REMEDIATION_CAPABILITIES.REAL_TIME_RESIDUAL_RISK_UPDATES));
});

test('exceptions issues remediation validates complete profiles and rejects architecture violations', () => {
  const descriptor = new ExceptionsIssuesRemediationDescriptor();
  const valid = descriptor.validateProfile(completeProfile(descriptor));
  const invalid = descriptor.validateProfile({
    remediationName: '',
    ...partialProfile(descriptor),
    exceptionsTemporary: false,
    exceptionRequiresAuthority: false,
    bindingObligationsRequireQualifiedAuthority: false,
    oneIssueOwnerRequired: false,
    containBeforeCorrecting: false,
    rootCauseRequired: false,
    closureRequiresEvidence: false,
    overdueIsRiskDecision: false,
    recurrenceRequiresSystemicReview: false,
    compensatingControlsRequired: false,
    expiredExceptionInvalid: false,
    remediationThroughControlledChange: false,
    closureAuthoritySeparatedWhenRequired: false,
    historyPreservedOnReopen: false,
    retrospectiveApprovalNotConcealment: false,
    vendorNeutral: false,
    technologyIndependent: false,
    prescribesCaseManagementTool: true,
    prescribesAuditPlatform: true,
    prescribesTicketingSystem: true,
    prescribesRiskProduct: true,
    prescribesRegulatoryFramework: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /time-bounded-exceptions/);
  assert.match(invalid.errors.join('\n'), /legal-prohibitions-cannot-be-waived-internally/);
  assert.match(invalid.errors.join('\n'), /transaction-class/);
  assert.match(invalid.errors.join('\n'), /closure-evidence/);
  assert.match(invalid.errors.join('\n'), /unauthorized-exception/);
  assert.match(invalid.errors.join('\n'), /architecture-review/);
  assert.match(invalid.errors.join('\n'), /systemic-remediation-progress/);
  assert.match(invalid.errors.join('\n'), /temporary, visible, and time bounded/);
  assert.match(invalid.errors.join('\n'), /Closure requires verified evidence/);
  assert.match(invalid.errors.join('\n'), /Retrospective approval must not conceal/);
  assert.match(invalid.errors.join('\n'), /does not prescribe a case-management tool/);
});

test('exceptions issues remediation assertion rejects incomplete metadata', () => {
  class IncompleteExceptionsIssuesRemediationDescriptor extends ExceptionsIssuesRemediationDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteExceptionsIssuesRemediationDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === GOVERNANCE_COMPLIANCE_ERROR_CODES.EXCEPTIONS_ISSUES_REMEDIATION_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('exceptions issues remediation descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addGovernanceCompliance(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ExceptionsIssuesRemediationDescriptor');

  assert.ok(descriptor instanceof ExceptionsIssuesRemediationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  return new ExceptionsIssuesRemediationProfile({
    remediationName: 'Exceptions, Issues, and Remediation',
    objectives: descriptor.objectives(),
    principles: descriptor.principles(),
    exceptionEligibilityReasons: descriptor.exceptionEligibilityReasons(),
    exceptionScopeDimensions: descriptor.exceptionScopeDimensions(),
    exceptionRecordFields: descriptor.exceptionRecordFields(),
    exceptionLifecycleStages: descriptor.exceptionLifecycleStages(),
    exceptionStates: descriptor.exceptionStates(),
    exceptionAuthorityFactors: descriptor.exceptionAuthorityFactors(),
    compensatingControlRequirements: descriptor.compensatingControlRequirements(),
    emergencyExceptionFields: descriptor.emergencyExceptionFields(),
    exceptionExtensionFactors: descriptor.exceptionExtensionFactors(),
    exceptionRevocationTriggers: descriptor.exceptionRevocationTriggers(),
    exceptionClosureConditions: descriptor.exceptionClosureConditions(),
    issueTypes: descriptor.issueTypes(),
    findingFields: descriptor.findingFields(),
    issueSources: descriptor.issueSources(),
    issueRecordFields: descriptor.issueRecordFields(),
    issueClassifications: descriptor.issueClassifications(),
    issuePriorityFactors: descriptor.issuePriorityFactors(),
    severityLevels: descriptor.severityLevels(),
    issueLifecycleStages: descriptor.issueLifecycleStages(),
    issueStates: descriptor.issueStates(),
    containmentActions: descriptor.containmentActions(),
    rootCauseAnalysisAreas: descriptor.rootCauseAnalysisAreas(),
    contributingFactors: descriptor.contributingFactors(),
    correctiveActionTypes: descriptor.correctiveActionTypes(),
    preventiveActionTypes: descriptor.preventiveActionTypes(),
    remediationPlanFields: descriptor.remediationPlanFields(),
    remediationOwnershipFields: descriptor.remediationOwnershipFields(),
    changeControlFactors: descriptor.changeControlFactors(),
    interimControlFields: descriptor.interimControlFields(),
    deadlineFactors: descriptor.deadlineFactors(),
    overdueRequirements: descriptor.overdueRequirements(),
    validationCriteria: descriptor.validationCriteria(),
    retestFields: descriptor.retestFields(),
    closureRequirements: descriptor.closureRequirements(),
    closureAuthorityFactors: descriptor.closureAuthorityFactors(),
    riskAcceptanceRequirements: descriptor.riskAcceptanceRequirements(),
    reopeningTriggers: descriptor.reopeningTriggers(),
    recurringIssueResponseActions: descriptor.recurringIssueResponseActions(),
    systemicIssueScopes: descriptor.systemicIssueScopes(),
    unauthorizedConditionActions: descriptor.unauthorizedConditionActions(),
    domainIssueAreas: descriptor.domainIssueAreas(),
    remediationEvidenceTypes: descriptor.remediationEvidenceTypes(),
    managementResponseFields: descriptor.managementResponseFields(),
    issueReportFields: descriptor.issueReportFields(),
    measures: descriptor.measures(),
    governanceAreas: descriptor.governanceAreas(),
    qualityAttributes: descriptor.qualityAttributes(),
    architecturalRules: descriptor.architecturalRules(),
    futureCapabilities: descriptor.futureCapabilities()
  });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) {
    if (Array.isArray(value)) result[key] = value.slice(0, 1);
  }
  return result;
}
