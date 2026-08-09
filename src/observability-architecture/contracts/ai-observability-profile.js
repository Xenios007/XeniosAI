export class AiObservabilityProfile {
  constructor({
    observabilityName,
    objectives = [],
    modelStages = [],
    principles = [],
    explainabilityEvidenceTypes = [],
    accountabilityDistinctions = [],
    agentInformation = [],
    humanOversightActivities = [],
    executionLifecycleStages = [],
    decisionCharacteristics = [],
    collaborationInteractions = [],
    toolActivities = [],
    knowledgeObservationTypes = [],
    performanceCharacteristics = [],
    failureConditions = [],
    businessCorrelationIdentifiers = [],
    governanceActivities = [],
    qualityAttributes = [],
    relationshipStages = [],
    architecturalRules = [],
    futureCapabilities = [],
    businessContextPreserved = true,
    explainabilityPreserved = true,
    accountabilityUnambiguous = true,
    agentTransparencySupported = true,
    humanOversightObservable = true,
    executionLifecycleObservable = true,
    governanceEvidenceBased = true,
    sensitiveKnowledgeProtected = true,
    technologyNeutral = true,
    vendorNeutral = true,
    modelInternalsSpecific = false,
    neuralNetworkArchitectureSpecific = false,
    providerDiagnosticSpecific = false,
    inferenceOptimizationSpecific = false,
    implementationTechnologySpecific = false,
    opaqueComputationalComponent = false
  }) {
    this.observabilityName = observabilityName;
    this.objectives = Object.freeze([...objectives]);
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.explainabilityEvidenceTypes = Object.freeze([...explainabilityEvidenceTypes]);
    this.accountabilityDistinctions = Object.freeze([...accountabilityDistinctions]);
    this.agentInformation = Object.freeze([...agentInformation]);
    this.humanOversightActivities = Object.freeze([...humanOversightActivities]);
    this.executionLifecycleStages = Object.freeze([...executionLifecycleStages]);
    this.decisionCharacteristics = Object.freeze([...decisionCharacteristics]);
    this.collaborationInteractions = Object.freeze([...collaborationInteractions]);
    this.toolActivities = Object.freeze([...toolActivities]);
    this.knowledgeObservationTypes = Object.freeze([...knowledgeObservationTypes]);
    this.performanceCharacteristics = Object.freeze([...performanceCharacteristics]);
    this.failureConditions = Object.freeze([...failureConditions]);
    this.businessCorrelationIdentifiers = Object.freeze([...businessCorrelationIdentifiers]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.qualityAttributes = Object.freeze([...qualityAttributes]);
    this.relationshipStages = Object.freeze([...relationshipStages]);
    this.architecturalRules = Object.freeze([...architecturalRules]);
    this.futureCapabilities = Object.freeze([...futureCapabilities]);
    this.businessContextPreserved = Boolean(businessContextPreserved);
    this.explainabilityPreserved = Boolean(explainabilityPreserved);
    this.accountabilityUnambiguous = Boolean(accountabilityUnambiguous);
    this.agentTransparencySupported = Boolean(agentTransparencySupported);
    this.humanOversightObservable = Boolean(humanOversightObservable);
    this.executionLifecycleObservable = Boolean(executionLifecycleObservable);
    this.governanceEvidenceBased = Boolean(governanceEvidenceBased);
    this.sensitiveKnowledgeProtected = Boolean(sensitiveKnowledgeProtected);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.modelInternalsSpecific = Boolean(modelInternalsSpecific);
    this.neuralNetworkArchitectureSpecific = Boolean(neuralNetworkArchitectureSpecific);
    this.providerDiagnosticSpecific = Boolean(providerDiagnosticSpecific);
    this.inferenceOptimizationSpecific = Boolean(inferenceOptimizationSpecific);
    this.implementationTechnologySpecific = Boolean(implementationTechnologySpecific);
    this.opaqueComputationalComponent = Boolean(opaqueComputationalComponent);

    Object.freeze(this);
  }
}
