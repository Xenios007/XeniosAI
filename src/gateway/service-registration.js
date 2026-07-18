import { ServiceCollection } from '../foundation/di/service-collection.js';
import { AllowAllAuthorizer } from './security/allow-all-authorizer.js';
import { PassThroughAuthenticator } from './security/pass-through-authenticator.js';
import { DefaultGatewayValidator } from './validation/default-gateway-validator.js';
import { InMemoryRateLimiter } from './rate-limiting/in-memory-rate-limiter.js';
import { DefaultGatewayRouter } from './routing/default-gateway-router.js';
import { GatewayService } from './services/gateway-service.js';
import { CHANNEL_TYPES } from '../experience/contracts/channel-types.js';

export function addGatewayLayer(services, { conversationRegistrationKey = 'ConversationPort' } = {}) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addGatewayLayer expects an instance of ServiceCollection.');
  }

  services.registerSingleton('Authenticator', () => new PassThroughAuthenticator());
  services.registerSingleton('Authorizer', () => new AllowAllAuthorizer());
  services.registerSingleton(
    'GatewayValidator',
    () =>
      new DefaultGatewayValidator({
        supportedChannels: [
          CHANNEL_TYPES.MESSENGER,
          CHANNEL_TYPES.WHATSAPP,
          CHANNEL_TYPES.INSTAGRAM,
          CHANNEL_TYPES.WEBSITE,
          CHANNEL_TYPES.API,
          CHANNEL_TYPES.MOBILE
        ]
      })
  );
  services.registerSingleton(
    'RateLimiter',
    provider =>
      new InMemoryRateLimiter({
        clock: provider.getRequiredService('Clock')
      })
  );
  services.registerSingleton('GatewayRouter', () => new DefaultGatewayRouter());
  services.registerSingleton('GatewayPort', provider =>
    new GatewayService({
      clock: provider.getRequiredService('Clock'),
      idGenerator: provider.getRequiredService('IdGenerator'),
      logger: provider.getRequiredService('Logger'),
      meter: provider.getRequiredService('Meter'),
      authenticator: provider.getRequiredService('Authenticator'),
      authorizer: provider.getRequiredService('Authorizer'),
      validator: provider.getRequiredService('GatewayValidator'),
      rateLimiter: provider.getRequiredService('RateLimiter'),
      router: provider.getRequiredService('GatewayRouter'),
      conversationPort: provider.getRequiredService(conversationRegistrationKey)
    })
  );

  return services;
}
