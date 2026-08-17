export const API_SECURITY_ACCESS_ISOLATION_ERROR_CODE = 'API_SECURITY_ACCESS_ISOLATION_INVALID';

export const API_SECURITY_OBJECTIVES = Object.freeze({
  AUTHENTICITY: 'authenticity',
  AUTHORIZATION: 'authorization',
  CONFIDENTIALITY: 'confidentiality',
  INTEGRITY: 'integrity',
  AVAILABILITY: 'availability',
  ACCOUNTABILITY: 'accountability',
  TRACEABILITY: 'traceability',
  LEAST_PRIVILEGE: 'least-privilege',
  PURPOSE_LIMITATION: 'purpose-limitation',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_ISOLATION: 'property-isolation',
  DATA_MINIMIZATION: 'data-minimization',
  REPLAY_RESISTANCE: 'replay-resistance',
  ABUSE_RESISTANCE: 'abuse-resistance',
  CREDENTIAL_PROTECTION: 'credential-protection',
  SUPPLY_CHAIN_INTEGRITY: 'supply-chain-integrity',
  REVOCABILITY: 'revocability',
  RECOVERABILITY: 'recoverability',
  AUDITABLE_EVIDENCE: 'auditable-evidence'
});

export const API_IDENTITY_DOMAINS = Object.freeze({
  CONSUMER: 'consumer-identity',
  HUMAN: 'human-identity',
  ACTING: 'acting-identity',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  WORKLOAD: 'workload-identity',
  PROVIDER: 'provider-identity',
  WORKFLOW: 'workflow-identity',
  AGENT: 'agent-identity',
  OPERATOR: 'operator-identity'
});

export const API_IDENTITY_CONTEXT_FIELDS = Object.freeze({
  CONSUMER: 'consumer-identity',
  CALLING_WORKLOAD: 'calling-workload',
  HUMAN_ACTOR: 'human-actor',
  ACTING_PRINCIPAL: 'acting-principal',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  DELEGATION_CHAIN: 'delegation-chain',
  TENANT: 'tenant',
  PROPERTY: 'property',
  PRODUCT_OPERATION: 'product-and-operation',
  CONTRACT_VERSION: 'contract-version',
  WORKFLOW_EXECUTION: 'workflow-execution',
  AGENT_EXECUTION: 'agent-execution',
  AUTHENTICATION: 'authentication-method-and-time',
  AUTHORITY_REFERENCE: 'authority-reference',
  PURPOSE: 'purpose',
  CORRELATION_CAUSATION: 'correlation-and-causation',
  REQUEST_EXPIRATION: 'request-time-and-expiration'
});

export const API_AUTHENTICATION_CLASSES = Object.freeze({
  HUMAN_INTERACTIVE: 'human-interactive-authentication',
  ELEVATED_MFA: 'multi-factor-authentication-for-elevated-or-material-access',
  WORKLOAD: 'workload-authentication',
  PARTNER_SYSTEM: 'partner-system-authentication',
  TENANT_APPLICATION: 'tenant-application-authentication',
  PROPERTY_SYSTEM: 'property-system-authentication',
  DEVICE_INSTALLATION: 'device-or-installation-authentication-where-approved',
  CALLBACK_PRODUCER: 'callback-producer-verification',
  ARTIFACT_SIGNING: 'package-and-artifact-signing-identity'
});

export const API_CREDENTIAL_CLASSES = Object.freeze({
  HUMAN_SESSION: 'human-session-credential',
  DELEGATED_ACCESS: 'delegated-access-credential',
  WORKLOAD: 'workload-credential',
  TENANT_APPLICATION: 'tenant-application-credential',
  PROPERTY_SYSTEM: 'property-system-credential',
  PARTNER: 'partner-credential',
  SHORT_LIVED_OPERATION: 'short-lived-operation-credential',
  CALLBACK_VERIFICATION: 'callback-verification-credential',
  EMERGENCY_PRIVILEGED: 'emergency-privileged-credential'
});

export const API_CREDENTIAL_REQUIREMENTS = Object.freeze({
  APPROVED_AUTHORITY: 'issued-by-approved-authority',
  IDENTIFIABLE_SUBJECT: 'bound-to-identifiable-subject-or-workload',
  PURPOSE_LIMITED: 'purpose-limited',
  SCOPE_LIMITED: 'scope-limited',
  ENVIRONMENT_SPECIFIC: 'environment-specific',
  TENANT_AWARE: 'tenant-aware-where-applicable',
  PROPERTY_AWARE: 'property-aware-where-applicable',
  SHORT_LIVED: 'short-lived-where-practical',
  ROTATABLE: 'rotatable',
  REVOCABLE: 'revocable',
  INTEGRITY_PROTECTED: 'integrity-protected',
  PROTECTED_FROM_LOGS_AND_MODEL_CONTEXT: 'protected-from-logs-and-model-context',
  SAFE_METADATA: 'observable-through-safe-metadata'
});

export const API_AUTHORIZATION_DECISION_FIELDS = Object.freeze({
  DECISION_IDENTITY: 'decision-identity',
  SUBJECT_WORKLOAD: 'subject-and-workload',
  ACTING_REPRESENTED: 'acting-and-represented-principals',
  DELEGATION_REFERENCE: 'delegation-reference',
  PRODUCT_OPERATION: 'product-and-operation',
  RESOURCE: 'resource',
  TENANT_PROPERTY: 'tenant-and-property',
  PURPOSE: 'purpose',
  POLICY_VERSIONS: 'policy-versions',
  DECISION: 'decision',
  REASON_CATEGORY: 'reason-category',
  OBLIGATIONS: 'obligations',
  EFFECTIVE_TIME: 'effective-time',
  EXPIRATION: 'expiration',
  DECISION_PROVIDER: 'decision-provider',
  CORRELATION: 'correlation'
});

export const API_ACCESS_INTERSECTION_FACTORS = Object.freeze({
  CONSUMER_IDENTITY: 'consumer-identity',
  ACTING_IDENTITY: 'acting-identity',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  DELEGATED_AUTHORITY: 'delegated-authority',
  PURPOSE: 'purpose',
  PRODUCT_OPERATION: 'product-and-operation',
  RESOURCE: 'resource',
  TENANT: 'tenant',
  PROPERTY: 'property',
  DATA_CLASSIFICATION: 'data-classification',
  POLICY: 'policy',
  APPROVAL: 'approval',
  TIME: 'time',
  ENVIRONMENT: 'environment',
  RISK_CONDITIONS: 'risk-and-operating-conditions'
});

export const API_GATEWAY_AUTHORIZATION_CONTROLS = Object.freeze({
  CONSUMER_AUTHENTICATION: 'consumer-authentication',
  CREDENTIAL_VALIDATION: 'credential-validation',
  EXPOSURE_ELIGIBILITY: 'exposure-eligibility',
  COARSE_OPERATION_ACCESS: 'coarse-operation-access',
  TENANT_PROPERTY_CONTEXT_PRESENCE: 'tenant-and-property-context-presence',
  NETWORK_REGION_POLICY: 'network-and-region-policy',
  REQUEST_SIZE_FORMAT: 'request-size-and-format',
  RATE_QUOTA: 'rate-and-quota-controls',
  ABUSE: 'abuse-controls'
});

export const API_PROVIDER_AUTHORIZATION_CONTROLS = Object.freeze({
  PRODUCT_OPERATION: 'product-and-operation',
  CONSUMER_WORKLOAD: 'authenticated-consumer-and-workload',
  ACTING_REPRESENTED: 'acting-and-represented-principal',
  DELEGATION: 'delegation',
  TENANT_PROPERTY: 'tenant-and-property',
  RESOURCE_OWNERSHIP: 'resource-ownership',
  DATA_CLASSIFICATION: 'data-classification',
  CURRENT_STATE: 'current-state',
  BUSINESS_PRECONDITIONS: 'business-preconditions',
  REQUIRED_APPROVALS: 'required-approvals',
  POLICY_OBLIGATIONS: 'policy-obligations',
  CONTRACT_VERSION: 'contract-version'
});

export const API_DELEGATION_RECORD_FIELDS = Object.freeze({
  DELEGATOR: 'delegator',
  DELEGATE: 'delegate',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  PURPOSE: 'purpose',
  PRODUCTS_OPERATIONS: 'products-and-operations',
  RESOURCE_SCOPE: 'resource-scope',
  TENANT_PROPERTY: 'tenant-and-property',
  DATA_SCOPE: 'data-scope',
  START_EXPIRATION: 'start-and-expiration',
  FURTHER_DELEGATION: 'further-delegation-rule',
  APPROVAL: 'approval',
  REVOCATION: 'revocation',
  EVIDENCE: 'evidence'
});

export const API_TENANT_ISOLATION_PATHS = Object.freeze({
  CONSUMER_IDENTITIES: 'consumer-identities',
  CREDENTIALS: 'credentials',
  PRODUCT_SURFACES: 'product-surfaces',
  RESOURCES: 'resources',
  QUERIES: 'queries',
  COMMANDS: 'commands',
  SEARCH_INDEXES: 'search-indexes',
  CACHES: 'caches',
  EVENTS: 'events',
  CALLBACK_REGISTRATIONS: 'callback-registrations',
  STREAMS: 'streams',
  BATCHES: 'batches',
  FILES: 'files',
  RATE_LIMITS: 'rate-limits',
  QUOTAS: 'quotas',
  CONFIGURATION: 'configuration',
  TELEMETRY: 'telemetry',
  EVIDENCE: 'evidence',
  SUPPORT: 'support',
  BACKUP_RECOVERY: 'backup-and-recovery'
});

export const API_PROPERTY_ISOLATION_PROHIBITIONS = Object.freeze({
  READ_RESOURCES: 'read-another-property-resources',
  CHANGE_STATE: 'change-another-property-state',
  SEARCH_CONTENT: 'search-another-property-content',
  RECEIVE_EVENTS_CALLBACKS: 'receive-another-property-events-or-callbacks',
  JOIN_STREAM: 'join-another-property-stream',
  USE_CREDENTIALS: 'use-another-property-credentials',
  CONSUME_QUOTA: 'consume-another-property-quota',
  VIEW_TELEMETRY_EVIDENCE: 'view-another-property-telemetry-or-evidence',
  INFLUENCE_CONFIGURATION: 'influence-another-property-configuration',
  TRIGGER_RECOVERY: 'trigger-another-property-recovery-action'
});

export const API_DATA_CLASSIFICATIONS = Object.freeze({
  PUBLIC: 'public',
  INTERNAL: 'internal',
  CONFIDENTIAL: 'confidential',
  RESTRICTED: 'restricted',
  TENANT_CONFIDENTIAL: 'tenant-confidential',
  PROPERTY_RESTRICTED: 'property-restricted',
  PERSONAL_INFORMATION: 'personal-information',
  SENSITIVE_PERSONAL_INFORMATION: 'sensitive-personal-information',
  FINANCIAL: 'financial',
  SECURITY_SENSITIVE: 'security-sensitive',
  OPERATIONALLY_SENSITIVE: 'operationally-sensitive'
});

export const API_VALIDATION_CONTROL_TYPES = Object.freeze({
  CONTRACT_VERSION: 'contract-version',
  STRUCTURE: 'structure',
  TYPE_FORMAT: 'type-and-format',
  SIZE_COUNT: 'size-and-count',
  RANGE: 'range',
  ENCODING: 'encoding',
  TENANT_PROPERTY: 'tenant-and-property',
  RESOURCE_REFERENCES: 'resource-references',
  TEMPORAL_VALUES: 'temporal-values',
  FILE_TYPE_INTEGRITY: 'file-type-and-integrity',
  QUERY_COMPLEXITY: 'query-complexity',
  FILTER_COMPLEXITY: 'filter-complexity',
  CALLBACK_DESTINATION: 'callback-destination',
  STREAM_FILTER: 'stream-filter',
  BATCH_ITEM_COUNT: 'batch-item-count',
  IDEMPOTENCY_REPLAY: 'idempotency-and-replay-metadata'
});

export const API_SURFACE_SECURITY_CONTROLS = Object.freeze({
  EVENTS: 'producer-identity-contract-integrity-scope-subscription-replay-evidence',
  CALLBACKS: 'authenticated-registration-destination-ownership-scope-integrity-retry-revocation-evidence',
  STREAMS: 'authenticated-subscription-renewed-authorization-scope-checkpoint-expiration-revocation',
  BATCHES: 'submission-authentication-per-item-authorization-scope-limits-safe-errors-evidence',
  FILES: 'authenticated-file-transfer-purpose-scope-classification-integrity-malware-retention-evidence',
  CACHES: 'scoped-cache-keys-exact-permitted-scope-revocation-aware-invalidation',
  QUERIES_SEARCH: 'pre-candidate-authorization-and-isolation-filtering',
  TELEMETRY_EVIDENCE: 'safe-references-protected-outcomes-redaction-integrity-retention'
});

export const API_AUTOMATION_ACCESS_CONTROLS = Object.freeze({
  WORKFLOW: 'workflow-definition-execution-task-initiator-delegation-scope-time-evidence',
  AI_ORCHESTRATOR: 'request-identity-purpose-scope-tools-approval-budget-result-validation-evidence',
  AGENT: 'agent-identity-execution-goal-delegation-scope-approval-idempotency-budget-stop-conditions-evidence',
  PROMPT_INJECTION: 'model-content-cannot-change-policy-authority-scope-credentials-validation-or-evidence',
  PLUGIN_EXTENSION: 'extension-version-publisher-installation-capabilities-data-network-budget-lifecycle-revocation-evidence',
  PARTNER: 'partner-identity-owner-contractual-purpose-scope-credential-lifecycle-certification-offboarding-evidence'
});

export const API_PRIVILEGED_ACCESS_CONTROLS = Object.freeze({
  ADMINISTRATIVE: 'strong-identity-least-privilege-purpose-approval-scope-time-bounded-evidence-revocation',
  OPERATIONAL: 'minimum-support-access-explicit-sensitive-diagnostic-authority-purpose-time-evidence',
  SEPARATION_OF_DUTIES: 'requester-approver-implementer-operator-reviewer-auditor-separation',
  EMERGENCY: 'strong-identity-explicit-scope-reason-reference-time-limit-monitoring-revocation-review-evidence'
});

export const API_ABUSE_BUDGET_CONTROLS = Object.freeze({
  CREDENTIAL_STUFFING: 'credential-stuffing',
  BRUTE_FORCE: 'brute-force',
  ENUMERATION: 'enumeration',
  SCRAPING: 'scraping',
  HIGH_COST_QUERIES: 'automated-high-cost-queries',
  CALLBACK_AMPLIFICATION: 'callback-amplification',
  STREAM_EXHAUSTION: 'stream-exhaustion',
  BATCH_AMPLIFICATION: 'batch-amplification',
  EXPORT_ABUSE: 'export-abuse',
  AI_AGENT_LOOPS: 'ai-agent-loops',
  TOOL_CALL_STORMS: 'tool-call-storms',
  RESOURCE_EXHAUSTION: 'distributed-resource-exhaustion'
});

export const API_SECURITY_TEST_TYPES = Object.freeze({
  AUTHENTICATION: 'authentication-tests',
  AUTHORIZATION: 'authorization-tests',
  RESOURCE_LEVEL: 'resource-level-access-tests',
  FUNCTION_LEVEL: 'function-level-access-tests',
  FIELD_LEVEL: 'field-level-access-tests',
  TENANT_ISOLATION: 'tenant-isolation-tests',
  PROPERTY_ISOLATION: 'property-isolation-tests',
  DELEGATION: 'delegation-tests',
  CREDENTIAL_REVOCATION: 'credential-expiry-and-revocation-tests',
  INPUT_OUTPUT_VALIDATION: 'input-and-output-validation-tests',
  MASS_ASSIGNMENT: 'mass-assignment-tests',
  INJECTION: 'injection-tests',
  ENUMERATION_SIDE_CHANNEL: 'enumeration-and-side-channel-tests',
  REPLAY_IDEMPOTENCY: 'replay-and-idempotency-tests',
  RATE_RESOURCE: 'rate-limit-and-resource-exhaustion-tests',
  CALLBACK: 'callback-destination-and-integrity-tests',
  EVENT: 'event-spoofing-and-replay-tests',
  STREAM: 'stream-reauthorization-tests',
  BATCH_FILE: 'batch-and-file-tests',
  SDK_SUPPLY_CHAIN: 'sdk-credential-and-supply-chain-tests',
  ADMIN_EMERGENCY: 'administrative-and-emergency-access-tests'
});

export const API_SECURITY_ARCHITECTURAL_RULES = Object.freeze({
  TRUST_BOUNDARY_VALIDATION: 'every-api-interaction-crosses-trust-boundary',
  AUTHORIZATION_NOT_GRANTED_BY_REACHABILITY: 'authentication-reachability-discovery-sdk-possession-and-identifiers-do-not-grant-authorization',
  NARROWEST_INTERSECTION: 'effective-authority-is-narrowest-permitted-intersection',
  GATEWAY_NOT_PROVIDER_REPLACEMENT: 'gateway-does-not-replace-provider-resource-field-domain-or-business-authorization',
  PROVIDER_REVALIDATION: 'providers-validate-service-specific-identity-authority-tenant-property-contract-and-state',
  BOUNDED_DELEGATION: 'delegation-explicit-bounded-time-limited-attributable-revocable-and-never-expansive',
  CLIENT_SCOPE_CLAIMS: 'client-supplied-tenant-and-property-identifiers-are-claims-not-authority',
  CROSS_SCOPE_DENIED_DEFAULT: 'cross-tenant-and-cross-property-access-prohibited-by-default',
  PRE_CANDIDATE_ISOLATION: 'authorization-and-isolation-before-query-or-search-candidates',
  FIELD_AUTHORIZATION: 'returned-and-writable-fields-satisfy-output-and-field-authorization',
  ISOLATION_ACROSS_PATHS: 'batch-event-callback-stream-file-cache-telemetry-support-and-recovery-preserve-isolation',
  NO_SECRET_EXPOSURE: 'credentials-and-secrets-not-in-contracts-sdk-source-docs-urls-prompts-logs-errors-telemetry-or-evidence',
  SDK_NO_CONVENIENCE_BYPASS: 'sdks-do-not-disable-authentication-authorization-context-or-transport-validation-by-default',
  UNKNOWN_FIELDS_SAFE: 'unknown-or-prohibited-fields-do-not-mutate-internal-or-privileged-state',
  BOUNDED_VALIDATION: 'input-output-callback-query-batch-file-and-stream-controls-bounded-and-validated',
  LONG_LIVED_REVALIDATION: 'long-lived-streams-sessions-and-operations-revalidate-authority',
  AI_METADATA_NOT_AUTHORITY: 'api-descriptions-tool-metadata-model-output-and-retrieved-content-do-not-grant-ai-or-agent-authority',
  DETERMINISTIC_AI_VALIDATION: 'deterministic-provider-validation-required-for-ai-generated-requests-and-results',
  PRIVILEGED_ACCESS_GOVERNED: 'administrative-operational-and-emergency-access-privileged-purpose-bound-time-bound-and-evidenced',
  SECURITY_NOT_WEAKENED_FOR_COMPATIBILITY: 'security-and-isolation-not-weakened-for-backward-compatibility',
  PROTECTED_SECURITY_EVIDENCE: 'security-telemetry-and-evidence-protect-payloads-secrets-personal-tenant-and-property-data',
  EMERGENCY_SCOPE: 'emergency-restriction-and-revocation-support-precise-consumer-tenant-property-product-operation-version-callback-and-stream-scope',
  SUPPLY_CHAIN_INTEGRITY: 'api-and-sdk-supply-chain-artifacts-preserve-provenance-and-integrity',
  MULTI_TENANCY_OWNED_BY_ARCH_018: 'detailed-multi-tenancy-internals-remain-owned-by-arch-018'
});

export const API_SECURITY_BOUNDARIES = Object.freeze({
  ARCH_008: 'specializes-arch-008-without-replacing-enterprise-security-authority',
  ARCH_018: 'arch-018-remains-authoritative-for-detailed-multi-tenancy-model',
  DOMAIN_SERVICES: 'domain-services-own-business-authorization-invariants-and-outcomes',
  API_GATEWAY: 'api-gateway-protects-exposure-and-traffic-but-does-not-replace-domain-owners',
  SDK_DISTRIBUTION: 'arch-017-06-defines-secure-sdk-credential-packaging-distribution-update-and-retirement-behavior',
  OPERATIONS_OBSERVABILITY: 'arch-017-09-defines-security-telemetry-abuse-response-incident-emergency-and-recovery-operations'
});
