import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ApiContractDescriptor } from './apis/api-contract-descriptor.js';
import { CommandFlowDescriptor } from './commands/command-flow-descriptor.js';
import { EventFlowDescriptor } from './events/event-flow-descriptor.js';
import { ExecutionOverviewDescriptor } from './execution/execution-overview-descriptor.js';
import { ServiceIntegrationDescriptor } from './integrations/service-integration-descriptor.js';
import { MessagingPatternsDescriptor } from './messaging/messaging-patterns-descriptor.js';
import { QueryFlowDescriptor } from './queries/query-flow-descriptor.js';
import { TransactionBoundariesDescriptor } from './transactions/transaction-boundaries-descriptor.js';
import { WorkflowOrchestrationDescriptor } from './workflows/workflow-orchestration-descriptor.js';

export function addDataFlow(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDataFlow expects an instance of ServiceCollection.');
  }

  services.registerSingleton('ApiContractDescriptor', () => new ApiContractDescriptor());
  services.registerSingleton('CommandFlowDescriptor', () => new CommandFlowDescriptor());
  services.registerSingleton('EventFlowDescriptor', () => new EventFlowDescriptor());
  services.registerSingleton('ExecutionOverviewDescriptor', () => new ExecutionOverviewDescriptor());
  services.registerSingleton('MessagingPatternsDescriptor', () => new MessagingPatternsDescriptor());
  services.registerSingleton('QueryFlowDescriptor', () => new QueryFlowDescriptor());
  services.registerSingleton('ServiceIntegrationDescriptor', () => new ServiceIntegrationDescriptor());
  services.registerSingleton('TransactionBoundariesDescriptor', () => new TransactionBoundariesDescriptor());
  services.registerSingleton('WorkflowOrchestrationDescriptor', () => new WorkflowOrchestrationDescriptor());

  return services;
}
