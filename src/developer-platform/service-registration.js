import { ServiceCollection } from '../foundation/di/service-collection.js';
import { DeveloperPlatformOverviewDescriptor } from './overview/developer-platform-overview-descriptor.js';
import { DeveloperExperienceDescriptor } from './experience/developer-experience-descriptor.js';
import { PlatformCapabilityModelDescriptor } from './capability-model/platform-capability-model-descriptor.js';
import { ProjectServiceLifecycleDescriptor } from './lifecycle/project-service-lifecycle-descriptor.js';
import { BuildTestQualityDescriptor } from './build-quality/build-test-quality-descriptor.js';
import { DeliveryEnvironmentDescriptor } from './delivery-environment/delivery-environment-descriptor.js';
import { PortalCatalogDescriptor } from './portal-catalog/portal-catalog-descriptor.js';

export function addDeveloperPlatform(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDeveloperPlatform expects an instance of ServiceCollection.');
  }

  services.registerSingleton('DeveloperPlatformOverviewDescriptor', () => new DeveloperPlatformOverviewDescriptor());
  services.registerSingleton('DeveloperExperienceDescriptor', () => new DeveloperExperienceDescriptor());
  services.registerSingleton('PlatformCapabilityModelDescriptor', () => new PlatformCapabilityModelDescriptor());
  services.registerSingleton('ProjectServiceLifecycleDescriptor', () => new ProjectServiceLifecycleDescriptor());
  services.registerSingleton('BuildTestQualityDescriptor', () => new BuildTestQualityDescriptor());
  services.registerSingleton('DeliveryEnvironmentDescriptor', () => new DeliveryEnvironmentDescriptor());
  services.registerSingleton('PortalCatalogDescriptor', () => new PortalCatalogDescriptor());

  return services;
}
