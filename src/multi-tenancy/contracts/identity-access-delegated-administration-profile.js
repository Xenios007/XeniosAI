export class IdentityAccessDelegatedAdministrationProfile {
  constructor({
    profileName,
    accessPrinciples = [], identityCategories = [], identityMembershipCardinalities = [], membershipFields = [],
    membershipLifecycleStages = [], federationRequirements = [], justInTimeConditions = [], tenantSelectionControls = [],
    tenantContextClaims = [], authorizationFactors = [], resourceOwnershipChecks = [], roleCategories = [],
    propertyScopedAccessGrants = [], delegableResponsibilities = [], delegationProhibitions = [], delegationRules = [],
    segregationOfDutiesExamples = [], workloadIdentityControls = [], integrationIdentityControls = [],
    workflowAgentAuthorityElements = [], supportSessionFields = [], emergencyAccessRequirements = [],
    crossTenantCapabilityRequirements = [], sessionTokenBoundaries = [], cachingProhibitions = [],
    accessLifecycleTriggers = [], protectedAccessDataTypes = [], accessEvidenceTypes = [], accessReviewAreas = [],
    failureConditions = [], testingRequirements = [], architecturalRules = [],
    authenticationEstablishesIdentityOnly = true, accessRequiresCurrentMembershipOrBinding = true,
    propertyScopeNarrowsAuthority = true, authorizationEvaluatesFullContext = true, delegationCanOnlyPreserveOrNarrow = true,
    adminAccessSeparateFromBusinessAccess = true, missingScopeFailsClosed = true, accessRevokedOnChange = true,
    agentAuthorityBoundedNeverAmbient = true, identityMembershipSeparateLifecycles = true,
    tenantSelectionExplicitWhenAmbiguous = true, providerValidatesResourceOwnership = true,
    tenantContextMinimizedAndProtected = true, delegationTransitivelyRevocable = true, supportUsesScopedSessions = true,
    emergencyAccessTemporaryAndReviewed = true, crossTenantSegregatedFromTenantInterfaces = true,
    platformOperatorsImplicitTenantRight = false, clientHeaderSufficientAuthority = false,
    delegationExceedsDelegatorScope = false, propertyAdminGrantsTenantWideAuthority = false,
    workloadIdentityAutomaticTenantContentAccess = false, refreshPreservesRevokedAuthority = false,
    cacheReusesDecisionAcrossTenants = false, tenantAdminGrantsCrossTenantAuthority = false,
    childWorkflowExpandsAuthority = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      accessPrinciples, identityCategories, identityMembershipCardinalities, membershipFields, membershipLifecycleStages,
      federationRequirements, justInTimeConditions, tenantSelectionControls, tenantContextClaims, authorizationFactors,
      resourceOwnershipChecks, roleCategories, propertyScopedAccessGrants, delegableResponsibilities, delegationProhibitions,
      delegationRules, segregationOfDutiesExamples, workloadIdentityControls, integrationIdentityControls,
      workflowAgentAuthorityElements, supportSessionFields, emergencyAccessRequirements, crossTenantCapabilityRequirements,
      sessionTokenBoundaries, cachingProhibitions, accessLifecycleTriggers, protectedAccessDataTypes, accessEvidenceTypes,
      accessReviewAreas, failureConditions, testingRequirements, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      authenticationEstablishesIdentityOnly, accessRequiresCurrentMembershipOrBinding, propertyScopeNarrowsAuthority,
      authorizationEvaluatesFullContext, delegationCanOnlyPreserveOrNarrow, adminAccessSeparateFromBusinessAccess,
      missingScopeFailsClosed, accessRevokedOnChange, agentAuthorityBoundedNeverAmbient, identityMembershipSeparateLifecycles,
      tenantSelectionExplicitWhenAmbiguous, providerValidatesResourceOwnership, tenantContextMinimizedAndProtected,
      delegationTransitivelyRevocable, supportUsesScopedSessions, emergencyAccessTemporaryAndReviewed,
      crossTenantSegregatedFromTenantInterfaces, platformOperatorsImplicitTenantRight, clientHeaderSufficientAuthority,
      delegationExceedsDelegatorScope, propertyAdminGrantsTenantWideAuthority, workloadIdentityAutomaticTenantContentAccess,
      refreshPreservesRevokedAuthority, cacheReusesDecisionAcrossTenants, tenantAdminGrantsCrossTenantAuthority,
      childWorkflowExpandsAuthority
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
