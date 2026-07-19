import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ObservabilityOverviewDescriptor } from './overview/observability-overview-descriptor.js';
import { ObservabilityPrinciplesDescriptor } from './principles/observability-principles-descriptor.js';

export function addObservabilityArchitecture(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addObservabilityArchitecture expects an instance of ServiceCollection.');
  }

  services.registerSingleton('ObservabilityOverviewDescriptor', () => new ObservabilityOverviewDescriptor());
  services.registerSingleton('ObservabilityPrinciplesDescriptor', () => new ObservabilityPrinciplesDescriptor());

  return services;
}
