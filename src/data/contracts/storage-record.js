export class StorageRecord {
  constructor({
    collection,
    key,
    value,
    version = 1,
    createdAt,
    updatedAt,
    owner,
    metadata = {}
  }) {
    this.collection = collection;
    this.key = key;
    this.value = Object.freeze({ ...value });
    this.version = version;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.owner = owner;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
