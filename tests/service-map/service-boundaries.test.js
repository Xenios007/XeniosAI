import test from 'node:test';
import assert from 'node:assert/strict';

import { BUSINESS_SERVICE_NAMES } from '../../src/business-services/index.js';
import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  EXTERNAL_COLLABORATORS,
  SERVICE_MAP_ERROR_CODES,
  ServiceBoundary,
  ServiceBoundaryRegistry,
  addServiceMap
} from '../../src/service-map/index.js';

test('service boundary registry exposes documented owns and does-not-own boundaries', () => {
  const registry = new ServiceBoundaryRegistry();
  const booking = registry.getBoundary(BUSINESS_SERVICE_NAMES.BOOKING);
  const notification = registry.getBoundary(BUSINESS_SERVICE_NAMES.NOTIFICATION);

  assert.deepEqual(booking.owns, [
    'Reservations',
    'Reservation lifecycle',
    'Booking status',
    'Booking history'
  ]);
  assert.ok(booking.doesNotOwn.includes('Pricing rules'));
  assert.ok(notification.owns.includes('Message dispatch'));
  assert.ok(notification.doesNotOwn.includes('Reservation state'));
});

test('service boundary registry validates ownership claims', () => {
  const registry = new ServiceBoundaryRegistry();
  const valid = registry.validateOwnershipClaim({
    serviceName: BUSINESS_SERVICE_NAMES.PRICING,
    concept: 'Pricing rules'
  });
  const invalid = registry.validateOwnershipClaim({
    serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
    concept: 'Pricing rules'
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.equal(invalid.errors[0].code, SERVICE_MAP_ERROR_CODES.SERVICE_BOUNDARY_VIOLATION);
});

test('service boundary registry exposes collaboration boundaries and shared concepts', () => {
  const registry = new ServiceBoundaryRegistry();

  assert.equal(
    registry.canCollaborate(BUSINESS_SERVICE_NAMES.KNOWLEDGE, EXTERNAL_COLLABORATORS.AI_INTELLIGENCE_LAYER),
    true
  );
  assert.equal(
    registry.canCollaborate(BUSINESS_SERVICE_NAMES.CALENDAR, BUSINESS_SERVICE_NAMES.NOTIFICATION),
    false
  );
  assert.equal(
    registry.getSharedConcept('Property').ownerServiceName,
    BUSINESS_SERVICE_NAMES.PROPERTY
  );
  assert.deepEqual(registry.getSharedConcept('Reservation').consumers, [
    BUSINESS_SERVICE_NAMES.WORKFLOW,
    BUSINESS_SERVICE_NAMES.ANALYTICS
  ]);
});

test('service boundary registry rejects duplicate boundaries and unknown services', () => {
  assert.throws(
    () =>
      new ServiceBoundaryRegistry({
        boundaries: [
          new ServiceBoundary({
            serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
            owns: ['Reservations']
          }),
          new ServiceBoundary({
            serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
            owns: ['Booking status']
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.DUPLICATE_SERVICE_BOUNDARY
  );

  assert.throws(
    () => new ServiceBoundaryRegistry().getBoundary('unknown-service'),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.SERVICE_BOUNDARY_NOT_FOUND
  );
});

test('service boundary registry raises platform errors for boundary violations', () => {
  const registry = new ServiceBoundaryRegistry();

  assert.throws(
    () =>
      registry.assertOwnershipClaim({
        serviceName: BUSINESS_SERVICE_NAMES.NOTIFICATION,
        concept: 'Reservation state'
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.SERVICE_BOUNDARY_VIOLATION
  );
});

test('service map registration exposes service boundaries through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addServiceMap(services);

  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('ServiceBoundaryRegistry');

  assert.equal(registry.listBoundaries().length, 10);
  assert.equal(registry.listSharedConcepts().length, 6);
});
