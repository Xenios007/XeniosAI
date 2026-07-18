import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  CONFIGURATION_PRINCIPLES,
  DEPLOYMENT_ENVIRONMENT_NAMES,
  DEPLOYMENT_MODEL_ERROR_CODES,
  ENVIRONMENT_GOVERNANCE_CONTROLS,
  ENVIRONMENT_ISOLATION_AREAS,
  ENVIRONMENT_MONITORING_CAPABILITIES,
  ENVIRONMENT_OBJECTIVES,
  ENVIRONMENT_RESPONSIBILITIES,
  FEATURE_ROLLOUT_STAGES,
  FUTURE_ENVIRONMENT_CAPABILITIES
} from '../constants.js';
import { EnvironmentConfiguration } from '../contracts/environment-configuration.js';
import { EnvironmentDataStrategy } from '../contracts/environment-data-strategy.js';
import { EnvironmentDefinition } from '../contracts/environment-definition.js';
import { EnvironmentPromotion } from '../contracts/environment-promotion.js';
import { EnvironmentValidationResult } from '../contracts/environment-validation-result.js';

const PROMOTION_FLOW = Object.freeze([
  DEPLOYMENT_ENVIRONMENT_NAMES.DEVELOPMENT,
  DEPLOYMENT_ENVIRONMENT_NAMES.INTEGRATION,
  DEPLOYMENT_ENVIRONMENT_NAMES.TESTING,
  DEPLOYMENT_ENVIRONMENT_NAMES.STAGING,
  DEPLOYMENT_ENVIRONMENT_NAMES.PRODUCTION
]);

const ROLLOUT_FLOW = Object.freeze([
  FEATURE_ROLLOUT_STAGES.DEVELOPMENT,
  FEATURE_ROLLOUT_STAGES.INTERNAL_VALIDATION,
  FEATURE_ROLLOUT_STAGES.TESTING,
  FEATURE_ROLLOUT_STAGES.STAGING,
  FEATURE_ROLLOUT_STAGES.LIMITED_PRODUCTION,
  FEATURE_ROLLOUT_STAGES.FULL_PRODUCTION
]);

const DEFAULT_ENVIRONMENTS = Object.freeze([
  environment(DEPLOYMENT_ENVIRONMENT_NAMES.DEVELOPMENT, ENVIRONMENT_RESPONSIBILITIES.FEATURE_CREATION, ['Rapid iteration', 'Frequent deployments', 'Mock services permitted', 'Developer tooling enabled', 'Relaxed operational constraints'], 'Synthetic or sample data', { allowsMockServices: true }),
  environment(DEPLOYMENT_ENVIRONMENT_NAMES.INTEGRATION, ENVIRONMENT_RESPONSIBILITIES.SERVICE_INTEROPERABILITY, ['Service integration', 'API compatibility', 'Event validation', 'Contract verification', 'Cross-service communication'], 'Controlled integration datasets'),
  environment(DEPLOYMENT_ENVIRONMENT_NAMES.TESTING, ENVIRONMENT_RESPONSIBILITIES.QUALITY_VERIFICATION, ['Functional testing', 'Regression testing', 'Performance testing', 'Load testing', 'Security validation', 'Workflow verification'], 'Repeatable test fixtures'),
  environment(DEPLOYMENT_ENVIRONMENT_NAMES.STAGING, ENVIRONMENT_RESPONSIBILITIES.RELEASE_VALIDATION, ['Production-equivalent configuration', 'Production topology', 'Production deployment procedures', 'Production monitoring', 'Representative datasets where appropriate'], 'Sanitized production-like data', { productionEquivalent: true }),
  environment(DEPLOYMENT_ENVIRONMENT_NAMES.PRODUCTION, ENVIRONMENT_RESPONSIBILITIES.BUSINESS_OPERATIONS, ['Availability', 'Reliability', 'Security', 'Performance', 'Business continuity', 'Operational stability'], 'Live operational data', { liveBusinessOperations: true }),
  environment(DEPLOYMENT_ENVIRONMENT_NAMES.DISASTER_RECOVERY, ENVIRONMENT_RESPONSIBILITIES.BUSINESS_CONTINUITY, ['Backup restoration', 'Service recovery', 'Infrastructure failover', 'Business continuity', 'Data protection'], 'Restored production backups', { disasterRecovery: true })
]);

export class EnvironmentStrategyDescriptor {
  constructor({ environments = DEFAULT_ENVIRONMENTS } = {}) {
    this.environments = new Map();

    for (const environmentDefinition of environments) {
      this.registerEnvironment(environmentDefinition);
    }
  }

  objectives() {
    return Object.freeze(Object.values(ENVIRONMENT_OBJECTIVES));
  }

  configurationPrinciples() {
    return Object.freeze(Object.values(CONFIGURATION_PRINCIPLES));
  }

  isolationAreas() {
    return Object.freeze(Object.values(ENVIRONMENT_ISOLATION_AREAS));
  }

  monitoringCapabilities() {
    return Object.freeze(Object.values(ENVIRONMENT_MONITORING_CAPABILITIES));
  }

  governanceControls() {
    return Object.freeze(Object.values(ENVIRONMENT_GOVERNANCE_CONTROLS));
  }

  promotionFlow() {
    return PROMOTION_FLOW;
  }

  rolloutFlow() {
    return ROLLOUT_FLOW;
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_ENVIRONMENT_CAPABILITIES));
  }

  listEnvironments() {
    return Object.freeze([...this.environments.values()]);
  }

  registerEnvironment(environmentInput) {
    const environmentDefinition = environmentInput instanceof EnvironmentDefinition
      ? environmentInput
      : new EnvironmentDefinition(environmentInput);
    const result = this.validateEnvironmentDefinition(environmentDefinition);

    if (!result.isValid) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.ENVIRONMENT_STRATEGY_INVALID,
        'Environment definition violates ARCH-007-02.',
        { errors: result.errors }
      );
    }

    this.environments.set(environmentDefinition.environmentName, environmentDefinition);
    return this;
  }

  getEnvironment(environmentName) {
    return this.environments.get(environmentName);
  }

  validateEnvironmentDefinition(environmentInput) {
    const environmentDefinition = environmentInput instanceof EnvironmentDefinition
      ? environmentInput
      : new EnvironmentDefinition(environmentInput);
    const errors = [];

    if (!environmentDefinition.environmentName) errors.push('Environment must have a name.');
    if (!Object.values(DEPLOYMENT_ENVIRONMENT_NAMES).includes(environmentDefinition.environmentName)) {
      errors.push(`Unsupported environment: ${environmentDefinition.environmentName}.`);
    }
    if (!environmentDefinition.primaryResponsibility) errors.push('Environment must have a distinct operational purpose.');
    if (environmentDefinition.characteristics.length === 0) errors.push('Environment must define operational characteristics.');
    if (!environmentDefinition.dataStrategy) errors.push('Environment must define an independent data strategy.');
    if (environmentDefinition.conflictingResponsibilities === true) errors.push('Environment must not perform conflicting responsibilities.');
    if (environmentDefinition.repurposed === true) errors.push('Environment should never be repurposed away from its business purpose.');

    return validation(errors);
  }

  validatePromotion(promotionInput) {
    const promotion = promotionInput instanceof EnvironmentPromotion
      ? promotionInput
      : new EnvironmentPromotion(promotionInput);
    const errors = [];
    const fromIndex = PROMOTION_FLOW.indexOf(promotion.fromEnvironment);
    const toIndex = PROMOTION_FLOW.indexOf(promotion.toEnvironment);

    if (fromIndex === -1) errors.push(`Promotion source is not in the controlled flow: ${promotion.fromEnvironment}.`);
    if (toIndex === -1) errors.push(`Promotion target is not in the controlled flow: ${promotion.toEnvironment}.`);
    if (fromIndex !== -1 && toIndex !== -1 && toIndex !== fromIndex + 1) {
      errors.push('Software must progress through environments in one controlled direction.');
    }
    if (promotion.qualityGatesMet !== true) errors.push('Promotion should occur only after predefined quality gates are met.');
    if (promotion.oneDirection !== true) errors.push('Promotion must remain one-directional.');
    if (promotion.directDevelopmentToProduction === true) errors.push('Direct promotion from Development to Production is prohibited.');
    if (promotion.approved !== true) errors.push('Deployment promotion must satisfy operational approval.');

    return validation(errors);
  }

  validateConfiguration(configurationInput) {
    const configuration = configurationInput instanceof EnvironmentConfiguration
      ? configurationInput
      : new EnvironmentConfiguration(configurationInput);
    const errors = [];

    if (!Object.values(DEPLOYMENT_ENVIRONMENT_NAMES).includes(configuration.environmentName)) {
      errors.push(`Configuration references unsupported environment: ${configuration.environmentName}.`);
    }
    if (configuration.externalized !== true) errors.push('Configuration must be externalized.');
    if (configuration.versionControlled !== true) errors.push('Configuration must be version controlled.');
    if (configuration.environmentSpecific !== true) errors.push('Configuration must be environment specific.');
    if (configuration.securelyManaged !== true) errors.push('Configuration must be securely managed.');
    if (configuration.independentlyDeployable !== true) errors.push('Configuration must be independently deployable.');
    if (configuration.requiresRecompilation === true) errors.push('Configuration should never require recompilation of application code.');
    if (configuration.behaviorConsistent !== true) errors.push('Business behavior should remain functionally consistent across environments.');

    return validation(errors);
  }

  validateDataStrategy(strategyInput) {
    const strategy = strategyInput instanceof EnvironmentDataStrategy
      ? strategyInput
      : new EnvironmentDataStrategy(strategyInput);
    const errors = [];

    if (!Object.values(DEPLOYMENT_ENVIRONMENT_NAMES).includes(strategy.environmentName)) {
      errors.push(`Data strategy references unsupported environment: ${strategy.environmentName}.`);
    }
    if (!strategy.datasetStrategy) errors.push('Environment data strategy must describe dataset usage.');
    if (strategy.independentDataset !== true) errors.push('Each environment must maintain independent datasets.');
    if (strategy.copiedProductionDataToLowerEnvironment === true && strategy.productionDataSanitized !== true) {
      errors.push('Production data must not be copied into lower environments without sanitization.');
    }
    if (strategy.copiedProductionDataToLowerEnvironment === true && strategy.governanceApplied !== true) {
      errors.push('Production data copied into lower environments requires governance.');
    }

    return validation(errors);
  }

  validateMonitoring(capabilities) {
    const provided = Array.isArray(capabilities) ? capabilities : [];
    const errors = [];

    for (const capability of this.monitoringCapabilities()) {
      if (!provided.includes(capability)) {
        errors.push(`Environment monitoring must expose ${capability}.`);
      }
    }

    return validation(errors);
  }

  validateGovernance(controls) {
    const provided = Array.isArray(controls) ? controls : [];
    const errors = [];

    for (const control of this.governanceControls()) {
      if (!provided.includes(control)) {
        errors.push(`Environment governance must include ${control}.`);
      }
    }

    return validation(errors);
  }
}

function environment(environmentName, primaryResponsibility, characteristics, dataStrategy, options = {}) {
  return new EnvironmentDefinition({
    environmentName,
    primaryResponsibility,
    characteristics,
    dataStrategy,
    ...options
  });
}

function validation(errors) {
  return new EnvironmentValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
