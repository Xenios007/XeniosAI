export class BusinessOperationalEvidence {
  constructor({
    evidenceType,
    businessCapability,
    businessProcess,
    businessOutcome,
    customerJourneyStage,
    context = {},
    correlationId,
    source,
    technologyIndependent = true,
    exposesImplementationDetails = false
  }) {
    this.evidenceType = evidenceType;
    this.businessCapability = businessCapability;
    this.businessProcess = businessProcess;
    this.businessOutcome = businessOutcome;
    this.customerJourneyStage = customerJourneyStage;
    this.context = Object.freeze({ ...context });
    this.correlationId = correlationId;
    this.source = source;
    this.technologyIndependent = Boolean(technologyIndependent);
    this.exposesImplementationDetails = Boolean(exposesImplementationDetails);

    Object.freeze(this);
  }
}
