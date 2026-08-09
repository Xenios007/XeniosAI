export class GovernedObservabilityEvidence {
  constructor({
    evidenceType,
    owner,
    businessCapability,
    lifecycleStage,
    integrityRequirement,
    correlationId,
    governanceClassification,
    telemetryConsideration,
    securityAlignmentActivity,
    qualityAssuranceConsideration,
    explainabilityArea,
    technologyNeutral = true,
    vendorNeutral = true
  }) {
    this.evidenceType = evidenceType;
    this.owner = owner;
    this.businessCapability = businessCapability;
    this.lifecycleStage = lifecycleStage;
    this.integrityRequirement = integrityRequirement;
    this.correlationId = correlationId;
    this.governanceClassification = governanceClassification;
    this.telemetryConsideration = telemetryConsideration;
    this.securityAlignmentActivity = securityAlignmentActivity;
    this.qualityAssuranceConsideration = qualityAssuranceConsideration;
    this.explainabilityArea = explainabilityArea;
    this.technologyNeutral = Boolean(technologyNeutral);
    this.vendorNeutral = Boolean(vendorNeutral);

    Object.freeze(this);
  }
}
