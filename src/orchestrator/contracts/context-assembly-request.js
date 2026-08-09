export class ContextAssemblyRequest {
  constructor({
    purpose,
    requiredLayers = [],
    candidates = [],
    tokenBudget = undefined,
    correlationId,
    metadata = {}
  }) {
    this.purpose = purpose;
    this.requiredLayers = Object.freeze([...requiredLayers]);
    this.candidates = Object.freeze([...candidates]);
    this.tokenBudget = tokenBudget;
    this.correlationId = correlationId;
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
