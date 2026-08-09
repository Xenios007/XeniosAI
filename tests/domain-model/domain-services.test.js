import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  BOUNDED_CONTEXT_NAMES,
  DOMAIN_MODEL_ERROR_CODES,
  DOMAIN_SERVICE_CHARACTERISTICS,
  DOMAIN_SERVICE_COLLABORATION_TARGETS,
  DOMAIN_SERVICE_INTERACTION_RULES,
  DOMAIN_SERVICE_NAMES,
  FUTURE_DOMAIN_SERVICE_CANDIDATES,
  DomainServiceCollaboration,
  DomainServiceDefinition,
  DomainServiceOperation,
  DomainServiceRegistry,
  addDomainModel
} from '../../src/domain-model/index.js';

test('domain service registry exposes service characteristics and interaction rules', () => {
  const registry = new DomainServiceRegistry();

  assert.ok(registry.characteristics().includes(DOMAIN_SERVICE_CHARACTERISTICS.BUSINESS_BEHAVIOR));
  assert.ok(registry.characteristics().includes(DOMAIN_SERVICE_CHARACTERISTICS.STATELESS));
  assert.ok(registry.interactionRules().includes(DOMAIN_SERVICE_INTERACTION_RULES.NEVER_BYPASS_AGGREGATE_ROOTS));
  assert.ok(registry.collaborationTargets().includes(DOMAIN_SERVICE_COLLABORATION_TARGETS.VALUE_OBJECTS));
});

test('domain service registry registers documented services and bounded-context ownership', () => {
  const registry = new DomainServiceRegistry();

  assert.deepEqual(registry.listServices().map((service) => service.serviceName), [
    DOMAIN_SERVICE_NAMES.RESERVATION_VALIDATION,
    DOMAIN_SERVICE_NAMES.PRICING_CALCULATION,
    DOMAIN_SERVICE_NAMES.AVAILABILITY_EVALUATION,
    DOMAIN_SERVICE_NAMES.PAYMENT_AUTHORIZATION,
    DOMAIN_SERVICE_NAMES.NOTIFICATION_COMPOSITION,
    DOMAIN_SERVICE_NAMES.KNOWLEDGE_SERVICE
  ]);
  assert.equal(registry.getService(DOMAIN_SERVICE_NAMES.RESERVATION_VALIDATION).owningContext, BOUNDED_CONTEXT_NAMES.RESERVATION);
  assert.equal(registry.getService(DOMAIN_SERVICE_NAMES.PAYMENT_AUTHORIZATION).ownerService, 'Payment Service');
});

test('domain service registry preserves documented responsibilities and collaborators', () => {
  const registry = new DomainServiceRegistry();
  const reservation = registry.getService(DOMAIN_SERVICE_NAMES.RESERVATION_VALIDATION);
  const pricing = registry.getService(DOMAIN_SERVICE_NAMES.PRICING_CALCULATION);
  const knowledge = registry.getService(DOMAIN_SERVICE_NAMES.KNOWLEDGE_SERVICE);

  assert.ok(reservation.responsibilities.includes('Reservation eligibility'));
  assert.ok(reservation.collaborators.includes('Property'));
  assert.ok(pricing.businessOperations.includes('Calculate Price'));
  assert.ok(pricing.valueObjects.includes('Money'));
  assert.ok(knowledge.responsibilities.includes('Semantic matching'));
});

test('domain service registry rejects stateful, shared-context, application, and infrastructure definitions', () => {
  assert.throws(
    () =>
      new DomainServiceRegistry({
        domainServices: [
          new DomainServiceDefinition({
            serviceName: 'Invalid Domain Service',
            owningContext: ['Reservation', 'Payment'],
            ownerService: '',
            responsibilities: [],
            businessOperations: [],
            businessRules: [],
            stateless: false,
            ownsBusinessState: true,
            applicationService: true,
            infrastructureConcern: true,
            bypassesAggregateRoot: true
          })
        ]
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_SERVICE_DEFINITION_INVALID &&
      error.details.errors.some((message) => message.includes('must not be shared')) &&
      error.details.errors.some((message) => message.includes('stateless')) &&
      error.details.errors.some((message) => message.includes('business reasoning')) &&
      error.details.errors.some((message) => message.includes('technical infrastructure')) &&
      error.details.errors.some((message) => message.includes('Aggregate Roots'))
  );
});

test('domain service registry validates business operations without application coordination', () => {
  const registry = new DomainServiceRegistry();
  const valid = registry.validateOperation(
    new DomainServiceOperation({
      serviceName: DOMAIN_SERVICE_NAMES.RESERVATION_VALIDATION,
      operationName: 'Evaluate Reservation Eligibility',
      owningContext: BOUNDED_CONTEXT_NAMES.RESERVATION,
      inputs: ['Reservation', 'Property', 'Date Range', 'Guest Count'],
      businessRules: ['Reservation policies']
    })
  );
  const invalid = registry.validateOperation({
    serviceName: DOMAIN_SERVICE_NAMES.PAYMENT_AUTHORIZATION,
    operationName: '',
    owningContext: BOUNDED_CONTEXT_NAMES.RESERVATION,
    inputs: [],
    businessRules: [],
    modifiesAggregateThroughRoot: false,
    ownsBusinessState: true,
    coordinatesApplicationFlow: true,
    invokesInfrastructure: true,
    bypassesAggregateRoot: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Payment/);
  assert.match(invalid.errors.join('\n'), /Entities, Aggregates, or Value Objects/);
  assert.match(invalid.errors.join('\n'), /Application Services coordinate execution/);
  assert.match(invalid.errors.join('\n'), /infrastructure concerns/);
});

test('domain service registry validates aggregate-boundary-respecting collaboration', () => {
  const registry = new DomainServiceRegistry();
  const valid = registry.validateCollaboration(
    new DomainServiceCollaboration({
      serviceName: DOMAIN_SERVICE_NAMES.AVAILABILITY_EVALUATION,
      collaboratorName: 'Property',
      collaboratorType: DOMAIN_SERVICE_COLLABORATION_TARGETS.AGGREGATES,
      interaction: 'Read availability and capacity state'
    })
  );
  const invalid = registry.validateCollaboration({
    serviceName: DOMAIN_SERVICE_NAMES.RESERVATION_VALIDATION,
    collaboratorName: '',
    collaboratorType: 'database',
    interaction: '',
    throughAggregateRoot: false,
    transfersOwnership: true,
    sharedState: true,
    crossesBoundedContext: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /domain collaborator/);
  assert.match(invalid.errors.join('\n'), /Unsupported Domain Service collaborator type/);
  assert.match(invalid.errors.join('\n'), /Aggregate Root boundaries/);
  assert.match(invalid.errors.join('\n'), /one bounded context/);
});

test('domain service registry reports future candidates without implementing them', () => {
  const registry = new DomainServiceRegistry();

  assert.ok(registry.futureCandidates().includes(FUTURE_DOMAIN_SERVICE_CANDIDATES.RECOMMENDATION_SERVICE));
  assert.ok(registry.futureCandidates().includes(FUTURE_DOMAIN_SERVICE_CANDIDATES.DYNAMIC_PRICING_OPTIMIZATION_SERVICE));
  assert.throws(
    () => registry.getService('Recommendation Service'),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_SERVICE_NOT_FOUND
  );
});

test('domain service registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addDomainModel(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('DomainServiceRegistry');

  assert.ok(registry instanceof DomainServiceRegistry);
  assert.equal(registry.listServices().length, 6);
});
