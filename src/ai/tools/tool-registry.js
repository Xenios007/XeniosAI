export class ToolRegistry {
  listTools() {
    throw new Error('ToolRegistry.listTools must be implemented by a subclass.');
  }

  findByCapability() {
    throw new Error('ToolRegistry.findByCapability must be implemented by a subclass.');
  }
}
