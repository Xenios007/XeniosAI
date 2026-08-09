import { BUSINESS_OUTCOMES, BUSINESS_SERVICE_NAMES } from '../constants.js';
import { BusinessResponse } from '../contracts/business-response.js';
import { BusinessValidationResult } from '../contracts/business-validation-result.js';
import { ServiceCapability } from '../contracts/service-capability.js';
import { DomainBusinessService } from './domain-business-service.js';

export class BookingService extends DomainBusinessService {
  constructor({ clock, idGenerator }) {
    super({
      serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
      capabilities: [
        new ServiceCapability({
          capability: 'booking.create',
          serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
          operation: 'createBooking',
          description: 'Creates reservations through the Booking Service ownership boundary.'
        })
      ]
    });
    this.clock = clock;
    this.idGenerator = idGenerator;
  }

  validate(request) {
    const errors = [];

    if (!request.input.guestId) errors.push('Guest ID is required.');
    if (!request.input.propertyId) errors.push('Property ID is required.');
    if (!request.input.checkIn) errors.push('Check-in date is required.');
    if (!request.input.checkOut) errors.push('Check-out date is required.');

    return new BusinessValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  async handleValidRequest(request) {
    const reservationId = this.idGenerator.generate();

    return new BusinessResponse({
      serviceName: this.serviceName,
      capability: request.capability,
      outcome: BUSINESS_OUTCOMES.RESOURCE_UNAVAILABLE,
      data: {
        reservationId,
        status: 'pending_validation',
        guestId: request.input.guestId,
        propertyId: request.input.propertyId
      },
      errors: ['Booking persistence and cross-service workflow are not implemented yet.'],
      events: [
        {
          eventName: 'Reservation Requested',
          aggregateId: reservationId,
          occurredAt: this.clock.now().toISOString()
        }
      ]
    });
  }
}
