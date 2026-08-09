import { ServiceCollection } from '../foundation/di/service-collection.js';
import { BookingService } from './services/booking-service.js';
import { BusinessServiceRegistry } from './registry/business-service-registry.js';
import { BusinessServiceRouter } from './services/business-service-router.js';
import { BusinessToolExecutor } from './ai/business-tool-executor.js';
import { CalendarService } from './services/calendar-service.js';
import { KnowledgeService } from './services/knowledge-service.js';
import { PricingService } from './services/pricing-service.js';
import { PropertyService } from './services/property-service.js';

export function addBusinessServicesLayer(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addBusinessServicesLayer expects an instance of ServiceCollection.');
  }

  services.registerSingleton(
    'BusinessServiceRegistry',
    provider =>
      new BusinessServiceRegistry([
        new CalendarService(),
        new PricingService(),
        new BookingService({
          clock: provider.getRequiredService('Clock'),
          idGenerator: provider.getRequiredService('IdGenerator')
        }),
        new KnowledgeService(),
        new PropertyService()
      ])
  );

  services.registerSingleton(
    'BusinessServiceRouter',
    provider =>
      new BusinessServiceRouter({
        registry: provider.getRequiredService('BusinessServiceRegistry'),
        logger: provider.getRequiredService('Logger'),
        meter: provider.getRequiredService('Meter')
      })
  );

  services.registerSingleton(
    'BusinessToolExecutor',
    provider =>
      new BusinessToolExecutor({
        businessRouter: provider.getRequiredService('BusinessServiceRouter')
      })
  );

  return services;
}
