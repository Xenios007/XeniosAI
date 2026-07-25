import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  TIME_BOUND_OPERATING_REQUIREMENTS
} from '../constants.js';
import { EnterpriseOperatingModelProfile } from '../contracts/enterprise-operating-model-profile.js';
import { EnterpriseOperationsValidationResult } from '../contracts/enterprise-operations-validation-result.js';

const RELATIONSHIP_FLOW = Object.freeze(Object.values(OPERATING_MODEL_RELATIONSHIP_STAGES));

export class EnterpriseOperatingModelDescriptor {
  objectives() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATING_MODEL_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATING_MODEL_PRINCIPLES));
  }

  federatedStructureNodes() {
    return Object.freeze(Object.values(FEDERATED_OPERATING_STRUCTURE_NODES));
  }

  authorityLevels() {
    return Object.freeze(Object.values(OPERATIONAL_AUTHORITY_LEVELS));
  }

  enterpriseAuthorityResponsibilities() {
    return Object.freeze(Object.values(ENTERPRISE_AUTHORITY_RESPONSIBILITIES));
  }

  platformAuthorityResponsibilities() {
    return Object.freeze(Object.values(PLATFORM_AUTHORITY_RESPONSIBILITIES));
  }

  domainAuthorityResponsibilities() {
    return Object.freeze(Object.values(DOMAIN_AUTHORITY_RESPONSIBILITIES));
  }

  responsibilityTypes() {
    return Object.freeze(Object.values(OPERATING_MODEL_RESPONSIBILITY_TYPES));
  }

  roles() {
    return Object.freeze(Object.values(CORE_OPERATIONAL_ROLES));
  }

  engagementModels() {
    return Object.freeze(Object.values(OPERATIONAL_ENGAGEMENT_MODELS));
  }

  serviceCommitmentTypes() {
    return Object.freeze(Object.values(SERVICE_COMMITMENT_TYPES));
  }

  handoffContext() {
    return Object.freeze(Object.values(OPERATIONAL_HANDOFF_CONTEXT));
  }

  timeBoundRequirements() {
    return Object.freeze(Object.values(TIME_BOUND_OPERATING_REQUIREMENTS));
  }

  operatingRhythms() {
    return Object.freeze(Object.values(OPERATING_RHYTHMS));
  }

  operationalForums() {
    return Object.freeze(Object.values(OPERATIONAL_FORUMS));
  }

  communicationRequirements() {
    return Object.freeze(Object.values(OPERATIONAL_COMMUNICATION_REQUIREMENTS));
  }

  automationCapabilities() {
    return Object.freeze(Object.values(AUTOMATION_OPERATING_MODEL_CAPABILITIES));
  }

  automationConstraints() {
    return Object.freeze(Object.values(AUTOMATION_AUTHORITY_CONSTRAINTS));
  }

  aiSupportTypes() {
    return Object.freeze(Object.values(AI_ASSISTED_OPERATIONS_SUPPORT_TYPES));
  }

  multiTenantScopes() {
    return Object.freeze(Object.values(MULTI_TENANT_OPERATING_MODEL_SCOPES));
  }

  partnerAgreementElements() {
    return Object.freeze(Object.values(PARTNER_OPERATING_AGREEMENT_ELEMENTS));
  }

  readinessRequirements() {
    return Object.freeze(Object.values(OPERATIONAL_READINESS_REQUIREMENTS));
  }

  maturityStages() {
    return Object.freeze(Object.values(OPERATIONAL_MATURITY_STAGES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  qualityAttributes() {
    return Object.freeze(Object.values(OPERATING_MODEL_QUALITY_ATTRIBUTES));
  }

  architecturalRules() {
    return Object.freeze(Object.values(OPERATING_MODEL_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_OPERATING_MODEL_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof EnterpriseOperatingModelProfile
      ? profileInput
      : new EnterpriseOperatingModelProfile(profileInput);
    const errors = [];

    if (!profile.modelName) errors.push('Enterprise operating model profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Enterprise operating model objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'Enterprise operating model principles must include');
    appendMissing(errors, profile.federatedStructureNodes, this.federatedStructureNodes(), 'Federated operating structure must include');
    appendMissing(errors, profile.authorityLevels, this.authorityLevels(), 'Operational authority levels must include');
    appendMissing(errors, profile.enterpriseAuthorityResponsibilities, this.enterpriseAuthorityResponsibilities(), 'Enterprise authority should include');
    appendMissing(errors, profile.platformAuthorityResponsibilities, this.platformAuthorityResponsibilities(), 'Platform authority should include');
    appendMissing(errors, profile.domainAuthorityResponsibilities, this.domainAuthorityResponsibilities(), 'Domain authority should include');
    appendMissing(errors, profile.responsibilityTypes, this.responsibilityTypes(), 'Accountability model must include');
    appendMissing(errors, profile.roles, this.roles(), 'Core operational roles must include');
    appendMissing(errors, profile.engagementModels, this.engagementModels(), 'Operational engagement models must include');
    appendMissing(errors, profile.serviceCommitmentTypes, this.serviceCommitmentTypes(), 'Service commitments may define');
    appendMissing(errors, profile.handoffContext, this.handoffContext(), 'Operational handoffs should preserve');
    appendMissing(errors, profile.timeBoundRequirements, this.timeBoundRequirements(), 'Time-bound operating models must define');
    appendMissing(errors, profile.operatingRhythms, this.operatingRhythms(), 'Operating rhythms must include');
    appendMissing(errors, profile.operationalForums, this.operationalForums(), 'Operational forums should include');
    appendMissing(errors, profile.communicationRequirements, this.communicationRequirements(), 'Operational communication must be');
    appendMissing(errors, profile.automationCapabilities, this.automationCapabilities(), 'Automated operational actors may');
    appendMissing(errors, profile.automationConstraints, this.automationConstraints(), 'Automation authority must be constrained by');
    appendMissing(errors, profile.aiSupportTypes, this.aiSupportTypes(), 'AI may support operators through');
    appendMissing(errors, profile.multiTenantScopes, this.multiTenantScopes(), 'Multi-tenant operating model must distinguish');
    appendMissing(errors, profile.partnerAgreementElements, this.partnerAgreementElements(), 'Partner operating agreements should define');
    appendMissing(errors, profile.readinessRequirements, this.readinessRequirements(), 'Operational readiness requires');
    appendMissing(errors, profile.maturityStages, this.maturityStages(), 'Operational maturity stages must include');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'Operating model relationship flow must include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Operating model quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Operating model architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future operating-model capabilities may include');
    if (profile.businessOutcomeOwned !== true) errors.push('Operational ownership must begin with business outcomes.');
    if (profile.federatedExecutionEnabled !== true) errors.push('Operational execution should occur close to affected capability, tenant, property, or service.');
    if (profile.accountableOwnerExplicit !== true) errors.push('Every operational capability must have one clearly accountable owner.');
    if (profile.boundedAutonomyPreserved !== true) errors.push('Operational actors must remain within documented authority, risk, scope, and policy boundaries.');
    if (profile.separationOfDutiesSupported !== true) errors.push('High-risk operational activity should separate request, approval, execution, and verification.');
    if (profile.evidenceBased !== true) errors.push('Operational decisions must use trustworthy business, technical, security, and contextual evidence.');
    if (profile.humanAuthorityRetained !== true) errors.push('Accountable human authority must remain available for high-risk or ambiguous decisions.');
    if (profile.continuousImprovementEnabled !== true) errors.push('The operating model must convert operational learning into prioritized improvement.');
    if (profile.handoffsAcknowledged !== true) errors.push('A handoff is incomplete until ownership or automated acceptance is acknowledged.');
    if (profile.commitmentsMeasurableOwnedReviewed !== true) errors.push('Service commitments must be measurable, realistic, owned, and reviewed.');
    if (profile.tenantPropertyIsolationPreserved !== true) errors.push('Cross-tenant operational actions require enterprise authority and strong isolation controls.');
    if (profile.automationConstrainedAndEscalating !== true) errors.push('Automation must be constrained and escalate when authority or confidence is exceeded.');
    if (profile.aiOutputAdvisoryByDefault !== true) errors.push('AI output remains advisory unless explicit policy authorizes autonomous execution.');
    if (profile.operationalReadinessRequired !== true) errors.push('Operational readiness must be evaluated before production use and after material change.');
    if (profile.organizationIndependent !== true) errors.push('The operating model must remain independent of organizational charts and staffing arrangements.');
    if (profile.technologyIndependent !== true) errors.push('The operating model must remain technology independent.');
    if (profile.vendorNeutral !== true) errors.push('The operating model must remain vendor neutral.');
    if (profile.organizationalChartSpecific === true) errors.push('Organizational charts are outside ARCH-011-02 scope.');
    if (profile.staffingArrangementSpecific === true) errors.push('Staffing arrangements are outside ARCH-011-02 scope.');
    if (profile.vendorSpecific === true) errors.push('Vendors are outside ARCH-011-02 scope.');
    if (profile.operationalProductSpecific === true) errors.push('Operational products are outside ARCH-011-02 scope.');
    if (profile.anonymousAccountability === true) errors.push('Accountability cannot be anonymous or ambiguous.');
    if (profile.unrestrictedHighImpactAuthority === true) errors.push('No actor should have unrestricted high-impact authority.');
    if (profile.automationCreatesFalseHumanSupport === true) errors.push('Automation must not create the appearance of human support where human authority is required.');
    if (profile.externalDependencyEliminatesAccountability === true) errors.push('External dependency must not eliminate XeniosAI accountability.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 12) errors.push('Enterprise Operating Model must include documented objectives.');
    if (this.principles().length !== 8) errors.push('Enterprise Operating Model must include documented principles.');
    if (this.federatedStructureNodes().length !== 12) errors.push('Enterprise Operating Model must include documented federated structure.');
    if (this.authorityLevels().length !== 6) errors.push('Enterprise Operating Model must include documented authority levels.');
    if (this.enterpriseAuthorityResponsibilities().length !== 8) errors.push('Enterprise Operating Model must include documented enterprise authority responsibilities.');
    if (this.platformAuthorityResponsibilities().length !== 7) errors.push('Enterprise Operating Model must include documented platform authority responsibilities.');
    if (this.domainAuthorityResponsibilities().length !== 6) errors.push('Enterprise Operating Model must include documented domain authority responsibilities.');
    if (this.responsibilityTypes().length !== 9) errors.push('Enterprise Operating Model must include documented responsibility types.');
    if (this.roles().length !== 14) errors.push('Enterprise Operating Model must include documented operational roles.');
    if (this.engagementModels().length !== 5) errors.push('Enterprise Operating Model must include documented engagement models.');
    if (this.serviceCommitmentTypes().length !== 12) errors.push('Enterprise Operating Model must include documented service commitment types.');
    if (this.handoffContext().length !== 12) errors.push('Enterprise Operating Model must include documented handoff context.');
    if (this.timeBoundRequirements().length !== 8) errors.push('Enterprise Operating Model must include documented time-bound requirements.');
    if (this.operatingRhythms().length !== 5) errors.push('Enterprise Operating Model must include documented operating rhythms.');
    if (this.operationalForums().length !== 12) errors.push('Enterprise Operating Model must include documented operational forums.');
    if (this.communicationRequirements().length !== 8) errors.push('Enterprise Operating Model must include documented communication requirements.');
    if (this.automationCapabilities().length !== 10) errors.push('Enterprise Operating Model must include documented automation capabilities.');
    if (this.automationConstraints().length !== 10) errors.push('Enterprise Operating Model must include documented automation constraints.');
    if (this.aiSupportTypes().length !== 10) errors.push('Enterprise Operating Model must include documented AI support types.');
    if (this.multiTenantScopes().length !== 3) errors.push('Enterprise Operating Model must include documented multi-tenant scopes.');
    if (this.partnerAgreementElements().length !== 10) errors.push('Enterprise Operating Model must include documented partner agreement elements.');
    if (this.readinessRequirements().length !== 13) errors.push('Enterprise Operating Model must include documented readiness requirements.');
    if (this.maturityStages().length !== 6) errors.push('Enterprise Operating Model must include documented maturity stages.');
    if (this.relationshipFlow().length !== 5) errors.push('Enterprise Operating Model must include documented relationship flow.');
    if (this.qualityAttributes().length !== 12) errors.push('Enterprise Operating Model must include documented quality attributes.');
    if (this.architecturalRules().length !== 14) errors.push('Enterprise Operating Model must include documented architectural rules.');
    if (this.futureCapabilities().length !== 10) errors.push('Enterprise Operating Model must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.ENTERPRISE_OPERATING_MODEL_INVALID,
        'Enterprise Operating Model violates ARCH-011-02.',
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
  return new EnterpriseOperationsValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
