import { ServiceCollection } from '../foundation/di/service-collection.js';
import { OrchestratorBoundaryPolicy } from './governance/orchestrator-boundary-policy.js';
import { RequestLifecycleDescriptor } from './lifecycle/request-lifecycle-descriptor.js';
import { ReasoningPipelineDescriptor } from './reasoning/reasoning-pipeline-descriptor.js';
import { OrchestratorComponentRegistry } from './services/orchestrator-component-registry.js';
import { OrchestratorPlanner } from './services/orchestrator-planner.js';

export function addAiOrchestrator(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addAiOrchestrator expects an instance of ServiceCollection.');
  }

  services.registerSingleton('OrchestratorBoundaryPolicy', () => new OrchestratorBoundaryPolicy());
  services.registerSingleton('RequestLifecycleDescriptor', () => new RequestLifecycleDescriptor());
  services.registerSingleton('ReasoningPipelineDescriptor', () => new ReasoningPipelineDescriptor());
  services.registerSingleton('OrchestratorComponentRegistry', () => new OrchestratorComponentRegistry());
  services.registerSingleton('OrchestratorPlanner', provider =>
    new OrchestratorPlanner({
      boundaryPolicy: provider.getRequiredService('OrchestratorBoundaryPolicy'),
      componentRegistry: provider.getRequiredService('OrchestratorComponentRegistry')
    })
  );

  return services;
}
