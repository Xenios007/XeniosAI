import { ServiceCollection } from '../foundation/di/service-collection.js';
import { OperationsCommandControlDescriptor } from './command-control/operations-command-control-descriptor.js';
import { EnterpriseOperationsDescriptor } from './enterprise-operations-descriptor.js';
import { EnterpriseOperatingModelDescriptor } from './operating-model/enterprise-operating-model-descriptor.js';
import { EnterpriseOperationsOverviewDescriptor } from './overview/enterprise-operations-overview-descriptor.js';

export function addEnterpriseOperations(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addEnterpriseOperations expects an instance of ServiceCollection.');
  }

  services.registerSingleton('EnterpriseOperationsDescriptor', () => new EnterpriseOperationsDescriptor());
  services.registerSingleton('EnterpriseOperationsOverviewDescriptor', () => new EnterpriseOperationsOverviewDescriptor());
  services.registerSingleton('EnterpriseOperatingModelDescriptor', () => new EnterpriseOperatingModelDescriptor());
  services.registerSingleton('OperationsCommandControlDescriptor', () => new OperationsCommandControlDescriptor());

  return services;
}
