export class ExceptionsIssuesRemediationProfile {
  constructor({
    remediationName,
    objectives = [],
    principles = [],
    exceptionEligibilityReasons = [],
    exceptionScopeDimensions = [],
    exceptionRecordFields = [],
    exceptionLifecycleStages = [],
    exceptionStates = [],
    exceptionAuthorityFactors = [],
    compensatingControlRequirements = [],
    emergencyExceptionFields = [],
    exceptionExtensionFactors = [],
    exceptionRevocationTriggers = [],
    exceptionClosureConditions = [],
    issueTypes = [],
    findingFields = [],
    issueSources = [],
    issueRecordFields = [],
    issueClassifications = [],
    issuePriorityFactors = [],
    severityLevels = [],
    issueLifecycleStages = [],
    issueStates = [],
    containmentActions = [],
    rootCauseAnalysisAreas = [],
    contributingFactors = [],
    correctiveActionTypes = [],
    preventiveActionTypes = [],
    remediationPlanFields = [],
    remediationOwnershipFields = [],
    changeControlFactors = [],
    interimControlFields = [],
    deadlineFactors = [],
    overdueRequirements = [],
    validationCriteria = [],
    retestFields = [],
    closureRequirements = [],
    closureAuthorityFactors = [],
    riskAcceptanceRequirements = [],
    reopeningTriggers = [],
    recurringIssueResponseActions = [],
    systemicIssueScopes = [],
    unauthorizedConditionActions = [],
    domainIssueAreas = [],
    remediationEvidenceTypes = [],
    managementResponseFields = [],
    issueReportFields = [],
    measures = [],
    governanceAreas = [],
    qualityAttributes = [],
    architecturalRules = [],
    futureCapabilities = [],
    exceptionsTemporary = true,
    exceptionRequiresAuthority = true,
    bindingObligationsRequireQualifiedAuthority = true,
    oneIssueOwnerRequired = true,
    containBeforeCorrecting = true,
    rootCauseRequired = true,
    closureRequiresEvidence = true,
    overdueIsRiskDecision = true,
    recurrenceRequiresSystemicReview = true,
    compensatingControlsRequired = true,
    expiredExceptionInvalid = true,
    remediationThroughControlledChange = true,
    closureAuthoritySeparatedWhenRequired = true,
    historyPreservedOnReopen = true,
    retrospectiveApprovalNotConcealment = true,
    vendorNeutral = true,
    technologyIndependent = true,
    prescribesCaseManagementTool = false,
    prescribesAuditPlatform = false,
    prescribesTicketingSystem = false,
    prescribesRiskProduct = false,
    prescribesRegulatoryFramework = false
  }) {
    this.remediationName = remediationName;
    for (const [key, value] of Object.entries({
      objectives,
      principles,
      exceptionEligibilityReasons,
      exceptionScopeDimensions,
      exceptionRecordFields,
      exceptionLifecycleStages,
      exceptionStates,
      exceptionAuthorityFactors,
      compensatingControlRequirements,
      emergencyExceptionFields,
      exceptionExtensionFactors,
      exceptionRevocationTriggers,
      exceptionClosureConditions,
      issueTypes,
      findingFields,
      issueSources,
      issueRecordFields,
      issueClassifications,
      issuePriorityFactors,
      severityLevels,
      issueLifecycleStages,
      issueStates,
      containmentActions,
      rootCauseAnalysisAreas,
      contributingFactors,
      correctiveActionTypes,
      preventiveActionTypes,
      remediationPlanFields,
      remediationOwnershipFields,
      changeControlFactors,
      interimControlFields,
      deadlineFactors,
      overdueRequirements,
      validationCriteria,
      retestFields,
      closureRequirements,
      closureAuthorityFactors,
      riskAcceptanceRequirements,
      reopeningTriggers,
      recurringIssueResponseActions,
      systemicIssueScopes,
      unauthorizedConditionActions,
      domainIssueAreas,
      remediationEvidenceTypes,
      managementResponseFields,
      issueReportFields,
      measures,
      governanceAreas,
      qualityAttributes,
      architecturalRules,
      futureCapabilities
    })) {
      this[key] = Object.freeze([...value]);
    }
    this.exceptionsTemporary = Boolean(exceptionsTemporary);
    this.exceptionRequiresAuthority = Boolean(exceptionRequiresAuthority);
    this.bindingObligationsRequireQualifiedAuthority = Boolean(bindingObligationsRequireQualifiedAuthority);
    this.oneIssueOwnerRequired = Boolean(oneIssueOwnerRequired);
    this.containBeforeCorrecting = Boolean(containBeforeCorrecting);
    this.rootCauseRequired = Boolean(rootCauseRequired);
    this.closureRequiresEvidence = Boolean(closureRequiresEvidence);
    this.overdueIsRiskDecision = Boolean(overdueIsRiskDecision);
    this.recurrenceRequiresSystemicReview = Boolean(recurrenceRequiresSystemicReview);
    this.compensatingControlsRequired = Boolean(compensatingControlsRequired);
    this.expiredExceptionInvalid = Boolean(expiredExceptionInvalid);
    this.remediationThroughControlledChange = Boolean(remediationThroughControlledChange);
    this.closureAuthoritySeparatedWhenRequired = Boolean(closureAuthoritySeparatedWhenRequired);
    this.historyPreservedOnReopen = Boolean(historyPreservedOnReopen);
    this.retrospectiveApprovalNotConcealment = Boolean(retrospectiveApprovalNotConcealment);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.technologyIndependent = Boolean(technologyIndependent);
    this.prescribesCaseManagementTool = Boolean(prescribesCaseManagementTool);
    this.prescribesAuditPlatform = Boolean(prescribesAuditPlatform);
    this.prescribesTicketingSystem = Boolean(prescribesTicketingSystem);
    this.prescribesRiskProduct = Boolean(prescribesRiskProduct);
    this.prescribesRegulatoryFramework = Boolean(prescribesRegulatoryFramework);

    Object.freeze(this);
  }
}
