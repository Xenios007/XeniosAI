import { ServiceCollection } from '../foundation/di/service-collection.js';
import { WorkflowDefinitionLifecycleDescriptor } from './definition-lifecycle/workflow-definition-lifecycle-descriptor.js';
import { WorkflowEngineOverviewDescriptor } from './overview/workflow-engine-overview-descriptor.js';
import { WorkflowInteractionDescriptor } from './interaction/workflow-interaction-descriptor.js';
import { WorkflowIntegrationDescriptor } from './integration/workflow-integration-descriptor.js';
import { WorkflowRuntimeStateDescriptor } from './runtime-state/workflow-runtime-state-descriptor.js';
import { WorkflowReliabilityDescriptor } from './reliability/workflow-reliability-descriptor.js';
import { WorkflowTaskWorkerDescriptor } from './task-worker/workflow-task-worker-descriptor.js';

export function addWorkflowEngine(services) {
  if (!(services instanceof ServiceCollection)) throw new Error('addWorkflowEngine expects an instance of ServiceCollection.');
  services.registerSingleton('WorkflowEngineOverviewDescriptor', () => new WorkflowEngineOverviewDescriptor());
  services.registerSingleton('WorkflowDefinitionLifecycleDescriptor', () => new WorkflowDefinitionLifecycleDescriptor());
  services.registerSingleton('WorkflowRuntimeStateDescriptor', () => new WorkflowRuntimeStateDescriptor());
  services.registerSingleton('WorkflowTaskWorkerDescriptor', () => new WorkflowTaskWorkerDescriptor());
  services.registerSingleton('WorkflowInteractionDescriptor', () => new WorkflowInteractionDescriptor());
  services.registerSingleton('WorkflowReliabilityDescriptor', () => new WorkflowReliabilityDescriptor());
  services.registerSingleton('WorkflowIntegrationDescriptor', () => new WorkflowIntegrationDescriptor());
  return services;
}
