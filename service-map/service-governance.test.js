import test from 'node:test';
import assert from 'node:assert/strict';

import { BUSINESS_SERVICE_NAMES } from '../../src/business-services/index.js';
import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  SERVICE_GOVERNANCE_SCOPES,
  SERVICE_MAP_ERROR_CODES,
  SERVICE_MATURITY_LEVELS,
  GovernanceExceptionRecord,
  ServiceGovernanceProfile,
  ServiceGovernanceRegistry,
  addServiceMap
} from '../../src/service-map/index.js';

test('service governance registry exposes governance profiles for all services', () => {
  const registry = new ServiceGovernanceRegistry();

  assert.equal(registry.listProfiles().length, 10);
  assert.equal(registry.getProfile(BUSINESS_SERVICE_NAMES.BOOKING).maturity, SERVICE_MATURITY_LEVELS.PROPOSED);
  assert.ok(registry.getProfile(BUSINESS_SERVICE_NAMES.PRICING).architectureRefs.length > 0);
});

test('service governance registry approves complete architecture change reviews', () => {
  const registry = new ServiceGovernanceRegistry();
  const review = registry.reviewChange({
    changeId: 'change-1',
    serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
    scope: SERVICE_GOVERNANCE_SCOPES.PUBLIC_CONTRACT,
    documented: true,
    reviewable: true,
    traceable: true,
    justified: true,
    reversible: true,
    singleDomainOwnership: true,
    ownershipUnambiguous: true,
    dependenciesMinimal: true,
    communicationAppropriate: true,
    publicContractsDocumented: true,
    versioningUnderstood: true,
    documentationUpdated: true
  });

  assert.equal(review.isApproved, true);
});

test('service governance registry rejects incomplete change reviews and missing ADRs', () => {
  const registry = new ServiceGovernanceRegistry();
  const review = registry.reviewChange({
    changeId: 'change-2',
    serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
    scope: SERVICE_GOVERNANCE_SCOPES.OWNERSHIP_CHANGE,
    documented: true,
    reviewable: false,
    traceable: true,
    justified: true,
    reversible: true,
    singleDomainOwnership: true,
    ownershipUnambiguous: true,
    dependenciesMinimal: true,
    communicationAppropriate: true,
    publicContractsDocumented: true,
    versioningUnderstood: true,
    documentationUpdated: true,
    adrRequired: true
  });

  assert.equal(review.isApproved, false);
  assert.ok(review.errors.every(error => error.code === SERVICE_MAP_ERROR_CODES.GOVERNANCE_REVIEW_INVALID));
});

test('service governance registry enforces architecture owner decision authority', () => {
  const registry = new ServiceGovernanceRegistry();

  assert.equal(registry.assertArchitectureOwner({ requesterRole: 'architecture-owner' }), true);
  assert.throws(
    () => registry.assertArchitectureOwner({ requesterRole: 'developer' }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.GOVERNANCE_DECISION_UNAUTHORIZED
  );
});

test('service governance registry validates governance exceptions', () => {
  const registry = new ServiceGovernanceRegistry();
  registry.registerException(
    new GovernanceExceptionRecord({
      exceptionId: 'exception-1',
      serviceName: BUSINESS_SERVICE_NAMES.MEDIA,
      scope: SERVICE_GOVERNANCE_SCOPES.DEPENDENCY,
      reason: 'Temporary exception under architectural review.',
      approvedBy: 'architecture-owner',
      adrRef: 'adr/ADR-0001-tool-first-architecture.md',
      expiresAt: '2026-12-31T00:00:00.000Z'
    })
  );

  assert.equal(registry.listExceptions().length, 1);
  assert.throws(
    () =>
      registry.registerException(
        new GovernanceExceptionRecord({
          exceptionId: 'exception-2',
          serviceName: BUSINESS_SERVICE_NAMES.MEDIA,
          scope: SERVICE_GOVERNANCE_SCOPES.DEPENDENCY,
          reason: '',
          approvedBy: 'architecture-owner',
          adrRef: ''
        })
      ),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.GOVERNANCE_EXCEPTION_INVALID
  );
});

test('service governance registry calculates governance metrics', () => {
  const registry = new ServiceGovernanceRegistry({
    profiles: [
      new ServiceGovernanceProfile({
        serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
        maturity: SERVICE_MATURITY_LEVELS.STABLE,
        architectureRefs: ['architecture/003-service-map/'],
        publicContractRefs: ['docs/service-communication-implementation.md'],
        testRefs: ['tests/service-map/'],
        operationalGuidanceRefs: ['architecture/010-observability-architecture/'],
        versionHistoryRefs: ['CHANGELOG.md'],
        ownerRef: 'booking-owner'
      })
    ]
  });
  const metrics = registry.calculateMetrics({
    dependencyCount: 4,
    circularDependencyViolations: 0,
    breakingChangeFrequency: 1,
    adrCount: 2
  });

  assert.equal(metrics.documentationCompleteness, 1);
  assert.equal(metrics.dependencyCount, 4);
  assert.equal(metrics.maturityDistribution[SERVICE_MATURITY_LEVELS.STABLE], 1);
  assert.equal(metrics.adrAdoption, 2);
});

test('service map registration exposes service governance through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addServiceMap(services);

  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('ServiceGovernanceRegistry');

  assert.equal(registry.listProfiles().length, 10);
});
