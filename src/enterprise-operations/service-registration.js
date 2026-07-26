import { ServiceCollection } from '../foundation/di/service-collection.js';
import { CapacityPerformanceManagementDescriptor } from './capacity-performance-management/capacity-performance-management-descriptor.js';
import { ChangeReleaseOperationsDescriptor } from './change-release-operations/change-release-operations-descriptor.js';
import { OperationsCommandControlDescriptor } from './command-control/operations-command-control-descriptor.js';
import { ContinuityResilienceOperationsDescriptor } from './continuity-resilience-operations/continuity-resilience-operations-descriptor.js';
import { EnterpriseOperationsDescriptor } from './enterprise-operations-descriptor.js';
import { IncidentProblemManagementDescriptor } from './incident-problem-management/incident-problem-management-descriptor.js';
import { EnterpriseOperatingModelDescriptor } from './operating-model/enterprise-operating-model-descriptor.js';
import { EnterpriseOperationsOverviewDescriptor } from './overview/enterprise-operations-overview-descriptor.js';
import { ServiceOperationsDescriptor } from './service-operations/service-operations-descriptor.js';

export function addEnterpriseOperations(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addEnterpriseOperations expects an instance of ServiceCollection.');
  }

  services.registerSingleton('EnterpriseOperationsDescriptor', () => new EnterpriseOperationsDescriptor());
  services.registerSingleton('EnterpriseOperationsOverviewDescriptor', () => new EnterpriseOperationsOverviewDescriptor());
  services.registerSingleton('EnterpriseOperatingModelDescriptor', () => new EnterpriseOperatingModelDescriptor());
  services.registerSingleton('OperationsCommandControlDescriptor', () => new OperationsCommandControlDescriptor());
  services.registerSingleton('ServiceOperationsDescriptor', () => new ServiceOperationsDescriptor());
  services.registerSingleton('IncidentProblemManagementDescriptor', () => new IncidentProblemManagementDescriptor());
  services.registerSingleton('ChangeReleaseOperationsDescriptor', () => new ChangeReleaseOperationsDescriptor());
  services.registerSingleton('CapacityPerformanceManagementDescriptor', () => new CapacityPerformanceManagementDescriptor());
  services.registerSingleton('ContinuityResilienceOperationsDescriptor', () => new ContinuityResilienceOperationsDescriptor());

  return services;
}
