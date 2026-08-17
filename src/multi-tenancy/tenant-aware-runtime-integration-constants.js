export const TENANT_AWARE_RUNTIME_INTEGRATION_ERROR_CODE = 'TENANT_AWARE_RUNTIME_INTEGRATION_INVALID';

export const RUNTIME_PRINCIPLES = Object.freeze({
  EXPLICIT_CONTEXT: 'every-tenant-scoped-execution-has-explicit-trusted-context',
  BOUNDARY_REVALIDATION: 'context-is-established-at-a-trust-boundary-and-revalidated-by-providers',
  CLAIM_NOT_AUTHORITY: 'client-input-is-a-claim-not-authority',
  SURVIVES_BOUNDARIES: 'context-survives-synchronous-and-asynchronous-boundaries',
  DELEGATION_NARROWS: 'delegation-preserves-or-narrows-authority',
  AUTHORITATIVE_ROUTING: 'runtime-routing-uses-authoritative-placement-state',
  MINIMIZED_PROTECTED: 'context-is-minimized-integrity-protected-audience-restricted-and-time-bounded',
  REVOCATION_INVALIDATES: 'tenant-state-and-revocation-can-invalidate-previously-issued-context',
  NO_CACHE_RETRY_BYPASS: 'caches-and-retries-never-replace-context-validation',
  TENANT_SAFE_TELEMETRY: 'telemetry-is-tenant-aware-without-exposing-protected-tenant-information',
  NO_UNSAFE_DEFAULT: 'no-runtime-component-uses-an-unsafe-default-tenant'
});

export const RUNTIME_CONTEXT_FIELDS = Object.freeze({
  TENANT_ID: 'tenant-identifier', PROPERTY: 'property-identifier-or-approved-property-set', ACTOR: 'actor-and-actor-type',
  BINDING: 'membership-or-workload-binding-reference', ROLES: 'roles-and-delegated-capabilities', PURPOSE: 'purpose',
  ASSURANCE: 'authentication-assurance', LIFECYCLE: 'tenant-and-property-lifecycle-state',
  ENTITLEMENT_POLICY: 'entitlement-and-policy-references', PLACEMENT: 'placement-or-routing-reference',
  CORRELATION: 'correlation-identifier', PROVENANCE: 'issuance-expiry-audience-and-provenance'
});

export const RUNTIME_TRUST_BOUNDARIES = Object.freeze({
  CLIENT_TO_GATEWAY: 'external-client-to-experience-or-gateway', GATEWAY_TO_SERVICE: 'gateway-to-platform-service',
  SERVICE_TO_SERVICE: 'service-to-service', HANDLER_TO_PROVIDER: 'request-handler-to-data-provider',
  PUBLISHER_TO_INFRASTRUCTURE: 'publisher-to-message-infrastructure', INFRASTRUCTURE_TO_CONSUMER: 'message-infrastructure-to-consumer',
  ENGINE_TO_TASK: 'workflow-engine-to-activity-or-human-task', ORCHESTRATOR_TO_AGENT: 'orchestrator-to-model-tool-or-agent',
  PLATFORM_TO_INTEGRATION: 'platform-to-external-integration', OPERATOR_TO_DIAGNOSTIC: 'operator-to-tenant-diagnostic-capability'
});

export const CONTEXT_ESTABLISHMENT_STEPS = Object.freeze({
  AUTHENTICATE: 'authenticate-the-actor-or-workload', RECEIVE_OR_DERIVE: 'receive-a-requested-tenant-or-derive-it-from-a-trusted-binding',
  RESOLVE_REGISTRY: 'resolve-the-tenant-through-the-authoritative-registry', VERIFY_BINDING: 'verify-membership-or-workload-binding',
  VALIDATE_LIFECYCLE: 'validate-tenant-lifecycle-and-current-restrictions', RESOLVE_PROPERTY: 'resolve-and-validate-property-scope',
  EVALUATE_POLICY: 'evaluate-purpose-role-entitlement-and-policy', CREATE_CONTEXT: 'create-integrity-protected-internal-context',
  BIND_AUDIENCE: 'bind-context-to-the-intended-audience-and-operation', RECORD_EVIDENCE: 'record-correlation-and-decision-evidence'
});

export const CONTEXT_REPRESENTATIONS = Object.freeze({
  SIGNED_CLAIMS: 'signed-or-integrity-protected-claims', TRANSPORT_METADATA: 'trusted-transport-metadata',
  CONTEXT_HANDLES: 'short-lived-context-handles', EXECUTION_RECORDS: 'workflow-or-job-execution-records',
  EVENT_ENVELOPE: 'event-envelope-fields', SERVICE_IDENTITY: 'service-to-service-identity-attributes'
});

export const EXPERIENCE_LAYER_REQUIREMENTS = Object.freeze({
  DISPLAY_SCOPE: 'display-the-active-tenant-and-property-clearly', EXPLICIT_SWITCHING: 'require-explicit-switching-for-multi-tenant-users',
  SEPARATE_STATE: 'separate-session-and-cached-state-by-tenant', PREVENT_STALE: 'prevent-stale-pages-from-acting-in-a-prior-context',
  RECONFIRM_SCOPE: 'reconfirm-scope-for-sensitive-actions', NO_CROSS_TENANT_DISPLAY: 'avoid-displaying-identifiers-or-results-from-another-tenant',
  CONSISTENT_SUSPENSION: 'handle-suspension-and-revocation-consistently'
});

export const GATEWAY_RESPONSIBILITIES = Object.freeze({
  AUTHENTICATE: 'authenticate-external-callers', NORMALIZE: 'normalize-accepted-tenant-claims',
  RESOLVE_MAPPINGS: 'resolve-trusted-domain-or-endpoint-mappings', COARSE_POLICY: 'apply-coarse-policy-quota-and-threat-controls',
  ISSUE_CONTEXT: 'issue-internal-context', ROUTE: 'route-using-approved-placement-references', TELEMETRY: 'add-correlation-and-telemetry'
});

export const API_SCOPE_CLASSIFICATIONS = Object.freeze({
  PLATFORM: 'platform-scoped', TENANT: 'tenant-scoped', PROPERTY: 'property-scoped', CROSS_TENANT: 'explicit-privileged-cross-tenant-scope'
});

export const SDK_BEHAVIORS = Object.freeze({
  EXPLICIT_SCOPE: 'configure-tenant-and-property-scope-explicitly', PREVENT_REUSE: 'prevent-accidental-reuse-across-tenants',
  PROPAGATE_CORRELATION: 'propagate-correlation-and-idempotency', CONSISTENT_FAILURE: 'handle-scope-related-failures-consistently',
  NO_CREDENTIAL_LOGGING: 'avoid-logging-credentials-or-protected-context', RECREATE_CLIENTS: 'recreate-clients-when-tenant-context-changes'
});

export const PROVIDER_RESPONSIBILITY_STEPS = Object.freeze({
  AUTHENTICATE_WORKLOAD: 'authenticates-or-validates-the-calling-workload',
  VALIDATE_CONTEXT: 'validates-context-integrity-audience-and-freshness',
  CONFIRM_LIFECYCLE: 'confirms-tenant-and-property-lifecycle-permits-the-operation',
  VALIDATE_OWNERSHIP: 'validates-target-resource-ownership', EVALUATE_AUTHORITY: 'evaluates-actor-or-delegated-authority',
  APPLY_ENTITLEMENT: 'applies-tenant-configuration-entitlement-and-quota-where-relevant',
  EXECUTE_PLACEMENT: 'executes-against-approved-tenant-placement',
  EMIT_RESULTS: 'emits-tenant-bound-results-events-telemetry-and-evidence'
});

export const SERVICE_TO_SERVICE_PROPAGATED_FIELDS = Object.freeze({
  WORKLOAD_IDENTITY: 'calling-workload-identity', ACTOR_REFERENCE: 'original-actor-reference-where-required',
  SCOPE: 'tenant-and-property-scope', DELEGATED_PURPOSE: 'delegated-purpose-and-capability',
  CORRELATION: 'correlation-and-trace-context', EXPIRY_AUDIENCE: 'expiry-and-audience'
});

export const DATA_ACCESS_PATTERNS = Object.freeze({
  BOUND_REPOSITORIES: 'tenant-bound-repository-instances', MANDATORY_PARAMETERS: 'mandatory-tenant-parameter-types',
  SESSION_CONTEXT: 'policy-enforced-session-context', PARTITION_ROUTING: 'trusted-partition-routing',
  INCLUSIVE_KEYS: 'tenant-inclusive-keys-and-constraints'
});

export const RUNTIME_CACHE_ACCESS_RULES = Object.freeze({
  NO_GLOBAL_REUSE: 'never-reuse-tenant-data-through-a-global-cache-key',
  VALIDATE_OWNERSHIP: 'validate-cached-resource-ownership-when-risk-warrants',
  INVALIDATE_ON_CHANGE: 'invalidate-on-tenant-state-ownership-or-critical-policy-change',
  SCOPED_NEGATIVE_DECISIONS: 'keep-negative-authorization-decisions-tenant-scoped',
  NO_FALLBACK_ON_MISS: 'do-not-fall-back-to-another-tenants-value-after-a-miss'
});

export const RUNTIME_EVENT_ENVELOPE_FIELDS = Object.freeze({
  EVENT_ID: 'event-identifier-and-type', SCHEMA_VERSION: 'schema-version', TIME: 'occurred-and-published-time',
  TENANT_ID: 'tenant-identifier', PROPERTY: 'property-scope-where-relevant', PRODUCER: 'producer-identity-and-authority',
  CORRELATION: 'correlation-and-causation', CLASSIFICATION: 'classification', IDEMPOTENCY: 'idempotency-or-sequence-information',
  PAYLOAD: 'payload-reference-or-minimized-payload'
});

export const EVENT_CONSUMPTION_STEPS = Object.freeze({
  VALIDATE_PRODUCER: 'validate-producer-and-schema', VALIDATE_SCOPE: 'validate-tenant-scope-and-current-binding',
  BOUNDED_CONTEXT: 'establish-a-bounded-execution-context', ROUTE: 'route-to-approved-placement',
  IDEMPOTENCY: 'apply-idempotency-within-tenant-scope', AUTHORIZED_DATA: 'process-only-authorized-data',
  EMIT_OUTCOME: 'emit-tenant-aware-outcome-and-telemetry'
});

export const BATCH_JOB_FIELDS = Object.freeze({
  SCOPE: 'tenant-and-property-scope', OWNING_CAPABILITY: 'owning-capability', INPUT_BOUNDARY: 'input-snapshot-or-query-boundary',
  BUDGET: 'resource-budget', CHECKPOINT: 'checkpoint-and-retry-behavior', LIFECYCLE: 'lifecycle-and-revocation-handling',
  OUTPUT_OWNERSHIP: 'output-ownership', EVIDENCE: 'evidence'
});

export const WORKFLOW_BINDING_PRESERVED_THROUGH = Object.freeze({
  ACTIVITIES: 'activities', HUMAN_TASKS: 'human-tasks', TIMERS: 'timers', SIGNALS_CALLBACKS: 'signals-and-callbacks',
  CHILD_WORKFLOWS: 'child-workflows', RETRIES_COMPENSATION: 'retries-and-compensation', PERSISTENCE: 'persistence-and-recovery'
});

export const ORCHESTRATOR_BINDING_TARGETS = Object.freeze({
  INSTRUCTIONS: 'instructions-and-policies', CONVERSATION: 'conversation-state', KNOWLEDGE_MEMORY: 'retrieved-knowledge-and-memory',
  MODEL_IO: 'model-requests-and-responses', TOOL_EXECUTION: 'tool-discovery-and-execution', SAFETY: 'safety-evaluation',
  BUDGETS: 'budgets-and-limits', EVIDENCE: 'evidence'
});

export const AGENT_GRANT_ELEMENTS = Object.freeze({
  TENANT: 'tenant', PROPERTY: 'property', PURPOSE: 'purpose', TOOLS: 'tools', DATA_CLASSES: 'data-classes',
  NETWORK_ACCESS: 'network-access', TIME: 'time', RESOURCES: 'resources', HUMAN_APPROVALS: 'human-approvals',
  DELEGATION_RULES: 'delegation-rules'
});

export const RUNTIME_MEMORY_SCOPE_LEVELS = Object.freeze({
  REQUEST: 'request', CONVERSATION: 'conversation', WORKFLOW: 'workflow', USER: 'user-within-tenant',
  PROPERTY: 'property', TENANT: 'tenant'
});

export const INTEGRATION_CONNECTION_FIELDS = Object.freeze({
  OWNER: 'owning-tenant-and-optional-property', EXTERNAL_PARTY: 'external-party-and-account-mapping',
  CREDENTIAL: 'credential-reference', PERMITTED_OPERATIONS: 'permitted-operations-and-data-classes',
  ENDPOINT_POLICY: 'endpoint-and-network-policy', RESIDENCY: 'residency-and-processor-obligations',
  RATE_LIMITS: 'rate-limits-and-schedules', CALLBACK: 'callback-validation', LIFECYCLE_OWNER: 'lifecycle-and-support-owner'
});

export const OUTBOUND_VALIDATION_FACTORS = Object.freeze({
  OWNERSHIP: 'tenant-ownership', BINDING: 'connection-binding', PURPOSE: 'purpose', CLASSIFICATION: 'data-classification',
  RECIPIENT: 'recipient', LEGAL_BASIS: 'consent-or-legal-basis', RESIDENCY: 'residency', QUOTA: 'quota',
  CONNECTION_STATE: 'current-connection-state'
});

export const EXTENSION_RUNTIME_CONTROLS = Object.freeze({
  APIS_DATA: 'apis-and-data', FILES_STORAGE: 'files-and-storage', NETWORK: 'network-destinations', SECRETS: 'secrets',
  COMPUTE: 'compute-and-duration', EVENTS_CALLBACKS: 'events-and-callbacks', USER_INTERACTION: 'user-interaction',
  LOGGING: 'logging-and-evidence'
});

export const OPERATOR_TOOL_CAPABILITIES = Object.freeze({
  SAFE_VIEWS: 'tenant-safe-health-and-metadata-views', REDACTED_DIAGNOSTICS: 'redacted-diagnostics-by-default',
  JIT_ACCESS: 'just-in-time-access-to-protected-content', TICKET_BINDING: 'ticket-or-incident-binding',
  TIME_LIMITS: 'time-limits-and-approvals', EXPORT_RESTRICTIONS: 'export-restrictions', ACTION_EVIDENCE: 'complete-action-evidence'
});

export const CONTEXT_EXPIRY_TRIGGERS = Object.freeze({
  EXPIRY_REACHED: 'its-expiry-is-reached', LIFECYCLE_CHANGE: 'tenant-property-or-membership-is-suspended-or-retired',
  DELEGATION_REVOKED: 'delegated-authority-is-revoked', POLICY_CHANGE: 'critical-policy-changes',
  CREDENTIAL_REVOKED: 'credential-or-session-is-revoked', EXECUTION_ENDS: 'workflow-or-agent-execution-ends',
  INTEGRATION_DISABLED: 'integration-connection-is-disabled'
});

export const RUNTIME_OBSERVABILITY_SIGNALS = Object.freeze({
  ESTABLISHMENT: 'context-establishment-success-and-failure', ROUTING: 'tenant-and-property-routing',
  OWNERSHIP_DENIALS: 'provider-ownership-denials', MISMATCH_ATTEMPTS: 'cross-tenant-mismatch-attempts',
  BACKLOG: 'queue-and-workflow-backlog', AGENT_EXECUTION: 'agent-and-tool-execution', DELIVERY: 'integration-delivery',
  THROTTLING: 'quota-and-throttling', VERSIONS: 'configuration-and-placement-versions'
});

export const RUNTIME_FAILURE_BEHAVIORS = Object.freeze({
  STABLE_ERROR: 'stable-non-revealing-error-response', CORRELATION: 'correlation-identifier',
  NO_PARTIAL_OUTPUT: 'no-partial-cross-tenant-output', ROLLBACK: 'rollback-or-compensation-where-applicable',
  QUARANTINE: 'quarantine-of-suspicious-messages', SECURITY_SIGNAL: 'security-signal-for-ownership-mismatch',
  RETRY_GUIDANCE: 'tenant-safe-retry-guidance'
});

export const RUNTIME_CONFORMANCE_TESTING_AREAS = Object.freeze({
  CLAIM_SPOOFING: 'external-claim-spoofing', MISSING_CONFLICTING: 'missing-and-conflicting-context',
  USER_SWITCHING: 'multi-tenant-user-switching', OWNERSHIP_VALIDATION: 'provider-ownership-validation',
  DELEGATION: 'service-to-service-delegation', CACHE_COLLISION: 'cache-collision',
  EVENT_LIFECYCLE: 'event-routing-retry-replay-and-dead-letters', BATCH_SCOPING: 'batch-and-background-job-scoping',
  EXECUTION_ISOLATION: 'workflow-agent-knowledge-and-memory-isolation', INTEGRATION_BINDING: 'inbound-and-outbound-integration-binding',
  EXTENSION_CONTAINMENT: 'extension-capability-containment', EXPIRY_SUSPENSION: 'context-expiry-and-suspension',
  SAFE_TELEMETRY: 'tenant-safe-telemetry-and-errors'
});

export const TENANT_AWARE_RUNTIME_ARCHITECTURAL_RULES = Object.freeze({
  EXPLICIT_ACROSS_BOUNDARIES: 'tenant-context-is-explicit-across-all-runtime-boundaries',
  VALIDATED_CLAIMS: 'external-tenant-claims-are-validated-before-internal-use',
  PROVIDERS_OWN_VALIDATION: 'gateways-establish-context-but-providers-own-resource-validation',
  NO_BROADENED_DELEGATION: 'service-delegation-cannot-broaden-authority',
  PRESERVED_EXECUTION_SCOPE: 'data-cache-event-workflow-agent-and-integration-execution-preserves-tenant-scope',
  REVALIDATED_RETRIES: 'async-retries-revalidate-current-lifecycle-and-authority-as-required',
  ISOLATION_OVER_RELEVANCE: 'knowledge-relevance-and-ai-reasoning-never-override-isolation',
  TENANT_BOUND_INTEGRATION: 'integration-credentials-and-endpoints-are-tenant-bound',
  EXPLICIT_EXTENSION_GRANTS: 'extensions-execute-with-explicit-tenant-capability-grants',
  NO_DEFAULT_TENANT: 'there-is-no-runtime-default-tenant'
});
