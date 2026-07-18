import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ContextAssemblyCoordinator } from './context/context-assembly-coordinator.js';
import { DecisionEngineAuthority } from './decision/decision-engine-authority.js';
import { OrchestratorBoundaryPolicy } from './governance/orchestrator-boundary-policy.js';
import { RequestLifecycleDescriptor } from './lifecycle/request-lifecycle-descriptor.js';
import { MemoryOrchestrationCoordinator } from './memory/memory-orchestration-coordinator.js';
import { ReasoningPipelineDescriptor } from './reasoning/reasoning-pipeline-descriptor.js';
import { OrchestratorComponentRegistry } from './services/orchestrator-component-registry.js';
import { OrchestratorPlanner } from './services/orchestrator-planner.js';
import { ToolOrchestrationCoordinator } from './tools/tool-orchestration-coordinator.js';

export function addAiOrchestrator(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addAiOrchestrator expects an instance of ServiceCollection.');
  }

  services.registerSingleton('OrchestratorBoundaryPolicy', () => new OrchestratorBoundaryPolicy());
  services.registerSingleton('RequestLifecycleDescriptor', () => new RequestLifecycleDescriptor());
  services.registerSingleton('ReasoningPipelineDescriptor', () => new ReasoningPipelineDescriptor());
  services.registerSingleton('ContextAssemblyCoordinator', () => new ContextAssemblyCoordinator());
  services.registerSingleton('DecisionEngineAuthority', () => new DecisionEngineAuthority());
  services.registerSingleton('MemoryOrchestrationCoordinator', provider =>
    new MemoryOrchestrationCoordinator({
      memoryProvider: services.hasRegistration('MemoryPort')
        ? provider.getRequiredService('MemoryPort')
        : undefined
    })
  );
  services.registerSingleton('ToolOrchestrationCoordinator', provider =>
    new ToolOrchestrationCoordinator({
      toolRegistry: services.hasRegistration('ToolRegistry')
        ? provider.getRequiredService('ToolRegistry')
        : undefined,
      toolExecutor: services.hasRegistration('ToolExecutorPort')
        ? provider.getRequiredService('ToolExecutorPort')
        : undefined
    })
  );
  services.registerSingleton('OrchestratorComponentRegistry', () => new OrchestratorComponentRegistry());
  services.registerSingleton('OrchestratorPlanner', provider =>
    new OrchestratorPlanner({
      boundaryPolicy: provider.getRequiredService('OrchestratorBoundaryPolicy'),
      componentRegistry: provider.getRequiredService('OrchestratorComponentRegistry')
    })
  );

  return services;
}
