import { ServiceCollection } from '../foundation/di/service-collection.js';
import { MultiTenancyOverviewDescriptor } from './multi-tenancy-overview-descriptor.js';
import { TenantDomainIsolationDescriptor } from './tenant-domain-isolation/tenant-domain-isolation-descriptor.js';
import { TenantLifecycleProvisioningDescriptor } from './tenant-lifecycle-provisioning/tenant-lifecycle-provisioning-descriptor.js';
export function addMultiTenancy(services) { if (!(services instanceof ServiceCollection)) throw new Error('addMultiTenancy expects an instance of ServiceCollection.'); services.registerSingleton('MultiTenancyOverviewDescriptor', () => new MultiTenancyOverviewDescriptor()); services.registerSingleton('TenantDomainIsolationDescriptor', () => new TenantDomainIsolationDescriptor()); services.registerSingleton('TenantLifecycleProvisioningDescriptor', () => new TenantLifecycleProvisioningDescriptor()); return services; }
