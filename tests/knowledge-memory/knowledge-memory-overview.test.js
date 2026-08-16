import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  KNOWLEDGE_AUTHORITY_PRECEDENCE,
  KNOWLEDGE_MEMORY_BOUNDARIES,
  KNOWLEDGE_MEMORY_CAPABILITIES,
  KNOWLEDGE_MEMORY_CONCEPTS,
  KNOWLEDGE_MEMORY_OVERVIEW_ERROR_CODE,
  KNOWLEDGE_MEMORY_RULES,
  KNOWLEDGE_RETRIEVAL_METHODS,
  MEMORY_CATEGORIES,
  KnowledgeMemoryOverviewDescriptor,
  KnowledgeMemoryOverviewProfile,
  addKnowledgeMemory
} from '../../src/knowledge-memory/index.js';

test('ARCH-016-01 exposes authority, knowledge, memory, and retrieval semantics', () => {
  const descriptor = new KnowledgeMemoryOverviewDescriptor();
  assert.deepEqual(descriptor.authorityPrecedence(), Object.values(KNOWLEDGE_AUTHORITY_PRECEDENCE));
  assert.ok(descriptor.concepts().includes(KNOWLEDGE_MEMORY_CONCEPTS.CONTEXT_PACKAGE));
  assert.ok(descriptor.memoryCategories().includes(MEMORY_CATEGORIES.PREFERENCE));
  assert.ok(descriptor.retrievalMethods().includes(KNOWLEDGE_RETRIEVAL_METHODS.DOMAIN));
});

test('ARCH-016-01 exposes platform capabilities, rules, and boundaries', () => {
  const descriptor = new KnowledgeMemoryOverviewDescriptor();
  assert.ok(descriptor.capabilities().includes(KNOWLEDGE_MEMORY_CAPABILITIES.MEMORY));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_MEMORY_RULES.AUTHORIZATION_FIRST));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_MEMORY_RULES.PROMPT_BOUNDARY));
  assert.ok(descriptor.architectureBoundaries().includes(KNOWLEDGE_MEMORY_BOUNDARIES.PRODUCT));
});

test('ARCH-016-01 validates profiles and rejects ownership shortcuts', () => {
  const descriptor = new KnowledgeMemoryOverviewDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'domainFactsRemainAuthoritative', 'knowledgeSourceAttributable', 'memoryPurposeBound',
    'contextTemporary', 'explicitAuthorityPrecedence', 'freshnessExplicit',
    'temporalMeaningPreserved', 'provenancePreserved', 'authorizationBeforeRetrieval',
    'tenantPropertyIsolation', 'representationsReplaceable', 'memoryAdmissionRequired',
    'memoryProposalAdmissionSeparated', 'correctionAndForgetting', 'derivedLifecyclePropagation',
    'contextMinimized', 'conflictResolutionExplicit', 'retrievedContentUntrusted',
    'promptInjectionBoundary', 'citationsAccessControlled', 'generatedSynthesisDistinct',
    'evaluationGoverned', 'safeDegradation', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'replacesDomainDatabases', 'universalDataWarehouse', 'retainsEveryConversation',
    'remembersEveryInteraction', 'storesWorkflowState', 'storesAgentState',
    'ownsIdentityAuthorization', 'automaticProductionTraining', 'similarityEqualsTruth',
    'aiProposalBecomesMemory', 'contextIsPersistentStore', 'lowerAuthorityOverrides',
    'directDatabaseAccess', 'retrievalFailureMeansAbsent', 'selectsProvider', 'definesLaterDetails'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /knowledge-item/);
  assert.match(validation.errors.join('\n'), /requires domainFactsRemainAuthoritative/);
  assert.match(validation.errors.join('\n'), /prohibits similarityEqualsTruth/);
});

test('ARCH-016-01 detects incomplete metadata', () => {
  class IncompleteDescriptor extends KnowledgeMemoryOverviewDescriptor {
    concepts() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === KNOWLEDGE_MEMORY_OVERVIEW_ERROR_CODE
  );
});

test('ARCH-016-01 profile is immutable', () => {
  const profile = complete(new KnowledgeMemoryOverviewDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.concepts.push('other'), TypeError);
});

test('ARCH-016-01 descriptor is registered', () => {
  const descriptor = addKnowledgeMemory(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('KnowledgeMemoryOverviewDescriptor');
  assert.ok(descriptor instanceof KnowledgeMemoryOverviewDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'nonObjectives', 'concepts', 'authorityPrecedence', 'freshnessStates',
    'authorityClasses', 'knowledgeDomains', 'memoryCategories', 'memorySubjects', 'capabilities',
    'retrievalMethods', 'tenantScopes', 'degradedModes', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new KnowledgeMemoryOverviewProfile({ platformName: 'Knowledge & Memory', ...metadata });
}
