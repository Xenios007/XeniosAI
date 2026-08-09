import test from 'node:test';
import assert from 'node:assert/strict';

import { BUSINESS_SERVICE_NAMES } from '../../src/business-services/index.js';
import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  SERVICE_LIFECYCLE_CHECKPOINTS,
  SERVICE_LIFECYCLE_STAGES,
  SERVICE_MAP_ERROR_CODES,
  ServiceLifecycleRecord,
  ServiceLifecycleRegistry,
  addServiceMap
} from '../../src/service-map/index.js';

test('service lifecycle registry exposes the documented lifecycle stage order', () => {
  const registry = new ServiceLifecycleRegistry();

  assert.deepEqual(registry.getStageOrder(), [
    SERVICE_LIFECYCLE_STAGES.PROPOSAL,
    SERVICE_LIFECYCLE_STAGES.ARCHITECTURE,
    SERVICE_LIFECYCLE_STAGES.IMPLEMENTATION,
    SERVICE_LIFECYCLE_STAGES.TESTING,
    SERVICE_LIFECYCLE_STAGES.DEPLOYMENT,
    SERVICE_LIFECYCLE_STAGES.OPERATION,
    SERVICE_LIFECYCLE_STAGES.EVOLUTION,
    SERVICE_LIFECYCLE_STAGES.DEPRECATION,
    SERVICE_LIFECYCLE_STAGES.RETIREMENT
  ]);
});

test('service lifecycle registry requires owners throughout the lifecycle', () => {
  assert.throws(
    () =>
      new ServiceLifecycleRegistry({
        records: [
          new ServiceLifecycleRecord({
            serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
            stage: SERVICE_LIFECYCLE_STAGES.ARCHITECTURE,
            businessOwner: '',
            technicalOwner: 'booking-technical-owner',
            architecturalOwner: 'architecture',
            documentationRefs: ['architecture/003-service-map/02-service-catalog.md']
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.SERVICE_LIFECYCLE_OWNER_MISSING
  );
});

test('service lifecycle registry validates deliberate one-stage transitions', () => {
  const registry = new ServiceLifecycleRegistry({
    records: [
      createLifecycleRecord({
        serviceName: BUSINESS_SERVICE_NAMES.PRICING,
        stage: SERVICE_LIFECYCLE_STAGES.ARCHITECTURE
      })
    ]
  });
  const allowed = registry.validateTransition(
    BUSINESS_SERVICE_NAMES.PRICING,
    SERVICE_LIFECYCLE_STAGES.IMPLEMENTATION
  );
  const skipped = registry.validateTransition(
    BUSINESS_SERVICE_NAMES.PRICING,
    SERVICE_LIFECYCLE_STAGES.DEPLOYMENT
  );

  assert.equal(allowed.isAllowed, true);
  assert.equal(skipped.isAllowed, false);
  assert.equal(skipped.errors[0].code, SERVICE_MAP_ERROR_CODES.SERVICE_LIFECYCLE_TRANSITION_INVALID);
});

test('service lifecycle registry enforces testing, observability, security, and retirement requirements', () => {
  const testingRecord = createLifecycleRecord({
    serviceName: BUSINESS_SERVICE_NAMES.CALENDAR,
    stage: SERVICE_LIFECYCLE_STAGES.IMPLEMENTATION,
    testRefs: []
  });
  const operationRecord = createLifecycleRecord({
    serviceName: BUSINESS_SERVICE_NAMES.KNOWLEDGE,
    stage: SERVICE_LIFECYCLE_STAGES.DEPLOYMENT,
    observabilityRefs: []
  });

  const testingRegistry = new ServiceLifecycleRegistry({ records: [testingRecord] });
  const operationRegistry = new ServiceLifecycleRegistry({ records: [operationRecord] });

  assert.equal(
    testingRegistry.validateTransition(BUSINESS_SERVICE_NAMES.CALENDAR, SERVICE_LIFECYCLE_STAGES.TESTING)
      .errors[0].code,
    SERVICE_MAP_ERROR_CODES.SERVICE_LIFECYCLE_REQUIREMENT_MISSING
  );
  assert.equal(
    operationRegistry.validateTransition(BUSINESS_SERVICE_NAMES.KNOWLEDGE, SERVICE_LIFECYCLE_STAGES.OPERATION)
      .errors[0].code,
    SERVICE_MAP_ERROR_CODES.SERVICE_LIFECYCLE_REQUIREMENT_MISSING
  );
});

test('service lifecycle registry exposes governance checkpoints and lifecycle metrics', () => {
  const registry = new ServiceLifecycleRegistry();
  const record = registry.getRecord(BUSINESS_SERVICE_NAMES.WORKFLOW);

  assert.equal(
    registry.getGovernanceCheckpoint(SERVICE_LIFECYCLE_STAGES.DEPLOYMENT),
    SERVICE_LIFECYCLE_CHECKPOINTS.PRODUCTION_READINESS_REVIEW
  );
  assert.equal(record.metrics.incidentCount, 0);
  assert.equal(record.metrics.deprecationStatus, 'active');
});

test('service map registration exposes service lifecycle through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addServiceMap(services);

  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('ServiceLifecycleRegistry');

  assert.equal(registry.listRecords().length, 10);
  assert.equal(
    registry.getRecord(BUSINESS_SERVICE_NAMES.AUTHENTICATION).architecturalOwner,
    'architecture'
  );
});

function createLifecycleRecord({
  serviceName,
  stage,
  businessOwner = `${serviceName}-business-owner`,
  technicalOwner = `${serviceName}-technical-owner`,
  architecturalOwner = 'architecture',
  documentationRefs = ['architecture/003-service-map/02-service-catalog.md'],
  testRefs = ['tests/service-map/'],
  observabilityRefs = ['architecture/010-observability-architecture/'],
  securityRefs = ['architecture/008-security-architecture/'],
  retirementStrategy = 'Retirement requires architecture review.'
}) {
  return new ServiceLifecycleRecord({
    serviceName,
    stage,
    businessOwner,
    technicalOwner,
    architecturalOwner,
    documentationRefs,
    testRefs,
    observabilityRefs,
    securityRefs,
    retirementStrategy
  });
}
