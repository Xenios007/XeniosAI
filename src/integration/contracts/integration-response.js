export class IntegrationResponse {
  constructor({
    providerType,
    capability,
    success,
    normalizedPayload = {},
    rawProvider = undefined,
    error = undefined,
    metadata = {}
  }) {
    this.providerType = providerType;
    this.capability = capability;
    this.success = success;
    this.normalizedPayload = Object.freeze({ ...normalizedPayload });
    this.rawProvider = rawProvider;
    this.error = error;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
