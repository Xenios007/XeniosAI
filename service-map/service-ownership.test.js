import test from 'node:test';
import assert from 'node:assert/strict';

import { BUSINESS_SERVICE_NAMES } from '../../src/business-services/index.js';
import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  CapabilityOwnershipRecord,
  SERVICE_MAP_ERROR_CODES,
  ServiceOwnershipRegistry,
  addServiceMap
} from '../../src/service-map/index.js';

test('service ownership registry exposes the ARCH-003-03 ownership matrix', () => {
  const ownership = new ServiceOwnershipRegistry();

  assert.equal(
    ownership.getOwner('Reservations').ownerServiceName,
    BUSINESS_SERVICE_NAMES.BOOKING
  );
  assert.equal(
    ownership.getOwner('Pricing Rules').ownerServiceName,
    BUSINESS_SERVICE_NAMES.PRICING
  );
  assert.equal(
    ownership.getOwner('Availability').ownerServiceName,
    BUSINESS_SERVICE_NAMES.CALENDAR
  );
  assert.equal(
    ownership.getOwner('Roles & Permissions').ownerServiceName,
    BUSINESS_SERVICE_NAMES.AUTHENTICATION
  );
  assert.equal(
    ownership.getOwner('Workflow Definitions').ownerServiceName,
    BUSINESS_SERVICE_NAMES.WORKFLOW
  );
});

test('service ownership registry validates authoritative service authority', () => {
  const ownership = new ServiceOwnershipRegistry();
  const valid = ownership.validateAuthority({
    capability: 'Notifications',
    serviceName: BUSINESS_SERVICE_NAMES.NOTIFICATION
  });
  const invalid = ownership.validateAuthority({
    capability: 'Availability',
    serviceName: BUSINESS_SERVICE_NAMES.BOOKING
  });

  assert.equal(valid.isValid, true);
  assert.equal(valid.owner.ownerServiceName, BUSINESS_SERVICE_NAMES.NOTIFICATION);
  assert.equal(invalid.isValid, false);
  assert.equal(invalid.owner.ownerServiceName, BUSINESS_SERVICE_NAMES.CALENDAR);
  assert.equal(invalid.errors[0].code, SERVICE_MAP_ERROR_CODES.OWNERSHIP_VIOLATION);
});

test('service ownership registry rejects duplicate capability owners', () => {
  assert.throws(
    () =>
      new ServiceOwnershipRegistry({
        records: [
          new CapabilityOwnershipRecord({
            capability: 'Reservations',
            ownerServiceName: BUSINESS_SERVICE_NAMES.BOOKING
          }),
          new CapabilityOwnershipRecord({
            capability: 'reservations',
            ownerServiceName: BUSINESS_SERVICE_NAMES.WORKFLOW
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.DUPLICATE_CAPABILITY_OWNER
  );
});

test('service ownership registry raises platform errors for missing or unauthorized owners', () => {
  const ownership = new ServiceOwnershipRegistry();

  assert.throws(
    () => ownership.getOwner('Unknown Capability'),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.CAPABILITY_OWNER_NOT_FOUND
  );

  assert.throws(
    () =>
      ownership.assertAuthority({
        capability: 'Pricing Rules',
        serviceName: BUSINESS_SERVICE_NAMES.BOOKING
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.OWNERSHIP_VIOLATION
  );
});

test('service map registration exposes service ownership through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addServiceMap(services);

  const provider = services.buildServiceProvider();
  const ownership = provider.getRequiredService('ServiceOwnershipRegistry');

  assert.equal(ownership.listOwnershipRecords().length, 17);
  assert.equal(
    ownership.getOwner('Digital Assets').ownerServiceName,
    BUSINESS_SERVICE_NAMES.MEDIA
  );
});
