import { ServiceCollection } from '../foundation/di/service-collection.js';
import { WorkflowDefinitionLifecycleDescriptor } from './definition-lifecycle/workflow-definition-lifecycle-descriptor.js';
import { WorkflowEngineOverviewDescriptor } from './overview/workflow-engine-overview-descriptor.js';

export function addWorkflowEngine(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addWorkflowEngine expects an instance of ServiceCollection.');
  }
  services.registerSingleton('WorkflowEngineOverviewDescriptor', () => new WorkflowEngineOverviewDescriptor());
  services.registerSingleton(
    'WorkflowDefinitionLifecycleDescriptor',
    () => new WorkflowDefinitionLifecycleDescriptor()
  );
  return services;
}
