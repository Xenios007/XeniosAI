import { DATA_ERROR_CODES } from '../constants.js';
import { ObjectDescriptor } from '../contracts/object-descriptor.js';
import { DataError } from '../errors/data-error.js';
import { ObjectStore } from './object-store.js';

export class InMemoryObjectStore extends ObjectStore {
  constructor() {
    super();
    this.objects = new Map();
  }

  async put({ objectKey, content, contentType, owner, metadata = {} }) {
    const size = typeof content === 'string' ? Buffer.byteLength(content) : content.byteLength;
    const descriptor = new ObjectDescriptor({ objectKey, contentType, size, owner, metadata });
    this.objects.set(objectKey, { descriptor, content });
    return descriptor;
  }

  async get(objectKey) {
    const stored = this.objects.get(objectKey);

    if (!stored) {
      throw new DataError(DATA_ERROR_CODES.OBJECT_NOT_FOUND, `Object "${objectKey}" was not found.`);
    }

    return stored;
  }

  async delete(objectKey) {
    this.objects.delete(objectKey);
  }
}
