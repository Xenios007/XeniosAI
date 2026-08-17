import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../../api-sdk/contracts/api-sdk-validation-result.js';
import { IdentityAccessDelegatedAdministrationProfile } from '../contracts/identity-access-delegated-administration-profile.js';
import * as constants from '../identity-access-delegated-administration-constants.js';

const METADATA = Object.freeze({
  accessPrinciples: constants.ACCESS_PRINCIPLES, identityCategories: constants.IDENTITY_CATEGORIES,
  identityMembershipCardinalities: constants.IDENTITY_MEMBERSHIP_CARDINALITIES, membershipFields: constants.TENANT_MEMBERSHIP_FIELDS,
  membershipLifecycleStages: constants.MEMBERSHIP_LIFECYCLE_STAGES, federationRequirements: constants.FEDERATION_REQUIREMENTS,
  justInTimeConditions: constants.JUST_IN_TIME_CONDITIONS, tenantSelectionControls: constants.TENANT_SELECTION_CONTROLS,
  tenantContextClaims: constants.TENANT_CONTEXT_CLAIMS, authorizationFactors: constants.AUTHORIZATION_FACTORS,
  resourceOwnershipChecks: constants.RESOURCE_OWNERSHIP_CHECKS, roleCategories: constants.ROLE_CATEGORIES,
  propertyScopedAccessGrants: constants.PROPERTY_SCOPED_ACCESS_GRANTS, delegableResponsibilities: constants.DELEGABLE_RESPONSIBILITIES,
  delegationProhibitions: constants.DELEGATION_PROHIBITIONS, delegationRules: constants.DELEGATION_RULES,
  segregationOfDutiesExamples: constants.SEGREGATION_OF_DUTIES_EXAMPLES, workloadIdentityControls: constants.WORKLOAD_IDENTITY_CONTROLS,
  integrationIdentityControls: constants.INTEGRATION_IDENTITY_CONTROLS, workflowAgentAuthorityElements: constants.WORKFLOW_AGENT_AUTHORITY_ELEMENTS,
  supportSessionFields: constants.SUPPORT_SESSION_FIELDS, emergencyAccessRequirements: constants.EMERGENCY_ACCESS_REQUIREMENTS,
  crossTenantCapabilityRequirements: constants.CROSS_TENANT_CAPABILITY_REQUIREMENTS, sessionTokenBoundaries: constants.SESSION_TOKEN_BOUNDARIES,
  cachingProhibitions: constants.CACHING_PROHIBITIONS, accessLifecycleTriggers: constants.ACCESS_LIFECYCLE_TRIGGERS,
  protectedAccessDataTypes: constants.PROTECTED_ACCESS_DATA_TYPES, accessEvidenceTypes: constants.ACCESS_EVIDENCE_TYPES,
  accessReviewAreas: constants.ACCESS_REVIEW_AREAS, failureConditions: constants.ACCESS_FAILURE_CONDITIONS,
  testingRequirements: constants.ACCESS_TESTING_REQUIREMENTS, architecturalRules: constants.IDENTITY_ACCESS_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  authenticationEstablishesIdentityOnly: 'ARCH-018-04 requires authentication to establish identity, not tenant authority.',
  accessRequiresCurrentMembershipOrBinding: 'ARCH-018-04 requires tenant access to have a current membership or workload binding.',
  propertyScopeNarrowsAuthority: 'ARCH-018-04 requires property scope to narrow tenant authority.',
  authorizationEvaluatesFullContext: 'ARCH-018-04 requires authorization to evaluate actor, action, resource, tenant, property, purpose, entitlement, and conditions.',
  delegationCanOnlyPreserveOrNarrow: 'ARCH-018-04 requires delegation to preserve or narrow authority, never expand it.',
  adminAccessSeparateFromBusinessAccess: 'ARCH-018-04 requires administrative access to be separate from ordinary business access.',
  missingScopeFailsClosed: 'ARCH-018-04 requires missing or ambiguous scope to fail closed.',
  accessRevokedOnChange: 'ARCH-018-04 requires access to be revoked when membership, policy, risk, or tenant lifecycle changes.',
  agentAuthorityBoundedNeverAmbient: 'ARCH-018-04 requires AI agents and workflows to receive bounded delegated authority, never ambient authority.',
  identityMembershipSeparateLifecycles: 'ARCH-018-04 requires identity and tenant membership to be separate records and lifecycles.',
  tenantSelectionExplicitWhenAmbiguous: 'ARCH-018-04 requires tenant selection to be explicit when more than one valid scope exists.',
  providerValidatesResourceOwnership: 'ARCH-018-04 requires provider services to validate resource ownership and authorization.',
  tenantContextMinimizedAndProtected: 'ARCH-018-04 requires tenant context to be integrity protected, audience restricted, and minimized.',
  delegationTransitivelyRevocable: 'ARCH-018-04 requires delegation to be transitively revocable.',
  supportUsesScopedSessions: 'ARCH-018-04 requires platform support to use scoped sessions, not invisible impersonation.',
  emergencyAccessTemporaryAndReviewed: 'ARCH-018-04 requires emergency access to be temporary, monitored, and independently reviewed.',
  crossTenantSegregatedFromTenantInterfaces: 'ARCH-018-04 requires cross-tenant capabilities to be separate from ordinary tenant interfaces.'
});

const REQUIRED_FALSE = Object.freeze({
  platformOperatorsImplicitTenantRight: 'ARCH-018-04 prohibits platform operators from having an implicit right to tenant content.',
  clientHeaderSufficientAuthority: 'ARCH-018-04 prohibits a client-supplied tenant header from being sufficient evidence of authority.',
  delegationExceedsDelegatorScope: 'ARCH-018-04 prohibits a delegation grant from exceeding the delegator’s scope.',
  propertyAdminGrantsTenantWideAuthority: 'ARCH-018-04 prohibits property administrators from assigning tenant-wide authority unless separately delegated.',
  workloadIdentityAutomaticTenantContentAccess: 'ARCH-018-04 prohibits a platform service identity from automatically reading tenant content.',
  refreshPreservesRevokedAuthority: 'ARCH-018-04 prohibits refresh operations from preserving revoked authority indefinitely.',
  cacheReusesDecisionAcrossTenants: 'ARCH-018-04 prohibits authorization caches from reusing one tenant’s decision for another.',
  tenantAdminGrantsCrossTenantAuthority: 'ARCH-018-04 prohibits tenant administrators from granting cross-tenant platform authority.',
  childWorkflowExpandsAuthority: 'ARCH-018-04 prohibits child workflows and sub-agents from expanding delegated authority.'
});

export class IdentityAccessDelegatedAdministrationDescriptor {
  accessPrinciples() { return values(METADATA.accessPrinciples); } identityCategories() { return values(METADATA.identityCategories); }
  identityMembershipCardinalities() { return values(METADATA.identityMembershipCardinalities); } membershipFields() { return values(METADATA.membershipFields); }
  membershipLifecycleStages() { return values(METADATA.membershipLifecycleStages); } federationRequirements() { return values(METADATA.federationRequirements); }
  justInTimeConditions() { return values(METADATA.justInTimeConditions); } tenantSelectionControls() { return values(METADATA.tenantSelectionControls); }
  tenantContextClaims() { return values(METADATA.tenantContextClaims); } authorizationFactors() { return values(METADATA.authorizationFactors); }
  resourceOwnershipChecks() { return values(METADATA.resourceOwnershipChecks); } roleCategories() { return values(METADATA.roleCategories); }
  propertyScopedAccessGrants() { return values(METADATA.propertyScopedAccessGrants); } delegableResponsibilities() { return values(METADATA.delegableResponsibilities); }
  delegationProhibitions() { return values(METADATA.delegationProhibitions); } delegationRules() { return values(METADATA.delegationRules); }
  segregationOfDutiesExamples() { return values(METADATA.segregationOfDutiesExamples); } workloadIdentityControls() { return values(METADATA.workloadIdentityControls); }
  integrationIdentityControls() { return values(METADATA.integrationIdentityControls); } workflowAgentAuthorityElements() { return values(METADATA.workflowAgentAuthorityElements); }
  supportSessionFields() { return values(METADATA.supportSessionFields); } emergencyAccessRequirements() { return values(METADATA.emergencyAccessRequirements); }
  crossTenantCapabilityRequirements() { return values(METADATA.crossTenantCapabilityRequirements); } sessionTokenBoundaries() { return values(METADATA.sessionTokenBoundaries); }
  cachingProhibitions() { return values(METADATA.cachingProhibitions); } accessLifecycleTriggers() { return values(METADATA.accessLifecycleTriggers); }
  protectedAccessDataTypes() { return values(METADATA.protectedAccessDataTypes); } accessEvidenceTypes() { return values(METADATA.accessEvidenceTypes); }
  accessReviewAreas() { return values(METADATA.accessReviewAreas); } failureConditions() { return values(METADATA.failureConditions); }
  testingRequirements() { return values(METADATA.testingRequirements); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof IdentityAccessDelegatedAdministrationProfile ? input : new IdentityAccessDelegatedAdministrationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Identity, access, and delegated administration profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Identity, Access, and Delegated Administration must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.IDENTITY_ACCESS_DELEGATED_ADMINISTRATION_ERROR_CODE, 'Identity, Access, and Delegated Administration violates ARCH-018-04.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
