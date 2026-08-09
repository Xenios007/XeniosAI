import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS,
  BOUNDED_CONTEXT_ISOLATION_ASPECTS,
  BOUNDED_CONTEXT_NAMES,
  BOUNDED_CONTEXT_PRINCIPLES,
  BoundedContext,
  BoundedContextRegistry,
  ContextCollaboration,
  ContextConceptOwnership,
  ContextIsolationRecord,
  DOMAIN_MODEL_ERROR_CODES,
  addDomainModel
} from '../../src/domain-model/index.js';

test('bounded context registry exposes context principles and communication mechanisms', () => {
  const registry = new BoundedContextRegistry();

  assert.ok(registry.principles().includes(BOUNDED_CONTEXT_PRINCIPLES.ONE_AUTHORITATIVE_OWNER));
  assert.ok(registry.principles().includes(BOUNDED_CONTEXT_PRINCIPLES.EVOLVES_INDEPENDENTLY));
  assert.ok(registry.communicationMechanisms().includes(BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS.EVENTS));
  assert.ok(registry.isolationAspects().includes(BOUNDED_CONTEXT_ISOLATION_ASPECTS.STATE_TRANSITIONS));
});

test('bounded context registry registers documented primary contexts', () => {
  const registry = new BoundedContextRegistry();

  assert.deepEqual(registry.listContexts().map((context) => context.contextName), [
    BOUNDED_CONTEXT_NAMES.RESERVATION,
    BOUNDED_CONTEXT_NAMES.PROPERTY,
    BOUNDED_CONTEXT_NAMES.GUEST,
    BOUNDED_CONTEXT_NAMES.PRICING,
    BOUNDED_CONTEXT_NAMES.PAYMENT,
    BOUNDED_CONTEXT_NAMES.NOTIFICATION,
    BOUNDED_CONTEXT_NAMES.IDENTITY,
    BOUNDED_CONTEXT_NAMES.KNOWLEDGE,
    BOUNDED_CONTEXT_NAMES.WORKFLOW,
    BOUNDED_CONTEXT_NAMES.PLATFORM
  ]);
});

test('bounded context registry preserves documented context responsibilities', () => {
  const registry = new BoundedContextRegistry();

  assert.ok(registry.getContext(BOUNDED_CONTEXT_NAMES.RESERVATION).businessCapabilities.includes('Reservation lifecycle'));
  assert.ok(registry.getContext(BOUNDED_CONTEXT_NAMES.PROPERTY).businessCapabilities.includes('Availability management'));
  assert.ok(registry.getContext(BOUNDED_CONTEXT_NAMES.PAYMENT).businessCapabilities.includes('Payment settlement'));
  assert.ok(registry.getContext(BOUNDED_CONTEXT_NAMES.KNOWLEDGE).businessCapabilities.includes('Semantic search'));
  assert.ok(registry.getContext(BOUNDED_CONTEXT_NAMES.PLATFORM).businessCapabilities.includes('Observability'));
});

test('bounded context registry preserves concept ownership with one authoritative context', () => {
  const registry = new BoundedContextRegistry();

  assert.equal(registry.getConceptOwner('Reservation').contextName, BOUNDED_CONTEXT_NAMES.RESERVATION);
  assert.equal(registry.getConceptOwner('Guest').contextName, BOUNDED_CONTEXT_NAMES.GUEST);
  assert.equal(registry.getConceptOwner('Property').contextName, BOUNDED_CONTEXT_NAMES.PROPERTY);
  assert.equal(registry.getConceptOwner('Price').contextName, BOUNDED_CONTEXT_NAMES.PRICING);
  assert.equal(registry.getConceptOwner('Payment').contextName, BOUNDED_CONTEXT_NAMES.PAYMENT);
  assert.equal(registry.getConceptOwner('Notification').contextName, BOUNDED_CONTEXT_NAMES.NOTIFICATION);
});

test('bounded context registry rejects incomplete contexts and shared ownership', () => {
  assert.throws(
    () =>
      new BoundedContextRegistry({
        contexts: [
          new BoundedContext({
            contextName: 'Invalid',
            primaryResponsibility: '',
            ownerService: ['Booking Service', 'Pricing Service'],
            businessCapabilities: [],
            terminology: [],
            exposesContracts: false,
            sharedOwnership: true,
            duplicatesOtherContextData: true
          })
        ],
        collaborations: []
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.BOUNDED_CONTEXT_INVALID &&
      error.details.errors.some((message) => message.includes('ownership')) &&
      error.details.errors.some((message) => message.includes('business capability')) &&
      error.details.errors.some((message) => message.includes('explicit contracts'))
  );
});

test('bounded context registry rejects multiple owners for one business concept', () => {
  const registry = new BoundedContextRegistry();

  assert.throws(
    () =>
      registry.registerConceptOwnership(
        new ContextConceptOwnership({
          conceptName: 'Reservation',
          contextName: BOUNDED_CONTEXT_NAMES.PRICING,
          ownerService: 'Pricing Service'
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.BOUNDED_CONTEXT_OWNERSHIP_INVALID
  );
});

test('bounded context registry validates explicit contract-based collaboration', () => {
  const registry = new BoundedContextRegistry();

  assert.equal(registry.listCollaborations().length, 5);
  assert.throws(
    () =>
      registry.registerCollaboration(
        new ContextCollaboration({
          sourceContext: BOUNDED_CONTEXT_NAMES.PRICING,
          targetContext: BOUNDED_CONTEXT_NAMES.RESERVATION,
          interaction: 'Pricing modifies reservation state.',
          mechanism: BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS.COMMANDS,
          description: 'Invalid direct state update.',
          directDatabaseSharing: true,
          modifiesTargetState: true,
          assumesTargetResponsibility: true,
          implementationDependency: true
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.BOUNDED_CONTEXT_COLLABORATION_INVALID &&
      error.details.errors.some((message) => message.includes('Direct database sharing')) &&
      error.details.errors.some((message) => message.includes('owning context'))
  );
});

test('bounded context registry validates context isolation aspects', () => {
  const registry = new BoundedContextRegistry();
  const valid = registry.validateIsolation(
    new ContextIsolationRecord({
      contextName: BOUNDED_CONTEXT_NAMES.RESERVATION,
      isolatedAspects: Object.values(BOUNDED_CONTEXT_ISOLATION_ASPECTS)
    })
  );
  const invalid = registry.validateIsolation({
    contextName: BOUNDED_CONTEXT_NAMES.RESERVATION,
    isolatedAspects: [BOUNDED_CONTEXT_ISOLATION_ASPECTS.BUSINESS_RULES],
    sharesImplementation: true,
    sharesDatabase: true,
    sharesLifecycle: true,
    terminologyConflated: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /data-ownership/);
  assert.match(invalid.errors.join('\n'), /share databases/);
  assert.match(invalid.errors.join('\n'), /independent lifecycles/);
});

test('bounded context registry reports unknown contexts without inventing them', () => {
  const registry = new BoundedContextRegistry();

  assert.throws(
    () => registry.getContext('Billing'),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.BOUNDED_CONTEXT_NOT_FOUND
  );
});

test('bounded context registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addDomainModel(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('BoundedContextRegistry');

  assert.ok(registry instanceof BoundedContextRegistry);
  assert.equal(registry.listContexts().length, 10);
});
