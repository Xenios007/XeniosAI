import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  KNOWLEDGE_MEMORY_CONTROL_CATEGORIES, KNOWLEDGE_MEMORY_EVIDENCE_FIELDS,
  KNOWLEDGE_MEMORY_GOVERNANCE_GATES, KNOWLEDGE_MEMORY_SECURITY_CAPABILITIES,
  KNOWLEDGE_MEMORY_SECURITY_ERROR_CODE, KNOWLEDGE_MEMORY_SECURITY_RULES,
  KnowledgeMemorySecurityGovernanceDescriptor, KnowledgeMemorySecurityGovernanceProfile,
  addKnowledgeMemory
} from '../../src/knowledge-memory/index.js';

test('ARCH-016-08 exposes separated security capabilities and control semantics', () => {
  const descriptor = new KnowledgeMemorySecurityGovernanceDescriptor();
  assert.deepEqual(descriptor.capabilities(), Object.values(KNOWLEDGE_MEMORY_SECURITY_CAPABILITIES));
  assert.deepEqual(descriptor.controlCategories(), Object.values(KNOWLEDGE_MEMORY_CONTROL_CATEGORIES));
  assert.ok(descriptor.capabilities().includes(KNOWLEDGE_MEMORY_SECURITY_CAPABILITIES.ADMIT_MEMORY));
  assert.ok(descriptor.capabilities().includes(KNOWLEDGE_MEMORY_SECURITY_CAPABILITIES.EVIDENCE));
});

test('ARCH-016-08 exposes governance gates and evidence-by-design boundaries', () => {
  const descriptor = new KnowledgeMemorySecurityGovernanceDescriptor();
  assert.deepEqual(descriptor.evidenceFields(), Object.values(KNOWLEDGE_MEMORY_EVIDENCE_FIELDS));
  assert.ok(descriptor.governanceGates().includes(KNOWLEDGE_MEMORY_GOVERNANCE_GATES.SENSITIVE_MEMORY));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_MEMORY_SECURITY_RULES.AUTHORIZATION_FIRST));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_MEMORY_SECURITY_RULES.EVIDENCE_AUTHORIZATION));
});

test('ARCH-016-08 validates profiles and rejects security shortcuts', () => {
  const descriptor = new KnowledgeMemorySecurityGovernanceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'zeroTrust', 'leastPrivilege', 'verifiableIdentities', 'delegationBounded',
    'authorizationContextual', 'authorizationBeforeRetrieval', 'capabilitiesSeparated',
    'dutiesSeparated', 'tenantIsolation', 'propertyIsolation', 'crossScopeExplicit',
    'classificationApplied', 'inheritancePreserved', 'encryptionRequired', 'secretsExcluded',
    'sourcesAuthenticated', 'integrityValidated', 'unsafeContentQuarantined',
    'poisoningControlled', 'contentUntrusted', 'instructionBoundary', 'sideChannelsControlled',
    'embeddingsProtected', 'memoryAdmissionGoverned', 'contextBound', 'minimization',
    'exfiltrationControlled', 'privilegedAccessGoverned', 'supplyChainGoverned',
    'personalPurposeAuthorized', 'rightsSupported', 'sensitiveInferenceControlled',
    'consentExplicit', 'trainingSeparated', 'residencyEnforced', 'accountableOwnership',
    'policyHierarchyGoverned', 'riskGoverned', 'highRiskGatesRequired', 'exceptionsGoverned',
    'evidenceByDesign', 'evidenceSeparatelyAuthorized', 'chainOfCustody',
    'assuranceRiskBased', 'controlEffectivenessTested', 'remediationVerified',
    'incidentsIntegrated', 'safeDegradation', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'rankGrantsAccess', 'similarityGrantsAccess', 'citationGrantsAccess', 'memoryIdGrantsAccess',
    'internalIsTrusted', 'sharedCredentialsDefault', 'serviceCredentialReplacesUserAuth',
    'readImpliesWrite', 'writeImpliesAdmission', 'postSearchRedactionOnly', 'embeddingsAnonymous',
    'modelWritesDurableMemory', 'contextCrossScopeReuse', 'logsStoreProtectedContent',
    'technicalAvailabilityCreatesPurpose', 'silenceMeansConsent', 'sensitiveTraitsAutoInferred',
    'productionDataAutoTraining', 'exceptionsPermanent', 'evidenceInOrdinaryRetrieval',
    'directDatabaseAccess', 'degradedWeakensControls', 'selectsSecurityProduct'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /control-identity/);
  assert.match(validation.errors.join('\n'), /requires zeroTrust/);
  assert.match(validation.errors.join('\n'), /prohibits rankGrantsAccess/);
});

test('ARCH-016-08 detects incomplete metadata', () => {
  class IncompleteDescriptor extends KnowledgeMemorySecurityGovernanceDescriptor {
    evidenceFields() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === KNOWLEDGE_MEMORY_SECURITY_ERROR_CODE
  );
});

test('ARCH-016-08 profile is immutable', () => {
  const profile = complete(new KnowledgeMemorySecurityGovernanceDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.controlCategories.push('other'), TypeError);
});

test('ARCH-016-08 descriptor is registered', () => {
  const descriptor = addKnowledgeMemory(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('KnowledgeMemorySecurityGovernanceDescriptor');
  assert.ok(descriptor instanceof KnowledgeMemorySecurityGovernanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'securitySubjects', 'protectedResources', 'trustFactors', 'capabilities',
    'classifications', 'controlFields', 'controlCategories', 'riskFields', 'riskTypes',
    'governanceGates', 'assuranceMethods', 'assuranceScopeFields', 'evidenceFields',
    'evidenceTypes', 'degradedModes', 'qualityAttributes', 'architecturalRules',
    'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new KnowledgeMemorySecurityGovernanceProfile({ profileName: 'Knowledge Memory Security', ...metadata });
}
