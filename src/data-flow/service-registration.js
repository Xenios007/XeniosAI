import { ServiceCollection } from '../foundation/di/service-collection.js';
import { CommandFlowDescriptor } from './commands/command-flow-descriptor.js';
import { EventFlowDescriptor } from './events/event-flow-descriptor.js';
import { ExecutionOverviewDescriptor } from './execution/execution-overview-descriptor.js';
import { ServiceIntegrationDescriptor } from './integrations/service-integration-descriptor.js';
import { QueryFlowDescriptor } from './queries/query-flow-descriptor.js';
import { WorkflowOrchestrationDescriptor } from './workflows/workflow-orchestration-descriptor.js';

export function addDataFlow(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDataFlow expects an instance of ServiceCollection.');
  }

  services.registerSingleton('CommandFlowDescriptor', () => new CommandFlowDescriptor());
  services.registerSingleton('EventFlowDescriptor', () => new EventFlowDescriptor());
  services.registerSingleton('ExecutionOverviewDescriptor', () => new ExecutionOverviewDescriptor());
  services.registerSingleton('QueryFlowDescriptor', () => new QueryFlowDescriptor());
  services.registerSingleton('ServiceIntegrationDescriptor', () => new ServiceIntegrationDescriptor());
  services.registerSingleton('WorkflowOrchestrationDescriptor', () => new WorkflowOrchestrationDescriptor());

  return services;
}
