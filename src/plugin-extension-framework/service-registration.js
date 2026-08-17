import { ServiceCollection } from '../foundation/di/service-collection.js';
import { PluginExtensionOverviewDescriptor } from './overview/plugin-extension-overview-descriptor.js';
import { ExtensionDomainClassificationDescriptor } from './extension-domain-classification/extension-domain-classification-descriptor.js';
import { PackageManifestRegistryProvenanceDescriptor } from './package-manifest-registry-provenance/package-manifest-registry-provenance-descriptor.js';
import { ExtensionLifecycleDistributionCompatibilityDescriptor } from './extension-lifecycle-distribution-compatibility/extension-lifecycle-distribution-compatibility-descriptor.js';

export function addPluginExtensionFramework(services) {
  if (!(services instanceof ServiceCollection)) throw new Error('addPluginExtensionFramework expects an instance of ServiceCollection.');
  services.registerSingleton('PluginExtensionOverviewDescriptor', () => new PluginExtensionOverviewDescriptor());
  services.registerSingleton('ExtensionDomainClassificationDescriptor', () => new ExtensionDomainClassificationDescriptor());
  services.registerSingleton('PackageManifestRegistryProvenanceDescriptor', () => new PackageManifestRegistryProvenanceDescriptor());
  services.registerSingleton('ExtensionLifecycleDistributionCompatibilityDescriptor', () => new ExtensionLifecycleDistributionCompatibilityDescriptor());
  return services;
}
