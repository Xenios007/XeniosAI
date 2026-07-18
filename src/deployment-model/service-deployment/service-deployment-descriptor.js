import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  SERVICE_VERSION_METADATA_FIELDS
} from '../constants.js';
import { ServiceDeploymentUnit } from '../contracts/service-deployment-unit.js';
import { ServiceDeploymentValidationResult } from '../contracts/service-deployment-validation-result.js';
import { ServicePackageDefinition } from '../contracts/service-package-definition.js';
import { ServiceReleasePolicy } from '../contracts/service-release-policy.js';

const DEPLOYMENT_LIFECYCLE = Object.freeze([
  SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.BUILD,
  SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.PACKAGE,
  SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.VALIDATE,
  SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.DEPLOY,
  SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.OPERATE,
  SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.SCALE,
  SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.UPGRADE,
  SERVICE_DEPLOYMENT_LIFECYCLE_STAGES.RETIRE
]);

const DEFAULT_UNITS = Object.freeze([
  unit('Gateway Service', 'API routing and traffic control', 'Gateway service boundary'),
  unit('Reservation Service', 'Reservation business capability', 'Reservation service boundary'),
  unit('Guest Service', 'Guest business capability', 'Guest service boundary'),
  unit('AI Orchestrator Service', 'AI coordination capability', 'AI orchestrator service boundary'),
  unit('Knowledge Service', 'Knowledge retrieval capability', 'Knowledge service boundary')
]);

export class ServiceDeploymentDescriptor {
  constructor({ units = DEFAULT_UNITS } = {}) {
    this.units = new Map();

    for (const deploymentUnit of units) {
      this.registerUnit(deploymentUnit);
    }
  }

  objectives() {
    return Object.freeze(Object.values(SERVICE_DEPLOYMENT_OBJECTIVES));
  }

  deploymentLifecycle() {
    return DEPLOYMENT_LIFECYCLE;
  }

  unitOwnership() {
    return Object.freeze(Object.values(SERVICE_DEPLOYMENT_UNIT_OWNERSHIP));
  }

  packageContents() {
    return Object.freeze(Object.values(SERVICE_PACKAGE_CONTENTS));
  }

  deploymentStrategies() {
    return Object.freeze(Object.values(SERVICE_DEPLOYMENT_STRATEGIES));
  }

  versionMetadataFields() {
    return Object.freeze(Object.values(SERVICE_VERSION_METADATA_FIELDS));
  }

  compatibilityApproaches() {
    return Object.freeze(Object.values(SERVICE_COMPATIBILITY_APPROACHES));
  }

  configurationInputs() {
    return Object.freeze(Object.values(SERVICE_CONFIGURATION_INPUTS));
  }

  dependencyCategories() {
    return Object.freeze(Object.values(SERVICE_DEPENDENCY_CATEGORIES));
  }

  scalingConsiderations() {
    return Object.freeze(Object.values(SERVICE_SCALING_CONSIDERATIONS));
  }

  healthSignals() {
    return Object.freeze(Object.values(SERVICE_HEALTH_SIGNALS));
  }

  recoveryCapabilities() {
    return Object.freeze(Object.values(SERVICE_RECOVERY_CAPABILITIES));
  }

  observabilityCapabilities() {
    return Object.freeze(Object.values(SERVICE_DEPLOYMENT_OBSERVABILITY));
  }

  governanceControls() {
    return Object.freeze(Object.values(SERVICE_DEPLOYMENT_GOVERNANCE));
  }

  lifecycleActivities() {
    return Object.freeze(Object.values(SERVICE_DEPLOYMENT_LIFECYCLE_ACTIVITIES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_SERVICE_DEPLOYMENT_CAPABILITIES));
  }

  listUnits() {
    return Object.freeze([...this.units.values()]);
  }

  getUnit(serviceName) {
    return this.units.get(serviceName);
  }

  registerUnit(unitInput) {
    const deploymentUnit = unitInput instanceof ServiceDeploymentUnit
      ? unitInput
      : new ServiceDeploymentUnit(unitInput);
    const result = this.validateUnit(deploymentUnit);

    if (!result.isValid) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.SERVICE_DEPLOYMENT_UNIT_INVALID,
        'Service deployment unit violates ARCH-007-07.',
        { errors: result.errors }
      );
    }

    this.units.set(deploymentUnit.serviceName, deploymentUnit);
    return this;
  }

  validateUnit(unitInput) {
    const deploymentUnit = unitInput instanceof ServiceDeploymentUnit
      ? unitInput
      : new ServiceDeploymentUnit(unitInput);
    const errors = [];

    if (!deploymentUnit.serviceName) errors.push('Service deployment unit must identify a service.');
    if (!deploymentUnit.businessCapability) errors.push('Service deployment unit must align to a business capability.');
    if (!deploymentUnit.deploymentBoundary) errors.push('Service deployment unit must define a deployment boundary.');
    appendMissing(errors, deploymentUnit.ownership, this.unitOwnership(), 'Deployment unit must own');
    if (deploymentUnit.independentlyDeployable !== true) errors.push('Every service should be independently deployable.');
    if (deploymentUnit.sharesDeploymentLifecycle === true) errors.push('Services should never share deployment lifecycles unless they represent a single business capability.');
    if (deploymentUnit.requiresPlatformWideDowntime === true) errors.push('Service deployment must not require platform-wide downtime.');
    if (deploymentUnit.requiresCoordinatedRelease === true) errors.push('Service deployment must not require coordinated releases for unrelated services.');
    if (deploymentUnit.requiresGlobalConfigurationChange === true) errors.push('Service deployment must not require global configuration changes.');
    if (deploymentUnit.crossesBusinessOwnership === true) errors.push('Deployment boundaries should never cross business ownership.');
    if (deploymentUnit.altersBusinessBehavior === true) errors.push('Deployment decisions should never alter domain ownership or business behavior.');
    if (deploymentUnit.platformSpecific === true) errors.push('Service Deployment must remain deployment-platform independent.');

    return validation(errors);
  }

  validatePackage(packageInput) {
    const packageDefinition = packageInput instanceof ServicePackageDefinition
      ? packageInput
      : new ServicePackageDefinition(packageInput);
    const errors = [];

    if (!packageDefinition.packageName) errors.push('Service package must have a package name.');
    if (!packageDefinition.serviceName) errors.push('Service package must identify its service.');
    appendMissing(errors, packageDefinition.contents, this.packageContents(), 'Service package should include');
    if (packageDefinition.reproducible !== true) errors.push('Packaging should produce reproducible deployments.');
    if (packageDefinition.selfContained !== true) errors.push('Services should be packaged as self-contained deployment artifacts.');
    if (packageDefinition.externalizedConfiguration !== true) errors.push('Deployment configuration should remain external to the application.');
    if (packageDefinition.rebuildRequiredForConfigurationChange === true) errors.push('Configuration changes should not require rebuilding deployment artifacts.');
    if (packageDefinition.platformSpecific === true) errors.push('Service packages must remain independent of deployment technologies.');

    return validation(errors);
  }

  validateReleasePolicy(policyInput) {
    const policy = policyInput instanceof ServiceReleasePolicy
      ? policyInput
      : new ServiceReleasePolicy(policyInput);
    const errors = [];

    if (!policy.serviceName) errors.push('Release policy must identify a service.');
    appendMissing(errors, policy.versionMetadata, this.versionMetadataFields(), 'Every deployed service should expose');
    appendMissing(errors, policy.compatibilityApproaches, this.compatibilityApproaches(), 'Compatibility strategy should include');
    if (policy.deploymentStrategies.length === 0) errors.push('Deployment strategy must be selected from supported architecture strategies.');
    for (const strategy of policy.deploymentStrategies) {
      if (!this.deploymentStrategies().includes(strategy)) errors.push(`Unsupported deployment strategy: ${strategy}.`);
    }
    if (policy.controlledUpgrade !== true) errors.push('Service deployment must support controlled upgrades.');
    if (policy.fastRollback !== true) errors.push('Service deployment must support fast rollback.');
    if (policy.minimalDowntime !== true) errors.push('Service deployment must minimize downtime.');
    if (policy.breakingChangeMigrationPath !== true) errors.push('Breaking changes should be introduced through controlled migration paths.');
    if (policy.dependenciesExplicit !== true) errors.push('Service dependencies should remain explicit.');
    if (policy.stableDependencyInterfaces !== true) errors.push('Dependencies should be expressed through stable interfaces rather than implementation details.');
    if (policy.platformSpecific === true) errors.push('Deployment strategy selection must remain independent of deployment tooling.');

    return validation(errors);
  }

  validateConfiguration(inputs = []) {
    const errors = [];

    appendMissing(errors, inputs, this.configurationInputs(), 'Deployment configuration should support');

    return validation(errors);
  }

  validateDependencies(categories = []) {
    const errors = [];

    appendMissing(errors, categories, this.dependencyCategories(), 'Dependency management should include');

    return validation(errors);
  }

  validateOperations({ scaling = [], health = [], recovery = [], observability = [], governance = [], lifecycle = [] } = {}) {
    const errors = [];

    appendMissing(errors, scaling, this.scalingConsiderations(), 'Scaling strategy should consider');
    appendMissing(errors, health, this.healthSignals(), 'Health management should expose');
    appendMissing(errors, recovery, this.recoveryCapabilities(), 'Fault recovery should support');
    appendMissing(errors, observability, this.observabilityCapabilities(), 'Deployment observability should provide');
    appendMissing(errors, governance, this.governanceControls(), 'Deployment governance must include');
    appendMissing(errors, lifecycle, this.lifecycleActivities(), 'Deployment lifecycle management should include');

    return validation(errors);
  }

  assertDeployment() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Service Deployment must include all documented objectives.');
    if (this.deploymentLifecycle().length !== 8) errors.push('Service Deployment must include the documented deployment lifecycle.');
    if (this.units.size !== 5) errors.push('Service Deployment must include documented service deployment examples.');

    if (errors.length > 0) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.SERVICE_DEPLOYMENT_INVALID,
        'Service Deployment violates ARCH-007-07.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function unit(serviceName, businessCapability, deploymentBoundary) {
  return new ServiceDeploymentUnit({
    serviceName,
    businessCapability,
    deploymentBoundary,
    ownership: Object.values(SERVICE_DEPLOYMENT_UNIT_OWNERSHIP)
  });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new ServiceDeploymentValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
