export class MemoryOperationTelemetry {
  constructor({
    memoryCategory,
    retrievalDurationMs,
    candidateCount,
    selectedMemories = [],
    confidence = 0,
    freshnessEvaluation = {},
    correlationId
  }) {
    this.memoryCategory = memoryCategory;
    this.retrievalDurationMs = retrievalDurationMs;
    this.candidateCount = candidateCount;
    this.selectedMemories = Object.freeze([...selectedMemories]);
    this.confidence = confidence;
    this.freshnessEvaluation = Object.freeze({ ...freshnessEvaluation });
    this.correlationId = correlationId;

    Object.freeze(this);
  }
}
