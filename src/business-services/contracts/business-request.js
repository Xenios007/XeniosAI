export class BusinessRequest {
  constructor({
    capability,
    serviceName,
    operation,
    input = {},
    principal = {},
    correlationId,
    requestId,
    metadata = {}
  }) {
    this.capability = capability;
    this.serviceName = serviceName;
    this.operation = operation;
    this.input = Object.freeze({ ...input });
    this.principal = Object.freeze({ ...principal });
    this.correlationId = correlationId;
    this.requestId = requestId;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
