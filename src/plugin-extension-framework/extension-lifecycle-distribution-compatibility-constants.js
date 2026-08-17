export const EXTENSION_LIFECYCLE_DISTRIBUTION_COMPATIBILITY_ERROR_CODE = 'EXTENSION_LIFECYCLE_DISTRIBUTION_COMPATIBILITY_INVALID';

export const EXTENSION_LIFECYCLE_PRINCIPLES = Object.freeze({
  INDEPENDENT_LIFECYCLES: 'package-and-installation-lifecycles-are-independent',
  AUTHORIZED_TRANSITIONS: 'lifecycle-transitions-are-authorized-commands-with-evidence',
  VALIDATION_PRECEDES: 'validation-precedes-publication-and-activation',
  EXACT_DIGEST_RESOLUTION: 'installations-resolve-exact-package-digests',
  RESPECT_COMPATIBILITY: 'updates-respect-compatibility-and-tenant-policy',
  BOUNDED_AUTOMATIC_UPDATES: 'automatic-updates-remain-bounded-and-reversible-where-practical',
  SUSPENSION_OVERRIDES: 'security-suspension-can-override-ordinary-release-policy',
  DEPRECATION_MIGRATION: 'deprecation-provides-migration-and-usage-visibility',
  COMPLETE_UNINSTALL: 'uninstall-removes-execution-access-credentials-schedules-and-eligible-data',
  RECONCILED_STATE: 'lifecycle-state-is-reconciled-across-registry-host-tenant-and-marketplace-capabilities'
});

export const PACKAGE_LIFECYCLE_STATES = Object.freeze({
  DRAFT: 'draft', BUILT: 'built', VALIDATING: 'validating', IN_REVIEW: 'in-review', APPROVED: 'approved',
  PUBLISHED: 'published', RESTRICTED: 'restricted', DEPRECATED: 'deprecated', SUSPENDED: 'suspended',
  REVOKED: 'revoked', RETIRED: 'retired'
});

export const INSTALLATION_LIFECYCLE_STATES = Object.freeze({
  REQUESTED: 'requested', ASSESSING: 'assessing', APPROVED: 'approved', PROVISIONING: 'provisioning',
  VALIDATING: 'validating', ACTIVE: 'active', RESTRICTED: 'restricted', UPDATING: 'updating', SUSPENDED: 'suspended',
  UNINSTALLING: 'uninstalling', RETAINED: 'retained', REMOVED: 'removed'
});

export const EXTENSION_DESIGN_REGISTRATION_FIELDS = Object.freeze({
  PURPOSE_CONSUMERS: 'business-purpose-and-consumers', PUBLISHER_OWNER: 'publisher-and-support-owner',
  CLASS_RISK: 'extension-class-and-risk', EXTENSION_POINTS: 'extension-points-required',
  REQUESTED_RESOURCES: 'requested-data-actions-network-secrets-and-resources', SCOPE: 'tenant-and-property-scope',
  FAILURE_RECOVERY: 'failure-and-recovery-behavior', DISTRIBUTION_SCOPE: 'distribution-scope',
  COMMERCIAL_RIGHTS: 'commercial-and-rights-expectations'
});

export const BUILD_CANDIDATE_OUTPUTS = Object.freeze({
  CANDIDATE_PACKAGE: 'immutable-candidate-package', DIGEST: 'exact-digest', MANIFEST: 'validated-manifest',
  DEPENDENCY_INVENTORY: 'dependency-inventory', PROVENANCE: 'provenance-attestation', SCAN_RESULTS: 'test-and-scan-results',
  COMPATIBILITY_DECLARATION: 'compatibility-declaration', RELEASE_NOTES: 'release-notes',
  MIGRATION_ROLLBACK_INFO: 'migration-and-rollback-information'
});

export const VALIDATION_REVIEW_COVERAGE = Object.freeze({
  MANIFEST_SCHEMA: 'manifest-and-schema', CONFORMANCE: 'extension-point-conformance', ISOLATION: 'multi-tenant-isolation',
  AUTHORIZATION_BEHAVIOR: 'authorization-and-capability-behavior', DATA_PRIVACY: 'data-handling-and-privacy',
  NETWORK_PROCESSORS: 'network-destinations-and-processors', SECRETS_HANDLING: 'secrets-and-credential-handling',
  SUPPLY_CHAIN: 'supply-chain-security', RESOURCE_FAILURE: 'resource-and-failure-behavior',
  ACCESSIBILITY_TRUST: 'accessibility-and-user-trust', AI_SAFETY: 'ai-safety-and-tool-side-effects',
  SUPPORT_RECOVERY: 'support-recovery-and-uninstall', LICENSE_RIGHTS: 'license-and-rights'
});

export const PACKAGE_CERTIFICATION_FIELDS = Object.freeze({
  DIGEST: 'package-digest', PROFILE_VERSION: 'profile-and-version', SCOPE_EXCLUSIONS: 'scope-and-exclusions',
  EVIDENCE_REVIEWER: 'evidence-and-reviewer', ISSUE_DISPOSITION: 'issue-disposition', VALIDITY_DATE: 'validity-and-review-date'
});

export const EXTENSION_PUBLICATION_REQUIREMENTS = Object.freeze({
  APPROVED_PACKAGE: 'approved-package-and-manifest', PUBLISHER_AUTHORITY: 'publisher-authority',
  PROVENANCE_SIGNATURE: 'provenance-and-signature', DISTRIBUTION_ELIGIBILITY: 'distribution-eligibility',
  SUPPORT_ADVISORY: 'support-and-advisory-channel', COMPATIBILITY_METADATA: 'compatibility-metadata',
  DOCUMENTATION: 'required-documentation'
});

export const INSTALLATION_REQUEST_REVIEW_ITEMS = Object.freeze({
  IDENTITY: 'publisher-and-package-identity', CERTIFICATION_ADVISORIES: 'certification-and-advisories',
  CAPABILITIES: 'capabilities-requested', DATA_DESTINATIONS: 'data-and-external-destinations',
  PROPERTY_SCOPE: 'property-scope', RESOURCES_COST: 'resources-and-expected-cost',
  CONFIG_SECRETS: 'configuration-and-secrets-requirements', SUPPORT_UPDATE_POLICY: 'support-and-update-policy',
  UNINSTALL_DISPOSITION: 'uninstall-and-data-disposition'
});

export const INSTALLATION_ASSESSMENT_FACTORS = Object.freeze({
  CAPABILITY_REQUEST: 'package-capability-request', PUBLISHER_ELIGIBILITY: 'publisher-eligibility',
  PLATFORM_POLICY: 'platform-policy', TENANT_PROPERTY_POLICY: 'tenant-and-property-policy',
  INSTALLER_AUTHORITY: 'installer-delegated-authority', ENTITLEMENT: 'entitlement',
  CLASSIFICATION_RESIDENCY: 'data-classification-and-residency', PROCESSOR_APPROVAL: 'external-processor-approval',
  HOST_AVAILABILITY: 'host-availability-and-isolation-class', RESOURCE_CAPACITY: 'resource-capacity',
  EXISTING_CONFLICTS: 'existing-extension-conflicts'
});

export const EXTENSION_PROVISIONING_OUTPUTS = Object.freeze({
  INSTALLATION_IDENTITY: 'installation-identity', PACKAGE_BINDING: 'exact-package-binding',
  RUNTIME_PLACEMENT: 'isolated-runtime-placement', STORAGE_NAMESPACE: 'tenant-storage-namespace',
  CONFIG_VERSION: 'configuration-version', SECRET_REFERENCES: 'secret-references', EVENT_SUBSCRIPTIONS: 'event-subscriptions',
  SCHEDULES: 'schedules', NETWORK_POLICY: 'network-policy', RESOURCE_QUOTA: 'resource-quota',
  HEALTH_TELEMETRY: 'health-and-telemetry-views', SUPPORT_OWNERSHIP: 'support-ownership'
});

export const TENANT_SPECIFIC_VALIDATION_CHECKS = Object.freeze({
  ISOLATION: 'tenant-and-property-isolation', PROVIDER_AUTHORIZATION: 'capability-and-provider-authorization',
  CONFIG_SECRET_RESOLUTION: 'configuration-and-secret-resolution', NETWORK_BINDING: 'network-destination-binding',
  EXTENSION_POINT_COMPATIBILITY: 'extension-point-compatibility', EVENT_WORKFLOW_ROUTING: 'event-and-workflow-routing',
  HOST_LIMITS: 'host-resource-limits', HEALTH_TELEMETRY: 'health-and-telemetry',
  FAILURE_CONTAINMENT: 'failure-containment', UNINSTALL_READINESS: 'uninstall-readiness'
});

export const EXTENSION_COMPATIBILITY_DIMENSIONS = Object.freeze({
  PLATFORM_VERSION: 'platform-version', EXTENSION_POINT_VERSION: 'extension-point-version', MANIFEST_SCHEMA: 'manifest-schema',
  SDK_RUNTIME: 'plugin-sdk-and-runtime', PACKAGE_VERSION: 'package-version', DEPENDENCY_GRAPH: 'dependency-graph',
  INSTALLATION_CONFIG: 'installation-configuration', TENANT_DATA_SCHEMA: 'tenant-data-schema',
  EXTERNAL_PROVIDER_CONTRACT: 'external-provider-contract', HOST_ISOLATION_CLASS: 'host-isolation-class'
});

export const COMPATIBILITY_POLICY_ELEMENTS = Object.freeze({
  CHANGE_RULES: 'compatible-change-rules', BREAKING_CRITERIA: 'breaking-change-criteria', SUPPORT_WINDOWS: 'support-windows',
  TEST_SUITES: 'test-suites', DEPRECATION_SIGNALS: 'deprecation-signals', MIGRATION_TOOLING: 'migration-tooling',
  RETIREMENT_AUTHORITY: 'retirement-authority'
});

export const EXTENSION_UPDATE_POLICIES = Object.freeze({
  MANUAL: 'manual-update', MAINTENANCE_WINDOW: 'tenant-approved-maintenance-window',
  AUTO_PATCH: 'automatic-compatible-patch-updates', AUTO_MINOR: 'automatic-compatible-minor-updates',
  MANDATED_SECURITY: 'platform-mandated-security-update', VERSION_PIN: 'version-pin-with-an-approved-expiry'
});

export const UPDATE_ASSESSMENT_DIFFERENCES = Object.freeze({
  DIGEST_PROVENANCE: 'package-digest-and-provenance', MANIFEST_CAPABILITIES: 'manifest-and-requested-capabilities',
  DEPENDENCIES_ADVISORIES: 'dependencies-and-advisories', CONFIG_SCHEMA: 'configuration-schema',
  DATA_MIGRATION: 'data-migration', NETWORK_DESTINATIONS: 'network-destinations', RESOURCE_REQUIREMENTS: 'resource-requirements',
  EXTENSION_POINT_COMPATIBILITY: 'extension-point-compatibility', SUPPORT_LICENSE: 'support-and-license-terms'
});

export const STAGED_ROLLOUT_STAGES = Object.freeze({
  PUBLISHER_VALIDATION: 'publisher-validation', TEST_TENANTS: 'platform-test-tenants', PILOT: 'internal-or-partner-pilot',
  TENANT_COHORT: 'explicit-tenant-cohort', PROPERTY_SUBSET: 'property-subset', BROAD_INSTALLATIONS: 'broad-eligible-installations'
});

export const PACKAGE_DATA_MIGRATION_DECLARATIONS = Object.freeze({
  SCHEMA: 'source-and-target-schema', SCOPE: 'tenant-and-installation-scope',
  IDEMPOTENCY: 'idempotency-and-checkpointing', ONLINE_OFFLINE: 'online-or-offline-behavior',
  VALIDATION_RECONCILIATION: 'validation-and-reconciliation', ROLLBACK_STRATEGY: 'rollback-or-forward-fix-strategy',
  RETENTION: 'retention-of-prior-representation'
});

export const LIFECYCLE_ROLLBACK_ACCOUNTING_ITEMS = Object.freeze({
  IRREVERSIBLE_EFFECTS: 'irreversible-external-side-effects', FORWARD_ONLY_CHANGES: 'forward-only-data-changes',
  PUBLISHED_EVENTS: 'events-already-published', COMPLETED_ACTIVITIES: 'workflow-activities-completed',
  AGENT_ACTIONS: 'agent-or-tool-actions-executed', ROTATED_CREDENTIALS: 'credentials-rotated'
});

export const EMERGENCY_SECURITY_ACTIONS = Object.freeze({
  BLOCK_INSTALLATIONS: 'block-new-installations', REVOKE_CAPABILITY: 'revoke-capability',
  PREVENT_LOADING: 'prevent-package-loading', TERMINATE_EXECUTION: 'terminate-execution',
  DISABLE_NETWORK: 'disable-network-access', ROTATE_CREDENTIALS: 'rotate-or-revoke-credentials',
  QUARANTINE_DATA: 'quarantine-data-and-logs', REQUIRE_UPDATE: 'require-update-or-uninstall'
});

export const EXTENSION_DEPRECATION_FIELDS = Object.freeze({
  REASON: 'reason', AFFECTED: 'affected-versions-and-installations', REPLACEMENT: 'supported-replacement',
  MIGRATION_GUIDANCE: 'migration-guidance', CUTOFF: 'new-install-cutoff', SUPPORT_DEADLINE: 'support-deadline',
  RETIREMENT_DATE: 'retirement-date', COMMUNICATION: 'usage-and-tenant-communication', EXCEPTION_PROCESS: 'exception-process'
});

export const EXTENSION_UNINSTALL_STEPS = Object.freeze({
  STOP_EXECUTIONS: 'stop-new-executions', COMPLETE_RUNNING_WORK: 'complete-cancel-or-compensate-running-work',
  REMOVE_SCHEDULES: 'remove-schedules-subscriptions-callbacks-and-ui-contributions',
  REVOKE_GRANTS: 'revoke-grants-secrets-access-and-credentials', DISCONNECT_INTEGRATIONS: 'disconnect-external-integrations',
  EXPORT_DATA: 'export-approved-configuration-or-data', APPLY_RETENTION: 'apply-retention-legal-hold-or-erasure',
  REMOVE_DERIVATIVES: 'remove-caches-indexes-and-derivatives', RECONCILE_BILLING: 'reconcile-usage-and-billing',
  PRESERVE_EVIDENCE: 'preserve-required-evidence'
});

export const LIFECYCLE_RECONCILIATION_COMPARISONS = Object.freeze({
  REGISTRY_STATUS: 'registry-package-status', LISTING: 'marketplace-listing', DESIRED_STATE: 'installation-desired-state',
  HOST_DIGEST: 'host-loaded-package-digest', GRANTS: 'capability-grants', CONFIG_SECRET_REFERENCES: 'configuration-and-secret-references',
  SUBSCRIPTIONS_SCHEDULES: 'event-subscriptions-and-schedules', STORAGE_NETWORK_POLICY: 'storage-and-network-policy',
  ADVISORY_IMPACT: 'advisory-impact', UNINSTALL_DISPOSITION: 'uninstall-data-disposition'
});

export const LIFECYCLE_EVIDENCE_ELEMENTS = Object.freeze({
  ACTORS: 'actors', COMMANDS: 'commands', DIGESTS: 'package-digests', POLICY: 'policy', APPROVALS: 'approvals',
  CAPABILITY_CHANGES: 'capability-changes', VALIDATION: 'validation', ROLLOUT: 'rollout', HEALTH: 'health',
  UPDATE: 'update', ROLLBACK: 'rollback', SUSPENSION: 'suspension', MIGRATION: 'migration', UNINSTALL: 'uninstall',
  PROVIDER_RECONCILIATION: 'provider-reconciliation'
});

export const EXTENSION_LIFECYCLE_ARCHITECTURAL_RULES = Object.freeze({
  SEPARATE_LIFECYCLES: 'package-and-installation-lifecycles-remain-separate',
  TENANT_SPECIFIC_ACTIVATION: 'activation-requires-tenant-specific-validation',
  LOCKED_DIGESTS: 'installations-lock-exact-package-digests',
  NO_SILENT_CAPABILITY_ADD: 'updates-cannot-silently-add-capability',
  BOUNDED_AUTOMATIC_UPDATES: 'automatic-updates-operate-only-inside-approved-compatibility-policy',
  GATED_ROLLOUT: 'staged-rollout-uses-health-and-safety-gates',
  ACCOUNTED_ROLLBACK: 'rollback-plans-account-for-irreversible-effects',
  OVERRIDING_SUSPENSION: 'emergency-suspension-can-override-ordinary-release-policy',
  RECONCILED_UNINSTALL: 'uninstall-is-a-reconciled-access-and-data-lifecycle',
  CONTINUOUS_RECONCILIATION: 'registry-host-grant-and-tenant-states-are-continuously-reconciled'
});
