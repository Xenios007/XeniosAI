import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ConversationStateMachine } from './services/conversation-state-machine.js';
import { InMemoryConversationRepository } from './repository/in-memory-conversation-repository.js';
import { ConversationService } from './services/conversation-service.js';

export function addConversationLayer(services, { aiRegistrationKey = 'AiPort' } = {}) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addConversationLayer expects an instance of ServiceCollection.');
  }

  services.registerSingleton('ConversationRepository', () => new InMemoryConversationRepository());
  services.registerSingleton('ConversationStateMachine', () => new ConversationStateMachine());
  services.registerSingleton('ConversationPort', provider =>
    new ConversationService({
      clock: provider.getRequiredService('Clock'),
      idGenerator: provider.getRequiredService('IdGenerator'),
      logger: provider.getRequiredService('Logger'),
      meter: provider.getRequiredService('Meter'),
      repository: provider.getRequiredService('ConversationRepository'),
      stateMachine: provider.getRequiredService('ConversationStateMachine'),
      aiPort: provider.getRequiredService(aiRegistrationKey)
    })
  );

  return services;
}
