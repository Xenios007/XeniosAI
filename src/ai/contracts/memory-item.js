export class MemoryItem {
  constructor({
    category,
    content,
    metadata = {}
  }) {
    this.category = category;
    this.content = content;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
