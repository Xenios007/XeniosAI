import { ServiceCollection } from '../foundation/di/service-collection.js';
import { PluginExtensionOverviewDescriptor } from './overview/plugin-extension-overview-descriptor.js';

export function addPluginExtensionFramework(services) {
  if (!(services instanceof ServiceCollection)) throw new Error('addPluginExtensionFramework expects an instance of ServiceCollection.');
  services.registerSingleton('PluginExtensionOverviewDescriptor', () => new PluginExtensionOverviewDescriptor());
  return services;
}
