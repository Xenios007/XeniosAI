import test from 'node:test';
import assert from 'node:assert/strict';

import { BUSINESS_SERVICE_NAMES } from '../../src/business-services/index.js';
import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  EXTERNAL_SERVICE_DEPENDENCIES,
  SERVICE_DEPENDENCY_TYPES,
  SERVICE_MAP_ERROR_CODES,
  ServiceDependencyGraph,
  ServiceDependencyRecord,
  addServiceMap
} from '../../src/service-map/index.js';

test('service dependency graph exposes the ARCH-003-04 dependency matrix', () => {
  const graph = new ServiceDependencyGraph();

  assert.deepEqual(
    graph.listDependenciesFor(BUSINESS_SERVICE_NAMES.BOOKING).map(record => record.targetServiceName),
    [
      BUSINESS_SERVICE_NAMES.PRICING,
      BUSINESS_SERVICE_NAMES.CALENDAR,
      BUSINESS_SERVICE_NAMES.NOTIFICATION,
      BUSINESS_SERVICE_NAMES.PROPERTY
    ]
  );
  assert.deepEqual(
    graph.listDependenciesFor(BUSINESS_SERVICE_NAMES.PRICING).map(record => record.targetServiceName),
    [BUSINESS_SERVICE_NAMES.PROPERTY]
  );
  assert.deepEqual(graph.listDependenciesFor(BUSINESS_SERVICE_NAMES.CALENDAR), []);
  assert.deepEqual(
    graph.listDependenciesFor(BUSINESS_SERVICE_NAMES.WORKFLOW).map(record => record.targetServiceName),
    [
      BUSINESS_SERVICE_NAMES.BOOKING,
      BUSINESS_SERVICE_NAMES.CALENDAR,
      BUSINESS_SERVICE_NAMES.PRICING,
      BUSINESS_SERVICE_NAMES.NOTIFICATION,
      BUSINESS_SERVICE_NAMES.AUTHENTICATION
    ]
  );
});

test('service dependency graph validates allowed and forbidden dependencies', () => {
  const graph = new ServiceDependencyGraph();
  const allowed = graph.validateDependency(
    BUSINESS_SERVICE_NAMES.BOOKING,
    BUSINESS_SERVICE_NAMES.PRICING
  );
  const forbidden = graph.validateDependency(
    BUSINESS_SERVICE_NAMES.PRICING,
    BUSINESS_SERVICE_NAMES.BOOKING
  );

  assert.equal(allowed.isAllowed, true);
  assert.equal(allowed.dependency.dependencyType, SERVICE_DEPENDENCY_TYPES.FUNCTIONAL);
  assert.equal(forbidden.isAllowed, false);
  assert.equal(forbidden.errors[0].code, SERVICE_MAP_ERROR_CODES.SERVICE_DEPENDENCY_NOT_ALLOWED);
});

test('service dependency graph represents external platform dependencies explicitly', () => {
  const graph = new ServiceDependencyGraph();
  const notification = graph.getDependency(
    BUSINESS_SERVICE_NAMES.NOTIFICATION,
    EXTERNAL_SERVICE_DEPENDENCIES.INTEGRATION_LAYER
  );
  const media = graph.getDependency(
    BUSINESS_SERVICE_NAMES.MEDIA,
    EXTERNAL_SERVICE_DEPENDENCIES.OBJECT_STORAGE
  );

  assert.equal(notification.dependencyType, SERVICE_DEPENDENCY_TYPES.INFRASTRUCTURE);
  assert.equal(media.dependencyType, SERVICE_DEPENDENCY_TYPES.INFRASTRUCTURE);
});

test('service dependency graph rejects duplicate and circular dependencies', () => {
  assert.throws(
    () =>
      new ServiceDependencyGraph({
        dependencies: [
          new ServiceDependencyRecord({
            sourceServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
            targetServiceName: BUSINESS_SERVICE_NAMES.PRICING
          }),
          new ServiceDependencyRecord({
            sourceServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
            targetServiceName: BUSINESS_SERVICE_NAMES.PRICING
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.DUPLICATE_SERVICE_DEPENDENCY
  );

  assert.throws(
    () =>
      new ServiceDependencyGraph({
        dependencies: [
          new ServiceDependencyRecord({
            sourceServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
            targetServiceName: BUSINESS_SERVICE_NAMES.PRICING
          }),
          new ServiceDependencyRecord({
            sourceServiceName: BUSINESS_SERVICE_NAMES.PRICING,
            targetServiceName: BUSINESS_SERVICE_NAMES.BOOKING
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.CIRCULAR_SERVICE_DEPENDENCY
  );
});

test('service map registration exposes service dependency graph through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addServiceMap(services);

  const provider = services.buildServiceProvider();
  const graph = provider.getRequiredService('ServiceDependencyGraph');

  assert.equal(graph.listDependencies().length, 17);
  assert.equal(
    graph.assertDependencyAllowed(BUSINESS_SERVICE_NAMES.KNOWLEDGE, BUSINESS_SERVICE_NAMES.PROPERTY)
      .dependencyType,
    SERVICE_DEPENDENCY_TYPES.INFORMATIONAL
  );
});
