import test from 'node:test';
import assert from 'node:assert/strict';

import { createFoundationServiceCollection } from '../../src/foundation/index.js';
import {
  addExperienceLayer,
  CHANNEL_TYPES,
  EXPERIENCE_ERROR_CODES,
  ExperienceError,
  ExperienceResponse,
  MessengerChannelAdapter,
  WebsiteChannelAdapter,
  WhatsAppChannelAdapter
} from '../../src/experience/index.js';
import { addGatewayLayer } from '../../src/gateway/index.js';

class GatewaySpy {
  constructor() {
    this.requests = [];
  }

  async submitRequest(request) {
    this.requests.push(request);
    return { accepted: true, request };
  }
}

test('experience adapters normalize inbound payloads into a channel-independent request', () => {
  const adapter = new MessengerChannelAdapter();
  const request = adapter.normalizeInboundPayload(
    {
      userId: 'guest-1',
      locale: 'en-PH',
      messageText: 'Hello',
      attachments: [
        {
          id: 'file-1',
          type: 'image',
          url: 'https://example.com/image.jpg',
          contentType: 'image/jpeg'
        }
      ],
      metadata: { source: 'test' }
    },
    {
      clock: { now: () => new Date('2026-07-18T00:00:00.000Z') }
    }
  );

  assert.equal(request.channel, CHANNEL_TYPES.MESSENGER);
  assert.equal(request.userId, 'guest-1');
  assert.equal(request.locale, 'en-PH');
  assert.equal(request.messageText, 'Hello');
  assert.equal(request.timestamp, '2026-07-18T00:00:00.000Z');
  assert.equal(request.attachments.length, 1);
});

test('experience service submits normalized requests to the gateway port', async () => {
  const services = createFoundationServiceCollection();
  const gateway = new GatewaySpy();

  services.registerSingleton('GatewayPort', () => gateway);
  addExperienceLayer(services);

  const provider = services.buildServiceProvider();
  const experienceService = provider.getRequiredService('ExperienceService');
  const result = await experienceService.handleInbound(CHANNEL_TYPES.WEBSITE, {
    userId: 'guest-2',
    messageText: 'Need availability'
  });

  assert.equal(result.accepted, true);
  assert.equal(gateway.requests.length, 1);
  assert.equal(gateway.requests[0].channel, CHANNEL_TYPES.WEBSITE);
  assert.equal(gateway.requests[0].messageText, 'Need availability');
});

test('experience layer integrates with the gateway layer through the gateway port contract', async () => {
  const services = createFoundationServiceCollection();
  const conversation = {
    requests: [],
    async forwardRequest(request) {
      this.requests.push(request);
      return { forwarded: true };
    }
  };

  services.registerSingleton('ConversationPort', () => conversation);
  addGatewayLayer(services);
  addExperienceLayer(services);

  const provider = services.buildServiceProvider();
  const experienceService = provider.getRequiredService('ExperienceService');
  const result = await experienceService.handleInbound(CHANNEL_TYPES.WEBSITE, {
    userId: 'guest-4',
    messageText: 'I need help'
  });

  assert.equal(result.accepted, true);
  assert.equal(conversation.requests.length, 1);
});

test('experience service renders outbound responses according to channel capabilities', () => {
  const websiteAdapter = new WebsiteChannelAdapter();
  const rendered = websiteAdapter.renderOutboundResponse(
    new ExperienceResponse({
      text: 'Choose an option',
      buttons: [{ id: 'book', label: 'Book' }],
      quickReplies: [{ id: 'faq', label: 'FAQ' }]
    })
  );

  assert.equal(rendered.channel, CHANNEL_TYPES.WEBSITE);
  assert.equal(rendered.payload.buttons.length, 1);
  assert.equal(rendered.payload.quickReplies.length, 1);
});

test('experience layer rejects channel features that are not supported', () => {
  const adapter = new WhatsAppChannelAdapter();

  assert.throws(
    () =>
      adapter.renderOutboundResponse(
        new ExperienceResponse({
          text: 'Unsupported',
          buttons: [{ id: 'book', label: 'Book now' }]
        })
      ),
    error =>
      error instanceof ExperienceError &&
      error.code === EXPERIENCE_ERROR_CODES.RENDERING_NOT_SUPPORTED
  );
});

test('experience layer rejects unsupported channels', async () => {
  const services = createFoundationServiceCollection();
  const gateway = new GatewaySpy();

  services.registerSingleton('GatewayPort', () => gateway);
  addExperienceLayer(services);

  const provider = services.buildServiceProvider();
  const experienceService = provider.getRequiredService('ExperienceService');

  await assert.rejects(
    () => experienceService.handleInbound('voice-assistant', { userId: 'guest-3' }),
    error =>
      error instanceof ExperienceError &&
      error.code === EXPERIENCE_ERROR_CODES.CHANNEL_NOT_SUPPORTED
  );
});
