import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DATA_FLOW_ERROR_CODES,
  EVENT_CHARACTERISTICS,
  EVENT_DELIVERY_STATUSES,
  EVENT_LIFECYCLE_STAGES,
  EVENT_RELIABILITY_CONCERNS,
  EVENT_TELEMETRY_FIELDS,
  EXECUTION_PARTICIPANTS,
  EventConsumptionRecord,
  EventDefinition,
  EventFlowDescriptor,
  EventTelemetryRecord,
  addDataFlow
} from '../../src/data-flow/index.js';

test('event flow exposes the canonical ARCH-005-04 lifecycle order', () => {
  const descriptor = new EventFlowDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    EVENT_LIFECYCLE_STAGES.BUSINESS_OPERATION_COMPLETED,
    EVENT_LIFECYCLE_STAGES.CREATE_EVENT,
    EVENT_LIFECYCLE_STAGES.PUBLISH_EVENT,
    EVENT_LIFECYCLE_STAGES.DISTRIBUTE_EVENT,
    EVENT_LIFECYCLE_STAGES.CONSUME_EVENT,
    EVENT_LIFECYCLE_STAGES.EXECUTE_LOCAL_PROCESSING,
    EVENT_LIFECYCLE_STAGES.COMPLETE_PROCESSING
  ]);
});

test('event flow exposes event characteristics, reliability concerns, telemetry fields, and stage ownership', () => {
  const descriptor = new EventFlowDescriptor();

  assert.ok(descriptor.characteristics().includes(EVENT_CHARACTERISTICS.IMMUTABLE));
  assert.ok(descriptor.characteristics().includes(EVENT_CHARACTERISTICS.LOOSELY_COUPLED));
  assert.ok(descriptor.reliabilityConcerns().includes(EVENT_RELIABILITY_CONCERNS.IDEMPOTENT_CONSUMERS));
  assert.ok(descriptor.telemetryFields().includes(EVENT_TELEMETRY_FIELDS.CONSUMER_COUNT));
  assert.equal(descriptor.getStage(EVENT_LIFECYCLE_STAGES.DISTRIBUTE_EVENT).owner, EXECUTION_PARTICIPANTS.INTEGRATION_LAYER);
});

test('event flow registers documented event ownership examples', () => {
  const descriptor = new EventFlowDescriptor();

  assert.equal(descriptor.getEvent('ReservationCreated').publisher, 'Booking Service');
  assert.equal(descriptor.getEvent('PricingCalculated').publisher, 'Pricing Service');
  assert.equal(descriptor.getEvent('CalendarUpdated').publisher, 'Calendar Service');
  assert.equal(descriptor.getEvent('PaymentCompleted').publisher, 'Payment Service');
  assert.equal(descriptor.getEvent('GuestRegistered').publisher, 'Guest Service');
});

test('event flow rejects skipped lifecycle stages', () => {
  const descriptor = new EventFlowDescriptor();
  const skippedPublish = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== EVENT_LIFECYCLE_STAGES.PUBLISH_EVENT);

  const result = descriptor.validateLifecycle(skippedPublish);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /publish-event/);
  assert.throws(
    () => descriptor.assertLifecycle(skippedPublish),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.EVENT_LIFECYCLE_INVALID
  );
});

test('event flow rejects incomplete event definitions and shared publishers', () => {
  const descriptor = new EventFlowDescriptor({ events: [] });

  assert.throws(
    () =>
      descriptor.registerEvent(
        new EventDefinition({
          eventName: 'InvalidEvent',
          publisher: ['Booking Service', 'Pricing Service'],
          businessIdentifier: undefined,
          requiredPayloadFields: []
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.EVENT_DEFINITION_INVALID
  );
});

test('event flow creates immutable completed business fact events', () => {
  const descriptor = new EventFlowDescriptor();
  const envelope = descriptor.createEvent({
    eventId: 'evt-1',
    eventName: 'ReservationCreated',
    eventVersion: 1,
    timestamp: '2026-08-01T00:00:00.000Z',
    correlationId: 'corr-1',
    sourceService: 'Booking Service',
    businessIdentifier: 'reservation-1',
    payload: {
      reservationId: 'reservation-1',
      guestId: 'guest-1',
      propertyId: 'property-1',
      checkIn: '2026-08-01',
      checkOut: '2026-08-03',
      timestamp: '2026-08-01T00:00:00.000Z'
    }
  });

  assert.equal(envelope.eventName, 'ReservationCreated');
  assert.throws(() => {
    envelope.payload.guestId = 'changed';
  });
});

test('event flow rejects invalid event publication envelopes', () => {
  const descriptor = new EventFlowDescriptor();

  assert.throws(
    () =>
      descriptor.createEvent({
        eventId: 'evt-1',
        eventName: 'ReservationCreated',
        eventVersion: 1,
        timestamp: '2026-08-01T00:00:00.000Z',
        correlationId: 'corr-1',
        sourceService: 'Notification Service',
        businessIdentifier: 'reservation-1',
        completedBusinessFact: false,
        publisherAwareOfConsumers: true,
        payload: {
          reservationId: 'reservation-1'
        }
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.EVENT_PUBLICATION_INVALID &&
      error.details.errors.some((message) => message.includes('completed business facts')) &&
      error.details.errors.some((message) => message.includes('Booking Service')) &&
      error.details.errors.some((message) => message.includes('propertyId'))
  );
});

test('event flow validates independent local event consumption', () => {
  const descriptor = new EventFlowDescriptor();
  const envelope = descriptor.createEvent({
    eventId: 'evt-1',
    eventName: 'PaymentCompleted',
    eventVersion: 1,
    timestamp: '2026-08-01T00:00:00.000Z',
    correlationId: 'corr-1',
    sourceService: 'Payment Service',
    businessIdentifier: 'payment-1',
    payload: {
      paymentId: 'payment-1',
      amount: 100,
      timestamp: '2026-08-01T00:00:00.000Z'
    }
  });
  const valid = new EventConsumptionRecord({
    eventId: 'evt-1',
    eventName: 'PaymentCompleted',
    consumer: 'Audit Service',
    supportedVersions: [1],
    processingStatus: EVENT_DELIVERY_STATUSES.PROCESSING_COMPLETED
  });
  const invalid = descriptor.validateConsumption(
    {
      eventId: 'evt-1',
      eventName: 'PaymentCompleted',
      consumer: 'Booking Service',
      supportedVersions: [2],
      processingStatus: EVENT_DELIVERY_STATUSES.CONSUMER_FAILED,
      localProcessingOnly: false,
      modifiedForeignBusinessState: true
    },
    envelope
  );

  assert.equal(descriptor.validateConsumption(valid, envelope).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /does not support event version/);
  assert.match(invalid.errors.join('\n'), /process locally/);
  assert.match(invalid.errors.join('\n'), /failure information/);
});

test('event flow validates event telemetry and failed delivery details', () => {
  const descriptor = new EventFlowDescriptor();
  const telemetry = new EventTelemetryRecord({
    eventName: 'CalendarUpdated',
    publisher: 'Calendar Service',
    correlationId: 'corr-1',
    timestamp: '2026-08-01T00:00:00.000Z',
    deliveryStatus: EVENT_DELIVERY_STATUSES.PROCESSING_COMPLETED,
    consumerCount: 2,
    processingDurationMs: 12
  });
  const invalid = descriptor.validateTelemetry({
    eventName: 'CalendarUpdated',
    publisher: 'Calendar Service',
    correlationId: 'corr-1',
    timestamp: '2026-08-01T00:00:00.000Z',
    deliveryStatus: EVENT_DELIVERY_STATUSES.DELIVERY_FAILED,
    consumerCount: -1,
    processingDurationMs: -3
  });

  assert.equal(descriptor.validateTelemetry(telemetry).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /duration/);
  assert.match(invalid.errors.join('\n'), /consumer count/);
  assert.match(invalid.errors.join('\n'), /failure information/);
});

test('event flow descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDataFlow(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('EventFlowDescriptor');

  assert.ok(descriptor instanceof EventFlowDescriptor);
  assert.equal(descriptor.describeLifecycle().length, 7);
});
