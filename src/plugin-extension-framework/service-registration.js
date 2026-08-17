import { ServiceCollection } from '../foundation/di/service-collection.js';
import { PluginExtensionOverviewDescriptor } from './overview/plugin-extension-overview-descriptor.js';
import { ExtensionDomainClassificationDescriptor } from './extension-domain-classification/extension-domain-classification-descriptor.js';
import { PackageManifestRegistryProvenanceDescriptor } from './package-manifest-registry-provenance/package-manifest-registry-provenance-descriptor.js';
import { ExtensionLifecycleDistributionCompatibilityDescriptor } from './extension-lifecycle-distribution-compatibility/extension-lifecycle-distribution-compatibility-descriptor.js';
import { CapabilitySecurityIsolationDescriptor } from './capability-security-isolation/capability-security-isolation-descriptor.js';
import { RuntimeHostsExtensionPointsDescriptor } from './runtime-hosts-extension-points/runtime-hosts-extension-points-descriptor.js';
import { PluginSdkDeveloperExperienceAndTestingDescriptor } from './plugin-sdk-developer-experience-and-testing/plugin-sdk-developer-experience-and-testing-descriptor.js';
import { TenantInstallationConfigurationAndOperationsDescriptor } from './tenant-installation-configuration-and-operations/tenant-installation-configuration-and-operations-descriptor.js';
import { MarketplaceGovernanceAndAssuranceDescriptor } from './marketplace-governance-and-assurance/marketplace-governance-and-assurance-descriptor.js';
import { FutureExtensionEcosystemEvolutionDescriptor } from './future-extension-ecosystem-evolution/future-extension-ecosystem-evolution-descriptor.js';

export function addPluginExtensionFramework(services) {
  if (!(services instanceof ServiceCollection)) throw new Error('addPluginExtensionFramework expects an instance of ServiceCollection.');
  services.registerSingleton('PluginExtensionOverviewDescriptor', () => new PluginExtensionOverviewDescriptor());
  services.registerSingleton('ExtensionDomainClassificationDescriptor', () => new ExtensionDomainClassificationDescriptor());
  services.registerSingleton('PackageManifestRegistryProvenanceDescriptor', () => new PackageManifestRegistryProvenanceDescriptor());
  services.registerSingleton('ExtensionLifecycleDistributionCompatibilityDescriptor', () => new ExtensionLifecycleDistributionCompatibilityDescriptor());
  services.registerSingleton('CapabilitySecurityIsolationDescriptor', () => new CapabilitySecurityIsolationDescriptor());
  services.registerSingleton('RuntimeHostsExtensionPointsDescriptor', () => new RuntimeHostsExtensionPointsDescriptor());
  services.registerSingleton('PluginSdkDeveloperExperienceAndTestingDescriptor', () => new PluginSdkDeveloperExperienceAndTestingDescriptor());
  services.registerSingleton('TenantInstallationConfigurationAndOperationsDescriptor', () => new TenantInstallationConfigurationAndOperationsDescriptor());
  services.registerSingleton('MarketplaceGovernanceAndAssuranceDescriptor', () => new MarketplaceGovernanceAndAssuranceDescriptor());
  services.registerSingleton('FutureExtensionEcosystemEvolutionDescriptor', () => new FutureExtensionEcosystemEvolutionDescriptor());
  return services;
}
