import { ServiceCollection } from '../foundation/di/service-collection.js';
import { HighAvailabilityDescriptor } from './availability/high-availability-descriptor.js';
import { ComputeModelDescriptor } from './compute/compute-model-descriptor.js';
import { EnvironmentStrategyDescriptor } from './environments/environment-strategy-descriptor.js';
import { NetworkTopologyDescriptor } from './network/network-topology-descriptor.js';
import { DeploymentOverviewDescriptor } from './overview/deployment-overview-descriptor.js';
import { RuntimeTopologyDescriptor } from './runtime/runtime-topology-descriptor.js';
import { ServiceDeploymentDescriptor } from './service-deployment/service-deployment-descriptor.js';
import { StorageTopologyDescriptor } from './storage/storage-topology-descriptor.js';

export function addDeploymentModel(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDeploymentModel expects an instance of ServiceCollection.');
  }

  services.registerSingleton('ComputeModelDescriptor', () => new ComputeModelDescriptor());
  services.registerSingleton('DeploymentOverviewDescriptor', () => new DeploymentOverviewDescriptor());
  services.registerSingleton('EnvironmentStrategyDescriptor', () => new EnvironmentStrategyDescriptor());
  services.registerSingleton('HighAvailabilityDescriptor', () => new HighAvailabilityDescriptor());
  services.registerSingleton('NetworkTopologyDescriptor', () => new NetworkTopologyDescriptor());
  services.registerSingleton('RuntimeTopologyDescriptor', () => new RuntimeTopologyDescriptor());
  services.registerSingleton('ServiceDeploymentDescriptor', () => new ServiceDeploymentDescriptor());
  services.registerSingleton('StorageTopologyDescriptor', () => new StorageTopologyDescriptor());

  return services;
}
