export class BusinessObservabilityProfile {
  constructor({
    observabilityName,
    objectives = [],
    modelStages = [],
    principles = [],
    capabilityExamples = [],
    processExamples = [],
    outcomeExamples = [],
    contextElements = [],
    lifecycleStages = [],
    capabilityEvidenceTypes = [],
    customerJourneyStages = [],
    businessEvents = [],
    metrics = [],
    aiObservationTypes = [],
    evidenceSources = [],
    governanceActivities = [],
    qualityAttributes = [],
    relationshipStages = [],
    architecturalRules = [],
    futureCapabilities = [],
    businessCapabilitiesObservable = true,
    processesObservable = true,
    outcomesObservable = true,
    businessContextPreserved = true,
    endToEndVisibilitySupported = true,
    operationalEvidenceCorrelated = true,
    governanceEvidenceBased = true,
    aiObservedInBusinessContext = true,
    technologyIndependent = true,
    vendorNeutral = true,
    businessIntelligencePlatformSpecific = false,
    financialReportingSystemSpecific = false,
    analyticalDashboardSpecific = false,
    implementationTechnologySpecific = false,
    infrastructureFirst = false,
    exposesImplementationDetails = false
  }) {
    this.observabilityName = observabilityName;
    this.objectives = Object.freeze([...objectives]);
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.capabilityExamples = Object.freeze([...capabilityExamples]);
    this.processExamples = Object.freeze([...processExamples]);
    this.outcomeExamples = Object.freeze([...outcomeExamples]);
    this.contextElements = Object.freeze([...contextElements]);
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.capabilityEvidenceTypes = Object.freeze([...capabilityEvidenceTypes]);
    this.customerJourneyStages = Object.freeze([...customerJourneyStages]);
    this.businessEvents = Object.freeze([...businessEvents]);
    this.metrics = Object.freeze([...metrics]);
    this.aiObservationTypes = Object.freeze([...aiObservationTypes]);
    this.evidenceSources = Object.freeze([...evidenceSources]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.qualityAttributes = Object.freeze([...qualityAttributes]);
    this.relationshipStages = Object.freeze([...relationshipStages]);
    this.architecturalRules = Object.freeze([...architecturalRules]);
    this.futureCapabilities = Object.freeze([...futureCapabilities]);
    this.businessCapabilitiesObservable = Boolean(businessCapabilitiesObservable);
    this.processesObservable = Boolean(processesObservable);
    this.outcomesObservable = Boolean(outcomesObservable);
    this.businessContextPreserved = Boolean(businessContextPreserved);
    this.endToEndVisibilitySupported = Boolean(endToEndVisibilitySupported);
    this.operationalEvidenceCorrelated = Boolean(operationalEvidenceCorrelated);
    this.governanceEvidenceBased = Boolean(governanceEvidenceBased);
    this.aiObservedInBusinessContext = Boolean(aiObservedInBusinessContext);
    this.technologyIndependent = Boolean(technologyIndependent);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.businessIntelligencePlatformSpecific = Boolean(businessIntelligencePlatformSpecific);
    this.financialReportingSystemSpecific = Boolean(financialReportingSystemSpecific);
    this.analyticalDashboardSpecific = Boolean(analyticalDashboardSpecific);
    this.implementationTechnologySpecific = Boolean(implementationTechnologySpecific);
    this.infrastructureFirst = Boolean(infrastructureFirst);
    this.exposesImplementationDetails = Boolean(exposesImplementationDetails);

    Object.freeze(this);
  }
}
