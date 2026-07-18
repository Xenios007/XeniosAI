import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  DATA_MINIMIZATION_BENEFITS,
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
  SECURITY_ARCHITECTURE_ERROR_CODES
} from '../constants.js';
import { CryptographicProtectionPolicy } from '../contracts/cryptographic-protection-policy.js';
import { CryptographyDataProtectionValidationResult } from '../contracts/cryptography-data-protection-validation-result.js';
import { DataProtectionProfile } from '../contracts/data-protection-profile.js';
import { DataSharingRetentionPolicy } from '../contracts/data-sharing-retention-policy.js';

const CLASSIFICATION_FLOW = Object.freeze(Object.values(INFORMATION_CLASSIFICATION_LEVELS));
const DATA_LIFECYCLE = Object.freeze(Object.values(DATA_LIFECYCLE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(CRYPTOGRAPHY_RELATIONSHIP_FLOW_STAGES));

export class CryptographyDataProtectionDescriptor {
  objectives() {
    return Object.freeze(Object.values(CRYPTOGRAPHY_DATA_PROTECTION_OBJECTIVES));
  }

  philosophyObjectives() {
    return Object.freeze(Object.values(CRYPTOGRAPHY_PHILOSOPHY_OBJECTIVES));
  }

  classificationLevels() {
    return CLASSIFICATION_FLOW;
  }

  classificationInfluences() {
    return Object.freeze(Object.values(CLASSIFICATION_INFLUENCES));
  }

  dataCategories() {
    return Object.freeze(Object.values(DATA_CATEGORY_NAMES));
  }

  dataLifecycle() {
    return DATA_LIFECYCLE;
  }

  encryptionCoverageAreas() {
    return Object.freeze(Object.values(ENCRYPTION_COVERAGE_AREAS));
  }

  dataAtRestLocations() {
    return Object.freeze(Object.values(DATA_AT_REST_LOCATIONS));
  }

  dataInTransitChannels() {
    return Object.freeze(Object.values(DATA_IN_TRANSIT_CHANNELS));
  }

  integrityProtectionTargets() {
    return Object.freeze(Object.values(INTEGRITY_PROTECTION_TARGETS));
  }

  authenticityTargets() {
    return Object.freeze(Object.values(AUTHENTICITY_TARGETS));
  }

  digitalSignatureCapabilities() {
    return Object.freeze(Object.values(DIGITAL_SIGNATURE_CAPABILITIES));
  }

  dataMinimizationBenefits() {
    return Object.freeze(Object.values(DATA_MINIMIZATION_BENEFITS));
  }

  privacyPrinciples() {
    return Object.freeze(Object.values(PRIVACY_PROTECTION_PRINCIPLES));
  }

  aiDataProtectionAssets() {
    return Object.freeze(Object.values(AI_DATA_PROTECTION_ASSETS));
  }

  dataSharingDecisionFactors() {
    return Object.freeze(Object.values(DATA_SHARING_DECISION_FACTORS));
  }

  retentionJustifications() {
    return Object.freeze(Object.values(RETENTION_JUSTIFICATIONS));
  }

  secureDisposalTargets() {
    return Object.freeze(Object.values(SECURE_DISPOSAL_TARGETS));
  }

  observabilityEvents() {
    return Object.freeze(Object.values(DATA_PROTECTION_OBSERVABILITY_EVENTS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(DATA_PROTECTION_GOVERNANCE_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_CRYPTOGRAPHY_DATA_PROTECTION_CAPABILITIES));
  }

  validateDataProtectionProfile(profileInput) {
    const profile = profileInput instanceof DataProtectionProfile
      ? profileInput
      : new DataProtectionProfile(profileInput);
    const errors = [];

    if (!profile.informationAsset) errors.push('Data protection profile must identify the information asset.');
    if (!this.classificationLevels().includes(profile.classification)) errors.push(`Unsupported information classification: ${profile.classification}.`);
    if (!this.dataCategories().includes(profile.dataCategory)) errors.push(`Unsupported data category: ${profile.dataCategory}.`);
    appendMissing(errors, profile.lifecycleStages, this.dataLifecycle(), 'Data lifecycle protection must include');
    appendMissing(errors, profile.classificationInfluences, this.classificationInfluences(), 'Information classification should influence');
    appendMissing(errors, profile.privacyPrinciples, this.privacyPrinciples(), 'Privacy protection should include');
    appendMissing(errors, profile.aiDataAssets, this.aiDataProtectionAssets(), 'AI data protection should cover');
    appendMissing(errors, profile.observabilityEvents, this.observabilityEvents(), 'Data protection observability should expose');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Data protection governance must include');
    if (profile.protectedThroughoutLifecycle !== true) errors.push('Sensitive information must remain protected throughout its lifecycle.');
    if (profile.consistentClassification !== true) errors.push('Information classification should remain consistent across the platform.');
    if (profile.privacyByDesign !== true) errors.push('Privacy requirements should be incorporated into business processes by design.');
    if (profile.dataMinimized !== true) errors.push('Only necessary information should be collected, processed, or retained.');
    if (profile.aiExposureLimited !== true) errors.push('Sensitive information should not be unnecessarily exposed to AI components.');
    if (profile.auditable !== true) errors.push('Data protection controls must remain auditable.');
    if (profile.vendorSpecific === true) errors.push('Cryptography & Data Protection must remain technology neutral.');

    return validation(errors);
  }

  validateCryptographicPolicy(policyInput) {
    const policy = policyInput instanceof CryptographicProtectionPolicy
      ? policyInput
      : new CryptographicProtectionPolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Cryptographic protection policy must have a name.');
    if (!policy.informationAsset) errors.push('Cryptographic protection policy must identify the information asset.');
    if (!this.classificationLevels().includes(policy.classification)) errors.push(`Unsupported policy classification: ${policy.classification}.`);
    appendMissing(errors, policy.encryptionCoverage, this.encryptionCoverageAreas(), 'Encryption strategy must support');
    appendMissing(errors, policy.dataAtRestLocations, this.dataAtRestLocations(), 'Data at rest protection should cover');
    appendMissing(errors, policy.dataInTransitChannels, this.dataInTransitChannels(), 'Data in transit protection should cover');
    appendMissing(errors, policy.integrityTargets, this.integrityProtectionTargets(), 'Integrity protection should cover');
    appendMissing(errors, policy.authenticityTargets, this.authenticityTargets(), 'Authenticity should cover');
    appendMissing(errors, policy.signatureCapabilities, this.digitalSignatureCapabilities(), 'Digital signatures should support');
    if (policy.riskAlignedEncryption !== true) errors.push('Encryption requirements should align with business risk and data sensitivity.');
    if (policy.protectsAtRest !== true) errors.push('Sensitive data at rest should be protected against unauthorized access.');
    if (policy.protectsInTransit !== true) errors.push('Data in transit should be protected against interception and tampering.');
    if (policy.preservesIntegrity !== true) errors.push('Cryptographic controls must preserve integrity.');
    if (policy.verifiesAuthenticity !== true) errors.push('Cryptographic controls must verify authenticity.');
    if (policy.supportsNonRepudiation !== true) errors.push('Cryptographic controls must support non-repudiation.');
    if (policy.secureAcrossTrustBoundaries !== true) errors.push('Transport protection should be applied consistently across trust boundaries.');
    if (policy.auditable !== true) errors.push('Cryptographic protection controls must remain auditable.');
    if (policy.algorithmSpecific === true) errors.push('Specific cryptographic algorithms are outside ARCH-008-06 scope.');
    if (policy.vendorSpecific === true) errors.push('Cryptographic protection must remain technology neutral.');

    return validation(errors);
  }

  validateSharingRetentionPolicy(policyInput) {
    const policy = policyInput instanceof DataSharingRetentionPolicy
      ? policyInput
      : new DataSharingRetentionPolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Data sharing and retention policy must have a name.');
    if (!policy.informationAsset) errors.push('Data sharing and retention policy must identify the information asset.');
    if (!policy.recipientIdentity) errors.push('Data sharing decisions must consider recipient identity.');
    if (!policy.businessPurpose) errors.push('Data sharing decisions must include a business purpose.');
    appendMissing(errors, policy.sharingFactors, this.dataSharingDecisionFactors(), 'Data sharing decisions should consider');
    appendMissing(errors, policy.retentionJustifications, this.retentionJustifications(), 'Retention should be justified by');
    appendMissing(errors, policy.disposalTargets, this.secureDisposalTargets(), 'Secure disposal should apply to');
    if (policy.explicitlyAuthorized !== true) errors.push('Information sharing should follow explicit authorization.');
    if (policy.followsBusinessPolicy !== true) errors.push('Information sharing should follow business policy.');
    if (policy.retentionLimited !== true) errors.push('Information should be retained only as long as required.');
    if (policy.disposalPreventsRecovery !== true) errors.push('Secure disposal should prevent unauthorized recovery where appropriate.');
    if (policy.appliesConsistently !== true) errors.push('Retention policies should be consistently applied across information categories.');
    if (policy.auditable !== true) errors.push('Sharing, retention, and disposal controls must remain auditable.');
    if (policy.bypassesAuthorization === true) errors.push('Sharing should never bypass authorization controls.');
    if (policy.indefiniteRetention === true) errors.push('Indefinite retention conflicts with retention limitation.');
    if (policy.vendorSpecific === true) errors.push('Data sharing and retention controls must remain technology neutral.');

    return validation(errors);
  }

  assertModel() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Cryptography & Data Protection must include all documented objectives.');
    if (this.philosophyObjectives().length !== 6) errors.push('Cryptography & Data Protection must include documented cryptography philosophy objectives.');
    if (this.classificationLevels().length !== 4) errors.push('Cryptography & Data Protection must include all documented information classifications.');
    if (this.dataCategories().length !== 4) errors.push('Cryptography & Data Protection must include all documented data categories.');
    if (this.dataLifecycle().length !== 7) errors.push('Cryptography & Data Protection must include the documented data lifecycle.');
    if (this.encryptionCoverageAreas().length !== 6) errors.push('Cryptography & Data Protection must include documented encryption coverage areas.');
    if (this.relationshipFlow().length !== 7) errors.push('Cryptography & Data Protection must include the documented relationship flow.');

    if (errors.length > 0) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.CRYPTOGRAPHY_DATA_PROTECTION_INVALID,
        'Cryptography & Data Protection violates ARCH-008-06.',
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
  return new CryptographyDataProtectionValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
