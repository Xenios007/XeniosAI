import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AgentFrameworkValidationResult } from '../contracts/agent-framework-validation-result.js';
import { MemoryKnowledgeContextProfile } from '../contracts/memory-knowledge-context-profile.js';
import {
  AGENT_INFORMATION_DOMAINS, CONTEXT_ASSEMBLY_STEPS, CONTEXT_BUDGET_TYPES, CONTEXT_CACHE_FIELDS,
  CONTEXT_COMPRESSION_METHODS, CONTEXT_CONTAMINATION_TYPES, CONTEXT_EVALUATION_DIMENSIONS,
  CONTEXT_EVIDENCE_FIELDS, CONTEXT_FAILURE_TYPES, CONTEXT_GOVERNANCE_CONTROLS, CONTEXT_LAYERS,
  CONTEXT_MINIMIZATION_TARGETS, CONTEXT_OBSERVABILITY_SIGNALS, CONTEXT_PACKAGE_FIELDS,
  CONTEXT_QUALITY_ATTRIBUTES, CONTEXT_REQUEST_FIELDS, DERIVED_KNOWLEDGE_FIELDS,
  EXECUTION_STATE_REFERENCES, FRESHNESS_FIELDS, KNOWLEDGE_CATEGORIES, KNOWLEDGE_PUBLICATION_REQUIREMENTS,
  KNOWLEDGE_RETRIEVAL_STEPS, MEMORY_CATEGORIES, MEMORY_CONFIDENCE_CATEGORIES,
  MEMORY_CORRECTION_RIGHTS, MEMORY_DELETION_TARGETS, MEMORY_EXPIRATION_TRIGGERS,
  MEMORY_KNOWLEDGE_CONTEXT_ARCHITECTURAL_RULES, MEMORY_KNOWLEDGE_CONTEXT_BOUNDARIES,
  MEMORY_KNOWLEDGE_CONTEXT_ERROR_CODE, MEMORY_RECORD_FIELDS, MEMORY_RETRIEVAL_STEPS,
  MEMORY_WRITE_FIELDS, MEMORY_WRITE_VALIDATION_CHECKS, MODEL_PROVIDER_CONTEXT_CHECKS,
  PROHIBITED_MEMORY_CATEGORIES, PROMPT_INJECTION_SIGNALS, RELEVANCE_FACTORS,
  SOURCE_AUTHORITY_LEVELS, SOURCE_PROVENANCE_FIELDS, TRUST_CLASSIFICATIONS
} from '../memory-knowledge-context-constants.js';

const MAP = Object.freeze({
  informationDomains: AGENT_INFORMATION_DOMAINS,
  knowledgeCategories: KNOWLEDGE_CATEGORIES,
  memoryCategories: MEMORY_CATEGORIES,
  contextLayers: CONTEXT_LAYERS,
  assemblySteps: CONTEXT_ASSEMBLY_STEPS,
  requestFields: CONTEXT_REQUEST_FIELDS,
  packageFields: CONTEXT_PACKAGE_FIELDS,
  provenanceFields: SOURCE_PROVENANCE_FIELDS,
  authorityLevels: SOURCE_AUTHORITY_LEVELS,
  trustClassifications: TRUST_CLASSIFICATIONS,
  freshnessFields: FRESHNESS_FIELDS,
  relevanceFactors: RELEVANCE_FACTORS,
  minimizationTargets: CONTEXT_MINIMIZATION_TARGETS,
  budgetTypes: CONTEXT_BUDGET_TYPES,
  compressionMethods: CONTEXT_COMPRESSION_METHODS,
  memoryRetrievalSteps: MEMORY_RETRIEVAL_STEPS,
  memoryRecordFields: MEMORY_RECORD_FIELDS,
  memoryConfidenceCategories: MEMORY_CONFIDENCE_CATEGORIES,
  memoryWriteFields: MEMORY_WRITE_FIELDS,
  memoryWriteValidationChecks: MEMORY_WRITE_VALIDATION_CHECKS,
  prohibitedMemoryCategories: PROHIBITED_MEMORY_CATEGORIES,
  correctionRights: MEMORY_CORRECTION_RIGHTS,
  deletionTargets: MEMORY_DELETION_TARGETS,
  expirationTriggers: MEMORY_EXPIRATION_TRIGGERS,
  knowledgeRetrievalSteps: KNOWLEDGE_RETRIEVAL_STEPS,
  publicationRequirements: KNOWLEDGE_PUBLICATION_REQUIREMENTS,
  derivedKnowledgeFields: DERIVED_KNOWLEDGE_FIELDS,
  executionStateReferences: EXECUTION_STATE_REFERENCES,
  cacheFields: CONTEXT_CACHE_FIELDS,
  providerContextChecks: MODEL_PROVIDER_CONTEXT_CHECKS,
  contaminationTypes: CONTEXT_CONTAMINATION_TYPES,
  promptInjectionSignals: PROMPT_INJECTION_SIGNALS,
  contextFailureTypes: CONTEXT_FAILURE_TYPES,
  evidenceFields: CONTEXT_EVIDENCE_FIELDS,
  observabilitySignals: CONTEXT_OBSERVABILITY_SIGNALS,
  evaluationDimensions: CONTEXT_EVALUATION_DIMENSIONS,
  governanceControls: CONTEXT_GOVERNANCE_CONTROLS,
  qualityAttributes: CONTEXT_QUALITY_ATTRIBUTES,
  architecturalRules: MEMORY_KNOWLEDGE_CONTEXT_ARCHITECTURAL_RULES,
  architectureBoundaries: MEMORY_KNOWLEDGE_CONTEXT_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  distinctDomains: 'Knowledge, memory, context, and execution state must remain distinct.',
  temporaryModelContext: 'The model context window must be treated as temporary.',
  prefersAuthoritativeBusinessState: 'Authoritative business state must be preferred.',
  preservesProvenanceTrust: 'Source provenance and trust classification must be preserved.',
  validatesFreshness: 'Freshness must be validated.',
  explicitPurposeRetrieval: 'Retrieval must occur only for an explicit purpose.',
  scopeBeforeRetrieval: 'Tenant and property scope must be applied before retrieval.',
  minimizesSensitiveData: 'Personal and sensitive information must be minimized.',
  boundedContextBudgets: 'Context budgets must be bounded.',
  preservesConflicts: 'Material conflicts must be preserved rather than fabricated away.',
  untrustedContentAsData: 'Untrusted content must be treated as data.',
  contextDoesNotGrantAuthority: 'Context must not grant authority.',
  conversationNotAuthoritativeState: 'Conversation history must not become authoritative state.',
  tenantMemoryIsolation: 'One tenant memory must not enter another tenant context.',
  sharedAgentTenantIsolation: 'Shared agents must not share tenant context.',
  noSecretsInContextMemory: 'Credentials and secrets must stay out of context and memory.',
  memoryWriteValidated: 'Memory write-back must be validated before persistence.',
  memoryConfidenceDistinguished: 'Explicit, observed, inferred, and disputed memory must be distinguished.',
  correctionExpirationDeletion: 'Correction, expiration, and deletion must be supported.',
  governedKnowledgePublication: 'Agent output must not become knowledge without publication governance.',
  cachePartitionInvalidation: 'Caches must be partitioned and invalidated correctly.',
  providerRegionalRestrictions: 'Provider and regional data restrictions must be enforced.',
  evidenceWithoutDuplication: 'Context evidence must avoid unnecessary content duplication.',
  modelStorageNeutral: 'Memory, knowledge, and context must remain model and storage neutral.'
});

const REQUIRED_FALSE = Object.freeze({
  collapsesDomains: 'Knowledge, memory, context, and execution state must not be collapsed.',
  modelContextSourceOfTruth: 'Model context must not be treated as source of truth.',
  promptAsRegistry: 'Model prompt must not be treated as agent registry.',
  contextAsAuthorization: 'Context must not be treated as authorization.',
  broadUserRetrieval: 'Broad user retrieval without governed purpose must be prohibited.',
  relevanceOverridesAuthorization: 'Relevance must not override authorization or trust.',
  fluentConflictResolution: 'Material conflicts must not be resolved by fluent wording.',
  crossTenantMemoryUse: 'Individual tenant memory must not become another tenant context.',
  sharedTenantContext: 'Shared-agent implementation must not permit shared tenant context.',
  inferredMemoryAsExplicit: 'Inferred memory must not be represented as explicit user statement.',
  automaticLongTermMemory: 'Agents must not write unrestricted long-term memory automatically.',
  agentOutputBecomesKnowledge: 'Agent output must not become knowledge automatically.',
  contextOverwritesExecutionState: 'Context must not overwrite execution state.',
  fullConversationByDefault: 'Full conversation history must not be passed indiscriminately.',
  fullParentMemoryForDelegate: 'Delegates must not inherit parent full memory view by default.',
  crossTenantCacheKeys: 'Cross-tenant cache keys or shared personalized caches are prohibited.',
  providerRetentionAsMemory: 'Provider context retention must not become XeniosAI memory implicitly.',
  secretsInMemory: 'Credentials and secrets must not be stored in memory.',
  selectsKnowledgeStore: 'ARCH-014-07 does not define knowledge-store implementation.',
  selectsMemoryStore: 'ARCH-014-07 does not define memory-store implementation.',
  selectsRetrievalTechnology: 'ARCH-014-07 does not define embedding or retrieval technology.',
  selectsModelDatabaseVectorProduct: 'ARCH-014-07 does not select a model, database, or vector product.'
});

export class MemoryKnowledgeContextDescriptor {
  informationDomains() { return values(MAP.informationDomains); }
  knowledgeCategories() { return values(MAP.knowledgeCategories); }
  memoryCategories() { return values(MAP.memoryCategories); }
  contextLayers() { return values(MAP.contextLayers); }
  assemblySteps() { return values(MAP.assemblySteps); }
  requestFields() { return values(MAP.requestFields); }
  packageFields() { return values(MAP.packageFields); }
  provenanceFields() { return values(MAP.provenanceFields); }
  authorityLevels() { return values(MAP.authorityLevels); }
  trustClassifications() { return values(MAP.trustClassifications); }
  freshnessFields() { return values(MAP.freshnessFields); }
  relevanceFactors() { return values(MAP.relevanceFactors); }
  minimizationTargets() { return values(MAP.minimizationTargets); }
  budgetTypes() { return values(MAP.budgetTypes); }
  compressionMethods() { return values(MAP.compressionMethods); }
  memoryRetrievalSteps() { return values(MAP.memoryRetrievalSteps); }
  memoryRecordFields() { return values(MAP.memoryRecordFields); }
  memoryConfidenceCategories() { return values(MAP.memoryConfidenceCategories); }
  memoryWriteFields() { return values(MAP.memoryWriteFields); }
  memoryWriteValidationChecks() { return values(MAP.memoryWriteValidationChecks); }
  prohibitedMemoryCategories() { return values(MAP.prohibitedMemoryCategories); }
  correctionRights() { return values(MAP.correctionRights); }
  deletionTargets() { return values(MAP.deletionTargets); }
  expirationTriggers() { return values(MAP.expirationTriggers); }
  knowledgeRetrievalSteps() { return values(MAP.knowledgeRetrievalSteps); }
  publicationRequirements() { return values(MAP.publicationRequirements); }
  derivedKnowledgeFields() { return values(MAP.derivedKnowledgeFields); }
  executionStateReferences() { return values(MAP.executionStateReferences); }
  cacheFields() { return values(MAP.cacheFields); }
  providerContextChecks() { return values(MAP.providerContextChecks); }
  contaminationTypes() { return values(MAP.contaminationTypes); }
  promptInjectionSignals() { return values(MAP.promptInjectionSignals); }
  contextFailureTypes() { return values(MAP.contextFailureTypes); }
  evidenceFields() { return values(MAP.evidenceFields); }
  observabilitySignals() { return values(MAP.observabilitySignals); }
  evaluationDimensions() { return values(MAP.evaluationDimensions); }
  governanceControls() { return values(MAP.governanceControls); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof MemoryKnowledgeContextProfile ? profileInput : new MemoryKnowledgeContextProfile(profileInput);
    const errors = [];
    if (!profile.contextName) errors.push('Agent Memory, Knowledge, and Context profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Agent Memory, Knowledge, and Context must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(MEMORY_KNOWLEDGE_CONTEXT_ERROR_CODE, 'Agent Memory, Knowledge, and Context violates ARCH-014-07.', { errors });
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new AgentFrameworkValidationResult({ isValid: errors.length === 0, errors }); }
