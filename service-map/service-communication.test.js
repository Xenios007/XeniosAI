import test from 'node:test';
import assert from 'node:assert/strict';

import { BUSINESS_SERVICE_NAMES } from '../../src/business-services/index.js';
import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  COMMUNICATION_SURFACES,
  EXTERNAL_SERVICE_DEPENDENCIES,
  SERVICE_COMMUNICATION_PATTERNS,
  SERVICE_MAP_ERROR_CODES,
  ServiceCommunicationContract,
  ServiceCommunicationRegistry,
  addServiceMap
} from '../../src/service-map/index.js';

test('service communication registry exposes approved communication patterns', () => {
  const registry = new ServiceCommunicationRegistry();

  assert.deepEqual(registry.getPatternCharacteristics(SERVICE_COMMUNICATION_PATTERNS.QUERY), {
    read: true,
    write: false,
    responseRequired: true,
    synchronous: true
  });
  assert.deepEqual(registry.getPatternCharacteristics(SERVICE_COMMUNICATION_PATTERNS.DOMAIN_EVENT), {
    read: false,
    write: false,
    responseRequired: false,
    synchronous: false
  });
});

test('service communication registry lists versioned public contracts for dependency-backed communication', () => {
  const registry = new ServiceCommunicationRegistry();
  const bookingContracts = registry.listContractsFor(BUSINESS_SERVICE_NAMES.BOOKING);
  const notification = registry.getContract('notification.integration.dispatch.v1');

  assert.equal(bookingContracts.length, 4);
  assert.ok(bookingContracts.every(contract => contract.version === 'v1'));
  assert.ok(bookingContracts.every(contract => contract.surface === COMMUNICATION_SURFACES.PUBLIC_CONTRACT));
  assert.equal(notification.targetServiceName, EXTERNAL_SERVICE_DEPENDENCIES.INTEGRATION_LAYER);
  assert.equal(notification.pattern, SERVICE_COMMUNICATION_PATTERNS.COMMAND);
});

test('service communication registry rejects hidden implementation communication', () => {
  const registry = new ServiceCommunicationRegistry();
  const validation = registry.validateContract(
    new ServiceCommunicationContract({
      contractId: 'booking.pricing.internal.v1',
      sourceServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
      targetServiceName: BUSINESS_SERVICE_NAMES.PRICING,
      pattern: SERVICE_COMMUNICATION_PATTERNS.QUERY,
      capability: 'Price calculation',
      version: 'v1',
      surface: COMMUNICATION_SURFACES.INTERNAL_API,
      idempotent: true
    })
  );

  assert.equal(validation.isValid, false);
  assert.equal(validation.errors[0].code, SERVICE_MAP_ERROR_CODES.COMMUNICATION_ANTI_PATTERN);
});

test('service communication registry rejects non-idempotent queries and forbidden direct dependencies', () => {
  const registry = new ServiceCommunicationRegistry();
  const nonIdempotentQuery = registry.validateContract(
    new ServiceCommunicationContract({
      contractId: 'booking.calendar.query.v1',
      sourceServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
      targetServiceName: BUSINESS_SERVICE_NAMES.CALENDAR,
      pattern: SERVICE_COMMUNICATION_PATTERNS.QUERY,
      capability: 'Availability lookup',
      version: 'v1',
      idempotent: false
    })
  );
  const forbiddenDependency = registry.validateContract(
    new ServiceCommunicationContract({
      contractId: 'pricing.booking.query.v1',
      sourceServiceName: BUSINESS_SERVICE_NAMES.PRICING,
      targetServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
      pattern: SERVICE_COMMUNICATION_PATTERNS.QUERY,
      capability: 'Retrieve booking',
      version: 'v1',
      idempotent: true
    })
  );

  assert.equal(nonIdempotentQuery.isValid, false);
  assert.equal(nonIdempotentQuery.errors[0].code, SERVICE_MAP_ERROR_CODES.COMMUNICATION_CONTRACT_INVALID);
  assert.equal(forbiddenDependency.isValid, false);
  assert.equal(forbiddenDependency.errors[0].code, SERVICE_MAP_ERROR_CODES.SERVICE_DEPENDENCY_NOT_ALLOWED);
});

test('service communication registry rejects duplicate contract identifiers', () => {
  assert.throws(
    () =>
      new ServiceCommunicationRegistry({
        contracts: [
          new ServiceCommunicationContract({
            contractId: 'booking.calendar.availability-lookup.v1',
            sourceServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
            targetServiceName: BUSINESS_SERVICE_NAMES.CALENDAR,
            pattern: SERVICE_COMMUNICATION_PATTERNS.QUERY,
            capability: 'Availability lookup',
            idempotent: true
          }),
          new ServiceCommunicationContract({
            contractId: 'booking.calendar.availability-lookup.v1',
            sourceServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
            targetServiceName: BUSINESS_SERVICE_NAMES.CALENDAR,
            pattern: SERVICE_COMMUNICATION_PATTERNS.QUERY,
            capability: 'Availability lookup',
            idempotent: true
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.DUPLICATE_COMMUNICATION_CONTRACT
  );
});

test('service map registration exposes service communication registry through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addServiceMap(services);

  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('ServiceCommunicationRegistry');

  assert.equal(registry.listContracts().length, 17);
  assert.equal(
    registry.getContract('workflow.booking.process.v1').pattern,
    SERVICE_COMMUNICATION_PATTERNS.WORKFLOW_ORCHESTRATION
  );
});
