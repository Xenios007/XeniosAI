import { ServiceCollection } from '../foundation/di/service-collection.js';
import { MessengerChannelAdapter } from './channel/messenger-channel-adapter.js';
import { WhatsAppChannelAdapter } from './channel/whatsapp-channel-adapter.js';
import { WebsiteChannelAdapter } from './channel/website-channel-adapter.js';
import { ChannelRegistry } from './services/channel-registry.js';
import { ExperienceService } from './services/experience-service.js';

export function addExperienceLayer(services, { gatewayRegistrationKey = 'GatewayPort' } = {}) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addExperienceLayer expects an instance of ServiceCollection.');
  }

  services.registerSingleton('ChannelRegistry', () =>
    new ChannelRegistry([
      new MessengerChannelAdapter(),
      new WhatsAppChannelAdapter(),
      new WebsiteChannelAdapter()
    ])
  );

  services.registerSingleton('ExperienceService', provider =>
    new ExperienceService({
      channelRegistry: provider.getRequiredService('ChannelRegistry'),
      gateway: provider.getRequiredService(gatewayRegistrationKey),
      clock: provider.getRequiredService('Clock'),
      logger: provider.getRequiredService('Logger'),
      meter: provider.getRequiredService('Meter')
    })
  );

  return services;
}
