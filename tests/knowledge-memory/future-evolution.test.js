import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  KNOWLEDGE_MEMORY_ENDURING_INVARIANTS, KNOWLEDGE_MEMORY_EVOLUTION_ERROR_CODE,
  KNOWLEDGE_MEMORY_EVOLUTION_HORIZONS, KNOWLEDGE_MEMORY_EVOLUTION_RULES,
  KNOWLEDGE_MEMORY_INCUBATION_STAGES, KNOWLEDGE_MEMORY_MATURITY_LEVELS,
  KNOWLEDGE_MEMORY_PROMOTION_CRITERIA, KnowledgeMemoryEvolutionDescriptor,
  KnowledgeMemoryEvolutionProfile, addKnowledgeMemory
} from '../../src/knowledge-memory/index.js';

test('ARCH-016-10 exposes enduring invariants and maturity horizons', () => {
  const descriptor = new KnowledgeMemoryEvolutionDescriptor();
  assert.deepEqual(descriptor.enduringInvariants(), Object.values(KNOWLEDGE_MEMORY_ENDURING_INVARIANTS));
  assert.deepEqual(descriptor.horizons(), Object.values(KNOWLEDGE_MEMORY_EVOLUTION_HORIZONS));
  assert.deepEqual(descriptor.maturityLevels(), Object.values(KNOWLEDGE_MEMORY_MATURITY_LEVELS));
  assert.ok(descriptor.enduringInvariants().includes(KNOWLEDGE_MEMORY_ENDURING_INVARIANTS.NO_DATABASE_ACCESS));
});

test('ARCH-016-10 exposes incubation, promotion, and reversible evolution boundaries', () => {
  const descriptor = new KnowledgeMemoryEvolutionDescriptor();
  assert.deepEqual(descriptor.incubationStages(), Object.values(KNOWLEDGE_MEMORY_INCUBATION_STAGES));
  assert.deepEqual(descriptor.promotionCriteria(), Object.values(KNOWLEDGE_MEMORY_PROMOTION_CRITERIA));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_MEMORY_EVOLUTION_RULES.MATURITY_GATES));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_MEMORY_EVOLUTION_RULES.MIGRATION_SEMANTICS));
});

test('ARCH-016-10 validates profiles and rejects speculative shortcuts', () => {
  const descriptor = new KnowledgeMemoryEvolutionDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'additiveGoverned', 'invariantsPreserved', 'architectureBeforeProduct', 'maturityGated',
    'evidenceBased', 'reversible', 'multimodalGoverned', 'temporalDistinction',
    'graphProvenance', 'eligibilityFirst', 'adaptiveRetrievalBounded',
    'retrievalAgentsBounded', 'citationIntegrity', 'memoryNotHistory', 'memoryTransparent',
    'federatedMemoryGoverned', 'adaptiveContextBounded', 'edgeBounded',
    'residencyPreserved', 'privacyClaimsEvaluated', 'protocolCanonical', 'extensionsGoverned',
    'marketplaceLocallyAdmitted', 'automationBounded', 'authorityNotAutomated',
    'continuousAssuranceGoverned', 'selfHealingBounded', 'researchIsolated',
    'pilotsControlled', 'coexistenceSupported', 'migrationPreservesLifecycle',
    'providerExitDefined', 'retirementIntentional', 'valueBalanced', 'structureGoverned',
    'vendorNeutral', 'providerIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'technologyNoveltySufficient', 'advancedSkipsMaturity', 'sourceDiscoveryApproves',
    'adaptiveChangesAuthority', 'retrievalAgentUnbounded', 'groundingGuaranteesCorrectness',
    'globalPersonalProfile', 'allHistoryBecomesMemory', 'federationSharesDatabase',
    'privacyLabelProvesProtection', 'protocolGrantsAccess', 'marketplaceAutoActive',
    'autonomousHighRiskPublication', 'sensitiveInferenceAutomatic', 'scopePromotionAutomatic',
    'indefiniteRetention', 'deletionAvoidance', 'selfHealingPublishes',
    'researchUsesProductionAuthority', 'migrationResetsRetention', 'providerLocked',
    'oneMetricPromotes', 'directDatabaseAccess', 'selectsEvolutionProduct'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /domain-services-own-business-truth/);
  assert.match(validation.errors.join('\n'), /requires maturityGated/);
  assert.match(validation.errors.join('\n'), /prohibits technologyNoveltySufficient/);
});

test('ARCH-016-10 detects incomplete metadata', () => {
  class IncompleteDescriptor extends KnowledgeMemoryEvolutionDescriptor {
    horizons() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === KNOWLEDGE_MEMORY_EVOLUTION_ERROR_CODE
  );
});

test('ARCH-016-10 profile is immutable', () => {
  const profile = complete(new KnowledgeMemoryEvolutionDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.horizons.push('other'), TypeError);
});

test('ARCH-016-10 descriptor is registered', () => {
  const descriptor = addKnowledgeMemory(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('KnowledgeMemoryEvolutionDescriptor');
  assert.ok(descriptor instanceof KnowledgeMemoryEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'enduringInvariants', 'strategicDrivers', 'evolutionGoals', 'guardrails', 'horizons',
    'maturityLevels', 'futureModalities', 'futureRetrievalMethods', 'futureMemoryCapabilities',
    'federatedMemoryRequirements', 'automationLevels', 'experimentFields', 'promotionCriteria',
    'incubationStages', 'futureRisks', 'antiPatterns', 'valueMetrics', 'decisionCriteria',
    'qualityAttributes', 'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new KnowledgeMemoryEvolutionProfile({ profileName: 'Future Knowledge Memory Evolution', ...metadata });
}
