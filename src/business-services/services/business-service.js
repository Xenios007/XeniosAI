export class BusinessService {
  get serviceName() {
    throw new Error('BusinessService.serviceName must be implemented by a subclass.');
  }

  getCapabilities() {
    throw new Error('BusinessService.getCapabilities must be implemented by a subclass.');
  }

  async execute() {
    throw new Error('BusinessService.execute must be implemented by a subclass.');
  }
}
