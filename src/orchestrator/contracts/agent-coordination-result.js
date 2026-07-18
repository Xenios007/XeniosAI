export class AgentCoordinationResult {
  constructor({
    assignments = [],
    aggregatedOutputs = [],
    conflicts = [],
    validationErrors = [],
    telemetry,
    correlationId
  }) {
    this.assignments = Object.freeze([...assignments]);
    this.aggregatedOutputs = Object.freeze([...aggregatedOutputs]);
    this.conflicts = Object.freeze([...conflicts]);
    this.validationErrors = Object.freeze([...validationErrors]);
    this.telemetry = telemetry;
    this.correlationId = correlationId;

    Object.freeze(this);
  }
}
