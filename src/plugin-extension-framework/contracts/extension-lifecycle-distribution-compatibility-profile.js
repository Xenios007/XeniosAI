export class ExtensionLifecycleDistributionCompatibilityProfile {
  constructor({
    profileName,
    lifecyclePrinciples = [], packageLifecycleStates = [], installationLifecycleStates = [],
    designRegistrationFields = [], buildCandidateOutputs = [], validationReviewCoverage = [],
    certificationFields = [], publicationRequirements = [], installationRequestReviewItems = [],
    installationAssessmentFactors = [], provisioningOutputs = [], tenantSpecificValidationChecks = [],
    compatibilityDimensions = [], compatibilityPolicyElements = [], updatePolicies = [],
    updateAssessmentDifferences = [], stagedRolloutStages = [], dataMigrationDeclarations = [],
    rollbackAccountingItems = [], emergencySecurityActions = [], deprecationFields = [], uninstallSteps = [],
    lifecycleReconciliationComparisons = [], lifecycleEvidenceElements = [], architecturalRules = [],
    packageInstallationLifecyclesIndependent = true, lifecycleTransitionsAuthorizedWithEvidence = true,
    validationPrecedesPublicationActivation = true, installationsResolveExactDigests = true,
    updatesRespectCompatibilityAndPolicy = true, automaticUpdatesBoundedReversible = true,
    securitySuspensionOverridesReleasePolicy = true, deprecationProvidesMigrationVisibility = true,
    uninstallRemovesAllAccessAndData = true, lifecycleStateReconciledAcrossCapabilities = true,
    registrationGrantsNoPublicationOrRuntimeAuthority = true, resubmissionAfterChangeGetsNewDigest = true,
    hostRevalidatesAtExecution = true, newCapabilityRequiresRenewedApproval = true, cohortsNeverMixTenantData = true,
    uninstallRequiresProviderAcknowledgments = true,
    tenantPurchaseCompletesInstallationApproval = false, listingReplacesArtifactsOrPermissions = false,
    listingRemovalSilentlyUninstalls = false, automaticUpdateCrossesBreakingCompatibility = false,
    migrationsReadAnotherTenant = false, publisherDisappearanceTransfersOwnership = false, compatibilityIsSyntacticOnly = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      lifecyclePrinciples, packageLifecycleStates, installationLifecycleStates, designRegistrationFields,
      buildCandidateOutputs, validationReviewCoverage, certificationFields, publicationRequirements,
      installationRequestReviewItems, installationAssessmentFactors, provisioningOutputs, tenantSpecificValidationChecks,
      compatibilityDimensions, compatibilityPolicyElements, updatePolicies, updateAssessmentDifferences,
      stagedRolloutStages, dataMigrationDeclarations, rollbackAccountingItems, emergencySecurityActions,
      deprecationFields, uninstallSteps, lifecycleReconciliationComparisons, lifecycleEvidenceElements, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      packageInstallationLifecyclesIndependent, lifecycleTransitionsAuthorizedWithEvidence,
      validationPrecedesPublicationActivation, installationsResolveExactDigests, updatesRespectCompatibilityAndPolicy,
      automaticUpdatesBoundedReversible, securitySuspensionOverridesReleasePolicy, deprecationProvidesMigrationVisibility,
      uninstallRemovesAllAccessAndData, lifecycleStateReconciledAcrossCapabilities,
      registrationGrantsNoPublicationOrRuntimeAuthority, resubmissionAfterChangeGetsNewDigest, hostRevalidatesAtExecution,
      newCapabilityRequiresRenewedApproval, cohortsNeverMixTenantData, uninstallRequiresProviderAcknowledgments,
      tenantPurchaseCompletesInstallationApproval, listingReplacesArtifactsOrPermissions, listingRemovalSilentlyUninstalls,
      automaticUpdateCrossesBreakingCompatibility, migrationsReadAnotherTenant, publisherDisappearanceTransfersOwnership,
      compatibilityIsSyntacticOnly
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
