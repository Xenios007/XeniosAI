export class PackageManifestRegistryProvenanceProfile {
  constructor({
    profileName,
    supplyChainPrinciples = [], packageContents = [], manifestFields = [], capabilityDeclarationTypes = [],
    dataHandlingDeclarationFields = [], configurationSchemaAttributes = [], entryPointFields = [],
    packageDependencyTypes = [], dependencyInventoryFields = [], extensionDependencyRequirements = [],
    publisherIdentityElements = [], publishingAuthorityControls = [], buildProvenanceLinks = [], supplyChainChecks = [],
    signatureVerificationChecks = [], keyLifecycleRequirements = [], extensionRegistryResponsibilities = [],
    registryBoundaries = [], registryNamespaceFields = [], packagePublicationStates = [],
    distributionVerificationChecks = [], packageAdvisoryFields = [], emergencyRevocationActions = [],
    registryRecoveryCoverage = [], supplyChainEvidenceTypes = [], architecturalRules = [],
    publishedPackageVersionImmutable = true, packageIdentityBoundToDigest = true, manifestsDeclareIntentNoAuthority = true,
    publisherRuntimeIdentitySeparate = true, provenanceTraceableSourceToDistribution = true,
    dependenciesExplicitInspectableRiskManaged = true, signaturesProveIntegrityNotBehavior = true,
    registriesAuthoritativeForStatus = true, distributionVerifiesExactDigest = true, vulnerablePackagesQuicklyActionable = true,
    secretsNeverInPackagesOrProvenance = true, unknownMandatoryFieldsFailValidation = true, undeclaredEntryPointsNotLoaded = true,
    dependenciesDoNotInheritCapabilities = true, privatePackagesRetainSameControls = true, unavailableRegistryFailsClosed = true,
    undeclaredDataCollectionPermitted = false, floatingProductionDependenciesAllowed = false,
    similarNamesImplyCommonOwnership = false, privateLocationReducesControls = false, revokedBytesRemainExecutable = false,
    validSignatureReplacesCapabilityEnforcement = false, localUnauditedPublicationAllowedForHighRisk = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      supplyChainPrinciples, packageContents, manifestFields, capabilityDeclarationTypes, dataHandlingDeclarationFields,
      configurationSchemaAttributes, entryPointFields, packageDependencyTypes, dependencyInventoryFields,
      extensionDependencyRequirements, publisherIdentityElements, publishingAuthorityControls, buildProvenanceLinks,
      supplyChainChecks, signatureVerificationChecks, keyLifecycleRequirements, extensionRegistryResponsibilities,
      registryBoundaries, registryNamespaceFields, packagePublicationStates, distributionVerificationChecks,
      packageAdvisoryFields, emergencyRevocationActions, registryRecoveryCoverage, supplyChainEvidenceTypes, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      publishedPackageVersionImmutable, packageIdentityBoundToDigest, manifestsDeclareIntentNoAuthority,
      publisherRuntimeIdentitySeparate, provenanceTraceableSourceToDistribution, dependenciesExplicitInspectableRiskManaged,
      signaturesProveIntegrityNotBehavior, registriesAuthoritativeForStatus, distributionVerifiesExactDigest,
      vulnerablePackagesQuicklyActionable, secretsNeverInPackagesOrProvenance, unknownMandatoryFieldsFailValidation,
      undeclaredEntryPointsNotLoaded, dependenciesDoNotInheritCapabilities, privatePackagesRetainSameControls,
      unavailableRegistryFailsClosed, undeclaredDataCollectionPermitted, floatingProductionDependenciesAllowed,
      similarNamesImplyCommonOwnership, privateLocationReducesControls, revokedBytesRemainExecutable,
      validSignatureReplacesCapabilityEnforcement, localUnauditedPublicationAllowedForHighRisk
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
