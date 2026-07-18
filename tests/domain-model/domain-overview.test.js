import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DOMAIN_BOUNDARY_RULES,
  DOMAIN_CONSISTENCY_MODELS,
  DOMAIN_MODEL_ERROR_CODES,
  DOMAIN_MODELING_PRINCIPLES,
  DOMAIN_RELATIONSHIP_TYPES,
  DomainCapability,
  DomainConcept,
  DomainDescriptor,
  DomainOverviewDescriptor,
  DomainRelationship,
  DomainStateModel,
  addDomainModel
} from '../../src/domain-model/index.js';

test('domain overview exposes platform domain principles and boundary rules', () => {
  const descriptor = new DomainOverviewDescriptor();

  assert.equal(descriptor.platformDomainName(), 'Platform Domain');
  assert.ok(descriptor.modelingPrinciples().includes(DOMAIN_MODELING_PRINCIPLES.MODEL_BUSINESS_NOT_IMPLEMENTATION));
  assert.ok(descriptor.boundaryRules().includes(DOMAIN_BOUNDARY_RULES.LOCAL_STATE_OWNERSHIP));
  assert.ok(descriptor.consistencyModels().includes(DOMAIN_CONSISTENCY_MODELS.CROSS_DOMAIN_COORDINATED));
});

test('domain overview registers documented domain hierarchy', () => {
  const descriptor = new DomainOverviewDescriptor();

  assert.deepEqual(descriptor.listDomains().map((domain) => domain.domainName), [
    'Reservation Domain',
    'Property Domain',
    'Guest Domain',
    'Pricing Domain',
    'Payment Domain',
    'Notification Domain',
    'Knowledge Domain',
    'Identity Domain',
    'Workflow Domain',
    'Platform Services Domain'
  ]);
});

test('domain overview registers documented ubiquitous language concepts', () => {
  const descriptor = new DomainOverviewDescriptor();

  assert.equal(descriptor.getConcept('Guest').meaning, 'A person interacting with the platform');
  assert.equal(descriptor.getConcept('Reservation').ownerService, 'Booking Service');
  assert.equal(descriptor.getConcept('Property').domainName, 'Property Domain');
  assert.equal(descriptor.getConcept('Payment').ownerService, 'Payment Service');
  assert.equal(descriptor.getConcept('Policy').domainName, 'Knowledge Domain');
});

test('domain overview preserves documented ownership examples', () => {
  const descriptor = new DomainOverviewDescriptor();

  assert.equal(descriptor.getDomain('Reservation Domain').ownerService, 'Booking Service');
  assert.equal(descriptor.getDomain('Property Domain').ownerService, 'Property Service');
  assert.equal(descriptor.getDomain('Pricing Domain').ownerService, 'Pricing Service');
  assert.equal(descriptor.getDomain('Payment Domain').ownerService, 'Payment Service');
  assert.equal(descriptor.getDomain('Notification Domain').ownerService, 'Notification Service');
  assert.throws(
    () => descriptor.getDomain('Unknown Domain'),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_NOT_FOUND
  );
});

test('domain overview rejects technical implementation terminology in domains and concepts', () => {
  assert.throws(
    () =>
      new DomainOverviewDescriptor({
        domains: [
          new DomainDescriptor({
            domainName: 'Technical Domain',
            ownerService: 'Technical Service',
            terminology: ['reservation database table']
          })
        ],
        concepts: [],
        relationships: []
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_OVERVIEW_INVALID
  );

  const descriptor = new DomainOverviewDescriptor();
  assert.throws(
    () =>
      descriptor.registerConcept(
        new DomainConcept({
          term: 'Reservation API Payload',
          meaning: 'Framework object',
          ownerService: 'Booking Service',
          domainName: 'Reservation Domain'
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_CONCEPT_INVALID
  );
});

test('domain overview creates valid business capabilities and rejects wrong ownership', () => {
  const descriptor = new DomainOverviewDescriptor();
  const capability = descriptor.createCapability(
    new DomainCapability({
      capabilityName: 'Create Reservation',
      domainName: 'Reservation Domain',
      ownerService: 'Booking Service',
      description: 'Create a confirmed booking for a property.'
    })
  );

  assert.equal(capability.ownerService, 'Booking Service');
  assert.throws(
    () =>
      descriptor.createCapability({
        capabilityName: 'Calculate Price',
        domainName: 'Pricing Domain',
        ownerService: 'Booking Service',
        description: 'Calculate the business price.'
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_CAPABILITY_INVALID
  );
});

test('domain overview validates collaboration relationships without ownership transfer', () => {
  const descriptor = new DomainOverviewDescriptor();

  assert.ok(descriptor.relationshipTypes().includes(DOMAIN_RELATIONSHIP_TYPES.REQUIRES));
  assert.equal(descriptor.listRelationships().length, 6);
  assert.throws(
    () =>
      descriptor.registerRelationship(
        new DomainRelationship({
          sourceDomain: 'Reservation Domain',
          targetDomain: 'Pricing Domain',
          relationshipType: DOMAIN_RELATIONSHIP_TYPES.REQUIRES,
          description: 'Reservations require pricing.',
          transfersOwnership: true
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_RELATIONSHIP_INVALID
  );
});

test('domain overview validates owner-controlled business state models', () => {
  const descriptor = new DomainOverviewDescriptor();
  const stateModel = descriptor.createStateModel(
    new DomainStateModel({
      domainName: 'Reservation Domain',
      ownerService: 'Booking Service',
      entityName: 'Reservation',
      states: ['Pending', 'Confirmed', 'Checked In', 'Checked Out', 'Cancelled']
    })
  );

  assert.equal(stateModel.states.length, 5);
  assert.throws(
    () =>
      descriptor.createStateModel({
        domainName: 'Payment Domain',
        ownerService: 'Booking Service',
        entityName: 'Payment',
        states: ['Pending', 'Paid']
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_STATE_INVALID
  );
});

test('domain overview descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDomainModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('DomainOverviewDescriptor');

  assert.ok(descriptor instanceof DomainOverviewDescriptor);
  assert.equal(descriptor.listDomains().length, 10);
});
