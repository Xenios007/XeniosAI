import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS,
  MESSAGE_DELIVERY_MODELS,
  MESSAGE_PROCESSING_STATUSES,
  MESSAGE_RETRY_POLICIES,
  MESSAGE_ROUTING_STRATEGIES,
  MESSAGE_SECURITY_CONTROLS,
  MESSAGE_TELEMETRY_FIELDS,
  MESSAGE_TYPES,
  MESSAGING_LIFECYCLE_STAGES,
  MESSAGING_STYLES,
  MessageContract,
  MessageEnvelope,
  MessageProcessingRecord,
  MessageTelemetryRecord,
  MessagingPatternsDescriptor,
  addDataFlow
} from '../../src/data-flow/index.js';

test('messaging patterns expose the canonical ARCH-005-08 lifecycle order', () => {
  const descriptor = new MessagingPatternsDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    MESSAGING_LIFECYCLE_STAGES.CREATE_MESSAGE,
    MESSAGING_LIFECYCLE_STAGES.VALIDATE_MESSAGE,
    MESSAGING_LIFECYCLE_STAGES.ROUTE_MESSAGE,
    MESSAGING_LIFECYCLE_STAGES.DELIVER_MESSAGE,
    MESSAGING_LIFECYCLE_STAGES.PROCESS_MESSAGE,
    MESSAGING_LIFECYCLE_STAGES.ACKNOWLEDGE_RESULT,
    MESSAGING_LIFECYCLE_STAGES.COMPLETE_PROCESSING
  ]);
});

test('messaging patterns expose styles, types, routing, delivery, retry, security, and telemetry metadata', () => {
  const descriptor = new MessagingPatternsDescriptor();

  assert.ok(descriptor.messagingStyles().includes(MESSAGING_STYLES.PUBLISH_SUBSCRIBE));
  assert.ok(descriptor.messageTypes().includes(MESSAGE_TYPES.WORKFLOW_SIGNAL));
  assert.ok(descriptor.routingStrategies().includes(MESSAGE_ROUTING_STRATEGIES.CONTENT_BASED));
  assert.ok(descriptor.deliveryModels().includes(MESSAGE_DELIVERY_MODELS.AT_LEAST_ONCE));
  assert.ok(descriptor.retryPolicies().includes(MESSAGE_RETRY_POLICIES.DEAD_LETTER_ROUTING));
  assert.ok(descriptor.securityControls().includes(MESSAGE_SECURITY_CONTROLS.AUDITABILITY));
  assert.ok(descriptor.telemetryFields().includes(MESSAGE_TELEMETRY_FIELDS.PROCESSING_DURATION));
  assert.equal(descriptor.getStage(MESSAGING_LIFECYCLE_STAGES.ROUTE_MESSAGE).owner, EXECUTION_PARTICIPANTS.INTEGRATION_LAYER);
});

test('messaging patterns register documented message types and styles', () => {
  const descriptor = new MessagingPatternsDescriptor();

  assert.equal(descriptor.getContract('CreateReservationCommandMessage').messageType, MESSAGE_TYPES.COMMAND);
  assert.equal(descriptor.getContract('AvailabilityQueryMessage').style, MESSAGING_STYLES.REQUEST_RESPONSE);
  assert.equal(descriptor.getContract('ReservationCreatedEventMessage').style, MESSAGING_STYLES.PUBLISH_SUBSCRIBE);
  assert.equal(descriptor.getContract('GuestNotificationMessage').messageType, MESSAGE_TYPES.NOTIFICATION);
  assert.equal(descriptor.getContract('ReservationWorkflowSignalMessage').messageType, MESSAGE_TYPES.WORKFLOW_SIGNAL);
  assert.equal(descriptor.getContract('PlatformStatusUpdateMessage').style, MESSAGING_STYLES.BROADCAST);
});

test('messaging patterns reject skipped lifecycle stages', () => {
  const descriptor = new MessagingPatternsDescriptor();
  const skippedRouting = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== MESSAGING_LIFECYCLE_STAGES.ROUTE_MESSAGE);

  const result = descriptor.validateLifecycle(skippedRouting);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /route-message/);
  assert.throws(
    () => descriptor.assertLifecycle(skippedRouting),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.MESSAGING_LIFECYCLE_INVALID
  );
});

test('messaging patterns reject contracts with hidden dependencies and missing reliability metadata', () => {
  const descriptor = new MessagingPatternsDescriptor({ contracts: [] });

  assert.throws(
    () =>
      descriptor.registerContract(
        new MessageContract({
          messageName: 'InvalidMessage',
          messageType: 'unknown',
          style: MESSAGING_STYLES.POINT_TO_POINT,
          producer: '',
          version: '',
          routingStrategy: 'magic',
          deliveryModel: 'maybe',
          payloadFields: [],
          retryPolicy: [],
          securityControls: [MESSAGE_SECURITY_CONTROLS.AUTHENTICATION],
          observable: false,
          producerKnowsConsumers: true,
          implementationDetailsExposed: true,
          orderingRequired: true,
          duplicateHandlingRequired: true
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.MESSAGE_CONTRACT_INVALID &&
      error.details.errors.some((message) => message.includes('independent of consumers')) &&
      error.details.errors.some((message) => message.includes('implementation details')) &&
      error.details.errors.some((message) => message.includes('retry limits'))
  );
});

test('messaging patterns create immutable messages with separated payload and metadata', () => {
  const descriptor = new MessagingPatternsDescriptor();
  const message = descriptor.createMessage({
    messageId: 'msg-1',
    correlationId: 'corr-1',
    timestamp: '2026-08-01T00:00:00.000Z',
    source: 'booking',
    destination: 'booking-command-queue',
    messageName: 'CreateReservationCommandMessage',
    messageType: MESSAGE_TYPES.COMMAND,
    version: 'v1',
    payload: {
      reservationId: 'reservation-1',
      guestId: 'guest-1'
    },
    metadata: { transport: 'abstract' }
  });

  assert.equal(message.messageName, 'CreateReservationCommandMessage');
  assert.throws(() => {
    message.payload.reservationId = 'changed';
  });
});

test('messaging patterns reject invalid message envelopes', () => {
  const descriptor = new MessagingPatternsDescriptor();

  assert.throws(
    () =>
      descriptor.createMessage({
        messageId: 'msg-1',
        correlationId: 'corr-1',
        source: 'booking',
        destination: 'wrong',
        messageName: 'CreateReservationCommandMessage',
        messageType: MESSAGE_TYPES.EVENT,
        version: 'v2',
        payload: { reservationId: 'reservation-1' },
        metadata: { implementationDetailsExposed: true }
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.MESSAGE_ENVELOPE_INVALID &&
      error.details.errors.some((message) => message.includes('timestamp')) &&
      error.details.errors.some((message) => message.includes('guestId')) &&
      error.details.errors.some((message) => message.includes('implementation details'))
  );
});

test('messaging patterns validate duplicate handling, acknowledgement, and dead-letter processing', () => {
  const descriptor = new MessagingPatternsDescriptor();
  const envelope = new MessageEnvelope({
    messageId: 'msg-1',
    correlationId: 'corr-1',
    timestamp: '2026-08-01T00:00:00.000Z',
    source: 'booking',
    messageName: 'ReservationCreatedEventMessage',
    messageType: MESSAGE_TYPES.EVENT,
    version: 'v1',
    payload: { reservationId: 'reservation-1', timestamp: '2026-08-01T00:00:00.000Z' }
  });
  const valid = new MessageProcessingRecord({
    messageId: 'msg-1',
    consumer: 'analytics',
    status: MESSAGE_PROCESSING_STATUSES.ACKNOWLEDGED,
    idempotent: true,
    duplicateDetected: true,
    acknowledged: true,
    retryCount: 1
  });
  const invalid = descriptor.validateProcessing(
    {
      messageId: 'msg-1',
      consumer: 'analytics',
      status: MESSAGE_PROCESSING_STATUSES.DEAD_LETTERED,
      idempotent: false,
      duplicateDetected: true,
      deadLettered: true,
      retryCount: -1
    },
    envelope
  );

  assert.equal(descriptor.validateProcessing(valid, envelope).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /retry count/);
  assert.match(invalid.errors.join('\n'), /idempotent processing/);
  assert.match(invalid.errors.join('\n'), /failure reason/);
});

test('messaging patterns validate message telemetry and failed outcomes', () => {
  const descriptor = new MessagingPatternsDescriptor();
  const telemetry = new MessageTelemetryRecord({
    messageId: 'msg-1',
    correlationId: 'corr-1',
    source: 'booking',
    destination: 'calendar',
    messageType: MESSAGE_TYPES.QUERY,
    deliveryDurationMs: 5,
    processingDurationMs: 7,
    success: true,
    retryCount: 0
  });
  const invalid = descriptor.validateTelemetry({
    messageId: 'msg-1',
    correlationId: 'corr-1',
    source: 'booking',
    messageType: 'unknown',
    deliveryDurationMs: -1,
    processingDurationMs: -2,
    success: false,
    retryCount: -1
  });

  assert.equal(descriptor.validateTelemetry(telemetry).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /message type/);
  assert.match(invalid.errors.join('\n'), /delivery duration/);
  assert.match(invalid.errors.join('\n'), /failure reason/);
});

test('messaging patterns descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDataFlow(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('MessagingPatternsDescriptor');

  assert.ok(descriptor instanceof MessagingPatternsDescriptor);
  assert.equal(descriptor.describeLifecycle().length, 7);
});
