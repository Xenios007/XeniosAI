export class AiIntegrationProfile {
  constructor({
    integrationName,
    capabilityType,
    modelStages = [],
    principles = [],
    contractElements = [],
    participants = [],
    agentCollaborationControls = [],
    serviceIntegrationExamples = [],
    toolIntegrationTypes = [],
    knowledgeIntegrationSources = [],
    humanAiCollaborationTypes = [],
    communicationModels = [],
    lifecycleStages = [],
    observabilityTelemetry = [],
    securityControls = [],
    governanceActivities = [],
    exposesAiAsEnterpriseService = true,
    capabilityOriented = true,
    providerIndependent = true,
    explicitContracts = true,
    humanAccountabilityPreserved = true,
    explainableInteractions = true,
    businessOwnershipPreserved = true,
    governedAgentCollaboration = true,
    governedToolInvocation = true,
    knowledgeSourcesGoverned = true,
    enterpriseSecurityApplied = true,
    supportsMultipleCommunicationModels = true,
    vendorNeutral = true,
    technologyNeutral = true,
    modelSpecificPrompting = false,
    providerSdkSpecific = false,
    inferenceEngineSpecific = false,
    frameworkSpecific = false,
    directModelImplementation = false,
    bypassesBusinessGovernance = false,
    bypassesEnterpriseSecurity = false
  }) {
    this.integrationName = integrationName;
    this.capabilityType = capabilityType;
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.contractElements = Object.freeze([...contractElements]);
    this.participants = Object.freeze([...participants]);
    this.agentCollaborationControls = Object.freeze([...agentCollaborationControls]);
    this.serviceIntegrationExamples = Object.freeze([...serviceIntegrationExamples]);
    this.toolIntegrationTypes = Object.freeze([...toolIntegrationTypes]);
    this.knowledgeIntegrationSources = Object.freeze([...knowledgeIntegrationSources]);
    this.humanAiCollaborationTypes = Object.freeze([...humanAiCollaborationTypes]);
    this.communicationModels = Object.freeze([...communicationModels]);
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.observabilityTelemetry = Object.freeze([...observabilityTelemetry]);
    this.securityControls = Object.freeze([...securityControls]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.exposesAiAsEnterpriseService = Boolean(exposesAiAsEnterpriseService);
    this.capabilityOriented = Boolean(capabilityOriented);
    this.providerIndependent = Boolean(providerIndependent);
    this.explicitContracts = Boolean(explicitContracts);
    this.humanAccountabilityPreserved = Boolean(humanAccountabilityPreserved);
    this.explainableInteractions = Boolean(explainableInteractions);
    this.businessOwnershipPreserved = Boolean(businessOwnershipPreserved);
    this.governedAgentCollaboration = Boolean(governedAgentCollaboration);
    this.governedToolInvocation = Boolean(governedToolInvocation);
    this.knowledgeSourcesGoverned = Boolean(knowledgeSourcesGoverned);
    this.enterpriseSecurityApplied = Boolean(enterpriseSecurityApplied);
    this.supportsMultipleCommunicationModels = Boolean(supportsMultipleCommunicationModels);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.modelSpecificPrompting = Boolean(modelSpecificPrompting);
    this.providerSdkSpecific = Boolean(providerSdkSpecific);
    this.inferenceEngineSpecific = Boolean(inferenceEngineSpecific);
    this.frameworkSpecific = Boolean(frameworkSpecific);
    this.directModelImplementation = Boolean(directModelImplementation);
    this.bypassesBusinessGovernance = Boolean(bypassesBusinessGovernance);
    this.bypassesEnterpriseSecurity = Boolean(bypassesEnterpriseSecurity);

    Object.freeze(this);
  }
}
