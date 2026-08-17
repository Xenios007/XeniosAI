import { ServiceCollection } from '../foundation/di/service-collection.js';
import { MultiTenancyOverviewDescriptor } from './multi-tenancy-overview-descriptor.js';
export function addMultiTenancy(services) { if (!(services instanceof ServiceCollection)) throw new Error('addMultiTenancy expects an instance of ServiceCollection.'); services.registerSingleton('MultiTenancyOverviewDescriptor', () => new MultiTenancyOverviewDescriptor()); return services; }
