export class MemoryContext {
  constructor({
    purpose,
    selectedMemories = [],
    excludedMemories = [],
    telemetry,
    correlationId,
    tokenBudget = undefined
  }) {
    this.purpose = purpose;
    this.selectedMemories = Object.freeze([...selectedMemories]);
    this.excludedMemories = Object.freeze([...excludedMemories]);
    this.telemetry = telemetry;
    this.correlationId = correlationId;
    this.tokenBudget = tokenBudget;

    Object.freeze(this);
  }
}
