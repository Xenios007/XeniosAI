export const KNOWLEDGE_MEMORY_INTEGRATION_ERROR_CODE = 'KNOWLEDGE_MEMORY_INTEGRATION_INVALID';

export const KNOWLEDGE_MEMORY_INTEGRATION_OBJECTIVES = Object.freeze({
  CONTRACTS: 'stable-capability-contracts', OWNERSHIP: 'clear-ownership',
  SEMANTICS: 'semantic-consistency', EVOLUTION: 'independent-service-evolution',
  COMPATIBILITY: 'backward-compatibility', ISOLATION: 'tenant-and-property-isolation',
  PROVENANCE: 'end-to-end-provenance', LIFECYCLE: 'lifecycle-propagation',
  CORRECTION: 'reliable-correction-and-deletion', PORTABILITY: 'source-and-provider-portability',
  ASYNC: 'safe-asynchronous-processing', FAILURE: 'predictable-failure-behavior',
  OBSERVABILITY: 'observable-integrations', EVIDENCE: 'auditable-evidence',
  NEUTRALITY: 'vendor-neutrality'
});

export const KNOWLEDGE_MEMORY_INTEGRATION_PARTICIPANTS = Object.freeze({
  GATEWAY: 'api-gateway', IDENTITY: 'identity-and-policy-services', TENANT: 'tenant-service',
  PROPERTY: 'property-service', CONVERSATION: 'conversation-service', DOMAIN: 'domain-services',
  FILES: 'file-and-document-services', WORKFLOW: 'workflow-engine', ORCHESTRATOR: 'ai-orchestrator',
  AGENTS: 'ai-agent-framework', TOOLS: 'tool-engine', SOURCE_REGISTRY: 'knowledge-source-registry',
  INGESTION: 'ingestion-and-processing-services', KNOWLEDGE_REGISTRY: 'knowledge-registry',
  REPRESENTATION: 'representation-service', RETRIEVAL: 'retrieval-service',
  CONTEXT: 'grounding-and-context-service', MEMORY: 'memory-manager',
  EVALUATION: 'evaluation-and-quality-services', GOVERNANCE: 'governance-and-assurance-services',
  OBSERVABILITY: 'observability-services', EVENTS: 'event-infrastructure', SEARCH: 'search-infrastructure',
  CONTENT_PROVIDER: 'external-content-providers', AI_PROVIDER: 'external-ai-providers'
});

export const KNOWLEDGE_MEMORY_INTEGRATION_PROFILE_FIELDS = Object.freeze({
  IDENTITY: 'participant-identity', TYPE: 'participant-type', OWNER: 'owner',
  CONSUMED: 'capabilities-consumed', PROVIDED: 'capabilities-provided', AUTHENTICATION: 'authentication',
  AUTHORIZATION: 'authorization', TENANT: 'tenant-behavior', PROPERTY: 'property-behavior',
  PURPOSE: 'purpose', CLASSIFICATION: 'data-classification', API_VERSION: 'api-versions',
  EVENT_VERSION: 'event-versions', AVAILABILITY: 'availability-objective', LATENCY: 'latency-objective',
  THROUGHPUT: 'throughput-objective', RETRY: 'retry-behavior', DEGRADATION: 'degraded-behavior',
  RESIDENCY: 'residency', EVIDENCE: 'evidence-requirements', SUPPORT: 'support-and-retirement'
});

export const KNOWLEDGE_MEMORY_INTEGRATION_STYLES = Object.freeze({
  SYNCHRONOUS: 'synchronous-request-response', EVENTS: 'asynchronous-events',
  COMMANDS: 'asynchronous-commands', BULK: 'bulk-submission', SCHEDULED: 'scheduled-synchronization',
  STREAMING: 'justified-streaming', TRANSFER: 'governed-export-and-import'
});

export const KNOWLEDGE_MEMORY_INTEGRATION_ENVELOPE_FIELDS = Object.freeze({
  IDENTITY: 'message-identity', CONTRACT: 'contract-identity-and-version', CORRELATION: 'correlation-identity',
  CAUSATION: 'causation-identity', IDEMPOTENCY: 'idempotency-identity',
  PRODUCER: 'producer-identity-and-version', AUDIENCE: 'consumer-or-audience',
  PRINCIPAL: 'represented-principal', PURPOSE: 'purpose', TENANT: 'tenant', PROPERTY: 'property',
  CLASSIFICATION: 'classification', CREATED: 'created-time', EFFECTIVE: 'effective-time',
  EXPIRATION: 'expiration-time', TRACE: 'trace-context', REPLAY: 'replay-metadata',
  PAYLOAD: 'payload-reference-or-payload', INTEGRITY: 'integrity-metadata'
});

export const KNOWLEDGE_MEMORY_API_CAPABILITIES = Object.freeze({
  SOURCES: 'source-management', INGESTION: 'ingestion-and-synchronization',
  KNOWLEDGE: 'knowledge-lifecycle', REPRESENTATIONS: 'representation-lifecycle',
  RETRIEVAL: 'retrieval-and-grounding', CITATIONS: 'citation-resolution',
  CONTEXT: 'context-assembly', MEMORY: 'memory-lifecycle', PROVENANCE: 'provenance',
  EVALUATION: 'evaluation', ADMINISTRATION: 'administration'
});

export const KNOWLEDGE_MEMORY_API_CONTRACT_FIELDS = Object.freeze({
  CAPABILITY: 'capability', OPERATION: 'operation', VERSION: 'version', CALLER: 'caller-identity',
  PRINCIPAL: 'represented-principal-behavior', PURPOSE: 'purpose', TENANT: 'tenant-behavior',
  PROPERTY: 'property-behavior', INPUT: 'input-schema', OUTPUT: 'output-schema', VALIDATION: 'validation',
  CLASSIFICATION: 'classification', IDEMPOTENCY: 'idempotency', CONCURRENCY: 'concurrency',
  PAGINATION: 'pagination', DEADLINE: 'deadline', ERROR: 'error-model', PARTIAL: 'partial-results',
  COMPATIBILITY: 'compatibility', EVIDENCE: 'evidence'
});

export const KNOWLEDGE_MEMORY_RESPONSE_STATUSES = Object.freeze({
  ACCEPTED: 'accepted', COMPLETED: 'completed', PARTIAL: 'partial', PENDING: 'pending',
  REJECTED: 'rejected', CONFLICT: 'conflict', NOT_FOUND: 'not-found', NOT_ELIGIBLE: 'not-eligible',
  RATE_LIMITED: 'rate-limited', DEGRADED: 'degraded', FAILED: 'failed'
});

export const KNOWLEDGE_MEMORY_ERROR_FIELDS = Object.freeze({
  CATEGORY: 'error-category', CODE: 'stable-error-code', DESCRIPTION: 'human-safe-description',
  RETRYABLE: 'retryability', CORRELATION: 'correlation-identity', TARGET: 'failed-field-or-operation',
  REMEDIATION: 'remediation-guidance', PARTIAL: 'partial-result-indicator'
});

export const KNOWLEDGE_MEMORY_EVENT_ENVELOPE_FIELDS = Object.freeze({
  IDENTITY: 'event-identity', TYPE: 'event-type-and-version', SUBJECT: 'aggregate-or-subject-reference',
  PRODUCER: 'producer-identity-and-version', CORRELATION: 'correlation-identity',
  CAUSATION: 'causation-identity', TENANT: 'tenant', PROPERTY: 'property',
  CLASSIFICATION: 'classification', OCCURRED: 'occurred-time', PUBLISHED: 'published-time',
  SEQUENCE: 'sequence-or-revision', REPLAY: 'replay-indicator', TRACE: 'trace-context',
  PAYLOAD: 'minimized-payload-or-reference'
});

export const KNOWLEDGE_MEMORY_EVENT_DELIVERY_CONTROLS = Object.freeze({
  DEDUPLICATION: 'deduplication', IDEMPOTENCY: 'idempotency', REPLAY: 'replay',
  OUT_OF_ORDER: 'out-of-order-handling', RETRY: 'retry', DEAD_LETTER: 'dead-letter-handling',
  RECONCILIATION: 'reconciliation'
});

export const KNOWLEDGE_MEMORY_CONNECTOR_CAPABILITIES = Object.freeze({
  AUTHENTICATION: 'authentication', DISCOVERY: 'discovery', ACQUISITION: 'acquisition',
  CHECKPOINTING: 'checkpointing', CHANGE_DETECTION: 'change-detection',
  DELETION_DETECTION: 'deletion-detection', RATE_LIMITING: 'rate-limiting',
  ERROR_TRANSLATION: 'error-translation', PROVENANCE: 'provenance', HEALTH: 'health', EXIT: 'exit'
});

export const KNOWLEDGE_MEMORY_CONNECTOR_CHECKPOINT_FIELDS = Object.freeze({
  SOURCE: 'source', VERSION: 'connector-version', SCOPE: 'scope', CURSOR: 'cursor-or-revision',
  ACQUISITION: 'last-successful-acquisition', RECONCILIATION: 'last-complete-reconciliation',
  FAILURE: 'failure-state', INTEGRITY: 'integrity-state'
});

export const KNOWLEDGE_MEMORY_BULK_MANIFEST_FIELDS = Object.freeze({
  IDENTITY: 'manifest-identity', CONTRACT: 'contract-version', PRODUCER: 'producer', PURPOSE: 'purpose',
  TENANT: 'tenant', PROPERTY: 'property-scope', CLASSIFICATION: 'classification', COUNT: 'item-count',
  SIZE: 'size', HASHES: 'content-hashes', VERSIONS: 'source-versions', CREATED: 'created-time',
  EXPIRATION: 'expiration', RETRY: 'retry-behavior', COMPLETION: 'completion-criteria'
});

export const KNOWLEDGE_MEMORY_BULK_ITEM_STATUSES = Object.freeze({
  ACCEPTED: 'accepted', DUPLICATE: 'duplicate', REJECTED: 'rejected', QUARANTINED: 'quarantined',
  CONFLICT: 'conflict', FAILED: 'failed', PENDING: 'pending'
});

export const KNOWLEDGE_MEMORY_PORTABILITY_FIELDS = Object.freeze({
  IDENTITY: 'canonical-identity', TYPE: 'type', SOURCE: 'source', VERSION: 'version',
  CONTENT: 'assertion-or-content', SUBJECT: 'subject', SCOPE: 'scope', PURPOSE: 'purpose',
  TENANT: 'tenant', PROPERTY: 'property', CLASSIFICATION: 'classification', PROVENANCE: 'provenance',
  EFFECTIVE: 'effective-time', LIFECYCLE: 'lifecycle', RETENTION: 'retention',
  LEGAL_HOLD: 'legal-hold', DELETION: 'deletion-state', COMPATIBILITY: 'representation-compatibility'
});

export const KNOWLEDGE_MEMORY_DEGRADED_INTEGRATION_MODES = Object.freeze({
  CONNECTOR_PAUSED: 'connector-paused', PUBLICATION_DELAYED: 'ingestion-accepted-publication-delayed',
  LEXICAL_ONLY: 'lexical-retrieval-without-semantic-provider', READ_ONLY_MEMORY: 'read-only-memory',
  NO_ADMISSION: 'no-new-memory-admission', CACHED_KNOWLEDGE: 'cached-approved-knowledge-within-freshness',
  DOMAIN_FALLBACK: 'domain-service-fallback', MANUAL_REVIEW: 'manual-review-queue',
  DISABLED: 'integration-disabled-for-affected-scope'
});

export const KNOWLEDGE_MEMORY_INTEGRATION_QUALITY_ATTRIBUTES = Object.freeze({
  INTEROPERABILITY: 'interoperability', COMPATIBILITY: 'compatibility', AUTONOMY: 'autonomy',
  TRACEABILITY: 'traceability', SECURITY: 'security', PRIVACY: 'privacy', ISOLATION: 'isolation',
  RELIABILITY: 'reliability', AVAILABILITY: 'availability', SCALABILITY: 'scalability',
  PERFORMANCE: 'performance', PORTABILITY: 'portability', RECOVERABILITY: 'recoverability',
  AUDITABILITY: 'auditability'
});

export const KNOWLEDGE_MEMORY_INTEGRATION_RULES = Object.freeze({
  PUBLISHED_CONTRACTS: 'published-versioned-apis-events-adapters-or-bulk-contracts',
  NO_DATABASE_ACCESS: 'no-cross-service-database-access', OWNER: 'one-authoritative-owner-per-entity',
  CAPABILITIES: 'capabilities-not-implementation-details', PROVIDER_ABSTRACTION: 'provider-details-not-canonical',
  SEMANTIC_PRESERVATION: 'meaning-identity-scope-provenance-version-time-and-lifecycle-preserved',
  AUTHORITY_LABELING: 'transported-data-retains-actual-authority',
  NO_AUTHORITY_EXPANSION: 'integration-success-does-not-expand-authorization',
  IDENTITY_PROPAGATION: 'caller-principal-purpose-scope-and-classification-propagated',
  TRUSTED_SCOPE: 'tenant-and-property-from-trusted-context', REFERENCE_FIRST: 'stable-authorized-references-preferred',
  REFERENCE_NOT_ACCESS: 'reference-possession-is-not-access-authority',
  PROVENANCE: 'provenance-preserved-across-transformation-and-transfer',
  TEMPORAL: 'business-time-distinct-from-transport-time',
  STATUS_DISTINCTION: 'acceptance-processing-publication-activation-and-completion-distinct',
  FAILURE_CONTRACT: 'explicit-errors-partial-timeout-retry-and-degraded-behavior',
  SAFE_ERRORS: 'errors-do-not-leak-existence-content-topology-or-provider-details',
  IDEMPOTENCY: 'retryable-mutations-idempotent', CONCURRENCY: 'lifecycle-mutations-concurrency-controlled',
  DEADLINES: 'deadlines-bounded-across-call-chains', VERSIONING: 'public-apis-and-events-versioned',
  COMPATIBILITY: 'backward-compatible-or-governed-migration',
  DEPRECATION: 'consumers-inventoried-before-retirement', EVENTS_ARE_FACTS: 'events-are-immutable-lifecycle-facts',
  DELIVERY_REALITY: 'duplicate-delayed-out-of-order-and-replayed-events-expected',
  EVENT_SAFETY: 'deduplication-replay-safety-dead-letter-and-reconciliation',
  NO_RESURRECTION: 'replay-cannot-resurrect-inactive-or-deleted-records',
  SCHEMA_GOVERNANCE: 'schemas-governed-independent-of-code-and-transport',
  CONNECTOR_LIFECYCLE: 'connectors-preserve-provenance-checkpoints-deletions-health-and-exit',
  ANTI_CORRUPTION: 'external-models-translated-through-anti-corruption-layers',
  CONNECTOR_NO_PUBLICATION: 'connectors-cannot-publish-active-knowledge',
  DOMAIN_TRUTH: 'current-business-truth-from-domain-owner',
  CONVERSATION_ADMISSION: 'conversation-content-needs-memory-admission',
  NO_UNRESTRICTED_STORES: 'orchestrators-agents-workflows-and-tools-have-no-unrestricted-store-access',
  UNTRUSTED_OUTPUT: 'tool-and-provider-output-validated',
  NO_AUTOMATIC_APPROVAL: 'provider-output-not-automatic-knowledge-or-memory',
  BULK_PARITY: 'bulk-operations-preserve-online-controls',
  PORTABLE_LIFECYCLE: 'export-import-and-migration-preserve-full-lifecycle',
  PROJECTION_SYNC: 'derived-projections-synchronized-with-authoritative-lifecycle',
  DELETION_PRIORITY: 'security-invalidation-and-deletion-prioritized',
  DIVERGENCE_CONTAINMENT: 'lifecycle-divergence-detected-and-contained',
  ISOLATION: 'tenant-and-property-isolation-across-all-integration-surfaces',
  NO_SECRETS: 'secrets-excluded-from-payloads-events-memory-context-indexes-and-diagnostics',
  EVIDENCE: 'protected-integration-evidence',
  TESTING: 'schema-semantics-compatibility-isolation-replay-and-lifecycle-tested',
  SAFE_DEGRADATION: 'degraded-integration-preserves-authorization-isolation-lifecycle-and-evidence',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const KNOWLEDGE_MEMORY_INTEGRATION_BOUNDARIES = Object.freeze({
  SCHEMA: 'define-detailed-api-schemas', PROTOCOL: 'select-api-protocol',
  SERIALIZATION: 'select-serialization-format', BROKER: 'select-message-broker',
  REGISTRY: 'select-schema-registry', PLATFORM: 'select-integration-platform',
  CONNECTOR: 'select-connector-framework', PRODUCT: 'select-search-vector-graph-or-ai-provider',
  AUTHORIZATION: 'define-identity-or-authorization-policy', TENANCY: 'define-multi-tenancy-internals',
  ARCH_009: 'replace-integration-architecture', ARCH_017: 'replace-api-and-sdk-architecture',
  OWNERSHIP: 'transfer-domain-ownership-to-knowledge-and-memory'
});
