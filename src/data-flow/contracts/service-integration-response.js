export class ServiceIntegrationResponse {
  constructor({
    requestId,
    correlationId,
    contractId,
    sourceService,
    targetService,
    status,
    data = {},
    error = undefined,
    businessOutcome = undefined
  }) {
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.contractId = contractId;
    this.sourceService = sourceService;
    this.targetService = targetService;
    this.status = status;
    this.data = Object.freeze({ ...data });
    this.error = error;
    this.businessOutcome = businessOutcome;

    Object.freeze(this);
  }
}
