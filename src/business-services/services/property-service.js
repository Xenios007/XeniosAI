import { BUSINESS_OUTCOMES, BUSINESS_SERVICE_NAMES } from '../constants.js';
import { BusinessResponse } from '../contracts/business-response.js';
import { BusinessValidationResult } from '../contracts/business-validation-result.js';
import { ServiceCapability } from '../contracts/service-capability.js';
import { DomainBusinessService } from './domain-business-service.js';

export class PropertyService extends DomainBusinessService {
  constructor() {
    super({
      serviceName: BUSINESS_SERVICE_NAMES.PROPERTY,
      capabilities: [
        new ServiceCapability({
          capability: 'property.get',
          serviceName: BUSINESS_SERVICE_NAMES.PROPERTY,
          operation: 'getProperty',
          description: 'Retrieves property information through the Property Service ownership boundary.'
        })
      ]
    });
  }

  validate(request) {
    const errors = [];

    if (!request.input.propertyId) errors.push('Property ID is required.');

    return new BusinessValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  async handleValidRequest(request) {
    return new BusinessResponse({
      serviceName: this.serviceName,
      capability: request.capability,
      outcome: BUSINESS_OUTCOMES.RESOURCE_UNAVAILABLE,
      data: {
        propertyId: request.input.propertyId
      },
      errors: ['Property data storage is not implemented yet.']
    });
  }
}
