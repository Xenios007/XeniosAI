import { ServiceCollection } from '../foundation/di/service-collection.js';
import { KnowledgeMemoryOverviewDescriptor } from './overview/knowledge-memory-overview-descriptor.js';

export function addKnowledgeMemory(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addKnowledgeMemory expects an instance of ServiceCollection.');
  }
  services.registerSingleton('KnowledgeMemoryOverviewDescriptor', () => new KnowledgeMemoryOverviewDescriptor());
  return services;
}
