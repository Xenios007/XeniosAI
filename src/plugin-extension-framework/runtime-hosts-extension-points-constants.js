export const RUNTIME_HOSTS_EXTENSION_POINTS_ERROR_CODE = 'RUNTIME_HOSTS_EXTENSION_POINTS_INVALID';

export const RUNTIME_HOST_PRINCIPLES = Object.freeze({
  VERIFIED_DIGESTS_ONLY: 'hosts-execute-only-verified-active-package-digests',
  BOUND_INVOCATION: 'every-invocation-binds-to-an-installation-tenant-grant-and-purpose',
  OWNED_CONTRACTS: 'extension-points-are-owned-contracts-not-implementation-hooks',
  PROVIDERS_AUTHORITATIVE: 'providers-remain-authoritative-for-domain-access',
  HOST_MEDIATED: 'sensitive-interfaces-are-host-mediated',
  CANCELABLE_BOUNDED: 'execution-is-cancelable-and-resource-bounded',
  OUTSIDE_CORE_TRANSACTIONS: 'extension-failure-remains-outside-core-authoritative-transactions-by-default',
  ASYNC_REVALIDATES_SCOPE: 'async-execution-preserves-and-revalidates-tenant-scope',
  UNTRUSTED_RESULTS: 'results-are-untrusted-until-validated-by-the-host-or-provider',
  TENANT_SAFE_EMISSION: 'hosts-emit-tenant-safe-health-usage-and-evidence'
});

export const EXTENSION_HOST_RESPONSIBILITIES = Object.freeze({
  RESOLVE_PACKAGE: 'resolves-installation-and-exact-package', VERIFY_STATUS: 'verifies-package-and-registry-status',
  ESTABLISH_RUNTIME: 'establishes-isolated-runtime', BIND_CONTEXT: 'binds-tenant-and-property-context',
  LOAD_CONFIGURATION: 'loads-effective-configuration', RESOLVE_GRANTS: 'resolves-capability-grants',
  MEDIATE_ACCESS: 'mediates-api-event-secret-storage-and-network-access',
  APPLY_LIMITS: 'applies-timeout-cancellation-concurrency-and-budget',
  VALIDATE_IO: 'validates-extension-point-inputs-and-outputs', CAPTURE_EVIDENCE: 'captures-telemetry-usage-and-evidence',
  DETECT_DEGRADATION: 'detects-health-degradation', QUARANTINE_TERMINATE: 'quarantines-or-terminates-execution'
});

export const EXTENSION_HOST_BOUNDARIES = Object.freeze({
  AUTHORIZE_ON_BEHALF: 'authorize-domain-resources-on-behalf-of-providers', SHARE_DATABASES: 'share-service-databases-with-extensions',
  GRANT_UNAPPROVED_CAPABILITIES: 'grant-capabilities-not-approved-by-policy', STORE_RAW_SECRETS: 'store-raw-tenant-secrets-in-package-state',
  TREAT_OUTPUT_AS_TRUTH: 'treat-extension-output-as-authoritative-business-truth', HIDE_IDENTITY: 'hide-the-acting-extension-identity',
  BILLING_DECISIONS: 'make-marketplace-or-billing-decisions'
});

export const EXTENSION_HOST_TYPES = Object.freeze({
  REQUEST_HOST: 'request-host', EVENT_HOST: 'event-host', WORKFLOW_HOST: 'workflow-host',
  AGENT_TOOL_HOST: 'agent-tool-host', EXPERIENCE_HOST: 'experience-host', CONNECTOR_HOST: 'connector-host'
});

export const RUNTIME_ADMISSION_CHECKS = Object.freeze({
  ACTIVE: 'extension-and-installation-are-active', DIGEST_MATCH: 'package-digest-matches-approved-installation',
  NOT_SUSPENDED: 'package-is-not-suspended-revoked-or-incompatible', TRUSTED_CONTEXT: 'tenant-and-property-context-are-trusted',
  AUTHORIZED_IDENTITY: 'initiating-identity-or-workload-is-authorized',
  GRANTED_CAPABILITY: 'requested-extension-point-and-capability-are-granted',
  VALID_CONFIG_SECRETS: 'configuration-and-secret-references-are-valid',
  APPROVED_PLACEMENT: 'host-isolation-class-and-placement-are-approved',
  AVAILABLE_BUDGET: 'resource-budget-and-quota-are-available',
  SECURITY_POLICY_PERMITS: 'current-security-and-advisory-policy-permits-execution'
});

export const EXTENSION_INVOCATION_CONTEXT_FIELDS = Object.freeze({
  IDENTITY: 'extension-package-installation-and-execution-identity', SCOPE: 'tenant-and-property-scope',
  INITIATING_ACTOR: 'initiating-actor-or-process-reference', PURPOSE: 'purpose', GRANTED_CAPABILITIES: 'granted-capabilities',
  CONFIG_VERSION: 'configuration-version', CORRELATION: 'correlation-and-trace-references',
  DEADLINE_BUDGET: 'deadline-cancellation-and-budget', HOST_CONTRACT_VERSION: 'host-and-contract-version'
});

export const EXTENSION_POINT_CONTRACT_FIELDS = Object.freeze({
  POINT_IDENTITY: 'point-identity-and-owner', IO_SCHEMA: 'input-and-output-schema', INVOCATION_MODE: 'invocation-mode',
  SIDE_EFFECT_CLASSIFICATION: 'side-effect-classification', AUTHORITY_DATA: 'authority-and-data-requirements',
  TENANT_PROPERTY_SEMANTICS: 'tenant-and-property-semantics', CONSISTENCY: 'ordering-transaction-and-consistency',
  TIMEOUT_RETRY: 'timeout-cancellation-retry-and-idempotency', RESOURCE_LIMITS: 'resource-and-payload-limits',
  ERRORS_FALLBACK: 'errors-and-fallback', TELEMETRY_EVIDENCE: 'telemetry-and-evidence',
  COMPATIBILITY_LIFECYCLE: 'compatibility-and-lifecycle'
});

export const EXTENSION_IDEMPOTENCY_SCOPE_ELEMENTS = Object.freeze({
  TENANT: 'tenant', INSTALLATION: 'installation', EXTENSION_POINT: 'extension-point', OPERATION_SCOPE: 'business-operation-scope'
});

export const API_EXTENSION_POINT_VALIDATIONS = Object.freeze({
  RESOURCE_OWNERSHIP: 'resource-ownership', INITIATING_AUTHORITY: 'initiating-authority', INSTALLATION_GRANT: 'installation-grant',
  PURPOSE: 'purpose', QUOTA: 'quota', POLICY: 'policy'
});

export const EVENT_EXTENSION_POINT_VALIDATIONS = Object.freeze({
  PRODUCER: 'producer', SCHEMA: 'schema', TENANT: 'tenant', GRANT: 'grant', SUBSCRIPTION: 'subscription',
  ORDERING: 'ordering', IDEMPOTENCY: 'idempotency', INSTALLATION_STATE: 'current-installation-state'
});

export const WORKFLOW_EXTENSION_POINT_ELEMENTS = Object.freeze({
  TENANT_BINDING: 'workflow-tenant-binding', VERSION: 'definition-and-package-version',
  ACTIVITY_IDEMPOTENCY: 'activity-idempotency', TIMEOUTS: 'timeouts', RETRY: 'retry', COMPENSATION: 'compensation',
  HUMAN_APPROVAL: 'human-approval', CANCELLATION: 'cancellation', HISTORY: 'history'
});

export const AGENT_TOOL_CONTRACT_FIELDS = Object.freeze({
  IDENTITY_DESCRIPTION: 'tool-identity-and-description', IO_SCHEMA: 'input-and-output-schema',
  EFFECTS: 'read-and-write-effects', HUMAN_APPROVAL: 'required-human-approval', DATA_CLASSES: 'tenant-data-classes',
  EXTERNAL_DESTINATIONS: 'external-destinations', COST_BUDGET: 'cost-and-resource-budget',
  TIMEOUT_CANCELLATION: 'timeout-and-cancellation', REVERSIBILITY: 'reversibility', EVIDENCE: 'evidence'
});

export const AGENT_EXTENSION_INHERITED_REQUIREMENTS = Object.freeze({
  OWNER: 'owner', PURPOSE: 'purpose', AUTHORITY: 'authority', AUTONOMY: 'autonomy', TOOLS: 'tools',
  DELEGATION: 'delegation', MEMORY: 'memory', SUPERVISION: 'supervision', EVALUATION: 'evaluation', EVIDENCE: 'evidence'
});

export const KNOWLEDGE_EXTENSION_POINT_CONTRACTS = Object.freeze({
  SOURCE_REGISTRATION: 'source-registration', TENANT_SCOPE: 'tenant-scope', RIGHTS: 'rights', PROVENANCE: 'provenance',
  CLASSIFICATION: 'classification', FRESHNESS: 'freshness', TRANSFORMATION: 'transformation', INDEXING: 'indexing',
  CORRECTION: 'correction', DELETION: 'deletion-contracts'
});

export const MEMORY_EXTENSION_POINT_DECLARATIONS = Object.freeze({
  ADMISSION: 'admission', SCOPE: 'scope', PURPOSE: 'purpose', SUBJECT: 'subject', RETENTION: 'retention',
  CORRECTION: 'correction', RETRIEVAL: 'retrieval', DELETION_BEHAVIOR: 'deletion-behavior'
});

export const UI_EXTENSION_POINT_CONTROLS = Object.freeze({
  SLOT_LIFECYCLE: 'approved-slot-and-lifecycle', ISOLATED_ORIGIN: 'isolated-origin-or-sandbox',
  CONTEXT_DISPLAY: 'tenant-and-property-context-display', MESSAGE_CONTRACT: 'typed-message-contract',
  DATA_ACTION_CAPABILITIES: 'data-and-action-capabilities', NAVIGATION: 'navigation-and-external-links',
  CSP: 'content-security-policy', ACCESSIBILITY: 'accessibility-and-localization', ERROR_CONTAINMENT: 'error-containment'
});

export const MCP_RUNTIME_MEDIATION_ITEMS = Object.freeze({
  SERVER_IDENTITY: 'server-identity-and-connection', TENANT_BINDING: 'tenant-binding-and-credentials',
  DISCOVERY: 'tool-prompt-and-resource-discovery', CAPABILITY_FILTERING: 'capability-filtering',
  SCHEMA_VALIDATION: 'schema-validation', USER_AGENT_AUTHORIZATION: 'user-or-agent-authorization',
  NETWORK_DATA_POLICY: 'network-and-data-policy', TIMEOUT_BUDGET: 'timeout-budget-and-cancellation',
  OUTPUT_CLASSIFICATION: 'output-classification', EVIDENCE_REVOCATION: 'evidence-and-revocation'
});

export const CONNECTOR_RUNTIME_CAPABILITIES = Object.freeze({
  MANAGED_IDENTITY: 'platform-managed-identity', SECRETS: 'secrets', NETWORK: 'network', CALLBACK: 'callback',
  RETRY: 'retry', CIRCUIT_BREAKER: 'circuit-breaker', DELIVERY: 'delivery-capabilities'
});

export const RUNTIME_RESULT_VALIDATION_CHECKS = Object.freeze({
  SCHEMA_SIZE: 'output-schema-and-size', CONTENT_CLASSIFICATION: 'content-classification', TENANT_OWNERSHIP: 'tenant-ownership',
  UNSAFE_CONTENT: 'unsafe-or-executable-content', PROVENANCE: 'required-provenance',
  SIDE_EFFECT_REFERENCES: 'side-effect-result-references', ERROR_CONTRACT: 'error-contract'
});

export const RUNTIME_FAILURE_CLASSIFICATIONS = Object.freeze({
  VALIDATION: 'extension-validation', CAPABILITY_DENIAL: 'capability-denial',
  INCOMPATIBILITY: 'package-or-host-incompatibility', TIMEOUT_CANCELLATION: 'timeout-or-cancellation',
  RESOURCE_EXHAUSTION: 'resource-exhaustion', EXTERNAL_DEPENDENCY: 'external-dependency-failure',
  EXTENSION_DEFECT: 'extension-defect', SECURITY_CONTAINMENT: 'security-containment',
  BUSINESS_REJECTION: 'provider-business-rejection', PLATFORM_DEPENDENCY: 'platform-dependency-failure'
});

export const HOST_HEALTH_EVALUATION_FACTORS = Object.freeze({
  ERROR_RATE: 'error-rate', LATENCY: 'latency', RESOURCE_USE: 'resource-use', POLICY_DENIALS: 'policy-denials',
  CRASHES: 'crashes', DEPENDENCY_FAILURES: 'dependency-failures', OUTPUT_VIOLATIONS: 'output-violations'
});

export const RUNTIME_RECOVERY_RESTORATION_ELEMENTS = Object.freeze({
  PACKAGE: 'verified-package', CONFIGURATION: 'configuration', GRANT: 'grant', STORAGE: 'storage',
  SUBSCRIPTIONS: 'subscriptions', SCHEDULES: 'schedules', HOST_PLACEMENT: 'host-placement'
});

export const RUNTIME_RECOVERY_EXERCISE_TYPES = Object.freeze({
  HOST_LOSS: 'host-loss', PACKAGE_CORRUPTION: 'package-corruption', EVENT_REPLAY: 'event-replay',
  EXTERNAL_OUTAGE: 'external-outage', SECRET_ROTATION: 'secret-rotation', PACKAGE_SUSPENSION: 'package-suspension'
});

export const RUNTIME_OBSERVABILITY_TELEMETRY_FIELDS = Object.freeze({
  TENANT: 'tenant', PROPERTY: 'property-where-allowed', INSTALLATION: 'installation', EXTENSION: 'extension',
  PACKAGE_DIGEST: 'package-digest', EXTENSION_POINT: 'extension-point', EXECUTION: 'execution', HOST: 'host',
  GRANT_DECISION: 'grant-decision', DURATION: 'duration', RESOURCE_USE: 'resource-use', OUTCOME: 'outcome'
});

export const RUNTIME_USAGE_METERING_DIMENSIONS = Object.freeze({
  COMPUTE: 'compute', DURATION: 'duration', STORAGE: 'storage', API_CALLS: 'api-calls', MESSAGES: 'messages',
  MODEL_TOOL_USE: 'model-or-tool-use', NETWORK: 'network-where-applicable'
});

export const RUNTIME_HOST_ARCHITECTURAL_RULES = Object.freeze({
  EXACT_DIGESTS: 'hosts-execute-exact-approved-package-digests',
  COMPLETE_INVOCATION: 'every-invocation-has-installation-tenant-grant-purpose-deadline-and-budget',
  EXPLICIT_SEMANTICS: 'extension-points-define-explicit-failure-and-transaction-semantics',
  OUTSIDE_DOMAIN_TRANSACTIONS: 'extensions-execute-outside-domain-transactions-by-default',
  SHARED_CONTROLS: 'api-event-workflow-agent-knowledge-ui-and-mcp-points-share-common-identity-and-capability-controls',
  REVALIDATED_ASYNC: 'async-work-revalidates-lifecycle-and-revocation',
  VALIDATED_OUTPUTS: 'extension-outputs-are-validated-and-never-become-authority-by-themselves',
  INDEPENDENT_QUARANTINE: 'hosts-can-quarantine-and-terminate-execution-independently-of-package-lifecycle',
  RECONCILED_RECOVERY: 'recovery-reconciles-side-effects-before-retry'
});
