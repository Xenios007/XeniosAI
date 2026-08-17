export class PluginSdkDeveloperExperienceAndTestingProfile {
  constructor({
    profileName,
    developerExperiencePrinciples = [], sdkScopeItems = [], sdkLayers = [], sdkProhibitedBehaviors = [],
    languageSdkReleaseDeclarations = [], sdkGenerationProperties = [], developerPortalCapabilities = [],
    extensionPointCatalogFields = [], projectTemplateElements = [], localSandboxEmulations = [],
    testTenantRequirements = [], unitTestingCoverageAreas = [], contractTestingAreas = [], integrationTestingAreas = [],
    securityTestingRequirements = [], failureTestingScenarios = [], compatibilityTestingDimensions = [],
    uninstallTestingRequirements = [], conformanceProfileResultFields = [], developerWorkflowSteps = [],
    packagingToolingCapabilities = [], publishingToolingBehaviors = [], documentationRequirements = [],
    referenceExtensionExamples = [], developerObservabilityElements = [], sdkLifecycleFields = [], architecturalRules = [],
    pavedRoadFasterThanPrivateIntegrationShortcuts = true, sdkTracesToCanonicalContractsWithoutHiddenAuthority = true,
    localDevelopmentBehavesLikeHostForCapabilityAndTenantRules = true,
    everyPackagePassesApplicableMultiTenantSecurityFailureCompatibilityTests = true,
    buildArtifactsHaveExactDigestsInventoriesProvenance = true, publishingSeparatesPackageSubmissionFromTenantInstallation = true,
    documentationCoversOperationSupportUpdateUninstall = true, developerFeedbackHasAccountableOwnersVisibleLifecycle = true,
    generatedCodeSeparatedFromHandwrittenAndRegenerationCompatible = true, manualEditsToGeneratedFilesProhibitedOrIsolated = true,
    undocumentedInternalEndpointsNotShownAsSupportedExtensionPoints = true,
    templatesDefaultToMinimalCapabilityDenyByDefaultNetwork = true,
    publishersCannotSelfDeclareHigherCertificationThanVerifiedResult = true,
    publishingToolsNeverAcceptProductionCredentialsOrCreateRuntimeGrants = true,
    failedReviewReturnsMachineAndHumanReadableRemediationGuidance = true,
    cliHistoryBuildLogsExamplesDiagnosticsRedactSecrets = true,
    developmentToolsUseProductionTenantCredentials = false, sandboxContainsProductionCredentialsOrNetworkPathByDefault = false,
    singleTenantSuccessDemonstratesIsolation = false, credentialsBundledInToolsOrTemplates = false,
    languageConvenienceWeakensCapabilityOrTenantContext = false,
    productionDataCopiedToDeveloperSandboxesWithoutApprovedControls = false,
    developersCanQueryOtherPublishersPrivateEvidence = false,
    extensionPointOwnersCreatePrivateExceptionsForIndividualPublishers = false,
    oldSdkUseExemptFromSupportedVersionCertificationRequirement = false, languageParityRequiresIdenticalApiShape = false,
    sdkReleasesOmitSupportWindowOrMigrationGuidance = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      developerExperiencePrinciples, sdkScopeItems, sdkLayers, sdkProhibitedBehaviors, languageSdkReleaseDeclarations,
      sdkGenerationProperties, developerPortalCapabilities, extensionPointCatalogFields, projectTemplateElements,
      localSandboxEmulations, testTenantRequirements, unitTestingCoverageAreas, contractTestingAreas,
      integrationTestingAreas, securityTestingRequirements, failureTestingScenarios, compatibilityTestingDimensions,
      uninstallTestingRequirements, conformanceProfileResultFields, developerWorkflowSteps, packagingToolingCapabilities,
      publishingToolingBehaviors, documentationRequirements, referenceExtensionExamples, developerObservabilityElements,
      sdkLifecycleFields, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      pavedRoadFasterThanPrivateIntegrationShortcuts, sdkTracesToCanonicalContractsWithoutHiddenAuthority,
      localDevelopmentBehavesLikeHostForCapabilityAndTenantRules, everyPackagePassesApplicableMultiTenantSecurityFailureCompatibilityTests,
      buildArtifactsHaveExactDigestsInventoriesProvenance, publishingSeparatesPackageSubmissionFromTenantInstallation,
      documentationCoversOperationSupportUpdateUninstall, developerFeedbackHasAccountableOwnersVisibleLifecycle,
      generatedCodeSeparatedFromHandwrittenAndRegenerationCompatible, manualEditsToGeneratedFilesProhibitedOrIsolated,
      undocumentedInternalEndpointsNotShownAsSupportedExtensionPoints, templatesDefaultToMinimalCapabilityDenyByDefaultNetwork,
      publishersCannotSelfDeclareHigherCertificationThanVerifiedResult, publishingToolsNeverAcceptProductionCredentialsOrCreateRuntimeGrants,
      failedReviewReturnsMachineAndHumanReadableRemediationGuidance, cliHistoryBuildLogsExamplesDiagnosticsRedactSecrets,
      developmentToolsUseProductionTenantCredentials, sandboxContainsProductionCredentialsOrNetworkPathByDefault,
      singleTenantSuccessDemonstratesIsolation, credentialsBundledInToolsOrTemplates, languageConvenienceWeakensCapabilityOrTenantContext,
      productionDataCopiedToDeveloperSandboxesWithoutApprovedControls, developersCanQueryOtherPublishersPrivateEvidence,
      extensionPointOwnersCreatePrivateExceptionsForIndividualPublishers, oldSdkUseExemptFromSupportedVersionCertificationRequirement,
      languageParityRequiresIdenticalApiShape, sdkReleasesOmitSupportWindowOrMigrationGuidance
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
