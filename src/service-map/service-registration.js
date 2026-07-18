import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ServiceLandscape } from './landscape/service-landscape.js';

export function addServiceMap(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addServiceMap expects an instance of ServiceCollection.');
  }

  services.registerSingleton('ServiceLandscape', provider =>
    new ServiceLandscape({
      clock: provider.getRequiredService('Clock')
    })
  );

  return services;
}
