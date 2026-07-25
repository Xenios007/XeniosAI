import { ServiceCollection } from '../foundation/di/service-collection.js';
import { BusinessObservabilityDescriptor } from './business/business-observability-descriptor.js';
import { ObservabilityOverviewDescriptor } from './overview/observability-overview-descriptor.js';
import { ObservabilityPrinciplesDescriptor } from './principles/observability-principles-descriptor.js';

export function addObservabilityArchitecture(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addObservabilityArchitecture expects an instance of ServiceCollection.');
  }

  services.registerSingleton('ObservabilityOverviewDescriptor', () => new ObservabilityOverviewDescriptor());
  services.registerSingleton('ObservabilityPrinciplesDescriptor', () => new ObservabilityPrinciplesDescriptor());
  services.registerSingleton('BusinessObservabilityDescriptor', () => new BusinessObservabilityDescriptor());

  return services;
}
