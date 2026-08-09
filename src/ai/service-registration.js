import { ServiceCollection } from '../foundation/di/service-collection.js';
import { StaticKnowledgeProvider } from './knowledge/static-knowledge-provider.js';
import { NullMemoryProvider } from './memory/null-memory-provider.js';
import { ToolDefinition } from './contracts/tool-definition.js';
import { InMemoryToolRegistry } from './tools/in-memory-tool-registry.js';
import { NullToolExecutor } from './tools/null-tool-executor.js';
import { KeywordIntentDetector } from './services/keyword-intent-detector.js';
import { ContextBuilder } from './services/context-builder.js';
import { PromptBuilder } from './services/prompt-builder.js';
import { RuleBasedReasoner } from './services/rule-based-reasoner.js';
import { DecisionEngine } from './services/decision-engine.js';
import { ToolOrchestrator } from './services/tool-orchestrator.js';
import { ResponseGenerator } from './services/response-generator.js';
import { AiIntelligenceService } from './services/ai-intelligence-service.js';

export function addAiIntelligenceLayer(services, { toolDefinitions = [] } = {}) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addAiIntelligenceLayer expects an instance of ServiceCollection.');
  }

  services.registerSingleton('IntentDetector', () => new KeywordIntentDetector());
  services.registerSingleton('AiContextBuilder', () => new ContextBuilder());
  services.registerSingleton('MemoryPort', () => new NullMemoryProvider());
  services.registerSingleton('KnowledgePort', () => new StaticKnowledgeProvider());
  services.registerSingleton('PromptBuilder', () => new PromptBuilder());
  services.registerSingleton('Reasoner', () => new RuleBasedReasoner());
  services.registerSingleton('DecisionEngine', () => new DecisionEngine());
  services.registerSingleton(
    'ToolRegistry',
    () =>
      new InMemoryToolRegistry(
        toolDefinitions.length > 0
          ? toolDefinitions
          : [
              new ToolDefinition({
                toolId: 'knowledge.lookup.default',
                capability: 'knowledge.lookup',
                description: 'Retrieves authoritative policy and FAQ information.'
              })
            ]
      )
  );
  if (!services.hasRegistration('ToolExecutorPort')) {
    services.registerSingleton('ToolExecutorPort', () => new NullToolExecutor());
  }
  services.registerSingleton(
    'ToolOrchestrator',
    provider =>
      new ToolOrchestrator({
        toolRegistry: provider.getRequiredService('ToolRegistry'),
        toolExecutor: provider.getRequiredService('ToolExecutorPort')
      })
  );
  services.registerSingleton('ResponseGenerator', () => new ResponseGenerator());
  services.registerSingleton('AiPort', provider =>
    new AiIntelligenceService({
      logger: provider.getRequiredService('Logger'),
      meter: provider.getRequiredService('Meter'),
      intentDetector: provider.getRequiredService('IntentDetector'),
      contextBuilder: provider.getRequiredService('AiContextBuilder'),
      memoryProvider: provider.getRequiredService('MemoryPort'),
      knowledgeProvider: provider.getRequiredService('KnowledgePort'),
      promptBuilder: provider.getRequiredService('PromptBuilder'),
      reasoner: provider.getRequiredService('Reasoner'),
      decisionEngine: provider.getRequiredService('DecisionEngine'),
      toolRegistry: provider.getRequiredService('ToolRegistry'),
      toolOrchestrator: provider.getRequiredService('ToolOrchestrator'),
      responseGenerator: provider.getRequiredService('ResponseGenerator')
    })
  );

  return services;
}
