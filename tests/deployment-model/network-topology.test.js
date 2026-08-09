import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DEPLOYMENT_MODEL_ERROR_CODES,
  FUTURE_NETWORK_CAPABILITIES,
  NETWORK_COMMUNICATION_METHODS,
  NETWORK_DISCOVERY_CAPABILITIES,
  NETWORK_GOVERNANCE_CONTROLS,
  NETWORK_OBJECTIVES,
  NETWORK_OBSERVABILITY_CAPABILITIES,
  NETWORK_RESILIENCE_CAPABILITIES,
  NETWORK_SEGMENTATION_AREAS,
  NETWORK_TRAFFIC_DIRECTIONS,
  NETWORK_ZONE_NAMES,
  NetworkRoute,
  NetworkTopologyDescriptor,
  NetworkZone,
  addDeploymentModel
} from '../../src/deployment-model/index.js';

test('network topology exposes objectives and layered zone flow', () => {
  const descriptor = new NetworkTopologyDescriptor();

  assert.ok(descriptor.objectives().includes(NETWORK_OBJECTIVES.SECURE_COMMUNICATION));
  assert.ok(descriptor.objectives().includes(NETWORK_OBJECTIVES.INFRASTRUCTURE_PORTABILITY));
  assert.deepEqual(descriptor.networkFlow(), [
    NETWORK_ZONE_NAMES.EDGE,
    NETWORK_ZONE_NAMES.GATEWAY,
    NETWORK_ZONE_NAMES.APPLICATION,
    NETWORK_ZONE_NAMES.AI,
    NETWORK_ZONE_NAMES.INFRASTRUCTURE,
    NETWORK_ZONE_NAMES.DATA
  ]);
});

test('network topology registers documented zones and responsibilities', () => {
  const descriptor = new NetworkTopologyDescriptor();

  assert.equal(descriptor.getZone(NETWORK_ZONE_NAMES.EDGE).primaryResponsibility, 'Public platform entry');
  assert.equal(descriptor.getZone(NETWORK_ZONE_NAMES.EDGE).acceptsUnrestrictedPublicTraffic, true);
  assert.equal(descriptor.getZone(NETWORK_ZONE_NAMES.GATEWAY).primaryResponsibility, 'API routing and traffic control');
  assert.equal(descriptor.getZone(NETWORK_ZONE_NAMES.DATA).hostsPersistentStorage, true);
});

test('network topology rejects invalid public exposure and infrastructure-specific zones', () => {
  assert.throws(
    () =>
      new NetworkTopologyDescriptor({
        zones: [
          new NetworkZone({
            zoneName: 'Vendor Firewall Zone',
            primaryResponsibility: '',
            responsibilities: [],
            acceptsUnrestrictedPublicTraffic: true,
            exposesInternalTopology: true,
            hostsPersistentStorage: true,
            infrastructureSpecific: true
          })
        ],
        routes: []
      }),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.NETWORK_ZONE_INVALID &&
      error.details.errors.some(message => message.includes('Unsupported network zone')) &&
      error.details.errors.some(message => message.includes('primary responsibility')) &&
      error.details.errors.some(message => message.includes('Only the Edge Zone')) &&
      error.details.errors.some(message => message.includes('infrastructure independent'))
  );
});

test('network topology validates north-south and east-west communication rules', () => {
  const descriptor = new NetworkTopologyDescriptor();
  const valid = descriptor.validateRoute(
    new NetworkRoute({
      routeName: 'Gateway to Application',
      sourceZone: NETWORK_ZONE_NAMES.GATEWAY,
      targetZone: NETWORK_ZONE_NAMES.APPLICATION,
      trafficDirection: NETWORK_TRAFFIC_DIRECTIONS.NORTH_SOUTH,
      communicationMethod: NETWORK_COMMUNICATION_METHODS.REST_APIS,
      businessPurpose: 'Route public API calls to business services.'
    })
  );
  const invalid = descriptor.validateRoute({
    routeName: '',
    sourceZone: 'Client Network',
    targetZone: 'Shared Database',
    trafficDirection: 'diagonal',
    communicationMethod: 'hard-coded-ip',
    businessPurpose: '',
    traversesControlledEntry: false,
    authenticated: false,
    authorized: false,
    observable: false,
    directDatabaseExposure: true,
    hardCodedAddressing: true,
    infrastructureSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /unknown source zone/);
  assert.match(invalid.errors.join('\n'), /Unsupported traffic direction/);
  assert.match(invalid.errors.join('\n'), /Edge and Gateway zones/);
  assert.match(invalid.errors.join('\n'), /direct database exposure/);
  assert.match(invalid.errors.join('\n'), /hard-coded/);
});

test('network topology validates segmentation and service discovery capabilities', () => {
  const descriptor = new NetworkTopologyDescriptor();
  const validSegmentation = descriptor.validateSegmentation(Object.values(NETWORK_SEGMENTATION_AREAS));
  const validDiscovery = descriptor.validateServiceDiscovery(Object.values(NETWORK_DISCOVERY_CAPABILITIES));
  const invalidDiscovery = descriptor.validateServiceDiscovery([
    NETWORK_DISCOVERY_CAPABILITIES.LOCATION_INDEPENDENCE
  ]);

  assert.equal(validSegmentation.isValid, true);
  assert.equal(validDiscovery.isValid, true);
  assert.equal(invalidDiscovery.isValid, false);
  assert.match(invalidDiscovery.errors.join('\n'), /load-balancing/);
  assert.match(invalidDiscovery.errors.join('\n'), /health-awareness/);
});

test('network topology validates resilience, observability, and governance', () => {
  const descriptor = new NetworkTopologyDescriptor();
  const validResilience = descriptor.validateResilience(Object.values(NETWORK_RESILIENCE_CAPABILITIES));
  const validObservability = descriptor.validateObservability(Object.values(NETWORK_OBSERVABILITY_CAPABILITIES));
  const validGovernance = descriptor.validateGovernance(Object.values(NETWORK_GOVERNANCE_CONTROLS));
  const invalidObservability = descriptor.validateObservability([
    NETWORK_OBSERVABILITY_CAPABILITIES.REQUEST_TRACING
  ]);

  assert.equal(validResilience.isValid, true);
  assert.equal(validObservability.isValid, true);
  assert.equal(validGovernance.isValid, true);
  assert.equal(invalidObservability.isValid, false);
  assert.match(invalidObservability.errors.join('\n'), /latency-measurement/);
  assert.match(invalidObservability.errors.join('\n'), /audit-logging/);
});

test('network topology reports future capabilities without implementing them', () => {
  const descriptor = new NetworkTopologyDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_NETWORK_CAPABILITIES.MULTI_REGION_ROUTING));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_NETWORK_CAPABILITIES.SERVICE_MESH_INTEGRATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_NETWORK_CAPABILITIES.AUTONOMOUS_NETWORK_POLICY_MANAGEMENT));
});

test('network topology assertion rejects incomplete topology metadata', () => {
  assert.throws(
    () => new NetworkTopologyDescriptor({ zones: [], routes: [] }).assertTopology(),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.NETWORK_TOPOLOGY_INVALID &&
      error.details.errors.some(message => message.includes('network zones')) &&
      error.details.errors.some(message => message.includes('communication flows'))
  );
});

test('network topology descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeploymentModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('NetworkTopologyDescriptor');

  assert.ok(descriptor instanceof NetworkTopologyDescriptor);
  assert.equal(descriptor.assertTopology().isValid, true);
});
