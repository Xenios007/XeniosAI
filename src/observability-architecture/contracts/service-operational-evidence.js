export class ServiceOperationalEvidence {
  constructor({
    evidenceType,
    serviceName,
    serviceState,
    lifecycleStage,
    interactionType,
    businessContext = {},
    correlationId,
    dependencyType,
    technologyIndependent = true,
    exposesImplementationDetails = false
  }) {
    this.evidenceType = evidenceType;
    this.serviceName = serviceName;
    this.serviceState = serviceState;
    this.lifecycleStage = lifecycleStage;
    this.interactionType = interactionType;
    this.businessContext = Object.freeze({ ...businessContext });
    this.correlationId = correlationId;
    this.dependencyType = dependencyType;
    this.technologyIndependent = Boolean(technologyIndependent);
    this.exposesImplementationDetails = Boolean(exposesImplementationDetails);

    Object.freeze(this);
  }
}
