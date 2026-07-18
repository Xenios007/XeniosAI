export class Attachment {
  constructor({ id, type, url, contentType, fileName = undefined, metadata = {} }) {
    this.id = id;
    this.type = type;
    this.url = url;
    this.contentType = contentType;
    this.fileName = fileName;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
