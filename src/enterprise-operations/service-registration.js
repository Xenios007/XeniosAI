import { ServiceCollection } from '../foundation/di/service-collection.js';
import { EnterpriseOperationsDescriptor } from './enterprise-operations-descriptor.js';
import { EnterpriseOperationsOverviewDescriptor } from './overview/enterprise-operations-overview-descriptor.js';

export function addEnterpriseOperations(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addEnterpriseOperations expects an instance of ServiceCollection.');
  }

  services.registerSingleton('EnterpriseOperationsDescriptor', () => new EnterpriseOperationsDescriptor());
  services.registerSingleton('EnterpriseOperationsOverviewDescriptor', () => new EnterpriseOperationsOverviewDescriptor());

  return services;
}
