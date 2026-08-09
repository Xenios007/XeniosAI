import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AUTOMATIC_RECOVERY_MECHANISMS,
  AVAILABILITY_GOVERNANCE_CONTROLS,
  AVAILABILITY_MODEL_STAGES,
  AVAILABILITY_MONITORING_METRICS,
  CAPACITY_BUFFER_DRIVERS,
  DEPENDENCY_RESILIENCE_STRATEGIES,
  DEPLOYMENT_MODEL_ERROR_CODES,
  FAILURE_DETECTION_MECHANISMS,
  FAILURE_DOMAIN_TYPES,
  FUTURE_HIGH_AVAILABILITY_CAPABILITIES,
  GRACEFUL_DEGRADATION_STRATEGIES,
  HEALTH_INDICATORS,
  HIGH_AVAILABILITY_OBJECTIVES,
  MAINTENANCE_PRINCIPLES,
  REDUNDANCY_TARGETS
} from '../constants.js';
import { AvailabilityComponent } from '../contracts/availability-component.js';
import { AvailabilityValidationResult } from '../contracts/availability-validation-result.js';
import { DegradationStrategy } from '../contracts/degradation-strategy.js';
import { FailureDomainPolicy } from '../contracts/failure-domain-policy.js';

const AVAILABILITY_MODEL = Object.freeze([
  AVAILABILITY_MODEL_STAGES.REDUNDANCY,
  AVAILABILITY_MODEL_STAGES.HEALTH_MONITORING,
  AVAILABILITY_MODEL_STAGES.FAILURE_DETECTION,
  AVAILABILITY_MODEL_STAGES.AUTOMATIC_RECOVERY,
  AVAILABILITY_MODEL_STAGES.SERVICE_CONTINUITY
]);

const DEFAULT_COMPONENTS = Object.freeze([
  component('Gateway Runtime', REDUNDANCY_TARGETS.GATEWAYS, 'Public request admission'),
  component('Application Service Runtime', REDUNDANCY_TARGETS.APPLICATION_SERVICES, 'Business service execution'),
  component('AI Service Runtime', REDUNDANCY_TARGETS.AI_SERVICES, 'AI processing continuity'),
  component('Infrastructure Service Runtime', REDUNDANCY_TARGETS.INFRASTRUCTURE_SERVICES, 'Shared platform support'),
  component('Storage Runtime', REDUNDANCY_TARGETS.STORAGE_SYSTEMS, 'Persistent data availability'),
  component('Network Runtime', REDUNDANCY_TARGETS.NETWORKING_COMPONENTS, 'Controlled platform connectivity')
]);

export class HighAvailabilityDescriptor {
  constructor({ components = DEFAULT_COMPONENTS } = {}) {
    this.components = new Map();

    for (const availabilityComponent of components) {
      this.registerComponent(availabilityComponent);
    }
  }

  objectives() {
    return Object.freeze(Object.values(HIGH_AVAILABILITY_OBJECTIVES));
  }

  availabilityModel() {
    return AVAILABILITY_MODEL;
  }

  redundancyTargets() {
    return Object.freeze(Object.values(REDUNDANCY_TARGETS));
  }

  failureDomains() {
    return Object.freeze(Object.values(FAILURE_DOMAIN_TYPES));
  }

  healthIndicators() {
    return Object.freeze(Object.values(HEALTH_INDICATORS));
  }

  failureDetectionMechanisms() {
    return Object.freeze(Object.values(FAILURE_DETECTION_MECHANISMS));
  }

  recoveryMechanisms() {
    return Object.freeze(Object.values(AUTOMATIC_RECOVERY_MECHANISMS));
  }

  degradationStrategies() {
    return Object.freeze(Object.values(GRACEFUL_DEGRADATION_STRATEGIES));
  }

  dependencyResilienceStrategies() {
    return Object.freeze(Object.values(DEPENDENCY_RESILIENCE_STRATEGIES));
  }

  maintenancePrinciples() {
    return Object.freeze(Object.values(MAINTENANCE_PRINCIPLES));
  }

  monitoringMetrics() {
    return Object.freeze(Object.values(AVAILABILITY_MONITORING_METRICS));
  }

  capacityBufferDrivers() {
    return Object.freeze(Object.values(CAPACITY_BUFFER_DRIVERS));
  }

  governanceControls() {
    return Object.freeze(Object.values(AVAILABILITY_GOVERNANCE_CONTROLS));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_HIGH_AVAILABILITY_CAPABILITIES));
  }

  listComponents() {
    return Object.freeze([...this.components.values()]);
  }

  getComponent(componentName) {
    return this.components.get(componentName);
  }

  registerComponent(componentInput) {
    const availabilityComponent = componentInput instanceof AvailabilityComponent
      ? componentInput
      : new AvailabilityComponent(componentInput);
    const result = this.validateComponent(availabilityComponent);

    if (!result.isValid) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.AVAILABILITY_COMPONENT_INVALID,
        'Availability component violates ARCH-007-08.',
        { errors: result.errors }
      );
    }

    this.components.set(availabilityComponent.componentName, availabilityComponent);
    return this;
  }

  validateComponent(componentInput) {
    const availabilityComponent = componentInput instanceof AvailabilityComponent
      ? componentInput
      : new AvailabilityComponent(componentInput);
    const errors = [];

    if (!availabilityComponent.componentName) errors.push('Availability component must identify a runtime component.');
    if (!this.redundancyTargets().includes(availabilityComponent.redundancyTarget)) errors.push(`Unsupported redundancy target: ${availabilityComponent.redundancyTarget}.`);
    if (!availabilityComponent.businessCapability) errors.push('Availability component must identify the supported business capability.');
    if (availabilityComponent.critical !== true) errors.push('Critical runtime components should be classified for availability.');
    if (availabilityComponent.redundantInstances !== true) errors.push('Critical services should execute using multiple runtime instances.');
    if (availabilityComponent.independentlyRecoverable !== true) errors.push('High Availability must support independent component recovery.');
    if (availabilityComponent.statelessExecution !== true) errors.push('Application services should remain stateless whenever practical.');
    if (availabilityComponent.healthMonitored !== true) errors.push('Each runtime component should continuously expose health information.');
    if (availabilityComponent.automaticRecovery !== true) errors.push('Recovery mechanisms should minimize manual intervention.');
    if (availabilityComponent.loadDistributed !== true) errors.push('Incoming workloads should be distributed across healthy service instances.');
    if (availabilityComponent.singlePointOfFailure === true) errors.push('Critical runtime components should avoid single points of failure.');
    if (availabilityComponent.platformSpecific === true) errors.push('High Availability must remain independent of cloud providers, clustering technologies, and infrastructure vendors.');

    return validation(errors);
  }

  validateFailureDomain(policyInput) {
    const policy = policyInput instanceof FailureDomainPolicy
      ? policyInput
      : new FailureDomainPolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Failure domain policy must have a policy name.');
    appendMissing(errors, policy.failureDomains, this.failureDomains(), 'Failure domains should include');
    if (policy.isolatesFailures !== true) errors.push('Failures should remain isolated within defined boundaries.');
    if (policy.preventsUnnecessaryPropagation !== true) errors.push('Failure in one domain should not propagate unnecessarily to others.');
    if (policy.supportsIndependentRecovery !== true) errors.push('Failure domains must support independent recovery.');
    if (policy.supportsMultiZoneDistribution !== true) errors.push('Workloads should be distributed across availability zones where supported.');
    if (policy.validInSingleZone !== true) errors.push('The architecture remains valid when only a single availability zone is available.');
    if (policy.platformSpecific === true) errors.push('Failure domain policy must remain infrastructure independent.');

    return validation(errors);
  }

  validateDegradation(strategyInput) {
    const strategy = strategyInput instanceof DegradationStrategy
      ? strategyInput
      : new DegradationStrategy(strategyInput);
    const errors = [];

    if (!strategy.strategyName) errors.push('Graceful degradation strategy must have a strategy name.');
    appendMissing(errors, strategy.strategies, this.degradationStrategies(), 'Graceful degradation should support');
    if (strategy.prioritizesCriticalWorkflows !== true) errors.push('Critical business workflows should receive highest priority.');
    if (strategy.preservesEssentialCapabilities !== true) errors.push('The platform should continue providing essential capabilities during partial failure.');
    if (strategy.avoidsSystemicFailure !== true) errors.push('Dependencies should not become systemic failure points.');
    if (strategy.reversible !== true) errors.push('Degradation should be reversible when full functionality returns.');
    if (strategy.platformSpecific === true) errors.push('Degradation strategy must remain infrastructure independent.');

    return validation(errors);
  }

  validateHealthManagement({ indicators = [], detection = [], recovery = [] } = {}) {
    const errors = [];

    appendMissing(errors, indicators, this.healthIndicators(), 'Health monitoring should include');
    appendMissing(errors, detection, this.failureDetectionMechanisms(), 'Failure detection should include');
    appendMissing(errors, recovery, this.recoveryMechanisms(), 'Automatic recovery should support');

    return validation(errors);
  }

  validateOperationalReadiness({ dependencyResilience = [], maintenance = [], monitoring = [], capacity = [], governance = [] } = {}) {
    const errors = [];

    appendMissing(errors, dependencyResilience, this.dependencyResilienceStrategies(), 'Dependency resilience should include');
    appendMissing(errors, maintenance, this.maintenancePrinciples(), 'Maintenance strategy should include');
    appendMissing(errors, monitoring, this.monitoringMetrics(), 'Operational monitoring should include');
    appendMissing(errors, capacity, this.capacityBufferDrivers(), 'Capacity buffer should absorb');
    appendMissing(errors, governance, this.governanceControls(), 'Availability governance must include');

    return validation(errors);
  }

  assertAvailability() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('High Availability must include all documented objectives.');
    if (this.availabilityModel().length !== 5) errors.push('High Availability must include the documented availability model.');
    if (this.components.size !== 6) errors.push('High Availability must include all documented redundancy targets.');

    if (errors.length > 0) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.HIGH_AVAILABILITY_INVALID,
        'High Availability violates ARCH-007-08.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function component(componentName, redundancyTarget, businessCapability) {
  return new AvailabilityComponent({
    componentName,
    redundancyTarget,
    businessCapability
  });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new AvailabilityValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
