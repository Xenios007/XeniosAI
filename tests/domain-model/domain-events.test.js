import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AGGREGATE_NAMES,
  BOUNDED_CONTEXT_NAMES,
  DOMAIN_EVENT_CHARACTERISTICS,
  DOMAIN_EVENT_EVOLUTION_RULES,
  DOMAIN_EVENT_NAMES,
  DOMAIN_EVENT_PUBLICATION_RULES,
  DOMAIN_MODEL_ERROR_CODES,
  FUTURE_DOMAIN_EVENT_CANDIDATES,
  DomainEventConsumption,
  DomainEventDefinition,
  DomainEventOrdering,
  DomainEventRecord,
  DomainEventRegistry,
  addDomainModel
} from '../../src/domain-model/index.js';

test('domain event registry exposes characteristics, publication rules, and evolution rules', () => {
  const registry = new DomainEventRegistry();

  assert.ok(registry.characteristics().includes(DOMAIN_EVENT_CHARACTERISTICS.COMPLETED_BUSINESS_FACT));
  assert.ok(registry.characteristics().includes(DOMAIN_EVENT_CHARACTERISTICS.IMMUTABLE));
  assert.ok(registry.publicationRules().includes(DOMAIN_EVENT_PUBLICATION_RULES.AFTER_SUCCESSFUL_TRANSACTION));
  assert.ok(registry.evolutionRules().includes(DOMAIN_EVENT_EVOLUTION_RULES.ADDITIVE_EVOLUTION));
});

test('domain event registry registers documented event ownership examples', () => {
  const registry = new DomainEventRegistry();

  assert.equal(registry.getEvent(DOMAIN_EVENT_NAMES.RESERVATION_CREATED).owningContext, BOUNDED_CONTEXT_NAMES.RESERVATION);
  assert.equal(registry.getEvent(DOMAIN_EVENT_NAMES.PAYMENT_AUTHORIZED).publisherService, 'Payment Service');
  assert.equal(registry.getEvent(DOMAIN_EVENT_NAMES.GUEST_REGISTERED).owningContext, BOUNDED_CONTEXT_NAMES.GUEST);
  assert.equal(registry.getEvent(DOMAIN_EVENT_NAMES.PROPERTY_UPDATED).owningContext, BOUNDED_CONTEXT_NAMES.PROPERTY);
  assert.equal(registry.getEvent(DOMAIN_EVENT_NAMES.NOTIFICATION_DELIVERED).owningContext, BOUNDED_CONTEXT_NAMES.NOTIFICATION);
  assert.equal(registry.getEvent(DOMAIN_EVENT_NAMES.KNOWLEDGE_INDEXED).owningContext, BOUNDED_CONTEXT_NAMES.KNOWLEDGE);
  assert.equal(registry.getEvent(DOMAIN_EVENT_NAMES.WORKFLOW_STARTED).owningContext, BOUNDED_CONTEXT_NAMES.WORKFLOW);
});

test('domain event registry preserves documented lifecycle event groups', () => {
  const registry = new DomainEventRegistry();
  const eventNames = registry.listEvents().map((event) => event.eventName);

  assert.ok(eventNames.includes(DOMAIN_EVENT_NAMES.RESERVATION_CONFIRMED));
  assert.ok(eventNames.includes(DOMAIN_EVENT_NAMES.RESERVATION_CHECKED_IN));
  assert.ok(eventNames.includes(DOMAIN_EVENT_NAMES.PAYMENT_REFUNDED));
  assert.ok(eventNames.includes(DOMAIN_EVENT_NAMES.MAINTENANCE_SCHEDULED));
  assert.ok(eventNames.includes(DOMAIN_EVENT_NAMES.COMPENSATION_COMPLETED));
});

test('domain event registry rejects non-business, mutable, shared-publisher definitions', () => {
  assert.throws(
    () =>
      new DomainEventRegistry({
        domainEvents: [
          new DomainEventDefinition({
            eventName: 'Database Row Modified',
            owningContext: ['Reservation', 'Payment'],
            publisherService: ['Booking Service', 'Payment Service'],
            aggregateName: '',
            businessMeaning: 'database payload changed',
            businessIdentifier: '',
            requiredFacts: [],
            immutable: false,
            completedFact: false,
            implementationDetail: true,
            publisherShared: true
          })
        ]
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_EVENT_DEFINITION_INVALID &&
      error.details.errors.some((message) => message.includes('owning context must not be shared')) &&
      error.details.errors.some((message) => message.includes('publisher must not be shared')) &&
      error.details.errors.some((message) => message.includes('immutable')) &&
      error.details.errors.some((message) => message.includes('implementation details')) &&
      error.details.errors.some((message) => message.includes('ubiquitous language'))
  );
});

test('domain event registry publishes immutable completed business facts only after consistency', () => {
  const registry = new DomainEventRegistry();
  const record = registry.publish(
    new DomainEventRecord({
      eventId: 'event-1',
      eventName: DOMAIN_EVENT_NAMES.RESERVATION_CREATED,
      occurredAt: '2026-08-01T00:00:00.000Z',
      owningContext: BOUNDED_CONTEXT_NAMES.RESERVATION,
      publisherService: 'Booking Service',
      aggregateName: AGGREGATE_NAMES.RESERVATION,
      aggregateId: 'reservation-1',
      correlationId: 'corr-1',
      facts: {
        reservationId: 'reservation-1',
        guestId: 'guest-1',
        propertyId: 'property-1',
        occurredAt: '2026-08-01T00:00:00.000Z'
      }
    })
  );

  assert.equal(record.eventName, DOMAIN_EVENT_NAMES.RESERVATION_CREATED);
  assert.throws(() => {
    record.facts.guestId = 'changed';
  });
});

test('domain event registry rejects invalid publication records', () => {
  const registry = new DomainEventRegistry();

  assert.throws(
    () =>
      registry.publish({
        eventId: '',
        eventName: DOMAIN_EVENT_NAMES.PAYMENT_AUTHORIZED,
        eventVersion: 99,
        occurredAt: '',
        owningContext: BOUNDED_CONTEXT_NAMES.RESERVATION,
        publisherService: 'Booking Service',
        aggregateName: AGGREGATE_NAMES.RESERVATION,
        aggregateId: '',
        completedBusinessFact: false,
        businessConsistencyAchieved: false,
        transactionCommitted: false,
        publisherAwareOfConsumers: true,
        mutable: true,
        facts: {
          paymentId: 'payment-1'
        }
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_EVENT_PUBLICATION_INVALID &&
      error.details.errors.some((message) => message.includes('Payment')) &&
      error.details.errors.some((message) => message.includes('successful transaction')) &&
      error.details.errors.some((message) => message.includes('what happened')) &&
      error.details.errors.some((message) => message.includes('missing required fact'))
  );
});

test('domain event registry validates independent event consumption', () => {
  const registry = new DomainEventRegistry();
  const valid = registry.validateConsumption(
    new DomainEventConsumption({
      eventName: DOMAIN_EVENT_NAMES.RESERVATION_CREATED,
      consumerContext: BOUNDED_CONTEXT_NAMES.PAYMENT,
      consumerService: 'Payment Service',
      supportedVersions: [1]
    })
  );
  const invalid = registry.validateConsumption({
    eventName: DOMAIN_EVENT_NAMES.RESERVATION_CREATED,
    consumerContext: BOUNDED_CONTEXT_NAMES.RESERVATION,
    consumerService: '',
    supportedVersions: [],
    independentlyRelevant: false,
    localDecisionOnly: false,
    modifiesPublisherState: true,
    assumesGlobalOrdering: true,
    requiredAction: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /outside the publishing ownership boundary/);
  assert.match(invalid.errors.join('\n'), /support version/);
  assert.match(invalid.errors.join('\n'), /must not modify publisher-owned business state/);
  assert.match(invalid.errors.join('\n'), /not a required downstream action/);
});

test('domain event registry validates aggregate-local ordering without global ordering assumptions', () => {
  const registry = new DomainEventRegistry();
  const valid = registry.validateOrdering(
    new DomainEventOrdering({
      aggregateName: AGGREGATE_NAMES.RESERVATION,
      orderedEvents: [
        DOMAIN_EVENT_NAMES.RESERVATION_CREATED,
        DOMAIN_EVENT_NAMES.RESERVATION_CONFIRMED,
        DOMAIN_EVENT_NAMES.RESERVATION_CHECKED_IN
      ]
    })
  );
  const invalid = registry.validateOrdering({
    aggregateName: AGGREGATE_NAMES.RESERVATION,
    orderedEvents: [
      DOMAIN_EVENT_NAMES.RESERVATION_CHECKED_OUT,
      DOMAIN_EVENT_NAMES.RESERVATION_CREATED,
      DOMAIN_EVENT_NAMES.PAYMENT_AUTHORIZED
    ],
    assumesGlobalOrdering: true,
    preservesAggregateOrder: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Global ordering/);
  assert.match(invalid.errors.join('\n'), /outside Reservation/);
  assert.match(invalid.errors.join('\n'), /business lifecycle order/);
});

test('domain event registry reports future candidates without implementing them', () => {
  const registry = new DomainEventRegistry();

  assert.ok(registry.futureCandidates().includes(FUTURE_DOMAIN_EVENT_CANDIDATES.PROMOTION_APPLIED));
  assert.ok(registry.futureCandidates().includes(FUTURE_DOMAIN_EVENT_CANDIDATES.AI_RECOMMENDATION_GENERATED));
  assert.throws(
    () => registry.getEvent('Promotion Applied'),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_EVENT_NOT_FOUND
  );
});

test('domain event registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addDomainModel(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('DomainEventRegistry');

  assert.ok(registry instanceof DomainEventRegistry);
  assert.equal(registry.listEvents().length, 34);
});
