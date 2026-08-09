export class PlatformCapabilityModelProfile {
  constructor({
    modelName,
    objectives = [], principles = [], planes = [], domains = [], experienceCapabilities = [],
    controlCapabilities = [], executionCapabilities = [], resourceTypes = [], evidenceCapabilities = [],
    coreCapabilities = [], requestLifecycle = [], requestFields = [], requestStates = [], collaborationModes = [],
    contractFields = [], authorityAssignments = [], metadataIdentifiers = [], scopeTypes = [], environmentTypes = [],
    humanAiFields = [], ownershipFields = [], serviceCommitments = [], criticalityClasses = [], dependencyRules = [],
    failureFields = [], observabilitySignals = [], securityFields = [], costCapacityFields = [], portfolioFields = [],
    lifecycleStages = [], maturityLevels = [], introductionFields = [], buildBuyIntegrateFactors = [],
    deprecationFields = [], measures = [], governanceAreas = [], antiPatterns = [], architecturalRules = [],
    futureCapabilities = [], capabilityBeforeTool = true, productOwnershipRequired = true, explicitBoundariesRequired = true,
    replaceableContractsRequired = true, controlPlaneNotMonolith = true, evidenceByDesign = true,
    contextPreserved = true, oneStateAuthorityRequired = true, deterministicControlRequired = true,
    aiRecommendationsNotAuthority = true, tenantPropertyScopeExplicit = true, failureIsolationRequired = true,
    lifecycleGoverned = true, vendorNeutral = true, technologyIndependent = true, prescribesPortal = false,
    prescribesSourceControl = false, prescribesBuildSystem = false, prescribesCloud = false, prescribesArtifactRegistry = false,
    treatsToolAsCapability = false, duplicatesStateWithoutAuthority = false, grantsAiAuthorityFromCredentials = false
  }) {
    this.modelName = modelName;
    for (const [key, value] of Object.entries({ objectives, principles, planes, domains, experienceCapabilities,
      controlCapabilities, executionCapabilities, resourceTypes, evidenceCapabilities, coreCapabilities, requestLifecycle,
      requestFields, requestStates, collaborationModes, contractFields, authorityAssignments, metadataIdentifiers,
      scopeTypes, environmentTypes, humanAiFields, ownershipFields, serviceCommitments, criticalityClasses,
      dependencyRules, failureFields, observabilitySignals, securityFields, costCapacityFields, portfolioFields,
      lifecycleStages, maturityLevels, introductionFields, buildBuyIntegrateFactors, deprecationFields, measures,
      governanceAreas, antiPatterns, architecturalRules, futureCapabilities })) {
      this[key] = Object.freeze([...value]);
    }
    for (const [key, value] of Object.entries({ capabilityBeforeTool, productOwnershipRequired, explicitBoundariesRequired,
      replaceableContractsRequired, controlPlaneNotMonolith, evidenceByDesign, contextPreserved, oneStateAuthorityRequired,
      deterministicControlRequired, aiRecommendationsNotAuthority, tenantPropertyScopeExplicit, failureIsolationRequired,
      lifecycleGoverned, vendorNeutral, technologyIndependent, prescribesPortal, prescribesSourceControl, prescribesBuildSystem,
      prescribesCloud, prescribesArtifactRegistry, treatsToolAsCapability, duplicatesStateWithoutAuthority,
      grantsAiAuthorityFromCredentials })) {
      this[key] = Boolean(value);
    }
    Object.freeze(this);
  }
}
