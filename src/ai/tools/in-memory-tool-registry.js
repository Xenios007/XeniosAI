import { ToolRegistry } from './tool-registry.js';

export class InMemoryToolRegistry extends ToolRegistry {
  constructor(toolDefinitions = []) {
    super();
    this.toolDefinitions = Object.freeze([...toolDefinitions]);
  }

  listTools() {
    return this.toolDefinitions;
  }

  findByCapability(capability) {
    return this.toolDefinitions.filter(tool => tool.capability === capability);
  }
}
