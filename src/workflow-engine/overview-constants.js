export const WORKFLOW_ENGINE_OVERVIEW_ERROR_CODE = 'WORKFLOW_ENGINE_OVERVIEW_INVALID';

export const WORKFLOW_REQUIRED_PROPERTIES = Object.freeze({
  GOVERNED: 'governed', VERSIONED: 'versioned', DURABLE: 'durable', COORDINATED: 'coordinated',
  EXPLICIT: 'explicit', ATTRIBUTABLE: 'attributable'
});

export const NON_WORKFLOW_CAPABILITIES = Object.freeze({
  MODEL_PROMPT: 'model-prompt', CONVERSATION: 'conversation', AGENT_PLAN: 'agent-plan', SYNCHRONOUS_API_CALL: 'synchronous-api-call',
  EVENT: 'event', QUEUE_MESSAGE: 'queue-message', WORKER_PROCESS: 'worker-process', DATABASE_TRANSACTION: 'database-transaction',
  BUSINESS_SERVICE: 'business-service', SCHEDULED_TRIGGER: 'scheduled-trigger', USER_INTERFACE_JOURNEY: 'user-interface-journey',
  SCRIPT: 'script', RUNBOOK: 'runbook'
});

export const WORKFLOW_USE_CRITERIA = Object.freeze({
  DURABLE_STATE: 'durable-state-beyond-one-request', MULTIPLE_STEPS: 'multiple-coordinated-steps',
  LONG_RUNNING: 'long-running-execution', SERVICE_COORDINATION: 'service-to-service-process-coordination',
  ASYNC_CALLBACKS: 'asynchronous-callbacks', EVENT_CORRELATION: 'event-correlation', DURABLE_TIMERS: 'durable-timers-or-deadlines',
  HUMAN_TASKS: 'human-tasks-or-approvals', AGENT_PARTICIPATION: 'agent-participation-within-deterministic-boundaries',
  BOUNDED_RETRY: 'bounded-retry', PARTIAL_FAILURE: 'partial-failure-handling', CANCELLATION: 'cancellation-propagation',
  COMPENSATION: 'compensation', RECONCILIATION: 'reconciliation', PAUSE_RESUME: 'operational-pause-and-resume',
  PROCESS_EVIDENCE: 'process-evidence'
});

export const WORKFLOW_INAPPROPRIATE_CRITERIA = Object.freeze({
  LOCAL_TRANSACTION: 'one-local-transaction-is-sufficient', SYNCHRONOUS_CALL: 'one-synchronous-call-completes-outcome',
  NO_DURABLE_WAIT: 'no-durable-wait-or-recovery', SIMPLE_EVENT_CONSUMER: 'simple-event-consumer-owns-complete-behavior',
  DIRECT_BUSINESS_RULE: 'business-service-can-implement-rule-directly', NO_EXTERNAL_PROCESS_STATE: 'no-process-state-outside-caller'
});

export const WORKFLOW_ENGINE_GOALS = Object.freeze({
  DISCOVERABLE_OWNED: 'discoverable-and-owned-workflows', IDENTIFIABLE: 'identifiable-definitions-and-executions',
  DURABLE_EXECUTION: 'durable-long-running-execution', DETERMINISTIC_TRANSITIONS: 'deterministic-state-transitions',
  IMMUTABLE_VERSION_BINDING: 'immutable-definition-version-binding', DOMAIN_LOGIC_BOUNDARY: 'coordination-without-domain-logic-ownership',
  QUEUE_WORKERS: 'queue-driven-worker-distribution', SAFE_EVENT_CORRELATION: 'safe-event-correlation', DURABLE_TIMERS: 'durable-timers',
  HUMAN_PARTICIPATION: 'authenticated-human-participation', AGENT_PARTICIPATION: 'bounded-agent-participation',
  FAILURE_NORMALIZATION: 'failure-as-normal-condition', SAFE_REPETITION: 'protect-actions-from-unsafe-repetition',
  RECONCILE_EFFECTS: 'reconcile-uncertain-effects', CANCELLATION_COMPENSATION: 'cancellation-and-compensation',
  TENANT_PROPERTY_ISOLATION: 'tenant-and-property-isolation', OPERATIONAL_CONTROL: 'operational-control',
  ATTRIBUTABLE_EVIDENCE: 'attributable-evidence', INDEPENDENT_SCALING: 'independent-workload-scaling',
  NEUTRALITY: 'vendor-and-technology-neutrality'
});

export const WORKFLOW_ENGINE_PRINCIPLES = Object.freeze({
  DURABLE_PROCESS_STATE: 'durable-process-state', DETERMINISTIC_CONTROL: 'deterministic-control', DOMAIN_OWNERSHIP: 'domain-ownership',
  EXPLICIT_VERSION_BINDING: 'explicit-version-binding', QUEUE_DRIVEN_DISTRIBUTION: 'queue-driven-work-distribution',
  FAILURE_AWARE_DESIGN: 'failure-aware-design', EFFECTIVELY_ONCE_OUTCOMES: 'effectively-once-outcomes',
  EVIDENCE_BY_DESIGN: 'evidence-by-design', HUMAN_ACCOUNTABILITY: 'human-accountability',
  BOUNDED_AGENT_PARTICIPATION: 'bounded-agent-participation', ISOLATION_BY_DEFAULT: 'isolation-by-default',
  TECHNOLOGY_INDEPENDENCE: 'technology-independence'
});

export const WORKFLOW_CONCEPTS = Object.freeze({
  DEFINITION: 'workflow-definition', DEFINITION_VERSION: 'workflow-definition-version', EXECUTION: 'workflow-execution',
  STATE: 'state', TRANSITION: 'transition', TASK: 'task', ACTIVITY_ATTEMPT: 'activity-attempt', WORKER: 'worker', QUEUE: 'queue',
  EVENT: 'event', SIGNAL: 'signal', CORRELATION: 'correlation', TIMER: 'timer', SCHEDULE: 'schedule', HUMAN_TASK: 'human-task',
  AGENT_TASK: 'agent-task', CHILD_WORKFLOW: 'child-workflow', SIDE_EFFECT_REFERENCE: 'side-effect-reference',
  RETRY_POLICY: 'retry-policy', COMPENSATION: 'compensation', RECONCILIATION: 'reconciliation', EVIDENCE: 'evidence', OUTCOME: 'outcome'
});

export const WORKFLOW_LOGICAL_PLANES = Object.freeze({
  DEFINITION: 'definition-plane', EXECUTION: 'execution-plane', OPERATIONS_ASSURANCE: 'operations-and-assurance-plane'
});

export const WORKFLOW_ENGINE_CAPABILITIES = Object.freeze({
  REGISTRY: 'workflow-registry', DEFINITION_VALIDATOR: 'definition-validator', ADMISSION_CONTROLLER: 'admission-controller',
  RUNTIME_CONTROLLER: 'runtime-controller', STATE_STORE: 'state-store', TASK_ACTIVITY_SERVICE: 'task-and-activity-service',
  QUEUE_WORKER_CONTROL: 'queue-and-worker-control', EVENT_SIGNAL_SERVICE: 'event-and-signal-service',
  TIMER_SCHEDULE_SERVICE: 'timer-and-schedule-service', HUMAN_TASK_SERVICE: 'human-task-service',
  AGENT_TASK_ADAPTER: 'agent-task-adapter', COMPENSATION_RECONCILIATION: 'compensation-and-reconciliation-service',
  HISTORY_EVIDENCE: 'history-and-evidence-service', OPERATIONS_INTERFACE: 'operations-interface'
});

export const WORKFLOW_ACTORS = Object.freeze({
  HUMAN_INITIATOR: 'human-initiator', SERVICE_INITIATOR: 'service-initiator', EVENT_SOURCE: 'event-source', SCHEDULER: 'scheduler',
  WORKFLOW_OWNER: 'workflow-owner', OPERATIONAL_OWNER: 'operational-owner', BUSINESS_SERVICE: 'business-service',
  PLATFORM_SERVICE: 'platform-service', INTEGRATION_WORKER: 'integration-worker', HUMAN_ASSIGNEE: 'human-assignee',
  AI_AGENT: 'ai-agent', PARENT_WORKFLOW: 'parent-workflow', CHILD_WORKFLOW: 'child-workflow', OPERATOR: 'operator', AUDITOR: 'auditor'
});

export const WORKFLOW_CLASSIFICATIONS = Object.freeze({
  BUSINESS: 'business-workflow', OPERATIONAL: 'operational-workflow', INTEGRATION: 'integration-workflow',
  GOVERNANCE: 'governance-workflow', SECURITY: 'security-workflow', DEVELOPER: 'developer-workflow',
  AGENT_COORDINATION: 'agent-coordination-workflow'
});

export const WORKFLOW_DEFINITION_FIELDS = Object.freeze({
  IDENTIFIER: 'identifier', NAME: 'name', PURPOSE: 'purpose', DOMAIN: 'domain', ACCOUNTABLE_OWNER: 'accountable-owner',
  OPERATIONAL_OWNER: 'operational-owner', CLASSIFICATION: 'classification', TRIGGERS: 'triggers', INITIATING_ACTORS: 'initiating-actors',
  INPUT_CONTRACT: 'input-contract', OUTPUT_CONTRACT: 'output-contract', TENANT_MODEL: 'tenant-model', PROPERTY_MODEL: 'property-model',
  STATE_MODEL: 'state-model', TASKS: 'tasks', ACTIVITIES: 'activities', BRANCHES_JOINS: 'branches-and-joins',
  EVENTS_SIGNALS: 'events-and-signals', TIMERS: 'timers', HUMAN_TASKS: 'human-tasks', AGENT_TASKS: 'agent-tasks',
  SERVICE_INTERACTIONS: 'service-interactions', RETRY_POLICIES: 'retry-policies', TIMEOUT_POLICIES: 'timeout-policies',
  CANCELLATION: 'cancellation-behavior', COMPENSATION: 'compensation-policies', RECONCILIATION: 'reconciliation-behavior',
  COMPLETION: 'completion-criteria', FAILURE_OUTCOMES: 'failure-outcomes', EVIDENCE: 'evidence-requirements',
  SERVICE_COMMITMENTS: 'service-commitments', VERSION: 'version', LIFECYCLE_STATE: 'lifecycle-state'
});

export const WORKFLOW_DEFINITION_LIFECYCLE = Object.freeze({
  PROPOSE: 'propose', DESIGN: 'design', CLASSIFY: 'classify', IMPLEMENT: 'implement', VALIDATE: 'validate', TEST: 'test',
  APPROVE: 'approve', REGISTER: 'register', RELEASE: 'release', ACTIVATE: 'activate', OPERATE: 'operate', IMPROVE: 'improve',
  SUSPEND: 'suspend', DEPRECATE: 'deprecate', RETIRE: 'retire'
});

export const WORKFLOW_EXECUTION_IDENTITY_FIELDS = Object.freeze({
  WORKFLOW_IDENTIFIER: 'workflow-identifier', DEFINITION_VERSION: 'definition-version', EXECUTION_IDENTIFIER: 'execution-identifier',
  INITIATING_ACTOR: 'initiating-actor', REPRESENTED_PRINCIPAL: 'represented-principal', TENANT: 'tenant', PROPERTY: 'property',
  PARENT_WORKFLOW: 'parent-workflow', PARENT_AGENT_EXECUTION: 'parent-agent-execution', BUSINESS_CORRELATION: 'business-correlation',
  IDEMPOTENCY_SCOPE: 'idempotency-scope', CREATION_TIME: 'creation-time', DEADLINE: 'deadline', AUTHORITY_CONTEXT: 'authority-context'
});

export const WORKFLOW_EXECUTION_STATES = Object.freeze({
  REQUESTED: 'requested', ADMITTED: 'admitted', INITIALIZED: 'initialized', RUNNING: 'running', WAITING: 'waiting',
  SUSPENDED: 'suspended', CANCELLING: 'cancelling', COMPENSATING: 'compensating', COMPLETING: 'completing',
  COMPLETED: 'completed', FAILED: 'failed', CANCELLED: 'cancelled', EXPIRED: 'expired', TERMINATED: 'terminated'
});

export const AUTHORITATIVE_WORKFLOW_STATE_FIELDS = Object.freeze({
  DEFINITION_VERSION: 'definition-version', INPUTS: 'inputs', ACTIVE_STATES: 'active-states-or-nodes', BRANCH_STATUS: 'branch-status',
  TASK_STATUS: 'task-status', ACTIVITY_ATTEMPTS: 'activity-attempts', EVENTS_RECEIVED: 'events-received',
  CORRELATION_STATE: 'correlation-state', TIMERS: 'timers', HUMAN_DECISIONS: 'human-decisions', AGENT_RESULTS: 'agent-task-results',
  SERVICE_RESULTS: 'service-result-references', RETRY_STATE: 'retry-state', SIDE_EFFECTS: 'side-effect-references',
  COMPENSATION_STATE: 'compensation-state', LIMITS_CONSUMED: 'limits-consumed', ERRORS: 'errors',
  COMPLETION_EVIDENCE: 'completion-evidence', FINAL_OUTCOME: 'final-outcome'
});

export const WORKFLOW_OPERATION_ACTIONS = Object.freeze({
  SEARCH: 'search', INSPECT: 'inspect', PAUSE: 'pause', RESUME: 'resume', CANCEL: 'cancel', RETRY: 'retry',
  RECONCILE: 'reconcile', TERMINATE: 'terminate', RECOVER: 'recover', SUSPEND_DEFINITION: 'suspend-definition',
  DRAIN_WORKERS: 'drain-workers', REPLAY_EVIDENCE: 'replay-evidence'
});

export const WORKFLOW_QUALITY_ATTRIBUTES = Object.freeze({
  DURABILITY: 'durability', RELIABILITY: 'reliability', CORRECTNESS: 'correctness', DETERMINISM: 'determinism', SECURITY: 'security',
  AUDITABILITY: 'auditability', SCALABILITY: 'scalability', RESILIENCE: 'resilience', INTEROPERABILITY: 'interoperability',
  PORTABILITY: 'portability', MAINTAINABILITY: 'maintainability', TESTABILITY: 'testability', OPERABILITY: 'operability', ISOLATION: 'isolation'
});

export const WORKFLOW_ARCHITECTURAL_RULES = Object.freeze({
  FIRST_CLASS_IDENTITIES: 'first-class-definition-and-execution-identities', OWNERSHIP: 'accountable-and-operational-ownership',
  VERSION_BINDING: 'version-definitions-and-bind-executions', DURABLE_STATE: 'persist-authoritative-workflow-state',
  DETERMINISTIC_TRANSITIONS: 'deterministic-state-transitions', DOMAIN_STATE: 'business-rules-and-state-remain-in-domain-services',
  PUBLIC_CONTRACTS: 'coordinate-through-public-apis-and-events', TASK_ATTEMPT_SEPARATION: 'distinguish-tasks-from-activity-attempts',
  GOVERNED_WORKERS: 'governed-queue-driven-workers', WORKERS_NOT_AUTHORITY: 'workers-do-not-own-workflow-state',
  SCOPE_BEFORE_ACCESS: 'tenant-and-property-scope-before-access', AUTHORITY_BEFORE_ACTION: 'identity-and-authority-before-action',
  VALIDATE_EVENTS: 'validate-event-source-contract-scope-and-correlation', DURABLE_TIMERS: 'durable-and-idempotent-timers',
  HUMAN_DECISIONS: 'authenticated-and-attributable-human-decisions', AGENT_BOUNDARIES: 'arch-014-agent-identity-authority-limits-validation',
  BOUNDED_RESOURCES: 'bounded-retries-time-fanout-loops-and-resources', EFFECTIVELY_ONCE: 'effectively-once-domain-outcomes',
  RECONCILE_BEFORE_REPEAT: 'reconcile-before-repeating-material-actions', DOMAIN_COMPENSATION: 'domain-defined-compensation-only',
  CONTROLLED_CANCELLATION: 'controlled-cancellation', EXPLICIT_COMPLETION: 'explicit-completion-and-termination',
  EVIDENCE: 'operational-and-governance-evidence', SAFE_OPERATIONS: 'safe-pause-resume-recovery-suspension-and-termination',
  ISOLATION: 'tenant-isolation-across-workflow-resources', NEUTRALITY: 'vendor-and-technology-neutrality'
});

export const WORKFLOW_ARCHITECTURE_BOUNDARIES = Object.freeze({
  DETAILED_SCHEMA: 'define-detailed-workflow-definition-schema', COMPLETE_STATE_MACHINE: 'define-complete-runtime-state-machine',
  WORKER_PROTOCOL: 'define-worker-protocol-fields', EVERY_EVENT_TIMER: 'define-every-event-and-timer-contract',
  HUMAN_UI: 'define-human-task-user-interface', AGENT_INTERNALS: 'define-agent-runtime-internals',
  COMPENSATION_SEMANTICS: 'define-business-service-compensation-semantics', SECURITY_DETAILS: 'define-detailed-security-controls',
  OPERATIONAL_PROCEDURES: 'define-detailed-operational-procedures', SELECT_PRODUCT: 'select-workflow-product',
  SELECT_INFRASTRUCTURE: 'select-queue-event-database-scheduler-or-cloud', REPLACE_BUSINESS_SERVICES: 'replace-business-services',
  REPLACE_ORCHESTRATOR: 'replace-ai-orchestrator', REPLACE_AGENT_FRAMEWORK: 'replace-ai-agent-framework',
  REPLACE_HUMAN_ACCOUNTABILITY: 'replace-human-accountability'
});

export const FUTURE_WORKFLOW_CAPABILITIES = Object.freeze({
  VISUAL_TEXT_AUTHORING: 'visual-and-text-definition-authoring', ARCHITECTURE_VALIDATION: 'executable-architecture-validation',
  PROCESS_MINING: 'process-mining', CONFORMANCE: 'conformance-checking', PREDICTIVE_DELAYS: 'predictive-delay-detection',
  ADAPTIVE_CAPACITY: 'adaptive-capacity-routing', POLICY_PATHS: 'policy-aware-dynamic-paths',
  AUTOMATED_RECONCILIATION: 'automated-reconciliation', VERIFIED_COMPENSATION: 'verified-compensation-planning',
  CROSS_PROPERTY: 'cross-property-process-coordination', CROSS_TENANT_AGGREGATION: 'privacy-preserving-cross-tenant-aggregation',
  DIGITAL_TWINS: 'workflow-simulation-and-digital-twins', FORMAL_VERIFICATION: 'formal-state-machine-verification',
  AI_ASSISTED_DESIGN: 'ai-assisted-workflow-design', GOVERNED_OPTIMIZATION: 'governed-workflow-optimization',
  AUTONOMOUS_RECOVERY: 'autonomous-operational-recovery'
});