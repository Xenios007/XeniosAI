import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  ASSURANCE_LINES,
  ATTESTATION_FIELDS,
  AUTOMATED_AUTHORITY_REQUIREMENTS,
  CORE_GOVERNANCE_ROLES,
  CROSS_TENANT_GOVERNANCE_TRIGGERS,
  DECISION_RIGHT_FIELDS,
  DELEGATED_AUTHORITY_REQUIREMENTS,
  EMERGENCY_GOVERNANCE_FIELDS,
  EXTERNAL_ASSURANCE_PROVIDERS,
  FORUM_CHARTER_FIELDS,
  FUTURE_GOVERNANCE_OPERATING_MODEL_CAPABILITIES,
  GOVERNANCE_AUTHORITIES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  GOVERNANCE_DECISION_CLASSES,
  GOVERNANCE_DECISION_LIFECYCLE_STAGES,
  GOVERNANCE_DECISION_RECORD_FIELDS,
  GOVERNANCE_EFFECTIVENESS_OUTCOMES,
  GOVERNANCE_ESCALATION_TRIGGERS,
  GOVERNANCE_FEDERATION_SCOPES,
  GOVERNANCE_FORUM_TYPES,
  GOVERNANCE_INFORMATION_TYPES,
  GOVERNANCE_LEVELS,
  GOVERNANCE_MATURITY_STAGES,
  GOVERNANCE_OPERATING_MODEL_ARCHITECTURAL_RULES,
  GOVERNANCE_OPERATING_MODEL_OBJECTIVES,
  GOVERNANCE_OPERATING_MODEL_PRINCIPLES,
  GOVERNANCE_OPERATING_MODEL_QUALITY_ATTRIBUTES,
  GOVERNANCE_REPORT_VIEWS,
  GOVERNANCE_RESPONSIBILITY_TYPES,
  GOVERNANCE_RHYTHMS,
  GOVERNANCE_SERVICE_TYPES,
  OPERATING_MODEL_REVIEW_TRIGGERS,
  PROPERTY_GOVERNANCE_MODEL_FIELDS,
  SUPPLIER_GOVERNANCE_MODEL_ROLES,
  TENANT_GOVERNANCE_MODEL_FIELDS
} from '../constants.js';
import { GovernanceOperatingModelProfile } from '../contracts/governance-operating-model-profile.js';
import { GovernanceComplianceValidationResult } from '../contracts/governance-compliance-validation-result.js';

export class GovernanceOperatingModelDescriptor {
  objectives() { return values(GOVERNANCE_OPERATING_MODEL_OBJECTIVES); }
  principles() { return values(GOVERNANCE_OPERATING_MODEL_PRINCIPLES); }
  federationScopes() { return values(GOVERNANCE_FEDERATION_SCOPES); }
  governanceLevels() { return values(GOVERNANCE_LEVELS); }
  authorities() { return values(GOVERNANCE_AUTHORITIES); }
  roles() { return values(CORE_GOVERNANCE_ROLES); }
  responsibilityTypes() { return values(GOVERNANCE_RESPONSIBILITY_TYPES); }
  decisionRightFields() { return values(DECISION_RIGHT_FIELDS); }
  decisionClasses() { return values(GOVERNANCE_DECISION_CLASSES); }
  delegatedAuthorityRequirements() { return values(DELEGATED_AUTHORITY_REQUIREMENTS); }
  automatedAuthorityRequirements() { return values(AUTOMATED_AUTHORITY_REQUIREMENTS); }
  forumTypes() { return values(GOVERNANCE_FORUM_TYPES); }
  forumCharterFields() { return values(FORUM_CHARTER_FIELDS); }
  assuranceLines() { return values(ASSURANCE_LINES); }
  externalAssuranceProviders() { return values(EXTERNAL_ASSURANCE_PROVIDERS); }
  decisionLifecycleStages() { return values(GOVERNANCE_DECISION_LIFECYCLE_STAGES); }
  decisionRecordFields() { return values(GOVERNANCE_DECISION_RECORD_FIELDS); }
  escalationTriggers() { return values(GOVERNANCE_ESCALATION_TRIGGERS); }
  emergencyGovernanceFields() { return values(EMERGENCY_GOVERNANCE_FIELDS); }
  governanceRhythms() { return values(GOVERNANCE_RHYTHMS); }
  informationTypes() { return values(GOVERNANCE_INFORMATION_TYPES); }
  reportViews() { return values(GOVERNANCE_REPORT_VIEWS); }
  attestationFields() { return values(ATTESTATION_FIELDS); }
  tenantGovernanceFields() { return values(TENANT_GOVERNANCE_MODEL_FIELDS); }
  propertyGovernanceFields() { return values(PROPERTY_GOVERNANCE_MODEL_FIELDS); }
  supplierGovernanceRoles() { return values(SUPPLIER_GOVERNANCE_MODEL_ROLES); }
  crossTenantGovernanceTriggers() { return values(CROSS_TENANT_GOVERNANCE_TRIGGERS); }
  governanceServiceTypes() { return values(GOVERNANCE_SERVICE_TYPES); }
  effectivenessOutcomes() { return values(GOVERNANCE_EFFECTIVENESS_OUTCOMES); }
  maturityStages() { return values(GOVERNANCE_MATURITY_STAGES); }
  reviewTriggers() { return values(OPERATING_MODEL_REVIEW_TRIGGERS); }
  qualityAttributes() { return values(GOVERNANCE_OPERATING_MODEL_QUALITY_ATTRIBUTES); }
  architecturalRules() { return values(GOVERNANCE_OPERATING_MODEL_ARCHITECTURAL_RULES); }
  futureCapabilities() { return values(FUTURE_GOVERNANCE_OPERATING_MODEL_CAPABILITIES); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof GovernanceOperatingModelProfile
      ? profileInput
      : new GovernanceOperatingModelProfile(profileInput);
    const errors = [];

    if (!profile.modelName) errors.push('Governance operating model profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Governance operating model objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'Governance operating principles must include');
    appendMissing(errors, profile.federationScopes, this.federationScopes(), 'Federated governance model must include');
    appendMissing(errors, profile.governanceLevels, this.governanceLevels(), 'Governance levels must include');
    appendMissing(errors, profile.authorities, this.authorities(), 'Governing authorities must include');
    appendMissing(errors, profile.roles, this.roles(), 'Core governance roles must include');
    appendMissing(errors, profile.responsibilityTypes, this.responsibilityTypes(), 'Governed activities should distinguish');
    appendMissing(errors, profile.decisionRightFields, this.decisionRightFields(), 'Decision rights should define');
    appendMissing(errors, profile.decisionClasses, this.decisionClasses(), 'Decision classes must include');
    appendMissing(errors, profile.delegatedAuthorityRequirements, this.delegatedAuthorityRequirements(), 'Delegated authority requires');
    appendMissing(errors, profile.automatedAuthorityRequirements, this.automatedAuthorityRequirements(), 'Automated authority requires');
    appendMissing(errors, profile.forumTypes, this.forumTypes(), 'Governance forums may include');
    appendMissing(errors, profile.forumCharterFields, this.forumCharterFields(), 'Forum charters should define');
    appendMissing(errors, profile.assuranceLines, this.assuranceLines(), 'Assurance model must include');
    appendMissing(errors, profile.externalAssuranceProviders, this.externalAssuranceProviders(), 'External assurance may include');
    appendMissing(errors, profile.decisionLifecycleStages, this.decisionLifecycleStages(), 'Governance decision lifecycle must include');
    appendMissing(errors, profile.decisionRecordFields, this.decisionRecordFields(), 'Decision records should include');
    appendMissing(errors, profile.escalationTriggers, this.escalationTriggers(), 'Escalation may be triggered by');
    appendMissing(errors, profile.emergencyGovernanceFields, this.emergencyGovernanceFields(), 'Emergency governance must define');
    appendMissing(errors, profile.governanceRhythms, this.governanceRhythms(), 'Governance rhythms must include');
    appendMissing(errors, profile.informationTypes, this.informationTypes(), 'Governance information model must include');
    appendMissing(errors, profile.reportViews, this.reportViews(), 'Governance reporting should include');
    appendMissing(errors, profile.attestationFields, this.attestationFields(), 'Attestation should identify');
    appendMissing(errors, profile.tenantGovernanceFields, this.tenantGovernanceFields(), 'Tenant governance should define');
    appendMissing(errors, profile.propertyGovernanceFields, this.propertyGovernanceFields(), 'Property governance should define');
    appendMissing(errors, profile.supplierGovernanceRoles, this.supplierGovernanceRoles(), 'Supplier governance should assign');
    appendMissing(errors, profile.crossTenantGovernanceTriggers, this.crossTenantGovernanceTriggers(), 'Cross-tenant matters require enterprise authority for');
    appendMissing(errors, profile.governanceServiceTypes, this.governanceServiceTypes(), 'Governance services may include');
    appendMissing(errors, profile.effectivenessOutcomes, this.effectivenessOutcomes(), 'Governance effectiveness should include');
    appendMissing(errors, profile.maturityStages, this.maturityStages(), 'Governance maturity must include');
    appendMissing(errors, profile.reviewTriggers, this.reviewTriggers(), 'Operating model review should be triggered when');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Governance operating model quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Governance operating model architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future operating-model capabilities may include');
    if (profile.federatedModel !== true) errors.push('Governance operating model must be federated.');
    if (profile.decisionsNearAccountableScope !== true) errors.push('Decisions should be made as close as practical to the accountable scope.');
    if (profile.enterpriseGuardrailsPreserved !== true) errors.push('Federation must preserve enterprise guardrails.');
    if (profile.oneAccountableOwnerRequired !== true) errors.push('Every material governance object must have one accountable owner.');
    if (profile.highRiskSeparationRequired !== true) errors.push('High-risk matters should separate approval, implementation, verification, and assurance.');
    if (profile.evidenceBeforeConclusion !== true) errors.push('Governance decisions and assurance conclusions require evidence before conclusion.');
    if (profile.committeeDoesNotOwnAccountability !== true) errors.push('Forums must not obscure decision ownership.');
    if (profile.delegatedAuthorityControlled !== true) errors.push('Delegated authority must be controlled.');
    if (profile.automatedAuthorityControlled !== true) errors.push('Automated and AI authority must be controlled.');
    if (profile.aiRecommendationNotApproval !== true) errors.push('AI recommendation, confidence, or consensus does not constitute approval.');
    if (profile.assuranceIndependenceDefined !== true) errors.push('Assurance model must define independence and responsibility.');
    if (profile.emergencyAuthorityTemporary !== true) errors.push('Emergency authority is temporary and must not become permanent through inactivity.');
    if (profile.tenantSensitiveDetailsSegregated !== true) errors.push('Tenant-sensitive details must remain segregated.');
    if (profile.supplierRiskInternallyOwned !== true) errors.push('Supplier governance does not replace internal ownership.');
    if (profile.outcomeBasedEffectiveness !== true) errors.push('Governance effectiveness must be evaluated by outcomes.');
    if (profile.vendorNeutral !== true) errors.push('Governance Operating Model must remain vendor neutral.');
    if (profile.technologyIndependent !== true) errors.push('Governance Operating Model must remain technology independent.');
    if (profile.prescribesOrgChart === true) errors.push('Governance Operating Model does not prescribe a corporate organization chart.');
    if (profile.prescribesBoardStructure === true) errors.push('Governance Operating Model does not prescribe a legal board structure.');
    if (profile.prescribesCommitteeNames === true) errors.push('Governance Operating Model does not prescribe committee names.');
    if (profile.prescribesStaffingModel === true) errors.push('Governance Operating Model does not prescribe a staffing model.');
    if (profile.prescribesVendorProduct === true) errors.push('Governance Operating Model does not prescribe vendor products.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    assertLength(errors, this.objectives(), 15, 'objectives');
    assertLength(errors, this.principles(), 8, 'operating principles');
    assertLength(errors, this.federationScopes(), 9, 'federation scopes');
    assertLength(errors, this.governanceLevels(), 6, 'governance levels');
    assertLength(errors, this.authorities(), 17, 'governing authorities');
    assertLength(errors, this.roles(), 23, 'core roles');
    assertLength(errors, this.responsibilityTypes(), 11, 'responsibility types');
    assertLength(errors, this.decisionRightFields(), 17, 'decision-right fields');
    assertLength(errors, this.decisionClasses(), 9, 'decision classes');
    assertLength(errors, this.delegatedAuthorityRequirements(), 10, 'delegated authority requirements');
    assertLength(errors, this.automatedAuthorityRequirements(), 11, 'automated authority requirements');
    assertLength(errors, this.forumTypes(), 15, 'governance forums');
    assertLength(errors, this.forumCharterFields(), 14, 'forum-charter fields');
    assertLength(errors, this.assuranceLines(), 3, 'assurance lines');
    assertLength(errors, this.externalAssuranceProviders(), 8, 'external assurance providers');
    assertLength(errors, this.decisionLifecycleStages(), 10, 'decision lifecycle stages');
    assertLength(errors, this.decisionRecordFields(), 20, 'decision-record fields');
    assertLength(errors, this.escalationTriggers(), 15, 'escalation triggers');
    assertLength(errors, this.emergencyGovernanceFields(), 13, 'emergency governance fields');
    assertLength(errors, this.governanceRhythms(), 3, 'governance rhythms');
    assertLength(errors, this.informationTypes(), 21, 'information types');
    assertLength(errors, this.reportViews(), 15, 'report views');
    assertLength(errors, this.attestationFields(), 11, 'attestation fields');
    assertLength(errors, this.tenantGovernanceFields(), 15, 'tenant governance fields');
    assertLength(errors, this.propertyGovernanceFields(), 12, 'property governance fields');
    assertLength(errors, this.supplierGovernanceRoles(), 10, 'supplier governance roles');
    assertLength(errors, this.crossTenantGovernanceTriggers(), 10, 'cross-tenant governance triggers');
    assertLength(errors, this.governanceServiceTypes(), 11, 'governance service types');
    assertLength(errors, this.effectivenessOutcomes(), 13, 'effectiveness outcomes');
    assertLength(errors, this.maturityStages(), 7, 'maturity stages');
    assertLength(errors, this.reviewTriggers(), 11, 'review triggers');
    assertLength(errors, this.qualityAttributes(), 12, 'quality attributes');
    assertLength(errors, this.architecturalRules(), 18, 'architectural rules');
    assertLength(errors, this.futureCapabilities(), 12, 'future capabilities');

    if (errors.length > 0) {
      throw new PlatformError(
        GOVERNANCE_COMPLIANCE_ERROR_CODES.GOVERNANCE_OPERATING_MODEL_INVALID,
        'Governance Operating Model violates ARCH-012-02.',
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

function assertLength(errors, actual, expected, label) {
  if (actual.length !== expected) errors.push(`Governance Operating Model must include documented ${label}.`);
}

function validation(errors) {
  return new GovernanceComplianceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
