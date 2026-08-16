export const KNOWLEDGE_MEMORY_OPERATIONS_ERROR_CODE = 'KNOWLEDGE_MEMORY_OPERATIONS_INVALID';

export const KNOWLEDGE_MEMORY_OPERATIONS_OBJECTIVES = Object.freeze({
  OWNERSHIP: 'clear-service-ownership', READINESS: 'operational-readiness',
  HEALTH: 'multidimensional-health', CORRELATION: 'end-to-end-correlation',
  ANOMALY: 'early-anomaly-detection', PERFORMANCE: 'predictable-performance',
  CAPACITY: 'elastic-capacity', FAIRNESS: 'fair-tenant-allocation', OVERLOAD: 'safe-overload-control',
  DEGRADATION: 'explicit-degradation', RESTORATION: 'fast-containment-and-restoration',
  LIFECYCLE: 'reliable-correction-and-deletion', RECOVERY: 'verified-backup-and-recovery',
  PROVIDER: 'provider-resilience', COST: 'cost-transparency', TELEMETRY: 'protected-telemetry',
  IMPROVEMENT: 'continuous-improvement', NEUTRALITY: 'vendor-neutral-operation'
});

export const KNOWLEDGE_MEMORY_OPERATIONAL_CAPABILITIES = Object.freeze({
  SOURCES: 'source-registry', INGESTION: 'ingestion-and-synchronization', PROCESSING: 'content-processing',
  KNOWLEDGE: 'knowledge-registry', REPRESENTATION: 'representation-service', RETRIEVAL: 'retrieval-service',
  GROUNDING: 'grounding-and-citation-service', CONTEXT: 'context-assembly-service',
  MEMORY: 'memory-manager', POLICY: 'policy-and-access-enforcement', EVALUATION: 'evaluation-and-quality',
  INTEGRATION: 'integration-and-event-processing', ADMINISTRATION: 'administrative-operations'
});

export const KNOWLEDGE_MEMORY_SERVICE_CATALOG_FIELDS = Object.freeze({
  IDENTITY: 'service-identity', CAPABILITY: 'capability', OWNER: 'owner', CONSUMERS: 'consumers',
  DEPENDENCIES: 'dependencies', DATA: 'data-and-classification', SCOPE: 'tenant-and-property-behavior',
  AVAILABILITY: 'availability-objective', PERFORMANCE: 'performance-objective', CAPACITY: 'capacity-model',
  SUPPORT: 'support-model', DEGRADATION: 'degraded-modes', RECOVERY: 'recovery-objectives',
  RUNBOOKS: 'runbooks', DASHBOARDS: 'dashboards', ALERTS: 'alerts',
  PROVIDERS: 'provider-dependencies', LIFECYCLE: 'lifecycle-status'
});

export const KNOWLEDGE_MEMORY_READINESS_REQUIREMENTS = Object.freeze({
  OWNERSHIP: 'named-ownership', ARCHITECTURE: 'architecture-alignment', SECURITY: 'security-review',
  PRIVACY: 'privacy-review', ISOLATION: 'tenant-and-property-isolation-tests', CAPACITY: 'capacity-estimate',
  BASELINE: 'performance-baseline', HEALTH: 'health-interfaces', TELEMETRY: 'metrics-logs-and-traces',
  ALERTING: 'alerting', RUNBOOKS: 'runbooks', SUPPORT: 'on-call-and-escalation',
  BACKUP: 'backup-and-restore', DEGRADATION: 'degraded-behavior', DEPENDENCIES: 'dependency-inventory',
  EXIT: 'provider-exit-behavior', INCIDENTS: 'incident-readiness', EVIDENCE: 'evidence-generation'
});

export const KNOWLEDGE_MEMORY_HEALTH_DIMENSIONS = Object.freeze({
  BUSINESS: 'business-outcome-health', FUNCTIONAL: 'functional-health', DATA: 'data-and-knowledge-health',
  MEMORY: 'memory-health', RETRIEVAL: 'retrieval-quality-health', SECURITY: 'security-health',
  PRIVACY: 'privacy-health', INTEGRATION: 'integration-health', PROVIDER: 'provider-health',
  CAPACITY: 'capacity-health', RECOVERY: 'recovery-health'
});

export const KNOWLEDGE_MEMORY_HEALTH_FIELDS = Object.freeze({
  CAPABILITY: 'capability-status', DEPENDENCIES: 'dependency-status',
  LIFECYCLE: 'lifecycle-processing-status', CAPACITY: 'capacity-status', DEGRADATION: 'degraded-mode',
  SCOPE: 'affected-scope', FRESHNESS: 'freshness', CONTROL: 'last-successful-control', RECOVERY: 'recovery-state'
});

export const KNOWLEDGE_MEMORY_SYNCHRONIZATION_FIELDS = Object.freeze({
  IDENTITY: 'synchronization-identity', SOURCE: 'source', SCOPE: 'scope', START: 'start-time', END: 'end-time',
  CHECKPOINT: 'checkpoint', DISCOVERED: 'discovered-items', ACCEPTED: 'accepted-items',
  UNCHANGED: 'unchanged-items', REJECTED: 'rejected-items', QUARANTINED: 'quarantined-items',
  DELETED: 'deleted-items', FAILED: 'failed-items', RETRY: 'retry-state', STATUS: 'completion-status'
});

export const KNOWLEDGE_MEMORY_PROCESSING_STAGES = Object.freeze({
  TEXT: 'text-extraction', STRUCTURE: 'structure-extraction', OCR: 'ocr', NORMALIZATION: 'normalization',
  CHUNKING: 'chunking', METADATA: 'metadata-enrichment', CLASSIFICATION: 'classification',
  TRANSLATION: 'translation', SUMMARY: 'summarization', EMBEDDING: 'embedding', GRAPH: 'graph-extraction'
});

export const KNOWLEDGE_MEMORY_RETRIEVAL_OPERATION_SIGNALS = Object.freeze({
  VOLUME: 'request-volume', ADMISSION: 'admission-status', PROFILE: 'retrieval-profile',
  CORPUS: 'eligible-corpus-status', METHODS: 'search-methods', CANDIDATES: 'candidate-volume',
  RANKING: 'fusion-and-reranking-status', RESULT: 'result-status', CITATION: 'citation-status',
  LATENCY: 'latency', COST: 'cost', DEGRADATION: 'degraded-mode'
});

export const KNOWLEDGE_MEMORY_MEMORY_OPERATION_AREAS = Object.freeze({
  CANDIDATES: 'candidate-queue', ADMISSION: 'admission-status', CONFIRMATION: 'confirmation-queue',
  REVIEW: 'review-queue', ACTIVE: 'active-memory-count', REPRESENTATION: 'representation-delay',
  RETRIEVAL: 'retrieval-status', CONFLICT: 'conflict-and-dispute', CONSOLIDATION: 'consolidation',
  EXPIRATION: 'decay-and-expiration', CORRECTION: 'correction-propagation',
  DELETION: 'deletion-propagation', LEGAL_HOLD: 'legal-hold', RECONCILIATION: 'reconciliation'
});

export const KNOWLEDGE_MEMORY_CONTEXT_OPERATION_AREAS = Object.freeze({
  ADMISSION: 'request-admission', PROFILE: 'profile-selection', ACQUISITION: 'candidate-acquisition',
  SOURCE_LATENCY: 'source-latency', CONFLICT: 'conflict-rate', BUDGET: 'budget-pressure',
  SIZE: 'package-size', VALIDATION: 'validation-status', DELIVERY: 'delivery-status',
  EXPIRATION: 'expiration', DISPOSAL: 'disposal', PROVIDER: 'provider-submission',
  MEMORY_PROPOSAL: 'memory-proposal-handoff'
});

export const KNOWLEDGE_MEMORY_OBSERVABILITY_SIGNALS = Object.freeze({
  METRICS: 'metrics', LOGS: 'logs', TRACES: 'traces', EVENTS: 'events', PROFILES: 'profiles',
  EVALUATION: 'evaluation-results', EVIDENCE: 'operational-evidence', SYNTHETICS: 'synthetic-tests'
});

export const KNOWLEDGE_MEMORY_METRIC_DIMENSIONS = Object.freeze({
  RATE: 'rate', LATENCY: 'latency', ERROR: 'error', SATURATION: 'saturation', BACKLOG: 'backlog',
  FRESHNESS: 'freshness', LIFECYCLE: 'lifecycle-count', QUALITY: 'quality-outcome', COST: 'cost'
});

export const KNOWLEDGE_MEMORY_CORRELATION_IDENTITIES = Object.freeze({
  REQUEST: 'request-identity', TRACE: 'trace-identity', CORRELATION: 'correlation-identity',
  CAUSATION: 'causation-identity', WORKFLOW: 'workflow-identity', AGENT: 'agent-execution-identity',
  SYNCHRONIZATION: 'source-synchronization-identity', LIFECYCLE: 'lifecycle-operation-identity',
  INCIDENT: 'incident-identity', CHANGE: 'change-identity'
});

export const KNOWLEDGE_MEMORY_ALERT_FIELDS = Object.freeze({
  CONDITION: 'condition', SEVERITY: 'severity', IMPACT: 'business-impact', SCOPE: 'affected-scope',
  OWNER: 'owner', RUNBOOK: 'runbook', ESCALATION: 'escalation', SUPPRESSION: 'suppression-behavior',
  RECOVERY: 'recovery-condition'
});

export const KNOWLEDGE_MEMORY_SERVICE_LEVEL_INDICATORS = Object.freeze({
  AVAILABILITY: 'availability', SUCCESS: 'successful-authorized-request-rate', LATENCY: 'end-to-end-latency',
  SOURCE_FRESHNESS: 'source-freshness', SYNCHRONIZATION: 'synchronization-completion',
  PROCESSING: 'processing-completion', INDEX: 'index-freshness', RETRIEVAL: 'retrieval-sufficiency',
  CITATION: 'citation-resolution', CONTEXT: 'context-validation', CORRECTION: 'correction-propagation',
  DELETION: 'deletion-propagation', RECOVERY: 'recovery-success'
});

export const KNOWLEDGE_MEMORY_LATENCY_BUDGET_FIELDS = Object.freeze({
  TOTAL: 'total-deadline', GATEWAY: 'gateway-allowance', POLICY: 'policy-allowance',
  DOMAIN: 'domain-query-allowance', KNOWLEDGE: 'knowledge-retrieval-allowance',
  MEMORY: 'memory-retrieval-allowance', CONTEXT: 'context-assembly-allowance',
  PROVIDER: 'provider-allowance', VALIDATION: 'validation-allowance', DELIVERY: 'delivery-allowance'
});

export const KNOWLEDGE_MEMORY_CAPACITY_FACTORS = Object.freeze({
  DEMAND: 'business-demand', TENANT_GROWTH: 'tenant-and-property-growth', SOURCES: 'source-count-and-size',
  CHANGES: 'change-volume', KNOWLEDGE: 'knowledge-item-volume', REPRESENTATIONS: 'representation-multiplier',
  QUERIES: 'query-demand', CONTEXT: 'context-size', MEMORY: 'memory-volume', JOBS: 'lifecycle-jobs',
  EVALUATION: 'evaluation-load', PROVIDERS: 'provider-quotas', STORAGE: 'storage-growth', RECOVERY: 'recovery-workload'
});

export const KNOWLEDGE_MEMORY_QUEUE_FIELDS = Object.freeze({
  DEPTH: 'depth', AGE: 'age', THROUGHPUT: 'throughput', RETRY: 'retry-count',
  DEAD_LETTER: 'dead-letter-count', TENANT: 'tenant-distribution', PRIORITY: 'priority',
  OLDEST: 'oldest-item', DRAIN: 'estimated-drain-time'
});

export const KNOWLEDGE_MEMORY_RELIABILITY_MECHANISMS = Object.freeze({
  IDEMPOTENCY: 'idempotency', DEDUPLICATION: 'deduplication', TIMEOUTS: 'timeouts', RETRY: 'retry',
  CIRCUIT_BREAKING: 'circuit-breaking', BULKHEADS: 'bulkheads', CHECKPOINTS: 'checkpoints', REPLAY: 'replay',
  RECONCILIATION: 'reconciliation', BACKUP: 'backup', RESTORE: 'restore', FAILOVER: 'failover',
  DEGRADATION: 'degraded-modes'
});

export const KNOWLEDGE_MEMORY_OPERATIONAL_DEGRADED_MODES = Object.freeze({
  CONNECTOR_PAUSED: 'connector-paused', PUBLICATION_DELAYED: 'ingestion-accepted-publication-delayed',
  CURATED_ONLY: 'curated-knowledge-only', LEXICAL_ONLY: 'lexical-retrieval-without-semantic',
  NO_RERANKING: 'no-reranking', NO_SUMMARIES: 'no-generated-summaries',
  NO_ADMISSION: 'no-new-memory-admission', CONFIRMED_MEMORY: 'confirmed-memory-only',
  READ_ONLY_MEMORY: 'read-only-memory', DOMAIN_FALLBACK: 'domain-service-fallback',
  CACHED_KNOWLEDGE: 'cached-approved-knowledge-within-freshness',
  CLARIFICATION: 'human-clarification', ESCALATION: 'human-escalation',
  RETRIEVAL_DISABLED: 'retrieval-disabled-for-affected-scope'
});

export const KNOWLEDGE_MEMORY_DEGRADED_MODE_FIELDS = Object.freeze({
  TRIGGER: 'trigger', AUTHORITY: 'authority', CAPABILITY: 'affected-capability',
  SCOPE: 'affected-tenant-and-property-scope', ALLOWED: 'allowed-behavior', PROHIBITED: 'prohibited-behavior',
  STATUS: 'consumer-visible-status', FRESHNESS: 'data-freshness', RECOVERY: 'recovery-condition',
  DURATION: 'maximum-duration', EVIDENCE: 'evidence'
});

export const KNOWLEDGE_MEMORY_RECOVERY_OBJECTIVES = Object.freeze({
  RTO: 'recovery-time-objective', RPO: 'recovery-point-objective',
  DISRUPTION: 'maximum-tolerable-disruption', DATA_LOSS: 'data-loss-tolerance',
  DEGRADATION: 'degraded-mode-duration', REBUILD: 'rebuild-objective',
  RECONCILIATION: 'reconciliation-objective'
});

export const KNOWLEDGE_MEMORY_OPERATIONS_QUALITY_ATTRIBUTES = Object.freeze({
  AVAILABILITY: 'availability', RELIABILITY: 'reliability', RESILIENCE: 'resilience',
  RECOVERABILITY: 'recoverability', PERFORMANCE: 'performance', SCALABILITY: 'scalability',
  EFFICIENCY: 'efficiency', SECURITY: 'security', PRIVACY: 'privacy', ISOLATION: 'isolation',
  TRACEABILITY: 'traceability', SUPPORTABILITY: 'supportability', AUDITABILITY: 'auditability',
  PORTABILITY: 'portability'
});

export const KNOWLEDGE_MEMORY_OPERATIONS_RULES = Object.freeze({
  OUTCOME_HEALTH: 'health-measured-through-business-lifecycle-quality-security-and-recovery',
  UPTIME_NOT_ENOUGH: 'process-uptime-cannot-hide-unsafe-or-stale-outcomes', OWNERSHIP: 'production-capabilities-owned',
  READINESS: 'operational-readiness-required-before-production', HEALTH_SEMANTICS: 'consistent-live-ready-health-semantics',
  SAFE_HEALTH: 'public-health-does-not-expose-protected-details', SOURCE_OPERATIONS: 'source-lifecycle-operated-explicitly',
  ACCEPTANCE_NOT_PUBLICATION: 'ingestion-acceptance-distinct-from-publication',
  QUARANTINE: 'unsafe-content-excluded-from-active-retrieval', POISON_ISOLATION: 'poison-items-isolated-and-retried-safely',
  LIFECYCLE_VISIBILITY: 'authorized-lifecycle-version-time-provenance-and-representation-visible',
  COMPATIBILITY: 'incompatible-representations-separated', RETRIEVAL_MONITORING: 'retrieval-quality-security-latency-and-cost-monitored',
  FEEDBACK_NOT_AUTHORITY: 'production-feedback-does-not-change-authority-policy-or-memory',
  MEMORY_PRIVILEGED: 'memory-inspection-privileged-and-lifecycle-operations-separated',
  JOB_SAFETY: 'lifecycle-jobs-idempotent-bounded-observable-scope-safe-and-replay-safe',
  CONTEXT_OPERATIONS: 'context-lifecycle-operated-explicitly',
  PROPAGATION: 'correction-and-deletion-tracked-through-all-derived-consumers',
  INTEGRATION_MONITORING: 'api-event-queue-retry-replay-contract-and-provider-monitored',
  EVALUATION_GOVERNED: 'evaluation-data-isolated-and-configurations-versioned',
  TOOLING_GOVERNED: 'operational-tools-and-runbooks-preserve-authority-scope-and-evidence',
  SIGNAL_PURPOSE: 'telemetry-signals-used-for-their-proper-purpose', TELEMETRY_MINIMIZED: 'ordinary-telemetry-excludes-protected-content',
  CORRELATION: 'opaque-end-to-end-correlation-and-causation', TELEMETRY_GOVERNED: 'telemetry-classified-authorized-retained-and-disposed',
  SCOPE_AWARE_VIEWS: 'dashboards-and-diagnostics-scope-and-purpose-aware', ACTIONABLE_ALERTS: 'alerts-actionable-owned-and-runbook-linked',
  ANOMALY_NOT_PROOF: 'anomalies-are-investigation-signals-not-authority', OUTCOME_SLOS: 'service-indicators-measure-outcomes',
  LIFECYCLE_RELIABILITY: 'staleness-citations-lifecycle-correction-deletion-and-quality-count-toward-reliability',
  LATENCY_BUDGETS: 'end-to-end-latency-budgeted-and-observed', LATENCY_SEPARATION: 'queue-processing-dependency-provider-and-user-latency-distinct',
  CAPACITY_MODEL: 'capacity-models-demand-scope-sources-representations-memory-and-recovery',
  INDEPENDENT_SCALING: 'apis-workers-storage-indexes-retrieval-and-regions-scale-independently',
  TENANT_FAIRNESS: 'tenant-fairness-and-explicit-property-priority', OVERLOAD_CONTROLS: 'quotas-rates-admission-queues-and-backpressure',
  LIFECYCLE_PRIORITY: 'invalidation-correction-deletion-and-hold-prioritized-under-pressure',
  OPTIMIZATION_BOUNDARY: 'scaling-caching-batching-and-cost-never-weaken-governed-semantics',
  CACHE_SCOPE: 'cache-bound-to-authorization-scope-and-invalidated-on-change',
  RELIABILITY: 'idempotency-deduplication-timeouts-retry-bulkheads-replay-and-reconciliation',
  DIVERGENCE: 'lifecycle-scope-citation-cache-and-restore-divergence-contained',
  DEGRADED_CONTRACT: 'degraded-modes-explicitly-contracted', SAFE_DEGRADATION: 'degradation-preserves-security-privacy-citation-and-lifecycle',
  AUTHORITATIVE_BACKUP: 'authoritative-state-backed-up-and-derived-state-rebuildable',
  BACKUP_GOVERNANCE: 'backups-preserve-encryption-isolation-lifecycle-residency-and-access',
  NO_RESURRECTION: 'restore-and-replay-cannot-resurrect-inactive-records',
  RECOVERY_RECONCILIATION: 'representations-rebuilt-and-lifecycle-reconciled-before-service',
  RECOVERY_EXERCISED: 'recovery-objectives-defined-and-exercised',
  FALLBACK_GOVERNED: 'regional-and-provider-fallback-preserves-policy',
  OPERATIONS_LIFECYCLE: 'incidents-problems-changes-rollbacks-and-improvement-supported',
  RELEASE_GOVERNANCE: 'representation-search-and-memory-policy-releases-evaluated-and-reversible',
  ADMIN_SECURITY: 'operations-use-strong-identity-least-privilege-time-bounds-and-evidence',
  EVIDENCE: 'protected-operational-evidence-by-design', VERSIONED_CONTRACTS: 'versioned-apis-and-events',
  NO_DATABASE_ACCESS: 'no-cross-service-database-access', NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const KNOWLEDGE_MEMORY_OPERATIONS_BOUNDARIES = Object.freeze({
  OBSERVABILITY: 'select-observability-platform', LOGGING: 'select-logging-library',
  MONITORING: 'select-monitoring-product', INCIDENTS: 'select-incident-management-product',
  PRODUCT: 'select-search-vector-graph-cache-queue-or-ai-provider', SLOS: 'define-numeric-service-objectives',
  TOPOLOGY: 'define-deployment-topology', ON_CALL: 'define-detailed-on-call-schedules',
  RUNBOOKS: 'define-detailed-incident-runbooks', TENANCY: 'define-multi-tenancy-internals',
  ARCH_007: 'replace-deployment-architecture', ARCH_010: 'replace-observability-architecture',
  ARCH_011: 'replace-enterprise-operations'
});
