import { DATA_ERROR_CODES } from '../constants.js';
import { QueryResult } from '../contracts/query-result.js';
import { StorageRecord } from '../contracts/storage-record.js';
import { DataError } from '../errors/data-error.js';
import { DataRepository } from './data-repository.js';

export class InMemoryDataRepository extends DataRepository {
  constructor({ clock }) {
    super();
    this.clock = clock;
    this.collections = new Map();
  }

  async save({ collection, key, value, owner, expectedVersion = undefined, metadata = {} }) {
    const now = this.clock.now().toISOString();
    const bucket = this.#getCollection(collection);
    const existing = bucket.get(key);

    if (expectedVersion !== undefined && existing?.version !== expectedVersion) {
      throw new DataError(
        DATA_ERROR_CODES.CONCURRENCY_CONFLICT,
        `Record "${collection}/${key}" version conflict.`,
        { expectedVersion, actualVersion: existing?.version }
      );
    }

    const record = new StorageRecord({
      collection,
      key,
      value,
      version: existing ? existing.version + 1 : 1,
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
      owner,
      metadata
    });

    bucket.set(key, record);
    return record;
  }

  async get(collection, key) {
    return this.#getCollection(collection).get(key);
  }

  async query(collection, predicate = () => true) {
    const records = [...this.#getCollection(collection).values()].filter(record => predicate(record));
    return new QueryResult({ records });
  }

  async delete(collection, key, expectedVersion = undefined) {
    const bucket = this.#getCollection(collection);
    const existing = bucket.get(key);

    if (!existing) {
      throw new DataError(DATA_ERROR_CODES.RECORD_NOT_FOUND, `Record "${collection}/${key}" was not found.`);
    }

    if (expectedVersion !== undefined && existing.version !== expectedVersion) {
      throw new DataError(
        DATA_ERROR_CODES.CONCURRENCY_CONFLICT,
        `Record "${collection}/${key}" version conflict.`,
        { expectedVersion, actualVersion: existing.version }
      );
    }

    bucket.delete(key);
  }

  #getCollection(collection) {
    if (!this.collections.has(collection)) {
      this.collections.set(collection, new Map());
    }

    return this.collections.get(collection);
  }
}
