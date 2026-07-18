import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  APPLICATION_RECOVERY_AREAS,
  BACKUP_PRINCIPLES,
  DATA_RECOVERY_AREAS,
  DEPLOYMENT_MODEL_ERROR_CODES,
  DISASTER_CLASSIFICATION_TYPES,
  DISASTER_RECOVERY_GOVERNANCE_CONTROLS,
  DISASTER_RECOVERY_MODEL_STAGES,
  DISASTER_RECOVERY_OBJECTIVES,
  DISASTER_RECOVERY_TESTING_ACTIVITIES,
  DisasterClassification,
  DisasterRecoveryDescriptor,
  FUTURE_DISASTER_RECOVERY_CAPABILITIES,
  INFRASTRUCTURE_RECOVERY_AREAS,
  RECOVERY_ARCHITECTURE_CAPABILITIES,
  RECOVERY_ENVIRONMENT_MODELS,
  RECOVERY_PRIORITY_ORDER,
  RECOVERY_VALIDATION_ACTIVITIES,
  REPLICATION_OBJECTIVES,
  RecoveryPlan,
  RecoveryValidationPolicy,
  addDeploymentModel
} from '../../src/deployment-model/index.js';

test('disaster recovery exposes objectives and recovery model sequence', () => {
  const descriptor = new DisasterRecoveryDescriptor();

  assert.ok(descriptor.objectives().includes(DISASTER_RECOVERY_OBJECTIVES.BUSINESS_CONTINUITY));
  assert.ok(descriptor.objectives().includes(DISASTER_RECOVERY_OBJECTIVES.LONG_TERM_PLATFORM_SURVIVABILITY));
  assert.deepEqual(descriptor.recoveryModel(), [
    DISASTER_RECOVERY_MODEL_STAGES.DISASTER_EVENT,
    DISASTER_RECOVERY_MODEL_STAGES.DETECTION,
    DISASTER_RECOVERY_MODEL_STAGES.ASSESSMENT,
    DISASTER_RECOVERY_MODEL_STAGES.RECOVERY_DECISION,
    DISASTER_RECOVERY_MODEL_STAGES.INFRASTRUCTURE_RECOVERY,
    DISASTER_RECOVERY_MODEL_STAGES.APPLICATION_RECOVERY,
    DISASTER_RECOVERY_MODEL_STAGES.DATA_RECOVERY,
    DISASTER_RECOVERY_MODEL_STAGES.BUSINESS_VALIDATION,
    DISASTER_RECOVERY_MODEL_STAGES.NORMAL_OPERATIONS
  ]);
});

test('disaster recovery registers documented disaster classifications', () => {
  const descriptor = new DisasterRecoveryDescriptor();

  assert.deepEqual(descriptor.listClassifications().map(item => item.classificationType), [
    DISASTER_CLASSIFICATION_TYPES.INFRASTRUCTURE_FAILURES,
    DISASTER_CLASSIFICATION_TYPES.APPLICATION_FAILURES,
    DISASTER_CLASSIFICATION_TYPES.DATA_FAILURES,
    DISASTER_CLASSIFICATION_TYPES.OPERATIONAL_FAILURES,
    DISASTER_CLASSIFICATION_TYPES.SECURITY_INCIDENTS
  ]);
  assert.ok(descriptor.getClassification(DISASTER_CLASSIFICATION_TYPES.DATA_FAILURES).examples.includes('Database corruption'));
});

test('disaster recovery rejects invalid classifications', () => {
  assert.throws(
    () =>
      new DisasterRecoveryDescriptor({
        classifications: [
          new DisasterClassification({
            classificationType: 'Minor Alert',
            examples: [],
            impactScope: '',
            proportionalRecovery: false,
            exceedsHighAvailability: false,
            businessImpactAssessed: false,
            platformSpecific: true
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.DISASTER_CLASSIFICATION_INVALID &&
      error.details.errors.some(message => message.includes('Unsupported disaster classification')) &&
      error.details.errors.some(message => message.includes('typical event examples')) &&
      error.details.errors.some(message => message.includes('High Availability mechanisms')) &&
      error.details.errors.some(message => message.includes('infrastructure independent'))
  );
});

test('disaster recovery validates complete recovery plans', () => {
  const descriptor = new DisasterRecoveryDescriptor();
  const valid = descriptor.validateRecoveryPlan(
    new RecoveryPlan({
      planName: 'Enterprise Recovery Plan',
      recoveryModel: RECOVERY_ENVIRONMENT_MODELS.WARM_STANDBY,
      priorityOrder: Object.values(RECOVERY_PRIORITY_ORDER),
      architectureCapabilities: Object.values(RECOVERY_ARCHITECTURE_CAPABILITIES),
      backupPrinciples: Object.values(BACKUP_PRINCIPLES),
      replicationObjectives: Object.values(REPLICATION_OBJECTIVES),
      infrastructureAreas: Object.values(INFRASTRUCTURE_RECOVERY_AREAS),
      applicationAreas: Object.values(APPLICATION_RECOVERY_AREAS),
      dataAreas: Object.values(DATA_RECOVERY_AREAS)
    })
  );
  const invalid = descriptor.validateRecoveryPlan({
    planName: '',
    recoveryModel: 'single-server-restore',
    priorityOrder: [RECOVERY_PRIORITY_ORDER.IDENTITY],
    architectureCapabilities: [RECOVERY_ARCHITECTURE_CAPABILITIES.BACKUP],
    backupPrinciples: [BACKUP_PRINCIPLES.FULL_BACKUPS],
    replicationObjectives: [REPLICATION_OBJECTIVES.REDUCED_RECOVERY_TIME],
    infrastructureAreas: [INFRASTRUCTURE_RECOVERY_AREAS.COMPUTE_RESOURCES],
    applicationAreas: [APPLICATION_RECOVERY_AREAS.SERVICE_DEPLOYMENT],
    dataAreas: [DATA_RECOVERY_AREAS.TRANSACTIONAL_DATABASES],
    rtoDefinedByGovernance: false,
    rpoDefinedByGovernance: false,
    geographicallyIndependent: false,
    backupsIsolatedFromOperations: false,
    repeatableRecovery: false,
    authoritativeDataFirst: false,
    platformSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /plan name/);
  assert.match(invalid.errors.join('\n'), /Unsupported recovery environment model/);
  assert.match(invalid.errors.join('\n'), /Core Business Services/);
  assert.match(invalid.errors.join('\n'), /incremental-backups/);
  assert.match(invalid.errors.join('\n'), /RTO values/);
  assert.match(invalid.errors.join('\n'), /Authoritative business data/);
});

test('disaster recovery validates readiness, testing, and governance', () => {
  const descriptor = new DisasterRecoveryDescriptor();
  const valid = descriptor.validateRecoveryReadiness(
    new RecoveryValidationPolicy({
      policyName: 'Recovery Validation',
      validationActivities: Object.values(RECOVERY_VALIDATION_ACTIVITIES),
      testingActivities: Object.values(DISASTER_RECOVERY_TESTING_ACTIVITIES),
      governanceControls: Object.values(DISASTER_RECOVERY_GOVERNANCE_CONTROLS)
    })
  );
  const invalid = descriptor.validateRecoveryReadiness({
    policyName: '',
    validationActivities: [RECOVERY_VALIDATION_ACTIVITIES.SERVICE_HEALTH_VERIFICATION],
    testingActivities: [DISASTER_RECOVERY_TESTING_ACTIVITIES.BACKUP_RESTORATION],
    governanceControls: [DISASTER_RECOVERY_GOVERNANCE_CONTROLS.RECOVERY_OBJECTIVES],
    validatesBeforeProduction: false,
    testedRegularly: false,
    businessReadinessRequired: false,
    infrastructureRecoveryAloneSufficient: true,
    platformSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /policy name/);
  assert.match(invalid.errors.join('\n'), /data-integrity-checks/);
  assert.match(invalid.errors.join('\n'), /regional-failover/);
  assert.match(invalid.errors.join('\n'), /backup-policies/);
  assert.match(invalid.errors.join('\n'), /before returning to production/);
  assert.match(invalid.errors.join('\n'), /business validation succeeds/);
});

test('disaster recovery reports future capabilities without implementing them', () => {
  const descriptor = new DisasterRecoveryDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_DISASTER_RECOVERY_CAPABILITIES.AUTONOMOUS_DISASTER_DETECTION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_DISASTER_RECOVERY_CAPABILITIES.MULTI_REGION_AUTONOMOUS_FAILOVER));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_DISASTER_RECOVERY_CAPABILITIES.SELF_HEALING_RECOVERY_ENVIRONMENTS));
});

test('disaster recovery assertion rejects incomplete metadata', () => {
  assert.throws(
    () => new DisasterRecoveryDescriptor({ classifications: [] }).assertRecovery(),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.DISASTER_RECOVERY_INVALID &&
      error.details.errors.some(message => message.includes('disaster classifications'))
  );
});

test('disaster recovery descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeploymentModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('DisasterRecoveryDescriptor');

  assert.ok(descriptor instanceof DisasterRecoveryDescriptor);
  assert.equal(descriptor.assertRecovery().isValid, true);
});
