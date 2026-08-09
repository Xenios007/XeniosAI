import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  SECURITY_ARCHITECTURE_ERROR_CODES,
  KeyLifecycleRecord,
  SecretDistributionPolicy,
  SecretLifecycleRecord,
  SecretsKeyManagementDescriptor,
  addSecurityArchitecture
} from '../../src/security-architecture/index.js';

test('secrets key management exposes objectives, categories, and lifecycle metadata', () => {
  const descriptor = new SecretsKeyManagementDescriptor();

  assert.ok(descriptor.objectives().includes(SECRETS_KEY_MANAGEMENT_OBJECTIVES.SECURE_SECRET_STORAGE));
  assert.ok(descriptor.objectives().includes(SECRETS_KEY_MANAGEMENT_OBJECTIVES.VENDOR_NEUTRALITY));
  assert.deepEqual(descriptor.secretCategories(), Object.values(SECRET_CATEGORY_NAMES));
  assert.deepEqual(descriptor.secretLifecycle(), Object.values(SECRET_LIFECYCLE_STAGES));
  assert.deepEqual(descriptor.keyLifecycle(), Object.values(KEY_LIFECYCLE_STAGES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(SECRETS_RELATIONSHIP_FLOW_STAGES));
});

test('secrets key management exposes generation, storage, distribution, and governance controls', () => {
  const descriptor = new SecretsKeyManagementDescriptor();

  assert.ok(descriptor.ownershipResponsibilities().includes(SECRET_OWNERSHIP_RESPONSIBILITIES.AUDIT_REVIEW));
  assert.ok(descriptor.generationRequirements().includes(SECRET_GENERATION_REQUIREMENTS.HIGH_ENTROPY));
  assert.ok(descriptor.prohibitedStorageLocations().includes(PROHIBITED_SECRET_STORAGE_LOCATIONS.SOURCE_CODE));
  assert.ok(descriptor.distributionRequirements().includes(SECRET_DISTRIBUTION_REQUIREMENTS.AUTHORIZED_WORKLOADS_ONLY));
  assert.ok(descriptor.usageRequirements().includes(SECRET_USAGE_REQUIREMENTS.NO_DIAGNOSTIC_OUTPUT));
  assert.ok(descriptor.rotationTriggers().includes(SECRET_ROTATION_TRIGGERS.CREDENTIAL_COMPROMISE));
  assert.ok(descriptor.revocationRequirements().includes(SECRET_REVOCATION_REQUIREMENTS.IMMEDIATE_INVALIDATION));
  assert.ok(descriptor.environments().includes(SECRET_ENVIRONMENT_NAMES.PRODUCTION));
  assert.ok(descriptor.administrativeControls().includes(SECRET_ADMINISTRATIVE_CONTROLS.SEPARATION_OF_DUTIES));
  assert.ok(descriptor.observabilityEvents().includes(SECRET_OBSERVABILITY_EVENTS.FAILED_ACCESS_ATTEMPTS));
  assert.ok(descriptor.governanceActivities().includes(SECRET_GOVERNANCE_ACTIVITIES.INVENTORY_MANAGEMENT));
});

test('secrets key management validates owned auditable secret lifecycles', () => {
  const descriptor = new SecretsKeyManagementDescriptor();
  const valid = descriptor.validateSecretLifecycle(
    new SecretLifecycleRecord({
      secretName: 'Reservation API Credential',
      category: SECRET_CATEGORY_NAMES.API_CREDENTIALS,
      owner: 'Reservation Service Owner',
      environment: SECRET_ENVIRONMENT_NAMES.PRODUCTION,
      lifecycleStages: Object.values(SECRET_LIFECYCLE_STAGES),
      ownershipResponsibilities: Object.values(SECRET_OWNERSHIP_RESPONSIBILITIES),
      generationRequirements: Object.values(SECRET_GENERATION_REQUIREMENTS),
      usageRequirements: Object.values(SECRET_USAGE_REQUIREMENTS),
      rotationTriggers: Object.values(SECRET_ROTATION_TRIGGERS),
      revocationRequirements: Object.values(SECRET_REVOCATION_REQUIREMENTS),
      observabilityEvents: Object.values(SECRET_OBSERVABILITY_EVENTS),
      governanceActivities: Object.values(SECRET_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateSecretLifecycle({
    secretName: '',
    category: 'Plain Environment Variable',
    owner: '',
    environment: 'Shared',
    lifecycleStages: [SECRET_LIFECYCLE_STAGES.GENERATE],
    ownershipResponsibilities: [SECRET_OWNERSHIP_RESPONSIBILITIES.CREATION],
    generationRequirements: [SECRET_GENERATION_REQUIREMENTS.UNIQUE],
    usageRequirements: [SECRET_USAGE_REQUIREMENTS.ACCESS_WHEN_NEEDED],
    rotationTriggers: [SECRET_ROTATION_TRIGGERS.SCHEDULED_POLICY],
    revocationRequirements: [SECRET_REVOCATION_REQUIREMENTS.IMMEDIATE_INVALIDATION],
    observabilityEvents: [SECRET_OBSERVABILITY_EVENTS.SECRET_CREATION],
    governanceActivities: [SECRET_GOVERNANCE_ACTIVITIES.OWNERSHIP_REVIEWS],
    unique: false,
    shortLived: false,
    leastPrivilege: false,
    environmentIsolated: false,
    auditable: false,
    embeddedInSource: true,
    reusedAcrossEnvironments: true,
    plaintextStorage: true,
    diagnosticExposure: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /identify the secret/);
  assert.match(invalid.errors.join('\n'), /clearly identified owner/);
  assert.match(invalid.errors.join('\n'), /Validate/);
  assert.match(invalid.errors.join('\n'), /high-entropy/);
  assert.match(invalid.errors.join('\n'), /source code/);
  assert.match(invalid.errors.join('\n'), /diagnostic output/);
});

test('secrets key management validates controlled cryptographic key lifecycles', () => {
  const descriptor = new SecretsKeyManagementDescriptor();
  const valid = descriptor.validateKeyLifecycle(
    new KeyLifecycleRecord({
      keyName: 'Reservation Data Encryption Key',
      keyType: CRYPTOGRAPHIC_KEY_TYPES.ENCRYPTION_KEYS,
      purpose: KEY_PURPOSES.DATA_ENCRYPTION,
      owner: 'Data Platform Owner',
      lifecycleStages: Object.values(KEY_LIFECYCLE_STAGES),
      separatedPurposes: Object.values(KEY_PURPOSES),
      governanceActivities: Object.values(SECRET_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateKeyLifecycle({
    keyName: '',
    keyType: 'shared-master-key',
    purpose: 'all-platform-purposes',
    owner: '',
    lifecycleStages: [KEY_LIFECYCLE_STAGES.GENERATE],
    separatedPurposes: [KEY_PURPOSES.DATA_ENCRYPTION],
    governanceActivities: [SECRET_GOVERNANCE_ACTIVITIES.OWNERSHIP_REVIEWS],
    destroyPreventsRecovery: false,
    archivalExplicitlyRequired: false,
    reusedAcrossPurposes: true,
    auditable: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /identify the key/);
  assert.match(invalid.errors.join('\n'), /Unsupported cryptographic key type/);
  assert.match(invalid.errors.join('\n'), /Activate/);
  assert.match(invalid.errors.join('\n'), /transport-security/);
  assert.match(invalid.errors.join('\n'), /prevent future recovery/);
  assert.match(invalid.errors.join('\n'), /reuse across unrelated purposes/);
});

test('secrets key management validates least-exposure distribution and AI access constraints', () => {
  const descriptor = new SecretsKeyManagementDescriptor();
  const valid = descriptor.validateDistribution(
    new SecretDistributionPolicy({
      policyName: 'AI Retrieval Tool Secret Distribution',
      authorizedWorkload: 'Knowledge Retrieval Agent',
      secretCategory: SECRET_CATEGORY_NAMES.AI_SECRETS,
      environment: SECRET_ENVIRONMENT_NAMES.STAGING,
      requirements: Object.values(SECRET_DISTRIBUTION_REQUIREMENTS),
      administrativeControls: Object.values(SECRET_ADMINISTRATIVE_CONTROLS),
      aiAccessTargets: Object.values(AI_SECRET_ACCESS_TARGETS)
    })
  );
  const invalid = descriptor.validateDistribution({
    policyName: '',
    authorizedWorkload: '',
    secretCategory: 'Global Admin Token',
    environment: 'All',
    requirements: [SECRET_DISTRIBUTION_REQUIREMENTS.AUTHORIZED_WORKLOADS_ONLY],
    administrativeControls: [SECRET_ADMINISTRATIVE_CONTROLS.AUDIT_LOGGING],
    aiAccessTargets: [AI_SECRET_ACCESS_TARGETS.EXTERNAL_MODEL_PROVIDERS],
    leastExposure: false,
    justInTime: false,
    limitedDuration: false,
    avoidsDuplication: false,
    unrestrictedPlatformCredentials: true,
    crossEnvironmentReuse: true,
    auditable: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /authorized workload/);
  assert.match(invalid.errors.join('\n'), /specific-required-secrets/);
  assert.match(invalid.errors.join('\n'), /multi-party-approval/);
  assert.match(invalid.errors.join('\n'), /knowledge-repositories/);
  assert.match(invalid.errors.join('\n'), /unrestricted platform credentials/);
});

test('secrets key management reports future capabilities without implementing them', () => {
  const descriptor = new SecretsKeyManagementDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SECRETS_KEY_MANAGEMENT_CAPABILITIES.AUTOMATED_SECRET_ROTATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SECRETS_KEY_MANAGEMENT_CAPABILITIES.POST_QUANTUM_KEY_MANAGEMENT));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SECRETS_KEY_MANAGEMENT_CAPABILITIES.POLICY_DRIVEN_SECRET_ORCHESTRATION));
});

test('secrets key management assertion rejects incomplete metadata', () => {
  class IncompleteSecretsDescriptor extends SecretsKeyManagementDescriptor {
    secretCategories() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteSecretsDescriptor().assertModel(),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.SECRETS_KEY_MANAGEMENT_INVALID &&
      error.details.errors.some(message => message.includes('secret categories'))
  );
});

test('secrets key management descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addSecurityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('SecretsKeyManagementDescriptor');

  assert.ok(descriptor instanceof SecretsKeyManagementDescriptor);
  assert.equal(descriptor.assertModel().isValid, true);
});
