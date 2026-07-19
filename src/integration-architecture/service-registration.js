import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ApiArchitectureDescriptor } from './api/api-architecture-descriptor.js';
import { MessagingEventArchitectureDescriptor } from './messaging/messaging-event-architecture-descriptor.js';
import { IntegrationOverviewDescriptor } from './overview/integration-overview-descriptor.js';
import { IntegrationPrinciplesDescriptor } from './principles/integration-principles-descriptor.js';
import { WorkflowProcessIntegrationDescriptor } from './workflow/workflow-process-integration-descriptor.js';

export function addIntegrationArchitecture(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addIntegrationArchitecture expects an instance of ServiceCollection.');
  }

  services.registerSingleton('IntegrationOverviewDescriptor', () => new IntegrationOverviewDescriptor());
  services.registerSingleton('IntegrationPrinciplesDescriptor', () => new IntegrationPrinciplesDescriptor());
  services.registerSingleton('ApiArchitectureDescriptor', () => new ApiArchitectureDescriptor());
  services.registerSingleton('MessagingEventArchitectureDescriptor', () => new MessagingEventArchitectureDescriptor());
  services.registerSingleton('WorkflowProcessIntegrationDescriptor', () => new WorkflowProcessIntegrationDescriptor());

  return services;
}
