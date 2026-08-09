import { PromptDocument } from '../contracts/prompt-document.js';

export class PromptBuilder {
  build({ contextPacket, memoryItems, knowledgeItems, toolDefinitions }) {
    return new PromptDocument({
      version: 'v1',
      systemInstructions: 'Use authoritative tools when available. Do not invent business outcomes.',
      contextSummary: `Conversation ${contextPacket.conversationId} in state ${contextPacket.state}. Latest message: ${contextPacket.latestMessage?.content ?? ''}`,
      knowledge: knowledgeItems,
      memory: memoryItems,
      tools: toolDefinitions
    });
  }
}
