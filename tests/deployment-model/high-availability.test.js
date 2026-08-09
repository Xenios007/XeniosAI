import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AUTOMATIC_RECOVERY_MECHANISMS,
  AVAILABILITY_GOVERNANCE_CONTROLS,
  AVAILABILITY_MODEL_STAGES,
  AVAILABILITY_MONITORING_METRICS,
  AvailabilityComponent,
  CAPACITY_BUFFER_DRIVERS,
  DEPENDENCY_RESILIENCE_STRATEGIES,
  DEPLOYMENT_MODEL_ERROR_CODES,
  DegradationStrategy,
  FAILURE_DETECTION_MECHANISMS,
  FAILURE_DOMAIN_TYPES,
  FUTURE_HIGH_AVAILABILITY_CAPABILITIES,
  FailureDomainPolicy,
  GRACEFUL_DEGRADATION_STRATEGIES,
  HEALTH_INDICATORS,
  HIGH_AVAILABILITY_OBJECTIVES,
  HighAvailabilityDescriptor,
  MAINTENANCE_PRINCIPLES,
  REDUNDANCY_TARGETS,
  addDeploymentModel
} from '../../src/deployment-model/index.js';

test('high availability exposes objectives and availability model sequence', () => {
  const descriptor = new HighAvailabilityDescriptor();

  assert.ok(descriptor.objectives().includes(HIGH_AVAILABILITY_OBJECTIVES.CONTINUOUS_SERVICE_DELIVERY));
  assert.ok(descriptor.objectives().includes(HIGH_AVAILABILITY_OBJECTIVES.GRACEFUL_DEGRADATION));
  assert.deepEqual(descriptor.availabilityModel(), [
    AVAILABILITY_MODEL_STAGES.REDUNDANCY,
    AVAILABILITY_MODEL_STAGES.HEALTH_MONITORING,
    AVAILABILITY_MODEL_STAGES.FAILURE_DETECTION,
    AVAILABILITY_MODEL_STAGES.AUTOMATIC_RECOVERY,
    AVAILABILITY_MODEL_STAGES.SERVICE_CONTINUITY
  ]);
});

test('high availability registers documented redundancy targets', () => {
  const descriptor = new HighAvailabilityDescriptor();

  assert.deepEqual(descriptor.listComponents().map(component => component.redundancyTarget), [
    REDUNDANCY_TARGETS.GATEWAYS,
    REDUNDANCY_TARGETS.APPLICATION_SERVICES,
    REDUNDANCY_TARGETS.AI_SERVICES,
    REDUNDANCY_TARGETS.INFRASTRUCTURE_SERVICES,
    REDUNDANCY_TARGETS.STORAGE_SYSTEMS,
    REDUNDANCY_TARGETS.NETWORKING_COMPONENTS
  ]);
  assert.equal(descriptor.getComponent('Application Service Runtime').businessCapability, 'Business service execution');
});

test('high availability rejects components with single points of failure', () => {
  assert.throws(
    () =>
      new HighAvailabilityDescriptor({
        components: [
          new AvailabilityComponent({
            componentName: '',
            redundancyTarget: 'single-server',
            businessCapability: '',
            critical: false,
            redundantInstances: false,
            independentlyRecoverable: false,
            statelessExecution: false,
            healthMonitored: false,
            automaticRecovery: false,
            loadDistributed: false,
            singlePointOfFailure: true,
            platformSpecific: true
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.AVAILABILITY_COMPONENT_INVALID &&
      error.details.errors.some(message => message.includes('runtime component')) &&
      error.details.errors.some(message => message.includes('Unsupported redundancy target')) &&
      error.details.errors.some(message => message.includes('multiple runtime instances')) &&
      error.details.errors.some(message => message.includes('single points of failure')) &&
      error.details.errors.some(message => message.includes('infrastructure vendors'))
  );
});

test('high availability validates failure domain isolation', () => {
  const descriptor = new HighAvailabilityDescriptor();
  const valid = descriptor.validateFailureDomain(
    new FailureDomainPolicy({
      policyName: 'Runtime Failure Isolation',
      failureDomains: Object.values(FAILURE_DOMAIN_TYPES)
    })
  );
  const invalid = descriptor.validateFailureDomain({
    policyName: '',
    failureDomains: [FAILURE_DOMAIN_TYPES.SERVICE_INSTANCE],
    isolatesFailures: false,
    preventsUnnecessaryPropagation: false,
    supportsIndependentRecovery: false,
    supportsMultiZoneDistribution: false,
    validInSingleZone: false,
    platformSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /policy name/);
  assert.match(invalid.errors.join('\n'), /compute-node/);
  assert.match(invalid.errors.join('\n'), /isolated within defined boundaries/);
  assert.match(invalid.errors.join('\n'), /single availability zone/);
});

test('high availability validates graceful degradation', () => {
  const descriptor = new HighAvailabilityDescriptor();
  const valid = descriptor.validateDegradation(
    new DegradationStrategy({
      strategyName: 'Essential Capability Mode',
      strategies: Object.values(GRACEFUL_DEGRADATION_STRATEGIES)
    })
  );
  const invalid = descriptor.validateDegradation({
    strategyName: '',
    strategies: [GRACEFUL_DEGRADATION_STRATEGIES.REDUCED_AI_FUNCTIONALITY],
    prioritizesCriticalWorkflows: false,
    preservesEssentialCapabilities: false,
    avoidsSystemicFailure: false,
    reversible: false,
    platformSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /strategy name/);
  assert.match(invalid.errors.join('\n'), /cached-responses/);
  assert.match(invalid.errors.join('\n'), /Critical business workflows/);
  assert.match(invalid.errors.join('\n'), /systemic failure points/);
});

test('high availability validates health monitoring, failure detection, and recovery', () => {
  const descriptor = new HighAvailabilityDescriptor();
  const valid = descriptor.validateHealthManagement({
    indicators: Object.values(HEALTH_INDICATORS),
    detection: Object.values(FAILURE_DETECTION_MECHANISMS),
    recovery: Object.values(AUTOMATIC_RECOVERY_MECHANISMS)
  });
  const invalid = descriptor.validateHealthManagement({
    indicators: [HEALTH_INDICATORS.READINESS],
    detection: [FAILURE_DETECTION_MECHANISMS.HEALTH_CHECKS],
    recovery: [AUTOMATIC_RECOVERY_MECHANISMS.RESTART_FAILED_INSTANCES]
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /liveness/);
  assert.match(invalid.errors.join('\n'), /timeout-monitoring/);
  assert.match(invalid.errors.join('\n'), /rebalance-traffic/);
});

test('high availability validates operational readiness', () => {
  const descriptor = new HighAvailabilityDescriptor();
  const valid = descriptor.validateOperationalReadiness({
    dependencyResilience: Object.values(DEPENDENCY_RESILIENCE_STRATEGIES),
    maintenance: Object.values(MAINTENANCE_PRINCIPLES),
    monitoring: Object.values(AVAILABILITY_MONITORING_METRICS),
    capacity: Object.values(CAPACITY_BUFFER_DRIVERS),
    governance: Object.values(AVAILABILITY_GOVERNANCE_CONTROLS)
  });
  const invalid = descriptor.validateOperationalReadiness({
    dependencyResilience: [DEPENDENCY_RESILIENCE_STRATEGIES.RETRY_POLICIES],
    maintenance: [MAINTENANCE_PRINCIPLES.ROLLING_UPDATES],
    monitoring: [AVAILABILITY_MONITORING_METRICS.SERVICE_UPTIME],
    capacity: [CAPACITY_BUFFER_DRIVERS.TRAFFIC_SPIKES],
    governance: [AVAILABILITY_GOVERNANCE_CONTROLS.SERVICE_CLASSIFICATION]
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /circuit-breakers/);
  assert.match(invalid.errors.join('\n'), /health-aware-deployment/);
  assert.match(invalid.errors.join('\n'), /recovery-time/);
  assert.match(invalid.errors.join('\n'), /instance-failures/);
  assert.match(invalid.errors.join('\n'), /resilience-testing/);
});

test('high availability reports future capabilities without implementing them', () => {
  const descriptor = new HighAvailabilityDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_HIGH_AVAILABILITY_CAPABILITIES.ACTIVE_ACTIVE_MULTI_REGION_DEPLOYMENTS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_HIGH_AVAILABILITY_CAPABILITIES.AUTONOMOUS_FAILURE_REMEDIATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_HIGH_AVAILABILITY_CAPABILITIES.AUTONOMOUS_RESILIENCE_OPTIMIZATION));
});

test('high availability assertion rejects incomplete metadata', () => {
  assert.throws(
    () => new HighAvailabilityDescriptor({ components: [] }).assertAvailability(),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.HIGH_AVAILABILITY_INVALID &&
      error.details.errors.some(message => message.includes('redundancy targets'))
  );
});

test('high availability descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeploymentModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('HighAvailabilityDescriptor');

  assert.ok(descriptor instanceof HighAvailabilityDescriptor);
  assert.equal(descriptor.assertAvailability().isValid, true);
});
