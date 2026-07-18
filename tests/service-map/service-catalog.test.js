import test from 'node:test';
import assert from 'node:assert/strict';

import { BUSINESS_SERVICE_NAMES } from '../../src/business-services/index.js';
import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  SERVICE_MAP_ERROR_CODES,
  ServiceCatalog,
  ServiceCatalogEntry,
  addServiceMap
} from '../../src/service-map/index.js';

test('service catalog exposes ARCH-003-02 primary domains for all services', () => {
  const catalog = new ServiceCatalog();
  const domains = new Map(
    catalog.listEntries().map(entry => [entry.displayName, entry.primaryDomain])
  );

  assert.equal(domains.get('Booking Service'), 'Reservations');
  assert.equal(domains.get('Pricing Service'), 'Pricing');
  assert.equal(domains.get('Calendar Service'), 'Availability');
  assert.equal(domains.get('Knowledge Service'), 'Operational Knowledge');
  assert.equal(domains.get('Notification Service'), 'Communications');
  assert.equal(domains.get('Property Service'), 'Property Management');
  assert.equal(domains.get('Authentication Service'), 'Identity & Access');
  assert.equal(domains.get('Analytics Service'), 'Reporting & Metrics');
  assert.equal(domains.get('Media Service'), 'Digital Assets');
  assert.equal(domains.get('Workflow Service'), 'Business Process Automation');
});

test('service catalog records purpose, ownership, capabilities, dependencies, and consumers', () => {
  const catalog = new ServiceCatalog();
  const booking = catalog.getEntry(BUSINESS_SERVICE_NAMES.BOOKING);
  const pricing = catalog.getEntry(BUSINESS_SERVICE_NAMES.PRICING);
  const authentication = catalog.getEntry(BUSINESS_SERVICE_NAMES.AUTHENTICATION);

  assert.equal(booking.purpose, 'Manages the reservation lifecycle.');
  assert.deepEqual(booking.owns, ['Reservations', 'Booking status', 'Reservation lifecycle']);
  assert.deepEqual(booking.dependsOn, [
    BUSINESS_SERVICE_NAMES.PRICING,
    BUSINESS_SERVICE_NAMES.CALENDAR,
    BUSINESS_SERVICE_NAMES.NOTIFICATION
  ]);
  assert.ok(booking.provides.includes('Create booking'));
  assert.ok(booking.consumers.includes(BUSINESS_SERVICE_NAMES.WORKFLOW));
  assert.deepEqual(pricing.dependsOn, [BUSINESS_SERVICE_NAMES.PROPERTY]);
  assert.deepEqual(authentication.dependsOn, []);
});

test('service catalog protects unique catalog ownership entries', () => {
  const catalog = new ServiceCatalog();

  assert.throws(
    () =>
      catalog.register(
        new ServiceCatalogEntry({
          serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
          displayName: 'Duplicate Booking Service',
          primaryDomain: 'Reservations',
          purpose: 'Duplicate.',
          primaryResponsibility: 'Duplicate.',
          owns: ['Reservations']
        })
      ),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.DUPLICATE_CATALOG_ENTRY
  );

  assert.throws(
    () => catalog.getEntry('unknown-service'),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.CATALOG_ENTRY_NOT_FOUND
  );
});

test('service map registration exposes service catalog through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addServiceMap(services);

  const provider = services.buildServiceProvider();
  const catalog = provider.getRequiredService('ServiceCatalog');

  assert.equal(catalog.listEntries().length, 10);
  assert.equal(
    catalog.getEntry(BUSINESS_SERVICE_NAMES.WORKFLOW).primaryDomain,
    'Business Process Automation'
  );
});
