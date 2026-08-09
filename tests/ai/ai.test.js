import test from 'node:test';
import assert from 'node:assert/strict';

import { createFoundationServiceCollection } from '../../src/foundation/index.js';
import {
  addAiIntelligenceLayer,
  AI_DECISIONS,
  AI_INTENTS,
  ToolDefinition
} from '../../src/ai/index.js';
import { addConversationLayer } from '../../src/conversation/index.js';
import { addGatewayLayer } from '../../src/gateway/index.js';
import { addExperienceLayer, CHANNEL_TYPES } from '../../src/experience/index.js';

function createConversationContext(message) {
  return {
    conversation: {
      conversationId: 'conv-1',
      state: 'active',
      lastChannel: CHANNEL_TYPES.WEBSITE
    },
    session: {
      sessionId: 'sess-1'
    },
    latestMessage: {
      content: message,
      correlationId: 'corr-1'
    },
    history: [],
    participants: [],
    handoff: {}
  };
}

test('ai layer identifies pricing intent and executes an authoritative capability', async () => {
  const services = createFoundationServiceCollection();

  addAiIntelligenceLayer(services, {
    toolDefinitions: [
      new ToolDefinition({
        toolId: 'pricing.compute.default',
        capability: 'pricing.compute',
        description: 'Computes pricing through an authoritative business tool.'
      })
    ]
  });

  const provider = services.buildServiceProvider();
  const ai = provider.getRequiredService('AiPort');
  const result = await ai.processConversation(createConversationContext('How much does it cost?'));

  assert.equal(result.intent.intent, AI_INTENTS.PRICING);
  assert.equal(result.decision.outcome, AI_DECISIONS.EXECUTE);
  assert.equal(result.toolResults.length, 1);
  assert.equal(result.response.decision, AI_DECISIONS.EXECUTE);
});

test('ai layer requests clarification when confidence is insufficient', async () => {
  const services = createFoundationServiceCollection();
  addAiIntelligenceLayer(services);

  const provider = services.buildServiceProvider();
  const ai = provider.getRequiredService('AiPort');
  const result = await ai.processConversation(createConversationContext('Hi'));

  assert.equal(result.decision.outcome, AI_DECISIONS.CLARIFY);
  assert.match(result.response.text, /clarify|detail/i);
});

test('ai layer escalates explicit support requests', async () => {
  const services = createFoundationServiceCollection();
  addAiIntelligenceLayer(services);

  const provider = services.buildServiceProvider();
  const ai = provider.getRequiredService('AiPort');
  const result = await ai.processConversation(createConversationContext('I need human support.'));

  assert.equal(result.intent.intent, AI_INTENTS.SUPPORT);
  assert.equal(result.decision.outcome, AI_DECISIONS.ESCALATE);
});

test('ai layer integrates with conversation, gateway, and experience layers in architectural order', async () => {
  const services = createFoundationServiceCollection();

  addAiIntelligenceLayer(services, {
    toolDefinitions: [
      new ToolDefinition({
        toolId: 'pricing.compute.default',
        capability: 'pricing.compute',
        description: 'Computes pricing through an authoritative business tool.'
      })
    ]
  });
  addConversationLayer(services);
  addGatewayLayer(services);
  addExperienceLayer(services);

  const provider = services.buildServiceProvider();
  const experience = provider.getRequiredService('ExperienceService');
  const result = await experience.handleInbound(CHANNEL_TYPES.WEBSITE, {
    userId: 'guest-12',
    messageText: 'What is the price per night?'
  });

  assert.equal(result.accepted, true);
  assert.equal(result.metadata.downstreamResult.accepted, true);
  assert.equal(
    result.metadata.downstreamResult.downstreamResult.response.decision,
    AI_DECISIONS.EXECUTE
  );
});
