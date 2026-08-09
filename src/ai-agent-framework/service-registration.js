import { ServiceCollection } from '../foundation/di/service-collection.js';
import { AgentFrameworkOverviewDescriptor } from './overview/agent-framework-overview-descriptor.js';
import { AgentIdentityLifecycleDescriptor } from './identity-lifecycle/agent-identity-lifecycle-descriptor.js';
import { AgentRuntimeExecutionDescriptor } from './runtime-execution/agent-runtime-execution-descriptor.js';
import { AgentReasoningPlanningDescriptor } from './reasoning-planning/agent-reasoning-planning-descriptor.js';

export function addAiAgentFramework(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addAiAgentFramework expects an instance of ServiceCollection.');
  }

  services.registerSingleton('AgentFrameworkOverviewDescriptor', () => new AgentFrameworkOverviewDescriptor());
  services.registerSingleton('AgentIdentityLifecycleDescriptor', () => new AgentIdentityLifecycleDescriptor());
  services.registerSingleton('AgentRuntimeExecutionDescriptor', () => new AgentRuntimeExecutionDescriptor());
  services.registerSingleton('AgentReasoningPlanningDescriptor', () => new AgentReasoningPlanningDescriptor());

  return services;
}
