export class AiOperationalEvidence {
  constructor({
    evidenceType,
    aiObjective,
    agentIdentity,
    lifecycleStage,
    businessContext = {},
    recommendation,
    confidence,
    humanOversightActivity,
    correlationId,
    technologyNeutral = true,
    exposesSensitiveKnowledge = false,
    exposesModelInternals = false
  }) {
    this.evidenceType = evidenceType;
    this.aiObjective = aiObjective;
    this.agentIdentity = agentIdentity;
    this.lifecycleStage = lifecycleStage;
    this.businessContext = Object.freeze({ ...businessContext });
    this.recommendation = recommendation;
    this.confidence = confidence;
    this.humanOversightActivity = humanOversightActivity;
    this.correlationId = correlationId;
    this.technologyNeutral = Boolean(technologyNeutral);
    this.exposesSensitiveKnowledge = Boolean(exposesSensitiveKnowledge);
    this.exposesModelInternals = Boolean(exposesModelInternals);

    Object.freeze(this);
  }
}
