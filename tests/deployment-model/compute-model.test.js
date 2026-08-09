import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  COMPUTE_CATEGORY_NAMES,
  COMPUTE_ISOLATION_AREAS,
  COMPUTE_LIFECYCLE_STAGES,
  COMPUTE_OBJECTIVES,
  COMPUTE_OPERATIONAL_CHARACTERISTICS,
  COMPUTE_RESOURCE_OWNERSHIP,
  COMPUTE_SCHEDULING_CONSIDERATIONS,
  COMPUTE_WORKLOAD_CLASSIFICATIONS,
  DEPLOYMENT_MODEL_ERROR_CODES,
  FUTURE_COMPUTE_CAPABILITIES,
  ComputeCategory,
  ComputeLifecycleRecord,
  ComputeModelDescriptor,
  ComputeResourceAllocation,
  ComputeSchedulingPolicy,
  addDeploymentModel
} from '../../src/deployment-model/index.js';

test('compute model exposes objectives, flow, and resource ownership', () => {
  const descriptor = new ComputeModelDescriptor();

  assert.ok(descriptor.objectives().includes(COMPUTE_OBJECTIVES.INDEPENDENT_WORKLOAD_EXECUTION));
  assert.ok(descriptor.objectives().includes(COMPUTE_OBJECTIVES.ELASTIC_CAPACITY));
  assert.deepEqual(descriptor.computeFlow(), [
    'Client Requests',
    COMPUTE_CATEGORY_NAMES.API_COMPUTE,
    COMPUTE_CATEGORY_NAMES.BUSINESS_COMPUTE,
    COMPUTE_CATEGORY_NAMES.AI_COMPUTE,
    COMPUTE_CATEGORY_NAMES.BACKGROUND_COMPUTE,
    COMPUTE_CATEGORY_NAMES.INFRASTRUCTURE_COMPUTE
  ]);
  assert.ok(descriptor.resourceOwnership().includes(COMPUTE_RESOURCE_OWNERSHIP.CPU_ALLOCATION));
});

test('compute model registers documented compute categories', () => {
  const descriptor = new ComputeModelDescriptor();

  assert.deepEqual(descriptor.listCategories().map(category => category.categoryName), [
    COMPUTE_CATEGORY_NAMES.API_COMPUTE,
    COMPUTE_CATEGORY_NAMES.BUSINESS_COMPUTE,
    COMPUTE_CATEGORY_NAMES.AI_COMPUTE,
    COMPUTE_CATEGORY_NAMES.BACKGROUND_COMPUTE,
    COMPUTE_CATEGORY_NAMES.INFRASTRUCTURE_COMPUTE
  ]);
  assert.equal(descriptor.getCategory(COMPUTE_CATEGORY_NAMES.AI_COMPUTE).workloadClassification, COMPUTE_WORKLOAD_CLASSIFICATIONS.AI_WORKLOADS);
  assert.ok(descriptor.getCategory(COMPUTE_CATEGORY_NAMES.BACKGROUND_COMPUTE).responsibilities.includes('Event processing'));
});

test('compute model rejects invalid technology-specific compute categories', () => {
  assert.throws(
    () =>
      new ComputeModelDescriptor({
        categories: [
          new ComputeCategory({
            categoryName: 'VM Type',
            primaryResponsibility: '',
            workloadClassification: 'GPU Instance',
            responsibilities: [],
            characteristics: [],
            independentlyScalable: false,
            isolated: false,
            ownsBusinessLogic: true,
            technologySpecific: true
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.COMPUTE_CATEGORY_INVALID &&
      error.details.errors.some(message => message.includes('Unsupported compute category')) &&
      error.details.errors.some(message => message.includes('primary responsibility')) &&
      error.details.errors.some(message => message.includes('business logic')) &&
      error.details.errors.some(message => message.includes('specific hardware'))
  );
});

test('compute model validates independent resource allocation', () => {
  const descriptor = new ComputeModelDescriptor();
  const valid = descriptor.validateResourceAllocation(
    new ComputeResourceAllocation({
      computeCategory: COMPUTE_CATEGORY_NAMES.API_COMPUTE
    })
  );
  const invalid = descriptor.validateResourceAllocation({
    computeCategory: 'Unknown Compute',
    ownsCpuAllocation: false,
    ownsMemoryAllocation: false,
    ownsStorageLimits: false,
    ownsNetworkAccess: false,
    ownsRuntimeConfiguration: false,
    independentBetweenWorkloads: false,
    predictableUtilization: false,
    resourceContention: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /unknown compute category/);
  assert.match(invalid.errors.join('\n'), /CPU allocation/);
  assert.match(invalid.errors.join('\n'), /independent between workloads/);
  assert.match(invalid.errors.join('\n'), /resource contention/);
});

test('compute model validates stability-focused scheduling policy', () => {
  const descriptor = new ComputeModelDescriptor();
  const valid = descriptor.validateScheduling(
    new ComputeSchedulingPolicy({
      policyName: 'Stable Workload Placement',
      considerations: Object.values(COMPUTE_SCHEDULING_CONSIDERATIONS)
    })
  );
  const invalid = descriptor.validateScheduling({
    policyName: '',
    considerations: [COMPUTE_SCHEDULING_CONSIDERATIONS.RESOURCE_AVAILABILITY],
    optimizesPlatformStability: false,
    optimizesIndividualThroughputOnly: true,
    respectsFaultDomains: false,
    respectsCapacityConstraints: false,
    preservesWorkloadIsolation: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /policy must have a name/);
  assert.match(invalid.errors.join('\n'), /execution-priority/);
  assert.match(invalid.errors.join('\n'), /platform stability/);
  assert.match(invalid.errors.join('\n'), /fault domains/);
});

test('compute model validates compute lifecycle and operational characteristics', () => {
  const descriptor = new ComputeModelDescriptor();
  const valid = descriptor.validateLifecycle(
    new ComputeLifecycleRecord({
      computeCategory: COMPUTE_CATEGORY_NAMES.BUSINESS_COMPUTE,
      stages: Object.values(COMPUTE_LIFECYCLE_STAGES)
    })
  );
  const invalid = descriptor.validateLifecycle({
    computeCategory: COMPUTE_CATEGORY_NAMES.AI_COMPUTE,
    stages: [
      COMPUTE_LIFECYCLE_STAGES.PROVISION,
      COMPUTE_LIFECYCLE_STAGES.EXECUTE
    ],
    independentOfApplicationLifecycle: false,
    supportsAutomatedRecovery: false,
    supportsGracefulShutdown: false,
    supportsRollingUpdates: false,
    supportsIndependentReplacement: false,
    predictableStartup: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /6 stages/);
  assert.match(invalid.errors.join('\n'), /Deploy/);
  assert.match(invalid.errors.join('\n'), /application lifecycle/);
  assert.match(invalid.errors.join('\n'), /predictable startup/);
});

test('compute model exposes isolation, operational characteristics, and future capabilities', () => {
  const descriptor = new ComputeModelDescriptor();

  assert.ok(descriptor.isolationAreas().includes(COMPUTE_ISOLATION_AREAS.AI_WORKLOADS));
  assert.ok(descriptor.isolationAreas().includes(COMPUTE_ISOLATION_AREAS.ADMINISTRATIVE_OPERATIONS));
  assert.ok(descriptor.operationalCharacteristics().includes(COMPUTE_OPERATIONAL_CHARACTERISTICS.ROLLING_UPDATES));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_COMPUTE_CAPABILITIES.GPU_SCHEDULING));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_COMPUTE_CAPABILITIES.HETEROGENEOUS_COMPUTE_CLUSTERS));
});

test('compute model assertion rejects incomplete category metadata', () => {
  assert.throws(
    () => new ComputeModelDescriptor({ categories: [] }).assertModel(),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.COMPUTE_MODEL_INVALID &&
      error.details.errors.some(message => message.includes('primary compute categories'))
  );
});

test('compute model descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeploymentModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ComputeModelDescriptor');

  assert.ok(descriptor instanceof ComputeModelDescriptor);
  assert.equal(descriptor.assertModel().isValid, true);
});
