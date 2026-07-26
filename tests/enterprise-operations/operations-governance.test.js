import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  OperationsGovernanceDescriptor,
  OperationsGovernanceProfile,
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
  WORKFLOW_GOVERNANCE_FIELDS,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

function completeProfile(overrides = {}) {
  return new OperationsGovernanceProfile({
    operationsName: 'Operations Governance',
    objectives: Object.values(OPERATIONS_GOVERNANCE_OBJECTIVES),
    principles: Object.values(OPERATIONS_GOVERNANCE_PRINCIPLES),
    governanceDomains: Object.values(OPERATIONS_GOVERNANCE_DOMAINS),
    governanceLevels: Object.values(OPERATIONS_GOVERNANCE_LEVELS),
    policyAreas: Object.values(OPERATIONAL_POLICY_AREAS),
    policyHierarchyLevels: Object.values(POLICY_HIERARCHY_LEVELS),
    policyLifecycleStages: Object.values(POLICY_LIFECYCLE_STAGES),
    decisionRightsFields: Object.values(DECISION_RIGHTS_FIELDS),
    delegatedAuthorityRequirements: Object.values(DELEGATED_AUTHORITY_REQUIREMENTS),
    responsibilityRoles: Object.values(GOVERNANCE_RESPONSIBILITY_ROLES),
    serviceGovernanceRequirements: Object.values(SERVICE_GOVERNANCE_REQUIREMENTS),
    serviceReviewInputs: Object.values(SERVICE_REVIEW_INPUTS_GOVERNANCE),
    operationalRiskSources: Object.values(OPERATIONAL_RISK_SOURCES),
    riskRecordFields: Object.values(OPERATIONAL_RISK_RECORD_FIELDS),
    riskTreatments: Object.values(OPERATIONAL_RISK_TREATMENTS),
    riskAcceptanceFields: Object.values(RISK_ACCEPTANCE_FIELDS),
    controlTypes: Object.values(OPERATIONAL_CONTROL_TYPES),
    controlImplementationMechanisms: Object.values(CONTROL_IMPLEMENTATION_MECHANISMS),
    controlRecordFields: Object.values(CONTROL_RECORD_FIELDS),
    controlEvidenceTypes: Object.values(CONTROL_EVIDENCE_TYPES),
    assuranceTypes: Object.values(ASSURANCE_TYPES),
    assuranceResponsibilityLines: Object.values(ASSURANCE_RESPONSIBILITY_LINES),
    exceptionRecordFields: Object.values(EXCEPTION_RECORD_FIELDS),
    noncomplianceManagementSteps: Object.values(NONCOMPLIANCE_MANAGEMENT_STEPS),
    incidentGovernanceFields: Object.values(INCIDENT_GOVERNANCE_FIELDS),
    problemGovernanceRequirements: Object.values(PROBLEM_GOVERNANCE_REQUIREMENTS),
    changeGovernanceFields: Object.values(CHANGE_GOVERNANCE_FIELDS),
    capacityGovernanceFields: Object.values(CAPACITY_GOVERNANCE_FIELDS),
    continuityGovernanceFields: Object.values(CONTINUITY_GOVERNANCE_FIELDS),
    aiOperationsGovernanceControls: Object.values(AI_OPERATIONS_GOVERNANCE_CONTROLS),
    automationGovernanceFields: Object.values(AUTOMATION_GOVERNANCE_FIELDS),
    workflowGovernanceFields: Object.values(WORKFLOW_GOVERNANCE_FIELDS),
    integrationGovernanceFields: Object.values(INTEGRATION_GOVERNANCE_FIELDS),
    dataOperationsGovernanceFields: Object.values(DATA_OPERATIONS_GOVERNANCE_FIELDS),
    securityOperationsGovernanceFields: Object.values(SECURITY_OPERATIONS_GOVERNANCE_FIELDS),
    tenantGovernanceFields: Object.values(TENANT_GOVERNANCE_FIELDS),
    propertyGovernanceFields: Object.values(PROPERTY_GOVERNANCE_FIELDS),
    supplierGovernanceFields: Object.values(SUPPLIER_GOVERNANCE_FIELDS),
    governanceForumTypes: Object.values(GOVERNANCE_FORUM_TYPES),
    reportingAudiences: Object.values(OPERATIONAL_REPORTING_AUDIENCES),
    reportDimensions: Object.values(OPERATIONAL_REPORT_DIMENSIONS),
    measures: Object.values(OPERATIONS_GOVERNANCE_MEASURES),
    scorecardDimensions: Object.values(OPERATIONAL_SCORECARD_DIMENSIONS),
    reviewCycleStages: Object.values(GOVERNANCE_REVIEW_CYCLE_STAGES),
    maturityAssessmentAreas: Object.values(OPERATIONAL_MATURITY_ASSESSMENT_AREAS),
    maturityLevels: Object.values(OPERATIONAL_MATURITY_LEVELS),
    improvementSources: Object.values(GOVERNANCE_IMPROVEMENT_SOURCES),
    boundaryExclusions: Object.values(OPERATIONS_GOVERNANCE_BOUNDARY_EXCLUSIONS),
    qualityAttributes: Object.values(OPERATIONS_GOVERNANCE_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(OPERATIONS_GOVERNANCE_ARCHITECTURAL_RULES),
    futureCapabilities: Object.values(FUTURE_OPERATIONS_GOVERNANCE_CAPABILITIES),
    ...overrides
  });
}

test('operations governance exposes documented objectives, principles, domains, levels, policies, decision rights, and responsibility metadata', () => {
  const descriptor = new OperationsGovernanceDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(OPERATIONS_GOVERNANCE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(OPERATIONS_GOVERNANCE_PRINCIPLES));
  assert.ok(descriptor.governanceDomains().includes(OPERATIONS_GOVERNANCE_DOMAINS.CONTINUAL_IMPROVEMENT_GOVERNANCE));
  assert.ok(descriptor.governanceLevels().includes(OPERATIONS_GOVERNANCE_LEVELS.SERVICE_GOVERNANCE));
  assert.ok(descriptor.policyAreas().includes(OPERATIONAL_POLICY_AREAS.REVIEW));
  assert.ok(descriptor.policyHierarchyLevels().includes(POLICY_HIERARCHY_LEVELS.AUTOMATED_CONTROLS_AND_RUNBOOKS));
  assert.ok(descriptor.policyLifecycleStages().includes(POLICY_LIFECYCLE_STAGES.REPLACE_OR_RETIRE));
  assert.ok(descriptor.decisionRightsFields().includes(DECISION_RIGHTS_FIELDS.EXPIRATION_OR_REVIEW));
  assert.ok(descriptor.delegatedAuthorityRequirements().includes(DELEGATED_AUTHORITY_REQUIREMENTS.SEPARATION_OF_DUTIES_APPROPRIATE));
  assert.ok(descriptor.responsibilityRoles().includes(GOVERNANCE_RESPONSIBILITY_ROLES.INFORMED_STAKEHOLDER));
});

test('operations governance exposes risk, control, assurance, exception, domain governance, reporting, and improvement metadata', () => {
  const descriptor = new OperationsGovernanceDescriptor();

  assert.ok(descriptor.serviceGovernanceRequirements().includes(SERVICE_GOVERNANCE_REQUIREMENTS.RESIDUAL_RISK));
  assert.ok(descriptor.serviceReviewInputs().includes(SERVICE_REVIEW_INPUTS_GOVERNANCE.IMPROVEMENT_ACTIONS));
  assert.ok(descriptor.operationalRiskSources().includes(OPERATIONAL_RISK_SOURCES.POLICY_CONFLICT));
  assert.ok(descriptor.riskRecordFields().includes(OPERATIONAL_RISK_RECORD_FIELDS.RELATED_RECORDS));
  assert.ok(descriptor.controlEvidenceTypes().includes(CONTROL_EVIDENCE_TYPES.REVIEW_OUTCOMES));
  assert.ok(descriptor.assuranceTypes().includes(ASSURANCE_TYPES.AUTOMATED_CONTROL_VALIDATION));
  assert.ok(descriptor.exceptionRecordFields().includes(EXCEPTION_RECORD_FIELDS.CLOSURE_EVIDENCE));
  assert.ok(descriptor.noncomplianceManagementSteps().includes(NONCOMPLIANCE_MANAGEMENT_STEPS.REVIEWED_FOR_SYSTEMIC_CAUSES));
  assert.ok(descriptor.aiOperationsGovernanceControls().includes(AI_OPERATIONS_GOVERNANCE_CONTROLS.RETIREMENT));
  assert.ok(descriptor.supplierGovernanceFields().includes(SUPPLIER_GOVERNANCE_FIELDS.PERFORMANCE_REVIEW));
  assert.ok(descriptor.governanceForumTypes().includes(GOVERNANCE_FORUM_TYPES.RISK_AND_EXCEPTION_REVIEW));
  assert.ok(descriptor.measures().includes(OPERATIONS_GOVERNANCE_MEASURES.IMPROVEMENT_ACTION_COMPLETION));
  assert.ok(descriptor.scorecardDimensions().includes(OPERATIONAL_SCORECARD_DIMENSIONS.IMPROVEMENT));
  assert.ok(descriptor.boundaryExclusions().includes(OPERATIONS_GOVERNANCE_BOUNDARY_EXCLUSIONS.FORMAL_COMPLIANCE_CERTIFICATION));
  assert.ok(descriptor.architecturalRules().includes(OPERATIONS_GOVERNANCE_ARCHITECTURAL_RULES.REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OPERATIONS_GOVERNANCE_CAPABILITIES.SELF_IMPROVING_CONTROLS));
});

test('operations governance validates complete and incomplete profiles', () => {
  const descriptor = new OperationsGovernanceDescriptor();
  const valid = descriptor.validateProfile(completeProfile());
  const invalid = descriptor.validateProfile(completeProfile({
    operationsName: '',
    objectives: [OPERATIONS_GOVERNANCE_OBJECTIVES.ALIGN_OPERATIONS_WITH_ENTERPRISE_OBJECTIVES],
    principles: [OPERATIONS_GOVERNANCE_PRINCIPLES.GOVERNANCE_PROTECTS_OUTCOMES],
    governanceDomains: [OPERATIONS_GOVERNANCE_DOMAINS.OPERATING_MODEL_GOVERNANCE],
    governanceLevels: [OPERATIONS_GOVERNANCE_LEVELS.ENTERPRISE_GOVERNANCE],
    governanceProtectsOutcomes: false,
    explicitAccountabilityRequired: false,
    delegatedAuthorityRequired: false,
    proportionateControlsRequired: false,
    trustworthyEvidenceRequired: false,
    separationOfDutiesRequired: false,
    temporaryOwnedExceptionsRequired: false,
    automationGoverned: false,
    governanceEnablesOperations: false,
    tenantPropertyIsolationProtected: false,
    arch012BoundaryPreserved: false,
    technologyNeutral: false,
    vendorNeutral: false,
    governancePlatformSpecific: true,
    auditProductSpecific: true,
    serviceManagementFrameworkSpecific: true,
    organizationalCommitteeSpecific: true,
    regulatoryStandardSpecific: true,
    enterpriseGovernanceReplacement: true,
    toolAccessEqualsAuthority: true,
    approvalCountAsGovernanceMeasure: true,
    indefiniteExceptionRenewal: true,
    concealedMaterialNoncompliance: true,
    aiConfidenceAsDecisionAuthority: true
  }));

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /vendor-neutral-governance-capabilities/);
  assert.match(invalid.errors.join('\n'), /continual-improvement-governance/);
  assert.match(invalid.errors.join('\n'), /platform-governance/);
  assert.match(invalid.errors.join('\n'), /protect business and operational outcomes/);
  assert.match(invalid.errors.join('\n'), /accountable owner/);
  assert.match(invalid.errors.join('\n'), /ARCH-012 enterprise governance boundary/);
  assert.match(invalid.errors.join('\n'), /Governance platforms are outside ARCH-011-09 scope/);
  assert.match(invalid.errors.join('\n'), /Access to a tool does not create operational authority/);
  assert.match(invalid.errors.join('\n'), /AI confidence does not create decision authority/);
});

test('operations governance assertion rejects incomplete metadata', () => {
  class IncompleteOperationsGovernanceDescriptor extends OperationsGovernanceDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteOperationsGovernanceDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.OPERATIONS_GOVERNANCE_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('operations governance descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('OperationsGovernanceDescriptor');

  assert.ok(descriptor instanceof OperationsGovernanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
