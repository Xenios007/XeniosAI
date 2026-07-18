import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DEPLOYMENT_ENVIRONMENT_NAMES,
  DEPLOYMENT_LAYER_NAMES,
  DEPLOYMENT_MODEL_ERROR_CODES,
  DEPLOYMENT_OBJECTIVES,
  DEPLOYMENT_PRINCIPLES,
  DEPLOYMENT_RESILIENCE_STRATEGIES,
  DEPLOYMENT_SCALABILITY_STRATEGIES,
  DEPLOYMENT_UNIT_RESPONSIBILITIES,
  FUTURE_DEPLOYMENT_CAPABILITIES,
  RUNTIME_RESPONSIBILITIES,
  DeploymentBoundary,
  DeploymentEnvironment,
  DeploymentOverviewDescriptor,
  DeploymentUnit,
  addDeploymentModel
} from '../../src/deployment-model/index.js';

test('deployment overview exposes documented objectives, principles, and responsibilities', () => {
  const descriptor = new DeploymentOverviewDescriptor();

  assert.ok(descriptor.objectives().includes(DEPLOYMENT_OBJECTIVES.HIGH_AVAILABILITY));
  assert.ok(descriptor.objectives().includes(DEPLOYMENT_OBJECTIVES.INDEPENDENT_SERVICE_DEPLOYMENT));
  assert.ok(descriptor.principles().includes(DEPLOYMENT_PRINCIPLES.INFRASTRUCTURE_INDEPENDENCE));
  assert.ok(descriptor.unitResponsibilities().includes(DEPLOYMENT_UNIT_RESPONSIBILITIES.SCALING_POLICY));
  assert.ok(descriptor.runtimeResponsibilities().includes(RUNTIME_RESPONSIBILITIES.WORKLOAD_SCHEDULING));
});

test('deployment overview preserves the documented deployment layer order', () => {
  const descriptor = new DeploymentOverviewDescriptor();

  assert.deepEqual(descriptor.canonicalLayerNames(), [
    DEPLOYMENT_LAYER_NAMES.USERS,
    DEPLOYMENT_LAYER_NAMES.EDGE,
    DEPLOYMENT_LAYER_NAMES.GATEWAY,
    DEPLOYMENT_LAYER_NAMES.APPLICATION_SERVICES,
    DEPLOYMENT_LAYER_NAMES.AI_SERVICES,
    DEPLOYMENT_LAYER_NAMES.INFRASTRUCTURE_SERVICES,
    DEPLOYMENT_LAYER_NAMES.STORAGE,
    DEPLOYMENT_LAYER_NAMES.PLATFORM_INFRASTRUCTURE
  ]);
});

test('deployment overview exposes isolated environments and future capabilities as placeholders', () => {
  const descriptor = new DeploymentOverviewDescriptor();

  assert.deepEqual(descriptor.describeEnvironments().map(environment => environment.environmentName), [
    DEPLOYMENT_ENVIRONMENT_NAMES.DEVELOPMENT,
    DEPLOYMENT_ENVIRONMENT_NAMES.INTEGRATION,
    DEPLOYMENT_ENVIRONMENT_NAMES.TESTING,
    DEPLOYMENT_ENVIRONMENT_NAMES.STAGING,
    DEPLOYMENT_ENVIRONMENT_NAMES.PRODUCTION,
    DEPLOYMENT_ENVIRONMENT_NAMES.DISASTER_RECOVERY
  ]);
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_DEPLOYMENT_CAPABILITIES.MULTI_REGION_DEPLOYMENTS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_DEPLOYMENT_CAPABILITIES.CARBON_AWARE_WORKLOAD_SCHEDULING));
});

test('deployment overview validates independent service deployment units', () => {
  const descriptor = new DeploymentOverviewDescriptor();
  const valid = descriptor.validateUnit(
    new DeploymentUnit({
      unitName: 'booking-service',
      serviceName: 'Booking Service'
    })
  );
  const invalid = descriptor.validateUnit({
    unitName: '',
    serviceName: '',
    ownsRuntimeProcess: false,
    ownsConfiguration: false,
    ownsScalingPolicy: false,
    ownsLifecycle: false,
    ownsHealth: false,
    ownsOperationalMetrics: false,
    sharesInternalRuntimeState: true,
    coordinatedDeploymentRequired: true,
    altersBusinessOwnership: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /service boundary/);
  assert.match(invalid.errors.join('\n'), /internal runtime state/);
  assert.match(invalid.errors.join('\n'), /independently deployable/);
  assert.match(invalid.errors.join('\n'), /vendor lock-in/);
});

test('deployment overview validates isolated portable environments', () => {
  const descriptor = new DeploymentOverviewDescriptor();
  const valid = descriptor.validateEnvironment(
    new DeploymentEnvironment({
      environmentName: DEPLOYMENT_ENVIRONMENT_NAMES.PRODUCTION
    })
  );
  const invalid = descriptor.validateEnvironment({
    environmentName: 'Preview',
    isolated: false,
    behaviorConsistent: false,
    operationallySeparate: false,
    supportsRepeatableDeployment: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported deployment environment/);
  assert.match(invalid.errors.join('\n'), /operational isolation/);
  assert.match(invalid.errors.join('\n'), /repeatable deployments/);
  assert.match(invalid.errors.join('\n'), /infrastructure portable/);
});

test('deployment overview validates service-aligned deployment boundaries', () => {
  const descriptor = new DeploymentOverviewDescriptor();
  const valid = descriptor.validateBoundary(
    new DeploymentBoundary({
      unitName: 'payment-service'
    })
  );
  const invalid = descriptor.validateBoundary({
    unitName: '',
    serviceBoundaryAligned: false,
    ownsRuntimeLifecycle: false,
    ownsOperationalConfiguration: false,
    ownsResourceAllocation: false,
    ownsDeploymentCadence: false,
    violatesBusinessOwnership: true,
    introducesInfrastructureCoupling: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /service boundaries/);
  assert.match(invalid.errors.join('\n'), /resource allocation/);
  assert.match(invalid.errors.join('\n'), /business ownership/);
  assert.match(invalid.errors.join('\n'), /unnecessary coupling/);
});

test('deployment overview validates scalability and resilience strategies', () => {
  const descriptor = new DeploymentOverviewDescriptor();

  assert.ok(descriptor.scalabilityStrategies().includes(DEPLOYMENT_SCALABILITY_STRATEGIES.STATELESS_COMPUTE));
  assert.ok(descriptor.scalabilityStrategies().includes(DEPLOYMENT_SCALABILITY_STRATEGIES.INDEPENDENT_WORKLOAD_SCALING));
  assert.ok(descriptor.resilienceStrategies().includes(DEPLOYMENT_RESILIENCE_STRATEGIES.GRACEFUL_DEGRADATION));
  assert.ok(descriptor.resilienceStrategies().includes(DEPLOYMENT_RESILIENCE_STRATEGIES.FAILURE_RECOVERY));
});

test('deployment overview assertion rejects incomplete overview metadata', () => {
  assert.throws(
    () => new DeploymentOverviewDescriptor({ layers: [], environments: [] }).assertOverview(),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.DEPLOYMENT_OVERVIEW_INVALID &&
      error.details.errors.some(message => message.includes('deployment layers')) &&
      error.details.errors.some(message => message.includes('isolated environments'))
  );
});

test('deployment overview descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeploymentModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('DeploymentOverviewDescriptor');

  assert.ok(descriptor instanceof DeploymentOverviewDescriptor);
  assert.equal(descriptor.assertOverview().isValid, true);
});
