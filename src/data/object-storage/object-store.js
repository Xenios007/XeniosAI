export class ObjectStore {
  async put() {
    throw new Error('ObjectStore.put must be implemented by a subclass.');
  }

  async get() {
    throw new Error('ObjectStore.get must be implemented by a subclass.');
  }

  async delete() {
    throw new Error('ObjectStore.delete must be implemented by a subclass.');
  }
}
