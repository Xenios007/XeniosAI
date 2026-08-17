import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ApiSdkOverviewDescriptor } from './overview/api-sdk-overview-descriptor.js';
import { ApiProductContractModelDescriptor } from './product-contract-model/api-product-contract-model-descriptor.js';

export function addApiSdk(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addApiSdk expects an instance of ServiceCollection.');
  }
  services.registerSingleton('ApiSdkOverviewDescriptor', () => new ApiSdkOverviewDescriptor());
  services.registerSingleton('ApiProductContractModelDescriptor', () => new ApiProductContractModelDescriptor());
  return services;
}
