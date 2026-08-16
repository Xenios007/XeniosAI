export const KNOWLEDGE_LIFECYCLE_ERROR_CODE = 'KNOWLEDGE_LIFECYCLE_INVALID';

export const KNOWLEDGE_LIFECYCLE_OBJECTIVES = Object.freeze({
  IDENTITY: 'stable-knowledge-identity',
  OWNERSHIP: 'explicit-ownership',
  AUTHORITY: 'clear-authority',
  PROVENANCE: 'traceable-provenance',
  PUBLICATION: 'controlled-publication',
  COEXISTENCE: 'version-coexistence',
  TIME: 'temporal-interpretation',
  ISOLATION: 'tenant-and-property-isolation',
  CORRECTION: 'correctable-knowledge',
  SUPERSESSION: 'safe-supersession',
  WITHDRAWAL: 'enforceable-withdrawal',
  REPRESENTATIONS: 'lifecycle-synchronized-representations',
  CITATIONS: 'citation-stability',
  VISIBILITY: 'operational-visibility',
  PORTABILITY: 'portable-metadata',
  EVIDENCE: 'auditable-evidence'
});

export const CANONICAL_KNOWLEDGE_MODEL = Object.freeze({
  DOMAIN: 'knowledge-domain',
  SOURCE: 'source',
  SOURCE_VERSION: 'source-version',
  ARTIFACT: 'knowledge-artifact',
  ARTIFACT_VERSION: 'artifact-version',
  ITEM: 'knowledge-item',
  ITEM_VERSION: 'knowledge-item-version',
  REPRESENTATION: 'representation',
  CITATION: 'citation',
  PROVENANCE: 'provenance-record',
  CLASSIFICATION: 'classification',
  AUTHORITY: 'authority-declaration',
  LIFECYCLE: 'lifecycle-record',
  REVIEW: 'review',
  APPROVAL: 'approval',
  PUBLICATION: 'publication',
  QUALITY: 'quality-assessment',
  RETENTION: 'retention-rule',
  LEGAL_HOLD: 'legal-hold'
});

export const KNOWLEDGE_SOURCE_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  UNDER_REVIEW: 'under-review',
  APPROVED: 'approved',
  ACTIVE: 'active',
  DEGRADED: 'degraded',
  SUSPENDED: 'suspended',
  WITHDRAWN: 'withdrawn',
  RETIRED: 'retired'
});

export const KNOWLEDGE_SCOPE_TYPES = Object.freeze({
  PUBLIC: 'public',
  ENTERPRISE: 'enterprise',
  TENANT: 'tenant',
  PROPERTY: 'property',
  TEAM: 'team',
  ROLE: 'role',
  INDIVIDUAL: 'individual',
  SHARED: 'explicitly-shared'
});

export const KNOWLEDGE_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  REGISTERED: 'registered',
  ACQUIRED: 'acquired',
  QUARANTINED: 'quarantined',
  VALIDATED: 'validated',
  CLASSIFIED: 'classified',
  CURATED: 'curated',
  UNDER_REVIEW: 'under-review',
  APPROVED: 'approved',
  PUBLISHED: 'published',
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  SUPERSEDED: 'superseded',
  EXPIRED: 'expired',
  WITHDRAWN: 'withdrawn',
  ARCHIVED: 'archived',
  DELETED: 'deleted'
});

export const KNOWLEDGE_PUBLICATION_CHANNELS = Object.freeze({
  STAFF: 'staff-search',
  GUEST: 'guest-facing-retrieval',
  ORCHESTRATOR: 'ai-orchestrator-retrieval',
  AGENT: 'agent-retrieval',
  WORKFLOW: 'workflow-task-retrieval',
  DEVELOPER: 'developer-documentation',
  OPERATIONS: 'operational-procedure-search',
  PUBLIC: 'public-knowledge'
});

export const KNOWLEDGE_REPRESENTATION_STATES = Object.freeze({
  REQUESTED: 'requested',
  BUILDING: 'building',
  READY: 'ready',
  FAILED: 'failed',
  DEGRADED: 'degraded',
  STALE: 'stale',
  INVALIDATED: 'invalidated',
  REBUILDING: 'rebuilding',
  ARCHIVED: 'archived',
  DELETED: 'deleted'
});

export const KNOWLEDGE_LIFECYCLE_APIS = Object.freeze({
  REGISTER_DOMAIN: 'register-domain',
  REGISTER_SOURCE: 'register-source',
  CHANGE_SOURCE: 'change-source-state',
  REGISTER_ARTIFACT: 'register-artifact',
  REGISTER_ITEM: 'register-knowledge-item',
  CREATE_VERSION: 'create-item-version',
  SUBMIT_REVIEW: 'submit-for-review',
  RECORD_REVIEW: 'record-review',
  APPROVE: 'approve-version',
  PUBLISH: 'publish-version',
  ACTIVATE: 'activate-version',
  SUSPEND: 'suspend-version',
  SUPERSEDE: 'supersede-version',
  WITHDRAW: 'withdraw-item',
  ARCHIVE: 'archive-item',
  DELETE: 'delete-item',
  QUERY_LIFECYCLE: 'query-lifecycle',
  QUERY_PROVENANCE: 'query-provenance'
});

export const KNOWLEDGE_LIFECYCLE_EVENTS = Object.freeze({
  SOURCE_REGISTERED: 'source-registered',
  SOURCE_APPROVED: 'source-approved',
  SOURCE_SUSPENDED: 'source-suspended',
  SOURCE_WITHDRAWN: 'source-withdrawn',
  ARTIFACT_ACQUIRED: 'artifact-acquired',
  ARTIFACT_QUARANTINED: 'artifact-quarantined',
  ITEM_REGISTERED: 'knowledge-item-registered',
  VERSION_APPROVED: 'knowledge-version-approved',
  VERSION_PUBLISHED: 'knowledge-version-published',
  VERSION_ACTIVATED: 'knowledge-version-activated',
  VERSION_SUSPENDED: 'knowledge-version-suspended',
  VERSION_SUPERSEDED: 'knowledge-version-superseded',
  VERSION_EXPIRED: 'knowledge-version-expired',
  ITEM_WITHDRAWN: 'knowledge-item-withdrawn',
  ITEM_ARCHIVED: 'knowledge-item-archived',
  ITEM_DELETED: 'knowledge-item-deleted',
  REPRESENTATION_INVALIDATED: 'representation-invalidated',
  REVIEW_DUE: 'knowledge-review-due',
  CONFLICT_DETECTED: 'knowledge-conflict-detected'
});

export const KNOWLEDGE_LIFECYCLE_OPERATIONS = Object.freeze({
  INSPECT_SOURCE: 'source-state-inspection',
  INSPECT_ARTIFACT: 'artifact-inspection',
  INSPECT_ITEM: 'item-inspection',
  COMPARE_VERSION: 'version-comparison',
  INSPECT_PROVENANCE: 'provenance-inspection',
  ASSIGN_REVIEW: 'review-assignment',
  PUBLISH: 'controlled-publication',
  SUSPEND: 'emergency-suspension',
  MONITOR_SUPERSESSION: 'supersession-monitoring',
  REBUILD: 'representation-rebuild',
  INVALIDATE_CACHE: 'cache-invalidation',
  ARCHIVE: 'archival',
  DELETE: 'deletion',
  RECONCILE: 'reconciliation'
});

export const KNOWLEDGE_LIFECYCLE_QUALITY_ATTRIBUTES = Object.freeze({
  ACCURACY: 'accuracy',
  AUTHORITY: 'authority',
  FRESHNESS: 'freshness',
  INTEGRITY: 'integrity',
  TRACEABILITY: 'traceability',
  EXPLAINABILITY: 'explainability',
  CORRECTABILITY: 'correctability',
  DELETABILITY: 'deletability',
  CONFIDENTIALITY: 'confidentiality',
  AVAILABILITY: 'availability',
  ISOLATION: 'isolation',
  AUDITABILITY: 'auditability',
  PORTABILITY: 'portability',
  MAINTAINABILITY: 'maintainability',
  RECOVERABILITY: 'recoverability'
});

export const KNOWLEDGE_LIFECYCLE_RULES = Object.freeze({
  DOMAIN_OWNER: 'one-accountable-owner-per-knowledge-domain',
  SOURCE_REGISTRATION: 'sources-registered-before-production-use',
  STABLE_IDENTITIES: 'stable-source-artifact-item-version-identities',
  DISTINCT_VERSIONS: 'source-artifact-item-representation-versions-distinct',
  CONTEXT_PRESERVATION: 'preserve-authority-scope-classification-and-time',
  INACTIVE_UNTIL_ELIGIBLE: 'processed-or-indexed-content-remains-inactive-until-eligible',
  AUTHORITY_CLASSES: 'explicit-authority-classes',
  CONTEXTUAL_AUTHORITY: 'authority-contextual-to-subject-scope-and-time',
  IMMUTABLE_PUBLISHED: 'published-item-versions-immutable',
  MATERIAL_VERSION: 'material-semantic-change-requires-new-version',
  PROVENANCE: 'provenance-preserved-through-transformations',
  DERIVED_DISTINCTION: 'canonical-content-distinct-from-derived-content',
  AI_DERIVED: 'ai-content-derived-until-governed-approval',
  ISOLATION: 'tenant-property-scope-through-lifecycle',
  INHERITANCE: 'explicit-inheritance-and-overrides',
  DECISION_SEPARATION: 'approval-publication-activation-separated',
  CHANNEL_READINESS: 'required-representations-per-publication-channel',
  CURRENT_ELIGIBILITY: 'ineligible-lifecycle-states-excluded-from-current-use',
  HISTORICAL_ACCESS: 'authorized-historical-superseded-access',
  PROPAGATION: 'lifecycle-changes-propagate-to-representations-and-caches',
  REGISTRY_AUTHORITY: 'knowledge-registry-is-lifecycle-authority',
  INDEX_PROJECTION: 'indexes-are-rebuildable-projections',
  CITATION_LIFECYCLE: 'citations-version-and-lifecycle-aware',
  HISTORICAL_EVIDENCE: 'no-silent-historical-citation-redirection',
  VERSIONED_CORRECTION: 'correction-through-versioning',
  RETENTION_SEPARATION: 'retention-defined-per-asset-type',
  MINIMAL_TOMBSTONE: 'minimal-tombstones-only-where-needed',
  LEGAL_HOLD: 'legal-hold-distinct-from-current-use',
  EXIT_TRANSFER: 'govern-source-withdrawal-tenant-exit-property-transfer',
  CONTROLLED_TRANSITIONS: 'authorized-attributable-idempotent-transitions',
  RECONCILIATION: 'reconcile-storage-and-retrieval-lifecycle-state',
  EVIDENCE: 'evidence-for-all-material-lifecycle-actions',
  VERSIONED_CONTRACTS: 'versioned-apis-and-events',
  NO_DATABASE_ACCESS: 'no-cross-service-database-access',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const KNOWLEDGE_LIFECYCLE_BOUNDARIES = Object.freeze({
  EXTRACTION: 'define-detailed-extraction-or-chunking',
  RANKING: 'define-detailed-retrieval-ranking',
  MEMORY: 'define-memory-lifecycle',
  CONTEXT: 'define-context-assembly',
  CONTENT_SYSTEM: 'define-one-content-management-system',
  STORAGE: 'define-one-database-or-search-engine',
  DOMAIN_AUTHORITY: 'become-authoritative-for-domain-facts',
  REGISTERED_APPROVED: 'treat-all-registered-sources-as-approved',
  APPROVED_PUBLIC: 'treat-all-approved-knowledge-as-public',
  JUDGMENT: 'replace-qualified-records-privacy-legal-security-judgment'
});
