export class ContextAssemblyTelemetry {
  constructor({
    selectedContextLayers = [],
    candidateCount,
    finalTokenUsage,
    omittedItems = [],
    assemblyDurationMs,
    correlationId
  }) {
    this.selectedContextLayers = Object.freeze([...selectedContextLayers]);
    this.candidateCount = candidateCount;
    this.finalTokenUsage = finalTokenUsage;
    this.omittedItems = Object.freeze([...omittedItems]);
    this.assemblyDurationMs = assemblyDurationMs;
    this.correlationId = correlationId;

    Object.freeze(this);
  }
}
