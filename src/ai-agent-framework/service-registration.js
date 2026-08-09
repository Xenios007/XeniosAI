import { ServiceCollection } from '../foundation/di/service-collection.js';
import { AgentFrameworkOverviewDescriptor } from './overview/agent-framework-overview-descriptor.js';
import { AgentIdentityLifecycleDescriptor } from './identity-lifecycle/agent-identity-lifecycle-descriptor.js';
import { AgentRuntimeExecutionDescriptor } from './runtime-execution/agent-runtime-execution-descriptor.js';
import { AgentReasoningPlanningDescriptor } from './reasoning-planning/agent-reasoning-planning-descriptor.js';
import { ToolsActionsEnvironmentDescriptor } from './tools-actions-environment/tools-actions-environment-descriptor.js';
import { MultiAgentCoordinationDescriptor } from './multi-agent-coordination/multi-agent-coordination-descriptor.js';
import { MemoryKnowledgeContextDescriptor } from './memory-knowledge-context/memory-knowledge-context-descriptor.js';
import { AgentSecurityGovernanceAssuranceDescriptor } from './security-governance-assurance/agent-security-governance-assurance-descriptor.js';
import { AgentOperationsObservabilityEvaluationDescriptor } from './operations-observability-evaluation/agent-operations-observability-evaluation-descriptor.js';

export function addAiAgentFramework(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addAiAgentFramework expects an instance of ServiceCollection.');
  }

  services.registerSingleton('AgentFrameworkOverviewDescriptor', () => new AgentFrameworkOverviewDescriptor());
  services.registerSingleton('AgentIdentityLifecycleDescriptor', () => new AgentIdentityLifecycleDescriptor());
  services.registerSingleton('AgentRuntimeExecutionDescriptor', () => new AgentRuntimeExecutionDescriptor());
  services.registerSingleton('AgentReasoningPlanningDescriptor', () => new AgentReasoningPlanningDescriptor());
  services.registerSingleton('ToolsActionsEnvironmentDescriptor', () => new ToolsActionsEnvironmentDescriptor());
  services.registerSingleton('MultiAgentCoordinationDescriptor', () => new MultiAgentCoordinationDescriptor());
  services.registerSingleton('MemoryKnowledgeContextDescriptor', () => new MemoryKnowledgeContextDescriptor());
  services.registerSingleton('AgentSecurityGovernanceAssuranceDescriptor', () => new AgentSecurityGovernanceAssuranceDescriptor());
  services.registerSingleton('AgentOperationsObservabilityEvaluationDescriptor', () => new AgentOperationsObservabilityEvaluationDescriptor());

  return services;
}
