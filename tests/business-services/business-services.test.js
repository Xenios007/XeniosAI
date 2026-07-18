import test from 'node:test';
import assert from 'node:assert/strict';

import { createFoundationServiceCollection } from '../../src/foundation/index.js';
import {
  addBusinessServicesLayer,
  BUSINESS_OUTCOMES,
  BUSINESS_SERVICE_NAMES,
  BusinessRequest
} from '../../src/business-services/index.js';
import { addAiIntelligenceLayer, ToolDefinition } from '../../src/ai/index.js';
import { addConversationLayer } from '../../src/conversation/index.js';
import { addGatewayLayer } from '../../src/gateway/index.js';
import { addExperienceLayer, CHANNEL_TYPES } from '../../src/experience/index.js';

test('business service registry exposes authoritative service capabilities', () => {
  const services = createFoundationServiceCollection();
  addBusinessServicesLayer(services);

  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('BusinessServiceRegistry');
  const capabilities = registry.listCapabilities().map(capability => capability.capability);

  assert.ok(capabilities.includes('pricing.compute'));
  assert.ok(capabilities.includes('calendar.check-availability'));
  assert.ok(capabilities.includes('booking.create'));
  assert.ok(capabilities.includes('knowledge.lookup'));
});

test('pricing service produces deterministic output only from explicit pricing inputs', async () => {
  const services = createFoundationServiceCollection();
  addBusinessServicesLayer(services);

  const provider = services.buildServiceProvider();
  const router = provider.getRequiredService('BusinessServiceRouter');
  const response = await router.execute(
    new BusinessRequest({
      capability: 'pricing.compute',
      serviceName: BUSINESS_SERVICE_NAMES.PRICING,
      operation: 'computePrice',
      input: {
        propertyId: 'property-1',
        baseRate: 150,
        nights: 3,
        currency: 'USD'
      },
      correlationId: 'corr-1',
      requestId: 'req-1'
    })
  );

  assert.equal(response.outcome, BUSINESS_OUTCOMES.SUCCESS);
  assert.equal(response.data.amount, 450);
  assert.equal(response.data.pricingBasis, 'explicit-input');
});

test('business services return explicit validation failures for incomplete requests', async () => {
  const services = createFoundationServiceCollection();
  addBusinessServicesLayer(services);

  const provider = services.buildServiceProvider();
  const router = provider.getRequiredService('BusinessServiceRouter');
  const response = await router.execute({
    capability: 'booking.create',
    serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
    operation: 'createBooking',
    input: {
      guestId: 'guest-1'
    },
    correlationId: 'corr-2',
    requestId: 'req-2'
  });

  assert.equal(response.outcome, BUSINESS_OUTCOMES.VALIDATION_FAILURE);
  assert.ok(response.errors.includes('Property ID is required.'));
});

test('business tool executor allows AI layer to invoke registered business capabilities', async () => {
  const services = createFoundationServiceCollection();

  addBusinessServicesLayer(services);
  services.registerSingleton('ToolExecutorPort', provider => provider.getRequiredService('BusinessToolExecutor'));
  addAiIntelligenceLayer(services, {
    toolDefinitions: [
      new ToolDefinition({
        toolId: 'pricing.compute.default',
        capability: 'pricing.compute',
        description: 'Computes pricing through the Pricing Service.'
      })
    ]
  });

  const provider = services.buildServiceProvider();
  const ai = provider.getRequiredService('AiPort');
  const result = await ai.processConversation({
    conversation: {
      conversationId: 'conv-1',
      state: 'active',
      lastChannel: CHANNEL_TYPES.WEBSITE
    },
    session: {
      sessionId: 'sess-1'
    },
    latestMessage: {
      content: 'How much is it?',
      correlationId: 'corr-3'
    },
    history: [],
    participants: [],
    handoff: {}
  });

  assert.equal(result.decision.outcome, 'EXECUTE');
  assert.equal(result.toolResults.length, 1);
  assert.equal(result.toolResults[0].success, false);
  assert.ok(result.toolResults[0].output.errors.includes('Property ID is required.'));
});

test('business services can be registered with the full architectural flow without changing lower layers', async () => {
  const services = createFoundationServiceCollection();

  addAiIntelligenceLayer(services, {
    toolDefinitions: [
      new ToolDefinition({
        toolId: 'knowledge.lookup.default',
        capability: 'knowledge.lookup',
        description: 'Retrieves authoritative knowledge.'
      })
    ]
  });
  addConversationLayer(services);
  addGatewayLayer(services);
  addExperienceLayer(services);
  addBusinessServicesLayer(services);

  const provider = services.buildServiceProvider();
  const experience = provider.getRequiredService('ExperienceService');
  const result = await experience.handleInbound(CHANNEL_TYPES.WEBSITE, {
    userId: 'guest-22',
    messageText: 'What are the house rules?'
  });

  assert.equal(result.accepted, true);
});
