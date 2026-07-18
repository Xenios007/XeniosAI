import { AiExecutionResult } from '../contracts/ai-execution-result.js';

export class AiIntelligenceService {
  constructor({
    logger,
    meter,
    intentDetector,
    contextBuilder,
    memoryProvider,
    knowledgeProvider,
    promptBuilder,
    reasoner,
    decisionEngine,
    toolRegistry,
    toolOrchestrator,
    responseGenerator
  }) {
    this.logger = logger;
    this.meter = meter;
    this.intentDetector = intentDetector;
    this.contextBuilder = contextBuilder;
    this.memoryProvider = memoryProvider;
    this.knowledgeProvider = knowledgeProvider;
    this.promptBuilder = promptBuilder;
    this.reasoner = reasoner;
    this.decisionEngine = decisionEngine;
    this.toolRegistry = toolRegistry;
    this.toolOrchestrator = toolOrchestrator;
    this.responseGenerator = responseGenerator;
  }

  async processConversation(conversationContext) {
    const contextPacket = this.contextBuilder.build(conversationContext);
    const intentAnalysis = this.intentDetector.detect(contextPacket);
    const memoryItems = await this.memoryProvider.retrieveMemory(contextPacket, intentAnalysis);
    const knowledgeItems = await this.knowledgeProvider.retrieveKnowledge(contextPacket, intentAnalysis);
    const toolDefinitions = this.toolRegistry.listTools();
    const prompt = this.promptBuilder.build({
      contextPacket,
      memoryItems,
      knowledgeItems,
      toolDefinitions
    });
    const reasoningProposal = this.reasoner.reason({
      intentAnalysis,
      contextPacket,
      memoryItems,
      knowledgeItems,
      prompt
    });

    const availableCapabilities = new Set(toolDefinitions.map(tool => tool.capability));
    const decision = this.decisionEngine.decide({
      intentAnalysis,
      contextPacket,
      reasoningProposal,
      availableCapabilities
    });

    const toolResults = decision.outcome === 'EXECUTE'
      ? await this.toolOrchestrator.executeCapabilities(reasoningProposal.requestedCapabilities, contextPacket)
      : [];

    const response = this.responseGenerator.generate({
      intentAnalysis,
      reasoningProposal,
      decision,
      toolResults
    });

    this.logger.info('AI pipeline completed.', {
      conversationId: contextPacket.conversationId,
      intent: intentAnalysis.intent,
      decision: decision.outcome,
      confidence: reasoningProposal.confidence
    });
    this.meter.incrementCounter('ai_requests_total', 1, {
      intent: intentAnalysis.intent,
      decision: decision.outcome
    });

    return new AiExecutionResult({
      accepted: true,
      response,
      prompt,
      intent: intentAnalysis,
      decision,
      toolResults,
      metadata: {
        knowledgeCount: knowledgeItems.length,
        memoryCount: memoryItems.length
      }
    });
  }
}
