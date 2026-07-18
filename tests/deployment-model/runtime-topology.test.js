import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DEPLOYMENT_MODEL_ERROR_CODES,
  FUTURE_RUNTIME_CAPABILITIES,
  RUNTIME_FAILURE_HANDLING_CAPABILITIES,
  RUNTIME_GOVERNANCE_CONTROLS,
  RUNTIME_INTERACTION_PATTERNS,
  RUNTIME_ISOLATION_AREAS,
  RUNTIME_LAYER_NAMES,
  RUNTIME_OBJECTIVES,
  RUNTIME_OBSERVABILITY_CAPABILITIES,
  WORKLOAD_CATEGORIES,
  RuntimeComponent,
  RuntimeInteraction,
  RuntimeTopologyDescriptor,
  RuntimeWorkloadProfile,
  addDeploymentModel
} from '../../src/deployment-model/index.js';

test('runtime topology exposes objectives and execution layers', () => {
  const descriptor = new RuntimeTopologyDescriptor();

  assert.ok(descriptor.objectives().includes(RUNTIME_OBJECTIVES.PREDICTABLE_EXECUTION));
  assert.ok(descriptor.objectives().includes(RUNTIME_OBJECTIVES.PLATFORM_OBSERVABILITY));
  assert.deepEqual(descriptor.runtimeFlow(), [
    RUNTIME_LAYER_NAMES.CLIENTS,
    RUNTIME_LAYER_NAMES.EDGE_LAYER,
    RUNTIME_LAYER_NAMES.GATEWAY_LAYER,
    RUNTIME_LAYER_NAMES.APPLICATION_SERVICES,
    RUNTIME_LAYER_NAMES.AI_SERVICES,
    RUNTIME_LAYER_NAMES.INFRASTRUCTURE_SERVICES,
    RUNTIME_LAYER_NAMES.DATA_SERVICES
  ]);
});

test('runtime topology preserves documented request flow and interaction patterns', () => {
  const descriptor = new RuntimeTopologyDescriptor();

  assert.deepEqual(descriptor.requestFlow(), [
    'Client',
    'Edge',
    'Gateway',
    'Application Service',
    'Domain Logic',
    'Infrastructure',
    'Storage'
  ]);
  assert.ok(descriptor.interactionPatterns().includes(RUNTIME_INTERACTION_PATTERNS.SYNCHRONOUS_REQUESTS));
  assert.ok(descriptor.interactionPatterns().includes(RUNTIME_INTERACTION_PATTERNS.PUBLISH_SUBSCRIBE));
  assert.ok(descriptor.interactionPatterns().includes(RUNTIME_INTERACTION_PATTERNS.WORKFLOW_COORDINATION));
});

test('runtime topology registers documented workload categories', () => {
  const descriptor = new RuntimeTopologyDescriptor();

  assert.deepEqual(descriptor.listWorkloads().map(workload => workload.workloadCategory), [
    WORKLOAD_CATEGORIES.INTERACTIVE,
    WORKLOAD_CATEGORIES.BACKGROUND,
    WORKLOAD_CATEGORIES.AI,
    WORKLOAD_CATEGORIES.OPERATIONAL
  ]);
  assert.ok(descriptor.listWorkloads().find(workload => workload.workloadCategory === WORKLOAD_CATEGORIES.AI).examples.includes('Agent execution'));
});

test('runtime topology validates runtime components and boundary ownership', () => {
  const descriptor = new RuntimeTopologyDescriptor();
  const valid = descriptor.validateComponent(
    new RuntimeComponent({
      componentName: 'booking-api',
      runtimeLayer: RUNTIME_LAYER_NAMES.APPLICATION_SERVICES,
      operationalResponsibility: 'Execute booking use cases',
      serviceOwner: 'Booking Service'
    })
  );
  const invalid = descriptor.validateComponent({
    componentName: '',
    runtimeLayer: 'Container Platform',
    operationalResponsibility: '',
    serviceOwner: '',
    stateless: false,
    ownsProcessLifecycle: false,
    ownsResourceAllocation: false,
    ownsRuntimeConfiguration: false,
    ownsHealthReporting: false,
    ownsScalingPolicy: false,
    altersBusinessBehavior: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported runtime layer/);
  assert.match(invalid.errors.join('\n'), /operational responsibility/);
  assert.match(invalid.errors.join('\n'), /stateless/);
  assert.match(invalid.errors.join('\n'), /vendor neutral/);
});

test('runtime topology validates business-driven service interaction', () => {
  const descriptor = new RuntimeTopologyDescriptor();
  const valid = descriptor.validateInteraction(
    new RuntimeInteraction({
      sourceLayer: RUNTIME_LAYER_NAMES.GATEWAY_LAYER,
      targetLayer: RUNTIME_LAYER_NAMES.APPLICATION_SERVICES,
      pattern: RUNTIME_INTERACTION_PATTERNS.SYNCHRONOUS_REQUESTS,
      businessJustification: 'Route authenticated request to business use case'
    })
  );
  const invalid = descriptor.validateInteraction({
    sourceLayer: RUNTIME_LAYER_NAMES.CLIENTS,
    targetLayer: RUNTIME_LAYER_NAMES.DATA_SERVICES,
    pattern: 'shared-memory',
    businessJustification: '',
    wellDefinedInterface: false,
    clientsBypassGateway: true,
    infrastructurePreferenceDriven: true,
    modifiesBusinessOwnership: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported runtime interaction pattern/);
  assert.match(invalid.errors.join('\n'), /business requirements/);
  assert.match(invalid.errors.join('\n'), /Clients must never communicate directly/);
  assert.match(invalid.errors.join('\n'), /business ownership/);
});

test('runtime topology validates workload separation and stateless execution', () => {
  const descriptor = new RuntimeTopologyDescriptor();
  const valid = descriptor.validateWorkload(
    new RuntimeWorkloadProfile({
      workloadCategory: WORKLOAD_CATEGORIES.BACKGROUND,
      examples: ['Scheduled jobs', 'Batch processing']
    })
  );
  const invalid = descriptor.validateWorkload({
    workloadCategory: 'Mixed Workloads',
    examples: [],
    independentlyScalable: false,
    isolated: false,
    statelessWherePractical: false,
    sharesFailureDomain: true,
    storesPersistentStateInRuntime: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported workload category/);
  assert.match(invalid.errors.join('\n'), /scale independently/);
  assert.match(invalid.errors.join('\n'), /fault isolation/);
  assert.match(invalid.errors.join('\n'), /Persistent state/);
});

test('runtime topology validates isolation, failure handling, observability, and governance capabilities', () => {
  const descriptor = new RuntimeTopologyDescriptor();
  const valid = descriptor.validateCapabilities({
    isolation: Object.values(RUNTIME_ISOLATION_AREAS),
    failureHandling: Object.values(RUNTIME_FAILURE_HANDLING_CAPABILITIES),
    observability: Object.values(RUNTIME_OBSERVABILITY_CAPABILITIES),
    governance: Object.values(RUNTIME_GOVERNANCE_CONTROLS)
  });
  const invalid = descriptor.validateCapabilities({
    isolation: [RUNTIME_ISOLATION_AREAS.SERVICES],
    failureHandling: [RUNTIME_FAILURE_HANDLING_CAPABILITIES.AUTOMATIC_RETRIES],
    observability: [RUNTIME_OBSERVABILITY_CAPABILITIES.HEALTH_ENDPOINTS],
    governance: [RUNTIME_GOVERNANCE_CONTROLS.DEPLOYMENT_STANDARDS]
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /ai-execution/);
  assert.match(invalid.errors.join('\n'), /circuit-breaking/);
  assert.match(invalid.errors.join('\n'), /distributed-traces/);
  assert.match(invalid.errors.join('\n'), /capacity-planning/);
});

test('runtime topology reports future capabilities without implementing them', () => {
  const descriptor = new RuntimeTopologyDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_RUNTIME_CAPABILITIES.EDGE_EXECUTION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_RUNTIME_CAPABILITIES.GPU_EXECUTION_POOLS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_RUNTIME_CAPABILITIES.ADAPTIVE_WORKLOAD_PLACEMENT));
});

test('runtime topology assertion rejects incomplete workload metadata', () => {
  assert.throws(
    () => new RuntimeTopologyDescriptor({ workloads: [] }).assertTopology(),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.RUNTIME_TOPOLOGY_INVALID &&
      error.details.errors.some(message => message.includes('workload categories'))
  );
});

test('runtime topology descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeploymentModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('RuntimeTopologyDescriptor');

  assert.ok(descriptor instanceof RuntimeTopologyDescriptor);
  assert.equal(descriptor.assertTopology().isValid, true);
});
