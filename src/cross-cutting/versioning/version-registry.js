import { VersionDescriptor } from '../contracts/version-descriptor.js';

export class VersionRegistry {
  constructor(descriptors = []) {
    this.descriptors = new Map(descriptors.map(descriptor => [descriptor.name, descriptor]));
  }

  register(descriptor) {
    const version = descriptor instanceof VersionDescriptor
      ? descriptor
      : new VersionDescriptor(descriptor);
    this.descriptors.set(version.name, version);
    return this;
  }

  get(name) {
    return this.descriptors.get(name);
  }

  list() {
    return [...this.descriptors.values()];
  }
}
