import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ReferenceImplementationOverviewDescriptor } from './overview/reference-implementation-overview-descriptor.js';

export function addReferenceImplementations(services) {
  if (!(services instanceof ServiceCollection)) throw new Error('addReferenceImplementations expects an instance of ServiceCollection.');
  services.registerSingleton('ReferenceImplementationOverviewDescriptor', () => new ReferenceImplementationOverviewDescriptor());
  return services;
}
