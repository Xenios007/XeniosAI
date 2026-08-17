export const DATA_ISOLATION_RESIDENCY_PORTABILITY_ERROR_CODE = 'DATA_ISOLATION_RESIDENCY_PORTABILITY_INVALID';

export const DATA_ISOLATION_PRINCIPLES = Object.freeze({
  EXPLICIT_OWNERSHIP: 'tenant-ownership-is-explicit-for-every-tenant-scoped-data-asset',
  PROVIDER_ENFORCEMENT: 'every-provider-enforces-ownership-at-its-trust-boundary',
  PRIMARY_AND_DERIVED: 'isolation-includes-primary-and-derived-data',
  SHARED_STORAGE_SAFEGUARDS: 'shared-storage-requires-tenant-aware-keys-queries-constraints-and-tests',
  PLACEMENT_OWNERSHIP_SEPARATE: 'placement-and-ownership-are-separate-concepts',
  RESIDENCY_BEYOND_PRIMARY: 'residency-applies-to-replicas-backups-indexes-telemetry-and-processors-not-only-primary-stores',
  ENCRYPTION_SUPPLEMENTS: 'encryption-supports-isolation-but-does-not-replace-authorization',
  MINIMIZATION: 'data-minimization-applies-to-copies-exports-logs-and-ai-context',
  RETENTION_HOLD_POLICY: 'retention-and-legal-hold-are-policy-driven-and-traceable',
  ERASURE_PROPAGATES: 'erasure-propagates-to-eligible-derivatives',
  PORTABILITY_MANIFESTS: 'portability-uses-governed-manifests-and-documented-formats',
  RESTORE_MIGRATION_PRESERVES: 'restore-and-migration-preserve-tenant-boundaries-and-business-time'
});

export const DATA_SCOPE = Object.freeze({
  TRANSACTIONAL: 'transactional-records', REFERENCE_MASTER: 'reference-and-master-data', DOCUMENTS_MEDIA: 'documents-media-and-files',
  CONFIGURATION: 'configuration-and-metadata', CACHES_SESSION: 'caches-and-session-state', SEARCH_INDEXES: 'search-and-secondary-indexes',
  GRAPH_EMBEDDINGS: 'graph-relationships-and-embeddings', KNOWLEDGE_ARTIFACTS: 'knowledge-artifacts-and-representations',
  MEMORY: 'durable-and-transient-memory', CONVERSATION_WORKFLOW: 'conversation-and-workflow-state',
  AI_IO: 'ai-inputs-outputs-evaluations-and-tool-results', EVENTS_MESSAGES: 'events-messages-retries-and-dead-letters',
  INTEGRATION_PAYLOADS: 'integration-payloads-and-delivery-records', ANALYTICS: 'analytics-and-reporting-data',
  OBSERVABILITY_EVIDENCE: 'logs-traces-metrics-alerts-and-audit-evidence', BACKUPS_EXPORTS: 'backups-snapshots-replicas-archives-and-exports'
});

export const DATA_OWNERSHIP_SCOPES = Object.freeze({
  PLATFORM: 'platform-governed-common-data', TENANT: 'tenant-owned-or-exclusively-processed', PROPERTY: 'property-restricted-within-tenant',
  SHARED_CONTRACT: 'shared-by-contract-for-a-governed-purpose', DEIDENTIFIED: 'de-identified-aggregate-with-bounded-reidentification-risk'
});

export const TENANT_OWNERSHIP_ATTRIBUTE_RULES = Object.freeze({
  SET_AT_CREATION: 'set-at-creation-from-trusted-context', GOVERNED_TRANSFER: 'immutable-or-changed-only-through-a-governed-transfer',
  ACCESS_PATHS: 'included-in-authorization-and-primary-access-paths', PRESERVED_DERIVATIVES: 'preserved-in-events-and-derivatives',
  LIFECYCLE_AVAILABLE: 'available-to-retention-export-and-erasure-processes', PROTECTED_REASSIGNMENT: 'protected-from-client-controlled-reassignment'
});

export const SHARED_RELATIONAL_STORAGE_CONTROLS = Object.freeze({
  TENANT_KEY: 'tenant-key-on-scoped-records', UNIQUENESS: 'tenant-inclusive-uniqueness-where-business-semantics-require-it',
  INTEGRITY: 'tenant-inclusive-foreign-key-or-equivalent-integrity-strategy', QUERY_BINDING: 'query-construction-that-binds-tenant-predicates',
  MASS_ASSIGNMENT: 'prevention-of-mass-assignment-of-ownership-fields', GUARDRAILS: 'data-layer-policy-or-guardrails-where-supported',
  TOOLING: 'safe-administrative-and-migration-tooling', NEGATIVE_TESTS: 'multi-tenant-negative-tests',
  BACKUP_STRATEGY: 'tenant-aware-backup-restore-and-export-strategy'
});

export const PARTITIONED_DEDICATED_STORAGE_REQUIREMENTS = Object.freeze({
  TRUSTED_ROUTING: 'trusted-routing-from-tenant-placement-state', NO_DEFAULT_PARTITION: 'no-fallback-to-a-default-tenant-partition',
  CREDENTIALS_POLICY: 'tenant-aware-credentials-and-policy', INVENTORY_AUTOMATION: 'inventory-and-lifecycle-automation',
  CAPACITY_RECOVERY: 'capacity-and-recovery-controls', OWNERSHIP_VALIDATION: 'application-level-ownership-validation',
  MIGRATION_EXIT: 'migration-and-exit-procedures'
});

export const OBJECT_FILE_STORAGE_CONTROLS = Object.freeze({
  SERVER_METADATA: 'server-generated-ownership-metadata', NON_GUESSABLE: 'non-guessable-references',
  AUTHORIZATION: 'authorization-before-upload-download-listing-or-deletion', SIGNED_ACCESS: 'tenant-scoped-signed-access-with-short-expiry',
  CONTENT_INSPECTION: 'malware-and-content-inspection-within-tenant-boundaries', ENCRYPTION: 'encryption-and-key-policy',
  RETENTION_HOLD: 'retention-and-legal-hold', DERIVED_OWNERSHIP: 'derived-thumbnail-transcript-and-preview-ownership',
  CLEANUP: 'lifecycle-cleanup-for-abandoned-uploads'
});

export const CACHE_ISOLATION_PREVENTIONS = Object.freeze({
  KEY_COLLISIONS: 'cross-tenant-key-collisions', DECISION_REUSE: 'reuse-of-authorization-decisions-across-tenants',
  SHARED_RESPONSES: 'shared-responses-containing-tenant-specific-content', BLIND_INVALIDATION: 'tenant-blind-invalidation',
  STALE_ACCESS: 'stale-access-after-suspension-transfer-or-revocation'
});

export const SEARCH_INDEX_SAFEGUARDS = Object.freeze({
  AWARE_INGESTION: 'tenant-aware-ingestion', TRUSTED_METADATA: 'trusted-ownership-metadata',
  FILTER_ENFORCEMENT: 'filter-enforcement-independent-of-user-query-text', RESULT_VALIDATION: 'result-set-ownership-validation',
  RANKING_FACETS: 'tenant-aware-ranking-and-facets', DELETION_PROPAGATION: 'deletion-and-reindex-propagation',
  SNAPSHOT_ISOLATION: 'index-build-and-snapshot-isolation', RETRIEVAL_TESTS: 'cross-tenant-retrieval-tests'
});

export const KNOWLEDGE_MEMORY_PREVENTIONS = Object.freeze({
  CROSS_TENANT_RETRIEVAL: 'cross-tenant-retrieval', UNGOVERNED_PROMOTION: 'global-training-or-promotion-without-approved-rights-and-governance',
  OUT_OF_SCOPE_CAPTURE: 'memory-capture-outside-the-permitted-tenant-and-purpose',
  CONTEXT_REUSE: 'reuse-of-tenant-prompts-or-tool-results-as-another-tenants-context',
  RETAINED_AFTER_DELETION: 'retention-of-representations-after-eligible-source-deletion'
});

export const EVENTS_MESSAGING_CONTROLS = Object.freeze({
  AWARE_ROUTING: 'tenant-aware-topics-partitions-subscriptions-or-consumer-policy', CONSUMER_VALIDATION: 'consumer-side-context-validation',
  IDEMPOTENCY: 'tenant-scoped-idempotency', RETRIES: 'tenant-safe-retries-and-dead-letter-handling',
  ENCRYPTION_RETENTION: 'encryption-and-retention', REPLAY_AUTHORIZATION: 'replay-authorization',
  REDACTION: 'redaction-of-secrets-and-unnecessary-personal-data'
});

export const OBSERVABILITY_DATA_CONTROLS = Object.freeze({
  CLASSIFICATION: 'data-classification-and-minimization', SAFE_LABELS: 'tenant-safe-labels-and-cardinality-controls',
  REDACTION: 'redaction-and-secret-filtering', ACCESS_VIEWS: 'tenant-aware-access-views',
  RETENTION_BY_CLASS: 'retention-by-data-class-and-purpose', CROSS_TENANT_ANALYSIS: 'controlled-cross-tenant-operational-analysis',
  EXPORT_DELETION: 'export-and-deletion-handling-where-applicable'
});

export const ENCRYPTION_KEY_PATTERNS = Object.freeze({
  PLATFORM_BOUND_CONTEXT: 'platform-keys-with-tenant-bound-encryption-context', TENANT_DERIVED: 'tenant-derived-keys',
  DEDICATED: 'dedicated-tenant-keys', TENANT_CONTROLLED: 'tenant-controlled-keys-where-supported-and-governed'
});

export const RESIDENCY_POLICY_FIELDS = Object.freeze({
  APPLICABILITY: 'applicable-tenant-and-properties', CATEGORIES: 'data-categories-and-classifications',
  LOCATIONS: 'permitted-and-prohibited-locations', TRANSFER: 'transfer-conditions', PROCESSORS: 'approved-processors-and-sub-processors',
  REPLICATION: 'replication-and-backup-constraints', SUPPORT_ACCESS: 'support-access-constraints',
  EFFECTIVE_BASIS: 'effective-date-and-legal-basis', EXCEPTION_REVIEW: 'exception-and-review-requirements'
});

export const SOVEREIGNTY_CONSTRAINTS = Object.freeze({
  OPERATOR_LOCATION: 'operator-location-and-nationality', LEGAL_CONTROL: 'legal-control-of-infrastructure', KEY_CUSTODY: 'key-custody',
  REMOTE_SUPPORT: 'remote-support', SUPPLY_CHAIN: 'software-supply-chain', CROSS_BORDER_TELEMETRY: 'cross-border-telemetry',
  DR_LOCATION: 'disaster-recovery-location', GOVERNMENT_ACCESS: 'government-access-procedures'
});

export const PLACEMENT_ENFORCEMENT_CHECKS = Object.freeze({
  CLASSIFICATION: 'tenant-and-data-classification', OPERATION: 'requested-operation',
  APPROVED_LOCATIONS: 'approved-primary-and-secondary-locations', PROCESSOR_DESTINATION: 'integration-or-processor-destination',
  RECOVERY_LOCATION: 'recovery-and-backup-location', MIGRATION_STATE: 'current-migration-state'
});

export const DATA_TRANSFER_REQUIREMENTS = Object.freeze({
  SOURCE_DESTINATION: 'authorized-source-and-destination', LEGAL_BASIS: 'purpose-and-legal-basis', MINIMIZATION: 'data-minimization',
  SCHEMA: 'schema-and-classification', INTEGRITY: 'integrity-and-confidentiality', RESIDENCY_VALIDATION: 'residency-and-processor-validation',
  EVIDENCE: 'delivery-evidence', OBLIGATIONS: 'retention-and-deletion-obligations'
});

export const RETENTION_METADATA_FIELDS = Object.freeze({
  POLICY_VERSION: 'policy-and-version', TRIGGER: 'trigger-event', PERIOD: 'retention-period', DISPOSITION: 'disposition-action',
  HOLD_STATUS: 'hold-status', OWNER: 'responsible-owner', EVIDENCE: 'evidence-requirements'
});

export const LEGAL_HOLD_CONTROLS = Object.freeze({
  REQUEST_SCOPE: 'authorized-request-and-scope', CUSTODIAN: 'custodian-and-case-reference', EFFECTIVE_TIME: 'effective-time',
  AFFECTED_DATA: 'affected-primary-and-derivative-data', ACCESS_RESTRICTIONS: 'access-restrictions', REVIEW: 'periodic-review',
  RELEASE: 'release-authorization', DISPOSITION: 'final-disposition'
});

export const ERASURE_PROPAGATION_TARGETS = Object.freeze({
  PRIMARY: 'primary-records', FILES: 'files-and-temporary-uploads', CACHES: 'caches', INDEXES: 'search-and-vector-indexes',
  KNOWLEDGE: 'knowledge-representations', MEMORIES: 'memories-and-conversation-state', WORKFLOW_ARTIFACTS: 'workflow-and-agent-artifacts',
  ANALYTICS: 'analytics-copies', INTEGRATION_QUEUES: 'integration-queues', SUPPORT_ARTIFACTS: 'support-artifacts',
  BACKUPS: 'backups-according-to-approved-lifecycle'
});

export const BACKUP_ISOLATION_DESIGN_ELEMENTS = Object.freeze({
  RECOVERY_UNIT: 'recovery-unit', EXTRACTION: 'tenant-specific-extraction-capability-where-required', KEY_DEPENDENCIES: 'key-dependencies',
  COPY_LOCATIONS: 'copy-locations', IMMUTABILITY: 'immutability-and-protection', RESTORE_AUTHORIZATION: 'restore-authorization',
  EXPIRY: 'expiry-and-deletion-behavior', TEST_FREQUENCY: 'test-frequency'
});

export const TENANT_RESTORE_STEPS = Object.freeze({
  AUTHORIZE: 'authorize-tenant-and-recovery-point', VALIDATE_HISTORY: 'validate-retention-transfer-and-ownership-history',
  STAGING: 'restore-to-an-isolated-staging-location-where-appropriate', FILTER: 'filter-and-validate-tenant-owned-records',
  RECONCILE: 'reconcile-cross-service-references-and-events', VERIFY: 'verify-isolation-completeness-and-business-consistency',
  CUTOVER: 'cut-over-or-selectively-recover', EVIDENCE: 'record-evidence-and-remove-temporary-data'
});

export const PORTABILITY_PACKAGE_CONTENTS = Object.freeze({
  METADATA: 'tenant-and-property-metadata', DOMAIN_DATA: 'domain-data-by-published-schema', DOCUMENTS: 'documents-and-media',
  CONFIGURATION: 'configuration-and-branding', KNOWLEDGE: 'knowledge-sources-and-provenance', WORKFLOWS: 'exportable-workflow-definitions',
  INTEGRATION_MAPPING: 'integration-mapping-metadata-without-secrets', EVIDENCE: 'audit-and-usage-evidence-permitted-by-policy',
  MANIFEST: 'manifest-checksums-versions-and-exclusions'
});

export const EXPORT_ARCHITECTURE_CONTROLS = Object.freeze({
  REQUESTER_AUTHORIZATION: 'strong-requester-authorization', STEP_UP: 'step-up-authentication-for-sensitive-exports',
  SCOPE: 'property-and-date-scope', APPROVAL: 'approval-for-bulk-or-regulated-data', CONSISTENCY: 'snapshot-or-business-time-consistency',
  FORMAT: 'format-and-schema-version', INTEGRITY_MANIFEST: 'encryption-and-integrity-manifest',
  SHORT_LIVED_ACCESS: 'short-lived-retrieval-authorization', DOWNLOAD_EVIDENCE: 'download-and-expiry-evidence', CLEANUP: 'secure-cleanup'
});

export const MIGRATION_ARCHITECTURE_STEPS = Object.freeze({
  INVENTORY: 'inventory-and-classify-source-data', PROVISION_TARGET: 'provision-approved-target-controls',
  COPY: 'copy-immutable-or-historical-data', SYNCHRONIZE: 'synchronize-active-changes',
  VALIDATE: 'validate-counts-hashes-references-policy-and-performance',
  WRITE_BOUNDARY: 'coordinate-a-write-boundary-or-dual-processing-period',
  UPDATE_ROUTING: 'update-trusted-routing-atomically-or-through-versioned-convergence',
  RECONCILE: 'reconcile-source-and-target', ROLLBACK: 'retain-rollback-for-an-approved-period',
  DISPOSITION: 'delete-or-retain-source-according-to-policy'
});

export const DATA_LINEAGE_QUESTIONS = Object.freeze({
  SERVICES: 'which-services-hold-tenant-data', DERIVATIVES: 'which-derivatives-came-from-which-sources',
  PLACEMENT: 'where-is-the-data-placed-and-replicated', PROCESSORS: 'which-processors-received-it',
  POLICIES: 'which-retention-and-residency-policies-apply', AFFECTING_ACTIONS: 'which-exports-restores-migrations-or-deletions-affected-it'
});

export const DATA_OPERATIONAL_CONTROLS = Object.freeze({
  DRIFT: 'placement-and-residency-drift', MISSING_OWNERSHIP: 'missing-tenant-ownership-attributes',
  DENIALS: 'cross-tenant-authorization-denials', ROUTING_MISMATCH: 'partition-routing-mismatches',
  KEY_STATUS: 'encryption-and-key-status', BACKUP_COVERAGE: 'backup-coverage-and-restore-tests',
  RETENTION_BACKLOG: 'retention-and-deletion-backlog', EXPORT_MIGRATION_PROGRESS: 'export-and-migration-progress',
  ORPHANED_RESOURCES: 'orphaned-or-retired-tenant-resources'
});

export const DATA_TESTING_ASSURANCE_REQUIREMENTS = Object.freeze({
  CRUD: 'cross-tenant-crud-attempts', ENUMERATION: 'identifier-enumeration-and-direct-object-reference',
  BULK_ISOLATION: 'join-bulk-and-administrative-query-isolation', CACHE: 'cache-collision-and-invalidation',
  SEARCH_FILTERING: 'search-vector-and-graph-filtering', EVENT_ROUTING: 'event-routing-retry-and-replay',
  CONTEXT_ISOLATION: 'knowledge-memory-workflow-and-ai-context-isolation', DEIDENTIFICATION: 'analytics-output-and-de-identification',
  RESIDENCY_ROUTING: 'residency-and-processor-routing', EXPORT_COMPLETENESS: 'export-completeness-and-exclusion',
  ERASURE: 'erasure-propagation', RESTORE: 'tenant-specific-restore', MIGRATION_ROLLBACK: 'placement-migration-and-rollback'
});

export const DATA_FAIL_CLOSED_CONDITIONS = Object.freeze({
  OWNERSHIP: 'ownership-cannot-be-established', TENANT_CONTEXT: 'tenant-context-cannot-be-established',
  PLACEMENT: 'placement-cannot-be-established', RESIDENCY: 'residency-cannot-be-established',
  ENCRYPTION: 'encryption-cannot-be-established', TRANSFER_AUTHORITY: 'transfer-authority-cannot-be-established'
});

export const CONTAMINATION_RESPONSE_ACTIONS = Object.freeze({
  CONTAINMENT: 'immediate-containment', EVIDENCE_PRESERVATION: 'preservation-of-evidence',
  IMPACT_ANALYSIS: 'impact-analysis-by-tenant-and-data-class', INCIDENT_PROCESS: 'security-and-privacy-incident-processes',
  CORRECTION: 'correction-of-affected-indexes-caches-messages-or-derivatives',
  COMMUNICATION: 'required-tenant-and-regulatory-communication', REMEDIATION: 'control-remediation-and-retesting'
});

export const DATA_ISOLATION_ARCHITECTURAL_RULES = Object.freeze({
  PRESERVED_OWNERSHIP: 'tenant-ownership-is-explicit-and-preserved-in-primary-and-derived-data',
  STRUCTURAL_SAFEGUARDS: 'shared-storage-requires-structural-safeguards-and-provider-validation',
  PHYSICAL_ISOLATION_LIMITS: 'physical-isolation-never-removes-application-authorization',
  BOUNDARY_SCOPE: 'search-knowledge-memory-analytics-telemetry-and-backups-are-within-the-isolation-boundary',
  RESIDENCY_APPLIES_BROADLY: 'residency-applies-to-processing-replication-backup-support-and-processors',
  COMPLEMENTARY_CONTROLS: 'encryption-and-authorization-are-complementary-controls',
  EXPLICIT_RETENTION_HOLD: 'retention-and-legal-hold-are-explicit-policies-with-evidence',
  ACKNOWLEDGED_ERASURE: 'erasure-requires-provider-acknowledgment-and-derivative-cleanup',
  VERSIONED_PORTABILITY: 'portability-uses-versioned-manifests-and-documented-formats',
  PRESERVING_RESTORE_MIGRATION: 'tenant-specific-restore-and-migration-must-preserve-other-tenants'
});
