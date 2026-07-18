import { ServiceCollection } from '../foundation/di/service-collection.js';
import { AuthorizationModelDescriptor } from './authorization/authorization-model-descriptor.js';
import { IdentityAuthenticationDescriptor } from './identity/identity-authentication-descriptor.js';
import { SecurityOverviewDescriptor } from './overview/security-overview-descriptor.js';
import { SecretsKeyManagementDescriptor } from './secrets/secrets-key-management-descriptor.js';
import { ZeroTrustArchitectureDescriptor } from './zero-trust/zero-trust-architecture-descriptor.js';

export function addSecurityArchitecture(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addSecurityArchitecture expects an instance of ServiceCollection.');
  }

  services.registerSingleton('AuthorizationModelDescriptor', () => new AuthorizationModelDescriptor());
  services.registerSingleton('IdentityAuthenticationDescriptor', () => new IdentityAuthenticationDescriptor());
  services.registerSingleton('SecurityOverviewDescriptor', () => new SecurityOverviewDescriptor());
  services.registerSingleton('SecretsKeyManagementDescriptor', () => new SecretsKeyManagementDescriptor());
  services.registerSingleton('ZeroTrustArchitectureDescriptor', () => new ZeroTrustArchitectureDescriptor());

  return services;
}
