export const MULTI_TENANT_SECURITY_DATA_AND_OPERATIONS_REFERENCE_ERROR_CODE = 'MULTI_TENANT_SECURITY_DATA_AND_OPERATIONS_REFERENCE_INVALID';

export const TRUSTED_TENANT_CONTEXT_FIELDS = Object.freeze({
  TENANT: 'tenant', PROPERTY: 'property', ACTOR: 'actor', MEMBERSHIP_OR_WORKLOAD_BINDING: 'membership-or-workload-binding',
  PURPOSE: 'purpose', POLICY: 'policy', ENTITLEMENT: 'entitlement', LIFECYCLE: 'lifecycle', AUDIENCE: 'audience', EXPIRY: 'expiry', CORRELATION: 'correlation'
});

export const TEST_IDENTITY_ROLES = Object.freeze({
  TENANT_ADMINISTRATOR: 'tenant-administrator', PROPERTY_ADMINISTRATOR: 'property-administrator', PROPERTY_STAFF: 'property-staff',
  GUEST: 'guest', INTEGRATION_WORKLOAD: 'integration-workload', AGENT_EXECUTION: 'agent-execution', SUPPORT_OPERATOR: 'support-operator', PLATFORM_OPERATOR: 'platform-operator'
});

export const DATA_ISOLATION_PATHS = Object.freeze({
  TRANSACTIONAL_RECORDS: 'transactional-records', FILES_AND_OBJECTS: 'files-and-objects', CACHES: 'caches', SEARCH_AND_KNOWLEDGE_INDEXES: 'search-and-knowledge-indexes',
  MEMORY: 'memory', EVENTS_AND_QUEUES: 'events-and-queues', WORKFLOW_AND_AGENT_STATE: 'workflow-and-agent-state', INTEGRATION_PAYLOADS: 'integration-payloads',
  LOGS_METRICS_TRACES_AND_EVIDENCE: 'logs-metrics-traces-and-evidence', BACKUPS_AND_EXPORTS: 'backups-and-exports'
});

export const DATA_LIFECYCLE_FIXTURES = Object.freeze({
  CLASSIFICATION: 'classification', COLLECTION: 'collection', PURPOSE: 'purpose', CONSENT_WHERE_APPLICABLE: 'consent-where-applicable', RETENTION: 'retention',
  LEGAL_HOLD: 'legal-hold', EXPORT: 'export', CORRECTION: 'correction', ERASURE: 'erasure', BACKUP_EXPIRY: 'backup-expiry', PROVIDER_DISPOSITION: 'provider-disposition'
});

export const SECURITY_CONTROLS = Object.freeze({
  STRONG_IDENTITY_AND_SERVICE_AUTHENTICATION: 'strong-identity-and-service-authentication', LEAST_PRIVILEGE_AUTHORIZATION: 'least-privilege-authorization',
  TENANT_AWARE_PROVIDER_VALIDATION: 'tenant-aware-provider-validation', ENCRYPTION_IN_TRANSIT_AND_AT_REST: 'encryption-in-transit-and-at-rest', SECRET_MEDIATION: 'secret-mediation',
  NETWORK_SEGMENTATION_AND_EGRESS_POLICY: 'network-segmentation-and-egress-policy', SECURE_SUPPLY_CHAIN: 'secure-supply-chain', INPUT_AND_OUTPUT_VALIDATION: 'input-and-output-validation', PRIVILEGED_ACCESS_EVIDENCE: 'privileged-access-evidence'
});

export const TELEMETRY_CORRELATION_SIGNALS = Object.freeze({
  REQUEST: 'request', SERVICE: 'service', WORKFLOW: 'workflow', AI: 'ai', INTEGRATION: 'integration', EXTENSION: 'extension', DEPLOYMENT: 'deployment', INCIDENT: 'incident'
});

export const CAPACITY_AND_FAIRNESS_CONTROLS = Object.freeze({
  DISTINCT_TENANT_LOAD: 'distinct-tenant-load', INTERACTIVE_DEMAND: 'interactive-demand', BATCH_DEMAND: 'batch-demand', WORKFLOW_DEMAND: 'workflow-demand', AI_DEMAND: 'ai-demand',
  INTEGRATION_DEMAND: 'integration-demand', QUOTAS: 'quotas', FAIR_SCHEDULING: 'fair-scheduling', BACKPRESSURE: 'backpressure', RESERVED_CAPACITY: 'reserved-capacity', GRACEFUL_DEGRADATION: 'graceful-degradation'
});

export const INCIDENT_SCENARIOS = Object.freeze({
  SUSPECTED_CROSS_TENANT_QUERY: 'suspected-cross-tenant-query', COMPROMISED_INTEGRATION_CREDENTIAL: 'compromised-integration-credential', RUNAWAY_AGENT_OR_WORKFLOW: 'runaway-agent-or-workflow',
  NOISY_NEIGHBOR: 'noisy-neighbor', DATA_RESIDENCY_DRIFT: 'data-residency-drift', EXTENSION_VULNERABILITY: 'extension-vulnerability', REGIONAL_OR_CELL_OUTAGE: 'regional-or-cell-outage', TENANT_SPECIFIC_CORRUPTION: 'tenant-specific-corruption'
});

export const INCIDENT_RESPONSE_STEPS = Object.freeze({
  IDENTIFY_IMPACT: 'identify-impact', CONTAIN_SMALLEST_SAFE_SCOPE: 'contain-smallest-safe-scope', PRESERVE_EVIDENCE: 'preserve-evidence', RECOVER: 'recover', COMMUNICATE: 'communicate', REMEDIATE: 'remediate'
});

export const BACKUP_AND_RECOVERY_EXERCISES = Object.freeze({
  SERVICE_RESTORE: 'service-restore', TENANT_RESTORE_FROM_SHARED_BACKUP: 'tenant-restore-from-shared-backup', WORKFLOW_RECOVERY: 'workflow-recovery', CONFIGURATION_RECONSTRUCTION: 'configuration-reconstruction',
  KEY_AVAILABILITY: 'key-availability', RECONCILIATION: 'reconciliation', VALIDATION: 'validation'
});

export const CONTINUITY_ELEMENTS = Object.freeze({
  RTO: 'rto', RPO: 'rpo', DEPENDENCIES: 'dependencies', ALTERNATIVE_MODES: 'alternative-modes', FAILOVER: 'failover', COMMUNICATIONS: 'communications', MANUAL_PROCEDURES: 'manual-procedures', RETURN_TO_NORMAL: 'return-to-normal'
});

export const EVIDENCE_FIELDS = Object.freeze({
  WHO: 'who', TENANT_AND_PROPERTY: 'tenant-and-property', POLICY_AND_VERSION: 'policy-and-version', DECISION: 'decision', RESOURCE: 'resource', WHEN: 'when', OUTCOME: 'outcome', REMEDIATION: 'remediation'
});

export const MULTI_TENANT_SECURITY_REFERENCE_ACCEPTANCE_CRITERIA = Object.freeze({
  CROSS_TENANT_NEGATIVE_TESTS_PASS_ACROSS_ALL_DATA_PATHS: 'cross-tenant-negative-tests-pass-across-all-data-paths', REVOKED_ACCESS_STOPS_WITHIN_DEFINED_OBJECTIVES: 'revoked-access-stops-within-defined-objectives',
  TENANT_IMPACT_CAN_BE_IDENTIFIED_OPERATIONALLY: 'tenant-impact-can-be-identified-operationally', NOISY_NEIGHBOR_TESTS_PRESERVE_OTHER_TENANT_SERVICE: 'noisy-neighbor-tests-preserve-other-tenant-service',
  TENANT_RESTORE_AND_ERASURE_ARE_EVIDENCED: 'tenant-restore-and-erasure-are-evidenced', SUPPORT_ACCESS_IS_TIME_BOUNDED_AND_ATTRIBUTABLE: 'support-access-is-time-bounded-and-attributable'
});

export const MULTI_TENANT_SECURITY_ARCHITECTURAL_RULES = Object.freeze({
  SECURITY_AND_OPERATIONS_ARE_EXECUTABLE_REFERENCE_SCOPE: 'security-and-operations-are-executable-reference-scope', DATA_ISOLATION_INCLUDES_DERIVED_AND_OPERATIONAL_DATA: 'data-isolation-includes-derived-and-operational-data',
  PROVIDER_VALIDATION_COMPLEMENTS_GATEWAY_CONTROLS: 'provider-validation-complements-gateway-controls', RECOVERY_AND_DELETION_ARE_TENANT_AWARE_LIFECYCLE_OPERATIONS: 'recovery-and-deletion-are-tenant-aware-lifecycle-operations'
});
