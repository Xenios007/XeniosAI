import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AGGREGATE_NAMES,
  DOMAIN_EVENT_NAMES,
  DOMAIN_LIFECYCLE_CHARACTERISTICS,
  DOMAIN_LIFECYCLE_NAMES,
  DOMAIN_LIFECYCLE_SEQUENCE_STEPS,
  DOMAIN_LIFECYCLE_STATES,
  DOMAIN_MODEL_ERROR_CODES,
  FUTURE_DOMAIN_LIFECYCLE_CANDIDATES,
  DomainLifecycleDefinition,
  DomainLifecycleHistory,
  DomainLifecycleRegistry,
  DomainLifecycleSequence,
  DomainLifecycleTransition,
  addDomainModel
} from '../../src/domain-model/index.js';

test('domain lifecycle registry exposes lifecycle characteristics and consistency sequence', () => {
  const registry = new DomainLifecycleRegistry();

  assert.ok(registry.characteristics().includes(DOMAIN_LIFECYCLE_CHARACTERISTICS.BEGINS_WITH_CREATION));
  assert.ok(registry.characteristics().includes(DOMAIN_LIFECYCLE_CHARACTERISTICS.PRESERVES_BUSINESS_HISTORY));
  assert.ok(registry.characteristics().includes(DOMAIN_LIFECYCLE_CHARACTERISTICS.BUSINESS_EVOLUTION_NOT_TECHNICAL_PROCESSING));
  assert.deepEqual(registry.canonicalSequence(), [
    DOMAIN_LIFECYCLE_SEQUENCE_STEPS.BUSINESS_RULE_VALIDATION,
    DOMAIN_LIFECYCLE_SEQUENCE_STEPS.AGGREGATE_VALIDATION,
    DOMAIN_LIFECYCLE_SEQUENCE_STEPS.STATE_TRANSITION,
    DOMAIN_LIFECYCLE_SEQUENCE_STEPS.TRANSACTION_COMMIT,
    DOMAIN_LIFECYCLE_SEQUENCE_STEPS.DOMAIN_EVENT
  ]);
});

test('domain lifecycle registry registers documented aggregate-owned lifecycles', () => {
  const registry = new DomainLifecycleRegistry();

  assert.deepEqual(registry.listLifecycles().map((lifecycle) => lifecycle.lifecycleName), [
    DOMAIN_LIFECYCLE_NAMES.RESERVATION,
    DOMAIN_LIFECYCLE_NAMES.PAYMENT,
    DOMAIN_LIFECYCLE_NAMES.GUEST,
    DOMAIN_LIFECYCLE_NAMES.PROPERTY,
    DOMAIN_LIFECYCLE_NAMES.WORKFLOW
  ]);
  assert.equal(registry.getLifecycle(DOMAIN_LIFECYCLE_NAMES.RESERVATION).aggregateName, AGGREGATE_NAMES.RESERVATION);
  assert.equal(registry.getLifecycle(DOMAIN_LIFECYCLE_NAMES.PAYMENT).aggregateRoot, 'Payment');
});

test('domain lifecycle registry preserves documented states, terminal states, and events', () => {
  const registry = new DomainLifecycleRegistry();
  const reservation = registry.getLifecycle(DOMAIN_LIFECYCLE_NAMES.RESERVATION);
  const workflow = registry.getLifecycle(DOMAIN_LIFECYCLE_NAMES.WORKFLOW);

  assert.ok(reservation.validStates.includes(DOMAIN_LIFECYCLE_STATES.CHECKED_OUT));
  assert.ok(reservation.terminalStates.includes(DOMAIN_LIFECYCLE_STATES.CANCELLED));
  assert.equal(reservation.lifecycleEvents[DOMAIN_LIFECYCLE_STATES.CONFIRMED], DOMAIN_EVENT_NAMES.RESERVATION_CONFIRMED);
  assert.ok(workflow.terminalStates.includes(DOMAIN_LIFECYCLE_STATES.COMPENSATED));
  assert.equal(workflow.lifecycleEvents[DOMAIN_LIFECYCLE_STATES.FAILED], DOMAIN_EVENT_NAMES.WORKFLOW_FAILED);
});

test('domain lifecycle registry rejects invalid technical lifecycle definitions', () => {
  assert.throws(
    () =>
      new DomainLifecycleRegistry({
        lifecycles: [
          new DomainLifecycleDefinition({
            lifecycleName: 'Database State Machine',
            aggregateName: '',
            aggregateRoot: '',
            initialState: 'Inserted',
            validStates: [],
            transitions: {
              Inserted: ['Updated'],
              Completed: ['Updated']
            },
            terminalStates: ['Completed'],
            lifecycleEvents: {},
            technologyIndependent: false,
            preservesHistory: false,
            externalStateMutationAllowed: true,
            technicalProcess: true
          })
        ]
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_LIFECYCLE_DEFINITION_INVALID &&
      error.details.errors.some((message) => message.includes('Aggregate Root')) &&
      error.details.errors.some((message) => message.includes('valid business states')) &&
      error.details.errors.some((message) => message.includes('meaningful Domain Events')) &&
      error.details.errors.some((message) => message.includes('technical processing')) &&
      error.details.errors.some((message) => message.includes('ubiquitous business language'))
  );
});

test('domain lifecycle registry validates legal transitions through aggregate roots', () => {
  const registry = new DomainLifecycleRegistry();
  const valid = registry.validateTransition(
    new DomainLifecycleTransition({
      lifecycleName: DOMAIN_LIFECYCLE_NAMES.RESERVATION,
      aggregateName: AGGREGATE_NAMES.RESERVATION,
      aggregateRoot: 'Reservation',
      fromState: DOMAIN_LIFECYCLE_STATES.PENDING,
      toState: DOMAIN_LIFECYCLE_STATES.CONFIRMED,
      businessAction: 'Confirm Reservation',
      domainEvent: DOMAIN_EVENT_NAMES.RESERVATION_CONFIRMED
    })
  );
  const invalid = registry.validateTransition({
    lifecycleName: DOMAIN_LIFECYCLE_NAMES.RESERVATION,
    aggregateName: AGGREGATE_NAMES.PAYMENT,
    aggregateRoot: 'Payment',
    fromState: DOMAIN_LIFECYCLE_STATES.CHECKED_OUT,
    toState: DOMAIN_LIFECYCLE_STATES.PENDING,
    businessAction: '',
    domainEvent: '',
    businessRulesSatisfied: false,
    aggregateConsistencySatisfied: false,
    invariantsPreserved: false,
    requestedByAggregateRoot: false,
    rewritesHistory: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Reservation/);
  assert.match(invalid.errors.join('\n'), /not permitted/);
  assert.match(invalid.errors.join('\n'), /business rule validation/);
  assert.match(invalid.errors.join('\n'), /No external component/);
});

test('domain lifecycle registry validates historical state progression without rewrites', () => {
  const registry = new DomainLifecycleRegistry();
  const valid = registry.validateHistory(
    new DomainLifecycleHistory({
      lifecycleName: DOMAIN_LIFECYCLE_NAMES.PAYMENT,
      aggregateId: 'payment-1',
      states: [
        DOMAIN_LIFECYCLE_STATES.INITIATED,
        DOMAIN_LIFECYCLE_STATES.AUTHORIZED,
        DOMAIN_LIFECYCLE_STATES.CAPTURED,
        DOMAIN_LIFECYCLE_STATES.SETTLED,
        DOMAIN_LIFECYCLE_STATES.REFUNDED
      ],
      events: [
        DOMAIN_EVENT_NAMES.PAYMENT_INITIATED,
        DOMAIN_EVENT_NAMES.PAYMENT_AUTHORIZED,
        DOMAIN_EVENT_NAMES.PAYMENT_CAPTURED,
        DOMAIN_EVENT_NAMES.PAYMENT_REFUNDED
      ]
    })
  );
  const invalid = registry.validateHistory({
    lifecycleName: DOMAIN_LIFECYCLE_NAMES.RESERVATION,
    aggregateId: '',
    states: [
      DOMAIN_LIFECYCLE_STATES.CREATED,
      DOMAIN_LIFECYCLE_STATES.CONFIRMED,
      DOMAIN_LIFECYCLE_STATES.PENDING
    ],
    events: [],
    preservesHistory: false,
    rewritesHistory: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Aggregate business identity/);
  assert.match(invalid.errors.join('\n'), /should never be rewritten/);
  assert.match(invalid.errors.join('\n'), /illegal transition/);
});

test('domain lifecycle registry validates lifecycle consistency ordering', () => {
  const registry = new DomainLifecycleRegistry();
  const valid = registry.validateSequence(
    new DomainLifecycleSequence({
      steps: registry.canonicalSequence()
    })
  );
  const invalid = registry.validateSequence({
    steps: [
      DOMAIN_LIFECYCLE_SEQUENCE_STEPS.STATE_TRANSITION,
      DOMAIN_LIFECYCLE_SEQUENCE_STEPS.DOMAIN_EVENT
    ],
    rulesBeforeTransition: false,
    aggregateBeforeTransition: false,
    eventAfterCommit: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /5 steps/);
  assert.match(invalid.errors.join('\n'), /Business Rule Validation/);
  assert.match(invalid.errors.join('\n'), /Aggregate Validation/);
  assert.match(invalid.errors.join('\n'), /after Transaction Commit/);
});

test('domain lifecycle registry reports future candidates without implementing them', () => {
  const registry = new DomainLifecycleRegistry();

  assert.ok(registry.futureCandidates().includes(FUTURE_DOMAIN_LIFECYCLE_CANDIDATES.LOYALTY_MEMBERSHIP));
  assert.ok(registry.futureCandidates().includes(FUTURE_DOMAIN_LIFECYCLE_CANDIDATES.AI_AGENT));
  assert.throws(
    () => registry.getLifecycle('Invoice Lifecycle'),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_LIFECYCLE_NOT_FOUND
  );
});

test('domain lifecycle registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addDomainModel(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('DomainLifecycleRegistry');

  assert.ok(registry instanceof DomainLifecycleRegistry);
  assert.equal(registry.listLifecycles().length, 5);
});
