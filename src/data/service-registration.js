import { ServiceCollection } from '../foundation/di/service-collection.js';
import { InMemoryCacheStore } from './cache/in-memory-cache-store.js';
import { InMemoryObjectStore } from './object-storage/in-memory-object-store.js';
import { InMemoryDataRepository } from './repository/in-memory-data-repository.js';
import { InMemorySearchIndex } from './search/in-memory-search-index.js';
import { InMemoryTransactionManager } from './transactions/in-memory-transaction-manager.js';

export function addDataLayer(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDataLayer expects an instance of ServiceCollection.');
  }

  services.registerSingleton(
    'DataRepository',
    provider =>
      new InMemoryDataRepository({
        clock: provider.getRequiredService('Clock')
      })
  );
  services.registerSingleton(
    'TransactionManager',
    provider =>
      new InMemoryTransactionManager({
        idGenerator: provider.getRequiredService('IdGenerator'),
        logger: provider.getRequiredService('Logger'),
        meter: provider.getRequiredService('Meter')
      })
  );
  services.registerSingleton(
    'CacheStore',
    provider =>
      new InMemoryCacheStore({
        clock: provider.getRequiredService('Clock')
      })
  );
  services.registerSingleton('SearchIndex', () => new InMemorySearchIndex());
  services.registerSingleton('ObjectStore', () => new InMemoryObjectStore());

  return services;
}
