import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_ASSISTED_OPERATIONS_SUPPORT_TYPES,
  AUTOMATION_AUTHORITY_CONSTRAINTS,
  AUTOMATION_OPERATING_MODEL_CAPABILITIES,
  CORE_OPERATIONAL_ROLES,
  DOMAIN_AUTHORITY_RESPONSIBILITIES,
  ENTERPRISE_AUTHORITY_RESPONSIBILITIES,
  ENTERPRISE_OPERATING_MODEL_OBJECTIVES,
  ENTERPRISE_OPERATING_MODEL_PRINCIPLES,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  EnterpriseOperatingModelDescriptor,
  EnterpriseOperatingModelProfile,
  FEDERATED_OPERATING_STRUCTURE_NODES,
  FUTURE_OPERATING_MODEL_CAPABILITIES,
  MULTI_TENANT_OPERATING_MODEL_SCOPES,
  OPERATING_MODEL_ARCHITECTURAL_RULES,
  OPERATING_MODEL_QUALITY_ATTRIBUTES,
  OPERATING_MODEL_RELATIONSHIP_STAGES,
  OPERATING_MODEL_RESPONSIBILITY_TYPES,
  OPERATING_RHYTHMS,
  OPERATIONAL_AUTHORITY_LEVELS,
  OPERATIONAL_COMMUNICATION_REQUIREMENTS,
  OPERATIONAL_ENGAGEMENT_MODELS,
  OPERATIONAL_FORUMS,
  OPERATIONAL_HANDOFF_CONTEXT,
  OPERATIONAL_MATURITY_STAGES,
  OPERATIONAL_READINESS_REQUIREMENTS,
  PARTNER_OPERATING_AGREEMENT_ELEMENTS,
  PLATFORM_AUTHORITY_RESPONSIBILITIES,
  SERVICE_COMMITMENT_TYPES,
  TIME_BOUND_OPERATING_REQUIREMENTS,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

test('enterprise operating model exposes documented objectives, principles, structure, and authority', () => {
  const descriptor = new EnterpriseOperatingModelDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(ENTERPRISE_OPERATING_MODEL_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(ENTERPRISE_OPERATING_MODEL_PRINCIPLES));
  assert.deepEqual(descriptor.federatedStructureNodes(), Object.values(FEDERATED_OPERATING_STRUCTURE_NODES));
  assert.deepEqual(descriptor.authorityLevels(), Object.values(OPERATIONAL_AUTHORITY_LEVELS));
});

test('enterprise operating model exposes responsibility, execution, automation, readiness, maturity, and future metadata', () => {
  const descriptor = new EnterpriseOperatingModelDescriptor();

  assert.ok(descriptor.enterpriseAuthorityResponsibilities().includes(ENTERPRISE_AUTHORITY_RESPONSIBILITIES.CRISIS_DECLARATION));
  assert.ok(descriptor.platformAuthorityResponsibilities().includes(PLATFORM_AUTHORITY_RESPONSIBILITIES.PLATFORM_RELEASE_COORDINATION));
  assert.ok(descriptor.domainAuthorityResponsibilities().includes(DOMAIN_AUTHORITY_RESPONSIBILITIES.DOMAIN_IMPROVEMENT_PRIORITIES));
  assert.ok(descriptor.responsibilityTypes().includes(OPERATING_MODEL_RESPONSIBILITY_TYPES.EVIDENCE_OWNER));
  assert.ok(descriptor.roles().includes(CORE_OPERATIONAL_ROLES.CHANGE_AUTHORITY));
  assert.ok(descriptor.engagementModels().includes(OPERATIONAL_ENGAGEMENT_MODELS.IMPROVEMENT_OPERATIONS));
  assert.ok(descriptor.serviceCommitmentTypes().includes(SERVICE_COMMITMENT_TYPES.AI_QUALITY_AND_SAFETY_EXPECTATIONS));
  assert.ok(descriptor.handoffContext().includes(OPERATIONAL_HANDOFF_CONTEXT.COMMUNICATION_OBLIGATIONS));
  assert.ok(descriptor.timeBoundRequirements().includes(TIME_BOUND_OPERATING_REQUIREMENTS.CONTINUITY_DURING_UNAVAILABLE_COVERAGE));
  assert.ok(descriptor.operatingRhythms().includes(OPERATING_RHYTHMS.EVENT_DRIVEN));
  assert.ok(descriptor.operationalForums().includes(OPERATIONAL_FORUMS.AUTOMATION_OVERSIGHT_REVIEW));
  assert.ok(descriptor.communicationRequirements().includes(OPERATIONAL_COMMUNICATION_REQUIREMENTS.PROPORTIONATE_TO_IMPACT));
  assert.ok(descriptor.automationCapabilities().includes(AUTOMATION_OPERATING_MODEL_CAPABILITIES.PROPOSE_IMPROVEMENTS));
  assert.ok(descriptor.automationConstraints().includes(AUTOMATION_AUTHORITY_CONSTRAINTS.AUDITABILITY));
  assert.ok(descriptor.aiSupportTypes().includes(AI_ASSISTED_OPERATIONS_SUPPORT_TYPES.IMPROVEMENT_PROPOSALS));
  assert.ok(descriptor.multiTenantScopes().includes(MULTI_TENANT_OPERATING_MODEL_SCOPES.PROPERTY_OPERATIONS));
  assert.ok(descriptor.partnerAgreementElements().includes(PARTNER_OPERATING_AGREEMENT_ELEMENTS.EXIT_AND_REPLACEMENT_PROCEDURES));
  assert.ok(descriptor.readinessRequirements().includes(OPERATIONAL_READINESS_REQUIREMENTS.EVIDENCE_AND_REVIEW_MECHANISMS));
  assert.ok(descriptor.maturityStages().includes(OPERATIONAL_MATURITY_STAGES.AUTONOMOUS_WITHIN_GUARDRAILS));
  assert.ok(descriptor.relationshipFlow().includes(OPERATING_MODEL_RELATIONSHIP_STAGES.VERIFIED_OUTCOME));
  assert.ok(descriptor.qualityAttributes().includes(OPERATING_MODEL_QUALITY_ATTRIBUTES.ORGANIZATIONAL_SUSTAINABILITY));
  assert.ok(descriptor.architecturalRules().includes(OPERATING_MODEL_ARCHITECTURAL_RULES.RETAIN_HUMAN_ACCOUNTABILITY_FOR_CONSEQUENTIAL_DECISIONS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OPERATING_MODEL_CAPABILITIES.SELF_IMPROVING_OPERATING_RHYTHMS));
});

test('enterprise operating model validates complete federated operating profiles', () => {
  const descriptor = new EnterpriseOperatingModelDescriptor();
  const valid = descriptor.validateProfile(
    new EnterpriseOperatingModelProfile({
      modelName: 'Enterprise Operating Model',
      objectives: Object.values(ENTERPRISE_OPERATING_MODEL_OBJECTIVES),
      principles: Object.values(ENTERPRISE_OPERATING_MODEL_PRINCIPLES),
      federatedStructureNodes: Object.values(FEDERATED_OPERATING_STRUCTURE_NODES),
      authorityLevels: Object.values(OPERATIONAL_AUTHORITY_LEVELS),
      enterpriseAuthorityResponsibilities: Object.values(ENTERPRISE_AUTHORITY_RESPONSIBILITIES),
      platformAuthorityResponsibilities: Object.values(PLATFORM_AUTHORITY_RESPONSIBILITIES),
      domainAuthorityResponsibilities: Object.values(DOMAIN_AUTHORITY_RESPONSIBILITIES),
      responsibilityTypes: Object.values(OPERATING_MODEL_RESPONSIBILITY_TYPES),
      roles: Object.values(CORE_OPERATIONAL_ROLES),
      engagementModels: Object.values(OPERATIONAL_ENGAGEMENT_MODELS),
      serviceCommitmentTypes: Object.values(SERVICE_COMMITMENT_TYPES),
      handoffContext: Object.values(OPERATIONAL_HANDOFF_CONTEXT),
      timeBoundRequirements: Object.values(TIME_BOUND_OPERATING_REQUIREMENTS),
      operatingRhythms: Object.values(OPERATING_RHYTHMS),
      operationalForums: Object.values(OPERATIONAL_FORUMS),
      communicationRequirements: Object.values(OPERATIONAL_COMMUNICATION_REQUIREMENTS),
      automationCapabilities: Object.values(AUTOMATION_OPERATING_MODEL_CAPABILITIES),
      automationConstraints: Object.values(AUTOMATION_AUTHORITY_CONSTRAINTS),
      aiSupportTypes: Object.values(AI_ASSISTED_OPERATIONS_SUPPORT_TYPES),
      multiTenantScopes: Object.values(MULTI_TENANT_OPERATING_MODEL_SCOPES),
      partnerAgreementElements: Object.values(PARTNER_OPERATING_AGREEMENT_ELEMENTS),
      readinessRequirements: Object.values(OPERATIONAL_READINESS_REQUIREMENTS),
      maturityStages: Object.values(OPERATIONAL_MATURITY_STAGES),
      relationshipStages: Object.values(OPERATING_MODEL_RELATIONSHIP_STAGES),
      qualityAttributes: Object.values(OPERATING_MODEL_QUALITY_ATTRIBUTES),
      architecturalRules: Object.values(OPERATING_MODEL_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_OPERATING_MODEL_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    modelName: '',
    objectives: [ENTERPRISE_OPERATING_MODEL_OBJECTIVES.CLEAR_ACCOUNTABILITY_FOR_OUTCOMES],
    principles: [ENTERPRISE_OPERATING_MODEL_PRINCIPLES.BUSINESS_OUTCOME_OWNERSHIP],
    federatedStructureNodes: [FEDERATED_OPERATING_STRUCTURE_NODES.ENTERPRISE_OPERATIONS],
    authorityLevels: [OPERATIONAL_AUTHORITY_LEVELS.ENTERPRISE_AUTHORITY],
    enterpriseAuthorityResponsibilities: [ENTERPRISE_AUTHORITY_RESPONSIBILITIES.ENTERPRISE_OPERATIONAL_POLICY],
    platformAuthorityResponsibilities: [PLATFORM_AUTHORITY_RESPONSIBILITIES.SHARED_PLATFORM_HEALTH],
    domainAuthorityResponsibilities: [DOMAIN_AUTHORITY_RESPONSIBILITIES.DOMAIN_SERVICE_HEALTH],
    responsibilityTypes: [OPERATING_MODEL_RESPONSIBILITY_TYPES.ACCOUNTABLE],
    roles: [CORE_OPERATIONAL_ROLES.ENTERPRISE_OPERATIONS_OWNER],
    engagementModels: [OPERATIONAL_ENGAGEMENT_MODELS.ROUTINE_OPERATIONS],
    serviceCommitmentTypes: [SERVICE_COMMITMENT_TYPES.BUSINESS_OUTCOME_EXPECTATIONS],
    handoffContext: [OPERATIONAL_HANDOFF_CONTEXT.BUSINESS_IMPACT],
    timeBoundRequirements: [TIME_BOUND_OPERATING_REQUIREMENTS.COVERAGE_WINDOWS],
    operatingRhythms: [OPERATING_RHYTHMS.CONTINUOUS],
    operationalForums: [OPERATIONAL_FORUMS.ENTERPRISE_OPERATIONS_REVIEW],
    communicationRequirements: [OPERATIONAL_COMMUNICATION_REQUIREMENTS.TIMELY],
    automationCapabilities: [AUTOMATION_OPERATING_MODEL_CAPABILITIES.DETECT_CONDITIONS],
    automationConstraints: [AUTOMATION_AUTHORITY_CONSTRAINTS.SCOPE],
    aiSupportTypes: [AI_ASSISTED_OPERATIONS_SUPPORT_TYPES.EVIDENCE_SUMMARIZATION],
    multiTenantScopes: [MULTI_TENANT_OPERATING_MODEL_SCOPES.SHARED_OPERATIONS],
    partnerAgreementElements: [PARTNER_OPERATING_AGREEMENT_ELEMENTS.OWNERSHIP_BOUNDARIES],
    readinessRequirements: [OPERATIONAL_READINESS_REQUIREMENTS.ACCOUNTABLE_OWNER],
    maturityStages: [OPERATIONAL_MATURITY_STAGES.REACTIVE],
    relationshipStages: [OPERATING_MODEL_RELATIONSHIP_STAGES.OPERATING_MODEL],
    qualityAttributes: [OPERATING_MODEL_QUALITY_ATTRIBUTES.ACCOUNTABILITY],
    architecturalRules: [OPERATING_MODEL_ARCHITECTURAL_RULES.ASSIGN_ONE_ACCOUNTABLE_OWNER],
    futureCapabilities: [FUTURE_OPERATING_MODEL_CAPABILITIES.FEDERATED_AUTONOMOUS_OPERATIONS],
    businessOutcomeOwned: false,
    federatedExecutionEnabled: false,
    accountableOwnerExplicit: false,
    boundedAutonomyPreserved: false,
    separationOfDutiesSupported: false,
    evidenceBased: false,
    humanAuthorityRetained: false,
    continuousImprovementEnabled: false,
    handoffsAcknowledged: false,
    commitmentsMeasurableOwnedReviewed: false,
    tenantPropertyIsolationPreserved: false,
    automationConstrainedAndEscalating: false,
    aiOutputAdvisoryByDefault: false,
    operationalReadinessRequired: false,
    organizationIndependent: false,
    technologyIndependent: false,
    vendorNeutral: false,
    organizationalChartSpecific: true,
    staffingArrangementSpecific: true,
    vendorSpecific: true,
    operationalProductSpecific: true,
    anonymousAccountability: true,
    unrestrictedHighImpactAuthority: true,
    automationCreatesFalseHumanSupport: true,
    externalDependencyEliminatesAccountability: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /consistent-enterprise-and-property-operations/);
  assert.match(invalid.errors.join('\n'), /federated-execution/);
  assert.match(invalid.errors.join('\n'), /shared-platform-operations/);
  assert.match(invalid.errors.join('\n'), /platform-authority/);
  assert.match(invalid.errors.join('\n'), /cross-domain-prioritization/);
  assert.match(invalid.errors.join('\n'), /platform-capacity/);
  assert.match(invalid.errors.join('\n'), /domain-workflows/);
  assert.match(invalid.errors.join('\n'), /decision-authority/);
  assert.match(invalid.errors.join('\n'), /business-capability-owner/);
  assert.match(invalid.errors.join('\n'), /coordinated-operations/);
  assert.match(invalid.errors.join('\n'), /availability-objectives/);
  assert.match(invalid.errors.join('\n'), /current-operational-state/);
  assert.match(invalid.errors.join('\n'), /handoff-schedules/);
  assert.match(invalid.errors.join('\n'), /daily/);
  assert.match(invalid.errors.join('\n'), /service-performance-review/);
  assert.match(invalid.errors.join('\n'), /audience-appropriate/);
  assert.match(invalid.errors.join('\n'), /correlate-evidence/);
  assert.match(invalid.errors.join('\n'), /identity/);
  assert.match(invalid.errors.join('\n'), /impact-analysis/);
  assert.match(invalid.errors.join('\n'), /tenant-operations/);
  assert.match(invalid.errors.join('\n'), /service-commitments/);
  assert.match(invalid.errors.join('\n'), /defined-service-commitments/);
  assert.match(invalid.errors.join('\n'), /repeatable/);
  assert.match(invalid.errors.join('\n'), /Ownership and Authority/);
  assert.match(invalid.errors.join('\n'), /reliability/);
  assert.match(invalid.errors.join('\n'), /align-priorities-with-business-and-guest-outcomes/);
  assert.match(invalid.errors.join('\n'), /dynamic-operational-teams/);
  assert.match(invalid.errors.join('\n'), /business outcomes/);
  assert.match(invalid.errors.join('\n'), /anonymous or ambiguous/);
  assert.match(invalid.errors.join('\n'), /External dependency must not eliminate XeniosAI accountability/);
});

test('enterprise operating model assertion rejects incomplete metadata', () => {
  class IncompleteEnterpriseOperatingModelDescriptor extends EnterpriseOperatingModelDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteEnterpriseOperatingModelDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.ENTERPRISE_OPERATING_MODEL_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('enterprise operating model descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('EnterpriseOperatingModelDescriptor');

  assert.ok(descriptor instanceof EnterpriseOperatingModelDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
