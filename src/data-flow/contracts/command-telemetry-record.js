export class CommandTelemetryRecord {
  constructor({
    commandName,
    correlationId,
    requestId,
    owningService,
    executionDurationMs,
    result,
    failureReason = undefined
  }) {
    this.commandName = commandName;
    this.correlationId = correlationId;
    this.requestId = requestId;
    this.owningService = owningService;
    this.executionDurationMs = executionDurationMs;
    this.result = result;
    this.failureReason = failureReason;

    Object.freeze(this);
  }
}
