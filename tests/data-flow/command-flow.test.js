import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  COMMAND_CHARACTERISTICS,
  COMMAND_LIFECYCLE_STAGES,
  COMMAND_OUTCOMES,
  COMMAND_TELEMETRY_FIELDS,
  CommandDefinition,
  CommandFlowDescriptor,
  CommandTelemetryRecord,
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS,
  addDataFlow
} from '../../src/data-flow/index.js';

test('command flow exposes the canonical ARCH-005-02 lifecycle order', () => {
  const descriptor = new CommandFlowDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    COMMAND_LIFECYCLE_STAGES.REQUEST_RECEIVED,
    COMMAND_LIFECYCLE_STAGES.INTENT_IDENTIFIED,
    COMMAND_LIFECYCLE_STAGES.DECISION_AUTHORIZED,
    COMMAND_LIFECYCLE_STAGES.COMMAND_CREATED,
    COMMAND_LIFECYCLE_STAGES.BUSINESS_VALIDATION,
    COMMAND_LIFECYCLE_STAGES.BUSINESS_EXECUTION,
    COMMAND_LIFECYCLE_STAGES.PERSIST_CHANGES,
    COMMAND_LIFECYCLE_STAGES.PUBLISH_EVENTS,
    COMMAND_LIFECYCLE_STAGES.RETURN_RESULT
  ]);
});

test('command flow exposes command characteristics and telemetry fields', () => {
  const descriptor = new CommandFlowDescriptor();

  assert.ok(descriptor.characteristics().includes(COMMAND_CHARACTERISTICS.CHANGES_STATE));
  assert.ok(descriptor.characteristics().includes(COMMAND_CHARACTERISTICS.ONE_BUSINESS_OWNER));
  assert.ok(descriptor.telemetryFields().includes(COMMAND_TELEMETRY_FIELDS.OWNING_SERVICE));
  assert.equal(descriptor.getStage(COMMAND_LIFECYCLE_STAGES.BUSINESS_EXECUTION).owner, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES);
});

test('command flow registers documented command ownership examples', () => {
  const descriptor = new CommandFlowDescriptor();

  assert.equal(descriptor.getCommand('CreateReservation').owningService, 'Booking Service');
  assert.equal(descriptor.getCommand('CalculatePrice').owningService, 'Pricing Service');
  assert.equal(descriptor.getCommand('UpdateCalendar').owningService, 'Calendar Service');
  assert.equal(descriptor.getCommand('SendConfirmation').owningService, 'Notification Service');
});

test('command flow rejects skipped lifecycle stages', () => {
  const descriptor = new CommandFlowDescriptor();
  const skippedAuthorization = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== COMMAND_LIFECYCLE_STAGES.DECISION_AUTHORIZED);

  const result = descriptor.validateLifecycle(skippedAuthorization);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /decision-authorized/);
  assert.throws(
    () => descriptor.assertLifecycle(skippedAuthorization),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.COMMAND_LIFECYCLE_INVALID
  );
});

test('command flow enforces exactly one business owner and explicit required fields', () => {
  const descriptor = new CommandFlowDescriptor({ commands: [] });

  assert.throws(
    () =>
      descriptor.registerCommand(
        new CommandDefinition({
          commandName: 'InvalidCommand',
          owningService: ['Booking Service', 'Pricing Service'],
          requiredFields: []
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.COMMAND_DEFINITION_INVALID
  );
});

test('command flow creates immutable authorized commands with complete payloads', () => {
  const descriptor = new CommandFlowDescriptor();
  const command = descriptor.createCommand({
    commandId: 'cmd-1',
    commandName: 'CreateReservation',
    correlationId: 'corr-1',
    requestId: 'req-1',
    owningService: 'Booking Service',
    authorized: true,
    idempotencyKey: 'idem-1',
    payload: {
      guestId: 'guest-1',
      propertyId: 'property-1',
      checkIn: '2026-08-01',
      checkOut: '2026-08-03',
      guests: 2
    }
  });

  assert.equal(command.commandName, 'CreateReservation');
  assert.throws(() => {
    command.payload.guestId = 'changed';
  });
});

test('command flow rejects commands that bypass Decision Engine authorization', () => {
  const descriptor = new CommandFlowDescriptor();

  assert.throws(
    () =>
      descriptor.createCommand({
        commandId: 'cmd-1',
        commandName: 'CreateReservation',
        correlationId: 'corr-1',
        requestId: 'req-1',
        owningService: 'Booking Service',
        authorized: false,
        payload: {}
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.COMMAND_AUTHORIZATION_INVALID
  );
});

test('command flow validates required payload fields and idempotency guidance', () => {
  const descriptor = new CommandFlowDescriptor();

  assert.throws(
    () =>
      descriptor.createCommand({
        commandId: 'cmd-1',
        commandName: 'CreateReservation',
        correlationId: 'corr-1',
        requestId: 'req-1',
        owningService: 'Booking Service',
        authorized: true,
        payload: {
          guestId: 'guest-1'
        }
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.COMMAND_DEFINITION_INVALID &&
      error.details.errors.some((message) => message.includes('propertyId')) &&
      error.details.errors.some((message) => message.includes('idempotency'))
  );
});

test('command flow validates command telemetry and failure reasons', () => {
  const descriptor = new CommandFlowDescriptor();
  const telemetry = new CommandTelemetryRecord({
    commandName: 'CreateReservation',
    correlationId: 'corr-1',
    requestId: 'req-1',
    owningService: 'Booking Service',
    executionDurationMs: 21,
    result: COMMAND_OUTCOMES.SUCCESS
  });
  const invalid = descriptor.validateTelemetry({
    commandName: 'CreateReservation',
    correlationId: 'corr-1',
    requestId: 'req-1',
    owningService: 'Booking Service',
    executionDurationMs: -1,
    result: COMMAND_OUTCOMES.BUSINESS_REJECTION
  });

  assert.equal(descriptor.validateTelemetry(telemetry).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /duration/);
  assert.match(invalid.errors.join('\n'), /failure reason/);
});

test('command flow descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDataFlow(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('CommandFlowDescriptor');

  assert.ok(descriptor instanceof CommandFlowDescriptor);
  assert.equal(descriptor.describeLifecycle().length, 9);
});
