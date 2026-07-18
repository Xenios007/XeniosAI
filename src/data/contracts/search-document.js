export class SearchDocument {
  constructor({
    documentId,
    owner,
    title,
    body,
    metadata = {}
  }) {
    this.documentId = documentId;
    this.owner = owner;
    this.title = title;
    this.body = body;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
