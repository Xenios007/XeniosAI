import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_COMPATIBILITY_TYPES,
  API_CONTRACT_CHARACTERISTICS,
  API_CONTRACT_LIFECYCLE_STAGES,
  API_ERROR_CATEGORIES,
  API_PAGINATION_STRATEGIES,
  API_RESPONSE_STATUSES,
  API_SECURITY_REQUIREMENTS,
  API_TELEMETRY_FIELDS,
  ApiContractDefinition,
  ApiContractDescriptor,
  ApiRequestContract,
  ApiResponseContract,
  ApiTelemetryRecord,
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS,
  addDataFlow
} from '../../src/data-flow/index.js';

test('api contracts expose the canonical ARCH-005-07 lifecycle order', () => {
  const descriptor = new ApiContractDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    API_CONTRACT_LIFECYCLE_STAGES.CLIENT_REQUEST,
    API_CONTRACT_LIFECYCLE_STAGES.GATEWAY_VALIDATION,
    API_CONTRACT_LIFECYCLE_STAGES.AUTHORIZATION,
    API_CONTRACT_LIFECYCLE_STAGES.CONTRACT_VALIDATION,
    API_CONTRACT_LIFECYCLE_STAGES.BUSINESS_EXECUTION,
    API_CONTRACT_LIFECYCLE_STAGES.RESPONSE_CONSTRUCTION,
    API_CONTRACT_LIFECYCLE_STAGES.RESPONSE_VALIDATION,
    API_CONTRACT_LIFECYCLE_STAGES.RETURN_RESPONSE
  ]);
});

test('api contracts expose stability, compatibility, security, pagination, and telemetry metadata', () => {
  const descriptor = new ApiContractDescriptor();

  assert.ok(descriptor.characteristics().includes(API_CONTRACT_CHARACTERISTICS.VERSIONED));
  assert.ok(descriptor.compatibilityTypes().includes(API_COMPATIBILITY_TYPES.BACKWARD_COMPATIBLE));
  assert.ok(descriptor.errorCategories().includes(API_ERROR_CATEGORIES.VALIDATION));
  assert.ok(descriptor.securityRequirements().includes(API_SECURITY_REQUIREMENTS.INPUT_VALIDATION));
  assert.ok(descriptor.paginationStrategies().includes(API_PAGINATION_STRATEGIES.CURSOR));
  assert.ok(descriptor.telemetryFields().includes(API_TELEMETRY_FIELDS.RESPONSE_TIME));
  assert.equal(descriptor.getStage(API_CONTRACT_LIFECYCLE_STAGES.AUTHORIZATION).owner, EXECUTION_PARTICIPANTS.DECISION_ENGINE);
});

test('api contracts register documented ownership examples', () => {
  const descriptor = new ApiContractDescriptor();

  assert.equal(descriptor.getContract('Reservation API').ownerService, 'Booking Service');
  assert.equal(descriptor.getContract('Pricing API').ownerService, 'Pricing Service');
  assert.equal(descriptor.getContract('Guest API').ownerService, 'Guest Service');
  assert.equal(descriptor.getContract('Property API').ownerService, 'Property Service');
  assert.equal(descriptor.getContract('Notification API').ownerService, 'Notification Service');
});

test('api contracts reject skipped lifecycle stages', () => {
  const descriptor = new ApiContractDescriptor();
  const skippedContractValidation = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== API_CONTRACT_LIFECYCLE_STAGES.CONTRACT_VALIDATION);

  const result = descriptor.validateLifecycle(skippedContractValidation);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /contract-validation/);
  assert.throws(
    () => descriptor.assertLifecycle(skippedContractValidation),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.API_CONTRACT_LIFECYCLE_INVALID
  );
});

test('api contracts reject definitions that expose implementation details or lack contract requirements', () => {
  const descriptor = new ApiContractDescriptor({ contracts: [] });

  assert.throws(
    () =>
      descriptor.registerContract(
        new ApiContractDefinition({
          contractName: 'Invalid API',
          ownerService: ['Booking Service', 'Pricing Service'],
          capability: '',
          version: '',
          operations: [],
          requestFields: [],
          responseFields: [],
          errorCategories: ['unknown'],
          compatibility: 'magic',
          securityRequirements: [API_SECURITY_REQUIREMENTS.AUTHENTICATION],
          documented: false,
          paginationStrategy: 'page-number',
          implementationDetailsExposed: true,
          internalStorageExposed: true,
          frameworkBehaviorExposed: true,
          deprecated: true
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.API_CONTRACT_DEFINITION_INVALID &&
      error.details.errors.some((message) => message.includes('ownership')) &&
      error.details.errors.some((message) => message.includes('implementation details')) &&
      error.details.errors.some((message) => message.includes('documentation'))
  );
});

test('api contracts create immutable authenticated and authorized requests', () => {
  const descriptor = new ApiContractDescriptor();
  const request = descriptor.createRequest({
    requestId: 'api-req-1',
    correlationId: 'corr-1',
    contractName: 'Pricing API',
    operation: 'CalculatePrice',
    ownerService: 'Pricing Service',
    authenticated: true,
    authorized: true,
    parameters: {
      propertyId: 'property-1',
      checkIn: '2026-08-01',
      checkOut: '2026-08-03'
    },
    authenticationContext: { subject: 'user-1' }
  });

  assert.equal(request.contractName, 'Pricing API');
  assert.throws(() => {
    request.parameters.propertyId = 'changed';
  });
});

test('api contracts reject unauthenticated unauthorized requests and implementation coupling', () => {
  const descriptor = new ApiContractDescriptor();

  assert.throws(
    () =>
      descriptor.createRequest({
        requestId: 'api-req-1',
        correlationId: 'corr-1',
        contractName: 'Pricing API',
        operation: 'CalculatePrice',
        ownerService: 'Booking Service',
        authenticated: false,
        authorized: false,
        parameters: { propertyId: 'property-1' },
        metadata: { implementationDetailDependency: true }
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.API_REQUEST_INVALID &&
      error.details.errors.some((message) => message.includes('Pricing Service')) &&
      error.details.errors.some((message) => message.includes('authentication')) &&
      error.details.errors.some((message) => message.includes('checkIn'))
  );
});

test('api contracts validate consistent responses and error contracts', () => {
  const descriptor = new ApiContractDescriptor();
  const request = new ApiRequestContract({
    requestId: 'api-req-1',
    correlationId: 'corr-1',
    contractName: 'Pricing API',
    operation: 'CalculatePrice',
    ownerService: 'Pricing Service',
    authenticated: true,
    authorized: true,
    parameters: {
      propertyId: 'property-1',
      checkIn: '2026-08-01',
      checkOut: '2026-08-03'
    }
  });
  const valid = new ApiResponseContract({
    requestId: 'api-req-1',
    correlationId: 'corr-1',
    contractName: 'Pricing API',
    operation: 'CalculatePrice',
    status: API_RESPONSE_STATUSES.SUCCESS,
    businessResult: 'priced',
    data: { price: 100, currency: 'USD' }
  });
  const invalid = descriptor.validateResponse(
    {
      requestId: 'api-req-2',
      correlationId: 'corr-1',
      contractName: 'Pricing API',
      operation: 'CalculatePrice',
      status: API_RESPONSE_STATUSES.SUCCESS,
      data: { price: 100 }
    },
    request
  );

  assert.equal(descriptor.validateResponse(valid, request).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /initiating request/);
  assert.match(invalid.errors.join('\n'), /currency/);
});

test('api contracts require pagination metadata for paginated contract responses', () => {
  const descriptor = new ApiContractDescriptor();
  const request = new ApiRequestContract({
    requestId: 'api-req-1',
    correlationId: 'corr-1',
    contractName: 'Property API',
    operation: 'GetProperty',
    ownerService: 'Property Service',
    authenticated: true,
    authorized: true,
    parameters: { propertyId: 'property-1' }
  });

  const result = descriptor.validateResponse(
    {
      requestId: 'api-req-1',
      correlationId: 'corr-1',
      contractName: 'Property API',
      operation: 'GetProperty',
      status: API_RESPONSE_STATUSES.SUCCESS,
      data: { property: { id: 'property-1' } }
    },
    request
  );

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /pagination metadata/);
});

test('api contracts validate compatibility and versioning rules', () => {
  const descriptor = new ApiContractDescriptor();
  const valid = descriptor.validateCompatibility({
    compatibility: API_COMPATIBILITY_TYPES.BACKWARD_COMPATIBLE,
    addsOptionalField: true
  });
  const invalid = descriptor.validateCompatibility({
    compatibility: API_COMPATIBILITY_TYPES.BREAKING_CHANGE,
    removesRequiredField: true,
    changesFieldMeaning: true,
    altersBusinessSemantics: true,
    unexpectedBehavioralChange: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /remove required fields/);
  assert.match(invalid.errors.join('\n'), /new major contract version/);
});

test('api contracts validate telemetry and failed result errors', () => {
  const descriptor = new ApiContractDescriptor();
  const telemetry = new ApiTelemetryRecord({
    correlationId: 'corr-1',
    requestId: 'api-req-1',
    serviceName: 'Pricing Service',
    operation: 'CalculatePrice',
    responseTimeMs: 20,
    result: API_RESPONSE_STATUSES.SUCCESS
  });
  const invalid = descriptor.validateTelemetry({
    correlationId: 'corr-1',
    requestId: 'api-req-1',
    serviceName: 'Pricing Service',
    operation: 'CalculatePrice',
    responseTimeMs: -1,
    result: API_RESPONSE_STATUSES.VALIDATION_FAILURE
  });

  assert.equal(descriptor.validateTelemetry(telemetry).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /response time/);
  assert.match(invalid.errors.join('\n'), /error information/);
});

test('api contract descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDataFlow(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ApiContractDescriptor');

  assert.ok(descriptor instanceof ApiContractDescriptor);
  assert.equal(descriptor.describeLifecycle().length, 8);
});
