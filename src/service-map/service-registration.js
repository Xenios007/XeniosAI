import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ServiceCatalog } from './catalog/service-catalog.js';
import { ServiceBoundaryRegistry } from './boundaries/service-boundary-registry.js';
import { ServiceCommunicationRegistry } from './communication/service-communication-registry.js';
import { ServiceDependencyGraph } from './dependencies/service-dependency-graph.js';
import { FutureServiceRegistry } from './future/future-service-registry.js';
import { ServiceGovernanceRegistry } from './governance/service-governance-registry.js';
import { ServiceLandscape } from './landscape/service-landscape.js';
import { ServiceLifecycleRegistry } from './lifecycle/service-lifecycle-registry.js';
import { ServiceOwnershipRegistry } from './ownership/service-ownership-registry.js';
import { ServiceVersionRegistry } from './versioning/service-version-registry.js';

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
  services.registerSingleton('ServiceLifecycleRegistry', () => new ServiceLifecycleRegistry());
  services.registerSingleton('ServiceGovernanceRegistry', () => new ServiceGovernanceRegistry());
  services.registerSingleton('ServiceVersionRegistry', () => new ServiceVersionRegistry());
  services.registerSingleton('FutureServiceRegistry', () => new FutureServiceRegistry());
  services.registerSingleton('ServiceCommunicationRegistry', provider =>
    new ServiceCommunicationRegistry({
      dependencyGraph: provider.getRequiredService('ServiceDependencyGraph')
    })
  );

  return services;
}
