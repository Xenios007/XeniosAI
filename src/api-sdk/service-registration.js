import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ApiSdkOverviewDescriptor } from './overview/api-sdk-overview-descriptor.js';
import { ApiProductContractModelDescriptor } from './product-contract-model/api-product-contract-model-descriptor.js';
import { ApiDesignInteractionPatternsDescriptor } from './design-interaction-patterns/api-design-interaction-patterns-descriptor.js';
import { ApiLifecycleVersioningCompatibilityDescriptor } from './lifecycle-versioning-compatibility/api-lifecycle-versioning-compatibility-descriptor.js';
import { ApiSecurityAccessIsolationDescriptor } from './security-access-isolation/api-security-access-isolation-descriptor.js';
import { SdkArchitectureDistributionDescriptor } from './sdk-architecture-distribution/sdk-architecture-distribution-descriptor.js';
import { DeveloperExperienceConformanceDescriptor } from './developer-experience-conformance/developer-experience-conformance-descriptor.js';
import { GovernanceAssuranceDescriptor } from './governance-assurance/governance-assurance-descriptor.js';
import { OperationsObservabilityPerformanceDescriptor } from './operations-observability-performance/operations-observability-performance-descriptor.js';

export function addApiSdk(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addApiSdk expects an instance of ServiceCollection.');
  }
  services.registerSingleton('ApiSdkOverviewDescriptor', () => new ApiSdkOverviewDescriptor());
  services.registerSingleton('ApiProductContractModelDescriptor', () => new ApiProductContractModelDescriptor());
  services.registerSingleton('ApiDesignInteractionPatternsDescriptor', () => new ApiDesignInteractionPatternsDescriptor());
  services.registerSingleton('ApiLifecycleVersioningCompatibilityDescriptor', () => new ApiLifecycleVersioningCompatibilityDescriptor());
  services.registerSingleton('ApiSecurityAccessIsolationDescriptor', () => new ApiSecurityAccessIsolationDescriptor());
  services.registerSingleton('SdkArchitectureDistributionDescriptor', () => new SdkArchitectureDistributionDescriptor());
  services.registerSingleton('DeveloperExperienceConformanceDescriptor', () => new DeveloperExperienceConformanceDescriptor());
  services.registerSingleton('GovernanceAssuranceDescriptor', () => new GovernanceAssuranceDescriptor());
  services.registerSingleton('OperationsObservabilityPerformanceDescriptor', () => new OperationsObservabilityPerformanceDescriptor());
  return services;
}
