export class ToolExecutorPort {
  async executeTool() {
    throw new Error('ToolExecutorPort.executeTool must be implemented by a subclass.');
  }
}
