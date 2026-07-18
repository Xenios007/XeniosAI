import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS,
  QUERY_CHARACTERISTICS,
  QUERY_LIFECYCLE_STAGES,
  QUERY_OPTIMIZATION_STRATEGIES,
  QUERY_RESULT_STATUSES,
  QUERY_TELEMETRY_FIELDS,
  QueryDefinition,
  QueryFlowDescriptor,
  QueryResultRecord,
  QueryTelemetryRecord,
  addDataFlow
} from '../../src/data-flow/index.js';

test('query flow exposes the canonical ARCH-005-03 lifecycle order', () => {
  const descriptor = new QueryFlowDescriptor();

  assert.deepEqual(descriptor.canonicalStageNames(), [
    QUERY_LIFECYCLE_STAGES.REQUEST_RECEIVED,
    QUERY_LIFECYCLE_STAGES.INTENT_IDENTIFIED,
    QUERY_LIFECYCLE_STAGES.DECISION_AUTHORIZED,
    QUERY_LIFECYCLE_STAGES.QUERY_CONSTRUCTED,
    QUERY_LIFECYCLE_STAGES.RETRIEVE_DATA,
    QUERY_LIFECYCLE_STAGES.VALIDATE_RESULT,
    QUERY_LIFECYCLE_STAGES.COMPOSE_RESPONSE,
    QUERY_LIFECYCLE_STAGES.RETURN_RESULT
  ]);
});

test('query flow exposes read-only characteristics, optimization options, and telemetry fields', () => {
  const descriptor = new QueryFlowDescriptor();

  assert.ok(descriptor.characteristics().includes(QUERY_CHARACTERISTICS.READ_ONLY));
  assert.ok(descriptor.characteristics().includes(QUERY_CHARACTERISTICS.SIDE_EFFECT_FREE));
  assert.ok(descriptor.optimizationStrategies().includes(QUERY_OPTIMIZATION_STRATEGIES.PAGINATION));
  assert.ok(descriptor.telemetryFields().includes(QUERY_TELEMETRY_FIELDS.DATA_SOURCE));
  assert.equal(descriptor.getStage(QUERY_LIFECYCLE_STAGES.RETRIEVE_DATA).owner, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES);
});

test('query flow registers documented query ownership examples', () => {
  const descriptor = new QueryFlowDescriptor();

  assert.equal(descriptor.getQuery('ReservationDetails').owningService, 'Booking Service');
  assert.equal(descriptor.getQuery('Availability').owningService, 'Calendar Service');
  assert.equal(descriptor.getQuery('PropertyInformation').owningService, 'Property Service');
  assert.equal(descriptor.getQuery('PricingInformation').owningService, 'Pricing Service');
  assert.equal(descriptor.getQuery('KnowledgeSearch').owningService, 'Knowledge Service');
});

test('query flow supports aggregated query metadata outside individual business ownership', () => {
  const descriptor = new QueryFlowDescriptor();
  const summary = descriptor.getQuery('BookingSummary');

  assert.equal(summary.aggregated, true);
  assert.equal(summary.owningService, 'Composition Layer');
  assert.deepEqual(summary.dataSources, ['booking-service', 'pricing-service', 'calendar-service', 'property-service']);
});

test('query flow rejects skipped lifecycle stages', () => {
  const descriptor = new QueryFlowDescriptor();
  const skippedAuthorization = descriptor
    .canonicalStageNames()
    .filter((stage) => stage !== QUERY_LIFECYCLE_STAGES.DECISION_AUTHORIZED);

  const result = descriptor.validateLifecycle(skippedAuthorization);

  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /decision-authorized/);
  assert.throws(
    () => descriptor.assertLifecycle(skippedAuthorization),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.QUERY_LIFECYCLE_INVALID
  );
});

test('query flow rejects non-read-only query definitions and shared ownership', () => {
  const descriptor = new QueryFlowDescriptor({ queries: [] });

  assert.throws(
    () =>
      descriptor.registerQuery(
        new QueryDefinition({
          queryName: 'InvalidQuery',
          owningService: ['Booking Service', 'Pricing Service'],
          requiredParameters: [],
          dataSources: [],
          readOnly: false
        })
      ),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.QUERY_DEFINITION_INVALID
  );
});

test('query flow creates immutable authorized queries with complete parameters', () => {
  const descriptor = new QueryFlowDescriptor();
  const query = descriptor.createQuery({
    queryId: 'qry-1',
    queryName: 'Availability',
    correlationId: 'corr-1',
    requestId: 'req-1',
    owningService: 'Calendar Service',
    authorized: true,
    parameters: {
      propertyId: 'property-1',
      checkIn: '2026-08-01',
      checkOut: '2026-08-03'
    }
  });

  assert.equal(query.queryName, 'Availability');
  assert.throws(() => {
    query.parameters.propertyId = 'changed';
  });
});

test('query flow rejects unauthorized or side-effecting query envelopes', () => {
  const descriptor = new QueryFlowDescriptor();

  assert.throws(
    () =>
      descriptor.createQuery({
        queryId: 'qry-1',
        queryName: 'Availability',
        correlationId: 'corr-1',
        requestId: 'req-1',
        owningService: 'Calendar Service',
        authorized: false,
        parameters: {},
        metadata: { modifiesState: true }
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.QUERY_AUTHORIZATION_INVALID
  );
});

test('query flow validates authoritative side-effect-free results', () => {
  const descriptor = new QueryFlowDescriptor();
  const query = descriptor.createQuery({
    queryId: 'qry-1',
    queryName: 'Availability',
    correlationId: 'corr-1',
    requestId: 'req-1',
    owningService: 'Calendar Service',
    authorized: true,
    parameters: {
      propertyId: 'property-1',
      checkIn: '2026-08-01',
      checkOut: '2026-08-03'
    }
  });
  const result = new QueryResultRecord({
    queryId: 'qry-1',
    queryName: 'Availability',
    owningService: 'Calendar Service',
    status: QUERY_RESULT_STATUSES.SUCCESS,
    data: { available: true },
    dataSource: 'calendar-store',
    freshness: 'current'
  });
  const invalid = descriptor.validateResult(
    {
      queryId: 'qry-1',
      queryName: 'Availability',
      owningService: 'Pricing Service',
      status: QUERY_RESULT_STATUSES.SUCCESS,
      dataSource: 'unknown-store',
      metadata: { sideEffect: true }
    },
    query
  );

  assert.equal(descriptor.validateResult(result, query).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /authoritative owner/);
  assert.match(invalid.errors.join('\n'), /side effect/);
});

test('query flow validates query telemetry and failure reasons', () => {
  const descriptor = new QueryFlowDescriptor();
  const telemetry = new QueryTelemetryRecord({
    queryName: 'KnowledgeSearch',
    correlationId: 'corr-1',
    requestId: 'req-1',
    owningService: 'Knowledge Service',
    responseDurationMs: 18,
    resultStatus: QUERY_RESULT_STATUSES.SUCCESS,
    dataSource: 'knowledge-repository'
  });
  const invalid = descriptor.validateTelemetry({
    queryName: 'KnowledgeSearch',
    correlationId: 'corr-1',
    requestId: 'req-1',
    owningService: 'Knowledge Service',
    responseDurationMs: -1,
    resultStatus: QUERY_RESULT_STATUSES.DATA_UNAVAILABLE,
    dataSource: 'knowledge-repository'
  });

  assert.equal(descriptor.validateTelemetry(telemetry).isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /duration/);
  assert.match(invalid.errors.join('\n'), /failure reason/);
});

test('query flow descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDataFlow(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('QueryFlowDescriptor');

  assert.ok(descriptor instanceof QueryFlowDescriptor);
  assert.equal(descriptor.describeLifecycle().length, 8);
});
