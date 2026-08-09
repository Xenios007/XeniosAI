import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  RUNTIME_RESPONSIBILITIES
} from '../constants.js';
import { DeploymentBoundary } from '../contracts/deployment-boundary.js';
import { DeploymentEnvironment } from '../contracts/deployment-environment.js';
import { DeploymentLayer } from '../contracts/deployment-layer.js';
import { DeploymentUnit } from '../contracts/deployment-unit.js';
import { DeploymentValidationResult } from '../contracts/deployment-validation-result.js';

const LAYER_SEQUENCE = Object.freeze([
  layer(DEPLOYMENT_LAYER_NAMES.USERS, 1, 'Access platform capabilities.'),
  layer(DEPLOYMENT_LAYER_NAMES.EDGE, 2, 'Provide external entry and proximity concerns.', [DEPLOYMENT_LAYER_NAMES.USERS]),
  layer(DEPLOYMENT_LAYER_NAMES.GATEWAY, 3, 'Admit and route platform requests.', [DEPLOYMENT_LAYER_NAMES.EDGE]),
  layer(DEPLOYMENT_LAYER_NAMES.APPLICATION_SERVICES, 4, 'Host business-facing application services.', [DEPLOYMENT_LAYER_NAMES.GATEWAY]),
  layer(DEPLOYMENT_LAYER_NAMES.AI_SERVICES, 5, 'Host AI runtime capabilities without owning business rules.', [DEPLOYMENT_LAYER_NAMES.APPLICATION_SERVICES]),
  layer(DEPLOYMENT_LAYER_NAMES.INFRASTRUCTURE_SERVICES, 6, 'Provide runtime support capabilities.', [DEPLOYMENT_LAYER_NAMES.APPLICATION_SERVICES, DEPLOYMENT_LAYER_NAMES.AI_SERVICES]),
  layer(DEPLOYMENT_LAYER_NAMES.STORAGE, 7, 'Provide storage access without changing business semantics.', [DEPLOYMENT_LAYER_NAMES.INFRASTRUCTURE_SERVICES]),
  layer(DEPLOYMENT_LAYER_NAMES.PLATFORM_INFRASTRUCTURE, 8, 'Host underlying infrastructure capabilities.', [DEPLOYMENT_LAYER_NAMES.STORAGE])
]);

const DEFAULT_ENVIRONMENTS = Object.freeze(
  Object.values(DEPLOYMENT_ENVIRONMENT_NAMES).map(environmentName => new DeploymentEnvironment({ environmentName }))
);

export class DeploymentOverviewDescriptor {
  constructor({ layers = LAYER_SEQUENCE, environments = DEFAULT_ENVIRONMENTS } = {}) {
    this.layers = Object.freeze(layers.map(item => (item instanceof DeploymentLayer ? item : new DeploymentLayer(item))));
    this.environments = Object.freeze(environments.map(item => (item instanceof DeploymentEnvironment ? item : new DeploymentEnvironment(item))));
  }

  objectives() {
    return Object.freeze(Object.values(DEPLOYMENT_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(DEPLOYMENT_PRINCIPLES));
  }

  runtimeResponsibilities() {
    return Object.freeze(Object.values(RUNTIME_RESPONSIBILITIES));
  }

  unitResponsibilities() {
    return Object.freeze(Object.values(DEPLOYMENT_UNIT_RESPONSIBILITIES));
  }

  scalabilityStrategies() {
    return Object.freeze(Object.values(DEPLOYMENT_SCALABILITY_STRATEGIES));
  }

  resilienceStrategies() {
    return Object.freeze(Object.values(DEPLOYMENT_RESILIENCE_STRATEGIES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_DEPLOYMENT_CAPABILITIES));
  }

  describeLayers() {
    return this.layers;
  }

  canonicalLayerNames() {
    return Object.freeze(this.layers.map(layerDefinition => layerDefinition.layerName));
  }

  describeEnvironments() {
    return this.environments;
  }

  validateUnit(unitInput) {
    const unit = unitInput instanceof DeploymentUnit ? unitInput : new DeploymentUnit(unitInput);
    const errors = [];

    if (!unit.unitName) errors.push('Deployment unit must have a runtime name.');
    if (!unit.serviceName) errors.push('Deployment unit must map to a service boundary.');
    if (unit.ownsRuntimeProcess !== true) errors.push('Deployment unit must own its runtime process.');
    if (unit.ownsConfiguration !== true) errors.push('Deployment unit must own operational configuration.');
    if (unit.ownsScalingPolicy !== true) errors.push('Deployment unit must own its scaling policy.');
    if (unit.ownsLifecycle !== true) errors.push('Deployment unit must own runtime lifecycle.');
    if (unit.ownsHealth !== true) errors.push('Deployment unit must own health reporting.');
    if (unit.ownsOperationalMetrics !== true) errors.push('Deployment unit must own operational metrics.');
    if (unit.sharesInternalRuntimeState === true) errors.push('Deployment units should not share internal runtime state.');
    if (unit.coordinatedDeploymentRequired === true) errors.push('Deployment unit should be independently deployable whenever possible.');
    if (unit.altersBusinessOwnership === true) errors.push('Deployment must not alter business ownership or domain behavior.');
    if (unit.vendorSpecific === true) errors.push('Deployment architecture must avoid vendor lock-in at the architectural level.');

    return validation(errors);
  }

  validateEnvironment(environmentInput) {
    const environment = environmentInput instanceof DeploymentEnvironment
      ? environmentInput
      : new DeploymentEnvironment(environmentInput);
    const errors = [];

    if (!environment.environmentName) errors.push('Deployment environment must have a name.');
    if (!Object.values(DEPLOYMENT_ENVIRONMENT_NAMES).includes(environment.environmentName)) {
      errors.push(`Unsupported deployment environment: ${environment.environmentName}.`);
    }
    if (environment.isolated !== true) errors.push('Deployment environments must maintain operational isolation.');
    if (environment.behaviorConsistent !== true) errors.push('Deployment environments should behave consistently.');
    if (environment.operationallySeparate !== true) errors.push('Deployment environments must remain operationally separate.');
    if (environment.supportsRepeatableDeployment !== true) errors.push('Deployment environments must support repeatable deployments.');
    if (environment.vendorSpecific === true) errors.push('Deployment environments must remain infrastructure portable.');

    return validation(errors);
  }

  validateBoundary(boundaryInput) {
    const boundary = boundaryInput instanceof DeploymentBoundary ? boundaryInput : new DeploymentBoundary(boundaryInput);
    const errors = [];

    if (!boundary.unitName) errors.push('Deployment boundary must identify a deployment unit.');
    if (boundary.serviceBoundaryAligned !== true) errors.push('Deployment boundaries should align closely with service boundaries.');
    if (boundary.ownsRuntimeLifecycle !== true) errors.push('Deployment boundary must own runtime lifecycle.');
    if (boundary.ownsOperationalConfiguration !== true) errors.push('Deployment boundary must own operational configuration.');
    if (boundary.ownsResourceAllocation !== true) errors.push('Deployment boundary must own resource allocation.');
    if (boundary.ownsDeploymentCadence !== true) errors.push('Deployment boundary must own deployment cadence.');
    if (boundary.violatesBusinessOwnership === true) errors.push('Deployment boundaries must never violate business ownership.');
    if (boundary.introducesInfrastructureCoupling === true) errors.push('Infrastructure should never introduce unnecessary coupling between services.');

    return validation(errors);
  }

  assertOverview() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Deployment overview must include all documented objectives.');
    if (this.principles().length !== 6) errors.push('Deployment overview must include all documented principles.');
    if (this.layers.length !== 8) errors.push('Deployment overview must include the documented deployment layers.');
    if (this.environments.length !== 6) errors.push('Deployment overview must include the documented isolated environments.');

    if (errors.length > 0) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.DEPLOYMENT_OVERVIEW_INVALID,
        'Deployment overview violates ARCH-007-01.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function layer(layerName, sequence, responsibility, dependsOn = []) {
  return new DeploymentLayer({ layerName, sequence, responsibility, dependsOn });
}

function validation(errors) {
  return new DeploymentValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
