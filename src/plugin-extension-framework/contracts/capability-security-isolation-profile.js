export class CapabilitySecurityIsolationProfile {
  constructor({
    profileName,
    securityPrinciples = [], threatModelItems = [], capabilityGrantFields = [], grantDerivationLayers = [],
    capabilityGranularityExamples = [], runtimeIdentityFields = [], tenantIsolationDimensions = [],
    hostIsolationClasses = [], hostSecurityControls = [], providerEnforcementChecks = [], dataAccessProhibitions = [],
    extensionStoragePolicyFields = [], secretMediationControls = [], networkSecurityControls = [],
    inboundConnectivityControls = [], eventSecurityFields = [], workflowAgentSecurityProhibitions = [],
    uiExtensionSecurityControls = [], mcpSecurityVerificationItems = [], supplyChainAdmissionChecks = [],
    resourceContainmentLimits = [], failureContainmentControls = [], revocationTargets = [],
    incidentResponseSteps = [], securityEvidenceTypes = [], securityTestingAreas = [], architecturalRules = [],
    extensionsUntrustedByDefault = true, capabilityExplicitlyGrantedEnforceable = true, tenantPropertyScopeMandatory = true,
    hostProviderDefenseInDepth = true, networkEgressDenyByDefault = true, dataUsePurposeClassificationRetentionBounded = true,
    executionStorageIsolatedByInstallation = true, delegationCannotExpandCapability = true, securityStateRevokesRapidly = true,
    evidenceCompleteWithoutLeakage = true, noLayerBroadensStricterBound = true, hostValidationDoesNotReplaceProviderAuthorization = true,
    responsesMinimizedToCapabilityPurpose = true, redirectsRevalidatedToPreventBypass = true, toolDiscoveryFilteredByGrant = true,
    criticalAdvisoryCanDenyPreviouslyApprovedPackage = true, crossTenantExposureTreatedAsMaterialEvent = true,
    ambientCredentialsOrDatabaseAccessPermitted = false, extensionsModifyHostPolicyOrInspectNeighbors = false,
    publisherAccessesStorageWithoutProcessorRelationship = false, extensionsExposeArbitraryListeners = false,
    publishersForgeTenantScope = false, serverDescriptionsModifyPolicy = false, extensionFailureAllowedInAuthoritativeTransaction = false,
    uiExtensionsRenderAuthPrompts = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      securityPrinciples, threatModelItems, capabilityGrantFields, grantDerivationLayers, capabilityGranularityExamples,
      runtimeIdentityFields, tenantIsolationDimensions, hostIsolationClasses, hostSecurityControls, providerEnforcementChecks,
      dataAccessProhibitions, extensionStoragePolicyFields, secretMediationControls, networkSecurityControls,
      inboundConnectivityControls, eventSecurityFields, workflowAgentSecurityProhibitions, uiExtensionSecurityControls,
      mcpSecurityVerificationItems, supplyChainAdmissionChecks, resourceContainmentLimits, failureContainmentControls,
      revocationTargets, incidentResponseSteps, securityEvidenceTypes, securityTestingAreas, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      extensionsUntrustedByDefault, capabilityExplicitlyGrantedEnforceable, tenantPropertyScopeMandatory,
      hostProviderDefenseInDepth, networkEgressDenyByDefault, dataUsePurposeClassificationRetentionBounded,
      executionStorageIsolatedByInstallation, delegationCannotExpandCapability, securityStateRevokesRapidly,
      evidenceCompleteWithoutLeakage, noLayerBroadensStricterBound, hostValidationDoesNotReplaceProviderAuthorization,
      responsesMinimizedToCapabilityPurpose, redirectsRevalidatedToPreventBypass, toolDiscoveryFilteredByGrant,
      criticalAdvisoryCanDenyPreviouslyApprovedPackage, crossTenantExposureTreatedAsMaterialEvent,
      ambientCredentialsOrDatabaseAccessPermitted, extensionsModifyHostPolicyOrInspectNeighbors,
      publisherAccessesStorageWithoutProcessorRelationship, extensionsExposeArbitraryListeners, publishersForgeTenantScope,
      serverDescriptionsModifyPolicy, extensionFailureAllowedInAuthoritativeTransaction, uiExtensionsRenderAuthPrompts
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
