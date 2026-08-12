export const WORKFLOW_TASK_WORKER_ERROR_CODE = 'WORKFLOW_TASK_WORKER_INVALID';

export const WORKFLOW_WORK_CONCEPTS = Object.freeze({
  TASK: 'durable-logical-task', ACTIVITY_ATTEMPT: 'bounded-activity-attempt', WORKER: 'authenticated-replaceable-worker'
});
export const WORKFLOW_TASK_WORKER_RESPONSIBILITIES = Object.freeze({
  RUNTIME: 'workflow-runtime-task-state-and-outcome', DISPATCH: 'queue-dispatch-delivery-and-routing',
  WORKER: 'bounded-attempt-execution', DOMAIN_SERVICE: 'authoritative-business-rules-state-and-idempotency'
});
export const WORKFLOW_TASK_IDENTITY_FIELDS = Object.freeze({
  TYPE: 'task-type', INSTANCE: 'task-instance', EXECUTION: 'workflow-execution', DEFINITION: 'definition-version',
  BRANCH_LOOP: 'branch-or-loop-instance', PARENT: 'parent-task', TENANT: 'tenant', PROPERTY: 'property'
});
export const WORKFLOW_ATTEMPT_BINDINGS = Object.freeze({
  IDENTITY: 'attempt-identity', TASK: 'logical-task', NUMBER: 'attempt-number', TASK_VERSION: 'task-state-version',
  DEFINITION: 'definition-version', INPUT_CONTRACT: 'input-contract-version', RESULT_CONTRACT: 'result-contract-version',
  SCOPE: 'tenant-and-property', CAPABILITY: 'required-worker-capability', WORKER_VERSION: 'required-worker-version-range',
  ENVIRONMENT: 'environment', IDEMPOTENCY: 'idempotency-identity', TIMEOUT: 'attempt-timeout',
  LEASE: 'lease-policy', CANCELLATION: 'cancellation-token', EVIDENCE: 'evidence-requirements'
});
export const WORKFLOW_TASK_STATES_V2 = Object.freeze({
  NOT_CREATED: 'not-created', BLOCKED: 'blocked', READY: 'ready', DISPATCHING: 'dispatching',
  DISPATCHED: 'dispatched', RUNNING: 'running', WAITING: 'waiting', COMPLETING: 'completing',
  COMPLETED: 'completed', RETRY_SCHEDULED: 'retry-scheduled', FAILED: 'failed', CANCELLING: 'cancelling',
  CANCELLED: 'cancelled', EXPIRED: 'expired'
});
export const WORKFLOW_ATTEMPT_STATES = Object.freeze({
  CREATED: 'created', PUBLISHED: 'published', AVAILABLE: 'available', LEASED: 'leased', STARTED: 'started',
  RUNNING: 'running', REPORTING: 'reporting', COMPLETED: 'completed', FAILED: 'failed', TIMED_OUT: 'timed-out',
  LEASE_LOST: 'lease-lost', CANCELLED: 'cancelled', ABANDONED: 'abandoned', QUARANTINED: 'quarantined'
});
export const WORKFLOW_DISPATCH_INTENT_FIELDS = Object.freeze({
  TASK: 'task', ATTEMPT: 'attempt', DISPATCH: 'dispatch-identity', ROUTE: 'queue-route',
  CAPABILITY: 'required-capability', SCOPE: 'tenant-and-property', PRIORITY: 'priority',
  EARLIEST: 'earliest-delivery', DEADLINE: 'deadline', INPUT: 'input-reference',
  IDEMPOTENCY: 'idempotency-identity', CANCELLATION: 'cancellation-token', PUBLICATION: 'publication-state'
});
export const WORKFLOW_QUEUE_CAPABILITIES = Object.freeze({
  DELIVERY: 'durable-messages', ROUTING: 'routing', PRIORITY: 'priority', DELAY: 'delayed-availability',
  VISIBILITY: 'visibility-timeout', REDELIVERY: 'redelivery', CONSUMERS: 'consumer-groups',
  PARTITIONING: 'partitioning', BACKPRESSURE: 'backpressure-metrics', DEAD_LETTER: 'dead-letter-routing'
});
export const WORKFLOW_DELIVERY_MODELS = Object.freeze({
  PULL: 'pull-delivery', PUSH: 'push-delivery', COORDINATED: 'coordinated-assignment'
});
export const WORKFLOW_WORKER_IDENTITY_FIELDS = Object.freeze({
  TYPE: 'logical-worker-type', VERSION: 'implementation-version', DEPLOYMENT: 'worker-deployment',
  INSTANCE: 'worker-process-or-instance', WORKLOAD: 'workload-identity', POOL: 'worker-pool',
  ENVIRONMENT: 'environment', REGION: 'region', TENANTS: 'tenant-eligibility', PROPERTIES: 'property-eligibility'
});
export const WORKFLOW_WORKER_LIFECYCLE = Object.freeze({
  PROPOSED: 'proposed', DEVELOPED: 'developed', VALIDATED: 'validated', APPROVED: 'approved',
  REGISTERED: 'registered', RELEASED: 'released', ACTIVE: 'active', SUSPENDED: 'suspended',
  DEPRECATED: 'deprecated', RETIRED: 'retired'
});
export const WORKFLOW_CAPABILITY_MATCH_FIELDS = Object.freeze({
  ACTIVITY: 'required-activity-type', INPUT: 'input-contract-version', RESULT: 'result-contract-version',
  VERSION: 'worker-implementation-version', LIFECYCLE: 'lifecycle-state', ENVIRONMENT: 'environment',
  SCOPE: 'tenant-and-property', LOCALITY: 'region-and-locality', CLASSIFICATION: 'data-classification',
  AUTHORITY: 'authority', RESOURCES: 'resource-requirements', HEALTH: 'operational-health', CAPACITY: 'capacity'
});
export const WORKFLOW_LEASE_FIELDS = Object.freeze({
  IDENTITY: 'lease-identity', ATTEMPT: 'activity-attempt', WORKER: 'worker-identity', ACQUIRED: 'acquisition-time',
  EXPIRES: 'expiration-time', VISIBILITY: 'visibility-deadline', HEARTBEAT: 'heartbeat-interval',
  TOKEN: 'fencing-token', RENEWAL: 'renewal-policy', CANCELLATION: 'cancellation-state'
});
export const WORKFLOW_ACTIVITY_RESULT_FIELDS = Object.freeze({
  IDENTITY: 'result-identity', ATTEMPT: 'activity-attempt', TASK: 'task', WORKER: 'worker-identity',
  WORKER_VERSION: 'worker-version', FENCING: 'lease-or-fencing-token', CONTRACT: 'result-contract-version',
  SCOPE: 'tenant-and-property', COMPLETED: 'completion-time', OUTPUT: 'output-or-reference',
  PROVIDER: 'provider-reference', BUSINESS: 'business-result-reference', IDEMPOTENCY: 'idempotency-identity',
  EVIDENCE: 'evidence'
});
export const WORKFLOW_ACTIVITY_FAILURE_TYPES = Object.freeze({
  INVALID_ACTIVITY: 'invalid-activity', UNSUPPORTED_CONTRACT: 'unsupported-contract', NOT_AUTHORIZED: 'not-authorized',
  INVALID_TENANT: 'invalid-tenant', INVALID_PROPERTY: 'invalid-property', INVALID_INPUT: 'invalid-input',
  DEPENDENCY: 'dependency-unavailable', RATE_LIMITED: 'rate-limited', QUOTA: 'quota-exhausted',
  RESOURCE: 'resource-exhausted', TIMEOUT: 'timeout', CANCELLED: 'cancelled', WORKER: 'worker-failure',
  PROVIDER: 'provider-failure', UNCERTAIN: 'result-uncertain', VALIDATION: 'validation-failed',
  CONFLICT: 'conflict', POLICY: 'policy-denied', SECURITY: 'security-violation'
});
export const WORKFLOW_DEAD_LETTER_CAUSES = Object.freeze({
  DELIVERY_EXHAUSTED: 'delivery-attempt-exhaustion', INVALID_ENVELOPE: 'invalid-envelope',
  UNSUPPORTED_CONTRACT: 'unsupported-contract', UNKNOWN_ACTIVITY: 'unknown-activity-type',
  NO_WORKER: 'no-eligible-worker', REJECTION: 'repeated-worker-rejection', DEADLINE: 'expired-deadline',
  POISON: 'poison-payload', SCOPE: 'tenant-or-property-mismatch', SECURITY: 'security-validation-failure',
  ROUTING: 'routing-failure'
});
export const WORKFLOW_BACKPRESSURE_ACTIONS = Object.freeze({
  REDUCE_DISPATCH: 'reduce-dispatch', DEFER: 'defer-low-priority-work', SCALE: 'scale-eligible-workers',
  QUOTAS: 'apply-tenant-quotas', PROVIDER_LIMITS: 'apply-provider-limits', CIRCUIT_BREAK: 'use-circuit-breaking',
  ALTERNATIVE: 'route-to-approved-alternative', ADMISSION: 'reject-or-defer-new-starts', ESCALATE: 'escalate-operationally'
});
export const WORKFLOW_WORKER_OPERATIONS = Object.freeze({
  PAUSE: 'pause-dispatch', RESUME: 'resume-dispatch', DRAIN: 'drain-worker-pool', SUSPEND: 'suspend-worker-version',
  CAPACITY: 'adjust-bounded-capacity', HEALTH: 'trigger-health-probe', QUARANTINE: 'quarantine-message',
  RELEASE: 'release-approved-quarantine', RECONCILE: 'reconcile-uncertain-attempt',
  REPUBLISH: 'reissue-publication', RETRY: 'create-controlled-retry', DEAD_LETTER: 'approved-dead-letter-recovery'
});
export const WORKFLOW_TASK_WORKER_QUALITY_ATTRIBUTES = Object.freeze({
  DURABILITY: 'durability', RELIABILITY: 'reliability', SCALABILITY: 'scalability', ISOLATION: 'isolation',
  SECURITY: 'security', IDEMPOTENCY: 'idempotency', RECOVERABILITY: 'recoverability', FAIRNESS: 'fairness',
  OPERABILITY: 'operability', PORTABILITY: 'portability', AUDITABILITY: 'auditability'
});
export const WORKFLOW_TASK_WORKER_RULES = Object.freeze({
  TASK_AUTHORITY: 'workflow-engine-owns-durable-logical-tasks', ATTEMPT_BOUNDARY: 'activities-are-bounded-attempts',
  STABLE_IDENTITIES: 'stable-task-attempt-dispatch-lease-worker-result-and-operation-identities',
  INTENT_FIRST: 'task-and-dispatch-intent-before-publication', QUEUE_NOT_AUTHORITY: 'queue-not-only-work-record',
  QUEUE_DRIVEN: 'queue-driven-worker-coordination', WORKER_IDENTITY: 'authenticate-and-authorize-workers',
  CAPABILITY: 'registered-capability-and-contract-matching', SCOPE: 'tenant-and-property-throughout',
  MINIMUM_CONTEXT: 'minimum-context-and-task-scoped-credentials', STATELESS: 'workers-stateless-between-attempts',
  NO_STATE_WRITES: 'workers-do-not-write-authoritative-state', LEASES: 'bounded-leases-visibility-and-fencing',
  HEARTBEAT: 'heartbeat-is-liveness-not-completion', ACK: 'delivery-ack-is-transport-not-completion',
  RESULT_VALIDATION: 'validate-result-before-task-completion', FAILURE_SEPARATION: 'attempt-failure-not-task-failure',
  RETRY_OWNER: 'workflow-engine-controls-attempt-retry', RECONCILE: 'reconcile-uncertain-effects-before-retry',
  EFFECTIVELY_ONCE: 'no-universal-exactly-once-claim', DOMAIN_IDEMPOTENCY: 'target-idempotency-and-domain-invariants',
  LATE_DUPLICATE: 'duplicate-and-late-results-harmless', DEAD_LETTER: 'dead-letter-is-operational-isolation',
  LOAD_CONTROL: 'priority-fairness-rate-limits-backpressure-and-bulkheads', DRAIN: 'drain-before-planned-removal',
  EVIDENCE: 'evidence-through-failure-cancellation-and-recovery', NEUTRALITY: 'vendor-and-technology-neutrality'
});
export const WORKFLOW_TASK_WORKER_BOUNDARIES = Object.freeze({
  DEFINITION: 'define-workflow-definition-lifecycle', STATE_STORAGE: 'define-authoritative-transition-storage',
  EVENTS_TIMERS: 'define-event-and-timer-correlation-detail', HUMAN_TASKS: 'define-human-task-interaction',
  AGENT_INTERNALS: 'define-agent-reasoning-or-runtime', RELIABILITY_POLICY: 'define-complete-retry-and-compensation-policy',
  DOMAIN_TRANSACTIONS: 'define-business-service-transactions', API_SDK: 'define-detailed-external-apis-and-sdks',
  QUEUE: 'select-queue-or-broker', COMPUTE: 'select-compute-runtime', LANGUAGE: 'select-worker-language',
  PRODUCT: 'select-workflow-product'
});
