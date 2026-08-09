import { BUSINESS_OUTCOMES, BUSINESS_SERVICE_NAMES } from '../constants.js';
import { BusinessResponse } from '../contracts/business-response.js';
import { BusinessValidationResult } from '../contracts/business-validation-result.js';
import { ServiceCapability } from '../contracts/service-capability.js';
import { DomainBusinessService } from './domain-business-service.js';

export class CalendarService extends DomainBusinessService {
  constructor() {
    super({
      serviceName: BUSINESS_SERVICE_NAMES.CALENDAR,
      capabilities: [
        new ServiceCapability({
          capability: 'calendar.check-availability',
          serviceName: BUSINESS_SERVICE_NAMES.CALENDAR,
          operation: 'checkAvailability',
          description: 'Determines availability through the Calendar Service ownership boundary.'
        })
      ]
    });
  }

  validate(request) {
    const errors = [];

    if (!request.input.propertyId) errors.push('Property ID is required.');
    if (!request.input.checkIn) errors.push('Check-in date is required.');
    if (!request.input.checkOut) errors.push('Check-out date is required.');

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
        propertyId: request.input.propertyId,
        checkIn: request.input.checkIn,
        checkOut: request.input.checkOut,
        availability: 'unknown'
      },
      errors: ['Availability data storage is not implemented yet.']
    });
  }
}
