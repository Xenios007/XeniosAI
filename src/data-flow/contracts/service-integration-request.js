export class ServiceIntegrationRequest {
  constructor({
    requestId,
    correlationId,
    contractId,
    sourceService,
    targetService,
    capability,
    authorized = false,
    payload = {},
    metadata = {}
  }) {
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.contractId = contractId;
    this.sourceService = sourceService;
    this.targetService = targetService;
    this.capability = capability;
    this.authorized = Boolean(authorized);
    this.payload = Object.freeze({ ...payload });
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
