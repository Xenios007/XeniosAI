export class ApiTelemetryRecord {
  constructor({
    correlationId,
    requestId,
    serviceName,
    operation,
    responseTimeMs,
    result,
    errorInformation = undefined
  }) {
    this.correlationId = correlationId;
    this.requestId = requestId;
    this.serviceName = serviceName;
    this.operation = operation;
    this.responseTimeMs = responseTimeMs;
    this.result = result;
    this.errorInformation = errorInformation;

    Object.freeze(this);
  }
}
