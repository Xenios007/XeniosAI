import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  GovernanceOperatingModelDescriptor,
  GovernanceOperatingModelProfile,
  OPERATING_MODEL_REVIEW_TRIGGERS,
  PROPERTY_GOVERNANCE_MODEL_FIELDS,
  SUPPLIER_GOVERNANCE_MODEL_ROLES,
  TENANT_GOVERNANCE_MODEL_FIELDS,
  addGovernanceCompliance
} from '../../src/governance-compliance/index.js';

test('governance operating model exposes documented objectives, principles, scopes, levels, and authorities', () => {
  const descriptor = new GovernanceOperatingModelDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(GOVERNANCE_OPERATING_MODEL_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(GOVERNANCE_OPERATING_MODEL_PRINCIPLES));
  assert.deepEqual(descriptor.federationScopes(), Object.values(GOVERNANCE_FEDERATION_SCOPES));
  assert.deepEqual(descriptor.governanceLevels(), Object.values(GOVERNANCE_LEVELS));
  assert.deepEqual(descriptor.authorities(), Object.values(GOVERNANCE_AUTHORITIES));
});

test('governance operating model exposes roles, decisions, authority, forums, assurance, and escalation', () => {
  const descriptor = new GovernanceOperatingModelDescriptor();

  assert.ok(descriptor.roles().includes(CORE_GOVERNANCE_ROLES.AI_GOVERNANCE_OWNER));
  assert.ok(descriptor.responsibilityTypes().includes(GOVERNANCE_RESPONSIBILITY_TYPES.ESCALATION_OWNER));
  assert.ok(descriptor.decisionRightFields().includes(DECISION_RIGHT_FIELDS.DELEGATION_RULES));
  assert.ok(descriptor.decisionClasses().includes(GOVERNANCE_DECISION_CLASSES.EMERGENCY));
  assert.ok(descriptor.delegatedAuthorityRequirements().includes(DELEGATED_AUTHORITY_REQUIREMENTS.SUBDELEGATION_CONTROLLED));
  assert.ok(descriptor.automatedAuthorityRequirements().includes(AUTOMATED_AUTHORITY_REQUIREMENTS.HUMAN_ESCALATION_AVAILABLE));
  assert.ok(descriptor.forumTypes().includes(GOVERNANCE_FORUM_TYPES.FINDING_AND_REMEDIATION_REVIEW));
  assert.ok(descriptor.forumCharterFields().includes(FORUM_CHARTER_FIELDS.REVIEW_DATE));
  assert.ok(descriptor.assuranceLines().includes(ASSURANCE_LINES.THIRD_LINE_INDEPENDENT_ASSURANCE));
  assert.ok(descriptor.externalAssuranceProviders().includes(EXTERNAL_ASSURANCE_PROVIDERS.PRIVACY_OR_AI_ASSESSORS));
  assert.ok(descriptor.decisionLifecycleStages().includes(GOVERNANCE_DECISION_LIFECYCLE_STAGES.REVIEW_RENEW_REPLACE_OR_RETIRE));
  assert.ok(descriptor.decisionRecordFields().includes(GOVERNANCE_DECISION_RECORD_FIELDS.RELATED_ARTIFACTS));
  assert.ok(descriptor.escalationTriggers().includes(GOVERNANCE_ESCALATION_TRIGGERS.CRISIS_CONDITION));
  assert.ok(descriptor.emergencyGovernanceFields().includes(EMERGENCY_GOVERNANCE_FIELDS.REMEDIATION));
});

test('governance operating model exposes rhythms, reporting, tenant, property, supplier, maturity, and future metadata', () => {
  const descriptor = new GovernanceOperatingModelDescriptor();

  assert.ok(descriptor.governanceRhythms().includes(GOVERNANCE_RHYTHMS.EVENT_DRIVEN));
  assert.ok(descriptor.informationTypes().includes(GOVERNANCE_INFORMATION_TYPES.ATTESTATIONS));
  assert.ok(descriptor.reportViews().includes(GOVERNANCE_REPORT_VIEWS.ARCHITECTURE_DEVIATIONS));
  assert.ok(descriptor.attestationFields().includes(ATTESTATION_FIELDS.REQUIRED_FOLLOW_UP));
  assert.ok(descriptor.tenantGovernanceFields().includes(TENANT_GOVERNANCE_MODEL_FIELDS.SUPPLIER_AND_INTEGRATION_CHOICES));
  assert.ok(descriptor.propertyGovernanceFields().includes(PROPERTY_GOVERNANCE_MODEL_FIELDS.RECONCILIATION));
  assert.ok(descriptor.supplierGovernanceRoles().includes(SUPPLIER_GOVERNANCE_MODEL_ROLES.EXIT_OWNER));
  assert.ok(descriptor.crossTenantGovernanceTriggers().includes(CROSS_TENANT_GOVERNANCE_TRIGGERS.EVIDENCE_BOUNDARIES));
  assert.ok(descriptor.governanceServiceTypes().includes(GOVERNANCE_SERVICE_TYPES.GOVERNANCE_REPORTING_SERVICE));
  assert.ok(descriptor.effectivenessOutcomes().includes(GOVERNANCE_EFFECTIVENESS_OUTCOMES.ARCHITECTURE_ALIGNMENT));
  assert.ok(descriptor.maturityStages().includes(GOVERNANCE_MATURITY_STAGES.CONTINUOUS_AND_MACHINE_ASSISTED));
  assert.ok(descriptor.reviewTriggers().includes(OPERATING_MODEL_REVIEW_TRIGGERS.ASSURANCE_REVEALS_WEAKNESS));
  assert.ok(descriptor.qualityAttributes().includes(GOVERNANCE_OPERATING_MODEL_QUALITY_ATTRIBUTES.INDEPENDENCE));
  assert.ok(descriptor.architecturalRules().includes(GOVERNANCE_OPERATING_MODEL_ARCHITECTURAL_RULES.GOVERN_EMERGENCY_AUTHORITY));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_GOVERNANCE_OPERATING_MODEL_CAPABILITIES.ADAPTIVE_GOVERNANCE_RHYTHMS));
});

test('governance operating model validates complete profiles and rejects architecture violations', () => {
  const descriptor = new GovernanceOperatingModelDescriptor();
  const valid = descriptor.validateProfile(
    new GovernanceOperatingModelProfile({
      modelName: 'Governance Operating Model',
      objectives: Object.values(GOVERNANCE_OPERATING_MODEL_OBJECTIVES),
      principles: Object.values(GOVERNANCE_OPERATING_MODEL_PRINCIPLES),
      federationScopes: Object.values(GOVERNANCE_FEDERATION_SCOPES),
      governanceLevels: Object.values(GOVERNANCE_LEVELS),
      authorities: Object.values(GOVERNANCE_AUTHORITIES),
      roles: Object.values(CORE_GOVERNANCE_ROLES),
      responsibilityTypes: Object.values(GOVERNANCE_RESPONSIBILITY_TYPES),
      decisionRightFields: Object.values(DECISION_RIGHT_FIELDS),
      decisionClasses: Object.values(GOVERNANCE_DECISION_CLASSES),
      delegatedAuthorityRequirements: Object.values(DELEGATED_AUTHORITY_REQUIREMENTS),
      automatedAuthorityRequirements: Object.values(AUTOMATED_AUTHORITY_REQUIREMENTS),
      forumTypes: Object.values(GOVERNANCE_FORUM_TYPES),
      forumCharterFields: Object.values(FORUM_CHARTER_FIELDS),
      assuranceLines: Object.values(ASSURANCE_LINES),
      externalAssuranceProviders: Object.values(EXTERNAL_ASSURANCE_PROVIDERS),
      decisionLifecycleStages: Object.values(GOVERNANCE_DECISION_LIFECYCLE_STAGES),
      decisionRecordFields: Object.values(GOVERNANCE_DECISION_RECORD_FIELDS),
      escalationTriggers: Object.values(GOVERNANCE_ESCALATION_TRIGGERS),
      emergencyGovernanceFields: Object.values(EMERGENCY_GOVERNANCE_FIELDS),
      governanceRhythms: Object.values(GOVERNANCE_RHYTHMS),
      informationTypes: Object.values(GOVERNANCE_INFORMATION_TYPES),
      reportViews: Object.values(GOVERNANCE_REPORT_VIEWS),
      attestationFields: Object.values(ATTESTATION_FIELDS),
      tenantGovernanceFields: Object.values(TENANT_GOVERNANCE_MODEL_FIELDS),
      propertyGovernanceFields: Object.values(PROPERTY_GOVERNANCE_MODEL_FIELDS),
      supplierGovernanceRoles: Object.values(SUPPLIER_GOVERNANCE_MODEL_ROLES),
      crossTenantGovernanceTriggers: Object.values(CROSS_TENANT_GOVERNANCE_TRIGGERS),
      governanceServiceTypes: Object.values(GOVERNANCE_SERVICE_TYPES),
      effectivenessOutcomes: Object.values(GOVERNANCE_EFFECTIVENESS_OUTCOMES),
      maturityStages: Object.values(GOVERNANCE_MATURITY_STAGES),
      reviewTriggers: Object.values(OPERATING_MODEL_REVIEW_TRIGGERS),
      qualityAttributes: Object.values(GOVERNANCE_OPERATING_MODEL_QUALITY_ATTRIBUTES),
      architecturalRules: Object.values(GOVERNANCE_OPERATING_MODEL_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_GOVERNANCE_OPERATING_MODEL_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    modelName: '',
    objectives: [GOVERNANCE_OPERATING_MODEL_OBJECTIVES.CLEAR_ENTERPRISE_ACCOUNTABILITY],
    principles: [GOVERNANCE_OPERATING_MODEL_PRINCIPLES.AUTHORITY_FOLLOWS_ACCOUNTABILITY],
    federationScopes: [GOVERNANCE_FEDERATION_SCOPES.ENTERPRISE_GOVERNANCE],
    governanceLevels: [GOVERNANCE_LEVELS.ENTERPRISE],
    authorities: [GOVERNANCE_AUTHORITIES.ENTERPRISE_GOVERNING_AUTHORITY],
    roles: [CORE_GOVERNANCE_ROLES.ENTERPRISE_GOVERNANCE_OWNER],
    responsibilityTypes: [GOVERNANCE_RESPONSIBILITY_TYPES.ACCOUNTABLE],
    decisionRightFields: [DECISION_RIGHT_FIELDS.DECISION_NAME],
    decisionClasses: [GOVERNANCE_DECISION_CLASSES.STRATEGIC],
    delegatedAuthorityRequirements: [DELEGATED_AUTHORITY_REQUIREMENTS.DELEGATING_ACTOR_HOLDS_AUTHORITY],
    automatedAuthorityRequirements: [AUTOMATED_AUTHORITY_REQUIREMENTS.ACTION_CLASS_AUTHORIZED],
    forumTypes: [GOVERNANCE_FORUM_TYPES.ENTERPRISE_GOVERNANCE_REVIEW],
    forumCharterFields: [FORUM_CHARTER_FIELDS.PURPOSE],
    assuranceLines: [ASSURANCE_LINES.FIRST_LINE_OWNERSHIP_AND_OPERATION],
    externalAssuranceProviders: [EXTERNAL_ASSURANCE_PROVIDERS.INDEPENDENT_AUDITORS],
    decisionLifecycleStages: [GOVERNANCE_DECISION_LIFECYCLE_STAGES.IDENTIFY_DECISION_NEED],
    decisionRecordFields: [GOVERNANCE_DECISION_RECORD_FIELDS.DECISION_IDENTIFIER],
    escalationTriggers: [GOVERNANCE_ESCALATION_TRIGGERS.AUTHORITY_EXCEEDED],
    emergencyGovernanceFields: [EMERGENCY_GOVERNANCE_FIELDS.ACTIVATION_CRITERIA],
    governanceRhythms: [GOVERNANCE_RHYTHMS.CONTINUOUS],
    informationTypes: [GOVERNANCE_INFORMATION_TYPES.ACTORS_AND_ROLES],
    reportViews: [GOVERNANCE_REPORT_VIEWS.ENTERPRISE_RISK_POSTURE],
    attestationFields: [ATTESTATION_FIELDS.ATTESTING_AUTHORITY],
    tenantGovernanceFields: [TENANT_GOVERNANCE_MODEL_FIELDS.TENANT_GOVERNING_AUTHORITY],
    propertyGovernanceFields: [PROPERTY_GOVERNANCE_MODEL_FIELDS.PROPERTY_ACCOUNTABLE_OWNER],
    supplierGovernanceRoles: [SUPPLIER_GOVERNANCE_MODEL_ROLES.BUSINESS_OWNER],
    crossTenantGovernanceTriggers: [CROSS_TENANT_GOVERNANCE_TRIGGERS.SHARED_SERVICES],
    governanceServiceTypes: [GOVERNANCE_SERVICE_TYPES.POLICY_SERVICE],
    effectivenessOutcomes: [GOVERNANCE_EFFECTIVENESS_OUTCOMES.DECISION_CLARITY],
    maturityStages: [GOVERNANCE_MATURITY_STAGES.REACTIVE],
    reviewTriggers: [OPERATING_MODEL_REVIEW_TRIGGERS.ENTERPRISE_STRATEGY_CHANGES],
    qualityAttributes: [GOVERNANCE_OPERATING_MODEL_QUALITY_ATTRIBUTES.ACCOUNTABILITY],
    architecturalRules: [GOVERNANCE_OPERATING_MODEL_ARCHITECTURAL_RULES.ASSIGN_ONE_ACCOUNTABLE_OWNER],
    futureCapabilities: [FUTURE_GOVERNANCE_OPERATING_MODEL_CAPABILITIES.MACHINE_READABLE_DECISION_RIGHTS],
    federatedModel: false,
    decisionsNearAccountableScope: false,
    enterpriseGuardrailsPreserved: false,
    oneAccountableOwnerRequired: false,
    highRiskSeparationRequired: false,
    evidenceBeforeConclusion: false,
    committeeDoesNotOwnAccountability: false,
    delegatedAuthorityControlled: false,
    automatedAuthorityControlled: false,
    aiRecommendationNotApproval: false,
    assuranceIndependenceDefined: false,
    emergencyAuthorityTemporary: false,
    tenantSensitiveDetailsSegregated: false,
    supplierRiskInternallyOwned: false,
    outcomeBasedEffectiveness: false,
    vendorNeutral: false,
    technologyIndependent: false,
    prescribesOrgChart: true,
    prescribesBoardStructure: true,
    prescribesCommitteeNames: true,
    prescribesStaffingModel: true,
    prescribesVendorProduct: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /explicit-decision-authority/);
  assert.match(invalid.errors.join('\n'), /avoid-governance-by-committee/);
  assert.match(invalid.errors.join('\n'), /supplier-governance/);
  assert.match(invalid.errors.join('\n'), /service/);
  assert.match(invalid.errors.join('\n'), /finding-closure-authority/);
  assert.match(invalid.errors.join('\n'), /remediation-owner/);
  assert.match(invalid.errors.join('\n'), /escalation-owner/);
  assert.match(invalid.errors.join('\n'), /delegation-rules/);
  assert.match(invalid.errors.join('\n'), /emergency/);
  assert.match(invalid.errors.join('\n'), /subdelegation-controlled/);
  assert.match(invalid.errors.join('\n'), /human-escalation-available/);
  assert.match(invalid.errors.join('\n'), /finding-and-remediation-review/);
  assert.match(invalid.errors.join('\n'), /review-date/);
  assert.match(invalid.errors.join('\n'), /third-line-independent-assurance/);
  assert.match(invalid.errors.join('\n'), /privacy-or-ai-assessors/);
  assert.match(invalid.errors.join('\n'), /Review, Renew, Replace, or Retire/);
  assert.match(invalid.errors.join('\n'), /related-policies-adrs-controls-exceptions-and-findings/);
  assert.match(invalid.errors.join('\n'), /crisis-condition/);
  assert.match(invalid.errors.join('\n'), /remediation/);
  assert.match(invalid.errors.join('\n'), /event-driven/);
  assert.match(invalid.errors.join('\n'), /attestations/);
  assert.match(invalid.errors.join('\n'), /architecture-deviations/);
  assert.match(invalid.errors.join('\n'), /required-follow-up/);
  assert.match(invalid.errors.join('\n'), /supplier-and-integration-choices/);
  assert.match(invalid.errors.join('\n'), /reconciliation/);
  assert.match(invalid.errors.join('\n'), /exit-owner/);
  assert.match(invalid.errors.join('\n'), /evidence-boundaries/);
  assert.match(invalid.errors.join('\n'), /governance-reporting-service/);
  assert.match(invalid.errors.join('\n'), /architecture-alignment/);
  assert.match(invalid.errors.join('\n'), /continuous-and-machine-assisted/);
  assert.match(invalid.errors.join('\n'), /assurance-reveals-weakness/);
  assert.match(invalid.errors.join('\n'), /independence/);
  assert.match(invalid.errors.join('\n'), /temporary-and-reviewable/);
  assert.match(invalid.errors.join('\n'), /adaptive-governance-rhythms/);
  assert.match(invalid.errors.join('\n'), /must be federated/);
  assert.match(invalid.errors.join('\n'), /AI recommendation/);
  assert.match(invalid.errors.join('\n'), /organization chart/);
  assert.match(invalid.errors.join('\n'), /vendor products/);
});

test('governance operating model assertion rejects incomplete metadata', () => {
  class IncompleteGovernanceOperatingModelDescriptor extends GovernanceOperatingModelDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteGovernanceOperatingModelDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === GOVERNANCE_COMPLIANCE_ERROR_CODES.GOVERNANCE_OPERATING_MODEL_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('governance operating model descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addGovernanceCompliance(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('GovernanceOperatingModelDescriptor');

  assert.ok(descriptor instanceof GovernanceOperatingModelDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
