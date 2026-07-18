export class ToolCall {
  constructor({
    toolId,
    capability,
    input,
    correlationId
  }) {
    this.toolId = toolId;
    this.capability = capability;
    this.input = Object.freeze({ ...input });
    this.correlationId = correlationId;
    Object.freeze(this);
  }
}
