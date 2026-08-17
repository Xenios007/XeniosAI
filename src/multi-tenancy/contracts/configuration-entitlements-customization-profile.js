export class ConfigurationEntitlementsCustomizationProfile {
  constructor({
    profileName,
    configPrinciples = [], configurationCategories = [], configurationHierarchyLevels = [], configurationItemScopeFields = [],
    mandatoryPlatformControlAreas = [], configurationDomains = [], schemaGovernanceFields = [], versioningSupportCapabilities = [],
    configurationResolutionSteps = [], inheritanceOverrideBehaviors = [], configurationValidationLevels = [],
    changeLifecycleStages = [], stagedRolloutTargets = [], brandingPreventions = [], localizationDistinctions = [],
    businessRuleRequirements = [], aiConfigurationElements = [], entitlementFields = [], featureReleaseQuestions = [],
    serviceTierElements = [], selfServiceCapabilities = [], extensionSettingFields = [], secretsProhibitedLocations = [],
    propagationDefinitions = [], configurationEvidenceFields = [], configurationObservabilitySignals = [],
    configurationFailureBehaviors = [], configurationTestingCoverageAreas = [], architecturalRules = [],
    changesOnlyThroughGovernedOptions = true, mandatoryControlsNonOverridable = true, effectiveConfigDeterministicExplainable = true,
    tenantPropertyScopeExplicit = true, schemasVersioned = true, secretsReferencedNotEmbedded = true,
    entitlementDistinctFromConfigAndAuthorization = true, featureReleaseDistinctFromEntitlement = true,
    highRiskChangesStagedApprovedReversible = true, tenantVariationUsesConfigurationNotForks = true,
    aiConfigWithinSafetyBoundaries = true, domainOwnersAuthoritativeForSemantics = true, resolutionExposesProvenanceAndReason = true,
    invalidConfigRejectedBeforeActivation = true, unavailableProviderPreservesMandatoryControls = true,
    propertySettingReferencesOtherTenantResource = false, arbitraryTenantCodeExecutedAsConfiguration = false,
    aiConfigGrantsNewDataAuthority = false, featureFlagsAuthoritativeForBillingOrSecurity = false,
    quotaAuthorizesUnpermittedCapabilityAccess = false, extensionConfigConvertsUntrustedPayloadToCode = false,
    configurationFailureFallsBackToAnotherTenant = false, invalidConfigurationPartiallyActivated = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      configPrinciples, configurationCategories, configurationHierarchyLevels, configurationItemScopeFields,
      mandatoryPlatformControlAreas, configurationDomains, schemaGovernanceFields, versioningSupportCapabilities,
      configurationResolutionSteps, inheritanceOverrideBehaviors, configurationValidationLevels, changeLifecycleStages,
      stagedRolloutTargets, brandingPreventions, localizationDistinctions, businessRuleRequirements, aiConfigurationElements,
      entitlementFields, featureReleaseQuestions, serviceTierElements, selfServiceCapabilities, extensionSettingFields,
      secretsProhibitedLocations, propagationDefinitions, configurationEvidenceFields, configurationObservabilitySignals,
      configurationFailureBehaviors, configurationTestingCoverageAreas, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      changesOnlyThroughGovernedOptions, mandatoryControlsNonOverridable, effectiveConfigDeterministicExplainable,
      tenantPropertyScopeExplicit, schemasVersioned, secretsReferencedNotEmbedded, entitlementDistinctFromConfigAndAuthorization,
      featureReleaseDistinctFromEntitlement, highRiskChangesStagedApprovedReversible, tenantVariationUsesConfigurationNotForks,
      aiConfigWithinSafetyBoundaries, domainOwnersAuthoritativeForSemantics, resolutionExposesProvenanceAndReason,
      invalidConfigRejectedBeforeActivation, unavailableProviderPreservesMandatoryControls,
      propertySettingReferencesOtherTenantResource, arbitraryTenantCodeExecutedAsConfiguration, aiConfigGrantsNewDataAuthority,
      featureFlagsAuthoritativeForBillingOrSecurity, quotaAuthorizesUnpermittedCapabilityAccess,
      extensionConfigConvertsUntrustedPayloadToCode, configurationFailureFallsBackToAnotherTenant,
      invalidConfigurationPartiallyActivated
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
