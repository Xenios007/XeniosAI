export const CAPABILITY_SECURITY_ISOLATION_ERROR_CODE = 'CAPABILITY_SECURITY_ISOLATION_INVALID';

export const CAPABILITY_SECURITY_PRINCIPLES = Object.freeze({
  UNTRUSTED_BY_DEFAULT: 'extensions-are-untrusted-by-default',
  EXPLICIT_ENFORCEABLE: 'capability-is-explicitly-granted-and-continuously-enforceable',
  MANDATORY_SCOPE: 'tenant-and-property-scope-is-mandatory', DEFENSE_IN_DEPTH: 'host-and-provider-controls-form-defense-in-depth',
  NO_AMBIENT_ACCESS: 'no-ambient-credentials-or-direct-database-access-are-permitted',
  DENY_BY_DEFAULT_EGRESS: 'network-egress-is-deny-by-default',
  BOUNDED_DATA_USE: 'data-use-is-purpose-classification-and-retention-bounded',
  ISOLATED_BY_INSTALLATION: 'execution-and-storage-are-isolated-by-installation',
  NO_DELEGATION_EXPANSION: 'delegation-cannot-expand-capability',
  RAPID_REVOCATION: 'security-state-can-revoke-active-authority-rapidly',
  COMPLETE_SAFE_EVIDENCE: 'evidence-is-complete-without-leaking-secrets-or-tenant-content'
});

export const EXTENSION_THREAT_MODEL_ITEMS = Object.freeze({
  MALICIOUS_PACKAGE: 'malicious-publisher-or-package', COMPROMISED_CREDENTIALS: 'compromised-publisher-credentials',
  VULNERABLE_DEPENDENCY: 'vulnerable-dependency', FORGED_MANIFEST: 'forged-manifest-or-package-substitution',
  EXCESSIVE_CAPABILITY: 'excessive-capability-request', CONFUSED_DEPUTY: 'confused-deputy-access-through-the-host',
  CROSS_TENANT_ACCESS: 'cross-tenant-data-access', SECRET_THEFT: 'secret-theft', UNDECLARED_EXPORT: 'undeclared-data-export',
  COMMAND_AND_CONTROL: 'network-command-and-control', HOST_ESCAPE: 'host-escape', RESOURCE_EXHAUSTION: 'resource-exhaustion',
  PERSISTENT_AFTER_REVOCATION: 'persistent-execution-after-revocation', UI_CREDENTIAL_CAPTURE: 'ui-credential-capture-or-deception',
  PROMPT_INJECTION: 'prompt-injection-into-extension-provided-ai-tools', UNSAFE_UPDATE: 'unsafe-update-or-rollback',
  EVIDENCE_TAMPERING: 'evidence-tampering'
});

export const SECURITY_CAPABILITY_GRANT_FIELDS = Object.freeze({
  EXTENSION_INSTALLATION: 'extension-and-installation', PACKAGE_BOUNDS: 'package-compatibility-bounds',
  SCOPE: 'tenant-and-property-scope', CAPABILITY_ID: 'capability-identifier', OPERATIONS: 'operations-and-resources',
  DATA_CLASSIFICATION: 'data-classification-and-purpose', ACTING_IDENTITIES: 'acting-identities-or-execution-classes',
  EXTERNAL_DESTINATIONS: 'external-destinations', SECRET_REFERENCES: 'secret-references', TIME_SCHEDULE: 'time-and-schedule',
  RESOURCE_LIMITS: 'resource-limits', DELEGATION_POLICY: 'delegation-policy', APPROVAL_EVIDENCE: 'approval-policy-version-and-evidence'
});

export const GRANT_DERIVATION_LAYERS = Object.freeze({
  EXTENSION_POINT_ELIGIBILITY: 'extension-point-eligibility', MANIFEST_REQUEST: 'manifest-request',
  PUBLISHER_ELIGIBILITY: 'publisher-eligibility', REVIEW_RESTRICTIONS: 'package-review-restrictions',
  PLATFORM_SECURITY_POLICY: 'platform-security-policy', TENANT_PROPERTY_POLICY: 'tenant-and-property-policy',
  INSTALLER_AUTHORITY: 'installer-delegated-authority', ENTITLEMENT: 'entitlement',
  CURRENT_STATE: 'current-tenant-installation-and-package-state', RUNTIME_AUTHORITY: 'runtime-actor-workflow-or-agent-authority',
  RESOURCE_RISK_CONDITIONS: 'resource-and-risk-conditions'
});

export const CAPABILITY_GRANULARITY_EXAMPLES = Object.freeze({
  READ_AMENITIES: 'read-approved-property-amenities', CREATE_NOTIFICATION: 'create-a-notification-through-a-selected-channel',
  SUBSCRIBE_EVENT: 'subscribe-to-one-event-schema', EXECUTE_ACTIVITY: 'execute-a-named-workflow-activity',
  READ_KNOWLEDGE_CLASS: 'read-one-knowledge-source-class', CALL_ENDPOINT: 'call-an-approved-external-endpoint',
  STORE_NAMESPACE: 'store-data-in-an-installation-namespace'
});

export const EXTENSION_RUNTIME_IDENTITY_FIELDS = Object.freeze({
  HOST_WORKLOAD: 'host-workload-identity', EXTENSION_IDENTITY: 'extension-identity', INSTALLATION_IDENTITY: 'installation-identity',
  PACKAGE_DIGEST: 'package-digest', EXECUTION_ID: 'execution-identifier', CONTEXT: 'tenant-and-property-context',
  INITIATING_ACTOR: 'initiating-actor-or-process-reference', PURPOSE_GRANT: 'purpose-and-capability-grant',
  EXPIRY_CORRELATION: 'expiry-and-correlation'
});

export const EXTENSION_TENANT_ISOLATION_DIMENSIONS = Object.freeze({
  RUNTIME_COMPARTMENTS: 'runtime-processes-or-equivalent-compartments', STORAGE_FILES: 'storage-and-files',
  CACHES: 'caches', QUEUES_SUBSCRIPTIONS: 'queues-and-event-subscriptions', CONFIG_SECRETS: 'configuration-and-secrets',
  NETWORK_POLICY: 'network-policy', TELEMETRY: 'logs-traces-metrics-and-evidence', USAGE_BILLING: 'usage-and-billing',
  BACKUPS_EXPORTS: 'backups-and-exports'
});

export const HOST_ISOLATION_CLASSES = Object.freeze({
  DECLARATIVE: 'declarative', SANDBOXED_CODE: 'sandboxed-code', ISOLATED_WORKLOAD: 'isolated-workload',
  DEDICATED_HOST: 'dedicated-host'
});

export const HOST_SECURITY_CONTROLS = Object.freeze({
  DIGEST_STATUS_VERIFICATION: 'package-digest-and-status-verification', IMAGE_INTEGRITY: 'runtime-image-or-environment-integrity',
  LEAST_PRIVILEGE_IDENTITY: 'least-privilege-host-identity', READ_ONLY_ASSETS: 'read-only-package-assets',
  EPHEMERAL_EXECUTION: 'ephemeral-execution-where-appropriate', FILESYSTEM_NAMESPACE: 'filesystem-namespace',
  SYSTEM_CALL_RESTRICTIONS: 'system-call-or-runtime-restrictions', NETWORK_POLICY: 'network-policy',
  RESOURCE_LIMITS: 'resource-limits', SECRET_MEDIATION: 'secret-mediation', API_EVENT_MEDIATION: 'api-and-event-mediation',
  LOGGING_TERMINATION: 'logging-and-termination'
});

export const PROVIDER_ENFORCEMENT_CHECKS = Object.freeze({
  HOST_EXECUTION_IDENTITY: 'host-and-execution-identity', CONTEXT: 'tenant-and-property-context',
  INSTALLATION_GRANT: 'current-installation-and-grant', RESOURCE_OWNERSHIP: 'resource-tenant-ownership',
  ACTOR_AUTHORITY: 'initiating-actor-or-delegated-authority', PURPOSE_ENTITLEMENT: 'purpose-and-entitlement',
  OPERATION_POLICY: 'operation-specific-policy', RATE_RESOURCE_LIMITS: 'rate-and-resource-limits'
});

export const EXTENSION_DATA_ACCESS_PROHIBITIONS = Object.freeze({
  CONNECT_DATABASES: 'connect-to-service-databases', USE_STORAGE_CREDENTIALS: 'use-internal-storage-credentials',
  ENUMERATE_RESOURCES: 'enumerate-other-tenant-resources', BYPASS_FILTERS: 'bypass-provider-filters',
  REASSIGN_OWNERSHIP: 'reassign-resource-ownership', STORE_BEYOND_PURPOSE: 'store-data-beyond-granted-purpose',
  UNRELATED_TRAINING_USE: 'use-tenant-data-for-unrelated-training-or-analytics'
});

export const EXTENSION_STORAGE_POLICY_FIELDS = Object.freeze({
  DATA_CLASSES: 'data-classes-allowed', CAPACITY: 'capacity', ENCRYPTION: 'encryption',
  PLACEMENT_RESIDENCY: 'placement-and-residency', ACCESS_PRINCIPALS: 'access-principals',
  BACKUP_RECOVERY: 'backup-and-recovery', RETENTION_HOLD: 'retention-and-legal-hold',
  EXPORT_UNINSTALL: 'export-and-uninstall-disposition'
});

export const SECRET_MEDIATION_CONTROLS = Object.freeze({
  BINDING: 'tenant-and-installation-binding', DESTINATION_BINDING: 'destination-and-capability-binding',
  SHORT_LIVED: 'short-lived-credentials-where-possible', NON_EXPORTABLE: 'non-exportability',
  ROTATION_REVOCATION: 'rotation-and-revocation', REDACTION: 'redaction-from-logs-and-errors', ACCESS_EVIDENCE: 'access-evidence'
});

export const EXTENSION_NETWORK_SECURITY_CONTROLS = Object.freeze({
  DESTINATION_IDENTITY: 'approved-destination-identity', DNS_ADDRESS_POLICY: 'dns-and-address-policy',
  PROTOCOL_PORT: 'protocol-and-port', TENANT_CONNECTION: 'tenant-connection', DATA_CLASSIFICATION: 'data-classification',
  PURPOSE: 'purpose', RATE_PAYLOAD_LIMITS: 'rate-and-payload-limits', RESIDENCY_PROCESSOR_POLICY: 'residency-and-processor-policy',
  TRANSPORT_SECURITY: 'transport-security'
});

export const INBOUND_CONNECTIVITY_CONTROLS = Object.freeze({
  AUTHENTICATION: 'authentication', CONNECTION_BINDING: 'tenant-connection-binding', SCHEMA_VALIDATION: 'schema-validation',
  THREAT_PROTECTION: 'threat-protection', REPLAY_CONTROL: 'replay-control', QUOTA: 'quota', CORRELATION: 'correlation'
});

export const EXTENSION_EVENT_SECURITY_FIELDS = Object.freeze({
  SCHEMAS: 'schemas', DIRECTION: 'direction', TENANT_SCOPE: 'tenant-scope', FILTERS: 'filters', VOLUME: 'volume',
  REPLAY: 'replay', RETENTION: 'retention'
});

export const WORKFLOW_AGENT_SECURITY_PROHIBITIONS = Object.freeze({
  EXPAND_SCOPE: 'expand-tenant-or-property-scope', DISCOVER_UNGRANTED_TOOLS: 'discover-ungranted-tools',
  UNBOUNDED_CHILDREN: 'spawn-unbounded-child-executions', PERSIST_CREDENTIALS: 'persist-credentials-in-state-or-memory',
  MODEL_OUTPUT_AS_AUTHORIZATION: 'treat-model-output-as-authorization', BYPASS_APPROVAL: 'bypass-human-approval'
});

export const UI_EXTENSION_SECURITY_CONTROLS = Object.freeze({
  ISOLATED_ORIGIN: 'isolated-origin-or-equivalent-sandbox', CSP: 'content-security-policy',
  TYPED_MESSAGING: 'typed-host-messaging', EXPLICIT_GRANTS: 'explicit-data-and-action-grants',
  DISPLAY_INTEGRITY: 'tenant-context-display-integrity', NAVIGATION_CONTROLS: 'navigation-controls',
  DEVICE_POLICY: 'clipboard-camera-microphone-file-and-notification-policy',
  ACCESSIBILITY_REVIEW: 'accessibility-and-anti-deception-review'
});

export const MCP_SECURITY_VERIFICATION_ITEMS = Object.freeze({
  SERVER_IDENTITY: 'server-identity', TRANSPORT: 'transport', TOOL_SCHEMAS: 'tool-schemas',
  RESOURCE_DISCOVERY: 'resource-discovery', PROMPTS: 'prompts', REQUESTED_OPERATIONS: 'requested-operations',
  DATA_CLASSIFICATIONS: 'data-classifications', EXTERNAL_DESTINATIONS: 'external-destinations',
  USER_AGENT_AUTHORITY: 'user-or-agent-authority', RESPONSE_CONTENT: 'response-content'
});

export const SUPPLY_CHAIN_ADMISSION_CHECKS = Object.freeze({
  PACKAGE_DIGEST: 'package-digest', PUBLISHER: 'publisher', PROVENANCE: 'provenance', SIGNATURE: 'signature',
  DEPENDENCY_ADVISORY_STATUS: 'dependency-and-advisory-status', REVIEW_PROFILE: 'review-profile',
  COMPATIBILITY: 'compatibility', INSTALLATION_POLICY: 'installation-policy'
});

export const RESOURCE_CONTAINMENT_LIMITS = Object.freeze({
  CPU: 'cpu-or-execution-units', MEMORY: 'memory', DURATION: 'duration', CONCURRENCY: 'concurrency', STORAGE: 'storage',
  API_EVENT_CALLS: 'api-and-event-calls', MODEL_TOOL_USE: 'model-and-tool-use', NETWORK_VOLUME: 'network-volume',
  RETRIES_SCHEDULES: 'retries-and-schedules', LOG_TELEMETRY_VOLUME: 'log-and-telemetry-volume'
});

export const EXTENSION_FAILURE_CONTAINMENT_CONTROLS = Object.freeze({
  TIMEOUTS: 'timeouts', CANCELLATION: 'cancellation', CIRCUIT_BREAKERS: 'circuit-breakers', BULKHEADS: 'bulkheads',
  BOUNDED_RETRIES: 'bounded-retries', BACKPRESSURE: 'backpressure', HEALTH_QUARANTINE: 'health-quarantine',
  HOST_RECYCLING: 'host-recycling', COMPENSATING_WORKFLOW: 'compensating-workflow'
});

export const SECURITY_REVOCATION_TARGETS = Object.freeze({
  CAPABILITY_GRANT: 'capability-grant', SECRET_CREDENTIAL: 'secret-or-credential', NETWORK_DESTINATION: 'network-destination',
  INSTALLATION: 'installation', PACKAGE_VERSION: 'package-version', EXTENSION: 'extension', PUBLISHER: 'publisher',
  HOST_CLASS: 'host-class'
});

export const SECURITY_INCIDENT_RESPONSE_STEPS = Object.freeze({
  IDENTIFY: 'identify-package-installations-tenants-grants-and-executions',
  CONTAIN: 'contain-package-loading-capability-network-or-credentials',
  PRESERVE_EVIDENCE: 'preserve-host-provider-registry-and-publisher-evidence',
  ASSESS: 'assess-tenant-data-actions-and-external-transfers', NOTIFY: 'notify-required-stakeholders',
  REMEDIATE: 'patch-rebuild-rotate-update-or-uninstall', RECONCILE: 'reconcile-data-and-side-effects',
  RETEST_CLOSE: 'retest-and-close-remediation'
});

export const CAPABILITY_SECURITY_EVIDENCE_TYPES = Object.freeze({
  PACKAGE_ADMISSION: 'package-admission', GRANT_DECISIONS: 'grant-decisions', SECRET_ACCESS: 'secret-access',
  PROVIDER_AUTHORIZATION: 'provider-authorization', NETWORK_CONNECTIONS: 'network-connections', DATA_EXPORT: 'data-export',
  EVENT_USE: 'event-use', EXECUTION: 'execution', RESOURCE_LIMITS: 'resource-limits', DENIALS: 'denials',
  SUSPENSION: 'suspension', INCIDENT_ACTIONS: 'incident-actions'
});

export const CAPABILITY_SECURITY_TESTING_AREAS = Object.freeze({
  CAPABILITY_MISMATCH: 'manifest-capability-mismatch', SUBSTITUTION_FAILURE: 'package-substitution-and-signature-failure',
  FORGED_CONTEXT: 'forged-tenant-context', DIRECT_OBJECT_ACCESS: 'direct-object-cross-tenant-access',
  HOST_ESCAPE_TEST: 'host-escape-and-neighboring-execution-access', SECRET_LEAKAGE: 'secret-leakage',
  ALLOWLIST_BYPASS: 'network-allowlist-bypass', EVENT_SPOOFING: 'event-spoofing-and-replay',
  UI_CREDENTIAL_CAPTURE_TEST: 'ui-credential-capture', MCP_INJECTION: 'mcp-prompt-or-tool-description-injection',
  RESOURCE_EXHAUSTION_TEST: 'resource-exhaustion', REVOCATION_DURING_EXECUTION: 'revocation-during-execution',
  UNINSTALL_PERSISTENCE: 'uninstall-persistence'
});

export const CAPABILITY_SECURITY_ARCHITECTURAL_RULES = Object.freeze({
  INTERSECTION_MODEL: 'effective-capability-is-an-intersection-of-manifest-policy-tenant-consent-and-runtime-authority',
  DUAL_ENFORCEMENT: 'host-and-provider-enforcement-are-both-required',
  NO_AMBIENT_ACCESS: 'no-extension-receives-ambient-credentials-or-database-access',
  DENY_BY_DEFAULT_BOUND: 'network-is-deny-by-default-and-destination-bound',
  SCOPED_STORAGE_EVIDENCE: 'storage-and-evidence-are-tenant-and-installation-scoped',
  RISK_BASED_ISOLATION: 'isolation-class-is-risk-based',
  UNTRUSTED_UI_MCP: 'ui-and-mcp-extensions-are-untrusted-input-and-code-boundaries',
  PROPAGATED_BUDGETS: 'resource-budgets-propagate-through-workflow-and-agent-delegation',
  BOUNDED_REVOCATION: 'revocation-affects-active-capability-within-defined-objectives',
  PACKAGE_TO_TENANT_IMPACT_MODEL: 'extension-compromise-has-a-package-to-tenant-impact-model'
});
