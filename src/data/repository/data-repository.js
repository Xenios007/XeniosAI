export class DataRepository {
  async save() {
    throw new Error('DataRepository.save must be implemented by a subclass.');
  }

  async get() {
    throw new Error('DataRepository.get must be implemented by a subclass.');
  }

  async query() {
    throw new Error('DataRepository.query must be implemented by a subclass.');
  }

  async delete() {
    throw new Error('DataRepository.delete must be implemented by a subclass.');
  }
}
