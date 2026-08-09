export class OrchestratorRequest {
  constructor({
    requestId,
    correlationId,
    userInput,
    context = {},
    requestedCapabilities = [],
    metadata = {}
  }) {
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.userInput = userInput;
    this.context = Object.freeze({ ...context });
    this.requestedCapabilities = Object.freeze([...requestedCapabilities]);
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
