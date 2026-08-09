export const MEMORY_KNOWLEDGE_CONTEXT_ERROR_CODE = 'MEMORY_KNOWLEDGE_CONTEXT_INVALID';

export const AGENT_INFORMATION_DOMAINS = Object.freeze({
  KNOWLEDGE: 'knowledge',
  MEMORY: 'memory',
  CONTEXT: 'context',
  EXECUTION_STATE: 'execution-state'
});

export const KNOWLEDGE_CATEGORIES = Object.freeze({
  ENTERPRISE: 'enterprise-knowledge',
  TENANT: 'tenant-knowledge',
  PROPERTY: 'property-knowledge',
  DOMAIN: 'domain-knowledge',
  BUSINESS_STATE: 'business-state-knowledge'
});

export const MEMORY_CATEGORIES = Object.freeze({
  CONVERSATION: 'conversation-memory',
  SESSION: 'session-memory',
  EXECUTION: 'execution-memory',
  EPISODIC: 'episodic-memory',
  PREFERENCE: 'preference-memory',
  PROCEDURAL: 'procedural-memory',
  AGENT_PERFORMANCE: 'agent-performance-memory'
});

export const CONTEXT_LAYERS = Object.freeze({
  AGENT_DEFINITION: 'agent-definition-context',
  GOAL: 'goal-context',
  IDENTITY: 'identity-context',
  TENANT: 'tenant-context',
  PROPERTY: 'property-context',
  USER_REQUEST: 'current-user-request-context',
  CONVERSATION: 'conversation-context',
  EXECUTION_STATE: 'execution-state-context',
  PLAN_TASK: 'plan-and-task-context',
  KNOWLEDGE: 'knowledge-context',
  MEMORY: 'memory-context',
  TOOL_CONTRACT: 'tool-contract-context',
  POLICY: 'policy-context',
  HUMAN_DECISION: 'human-decision-context',
  OPERATIONAL: 'operational-context'
});

export const CONTEXT_ASSEMBLY_STEPS = Object.freeze({
  IDENTIFY_PURPOSE: 'identify-reasoning-purpose',
  DETERMINE_CATEGORIES: 'determine-permitted-context-categories',
  ESTABLISH_SCOPE: 'establish-identity-tenant-and-property',
  RETRIEVE_SOURCES: 'retrieve-candidate-sources',
  APPLY_AUTHORIZATION: 'apply-authorization-and-purpose-limitation',
  VALIDATE_PROVENANCE_FRESHNESS: 'validate-provenance-and-freshness',
  CLASSIFY_TRUST: 'classify-trust',
  RESOLVE_OR_SURFACE_CONFLICTS: 'resolve-or-surface-conflicts',
  RANK_RELEVANCE_AUTHORITY: 'rank-relevance-and-authority',
  REMOVE_DUPLICATES: 'remove-duplicates',
  MINIMIZE_DATA: 'apply-data-minimization',
  APPLY_BUDGETS: 'apply-token-and-resource-budgets',
  ASSEMBLE_PACKAGE: 'assemble-structured-context-package',
  RECORD_EVIDENCE: 'record-context-evidence',
  DELIVER_CONTEXT: 'deliver-to-approved-reasoning-capability'
});

export const CONTEXT_REQUEST_FIELDS = Object.freeze({
  AGENT: 'agent',
  EXECUTION: 'execution',
  STEP: 'step',
  TASK: 'task',
  PURPOSE: 'purpose',
  GOAL: 'goal',
  TENANT: 'tenant',
  PROPERTY: 'property',
  REQUIRED_CATEGORIES: 'required-categories',
  TIME_HORIZON: 'time-horizon',
  FRESHNESS: 'freshness',
  DATA_CLASSIFICATION: 'data-classification',
  MAXIMUM_SIZE: 'maximum-size',
  PROVIDER_RESTRICTIONS: 'provider-restrictions',
  EXCLUDED_CATEGORIES: 'excluded-categories'
});

export const CONTEXT_PACKAGE_FIELDS = Object.freeze({
  PACKAGE_IDENTIFIER: 'package-identifier',
  PURPOSE: 'purpose',
  EXECUTION_STEP: 'execution-and-step',
  TENANT_PROPERTY: 'tenant-and-property',
  SOURCE_REFERENCES: 'source-references',
  STRUCTURED_CONTENT: 'structured-content',
  PROVENANCE: 'provenance',
  TRUST_LABELS: 'trust-labels',
  FRESHNESS: 'freshness',
  CLASSIFICATION: 'classification',
  CONFLICT_INDICATORS: 'conflict-indicators',
  ASSUMPTIONS: 'assumptions',
  EXPIRATION: 'expiration',
  USAGE_RESTRICTIONS: 'usage-restrictions'
});

export const SOURCE_PROVENANCE_FIELDS = Object.freeze({
  SOURCE_OWNER: 'source-owner',
  SOURCE_SYSTEM: 'source-system',
  RECORD_DOCUMENT: 'record-or-document',
  VERSION: 'version',
  TENANT: 'tenant',
  PROPERTY: 'property',
  AUTHOR_PUBLISHER: 'author-or-publisher',
  PUBLICATION_TIME: 'publication-time',
  RETRIEVAL_TIME: 'retrieval-time',
  TRANSFORMATION: 'transformation',
  TRUST_CLASSIFICATION: 'trust-classification',
  ACCESS_DECISION: 'access-decision'
});

export const SOURCE_AUTHORITY_LEVELS = Object.freeze({
  BUSINESS_SERVICE_STATE: 'authoritative-business-service-state',
  POLICY_CONFIGURATION: 'approved-policy-and-configuration',
  GOVERNED_KNOWLEDGE: 'governed-enterprise-tenant-or-property-knowledge',
  CURRENT_HUMAN_INPUT: 'attributable-current-human-input',
  VERIFIED_TOOL_OUTPUT: 'verified-tool-output',
  APPROVED_MEMORY: 'approved-memory',
  CONVERSATION_HISTORY: 'conversation-history',
  AGENT_INFERENCE: 'agent-inference'
});

export const TRUST_CLASSIFICATIONS = Object.freeze({
  AUTHORITATIVE: 'authoritative',
  APPROVED: 'approved',
  VERIFIED: 'verified',
  ATTRIBUTABLE: 'attributable',
  UNVERIFIED: 'unverified',
  USER_PROVIDED: 'user-provided',
  EXTERNALLY_PROVIDED: 'externally-provided',
  DERIVED: 'derived',
  UNTRUSTED: 'untrusted',
  PROHIBITED: 'prohibited'
});

export const FRESHNESS_FIELDS = Object.freeze({
  EFFECTIVE_TIME: 'effective-time',
  RETRIEVAL_TIME: 'retrieval-time',
  EXPIRATION: 'expiration',
  REFRESH_POLICY: 'refresh-policy',
  EVENT_INVALIDATION: 'event-based-invalidation',
  ACCEPTABLE_STALENESS: 'acceptable-staleness'
});

export const RELEVANCE_FACTORS = Object.freeze({
  CURRENT_GOAL: 'current-goal',
  TASK: 'task',
  ENTITY_MATCH: 'entity-match',
  TENANT: 'tenant',
  PROPERTY: 'property',
  TIME: 'time',
  SOURCE_AUTHORITY: 'source-authority',
  USER_RELATIONSHIP: 'user-relationship',
  PRIOR_USE: 'prior-use',
  FRESHNESS: 'freshness'
});

export const CONTEXT_MINIMIZATION_TARGETS = Object.freeze({
  UNRELATED_PERSONAL: 'unrelated-personal-information',
  UNRELATED_TENANT: 'unrelated-tenant-information',
  DUPLICATES: 'duplicate-passages',
  FULL_DOCUMENTS: 'full-documents-when-excerpts-suffice',
  OLD_HISTORY: 'historical-content-beyond-required-horizon',
  HIDDEN_REASONING: 'hidden-reasoning',
  SECRETS: 'secrets',
  RAW_CREDENTIALS: 'raw-credentials',
  UNNEEDED_TOOL_OUTPUT: 'unneeded-tool-output'
});

export const CONTEXT_BUDGET_TYPES = Object.freeze({
  TOKENS: 'tokens',
  DOCUMENTS: 'documents',
  MEMORY_RECORDS: 'memory-records',
  TIME_RANGE: 'time-range',
  RETRIEVAL_CALLS: 'retrieval-calls',
  DATA_SIZE: 'data-size',
  COST: 'cost',
  LATENCY: 'latency'
});

export const CONTEXT_COMPRESSION_METHODS = Object.freeze({
  EXTRACTIVE_SELECTION: 'extractive-selection',
  STRUCTURED_FACTS: 'structured-facts',
  SOURCE_LINKED_SUMMARIES: 'source-linked-summaries',
  DEDUPLICATION: 'deduplication',
  HIERARCHICAL_SUMMARIES: 'hierarchical-summaries',
  TASK_SPECIFIC_VIEWS: 'task-specific-views'
});

export const MEMORY_RETRIEVAL_STEPS = Object.freeze({
  ESTABLISH_SUBJECT: 'establish-subject',
  ESTABLISH_PURPOSE: 'establish-authorized-purpose',
  SELECT_CATEGORIES: 'select-permitted-memory-categories',
  APPLY_SCOPE: 'apply-tenant-and-property-scope',
  RETRIEVE_CANDIDATES: 'retrieve-candidates',
  VALIDATE_PROVENANCE: 'validate-provenance',
  VALIDATE_FRESHNESS: 'validate-freshness',
  RANK_RELEVANCE: 'rank-relevance',
  APPLY_PRIVACY_CONSENT: 'apply-privacy-and-consent',
  RETURN_BOUNDED_VIEW: 'return-bounded-memory-view'
});

export const MEMORY_RECORD_FIELDS = Object.freeze({
  IDENTIFIER: 'memory-identifier',
  SUBJECT: 'subject',
  TENANT: 'tenant',
  PROPERTY: 'property',
  MEMORY_TYPE: 'memory-type',
  CONTENT: 'content-or-structured-value',
  SOURCE: 'source',
  CREATION_TIME: 'creation-time',
  LAST_VALIDATION: 'last-validation',
  CONFIDENCE_CATEGORY: 'confidence-category',
  CONSENT_AUTHORITY: 'consent-or-authority',
  PURPOSE: 'purpose',
  SENSITIVITY: 'sensitivity',
  EXPIRATION: 'expiration',
  CORRECTION_STATE: 'correction-state',
  DELETION_STATE: 'deletion-state'
});

export const MEMORY_CONFIDENCE_CATEGORIES = Object.freeze({
  EXPLICITLY_STATED: 'explicitly-stated',
  AUTHORITATIVELY_OBSERVED: 'authoritatively-observed',
  REPEATEDLY_OBSERVED: 'repeatedly-observed',
  INFERRED: 'inferred',
  UNVERIFIED: 'unverified',
  DISPUTED: 'disputed'
});

export const MEMORY_WRITE_FIELDS = Object.freeze({
  SUBJECT: 'subject',
  CONTENT: 'content',
  MEMORY_TYPE: 'memory-type',
  SOURCE: 'source',
  TENANT: 'tenant',
  PROPERTY: 'property',
  PURPOSE: 'purpose',
  SENSITIVITY: 'sensitivity',
  CONFIDENCE: 'confidence',
  RETENTION: 'retention',
  CONSENT_AUTHORITY: 'consent-or-authority',
  EXPECTED_VALUE: 'expected-future-value'
});

export const MEMORY_WRITE_VALIDATION_CHECKS = Object.freeze({
  IDENTITY: 'identity',
  AUTHORITY: 'authority',
  CONSENT: 'consent',
  PURPOSE: 'purpose',
  ACCURACY: 'accuracy',
  SOURCE: 'source',
  DUPLICATION: 'duplication',
  SENSITIVITY: 'sensitivity',
  TENANT_PROPERTY: 'tenant-and-property',
  RETENTION: 'retention',
  PROHIBITED_CATEGORIES: 'prohibited-categories'
});

export const PROHIBITED_MEMORY_CATEGORIES = Object.freeze({
  CREDENTIALS: 'credentials',
  SECRETS: 'secrets',
  PAYMENT_AUTHENTICATION: 'payment-authentication-data',
  UNNECESSARY_SENSITIVE_PERSONAL: 'unnecessary-sensitive-personal-data',
  UNSUPPORTED_ALLEGATIONS: 'unsupported-allegations',
  HIDDEN_REASONING: 'hidden-model-reasoning',
  CROSS_TENANT_DATA: 'cross-tenant-data',
  UNVERIFIED_HIGH_IMPACT: 'unverified-high-impact-conclusions',
  NO_PURPOSE: 'data-retained-without-purpose'
});

export const MEMORY_CORRECTION_RIGHTS = Object.freeze({
  VIEW: 'view-relevant-memory',
  CORRECT: 'correct-inaccurate-memory',
  DISPUTE: 'dispute-inferred-memory',
  WITHDRAW_CONSENT: 'withdraw-consent',
  REQUEST_DELETION: 'request-deletion-subject-to-obligations'
});

export const MEMORY_DELETION_TARGETS = Object.freeze({
  PRIMARY_RECORD: 'primary-record',
  INDEXES: 'indexes',
  CACHES: 'caches',
  EMBEDDINGS: 'derived-embeddings',
  REPLICAS: 'replicas',
  CONTEXT_CACHES: 'context-caches',
  DOWNSTREAM_COPIES: 'downstream-copies'
});

export const MEMORY_EXPIRATION_TRIGGERS = Object.freeze({
  FIXED_TIME: 'fixed-time',
  INACTIVITY: 'inactivity',
  SESSION_END: 'session-end',
  EXECUTION_END: 'execution-end',
  TENANT_RELATIONSHIP: 'tenant-relationship',
  PROPERTY_RELATIONSHIP: 'property-relationship',
  CONSENT_WITHDRAWAL: 'consent-withdrawal',
  SOURCE_INVALIDATION: 'source-invalidation',
  SUPERSEDING_INFORMATION: 'superseding-information'
});

export const KNOWLEDGE_RETRIEVAL_STEPS = Object.freeze({
  IDENTIFY_NEED: 'identify-information-need',
  SELECT_SOURCES: 'select-governed-sources',
  APPLY_SCOPE: 'apply-tenant-and-property-scope',
  APPLY_CLASSIFICATION: 'apply-classification',
  RETRIEVE_CANDIDATES: 'retrieve-source-linked-candidates',
  RANK_AUTHORITY_RELEVANCE: 'rank-authority-and-relevance',
  VALIDATE_FRESHNESS: 'validate-freshness',
  PRESERVE_VERSION: 'preserve-version',
  RETURN_EVIDENCE: 'return-bounded-evidence'
});

export const KNOWLEDGE_PUBLICATION_REQUIREMENTS = Object.freeze({
  OWNER: 'identified-owner',
  SOURCE_REVIEW: 'source-review',
  VALIDATION: 'validation',
  CLASSIFICATION: 'classification',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  EFFECTIVE_DATE: 'effective-date',
  VERSION: 'version',
  APPROVAL: 'approval',
  RETENTION: 'retention',
  DEPRECATION_PLAN: 'deprecation-plan'
});

export const DERIVED_KNOWLEDGE_FIELDS = Object.freeze({
  SOURCE_SET: 'source-set',
  METHOD: 'method',
  ASSUMPTIONS: 'assumptions',
  CONFIDENCE_CATEGORY: 'confidence-category',
  TENANT_SCOPE: 'tenant-scope',
  TIME_RANGE: 'time-range',
  REVIEWER: 'reviewer',
  LIMITATIONS: 'limitations'
});

export const EXECUTION_STATE_REFERENCES = Object.freeze({
  GOAL: 'goal',
  PLAN_VERSION: 'plan-version',
  TASK_STATUS: 'task-status',
  TOOL_ACTIONS: 'tool-actions',
  HUMAN_DECISIONS: 'human-decisions',
  LIMITS: 'limits',
  CHECKPOINTS: 'checkpoints',
  COMPLETION_EVIDENCE: 'completion-evidence'
});

export const CONTEXT_CACHE_FIELDS = Object.freeze({
  CACHE_KEY: 'cache-key',
  TENANT_PROPERTY_PARTITION: 'tenant-and-property-partition',
  PURPOSE: 'purpose',
  SOURCE_VERSIONS: 'source-versions',
  EXPIRATION: 'expiration',
  INVALIDATION: 'invalidation',
  DATA_CLASSIFICATION: 'data-classification',
  PROVIDER_RESTRICTIONS: 'provider-restrictions'
});

export const MODEL_PROVIDER_CONTEXT_CHECKS = Object.freeze({
  PROVIDER_APPROVAL: 'provider-approval',
  MODEL_APPROVAL: 'model-approval',
  REGION: 'region',
  DATA_CLASSIFICATION: 'data-classification',
  TENANT_CONTRACT: 'tenant-contract',
  RETENTION_BEHAVIOR: 'retention-behavior',
  TRAINING_USE_RESTRICTIONS: 'training-use-restrictions',
  MINIMUM_NECESSARY: 'minimum-necessary-content'
});

export const CONTEXT_CONTAMINATION_TYPES = Object.freeze({
  CROSS_TENANT_CONTENT: 'one-tenant-content-enters-another-tenant-context',
  UNTRUSTED_INSTRUCTIONS: 'untrusted-instructions-override-agent-rules',
  STALE_MEMORY: 'stale-memory-overrides-current-truth',
  INFERENCE_AS_FACT: 'agent-inference-is-stored-as-fact',
  TOOL_OUTPUT_POLLUTION: 'tool-output-pollutes-future-prompts',
  BAD_CACHE_REUSE: 'cached-context-is-reused-incorrectly',
  TEST_DATA_IN_PRODUCTION: 'test-data-enters-production-context'
});

export const PROMPT_INJECTION_SIGNALS = Object.freeze({
  OVERRIDE_INSTRUCTIONS: 'override-instructions',
  REQUEST_CREDENTIALS: 'request-credentials',
  TRIGGER_TOOLS: 'trigger-tools',
  EXFILTRATE_DATA: 'exfiltrate-data',
  MODIFY_MEMORY: 'modify-memory',
  EXPAND_TENANT_SCOPE: 'expand-tenant-scope',
  SUPPRESS_EVIDENCE: 'suppress-evidence'
});

export const CONTEXT_FAILURE_TYPES = Object.freeze({
  MISSING_REQUIRED_SOURCE: 'missing-required-source',
  UNAUTHORIZED_SOURCE: 'unauthorized-source',
  STALE_SOURCE: 'stale-source',
  CONFLICTING_SOURCE: 'conflicting-source',
  RETRIEVAL_OUTAGE: 'retrieval-outage',
  BUDGET_OVERFLOW: 'budget-overflow',
  PROVENANCE_FAILURE: 'provenance-failure',
  TENANT_AMBIGUITY: 'tenant-ambiguity',
  PROPERTY_AMBIGUITY: 'property-ambiguity',
  PROVIDER_RESTRICTION: 'provider-restriction'
});

export const CONTEXT_EVIDENCE_FIELDS = Object.freeze({
  CONTEXT_REQUEST: 'context-request',
  PURPOSE: 'purpose',
  AGENT_EXECUTION: 'agent-and-execution',
  TENANT_PROPERTY: 'tenant-and-property',
  SOURCES_SELECTED: 'sources-selected',
  SOURCES_EXCLUDED: 'sources-excluded',
  AUTHORIZATION: 'authorization',
  PROVENANCE: 'provenance',
  FRESHNESS: 'freshness',
  TRUST: 'trust',
  CONFLICT_DECISIONS: 'conflict-decisions',
  MEMORY_USE: 'memory-use',
  PROVIDER: 'provider',
  PACKAGE_VERSION: 'package-version'
});

export const CONTEXT_OBSERVABILITY_SIGNALS = Object.freeze({
  RETRIEVAL_VOLUME: 'retrieval-volume',
  RETRIEVAL_LATENCY: 'retrieval-latency',
  SOURCE_CATEGORIES: 'source-categories',
  CONTEXT_SIZE: 'context-size',
  TOKEN_USE: 'token-use',
  CACHE_HIT: 'cache-hit',
  FRESHNESS_FAILURES: 'freshness-failures',
  AUTHORIZATION_DENIALS: 'authorization-denials',
  CONFLICT_RATE: 'conflict-rate',
  MEMORY_WRITE_PROPOSALS: 'memory-write-proposals',
  MEMORY_WRITE_REJECTION: 'memory-write-rejection',
  DELETION_COMPLETION: 'deletion-completion',
  CROSS_TENANT_SIGNALS: 'cross-tenant-control-signals',
  PROVIDER_EXPOSURE: 'provider-exposure',
  CONTEXT_QUALITY: 'context-related-quality'
});

export const CONTEXT_EVALUATION_DIMENSIONS = Object.freeze({
  SOURCE_AUTHORITY: 'source-authority',
  RETRIEVAL_RELEVANCE: 'retrieval-relevance',
  GROUNDING: 'grounding',
  FRESHNESS: 'freshness',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_ISOLATION: 'property-isolation',
  MEMORY_APPROPRIATENESS: 'memory-appropriateness',
  PERSONALIZATION_QUALITY: 'personalization-quality',
  CONTEXT_COMPLETENESS: 'context-completeness',
  CONTEXT_EFFICIENCY: 'context-efficiency',
  CONFLICT_HANDLING: 'conflict-handling',
  INJECTION_RESISTANCE: 'injection-resistance',
  WRITE_BACK_CORRECTNESS: 'write-back-correctness',
  CORRECTION_DELETION: 'correction-and-deletion'
});

export const CONTEXT_GOVERNANCE_CONTROLS = Object.freeze({
  PURPOSE_LIMITATION: 'purpose-limitation',
  DATA_MINIMIZATION: 'data-minimization',
  CONSENT: 'consent',
  CLASSIFICATION: 'classification',
  ACCESS_CONTROL: 'access-control',
  RETENTION: 'retention',
  DELETION: 'deletion',
  LEGAL_HOLD: 'legal-hold',
  DATA_RESIDENCY: 'data-residency',
  TENANT_COMMITMENTS: 'tenant-commitments',
  EVIDENCE: 'evidence',
  ASSURANCE: 'assurance'
});

export const CONTEXT_QUALITY_ATTRIBUTES = Object.freeze({
  RELEVANCE: 'relevance',
  AUTHORITY: 'authority',
  FRESHNESS: 'freshness',
  ISOLATION: 'isolation',
  PRIVACY: 'privacy',
  TRACEABILITY: 'traceability',
  CORRECTABILITY: 'correctability',
  EFFICIENCY: 'efficiency',
  PORTABILITY: 'portability'
});

export const MEMORY_KNOWLEDGE_CONTEXT_ARCHITECTURAL_RULES = Object.freeze({
  DISTINCT_DOMAINS: 'keep-knowledge-memory-context-and-execution-state-distinct',
  TEMPORARY_CONTEXT: 'treat-model-context-window-as-temporary',
  PREFER_BUSINESS_STATE: 'prefer-authoritative-business-state',
  PROVENANCE_TRUST: 'preserve-source-provenance-and-trust-classification',
  VALIDATE_FRESHNESS: 'validate-freshness',
  EXPLICIT_PURPOSE: 'retrieve-only-for-explicit-purpose',
  SCOPE_BEFORE_RETRIEVAL: 'apply-tenant-and-property-scope-before-retrieval',
  MINIMIZE_SENSITIVE: 'minimize-personal-and-sensitive-information',
  BOUNDED_BUDGETS: 'use-bounded-context-budgets',
  PRESERVE_CONFLICTS: 'preserve-conflicts-rather-than-fabricate-resolution',
  UNTRUSTED_AS_DATA: 'treat-untrusted-content-as-data',
  CONTEXT_NOT_AUTHORITY: 'prevent-context-from-granting-authority',
  CONVERSATION_NOT_STATE: 'prevent-conversation-history-from-becoming-authoritative-state',
  NO_CROSS_TENANT_MEMORY: 'prevent-one-tenant-memory-from-entering-another-tenant-context',
  NO_SHARED_TENANT_CONTEXT: 'prevent-shared-agents-from-sharing-tenant-context',
  NO_SECRETS_IN_CONTEXT_MEMORY: 'keep-credentials-and-secrets-out-of-context-and-memory',
  VALIDATE_MEMORY_WRITE: 'require-validation-before-memory-write-back',
  DISTINGUISH_MEMORY_CONFIDENCE: 'distinguish-explicit-observed-inferred-and-disputed-memory',
  CORRECTION_EXPIRATION_DELETION: 'support-correction-expiration-and-deletion',
  GOVERN_KNOWLEDGE_PUBLICATION: 'prevent-agent-output-from-becoming-knowledge-without-publication-governance',
  PARTITION_INVALIDATE_CACHES: 'partition-and-invalidate-caches-correctly',
  PROVIDER_REGIONAL_RESTRICTIONS: 'enforce-provider-and-regional-data-restrictions',
  EVIDENCE_WITHOUT_DUPLICATION: 'produce-context-evidence-without-unnecessary-content-duplication',
  MODEL_STORAGE_NEUTRAL: 'remain-model-and-storage-neutral'
});

export const MEMORY_KNOWLEDGE_CONTEXT_BOUNDARIES = Object.freeze({
  KNOWLEDGE_STORE_IMPLEMENTATION: 'detailed-knowledge-store-implementation',
  MEMORY_STORE_IMPLEMENTATION: 'detailed-memory-store-implementation',
  RETRIEVAL_TECHNOLOGY: 'embedding-or-retrieval-technology',
  DATA_MODEL_INTERNALS: 'data-model-internals',
  BUSINESS_SERVICE_STATE: 'business-service-state',
  RUNTIME_STATE_STORAGE: 'runtime-state-storage',
  PRODUCT_SELECTION: 'model-database-or-vector-product'
});
