import { CacheEntry } from '../contracts/cache-entry.js';
import { CacheStore } from './cache-store.js';

export class InMemoryCacheStore extends CacheStore {
  constructor({ clock }) {
    super();
    this.clock = clock;
    this.entries = new Map();
  }

  async set(key, value, { ttlSeconds = 300, metadata = {} } = {}) {
    const expiresAt = new Date(this.clock.now().getTime() + ttlSeconds * 1000).toISOString();
    const entry = new CacheEntry({ key, value, expiresAt, metadata });
    this.entries.set(key, entry);
    return entry;
  }

  async get(key) {
    const entry = this.entries.get(key);

    if (!entry) return undefined;

    if (new Date(entry.expiresAt).getTime() <= this.clock.now().getTime()) {
      this.entries.delete(key);
      return undefined;
    }

    return entry.value;
  }

  async delete(key) {
    this.entries.delete(key);
  }
}
