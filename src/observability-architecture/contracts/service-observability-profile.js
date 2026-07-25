export class ServiceObservabilityProfile {
  constructor({
    observabilityName,
    objectives = [],
    modelStages = [],
    principles = [],
    responsibilities = [],
    businessIdentifiers = [],
    lifecycleStages = [],
    interactionTypes = [],
    diagnosticSupportAreas = [],
    serviceStates = [],
    performanceCharacteristics = [],
    collaborationInteractions = [],
    errorCharacteristics = [],
    dependencyTypes = [],
    distributedDiagnosticCapabilities = [],
    operationalEvidenceTypes = [],
    governanceActivities = [],
    qualityAttributes = [],
    relationshipStages = [],
    architecturalRules = [],
    futureCapabilities = [],
    serviceAutonomyPreserved = true,
    businessContextCorrelated = true,
    lifecycleVisible = true,
    interactionsTraceable = true,
    independentlyDiagnosable = true,
    operationalEvidenceTrustworthyCorrelated = true,
    governanceEvidenceBased = true,
    technologyIndependent = true,
    vendorNeutral = true,
    implementationFrameworkSpecific = false,
    loggingLibrarySpecific = false,
    monitoringPlatformSpecific = false,
    telemetryCollectorSpecific = false,
    vendorTechnologySpecific = false,
    exposesUnnecessaryImplementationDetails = false,
    reducesEnterpriseVisibility = false
  }) {
    this.observabilityName = observabilityName;
    this.objectives = Object.freeze([...objectives]);
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.responsibilities = Object.freeze([...responsibilities]);
    this.businessIdentifiers = Object.freeze([...businessIdentifiers]);
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.interactionTypes = Object.freeze([...interactionTypes]);
    this.diagnosticSupportAreas = Object.freeze([...diagnosticSupportAreas]);
    this.serviceStates = Object.freeze([...serviceStates]);
    this.performanceCharacteristics = Object.freeze([...performanceCharacteristics]);
    this.collaborationInteractions = Object.freeze([...collaborationInteractions]);
    this.errorCharacteristics = Object.freeze([...errorCharacteristics]);
    this.dependencyTypes = Object.freeze([...dependencyTypes]);
    this.distributedDiagnosticCapabilities = Object.freeze([...distributedDiagnosticCapabilities]);
    this.operationalEvidenceTypes = Object.freeze([...operationalEvidenceTypes]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.qualityAttributes = Object.freeze([...qualityAttributes]);
    this.relationshipStages = Object.freeze([...relationshipStages]);
    this.architecturalRules = Object.freeze([...architecturalRules]);
    this.futureCapabilities = Object.freeze([...futureCapabilities]);
    this.serviceAutonomyPreserved = Boolean(serviceAutonomyPreserved);
    this.businessContextCorrelated = Boolean(businessContextCorrelated);
    this.lifecycleVisible = Boolean(lifecycleVisible);
    this.interactionsTraceable = Boolean(interactionsTraceable);
    this.independentlyDiagnosable = Boolean(independentlyDiagnosable);
    this.operationalEvidenceTrustworthyCorrelated = Boolean(operationalEvidenceTrustworthyCorrelated);
    this.governanceEvidenceBased = Boolean(governanceEvidenceBased);
    this.technologyIndependent = Boolean(technologyIndependent);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.implementationFrameworkSpecific = Boolean(implementationFrameworkSpecific);
    this.loggingLibrarySpecific = Boolean(loggingLibrarySpecific);
    this.monitoringPlatformSpecific = Boolean(monitoringPlatformSpecific);
    this.telemetryCollectorSpecific = Boolean(telemetryCollectorSpecific);
    this.vendorTechnologySpecific = Boolean(vendorTechnologySpecific);
    this.exposesUnnecessaryImplementationDetails = Boolean(exposesUnnecessaryImplementationDetails);
    this.reducesEnterpriseVisibility = Boolean(reducesEnterpriseVisibility);

    Object.freeze(this);
  }
}
