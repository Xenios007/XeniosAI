import { SearchDocument } from '../contracts/search-document.js';
import { SearchIndex } from './search-index.js';

export class InMemorySearchIndex extends SearchIndex {
  constructor() {
    super();
    this.documents = new Map();
  }

  async index(document) {
    const searchDocument = document instanceof SearchDocument
      ? document
      : new SearchDocument(document);
    this.documents.set(searchDocument.documentId, searchDocument);
    return searchDocument;
  }

  async search(query, { owner = undefined } = {}) {
    const normalized = query.toLowerCase();
    return [...this.documents.values()].filter(document => {
      const ownerMatches = owner ? document.owner === owner : true;
      const text = `${document.title} ${document.body}`.toLowerCase();
      return ownerMatches && text.includes(normalized);
    });
  }
}
