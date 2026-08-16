import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  KNOWLEDGE_ELIGIBLE_CORPUS_FACTORS,
  KNOWLEDGE_GROUNDING_PACKAGE_FIELDS,
  KNOWLEDGE_RESULT_STATUSES,
  KNOWLEDGE_RETRIEVAL_ERROR_CODE,
  KNOWLEDGE_RETRIEVAL_RULES,
  KNOWLEDGE_SEARCH_METHODS,
  KNOWLEDGE_SEARCH_PLAN_FIELDS,
  KnowledgeRetrievalGroundingDescriptor,
  KnowledgeRetrievalGroundingProfile,
  addKnowledgeMemory
} from '../../src/knowledge-memory/index.js';

test('ARCH-016-04 exposes eligible-corpus, search-plan, and method semantics', () => {
  const descriptor = new KnowledgeRetrievalGroundingDescriptor();
  assert.deepEqual(descriptor.eligibleCorpusFactors(), Object.values(KNOWLEDGE_ELIGIBLE_CORPUS_FACTORS));
  assert.deepEqual(descriptor.searchPlanFields(), Object.values(KNOWLEDGE_SEARCH_PLAN_FIELDS));
  assert.ok(descriptor.searchMethods().includes(KNOWLEDGE_SEARCH_METHODS.HYBRID));
  assert.ok(descriptor.searchMethods().includes(KNOWLEDGE_SEARCH_METHODS.DOMAIN));
});

test('ARCH-016-04 exposes grounding, insufficiency, and instruction boundaries', () => {
  const descriptor = new KnowledgeRetrievalGroundingDescriptor();
  assert.ok(descriptor.resultStatuses().includes(KNOWLEDGE_RESULT_STATUSES.CONFLICTING));
  assert.deepEqual(descriptor.groundingPackageFields(), Object.values(KNOWLEDGE_GROUNDING_PACKAGE_FIELDS));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_RETRIEVAL_RULES.AUTHORIZATION_FIRST));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_RETRIEVAL_RULES.INSTRUCTION_BOUNDARY));
});

test('ARCH-016-04 validates profiles and rejects retrieval shortcuts', () => {
  const descriptor = new KnowledgeRetrievalGroundingDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'retrievalIsEvidence', 'authenticatedPurposeBound', 'authorizationBeforeSearch',
    'noCandidateLeakage', 'eligibleCorpusConstrained', 'lifecycleEligibility',
    'historicalProfileExplicit', 'trustedScopeExternal', 'methodSelectionExplicit',
    'methodSemanticsDistinct', 'similarityNonAuthoritative', 'compatibilityPreserved',
    'domainFactsQueried', 'hybridProvenance', 'scoresNormalized',
    'authorityFreshnessConstrained', 'personalizationBounded', 'conflictPreserved',
    'resultBudgetsBounded', 'explicitResultStatus', 'noFabrication', 'groundingAttributable',
    'citationsStable', 'claimSupportValidated', 'instructionBoundary',
    'actionSeparatelyAuthorized', 'searchConfigurationVersioned', 'evaluationGoverned',
    'projectionsReconciled', 'safeDegradation', 'retrievalEvidenceProtected',
    'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'securityIsRankingBoost', 'postSearchFilteringOnly', 'queryTextDefinesScope',
    'semanticSearchUniversal', 'similarityEqualsTruth', 'scoresDirectlyComparable',
    'rankCreatesAuthority', 'personalizationExpandsCorpus', 'deduplicationHidesConflict',
    'emptyResultFabricated', 'conflictBecomesConsensus', 'citationSilentlyRedirects',
    'retrievedContentChangesPolicy', 'groundingAuthorizesAction', 'cacheBypassesAuthorization',
    'indexIsLifecycleAuthority', 'degradedModeWeakensSecurity', 'directDatabaseAccess',
    'selectsSearchProduct'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /eligible-corpus/);
  assert.match(validation.errors.join('\n'), /requires authorizationBeforeSearch/);
  assert.match(validation.errors.join('\n'), /prohibits similarityEqualsTruth/);
});

test('ARCH-016-04 detects incomplete metadata', () => {
  class IncompleteDescriptor extends KnowledgeRetrievalGroundingDescriptor {
    searchMethods() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === KNOWLEDGE_RETRIEVAL_ERROR_CODE
  );
});

test('ARCH-016-04 profile is immutable', () => {
  const profile = complete(new KnowledgeRetrievalGroundingDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.searchMethods.push('other'), TypeError);
});

test('ARCH-016-04 descriptor is registered', () => {
  const descriptor = addKnowledgeMemory(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('KnowledgeRetrievalGroundingDescriptor');
  assert.ok(descriptor instanceof KnowledgeRetrievalGroundingDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'consumers', 'purposes', 'searchMethods', 'eligibleCorpusFactors',
    'searchPlanFields', 'candidateFields', 'resultStatuses', 'groundingPackageFields',
    'citationFields', 'degradedModes', 'timeoutLayers', 'evaluationDimensions',
    'qualityAttributes', 'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new KnowledgeRetrievalGroundingProfile({ profileName: 'Knowledge Retrieval', ...metadata });
}
