import { ServiceCollection } from '../foundation/di/service-collection.js';
import { BoundedContextRegistry } from './bounded-contexts/bounded-context-registry.js';
import { CoreEntityRegistry } from './entities/core-entity-registry.js';
import { DomainOverviewDescriptor } from './overview/domain-overview-descriptor.js';

export function addDomainModel(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDomainModel expects an instance of ServiceCollection.');
  }

  services.registerSingleton('BoundedContextRegistry', () => new BoundedContextRegistry());
  services.registerSingleton('CoreEntityRegistry', () => new CoreEntityRegistry());
  services.registerSingleton('DomainOverviewDescriptor', () => new DomainOverviewDescriptor());

  return services;
}
