import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  TRANSPARENCY_SUPPORT_AREAS
} from '../constants.js';
import { AuditCompliancePolicy } from '../contracts/audit-compliance-policy.js';
import { ComplianceGovernanceValidationResult } from '../contracts/compliance-governance-validation-result.js';
import { GovernanceImprovementPolicy } from '../contracts/governance-improvement-policy.js';
import { SecurityGovernanceProfile } from '../contracts/security-governance-profile.js';

const GOVERNANCE_DOMAIN_FLOW = Object.freeze(Object.values(GOVERNANCE_DOMAIN_STAGES));
const POLICY_HIERARCHY = Object.freeze(Object.values(POLICY_CONTROL_HIERARCHY_STAGES));
const GOVERNANCE_LIFECYCLE = Object.freeze(Object.values(GOVERNANCE_LIFECYCLE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(COMPLIANCE_GOVERNANCE_RELATIONSHIP_FLOW_STAGES));

export class ComplianceGovernanceDescriptor {
  objectives() {
    return Object.freeze(Object.values(COMPLIANCE_GOVERNANCE_OBJECTIVES));
  }

  domains() {
    return GOVERNANCE_DOMAIN_FLOW;
  }

  principles() {
    return Object.freeze(Object.values(GOVERNANCE_PRINCIPLES));
  }

  responsibilityAreas() {
    return Object.freeze(Object.values(SECURITY_RESPONSIBILITY_AREAS));
  }

  transparencyAreas() {
    return Object.freeze(Object.values(TRANSPARENCY_SUPPORT_AREAS));
  }

  applicationDomains() {
    return Object.freeze(Object.values(GOVERNANCE_APPLICATION_DOMAINS));
  }

  policyManagementStages() {
    return Object.freeze(Object.values(POLICY_MANAGEMENT_STAGES));
  }

  policyControlHierarchy() {
    return POLICY_HIERARCHY;
  }

  riskGovernanceActivities() {
    return Object.freeze(Object.values(RISK_GOVERNANCE_ACTIVITIES));
  }

  complianceObligations() {
    return Object.freeze(Object.values(COMPLIANCE_OBLIGATION_TYPES));
  }

  auditEvidenceTypes() {
    return Object.freeze(Object.values(AUDIT_EVIDENCE_TYPES));
  }

  dataGovernanceActivities() {
    return Object.freeze(Object.values(DATA_GOVERNANCE_ACTIVITIES));
  }

  aiGovernanceActivities() {
    return Object.freeze(Object.values(COMPLIANCE_AI_GOVERNANCE_ACTIVITIES));
  }

  thirdPartyGovernanceCriteria() {
    return Object.freeze(Object.values(THIRD_PARTY_GOVERNANCE_CRITERIA));
  }

  securityMetrics() {
    return Object.freeze(Object.values(SECURITY_METRIC_TYPES));
  }

  governanceLifecycle() {
    return GOVERNANCE_LIFECYCLE;
  }

  incidentGovernanceStages() {
    return Object.freeze(Object.values(INCIDENT_GOVERNANCE_STAGES));
  }

  organizationalResponsibilities() {
    return Object.freeze(Object.values(ORGANIZATIONAL_RESPONSIBILITY_ASSIGNMENTS));
  }

  observabilityEvents() {
    return Object.freeze(Object.values(GOVERNANCE_OBSERVABILITY_EVENTS));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_COMPLIANCE_GOVERNANCE_CAPABILITIES));
  }

  validateGovernanceProfile(profileInput) {
    const profile = profileInput instanceof SecurityGovernanceProfile
      ? profileInput
      : new SecurityGovernanceProfile(profileInput);
    const errors = [];

    if (!profile.governanceName) errors.push('Security governance profile must have a name.');
    appendMissing(errors, profile.domains, this.domains(), 'Governance domain cycle must include');
    appendMissing(errors, profile.principles, this.principles(), 'Governance must apply');
    appendMissing(errors, profile.responsibilityAreas, this.responsibilityAreas(), 'Accountability should cover');
    appendMissing(errors, profile.transparencyAreas, this.transparencyAreas(), 'Transparency should support');
    appendMissing(errors, profile.applicationDomains, this.applicationDomains(), 'Security policies should apply consistently across');
    appendMissing(errors, profile.policyManagementStages, this.policyManagementStages(), 'Policy management must include');
    appendMissing(errors, profile.policyControlHierarchy, this.policyControlHierarchy(), 'Policy hierarchy must include');
    if (profile.clearOwners !== true) errors.push('Every significant security responsibility should have a clearly identified owner.');
    if (profile.decisionsTraceable !== true) errors.push('Security decisions should be explainable and traceable.');
    if (profile.policiesConsistent !== true) errors.push('Security policies should be applied consistently.');
    if (profile.accountable !== true) errors.push('Governance must preserve accountability.');
    if (profile.technologyNeutral !== true) errors.push('Policies should remain technology-neutral wherever practical.');
    if (profile.unnecessarilySlowsInnovation === true) errors.push('Governance should not unnecessarily slow innovation.');
    if (profile.vendorSpecific === true) errors.push('Compliance & Governance must remain vendor and framework neutral.');

    return validation(errors);
  }

  validateAuditCompliance(policyInput) {
    const policy = policyInput instanceof AuditCompliancePolicy
      ? policyInput
      : new AuditCompliancePolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Audit and compliance policy must have a name.');
    appendMissing(errors, policy.riskActivities, this.riskGovernanceActivities(), 'Risk management must include');
    appendMissing(errors, policy.complianceObligations, this.complianceObligations(), 'Compliance management may include');
    appendMissing(errors, policy.auditEvidenceTypes, this.auditEvidenceTypes(), 'Audit readiness should include');
    appendMissing(errors, policy.dataGovernanceActivities, this.dataGovernanceActivities(), 'Data governance must include');
    appendMissing(errors, policy.aiGovernanceActivities, this.aiGovernanceActivities(), 'AI governance must include');
    appendMissing(errors, policy.thirdPartyCriteria, this.thirdPartyGovernanceCriteria(), 'Third-party governance criteria should include');
    appendMissing(errors, policy.securityMetrics, this.securityMetrics(), 'Security metrics should include');
    if (policy.riskProportional !== true) errors.push('Security investments should be proportional to business risk.');
    if (policy.auditEvidenceAccurateCompleteProtected !== true) errors.push('Audit evidence should be accurate, complete, and protected.');
    if (policy.frameworkNeutral !== true) errors.push('Compliance architecture must avoid dependence on any specific regulatory framework.');
    if (policy.evidenceBasedMetrics !== true) errors.push('Metrics should support evidence-based decision making.');
    if (policy.continuousAuditReadiness !== true) errors.push('The platform should support continuous audit readiness.');
    if (policy.specificLegalInterpretation === true) errors.push('Specific legal interpretations are outside ARCH-008-09 scope.');
    if (policy.certificationProcedure === true) errors.push('Certification procedures are outside ARCH-008-09 scope.');
    if (policy.vendorSpecific === true) errors.push('Audit and compliance policy must remain vendor and framework neutral.');

    return validation(errors);
  }

  validateImprovementPolicy(policyInput) {
    const policy = policyInput instanceof GovernanceImprovementPolicy
      ? policyInput
      : new GovernanceImprovementPolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Governance improvement policy must have a name.');
    appendMissing(errors, policy.lifecycleStages, this.governanceLifecycle(), 'Governance lifecycle must include');
    appendMissing(errors, policy.incidentStages, this.incidentGovernanceStages(), 'Incident governance must include');
    appendMissing(errors, policy.responsibilityAssignments, this.organizationalResponsibilities(), 'Organizational responsibility should include');
    appendMissing(errors, policy.observabilityEvents, this.observabilityEvents(), 'Governance observability should expose');
    if (policy.continuous !== true) errors.push('Governance is an ongoing process rather than a one-time activity.');
    if (policy.lessonsFeedImprovements !== true) errors.push('Lessons learned should feed future policy and architectural improvements.');
    if (policy.reviewedPeriodically !== true) errors.push('Responsibility assignments should be reviewed periodically.');
    if (policy.measurable !== true) errors.push('Governance should be informed by measurable indicators.');
    if (policy.auditable !== true) errors.push('Governance activities must remain auditable.');
    if (policy.oneTimeActivity === true) errors.push('Governance must not be treated as a one-time activity.');
    if (policy.organizationSpecificProgram === true) errors.push('Organization-specific compliance programs are outside ARCH-008-09 scope.');
    if (policy.vendorSpecific === true) errors.push('Governance improvement policy must remain vendor and framework neutral.');

    return validation(errors);
  }

  assertModel() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Compliance & Governance must include all documented objectives.');
    if (this.domains().length !== 7) errors.push('Compliance & Governance must include the documented governance domains.');
    if (this.principles().length !== 4) errors.push('Compliance & Governance must include documented governance principles.');
    if (this.policyControlHierarchy().length !== 4) errors.push('Compliance & Governance must include the documented policy hierarchy.');
    if (this.governanceLifecycle().length !== 6) errors.push('Compliance & Governance must include the documented governance lifecycle.');
    if (this.relationshipFlow().length !== 10) errors.push('Compliance & Governance must include the documented relationship flow.');

    if (errors.length > 0) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.COMPLIANCE_GOVERNANCE_INVALID,
        'Compliance & Governance violates ARCH-008-09.',
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
  return new ComplianceGovernanceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
