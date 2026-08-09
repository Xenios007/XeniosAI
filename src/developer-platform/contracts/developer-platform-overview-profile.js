export class DeveloperPlatformOverviewProfile {
  constructor({
    overviewName,
    objectives = [],
    users = [],
    landscapeStages = [],
    capabilityDomains = [],
    controlPlaneServices = [],
    controlLoopStages = [],
    productFields = [],
    pavedPathTypes = [],
    pavedPathContractFields = [],
    escapePathReasons = [],
    templateContents = [],
    templateLifecycleFields = [],
    selfServiceActions = [],
    selfServiceRequestFields = [],
    platformServices = [],
    projectMetadataFields = [],
    serviceMetadataFields = [],
    metadataAuthorityFields = [],
    architectureIntegrationCapabilities = [],
    humanDeveloperJourneySteps = [],
    aiImplementationAgentJourneySteps = [],
    aiAgentAuthorityRequirements = [],
    aiChangeAttributionFields = [],
    buildArtifactQualities = [],
    qualityValidationAreas = [],
    environmentQualities = [],
    deliveryComponents = [],
    operationalReadinessItems = [],
    portalInterfaces = [],
    serviceCatalogFields = [],
    documentationQualities = [],
    tenantAwareRequirements = [],
    propertyAwareRequirements = [],
    securityAreas = [],
    governanceAreas = [],
    feedbackSources = [],
    measures = [],
    relationshipStages = [],
    boundaries = [],
    qualityAttributes = [],
    architecturalRules = [],
    futureCapabilities = [],
    internalProductManaged = true,
    architectureDrivenDevelopmentReinforced = true,
    selfServiceGuardrailsPreserved = true,
    pavedPathsEvolvable = true,
    cognitiveLoadReducedWithoutConcealment = true,
    secureCompliantDefaultsRequired = true,
    trustedTraceableArtifactsRequired = true,
    comprehensiveQualityIntegrated = true,
    operationalReadinessRequired = true,
    authoritativeMetadataRequired = true,
    tenantPropertyBoundariesPreserved = true,
    aiAgentsExplicitlyAuthorized = true,
    aiAuthorityNotInferredFromCredentials = true,
    aiOutputNotAssumedCorrect = true,
    governanceEvidenceGenerated = true,
    outcomeMeasuresOverOutputVolume = true,
    vendorNeutral = true,
    technologyIndependent = true,
    prescribesSourceControlProvider = false,
    prescribesBuildProduct = false,
    prescribesCloudProvider = false,
    prescribesProgrammingLanguage = false,
    prescribesIde = false,
    prescribesDeveloperPortalProduct = false,
    prescribesCiCdTool = false,
    prescribesArtifactRegistry = false,
    definesAgentRuntime = false,
    definesWorkflowInternals = false,
    replacesArchitectureAuthority = false,
    replacesCodeReview = false,
    replacesEnterpriseOperations = false
  }) {
    this.overviewName = overviewName;
    for (const [key, value] of Object.entries({
      objectives,
      users,
      landscapeStages,
      capabilityDomains,
      controlPlaneServices,
      controlLoopStages,
      productFields,
      pavedPathTypes,
      pavedPathContractFields,
      escapePathReasons,
      templateContents,
      templateLifecycleFields,
      selfServiceActions,
      selfServiceRequestFields,
      platformServices,
      projectMetadataFields,
      serviceMetadataFields,
      metadataAuthorityFields,
      architectureIntegrationCapabilities,
      humanDeveloperJourneySteps,
      aiImplementationAgentJourneySteps,
      aiAgentAuthorityRequirements,
      aiChangeAttributionFields,
      buildArtifactQualities,
      qualityValidationAreas,
      environmentQualities,
      deliveryComponents,
      operationalReadinessItems,
      portalInterfaces,
      serviceCatalogFields,
      documentationQualities,
      tenantAwareRequirements,
      propertyAwareRequirements,
      securityAreas,
      governanceAreas,
      feedbackSources,
      measures,
      relationshipStages,
      boundaries,
      qualityAttributes,
      architecturalRules,
      futureCapabilities
    })) {
      this[key] = Object.freeze([...value]);
    }

    this.internalProductManaged = Boolean(internalProductManaged);
    this.architectureDrivenDevelopmentReinforced = Boolean(architectureDrivenDevelopmentReinforced);
    this.selfServiceGuardrailsPreserved = Boolean(selfServiceGuardrailsPreserved);
    this.pavedPathsEvolvable = Boolean(pavedPathsEvolvable);
    this.cognitiveLoadReducedWithoutConcealment = Boolean(cognitiveLoadReducedWithoutConcealment);
    this.secureCompliantDefaultsRequired = Boolean(secureCompliantDefaultsRequired);
    this.trustedTraceableArtifactsRequired = Boolean(trustedTraceableArtifactsRequired);
    this.comprehensiveQualityIntegrated = Boolean(comprehensiveQualityIntegrated);
    this.operationalReadinessRequired = Boolean(operationalReadinessRequired);
    this.authoritativeMetadataRequired = Boolean(authoritativeMetadataRequired);
    this.tenantPropertyBoundariesPreserved = Boolean(tenantPropertyBoundariesPreserved);
    this.aiAgentsExplicitlyAuthorized = Boolean(aiAgentsExplicitlyAuthorized);
    this.aiAuthorityNotInferredFromCredentials = Boolean(aiAuthorityNotInferredFromCredentials);
    this.aiOutputNotAssumedCorrect = Boolean(aiOutputNotAssumedCorrect);
    this.governanceEvidenceGenerated = Boolean(governanceEvidenceGenerated);
    this.outcomeMeasuresOverOutputVolume = Boolean(outcomeMeasuresOverOutputVolume);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.technologyIndependent = Boolean(technologyIndependent);
    this.prescribesSourceControlProvider = Boolean(prescribesSourceControlProvider);
    this.prescribesBuildProduct = Boolean(prescribesBuildProduct);
    this.prescribesCloudProvider = Boolean(prescribesCloudProvider);
    this.prescribesProgrammingLanguage = Boolean(prescribesProgrammingLanguage);
    this.prescribesIde = Boolean(prescribesIde);
    this.prescribesDeveloperPortalProduct = Boolean(prescribesDeveloperPortalProduct);
    this.prescribesCiCdTool = Boolean(prescribesCiCdTool);
    this.prescribesArtifactRegistry = Boolean(prescribesArtifactRegistry);
    this.definesAgentRuntime = Boolean(definesAgentRuntime);
    this.definesWorkflowInternals = Boolean(definesWorkflowInternals);
    this.replacesArchitectureAuthority = Boolean(replacesArchitectureAuthority);
    this.replacesCodeReview = Boolean(replacesCodeReview);
    this.replacesEnterpriseOperations = Boolean(replacesEnterpriseOperations);

    Object.freeze(this);
  }
}
