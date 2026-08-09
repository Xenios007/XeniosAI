export class VersionDescriptor {
  constructor({
    name,
    version,
    compatibility = 'backward-compatible',
    metadata = {}
  }) {
    this.name = name;
    this.version = version;
    this.compatibility = compatibility;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
