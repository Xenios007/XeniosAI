import { ServiceCollection } from '../foundation/di/service-collection.js';
import { COMMUNICATION_STYLES, INTEGRATION_TYPES } from './constants.js';
import { IntegrationContract } from './contracts/integration-contract.js';
import { SimulatedProviderAdapter } from './adapters/simulated-provider-adapter.js';
import { IntegrationRegistry } from './registry/integration-registry.js';
import { RetryPolicy } from './reliability/retry-policy.js';
import { CircuitBreaker } from './reliability/circuit-breaker.js';
import { InMemoryMessageBus } from './messaging/in-memory-message-bus.js';
import { IntegrationService } from './services/integration-service.js';

export function addIntegrationLayer(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addIntegrationLayer expects an instance of ServiceCollection.');
  }

  services.registerSingleton(
    'IntegrationRegistry',
    () =>
      new IntegrationRegistry([
        new SimulatedProviderAdapter({
          providerType: INTEGRATION_TYPES.MESSAGING,
          capabilities: [
            new IntegrationContract({
              contractId: 'messaging.send.v1',
              providerType: INTEGRATION_TYPES.MESSAGING,
              capability: 'messaging.send',
              communicationStyle: COMMUNICATION_STYLES.REQUEST_RESPONSE,
              owner: 'notification'
            })
          ]
        }),
        new SimulatedProviderAdapter({
          providerType: INTEGRATION_TYPES.CALENDAR,
          capabilities: [
            new IntegrationContract({
              contractId: 'calendar.sync.v1',
              providerType: INTEGRATION_TYPES.CALENDAR,
              capability: 'calendar.sync',
              communicationStyle: COMMUNICATION_STYLES.REQUEST_RESPONSE,
              owner: 'calendar'
            })
          ]
        }),
        new SimulatedProviderAdapter({
          providerType: INTEGRATION_TYPES.AI_PROVIDER,
          capabilities: [
            new IntegrationContract({
              contractId: 'ai.complete.v1',
              providerType: INTEGRATION_TYPES.AI_PROVIDER,
              capability: 'ai.complete',
              communicationStyle: COMMUNICATION_STYLES.REQUEST_RESPONSE,
              owner: 'ai'
            })
          ]
        })
      ])
  );
  services.registerSingleton('RetryPolicy', () => new RetryPolicy());
  services.registerSingleton('CircuitBreaker', () => new CircuitBreaker());
  services.registerSingleton(
    'MessageBus',
    provider =>
      new InMemoryMessageBus({
        idGenerator: provider.getRequiredService('IdGenerator'),
        clock: provider.getRequiredService('Clock')
      })
  );
  services.registerSingleton(
    'IntegrationService',
    provider =>
      new IntegrationService({
        registry: provider.getRequiredService('IntegrationRegistry'),
        retryPolicy: provider.getRequiredService('RetryPolicy'),
        circuitBreaker: provider.getRequiredService('CircuitBreaker'),
        logger: provider.getRequiredService('Logger'),
        meter: provider.getRequiredService('Meter')
      })
  );

  return services;
}
