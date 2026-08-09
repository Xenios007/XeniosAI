export class OrchestratedToolResult {
  constructor({
    toolId,
    capability,
    success,
    output = {},
    error = undefined,
    telemetry,
    normalized = true
  }) {
    this.toolId = toolId;
    this.capability = capability;
    this.success = Boolean(success);
    this.output = Object.freeze({ ...output });
    this.error = error;
    this.telemetry = telemetry;
    this.normalized = Boolean(normalized);

    Object.freeze(this);
  }
}
