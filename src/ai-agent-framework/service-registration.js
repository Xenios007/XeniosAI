import { ServiceCollection } from '../foundation/di/service-collection.js';
import { AgentFrameworkOverviewDescriptor } from './overview/agent-framework-overview-descriptor.js';

export function addAiAgentFramework(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addAiAgentFramework expects an instance of ServiceCollection.');
  }

  services.registerSingleton('AgentFrameworkOverviewDescriptor', () => new AgentFrameworkOverviewDescriptor());

  return services;
}
