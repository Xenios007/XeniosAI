import test from 'node:test';
import assert from 'node:assert/strict';

import { createFoundationServiceCollection } from '../../src/foundation/index.js';
import { addConversationLayer, CONVERSATION_STATES } from '../../src/conversation/index.js';
import { addGatewayLayer } from '../../src/gateway/index.js';
import { addExperienceLayer, CHANNEL_TYPES } from '../../src/experience/index.js';

class AiSpy {
  constructor() {
    this.contexts = [];
  }

  async processConversation(context) {
    this.contexts.push(context);
    return {
      status: 'processed',
      conversationId: context.conversation.conversationId
    };
  }
}

function createGatewayRequest(overrides = {}) {
  return {
    requestId: 'req-1',
    correlationId: 'corr-1',
    channel: CHANNEL_TYPES.WEBSITE,
    userId: 'guest-1',
    principalId: 'guest-1',
    timestamp: '2026-07-18T12:00:00.000Z',
    locale: 'en-US',
    messageText: 'Hello',
    attachments: [],
    metadata: {},
    ...overrides
  };
}

test('conversation layer creates a conversation, session, and history before AI handoff', async () => {
  const services = createFoundationServiceCollection();
  const ai = new AiSpy();

  services.registerSingleton('AiPort', () => ai);
  addConversationLayer(services);

  const provider = services.buildServiceProvider();
  const conversation = provider.getRequiredService('ConversationPort');
  const response = await conversation.forwardRequest(createGatewayRequest());

  assert.equal(response.accepted, true);
  assert.equal(response.context.conversation.state, CONVERSATION_STATES.ACTIVE);
  assert.equal(response.context.history.length, 1);
  assert.equal(response.context.session.status, 'active');
  assert.equal(ai.contexts.length, 1);
});

test('conversation layer restores continuity for repeated requests from the same participant', async () => {
  const services = createFoundationServiceCollection();
  const ai = new AiSpy();

  services.registerSingleton('AiPort', () => ai);
  addConversationLayer(services);

  const provider = services.buildServiceProvider();
  const conversation = provider.getRequiredService('ConversationPort');

  const first = await conversation.forwardRequest(createGatewayRequest());
  const second = await conversation.forwardRequest(
    createGatewayRequest({
      requestId: 'req-2',
      correlationId: 'corr-2',
      messageText: 'How much?'
    })
  );

  assert.equal(first.context.conversation.conversationId, second.context.conversation.conversationId);
  assert.equal(second.context.history.length, 2);
  assert.equal(second.context.latestMessage.content, 'How much?');
});

test('conversation layer integrates with gateway and experience layers in architectural order', async () => {
  const services = createFoundationServiceCollection();
  const ai = new AiSpy();

  services.registerSingleton('AiPort', () => ai);
  addConversationLayer(services);
  addGatewayLayer(services);
  addExperienceLayer(services);

  const provider = services.buildServiceProvider();
  const experience = provider.getRequiredService('ExperienceService');
  const result = await experience.handleInbound(CHANNEL_TYPES.WEBSITE, {
    userId: 'guest-9',
    messageText: 'Need help with my stay'
  });

  assert.equal(result.accepted, true);
  assert.equal(ai.contexts.length, 1);
  assert.equal(ai.contexts[0].history.length, 1);
  assert.equal(ai.contexts[0].conversation.lastChannel, CHANNEL_TYPES.WEBSITE);
});
