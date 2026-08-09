import { BUSINESS_OUTCOMES, BUSINESS_SERVICE_NAMES } from '../constants.js';
import { BusinessResponse } from '../contracts/business-response.js';
import { BusinessValidationResult } from '../contracts/business-validation-result.js';
import { ServiceCapability } from '../contracts/service-capability.js';
import { DomainBusinessService } from './domain-business-service.js';

export class KnowledgeService extends DomainBusinessService {
  constructor() {
    super({
      serviceName: BUSINESS_SERVICE_NAMES.KNOWLEDGE,
      capabilities: [
        new ServiceCapability({
          capability: 'knowledge.lookup',
          serviceName: BUSINESS_SERVICE_NAMES.KNOWLEDGE,
          operation: 'lookupKnowledge',
          description: 'Retrieves authoritative policies, FAQs, and operational knowledge.'
        })
      ]
    });
  }

  validate(request) {
    const errors = [];

    if (!request.input.query) errors.push('Knowledge query is required.');

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
        query: request.input.query,
        items: []
      },
      errors: ['Knowledge storage and retrieval are not implemented yet.']
    });
  }
}
