export class SearchIndex {
  async index() {
    throw new Error('SearchIndex.index must be implemented by a subclass.');
  }

  async search() {
    throw new Error('SearchIndex.search must be implemented by a subclass.');
  }
}
