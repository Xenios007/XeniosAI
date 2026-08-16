export const MEMORY_LIFECYCLE_ERROR_CODE = 'MEMORY_LIFECYCLE_INVALID';

export const MEMORY_LIFECYCLE_OBJECTIVES = Object.freeze({
  PURPOSE: 'purpose-bound-continuity',
  PERSONALIZATION: 'controlled-personalization',
  OWNERSHIP: 'explicit-memory-ownership',
  SUBJECT_SCOPE: 'explicit-subject-and-scope',
  PROVENANCE: 'strong-provenance',
  ADMISSION: 'admission-before-durable-retention',
  MINIMIZATION: 'minimal-and-proportionate-retention',
  TYPE_DISTINCTION: 'distinguishable-memory-types',
  TEMPORAL: 'temporal-awareness',
  UNCERTAINTY: 'confidence-and-uncertainty',
  CONFLICT: 'conflict-visibility',
  CORRECTION: 'correction-and-dispute',
  FORGETTING: 'reliable-expiration-and-deletion',
  ISOLATION: 'tenant-and-property-isolation',
  CONTROL: 'human-and-policy-control',
  REPRESENTATIONS: 'replaceable-derived-representations',
  EVIDENCE: 'auditable-lifecycle-evidence',
  PORTABILITY: 'vendor-neutral-implementation'
});

export const MEMORY_TYPES = Object.freeze({
  SESSION: 'session-memory',
  WORKING: 'working-memory',
  EPISODIC: 'episodic-memory',
  SEMANTIC: 'semantic-memory',
  PREFERENCE: 'preference-memory',
  PROCEDURAL: 'procedural-memory'
});

export const MEMORY_SCOPES = Object.freeze({
  REQUEST: 'request', SESSION: 'session', CONVERSATION: 'conversation', USER: 'user',
  ROLE: 'role', TEAM: 'team', PROPERTY: 'property', TENANT: 'tenant',
  ENTERPRISE: 'enterprise', WORKFLOW: 'workflow', AGENT_EXECUTION: 'agent-execution'
});

export const MEMORY_RECORD_FIELDS = Object.freeze({
  IDENTITY: 'memory-identity', VERSION: 'memory-version', TYPE: 'memory-type',
  ASSERTION: 'assertion', SUBJECT: 'subject', OWNER: 'owner', TENANT: 'tenant',
  PROPERTY: 'property', SCOPE: 'scope', PURPOSE: 'purpose', BASIS: 'authorized-basis',
  SOURCES: 'source-references', EVIDENCE: 'supporting-evidence', PROVENANCE: 'provenance',
  AUTHORITY: 'authority-classification', SENSITIVITY: 'sensitivity-classification',
  CONFIDENCE: 'confidence', CONFIRMATION: 'confirmation-state', CONFLICT: 'conflict-state',
  EFFECTIVE_TIME: 'effective-time', OBSERVED_TIME: 'observed-time', ADMITTED_TIME: 'admitted-time',
  LAST_CONFIRMED: 'last-confirmed-time', REVIEW_TIME: 'review-time', EXPIRATION: 'expiration-time',
  RETENTION: 'retention-policy', LIFECYCLE: 'lifecycle-state', LEGAL_HOLD: 'legal-hold-state',
  REPRESENTATIONS: 'representation-references', LIFECYCLE_EVIDENCE: 'lifecycle-evidence-reference'
});

export const MEMORY_CANDIDATE_FIELDS = Object.freeze({
  IDENTITY: 'candidate-identity', PROPOSER: 'proposer-identity', PROPOSER_TYPE: 'proposer-type',
  TYPE: 'proposed-memory-type', ASSERTION: 'proposed-assertion', SUBJECT: 'subject',
  TENANT: 'tenant', PROPERTY: 'property', SCOPE: 'proposed-scope', PURPOSE: 'proposed-purpose',
  SOURCE: 'source', EVIDENCE: 'evidence', CAPTURE_TIME: 'capture-time',
  CONFIDENCE: 'proposed-confidence', SENSITIVITY: 'sensitivity-indicators',
  RETENTION: 'requested-retention', CONFIRMATION: 'confirmation-state',
  CORRELATION: 'correlation', IDEMPOTENCY: 'idempotency-key'
});

export const MEMORY_CANDIDATE_SOURCES = Object.freeze({
  USER_INSTRUCTION: 'explicit-user-instruction', USER_PREFERENCE: 'confirmed-user-preference',
  BUSINESS_INTERACTION: 'approved-business-interaction', CURATED: 'human-curated-record',
  WORKFLOW: 'workflow-result', AGENT: 'agent-proposal', PATTERN: 'repeated-confirmed-pattern',
  DOMAIN_EVENT: 'authorized-domain-event', ADMINISTRATION: 'administrative-operation',
  MIGRATION: 'approved-source-migration'
});

export const MEMORY_ADMISSION_DECISIONS = Object.freeze({
  ADMITTED: 'admitted', LIMITED_SCOPE: 'admitted-with-limited-scope',
  SHORT_RETENTION: 'admitted-with-short-retention', PENDING_CONFIRMATION: 'pending-confirmation',
  PENDING_REVIEW: 'pending-human-review', DUPLICATE: 'duplicate', CONFLICT: 'conflict-detected',
  REJECTED: 'rejected', QUARANTINED: 'quarantined', FAILED: 'failed'
});

export const MEMORY_AUTHORITY_CLASSES = Object.freeze({
  SUBJECT_CONFIRMED: 'subject-confirmed', DOMAIN_CONFIRMED: 'domain-confirmed',
  HUMAN_CURATED: 'human-curated', SOURCE_OBSERVED: 'source-observed', DERIVED: 'derived',
  INFERRED: 'inferred', UNVERIFIED: 'unverified'
});

export const MEMORY_SENSITIVITY_CLASSES = Object.freeze({
  PUBLIC: 'public', INTERNAL: 'internal', CONFIDENTIAL: 'confidential', RESTRICTED: 'restricted',
  TENANT_CONFIDENTIAL: 'tenant-confidential', PROPERTY_RESTRICTED: 'property-restricted',
  PERSONAL: 'personal', SENSITIVE_PERSONAL: 'sensitive-personal'
});

export const MEMORY_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed', PENDING_CONFIRMATION: 'pending-confirmation', PENDING_REVIEW: 'pending-review',
  ADMITTED: 'admitted', ACTIVE: 'active', UNDER_REVIEW: 'under-review', DISPUTED: 'disputed',
  SUPERSEDED: 'superseded', INVALIDATED: 'invalidated', EXPIRED: 'expired',
  DELETION_PENDING: 'deletion-pending', DELETED: 'deleted', ARCHIVED: 'archived', HELD: 'held',
  QUARANTINED: 'quarantined', REJECTED: 'rejected'
});

export const MEMORY_TRANSITION_FIELDS = Object.freeze({
  SOURCES: 'allowed-source-states', TARGET: 'target-state', AUTHORITY: 'actor-or-service-authority',
  PRECONDITIONS: 'preconditions', POLICY: 'policy-version', IDEMPOTENCY: 'idempotency-behavior',
  CONCURRENCY: 'concurrent-update-behavior', EFFECTIVE_TIME: 'effective-time', EVIDENCE: 'evidence',
  EVENTS: 'events', REPRESENTATION_EFFECT: 'derived-representation-effect',
  CONSUMER_EFFECT: 'consumer-visible-effect'
});

export const MEMORY_WRITE_OPERATIONS = Object.freeze({
  PROPOSE: 'propose-memory', CONFIRM: 'confirm-memory', ADMIT: 'admit-memory', REJECT: 'reject-memory',
  CORRECT: 'correct-memory', DISPUTE: 'dispute-memory', RESOLVE_DISPUTE: 'resolve-dispute',
  INVALIDATE: 'invalidate-memory', REINFORCE: 'reinforce-memory', CONSOLIDATE: 'consolidate-memory',
  EXPIRE: 'expire-memory', DELETE: 'delete-memory', APPLY_HOLD: 'place-legal-hold',
  RELEASE_HOLD: 'release-legal-hold'
});

export const MEMORY_READ_OPERATIONS = Object.freeze({
  BY_ID: 'retrieve-memory-by-identifier', QUERY: 'query-eligible-memory',
  PROVENANCE: 'inspect-provenance', LIFECYCLE: 'inspect-lifecycle', SUBJECT: 'list-subject-memory',
  CORRECTIONS: 'inspect-correction-history', DELETION: 'inspect-deletion-status'
});

export const MEMORY_DEGRADED_MODES = Object.freeze({
  NO_ADMISSION: 'no-new-memory-admission', CAPTURE_ONLY: 'candidate-capture-without-activation',
  READ_ONLY: 'read-only-memory', CONFIRMED_ONLY: 'confirmed-memory-only',
  NO_INFERENCE: 'inferred-memory-disabled', NO_CONSOLIDATION: 'consolidation-disabled',
  NO_REINFORCEMENT: 'reinforcement-disabled', MANUAL_CORRECTION: 'manual-correction-queue',
  RETRIEVAL_DISABLED: 'retrieval-disabled-for-affected-scope'
});

export const MEMORY_EVALUATION_DIMENSIONS = Object.freeze({
  ADMISSION_PRECISION: 'admission-precision', REJECTION: 'admission-rejection-quality',
  CONFIRMATION: 'confirmation-effectiveness', ACCURACY: 'memory-accuracy', USEFULNESS: 'retrieval-usefulness',
  TEMPORAL: 'temporal-correctness', CONFLICT: 'conflict-detection', CORRECTION: 'correction-propagation',
  DELETION: 'deletion-completeness', SCOPE: 'scope-preservation', TENANT: 'cross-tenant-isolation',
  PROPERTY: 'property-isolation', INFERENCE: 'sensitive-inference-control',
  PERSONALIZATION: 'personalization-safety', FALSE_MEMORY: 'false-memory-rate',
  STALENESS: 'stale-memory-rate', LIFECYCLE_LATENCY: 'lifecycle-latency', COST: 'cost'
});

export const MEMORY_QUALITY_ATTRIBUTES = Object.freeze({
  ACCURACY: 'accuracy', RELEVANCE: 'relevance', TEMPORAL: 'temporal-correctness',
  CORRECTABILITY: 'correctability', FORGETTABILITY: 'forgettability', EXPLAINABILITY: 'explainability',
  TRACEABILITY: 'traceability', SECURITY: 'security', PRIVACY: 'privacy', ISOLATION: 'isolation',
  AVAILABILITY: 'availability', RELIABILITY: 'reliability', SCALABILITY: 'scalability',
  PORTABILITY: 'portability', AUDITABILITY: 'auditability'
});

export const MEMORY_LIFECYCLE_RULES = Object.freeze({
  DELIBERATE_RETENTION: 'memory-is-deliberate-purpose-bound-retention',
  ADMISSION_REQUIRED: 'admission-before-durable-memory-activation',
  CANDIDATE_SEPARATION: 'candidates-separate-from-admitted-memory',
  NO_MODEL_BYPASS: 'model-output-cannot-bypass-admission',
  CONVERSATION_BOUNDARY: 'memory-distinct-from-conversation-history',
  EXECUTION_BOUNDARY: 'memory-distinct-from-workflow-and-agent-state',
  DOMAIN_AUTHORITY: 'domain-services-own-current-business-facts',
  POLICY_AUTHORITY: 'identity-and-policy-services-own-authorization',
  NO_AUTHORITY: 'memory-is-never-sole-identity-permission-consent-or-scope-authority',
  EXPLICIT_CONTRACT: 'explicit-type-subject-purpose-scope-owner-provenance-and-retention',
  PROPERTY_SCOPE: 'property-scope-preserved', SCOPE_PROMOTION: 'scope-promotion-governed',
  READMISSION: 'material-scope-or-purpose-change-requires-readmission',
  ASSERTION_DISTINCTION: 'assertion-authority-and-state-remain-distinguishable',
  TEMPORAL_SEMANTICS: 'multidimensional-time-semantics-preserved',
  PROVENANCE: 'source-and-transformation-provenance-preserved',
  CONFIDENCE_BOUNDARY: 'confidence-is-not-truth-or-permission', FREQUENCY_BOUNDARY: 'frequency-is-not-proof',
  CONFLICT: 'conflict-and-uncertainty-preserved', NO_FALSE_CONSENSUS: 'contradictions-never-silently-blended',
  CONSOLIDATION_ADMISSION: 'consolidation-requires-new-admission',
  PERSONALIZATION_BOUNDARY: 'personalization-cannot-override-choice-policy-safety-or-access',
  SENSITIVE_INFERENCE: 'sensitive-inference-requires-explicit-authority',
  INSTRUCTION_BOUNDARY: 'retrieved-content-cannot-create-memory-write-authority',
  SEPARATE_AUTHORITIES: 'read-write-admission-correction-deletion-and-admin-authority-separated',
  VERSIONING: 'material-memory-changes-versioned',
  LIFECYCLE_AUTHORITY: 'primary-lifecycle-record-authoritative-over-derived-representations',
  ELIGIBILITY_FIRST: 'inactive-memory-excluded-before-retrieval-candidate-generation',
  QUALIFIED_RESULTS: 'disputed-and-low-confidence-memory-explicitly-qualified',
  COMPLETE_LIFECYCLE: 'correction-dispute-invalidation-supersession-expiration-deletion-archive-and-hold',
  PROPAGATION: 'correction-and-deletion-propagate-to-all-representations',
  NO_RECONSTRUCTION: 'deleted-memory-cannot-be-reconstructed',
  NO_RESURRECTION: 'restore-cannot-resurrect-inactive-memory',
  MINIMAL_TOMBSTONES: 'tombstones-retain-only-necessary-suppression-data',
  HOLD_SEPARATION: 'legal-hold-does-not-create-retrieval-eligibility',
  RETENTION_FIXED: 'retrieval-use-and-reinforcement-do-not-silently-extend-retention',
  TRAINING_SEPARATION: 'production-memory-is-not-automatic-training-data',
  ISOLATION: 'tenant-and-property-isolation-end-to-end', EVIDENCE: 'attributable-lifecycle-evidence',
  RELIABILITY: 'idempotency-concurrency-replay-safety-and-reconciliation',
  SAFE_DEGRADATION: 'degraded-modes-preserve-security-privacy-invalidation-and-deletion',
  VERSIONED_CONTRACTS: 'versioned-apis-and-events', NO_DATABASE_ACCESS: 'no-cross-service-database-access',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const MEMORY_LIFECYCLE_BOUNDARIES = Object.freeze({
  CONTEXT: 'define-runtime-context-assembly', PROMPT: 'define-prompt-construction',
  RANKING: 'define-one-memory-ranking-formula', CONFIDENCE: 'define-one-confidence-formula',
  API: 'define-detailed-api-schemas', TENANCY: 'define-multi-tenancy-internals',
  AUTHORIZATION: 'define-identity-or-authorization-policy', CONVERSATION: 'replace-conversation-storage',
  WORKFLOW: 'replace-workflow-state', AGENT: 'replace-agent-execution-state',
  DOMAIN: 'replace-domain-service-truth', PRODUCT: 'select-storage-search-vector-graph-or-ai-provider',
  TRAINING: 'authorize-automatic-model-training-from-memory'
});
