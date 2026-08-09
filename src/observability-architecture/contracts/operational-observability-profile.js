export class OperationalObservabilityProfile {
  constructor({
    observabilityName,
    objectives = [],
    modelStages = [],
    principles = [],
    visibilityDomains = [],
    proactiveCapabilities = [],
    correlationDomains = [],
    improvementDrivers = [],
    healthIndicators = [],
    performanceEvidenceTypes = [],
    capacityObservations = [],
    reliabilityObservations = [],
    incidentObservations = [],
    diagnosticAreas = [],
    operationalEvidenceTypes = [],
    governanceActivities = [],
    qualityAttributes = [],
    relationshipStages = [],
    architecturalRules = [],
    futureCapabilities = [],
    continuouslyObservable = true,
    businessAligned = true,
    proactiveSupported = true,
    evidenceCorrelated = true,
    continuousImprovementEnabled = true,
    operationalResilienceStrengthened = true,
    evidenceGoverned = true,
    technologyNeutral = true,
    vendorNeutral = true,
    monitoringProductSpecific = false,
    infrastructureToolingSpecific = false,
    cloudPlatformSpecific = false,
    analyticsSolutionSpecific = false,
    alertingSystemSpecific = false,
    implementationTechnologySpecific = false,
    isolatesTechnicalMetricsFromBusinessValue = false
  }) {
    this.observabilityName = observabilityName;
    this.objectives = Object.freeze([...objectives]);
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.visibilityDomains = Object.freeze([...visibilityDomains]);
    this.proactiveCapabilities = Object.freeze([...proactiveCapabilities]);
    this.correlationDomains = Object.freeze([...correlationDomains]);
    this.improvementDrivers = Object.freeze([...improvementDrivers]);
    this.healthIndicators = Object.freeze([...healthIndicators]);
    this.performanceEvidenceTypes = Object.freeze([...performanceEvidenceTypes]);
    this.capacityObservations = Object.freeze([...capacityObservations]);
    this.reliabilityObservations = Object.freeze([...reliabilityObservations]);
    this.incidentObservations = Object.freeze([...incidentObservations]);
    this.diagnosticAreas = Object.freeze([...diagnosticAreas]);
    this.operationalEvidenceTypes = Object.freeze([...operationalEvidenceTypes]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.qualityAttributes = Object.freeze([...qualityAttributes]);
    this.relationshipStages = Object.freeze([...relationshipStages]);
    this.architecturalRules = Object.freeze([...architecturalRules]);
    this.futureCapabilities = Object.freeze([...futureCapabilities]);
    this.continuouslyObservable = Boolean(continuouslyObservable);
    this.businessAligned = Boolean(businessAligned);
    this.proactiveSupported = Boolean(proactiveSupported);
    this.evidenceCorrelated = Boolean(evidenceCorrelated);
    this.continuousImprovementEnabled = Boolean(continuousImprovementEnabled);
    this.operationalResilienceStrengthened = Boolean(operationalResilienceStrengthened);
    this.evidenceGoverned = Boolean(evidenceGoverned);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.monitoringProductSpecific = Boolean(monitoringProductSpecific);
    this.infrastructureToolingSpecific = Boolean(infrastructureToolingSpecific);
    this.cloudPlatformSpecific = Boolean(cloudPlatformSpecific);
    this.analyticsSolutionSpecific = Boolean(analyticsSolutionSpecific);
    this.alertingSystemSpecific = Boolean(alertingSystemSpecific);
    this.implementationTechnologySpecific = Boolean(implementationTechnologySpecific);
    this.isolatesTechnicalMetricsFromBusinessValue = Boolean(isolatesTechnicalMetricsFromBusinessValue);

    Object.freeze(this);
  }
}
