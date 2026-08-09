import assert from 'node:assert/strict';
import test from 'node:test';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AGENT_INFORMATION_DOMAINS,
  CONTEXT_ASSEMBLY_STEPS,
  CONTEXT_EVIDENCE_FIELDS,
  CONTEXT_QUALITY_ATTRIBUTES,
  KNOWLEDGE_CATEGORIES,
  MEMORY_CATEGORIES,
  MEMORY_CONFIDENCE_CATEGORIES,
  MEMORY_KNOWLEDGE_CONTEXT_ARCHITECTURAL_RULES,
  MEMORY_KNOWLEDGE_CONTEXT_BOUNDARIES,
  MEMORY_KNOWLEDGE_CONTEXT_ERROR_CODE,
  MemoryKnowledgeContextDescriptor,
  MemoryKnowledgeContextProfile,
  TRUST_CLASSIFICATIONS,
  addAiAgentFramework
} from '../../src/ai-agent-framework/index.js';

test('ARCH-014-07 exposes information domains, knowledge, memory, layers, assembly, requests, packages, provenance, authority, and trust', () => {
  const descriptor = new MemoryKnowledgeContextDescriptor();

  assert.deepEqual(descriptor.informationDomains(), Object.values(AGENT_INFORMATION_DOMAINS));
  assert.ok(descriptor.knowledgeCategories().includes(KNOWLEDGE_CATEGORIES.BUSINESS_STATE));
  assert.ok(descriptor.memoryCategories().includes(MEMORY_CATEGORIES.PREFERENCE));
  assert.ok(descriptor.contextLayers().includes('execution-state-context'));
  assert.ok(descriptor.assemblySteps().includes(CONTEXT_ASSEMBLY_STEPS.RECORD_EVIDENCE));
  assert.ok(descriptor.requestFields().includes('provider-restrictions'));
  assert.ok(descriptor.packageFields().includes('usage-restrictions'));
  assert.ok(descriptor.provenanceFields().includes('access-decision'));
  assert.ok(descriptor.authorityLevels().includes('agent-inference'));
  assert.ok(descriptor.trustClassifications().includes(TRUST_CLASSIFICATIONS.UNTRUSTED));
});

test('ARCH-014-07 exposes freshness, relevance, minimization, budgets, compression, memory lifecycle, and knowledge publication', () => {
  const descriptor = new MemoryKnowledgeContextDescriptor();

  assert.ok(descriptor.freshnessFields().includes('event-based-invalidation'));
  assert.ok(descriptor.relevanceFactors().includes('source-authority'));
  assert.ok(descriptor.minimizationTargets().includes('raw-credentials'));
  assert.ok(descriptor.budgetTypes().includes('latency'));
  assert.ok(descriptor.compressionMethods().includes('source-linked-summaries'));
  assert.ok(descriptor.memoryRetrievalSteps().includes('return-bounded-memory-view'));
  assert.ok(descriptor.memoryRecordFields().includes('deletion-state'));
  assert.ok(descriptor.memoryConfidenceCategories().includes(MEMORY_CONFIDENCE_CATEGORIES.DISPUTED));
  assert.ok(descriptor.memoryWriteFields().includes('expected-future-value'));
  assert.ok(descriptor.memoryWriteValidationChecks().includes('prohibited-categories'));
  assert.ok(descriptor.prohibitedMemoryCategories().includes('hidden-model-reasoning'));
  assert.ok(descriptor.correctionRights().includes('request-deletion-subject-to-obligations'));
  assert.ok(descriptor.deletionTargets().includes('derived-embeddings'));
  assert.ok(descriptor.expirationTriggers().includes('consent-withdrawal'));
  assert.ok(descriptor.knowledgeRetrievalSteps().includes('return-bounded-evidence'));
  assert.ok(descriptor.publicationRequirements().includes('deprecation-plan'));
});

test('ARCH-014-07 exposes derived knowledge, state references, caching, provider checks, contamination, injection, failures, evidence, observability, evaluation, governance, quality, rules, and boundaries', () => {
  const descriptor = new MemoryKnowledgeContextDescriptor();

  assert.ok(descriptor.derivedKnowledgeFields().includes('limitations'));
  assert.ok(descriptor.executionStateReferences().includes('completion-evidence'));
  assert.ok(descriptor.cacheFields().includes('provider-restrictions'));
  assert.ok(descriptor.providerContextChecks().includes('training-use-restrictions'));
  assert.ok(descriptor.contaminationTypes().includes('cached-context-is-reused-incorrectly'));
  assert.ok(descriptor.promptInjectionSignals().includes('suppress-evidence'));
  assert.ok(descriptor.contextFailureTypes().includes('provider-restriction'));
  assert.ok(descriptor.evidenceFields().includes(CONTEXT_EVIDENCE_FIELDS.SOURCES_EXCLUDED));
  assert.ok(descriptor.observabilitySignals().includes('memory-write-rejection'));
  assert.ok(descriptor.evaluationDimensions().includes('injection-resistance'));
  assert.ok(descriptor.governanceControls().includes('data-residency'));
  assert.ok(descriptor.qualityAttributes().includes(CONTEXT_QUALITY_ATTRIBUTES.CORRECTABILITY));
  assert.ok(descriptor.architecturalRules().includes(MEMORY_KNOWLEDGE_CONTEXT_ARCHITECTURAL_RULES.CONTEXT_NOT_AUTHORITY));
  assert.ok(descriptor.architectureBoundaries().includes(MEMORY_KNOWLEDGE_CONTEXT_BOUNDARIES.PRODUCT_SELECTION));
});

test('ARCH-014-07 validates complete profiles and rejects memory/context boundary violations', () => {
  const descriptor = new MemoryKnowledgeContextDescriptor();

  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);

  const invalid = descriptor.validateProfile({
    distinctDomains: false,
    temporaryModelContext: false,
    scopeBeforeRetrieval: false,
    noSecretsInContextMemory: false,
    collapsesDomains: true,
    modelContextSourceOfTruth: true,
    contextAsAuthorization: true,
    broadUserRetrieval: true,
    relevanceOverridesAuthorization: true,
    crossTenantMemoryUse: true,
    automaticLongTermMemory: true,
    agentOutputBecomesKnowledge: true,
    fullConversationByDefault: true,
    crossTenantCacheKeys: true,
    secretsInMemory: true,
    selectsRetrievalTechnology: true
  });

  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /knowledge/);
  assert.match(invalid.errors.join('\n'), /business-state-knowledge/);
  assert.match(invalid.errors.join('\n'), /Knowledge, memory, context, and execution state must remain distinct/);
  assert.match(invalid.errors.join('\n'), /Model context must not be treated as source of truth/);
  assert.match(invalid.errors.join('\n'), /ARCH-014-07 does not define embedding or retrieval technology/);
});

test('ARCH-014-07 assertion detects incomplete context metadata', () => {
  class IncompleteDescriptor extends MemoryKnowledgeContextDescriptor {
    informationDomains() { return []; }
  }

  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    error => error instanceof PlatformError &&
      error.code === MEMORY_KNOWLEDGE_CONTEXT_ERROR_CODE &&
      error.details.errors.some(message => message.includes('documented informationDomains'))
  );
});

test('ARCH-014-07 descriptor is available through AI agent framework dependency injection', () => {
  const services = addAiAgentFramework(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('MemoryKnowledgeContextDescriptor');

  assert.ok(descriptor instanceof MemoryKnowledgeContextDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['informationDomains', 'knowledgeCategories', 'memoryCategories', 'contextLayers',
    'assemblySteps', 'requestFields', 'packageFields', 'provenanceFields', 'authorityLevels',
    'trustClassifications', 'freshnessFields', 'relevanceFactors', 'minimizationTargets',
    'budgetTypes', 'compressionMethods', 'memoryRetrievalSteps', 'memoryRecordFields',
    'memoryConfidenceCategories', 'memoryWriteFields', 'memoryWriteValidationChecks',
    'prohibitedMemoryCategories', 'correctionRights', 'deletionTargets', 'expirationTriggers',
    'knowledgeRetrievalSteps', 'publicationRequirements', 'derivedKnowledgeFields',
    'executionStateReferences', 'cacheFields', 'providerContextChecks', 'contaminationTypes',
    'promptInjectionSignals', 'contextFailureTypes', 'evidenceFields', 'observabilitySignals',
    'evaluationDimensions', 'governanceControls', 'qualityAttributes', 'architecturalRules',
    'architectureBoundaries']) values[key] = descriptor[key]();
  return new MemoryKnowledgeContextProfile({ contextName: 'Agent Memory, Knowledge, and Context', ...values });
}
