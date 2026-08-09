export class IntegrationOperationalEvidence {
  constructor({
    evidenceType,
    integrationContract,
    businessCollaboration,
    businessOutcome,
    correlationId,
    context = {},
    dependencyType,
    lifecycleStage,
    technologyNeutral = true,
    exposesProtocolMechanics = false,
    violatesServiceAutonomy = false
  }) {
    this.evidenceType = evidenceType;
    this.integrationContract = integrationContract;
    this.businessCollaboration = businessCollaboration;
    this.businessOutcome = businessOutcome;
    this.correlationId = correlationId;
    this.context = Object.freeze({ ...context });
    this.dependencyType = dependencyType;
    this.lifecycleStage = lifecycleStage;
    this.technologyNeutral = Boolean(technologyNeutral);
    this.exposesProtocolMechanics = Boolean(exposesProtocolMechanics);
    this.violatesServiceAutonomy = Boolean(violatesServiceAutonomy);

    Object.freeze(this);
  }
}
