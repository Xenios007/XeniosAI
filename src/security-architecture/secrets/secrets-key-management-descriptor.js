import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_SECRET_ACCESS_TARGETS,
  CRYPTOGRAPHIC_KEY_TYPES,
  FUTURE_SECRETS_KEY_MANAGEMENT_CAPABILITIES,
  KEY_LIFECYCLE_STAGES,
  KEY_PURPOSES,
  PROHIBITED_SECRET_STORAGE_LOCATIONS,
  SECRET_ADMINISTRATIVE_CONTROLS,
  SECRET_CATEGORY_NAMES,
  SECRET_DISTRIBUTION_REQUIREMENTS,
  SECRET_ENVIRONMENT_NAMES,
  SECRET_EXAMPLE_GROUPS,
  SECRET_GENERATION_REQUIREMENTS,
  SECRET_GOVERNANCE_ACTIVITIES,
  SECRET_LIFECYCLE_STAGES,
  SECRET_OBSERVABILITY_EVENTS,
  SECRET_OWNERSHIP_RESPONSIBILITIES,
  SECRET_REVOCATION_REQUIREMENTS,
  SECRET_ROTATION_TRIGGERS,
  SECRET_USAGE_REQUIREMENTS,
  SECRETS_KEY_MANAGEMENT_OBJECTIVES,
  SECRETS_RELATIONSHIP_FLOW_STAGES,
  SECURITY_ARCHITECTURE_ERROR_CODES
} from '../constants.js';
import { KeyLifecycleRecord } from '../contracts/key-lifecycle-record.js';
import { SecretDistributionPolicy } from '../contracts/secret-distribution-policy.js';
import { SecretLifecycleRecord } from '../contracts/secret-lifecycle-record.js';
import { SecretsKeyManagementValidationResult } from '../contracts/secrets-key-management-validation-result.js';

const SECRET_CATEGORY_FLOW = Object.freeze(Object.values(SECRET_CATEGORY_NAMES));
const SECRET_LIFECYCLE = Object.freeze(Object.values(SECRET_LIFECYCLE_STAGES));
const KEY_LIFECYCLE = Object.freeze(Object.values(KEY_LIFECYCLE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(SECRETS_RELATIONSHIP_FLOW_STAGES));

export class SecretsKeyManagementDescriptor {
  objectives() {
    return Object.freeze(Object.values(SECRETS_KEY_MANAGEMENT_OBJECTIVES));
  }

  secretCategories() {
    return SECRET_CATEGORY_FLOW;
  }

  secretExampleGroups() {
    return Object.freeze(Object.values(SECRET_EXAMPLE_GROUPS));
  }

  ownershipResponsibilities() {
    return Object.freeze(Object.values(SECRET_OWNERSHIP_RESPONSIBILITIES));
  }

  secretLifecycle() {
    return SECRET_LIFECYCLE;
  }

  generationRequirements() {
    return Object.freeze(Object.values(SECRET_GENERATION_REQUIREMENTS));
  }

  prohibitedStorageLocations() {
    return Object.freeze(Object.values(PROHIBITED_SECRET_STORAGE_LOCATIONS));
  }

  distributionRequirements() {
    return Object.freeze(Object.values(SECRET_DISTRIBUTION_REQUIREMENTS));
  }

  usageRequirements() {
    return Object.freeze(Object.values(SECRET_USAGE_REQUIREMENTS));
  }

  rotationTriggers() {
    return Object.freeze(Object.values(SECRET_ROTATION_TRIGGERS));
  }

  revocationRequirements() {
    return Object.freeze(Object.values(SECRET_REVOCATION_REQUIREMENTS));
  }

  keyTypes() {
    return Object.freeze(Object.values(CRYPTOGRAPHIC_KEY_TYPES));
  }

  keyLifecycle() {
    return KEY_LIFECYCLE;
  }

  keyPurposes() {
    return Object.freeze(Object.values(KEY_PURPOSES));
  }

  aiSecretAccessTargets() {
    return Object.freeze(Object.values(AI_SECRET_ACCESS_TARGETS));
  }

  environments() {
    return Object.freeze(Object.values(SECRET_ENVIRONMENT_NAMES));
  }

  administrativeControls() {
    return Object.freeze(Object.values(SECRET_ADMINISTRATIVE_CONTROLS));
  }

  observabilityEvents() {
    return Object.freeze(Object.values(SECRET_OBSERVABILITY_EVENTS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(SECRET_GOVERNANCE_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_SECRETS_KEY_MANAGEMENT_CAPABILITIES));
  }

  validateSecretLifecycle(recordInput) {
    const record = recordInput instanceof SecretLifecycleRecord
      ? recordInput
      : new SecretLifecycleRecord(recordInput);
    const errors = [];

    if (!record.secretName) errors.push('Secret lifecycle record must identify the secret.');
    if (!this.secretCategories().includes(record.category)) errors.push(`Unsupported secret category: ${record.category}.`);
    if (!record.owner) errors.push('Every secret must have a clearly identified owner.');
    if (!this.environments().includes(record.environment)) errors.push(`Unsupported secret environment: ${record.environment}.`);
    appendMissing(errors, record.lifecycleStages, this.secretLifecycle(), 'Secret lifecycle must include');
    appendMissing(errors, record.ownershipResponsibilities, this.ownershipResponsibilities(), 'Secret ownership must include');
    appendMissing(errors, record.generationRequirements, this.generationRequirements(), 'Secret generation should be');
    appendMissing(errors, record.usageRequirements, this.usageRequirements(), 'Secret usage should enforce');
    appendMissing(errors, record.rotationTriggers, this.rotationTriggers(), 'Secret rotation may occur because of');
    appendMissing(errors, record.revocationRequirements, this.revocationRequirements(), 'Secret revocation should support');
    appendMissing(errors, record.observabilityEvents, this.observabilityEvents(), 'Secret observability should expose');
    appendMissing(errors, record.governanceActivities, this.governanceActivities(), 'Secret governance must include');
    if (record.unique !== true) errors.push('Secrets should be unique.');
    if (record.shortLived !== true) errors.push('Secrets should be treated as short-lived controlled resources.');
    if (record.leastPrivilege !== true) errors.push('Secret access must enforce least privilege.');
    if (record.environmentIsolated !== true) errors.push('Secrets should remain isolated between environments.');
    if (record.auditable !== true) errors.push('Each secret lifecycle stage should be fully auditable.');
    if (record.embeddedInSource === true) errors.push('Secrets must never be embedded in source code.');
    if (record.reusedAcrossEnvironments === true) errors.push('Secrets from one environment should never be reused in another.');
    if (record.plaintextStorage === true) errors.push('Secrets should never be stored in plaintext.');
    if (record.diagnosticExposure === true) errors.push('Secrets should never appear in diagnostic output.');
    if (record.vendorSpecific === true) errors.push('Secrets & Key Management must remain technology neutral.');

    return validation(errors);
  }

  validateKeyLifecycle(recordInput) {
    const record = recordInput instanceof KeyLifecycleRecord
      ? recordInput
      : new KeyLifecycleRecord(recordInput);
    const errors = [];

    if (!record.keyName) errors.push('Key lifecycle record must identify the key.');
    if (!this.keyTypes().includes(record.keyType)) errors.push(`Unsupported cryptographic key type: ${record.keyType}.`);
    if (!this.keyPurposes().includes(record.purpose)) errors.push(`Unsupported key purpose: ${record.purpose}.`);
    if (!record.owner) errors.push('Every key must have a clearly identified owner.');
    appendMissing(errors, record.lifecycleStages, this.keyLifecycle(), 'Key lifecycle must include');
    appendMissing(errors, record.separatedPurposes, this.keyPurposes(), 'Key separation should cover');
    appendMissing(errors, record.governanceActivities, this.governanceActivities(), 'Key governance must include');
    if (record.destroyPreventsRecovery !== true && record.archivalExplicitlyRequired !== true) {
      errors.push('Key destruction should prevent future recovery unless archival is explicitly required.');
    }
    if (record.reusedAcrossPurposes === true) errors.push('Key reuse across unrelated purposes should be avoided.');
    if (record.auditable !== true) errors.push('Key lifecycle management must remain auditable.');
    if (record.vendorSpecific === true) errors.push('Key management must remain technology neutral.');

    return validation(errors);
  }

  validateDistribution(policyInput) {
    const policy = policyInput instanceof SecretDistributionPolicy
      ? policyInput
      : new SecretDistributionPolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Secret distribution policy must have a name.');
    if (!policy.authorizedWorkload) errors.push('Secret distribution must identify the authorized workload.');
    if (!this.secretCategories().includes(policy.secretCategory)) errors.push(`Unsupported distributed secret category: ${policy.secretCategory}.`);
    if (!this.environments().includes(policy.environment)) errors.push(`Unsupported distribution environment: ${policy.environment}.`);
    appendMissing(errors, policy.requirements, this.distributionRequirements(), 'Secret distribution should enforce');
    appendMissing(errors, policy.administrativeControls, this.administrativeControls(), 'Administrative secret operations should support');
    appendMissing(errors, policy.aiAccessTargets, this.aiSecretAccessTargets(), 'AI secret management should cover');
    if (policy.leastExposure !== true) errors.push('Secret distribution should follow least exposure.');
    if (policy.justInTime !== true) errors.push('Authorized workloads should receive secrets at the time they require them.');
    if (policy.limitedDuration !== true) errors.push('Authorized workloads should receive secrets only for the duration required.');
    if (policy.avoidsDuplication !== true) errors.push('Secret distribution should avoid unnecessary duplication.');
    if (policy.unrestrictedPlatformCredentials === true) errors.push('Agent identities should never inherit unrestricted platform credentials.');
    if (policy.crossEnvironmentReuse === true) errors.push('Secrets from one environment should never be reused in another.');
    if (policy.auditable !== true) errors.push('Secret distribution must be auditable.');
    if (policy.vendorSpecific === true) errors.push('Secret distribution must remain technology neutral.');

    return validation(errors);
  }

  assertModel() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Secrets & Key Management must include all documented objectives.');
    if (this.secretCategories().length !== 8) errors.push('Secrets & Key Management must include all documented secret categories.');
    if (this.secretLifecycle().length !== 8) errors.push('Secrets & Key Management must include the documented secret lifecycle.');
    if (this.keyLifecycle().length !== 6) errors.push('Secrets & Key Management must include the documented key lifecycle.');
    if (this.keyPurposes().length !== 5) errors.push('Secrets & Key Management must include documented key separation purposes.');
    if (this.relationshipFlow().length !== 6) errors.push('Secrets & Key Management must include the documented relationship flow.');

    if (errors.length > 0) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.SECRETS_KEY_MANAGEMENT_INVALID,
        'Secrets & Key Management violates ARCH-008-05.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new SecretsKeyManagementValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
