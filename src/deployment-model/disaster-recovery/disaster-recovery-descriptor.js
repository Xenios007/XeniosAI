import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  FUTURE_DISASTER_RECOVERY_CAPABILITIES,
  INFRASTRUCTURE_RECOVERY_AREAS,
  RECOVERY_ARCHITECTURE_CAPABILITIES,
  RECOVERY_ENVIRONMENT_MODELS,
  RECOVERY_PRIORITY_ORDER,
  RECOVERY_VALIDATION_ACTIVITIES,
  REPLICATION_OBJECTIVES
} from '../constants.js';
import { DisasterClassification } from '../contracts/disaster-classification.js';
import { DisasterRecoveryValidationResult } from '../contracts/disaster-recovery-validation-result.js';
import { RecoveryPlan } from '../contracts/recovery-plan.js';
import { RecoveryValidationPolicy } from '../contracts/recovery-validation-policy.js';

const RECOVERY_MODEL = Object.freeze([
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

const DEFAULT_CLASSIFICATIONS = Object.freeze([
  classification(DISASTER_CLASSIFICATION_TYPES.INFRASTRUCTURE_FAILURES, ['Data center loss', 'Regional outage', 'Cloud provider disruption', 'Network isolation'], 'Infrastructure loss or isolation'),
  classification(DISASTER_CLASSIFICATION_TYPES.APPLICATION_FAILURES, ['Platform-wide deployment failure', 'Irrecoverable configuration corruption', 'Critical dependency failure'], 'Platform application failure'),
  classification(DISASTER_CLASSIFICATION_TYPES.DATA_FAILURES, ['Database corruption', 'Storage failure', 'Accidental deletion', 'Ransomware impact'], 'Authoritative or derived data loss'),
  classification(DISASTER_CLASSIFICATION_TYPES.OPERATIONAL_FAILURES, ['Human error', 'Administrative mistakes', 'Configuration loss'], 'Operational control failure'),
  classification(DISASTER_CLASSIFICATION_TYPES.SECURITY_INCIDENTS, ['Infrastructure compromise', 'Widespread credential exposure', 'Critical platform isolation'], 'Security-driven recovery event')
]);

export class DisasterRecoveryDescriptor {
  constructor({ classifications = DEFAULT_CLASSIFICATIONS } = {}) {
    this.classifications = new Map();

    for (const disasterClassification of classifications) {
      this.registerClassification(disasterClassification);
    }
  }

  objectives() {
    return Object.freeze(Object.values(DISASTER_RECOVERY_OBJECTIVES));
  }

  recoveryModel() {
    return RECOVERY_MODEL;
  }

  classificationTypes() {
    return Object.freeze(Object.values(DISASTER_CLASSIFICATION_TYPES));
  }

  architectureCapabilities() {
    return Object.freeze(Object.values(RECOVERY_ARCHITECTURE_CAPABILITIES));
  }

  backupPrinciples() {
    return Object.freeze(Object.values(BACKUP_PRINCIPLES));
  }

  replicationObjectives() {
    return Object.freeze(Object.values(REPLICATION_OBJECTIVES));
  }

  recoveryEnvironmentModels() {
    return Object.freeze(Object.values(RECOVERY_ENVIRONMENT_MODELS));
  }

  priorityOrder() {
    return Object.freeze(Object.values(RECOVERY_PRIORITY_ORDER));
  }

  infrastructureRecoveryAreas() {
    return Object.freeze(Object.values(INFRASTRUCTURE_RECOVERY_AREAS));
  }

  applicationRecoveryAreas() {
    return Object.freeze(Object.values(APPLICATION_RECOVERY_AREAS));
  }

  dataRecoveryAreas() {
    return Object.freeze(Object.values(DATA_RECOVERY_AREAS));
  }

  validationActivities() {
    return Object.freeze(Object.values(RECOVERY_VALIDATION_ACTIVITIES));
  }

  testingActivities() {
    return Object.freeze(Object.values(DISASTER_RECOVERY_TESTING_ACTIVITIES));
  }

  governanceControls() {
    return Object.freeze(Object.values(DISASTER_RECOVERY_GOVERNANCE_CONTROLS));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_DISASTER_RECOVERY_CAPABILITIES));
  }

  listClassifications() {
    return Object.freeze([...this.classifications.values()]);
  }

  getClassification(classificationType) {
    return this.classifications.get(classificationType);
  }

  registerClassification(classificationInput) {
    const disasterClassification = classificationInput instanceof DisasterClassification
      ? classificationInput
      : new DisasterClassification(classificationInput);
    const result = this.validateClassification(disasterClassification);

    if (!result.isValid) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.DISASTER_CLASSIFICATION_INVALID,
        'Disaster classification violates ARCH-007-09.',
        { errors: result.errors }
      );
    }

    this.classifications.set(disasterClassification.classificationType, disasterClassification);
    return this;
  }

  validateClassification(classificationInput) {
    const disasterClassification = classificationInput instanceof DisasterClassification
      ? classificationInput
      : new DisasterClassification(classificationInput);
    const errors = [];

    if (!this.classificationTypes().includes(disasterClassification.classificationType)) errors.push(`Unsupported disaster classification: ${disasterClassification.classificationType}.`);
    if (disasterClassification.examples.length === 0) errors.push('Disaster classification must include typical event examples.');
    if (!disasterClassification.impactScope) errors.push('Disaster classification must define impact scope.');
    if (disasterClassification.proportionalRecovery !== true) errors.push('Recovery strategies should be proportional to disaster classification.');
    if (disasterClassification.exceedsHighAvailability !== true) errors.push('Disaster Recovery addresses events that exceed High Availability mechanisms.');
    if (disasterClassification.businessImpactAssessed !== true) errors.push('Disaster classification must assess business impact.');
    if (disasterClassification.platformSpecific === true) errors.push('Disaster classification must remain infrastructure independent.');

    return validation(errors);
  }

  validateRecoveryPlan(planInput) {
    const plan = planInput instanceof RecoveryPlan ? planInput : new RecoveryPlan(planInput);
    const errors = [];

    if (!plan.planName) errors.push('Recovery plan must have a plan name.');
    if (!this.recoveryEnvironmentModels().includes(plan.recoveryModel)) errors.push(`Unsupported recovery environment model: ${plan.recoveryModel}.`);
    appendMissing(errors, plan.priorityOrder, this.priorityOrder(), 'Recovery prioritization should restore');
    appendMissing(errors, plan.architectureCapabilities, this.architectureCapabilities(), 'Recovery architecture must include');
    appendMissing(errors, plan.backupPrinciples, this.backupPrinciples(), 'Backups should support');
    appendMissing(errors, plan.replicationObjectives, this.replicationObjectives(), 'Replication objectives should include');
    appendMissing(errors, plan.infrastructureAreas, this.infrastructureRecoveryAreas(), 'Infrastructure recovery should restore');
    appendMissing(errors, plan.applicationAreas, this.applicationRecoveryAreas(), 'Application recovery should restore');
    appendMissing(errors, plan.dataAreas, this.dataRecoveryAreas(), 'Data recovery should restore');
    if (plan.rtoDefinedByGovernance !== true) errors.push('RTO values are business decisions defined by operational governance.');
    if (plan.rpoDefinedByGovernance !== true) errors.push('RPO values are business decisions defined by operational governance.');
    if (plan.geographicallyIndependent !== true) errors.push('Recovery capability should remain geographically independent where practical.');
    if (plan.backupsIsolatedFromOperations !== true) errors.push('Backups should remain isolated from operational environments.');
    if (plan.repeatableRecovery !== true) errors.push('Recovery processes should be repeatable.');
    if (plan.authoritativeDataFirst !== true) errors.push('Authoritative business data should be restored before derived storage systems whenever practical.');
    if (plan.platformSpecific === true) errors.push('Application recovery should remain independent of infrastructure vendors.');

    return validation(errors);
  }

  validateRecoveryReadiness(policyInput) {
    const policy = policyInput instanceof RecoveryValidationPolicy
      ? policyInput
      : new RecoveryValidationPolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Recovery validation policy must have a policy name.');
    appendMissing(errors, policy.validationActivities, this.validationActivities(), 'Recovery validation should include');
    appendMissing(errors, policy.testingActivities, this.testingActivities(), 'Disaster Recovery testing should include');
    appendMissing(errors, policy.governanceControls, this.governanceControls(), 'Disaster Recovery governance must include');
    if (policy.validatesBeforeProduction !== true) errors.push('Recovery must be validated before returning to production.');
    if (policy.testedRegularly !== true) errors.push('Recovery capabilities should be tested regularly.');
    if (policy.businessReadinessRequired !== true) errors.push('Successful infrastructure recovery alone does not guarantee business readiness.');
    if (policy.infrastructureRecoveryAloneSufficient === true) errors.push('Recovery should not be considered complete until business validation succeeds.');
    if (policy.platformSpecific === true) errors.push('Recovery validation must remain infrastructure independent.');

    return validation(errors);
  }

  assertRecovery() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Disaster Recovery must include all documented recovery objectives.');
    if (this.recoveryModel().length !== 9) errors.push('Disaster Recovery must include the documented recovery model.');
    if (this.classifications.size !== 5) errors.push('Disaster Recovery must include all documented disaster classifications.');

    if (errors.length > 0) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.DISASTER_RECOVERY_INVALID,
        'Disaster Recovery violates ARCH-007-09.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function classification(classificationType, examples, impactScope) {
  return new DisasterClassification({
    classificationType,
    examples,
    impactScope
  });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new DisasterRecoveryValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
