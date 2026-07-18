import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DEPLOYMENT_MODEL_ERROR_CODES,
  FUTURE_SERVICE_DEPLOYMENT_CAPABILITIES,
  SERVICE_COMPATIBILITY_APPROACHES,
  SERVICE_CONFIGURATION_INPUTS,
  SERVICE_DEPENDENCY_CATEGORIES,
  SERVICE_DEPLOYMENT_GOVERNANCE,
  SERVICE_DEPLOYMENT_LIFECYCLE_ACTIVITIES,
  SERVICE_DEPLOYMENT_LIFECYCLE_STAGES,
  SERVICE_DEPLOYMENT_OBJECTIVES,
  SERVICE_DEPLOYMENT_OBSERVABILITY,
  SERVICE_DEPLOYMENT_STRATEGIES,
  SERVICE_DEPLOYMENT_UNIT_OWNERSHIP,
  SERVICE_HEALTH_SIGNALS,
  SERVICE_PACKAGE_CONTENTS,
  SERVICE_RECOVERY_CAPABILITIES,
  SERVICE_SCALING_CONSIDERATIONS,
  SERVICE_VERSION_METADATA_FIELDS,
  ServiceDeploymentDescriptor,
  ServiceDeploymentUnit,
  ServicePackageDefinition,
  ServiceReleasePolicy,
  addDeploymentModel
} from '../../src/deployment-model/index.js';

test('service deployment exposes objectives and lifecycle sequence', () => {
  const descriptor = new ServiceDeploymentDescriptor();

  assert.ok(descriptor.objectives().includes(SERVICE_DEPLOYMENT_OBJECTIVES.INDEPENDENT_DEPLOYMENTS));
  assert.ok(descriptor.objectives().includes(SERVICE_DEPLOYMENT_OBJECTIVES.ENTERPRISE_RESILIENCE));
  assert.deepEqual(descriptor.deploymentLifecycle(), [
    SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.BUILD,
    SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.PACKAGE,
    SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.VALIDATE,
    SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.DEPLOY,
    SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.OPERATE,
    SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.SCALE,
    SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.UPGRADE,
    SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.RETIRE
  ]);
});

test('service deployment registers independently deployable service examples', () => {
  const descriptor = new ServiceDeploymentDescriptor();

  assert.deepEqual(descriptor.listUnits().map(unit => unit.serviceName), [
    'Gateway Service',
    'Reservation Service',
    'Guest Service',
    'AI Orchestrator Service',
    'Knowledge Service'
  ]);
  assert.equal(descriptor.getUnit('Reservation Service').businessCapability, 'Reservation business capability');
});

test('service deployment rejects units that break service autonomy', () => {
  assert.throws(
    () =>
      new ServiceDeploymentDescriptor({
        units: [
          new ServiceDeploymentUnit({
            serviceName: '',
            businessCapability: '',
            deploymentBoundary: '',
            ownership: [SERVICE_DEPLOYMENT_UNIT_OWNERSHIP.RUNTIME_PROCESS],
            independentlyDeployable: false,
            sharesDeploymentLifecycle: true,
            requiresPlatformWideDowntime: true,
            requiresCoordinatedRelease: true,
            requiresGlobalConfigurationChange: true,
            crossesBusinessOwnership: true,
            altersBusinessBehavior: true,
            platformSpecific: true
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.SERVICE_DEPLOYMENT_UNIT_INVALID &&
      error.details.errors.some(message => message.includes('identify a service')) &&
      error.details.errors.some(message => message.includes('business capability')) &&
      error.details.errors.some(message => message.includes('independently deployable')) &&
      error.details.errors.some(message => message.includes('business ownership')) &&
      error.details.errors.some(message => message.includes('platform independent'))
  );
});

test('service deployment validates reproducible self-contained packages', () => {
  const descriptor = new ServiceDeploymentDescriptor();
  const valid = descriptor.validatePackage(
    new ServicePackageDefinition({
      packageName: 'reservation-service',
      serviceName: 'Reservation Service',
      contents: Object.values(SERVICE_PACKAGE_CONTENTS)
    })
  );
  const invalid = descriptor.validatePackage({
    packageName: '',
    serviceName: '',
    contents: [SERVICE_PACKAGE_CONTENTS.EXECUTABLE_APPLICATION],
    reproducible: false,
    selfContained: false,
    externalizedConfiguration: false,
    rebuildRequiredForConfigurationChange: true,
    platformSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /package name/);
  assert.match(invalid.errors.join('\n'), /runtime-dependencies/);
  assert.match(invalid.errors.join('\n'), /reproducible deployments/);
  assert.match(invalid.errors.join('\n'), /external to the application/);
  assert.match(invalid.errors.join('\n'), /rebuilding deployment artifacts/);
});

test('service deployment validates release policy and compatibility strategy', () => {
  const descriptor = new ServiceDeploymentDescriptor();
  const valid = descriptor.validateReleasePolicy(
    new ServiceReleasePolicy({
      serviceName: 'Reservation Service',
      versionMetadata: Object.values(SERVICE_VERSION_METADATA_FIELDS),
      compatibilityApproaches: Object.values(SERVICE_COMPATIBILITY_APPROACHES),
      deploymentStrategies: [SERVICE_DEPLOYMENT_STRATEGIES.ROLLING]
    })
  );
  const invalid = descriptor.validateReleasePolicy({
    serviceName: '',
    versionMetadata: [SERVICE_VERSION_METADATA_FIELDS.SERVICE_VERSION],
    compatibilityApproaches: [SERVICE_COMPATIBILITY_APPROACHES.VERSIONED_APIS],
    deploymentStrategies: ['big-bang'],
    controlledUpgrade: false,
    fastRollback: false,
    minimalDowntime: false,
    breakingChangeMigrationPath: false,
    dependenciesExplicit: false,
    stableDependencyInterfaces: false,
    platformSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /identify a service/);
  assert.match(invalid.errors.join('\n'), /build-identifier/);
  assert.match(invalid.errors.join('\n'), /contract-evolution/);
  assert.match(invalid.errors.join('\n'), /Unsupported deployment strategy/);
  assert.match(invalid.errors.join('\n'), /fast rollback/);
  assert.match(invalid.errors.join('\n'), /stable interfaces/);
});

test('service deployment validates configuration and dependency management', () => {
  const descriptor = new ServiceDeploymentDescriptor();
  const validConfiguration = descriptor.validateConfiguration(Object.values(SERVICE_CONFIGURATION_INPUTS));
  const validDependencies = descriptor.validateDependencies(Object.values(SERVICE_DEPENDENCY_CATEGORIES));
  const invalidConfiguration = descriptor.validateConfiguration([
    SERVICE_CONFIGURATION_INPUTS.ENVIRONMENT_VARIABLES
  ]);

  assert.equal(validConfiguration.isValid, true);
  assert.equal(validDependencies.isValid, true);
  assert.equal(invalidConfiguration.isValid, false);
  assert.match(invalidConfiguration.errors.join('\n'), /secret-references/);
  assert.match(invalidConfiguration.errors.join('\n'), /runtime-policies/);
});

test('service deployment validates scaling, health, recovery, observability, governance, and lifecycle operations', () => {
  const descriptor = new ServiceDeploymentDescriptor();
  const valid = descriptor.validateOperations({
    scaling: Object.values(SERVICE_SCALING_CONSIDERATIONS),
    health: Object.values(SERVICE_HEALTH_SIGNALS),
    recovery: Object.values(SERVICE_RECOVERY_CAPABILITIES),
    observability: Object.values(SERVICE_DEPLOYMENT_OBSERVABILITY),
    governance: Object.values(SERVICE_DEPLOYMENT_GOVERNANCE),
    lifecycle: Object.values(SERVICE_DEPLOYMENT_LIFECYCLE_ACTIVITIES)
  });
  const invalid = descriptor.validateOperations({
    scaling: [SERVICE_SCALING_CONSIDERATIONS.REQUEST_VOLUME],
    health: [SERVICE_HEALTH_SIGNALS.STARTUP_READINESS],
    recovery: [SERVICE_RECOVERY_CAPABILITIES.AUTOMATIC_RESTART],
    observability: [SERVICE_DEPLOYMENT_OBSERVABILITY.STRUCTURED_LOGGING],
    governance: [SERVICE_DEPLOYMENT_GOVERNANCE.NAMING_CONVENTIONS],
    lifecycle: [SERVICE_DEPLOYMENT_LIFECYCLE_ACTIVITIES.PROVISIONING]
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /cpu-utilization/);
  assert.match(invalid.errors.join('\n'), /runtime-health/);
  assert.match(invalid.errors.join('\n'), /rollback/);
  assert.match(invalid.errors.join('\n'), /deployment-metadata/);
  assert.match(invalid.errors.join('\n'), /version-standards/);
  assert.match(invalid.errors.join('\n'), /Decommissioning/);
});

test('service deployment reports future capabilities without implementing them', () => {
  const descriptor = new ServiceDeploymentDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SERVICE_DEPLOYMENT_CAPABILITIES.GITOPS_BASED_DEPLOYMENT));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SERVICE_DEPLOYMENT_CAPABILITIES.PREDICTIVE_ROLLBACK));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SERVICE_DEPLOYMENT_CAPABILITIES.AUTONOMOUS_SERVICE_OPTIMIZATION));
});

test('service deployment assertion rejects incomplete metadata', () => {
  assert.throws(
    () => new ServiceDeploymentDescriptor({ units: [] }).assertDeployment(),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.SERVICE_DEPLOYMENT_INVALID &&
      error.details.errors.some(message => message.includes('service deployment examples'))
  );
});

test('service deployment descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeploymentModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ServiceDeploymentDescriptor');

  assert.ok(descriptor instanceof ServiceDeploymentDescriptor);
  assert.equal(descriptor.assertDeployment().isValid, true);
});
