import { BUSINESS_OUTCOMES, BUSINESS_SERVICE_NAMES } from '../constants.js';
import { BusinessResponse } from '../contracts/business-response.js';
import { BusinessValidationResult } from '../contracts/business-validation-result.js';
import { ServiceCapability } from '../contracts/service-capability.js';
import { DomainBusinessService } from './domain-business-service.js';

export class PricingService extends DomainBusinessService {
  constructor() {
    super({
      serviceName: BUSINESS_SERVICE_NAMES.PRICING,
      capabilities: [
        new ServiceCapability({
          capability: 'pricing.compute',
          serviceName: BUSINESS_SERVICE_NAMES.PRICING,
          operation: 'computePrice',
          description: 'Calculates pricing through the Pricing Service ownership boundary.'
        })
      ]
    });
  }

  validate(request) {
    const errors = [];

    if (!request.input.propertyId) errors.push('Property ID is required.');
    if (typeof request.input.baseRate !== 'number') errors.push('Base rate is required.');
    if (typeof request.input.nights !== 'number') errors.push('Night count is required.');
    if (!request.input.currency) errors.push('Currency is required.');

    return new BusinessValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  async handleValidRequest(request) {
    const amount = request.input.baseRate * request.input.nights;

    return new BusinessResponse({
      serviceName: this.serviceName,
      capability: request.capability,
      outcome: BUSINESS_OUTCOMES.SUCCESS,
      data: {
        propertyId: request.input.propertyId,
        amount,
        currency: request.input.currency,
        pricingBasis: 'explicit-input'
      }
    });
  }
}
