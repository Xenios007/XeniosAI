import test from 'node:test';
import assert from 'node:assert/strict';

import { createFoundationServiceCollection } from '../../src/foundation/index.js';
import {
  addIntegrationLayer,
  COMMUNICATION_STYLES,
  INTEGRATION_ERROR_CODES,
  INTEGRATION_TYPES,
  IntegrationContract,
  IntegrationError,
  SimulatedProviderAdapter
} from '../../src/integration/index.js';

test('integration registry exposes governed provider contracts', () => {
  const services = createFoundationServiceCollection();
  addIntegrationLayer(services);

  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('IntegrationRegistry');
  const contracts = registry.listContracts();

  assert.ok(contracts.some(contract => contract.capability === 'messaging.send'));
  assert.ok(contracts.some(contract => contract.capability === 'calendar.sync'));
  assert.ok(contracts.some(contract => contract.capability === 'ai.complete'));
});

test('integration service invokes adapters and normalizes provider responses', async () => {
  const services = createFoundationServiceCollection();
  addIntegrationLayer(services);

  const provider = services.buildServiceProvider();
  const integration = provider.getRequiredService('IntegrationService');
  const response = await integration.invoke({
    capability: 'messaging.send',
    providerType: INTEGRATION_TYPES.MESSAGING,
    payload: {
      recipient: 'guest-1',
      text: 'Hello'
    },
    correlationId: 'corr-1',
    requestId: 'req-1'
  });

  assert.equal(response.success, true);
  assert.equal(response.providerType, INTEGRATION_TYPES.MESSAGING);
  assert.equal(response.normalizedPayload.status, 'simulated');
});

test('integration registry rejects unknown capabilities', async () => {
  const services = createFoundationServiceCollection();
  addIntegrationLayer(services);

  const provider = services.buildServiceProvider();
  const integration = provider.getRequiredService('IntegrationService');

  await assert.rejects(
    () =>
      integration.invoke({
        capability: 'payment.refund',
        providerType: INTEGRATION_TYPES.PAYMENT,
        payload: {},
        correlationId: 'corr-2',
        requestId: 'req-2'
      }),
    error =>
      error instanceof IntegrationError &&
      error.code === INTEGRATION_ERROR_CODES.ADAPTER_NOT_REGISTERED
  );
});

test('message bus separates intent messages from occurred events', async () => {
  const services = createFoundationServiceCollection();
  addIntegrationLayer(services);

  const provider = services.buildServiceProvider();
  const bus = provider.getRequiredService('MessageBus');
  const message = await bus.publishMessage({
    messageType: 'ProcessNotification',
    owner: 'notification',
    payload: { channel: 'email' },
    correlationId: 'corr-3'
  });
  const event = await bus.publishEvent({
    eventType: 'Notification Sent',
    owner: 'notification',
    payload: { status: 'sent' },
    correlationId: 'corr-3'
  });

  assert.equal(message.messageType, 'ProcessNotification');
  assert.equal(event.eventType, 'Notification Sent');
  assert.equal(bus.messages.length, 1);
  assert.equal(bus.events.length, 1);
});

test('custom provider adapters can be registered without changing consumers', async () => {
  const services = createFoundationServiceCollection();
  addIntegrationLayer(services);

  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('IntegrationRegistry');
  registry.register(
    new SimulatedProviderAdapter({
      providerType: INTEGRATION_TYPES.PAYMENT,
      capabilities: [
        new IntegrationContract({
          contractId: 'payment.verify.v1',
          providerType: INTEGRATION_TYPES.PAYMENT,
          capability: 'payment.verify',
          communicationStyle: COMMUNICATION_STYLES.REQUEST_RESPONSE,
          owner: 'payment'
        })
      ],
      responses: {
        'payment.verify': {
          status: 'verified'
        }
      }
    })
  );

  const integration = provider.getRequiredService('IntegrationService');
  const response = await integration.invoke({
    capability: 'payment.verify',
    providerType: INTEGRATION_TYPES.PAYMENT,
    payload: { paymentId: 'pay-1' },
    correlationId: 'corr-4',
    requestId: 'req-4'
  });

  assert.equal(response.normalizedPayload.status, 'verified');
});
