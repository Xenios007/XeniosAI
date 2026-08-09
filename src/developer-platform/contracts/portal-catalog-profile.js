export class PortalCatalogProfile {
  constructor({
    catalogName,
    objectives = [], principles = [], actors = [], channels = [], contextFields = [], informationAreas = [],
    selfServiceActions = [], selfServiceActionFields = [], catalogRecordTypes = [], serviceRecordFields = [],
    relationshipTypes = [], authoritySources = [], registrationSteps = [], reconciliationFindings = [],
    ownershipFields = [], documentationTypes = [], documentationRecordFields = [], documentationStates = [],
    searchDomains = [], searchIndexingRequirements = [], aiDiscoveryRequirements = [], aiProvenanceFields = [],
    securityFields = [], governanceAreas = [], maturityLevels = [], measures = [], antiPatterns = [],
    architecturalRules = [], futureCapabilities = [], portalExperienceNotAuthority = true,
    catalogDiscoveryAuthority = true, sourceFreshnessVisible = true, accessAwareDiscovery = true,
    architectureFirstClass = true, ownershipProminent = true, governedSelfService = true,
    tenantPropertyIsolation = true, documentationOwnedVersioned = true, aiCitesSources = true,
    alternateCriticalPaths = true, privacyAndSecretProtection = true, vendorNeutral = true,
    replaceableImplementations = true, prescribesPortalProduct = false, catalogSourceOfEveryField = false,
    createsMetadataMonolith = false, hidesSourceVersion = false, presentsStaleDataAsCurrent = false,
    automatedDiscoveryAssignsOwnership = false, collapsesRecordTypes = false, indexesSecrets = false,
    leaksTenantPropertyExistence = false, writesAiInferenceAsFact = false, selfServiceBypassesControlPlane = false
  }) {
    this.catalogName = catalogName;
    for (const [key, value] of Object.entries({ objectives, principles, actors, channels, contextFields,
      informationAreas, selfServiceActions, selfServiceActionFields, catalogRecordTypes, serviceRecordFields,
      relationshipTypes, authoritySources, registrationSteps, reconciliationFindings, ownershipFields,
      documentationTypes, documentationRecordFields, documentationStates, searchDomains, searchIndexingRequirements,
      aiDiscoveryRequirements, aiProvenanceFields, securityFields, governanceAreas, maturityLevels, measures,
      antiPatterns, architecturalRules, futureCapabilities })) {
      this[key] = Object.freeze([...value]);
    }
    for (const [key, value] of Object.entries({ portalExperienceNotAuthority, catalogDiscoveryAuthority,
      sourceFreshnessVisible, accessAwareDiscovery, architectureFirstClass, ownershipProminent, governedSelfService,
      tenantPropertyIsolation, documentationOwnedVersioned, aiCitesSources, alternateCriticalPaths,
      privacyAndSecretProtection, vendorNeutral, replaceableImplementations, prescribesPortalProduct,
      catalogSourceOfEveryField, createsMetadataMonolith, hidesSourceVersion, presentsStaleDataAsCurrent,
      automatedDiscoveryAssignsOwnership, collapsesRecordTypes, indexesSecrets, leaksTenantPropertyExistence,
      writesAiInferenceAsFact, selfServiceBypassesControlPlane })) {
      this[key] = Boolean(value);
    }
    Object.freeze(this);
  }
}
