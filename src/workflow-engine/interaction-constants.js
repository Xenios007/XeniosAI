export const WORKFLOW_INTERACTION_ERROR_CODE = 'WORKFLOW_INTERACTION_INVALID';

export const WORKFLOW_INTERACTION_TYPES = Object.freeze({
  EVENT: 'event', SIGNAL: 'signal', COMMAND: 'command', CALLBACK: 'callback',
  TIMER: 'timer', HUMAN_DECISION: 'human-decision', AGENT_RESULT: 'agent-result'
});
export const WORKFLOW_EVENT_CONTRACT_FIELDS = Object.freeze({
  TYPE: 'event-type', VERSION: 'contract-version', MEANING: 'business-meaning', SOURCE: 'source-identity',
  IDENTITY: 'event-identity', OCCURRED: 'occurrence-time', PUBLISHED: 'publication-time', TENANT: 'tenant',
  PROPERTY: 'property', SUBJECT: 'subject', CORRELATION: 'business-correlation', CAUSATION: 'causal-reference',
  PAYLOAD: 'payload-schema', CLASSIFICATION: 'data-classification', TRUST: 'trust-classification',
  ORDERING: 'ordering-semantics', REPLAY: 'replay-semantics', RETENTION: 'retention', COMPATIBILITY: 'compatibility'
});
export const WORKFLOW_EVENT_ACCEPTANCE_OUTCOMES = Object.freeze({
  APPLIED: 'applied', PENDING: 'accepted-and-pending', UNMATCHED: 'unmatched', DUPLICATE: 'duplicate',
  STALE: 'stale', REJECTED: 'rejected', QUARANTINED: 'quarantined'
});
export const WORKFLOW_EVENT_WAIT_FIELDS = Object.freeze({
  IDENTITY: 'wait-identity', EXECUTION: 'workflow-execution', DEFINITION: 'definition-version',
  STATE: 'expected-workflow-state', TYPE: 'expected-event-type', VERSIONS: 'supported-contract-versions',
  SOURCE: 'expected-source', TENANT: 'tenant', PROPERTY: 'property', SUBJECT: 'subject',
  CORRELATION: 'correlation-rule', CREATED: 'creation-time', EARLIEST: 'earliest-acceptance',
  EXPIRATION: 'expiration', DUPLICATE: 'duplicate-behavior', REPLAY: 'replay-behavior',
  RESUME: 'resume-transition', CANCELLATION: 'cancellation-behavior'
});
export const WORKFLOW_CORRELATION_CARDINALITIES = Object.freeze({
  EXACTLY_ONE: 'exactly-one-workflow', AT_MOST_ONE: 'at-most-one-workflow', MULTIPLE: 'multiple-workflows',
  QUORUM: 'quorum-of-waits', BROADCAST: 'broadcast-subscription'
});
export const WORKFLOW_EVENT_ARRIVAL_POLICIES = Object.freeze({
  EARLY: 'early-event', LATE: 'late-event', UNMATCHED: 'unmatched-event', OUT_OF_ORDER: 'out-of-order-event',
  DUPLICATE: 'duplicate-event', REPLAY: 'replayed-event', CORRECTION: 'correcting-or-superseding-event'
});
export const WORKFLOW_TIMER_TYPES = Object.freeze({
  DELAY: 'delay', DEADLINE: 'deadline', REMINDER: 'reminder', ESCALATION: 'escalation-timer',
  EXPIRATION: 'expiration-timer', RECURRING: 'recurring-schedule', BUSINESS_CALENDAR: 'business-calendar-timer'
});
export const WORKFLOW_TIMER_FIELDS = Object.freeze({
  IDENTITY: 'timer-identity', EXECUTION: 'workflow-execution', DEFINITION: 'definition-version',
  TIMER_DEFINITION: 'timer-definition-identity', TYPE: 'timer-type', TRANSITION: 'creation-transition',
  REFERENCE: 'reference-time', SCHEDULED: 'scheduled-time', TIME_ZONE: 'time-zone',
  CALENDAR: 'calendar-version', SCOPE: 'tenant-and-property', STATE: 'expected-state', PRIORITY: 'priority',
  CURRENT: 'current-state', ATTEMPTS: 'firing-attempts', FIRING: 'firing-identity',
  CANCELLATION: 'cancellation', EXPIRATION: 'expiration-behavior', EVIDENCE: 'evidence'
});
export const WORKFLOW_TIMER_MISFIRE_POLICIES = Object.freeze({
  FIRE_NOW: 'fire-immediately', SKIP: 'skip', FIRE_ONCE: 'fire-once-for-missed-occurrences',
  BOUNDED_CATCH_UP: 'catch-up-bounded-occurrences', RESCHEDULE: 'reschedule-from-current-time',
  ESCALATE: 'escalate', FAIL: 'fail'
});
export const WORKFLOW_HUMAN_TASK_STATES = Object.freeze({
  CREATED: 'created', UNASSIGNED: 'unassigned', OFFERED: 'offered', CLAIMED: 'claimed', ASSIGNED: 'assigned',
  IN_PROGRESS: 'in-progress', CLARIFICATION: 'awaiting-clarification', SUBMITTED: 'submitted',
  VALIDATING: 'validating', COMPLETED: 'completed', REJECTED: 'rejected', DELEGATED: 'delegated',
  ESCALATED: 'escalated', CANCELLED: 'cancelled', EXPIRED: 'expired'
});
export const WORKFLOW_HUMAN_ASSIGNMENT_TARGETS = Object.freeze({
  PERSON: 'named-authorized-person', ROLE: 'role', TEAM: 'team', TENANT_ADMIN: 'tenant-administrator',
  PROPERTY_OPERATOR: 'property-operator', DUTY_QUEUE: 'duty-queue', ESCALATION_GROUP: 'escalation-group'
});
export const WORKFLOW_DECISION_CONTRACT_FIELDS = Object.freeze({
  DECISIONS: 'allowed-decisions', REQUIRED_FIELDS: 'required-fields', EXPLANATION: 'required-explanation',
  EVIDENCE: 'required-evidence', AUTHORITY: 'authority', DUTIES: 'separation-of-duties',
  VALIDATION: 'validation', EFFECTIVE: 'effective-time', REVERSIBILITY: 'reversibility',
  CORRECTION: 'correction-path', TIMEOUT: 'timeout-behavior'
});
export const WORKFLOW_MULTI_PERSON_DECISIONS = Object.freeze({
  ANY_ONE: 'any-one-approver', ALL: 'all-approvers', QUORUM: 'quorum',
  SEQUENTIAL: 'sequential-approval', DUAL_CONTROL: 'independent-dual-control', ROLE_SPECIFIC: 'role-specific-approvals'
});
export const WORKFLOW_AGENT_TASK_TYPES = Object.freeze({
  INTERPRET: 'interpret-unstructured-input', CLASSIFY: 'classify-request', EXTRACT: 'extract-structured-information',
  SUMMARIZE: 'summarize-evidence', RECOMMEND: 'recommend-branch', DRAFT: 'prepare-draft',
  MISSING: 'identify-missing-information', REVIEW: 'review-result',
  ACTION: 'perform-bounded-approved-tool-action', EXPLAIN: 'explain-exception'
});
export const WORKFLOW_AGENT_RESULT_FIELDS = Object.freeze({
  IDENTITY: 'result-identity', TASK: 'agent-task-identity', AGENT: 'agent-identity', VERSION: 'agent-version',
  EXECUTION: 'agent-execution', CONTRACT: 'result-contract-version', RESULT: 'structured-result',
  PROVENANCE: 'sources-or-provenance', UNCERTAINTY: 'uncertainty', TOOLS: 'tool-result-references',
  LIMITS: 'limit-consumption', STOP: 'stop-reason', EVIDENCE: 'evidence'
});
export const WORKFLOW_INTERACTION_OPERATIONS = Object.freeze({
  INSPECT_EVENT: 'inspect-unmatched-event', QUARANTINE: 'quarantine-event', RELEASE: 'release-approved-event',
  CALLBACK: 'reconcile-callback', CANCEL_TIMER: 'cancel-timer', RESCHEDULE: 'definition-permitted-reschedule',
  SUSPEND_SCHEDULE: 'suspend-schedule', REASSIGN: 'reassign-human-task', ESCALATE: 'escalate-human-task',
  CANCEL_HUMAN: 'cancel-human-task', RETRY_AGENT: 'retry-agent-task', RECONCILE: 'trigger-reconciliation'
});
export const WORKFLOW_INTERACTION_QUALITY_ATTRIBUTES = Object.freeze({
  DURABILITY: 'durability', DETERMINISM: 'determinism', RELIABILITY: 'reliability', SECURITY: 'security',
  ACCOUNTABILITY: 'accountability', TIMELINESS: 'timeliness', ACCESSIBILITY: 'accessibility',
  ISOLATION: 'isolation', AUDITABILITY: 'auditability', RECOVERABILITY: 'recoverability', PORTABILITY: 'portability'
});
export const WORKFLOW_INTERACTION_RULES = Object.freeze({
  IDENTITIES: 'stable-interaction-identities', VERSIONED: 'versioned-interaction-contracts',
  AUTHENTICATED: 'authenticated-and-authorized-sources', TRUSTED_SCOPE: 'trusted-tenant-and-property',
  CORRELATION: 'correlation-is-matching-not-authorization', ACTIVE_WAIT: 'active-expected-wait-before-advancement',
  IDEMPOTENCY: 'duplicate-and-replay-harmless', ARRIVAL: 'defined-early-late-unmatched-and-out-of-order-behavior',
  DOMAIN_AUTHORITY: 'authoritative-business-ownership-preserved', DURABLE_TIMERS: 'durable-not-sleeping-timers',
  TIME_SEMANTICS: 'explicit-time-zone-and-calendar-semantics', OCCURRENCES: 'distinct-recurring-identities',
  MISFIRE: 'bounded-timer-misfire', HUMAN_IDENTITY: 'authenticated-authorized-attributable-decisions',
  DUTIES: 'separation-of-duties', SILENCE: 'silence-is-not-approval-by-default',
  CORRECTION: 'original-decisions-preserved', AGENT_BOUNDARY: 'arch-014-agent-identity-authority-limits-validation',
  AGENT_TRUST: 'agent-result-non-authoritative-until-validation', RACES: 'expected-state-atomic-race-resolution',
  RESUMPTION: 'full-validation-before-resumption', ISOLATION: 'tenant-property-isolation',
  NEUTRALITY: 'vendor-and-technology-neutrality'
});
export const WORKFLOW_INTERACTION_BOUNDARIES = Object.freeze({
  BROKER: 'define-event-broker-implementation', TIMER_STORAGE: 'define-timer-storage-technology',
  IDENTITY_PROVIDER: 'define-identity-provider-internals', HUMAN_UI: 'define-detailed-human-task-interface',
  NOTIFICATION: 'select-notification-provider', AGENT_REASONING: 'define-agent-reasoning-or-planning',
  SERVICE_EVENTS: 'define-business-service-event-internals', RELIABILITY: 'define-complete-retry-and-compensation-policy',
  API_SDK: 'define-detailed-external-apis-and-sdks', SCHEDULER: 'select-scheduler',
  EVENT_PLATFORM: 'select-event-platform', AGENT_FRAMEWORK: 'select-agent-framework'
});
