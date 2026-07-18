export class MemoryRetrievalRequest {
  constructor({
    purpose,
    categories = [],
    query = undefined,
    userId = undefined,
    sessionId = undefined,
    workflowId = undefined,
    correlationId,
    maxItems = 5,
    tokenBudget = undefined,
    metadata = {}
  }) {
    this.purpose = purpose;
    this.categories = Object.freeze([...categories]);
    this.query = query;
    this.userId = userId;
    this.sessionId = sessionId;
    this.workflowId = workflowId;
    this.correlationId = correlationId;
    this.maxItems = maxItems;
    this.tokenBudget = tokenBudget;
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
