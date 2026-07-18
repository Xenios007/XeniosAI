import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ServiceCatalog } from './catalog/service-catalog.js';
import { ServiceBoundaryRegistry } from './boundaries/service-boundary-registry.js';
import { ServiceDependencyGraph } from './dependencies/service-dependency-graph.js';
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
  services.registerSingleton('ServiceDependencyGraph', () => new ServiceDependencyGraph());
  services.registerSingleton('ServiceBoundaryRegistry', () => new ServiceBoundaryRegistry());

  return services;
}
