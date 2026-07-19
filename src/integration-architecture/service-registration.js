import { ServiceCollection } from '../foundation/di/service-collection.js';
import { IntegrationOverviewDescriptor } from './overview/integration-overview-descriptor.js';

export function addIntegrationArchitecture(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addIntegrationArchitecture expects an instance of ServiceCollection.');
  }

  services.registerSingleton('IntegrationOverviewDescriptor', () => new IntegrationOverviewDescriptor());

  return services;
}
