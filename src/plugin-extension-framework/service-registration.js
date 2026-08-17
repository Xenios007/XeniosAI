import { ServiceCollection } from '../foundation/di/service-collection.js';
import { PluginExtensionOverviewDescriptor } from './overview/plugin-extension-overview-descriptor.js';
import { ExtensionDomainClassificationDescriptor } from './extension-domain-classification/extension-domain-classification-descriptor.js';

export function addPluginExtensionFramework(services) {
  if (!(services instanceof ServiceCollection)) throw new Error('addPluginExtensionFramework expects an instance of ServiceCollection.');
  services.registerSingleton('PluginExtensionOverviewDescriptor', () => new PluginExtensionOverviewDescriptor());
  services.registerSingleton('ExtensionDomainClassificationDescriptor', () => new ExtensionDomainClassificationDescriptor());
  return services;
}
