export class KnowledgeLifecycleProfile {
  constructor({
    profileName,
    objectives = [], canonicalModel = [], sourceLifecycleStates = [], authorityClasses = [],
    scopeTypes = [], lifecycleStates = [], publicationChannels = [], representationStates = [],
    lifecycleApis = [], lifecycleEvents = [], operations = [], qualityAttributes = [],
    architecturalRules = [], architectureBoundaries = [],
    domainOwnershipExplicit = true, sourcesRegistered = true, stableIdentities = true,
    distinctVersionTypes = true, contextualAuthority = true, explicitEligibility = true,
    publishedVersionsImmutable = true, materialChangesVersioned = true, provenanceComplete = true,
    canonicalDerivedSeparated = true, aiContentDerived = true, tenantPropertyIsolation = true,
    inheritanceGoverned = true, approvalPublicationActivationSeparated = true,
    representationReadinessRequired = true, inactiveStatesExcluded = true,
    historicalCitationsPreserved = true, lifecyclePropagation = true,
    registryLifecycleAuthority = true, indexesRebuildable = true, citationsLifecycleAware = true,
    correctionVersioned = true, retentionAssetSpecific = true, tombstonesMinimal = true,
    legalHoldNotCurrentUse = true, transitionsIdempotent = true, lifecycleReconciled = true,
    evidenceProduced = true, versionedContracts = true, vendorNeutral = true,
    technologyIndependent = true,
    ingestionMakesActive = false, indexIsAuthority = false, sourcePopularityCreatesAuthority = false,
    publishedVersionMutable = false, approvalMeansPublication = false, publicationMeansActivation = false,
    representationOverridesLifecycle = false, citationSilentlyRedirects = false,
    suspensionLeavesRepresentationsActive = false, deletionLeavesContent = false,
    legalHoldMakesCurrent = false, technicalCustodyCreatesAuthority = false,
    tenantContentOverridesScope = false, directDatabaseAccess = false,
    selectsStorageProduct = false, definesAdjacentLifecycles = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      objectives, canonicalModel, sourceLifecycleStates, authorityClasses, scopeTypes,
      lifecycleStates, publicationChannels, representationStates, lifecycleApis, lifecycleEvents,
      operations, qualityAttributes, architecturalRules, architectureBoundaries
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      domainOwnershipExplicit, sourcesRegistered, stableIdentities, distinctVersionTypes,
      contextualAuthority, explicitEligibility, publishedVersionsImmutable, materialChangesVersioned,
      provenanceComplete, canonicalDerivedSeparated, aiContentDerived, tenantPropertyIsolation,
      inheritanceGoverned, approvalPublicationActivationSeparated, representationReadinessRequired,
      inactiveStatesExcluded, historicalCitationsPreserved, lifecyclePropagation,
      registryLifecycleAuthority, indexesRebuildable, citationsLifecycleAware, correctionVersioned,
      retentionAssetSpecific, tombstonesMinimal, legalHoldNotCurrentUse, transitionsIdempotent,
      lifecycleReconciled, evidenceProduced, versionedContracts, vendorNeutral, technologyIndependent,
      ingestionMakesActive, indexIsAuthority, sourcePopularityCreatesAuthority,
      publishedVersionMutable, approvalMeansPublication, publicationMeansActivation,
      representationOverridesLifecycle, citationSilentlyRedirects,
      suspensionLeavesRepresentationsActive, deletionLeavesContent, legalHoldMakesCurrent,
      technicalCustodyCreatesAuthority, tenantContentOverridesScope, directDatabaseAccess,
      selectsStorageProduct, definesAdjacentLifecycles
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
