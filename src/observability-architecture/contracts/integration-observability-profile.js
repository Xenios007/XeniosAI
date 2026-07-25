export class IntegrationObservabilityProfile {
  constructor({
    observabilityName,
    objectives = [],
    modelStages = [],
    principles = [],
    collaborationTypes = [],
    correlationSpans = [],
    contractVisibilityAreas = [],
    contextElements = [],
    apiCharacteristics = [],
    eventLifecycleStages = [],
    workflowObservationTypes = [],
    externalObservationTypes = [],
    distributedDiagnosticCapabilities = [],
    dependencyTypes = [],
    operationalEvidenceTypes = [],
    governanceActivities = [],
    qualityAttributes = [],
    relationshipStages = [],
    architecturalRules = [],
    futureCapabilities = [],
    businessCollaborationFocused = true,
    endToEndCorrelated = true,
    contractCentricVisibility = true,
    serviceAutonomyPreserved = true,
    businessContextPreserved = true,
    workflowsApisEventsExternalObserved = true,
    distributedDiagnosticsSupported = true,
    governanceEvidenceBased = true,
    technologyNeutral = true,
    vendorNeutral = true,
    messagingPlatformSpecific = false,
    apiGatewaySpecific = false,
    integrationMiddlewareSpecific = false,
    tracingFrameworkSpecific = false,
    monitoringProductSpecific = false,
    implementationTechnologySpecific = false,
    protocolFocused = false
  }) {
    this.observabilityName = observabilityName;
    this.objectives = Object.freeze([...objectives]);
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.collaborationTypes = Object.freeze([...collaborationTypes]);
    this.correlationSpans = Object.freeze([...correlationSpans]);
    this.contractVisibilityAreas = Object.freeze([...contractVisibilityAreas]);
    this.contextElements = Object.freeze([...contextElements]);
    this.apiCharacteristics = Object.freeze([...apiCharacteristics]);
    this.eventLifecycleStages = Object.freeze([...eventLifecycleStages]);
    this.workflowObservationTypes = Object.freeze([...workflowObservationTypes]);
    this.externalObservationTypes = Object.freeze([...externalObservationTypes]);
    this.distributedDiagnosticCapabilities = Object.freeze([...distributedDiagnosticCapabilities]);
    this.dependencyTypes = Object.freeze([...dependencyTypes]);
    this.operationalEvidenceTypes = Object.freeze([...operationalEvidenceTypes]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.qualityAttributes = Object.freeze([...qualityAttributes]);
    this.relationshipStages = Object.freeze([...relationshipStages]);
    this.architecturalRules = Object.freeze([...architecturalRules]);
    this.futureCapabilities = Object.freeze([...futureCapabilities]);
    this.businessCollaborationFocused = Boolean(businessCollaborationFocused);
    this.endToEndCorrelated = Boolean(endToEndCorrelated);
    this.contractCentricVisibility = Boolean(contractCentricVisibility);
    this.serviceAutonomyPreserved = Boolean(serviceAutonomyPreserved);
    this.businessContextPreserved = Boolean(businessContextPreserved);
    this.workflowsApisEventsExternalObserved = Boolean(workflowsApisEventsExternalObserved);
    this.distributedDiagnosticsSupported = Boolean(distributedDiagnosticsSupported);
    this.governanceEvidenceBased = Boolean(governanceEvidenceBased);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.messagingPlatformSpecific = Boolean(messagingPlatformSpecific);
    this.apiGatewaySpecific = Boolean(apiGatewaySpecific);
    this.integrationMiddlewareSpecific = Boolean(integrationMiddlewareSpecific);
    this.tracingFrameworkSpecific = Boolean(tracingFrameworkSpecific);
    this.monitoringProductSpecific = Boolean(monitoringProductSpecific);
    this.implementationTechnologySpecific = Boolean(implementationTechnologySpecific);
    this.protocolFocused = Boolean(protocolFocused);

    Object.freeze(this);
  }
}
