import { FUTURE_SERVICE_TYPES } from '../constants.js';

export class FutureServiceCandidate {
  constructor({
    serviceName,
    displayName,
    domain,
    serviceType = FUTURE_SERVICE_TYPES.BUSINESS,
    potentialResponsibilities = [],
    implementationCommitted = false
  }) {
    this.serviceName = serviceName;
    this.displayName = displayName;
    this.domain = domain;
    this.serviceType = serviceType;
    this.potentialResponsibilities = Object.freeze([...potentialResponsibilities]);
    this.implementationCommitted = Boolean(implementationCommitted);

    Object.freeze(this);
  }
}
