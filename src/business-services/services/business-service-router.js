import { BusinessRequest } from '../contracts/business-request.js';

export class BusinessServiceRouter {
  constructor({ registry, logger, meter }) {
    this.registry = registry;
    this.logger = logger;
    this.meter = meter;
  }

  async execute(request) {
    const businessRequest = request instanceof BusinessRequest
      ? request
      : new BusinessRequest(request);
    const service = this.registry.getServiceForCapability(businessRequest.capability);
    const response = await service.execute(businessRequest);

    this.logger.info('Business capability executed.', {
      serviceName: response.serviceName,
      capability: response.capability,
      outcome: response.outcome,
      correlationId: businessRequest.correlationId
    });
    this.meter.incrementCounter('business_capabilities_total', 1, {
      serviceName: response.serviceName,
      outcome: response.outcome
    });

    return response;
  }
}
