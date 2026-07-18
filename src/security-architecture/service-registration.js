import { ServiceCollection } from '../foundation/di/service-collection.js';
import { IdentityAuthenticationDescriptor } from './identity/identity-authentication-descriptor.js';
import { SecurityOverviewDescriptor } from './overview/security-overview-descriptor.js';

export function addSecurityArchitecture(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addSecurityArchitecture expects an instance of ServiceCollection.');
  }

  services.registerSingleton('IdentityAuthenticationDescriptor', () => new IdentityAuthenticationDescriptor());
  services.registerSingleton('SecurityOverviewDescriptor', () => new SecurityOverviewDescriptor());

  return services;
}
