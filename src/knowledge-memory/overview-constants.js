export const KNOWLEDGE_MEMORY_OVERVIEW_ERROR_CODE = 'KNOWLEDGE_MEMORY_OVERVIEW_INVALID';

export const KNOWLEDGE_MEMORY_OBJECTIVES = Object.freeze({
  DISCOVERY: 'trusted-knowledge-discovery',
  ATTRIBUTION: 'source-attributable-retrieval',
  GROUNDING: 'grounded-ai-context',
  PURPOSE_MEMORY: 'purpose-limited-memory',
  PERSONALIZATION: 'controlled-personalization',
  LIFECYCLE: 'consistent-knowledge-lifecycle',
  FRESHNESS: 'explicit-freshness',
  FORGETTING: 'correction-and-forgetting',
  ISOLATION: 'tenant-and-property-isolation',
  PRIVACY: 'privacy-protection',
  CONTEXT: 'explainable-context-assembly',
  PORTABILITY: 'search-and-representation-portability',
  SCALE: 'operational-scalability',
  EVIDENCE: 'control-evidence',
  IMPROVEMENT: 'continuous-improvement'
});

export const KNOWLEDGE_MEMORY_NON_OBJECTIVES = Object.freeze({
  DOMAIN_DATABASES: 'replace-domain-databases',
  DATA_WAREHOUSE: 'create-universal-data-warehouse',
  COPY_ALL_DATA: 'copy-all-enterprise-data',
  RETAIN_CONVERSATIONS: 'retain-every-conversation',
  REMEMBER_INTERACTIONS: 'remember-every-user-interaction',
  WORKFLOW_STATE: 'store-workflow-execution-state',
  AGENT_STATE: 'store-agent-runtime-state',
  BUSINESS_RULES: 'define-business-rules',
  IDENTITY_AUTHORIZATION: 'define-identity-or-authorization',
  DOCUMENT_OWNERSHIP: 'replace-document-ownership',
  AUTO_TRAINING: 'train-models-automatically-from-production-data',
  SIMILARITY_TRUTH: 'treat-vector-similarity-as-truth',
  PROVIDER_SELECTION: 'select-storage-or-ai-provider'
});

export const KNOWLEDGE_MEMORY_CONCEPTS = Object.freeze({
  SOURCE: 'source',
  ARTIFACT: 'artifact',
  KNOWLEDGE_ITEM: 'knowledge-item',
  REPRESENTATION: 'representation',
  MEMORY_CANDIDATE: 'memory-candidate',
  MEMORY_RECORD: 'memory-record',
  CONTEXT_REQUEST: 'context-request',
  CONTEXT_PACKAGE: 'context-package',
  CITATION: 'citation',
  PROVENANCE: 'provenance',
  POLICY_DECISION: 'policy-decision',
  EVALUATION_RESULT: 'evaluation-result',
  LIFECYCLE_EVENT: 'lifecycle-event'
});

export const KNOWLEDGE_AUTHORITY_PRECEDENCE = Object.freeze({
  DOMAIN: 'current-authoritative-domain-service-result',
  POLICY: 'effective-enterprise-tenant-or-property-policy',
  APPROVED_KNOWLEDGE: 'approved-current-knowledge-source',
  CURATED_MEMORY: 'curated-memory-with-provenance',
  CONFIRMED_MEMORY: 'confirmed-episodic-or-preference-memory',
  CONVERSATION: 'conversation-context',
  DERIVED: 'derived-or-inferred-content',
  EXTERNAL: 'external-unverified-content'
});

export const KNOWLEDGE_FRESHNESS_STATES = Object.freeze({
  CURRENT: 'current',
  TOLERATED: 'valid-within-tolerance',
  STALE: 'stale',
  SUPERSEDED: 'superseded',
  EXPIRED: 'expired',
  HISTORICAL: 'historical',
  UNKNOWN: 'unknown'
});

export const KNOWLEDGE_AUTHORITY_CLASSES = Object.freeze({
  AUTHORITATIVE: 'authoritative-reference',
  APPROVED: 'approved-guidance',
  INFORMATIONAL: 'informational',
  DRAFT: 'draft',
  DERIVED: 'derived',
  UNVERIFIED: 'external-unverified',
  HISTORICAL: 'historical'
});

export const KNOWLEDGE_DOMAINS = Object.freeze({
  GUEST: 'guest-information',
  PROPERTY: 'property-operations',
  TENANT_POLICY: 'tenant-policy',
  ENTERPRISE_POLICY: 'enterprise-policy',
  PRODUCT_SERVICE: 'product-and-service',
  TRAINING: 'training',
  SUPPORT: 'support',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  COMPLIANCE: 'compliance',
  TECHNICAL: 'technical',
  INTEGRATION: 'integration',
  SUPPLIER: 'supplier',
  PUBLIC: 'public-information'
});

export const MEMORY_CATEGORIES = Object.freeze({
  SESSION: 'session-memory',
  WORKING: 'working-memory',
  EPISODIC: 'episodic-memory',
  SEMANTIC: 'semantic-memory',
  PREFERENCE: 'preference-memory',
  PROCEDURAL: 'procedural-memory'
});

export const MEMORY_SUBJECTS = Object.freeze({
  USER: 'user',
  GUEST: 'guest',
  EMPLOYEE: 'employee',
  TEAM: 'team',
  TENANT: 'tenant',
  PROPERTY: 'property',
  SERVICE: 'service',
  WORKFLOW: 'workflow',
  AGENT_EXECUTION: 'agent-execution'
});

export const KNOWLEDGE_MEMORY_CAPABILITIES = Object.freeze({
  SOURCE_REGISTRY: 'source-registry',
  INGESTION: 'ingestion-and-synchronization',
  PROCESSING: 'content-processing',
  KNOWLEDGE_REGISTRY: 'knowledge-registry',
  REPRESENTATION: 'representation-service',
  RETRIEVAL: 'retrieval-service',
  GROUNDING: 'grounding-and-citation',
  CONTEXT: 'context-service',
  MEMORY: 'memory-manager',
  POLICY: 'policy-and-access-enforcement',
  EVALUATION: 'evaluation-and-quality',
  OPERATIONS: 'operations-and-observability'
});

export const KNOWLEDGE_RETRIEVAL_METHODS = Object.freeze({
  IDENTIFIER: 'identifier-lookup',
  METADATA: 'metadata-filtering',
  LEXICAL: 'lexical-search',
  SEMANTIC: 'semantic-search',
  GRAPH: 'graph-traversal',
  STRUCTURED: 'structured-query',
  TEMPORAL: 'temporal-search',
  CURATED: 'curated-response-lookup',
  DOMAIN: 'domain-service-query'
});

export const KNOWLEDGE_TENANT_SCOPES = Object.freeze({
  PUBLIC: 'public',
  ENTERPRISE: 'enterprise-shared',
  TENANT: 'tenant-private',
  GOVERNED_SHARED: 'explicitly-shared-under-governed-policy'
});

export const KNOWLEDGE_MEMORY_DEGRADED_MODES = Object.freeze({
  LEXICAL_ONLY: 'lexical-without-semantic-search',
  CURATED_ONLY: 'curated-knowledge-only',
  RESTRICTED_SOURCES: 'restricted-source-set',
  READ_ONLY_MEMORY: 'read-only-memory',
  NO_MEMORY_ADMISSION: 'no-new-memory-admission',
  CACHED_APPROVED: 'cached-approved-knowledge-within-freshness-limits',
  DOMAIN_LOOKUP: 'direct-domain-service-lookup',
  HUMAN_ESCALATION: 'human-escalation'
});

export const KNOWLEDGE_MEMORY_QUALITY_ATTRIBUTES = Object.freeze({
  ACCURACY: 'accuracy',
  RELEVANCE: 'relevance',
  FRESHNESS: 'freshness',
  TRACEABILITY: 'traceability',
  EXPLAINABILITY: 'explainability',
  CONFIDENTIALITY: 'confidentiality',
  INTEGRITY: 'integrity',
  AVAILABILITY: 'availability',
  PRIVACY: 'privacy',
  ISOLATION: 'isolation',
  CORRECTABILITY: 'correctability',
  DELETABILITY: 'deletability',
  SCALABILITY: 'scalability',
  PERFORMANCE: 'performance',
  PORTABILITY: 'portability',
  MAINTAINABILITY: 'maintainability',
  RECOVERABILITY: 'recoverability',
  AUDITABILITY: 'auditability'
});

export const KNOWLEDGE_MEMORY_RULES = Object.freeze({
  DOMAIN_AUTHORITY: 'authoritative-business-data-remains-in-domain-services',
  CONVERSATION_OWNERSHIP: 'conversation-history-remains-in-conversation-service',
  WORKFLOW_OWNERSHIP: 'workflow-state-remains-in-workflow-engine',
  AGENT_OWNERSHIP: 'agent-state-remains-in-agent-framework',
  POLICY_OWNERSHIP: 'identity-authorization-consent-policy-remain-with-owners',
  ATTRIBUTABLE_KNOWLEDGE: 'knowledge-is-governed-source-attributable-content',
  PURPOSE_MEMORY: 'memory-is-purpose-bound-scoped-and-lifecycle-managed',
  TEMPORARY_CONTEXT: 'context-is-temporary-and-operation-specific',
  PROVENANCE: 'provenance-preserved-through-transformations',
  TIME: 'freshness-and-effective-time-explicit',
  AUTHORITY_CLASSES: 'content-authority-classes-distinguished',
  AUTHORIZATION_FIRST: 'authorization-before-candidate-retrieval',
  ISOLATION: 'tenant-property-scope-everywhere',
  REPLACEABLE_REPRESENTATIONS: 'representations-replaceable-and-lifecycle-synchronized',
  RETRIEVAL_SIGNALS: 'similarity-and-ranking-are-not-truth',
  CITATIONS: 'stable-access-controlled-citations',
  SYNTHESIS: 'source-content-distinct-from-generated-synthesis',
  MEMORY_ADMISSION: 'memory-admission-before-retention',
  WRITE_SEPARATION: 'proposal-authority-distinct-from-admission-authority',
  FORGETTING: 'correction-invalidation-expiration-deletion-and-hold',
  DERIVED_CLEANUP: 'derived-representations-follow-lifecycle-changes',
  NO_AUTO_TRAINING: 'production-memory-not-automatic-training-data',
  UNTRUSTED_RETRIEVAL: 'retrieved-content-is-untrusted-input',
  PROMPT_BOUNDARY: 'retrieved-instructions-cannot-change-policy-or-tools',
  MINIMIZATION: 'context-minimized-to-authorized-purpose',
  CONFLICT: 'conflict-resolved-by-ownership-authority-scope-and-time',
  PUBLIC_CONTRACTS: 'service-boundaries-use-published-contracts',
  NO_DATABASE_ACCESS: 'no-cross-service-database-access',
  EVIDENCE: 'source-retrieval-context-memory-lifecycle-evidence',
  EVALUATION: 'quality-privacy-safety-and-isolation-evaluated',
  SAFE_DEGRADATION: 'degradation-preserves-security-and-privacy',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const KNOWLEDGE_MEMORY_BOUNDARIES = Object.freeze({
  INGESTION_ALGORITHMS: 'define-detailed-ingestion-algorithms',
  CHUNKING: 'define-one-chunking-strategy',
  RETRIEVAL: 'define-one-retrieval-algorithm',
  EMBEDDING: 'define-one-embedding-model',
  MEMORY_RANKING: 'define-one-memory-ranking-formula',
  API: 'define-detailed-api-schemas',
  PRODUCT: 'select-storage-search-graph-database-or-model',
  JUDGMENT: 'replace-qualified-professional-judgment',
  UNRESTRICTED_MEMORY: 'authorize-unrestricted-memory',
  CORRECTNESS: 'guarantee-retrieved-or-generated-content-is-correct'
});
