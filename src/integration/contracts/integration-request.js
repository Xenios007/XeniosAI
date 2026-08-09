export class IntegrationRequest {
  constructor({
    capability,
    providerType,
    payload = {},
    correlationId,
    requestId,
    metadata = {}
  }) {
    this.capability = capability;
    this.providerType = providerType;
    this.payload = Object.freeze({ ...payload });
    this.correlationId = correlationId;
    this.requestId = requestId;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
