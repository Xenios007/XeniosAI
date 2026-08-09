export class ToolExecutionPlan {
  constructor({
    toolId,
    capability,
    category,
    input = {},
    executionOrder = 1,
    dependencies = [],
    retryStrategy = { maxRetries: 0 },
    timeoutPolicy = { timeoutMs: 30000 },
    correlationId,
    metadata = {}
  }) {
    this.toolId = toolId;
    this.capability = capability;
    this.category = category;
    this.input = Object.freeze({ ...input });
    this.executionOrder = executionOrder;
    this.dependencies = Object.freeze([...dependencies]);
    this.retryStrategy = Object.freeze({ ...retryStrategy });
    this.timeoutPolicy = Object.freeze({ ...timeoutPolicy });
    this.correlationId = correlationId;
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
