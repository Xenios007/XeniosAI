import { ServiceCollection } from '../foundation/di/service-collection.js';
import { EnterpriseOperationsDescriptor } from './enterprise-operations-descriptor.js';

export function addEnterpriseOperations(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addEnterpriseOperations expects an instance of ServiceCollection.');
  }

  services.registerSingleton('EnterpriseOperationsDescriptor', () => new EnterpriseOperationsDescriptor());

  return services;
}
