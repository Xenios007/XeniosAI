import test from 'node:test';
import assert from 'node:assert/strict';

import { createFoundationServiceCollection } from '../../src/foundation/index.js';
import {
  addCrossCuttingConcerns,
  AUDIT_OUTCOMES,
  HEALTH_STATUS,
  TraceContext,
  VersionDescriptor
} from '../../src/cross-cutting/index.js';

test('audit service creates immutable audit records with correlation', () => {
  const services = createFoundationServiceCollection();
  addCrossCuttingConcerns(services);

  const provider = services.buildServiceProvider();
  const audit = provider.getRequiredService('AuditService');
  const record = audit.record({
    actorId: 'user-1',
    action: 'booking.create',
    resource: 'reservation',
    outcome: AUDIT_OUTCOMES.SUCCESS,
    correlationId: 'corr-1'
  });

  assert.equal(record.action, 'booking.create');
  assert.equal(record.correlationId, 'corr-1');
  assert.equal(audit.records.length, 1);
});

test('health check service reports healthy and unhealthy components', async () => {
  const services = createFoundationServiceCollection();
  addCrossCuttingConcerns(services);

  const provider = services.buildServiceProvider();
  const health = provider.getRequiredService('HealthCheckService');
  health.register('foundation', async () => ({ status: HEALTH_STATUS.HEALTHY }));
  health.register('dependency', async () => {
    throw new Error('dependency unavailable');
  });

  const results = await health.checkAll();
  assert.equal(results.length, 2);
  assert.equal(results[0].status, HEALTH_STATUS.HEALTHY);
  assert.equal(results[1].status, HEALTH_STATUS.UNHEALTHY);
});

test('operation observer records success telemetry with trace context', async () => {
  const services = createFoundationServiceCollection();
  addCrossCuttingConcerns(services);

  const provider = services.buildServiceProvider();
  const observer = provider.getRequiredService('OperationObserver');
  const result = await observer.observe({
    operationName: 'test.operation',
    traceContext: new TraceContext({ correlationId: 'corr-2', requestId: 'req-2' }),
    async work() {
      return 'ok';
    }
  });

  assert.equal(result, 'ok');
});

test('contract validator reports missing required fields consistently', () => {
  const services = createFoundationServiceCollection();
  addCrossCuttingConcerns(services);

  const provider = services.buildServiceProvider();
  const validator = provider.getRequiredService('ContractValidator');
  const result = validator.requireFields({ name: 'Casa Lluvia' }, ['name', 'propertyId']);

  assert.equal(result.isValid, false);
  assert.deepEqual(result.errors, ['propertyId is required.']);
});

test('localization service formats currency and dates without business rules', () => {
  const services = createFoundationServiceCollection();
  addCrossCuttingConcerns(services);

  const provider = services.buildServiceProvider();
  const localization = provider.getRequiredService('LocalizationService');

  assert.equal(localization.formatCurrency(123.45, { locale: 'en-US', currency: 'USD' }), '$123.45');
  assert.equal(localization.formatDate('2026-07-18T00:00:00.000Z', { locale: 'en-US' }), 'Jul 18, 2026');
});

test('version registry tracks explicit version descriptors', () => {
  const services = createFoundationServiceCollection();
  addCrossCuttingConcerns(services);

  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('VersionRegistry');
  registry.register(
    new VersionDescriptor({
      name: 'pricing.compute',
      version: 'v1'
    })
  );

  assert.equal(registry.get('pricing.compute').version, 'v1');
  assert.equal(registry.list().length, 1);
});
