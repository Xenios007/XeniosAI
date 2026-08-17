export const CONFIGURATION_ENTITLEMENTS_CUSTOMIZATION_ERROR_CODE = 'CONFIGURATION_ENTITLEMENTS_CUSTOMIZATION_INVALID';

export const CONFIG_PRINCIPLES = Object.freeze({
  GOVERNED_OPTIONS: 'configuration-changes-behavior-only-through-declared-governed-options',
  NON_WEAKENABLE: 'mandatory-platform-controls-cannot-be-weakened-by-tenant-settings',
  DETERMINISTIC: 'effective-configuration-is-deterministic-and-explainable',
  EXPLICIT_SCOPE: 'tenant-and-property-scope-is-explicit',
  VERSIONED: 'schemas-defaults-and-compatibility-are-versioned',
  REFERENCED_SECRETS: 'secrets-are-referenced-never-embedded-in-ordinary-configuration',
  ENTITLEMENT_DISTINCT: 'entitlement-is-distinct-from-configuration-and-authorization',
  RELEASE_DISTINCT: 'feature-release-is-distinct-from-tenant-purchase-or-permission',
  HIGH_RISK_CONTROLS: 'high-risk-changes-use-approval-staging-validation-and-rollback',
  NO_CODE_FORKS: 'tenant-variation-uses-configuration-or-approved-extension-points-not-code-forks',
  AI_WITHIN_BOUNDARIES: 'ai-configuration-remains-inside-platform-safety-and-authority-boundaries'
});

export const CONFIGURATION_CATEGORIES = Object.freeze({
  MANDATORY: 'platform-mandatory-controls', DEFAULTS: 'platform-defaults', ENVIRONMENT: 'environment-configuration',
  SERVICE_TIER: 'service-tier-configuration', TENANT: 'tenant-configuration', ORG_UNIT: 'organizational-unit-configuration',
  PROPERTY: 'property-configuration', WORKFLOW: 'workflow-or-capability-configuration', USER: 'user-preferences',
  REQUEST: 'runtime-request-options-explicitly-permitted-by-policy'
});

export const CONFIGURATION_HIERARCHY_LEVELS = Object.freeze({
  MANDATORY: 'mandatory-platform-controls', DEFAULTS: 'platform-and-environment-defaults',
  SERVICE_TIER: 'service-tier-entitlements-and-limits', TENANT: 'tenant-configuration',
  ORG_UNIT: 'organizational-unit-configuration-where-applicable', PROPERTY: 'property-configuration',
  CAPABILITY: 'capability-or-workflow-configuration', REQUEST: 'user-or-request-preferences-explicitly-allowed'
});

export const CONFIGURATION_ITEM_SCOPE_FIELDS = Object.freeze({
  OWNER: 'owning-capability', APPLICABILITY: 'tenant-and-property-applicability', SCHEMA: 'schema-and-version',
  DATA_TYPE: 'data-type-and-allowed-values', DEFAULT: 'default-value', OVERRIDE: 'override-rules',
  CLASSIFICATION: 'classification-and-sensitivity', VALIDATION: 'validation-and-dependencies', RISK: 'change-risk',
  TIMING: 'effective-and-expiry-time', ROLLOUT: 'rollout-and-rollback-behavior', EVIDENCE: 'evidence-requirements'
});

export const MANDATORY_PLATFORM_CONTROL_AREAS = Object.freeze({
  AUTHN_AUTHZ: 'authentication-and-authorization', ISOLATION: 'tenant-and-property-isolation',
  PRIVACY: 'privacy-and-data-minimization', CRYPTOGRAPHY: 'cryptography-and-secrets', AI_SAFETY: 'ai-safety-and-tool-boundaries',
  AUDIT: 'audit-evidence', RESIDENCY: 'data-residency-and-prohibited-transfer',
  SECURE_EXTENSION: 'secure-integration-and-extension-execution', OPERATIONAL: 'operational-protection-and-rate-limits'
});

export const CONFIGURATION_DOMAINS = Object.freeze({
  BRAND_EXPERIENCE: 'brand-and-experience', LOCALE_REGIONAL: 'locale-and-regional-behavior',
  HOSPITALITY_OPERATIONS: 'hospitality-operations', COMMERCIAL: 'commercial-behavior', WORKFLOW_APPROVAL: 'workflow-and-approval',
  KNOWLEDGE_MEMORY: 'knowledge-and-memory', AI_AGENT: 'ai-and-agent-behavior', INTEGRATION: 'integration', OPERATIONS: 'operations'
});

export const SCHEMA_GOVERNANCE_FIELDS = Object.freeze({
  IDENTITY: 'stable-key-or-resource-identity', STRUCTURE: 'value-structure-and-type', CONSTRAINTS: 'constraints-and-allowed-ranges',
  DEFAULT_NULL: 'default-and-null-semantics', SCOPE: 'scope-and-inheritance', SENSITIVITY: 'sensitivity-classification',
  DEPENDENCIES: 'dependencies-and-conflicts', COMPATIBILITY: 'compatibility-behavior', DEPRECATION: 'deprecation-and-migration',
  DOCUMENTATION: 'user-facing-documentation'
});

export const VERSIONING_SUPPORT_CAPABILITIES = Object.freeze({
  AUDIT: 'audit-and-attribution', SCHEDULING: 'effective-time-scheduling', STAGED_VALIDATION: 'staged-validation',
  ROLLBACK: 'rollback', REPRODUCTION: 'reproduction-of-historical-behavior', CACHE_INVALIDATION: 'cache-invalidation',
  EXECUTION_EVIDENCE: 'workflow-and-agent-execution-evidence', COMPATIBILITY_MIGRATION: 'compatibility-migration'
});

export const CONFIGURATION_RESOLUTION_STEPS = Object.freeze({
  CONTEXT: 'establish-trusted-tenant-and-property-context', LOAD_DEFAULTS: 'load-applicable-mandatory-controls-and-defaults',
  RESOLVE_TIER: 'resolve-service-tier-and-entitlements', APPLY_PRECEDENCE: 'apply-tenant-and-property-values-in-precedence-order',
  VALIDATE: 'validate-dependencies-and-policy', REJECT: 'reject-conflicting-or-unauthorized-overrides',
  PRODUCE_VIEW: 'produce-an-immutable-effective-view-with-provenance',
  CACHE: 'cache-using-tenant-property-schema-version-and-policy-scope'
});

export const INHERITANCE_OVERRIDE_BEHAVIORS = Object.freeze({
  FIXED: 'fixed-platform-value', INHERITED_NO_OVERRIDE: 'inherited-without-override',
  INHERITED_NARROWER: 'inherited-with-narrower-override', FULLY_CONFIGURABLE: 'fully-tenant-configurable-within-schema',
  PROPERTY_CONFIGURABLE: 'property-configurable-within-tenant-constraints', ADDITIVE: 'additive-composition',
  REPLACEMENT: 'explicit-replacement'
});

export const CONFIGURATION_VALIDATION_LEVELS = Object.freeze({
  SCHEMA: 'schema-validation', BUSINESS_RULE: 'business-rule-validation', CROSS_FIELD: 'cross-field-dependency-validation',
  OWNERSHIP: 'tenant-and-resource-ownership-validation', ENTITLEMENT: 'entitlement-validation',
  SECURITY_PRIVACY: 'security-and-privacy-policy-validation', RESIDENCY_INTEGRATION: 'residency-and-integration-validation',
  OPERATIONAL_CAPACITY: 'operational-and-capacity-validation', COMPATIBILITY: 'compatibility-validation'
});

export const CHANGE_LIFECYCLE_STAGES = Object.freeze({
  DRAFT: 'draft', VALIDATE: 'validate', REVIEW_APPROVE: 'review-and-approve-according-to-risk',
  SCHEDULE: 'schedule-or-stage', ACTIVATE: 'activate', OBSERVE: 'observe', CONFIRM_ROLLBACK: 'confirm-or-roll-back',
  RETIRE: 'retire-superseded-version'
});

export const STAGED_ROLLOUT_TARGETS = Object.freeze({
  SANDBOX: 'test-or-sandbox-environment', VALIDATION_PROPERTY: 'internal-validation-property',
  PILOT: 'explicit-pilot-properties', COHORT: 'percentage-or-cohort-within-one-tenant', TENANT: 'entire-tenant'
});

export const BRANDING_PREVENTIONS = Object.freeze({
  EXECUTABLE_CONTENT: 'executable-content-injection', INACCESSIBLE_PRESENTATION: 'inaccessible-color-or-typography-combinations',
  DECEPTIVE_PRESENTATION: 'deceptive-platform-or-security-presentation', CACHE_LEAKAGE: 'leakage-through-shared-asset-caches',
  CROSS_TENANT_ASSETS: 'references-to-assets-owned-by-another-tenant', UNREVIEWED_COLLECTION: 'unreviewed-collection-of-personal-data'
});

export const LOCALIZATION_DISTINCTIONS = Object.freeze({
  DISPLAY_LANGUAGE: 'display-language', CONTENT_LANGUAGE: 'content-language', CURRENCY: 'currency',
  TENANT_TIMEZONE: 'tenant-and-property-time-zone', USER_TIMEZONE: 'user-time-zone', BUSINESS_DATE: 'business-date',
  FORMATS: 'date-time-number-and-address-format', UNITS: 'measurement-units'
});

export const BUSINESS_RULE_REQUIREMENTS = Object.freeze({
  OWNING_DOMAIN: 'owning-domain', INPUTS_OUTPUTS: 'declared-inputs-and-outputs',
  DETERMINISM: 'deterministic-or-explicitly-non-deterministic-behavior', VALIDATION_CONFLICT: 'validation-and-conflict-handling',
  EFFECTIVE_TIME: 'effective-time', TEST_CASES: 'test-cases', DECISION_EVIDENCE: 'decision-evidence-where-material',
  VERSION_ROLLBACK: 'version-and-rollback'
});

export const AI_CONFIGURATION_ELEMENTS = Object.freeze({
  USE_CASES: 'approved-use-cases', TONE_INSTRUCTIONS: 'tone-and-domain-instructions', KNOWLEDGE_SOURCES: 'knowledge-sources',
  TOOL_ACCESS: 'tool-access-within-tenant-scope', APPROVAL_THRESHOLDS: 'human-approval-thresholds',
  MEMORY_RETENTION: 'memory-and-retention-policy', BUDGETS: 'cost-and-execution-budgets',
  MODEL_PREFERENCES: 'model-capability-preferences', EVALUATION_THRESHOLDS: 'evaluation-thresholds'
});

export const ENTITLEMENT_FIELDS = Object.freeze({
  SCOPE: 'tenant-and-optional-property-scope', CAPABILITY: 'capability-identifier', GRANT_SOURCE: 'grant-source',
  TIMING: 'effective-and-expiry-time', QUANTITY: 'quantity-or-tier-where-relevant', CONDITIONS: 'conditions-and-dependencies',
  STATUS: 'status-and-reason', COMMERCIAL: 'commercial-reference', APPROVAL: 'approval-and-evidence'
});

export const FEATURE_RELEASE_QUESTIONS = Object.freeze({
  DEPLOYED: 'is-the-feature-technically-deployed', RELEASED: 'is-the-feature-operationally-released-for-this-cohort',
  ENTITLED: 'is-the-tenant-entitled-to-use-it', AUTHORIZED: 'is-this-actor-authorized-for-this-operation'
});

export const SERVICE_TIER_ELEMENTS = Object.freeze({
  ENTITLEMENTS: 'feature-entitlements', QUOTAS: 'default-quotas', AVAILABILITY: 'availability-and-support-targets',
  CAPACITY: 'capacity-priority-or-reservation', ISOLATION: 'isolation-options', RECOVERY: 'backup-and-recovery-objectives',
  RETENTION_EXPORT: 'retention-or-export-capabilities', REPORTING: 'operational-reporting'
});

export const SELF_SERVICE_CAPABILITIES = Object.freeze({
  CURRENT_VALUES: 'clear-current-and-effective-values', SOURCE: 'source-and-inheritance', VALIDATION: 'validation-before-save',
  IMPACT: 'impact-and-dependency-information', PREVIEW: 'preview-where-useful', HISTORY: 'change-history',
  ROLLBACK: 'rollback-where-safe', APPROVAL_STATUS: 'approval-status'
});

export const EXTENSION_SETTING_FIELDS = Object.freeze({
  PACKAGE_VERSION: 'approved-package-and-version', SCOPE: 'tenant-and-property-scope', CAPABILITIES: 'granted-capabilities',
  DATA_ACCESS: 'data-access', NETWORK_ACCESS: 'network-access', RESOURCE_LIMITS: 'resource-limits',
  LIFECYCLE: 'lifecycle-and-rollback', EVIDENCE_OWNERSHIP: 'evidence-and-support-ownership'
});

export const SECRETS_PROHIBITED_LOCATIONS = Object.freeze({
  SOURCE_CONTROL: 'source-control', CONFIG_APIS: 'ordinary-configuration-apis', LOGS: 'logs-or-traces',
  WORKFLOW_DEFINITIONS: 'workflow-definitions', TENANT_EXPORT: 'tenant-export', SUPPORT_SCREENSHOTS: 'support-screenshots',
  CLIENT_PAYLOADS: 'client-side-feature-payloads'
});

export const PROPAGATION_DEFINITIONS = Object.freeze({
  CONVERGENCE: 'maximum-convergence-time', INVALIDATION_PATH: 'critical-invalidation-path',
  OUTAGE_BEHAVIOR: 'behavior-during-provider-outage', EVENT_ORDERING: 'event-ordering-and-replay',
  STALE_READ: 'stale-read-policy', RECONCILIATION: 'reconciliation'
});

export const CONFIGURATION_EVIDENCE_FIELDS = Object.freeze({
  REQUESTED_PREVIOUS: 'requested-and-previous-value', EFFECTIVE_VALUE: 'effective-resolved-value',
  SCOPE: 'tenant-and-property-scope', ACTOR: 'actor-and-delegated-authority', VALIDATION_POLICY: 'validation-and-policy-results',
  APPROVALS: 'approvals', VERSION_TIME: 'version-and-effective-time', ROLLOUT_OBSERVATION: 'rollout-observation-and-rollback',
  AFFECTED: 'affected-capabilities'
});

export const CONFIGURATION_OBSERVABILITY_SIGNALS = Object.freeze({
  RESOLUTION_FAILURES: 'configuration-read-and-resolution-failures', REJECTED_CHANGES: 'invalid-or-rejected-changes',
  PROPAGATION_LAG: 'propagation-lag', VERSION_DRIFT: 'version-drift', OVERRIDE_VIOLATIONS: 'override-policy-violations',
  ENTITLEMENT_MISMATCH: 'entitlement-mismatch', ROLLOUT_OUTCOMES: 'feature-rollout-outcomes',
  ROLLBACK_FREQUENCY: 'rollback-frequency', SECRET_RESOLUTION_FAILURES: 'secret-resolution-failures',
  PERFORMANCE_CHANGES: 'tenant-specific-performance-changes-after-activation'
});

export const CONFIGURATION_FAILURE_BEHAVIORS = Object.freeze({
  MANDATORY_ENFORCED: 'mandatory-controls-remain-enforced', HIGH_RISK_FAIL_CLOSED: 'high-risk-operations-fail-closed',
  SAFE_DEFAULT: 'low-risk-presentation-may-use-an-approved-safe-default',
  LAST_KNOWN_VALID: 'the-last-known-valid-version-may-be-used-only-where-policy-permits',
  CORRELATED_FAILURES: 'failures-are-correlated-and-surfaced-to-the-owning-team',
  NO_TENANT_FALLBACK: 'no-other-tenants-value-is-used-as-fallback'
});

export const CONFIGURATION_TESTING_COVERAGE_AREAS = Object.freeze({
  SCHEMA_BOUNDARY: 'schema-and-boundary-values', PRECEDENCE: 'precedence-and-inheritance',
  SEMANTICS: 'missing-null-empty-and-removal-semantics', ISOLATION: 'tenant-and-property-isolation',
  UNAUTHORIZED_OVERRIDES: 'unauthorized-overrides', MANDATORY_PRESERVATION: 'mandatory-control-preservation',
  ENTITLEMENT_AUTHZ_SEPARATION: 'entitlement-and-authorization-separation', SCHEDULED_ACTIVATION: 'scheduled-activation-and-time-zones',
  CACHE_PROPAGATION: 'cache-invalidation-and-propagation', ROLLOUT_ROLLBACK: 'rollout-and-rollback',
  AI_INTEGRATION_GUARDRAILS: 'ai-and-integration-guardrails', EXTENSION_LIMITS: 'extension-capability-limits',
  SECRET_NON_DISCLOSURE: 'secret-non-disclosure'
});

export const CONFIGURATION_ARCHITECTURAL_RULES = Object.freeze({
  SCHEMA_GOVERNED: 'tenant-variation-is-schema-governed-configuration-not-source-code-forks',
  DETERMINISTIC_PRECEDENCE: 'configuration-precedence-is-deterministic-and-inspectable',
  NON_OVERRIDABLE: 'mandatory-platform-controls-are-non-overridable',
  SEPARATE_DECISIONS: 'configuration-entitlement-feature-release-authorization-and-quota-are-separate-decisions',
  DOMAIN_AUTHORITATIVE: 'domain-owners-remain-authoritative-for-their-configuration-semantics',
  STAGED_HIGH_RISK: 'high-risk-changes-are-staged-approved-observed-and-reversible-where-practical',
  AI_NO_AUTHORITY_EXPANSION: 'ai-settings-cannot-expand-tenant-or-actor-authority',
  REFERENCED_SECRETS: 'integration-secrets-are-referenced-not-stored-in-configuration',
  APPROVED_EXTENSIONS_ONLY: 'extension-configuration-consumes-approved-arch-019-packages-and-capabilities',
  NO_CROSS_TENANT_FALLBACK: 'configuration-failures-never-fall-back-to-another-tenant'
});
