import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_OPERATIONS_GOVERNANCE_CONTROLS,
  ASSURANCE_RESPONSIBILITY_LINES,
  ASSURANCE_TYPES,
  AUTOMATION_GOVERNANCE_FIELDS,
  CAPACITY_GOVERNANCE_FIELDS,
  CHANGE_GOVERNANCE_FIELDS,
  CONTROL_EVIDENCE_TYPES,
  CONTROL_IMPLEMENTATION_MECHANISMS,
  CONTROL_RECORD_FIELDS,
  CONTINUITY_GOVERNANCE_FIELDS,
  DATA_OPERATIONS_GOVERNANCE_FIELDS,
  DECISION_RIGHTS_FIELDS,
  DELEGATED_AUTHORITY_REQUIREMENTS,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  EXCEPTION_RECORD_FIELDS,
  FUTURE_OPERATIONS_GOVERNANCE_CAPABILITIES,
  GOVERNANCE_FORUM_TYPES,
  GOVERNANCE_IMPROVEMENT_SOURCES,
  GOVERNANCE_RESPONSIBILITY_ROLES,
  GOVERNANCE_REVIEW_CYCLE_STAGES,
  INCIDENT_GOVERNANCE_FIELDS,
  INTEGRATION_GOVERNANCE_FIELDS,
  NONCOMPLIANCE_MANAGEMENT_STEPS,
  OPERATIONAL_CONTROL_TYPES,
  OPERATIONAL_MATURITY_ASSESSMENT_AREAS,
  OPERATIONAL_MATURITY_LEVELS,
  OPERATIONAL_POLICY_AREAS,
  OPERATIONAL_REPORT_DIMENSIONS,
  OPERATIONAL_REPORTING_AUDIENCES,
  OPERATIONAL_RISK_RECORD_FIELDS,
  OPERATIONAL_RISK_SOURCES,
  OPERATIONAL_RISK_TREATMENTS,
  OPERATIONAL_SCORECARD_DIMENSIONS,
  OPERATIONS_GOVERNANCE_ARCHITECTURAL_RULES,
  OPERATIONS_GOVERNANCE_BOUNDARY_EXCLUSIONS,
  OPERATIONS_GOVERNANCE_DOMAINS,
  OPERATIONS_GOVERNANCE_LEVELS,
  OPERATIONS_GOVERNANCE_MEASURES,
  OPERATIONS_GOVERNANCE_OBJECTIVES,
  OPERATIONS_GOVERNANCE_PRINCIPLES,
  OPERATIONS_GOVERNANCE_QUALITY_ATTRIBUTES,
  POLICY_HIERARCHY_LEVELS,
  POLICY_LIFECYCLE_STAGES,
  PROBLEM_GOVERNANCE_REQUIREMENTS,
  PROPERTY_GOVERNANCE_FIELDS,
  RISK_ACCEPTANCE_FIELDS,
  SECURITY_OPERATIONS_GOVERNANCE_FIELDS,
  SERVICE_GOVERNANCE_REQUIREMENTS,
  SERVICE_REVIEW_INPUTS_GOVERNANCE,
  SUPPLIER_GOVERNANCE_FIELDS,
  TENANT_GOVERNANCE_FIELDS,
  WORKFLOW_GOVERNANCE_FIELDS
} from '../constants.js';
import { EnterpriseOperationsValidationResult } from '../contracts/enterprise-operations-validation-result.js';
import { OperationsGovernanceProfile } from '../contracts/operations-governance-profile.js';

const MAP = Object.freeze({
  objectives: OPERATIONS_GOVERNANCE_OBJECTIVES,
  principles: OPERATIONS_GOVERNANCE_PRINCIPLES,
  governanceDomains: OPERATIONS_GOVERNANCE_DOMAINS,
  governanceLevels: OPERATIONS_GOVERNANCE_LEVELS,
  policyAreas: OPERATIONAL_POLICY_AREAS,
  policyHierarchyLevels: POLICY_HIERARCHY_LEVELS,
  policyLifecycleStages: POLICY_LIFECYCLE_STAGES,
  decisionRightsFields: DECISION_RIGHTS_FIELDS,
  delegatedAuthorityRequirements: DELEGATED_AUTHORITY_REQUIREMENTS,
  responsibilityRoles: GOVERNANCE_RESPONSIBILITY_ROLES,
  serviceGovernanceRequirements: SERVICE_GOVERNANCE_REQUIREMENTS,
  serviceReviewInputs: SERVICE_REVIEW_INPUTS_GOVERNANCE,
  operationalRiskSources: OPERATIONAL_RISK_SOURCES,
  riskRecordFields: OPERATIONAL_RISK_RECORD_FIELDS,
  riskTreatments: OPERATIONAL_RISK_TREATMENTS,
  riskAcceptanceFields: RISK_ACCEPTANCE_FIELDS,
  controlTypes: OPERATIONAL_CONTROL_TYPES,
  controlImplementationMechanisms: CONTROL_IMPLEMENTATION_MECHANISMS,
  controlRecordFields: CONTROL_RECORD_FIELDS,
  controlEvidenceTypes: CONTROL_EVIDENCE_TYPES,
  assuranceTypes: ASSURANCE_TYPES,
  assuranceResponsibilityLines: ASSURANCE_RESPONSIBILITY_LINES,
  exceptionRecordFields: EXCEPTION_RECORD_FIELDS,
  noncomplianceManagementSteps: NONCOMPLIANCE_MANAGEMENT_STEPS,
  incidentGovernanceFields: INCIDENT_GOVERNANCE_FIELDS,
  problemGovernanceRequirements: PROBLEM_GOVERNANCE_REQUIREMENTS,
  changeGovernanceFields: CHANGE_GOVERNANCE_FIELDS,
  capacityGovernanceFields: CAPACITY_GOVERNANCE_FIELDS,
  continuityGovernanceFields: CONTINUITY_GOVERNANCE_FIELDS,
  aiOperationsGovernanceControls: AI_OPERATIONS_GOVERNANCE_CONTROLS,
  automationGovernanceFields: AUTOMATION_GOVERNANCE_FIELDS,
  workflowGovernanceFields: WORKFLOW_GOVERNANCE_FIELDS,
  integrationGovernanceFields: INTEGRATION_GOVERNANCE_FIELDS,
  dataOperationsGovernanceFields: DATA_OPERATIONS_GOVERNANCE_FIELDS,
  securityOperationsGovernanceFields: SECURITY_OPERATIONS_GOVERNANCE_FIELDS,
  tenantGovernanceFields: TENANT_GOVERNANCE_FIELDS,
  propertyGovernanceFields: PROPERTY_GOVERNANCE_FIELDS,
  supplierGovernanceFields: SUPPLIER_GOVERNANCE_FIELDS,
  governanceForumTypes: GOVERNANCE_FORUM_TYPES,
  reportingAudiences: OPERATIONAL_REPORTING_AUDIENCES,
  reportDimensions: OPERATIONAL_REPORT_DIMENSIONS,
  measures: OPERATIONS_GOVERNANCE_MEASURES,
  scorecardDimensions: OPERATIONAL_SCORECARD_DIMENSIONS,
  reviewCycleStages: GOVERNANCE_REVIEW_CYCLE_STAGES,
  maturityAssessmentAreas: OPERATIONAL_MATURITY_ASSESSMENT_AREAS,
  maturityLevels: OPERATIONAL_MATURITY_LEVELS,
  improvementSources: GOVERNANCE_IMPROVEMENT_SOURCES,
  boundaryExclusions: OPERATIONS_GOVERNANCE_BOUNDARY_EXCLUSIONS,
  qualityAttributes: OPERATIONS_GOVERNANCE_QUALITY_ATTRIBUTES,
  architecturalRules: OPERATIONS_GOVERNANCE_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_OPERATIONS_GOVERNANCE_CAPABILITIES
});

const EXPECTED_COUNTS = Object.freeze({
  objectives: 15,
  principles: 9,
  governanceDomains: 18,
  governanceLevels: 6,
  policyAreas: 21,
  policyHierarchyLevels: 7,
  policyLifecycleStages: 9,
  decisionRightsFields: 11,
  delegatedAuthorityRequirements: 9,
  responsibilityRoles: 10,
  serviceGovernanceRequirements: 16,
  serviceReviewInputs: 17,
  operationalRiskSources: 15,
  riskRecordFields: 17,
  riskTreatments: 6,
  riskAcceptanceFields: 11,
  controlTypes: 7,
  controlImplementationMechanisms: 13,
  controlRecordFields: 13,
  controlEvidenceTypes: 17,
  assuranceTypes: 11,
  assuranceResponsibilityLines: 3,
  exceptionRecordFields: 13,
  noncomplianceManagementSteps: 10,
  incidentGovernanceFields: 12,
  problemGovernanceRequirements: 8,
  changeGovernanceFields: 11,
  capacityGovernanceFields: 12,
  continuityGovernanceFields: 12,
  aiOperationsGovernanceControls: 15,
  automationGovernanceFields: 15,
  workflowGovernanceFields: 14,
  integrationGovernanceFields: 12,
  dataOperationsGovernanceFields: 13,
  securityOperationsGovernanceFields: 11,
  tenantGovernanceFields: 12,
  propertyGovernanceFields: 11,
  supplierGovernanceFields: 14,
  governanceForumTypes: 13,
  reportingAudiences: 10,
  reportDimensions: 8,
  measures: 18,
  scorecardDimensions: 16,
  reviewCycleStages: 8,
  maturityAssessmentAreas: 10,
  maturityLevels: 7,
  improvementSources: 14,
  boundaryExclusions: 8,
  qualityAttributes: 12,
  architecturalRules: 17,
  futureCapabilities: 12
});

export class OperationsGovernanceDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  governanceDomains() { return values(MAP.governanceDomains); }
  governanceLevels() { return values(MAP.governanceLevels); }
  policyAreas() { return values(MAP.policyAreas); }
  policyHierarchyLevels() { return values(MAP.policyHierarchyLevels); }
  policyLifecycleStages() { return values(MAP.policyLifecycleStages); }
  decisionRightsFields() { return values(MAP.decisionRightsFields); }
  delegatedAuthorityRequirements() { return values(MAP.delegatedAuthorityRequirements); }
  responsibilityRoles() { return values(MAP.responsibilityRoles); }
  serviceGovernanceRequirements() { return values(MAP.serviceGovernanceRequirements); }
  serviceReviewInputs() { return values(MAP.serviceReviewInputs); }
  operationalRiskSources() { return values(MAP.operationalRiskSources); }
  riskRecordFields() { return values(MAP.riskRecordFields); }
  riskTreatments() { return values(MAP.riskTreatments); }
  riskAcceptanceFields() { return values(MAP.riskAcceptanceFields); }
  controlTypes() { return values(MAP.controlTypes); }
  controlImplementationMechanisms() { return values(MAP.controlImplementationMechanisms); }
  controlRecordFields() { return values(MAP.controlRecordFields); }
  controlEvidenceTypes() { return values(MAP.controlEvidenceTypes); }
  assuranceTypes() { return values(MAP.assuranceTypes); }
  assuranceResponsibilityLines() { return values(MAP.assuranceResponsibilityLines); }
  exceptionRecordFields() { return values(MAP.exceptionRecordFields); }
  noncomplianceManagementSteps() { return values(MAP.noncomplianceManagementSteps); }
  incidentGovernanceFields() { return values(MAP.incidentGovernanceFields); }
  problemGovernanceRequirements() { return values(MAP.problemGovernanceRequirements); }
  changeGovernanceFields() { return values(MAP.changeGovernanceFields); }
  capacityGovernanceFields() { return values(MAP.capacityGovernanceFields); }
  continuityGovernanceFields() { return values(MAP.continuityGovernanceFields); }
  aiOperationsGovernanceControls() { return values(MAP.aiOperationsGovernanceControls); }
  automationGovernanceFields() { return values(MAP.automationGovernanceFields); }
  workflowGovernanceFields() { return values(MAP.workflowGovernanceFields); }
  integrationGovernanceFields() { return values(MAP.integrationGovernanceFields); }
  dataOperationsGovernanceFields() { return values(MAP.dataOperationsGovernanceFields); }
  securityOperationsGovernanceFields() { return values(MAP.securityOperationsGovernanceFields); }
  tenantGovernanceFields() { return values(MAP.tenantGovernanceFields); }
  propertyGovernanceFields() { return values(MAP.propertyGovernanceFields); }
  supplierGovernanceFields() { return values(MAP.supplierGovernanceFields); }
  governanceForumTypes() { return values(MAP.governanceForumTypes); }
  reportingAudiences() { return values(MAP.reportingAudiences); }
  reportDimensions() { return values(MAP.reportDimensions); }
  measures() { return values(MAP.measures); }
  scorecardDimensions() { return values(MAP.scorecardDimensions); }
  reviewCycleStages() { return values(MAP.reviewCycleStages); }
  maturityAssessmentAreas() { return values(MAP.maturityAssessmentAreas); }
  maturityLevels() { return values(MAP.maturityLevels); }
  improvementSources() { return values(MAP.improvementSources); }
  boundaryExclusions() { return values(MAP.boundaryExclusions); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof OperationsGovernanceProfile
      ? profileInput
      : new OperationsGovernanceProfile(profileInput);
    const errors = [];

    if (!profile.operationsName) errors.push('Operations governance profile must have a name.');
    for (const key of Object.keys(MAP)) appendMissing(errors, profile[key], values(MAP[key]), `${key} must include`);
    if (profile.governanceProtectsOutcomes !== true) errors.push('Governance must protect business and operational outcomes.');
    if (profile.explicitAccountabilityRequired !== true) errors.push('Every governed capability, decision, risk, exception, and control must have an accountable owner.');
    if (profile.delegatedAuthorityRequired !== true) errors.push('Authority must be delegated by policy, role, scope, and risk boundaries.');
    if (profile.proportionateControlsRequired !== true) errors.push('Controls must be proportionate to business impact and risk.');
    if (profile.trustworthyEvidenceRequired !== true) errors.push('Governance requires trustworthy, contextual, protected evidence.');
    if (profile.separationOfDutiesRequired !== true) errors.push('High-risk operations should separate request, approval, execution, verification, and assurance.');
    if (profile.temporaryOwnedExceptionsRequired !== true) errors.push('Exceptions must be temporary, owned, justified, monitored, and expiring.');
    if (profile.automationGoverned !== true) errors.push('Automated and AI actors must remain governed.');
    if (profile.governanceEnablesOperations !== true) errors.push('Governance should enable safe operations.');
    if (profile.tenantPropertyIsolationProtected !== true) errors.push('Tenant and property isolation must be protected.');
    if (profile.arch012BoundaryPreserved !== true) errors.push('Operations Governance must preserve the ARCH-012 enterprise governance boundary.');
    if (profile.technologyNeutral !== true) errors.push('Operations Governance must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('Operations Governance must remain vendor neutral.');
    if (profile.governancePlatformSpecific === true) errors.push('Governance platforms are outside ARCH-011-09 scope.');
    if (profile.auditProductSpecific === true) errors.push('Audit products are outside ARCH-011-09 scope.');
    if (profile.serviceManagementFrameworkSpecific === true) errors.push('Service-management frameworks are outside ARCH-011-09 scope.');
    if (profile.organizationalCommitteeSpecific === true) errors.push('Organizational committees are outside ARCH-011-09 scope.');
    if (profile.regulatoryStandardSpecific === true) errors.push('Regulatory standards are outside ARCH-011-09 scope.');
    if (profile.enterpriseGovernanceReplacement === true) errors.push('ARCH-011-09 does not replace ARCH-012 enterprise governance.');
    if (profile.toolAccessEqualsAuthority === true) errors.push('Access to a tool does not create operational authority.');
    if (profile.approvalCountAsGovernanceMeasure === true) errors.push('Governance is not measured by approval or report count.');
    if (profile.indefiniteExceptionRenewal === true) errors.push('Permanent exceptions should trigger policy, architecture, or service redesign.');
    if (profile.concealedMaterialNoncompliance === true) errors.push('Concealment of material noncompliance is a governance failure.');
    if (profile.aiConfidenceAsDecisionAuthority === true) errors.push('AI confidence does not create decision authority.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, count] of Object.entries(EXPECTED_COUNTS)) {
      if (this[key]().length !== count) errors.push(`Operations Governance must include documented ${key}.`);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.OPERATIONS_GOVERNANCE_INVALID,
        'Operations Governance violates ARCH-011-09.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
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
