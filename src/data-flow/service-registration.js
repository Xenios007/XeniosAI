import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ExecutionOverviewDescriptor } from './execution/execution-overview-descriptor.js';

export function addDataFlow(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDataFlow expects an instance of ServiceCollection.');
  }

  services.registerSingleton('ExecutionOverviewDescriptor', () => new ExecutionOverviewDescriptor());

  return services;
}
