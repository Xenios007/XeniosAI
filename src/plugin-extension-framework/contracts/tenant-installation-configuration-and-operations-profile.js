export class TenantInstallationConfigurationAndOperationsProfile {
  constructor({
    profileName,
    tenantPrinciples = [], tenantRoles = [], discoveryCatalogFields = [], installationRequestFields = [],
    assessmentConsiderations = [], informedConsentElements = [], propertyScopeRules = [], configurationProperties = [],
    connectionRecordFields = [], provisioningElements = [], activationValidationChecks = [], tenantOperationsViewFields = [],
    healthSignalSources = [], resourceGovernanceLimits = [], usageCostViewDistinctions = [], notificationTypes = [],
    tenantPilotRolloutStages = [], supportModelParties = [], supportAccessRequirements = [], incidentResponseElements = [],
    dataPortabilityExportItems = [], uninstallRequestDisclosures = [], uninstallExecutionSteps = [], tenantEvidenceTypes = [],
    reconciliationDomains = [], architecturalRules = [],
    installersSeeEffectiveGrantNotOnlyManifestRequest = true, materialExpansionRequiresRenewedApproval = true,
    effectiveConfigurationAndProvenanceAreInspectable = true, provisioningIsIdempotentAndReportsPartialStatus = true,
    platformControlsIndependentlyVerifySecurityAndIsolation = true, noOtherTenantsInstallationsOrUsageExposed = true,
    tenantsReceiveActionableHealthWithoutInternalSecurityDetails = true,
    billingDoesNotDirectlyMakeRuntimeAuthorizationDecisions = true,
    updatePreviewsShowCapabilityDataNetworkConfigDependencyResourceSupportChanges = true,
    materialNewAccessRequiresRenewedConsent = true, pilotDataAndGrantsRemainIsolated = true,
    platformExplainsNonReversibleSideEffectsAndDataMigrationConstraints = true,
    suspensionBlocksOrdinaryExecutionAndPreservesDataOnlyAsPolicyRequires = true,
    supportCasesRouteWithTenantSafeDiagnosticEvidence = true,
    publisherSupportAccessExcludesDirectDatabaseHostOrTenantSecretAccess = true,
    tenantOffboardingIncludesEveryInstalledExtensionResource = true, orphanedExecutionOrDataAfterRemovalIsControlFailure = true,
    catalogRankingImpliesTenantSuitabilityOrPermission = false, requestsWithMissingScopeOrOwnershipProgressAutomatically = false,
    propertyAdministratorsExceedDelegatedScope = false, newPropertiesAutomaticallyIncludedWithoutApprovedDynamicScope = false,
    configurationStoresSecretValuesOrOverridesMandatoryControls = false,
    tenantAdministratorsViewSecretsAfterProtectedEntryWherePolicyProhibits = false,
    rollbackAllowsReEnablingRevokedVulnerablePackage = false,
    supportResponsibilityRequiresTenantToCoordinateHiddenInternalTeams = false,
    incidentCommunicationsIncludeOtherTenantsOrProtectedInvestigationDetail = false,
    uninstallLeavesActiveSchedulesGrantsCredentialsOrOrphanedData = false,
    extensionOwnedDataExcludedFromTenantExportAndOffboarding = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      tenantPrinciples, tenantRoles, discoveryCatalogFields, installationRequestFields, assessmentConsiderations,
      informedConsentElements, propertyScopeRules, configurationProperties, connectionRecordFields, provisioningElements,
      activationValidationChecks, tenantOperationsViewFields, healthSignalSources, resourceGovernanceLimits,
      usageCostViewDistinctions, notificationTypes, tenantPilotRolloutStages, supportModelParties, supportAccessRequirements,
      incidentResponseElements, dataPortabilityExportItems, uninstallRequestDisclosures, uninstallExecutionSteps,
      tenantEvidenceTypes, reconciliationDomains, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      installersSeeEffectiveGrantNotOnlyManifestRequest, materialExpansionRequiresRenewedApproval,
      effectiveConfigurationAndProvenanceAreInspectable, provisioningIsIdempotentAndReportsPartialStatus,
      platformControlsIndependentlyVerifySecurityAndIsolation, noOtherTenantsInstallationsOrUsageExposed,
      tenantsReceiveActionableHealthWithoutInternalSecurityDetails, billingDoesNotDirectlyMakeRuntimeAuthorizationDecisions,
      updatePreviewsShowCapabilityDataNetworkConfigDependencyResourceSupportChanges, materialNewAccessRequiresRenewedConsent,
      pilotDataAndGrantsRemainIsolated, platformExplainsNonReversibleSideEffectsAndDataMigrationConstraints,
      suspensionBlocksOrdinaryExecutionAndPreservesDataOnlyAsPolicyRequires, supportCasesRouteWithTenantSafeDiagnosticEvidence,
      publisherSupportAccessExcludesDirectDatabaseHostOrTenantSecretAccess, tenantOffboardingIncludesEveryInstalledExtensionResource,
      orphanedExecutionOrDataAfterRemovalIsControlFailure, catalogRankingImpliesTenantSuitabilityOrPermission,
      requestsWithMissingScopeOrOwnershipProgressAutomatically, propertyAdministratorsExceedDelegatedScope,
      newPropertiesAutomaticallyIncludedWithoutApprovedDynamicScope, configurationStoresSecretValuesOrOverridesMandatoryControls,
      tenantAdministratorsViewSecretsAfterProtectedEntryWherePolicyProhibits, rollbackAllowsReEnablingRevokedVulnerablePackage,
      supportResponsibilityRequiresTenantToCoordinateHiddenInternalTeams,
      incidentCommunicationsIncludeOtherTenantsOrProtectedInvestigationDetail,
      uninstallLeavesActiveSchedulesGrantsCredentialsOrOrphanedData, extensionOwnedDataExcludedFromTenantExportAndOffboarding
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
