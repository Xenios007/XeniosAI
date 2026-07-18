export class CacheEntry {
  constructor({
    key,
    value,
    expiresAt,
    metadata = {}
  }) {
    this.key = key;
    this.value = value;
    this.expiresAt = expiresAt;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
