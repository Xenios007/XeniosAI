import test from 'node:test';
import assert from 'node:assert/strict';

import { createFoundationServiceCollection } from '../../src/foundation/index.js';
import { addGatewayLayer, GatewayError, GATEWAY_ERROR_CODES } from '../../src/gateway/index.js';
import { CHANNEL_TYPES } from '../../src/experience/index.js';

class ConversationSpy {
  constructor() {
    this.requests = [];
  }

  async forwardRequest(request) {
    this.requests.push(request);
    return { status: 'forwarded', requestId: request.requestId };
  }
}

function createExperienceRequest(overrides = {}) {
  return {
    channel: CHANNEL_TYPES.WEBSITE,
    userId: 'guest-1',
    locale: 'en-US',
    timestamp: '2026-07-18T12:00:00.000Z',
    messageText: 'Hello',
    attachments: [],
    metadata: {},
    ...overrides
  };
}

test('gateway admits a valid request and forwards it to the conversation port', async () => {
  const services = createFoundationServiceCollection();
  const conversation = new ConversationSpy();

  services.registerSingleton('ConversationPort', () => conversation);
  addGatewayLayer(services);

  const provider = services.buildServiceProvider();
  const gateway = provider.getRequiredService('GatewayPort');
  const response = await gateway.submitRequest(createExperienceRequest());

  assert.equal(response.accepted, true);
  assert.equal(response.route.destination, 'ConversationPort');
  assert.equal(conversation.requests.length, 1);
  assert.ok(conversation.requests[0].requestId);
  assert.ok(conversation.requests[0].correlationId);
  assert.equal(conversation.requests[0].authentication.isAuthenticated, true);
});

test('gateway rejects invalid requests before forwarding', async () => {
  const services = createFoundationServiceCollection();
  const conversation = new ConversationSpy();

  services.registerSingleton('ConversationPort', () => conversation);
  addGatewayLayer(services);

  const provider = services.buildServiceProvider();
  const gateway = provider.getRequiredService('GatewayPort');

  await assert.rejects(
    () =>
      gateway.submitRequest(
        createExperienceRequest({
          channel: 'unsupported'
        })
      ),
    error =>
      error instanceof GatewayError &&
      error.code === GATEWAY_ERROR_CODES.VALIDATION_FAILED
  );
  assert.equal(conversation.requests.length, 0);
});

test('gateway applies configurable rate limiting', async () => {
  const services = createFoundationServiceCollection();
  const conversation = new ConversationSpy();

  services.registerSingleton('ConversationPort', () => conversation);
  addGatewayLayer(services);

  const provider = services.buildServiceProvider();
  const gateway = provider.getRequiredService('GatewayPort');
  const limiter = provider.getRequiredService('RateLimiter');
  limiter.limit = 1;

  await gateway.submitRequest(createExperienceRequest());

  await assert.rejects(
    () => gateway.submitRequest(createExperienceRequest()),
    error =>
      error instanceof GatewayError &&
      error.code === GATEWAY_ERROR_CODES.RATE_LIMIT_EXCEEDED
  );
});

test('gateway records audit metadata on admitted requests', async () => {
  const services = createFoundationServiceCollection();
  const conversation = new ConversationSpy();

  services.registerSingleton('ConversationPort', () => conversation);
  addGatewayLayer(services);

  const provider = services.buildServiceProvider();
  const gateway = provider.getRequiredService('GatewayPort');
  const response = await gateway.submitRequest(
    createExperienceRequest({
      metadata: {
        correlationId: 'corr-123',
        requestType: 'guest-message'
      }
    })
  );

  assert.equal(response.request.audit.correlationId, 'corr-123');
  assert.equal(response.request.audit.route.requestType, 'guest-message');
  assert.equal(response.request.audit.validationOutcome.isValid, true);
});
