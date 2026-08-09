export class ObjectDescriptor {
  constructor({
    objectKey,
    contentType,
    size,
    owner,
    metadata = {}
  }) {
    this.objectKey = objectKey;
    this.contentType = contentType;
    this.size = size;
    this.owner = owner;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
