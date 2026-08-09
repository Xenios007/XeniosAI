import { ToolExecutorPort } from '../ports/tool-executor-port.js';
import { ToolResult } from '../contracts/tool-result.js';

export class NullToolExecutor extends ToolExecutorPort {
  async executeTool(toolCall) {
    return new ToolResult({
      toolId: toolCall.toolId,
      capability: toolCall.capability,
      success: true,
      output: {
        status: 'not-implemented',
        message: 'No business tool is registered for this capability yet.'
      }
    });
  }
}
