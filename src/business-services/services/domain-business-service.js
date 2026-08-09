import { BUSINESS_ERROR_CODES, BUSINESS_OUTCOMES } from '../constants.js';
import { BusinessResponse } from '../contracts/business-response.js';
import { BusinessValidationResult } from '../contracts/business-validation-result.js';
import { BusinessServiceError } from '../errors/business-service-error.js';
import { BusinessService } from './business-service.js';

export class DomainBusinessService extends BusinessService {
  constructor({ serviceName, capabilities }) {
    super();
    this._serviceName = serviceName;
    this.capabilities = Object.freeze([...capabilities]);
  }

  get serviceName() {
    return this._serviceName;
  }

  getCapabilities() {
    return this.capabilities;
  }

  async execute(request) {
    const capability = this.capabilities.find(item => item.capability === request.capability);

    if (!capability) {
      throw new BusinessServiceError(
        BUSINESS_ERROR_CODES.OWNERSHIP_VIOLATION,
        `Service "${this.serviceName}" does not own capability "${request.capability}".`
      );
    }

    const validation = this.validate(request);
    if (!validation.isValid) {
      return new BusinessResponse({
        serviceName: this.serviceName,
        capability: request.capability,
        outcome: BUSINESS_OUTCOMES.VALIDATION_FAILURE,
        errors: validation.errors
      });
    }

    return this.handleValidRequest(request);
  }

  validate() {
    return new BusinessValidationResult({ isValid: true });
  }

  async handleValidRequest(request) {
    return new BusinessResponse({
      serviceName: this.serviceName,
      capability: request.capability,
      outcome: BUSINESS_OUTCOMES.RESOURCE_UNAVAILABLE,
      errors: ['Business behavior is not specified for this capability yet.']
    });
  }
}
