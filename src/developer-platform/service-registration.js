import { ServiceCollection } from '../foundation/di/service-collection.js';
import { DeveloperPlatformOverviewDescriptor } from './overview/developer-platform-overview-descriptor.js';
import { DeveloperExperienceDescriptor } from './experience/developer-experience-descriptor.js';
import { PlatformCapabilityModelDescriptor } from './capability-model/platform-capability-model-descriptor.js';

export function addDeveloperPlatform(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDeveloperPlatform expects an instance of ServiceCollection.');
  }

  services.registerSingleton('DeveloperPlatformOverviewDescriptor', () => new DeveloperPlatformOverviewDescriptor());
  services.registerSingleton('DeveloperExperienceDescriptor', () => new DeveloperExperienceDescriptor());
  services.registerSingleton('PlatformCapabilityModelDescriptor', () => new PlatformCapabilityModelDescriptor());

  return services;
}
