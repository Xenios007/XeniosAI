import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_DATA_PROTECTION_ASSETS,
  AUTHENTICITY_TARGETS,
  CLASSIFICATION_INFLUENCES,
  CRYPTOGRAPHY_DATA_PROTECTION_OBJECTIVES,
  CRYPTOGRAPHY_PHILOSOPHY_OBJECTIVES,
  CRYPTOGRAPHY_RELATIONSHIP_FLOW_STAGES,
  DATA_AT_REST_LOCATIONS,
  DATA_CATEGORY_NAMES,
  DATA_IN_TRANSIT_CHANNELS,
  DATA_LIFECYCLE_STAGES,
  DATA_PROTECTION_GOVERNANCE_ACTIVITIES,
  DATA_PROTECTION_OBSERVABILITY_EVENTS,
  DATA_SHARING_DECISION_FACTORS,
  DIGITAL_SIGNATURE_CAPABILITIES,
  ENCRYPTION_COVERAGE_AREAS,
  FUTURE_CRYPTOGRAPHY_DATA_PROTECTION_CAPABILITIES,
  INFORMATION_CLASSIFICATION_LEVELS,
  INTEGRITY_PROTECTION_TARGETS,
  PRIVACY_PROTECTION_PRINCIPLES,
  RETENTION_JUSTIFICATIONS,
  SECURE_DISPOSAL_TARGETS,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  CryptographicProtectionPolicy,
  CryptographyDataProtectionDescriptor,
  DataProtectionProfile,
  DataSharingRetentionPolicy,
  addSecurityArchitecture
} from '../../src/security-architecture/index.js';

test('cryptography data protection exposes objectives, classifications, categories, and lifecycle', () => {
  const descriptor = new CryptographyDataProtectionDescriptor();

  assert.ok(descriptor.objectives().includes(CRYPTOGRAPHY_DATA_PROTECTION_OBJECTIVES.CONFIDENTIALITY));
  assert.ok(descriptor.objectives().includes(CRYPTOGRAPHY_DATA_PROTECTION_OBJECTIVES.LONG_TERM_RESILIENCE));
  assert.ok(descriptor.philosophyObjectives().includes(CRYPTOGRAPHY_PHILOSOPHY_OBJECTIVES.VERIFY_AUTHENTICITY));
  assert.deepEqual(descriptor.classificationLevels(), Object.values(INFORMATION_CLASSIFICATION_LEVELS));
  assert.deepEqual(descriptor.dataCategories(), Object.values(DATA_CATEGORY_NAMES));
  assert.deepEqual(descriptor.dataLifecycle(), Object.values(DATA_LIFECYCLE_STAGES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(CRYPTOGRAPHY_RELATIONSHIP_FLOW_STAGES));
});

test('cryptography data protection exposes protection, privacy, sharing, retention, and governance metadata', () => {
  const descriptor = new CryptographyDataProtectionDescriptor();

  assert.ok(descriptor.classificationInfluences().includes(CLASSIFICATION_INFLUENCES.ENCRYPTION_REQUIREMENTS));
  assert.ok(descriptor.encryptionCoverageAreas().includes(ENCRYPTION_COVERAGE_AREAS.INTER_SERVICE_COMMUNICATION));
  assert.ok(descriptor.dataAtRestLocations().includes(DATA_AT_REST_LOCATIONS.AI_KNOWLEDGE_REPOSITORIES));
  assert.ok(descriptor.dataInTransitChannels().includes(DATA_IN_TRANSIT_CHANNELS.AI_SERVICE_INTERACTION));
  assert.ok(descriptor.integrityProtectionTargets().includes(INTEGRITY_PROTECTION_TARGETS.AI_OUTPUTS));
  assert.ok(descriptor.authenticityTargets().includes(AUTHENTICITY_TARGETS.AI_GENERATED_OUTPUTS));
  assert.ok(descriptor.digitalSignatureCapabilities().includes(DIGITAL_SIGNATURE_CAPABILITIES.ADMINISTRATIVE_APPROVALS));
  assert.ok(descriptor.privacyPrinciples().includes(PRIVACY_PROTECTION_PRINCIPLES.PURPOSE_LIMITATION));
  assert.ok(descriptor.aiDataProtectionAssets().includes(AI_DATA_PROTECTION_ASSETS.AGENT_MEMORY));
  assert.ok(descriptor.dataSharingDecisionFactors().includes(DATA_SHARING_DECISION_FACTORS.RECIPIENT_IDENTITY));
  assert.ok(descriptor.retentionJustifications().includes(RETENTION_JUSTIFICATIONS.SECURITY_INVESTIGATIONS));
  assert.ok(descriptor.secureDisposalTargets().includes(SECURE_DISPOSAL_TARGETS.CRYPTOGRAPHIC_MATERIAL));
  assert.ok(descriptor.observabilityEvents().includes(DATA_PROTECTION_OBSERVABILITY_EVENTS.SECURE_DISPOSAL_ACTIVITIES));
  assert.ok(descriptor.governanceActivities().includes(DATA_PROTECTION_GOVERNANCE_ACTIVITIES.CRYPTOGRAPHIC_GOVERNANCE));
});

test('cryptography data protection validates consistent lifecycle protection profiles', () => {
  const descriptor = new CryptographyDataProtectionDescriptor();
  const valid = descriptor.validateDataProtectionProfile(
    new DataProtectionProfile({
      informationAsset: 'Reservation Customer Record',
      classification: INFORMATION_CLASSIFICATION_LEVELS.CONFIDENTIAL,
      dataCategory: DATA_CATEGORY_NAMES.BUSINESS_DATA,
      lifecycleStages: Object.values(DATA_LIFECYCLE_STAGES),
      classificationInfluences: Object.values(CLASSIFICATION_INFLUENCES),
      privacyPrinciples: Object.values(PRIVACY_PROTECTION_PRINCIPLES),
      aiDataAssets: Object.values(AI_DATA_PROTECTION_ASSETS),
      observabilityEvents: Object.values(DATA_PROTECTION_OBSERVABILITY_EVENTS),
      governanceActivities: Object.values(DATA_PROTECTION_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateDataProtectionProfile({
    informationAsset: '',
    classification: 'Personal',
    dataCategory: 'Cache Data',
    lifecycleStages: [DATA_LIFECYCLE_STAGES.CREATE],
    classificationInfluences: [CLASSIFICATION_INFLUENCES.STORAGE_REQUIREMENTS],
    privacyPrinciples: [PRIVACY_PROTECTION_PRINCIPLES.PURPOSE_LIMITATION],
    aiDataAssets: [AI_DATA_PROTECTION_ASSETS.USER_PROMPTS],
    observabilityEvents: [DATA_PROTECTION_OBSERVABILITY_EVENTS.ENCRYPTION_EVENTS],
    governanceActivities: [DATA_PROTECTION_GOVERNANCE_ACTIVITIES.INFORMATION_CLASSIFICATION_REVIEWS],
    protectedThroughoutLifecycle: false,
    consistentClassification: false,
    privacyByDesign: false,
    dataMinimized: false,
    aiExposureLimited: false,
    auditable: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /information asset/);
  assert.match(invalid.errors.join('\n'), /Unsupported information classification/);
  assert.match(invalid.errors.join('\n'), /Store/);
  assert.match(invalid.errors.join('\n'), /encryption-requirements/);
  assert.match(invalid.errors.join('\n'), /business processes by design/);
  assert.match(invalid.errors.join('\n'), /AI components/);
});

test('cryptography data protection validates risk-aligned cryptographic policies', () => {
  const descriptor = new CryptographyDataProtectionDescriptor();
  const valid = descriptor.validateCryptographicPolicy(
    new CryptographicProtectionPolicy({
      policyName: 'Restricted AI Knowledge Protection',
      informationAsset: 'AI Knowledge Repository',
      classification: INFORMATION_CLASSIFICATION_LEVELS.RESTRICTED,
      encryptionCoverage: Object.values(ENCRYPTION_COVERAGE_AREAS),
      dataAtRestLocations: Object.values(DATA_AT_REST_LOCATIONS),
      dataInTransitChannels: Object.values(DATA_IN_TRANSIT_CHANNELS),
      integrityTargets: Object.values(INTEGRITY_PROTECTION_TARGETS),
      authenticityTargets: Object.values(AUTHENTICITY_TARGETS),
      signatureCapabilities: Object.values(DIGITAL_SIGNATURE_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateCryptographicPolicy({
    policyName: '',
    informationAsset: '',
    classification: 'Sensitive',
    encryptionCoverage: [ENCRYPTION_COVERAGE_AREAS.STORED_INFORMATION],
    dataAtRestLocations: [DATA_AT_REST_LOCATIONS.DATABASES],
    dataInTransitChannels: [DATA_IN_TRANSIT_CHANNELS.CLIENT_COMMUNICATION],
    integrityTargets: [INTEGRITY_PROTECTION_TARGETS.BUSINESS_TRANSACTIONS],
    authenticityTargets: [AUTHENTICITY_TARGETS.SERVICE_COMMUNICATION],
    signatureCapabilities: [DIGITAL_SIGNATURE_CAPABILITIES.MESSAGE_AUTHENTICITY],
    riskAlignedEncryption: false,
    protectsAtRest: false,
    protectsInTransit: false,
    preservesIntegrity: false,
    verifiesAuthenticity: false,
    supportsNonRepudiation: false,
    secureAcrossTrustBoundaries: false,
    auditable: false,
    algorithmSpecific: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /business risk/);
  assert.match(invalid.errors.join('\n'), /data-in-transit/);
  assert.match(invalid.errors.join('\n'), /audit-logs/);
  assert.match(invalid.errors.join('\n'), /non-repudiation/);
  assert.match(invalid.errors.join('\n'), /algorithms are outside/);
});

test('cryptography data protection validates authorized sharing, retention, and disposal', () => {
  const descriptor = new CryptographyDataProtectionDescriptor();
  const valid = descriptor.validateSharingRetentionPolicy(
    new DataSharingRetentionPolicy({
      policyName: 'Customer Report Sharing',
      informationAsset: 'Operational Report',
      recipientIdentity: 'Hotel Manager',
      businessPurpose: 'Operations review',
      sharingFactors: Object.values(DATA_SHARING_DECISION_FACTORS),
      retentionJustifications: Object.values(RETENTION_JUSTIFICATIONS),
      disposalTargets: Object.values(SECURE_DISPOSAL_TARGETS)
    })
  );
  const invalid = descriptor.validateSharingRetentionPolicy({
    policyName: '',
    informationAsset: '',
    recipientIdentity: '',
    businessPurpose: '',
    sharingFactors: [DATA_SHARING_DECISION_FACTORS.RECIPIENT_IDENTITY],
    retentionJustifications: [RETENTION_JUSTIFICATIONS.BUSINESS_OPERATIONS],
    disposalTargets: [SECURE_DISPOSAL_TARGETS.DATABASES],
    explicitlyAuthorized: false,
    followsBusinessPolicy: false,
    retentionLimited: false,
    disposalPreventsRecovery: false,
    appliesConsistently: false,
    auditable: false,
    bypassesAuthorization: true,
    indefiniteRetention: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /business purpose/);
  assert.match(invalid.errors.join('\n'), /information-classification/);
  assert.match(invalid.errors.join('\n'), /regulatory-requirements/);
  assert.match(invalid.errors.join('\n'), /temporary-files/);
  assert.match(invalid.errors.join('\n'), /never bypass authorization/);
});

test('cryptography data protection reports future capabilities without implementing them', () => {
  const descriptor = new CryptographyDataProtectionDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_CRYPTOGRAPHY_DATA_PROTECTION_CAPABILITIES.CONFIDENTIAL_COMPUTING));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_CRYPTOGRAPHY_DATA_PROTECTION_CAPABILITIES.HOMOMORPHIC_ENCRYPTION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_CRYPTOGRAPHY_DATA_PROTECTION_CAPABILITIES.AUTONOMOUS_DATA_GOVERNANCE));
});

test('cryptography data protection assertion rejects incomplete metadata', () => {
  class IncompleteCryptographyDescriptor extends CryptographyDataProtectionDescriptor {
    classificationLevels() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteCryptographyDescriptor().assertModel(),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.CRYPTOGRAPHY_DATA_PROTECTION_INVALID &&
      error.details.errors.some(message => message.includes('information classifications'))
  );
});

test('cryptography data protection descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addSecurityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('CryptographyDataProtectionDescriptor');

  assert.ok(descriptor instanceof CryptographyDataProtectionDescriptor);
  assert.equal(descriptor.assertModel().isValid, true);
});
