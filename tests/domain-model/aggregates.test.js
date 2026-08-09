import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AGGREGATE_COLLABORATION_MECHANISMS,
  AGGREGATE_NAMES,
  AGGREGATE_PRINCIPLES,
  AGGREGATE_REFERENCE_RULES,
  BOUNDED_CONTEXT_NAMES,
  DOMAIN_MODEL_ERROR_CODES,
  FUTURE_AGGREGATE_CANDIDATES,
  AggregateDefinition,
  AggregateInvariantCheck,
  AggregateReference,
  AggregateRegistry,
  AggregateTransactionScope,
  addDomainModel
} from '../../src/domain-model/index.js';

test('aggregate registry exposes aggregate principles, reference rules, and collaboration mechanisms', () => {
  const registry = new AggregateRegistry();

  assert.ok(registry.principles().includes(AGGREGATE_PRINCIPLES.ONE_AGGREGATE_ROOT));
  assert.ok(registry.principles().includes(AGGREGATE_PRINCIPLES.TRANSACTIONALLY_CONSISTENT));
  assert.ok(registry.referenceRules().includes(AGGREGATE_REFERENCE_RULES.IDENTITY_ONLY));
  assert.ok(registry.collaborationMechanisms().includes(AGGREGATE_COLLABORATION_MECHANISMS.WORKFLOWS));
});

test('aggregate registry registers documented aggregates and ownership contexts', () => {
  const registry = new AggregateRegistry();

  assert.deepEqual(registry.listAggregates().map((aggregate) => aggregate.aggregateName), [
    AGGREGATE_NAMES.RESERVATION,
    AGGREGATE_NAMES.GUEST,
    AGGREGATE_NAMES.PROPERTY,
    AGGREGATE_NAMES.PAYMENT,
    AGGREGATE_NAMES.WORKFLOW
  ]);
  assert.equal(registry.getAggregate(AGGREGATE_NAMES.RESERVATION).owningContext, BOUNDED_CONTEXT_NAMES.RESERVATION);
  assert.equal(registry.getAggregate(AGGREGATE_NAMES.PAYMENT).ownerService, 'Payment Service');
});

test('aggregate registry preserves documented aggregate members and invariants', () => {
  const registry = new AggregateRegistry();
  const reservation = registry.getAggregate(AGGREGATE_NAMES.RESERVATION);
  const property = registry.getAggregate(AGGREGATE_NAMES.PROPERTY);
  const payment = registry.getAggregate(AGGREGATE_NAMES.PAYMENT);

  assert.ok(reservation.internalEntities.includes('Reservation Line'));
  assert.ok(reservation.valueObjects.includes('Date Range'));
  assert.ok(reservation.invariants.includes('Capacity is respected'));
  assert.ok(property.invariants.includes('Capacity is positive'));
  assert.ok(payment.invariants.includes('Refunds cannot exceed settled value'));
});

test('aggregate registry rejects shared ownership, missing root, external root containment, and persistence modeling', () => {
  assert.throws(
    () =>
      new AggregateRegistry({
        aggregates: [
          new AggregateDefinition({
            aggregateName: 'Invalid Aggregate',
            owningContext: ['Reservation', 'Payment'],
            ownerService: '',
            aggregateRoot: '',
            invariants: [],
            sharedOwnership: true,
            containsExternalAggregateRoot: true,
            persistenceModel: true
          })
        ]
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.AGGREGATE_DEFINITION_INVALID &&
      error.details.errors.some((message) => message.includes('Aggregate Root')) &&
      error.details.errors.some((message) => message.includes('never be shared')) &&
      error.details.errors.some((message) => message.includes('database design'))
  );
});

test('aggregate registry validates identity-only aggregate references', () => {
  const registry = new AggregateRegistry();
  const valid = registry.validateReference(
    new AggregateReference({
      sourceAggregate: AGGREGATE_NAMES.RESERVATION,
      targetAggregate: AGGREGATE_NAMES.GUEST,
      referenceName: 'Reservation references Guest ID',
      targetIdentity: 'Guest ID'
    })
  );
  const invalid = registry.validateReference({
    sourceAggregate: AGGREGATE_NAMES.RESERVATION,
    targetAggregate: AGGREGATE_NAMES.PAYMENT,
    referenceName: 'Reservation embeds Payment',
    targetIdentity: '',
    containsTargetRoot: true,
    transfersOwnership: true,
    directObjectReference: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /target business identity/);
  assert.match(invalid.errors.join('\n'), /direct object reference/);
  assert.match(invalid.errors.join('\n'), /ownership transfer/);
});

test('aggregate registry validates single-aggregate transaction consistency boundaries', () => {
  const registry = new AggregateRegistry();
  const valid = registry.validateTransactionScope(
    new AggregateTransactionScope({
      transactionName: 'Create Reservation',
      aggregateName: AGGREGATE_NAMES.RESERVATION,
      modifiedAggregates: [AGGREGATE_NAMES.RESERVATION],
      crossAggregateCoordination: [
        AGGREGATE_COLLABORATION_MECHANISMS.EVENTS,
        AGGREGATE_COLLABORATION_MECHANISMS.WORKFLOWS
      ]
    })
  );
  const invalid = registry.validateTransactionScope({
    transactionName: 'Create Reservation And Payment',
    aggregateName: AGGREGATE_NAMES.RESERVATION,
    modifiedAggregates: [AGGREGATE_NAMES.RESERVATION, AGGREGATE_NAMES.PAYMENT],
    modifiedThroughRoot: false,
    invariantsPreserved: false,
    crossAggregateCoordination: ['shared-database'],
    sharedTransaction: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /only one Aggregate/);
  assert.match(invalid.errors.join('\n'), /Aggregate Root/);
  assert.match(invalid.errors.join('\n'), /shared transactions/);
});

test('aggregate registry validates invariant enforcement by aggregate root', () => {
  const registry = new AggregateRegistry();
  const valid = registry.validateInvariant(
    new AggregateInvariantCheck({
      aggregateName: AGGREGATE_NAMES.PAYMENT,
      invariant: 'Refunds cannot exceed settled value',
      aggregateRoot: 'Payment'
    })
  );
  const invalid = registry.validateInvariant({
    aggregateName: AGGREGATE_NAMES.PAYMENT,
    invariant: '',
    aggregateRoot: 'Reservation',
    checkedByRoot: false,
    preserved: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Payment/);
  assert.match(invalid.errors.join('\n'), /must identify an invariant/);
  assert.match(invalid.errors.join('\n'), /must be preserved/);
});

test('aggregate registry reports future aggregate candidates without implementing them', () => {
  const registry = new AggregateRegistry();

  assert.ok(registry.futureCandidates().includes(FUTURE_AGGREGATE_CANDIDATES.INVOICE));
  assert.ok(registry.futureCandidates().includes(FUTURE_AGGREGATE_CANDIDATES.AI_AGENT));
  assert.throws(
    () => registry.getAggregate('Invoice'),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.AGGREGATE_NOT_FOUND
  );
});

test('aggregate registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addDomainModel(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('AggregateRegistry');

  assert.ok(registry instanceof AggregateRegistry);
  assert.equal(registry.listAggregates().length, 5);
});
