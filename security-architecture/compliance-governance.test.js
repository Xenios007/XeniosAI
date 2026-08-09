import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AUDIT_EVIDENCE_TYPES,
  COMPLIANCE_AI_GOVERNANCE_ACTIVITIES,
  COMPLIANCE_GOVERNANCE_OBJECTIVES,
  COMPLIANCE_GOVERNANCE_RELATIONSHIP_FLOW_STAGES,
  COMPLIANCE_OBLIGATION_TYPES,
  DATA_GOVERNANCE_ACTIVITIES,
  FUTURE_COMPLIANCE_GOVERNANCE_CAPABILITIES,
  GOVERNANCE_APPLICATION_DOMAINS,
  GOVERNANCE_DOMAIN_STAGES,
  GOVERNANCE_LIFECYCLE_STAGES,
  GOVERNANCE_OBSERVABILITY_EVENTS,
  GOVERNANCE_PRINCIPLES,
  INCIDENT_GOVERNANCE_STAGES,
  ORGANIZATIONAL_RESPONSIBILITY_ASSIGNMENTS,
  POLICY_CONTROL_HIERARCHY_STAGES,
  POLICY_MANAGEMENT_STAGES,
  RISK_GOVERNANCE_ACTIVITIES,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  SECURITY_METRIC_TYPES,
  SECURITY_RESPONSIBILITY_AREAS,
  THIRD_PARTY_GOVERNANCE_CRITERIA,
  TRANSPARENCY_SUPPORT_AREAS,
  AuditCompliancePolicy,
  ComplianceGovernanceDescriptor,
  GovernanceImprovementPolicy,
  SecurityGovernanceProfile,
  addSecurityArchitecture
} from '../../src/security-architecture/index.js';

test('compliance governance exposes objectives, domain cycle, principles, and relationship flow', () => {
  const descriptor = new ComplianceGovernanceDescriptor();

  assert.ok(descriptor.objectives().includes(COMPLIANCE_GOVERNANCE_OBJECTIVES.CLEAR_ACCOUNTABILITY));
  assert.ok(descriptor.objectives().includes(COMPLIANCE_GOVERNANCE_OBJECTIVES.ENTERPRISE_RESILIENCE));
  assert.deepEqual(descriptor.domains(), Object.values(GOVERNANCE_DOMAIN_STAGES));
  assert.ok(descriptor.principles().includes(GOVERNANCE_PRINCIPLES.TRANSPARENCY));
  assert.deepEqual(descriptor.policyControlHierarchy(), Object.values(POLICY_CONTROL_HIERARCHY_STAGES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(COMPLIANCE_GOVERNANCE_RELATIONSHIP_FLOW_STAGES));
});

test('compliance governance exposes accountability, risk, audit, data, AI, third-party, metrics, and lifecycle metadata', () => {
  const descriptor = new ComplianceGovernanceDescriptor();

  assert.ok(descriptor.responsibilityAreas().includes(SECURITY_RESPONSIBILITY_AREAS.AI_GOVERNANCE));
  assert.ok(descriptor.transparencyAreas().includes(TRANSPARENCY_SUPPORT_AREAS.REGULATORY_REPORTING));
  assert.ok(descriptor.applicationDomains().includes(GOVERNANCE_APPLICATION_DOMAINS.THIRD_PARTY_INTEGRATIONS));
  assert.ok(descriptor.policyManagementStages().includes(POLICY_MANAGEMENT_STAGES.RETIREMENT));
  assert.ok(descriptor.riskGovernanceActivities().includes(RISK_GOVERNANCE_ACTIVITIES.RISK_ACCEPTANCE));
  assert.ok(descriptor.complianceObligations().includes(COMPLIANCE_OBLIGATION_TYPES.CUSTOMER_CONTRACTUAL_REQUIREMENTS));
  assert.ok(descriptor.auditEvidenceTypes().includes(AUDIT_EVIDENCE_TYPES.AI_ACTIVITY_RECORDS));
  assert.ok(descriptor.dataGovernanceActivities().includes(DATA_GOVERNANCE_ACTIVITIES.DISPOSAL_VALIDATION));
  assert.ok(descriptor.aiGovernanceActivities().includes(COMPLIANCE_AI_GOVERNANCE_ACTIVITIES.AGENT_GOVERNANCE));
  assert.ok(descriptor.thirdPartyGovernanceCriteria().includes(THIRD_PARTY_GOVERNANCE_CRITERIA.DATA_HANDLING_PRACTICES));
  assert.ok(descriptor.securityMetrics().includes(SECURITY_METRIC_TYPES.SECRET_ROTATION_COMPLIANCE));
  assert.deepEqual(descriptor.governanceLifecycle(), Object.values(GOVERNANCE_LIFECYCLE_STAGES));
  assert.ok(descriptor.incidentGovernanceStages().includes(INCIDENT_GOVERNANCE_STAGES.POST_INCIDENT_REVIEW));
  assert.ok(descriptor.organizationalResponsibilities().includes(ORGANIZATIONAL_RESPONSIBILITY_ASSIGNMENTS.SECURITY_STRATEGY));
  assert.ok(descriptor.observabilityEvents().includes(GOVERNANCE_OBSERVABILITY_EVENTS.SECURITY_EXCEPTIONS));
});

test('compliance governance validates security governance profiles', () => {
  const descriptor = new ComplianceGovernanceDescriptor();
  const valid = descriptor.validateGovernanceProfile(
    new SecurityGovernanceProfile({
      governanceName: 'Enterprise Security Governance',
      domains: Object.values(GOVERNANCE_DOMAIN_STAGES),
      principles: Object.values(GOVERNANCE_PRINCIPLES),
      responsibilityAreas: Object.values(SECURITY_RESPONSIBILITY_AREAS),
      transparencyAreas: Object.values(TRANSPARENCY_SUPPORT_AREAS),
      applicationDomains: Object.values(GOVERNANCE_APPLICATION_DOMAINS),
      policyManagementStages: Object.values(POLICY_MANAGEMENT_STAGES),
      policyControlHierarchy: Object.values(POLICY_CONTROL_HIERARCHY_STAGES)
    })
  );
  const invalid = descriptor.validateGovernanceProfile({
    governanceName: '',
    domains: [GOVERNANCE_DOMAIN_STAGES.POLICIES],
    principles: [GOVERNANCE_PRINCIPLES.ACCOUNTABILITY],
    responsibilityAreas: [SECURITY_RESPONSIBILITY_AREAS.IDENTITY_GOVERNANCE],
    transparencyAreas: [TRANSPARENCY_SUPPORT_AREAS.INTERNAL_REVIEW],
    applicationDomains: [GOVERNANCE_APPLICATION_DOMAINS.BUSINESS_SERVICES],
    policyManagementStages: [POLICY_MANAGEMENT_STAGES.POLICY_CREATION],
    policyControlHierarchy: [POLICY_CONTROL_HIERARCHY_STAGES.POLICY],
    clearOwners: false,
    decisionsTraceable: false,
    policiesConsistent: false,
    accountable: false,
    technologyNeutral: false,
    unnecessarilySlowsInnovation: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /Standards/);
  assert.match(invalid.errors.join('\n'), /transparency/);
  assert.match(invalid.errors.join('\n'), /regulatory-reporting/);
  assert.match(invalid.errors.join('\n'), /clearly identified owner/);
  assert.match(invalid.errors.join('\n'), /unnecessarily slow innovation/);
});

test('compliance governance validates audit readiness and compliance policies', () => {
  const descriptor = new ComplianceGovernanceDescriptor();
  const valid = descriptor.validateAuditCompliance(
    new AuditCompliancePolicy({
      policyName: 'Audit and Compliance Readiness',
      riskActivities: Object.values(RISK_GOVERNANCE_ACTIVITIES),
      complianceObligations: Object.values(COMPLIANCE_OBLIGATION_TYPES),
      auditEvidenceTypes: Object.values(AUDIT_EVIDENCE_TYPES),
      dataGovernanceActivities: Object.values(DATA_GOVERNANCE_ACTIVITIES),
      aiGovernanceActivities: Object.values(COMPLIANCE_AI_GOVERNANCE_ACTIVITIES),
      thirdPartyCriteria: Object.values(THIRD_PARTY_GOVERNANCE_CRITERIA),
      securityMetrics: Object.values(SECURITY_METRIC_TYPES)
    })
  );
  const invalid = descriptor.validateAuditCompliance({
    policyName: '',
    riskActivities: [RISK_GOVERNANCE_ACTIVITIES.RISK_IDENTIFICATION],
    complianceObligations: [COMPLIANCE_OBLIGATION_TYPES.PRIVACY_REGULATIONS],
    auditEvidenceTypes: [AUDIT_EVIDENCE_TYPES.SECURITY_LOGS],
    dataGovernanceActivities: [DATA_GOVERNANCE_ACTIVITIES.DATA_CLASSIFICATION],
    aiGovernanceActivities: [COMPLIANCE_AI_GOVERNANCE_ACTIVITIES.MODEL_APPROVAL],
    thirdPartyCriteria: [THIRD_PARTY_GOVERNANCE_CRITERIA.SECURITY_POSTURE],
    securityMetrics: [SECURITY_METRIC_TYPES.POLICY_COMPLIANCE],
    riskProportional: false,
    auditEvidenceAccurateCompleteProtected: false,
    frameworkNeutral: false,
    evidenceBasedMetrics: false,
    continuousAuditReadiness: false,
    specificLegalInterpretation: true,
    certificationProcedure: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /risk-analysis/);
  assert.match(invalid.errors.join('\n'), /identity-records/);
  assert.match(invalid.errors.join('\n'), /agent-governance/);
  assert.match(invalid.errors.join('\n'), /business risk/);
  assert.match(invalid.errors.join('\n'), /legal interpretations are outside/);
});

test('compliance governance validates continuous improvement and incident governance', () => {
  const descriptor = new ComplianceGovernanceDescriptor();
  const valid = descriptor.validateImprovementPolicy(
    new GovernanceImprovementPolicy({
      policyName: 'Continuous Governance Improvement',
      lifecycleStages: Object.values(GOVERNANCE_LIFECYCLE_STAGES),
      incidentStages: Object.values(INCIDENT_GOVERNANCE_STAGES),
      responsibilityAssignments: Object.values(ORGANIZATIONAL_RESPONSIBILITY_ASSIGNMENTS),
      observabilityEvents: Object.values(GOVERNANCE_OBSERVABILITY_EVENTS)
    })
  );
  const invalid = descriptor.validateImprovementPolicy({
    policyName: '',
    lifecycleStages: [GOVERNANCE_LIFECYCLE_STAGES.DEFINE],
    incidentStages: [INCIDENT_GOVERNANCE_STAGES.DETECTION],
    responsibilityAssignments: [ORGANIZATIONAL_RESPONSIBILITY_ASSIGNMENTS.SECURITY_STRATEGY],
    observabilityEvents: [GOVERNANCE_OBSERVABILITY_EVENTS.POLICY_CHANGES],
    continuous: false,
    lessonsFeedImprovements: false,
    reviewedPeriodically: false,
    measurable: false,
    auditable: false,
    oneTimeActivity: true,
    organizationSpecificProgram: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /Implement/);
  assert.match(invalid.errors.join('\n'), /escalation/);
  assert.match(invalid.errors.join('\n'), /AI Platform/);
  assert.match(invalid.errors.join('\n'), /one-time activity/);
  assert.match(invalid.errors.join('\n'), /Organization-specific compliance programs/);
});

test('compliance governance reports future capabilities without implementing them', () => {
  const descriptor = new ComplianceGovernanceDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_COMPLIANCE_GOVERNANCE_CAPABILITIES.AI_ASSISTED_COMPLIANCE_VALIDATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_COMPLIANCE_GOVERNANCE_CAPABILITIES.POLICY_AS_CODE_GOVERNANCE));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_COMPLIANCE_GOVERNANCE_CAPABILITIES.ADAPTIVE_COMPLIANCE_REPORTING));
});

test('compliance governance assertion rejects incomplete metadata', () => {
  class IncompleteComplianceGovernanceDescriptor extends ComplianceGovernanceDescriptor {
    domains() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteComplianceGovernanceDescriptor().assertModel(),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.COMPLIANCE_GOVERNANCE_INVALID &&
      error.details.errors.some(message => message.includes('governance domains'))
  );
});

test('compliance governance descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addSecurityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ComplianceGovernanceDescriptor');

  assert.ok(descriptor instanceof ComplianceGovernanceDescriptor);
  assert.equal(descriptor.assertModel().isValid, true);
});
