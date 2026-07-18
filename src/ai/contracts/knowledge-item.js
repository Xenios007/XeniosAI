export class KnowledgeItem {
  constructor({
    source,
    title,
    content,
    metadata = {}
  }) {
    this.source = source;
    this.title = title;
    this.content = content;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
