export const API_DESIGN_INTERACTION_PATTERNS_ERROR_CODE = 'API_DESIGN_INTERACTION_PATTERNS_INVALID';

export const API_INTERACTION_PATTERN_OBJECTIVES = Object.freeze({
  BUSINESS_SEMANTICS: 'clear-business-semantics',
  PREDICTABLE_BEHAVIOR: 'predictable-consumer-behavior',
  SAFE_STATE_CHANGES: 'safe-state-changes',
  COMPLETION_STATES: 'explicit-completion-states',
  FAILURE_HANDLING: 'reliable-failure-handling',
  TENANT_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  COLLECTION_TRAVERSAL: 'consistent-collection-traversal',
  ASYNC_WORK: 'controlled-asynchronous-work',
  REPLAY_SAFE_EVENTS: 'replay-safe-event-consumption',
  CALLBACK_DELIVERY: 'secure-callback-delivery',
  BOUNDED_STREAMING: 'bounded-streaming',
  BATCH_PROCESSING: 'safe-batch-processing',
  CORRELATION: 'observable-correlation',
  TRANSPORT_PORTABILITY: 'portable-transport-realization',
  CONFORMANCE: 'testable-conformance',
  RECOVERABILITY: 'operational-recoverability'
});

export const API_INTERACTION_CLASSES = Object.freeze({
  QUERY: 'query',
  COMMAND: 'command',
  ACTION: 'action',
  RESOURCE_MANAGEMENT: 'resource-management',
  EVENT: 'event',
  CALLBACK: 'callback',
  STREAM: 'stream',
  BATCH: 'batch',
  ADMINISTRATIVE_CONTROL: 'administrative-control',
  OPERATIONAL_CONTROL: 'operational-control'
});

export const API_PATTERN_SELECTION_CRITERIA = Object.freeze({
  QUERY_INFORMATION: 'use-query-for-information-without-business-mutation',
  COMMAND_TRANSITION: 'use-command-for-owned-state-transition',
  ACTION_NAMED_CAPABILITY: 'use-action-for-purpose-specific-capability',
  ASYNC_DURABLE_WORK: 'use-asynchronous-completion-for-long-or-durable-work',
  EVENT_FACT: 'use-event-for-provider-fact-or-governed-signal',
  WORKFLOW_DURABILITY: 'use-workflow-for-durable-multi-step-coordination',
  SIMPLEST_SEMANTIC_PATTERN: 'select-simplest-pattern-that-preserves-required-semantics'
});

export const API_RESOURCE_PATTERN_FIELDS = Object.freeze({
  RESOURCE_IDENTITY: 'resource-identity',
  OWNING_DOMAIN_SERVICE: 'owning-domain-and-service',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  LIFECYCLE_STATE: 'lifecycle-state',
  READ_REPRESENTATION: 'read-representation',
  CREATION_BEHAVIOR: 'create-or-initiation-behavior',
  UPDATE_BEHAVIOR: 'update-behavior',
  CLOSURE_BEHAVIOR: 'deletion-closure-cancellation-or-retirement-behavior',
  MUTABILITY: 'mutability',
  CONCURRENCY: 'concurrency',
  AUTHORIZATION: 'authorization',
  ERRORS: 'errors',
  EVENTS: 'events'
});

export const API_RESOURCE_REPRESENTATION_FIELDS = Object.freeze({
  CONSUMER_STATE: 'consumer-relevant-state',
  STABLE_REFERENCES: 'stable-identifiers-and-references',
  LIFECYCLE_STATE: 'lifecycle-state',
  VERSION_REVISION: 'version-or-revision',
  EFFECTIVE_TIME: 'relevant-effective-time',
  TENANT_PROPERTY_CONTEXT: 'tenant-and-property-context',
  LINKS_OPERATIONS: 'links-or-operation-references',
  FRESHNESS_SOURCE: 'freshness-or-source-metadata'
});

export const API_QUERY_PATTERN_FIELDS = Object.freeze({
  QUERY_KEY: 'query-key',
  TENANT_PROPERTY_BINDING: 'tenant-and-property-binding',
  AUTHORIZATION: 'authorization-behavior',
  CURRENT_HISTORICAL: 'current-or-historical-semantics',
  CONSISTENCY: 'consistency',
  FRESHNESS: 'freshness',
  ABSENCE_BEHAVIOR: 'absence-behavior',
  CONDITIONAL_RETRIEVAL: 'conditional-retrieval',
  CLASSIFICATION_VISIBILITY: 'classification-and-field-visibility'
});

export const API_COLLECTION_QUERY_FIELDS = Object.freeze({
  COLLECTION_SCOPE: 'collection-scope',
  ITEM_TYPE: 'item-type',
  REQUIRED_FILTERS: 'required-filters',
  OPTIONAL_FILTERS: 'optional-filters',
  DEFAULT_ORDERING: 'default-ordering',
  SUPPORTED_ORDERING: 'supported-ordering',
  PAGINATION: 'pagination',
  MAX_PAGE_SIZE: 'maximum-page-size',
  CONSISTENCY: 'consistency',
  FRESHNESS: 'freshness',
  EMPTY_RESULT: 'empty-result-behavior',
  TOTAL_COUNT: 'total-count-behavior',
  RESULT_AUTHORIZATION: 'authorization-across-results'
});

export const API_PAGINATION_FIELDS = Object.freeze({
  METHOD: 'pagination-method',
  DEFAULT_PAGE_SIZE: 'default-page-size',
  MAX_PAGE_SIZE: 'maximum-page-size',
  TOKEN_OR_POSITION: 'continuation-token-or-position',
  ORDERING_DEPENDENCY: 'ordering-dependency',
  TOKEN_LIFETIME: 'token-lifetime',
  TOKEN_SCOPE: 'token-scope',
  FILTER_BINDING: 'filter-binding',
  TENANT_PROPERTY_BINDING: 'tenant-and-property-binding',
  CHANGE_BEHAVIOR: 'change-behavior-between-pages',
  INVALID_TOKEN: 'invalid-or-expired-token-behavior',
  END_BEHAVIOR: 'end-of-collection-behavior'
});

export const API_FILTER_SORT_SEARCH_FIELDS = Object.freeze({
  FILTER_CRITERION: 'field-or-semantic-criterion',
  FILTER_OPERATOR: 'operator',
  FILTER_VALUE_TYPE: 'value-type',
  CASE_LOCALE: 'case-and-locale-behavior',
  TIME_BEHAVIOR: 'time-behavior',
  TENANT_PROPERTY_CONSTRAINTS: 'tenant-and-property-constraints',
  COMBINATION_RULES: 'combination-rules',
  MAX_COMPLEXITY: 'maximum-complexity',
  SORT_FIELDS: 'supported-sort-fields',
  STABLE_TIE_BREAKER: 'stable-tie-breaker',
  SEARCH_SCOPE: 'search-scope',
  AUTHORIZED_CANDIDATES: 'authorization-before-candidate-inclusion',
  RANKING_BEHAVIOR: 'ranking-behavior',
  RESULT_LIMITS: 'result-limits'
});

export const API_QUERY_CONSISTENCY_MODELS = Object.freeze({
  AUTHORITATIVE_CURRENT: 'authoritative-current-read',
  TRANSACTIONAL: 'transactionally-consistent-read',
  READ_YOUR_WRITES: 'read-your-writes-within-defined-scope',
  SNAPSHOT: 'snapshot-read',
  EVENTUAL: 'eventual-consistency',
  CACHED: 'cached-view',
  HISTORICAL: 'historical-as-of-view',
  BEST_EFFORT: 'best-effort-informational-view'
});

export const API_COMMAND_ACTION_FIELDS = Object.freeze({
  IDENTITY: 'command-or-action-identity',
  BUSINESS_INTENT: 'business-intent',
  INITIATING_REPRESENTED_IDENTITIES: 'initiating-and-represented-identities',
  REQUIRED_AUTHORITY: 'required-authority',
  TENANT_PROPERTY: 'tenant-and-property',
  INPUT: 'input',
  PRECONDITIONS: 'preconditions',
  DOMAIN_VALIDATION: 'domain-validation',
  IDEMPOTENCY: 'idempotency',
  CONCURRENCY: 'concurrency',
  ACCEPTANCE: 'acceptance',
  COMPLETION: 'completion',
  RESULT: 'result',
  ERRORS: 'errors',
  EVENTS: 'events',
  EVIDENCE: 'evidence'
});

export const API_COMPLETION_DISTINCTIONS = Object.freeze({
  ACCEPTANCE: 'acceptance',
  PROCESSING: 'processing',
  COMPLETION: 'completion',
  SETTLEMENT: 'settlement',
  PUBLICATION: 'publication',
  DELIVERY: 'delivery',
  FAILURE: 'failure',
  CANCELLATION: 'cancellation',
  COMPENSATION: 'compensation'
});

export const API_ASYNC_OPERATION_FIELDS = Object.freeze({
  OPERATION_IDENTITY: 'stable-operation-identity',
  CONTRACT_VERSION: 'accepted-contract-version',
  SUBMITTED_TIME: 'submitted-time',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  CURRENT_STATUS: 'current-status',
  STATUS_MECHANISM: 'status-query-or-event-mechanism',
  CANCELLATION_CAPABILITY: 'cancellation-capability',
  EXPIRATION: 'expiration',
  CORRELATION: 'correlation'
});

export const API_LONG_RUNNING_OPERATION_STATES = Object.freeze({
  SUBMITTED: 'submitted',
  VALIDATING: 'validating',
  ACCEPTED: 'accepted',
  QUEUED: 'queued',
  RUNNING: 'running',
  WAITING: 'waiting',
  PARTIALLY_COMPLETED: 'partially-completed',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
  CANCEL_REQUESTED: 'cancel-requested',
  CANCELLED: 'cancelled',
  EXPIRED: 'expired',
  RECONCILIATION_REQUIRED: 'reconciliation-required'
});

export const API_IDEMPOTENCY_CONTRACT_FIELDS = Object.freeze({
  ELIGIBLE_OPERATIONS: 'eligible-operations',
  REQUIRED_IDENTIFIER: 'required-identifier',
  IDENTIFIER_OWNER: 'identifier-owner',
  SCOPE: 'scope',
  RETENTION_PERIOD: 'retention-period',
  REQUEST_EQUIVALENCE: 'request-equivalence-rules',
  CONCURRENT_DUPLICATE: 'concurrent-duplicate-behavior',
  COMPLETED_DUPLICATE: 'completed-duplicate-behavior',
  FAILED_ATTEMPT: 'failed-attempt-behavior',
  CONFLICT_BEHAVIOR: 'conflict-behavior',
  RESPONSE_REPLAY: 'response-replay-behavior',
  EVIDENCE: 'evidence'
});

export const API_CONCURRENCY_CONTROLS = Object.freeze({
  RESOURCE_VERSION: 'resource-version',
  REVISION_TOKEN: 'revision-token',
  PRECONDITION: 'precondition',
  COMPARE_AND_SET: 'compare-and-set',
  LEASE: 'lease',
  MUTATION_WINDOW: 'mutation-window',
  CONFLICT_ERROR: 'conflict-error',
  RETRY_GUIDANCE: 'retry-guidance'
});

export const API_ERROR_MODEL_FIELDS = Object.freeze({
  ERROR_CODE: 'stable-error-code',
  CATEGORY: 'category',
  MESSAGE: 'safe-message',
  CORRELATION: 'correlation',
  RETRYABLE: 'retryable',
  IDEMPOTENCY_STATE: 'idempotency-state',
  LIMIT_STATE: 'limit-state',
  FIELD_ERRORS: 'field-errors',
  DEPENDENCY_REFERENCE: 'dependency-reference',
  REMEDIATION: 'remediation-guidance',
  EVIDENCE_REFERENCE: 'evidence-reference'
});

export const API_PARTIAL_OUTCOME_FIELDS = Object.freeze({
  OVERALL_OUTCOME: 'overall-outcome',
  ITEM_OUTCOMES: 'item-outcomes',
  ACCEPTED_ITEMS: 'accepted-items',
  REJECTED_ITEMS: 'rejected-items',
  PENDING_ITEMS: 'pending-items',
  FAILED_ITEMS: 'failed-items',
  LIMITATIONS: 'limitations',
  RETRY_GUIDANCE: 'retry-guidance',
  RECONCILIATION: 'reconciliation',
  EVIDENCE: 'evidence'
});

export const API_EVENT_PATTERN_FIELDS = Object.freeze({
  EVENT_IDENTITY: 'event-identity',
  EVENT_TYPE: 'event-type',
  FACT_MEANING: 'fact-meaning',
  PRODUCER: 'producer',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  OCCURRED_TIME: 'occurred-time',
  PUBLISHED_TIME: 'published-time',
  CORRELATION_CAUSATION: 'correlation-and-causation',
  DEDUPLICATION: 'deduplication',
  ORDERING: 'ordering',
  REPLAY: 'replay',
  RETENTION: 'retention',
  SCHEMA_VERSION: 'schema-version',
  EVIDENCE: 'evidence'
});

export const API_CALLBACK_PATTERN_FIELDS = Object.freeze({
  CALLBACK_REGISTRATION: 'callback-registration',
  CONSUMER_ENDPOINT_IDENTITY: 'consumer-endpoint-identity',
  DELIVERY_AUTHENTICATION: 'delivery-authentication',
  PAYLOAD_CONTRACT: 'payload-contract',
  ACKNOWLEDGEMENT: 'acknowledgement-behavior',
  RETRYABLE_OUTCOMES: 'retryable-outcomes',
  BACKOFF: 'backoff',
  MAX_ATTEMPTS_DURATION: 'maximum-attempts-or-duration',
  DEDUPLICATION: 'deduplication-expectation',
  SUSPENSION_THRESHOLD: 'suspension-threshold',
  DEAD_LETTER: 'dead-letter-or-retained-delivery',
  RECOVERY_REPLAY: 'recovery-and-replay'
});

export const API_STREAM_PATTERN_FIELDS = Object.freeze({
  SUBSCRIPTION_IDENTITY: 'subscription-identity',
  CONSUMER_ELIGIBILITY: 'consumer-eligibility',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  FILTER: 'filter',
  ITEM_CONTRACT: 'item-contract',
  ORDERING: 'ordering',
  BACKPRESSURE: 'backpressure',
  HEARTBEAT: 'heartbeat',
  CHECKPOINT: 'checkpoint',
  RESUMPTION: 'resumption',
  EXPIRATION: 'expiration',
  CANCELLATION: 'cancellation',
  FAILURE_BEHAVIOR: 'failure-behavior',
  LIMITS: 'limits',
  EVIDENCE: 'evidence'
});

export const API_BATCH_PATTERN_FIELDS = Object.freeze({
  BATCH_IDENTITY: 'batch-identity',
  ITEM_CONTRACT: 'item-contract',
  BATCH_LIMITS: 'batch-limits',
  ITEM_LIMITS: 'item-limits',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  PER_ITEM_AUTHORITY: 'per-item-authority',
  VALIDATION: 'validation',
  ACCEPTANCE: 'acceptance',
  ITEM_OUTCOMES: 'item-outcomes',
  PARTIAL_FAILURE: 'partial-failure',
  IDEMPOTENCY: 'idempotency',
  RECONCILIATION: 'reconciliation',
  EVIDENCE: 'evidence'
});

export const API_CORRELATION_IDENTIFIERS = Object.freeze({
  REQUEST_CORRELATION: 'request-correlation',
  BUSINESS_TRANSACTION: 'business-transaction-correlation',
  WORKFLOW_EXECUTION: 'workflow-execution',
  AGENT_EXECUTION: 'agent-execution',
  EVENT_CORRELATION: 'event-correlation',
  CAUSATION: 'causation',
  IDEMPOTENCY_IDENTITY: 'idempotency-identity',
  TRACE_IDENTITY: 'trace-identity'
});

export const API_RATE_LIMIT_QUOTA_SCOPES = Object.freeze({
  CONSUMER: 'consumer',
  ACTING_PRINCIPAL: 'acting-principal',
  TENANT: 'tenant',
  PROPERTY: 'property',
  PRODUCT: 'product',
  OPERATION: 'operation',
  RISK_CLASS: 'risk-class',
  COST_CLASS: 'cost-class',
  TIME_WINDOW: 'time-window'
});

export const API_CACHE_BEHAVIOR_FIELDS = Object.freeze({
  ELIGIBLE_OPERATIONS_FIELDS: 'eligible-operations-and-fields',
  CACHE_KEY_SCOPE: 'cache-key-scope',
  TENANT_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  AUTHORIZATION_RELATIONSHIP: 'authorization-relationship',
  MAXIMUM_AGE: 'maximum-age',
  REVALIDATION: 'revalidation',
  INVALIDATION: 'invalidation',
  DEGRADED_USE: 'degraded-use',
  PERSONAL_DATA_HANDLING: 'personal-data-handling',
  DELETION_PROPAGATION: 'deletion-propagation',
  OBSERVABILITY: 'observability'
});

export const API_COMPOSITION_PATTERN_FIELDS = Object.freeze({
  EXPERIENCE_PRODUCT: 'owning-experience-product',
  PARTICIPATING_PROVIDERS: 'participating-providers',
  PROVIDER_AUTHORIZATION: 'per-provider-authorization',
  TENANT_PROPERTY_PROPAGATION: 'tenant-and-property-propagation',
  DEADLINES: 'deadlines',
  CONCURRENCY: 'concurrency',
  PARTIAL_OUTCOMES: 'partial-outcomes',
  ERROR_MAPPING: 'error-mapping',
  FRESHNESS: 'freshness',
  CACHING: 'caching',
  CORRELATION: 'correlation',
  EVIDENCE: 'evidence'
});

export const API_WORKFLOW_AGENT_INTERACTION_FIELDS = Object.freeze({
  WORKFLOW_DEFINITION_VERSION: 'workflow-definition-and-version',
  EXECUTION_IDENTITY: 'execution-identity',
  AGENT_IDENTITY_VERSION: 'agent-identity-and-version',
  INITIATING_ACTOR: 'initiating-actor',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  GOAL_PURPOSE: 'goal-and-purpose',
  ALLOWED_OPERATION: 'allowed-operation',
  TENANT_PROPERTY: 'tenant-and-property',
  DATA_SCOPE: 'data-scope',
  APPROVAL: 'approval',
  IDEMPOTENCY: 'idempotency',
  DEADLINE: 'deadline',
  COST_RATE_BUDGET: 'cost-and-rate-budget',
  RESULT_VALIDATION: 'result-validation-rules',
  EVIDENCE: 'evidence',
  STOP_CONDITIONS: 'stop-conditions'
});

export const API_DEGRADED_OPERATION_MODES = Object.freeze({
  READ_ONLY: 'read-only-operations',
  CACHED_READS: 'cached-reads-with-explicit-freshness-limits',
  DEFERRED_ASYNC: 'deferred-asynchronous-completion',
  RESTRICTED_HIGH_COST: 'restricted-high-cost-queries',
  SMALLER_LIMITS: 'smaller-page-or-batch-limits',
  DISABLED_EXPANSIONS: 'disabled-nonessential-expansions',
  SUSPENDED_DELIVERY: 'suspended-callbacks-or-streams',
  SCOPED_ISOLATION: 'tenant-or-property-scoped-isolation',
  HUMAN_ASSISTED: 'human-assisted-processing'
});

export const API_OBSERVABILITY_FIELDS = Object.freeze({
  PRODUCT: 'api-product',
  OPERATION: 'operation',
  CONTRACT_VERSION: 'contract-version',
  PROVIDER: 'provider',
  CONSUMER_CLASS: 'consumer-class',
  TENANT_PROPERTY_IMPACT: 'tenant-and-property-impact',
  CORRELATION: 'correlation',
  OUTCOME: 'outcome',
  ERROR_CATEGORY: 'error-category',
  LATENCY: 'latency',
  RETRY: 'retry',
  IDEMPOTENCY: 'idempotency',
  CONCURRENCY_CONFLICT: 'concurrency-conflict',
  QUOTA_THROTTLING: 'quota-and-throttling',
  DEPENDENCY_BEHAVIOR: 'dependency-behavior',
  DEGRADED_STATE: 'degraded-state'
});

export const API_EVIDENCE_FIELDS = Object.freeze({
  INITIATING_ACTOR: 'initiating-actor',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  CONSUMER: 'consumer',
  PRODUCT_OPERATION: 'product-and-operation',
  CONTRACT_VERSION: 'contract-version',
  PURPOSE: 'purpose',
  TENANT_PROPERTY: 'tenant-and-property',
  AUTHORIZATION_DECISION: 'authorization-decision-reference',
  REQUEST_DIGEST: 'request-digest-or-safe-reference',
  IDEMPOTENCY_IDENTITY: 'idempotency-identity',
  OUTCOME: 'outcome',
  EFFECTIVE_TIME: 'effective-time',
  HUMAN_APPROVAL: 'human-approval',
  WORKFLOW_AGENT_EXECUTION: 'workflow-or-agent-execution',
  ERROR_RECONCILIATION: 'error-or-reconciliation'
});

export const API_CONFORMANCE_REQUIREMENTS = Object.freeze({
  CLASSIFICATION: 'interaction-classification',
  REQUIRED_CONTEXT: 'required-context',
  VALIDATION: 'validation',
  TENANT_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  AUTHORIZATION: 'authorization-behavior',
  QUERY_CONSISTENCY_PAGINATION: 'query-consistency-and-pagination',
  COMMAND_COMPLETION: 'command-completion',
  IDEMPOTENCY: 'idempotency',
  CONCURRENCY: 'concurrency',
  TIMEOUT_RETRY: 'timeout-and-retry',
  CANCELLATION: 'cancellation',
  ERROR_MODEL: 'error-model',
  PARTIAL_OUTCOMES: 'partial-outcomes',
  EVENT_REPLAY_DEDUP: 'event-replay-and-deduplication',
  CALLBACK_RETRY_INTEGRITY: 'callback-retry-and-integrity',
  STREAM_BACKPRESSURE_RESUMPTION: 'stream-backpressure-and-resumption',
  BATCH_LIMITS_ITEM_OUTCOMES: 'batch-limits-and-item-outcomes',
  DEGRADED_BEHAVIOR: 'degraded-behavior',
  CORRELATION_EVIDENCE: 'correlation-and-evidence'
});

export const API_PATTERN_DECISION_RECORD_FIELDS = Object.freeze({
  BUSINESS_NEED: 'business-need',
  CONSUMER_NEED: 'consumer-need',
  OWNING_CAPABILITY: 'owning-capability',
  SELECTED_PATTERN: 'selected-pattern',
  ALTERNATIVES: 'alternatives-considered',
  STATE_CHANGE: 'state-change-behavior',
  CONSISTENCY: 'consistency',
  IDEMPOTENCY: 'idempotency',
  FAILURE_RECOVERY: 'failure-and-recovery',
  TENANT_PROPERTY_IMPACT: 'tenant-and-property-impact',
  SECURITY_PRIVACY_IMPACT: 'security-and-privacy-impact',
  OPERATIONAL_IMPACT: 'operational-impact',
  COMPATIBILITY_IMPACT: 'compatibility-impact'
});

export const API_DESIGN_PATTERN_ARCHITECTURAL_RULES = Object.freeze({
  CAPABILITY_FIRST: 'interaction-design-begins-with-owned-capability-and-consumer-outcome',
  ONE_PRIMARY_CLASS: 'every-operation-has-one-clear-primary-interaction-class',
  QUERIES_NO_MUTATION: 'queries-must-not-request-hidden-business-mutations',
  COMMAND_ACTION_SEMANTICS: 'commands-and-actions-define-authority-preconditions-idempotency-completion-errors-and-evidence',
  DISTINCT_COMPLETION_STATES: 'acceptance-processing-completion-settlement-publication-and-delivery-distinguishable',
  RESOURCE_NO_INTERNALS: 'resource-representations-do-not-expose-unnecessary-persistence-or-provider-internals',
  BOUNDED_COLLECTIONS: 'collection-queries-bounded-authorized-ordered-and-safely-paginated',
  RELEVANCE_NOT_AUTHORITY: 'search-relevance-and-identifier-knowledge-do-not-grant-authority',
  SCOPE_BEFORE_CANDIDATES: 'tenant-and-property-filtering-before-unauthorized-candidates-enter-results',
  PARTIAL_UPDATE_DISTINCTIONS: 'partial-updates-distinguish-absent-unchanged-cleared-empty-null-and-default',
  STATE_CHANGE_IDEMPOTENCY: 'material-state-changes-define-idempotency-and-concurrency',
  TIMEOUT_NOT_FAILURE: 'timeout-does-not-prove-business-operation-failed',
  SAFE_RETRY: 'automatic-retry-only-for-eligible-errors-and-idempotent-or-protected-operations',
  CANCELLATION_NOT_COMPENSATION: 'cancellation-does-not-imply-compensation-or-reversal',
  SAFE_ERRORS: 'errors-structured-stable-safe-correlated-and-actionable',
  BATCH_ITEM_CONTROLS: 'batch-processing-preserves-per-item-authority-isolation-validation-and-outcomes',
  DELIVERY_TOLERANCE: 'event-callback-and-stream-consumers-tolerate-documented-duplicates-delays-ordering-replay-and-resumption',
  NO_EXACTLY_ONCE: 'universal-exactly-once-physical-delivery-not-claimed',
  COMPOSITION_BOUNDARIES: 'gateway-composition-preserves-provider-ownership-authority-freshness-errors-completion-and-evidence',
  WORKFLOW_FOR_DURABLE_PROCESS: 'cross-service-durable-processes-use-workflow-events-compensation-and-reconciliation',
  SDK_NO_INVENTED_SEMANTICS: 'sdks-must-not-invent-retry-idempotency-or-completion-semantics',
  DEGRADED_SECURITY: 'degraded-operation-does-not-weaken-security-privacy-isolation-or-evidence',
  AGENT_NO_DISCOVERY_AUTHORITY: 'ai-agents-receive-no-authority-from-api-or-tool-discovery',
  NEUTRALITY: 'patterns-remain-transport-framework-language-cloud-and-vendor-neutral'
});

export const API_DESIGN_PATTERN_BOUNDARIES = Object.freeze({
  PRODUCT_MODEL: 'replace-api-product-and-contract-model',
  LIFECYCLE_VERSIONING: 'define-api-lifecycle-versioning-and-compatibility',
  SECURITY_ACCESS: 'define-detailed-api-security-access-and-isolation',
  SDK_DISTRIBUTION: 'define-sdk-architecture-and-distribution',
  DEVELOPER_EXPERIENCE: 'define-developer-experience-testing-and-conformance',
  GOVERNANCE_ASSURANCE: 'define-api-sdk-governance-and-assurance',
  OPERATIONS_PERFORMANCE: 'define-api-sdk-operations-observability-and-performance',
  TRANSPORT_MANDATE: 'mandate-specific-transport-framework-language-cloud-or-vendor'
});
