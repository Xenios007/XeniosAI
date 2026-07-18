import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ServiceCatalog } from './catalog/service-catalog.js';
import { ServiceLandscape } from './landscape/service-landscape.js';
import { ServiceOwnershipRegistry } from './ownership/service-ownership-registry.js';

export function addServiceMap(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addServiceMap expects an instance of ServiceCollection.');
  }

  services.registerSingleton('ServiceLandscape', provider =>
    new ServiceLandscape({
      clock: provider.getRequiredService('Clock')
    })
  );
  services.registerSingleton('ServiceCatalog', () => new ServiceCatalog());
  services.registerSingleton('ServiceOwnershipRegistry', () => new ServiceOwnershipRegistry());

  return services;
}
