export class ServiceCapability {
  constructor({
    capability,
    serviceName,
    operation,
    description,
    version = 'v1'
  }) {
    this.capability = capability;
    this.serviceName = serviceName;
    this.operation = operation;
    this.description = description;
    this.version = version;
    Object.freeze(this);
  }
}
