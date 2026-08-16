import { ServiceCollection } from '../foundation/di/service-collection.js';
import { KnowledgeMemoryOverviewDescriptor } from './overview/knowledge-memory-overview-descriptor.js';
import { KnowledgeLifecycleDescriptor } from './lifecycle/knowledge-lifecycle-descriptor.js';

export function addKnowledgeMemory(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addKnowledgeMemory expects an instance of ServiceCollection.');
  }
  services.registerSingleton('KnowledgeMemoryOverviewDescriptor', () => new KnowledgeMemoryOverviewDescriptor());
  services.registerSingleton('KnowledgeLifecycleDescriptor', () => new KnowledgeLifecycleDescriptor());
  return services;
}
