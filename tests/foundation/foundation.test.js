import test from 'node:test';
import assert from 'node:assert/strict';

import {
  createFoundationServiceCollection,
  EnvironmentConfigurationProvider,
  EnvironmentSecretProvider,
  ERROR_CODES,
  InMemoryMeter,
  NodeCryptoService,
  PlatformError,
  StaticFeatureFlagService,
  StructuredConsoleLogger,
  SystemClock
} from '../../src/foundation/index.js';

test('environment configuration provider reads values and enforces required keys', () => {
  const provider = new EnvironmentConfigurationProvider({ TEST_VALUE: 'ok' });

  assert.equal(provider.get('TEST_VALUE'), 'ok');
  assert.equal(provider.getOrDefault('MISSING', 'fallback'), 'fallback');

  assert.throws(
    () => provider.getRequired('MISSING'),
    error => error instanceof PlatformError && error.code === ERROR_CODES.CONFIGURATION_MISSING
  );
});

test('feature flags are disabled by default', () => {
  const flags = new StaticFeatureFlagService({ foundation_ready: true });

  assert.equal(flags.isEnabled('foundation_ready'), true);
  assert.equal(flags.isEnabled('missing_flag'), false);
});

test('environment secret provider enforces required secrets', () => {
  const provider = new EnvironmentSecretProvider({ API_KEY: 'secret' });

  assert.equal(provider.getRequiredSecret('API_KEY'), 'secret');

  assert.throws(
    () => provider.getRequiredSecret('MISSING'),
    error => error instanceof PlatformError && error.code === ERROR_CODES.SECRET_MISSING
  );
});

test('structured logger emits machine-readable JSON with stable fields', () => {
  const entries = [];
  const sink = {
    info(value) {
      entries.push(value);
    }
  };

  const logger = new StructuredConsoleLogger({
    clock: { now: () => new Date('2026-07-18T12:00:00.000Z') },
    sink
  });

  logger.info('foundation initialized', { correlationId: 'corr-1' });

  assert.equal(entries.length, 1);

  const parsed = JSON.parse(entries[0]);
  assert.equal(parsed.level, 'info');
  assert.equal(parsed.message, 'foundation initialized');
  assert.equal(parsed.correlationId, 'corr-1');
  assert.equal(parsed.timestamp, '2026-07-18T12:00:00.000Z');
});

test('in-memory meter records counters and histograms', () => {
  const meter = new InMemoryMeter();
  meter.incrementCounter('requests', 2, { layer: 'foundation' });
  meter.recordHistogram('latency_ms', 35, { layer: 'foundation' });

  const snapshot = meter.snapshot();
  assert.equal(snapshot.counters.size, 1);
  assert.equal(snapshot.histograms.size, 1);
});

test('crypto service provides deterministic hashes and secure random bytes', () => {
  const cryptoService = new NodeCryptoService();

  assert.equal(
    cryptoService.hash('xenios'),
    'c690282acc3a2b3004b83b08318f0b5cdbae6d2b3e8ab777d01954b6a01a2930'
  );
  assert.equal(cryptoService.secureRandom(16).length, 16);
});

test('service collection resolves singleton and transient registrations', () => {
  const services = createFoundationServiceCollection({
    environment: { APP_NAME: 'XeniosAI' },
    featureFlags: { foundation_ready: true }
  });

  services.registerTransient('Counter', () => ({ value: Math.random() }));

  const provider = services.buildServiceProvider();
  const clock1 = provider.getRequiredService('Clock');
  const clock2 = provider.getRequiredService('Clock');
  const transient1 = provider.getRequiredService('Counter');
  const transient2 = provider.getRequiredService('Counter');

  assert.ok(clock1 instanceof SystemClock);
  assert.equal(clock1, clock2);
  assert.notEqual(transient1.value, transient2.value);
});
