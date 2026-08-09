export class OperationalObservabilityEvidence {
  constructor({
    evidenceType,
    operationalDomain,
    healthIndicator,
    businessCapability,
    operationalState,
    measurement,
    correlationId,
    performanceEvidenceType,
    capacityObservation,
    reliabilityObservation,
    incidentObservation,
    diagnosticArea,
    technologyNeutral = true,
    vendorNeutral = true
  }) {
    this.evidenceType = evidenceType;
    this.operationalDomain = operationalDomain;
    this.healthIndicator = healthIndicator;
    this.businessCapability = businessCapability;
    this.operationalState = operationalState;
    this.measurement = measurement;
    this.correlationId = correlationId;
    this.performanceEvidenceType = performanceEvidenceType;
    this.capacityObservation = capacityObservation;
    this.reliabilityObservation = reliabilityObservation;
    this.incidentObservation = incidentObservation;
    this.diagnosticArea = diagnosticArea;
    this.technologyNeutral = Boolean(technologyNeutral);
    this.vendorNeutral = Boolean(vendorNeutral);

    Object.freeze(this);
  }
}
