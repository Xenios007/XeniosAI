import { EnvironmentConfigurationProvider } from './configuration/environment-configuration-provider.js';
import { ServiceCollection } from './di/service-collection.js';
import { StaticFeatureFlagService } from './feature-flags/static-feature-flag-service.js';
import { UuidGenerator } from './identity/uuid-generator.js';
import { StructuredConsoleLogger } from './logging/structured-console-logger.js';
import { InMemoryMeter } from './metrics/in-memory-meter.js';
import { EnvironmentSecretProvider } from './secrets/environment-secret-provider.js';
import { NodeCryptoService } from './security/node-crypto-service.js';
import { SystemClock } from './time/system-clock.js';

export function createFoundationServiceCollection({
  environment = process.env,
  featureFlags = {},
  logLevel
} = {}) {
  const services = new ServiceCollection();

  services.registerSingleton('Clock', () => new SystemClock());
  services.registerSingleton('ConfigurationProvider', () => new EnvironmentConfigurationProvider(environment));
  services.registerSingleton('SecretProvider', () => new EnvironmentSecretProvider(environment));
  services.registerSingleton('FeatureFlagService', () => new StaticFeatureFlagService(featureFlags));
  services.registerSingleton('IdGenerator', () => new UuidGenerator());
  services.registerSingleton('Meter', () => new InMemoryMeter());
  services.registerSingleton('CryptoService', () => new NodeCryptoService());
  services.registerSingleton('Logger', provider =>
    new StructuredConsoleLogger({
      clock: provider.getRequiredService('Clock'),
      level: logLevel
    })
  );

  return services;
}
