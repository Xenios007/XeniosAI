export const WORKFLOW_RUNTIME_STATE_ERROR_CODE = 'WORKFLOW_RUNTIME_STATE_INVALID';

export const WORKFLOW_RUNTIME_RESPONSIBILITIES = Object.freeze({
  RESOLVE_DEFINITION: 'resolve-active-definition-version', ADMISSION: 'admit-or-reject-start-request',
  EXECUTION_IDENTITY: 'create-execution-identity', IMMUTABLE_CONTEXT: 'bind-immutable-execution-context',
  AUTHORITATIVE_STATE: 'initialize-authoritative-process-state', LIFECYCLE: 'maintain-lifecycle-status',
  TRANSITION_ELIGIBILITY: 'evaluate-transition-eligibility', STATE_COMMIT: 'commit-state-changes',
  LOGICAL_TASKS: 'create-logical-tasks', ACTIVITY_SCHEDULING: 'schedule-executable-activities',
  WAITS: 'create-and-resolve-waits', CORRELATION: 'correlate-accepted-inputs', TIMERS: 'manage-durable-timers',
  BRANCH_CHILD_STATE: 'track-branch-and-child-workflow-state', LIMITS: 'enforce-runtime-limits',
  CONCURRENCY: 'handle-concurrency-conflicts', CONTROLS: 'apply-pause-suspension-and-cancellation',
  RECOVERY: 'coordinate-recovery', SIDE_EFFECTS: 'record-side-effect-references',
  RELIABILITY: 'coordinate-reconciliation-and-compensation-states', TERMINAL_OUTCOMES: 'validate-terminal-outcomes',
  HISTORY_EVIDENCE: 'preserve-history-and-evidence'
});

export const WORKFLOW_ADMISSION_OUTCOMES = Object.freeze({
  ALLOW: 'allow', DENY: 'deny', DEFER: 'defer', REQUIRE_DECISION: 'require-decision'
});

export const WORKFLOW_RUNTIME_INPUTS = Object.freeze({
  WORKFLOW: 'workflow-identity', VERSION: 'requested-definition-version', CONTRACT: 'start-contract-version',
  ACTOR: 'initiating-actor', PRINCIPAL: 'represented-principal', TENANT: 'tenant', PROPERTY: 'property',
  ENVIRONMENT: 'environment', BUSINESS_CORRELATION: 'business-correlation', PARENT_WORKFLOW: 'parent-workflow',
  PARENT_AGENT: 'parent-agent-execution', PAYLOAD: 'input-payload-or-references', DEADLINE: 'requested-deadline',
  IDEMPOTENCY: 'idempotency-key', TRIGGER: 'trigger-identity', EVENT: 'triggering-event',
  PRIORITY: 'requested-priority', RESPONSE_CHANNEL: 'required-response-channel'
});

export const WORKFLOW_ADMISSION_CHECKS = Object.freeze({
  AUTHENTICATION: 'initiator-authenticated', WORKFLOW_EXISTS: 'workflow-identity-exists',
  RELEASED: 'selected-version-released', ENVIRONMENT_ACTIVE: 'version-active-for-environment',
  SCOPE_ACTIVE: 'version-active-for-tenant-and-property', LIFECYCLE: 'lifecycle-permits-initiation',
  TRIGGER: 'trigger-supported', AUTHORIZATION: 'initiator-authorized', PRINCIPAL: 'represented-principal-permitted',
  INPUT: 'input-contract-valid', SCOPE: 'tenant-and-property-valid', IDEMPOTENCY: 'idempotency-checked',
  POLICY: 'policy-permits-execution', CAPACITY: 'capacity-and-quota-available',
  DEPENDENCIES: 'dependencies-admission-ready', SUSPENSION: 'no-suspension-or-emergency-stop'
});

export const WORKFLOW_EXECUTION_BINDINGS = Object.freeze({
  WORKFLOW: 'workflow-identity', DEFINITION: 'definition-version', RELEASE: 'release-identity',
  ACTIVATION: 'activation-scope', EXECUTION: 'execution-identity', ACTOR: 'initiating-actor',
  PRINCIPAL: 'represented-principal', ACCOUNTABLE_OWNER: 'accountable-owner', OPERATIONAL_OWNER: 'operational-owner',
  TENANT: 'tenant', PROPERTY: 'property', ENVIRONMENT: 'environment', CORRELATION: 'business-correlation',
  PARENT_WORKFLOW: 'parent-workflow', PARENT_AGENT: 'parent-agent-execution', CONTRACT: 'input-contract-version',
  POLICIES: 'effective-policy-references', CREATED: 'creation-time', DEADLINE: 'deadline', PRIORITY: 'priority',
  IDEMPOTENCY: 'idempotency-identity'
});

export const WORKFLOW_RUNTIME_COMPONENTS = Object.freeze({
  ADMISSION: 'admission-controller', EXECUTION: 'execution-manager', TRANSITION: 'transition-controller',
  STATE_STORE: 'state-store', HISTORY: 'history-recorder', SCHEDULER: 'eligibility-scheduler',
  WAIT: 'wait-manager', TIMER: 'timer-manager', CORRELATION: 'correlation-manager',
  LIMITS: 'runtime-limit-manager', CHECKPOINT: 'checkpoint-manager', SIDE_EFFECTS: 'side-effect-ledger',
  EVIDENCE: 'evidence-recorder'
});

export const WORKFLOW_RUNTIME_EXECUTION_STATES = Object.freeze({
  REQUESTED: 'requested', ADMITTED: 'admitted', INITIALIZING: 'initializing', READY: 'ready', RUNNING: 'running',
  WAITING: 'waiting', PAUSING: 'pausing', PAUSED: 'paused', SUSPENDING: 'suspending', SUSPENDED: 'suspended',
  RESUMING: 'resuming', CANCELLING: 'cancelling', RECONCILING: 'reconciling', COMPENSATING: 'compensating',
  COMPLETING: 'completing', COMPLETED: 'completed', FAILED: 'failed', CANCELLED: 'cancelled',
  EXPIRED: 'expired', TERMINATED: 'terminated'
});

export const WORKFLOW_RUNTIME_STATE_FIELDS = Object.freeze({
  EXECUTION: 'execution-identity', WORKFLOW: 'workflow-identity', DEFINITION: 'definition-version',
  RELEASE: 'release-identity', LIFECYCLE: 'lifecycle-state', PROCESS_POSITION: 'active-process-states-or-nodes',
  STATE_VERSION: 'state-version', TENANT: 'tenant', PROPERTY: 'property', INITIATOR: 'initiator',
  PRINCIPAL: 'represented-principal', PARENTS: 'parent-relationships', CORRELATION: 'business-correlation',
  INPUT: 'input-reference', OUTPUT: 'output-reference', BRANCHES: 'active-branches', TASKS: 'task-summaries',
  WAITS: 'wait-summaries', TIMERS: 'timer-summaries', CHILDREN: 'child-workflow-summaries',
  RETRIES: 'retry-summaries', SIDE_EFFECTS: 'side-effect-summaries', RECONCILIATION: 'reconciliation-state',
  COMPENSATION: 'compensation-state', LIMITS: 'limits-consumed', DEADLINE: 'deadline',
  SUSPENSION: 'suspension-state', CANCELLATION: 'cancellation-intent', LAST_TRANSITION: 'last-transition',
  UPDATED: 'last-update-time', OUTCOME: 'terminal-outcome'
});

export const WORKFLOW_RUNTIME_STATE_INVARIANTS = Object.freeze({
  STABLE_IDENTITY: 'one-stable-execution-identity', DEFINITION_BINDING: 'one-effective-definition-version',
  MONOTONIC_VERSION: 'monotonic-state-version', EXPECTED_VERSION: 'transition-from-expected-state-version',
  TERMINAL_IRREVERSIBLE: 'terminal-state-irreversible', TENANT_IMMUTABLE: 'tenant-identity-immutable',
  PROPERTY_GOVERNED: 'property-change-only-by-governed-transition', TASK_ONCE: 'completed-task-not-completed-again',
  EVENT_ONCE: 'accepted-event-not-applied-twice', TIMER_ONCE: 'timer-occurrence-not-applied-twice',
  HUMAN_DECISION: 'accepted-human-decision-not-silently-replaced', CANCELLATION: 'cancellation-intent-not-ignored',
  COMPLETION_EVIDENCE: 'completion-evidence-before-completed', ORDERED_HISTORY: 'attributable-ordered-history'
});

export const WORKFLOW_STATE_REPRESENTATIONS = Object.freeze({
  CURRENT_STATE: 'current-state-records', HISTORY: 'append-only-history', EVENT_SOURCING: 'event-sourced-reconstruction',
  SNAPSHOTS: 'snapshots', CHECKPOINTS: 'checkpoints', RELATED_RECORDS: 'related-task-and-timer-records', HYBRID: 'hybrid-model'
});

export const WORKFLOW_TRANSITION_FIELDS = Object.freeze({
  IDENTITY: 'transition-identity', EXECUTION: 'execution-identity', DEFINITION: 'definition-version',
  EXPECTED_VERSION: 'expected-state-version', SOURCE: 'source-state', TRIGGER_TYPE: 'trigger-type',
  TRIGGER_IDENTITY: 'trigger-identity', TRIGGER_CONTRACT: 'trigger-contract-version', INITIATOR: 'initiating-identity',
  SCOPE: 'tenant-and-property', CORRELATION: 'correlation', GUARDS: 'guard-results', POLICIES: 'policy-results',
  STATE_CHANGES: 'state-changes', TASKS: 'tasks-created', WAITS: 'waits-created-or-resolved',
  TIMERS: 'timers-created-or-cancelled', EVENTS: 'events-to-publish', EVIDENCE: 'evidence-references',
  DESTINATION: 'destination-state', NEW_VERSION: 'new-state-version', COMMIT_TIME: 'commit-time'
});

export const WORKFLOW_CONCURRENCY_CONTROLS = Object.freeze({
  OPTIMISTIC: 'optimistic-concurrency', COMPARE_SET: 'compare-and-set', CONDITIONAL: 'conditional-transactions',
  PARTITION: 'partition-ownership', LEASES: 'short-lived-state-leases', FENCING: 'fencing-tokens',
  DETERMINISTIC: 'deterministic-conflict-resolution'
});

export const WORKFLOW_TASK_STATES = Object.freeze({
  NOT_CREATED: 'not-created', READY: 'ready', DISPATCHED: 'dispatched', RUNNING: 'running',
  WAITING: 'waiting', COMPLETED: 'completed', FAILED: 'failed', CANCELLED: 'cancelled', EXPIRED: 'expired'
});

export const WORKFLOW_WAIT_TYPES = Object.freeze({
  TASK: 'task-completion', DOMAIN_EVENT: 'domain-event', INTEGRATION_EVENT: 'integration-event',
  CALLBACK: 'external-callback', HUMAN: 'human-decision', AGENT: 'agent-result', CHILD: 'child-workflow',
  DEPENDENCY: 'dependency-recovery', TIME: 'scheduled-time', CAPACITY: 'capacity', RESUME: 'operational-resume'
});

export const WORKFLOW_RUNTIME_FAILURES = Object.freeze({
  ADMISSION: 'admission-failure', INITIALIZATION: 'initialization-failure', DEFINITION: 'definition-resolution-failure',
  INTEGRITY: 'state-integrity-failure', CONFLICT: 'state-conflict', PERSISTENCE: 'persistence-failure',
  SCHEDULER: 'scheduler-failure', QUEUE: 'queue-failure', WORKER: 'worker-failure',
  CORRELATION: 'event-correlation-failure', TIMER: 'timer-failure', HUMAN: 'human-task-failure',
  AGENT: 'agent-task-failure', DEPENDENCY: 'dependency-failure', POLICY: 'policy-failure',
  RECONCILIATION: 'reconciliation-failure', COMPENSATION: 'compensation-failure',
  EVIDENCE: 'evidence-failure', CAPACITY: 'capacity-exhaustion'
});

export const WORKFLOW_RUNTIME_OPERATIONS = Object.freeze({
  INSPECT: 'inspect-state', PAUSE: 'pause', RESUME: 'resume', SUSPEND: 'suspend', CANCEL: 'cancel',
  RETRY: 'retry-safe-work', REPUBLISH: 'reissue-publication', RECONCILE: 'trigger-reconciliation',
  COMPENSATE: 'start-approved-compensation', TERMINATE: 'terminate', MIGRATE: 'apply-approved-migration'
});

export const WORKFLOW_RUNTIME_QUALITY_ATTRIBUTES = Object.freeze({
  DURABILITY: 'durability', DETERMINISM: 'determinism', CONSISTENCY: 'consistency', RELIABILITY: 'reliability',
  INTEGRITY: 'integrity', RECOVERABILITY: 'recoverability', IDEMPOTENCY: 'idempotency', SCALABILITY: 'scalability',
  SECURITY: 'security', AUDITABILITY: 'auditability', OPERABILITY: 'operability', PORTABILITY: 'portability'
});

export const WORKFLOW_RUNTIME_ARCHITECTURAL_RULES = Object.freeze({
  ADMISSION: 'active-authorized-version-admission', IDENTITY: 'immutable-logical-execution-identity',
  VERSION_BINDING: 'exact-definition-version-binding', DURABLE_STATE: 'authoritative-state-outside-process-memory',
  MONOTONIC_VERSION: 'monotonic-state-versions', DETERMINISTIC: 'deterministic-transitions',
  VALIDATE_BEFORE_MUTATION: 'validate-identity-authority-scope-contract-correlation-state-and-policy',
  ATOMIC_BOUNDARY: 'explicit-state-history-input-and-publication-atomicity', STALE: 'reject-or-reevaluate-stale-transitions',
  DUPLICATES: 'duplicate-input-and-scheduling-harmless', DOMAIN_TRUTH: 'business-truth-in-domain-services',
  RUNTIME_WRITES: 'runtime-only-authoritative-state-writes', INTENT_BEFORE_DISPATCH: 'material-intent-before-dispatch',
  RECONCILE: 'reconcile-uncertain-effects-before-retry', EFFECTIVELY_ONCE: 'effectively-once-control-set',
  QUEUE_NOT_AUTHORITY: 'queue-not-only-workflow-intent-record', DURABLE_WAITS: 'durable-waits-and-timers',
  NO_LONG_LOCKS: 'no-locks-across-external-calls-or-human-waits', HISTORY: 'ordered-attributable-history',
  REPLAY_SAFE: 'replay-does-not-repeat-external-effects-by-default', ISOLATION: 'tenant-and-property-isolation',
  TERMINAL: 'irreversible-terminal-states', COMPLETION: 'authoritative-evidence-before-completed',
  REPAIR: 'restricted-attributable-state-repair', RECOVERY: 'recover-from-persisted-state', NEUTRALITY: 'technology-and-vendor-neutrality'
});

export const WORKFLOW_RUNTIME_ARCHITECTURE_BOUNDARIES = Object.freeze({
  DEFINITION_LIFECYCLE: 'define-workflow-authoring-and-lifecycle-governance',
  WORKER_PROTOCOL: 'define-detailed-queue-and-worker-protocol', ACTIVITIES: 'define-activity-implementation',
  EVENT_INFRASTRUCTURE: 'define-event-broker-infrastructure', HUMAN_EXPERIENCE: 'define-detailed-human-task-experience',
  AGENT_REASONING: 'define-agent-reasoning', DOMAIN_TRANSACTIONS: 'define-domain-service-transactions',
  RETRY_POLICIES: 'define-detailed-retry-and-compensation-policies', API_SDK: 'define-external-api-and-sdk-contracts',
  STATE_STORAGE: 'select-state-storage', QUEUE_BROKER: 'select-queue-or-broker-technology',
  EVENT_SOURCING: 'mandate-event-sourcing', PRODUCT: 'select-workflow-product'
});
