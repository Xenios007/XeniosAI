export class ToolResult {
  constructor({
    toolId,
    capability,
    success,
    output = {},
    error = undefined
  }) {
    this.toolId = toolId;
    this.capability = capability;
    this.success = success;
    this.output = Object.freeze({ ...output });
    this.error = error;
    Object.freeze(this);
  }
}
