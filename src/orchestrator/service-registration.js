import { ServiceCollection } from '../foundation/di/service-collection.js';
import { OrchestratorBoundaryPolicy } from './governance/orchestrator-boundary-policy.js';
import { OrchestratorComponentRegistry } from './services/orchestrator-component-registry.js';
import { OrchestratorPlanner } from './services/orchestrator-planner.js';

export function addAiOrchestrator(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addAiOrchestrator expects an instance of ServiceCollection.');
  }

  services.registerSingleton('OrchestratorBoundaryPolicy', () => new OrchestratorBoundaryPolicy());
  services.registerSingleton('OrchestratorComponentRegistry', () => new OrchestratorComponentRegistry());
  services.registerSingleton('OrchestratorPlanner', provider =>
    new OrchestratorPlanner({
      boundaryPolicy: provider.getRequiredService('OrchestratorBoundaryPolicy'),
      componentRegistry: provider.getRequiredService('OrchestratorComponentRegistry')
    })
  );

  return services;
}
