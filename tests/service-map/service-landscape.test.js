import test from 'node:test';
import assert from 'node:assert/strict';

import { BUSINESS_SERVICE_NAMES } from '../../src/business-services/index.js';
import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  SERVICE_CATEGORY_NAMES,
  SERVICE_MAP_ERROR_CODES,
  ServiceDescriptor,
  ServiceLandscape,
  addServiceMap
} from '../../src/service-map/index.js';

test('service landscape exposes the canonical ARCH-003 service inventory', () => {
  const landscape = new ServiceLandscape();
  const serviceNames = landscape.listServices().map(service => service.serviceName);

  assert.deepEqual(serviceNames, [
    BUSINESS_SERVICE_NAMES.BOOKING,
    BUSINESS_SERVICE_NAMES.PRICING,
    BUSINESS_SERVICE_NAMES.CALENDAR,
    BUSINESS_SERVICE_NAMES.KNOWLEDGE,
    BUSINESS_SERVICE_NAMES.NOTIFICATION,
    BUSINESS_SERVICE_NAMES.PROPERTY,
    BUSINESS_SERVICE_NAMES.AUTHENTICATION,
    BUSINESS_SERVICE_NAMES.ANALYTICS,
    BUSINESS_SERVICE_NAMES.MEDIA,
    BUSINESS_SERVICE_NAMES.WORKFLOW
  ]);
});

test('service landscape groups services by documented business domains', () => {
  const landscape = new ServiceLandscape();
  const hospitality = landscape
    .listServicesByCategory(SERVICE_CATEGORY_NAMES.HOSPITALITY_OPERATIONS)
    .map(service => service.serviceName);
  const platform = landscape
    .listServicesByCategory(SERVICE_CATEGORY_NAMES.PLATFORM_SERVICES)
    .map(service => service.serviceName);

  assert.deepEqual(hospitality, [
    BUSINESS_SERVICE_NAMES.BOOKING,
    BUSINESS_SERVICE_NAMES.CALENDAR,
    BUSINESS_SERVICE_NAMES.PRICING
  ]);
  assert.deepEqual(platform, [
    BUSINESS_SERVICE_NAMES.AUTHENTICATION,
    BUSINESS_SERVICE_NAMES.NOTIFICATION,
    BUSINESS_SERVICE_NAMES.WORKFLOW
  ]);
});

test('service landscape rejects duplicate services and unknown categories', () => {
  const landscape = new ServiceLandscape();

  assert.throws(
    () =>
      landscape.registerService(
        new ServiceDescriptor({
          serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
          displayName: 'Duplicate Booking Service',
          category: SERVICE_CATEGORY_NAMES.HOSPITALITY_OPERATIONS,
          primaryResponsibility: 'Duplicate booking ownership.'
        })
      ),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.DUPLICATE_SERVICE
  );

  assert.throws(
    () =>
      new ServiceLandscape({
        categories: [],
        services: [
          new ServiceDescriptor({
            serviceName: 'unowned',
            displayName: 'Unowned Service',
            category: 'missing-category',
            primaryResponsibility: 'Invalid category.'
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.CATEGORY_NOT_FOUND
  );
});

test('service map registration exposes the landscape through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addServiceMap(services);

  const provider = services.buildServiceProvider();
  const snapshot = provider.getRequiredService('ServiceLandscape').snapshot();

  assert.equal(snapshot.services.length, 10);
  assert.equal(snapshot.categories.length, 5);
  assert.match(snapshot.generatedAt, /^\d{4}-\d{2}-\d{2}T/);
});
