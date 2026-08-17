export class ExtensionDomainClassificationProfile {
  constructor({
    profileName,
    domainPrinciples = [], coreAggregates = [], supportingEntities = [], packageCoordinateFields = [],
    contributionClasses = [], publisherClassifications = [], riskClassificationLevels = [], extensionPointCategories = [],
    extensionPointOwnershipResponsibilities = [], compositionModels = [], authorityValidationChecks = [],
    installationScopeOptions = [], extensionOwnedDataFields = [], dependencyTypes = [], relationshipModelItems = [],
    domainEvents = [], domainInvariants = [], serviceBoundaries = [], failureBoundaries = [],
    governanceOwnershipObjects = [], architecturalRules = [],
    extensionIdentityStableAcrossVersions = true, packageVersionsImmutable = true, listingsSeparateFromRegistryIdentity = true,
    installationsScopedAggregates = true, grantsSeparateFromManifestRequests = true, executionsAttributableToInstallationAndVersion = true,
    extensionPointOwnersRetainDomainAuthority = true, riskClassificationChangesControlsNotOwnership = true,
    historicalLifecyclePreserved = true, installationsLockToExactDigest = true, dependenciesDeclaredNotSilent = true,
    domainEventsCarryMinimalSensitiveMetadata = true, platformWideCapabilitiesRestrictedAndGoverned = true,
    ownershipTransferRequiresVerifiedReview = true, undefinedOrderingProhibitedForSideEffects = true,
    extensionFailureContainedFromAuthoritativeState = true,
    relationshipsGrantImplicitAccess = false, publisherOwnershipGrantsAccessToTenantData = false,
    tenantWideInstallationExposesAllData = false, installingOneExtensionImplicitlyInstallsAnother = false,
    listingDeterminesRuntimeState = false, extensionOwnsDataOutsideBoundedScope = false,
    possessionOfHandleIsAuthorization = false, serviceReadsAnotherServiceDatabase = false,
    revokedPackageStartsNewExecutions = false, firstPartyWaivesControls = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      domainPrinciples, coreAggregates, supportingEntities, packageCoordinateFields, contributionClasses,
      publisherClassifications, riskClassificationLevels, extensionPointCategories, extensionPointOwnershipResponsibilities,
      compositionModels, authorityValidationChecks, installationScopeOptions, extensionOwnedDataFields, dependencyTypes,
      relationshipModelItems, domainEvents, domainInvariants, serviceBoundaries, failureBoundaries,
      governanceOwnershipObjects, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      extensionIdentityStableAcrossVersions, packageVersionsImmutable, listingsSeparateFromRegistryIdentity,
      installationsScopedAggregates, grantsSeparateFromManifestRequests, executionsAttributableToInstallationAndVersion,
      extensionPointOwnersRetainDomainAuthority, riskClassificationChangesControlsNotOwnership, historicalLifecyclePreserved,
      installationsLockToExactDigest, dependenciesDeclaredNotSilent, domainEventsCarryMinimalSensitiveMetadata,
      platformWideCapabilitiesRestrictedAndGoverned, ownershipTransferRequiresVerifiedReview,
      undefinedOrderingProhibitedForSideEffects, extensionFailureContainedFromAuthoritativeState,
      relationshipsGrantImplicitAccess, publisherOwnershipGrantsAccessToTenantData, tenantWideInstallationExposesAllData,
      installingOneExtensionImplicitlyInstallsAnother, listingDeterminesRuntimeState, extensionOwnsDataOutsideBoundedScope,
      possessionOfHandleIsAuthorization, serviceReadsAnotherServiceDatabase, revokedPackageStartsNewExecutions,
      firstPartyWaivesControls
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
