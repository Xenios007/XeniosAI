import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ApiSdkOverviewDescriptor } from './overview/api-sdk-overview-descriptor.js';
import { ApiProductContractModelDescriptor } from './product-contract-model/api-product-contract-model-descriptor.js';
import { ApiDesignInteractionPatternsDescriptor } from './design-interaction-patterns/api-design-interaction-patterns-descriptor.js';
import { ApiLifecycleVersioningCompatibilityDescriptor } from './lifecycle-versioning-compatibility/api-lifecycle-versioning-compatibility-descriptor.js';
import { ApiSecurityAccessIsolationDescriptor } from './security-access-isolation/api-security-access-isolation-descriptor.js';

export function addApiSdk(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addApiSdk expects an instance of ServiceCollection.');
  }
  services.registerSingleton('ApiSdkOverviewDescriptor', () => new ApiSdkOverviewDescriptor());
  services.registerSingleton('ApiProductContractModelDescriptor', () => new ApiProductContractModelDescriptor());
  services.registerSingleton('ApiDesignInteractionPatternsDescriptor', () => new ApiDesignInteractionPatternsDescriptor());
  services.registerSingleton('ApiLifecycleVersioningCompatibilityDescriptor', () => new ApiLifecycleVersioningCompatibilityDescriptor());
  services.registerSingleton('ApiSecurityAccessIsolationDescriptor', () => new ApiSecurityAccessIsolationDescriptor());
  return services;
}
