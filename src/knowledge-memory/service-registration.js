import { ServiceCollection } from '../foundation/di/service-collection.js';
import { KnowledgeMemoryOverviewDescriptor } from './overview/knowledge-memory-overview-descriptor.js';
import { KnowledgeLifecycleDescriptor } from './lifecycle/knowledge-lifecycle-descriptor.js';
import { KnowledgeIngestionCurationDescriptor } from './ingestion-curation/knowledge-ingestion-curation-descriptor.js';
import { KnowledgeRetrievalGroundingDescriptor } from './retrieval-grounding/knowledge-retrieval-grounding-descriptor.js';
import { MemoryLifecycleDescriptor } from './memory-lifecycle/memory-lifecycle-descriptor.js';
import { ContextAssemblyOrchestrationDescriptor } from './context-assembly/context-assembly-orchestration-descriptor.js';
import { KnowledgeMemoryIntegrationDescriptor } from './integration/integration-interoperability-descriptor.js';

export function addKnowledgeMemory(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addKnowledgeMemory expects an instance of ServiceCollection.');
  }
  services.registerSingleton('KnowledgeMemoryOverviewDescriptor', () => new KnowledgeMemoryOverviewDescriptor());
  services.registerSingleton('KnowledgeLifecycleDescriptor', () => new KnowledgeLifecycleDescriptor());
  services.registerSingleton('KnowledgeIngestionCurationDescriptor', () => new KnowledgeIngestionCurationDescriptor());
  services.registerSingleton('KnowledgeRetrievalGroundingDescriptor', () => new KnowledgeRetrievalGroundingDescriptor());
  services.registerSingleton('MemoryLifecycleDescriptor', () => new MemoryLifecycleDescriptor());
  services.registerSingleton('ContextAssemblyOrchestrationDescriptor', () => new ContextAssemblyOrchestrationDescriptor());
  services.registerSingleton('KnowledgeMemoryIntegrationDescriptor', () => new KnowledgeMemoryIntegrationDescriptor());
  return services;
}
