import { ServiceCollection } from '../foundation/di/service-collection.js';
import { MessengerChannelAdapter } from './channel/messenger-channel-adapter.js';
import { WhatsAppChannelAdapter } from './channel/whatsapp-channel-adapter.js';
import { WebsiteChannelAdapter } from './channel/website-channel-adapter.js';
import { ChannelRegistry } from './services/channel-registry.js';
import { ExperienceService } from './services/experience-service.js';
import { ExperienceConversationFrontendOverviewDescriptor } from './experience-conversation-frontend-overview/experience-conversation-frontend-overview-descriptor.js';
import { ExperienceOperatingModelAndJourneysDescriptor } from './experience-operating-model-and-journeys/experience-operating-model-and-journeys-descriptor.js';
import { ConversationAndChatExperienceDescriptor } from './conversation-and-chat-experience/conversation-and-chat-experience-descriptor.js';
import { FrontendApplicationArchitectureDescriptor } from './frontend-application-architecture/frontend-application-architecture-descriptor.js';
import { DesignSystemAccessibilityAndLocalizationDescriptor } from './design-system-accessibility-and-localization/design-system-accessibility-and-localization-descriptor.js';
import { RealtimeStreamingAndHumanHandoffDescriptor } from './realtime-streaming-and-human-handoff/realtime-streaming-and-human-handoff-descriptor.js';

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
  services.registerSingleton('ExperienceConversationFrontendOverviewDescriptor', () => new ExperienceConversationFrontendOverviewDescriptor());
  services.registerSingleton('ExperienceOperatingModelAndJourneysDescriptor', () => new ExperienceOperatingModelAndJourneysDescriptor());
  services.registerSingleton('ConversationAndChatExperienceDescriptor', () => new ConversationAndChatExperienceDescriptor());
  services.registerSingleton('FrontendApplicationArchitectureDescriptor', () => new FrontendApplicationArchitectureDescriptor());
  services.registerSingleton('DesignSystemAccessibilityAndLocalizationDescriptor', () => new DesignSystemAccessibilityAndLocalizationDescriptor());
  services.registerSingleton('RealtimeStreamingAndHumanHandoffDescriptor', () => new RealtimeStreamingAndHumanHandoffDescriptor());

  return services;
}
