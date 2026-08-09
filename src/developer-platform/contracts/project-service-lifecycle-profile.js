export class ProjectServiceLifecycleProfile {
  constructor({
    lifecycleName,
    objectives = [], principles = [], concepts = [], relationships = [], projectStates = [], projectCreationFields = [],
    projectTypes = [], projectIdentityFields = [], projectMetadataFields = [], serviceStates = [], serviceIdentityFields = [],
    serviceMetadataFields = [], serviceOwnershipFields = [], serviceBoundaryFields = [], serviceReadinessFields = [],
    controls = [], gates = [], events = [], commands = [], authoritySources = [], metadataValidationAreas = [],
    failureRecoveryFields = [], measures = [], governanceAreas = [], antiPatterns = [], architecturalRules = [],
    futureCapabilities = [], identityBeforeAutomation = true, projectServiceDistinct = true, accountableOwnershipRequired = true,
    lifecycleStateAuthoritative = true, operationalMetadataRequired = true, readinessBeforeProduction = true,
    tenantPropertyScopeExplicit = true, architectureAdrBindingRequired = true, aiAccountableOwnershipProhibited = true,
    deprecationRetirementGoverned = true, evidenceHistoryPreserved = true, vendorNeutral = true,
    technologyIndependent = true, prescribesProjectManagementTool = false, prescribesSourceControl = false,
    prescribesServiceCatalogProduct = false, treatsRepositoryAsProject = false, treatsDeploymentUnitAsService = false,
    allowsOrphanedProductionService = false, allowsAiAccountableOwner = false, reusesRetiredIdentifiers = false
  }) {
    this.lifecycleName = lifecycleName;
    for (const [key, value] of Object.entries({ objectives, principles, concepts, relationships, projectStates,
      projectCreationFields, projectTypes, projectIdentityFields, projectMetadataFields, serviceStates, serviceIdentityFields,
      serviceMetadataFields, serviceOwnershipFields, serviceBoundaryFields, serviceReadinessFields, controls, gates, events,
      commands, authoritySources, metadataValidationAreas, failureRecoveryFields, measures, governanceAreas, antiPatterns,
      architecturalRules, futureCapabilities })) {
      this[key] = Object.freeze([...value]);
    }
    for (const [key, value] of Object.entries({ identityBeforeAutomation, projectServiceDistinct,
      accountableOwnershipRequired, lifecycleStateAuthoritative, operationalMetadataRequired, readinessBeforeProduction,
      tenantPropertyScopeExplicit, architectureAdrBindingRequired, aiAccountableOwnershipProhibited,
      deprecationRetirementGoverned, evidenceHistoryPreserved, vendorNeutral, technologyIndependent,
      prescribesProjectManagementTool, prescribesSourceControl, prescribesServiceCatalogProduct, treatsRepositoryAsProject,
      treatsDeploymentUnitAsService, allowsOrphanedProductionService, allowsAiAccountableOwner, reusesRetiredIdentifiers })) {
      this[key] = Boolean(value);
    }
    Object.freeze(this);
  }
}
