export const AGENT_RUNTIME_EXECUTION_ERROR_CODE = 'AGENT_RUNTIME_EXECUTION_INVALID';

export const RUNTIME_ADMISSION_INPUTS = Object.freeze({
  REQUESTED_AGENT: 'requested-agent',
  REQUESTED_GOAL: 'requested-goal',
  INITIATING_ACTOR: 'initiating-actor',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  TENANT: 'tenant',
  PROPERTY: 'property',
  ENVIRONMENT: 'environment',
  INITIAL_CONTEXT_REFERENCES: 'initial-context-references',
  REQUESTED_AUTONOMY: 'requested-autonomy',
  REQUESTED_DEADLINE: 'requested-deadline',
  REQUESTED_LIMITS: 'requested-limits',
  TRIGGERING_EVENT: 'triggering-event',
  PARENT_WORKFLOW: 'parent-workflow',
  PARENT_AGENT_EXECUTION: 'parent-agent-execution',
  REQUIRED_RESPONSE_CHANNEL: 'required-response-channel'
});

export const RUNTIME_ADMISSION_CHECKS = Object.freeze({
  AUTHENTICATED_INITIATOR: 'initiating-actor-is-authenticated',
  AGENT_EXISTS: 'requested-agent-exists',
  VERSION_APPROVED: 'selected-version-is-approved-for-environment',
  LIFECYCLE_PERMITS_EXECUTION: 'agent-lifecycle-state-permits-execution',
  SUPPORTED_GOAL: 'goal-matches-supported-purpose',
  NOT_PROHIBITED_GOAL: 'goal-is-not-prohibited',
  VALID_TENANT_SCOPE: 'tenant-scope-is-valid',
  VALID_PROPERTY_SCOPE: 'property-scope-is-valid-where-required',
  PERMITTED_REPRESENTED_PRINCIPAL: 'represented-principal-is-permitted',
  HUMAN_SPONSORSHIP: 'required-human-sponsorship-exists',
  INITIAL_AUTHORITY: 'initial-authority-can-be-granted',
  POLICY_ALLOWS_EXECUTION: 'required-policies-allow-execution',
  CAPACITY_QUOTAS: 'capacity-and-quotas-are-available',
  DEPENDENCY_READINESS: 'dependencies-satisfy-readiness-requirements',
  NO_SUSPENSION_STOP: 'no-suspension-or-emergency-stop-applies'
});

export const RUNTIME_ADMISSION_OUTCOMES = Object.freeze({
  ALLOW: 'allow',
  DENY: 'deny',
  DEFER: 'defer',
  REQUIRE_DECISION: 'require-decision'
});

export const RUNTIME_IDENTITY_BINDINGS = Object.freeze({
  AGENT_DEFINITION: 'agent-definition-identity',
  AGENT_VERSION: 'agent-version-identity',
  EXECUTION: 'execution-identity',
  INITIATING_ACTOR: 'initiating-actor',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  HUMAN_SPONSOR: 'human-sponsor',
  TENANT: 'tenant',
  PROPERTY: 'property',
  ENVIRONMENT: 'environment',
  GOAL: 'goal',
  AUTHORITY_GRANT: 'authority-grant',
  AUTONOMY_LEVEL: 'autonomy-level',
  POLICY_VERSION: 'policy-version',
  CONFIGURATION_VERSION: 'configuration-version',
  CREATION_TIME: 'creation-time',
  EXPIRATION: 'expiration',
  CORRELATION_IDENTIFIERS: 'correlation-identifiers'
});

export const RUNTIME_COMPONENTS = Object.freeze({
  ADMISSION_CONTROLLER: 'admission-controller',
  EXECUTION_MANAGER: 'execution-manager',
  STATE_STORE: 'state-store',
  SCHEDULER: 'scheduler',
  STEP_CONTROLLER: 'step-controller',
  TASK_MANAGER: 'task-manager',
  LIMIT_MANAGER: 'limit-manager',
  CHECKPOINT_MANAGER: 'checkpoint-manager',
  WAIT_MANAGER: 'wait-manager',
  CANCELLATION_CONTROLLER: 'cancellation-controller',
  RECONCILIATION_CONTROLLER: 'reconciliation-controller',
  EVIDENCE_RECORDER: 'evidence-recorder'
});

export const EXECUTION_STATES = Object.freeze({
  REQUESTED: 'requested',
  ADMITTED: 'admitted',
  INITIALIZING: 'initializing',
  READY: 'ready',
  RUNNING: 'running',
  WAITING_FOR_INPUT: 'waiting-for-input',
  WAITING_FOR_APPROVAL: 'waiting-for-approval',
  WAITING_FOR_DEPENDENCY: 'waiting-for-dependency',
  WAITING_FOR_EVENT: 'waiting-for-event',
  PAUSED: 'paused',
  SUSPENDING: 'suspending',
  SUSPENDED: 'suspended',
  RESUMING: 'resuming',
  CANCELLING: 'cancelling',
  COMPENSATING: 'compensating',
  COMPLETING: 'completing',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
  EXPIRED: 'expired',
  TERMINATED: 'terminated',
  ESCALATED: 'escalated'
});

export const EXECUTION_STATE_CATEGORIES = Object.freeze({
  PRE_EXECUTION: 'pre-execution-states',
  ACTIVE: 'active-states',
  WAITING: 'waiting-states',
  CLOSING: 'closing-states',
  TERMINAL: 'terminal-states'
});

export const STATE_TRANSITION_CONTRACT_FIELDS = Object.freeze({
  CURRENT_STATE: 'current-state',
  REQUESTED_NEXT_STATE: 'requested-next-state',
  TRIGGER: 'trigger',
  REQUESTING_IDENTITY: 'requesting-identity',
  PRECONDITIONS: 'preconditions',
  AUTHORITY: 'authority',
  POLICY_DECISION: 'policy-decision',
  STATE_MUTATION: 'state-mutation',
  SIDE_EFFECTS: 'side-effects',
  EVIDENCE: 'evidence',
  TIMEOUT: 'timeout',
  FAILURE_BEHAVIOR: 'failure-behavior',
  PERMITTED_FOLLOWING_STATES: 'permitted-following-states'
});

export const CORE_STATE_TRANSITIONS = Object.freeze({
  REQUESTED_TO_ADMITTED: 'requested-to-admitted',
  ADMITTED_TO_INITIALIZING: 'admitted-to-initializing',
  INITIALIZING_TO_READY: 'initializing-to-ready',
  READY_TO_RUNNING: 'ready-to-running',
  RUNNING_TO_WAITING: 'running-to-waiting',
  WAITING_TO_RESUMING: 'waiting-to-resuming',
  RESUMING_TO_RUNNING: 'resuming-to-running',
  RUNNING_TO_COMPLETING: 'running-to-completing',
  COMPLETING_TO_COMPLETED: 'completing-to-completed',
  NON_TERMINAL_TO_CANCELLING: 'any-non-terminal-to-cancelling',
  CANCELLING_TO_CANCELLED: 'cancelling-to-cancelled',
  NON_TERMINAL_TO_SUSPENDED: 'any-non-terminal-to-suspended',
  RUNNING_TO_FAILED: 'running-to-failed',
  NON_TERMINAL_TO_EXPIRED: 'any-non-terminal-to-expired'
});

export const INITIALIZATION_REQUIREMENTS = Object.freeze({
  EXECUTION_STATE: 'create-authoritative-execution-state',
  IDENTITY_BINDING: 'persist-identity-binding',
  GOAL_CONSTRAINTS: 'persist-goal-and-constraints',
  AUTHORITY_POLICY: 'record-authority-and-policy',
  LIMIT_COUNTERS: 'establish-limit-counters',
  CONFIGURATION: 'resolve-required-configuration',
  CONTEXT_REFERENCES: 'establish-context-references',
  CHECKPOINT_POLICY: 'establish-checkpoint-policy',
  CANCELLATION_POLICY: 'establish-cancellation-policy',
  RESPONSE_CHANNELS: 'establish-response-and-notification-channels',
  DEPENDENCIES: 'verify-required-dependencies',
  INITIAL_EVIDENCE: 'produce-initial-evidence-record'
});

export const STEP_BOUNDARY_OPERATIONS = Object.freeze({
  LOAD_STATE: 'load-authoritative-state',
  CONFIRM_ELIGIBILITY: 'confirm-execution-eligibility',
  REVALIDATE_AUTHORITY: 'revalidate-required-authority',
  RESERVE_LIMITS: 'reserve-limits',
  ASSEMBLE_CONTEXT: 'assemble-authorized-context',
  EXECUTE_OPERATION: 'execute-one-bounded-reasoning-or-action-operation',
  VALIDATE_RESULT: 'validate-result',
  RECORD_EVIDENCE: 'record-evidence',
  COMMIT_STATE: 'commit-state-changes',
  RELEASE_RECONCILE_RESOURCES: 'release-or-reconcile-reserved-resources'
});

export const TASK_STATES = Object.freeze({
  PROPOSED: 'proposed',
  READY: 'ready',
  ASSIGNED: 'assigned',
  RUNNING: 'running',
  WAITING: 'waiting',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
  SKIPPED: 'skipped',
  SUPERSEDED: 'superseded'
});

export const TASK_FIELDS = Object.freeze({
  TASK_IDENTIFIER: 'task-identifier',
  GOAL_RELATIONSHIP: 'goal-relationship',
  PLAN_VERSION: 'plan-version',
  DESCRIPTION: 'description',
  OWNER: 'owner',
  DEPENDENCIES: 'dependencies',
  INPUTS: 'inputs',
  EXPECTED_OUTPUT: 'expected-output',
  COMPLETION_CRITERIA: 'completion-criteria',
  AUTHORITY: 'authority',
  LIMITS: 'limits',
  RETRY_POLICY: 'retry-policy',
  DEADLINE: 'deadline',
  EVIDENCE_REQUIREMENTS: 'evidence-requirements'
});

export const EXECUTION_LOOP_STEPS = Object.freeze({
  LOAD_STATE: 'load-authoritative-state',
  SELECT_TASK: 'select-eligible-task',
  ASSEMBLE_CONTEXT: 'assemble-authorized-context',
  REASON_OR_ACT: 'reason-or-act',
  VALIDATE_RESULT: 'validate-result',
  COMMIT_EVIDENCE_STATE: 'commit-evidence-and-state',
  DECIDE_NEXT_STATE: 'continue-wait-replan-complete-escalate-or-stop'
});

export const SCHEDULING_FACTORS = Object.freeze({
  EXECUTION_PRIORITY: 'execution-priority',
  TENANT_FAIRNESS: 'tenant-fairness',
  PROPERTY_URGENCY: 'property-urgency',
  DEADLINE: 'deadline',
  SERVICE_COMMITMENTS: 'service-commitments',
  TASK_READINESS: 'task-readiness',
  REQUIRED_CAPABILITY: 'required-capability',
  MODEL_CAPACITY: 'model-capacity',
  TOOL_CAPACITY: 'tool-capacity',
  COST_BUDGET: 'cost-budget',
  CONCURRENCY_LIMITS: 'concurrency-limits',
  DEPENDENCY_HEALTH: 'dependency-health',
  REGIONAL_CONSTRAINTS: 'regional-constraints',
  DATA_RESIDENCY_CONSTRAINTS: 'data-residency-constraints'
});

export const RUNTIME_ISOLATION_DIMENSIONS = Object.freeze({
  IDENTITY: 'identity',
  STATE: 'state',
  CONTEXT: 'context',
  TENANT: 'tenant',
  PROPERTY: 'property',
  CREDENTIALS: 'credentials',
  TOOLS: 'tools',
  LIMITS: 'limits',
  TELEMETRY: 'telemetry',
  EVIDENCE: 'evidence'
});

export const CONCURRENCY_CONTROLS = Object.freeze({
  OPTIMISTIC_VERSIONING: 'optimistic-versioning',
  COMPARE_AND_SET: 'compare-and-set',
  LEASES: 'leases',
  PARTITION_OWNERSHIP: 'partition-ownership',
  SERIALIZED_COMMAND_PROCESSING: 'serialized-command-processing',
  WORKFLOW_COORDINATION: 'workflow-coordination'
});

export const EXECUTION_LIMIT_TYPES = Object.freeze({
  WALL_CLOCK_DURATION: 'wall-clock-duration',
  ACTIVE_COMPUTE_TIME: 'active-compute-time',
  STEP_COUNT: 'step-count',
  TASK_COUNT: 'task-count',
  MODEL_CALLS: 'model-calls',
  INPUT_TOKENS: 'input-tokens',
  OUTPUT_TOKENS: 'output-tokens',
  TOOL_CALLS: 'tool-calls',
  EXTERNAL_ACTIONS: 'external-actions',
  RETRY_COUNT: 'retry-count',
  DELEGATION_DEPTH: 'delegation-depth',
  DELEGATION_COUNT: 'delegation-count',
  PARALLELISM: 'parallelism',
  MEMORY_USE: 'memory-use',
  STORAGE: 'storage',
  NETWORK_ACTIVITY: 'network-activity',
  FINANCIAL_COST: 'financial-cost'
});

export const LIMIT_ENFORCEMENT_ACTIONS = Object.freeze({
  RESERVATION: 'reservation-before-work',
  CONSUMPTION_RECORDING: 'consumption-recording',
  THRESHOLD_WARNINGS: 'threshold-warnings',
  HARD_STOP: 'hard-stop',
  HUMAN_EXTENSION: 'human-extension',
  POLICY_EXTENSION: 'policy-extension',
  REDUCED_CAPABILITY: 'reduced-capability-operation',
  EVIDENCE: 'evidence'
});

export const CONTEXT_CYCLE_STEPS = Object.freeze({
  IDENTIFY_PURPOSE: 'identify-step-purpose',
  DETERMINE_CATEGORIES: 'determine-required-context-categories',
  APPLY_SCOPE: 'apply-identity-and-tenant-scope',
  RETRIEVE_STATE: 'retrieve-current-state',
  RETRIEVE_KNOWLEDGE_MEMORY: 'retrieve-authorized-knowledge-and-memory',
  APPLY_LABELS: 'apply-trust-and-provenance-labels',
  MINIMIZE_CONTENT: 'minimize-content',
  PROVIDE_CONTEXT: 'provide-context-to-reasoning-capability',
  DISPOSE_OR_RETAIN: 'dispose-or-retain-according-to-policy'
});

export const SIDE_EFFECT_CLASSIFICATIONS = Object.freeze({
  READ_ONLY: 'read-only',
  NO_EXTERNAL_STATE_CHANGE: 'no-external-state-change',
  REVERSIBLE_STATE_CHANGE: 'reversible-state-change',
  COMPENSATABLE_STATE_CHANGE: 'compensatable-state-change',
  IRREVERSIBLE_MATERIAL_STATE_CHANGE: 'irreversible-material-state-change',
  UNKNOWN_EFFECT: 'unknown-effect'
});

export const SIDE_EFFECT_LEDGER_FIELDS = Object.freeze({
  ACTION_IDENTIFIER: 'action-identifier',
  EXECUTION: 'execution',
  STEP: 'step',
  TOOL: 'tool',
  TARGET: 'target',
  TENANT: 'tenant',
  PROPERTY: 'property',
  INPUT_REFERENCE: 'input-reference',
  IDEMPOTENCY_KEY: 'idempotency-key',
  REQUESTED_TIME: 'requested-time',
  ACKNOWLEDGMENT: 'acknowledgment',
  OBSERVED_OUTCOME: 'observed-outcome',
  RECONCILIATION_STATE: 'reconciliation-state',
  COMPENSATION_REFERENCE: 'compensation-reference'
});

export const CHECKPOINT_CONTENT_FIELDS = Object.freeze({
  EXECUTION_STATE_VERSION: 'execution-state-version',
  ACTIVE_PLAN_VERSION: 'active-plan-version',
  TASK_STATES: 'task-states',
  CURRENT_STEP_BOUNDARY: 'current-step-boundary',
  COMPLETED_ACTIONS: 'completed-actions',
  PENDING_ACTIONS: 'pending-actions',
  SIDE_EFFECT_LEDGER: 'side-effect-ledger',
  HUMAN_DECISIONS: 'human-decisions',
  DELEGATIONS: 'delegations',
  LIMITS_CONSUMED: 'limits-consumed',
  AUTHORITY_REFERENCE: 'authority-reference',
  CONTEXT_REFERENCES: 'context-references',
  WAIT_CONDITIONS: 'wait-conditions',
  ERROR_STATE: 'error-state'
});

export const CHECKPOINT_TRIGGERS = Object.freeze({
  BEFORE_MATERIAL_ACTION: 'before-material-action',
  AFTER_MATERIAL_ACTION: 'after-material-action',
  AFTER_TASK_COMPLETION: 'after-task-completion',
  BEFORE_LONG_WAIT: 'before-long-wait',
  BEFORE_DELEGATION: 'before-delegation',
  AFTER_PLAN_REVISION: 'after-plan-revision',
  CONTROLLED_INTERVALS: 'at-controlled-intervals',
  BEFORE_SHUTDOWN: 'before-shutdown',
  BEFORE_MIGRATION: 'before-migration'
});

export const WAIT_TYPES = Object.freeze({
  HUMAN_INPUT: 'human-input',
  HUMAN_APPROVAL: 'human-approval',
  EXTERNAL_EVENT: 'external-event',
  WORKFLOW_CALLBACK: 'workflow-callback',
  TOOL_COMPLETION: 'tool-completion',
  DEPENDENCY_RECOVERY: 'dependency-recovery',
  SCHEDULED_TIME: 'scheduled-time',
  CAPACITY: 'capacity',
  POLICY_DECISION: 'policy-decision'
});

export const CANCELLATION_STEPS = Object.freeze({
  AUTHENTICATE_REQUESTER: 'authenticate-requester',
  VALIDATE_AUTHORITY: 'validate-cancellation-authority',
  MARK_INTENT: 'mark-cancellation-intent',
  STOP_SCHEDULING: 'stop-scheduling-new-steps',
  SIGNAL_ACTIVE_WORK: 'signal-active-work',
  RECONCILE_ACTIONS: 'reconcile-active-actions',
  COMPENSATE_REQUIRED: 'compensate-where-required',
  FINALIZE_EVIDENCE: 'finalize-evidence',
  ENTER_TERMINAL_STATE: 'enter-cancelled-or-appropriate-terminal-state'
});

export const FAILURE_CLASSIFICATIONS = Object.freeze({
  ADMISSION_FAILURE: 'admission-failure',
  INITIALIZATION_FAILURE: 'initialization-failure',
  IDENTITY_FAILURE: 'identity-failure',
  AUTHORITY_FAILURE: 'authority-failure',
  POLICY_FAILURE: 'policy-failure',
  STATE_CONFLICT: 'state-conflict',
  SCHEDULER_FAILURE: 'scheduler-failure',
  MODEL_FAILURE: 'model-failure',
  CONTEXT_FAILURE: 'context-failure',
  TOOL_FAILURE: 'tool-failure',
  VALIDATION_FAILURE: 'validation-failure',
  DELEGATION_FAILURE: 'delegation-failure',
  WAIT_TIMEOUT: 'wait-timeout',
  RESOURCE_EXHAUSTION: 'resource-exhaustion',
  CANCELLATION_FAILURE: 'cancellation-failure',
  RECONCILIATION_FAILURE: 'reconciliation-failure',
  EVIDENCE_FAILURE: 'evidence-failure',
  DEPENDENCY_FAILURE: 'dependency-failure'
});

export const RECOVERY_OPTIONS = Object.freeze({
  RETRY_SAFE_STEP: 'retry-safe-step',
  RESUME_FROM_CHECKPOINT: 'resume-from-checkpoint',
  RECONCILE_EXTERNAL_STATE: 'reconcile-external-state',
  APPROVED_ALTERNATIVE: 'select-approved-alternative',
  REPLAN: 'replan',
  REDUCE_SCOPE: 'reduce-scope',
  REQUEST_HUMAN_INPUT: 'request-human-input',
  REQUEST_APPROVAL: 'request-approval',
  DELEGATE_RECOVERY: 'delegate-recovery',
  INITIATE_COMPENSATION: 'initiate-compensation',
  ESCALATE: 'escalate',
  TERMINATE_SAFELY: 'terminate-safely'
});

export const COMPLETION_VALIDATION_CHECKS = Object.freeze({
  REQUIRED_TASKS_COMPLETE: 'required-tasks-are-complete',
  COMPLETION_CRITERIA: 'completion-criteria-are-satisfied',
  AUTHORITATIVE_BUSINESS_STATE: 'required-business-state-is-authoritative',
  REQUIRED_APPROVALS: 'required-approvals-exist',
  MATERIAL_ACTIONS_RECONCILED: 'material-actions-are-reconciled',
  NO_MANDATORY_TASK_UNRESOLVED: 'no-mandatory-task-is-unresolved',
  REQUIRED_EVIDENCE: 'required-evidence-exists',
  RESPONSE_AVAILABLE: 'required-response-can-be-produced',
  NO_OVERRIDING_STOP_FAILURE: 'no-stop-or-failure-condition-overrides-completion'
});

export const CLOSURE_STEPS = Object.freeze({
  SET_TERMINAL_STATE: 'set-terminal-state',
  PERSIST_FINAL_VERSION: 'persist-final-state-version',
  RECORD_REASON: 'record-stop-or-completion-reason',
  FINALIZE_RECONCILIATION: 'finalize-side-effect-reconciliation',
  RELEASE_RESOURCES: 'release-runtime-resources',
  REVOKE_CREDENTIALS: 'revoke-execution-credentials',
  CLOSE_DELEGATIONS: 'close-delegations',
  NOTIFY_PARTICIPANTS: 'notify-required-participants',
  EMIT_EVENTS: 'emit-lifecycle-events',
  FINALIZE_EVIDENCE: 'finalize-evidence',
  APPLY_RETENTION: 'apply-retention-policy',
  TRIGGER_EVALUATION: 'trigger-evaluation'
});

export const RUNTIME_EVENTS = Object.freeze({
  ADMISSION: 'admission',
  INITIALIZATION: 'initialization',
  STATE_TRANSITION: 'state-transition',
  TASK_TRANSITION: 'task-transition',
  STEP_COMPLETION: 'step-completion',
  TOOL_ACTION: 'tool-action',
  DELEGATION: 'delegation',
  HUMAN_DECISION: 'human-decision',
  WAIT: 'wait',
  RESUME: 'resume',
  LIMIT_WARNING: 'limit-warning',
  SUSPENSION: 'suspension',
  CANCELLATION: 'cancellation',
  FAILURE: 'failure',
  RECONCILIATION: 'reconciliation',
  COMPLETION: 'completion',
  CLOSURE: 'closure'
});

export const RUNTIME_OBSERVABILITY_SIGNALS = Object.freeze({
  ADMISSION_RATE: 'admission-rate',
  ADMISSION_DENIAL: 'admission-denial',
  EXECUTION_COUNT_BY_STATE: 'execution-count-by-state',
  QUEUE_DEPTH: 'queue-depth',
  SCHEDULING_DELAY: 'scheduling-delay',
  STEP_LATENCY: 'step-latency',
  TASK_LATENCY: 'task-latency',
  MODEL_LATENCY: 'model-latency',
  TOOL_LATENCY: 'tool-latency',
  WAIT_DURATION: 'wait-duration',
  RETRY_COUNT: 'retry-count',
  LIMIT_CONSUMPTION: 'limit-consumption',
  CANCELLATION_LATENCY: 'cancellation-latency',
  CHECKPOINT_SUCCESS: 'checkpoint-success',
  RESUME_SUCCESS: 'resume-success',
  RECONCILIATION_BACKLOG: 'reconciliation-backlog',
  COMPLETION_RATE: 'completion-rate',
  FAILURE_RATE: 'failure-rate',
  TENANT_PROPERTY_SIGNALS: 'tenant-and-property-service-signals',
  RESOURCE_COST: 'resource-cost'
});

export const RUNTIME_EVIDENCE_FIELDS = Object.freeze({
  ADMISSION_DECISION: 'admission-decision',
  IDENTITY_BINDING: 'identity-binding',
  INITIAL_AUTHORITY: 'initial-authority',
  STATE_TRANSITIONS: 'state-transitions',
  PLAN_VERSIONS: 'plan-versions',
  TASK_TRANSITIONS: 'task-transitions',
  STEP_RESULTS: 'step-results',
  TOOL_ACTIONS: 'tool-actions',
  HUMAN_DECISIONS: 'human-decisions',
  DELEGATIONS: 'delegations',
  CHECKPOINTS: 'checkpoints',
  LIMIT_CONSUMPTION: 'limit-consumption',
  RETRIES: 'retries',
  RECONCILIATION: 'reconciliation',
  CANCELLATION: 'cancellation',
  FAILURE: 'failure',
  COMPLETION_VALIDATION: 'completion-validation',
  CLOSURE: 'closure'
});

export const RUNTIME_QUALITY_ATTRIBUTES = Object.freeze({
  DETERMINISM: 'determinism',
  RELIABILITY: 'reliability',
  DURABILITY: 'durability',
  ISOLATION: 'isolation',
  SCALABILITY: 'scalability',
  RESILIENCE: 'resilience',
  OBSERVABILITY: 'observability',
  AUDITABILITY: 'auditability',
  PORTABILITY: 'portability',
  EFFICIENCY: 'efficiency'
});

export const RUNTIME_ARCHITECTURAL_RULES = Object.freeze({
  ADMIT_BEFORE_STATE: 'admit-executions-before-creating-material-state',
  APPROVED_VERSION: 'bind-every-execution-to-an-approved-agent-version',
  ESTABLISH_SCOPE_AUTHORITY: 'establish-identity-tenant-property-goal-and-authority-before-work',
  STATE_MACHINE_OUTSIDE_MODEL: 'keep-execution-state-machine-outside-model-control',
  AUTHORITATIVE_STATE_STORE: 'maintain-authoritative-external-state-store',
  ENFORCEABLE_TRANSITIONS: 'use-explicit-and-enforceable-state-transitions',
  IDEMPOTENT_ATTRIBUTABLE_TRANSITIONS: 'make-transitions-idempotent-and-attributable',
  BOUNDED_STEPS: 'execute-bounded-steps',
  VALIDATE_BEFORE_ADVANCE: 'validate-results-before-advancing-state',
  APPLY_LIMITS: 'apply-time-cost-step-tool-retry-delegation-and-concurrency-limits',
  TENANT_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  CREDENTIALS_OUT_OF_CONTEXT: 'prevent-credentials-from-entering-model-context',
  IDEMPOTENCY_RECONCILIATION: 'use-idempotency-and-reconciliation-for-external-actions',
  SIDE_EFFECT_LEDGER: 'maintain-side-effect-ledger-for-material-actions',
  CHECKPOINTS: 'create-checkpoints-appropriate-to-recovery-needs',
  REVALIDATE_AUTHORITY: 'revalidate-authority-on-resume-and-at-sensitive-boundaries',
  STOP_CONTROLS: 'support-pause-suspension-cancellation-expiration-and-termination',
  NO_BLIND_MATERIAL_RETRY: 'avoid-blind-retries-of-material-actions',
  BUSINESS_COMPENSATION: 'use-business-service-compensation-rather-than-invented-reversal',
  VERIFY_COMPLETION: 'verify-completion-independently-of-model-assertion',
  REVOKE_ON_CLOSURE: 'revoke-execution-credentials-at-closure',
  PRODUCE_EVIDENCE: 'produce-operational-and-governance-evidence',
  WORKFLOW_FOR_DURABILITY: 'use-workflow-engine-for-durable-deterministic-process-semantics',
  VENDOR_MODEL_NEUTRAL: 'remain-vendor-and-model-neutral'
});

export const RUNTIME_ARCHITECTURE_BOUNDARIES = Object.freeze({
  REASONING_ALGORITHMS: 'reasoning-algorithms',
  PLANNING_SEMANTICS: 'detailed-planning-semantics',
  TOOL_CONTRACTS: 'individual-tool-contracts',
  WORKFLOW_INTERNALS: 'workflow-engine-internals',
  KNOWLEDGE_MEMORY_INTERNALS: 'knowledge-and-memory-internals',
  MODEL_PROVIDER_IMPLEMENTATION: 'model-provider-implementation',
  BUSINESS_COMPENSATION_RULES: 'business-service-compensation-rules',
  PRODUCT_SELECTION: 'runtime-scheduler-queue-or-state-store-products'
});
