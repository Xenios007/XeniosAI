export const RESOURCE_GOVERNANCE_METERING_BILLING_ERROR_CODE = 'RESOURCE_GOVERNANCE_METERING_BILLING_INVALID';

export const GOVERNANCE_PRINCIPLES = Object.freeze({
  EXPLICIT_TENANT_SCOPE: 'shared-capacity-is-governed-explicitly-by-tenant-scope',
  NO_EXHAUSTION: 'one-tenant-must-not-exhaust-resources-required-by-another',
  DISTINCT_COMMERCIAL_DECISIONS: 'entitlement-authorization-quota-metering-rating-and-invoicing-are-distinct',
  ATTRIBUTABLE_USAGE: 'usage-is-attributable-reproducible-and-reconcilable',
  STABLE_FAILURE_BEHAVIOR: 'limits-have-stable-documented-failure-behavior',
  PROTECTED_CAPACITY: 'safety-and-critical-operations-may-have-protected-capacity',
  SYNC_ASYNC_CONTROLS: 'resource-controls-apply-to-synchronous-and-asynchronous-work',
  DEDICATED_GOVERNED: 'dedicated-capacity-remains-measurable-and-governed',
  PROTECTED_USAGE_DATA: 'tenant-usage-data-is-protected-tenant-information',
  GOVERNED_COMMERCIAL_CHANGE: 'commercial-state-changes-runtime-access-only-through-an-approved-entitlement-or-lifecycle-decision',
  PRESERVED_HISTORY: 'adjustments-preserve-history-rather-than-rewriting-source-usage'
});

export const RESPONSIBILITY_CAPABILITIES = Object.freeze({
  AUTHORIZATION: 'authorization', ENTITLEMENT: 'entitlement', QUOTA: 'quota', ADMISSION_CONTROL: 'admission-control',
  SCHEDULING: 'scheduling', METERING: 'metering', RATING: 'rating', BILLING: 'billing', SERVICE_MANAGEMENT: 'service-management'
});

export const GOVERNED_RESOURCE_FAMILIES = Object.freeze({
  API: 'api-requests-and-bandwidth', SESSIONS: 'concurrent-sessions-and-operations', COMPUTE: 'service-compute-and-memory',
  DATABASE: 'database-connections-and-operations', STORAGE: 'transactional-object-search-and-memory-storage',
  EVENTS: 'events-queues-retries-and-dead-letters', WORKFLOW: 'workflow-instances-tasks-and-timers',
  AI_MODEL: 'ai-model-input-output-and-execution-units', AGENT: 'agent-runs-tool-calls-and-delegation',
  KNOWLEDGE: 'knowledge-ingestion-indexing-and-retrieval', INTEGRATION: 'integration-calls-payload-volume-and-callbacks',
  BATCH: 'batch-analytics-export-and-migration-work', OBSERVABILITY: 'observability-volume', SUPPORT: 'support-and-operational-capacity'
});

export const RESOURCE_SCOPE_FIELDS = Object.freeze({
  TENANT: 'tenant', PROPERTY_GROUP: 'property-or-property-group-where-applicable', CAPABILITY_RESOURCE: 'capability-and-resource',
  ENVIRONMENT: 'environment', TIME_WINDOW: 'time-window', UNIT_AGGREGATION: 'unit-and-aggregation-method',
  TIER: 'service-tier-or-entitlement', PRIORITY: 'priority-class', BEHAVIOR: 'hard-soft-reserved-or-informational-behavior',
  VERSION: 'effective-version'
});

export const QUOTA_FIELDS = Object.freeze({
  ID: 'quota-identifier', SCOPE: 'tenant-and-optional-property-scope', RESOURCE_UNIT: 'resource-type-and-unit',
  LIMIT_WINDOW: 'limit-and-measurement-window', BURST: 'burst-allowance', RESERVATION: 'reservation-where-applicable',
  WARNING: 'warning-thresholds', EXCEEDANCE: 'exceedance-policy', SOURCE: 'source-entitlement',
  TIMING: 'effective-and-expiry-time', DELEGATION: 'delegation-rules', EVIDENCE: 'version-and-evidence'
});

export const LIMIT_TYPES = Object.freeze({
  HARD: 'hard-limit', SOFT: 'soft-limit', BURST: 'burst-limit', CONCURRENCY: 'concurrency-limit', BUDGET: 'budget-limit',
  RESERVED: 'reserved-capacity', PLATFORM_SAFETY: 'platform-safety-limit'
});

export const QUOTA_HIERARCHY_LEVELS = Object.freeze({
  PLATFORM: 'platform', REGION_CELL: 'region-or-cell', SERVICE_TIER: 'service-tier', TENANT: 'tenant', PROPERTY: 'property',
  CAPABILITY: 'capability', EXECUTION: 'workflow-or-agent-execution', CONNECTION: 'actor-or-integration-connection'
});

export const ADMISSION_CONTROL_FACTORS = Object.freeze({
  LIFECYCLE: 'tenant-and-lifecycle-state', AUTHORIZATION: 'authorization-and-entitlement', USAGE_QUOTA: 'current-usage-and-quota',
  SAFETY_CAPACITY: 'platform-safety-and-capacity', PRIORITY_DEADLINE: 'work-priority-and-deadline',
  EXPECTED_COST: 'expected-resource-cost', DEPENDENCY_HEALTH: 'dependency-health', FAIRNESS: 'fairness-policy'
});

export const FAIR_SCHEDULING_MECHANISMS = Object.freeze({
  WEIGHTED_QUEUES: 'weighted-fair-queues', PER_TENANT_CONCURRENCY: 'per-tenant-concurrency', TOKEN_BUCKETS: 'token-or-leaky-buckets',
  PRIORITY_CLASSES: 'priority-classes', DEADLINE_AWARE: 'deadline-aware-scheduling', RESERVED_POOLS: 'reserved-pools',
  WORK_SHAPING: 'work-shaping', BACKPRESSURE: 'backpressure', BATCH_WINDOWS: 'batch-windows'
});

export const NOISY_NEIGHBOR_PROTECTION_TARGETS = Object.freeze({
  LATENCY: 'latency', THROUGHPUT: 'throughput', QUEUE_DELAY: 'queue-delay', DB_POOLS: 'database-and-connection-pools',
  CACHE_STORAGE: 'cache-and-storage-capacity', MODEL_TOOL: 'model-and-tool-capacity', INTEGRATION: 'integration-limits',
  OBSERVABILITY: 'observability-pipelines', OPERATOR_ATTENTION: 'operator-attention'
});

export const WORKLOAD_CLASSES = Object.freeze({
  INTERACTIVE_CRITICAL: 'interactive-critical', INTERACTIVE_STANDARD: 'interactive-standard',
  BACKGROUND_OPERATIONAL: 'background-operational', SCHEDULED_BATCH: 'scheduled-batch',
  BULK_EXPORT_MIGRATION: 'bulk-export-or-migration', BEST_EFFORT: 'best-effort', SECURITY_INCIDENT: 'security-or-incident-response'
});

export const GRACEFUL_DEGRADATION_ACTIONS = Object.freeze({
  DELAY_BATCH: 'delay-non-urgent-batch-work', REDUCE_ENRICHMENT: 'reduce-optional-enrichment', LIMIT_RESULTS: 'limit-result-sizes',
  SERVE_CACHED: 'serve-approved-cached-data', REQUIRE_HUMAN_INITIATION: 'require-human-initiation-for-costly-work',
  DISABLE_AGENT_TOOLS: 'disable-nonessential-agent-tools', LOWER_COST_OPTIONS: 'apply-lower-cost-model-or-processing-options-where-policy-permits',
  PRESERVE_CORE: 'preserve-core-transactional-and-safety-operations'
});

export const CAPACITY_RESERVATION_FIELDS = Object.freeze({
  RESOURCE_QUANTITY: 'resource-and-quantity', PERIOD: 'effective-period', SHARING: 'sharing-or-borrowing-rules',
  RECLAIM: 'reclaim-behavior', OVERFLOW: 'failure-and-overflow-policy', COST: 'cost-attribution', MONITORING: 'monitoring-and-review'
});

export const DEDICATED_RESOURCE_REQUIREMENTS = Object.freeze({
  THRESHOLDS: 'capacity-thresholds', MEASUREMENT: 'usage-measurement', HEALTH: 'health-and-saturation-monitoring',
  SCALE_POLICY: 'scale-policy', COST_ALLOCATION: 'cost-allocation', ABUSE_CONTROLS: 'quota-and-abuse-controls',
  BACKUP: 'backup-and-recovery-capacity', LIFECYCLE: 'lifecycle-and-decommissioning'
});

export const USAGE_RECORD_FIELDS = Object.freeze({
  EVENT_ID: 'usage-event-identifier', SCOPE: 'tenant-and-optional-property-scope', CAPABILITY_UNIT: 'capability-and-resource-unit',
  QUANTITY: 'quantity', MEASUREMENT_PERIOD: 'measurement-start-and-end', PROCESSING_TIME: 'event-or-processing-time',
  SOURCE: 'source-service-and-version', CORRELATION: 'correlation-or-execution-reference',
  TIER_REFERENCE: 'entitlement-or-tier-reference-where-relevant', CLASSIFICATION: 'classification',
  IDEMPOTENCY: 'idempotency-and-integrity-information', ADJUSTMENT: 'adjustment-relationship-if-applicable'
});

export const MEASUREMENT_SEMANTICS_FIELDS = Object.freeze({
  WHAT: 'what-is-measured', UNIT_PRECISION: 'unit-and-precision', WHEN: 'when-measurement-occurs',
  TREATMENT: 'success-failure-cancellation-and-retry-treatment', AGGREGATION: 'aggregation-window',
  DEDUPLICATION: 'deduplication-behavior', LATE_EVENT: 'late-event-handling', ROUNDING: 'rounding',
  VERSION: 'version-and-effective-time'
});

export const COLLECTION_ARCHITECTURE_STEPS = Object.freeze({
  VALIDATE_SOURCE: 'validates-source-identity-and-schema', VALIDATE_SCOPE: 'validates-tenant-scope',
  DEDUPLICATE: 'deduplicates-by-governed-identity', PRESERVE_TIME: 'preserves-original-event-time-and-version',
  STORE_RAW: 'stores-immutable-raw-usage', AGGREGATE: 'aggregates-by-defined-windows',
  RECONCILE: 'reconciles-against-source-totals', PUBLISH: 'publishes-approved-consumption-views'
});

export const USAGE_CORRECTION_FIELDS = Object.freeze({
  ORIGINAL: 'original-record', REASON: 'correction-reason', CORRECTED_QUANTITY: 'corrected-quantity-or-reversal',
  AUTHORIZING_ACTOR: 'authorizing-actor-or-process', ACCOUNTING_PERIOD: 'effective-accounting-period', EVIDENCE: 'evidence'
});

export const TENANT_USAGE_VIEW_ITEMS = Object.freeze({
  ENTITLEMENTS_QUOTAS: 'entitlements-and-quotas', HISTORICAL_USAGE: 'current-and-historical-usage',
  FORECAST: 'forecast-consumption', THRESHOLD_NOTIFICATIONS: 'threshold-notifications',
  DEGRADATION_EVENTS: 'throttling-or-degradation-events', METER_DEFINITIONS: 'meter-definitions-and-versions',
  BILLING_DETAIL: 'approved-billing-detail', ADJUSTMENT_STATUS: 'adjustment-status'
});

export const USAGE_NOTIFICATION_FIELDS = Object.freeze({
  SCOPE: 'tenant-scope', RESOURCE: 'resource', WINDOW: 'measurement-window', OBSERVED_USAGE: 'observed-usage',
  LIMIT: 'limit', EXPECTED_BEHAVIOR: 'expected-behavior', REMEDIATION: 'approved-remediation-path'
});

export const AI_AGENT_BUDGET_AREAS = Object.freeze({
  IO_PROCESSING: 'input-and-output-processing', MODEL_CALLS: 'model-calls', TOOL_CALLS: 'tool-calls',
  AGENT_STEPS: 'agent-steps-and-delegations', RETRIEVAL_MEMORY: 'retrieval-and-memory-operations',
  DURATION: 'execution-duration', CONCURRENT_RUNS: 'concurrent-runs', HUMAN_REVIEW: 'human-review-queues'
});

export const WORKFLOW_RESOURCE_CONTROLS = Object.freeze({
  INSTANCE_LIMITS: 'active-and-waiting-instance-limits', ACTIVITY_CONCURRENCY: 'activity-concurrency',
  TIMER_SIGNAL_VOLUME: 'timer-and-signal-volume', HISTORY_SIZE: 'history-size', RETRY_BUDGETS: 'retry-budgets',
  HUMAN_TASK_BACKLOG: 'human-task-backlog', CHILD_WORKFLOW_LIMITS: 'child-workflow-limits', RETENTION: 'retention'
});

export const INTEGRATION_RESOURCE_CONTROLS = Object.freeze({
  CONNECTION_LIMITS: 'tenant-connection-limits', REQUEST_RATE: 'request-rate', CONCURRENT_DELIVERY: 'concurrent-delivery',
  PAYLOAD_VOLUME: 'payload-volume', RETRY_BUDGET: 'retry-budget', BACKOFF: 'backoff', CIRCUIT_BREAKING: 'circuit-breaking',
  CALLBACK_PROTECTION: 'callback-protection'
});

export const EXPORT_MIGRATION_GOVERNANCE_DECLARATIONS = Object.freeze({
  VOLUME: 'expected-volume', DEADLINE: 'deadline', CAPACITY_RESERVATION: 'capacity-reservation',
  NETWORK_STORAGE_BUDGET: 'network-and-storage-budget', PAUSE_CANCELLATION: 'pause-or-cancellation',
  IMPACT_PROTECTIONS: 'impact-protections'
});

export const CAPACITY_PLANNING_INPUTS = Object.freeze({
  GROWTH: 'tenant-and-property-growth', TIER_MIX: 'service-tier-mix', TRENDS: 'usage-trends-and-seasonality',
  PEAK_CONCURRENCY: 'peak-concurrency', AI_INTEGRATION_SHAPE: 'ai-and-integration-workload-shape',
  ISOLATION_PLACEMENT: 'isolation-and-placement-profiles', RESERVED_CAPACITY: 'reserved-capacity',
  RECOVERY_HEADROOM: 'recovery-and-failover-headroom', PLANNED_ONBOARDING: 'planned-onboarding-and-migration'
});

export const RESOURCE_ANOMALY_INDICATORS = Object.freeze({
  DEFECTS: 'defects', CREDENTIAL_COMPROMISE: 'credential-compromise', INTEGRATION_LOOPS: 'integration-loops',
  RUNAWAY_AGENTS: 'runaway-agents', DENIAL_OF_SERVICE: 'denial-of-service', BILLING_ERROR: 'billing-error'
});

export const GOVERNANCE_EVIDENCE_ITEMS = Object.freeze({
  QUOTA_VERSIONS: 'quota-and-entitlement-versions', ADMISSION_DECISIONS: 'admission-and-throttling-decisions',
  SCHEDULING_BEHAVIOR: 'queue-and-scheduling-behavior', RESERVATIONS: 'capacity-reservations',
  USAGE: 'raw-and-aggregated-usage', CORRECTIONS: 'deduplication-and-corrections', RATING_REFERENCES: 'rating-and-invoice-references',
  NOTIFICATIONS: 'notifications', OVERRIDES: 'manual-overrides-and-containment', RECONCILIATION: 'reconciliation-results'
});

export const GOVERNANCE_RECONCILIATION_COMPARISONS = Object.freeze({
  PROVIDER_COLLECTED: 'provider-usage-with-collected-records', RAW_AGGREGATES: 'raw-usage-with-aggregates',
  USAGE_QUOTA: 'usage-with-quota-decisions', ENTITLEMENTS_LIMITS: 'entitlements-with-configured-limits',
  RATED_USAGE: 'rated-items-with-usage-and-price-versions', INVOICES_RATED: 'invoices-with-approved-rated-results',
  DEDICATED_INVENTORY: 'dedicated-resource-inventory-with-allocation'
});

export const GOVERNANCE_FAILURE_BEHAVIORS = Object.freeze({
  SAFETY_ENFORCEABLE: 'safety-limits-remain-enforceable', HIGH_RISK_FAIL_CLOSED: 'high-cost-or-high-risk-work-may-fail-closed',
  PROTECTED_RECOVERY: 'critical-recovery-work-uses-an-approved-protected-path',
  INTEGRITY_BUFFERED: 'metering-records-are-buffered-or-reconstructed-only-with-integrity-controls',
  QUARANTINED_USAGE: 'uncertain-usage-is-quarantined-for-reconciliation',
  NO_ESTIMATED_CHARGE: 'the-platform-does-not-charge-estimated-data-as-confirmed-usage-without-governed-policy'
});

export const GOVERNANCE_TESTING_AREAS = Object.freeze({
  QUOTA_ISOLATION: 'tenant-and-property-quota-isolation', BOUNDARIES: 'burst-reset-and-window-boundaries',
  FAIR_SCHEDULING: 'fair-scheduling-under-contention', NOISY_NEIGHBORS: 'retry-storms-and-noisy-neighbors',
  RESERVED_RECLAIM: 'reserved-capacity-reclaim', ASYNC_BUDGETS: 'async-workflow-agent-and-integration-budgets',
  DEDUPLICATION: 'usage-deduplication-and-late-arrival', CORRECTIONS: 'corrections-and-reconciliation',
  SEPARATION: 'entitlement-and-authorization-separation', BILLING_TRACEABILITY: 'billing-traceability',
  VIEW_ISOLATION: 'tenant-usage-view-isolation', DEGRADATION_RECOVERY: 'degradation-and-recovery'
});

export const RESOURCE_GOVERNANCE_ARCHITECTURAL_RULES = Object.freeze({
  TENANT_AWARE_CONTROLS: 'shared-resources-use-tenant-aware-admission-scheduling-and-capacity-controls',
  SEPARATE_CAPABILITIES: 'authorization-entitlement-quota-metering-rating-billing-and-service-management-remain-separate',
  IMMUTABLE_USAGE: 'usage-records-are-immutable-versioned-and-attributable',
  LINKED_ADJUSTMENTS: 'corrections-use-linked-adjustments-rather-than-history-edits',
  GOVERNED_DEDICATED: 'dedicated-resources-remain-governed-and-metered',
  PROPAGATED_BUDGETS: 'ai-and-workflow-budgets-propagate-through-child-execution',
  PROTECTED_CRITICAL_CAPACITY: 'critical-compensation-and-safety-work-may-use-protected-capacity',
  GOVERNED_COMMERCIAL_RUNTIME_EFFECT: 'commercial-status-affects-runtime-only-through-approved-lifecycle-or-entitlement-state',
  ISOLATED_USAGE_DATA: 'tenant-usage-and-commercial-data-remain-isolated',
  REQUIRED_RECONCILIATION: 'reconciliation-is-required-across-provider-meter-quota-rating-and-billing-boundaries'
});
