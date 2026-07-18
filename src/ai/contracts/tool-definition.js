export class ToolDefinition {
  constructor({
    toolId,
    capability,
    description
  }) {
    this.toolId = toolId;
    this.capability = capability;
    this.description = description;
    Object.freeze(this);
  }
}
