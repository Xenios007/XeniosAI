import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS,
  SERVICE_INTEGRATION_CATEGORIES,
  SERVICE_INTEGRATION_LIFECYCLE_STAGES,
  SERVICE_INTEGRATION_PATTERNS,
  SERVICE_INTEGRATION_RELIABILITY_STRATEGIES,
  SERVICE_INTEGRATION_RESPONSE_STATUSES,
  SERVICE_INTEGRATION_SECURITY_CONTROLS,
  SERVICE_INTEGRATION_TELEMETRY_FIELDS,
  ServiceIntegrationContract,
  ServiceIntegrationDescriptor,
  ServiceIntegrationRequest,
  ServiceIntegrationResponse,
  ServiceIntegrationTelemetryRecord,
  addDataFlow
} from '../../src/data-flow/index.js';

test('service integration exposes the canonical ARCH-005-06 lifecycle order', () => {
  const descriptor = new ServiceIntegrationDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    SERVICE_INTEGRATION_LIFECYCLE_STAGES.IDENTIFY_CAPABILITY,
    SERVICE_INTEGRATION_LIFECYCLE_STAGES.RESOLVE_TARGET_SERVICE,
    SERVICE_INTEGRATION_LIFECYCLE_STAGES.VALIDATE_CONTRACT,
    SERVICE_INTEGRATION_LIFECYCLE_STAGES.EXECUTE_REQUEST,
    SERVICE_INTEGRATION_LIFECYCLE_STAGES.RECEIVE_RESPONSE,
    SERVICE_INTEGRATION_LIFECYCLE_STAGES.VALIDATE_RESULT,
    SERVICE_INTEGRATION_LIFECYCLE_STAGES.RETURN_OUTCOME
  ]);
});

test('service integration exposes categories, patterns, reliability, security, and telemetry metadata', () => {
  const descriptor = new ServiceIntegrationDescriptor();

  assert.ok(descriptor.categories().includes(SERVICE_INTEGRATION_CATEGORIES.INTERNAL_SERVICE));
  assert.ok(descriptor.categories().includes(SERVICE_INTEGRATION_CATEGORIES.EXTERNAL));
  assert.ok(descriptor.communicationPatterns().includes(SERVICE_INTEGRATION_PATTERNS.WORKFLOW));
  assert.ok(descriptor.reliabilityStrategies().includes(SERVICE_INTEGRATION_RELIABILITY_STRATEGIES.CIRCUIT_BREAKER));
  assert.ok(descriptor.securityControls().includes(SERVICE_INTEGRATION_SECURITY_CONTROLS.AUDITABILITY));
  assert.ok(descriptor.telemetryFields().includes(SERVICE_INTEGRATION_TELEMETRY_FIELDS.RETRY_COUNT));
  assert.equal(descriptor.getStage(SERVICE_INTEGRATION_LIFECYCLE_STAGES.EXECUTE_REQUEST).owner, EXECUTION_PARTICIPANTS.INTEGRATION_LAYER);
});

test('service integration registers documented internal, external, and platform examples', () => {
  const descriptor = new ServiceIntegrationDescriptor();

  assert.equal(descriptor.getContract('booking.pricing.calculate.v1').targetService, 'pricing');
  assert.equal(descriptor.getContract('booking.calendar.availability.v1').pattern, SERVICE_INTEGRATION_PATTERNS.QUERY);
  assert.equal(descriptor.getContract('notification.template.render.v1').targetService, 'template');
  assert.equal(descriptor.getContract('payment.gateway.verify.v1').category, SERVICE_INTEGRATION_CATEGORIES.EXTERNAL);
  assert.equal(descriptor.getContract('notification.email.dispatch.v1').targetService, 'email-provider');
  assert.equal(descriptor.getContract('knowledge.memory.lookup.v1').category, SERVICE_INTEGRATION_CATEGORIES.PLATFORM);
});

test('service integration rejects skipped lifecycle stages', () => {
  const descriptor = new ServiceIntegrationDescriptor();
  const skippedContractValidation = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== SERVICE_INTEGRATION_LIFECYCLE_STAGES.VALIDATE_CONTRACT);

  const result = descriptor.validateLifecycle(skippedContractValidation);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /validate-contract/);
  assert.throws(
    () => descriptor.assertLifecycle(skippedContractValidation),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.SERVICE_INTEGRATION_LIFECYCLE_INVALID
  );
});

test('service integration rejects contracts that expose implementation details or miss required controls', () => {
  const descriptor = new ServiceIntegrationDescriptor({ contracts: [] });

  assert.throws(
    () =>
      descriptor.registerContract(
        new ServiceIntegrationContract({
          contractId: 'invalid.v1',
          category: SERVICE_INTEGRATION_CATEGORIES.EXTERNAL,
          pattern: SERVICE_INTEGRATION_PATTERNS.REQUEST_RESPONSE,
          capability: 'Invalid external call',
          sourceService: 'booking',
          targetService: 'vendor',
          version: 'v1',
          requestFields: [],
          responseFields: [],
          errorModel: [],
          publishedInterface: false,
          implementationDetailsExposed: true,
          targetInternalStateAccess: true,
          externalProviderIsolated: false,
          reliabilityStrategies: ['pray'],
          securityControls: [SERVICE_INTEGRATION_SECURITY_CONTROLS.AUTHENTICATION],
          observable: false
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.SERVICE_INTEGRATION_CONTRACT_INVALID &&
      error.details.errors.some((message) => message.includes('published interfaces')) &&
      error.details.errors.some((message) => message.includes('provider APIs')) &&
      error.details.errors.some((message) => message.includes('authorization'))
  );
});

test('service integration creates immutable authorized requests through explicit contracts', () => {
  const descriptor = new ServiceIntegrationDescriptor();
  const request = descriptor.createRequest({
    requestId: 'int-1',
    correlationId: 'corr-1',
    contractId: 'booking.pricing.calculate.v1',
    sourceService: 'booking',
    targetService: 'pricing',
    capability: 'Calculate pricing',
    authorized: true,
    payload: {
      propertyId: 'property-1',
      checkIn: '2026-08-01',
      checkOut: '2026-08-03'
    }
  });

  assert.equal(request.contractId, 'booking.pricing.calculate.v1');
  assert.throws(() => {
    request.payload.propertyId = 'changed';
  });
});

test('service integration rejects unauthorized requests and internal-state access', () => {
  const descriptor = new ServiceIntegrationDescriptor();

  assert.throws(
    () =>
      descriptor.createRequest({
        requestId: 'int-1',
        correlationId: 'corr-1',
        contractId: 'booking.pricing.calculate.v1',
        sourceService: 'booking',
        targetService: 'pricing',
        capability: 'Calculate pricing',
        authorized: false,
        payload: { propertyId: 'property-1' },
        metadata: { targetInternalStateAccess: true }
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.SERVICE_INTEGRATION_REQUEST_INVALID &&
      error.details.errors.some((message) => message.includes('authorized')) &&
      error.details.errors.some((message) => message.includes('internal state')) &&
      error.details.errors.some((message) => message.includes('checkIn'))
  );
});

test('service integration validates explicit predictable responses', () => {
  const descriptor = new ServiceIntegrationDescriptor();
  const request = new ServiceIntegrationRequest({
    requestId: 'int-1',
    correlationId: 'corr-1',
    contractId: 'booking.pricing.calculate.v1',
    sourceService: 'booking',
    targetService: 'pricing',
    capability: 'Calculate pricing',
    authorized: true,
    payload: {
      propertyId: 'property-1',
      checkIn: '2026-08-01',
      checkOut: '2026-08-03'
    }
  });
  const valid = new ServiceIntegrationResponse({
    requestId: 'int-1',
    correlationId: 'corr-1',
    contractId: 'booking.pricing.calculate.v1',
    sourceService: 'pricing',
    targetService: 'booking',
    status: SERVICE_INTEGRATION_RESPONSE_STATUSES.SUCCESS,
    data: { price: 120, currency: 'USD' }
  });
  const invalid = descriptor.validateResponse(
    {
      requestId: 'int-2',
      correlationId: 'corr-1',
      contractId: 'booking.pricing.calculate.v1',
      sourceService: 'pricing',
      targetService: 'booking',
      status: SERVICE_INTEGRATION_RESPONSE_STATUSES.SUCCESS,
      data: { price: 120 }
    },
    request
  );

  assert.equal(descriptor.validateResponse(valid, request).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /initiating request/);
  assert.match(invalid.errors.join('\n'), /currency/);
});

test('service integration validates boundary preservation', () => {
  const descriptor = new ServiceIntegrationDescriptor();
  const valid = descriptor.validateBoundary({
    sourceService: 'booking',
    targetService: 'calendar'
  });
  const invalid = descriptor.validateBoundary({
    sourceService: 'booking',
    targetService: 'booking',
    targetInternalStateAccess: true,
    implementationDetailsExposed: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /distinct responsibilities/);
  assert.match(invalid.errors.join('\n'), /internal state/);
  assert.match(invalid.errors.join('\n'), /implementation details/);
});

test('service integration validates telemetry and failure reasons', () => {
  const descriptor = new ServiceIntegrationDescriptor();
  const telemetry = new ServiceIntegrationTelemetryRecord({
    correlationId: 'corr-1',
    sourceService: 'booking',
    targetService: 'pricing',
    requestDurationMs: 15,
    success: true,
    retryCount: 0,
    responseStatus: SERVICE_INTEGRATION_RESPONSE_STATUSES.SUCCESS
  });
  const invalid = descriptor.validateTelemetry({
    correlationId: 'corr-1',
    sourceService: 'booking',
    targetService: 'pricing',
    requestDurationMs: -1,
    success: false,
    retryCount: -1,
    responseStatus: SERVICE_INTEGRATION_RESPONSE_STATUSES.TIMEOUT
  });

  assert.equal(descriptor.validateTelemetry(telemetry).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /duration/);
  assert.match(invalid.errors.join('\n'), /retry count/);
  assert.match(invalid.errors.join('\n'), /failure reason/);
});

test('service integration descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDataFlow(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ServiceIntegrationDescriptor');

  assert.ok(descriptor instanceof ServiceIntegrationDescriptor);
  assert.equal(descriptor.describeLifecycle().length, 7);
});
