import test from 'node:test';
import assert from 'node:assert/strict';

import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  FUTURE_SERVICE_EVALUATION_DECISIONS,
  FUTURE_SERVICE_TYPES,
  SERVICE_MAP_ERROR_CODES,
  FutureServiceCandidate,
  FutureServiceRegistry,
  addServiceMap
} from '../../src/service-map/index.js';

test('future service registry exposes documented business and AI service candidates', () => {
  const registry = new FutureServiceRegistry();

  assert.equal(registry.listByType(FUTURE_SERVICE_TYPES.BUSINESS).length, 10);
  assert.equal(registry.listByType(FUTURE_SERVICE_TYPES.AI).length, 6);
  assert.equal(registry.getCandidate('loyalty').domain, 'Guest loyalty and rewards');
  assert.equal(registry.getCandidate('forecasting').serviceType, FUTURE_SERVICE_TYPES.AI);
});

test('future service candidates are placeholders, not implementation commitments', () => {
  const registry = new FutureServiceRegistry();

  assert.equal(registry.listCandidates().every(candidate => candidate.implementationCommitted === false), true);
  assert.ok(registry.getCandidate('payment').potentialResponsibilities.includes('Refund execution'));
});

test('future service registry evaluates acceptable service introductions', () => {
  const registry = new FutureServiceRegistry();
  const result = registry.evaluateIntroduction({
    serviceName: 'housekeeping',
    ownsDistinctBusinessDomain: true,
    existingServicesCannotAbsorb: true,
    independentEvolutionBeneficial: true,
    ownershipUnambiguous: true,
    boundariesCohesive: true,
    respectsExistingOwnership: true,
    avoidsDirectDatabaseSharing: true,
    participatesInObservability: true,
    documentedBeforeImplementation: true,
    technologyOnlyJustification: false
  });

  assert.equal(result.decision, FUTURE_SERVICE_EVALUATION_DECISIONS.ACCEPT);
  assert.equal(result.candidate.displayName, 'Housekeeping Service');
});

test('future service registry rejects technology-only or underdefined introductions', () => {
  const registry = new FutureServiceRegistry();
  const result = registry.evaluateIntroduction({
    serviceName: 'smart-property',
    ownsDistinctBusinessDomain: true,
    existingServicesCannotAbsorb: false,
    independentEvolutionBeneficial: true,
    ownershipUnambiguous: true,
    boundariesCohesive: true,
    respectsExistingOwnership: true,
    avoidsDirectDatabaseSharing: true,
    participatesInObservability: true,
    documentedBeforeImplementation: false,
    technologyOnlyJustification: true
  });

  assert.equal(result.decision, FUTURE_SERVICE_EVALUATION_DECISIONS.REJECT);
  assert.ok(result.errors.every(error => error.code === SERVICE_MAP_ERROR_CODES.FUTURE_SERVICE_EVALUATION_REJECTED));
});

test('future service registry rejects duplicate and unknown candidates', () => {
  assert.throws(
    () =>
      new FutureServiceRegistry({
        candidates: [
          new FutureServiceCandidate({
            serviceName: 'loyalty',
            displayName: 'Loyalty Service',
            domain: 'Guest loyalty and rewards'
          }),
          new FutureServiceCandidate({
            serviceName: 'loyalty',
            displayName: 'Duplicate Loyalty Service',
            domain: 'Guest loyalty and rewards'
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.DUPLICATE_FUTURE_SERVICE
  );

  assert.throws(
    () => new FutureServiceRegistry().getCandidate('unknown-future-service'),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.FUTURE_SERVICE_NOT_FOUND
  );
});

test('future service registry exposes the architectural growth strategy', () => {
  const registry = new FutureServiceRegistry();

  assert.deepEqual(registry.getGrowthStrategy(), [
    'New Business Capability',
    'New Domain',
    'New Service',
    'Published Contracts',
    'Platform Integration'
  ]);
});

test('service map registration exposes future services through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addServiceMap(services);

  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('FutureServiceRegistry');

  assert.equal(registry.listCandidates().length, 16);
});
