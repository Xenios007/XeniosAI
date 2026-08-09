export class IntegrationContract {
  constructor({
    contractId,
    providerType,
    capability,
    version = 'v1',
    communicationStyle,
    owner,
    security = {},
    metadata = {}
  }) {
    this.contractId = contractId;
    this.providerType = providerType;
    this.capability = capability;
    this.version = version;
    this.communicationStyle = communicationStyle;
    this.owner = owner;
    this.security = Object.freeze({ ...security });
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
