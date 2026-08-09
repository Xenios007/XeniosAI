import { AI_ERROR_CODES } from '../constants.js';
import { AiError } from '../errors/ai-error.js';
import { ToolCall } from '../contracts/tool-call.js';

export class ToolOrchestrator {
  constructor({ toolRegistry, toolExecutor }) {
    this.toolRegistry = toolRegistry;
    this.toolExecutor = toolExecutor;
  }

  async executeCapabilities(capabilities, contextPacket) {
    const results = [];

    for (const capability of capabilities) {
      const tools = this.toolRegistry.findByCapability(capability);
      const tool = tools[0];

      if (!tool) {
        throw new AiError(
          AI_ERROR_CODES.TOOL_NOT_FOUND,
          `No tool is registered for capability "${capability}".`
        );
      }

      const result = await this.toolExecutor.executeTool(
        new ToolCall({
          toolId: tool.toolId,
          capability,
          correlationId: contextPacket.latestMessage?.correlationId,
          input: {
            conversationId: contextPacket.conversationId,
            message: contextPacket.latestMessage?.content
          }
        })
      );

      results.push(result);
    }

    return results;
  }
}
