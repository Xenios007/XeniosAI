import { ServiceCollection } from '../foundation/di/service-collection.js';
import { DeploymentOverviewDescriptor } from './overview/deployment-overview-descriptor.js';

export function addDeploymentModel(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDeploymentModel expects an instance of ServiceCollection.');
  }

  services.registerSingleton('DeploymentOverviewDescriptor', () => new DeploymentOverviewDescriptor());

  return services;
}
