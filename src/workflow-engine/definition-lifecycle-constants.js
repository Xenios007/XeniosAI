export const WORKFLOW_DEFINITION_LIFECYCLE_ERROR_CODE = 'WORKFLOW_DEFINITION_LIFECYCLE_INVALID';

export const WORKFLOW_DEFINITION_IDENTITY_DOMAINS = Object.freeze({
  WORKFLOW: 'workflow-identity', DEFINITION_VERSION: 'definition-version-identity', RELEASE: 'release-identity',
  ACTIVATION: 'activation-identity', EXECUTION: 'execution-identity', TASK_TYPE: 'task-type-identity',
  EVENT_CONTRACT: 'event-contract-identity'
});
export const WORKFLOW_DEFINITION_OWNER_ROLES = Object.freeze({
  ACCOUNTABLE: 'accountable-owner', OPERATIONAL: 'operational-owner', DEFINITION: 'definition-owner',
  GOVERNANCE_ASSURANCE: 'governance-and-assurance-contacts', DOMAIN_SERVICE: 'participating-domain-service-owners'
});
export const WORKFLOW_PURPOSE_CLASSIFICATIONS = Object.freeze({
  BUSINESS: 'business', OPERATIONAL: 'operational', INTEGRATION: 'integration', DATA: 'data', GOVERNANCE: 'governance',
  SECURITY: 'security', DEVELOPER: 'developer', AGENT_COORDINATION: 'agent-coordination'
});
export const WORKFLOW_DURATION_CLASSIFICATIONS = Object.freeze({
  SHORT_RUNNING: 'short-running', LONG_RUNNING: 'long-running', SCHEDULED: 'scheduled', RECURRING: 'recurring',
  EVENT_DRIVEN: 'event-driven', INDEFINITE_WAIT: 'indefinite-wait-with-governed-expiration'
});
export const WORKFLOW_INTERACTION_CLASSIFICATIONS = Object.freeze({
  SERVICE_ONLY: 'service-only', HUMAN: 'human-involved', AGENT: 'agent-involved', HUMAN_AGENT: 'human-and-agent-involved',
  EXTERNAL_PROVIDER: 'external-provider-involved', PROPERTY_LOCAL: 'property-local-system-involved'
});
export const WORKFLOW_IMPACT_CLASSIFICATIONS = Object.freeze({
  READ_ONLY: 'read-only', REVERSIBLE: 'reversible', COMPENSATABLE: 'compensatable', IRREVERSIBLE: 'irreversible',
  FINANCIAL: 'financially-material', OPERATIONAL: 'operationally-critical', SECURITY: 'security-sensitive',
  COMPLIANCE: 'compliance-relevant'
});
export const WORKFLOW_SCOPE_CLASSIFICATIONS = Object.freeze({
  PLATFORM: 'platform', ENTERPRISE: 'enterprise', TENANT: 'tenant', PROPERTY: 'property',
  CROSS_PROPERTY: 'cross-property-within-one-tenant', CROSS_TENANT: 'approved-cross-tenant-aggregation'
});
export const WORKFLOW_DEFINITION_SECTIONS = Object.freeze({
  IDENTITY: 'identity', OWNERSHIP: 'ownership', PURPOSE: 'purpose', SCOPE: 'scope', CONTRACTS: 'contracts',
  PROCESS_MODEL: 'process-model', RELIABILITY: 'reliability', CONTROLS: 'controls', OPERATIONS: 'operations', EVIDENCE: 'evidence'
});
export const WORKFLOW_DEFINITION_CONTRACTS = Object.freeze({
  INPUT: 'input', OUTPUT: 'output', EVENTS: 'events', SIGNALS: 'signals', TASKS: 'tasks',
  HUMAN_DECISIONS: 'human-decisions', AGENT_RESULTS: 'agent-results', SERVICE_INTERACTIONS: 'service-interactions'
});
export const WORKFLOW_PROCESS_ELEMENTS = Object.freeze({
  STATES: 'states-or-nodes', TRANSITIONS: 'transitions', BRANCHES: 'branches', JOINS: 'joins', LOOPS: 'loops',
  CHILD_WORKFLOWS: 'child-workflows', COMPLETION: 'completion', TERMINATION: 'termination'
});
export const WORKFLOW_RELIABILITY_ELEMENTS = Object.freeze({
  TIMEOUT: 'timeout', RETRY: 'retry', IDEMPOTENCY: 'idempotency', CANCELLATION: 'cancellation',
  RECONCILIATION: 'reconciliation', COMPENSATION: 'compensation'
});
export const WORKFLOW_TRIGGER_TYPES = Object.freeze({
  API: 'api-request', DOMAIN_EVENT: 'domain-event', INTEGRATION_EVENT: 'integration-event', SCHEDULE: 'schedule',
  PARENT_WORKFLOW: 'parent-workflow', HUMAN_ACTION: 'human-action', AGENT_REQUEST: 'agent-request',
  OPERATIONAL_ACTION: 'operational-action'
});
export const WORKFLOW_DEFINITION_VALIDATION_AREAS = Object.freeze({
  SCHEMA: 'schema-correctness', IDENTIFIERS: 'identifier-uniqueness', OWNERSHIP: 'ownership-completeness',
  CONTRACTS: 'contract-resolution', TRANSITIONS: 'transition-validity', REACHABILITY: 'reachability-and-dead-ends',
  BRANCHES: 'branch-overlap', JOINS: 'join-completeness', LOOPS: 'loop-bounds', CHILDREN: 'child-workflow-cycles',
  RESOURCES: 'resource-limits', RETRIES: 'retry-bounds', TIMERS: 'timer-validity', CORRELATION: 'event-correlation',
  CANCELLATION: 'cancellation', COMPENSATION: 'compensation', COMPLETION: 'completion', SECURITY: 'security',
  TENANT: 'tenant-isolation', PROPERTY: 'property-isolation', EVIDENCE: 'evidence', OPERATIONS: 'operational-readiness'
});
export const WORKFLOW_MIGRATION_TYPES = Object.freeze({
  NONE: 'no-migration', RUNTIME_UPGRADE: 'compatible-runtime-upgrade', STATE_TRANSFORMATION: 'state-transformation',
  FORWARD_ONLY: 'forward-only-process-migration', RESTART: 'restart-migration', EMERGENCY_CONTAINMENT: 'emergency-containment'
});
export const WORKFLOW_DEFINITION_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed', DESIGNED: 'designed', VALIDATED: 'validated', APPROVED: 'approved', REGISTERED: 'registered',
  RELEASED: 'released', ACTIVE: 'active', SUSPENDED: 'suspended', DEPRECATED: 'deprecated', RETIRED: 'retired',
  ARCHIVED: 'archived', REJECTED: 'rejected', WITHDRAWN: 'withdrawn'
});
export const WORKFLOW_LIFECYCLE_GATES = Object.freeze({
  PROPOSAL: 'proposal-gate', DESIGN: 'design-gate', VALIDATION: 'validation-gate', APPROVAL: 'approval-gate',
  REGISTRATION: 'registration-gate', RELEASE: 'release-gate', ACTIVATION: 'activation-gate', CHANGE: 'change-gate',
  DEPRECATION: 'deprecation-gate', RETIREMENT: 'retirement-gate'
});
export const WORKFLOW_ACTIVATION_SCOPES = Object.freeze({
  ENVIRONMENT: 'environment', TENANT: 'tenant', PROPERTY: 'property', REGION: 'region', COHORT: 'cohort',
  TRIGGER: 'trigger', WORKFLOW_VERSION: 'workflow-version'
});
export const WORKFLOW_DEFINITION_OPERATIONS = Object.freeze({
  REGISTER: 'register', VALIDATE: 'validate', COMPARE: 'compare', REVIEW: 'review', APPROVE: 'approve', PACKAGE: 'package',
  RELEASE: 'release', ACTIVATE: 'activate', DEACTIVATE: 'deactivate', SUSPEND: 'suspend', RESUME: 'resume',
  DEPRECATE: 'deprecate', RETIRE: 'retire', ARCHIVE: 'archive', SEARCH: 'search', DEPENDENCIES: 'inspect-dependencies',
  EVIDENCE: 'inspect-evidence', COMPATIBILITY: 'assess-compatibility', MIGRATION: 'plan-migration'
});
export const WORKFLOW_DEFINITION_QUALITY_ATTRIBUTES = Object.freeze({
  CLARITY: 'clarity', DETERMINISM: 'determinism', VALIDITY: 'validity', COMPATIBILITY: 'compatibility', INTEGRITY: 'integrity',
  TRACEABILITY: 'traceability', SECURITY: 'security', AUDITABILITY: 'auditability', PORTABILITY: 'portability',
  MAINTAINABILITY: 'maintainability', OPERABILITY: 'operability', TENANT_ISOLATION: 'tenant-isolation'
});
export const WORKFLOW_DEFINITION_ARCHITECTURAL_RULES = Object.freeze({
  STABLE_IDENTITIES: 'stable-identities', EXPLICIT_OWNERS: 'accountable-operational-and-definition-owners',
  CLASSIFY: 'classification-before-approval', DECLARE_PURPOSE: 'purpose-supported-and-prohibited-use',
  DECLARE_SCOPE: 'tenant-and-property-behavior', EXPLICIT_CONTRACTS: 'explicit-participant-contracts',
  EXPLICIT_PROCESS: 'explicit-states-transitions-branches-joins-loops-and-completion', DOMAIN_RULES: 'business-rules-in-domain-services',
  SEPARATE_RUNTIME: 'runtime-state-outside-definition', DETERMINISTIC: 'deterministic-control-semantics',
  BOUNDED: 'bounded-loops-fanout-retries-duration-state-and-resources', RELIABILITY: 'explicit-failure-and-reliability-behavior',
  DOMAIN_COMPENSATION: 'domain-defined-compensation-only', EVIDENCE: 'defined-evidence-requirements',
  VALIDATABLE: 'machine-validatable-and-human-reviewable', CANONICAL: 'one-canonical-representation-per-version',
  IMMUTABLE: 'immutable-after-activation', VERSION_CHANGE: 'new-version-for-behavioral-change',
  COMPATIBILITY: 'backward-compatibility-where-practical', EXECUTION_BINDING: 'exact-effective-version-binding',
  ORIGINAL_VERSION: 'original-version-unless-governed-migration', RELEASE_ACTIVATION: 'release-separated-from-activation',
  SCOPED_ACTIVATION: 'environment-tenant-and-property-scoped-activation', GOVERNED_MIGRATION: 'attributable-idempotent-evidenced-migration',
  RESERVED_IDENTIFIERS: 'retired-identifiers-never-reused', NEUTRALITY: 'technology-and-vendor-neutrality'
});
export const WORKFLOW_DEFINITION_ARCHITECTURE_BOUNDARIES = Object.freeze({
  RUNTIME_PERSISTENCE: 'define-detailed-runtime-persistence', TRANSACTION_MECHANICS: 'define-transition-transaction-mechanics',
  WORKER_PROTOCOLS: 'define-queue-and-worker-protocols', EVENT_INFRASTRUCTURE: 'define-event-delivery-infrastructure',
  TIMER_STORAGE: 'define-timer-storage-implementation', HUMAN_UI: 'define-human-task-user-interfaces',
  AGENT_REASONING: 'define-agent-reasoning', SERVICE_INTERNALS: 'define-business-service-internals',
  API_SDK: 'define-detailed-api-and-sdk-contracts', NOTATION: 'select-definition-notation',
  PRODUCT: 'select-workflow-product', TECHNOLOGY: 'select-build-registry-storage-or-deployment-technology'
});
