import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  FUTURE_ENVIRONMENT_CAPABILITIES,
  EnvironmentConfiguration,
  EnvironmentDataStrategy,
  EnvironmentDefinition,
  EnvironmentPromotion,
  EnvironmentStrategyDescriptor,
  addDeploymentModel
} from '../../src/deployment-model/index.js';

test('environment strategy exposes objectives, configuration principles, and isolation areas', () => {
  const descriptor = new EnvironmentStrategyDescriptor();

  assert.ok(descriptor.objectives().includes(ENVIRONMENT_OBJECTIVES.SAFE_EXPERIMENTATION));
  assert.ok(descriptor.objectives().includes(ENVIRONMENT_OBJECTIVES.MINIMAL_DEPLOYMENT_RISK));
  assert.ok(descriptor.configurationPrinciples().includes(CONFIGURATION_PRINCIPLES.NO_RECOMPILATION_REQUIRED));
  assert.ok(descriptor.isolationAreas().includes(ENVIRONMENT_ISOLATION_AREAS.SECRETS));
});

test('environment strategy preserves hierarchy and feature rollout progression', () => {
  const descriptor = new EnvironmentStrategyDescriptor();

  assert.deepEqual(descriptor.promotionFlow(), [
    DEPLOYMENT_ENVIRONMENT_NAMES.DEVELOPMENT,
    DEPLOYMENT_ENVIRONMENT_NAMES.INTEGRATION,
    DEPLOYMENT_ENVIRONMENT_NAMES.TESTING,
    DEPLOYMENT_ENVIRONMENT_NAMES.STAGING,
    DEPLOYMENT_ENVIRONMENT_NAMES.PRODUCTION
  ]);
  assert.deepEqual(descriptor.rolloutFlow(), [
    FEATURE_ROLLOUT_STAGES.DEVELOPMENT,
    FEATURE_ROLLOUT_STAGES.INTERNAL_VALIDATION,
    FEATURE_ROLLOUT_STAGES.TESTING,
    FEATURE_ROLLOUT_STAGES.STAGING,
    FEATURE_ROLLOUT_STAGES.LIMITED_PRODUCTION,
    FEATURE_ROLLOUT_STAGES.FULL_PRODUCTION
  ]);
});

test('environment strategy registers documented environment responsibilities', () => {
  const descriptor = new EnvironmentStrategyDescriptor();

  assert.equal(descriptor.getEnvironment(DEPLOYMENT_ENVIRONMENT_NAMES.DEVELOPMENT).primaryResponsibility, ENVIRONMENT_RESPONSIBILITIES.FEATURE_CREATION);
  assert.equal(descriptor.getEnvironment(DEPLOYMENT_ENVIRONMENT_NAMES.INTEGRATION).primaryResponsibility, ENVIRONMENT_RESPONSIBILITIES.SERVICE_INTEROPERABILITY);
  assert.equal(descriptor.getEnvironment(DEPLOYMENT_ENVIRONMENT_NAMES.TESTING).primaryResponsibility, ENVIRONMENT_RESPONSIBILITIES.QUALITY_VERIFICATION);
  assert.equal(descriptor.getEnvironment(DEPLOYMENT_ENVIRONMENT_NAMES.STAGING).productionEquivalent, true);
  assert.equal(descriptor.getEnvironment(DEPLOYMENT_ENVIRONMENT_NAMES.PRODUCTION).liveBusinessOperations, true);
  assert.equal(descriptor.getEnvironment(DEPLOYMENT_ENVIRONMENT_NAMES.DISASTER_RECOVERY).disasterRecovery, true);
});

test('environment strategy rejects conflicting or repurposed environments', () => {
  assert.throws(
    () =>
      new EnvironmentStrategyDescriptor({
        environments: [
          new EnvironmentDefinition({
            environmentName: 'Preview',
            primaryResponsibility: '',
            characteristics: [],
            dataStrategy: '',
            conflictingResponsibilities: true,
            repurposed: true
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.ENVIRONMENT_STRATEGY_INVALID &&
      error.details.errors.some(message => message.includes('Unsupported environment')) &&
      error.details.errors.some(message => message.includes('distinct operational purpose')) &&
      error.details.errors.some(message => message.includes('conflicting responsibilities')) &&
      error.details.errors.some(message => message.includes('repurposed'))
  );
});

test('environment strategy validates controlled one-direction promotion', () => {
  const descriptor = new EnvironmentStrategyDescriptor();
  const valid = descriptor.validatePromotion(
    new EnvironmentPromotion({
      fromEnvironment: DEPLOYMENT_ENVIRONMENT_NAMES.TESTING,
      toEnvironment: DEPLOYMENT_ENVIRONMENT_NAMES.STAGING
    })
  );
  const invalid = descriptor.validatePromotion({
    fromEnvironment: DEPLOYMENT_ENVIRONMENT_NAMES.DEVELOPMENT,
    toEnvironment: DEPLOYMENT_ENVIRONMENT_NAMES.PRODUCTION,
    qualityGatesMet: false,
    oneDirection: false,
    directDevelopmentToProduction: true,
    approved: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /controlled direction/);
  assert.match(invalid.errors.join('\n'), /quality gates/);
  assert.match(invalid.errors.join('\n'), /Development to Production is prohibited/);
});

test('environment strategy validates externalized secure configuration', () => {
  const descriptor = new EnvironmentStrategyDescriptor();
  const valid = descriptor.validateConfiguration(
    new EnvironmentConfiguration({
      environmentName: DEPLOYMENT_ENVIRONMENT_NAMES.PRODUCTION
    })
  );
  const invalid = descriptor.validateConfiguration({
    environmentName: 'Preview',
    externalized: false,
    versionControlled: false,
    environmentSpecific: false,
    securelyManaged: false,
    independentlyDeployable: false,
    requiresRecompilation: true,
    behaviorConsistent: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /externalized/);
  assert.match(invalid.errors.join('\n'), /securely managed/);
  assert.match(invalid.errors.join('\n'), /recompilation/);
  assert.match(invalid.errors.join('\n'), /functionally consistent/);
});

test('environment strategy validates independent governed data strategy', () => {
  const descriptor = new EnvironmentStrategyDescriptor();
  const valid = descriptor.validateDataStrategy(
    new EnvironmentDataStrategy({
      environmentName: DEPLOYMENT_ENVIRONMENT_NAMES.STAGING,
      datasetStrategy: 'Sanitized production-like data',
      copiedProductionDataToLowerEnvironment: true
    })
  );
  const invalid = descriptor.validateDataStrategy({
    environmentName: DEPLOYMENT_ENVIRONMENT_NAMES.TESTING,
    datasetStrategy: '',
    independentDataset: false,
    productionDataSanitized: false,
    governanceApplied: false,
    copiedProductionDataToLowerEnvironment: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /dataset usage/);
  assert.match(invalid.errors.join('\n'), /independent datasets/);
  assert.match(invalid.errors.join('\n'), /without sanitization/);
  assert.match(invalid.errors.join('\n'), /requires governance/);
});

test('environment strategy validates monitoring and governance capabilities', () => {
  const descriptor = new EnvironmentStrategyDescriptor();
  const monitoring = descriptor.validateMonitoring(Object.values(ENVIRONMENT_MONITORING_CAPABILITIES));
  const governance = descriptor.validateGovernance(Object.values(ENVIRONMENT_GOVERNANCE_CONTROLS));
  const invalidMonitoring = descriptor.validateMonitoring([ENVIRONMENT_MONITORING_CAPABILITIES.HEALTH_STATUS]);
  const invalidGovernance = descriptor.validateGovernance([ENVIRONMENT_GOVERNANCE_CONTROLS.ACCESS_CONTROL]);

  assert.equal(monitoring.isValid, true);
  assert.equal(governance.isValid, true);
  assert.equal(invalidMonitoring.isValid, false);
  assert.equal(invalidGovernance.isValid, false);
  assert.match(invalidMonitoring.errors.join('\n'), /deployment-version/);
  assert.match(invalidGovernance.errors.join('\n'), /capacity-planning/);
});

test('environment strategy reports future environment capabilities without implementing them', () => {
  const descriptor = new EnvironmentStrategyDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_ENVIRONMENT_CAPABILITIES.EPHEMERAL_PREVIEW_ENVIRONMENTS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_ENVIRONMENT_CAPABILITIES.COMPLIANCE_VALIDATION_ENVIRONMENTS));
});

test('environment strategy descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeploymentModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('EnvironmentStrategyDescriptor');

  assert.ok(descriptor instanceof EnvironmentStrategyDescriptor);
  assert.equal(descriptor.listEnvironments().length, 6);
});
