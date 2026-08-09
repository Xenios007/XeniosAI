import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS,
  TRANSACTION_CONSISTENCY_SCOPES,
  TRANSACTION_COORDINATION_MECHANISMS,
  TRANSACTION_FAILURE_TYPES,
  TRANSACTION_LIFECYCLE_STAGES,
  TRANSACTION_OWNERSHIP_PRINCIPLES,
  TRANSACTION_RESULTS,
  TRANSACTION_TELEMETRY_FIELDS,
  TransactionBoundary,
  TransactionBoundariesDescriptor,
  TransactionCompensationRecord,
  TransactionOperationRecord,
  TransactionTelemetryRecord,
  addDataFlow
} from '../../src/data-flow/index.js';

test('transaction boundaries expose the canonical ARCH-005-09 lifecycle order', () => {
  const descriptor = new TransactionBoundariesDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    TRANSACTION_LIFECYCLE_STAGES.BEGIN_TRANSACTION,
    TRANSACTION_LIFECYCLE_STAGES.VALIDATE_BUSINESS_RULES,
    TRANSACTION_LIFECYCLE_STAGES.EXECUTE_BUSINESS_OPERATION,
    TRANSACTION_LIFECYCLE_STAGES.PERSIST_CHANGES,
    TRANSACTION_LIFECYCLE_STAGES.COMMIT_TRANSACTION,
    TRANSACTION_LIFECYCLE_STAGES.PUBLISH_EVENTS,
    TRANSACTION_LIFECYCLE_STAGES.COMPLETE
  ]);
});

test('transaction boundaries expose ownership, consistency, coordination, failure, result, and telemetry metadata', () => {
  const descriptor = new TransactionBoundariesDescriptor();

  assert.ok(descriptor.ownershipPrinciples().includes(TRANSACTION_OWNERSHIP_PRINCIPLES.ONE_OWNER));
  assert.ok(descriptor.consistencyScopes().includes(TRANSACTION_CONSISTENCY_SCOPES.ACROSS_BUSINESS_SERVICES));
  assert.ok(descriptor.coordinationMechanisms().includes(TRANSACTION_COORDINATION_MECHANISMS.COMPENSATION));
  assert.ok(descriptor.failureTypes().includes(TRANSACTION_FAILURE_TYPES.RESOURCE_CONFLICT));
  assert.ok(descriptor.transactionResults().includes(TRANSACTION_RESULTS.COMPENSATED));
  assert.ok(descriptor.telemetryFields().includes(TRANSACTION_TELEMETRY_FIELDS.FAILURE_INFORMATION));
  assert.equal(descriptor.getStage(TRANSACTION_LIFECYCLE_STAGES.PERSIST_CHANGES).owner, EXECUTION_PARTICIPANTS.DATA_LAYER);
});

test('transaction boundaries register documented ownership examples', () => {
  const descriptor = new TransactionBoundariesDescriptor();

  assert.equal(descriptor.getBoundary('Create Reservation').ownerService, 'Booking Service');
  assert.equal(descriptor.getBoundary('Process Payment').ownerService, 'Payment Service');
  assert.equal(descriptor.getBoundary('Update Property').ownerService, 'Property Service');
  assert.equal(descriptor.getBoundary('Register Guest').ownerService, 'Guest Service');
  assert.equal(descriptor.getBoundary('Update Calendar').ownerService, 'Calendar Service');
});

test('transaction boundaries reject skipped lifecycle stages', () => {
  const descriptor = new TransactionBoundariesDescriptor();
  const skippedCommit = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== TRANSACTION_LIFECYCLE_STAGES.COMMIT_TRANSACTION);

  const result = descriptor.validateLifecycle(skippedCommit);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /commit-transaction/);
  assert.throws(
    () => descriptor.assertLifecycle(skippedCommit),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.TRANSACTION_LIFECYCLE_INVALID
  );
});

test('transaction boundaries reject distributed ownership and cross-service transaction coupling', () => {
  const descriptor = new TransactionBoundariesDescriptor({ boundaries: [] });

  assert.throws(
    () =>
      descriptor.registerBoundary(
        new TransactionBoundary({
          businessOperation: 'Invalid Operation',
          ownerService: ['Booking Service', 'Payment Service'],
          affectedServices: ['Booking Service', 'Payment Service'],
          distributedTransaction: true,
          crossServiceCommunicationInsideBoundary: true,
          publishesEventsBeforeCommit: true,
          longRunningLock: true,
          rollbackScope: 'global',
          coordinationMechanisms: ['two-phase-commit']
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.TRANSACTION_BOUNDARY_INVALID &&
      error.details.errors.some((message) => message.includes('Distributed transactions')) &&
      error.details.errors.some((message) => message.includes('owner service boundary')) &&
      error.details.errors.some((message) => message.includes('after successful transaction commit'))
  );
});

test('transaction boundaries validate successful local operations and event publication after commit', () => {
  const descriptor = new TransactionBoundariesDescriptor();
  const operation = new TransactionOperationRecord({
    transactionId: 'txn-1',
    correlationId: 'corr-1',
    businessOperation: 'Create Reservation',
    ownerService: 'Booking Service',
    businessRulesValidated: true,
    stateChanges: ['reservation-created'],
    persisted: true,
    committed: true,
    eventsPublishedAfterCommit: true,
    idempotencyKey: 'idem-1',
    retryAttempt: true
  });

  assert.equal(descriptor.validateOperation(operation).isValid, true);
});

test('transaction boundaries reject invalid operation ordering, ownership, failure, and retry metadata', () => {
  const descriptor = new TransactionBoundariesDescriptor();
  const result = descriptor.validateOperation({
    transactionId: 'txn-1',
    correlationId: 'corr-1',
    businessOperation: 'Create Reservation',
    ownerService: 'Payment Service',
    businessRulesValidated: false,
    stateChanges: [],
    persisted: false,
    committed: true,
    rolledBack: true,
    eventsPublishedAfterCommit: false,
    retryAttempt: true,
    failureType: TRANSACTION_FAILURE_TYPES.TIMEOUT
  });

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /Booking Service/);
  assert.match(result.errors.join('\n'), /Business rules/);
  assert.match(result.errors.join('\n'), /persist changes before commit/);
  assert.match(result.errors.join('\n'), /idempotency key/);
  assert.match(result.errors.join('\n'), /failure information/);
});

test('transaction boundaries validate compensation as a new service-owned transaction', () => {
  const descriptor = new TransactionBoundariesDescriptor();
  const valid = new TransactionCompensationRecord({
    originalTransactionId: 'txn-1',
    compensationTransactionId: 'txn-2',
    businessOperation: 'Process Payment',
    ownerService: 'Payment Service',
    compensationOperation: 'Refund payment',
    coordinatedByWorkflow: true,
    createsNewTransaction: true
  });
  const invalid = descriptor.validateCompensation({
    originalTransactionId: 'txn-1',
    businessOperation: 'Process Payment',
    ownerService: 'Booking Service',
    compensationOperation: '',
    coordinatedByWorkflow: false,
    createsNewTransaction: false,
    attemptsHistoryRollback: true
  });

  assert.equal(descriptor.validateCompensation(valid).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /compensation transaction ID/);
  assert.match(invalid.errors.join('\n'), /Payment Service/);
  assert.match(invalid.errors.join('\n'), /new business transaction/);
  assert.match(invalid.errors.join('\n'), /history rollback/);
});

test('transaction boundaries validate transaction telemetry and failure information', () => {
  const descriptor = new TransactionBoundariesDescriptor();
  const telemetry = new TransactionTelemetryRecord({
    transactionId: 'txn-1',
    correlationId: 'corr-1',
    serviceOwner: 'Booking Service',
    businessOperation: 'Create Reservation',
    startTime: '2026-08-01T00:00:00.000Z',
    completionTime: '2026-08-01T00:00:00.100Z',
    durationMs: 100,
    result: TRANSACTION_RESULTS.COMMITTED
  });
  const invalid = descriptor.validateTelemetry({
    transactionId: 'txn-1',
    correlationId: 'corr-1',
    serviceOwner: 'Booking Service',
    businessOperation: 'Create Reservation',
    startTime: '2026-08-01T00:00:00.000Z',
    completionTime: '2026-08-01T00:00:00.100Z',
    durationMs: -1,
    result: TRANSACTION_RESULTS.FAILED
  });

  assert.equal(descriptor.validateTelemetry(telemetry).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /duration/);
  assert.match(invalid.errors.join('\n'), /failure information/);
});

test('transaction boundaries descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDataFlow(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('TransactionBoundariesDescriptor');

  assert.ok(descriptor instanceof TransactionBoundariesDescriptor);
  assert.equal(descriptor.describeLifecycle().length, 7);
});
