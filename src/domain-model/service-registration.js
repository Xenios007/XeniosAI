import { ServiceCollection } from '../foundation/di/service-collection.js';
import { DomainOverviewDescriptor } from './overview/domain-overview-descriptor.js';

export function addDomainModel(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDomainModel expects an instance of ServiceCollection.');
  }

  services.registerSingleton('DomainOverviewDescriptor', () => new DomainOverviewDescriptor());

  return services;
}
