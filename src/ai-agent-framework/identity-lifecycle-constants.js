export const AGENT_IDENTITY_LIFECYCLE_ERROR_CODE = 'AGENT_IDENTITY_LIFECYCLE_INVALID';

export const AGENT_IDENTITY_DOMAINS = Object.freeze({
  DEFINITION: 'definition-identity',
  VERSION: 'version-identity',
  INSTANCE: 'instance-identity',
  EXECUTION: 'execution-identity',
  STEP: 'step-identity',
  TASK: 'task-identity',
  SESSION: 'session-identity'
});

export const PARTICIPATING_ACTOR_IDENTITIES = Object.freeze({
  INITIATING_ACTOR: 'initiating-actor',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  HUMAN_SPONSOR: 'human-sponsor',
  DELEGATING_AGENT: 'delegating-agent',
  DELEGATE_AGENT: 'delegate-agent',
  TENANT: 'tenant',
  PROPERTY: 'property',
  SERVICE_OR_TOOL: 'service-or-tool',
  MODEL_OR_PROVIDER: 'model-or-provider'
});

export const AGENT_IDENTITY_RECORD_FIELDS = Object.freeze({
  STABLE_IDENTIFIER: 'stable-identifier',
  DISPLAY_NAME: 'display-name',
  DESCRIPTION: 'description',
  DOMAIN: 'domain',
  AGENT_TYPE: 'agent-type',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  RESPONSIBLE_TEAM: 'responsible-team',
  SUPPORTED_USE_CASES: 'supported-use-cases',
  PROHIBITED_USE_CASES: 'prohibited-use-cases',
  RISK_CLASSIFICATION: 'risk-classification',
  AUTONOMY_CLASSIFICATION: 'autonomy-classification',
  TENANT_MODEL: 'tenant-model',
  PROPERTY_MODEL: 'property-model',
  DATA_CLASSIFICATION: 'data-classification',
  LIFECYCLE_STATE: 'lifecycle-state',
  CURRENT_APPROVED_VERSIONS: 'current-approved-versions',
  DEPENDENCIES: 'dependencies',
  SERVICE_COMMITMENTS: 'service-commitments',
  SUPPORT_CONTACT: 'support-contact',
  GOVERNANCE_REFERENCES: 'governance-references',
  SECURITY_REFERENCES: 'security-references',
  CREATION_DATE: 'creation-date',
  REVIEW_DATE: 'review-date',
  DEPRECATION_STATUS: 'deprecation-status',
  RETIREMENT_STATUS: 'retirement-status'
});

export const AGENT_IDENTIFIER_REQUIREMENTS = Object.freeze({
  GLOBALLY_UNIQUE: 'globally-unique-within-xeniosai',
  STABLE: 'stable',
  NON_SECRET: 'non-secret',
  MACHINE_READABLE: 'machine-readable',
  HUMAN_TRACEABLE: 'human-traceable',
  DEPLOYMENT_INDEPENDENT: 'independent-of-deployment-location',
  MODEL_PROVIDER_INDEPENDENT: 'independent-of-model-provider',
  DISPLAY_NAME_INDEPENDENT: 'independent-of-tenant-facing-display-name',
  CORRELATION_EVIDENCE_SUITABLE: 'suitable-for-correlation-and-evidence',
  RESISTANT_TO_REUSE: 'resistant-to-accidental-reuse'
});

export const OWNERSHIP_ROLES = Object.freeze({
  ACCOUNTABLE_OWNER: 'accountable-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  IMPLEMENTATION_OWNER: 'implementation-owner',
  RESPONSIBLE_TEAM: 'responsible-implementation-or-product-team',
  GOVERNANCE_CONTACT: 'governance-contact',
  ASSURANCE_CONTACT: 'assurance-contact'
});

export const AGENT_REGISTRY_FIELDS = Object.freeze({
  STABLE_IDENTITIES: 'stable-identities',
  VERSION_RECORDS: 'version-records',
  OWNERSHIP: 'ownership',
  PURPOSE: 'purpose',
  CAPABILITIES: 'capabilities',
  CLASSIFICATIONS: 'classifications',
  AUTHORITY_REFERENCES: 'authority-references',
  TENANT_PROPERTY_MODEL: 'tenant-and-property-model',
  DEPENDENCIES: 'dependencies',
  EVALUATIONS: 'evaluations',
  APPROVALS: 'approvals',
  LIFECYCLE_STATE: 'lifecycle-state',
  DEPLOYMENT_REFERENCES: 'deployment-references',
  OPERATIONAL_STATUS: 'operational-status',
  DEPRECATION_RETIREMENT: 'deprecation-and-retirement'
});

export const REGISTRY_AUTHORITIES = Object.freeze({
  IDENTITY_EXISTS: 'agent-identity-exists',
  VERSION_RECOGNIZED: 'version-is-recognized',
  VERSION_APPROVED: 'version-is-approved',
  AGENT_ACTIVE: 'agent-is-active',
  AGENT_SUSPENDED: 'agent-is-suspended',
  AGENT_DEPRECATED: 'agent-is-deprecated',
  AGENT_RETIRED: 'agent-is-retired',
  OWNER_ASSIGNED: 'owner-is-assigned',
  DEPLOYMENT_ASSOCIATED: 'deployment-is-associated-with-definition'
});

export const VERSIONED_AGENT_ELEMENTS = Object.freeze({
  PURPOSE: 'purpose',
  SUPPORTED_GOALS: 'supported-goals',
  PROHIBITED_GOALS: 'prohibited-goals',
  AUTONOMY: 'autonomy',
  POLICIES: 'policies',
  TOOLS: 'tools',
  DATA_PERMISSIONS: 'data-permissions',
  KNOWLEDGE_SOURCES: 'knowledge-sources',
  MEMORY_BEHAVIOR: 'memory-behavior',
  DELEGATION_RULES: 'delegation-rules',
  HUMAN_DECISION_POINTS: 'human-decision-points',
  REASONING_STRATEGY: 'reasoning-strategy',
  MODEL_SELECTION_POLICY: 'model-selection-policy',
  PROMPTS_INSTRUCTIONS: 'prompts-and-instructions',
  LIMITS: 'limits',
  STOP_CONDITIONS: 'stop-conditions',
  EVALUATIONS: 'evaluations',
  OPERATIONAL_CONFIGURATION: 'operational-configuration'
});

export const RUNTIME_CREDENTIAL_REQUIREMENTS = Object.freeze({
  SPECIFIC_RUNTIME_IDENTITY: 'issued-to-a-specific-runtime-identity',
  SHORT_LIVED: 'short-lived-where-practical',
  SCOPE_LIMITED: 'scope-limited',
  TENANT_AWARE: 'tenant-aware',
  PROPERTY_AWARE: 'property-aware-where-required',
  ENVIRONMENT_SPECIFIC: 'environment-specific',
  ROTATABLE: 'rotatable',
  REVOCABLE: 'revocable',
  OBSERVABLE: 'observable',
  PROTECTED_FROM_MODEL_CONTEXT: 'protected-from-model-context',
  PROTECTED_FROM_LOGS_EVIDENCE: 'protected-from-logs-and-evidence'
});

export const EXECUTION_IDENTITY_CREATION_STEPS = Object.freeze({
  AUTHENTICATE_INITIATOR: 'initiating-actor-is-authenticated',
  RESOLVE_AGENT: 'requested-agent-is-resolved',
  APPROVED_VERSION: 'agent-version-is-approved',
  ACTIVE_AGENT: 'agent-is-active',
  ESTABLISH_SCOPE: 'tenant-and-property-scope-are-established',
  ADMIT_GOAL: 'goal-is-admitted',
  EVALUATE_AUTHORITY: 'initial-authority-is-evaluated',
  REQUIRED_SPONSORSHIP: 'required-sponsorship-is-present'
});

export const EXECUTION_IDENTITY_FIELDS = Object.freeze({
  EXECUTION_IDENTIFIER: 'execution-identifier',
  AGENT_IDENTIFIER: 'agent-identifier',
  VERSION_IDENTIFIER: 'version-identifier',
  INITIATOR_IDENTIFIER: 'initiator-identifier',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  SPONSOR: 'sponsor',
  TENANT: 'tenant',
  PROPERTY: 'property',
  ENVIRONMENT: 'environment',
  GOAL_REFERENCE: 'goal-reference',
  AUTHORITY_REFERENCE: 'authority-reference',
  CREATION_TIME: 'creation-time',
  EXPIRATION: 'expiration',
  CORRELATION_IDENTIFIERS: 'correlation-identifiers'
});

export const AUTHORITY_BINDING_FIELDS = Object.freeze({
  GRANTING_PRINCIPAL: 'granting-principal',
  AGENT_VERSION: 'agent-and-version',
  GOAL: 'goal',
  TENANT: 'tenant',
  PROPERTY: 'property',
  PERMITTED_DATA: 'permitted-data',
  PERMITTED_TOOLS: 'permitted-tools',
  PERMITTED_ACTIONS: 'permitted-actions',
  DELEGATION_RIGHTS: 'delegation-rights',
  AUTONOMY_LEVEL: 'autonomy-level',
  LIMITS: 'limits',
  APPROVAL_REQUIREMENTS: 'approval-requirements',
  EFFECTIVE_TIME: 'effective-time',
  EXPIRATION: 'expiration',
  REVOCATION_CONDITIONS: 'revocation-conditions'
});

export const AUTHORITY_REVALIDATION_TRIGGERS = Object.freeze({
  SENSITIVE_ACTIONS: 'before-sensitive-actions',
  MATERIAL_STATE_CHANGES: 'before-material-state-changes',
  DELEGATION: 'before-delegation',
  LONG_WAIT: 'after-a-long-wait',
  RESUMPTION: 'after-resumption',
  IDENTITY_ROLE_CHANGE: 'after-identity-or-role-change',
  TENANT_PROPERTY_CHANGE: 'after-tenant-or-property-change',
  POLICY_CHANGE: 'after-policy-change',
  RISK_ESCALATION: 'after-risk-escalation',
  CREDENTIAL_RENEWAL: 'when-credentials-are-renewed',
  OPERATING_CONDITION_CHANGE: 'when-operating-conditions-materially-change'
});

export const DELEGATION_IDENTITY_FIELDS = Object.freeze({
  ORIGINAL_INITIATOR: 'original-initiator',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  PARENT_AGENT: 'parent-agent',
  PARENT_EXECUTION: 'parent-execution',
  DELEGATING_AGENT: 'delegating-agent',
  DELEGATE_AGENT: 'delegate-agent',
  DELEGATED_TASK: 'delegated-task',
  TENANT: 'tenant',
  PROPERTY: 'property',
  AUTHORITY_SUBSET: 'authority-subset',
  TIME_BUDGET_LIMITS: 'time-and-budget-limits',
  EVIDENCE_REQUIREMENTS: 'evidence-requirements'
});

export const IDENTITY_PROPAGATION_FIELDS = Object.freeze({
  INITIATOR: 'initiator',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  AGENT: 'agent',
  VERSION: 'version',
  EXECUTION: 'execution',
  TASK_STEP: 'task-and-step',
  TENANT: 'tenant',
  PROPERTY: 'property',
  DELEGATION: 'delegation',
  WORKFLOW: 'workflow',
  TOOL_CALL: 'tool-call',
  CORRELATION: 'correlation'
});

export const AGENT_DEFINITION_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  DESIGNING: 'designing',
  IMPLEMENTING: 'implementing',
  EVALUATING: 'evaluating',
  AWAITING_APPROVAL: 'awaiting-approval',
  REGISTERED: 'registered',
  RELEASED: 'released',
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  DEPRECATED: 'deprecated',
  RETIRED: 'retired',
  ARCHIVED: 'archived'
});

export const LIFECYCLE_TRANSITION_FIELDS = Object.freeze({
  CURRENT_STATE: 'current-state',
  REQUESTED_NEXT_STATE: 'requested-next-state',
  REQUESTING_IDENTITY: 'requesting-identity',
  REQUIRED_AUTHORITY: 'required-authority',
  PRECONDITIONS: 'preconditions',
  EVIDENCE: 'evidence',
  APPROVALS: 'approvals',
  EFFECTIVE_SCOPE: 'effective-scope',
  EFFECTIVE_TIME: 'effective-time',
  NOTIFICATIONS: 'notifications',
  ROLLBACK_REVERSAL: 'rollback-or-reversal',
  RESULTING_BEHAVIOR: 'resulting-operational-behavior'
});

export const LIFECYCLE_GATES = Object.freeze({
  PROPOSAL: 'proposal-gate',
  DESIGN: 'design-gate',
  EVALUATION: 'evaluation-gate',
  APPROVAL: 'approval-gate',
  RELEASE: 'release-gate',
  ACTIVATION: 'activation-gate',
  CHANGE: 'change-gate',
  DEPRECATION: 'deprecation-gate',
  RETIREMENT: 'retirement-gate'
});

export const ACTIVATION_SCOPES = Object.freeze({
  ALL_ELIGIBLE_TENANTS: 'all-eligible-tenants',
  SELECTED_TENANTS: 'selected-tenants',
  ONE_TENANT: 'one-tenant',
  SELECTED_PROPERTIES: 'selected-properties',
  ONE_PROPERTY: 'one-property',
  INTERNAL_ENTERPRISE_USERS: 'internal-enterprise-users',
  CONTROLLED_PILOT_GROUPS: 'controlled-pilot-groups'
});

export const PROGRESSIVE_INTRODUCTION_STEPS = Object.freeze({
  INTERNAL_EVALUATION: 'internal-evaluation',
  SIMULATION: 'simulation',
  SHADOW_OPERATION: 'shadow-operation',
  READ_ONLY_OPERATION: 'read-only-operation',
  RECOMMENDATION_ONLY: 'recommendation-only-operation',
  HUMAN_APPROVAL: 'human-approval',
  LIMITED_TENANT_PILOT: 'limited-tenant-pilot',
  LIMITED_PROPERTY_PILOT: 'limited-property-pilot',
  GRADUAL_AUTONOMY: 'gradual-autonomy',
  GRADUAL_TRAFFIC: 'gradual-traffic',
  OUTCOME_REVIEW: 'outcome-review'
});

export const MATERIAL_CHANGE_FACTORS = Object.freeze({
  PURPOSE: 'purpose',
  GOALS: 'goals',
  AUTHORITY: 'authority',
  AUTONOMY: 'autonomy',
  TENANT_SCOPE: 'tenant-scope',
  PROPERTY_SCOPE: 'property-scope',
  DATA_ACCESS: 'data-access',
  TOOL_ACCESS: 'tool-access',
  BUSINESS_ACTIONS: 'business-actions',
  DELEGATION: 'delegation',
  HUMAN_OVERSIGHT: 'human-oversight',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  SAFETY: 'safety',
  MODEL_BEHAVIOR: 'model-behavior',
  QUALITY: 'quality',
  COST: 'cost',
  SERVICE_COMMITMENTS: 'service-commitments'
});

export const ORPHAN_DETECTION_FINDINGS = Object.freeze({
  MISSING_OWNER: 'missing-owner',
  INACTIVE_OWNER: 'inactive-owner',
  MISSING_SUPPORT_TEAM: 'missing-support-team',
  EXPIRED_APPROVAL: 'expired-approval',
  UNRECOGNIZED_VERSION: 'unrecognized-version',
  UNUSED_ACTIVE_AGENT: 'unused-active-agent',
  NO_CURRENT_EVALUATION: 'agent-with-no-current-evaluation',
  RETIRED_TOOLS: 'agent-using-retired-tools',
  DEPRECATED_MODELS: 'agent-depending-on-deprecated-models',
  INVALID_TENANT_SCOPE: 'agent-without-valid-tenant-scope'
});

export const IDENTITY_SECURITY_THREATS = Object.freeze({
  AGENT_IMPERSONATION: 'agent-impersonation',
  INITIATOR_SPOOFING: 'initiator-spoofing',
  TENANT_SUBSTITUTION: 'tenant-substitution',
  PROPERTY_SUBSTITUTION: 'property-substitution',
  EXECUTION_REUSE: 'execution-identifier-reuse',
  CREDENTIAL_THEFT: 'credential-theft',
  DELEGATION_FORGERY: 'delegation-forgery',
  APPROVAL_FORGERY: 'approval-forgery',
  CONTEXT_TAMPERING: 'identity-context-tampering',
  REGISTRY_TAMPERING: 'registry-tampering',
  VERSION_SUBSTITUTION: 'version-substitution',
  CONFUSED_DEPUTY: 'confused-deputy-behavior',
  PRIVILEGE_ESCALATION: 'privilege-escalation',
  CROSS_TENANT_LEAKAGE: 'cross-tenant-identity-leakage'
});

export const IDENTITY_EVIDENCE_FIELDS = Object.freeze({
  AGENT_IDENTITY: 'agent-identity',
  AGENT_VERSION: 'agent-version',
  LIFECYCLE_STATE: 'lifecycle-state',
  INITIATOR: 'initiator',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  OWNER: 'owner',
  SPONSOR: 'sponsor',
  TENANT: 'tenant',
  PROPERTY: 'property',
  EXECUTION: 'execution',
  DELEGATION_CHAIN: 'delegation-chain',
  AUTHORITY: 'authority',
  AUTHENTICATION_OUTCOME: 'authentication-outcome',
  APPROVAL: 'approval',
  CREDENTIAL_ISSUANCE_REVOCATION: 'credential-issuance-and-revocation',
  STATE_TRANSITION: 'state-transition',
  RETIREMENT: 'retirement'
});

export const IDENTITY_LIFECYCLE_OBSERVABILITY_SIGNALS = Object.freeze({
  ACTIVE_AGENT_COUNT: 'active-agent-count',
  ACTIVE_VERSION_COUNT: 'active-version-count',
  EXECUTIONS_BY_IDENTITY: 'executions-by-identity',
  EXECUTIONS_BY_TENANT_PROPERTY: 'executions-by-tenant-and-property',
  AUTHENTICATION_FAILURES: 'authentication-failures',
  AUTHORIZATION_DENIALS: 'authorization-denials',
  CREDENTIAL_ISSUANCE: 'credential-issuance',
  CREDENTIAL_REVOCATION: 'credential-revocation',
  DELEGATION_DEPTH: 'delegation-depth',
  ORPHANED_AGENTS: 'orphaned-agents',
  EXPIRED_APPROVALS: 'expired-approvals',
  SUSPENDED_AGENTS: 'suspended-agents',
  DEPRECATED_VERSIONS: 'deprecated-versions',
  RETIREMENT_PROGRESS: 'retirement-progress',
  TRANSITION_FAILURES: 'lifecycle-transition-failures'
});

export const IDENTITY_LIFECYCLE_ARCHITECTURAL_RULES = Object.freeze({
  STABLE_IDENTITY: 'assign-every-agent-a-stable-identity',
  SEPARATE_IDENTITIES: 'separate-definition-version-instance-execution-task-step-and-session-identities',
  OWNERS: 'assign-accountable-and-operational-owners',
  NO_ACTIVATION_WITHOUT_OWNERSHIP: 'prevent-activation-without-ownership',
  EXACT_VERSION: 'bind-every-execution-to-an-exact-agent-version',
  AUTHENTICATE_ACTORS: 'authenticate-initiating-and-participating-actors',
  AUTHENTICATION_NOT_AUTHORIZATION: 'treat-authentication-and-authorization-as-separate-controls',
  SHORT_LIVED_CREDENTIALS: 'use-short-lived-scoped-runtime-credentials-where-practical',
  CREDENTIALS_OUT_OF_CONTEXT: 'keep-credentials-out-of-model-context-memory-logs-and-evidence',
  SCOPE_BEFORE_ACCESS: 'establish-tenant-and-property-scope-before-scoped-access',
  PRESERVE_INITIATOR_PRINCIPAL: 'preserve-the-initiating-actor-and-represented-principal',
  BIND_AUTHORITY: 'bind-authority-to-the-specific-execution-and-goal',
  REVALIDATE_AUTHORITY: 'revalidate-authority-at-sensitive-boundaries',
  PRESERVE_DELEGATION_IDENTITY: 'preserve-identity-through-delegation',
  NO_DELEGATION_EXPANSION: 'prevent-delegation-from-expanding-authority',
  PROTECT_REGISTRY_CONTEXT: 'protect-registry-and-identity-context-integrity',
  RESERVE_RETIRED_IDENTIFIERS: 'reserve-retired-identifiers',
  VERSION_MATERIAL_CHANGES: 'version-material-behavioral-changes',
  RISK_PROPORTIONATE_GATES: 'require-lifecycle-gates-proportionate-to-risk',
  PROGRESSIVE_ACTIVATION: 'support-progressive-activation',
  SCOPED_SUSPENSION: 'support-immediate-scoped-suspension',
  DEPRECATION_MIGRATION: 'define-deprecation-and-migration',
  RETIREMENT_REVOCATION: 'revoke-credentials-and-access-at-retirement',
  LIFECYCLE_EVIDENCE: 'preserve-required-lifecycle-evidence',
  ORPHAN_DETECTION: 'detect-orphaned-and-invalid-agents',
  MODEL_PROVIDER_INDEPENDENCE: 'remain-independent-of-model-and-provider-identity'
});

export const IDENTITY_LIFECYCLE_BOUNDARIES = Object.freeze({
  RUNTIME_STATE: 'detailed-runtime-execution-state',
  PLANNING_ALGORITHMS: 'planning-or-reasoning-algorithms',
  TOOL_SCHEMAS: 'tool-schemas',
  IDENTITY_PROVIDER_TECHNOLOGY: 'identity-provider-technology',
  CREDENTIAL_FORMATS: 'credential-formats',
  TENANT_INTERNALS: 'tenant-architecture-internals',
  POLICY_LANGUAGE: 'detailed-policy-language',
  REGISTRY_PRODUCTS: 'registry-or-catalog-products'
});
