import { BUSINESS_ERROR_CODES } from '../constants.js';
import { BusinessServiceError } from '../errors/business-service-error.js';

export class BusinessServiceRegistry {
  constructor(services = []) {
    this.services = new Map();
    this.capabilities = new Map();

    for (const service of services) {
      this.register(service);
    }
  }

  register(service) {
    this.services.set(service.serviceName, service);

    for (const capability of service.getCapabilities()) {
      this.capabilities.set(capability.capability, {
        capability,
        service
      });
    }

    return this;
  }

  listCapabilities() {
    return [...this.capabilities.values()].map(entry => entry.capability);
  }

  getServiceForCapability(capabilityName) {
    const entry = this.capabilities.get(capabilityName);

    if (!entry) {
      throw new BusinessServiceError(
        BUSINESS_ERROR_CODES.CAPABILITY_NOT_REGISTERED,
        `No business service owns capability "${capabilityName}".`
      );
    }

    return entry.service;
  }
}
