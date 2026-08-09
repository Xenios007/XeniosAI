export const TOOLS_ACTIONS_ENVIRONMENT_ERROR_CODE = 'TOOLS_ACTIONS_ENVIRONMENT_INVALID';

export const TOOL_GATEWAY_CAPABILITIES = Object.freeze({
  REGISTRY_LOOKUP: 'registry-lookup',
  CONTRACT_RESOLUTION: 'contract-resolution',
  VERSION_SELECTION: 'version-selection',
  IDENTITY_PROPAGATION: 'identity-propagation',
  AUTHORIZATION: 'authorization',
  POLICY_EVALUATION: 'policy-evaluation',
  APPROVAL_ENFORCEMENT: 'approval-enforcement',
  CREDENTIAL_ACQUISITION: 'credential-acquisition',
  INPUT_VALIDATION: 'input-validation',
  ENVIRONMENT_ROUTING: 'environment-routing',
  RATE_QUOTA_ENFORCEMENT: 'rate-and-quota-enforcement',
  INVOCATION: 'invocation',
  TIMEOUT_CANCELLATION: 'timeout-and-cancellation',
  OUTPUT_VALIDATION: 'output-validation',
  ERROR_NORMALIZATION: 'error-normalization',
  SIDE_EFFECT_RECORDING: 'side-effect-recording',
  RECONCILIATION: 'reconciliation',
  EVIDENCE: 'evidence',
  OBSERVABILITY: 'observability'
});

export const TOOL_REGISTRY_FIELDS = Object.freeze({
  STABLE_IDENTIFIER: 'stable-identifier',
  NAME: 'name',
  DESCRIPTION: 'description',
  OWNER: 'owner',
  OPERATIONAL_OWNER: 'operational-owner',
  DOMAIN: 'domain',
  VERSION: 'version',
  LIFECYCLE_STATE: 'lifecycle-state',
  SUPPORTED_PURPOSES: 'supported-purposes',
  PROHIBITED_PURPOSES: 'prohibited-purposes',
  INPUT_CONTRACT: 'input-contract',
  OUTPUT_CONTRACT: 'output-contract',
  SIDE_EFFECT_CLASS: 'side-effect-class',
  AUTHORITY_REQUIREMENTS: 'authority-requirements',
  APPROVAL_REQUIREMENTS: 'approval-requirements',
  TENANT_MODEL: 'tenant-model',
  PROPERTY_MODEL: 'property-model',
  DATA_CLASSIFICATION: 'data-classification',
  ENVIRONMENT_ELIGIBILITY: 'environment-eligibility',
  CREDENTIAL_MODEL: 'credential-model',
  LIMITS: 'limits',
  ERROR_MODEL: 'error-model',
  IDEMPOTENCY_BEHAVIOR: 'idempotency-behavior',
  CANCELLATION_BEHAVIOR: 'cancellation-behavior',
  COMPENSATION_REFERENCE: 'compensation-reference',
  SERVICE_COMMITMENTS: 'service-commitments',
  DEPENDENCIES: 'dependencies',
  EVALUATION_STATUS: 'evaluation-status',
  DOCUMENTATION: 'documentation'
});

export const TOOL_IDENTITY_TYPES = Object.freeze({
  LOGICAL_TOOL: 'logical-tool',
  TOOL_VERSION: 'tool-version',
  TOOL_DEPLOYMENT: 'tool-deployment',
  TOOL_PROVIDER: 'tool-provider',
  TOOL_INVOCATION: 'tool-invocation',
  TARGET_BUSINESS_OBJECT: 'target-business-object'
});

export const CAPABILITY_DISCOVERY_FACTORS = Object.freeze({
  AGENT_DEFINITION: 'agent-definition',
  GOAL: 'goal',
  TENANT: 'tenant',
  PROPERTY: 'property',
  ENVIRONMENT: 'environment',
  AUTHORITY: 'authority',
  TOOL_LIFECYCLE: 'tool-lifecycle',
  PROVIDER_AVAILABILITY: 'provider-availability',
  DATA_RESTRICTIONS: 'data-restrictions',
  LIMITS: 'limits'
});

export const TOOL_CONTRACT_FIELDS = Object.freeze({
  TOOL_IDENTIFIER: 'tool-identifier',
  VERSION: 'version',
  PURPOSE: 'purpose',
  INPUT_SCHEMA: 'input-schema',
  OUTPUT_SCHEMA: 'output-schema',
  PRECONDITIONS: 'preconditions',
  POSTCONDITIONS: 'postconditions',
  SIDE_EFFECTS: 'side-effects',
  AUTHORITY_REQUIREMENTS: 'authority-requirements',
  APPROVAL_REQUIREMENTS: 'approval-requirements',
  TENANT_BEHAVIOR: 'tenant-behavior',
  PROPERTY_BEHAVIOR: 'property-behavior',
  DATA_CLASSIFICATION: 'data-classification',
  IDEMPOTENCY_SEMANTICS: 'idempotency-semantics',
  TIMEOUT: 'timeout',
  CANCELLATION: 'cancellation',
  RETRY_GUIDANCE: 'retry-guidance',
  ERROR_CATEGORIES: 'error-categories',
  RATE_LIMITS: 'rate-limits',
  COST_MODEL: 'cost-model',
  EVIDENCE_FIELDS: 'evidence-fields',
  DEPRECATION_STATUS: 'deprecation-status'
});

export const TOOL_CATEGORIES = Object.freeze({
  INFORMATION: 'information-tools',
  ANALYSIS: 'analysis-tools',
  BUSINESS_SERVICE: 'business-service-tools',
  WORKFLOW: 'workflow-tools',
  INTEGRATION: 'integration-tools',
  COMMUNICATION: 'communication-tools',
  DEVELOPMENT: 'development-tools',
  ENVIRONMENT: 'environment-tools'
});

export const ACTION_CLASSES = Object.freeze({
  R0_OBSERVE: 'r0-observe',
  R1_SENSITIVE_OBSERVE: 'r1-sensitive-observe',
  A1_PREPARE: 'a1-prepare',
  A2_REVERSIBLE_ACT: 'a2-reversible-act',
  A3_MATERIAL_ACT: 'a3-material-act',
  A4_IRREVERSIBLE_ACT: 'a4-irreversible-act'
});

export const ACTION_METADATA_FIELDS = Object.freeze({
  ACTION_CLASS: 'action-class',
  GOAL_RELATIONSHIP: 'goal-relationship',
  TOOL: 'tool',
  OPERATION: 'operation',
  TARGET: 'target',
  TENANT: 'tenant',
  PROPERTY: 'property',
  EXPECTED_EFFECT: 'expected-effect',
  REVERSIBILITY: 'reversibility',
  REQUIRED_AUTHORITY: 'required-authority',
  REQUIRED_APPROVAL: 'required-approval',
  DATA_INVOLVED: 'data-involved',
  COST: 'cost',
  DEADLINE: 'deadline',
  IDEMPOTENCY_KEY: 'idempotency-key',
  VALIDATION_METHOD: 'validation-method',
  COMPENSATION_REFERENCE: 'compensation-reference'
});

export const PRE_INVOCATION_CHECKS = Object.freeze({
  RESOLVE_TOOL_VERSION: 'resolve-registered-tool-and-version',
  VERIFY_LIFECYCLE: 'verify-lifecycle-state',
  AUTHENTICATE_RUNTIME: 'authenticate-agent-runtime',
  VERIFY_EXECUTION_STATE: 'verify-execution-state',
  VERIFY_GOAL_RELATIONSHIP: 'verify-goal-relationship',
  VERIFY_TENANT_PROPERTY: 'verify-tenant-and-property',
  EVALUATE_AUTHORITY: 'evaluate-authority',
  EVALUATE_POLICY: 'evaluate-policy',
  VERIFY_APPROVAL: 'verify-approval',
  VALIDATE_INPUT_SCHEMA: 'validate-input-schema',
  CLASSIFY_DATA_ACTION: 'classify-data-and-action',
  RESERVE_LIMITS: 'reserve-limits',
  ESTABLISH_IDEMPOTENCY: 'establish-idempotency',
  ACQUIRE_CREDENTIALS: 'acquire-scoped-credentials',
  SELECT_ENVIRONMENT: 'select-authorized-environment'
});

export const AUTHORIZATION_FACTORS = Object.freeze({
  INITIATING_ACTOR: 'initiating-actor',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  AGENT: 'agent',
  AGENT_VERSION: 'agent-version',
  EXECUTION: 'execution',
  GOAL: 'goal',
  TENANT: 'tenant',
  PROPERTY: 'property',
  TOOL: 'tool',
  OPERATION: 'operation',
  TARGET: 'target',
  DATA: 'data',
  ACTION_CLASS: 'action-class',
  TIME: 'time',
  ENVIRONMENT: 'environment',
  DELEGATED_AUTHORITY: 'delegated-authority'
});

export const FINE_GRAINED_AUTHORITY_LEVELS = Object.freeze({
  TOOL: 'tool',
  OPERATION: 'operation',
  RESOURCE_TYPE: 'resource-type',
  SPECIFIC_RESOURCE: 'specific-resource',
  DATA_FIELD: 'data-field',
  TENANT: 'tenant',
  PROPERTY: 'property',
  ENVIRONMENT: 'environment',
  ACTION_CLASS: 'action-class',
  TIME_WINDOW: 'time-window',
  MAXIMUM_AMOUNT: 'maximum-amount',
  MAXIMUM_COUNT: 'maximum-count'
});

export const APPROVAL_BINDINGS = Object.freeze({
  EXACT_ACTION: 'exact-action-or-bounded-action-set',
  TOOL_VERSION: 'tool-and-version',
  TARGET: 'target',
  TENANT_PROPERTY: 'tenant-and-property',
  RELEVANT_INPUT: 'relevant-input',
  MAXIMUM_EFFECT: 'maximum-effect',
  VALIDITY_PERIOD: 'validity-period',
  APPROVER: 'approver'
});

export const CREDENTIAL_SCOPE_REQUIREMENTS = Object.freeze({
  TOOL_SPECIFIC: 'tool-specific',
  OPERATION_SPECIFIC: 'operation-specific-where-practical',
  EXECUTION_BOUND: 'execution-bound',
  TENANT_BOUND: 'tenant-bound',
  PROPERTY_BOUND: 'property-bound-where-required',
  ENVIRONMENT_BOUND: 'environment-bound',
  SHORT_LIVED: 'short-lived',
  ROTATABLE: 'rotatable',
  REVOCABLE: 'revocable',
  NON_EXPORTABLE: 'non-exportable-where-practical',
  OBSERVABLE: 'observable'
});

export const INPUT_VALIDATION_TYPES = Object.freeze({
  SCHEMA: 'schema',
  TYPE: 'type',
  REQUIRED_FIELDS: 'required-fields',
  FORMAT: 'format',
  RANGE: 'range',
  ENUMERATION: 'enumeration',
  TENANT_SCOPE: 'tenant-scope',
  PROPERTY_SCOPE: 'property-scope',
  RESOURCE_OWNERSHIP: 'resource-ownership',
  DATA_CLASSIFICATION: 'data-classification',
  INJECTION_RISK: 'injection-risk',
  SIZE: 'size',
  ACTION_LIMITS: 'action-limits',
  BUSINESS_PRECONDITIONS: 'business-service-preconditions'
});

export const OUTPUT_VALIDATION_TYPES = Object.freeze({
  CONTRACT_CONFORMANCE: 'contract-conformance',
  STATUS: 'status',
  PROVENANCE: 'provenance',
  TENANT: 'tenant',
  PROPERTY: 'property',
  CORRELATION: 'correlation',
  COMPLETENESS: 'completeness',
  FRESHNESS: 'freshness',
  DATA_CLASSIFICATION: 'data-classification',
  ERROR_INDICATORS: 'error-indicators',
  UNEXPECTED_INSTRUCTIONS: 'unexpected-instructions'
});

export const RESULT_SEMANTICS = Object.freeze({
  INVOCATION_ACCEPTED: 'invocation-accepted',
  INVOCATION_COMPLETED: 'invocation-completed',
  BUSINESS_ACTION_COMPLETED: 'business-action-completed',
  BUSINESS_ACTION_REJECTED: 'business-action-rejected',
  RESULT_PENDING: 'result-pending',
  RESULT_UNCERTAIN: 'result-uncertain',
  PARTIAL_COMPLETION: 'partial-completion',
  COMPENSATION_REQUIRED: 'compensation-required'
});

export const SIDE_EFFECT_TYPES = Object.freeze({
  BUSINESS_STATE_MUTATION: 'business-state-mutation',
  EXTERNAL_MESSAGE_DELIVERY: 'external-message-delivery',
  FINANCIAL_ACTION: 'financial-action',
  RESERVATION_CHANGE: 'reservation-change',
  ACCESS_CHANGE: 'access-change',
  FILE_MODIFICATION: 'file-modification',
  CODE_CHANGE: 'code-change',
  DEPLOYMENT: 'deployment',
  WORKFLOW_INITIATION: 'workflow-initiation',
  EXTERNAL_PROVIDER_REQUEST: 'external-provider-request'
});

export const TOOL_SIDE_EFFECT_LEDGER_FIELDS = Object.freeze({
  ACTION_IDENTIFIER: 'action-identifier',
  AGENT_EXECUTION: 'agent-execution',
  TOOL_VERSION: 'tool-and-version',
  OPERATION: 'operation',
  TARGET: 'target',
  TENANT: 'tenant',
  PROPERTY: 'property',
  INPUT_REFERENCE: 'input-reference',
  APPROVAL: 'approval',
  IDEMPOTENCY_KEY: 'idempotency-key',
  REQUEST_TIME: 'request-time',
  PROVIDER_REFERENCE: 'provider-reference',
  RESULT: 'result',
  RECONCILIATION_STATE: 'reconciliation-state',
  COMPENSATION_REFERENCE: 'compensation-reference'
});

export const IDEMPOTENCY_STRATEGY_FIELDS = Object.freeze({
  KEY: 'key',
  SCOPE: 'scope',
  VALIDITY_PERIOD: 'validity-period',
  DUPLICATE_BEHAVIOR: 'duplicate-behavior',
  STORED_RESULT: 'stored-result',
  CONFLICT_BEHAVIOR: 'conflict-behavior',
  TENANT_ISOLATION: 'tenant-isolation'
});

export const RECONCILIATION_SOURCES = Object.freeze({
  PROVIDER_OPERATION_IDENTIFIER: 'provider-operation-identifier',
  BUSINESS_SERVICE_STATE: 'business-service-state',
  WORKFLOW_STATE: 'workflow-state',
  DOMAIN_EVENTS: 'domain-events',
  EXTERNAL_STATUS_QUERY: 'external-status-query',
  SIDE_EFFECT_LEDGER: 'side-effect-ledger'
});

export const COMPENSATION_CONTRACT_FIELDS = Object.freeze({
  ELIGIBLE_ORIGINAL_ACTION: 'eligible-original-action',
  REQUIRED_AUTHORITY: 'required-authority',
  TIME_LIMITS: 'time-limits',
  INPUTS: 'inputs',
  EXPECTED_EFFECT: 'expected-effect',
  FAILURE_BEHAVIOR: 'failure-behavior',
  EVIDENCE: 'evidence'
});

export const TOOL_INVOCATION_STATES = Object.freeze({
  PROPOSED: 'proposed',
  AUTHORIZING: 'authorizing',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  QUEUED: 'queued',
  RUNNING: 'running',
  WAITING: 'waiting',
  COMPLETED: 'completed',
  FAILED: 'failed',
  TIMED_OUT: 'timed-out',
  CANCELLING: 'cancelling',
  CANCELLED: 'cancelled',
  UNCERTAIN: 'uncertain',
  RECONCILING: 'reconciling',
  COMPENSATING: 'compensating'
});

export const TOOL_ERROR_CATEGORIES = Object.freeze({
  TOOL_NOT_FOUND: 'tool-not-found',
  VERSION_UNSUPPORTED: 'version-unsupported',
  NOT_AUTHORIZED: 'not-authorized',
  APPROVAL_REQUIRED: 'approval-required',
  INVALID_INPUT: 'invalid-input',
  INVALID_TENANT: 'invalid-tenant',
  INVALID_PROPERTY: 'invalid-property',
  RESOURCE_NOT_FOUND: 'resource-not-found',
  CONFLICT: 'conflict',
  RATE_LIMITED: 'rate-limited',
  QUOTA_EXHAUSTED: 'quota-exhausted',
  DEPENDENCY_UNAVAILABLE: 'dependency-unavailable',
  PROVIDER_ERROR: 'provider-error',
  TIMEOUT: 'timeout',
  CANCELLED: 'cancelled',
  RESULT_UNCERTAIN: 'result-uncertain',
  VALIDATION_FAILED: 'validation-failed',
  POLICY_DENIED: 'policy-denied'
});

export const ENVIRONMENT_TYPES = Object.freeze({
  READ_ONLY_INFORMATION: 'read-only-information-environment',
  SANDBOXED_COMPUTE: 'sandboxed-compute',
  DEVELOPMENT: 'development',
  TEST: 'test',
  EVALUATION: 'evaluation',
  STAGING: 'staging',
  PRODUCTION: 'production',
  PROPERTY_LOCAL: 'property-local',
  EXTERNAL_PROVIDER: 'external-provider',
  RECOVERY: 'recovery'
});

export const ENVIRONMENT_IDENTITY_FIELDS = Object.freeze({
  ENVIRONMENT_TYPE: 'environment-type',
  REGION: 'region',
  TENANT_ELIGIBILITY: 'tenant-eligibility',
  PROPERTY_ELIGIBILITY: 'property-eligibility',
  DATA_CLASSIFICATION: 'data-classification',
  NETWORK_POLICY: 'network-policy',
  CREDENTIAL_POLICY: 'credential-policy',
  TOOL_AVAILABILITY: 'tool-availability',
  OPERATIONAL_STATE: 'operational-state',
  SERVICE_COMMITMENT: 'service-commitment'
});

export const ENVIRONMENT_ISOLATION_CONTROLS = Object.freeze({
  FILESYSTEM: 'filesystem',
  PROCESS: 'process',
  NETWORK: 'network',
  CREDENTIALS: 'credentials',
  DATA: 'data',
  TENANT: 'tenant',
  PROPERTY: 'property',
  TOOL_DEPENDENCIES: 'tool-dependencies',
  ARTIFACTS: 'artifacts',
  TELEMETRY: 'telemetry'
});

export const SANDBOX_REQUIREMENTS = Object.freeze({
  BOUNDED_CPU: 'bounded-cpu',
  BOUNDED_MEMORY: 'bounded-memory',
  BOUNDED_STORAGE: 'bounded-storage',
  BOUNDED_DURATION: 'bounded-duration',
  RESTRICTED_FILESYSTEM: 'restricted-filesystem',
  RESTRICTED_NETWORK: 'restricted-network',
  NO_AMBIENT_CREDENTIALS: 'no-ambient-credentials',
  CONTROLLED_DEPENDENCIES: 'controlled-dependencies',
  INPUT_OUTPUT_SCANNING: 'input-and-output-scanning',
  CLEANUP: 'cleanup',
  EVIDENCE: 'evidence'
});

export const FILESYSTEM_BOUNDARY_FIELDS = Object.freeze({
  PERMITTED_ROOTS: 'permitted-roots',
  READ_PERMISSIONS: 'read-permissions',
  WRITE_PERMISSIONS: 'write-permissions',
  FILE_TYPES: 'file-types',
  SIZE_LIMITS: 'size-limits',
  SYMLINK_BEHAVIOR: 'symlink-behavior',
  TEMPORARY_STORAGE: 'temporary-storage',
  RETENTION: 'retention',
  CLEANUP: 'cleanup',
  DESTRUCTIVE_OPERATIONS: 'destructive-operations'
});

export const NETWORK_BOUNDARY_FIELDS = Object.freeze({
  ALLOWED_DESTINATIONS: 'allowed-destinations',
  ALLOWED_PROTOCOLS: 'allowed-protocols',
  DNS_BEHAVIOR: 'dns-behavior',
  PROXY_BEHAVIOR: 'proxy-behavior',
  EGRESS_IDENTITY: 'egress-identity',
  DATA_CLASSIFICATION: 'data-classification',
  TENANT_RESTRICTIONS: 'tenant-restrictions',
  RATE_LIMITS: 'rate-limits',
  TIMEOUT: 'timeout',
  LOGGING: 'logging'
});

export const DATA_TOOL_CONTROLS = Object.freeze({
  QUERY_SCOPE: 'query-scope',
  TENANT_FILTERS: 'tenant-filters',
  PROPERTY_FILTERS: 'property-filters',
  ROW_FIELD_CONTROLS: 'row-and-field-controls',
  READ_WRITE_SEPARATION: 'read-write-separation',
  TRANSACTION_BOUNDARIES: 'transaction-boundaries',
  QUERY_LIMITS: 'query-limits',
  RESULT_LIMITS: 'result-limits',
  AUDIT: 'audit'
});

export const TOOL_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  DESIGNING: 'designing',
  IMPLEMENTING: 'implementing',
  EVALUATING: 'evaluating',
  APPROVED: 'approved',
  REGISTERED: 'registered',
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  DEPRECATED: 'deprecated',
  RETIRED: 'retired'
});

export const TOOL_EVALUATION_AREAS = Object.freeze({
  CONTRACT_CORRECTNESS: 'contract-correctness',
  AUTHORIZATION: 'authorization',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_ISOLATION: 'property-isolation',
  INPUT_VALIDATION: 'input-validation',
  OUTPUT_VALIDATION: 'output-validation',
  SIDE_EFFECT_BEHAVIOR: 'side-effect-behavior',
  IDEMPOTENCY: 'idempotency',
  ERROR_NORMALIZATION: 'error-normalization',
  TIMEOUT: 'timeout',
  CANCELLATION: 'cancellation',
  RECONCILIATION: 'reconciliation',
  COMPENSATION: 'compensation',
  SECURITY: 'security',
  PERFORMANCE: 'performance',
  EVIDENCE: 'evidence'
});

export const TOOL_OBSERVABILITY_SIGNALS = Object.freeze({
  DISCOVERY_COUNT: 'discovery-count',
  AUTHORIZATION_DECISIONS: 'authorization-decisions',
  APPROVAL_REQUESTS: 'approval-requests',
  INVOCATION_COUNT: 'invocation-count',
  SUCCESS_FAILURE: 'success-and-failure',
  LATENCY: 'latency',
  TIMEOUT: 'timeout',
  CANCELLATION: 'cancellation',
  RETRY: 'retry',
  RATE_LIMITING: 'rate-limiting',
  QUOTA_CONSUMPTION: 'quota-consumption',
  SIDE_EFFECT_CLASS: 'side-effect-class',
  RECONCILIATION_BACKLOG: 'reconciliation-backlog',
  COMPENSATION: 'compensation',
  PROVIDER_HEALTH: 'provider-health',
  TENANT_PROPERTY_SIGNALS: 'tenant-and-property-service-signals',
  COST: 'cost'
});

export const TOOL_EVIDENCE_FIELDS = Object.freeze({
  AGENT_EXECUTION: 'agent-and-execution',
  TOOL_VERSION: 'tool-and-version',
  OPERATION: 'operation',
  GOAL_TASK: 'goal-and-task',
  TENANT_PROPERTY: 'tenant-and-property',
  AUTHORITY: 'authority',
  POLICY_DECISION: 'policy-decision',
  APPROVAL: 'approval',
  INPUT_REFERENCE: 'input-reference',
  ACTION_CLASS: 'action-class',
  IDEMPOTENCY_KEY: 'idempotency-key',
  PROVIDER_REFERENCE: 'provider-reference',
  RESULT: 'result',
  VALIDATION: 'validation',
  ERROR: 'error',
  RECONCILIATION: 'reconciliation',
  COMPENSATION: 'compensation',
  TIME_DURATION: 'time-and-duration'
});

export const TOOL_OPERATIONAL_CAPABILITIES = Object.freeze({
  REGISTRY_MANAGEMENT: 'registry-management',
  CONTRACT_VALIDATION: 'contract-validation',
  HEALTH_MONITORING: 'health-monitoring',
  CAPACITY: 'capacity',
  QUOTAS: 'quotas',
  CREDENTIAL_ROTATION: 'credential-rotation',
  PROVIDER_FAILOVER: 'provider-failover',
  SUSPENSION: 'suspension',
  RECONCILIATION: 'reconciliation',
  INCIDENT_RESPONSE: 'incident-response',
  VERSION_ROLLOUT: 'version-rollout',
  ROLLBACK: 'rollback',
  DEPRECATION: 'deprecation',
  RETIREMENT: 'retirement'
});

export const TOOL_SECURITY_THREATS = Object.freeze({
  UNAUTHORIZED_INVOCATION: 'unauthorized-invocation',
  TOOL_IMPERSONATION: 'tool-impersonation',
  CONTRACT_SUBSTITUTION: 'contract-substitution',
  CREDENTIAL_EXPOSURE: 'credential-exposure',
  PROMPT_INJECTION_OUTPUT: 'prompt-injection-through-output',
  PARAMETER_INJECTION: 'parameter-injection',
  TENANT_SUBSTITUTION: 'tenant-substitution',
  PROPERTY_SUBSTITUTION: 'property-substitution',
  CONFUSED_DEPUTY: 'confused-deputy',
  EXCESSIVE_AGENCY: 'excessive-agency',
  DATA_EXFILTRATION: 'data-exfiltration',
  SANDBOX_ESCAPE: 'sandbox-escape',
  NETWORK_PIVOT: 'network-pivot',
  DUPLICATE_MATERIAL_ACTION: 'duplicate-material-action',
  DESTRUCTIVE_TARGET_EXPANSION: 'destructive-target-expansion'
});

export const TOOL_QUALITY_ATTRIBUTES = Object.freeze({
  SAFETY: 'safety',
  SECURITY: 'security',
  RELIABILITY: 'reliability',
  AUDITABILITY: 'auditability',
  INTEROPERABILITY: 'interoperability',
  PORTABILITY: 'portability',
  TESTABILITY: 'testability',
  OPERABILITY: 'operability'
});

export const TOOL_ARCHITECTURAL_RULES = Object.freeze({
  REGISTERED_VERSIONED_TOOLS: 'require-registered-versioned-tools',
  GATEWAY_MEDIATION: 'mediate-agent-capability-use-through-tool-gateway',
  DISCOVERY_NOT_AUTHORIZATION: 'treat-discovery-and-authorization-as-separate-controls',
  MATERIAL_AUTHORITY: 'evaluate-authority-for-every-material-invocation',
  PRESERVE_IDENTITIES: 'preserve-agent-execution-tenant-property-and-delegation-identity',
  VALIDATE_INPUTS: 'validate-inputs-structurally-and-semantically',
  DECLARE_SIDE_EFFECTS: 'declare-side-effects',
  CLASSIFY_RISK: 'classify-action-risk',
  BIND_APPROVALS: 'bind-approvals-to-exact-actions-and-validity',
  CREDENTIALS_OUT_OF_CONTEXT: 'keep-credentials-outside-model-context',
  SHORT_LIVED_SCOPED_CREDENTIALS: 'use-short-lived-scoped-credentials-where-practical',
  ENVIRONMENT_ELIGIBILITY: 'enforce-environment-eligibility',
  ISOLATE_ENVIRONMENT: 'isolate-filesystem-process-network-credentials-and-data',
  GENERATED_CODE_UNTRUSTED: 'treat-generated-code-as-untrusted',
  VALIDATE_OUTPUTS: 'validate-outputs-and-provenance',
  OUTPUT_AS_DATA: 'treat-tool-output-as-data-not-higher-priority-instruction',
  IDEMPOTENCY: 'use-idempotency-for-retryable-actions',
  RECONCILE_BEFORE_RETRY: 'reconcile-uncertain-material-effects-before-retry',
  DOMAIN_COMPENSATION: 'use-domain-defined-compensation',
  NO_DIRECT_UNRESTRICTED_DATABASE: 'prevent-direct-unrestricted-database-access-when-governed-services-exist',
  DRAFT_NOT_SEND: 'prevent-draft-authority-from-implying-send-or-execute-authority',
  EXACT_DESTRUCTIVE_TARGETS: 'resolve-exact-targets-before-destructive-action',
  COMPOSED_BOUNDARIES: 'preserve-tenant-and-property-boundaries-in-composed-tool-chains',
  BOUND_TOOL_CHAINS: 'bound-tool-chain-length-cost-and-duration',
  ATTRIBUTABLE_EVIDENCE: 'produce-attributable-evidence',
  LIFECYCLE_CONTROLS: 'support-suspension-deprecation-and-retirement',
  PROVIDER_NEUTRAL: 'remain-implementation-and-provider-neutral'
});

export const TOOL_ARCHITECTURE_BOUNDARIES = Object.freeze({
  BUSINESS_SERVICES: 'implement-business-services',
  BUSINESS_RULES: 'business-rules',
  WORKFLOW_INTERNALS: 'workflow-engine-internals',
  CREDENTIAL_TECHNOLOGY: 'credential-technology',
  SANDBOX_TECHNOLOGY: 'sandbox-technology',
  TOOL_PROTOCOL_VENDOR: 'tool-protocol-or-vendor',
  PLUGIN_PACKAGING: 'detailed-plugin-extension-packaging',
  AGENT_AUTHORITY_GRANTS: 'grant-authority-to-agents'
});
