export class CacheStore {
  async set() {
    throw new Error('CacheStore.set must be implemented by a subclass.');
  }

  async get() {
    throw new Error('CacheStore.get must be implemented by a subclass.');
  }

  async delete() {
    throw new Error('CacheStore.delete must be implemented by a subclass.');
  }
}
