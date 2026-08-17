export const EXTENSION_DOMAIN_CLASSIFICATION_ERROR_CODE = 'EXTENSION_DOMAIN_CLASSIFICATION_INVALID';

export const EXTENSION_DOMAIN_PRINCIPLES = Object.freeze({
  STABLE_IDENTITY: 'extension-identity-is-stable-across-package-versions', IMMUTABLE_VERSIONS: 'package-versions-are-immutable',
  SEPARATE_LISTINGS: 'marketplace-listings-are-separate-from-registry-identity',
  SCOPED_INSTALLATIONS: 'installations-are-tenant-or-platform-scoped-aggregates',
  GRANTS_SEPARATE_FROM_REQUESTS: 'capability-grants-are-separate-from-manifest-requests',
  ATTRIBUTABLE_EXECUTIONS: 'executions-are-attributable-to-an-installation-and-package-version',
  OWNERS_RETAIN_AUTHORITY: 'extension-point-owners-retain-domain-authority',
  RISK_CHANGES_CONTROLS: 'risk-classification-changes-controls-not-business-ownership',
  NO_IMPLICIT_ACCESS: 'relationships-do-not-grant-implicit-access',
  PRESERVED_HISTORY: 'historical-lifecycle-and-ownership-are-preserved'
});

export const EXTENSION_CORE_AGGREGATES = Object.freeze({
  EXTENSION: 'extension-aggregate', PACKAGE_VERSION: 'package-version-aggregate', INSTALLATION: 'installation-aggregate',
  PUBLISHER: 'publisher-aggregate', EXTENSION_POINT: 'extension-point-aggregate'
});

export const EXTENSION_SUPPORTING_ENTITIES = Object.freeze({
  LISTING: 'listing', CAPABILITY_REQUEST: 'capability-request', CAPABILITY_GRANT: 'capability-grant',
  CONFIGURATION_VERSION: 'configuration-version', EXECUTION: 'execution', ADVISORY: 'advisory', CERTIFICATION: 'certification'
});

export const PACKAGE_COORDINATE_FIELDS = Object.freeze({
  EXTENSION_IDENTITY: 'extension-identity', PACKAGE_VERSION: 'package-version', REGISTRY: 'registry',
  DIGEST: 'immutable-digest', SCHEMA_VERSION: 'manifest-schema-version', PUBLISHER_IDENTITY: 'publisher-identity'
});

export const EXTENSION_CONTRIBUTION_CLASSES = Object.freeze({
  INTEGRATION: 'integration', EVENT: 'event', WORKFLOW: 'workflow', AI_TOOL: 'ai-tool', AGENT: 'agent',
  KNOWLEDGE: 'knowledge', EXPERIENCE: 'experience', DATA: 'data', DEVICE: 'device', PROTOCOL: 'protocol'
});

export const EXTENSION_PUBLISHER_CLASSIFICATIONS = Object.freeze({
  FIRST_PARTY: 'first-party', TENANT_DEVELOPED: 'tenant-developed', APPROVED_PARTNER: 'approved-partner',
  COMMERCIAL_THIRD_PARTY: 'commercial-third-party', COMMUNITY: 'community', EXPERIMENTAL: 'experimental'
});

export const EXTENSION_RISK_CLASSIFICATION_LEVELS = Object.freeze({
  LOW: 'low', MODERATE: 'moderate', HIGH: 'high', RESTRICTED: 'restricted'
});

export const EXTENSION_POINT_CATEGORIES = Object.freeze({
  REQUEST_RESPONSE: 'request-response-operations', COMMANDS: 'commands-or-actions', QUERIES: 'queries',
  EVENTS_SUBSCRIPTIONS: 'events-and-subscriptions', WORKFLOW: 'workflow-definitions-or-activities',
  AGENT_TOOLS: 'agent-tools-or-skills', KNOWLEDGE_STAGES: 'knowledge-ingestion-or-processing-stages',
  UI_SLOTS: 'ui-slots-and-actions', SCHEDULED_JOBS: 'scheduled-jobs', IMPORT_EXPORT: 'import-and-export-handlers',
  NOTIFICATIONS: 'notification-channels', DEVICE_COMMANDS: 'device-commands-or-telemetry'
});

export const EXTENSION_POINT_OWNERSHIP_RESPONSIBILITIES = Object.freeze({
  SEMANTICS: 'business-semantics', ELIGIBLE_TYPES: 'eligible-extension-types', CONTRACT_SCHEMA: 'contract-and-schema',
  AUTHORITY_DATA: 'authority-and-data-requirements', TRANSACTION_BOUNDARY: 'ordering-and-transaction-boundary',
  ERROR_BEHAVIOR: 'error-retry-and-compensation-behavior', RESOURCE_LIMITS: 'resource-and-concurrency-limits',
  OBSERVABILITY: 'observability-and-evidence', COMPATIBILITY: 'compatibility-and-deprecation',
  SUPPORT: 'support-and-incident-obligations'
});

export const EXTENSION_COMPOSITION_MODELS = Object.freeze({
  SINGLE_PROVIDER: 'exactly-one-selected-provider', ORDERED_PIPELINE: 'ordered-pipeline',
  PARALLEL_FAN_OUT: 'parallel-fan-out-with-independent-results', FIRST_SUCCESSFUL: 'first-successful-provider',
  ADVISORY_AGGREGATION: 'advisory-aggregation', TENANT_ROUTING: 'tenant-configured-routing',
  POLICY_SELECTED: 'policy-selected-provider'
});

export const EXTENSION_AUTHORITY_VALIDATION_CHECKS = Object.freeze({
  STATUS: 'extension-and-installation-status', IDENTITY: 'package-and-execution-identity',
  CONTEXT: 'tenant-and-property-context', CAPABILITY: 'granted-capability',
  ACTOR_AUTHORITY: 'acting-user-service-workflow-or-agent-authority', OWNERSHIP: 'resource-ownership',
  POLICY: 'purpose-entitlement-and-policy', LIFECYCLE_STATE: 'current-limits-and-lifecycle-state'
});

export const EXTENSION_INSTALLATION_SCOPE_OPTIONS = Object.freeze({
  TENANT: 'one-tenant', PROPERTIES: 'explicit-properties-inside-a-tenant', ORG_UNIT: 'a-tenant-organizational-unit',
  ENVIRONMENT: 'one-environment', PLATFORM_CAPABILITY: 'a-platform-capability-under-restricted-governance'
});

export const EXTENSION_OWNED_DATA_FIELDS = Object.freeze({
  OWNERSHIP: 'tenant-and-installation-ownership', SCHEMA_VERSION: 'schema-and-version',
  PROVENANCE: 'source-and-provenance', CLASSIFICATION: 'data-classification', RETENTION: 'retention-and-disposition',
  PORTABILITY: 'portability', ENCRYPTION_PLACEMENT: 'encryption-and-placement'
});

export const EXTENSION_DEPENDENCY_TYPES = Object.freeze({
  PLATFORM_CAPABILITIES: 'platform-capabilities', EXTENSION_POINT_CONTRACTS: 'extension-point-contract-versions',
  SDK_RUNTIME: 'sdk-runtime-versions', PACKAGE_LIBRARIES: 'package-libraries', OTHER_EXTENSIONS: 'other-extensions',
  EXTERNAL_SERVICES: 'external-services'
});

export const EXTENSION_RELATIONSHIP_MODEL_ITEMS = Object.freeze({
  PUBLISHER_OWNS_EXTENSION: 'publisher-owns-extension', EXTENSION_HAS_VERSIONS: 'extension-has-package-versions',
  PACKAGE_IMPLEMENTS_POINTS: 'package-implements-extension-points', LISTING_PRESENTS: 'listing-presents-extension',
  INSTALLATION_SELECTS: 'tenant-installation-selects-package', INSTALLATION_RECEIVES_GRANTS: 'installation-receives-grants',
  EXECUTION_USES_INSTALLATION: 'execution-uses-installation', ADVISORY_AFFECTS: 'advisory-affects-packages-or-extensions',
  CERTIFICATION_EVALUATES: 'certification-evaluates-a-package-against-a-profile'
});

export const EXTENSION_DOMAIN_EVENTS = Object.freeze({
  REGISTERED: 'extension-registered', PUBLISHER_VERIFIED: 'publisher-verified', PACKAGE_PUBLISHED: 'package-published',
  CERTIFICATION_CHANGED: 'package-certification-changed', ADVISORY_ISSUED: 'advisory-issued', PACKAGE_SUSPENDED: 'package-suspended',
  INSTALLATION_REQUESTED: 'installation-requested', INSTALLATION_APPROVED: 'installation-approved',
  CAPABILITY_GRANTED: 'capability-granted', INSTALLATION_ACTIVATED: 'installation-activated',
  INSTALLATION_UPDATED: 'installation-updated', INSTALLATION_RESTRICTED: 'installation-restricted',
  INSTALLATION_UNINSTALLED: 'installation-uninstalled', EXTENSION_RETIRED: 'extension-retired'
});

export const EXTENSION_DOMAIN_INVARIANTS = Object.freeze({
  ONE_EXTENSION_PER_PACKAGE: 'a-package-belongs-to-one-extension-identity',
  IMMUTABLE_AFTER_PUBLICATION: 'a-package-version-and-digest-cannot-be-changed-after-publication',
  EXACT_DIGEST_RESOLUTION: 'an-installation-resolves-to-an-exact-package-digest',
  NO_CROSS_TENANT_REFERENCE: 'a-tenant-installation-cannot-reference-another-tenants-grants-or-configuration',
  BOUNDED_GRANT: 'a-grant-cannot-exceed-the-packages-declared-compatible-capabilities-or-platform-policy',
  BOUNDED_EXECUTION: 'an-execution-cannot-outlive-permitted-installation-or-grant-state-without-approved-completion-semantics',
  REVOKED_PACKAGE_BLOCKED: 'a-revoked-package-cannot-start-new-executions',
  LISTING_NOT_RUNTIME: 'a-listing-does-not-determine-runtime-state',
  BOUNDED_DATA_OWNERSHIP: 'an-extension-cannot-own-authoritative-domain-data-outside-its-declared-bounded-data'
});

export const EXTENSION_SERVICE_BOUNDARIES = Object.freeze({
  REGISTRY_SERVICE: 'extension-registry-service', PUBLISHER_TRUST_SERVICE: 'publisher-trust-service',
  MARKETPLACE_CATALOG_SERVICE: 'marketplace-catalog-service', REVIEW_CERTIFICATION_SERVICE: 'review-and-certification-service',
  INSTALLATION_SERVICE: 'installation-service', CAPABILITY_GRANT_SERVICE: 'capability-grant-service',
  EXTENSION_HOST_SERVICE: 'extension-host-service', ADVISORY_REVOCATION_SERVICE: 'advisory-and-revocation-service',
  USAGE_SERVICE: 'extension-usage-service'
});

export const EXTENSION_FAILURE_BOUNDARIES = Object.freeze({
  PACKAGE_VERSION: 'package-version', INSTALLATION: 'installation', TENANT: 'tenant',
  HOST_POOL: 'host-pool-or-isolation-class', EXTENSION_POINT: 'extension-point', EXTERNAL_DESTINATION: 'external-destination'
});

export const EXTENSION_GOVERNANCE_OWNERSHIP_OBJECTS = Object.freeze({
  EXTENSION_POINT: 'extension-point', EXTENSION_IDENTITY: 'extension-identity', PACKAGE_VERSION: 'package-version',
  LISTING: 'listing', INSTALLATION: 'installation', CAPABILITY_GRANT: 'capability-grant', RUNTIME_HOST: 'runtime-host',
  EXTENSION_DATA: 'extension-data', CERTIFICATION: 'certification', ADVISORY_REVOCATION: 'advisory-and-revocation'
});

export const EXTENSION_DOMAIN_ARCHITECTURAL_RULES = Object.freeze({
  SEPARATE_OBJECTS: 'extension-identity-package-listing-installation-grant-and-execution-are-separate-domain-objects',
  RISK_FROM_CAPABILITY: 'risk-derives-from-capability-and-operation-not-publisher-category-alone',
  OWNERS_RETAIN_SEMANTICS: 'extension-point-owners-retain-business-semantics-and-compatibility-responsibility',
  LOCKED_VERSIONS: 'installations-lock-to-exact-package-versions-and-digests',
  NO_IMPLICIT_CAPABILITY: 'relationships-never-create-implicit-capability',
  TENANT_SCOPED_DATA: 'extension-owned-data-remains-tenant-scoped-and-lifecycle-governed',
  DECLARED_DEPENDENCIES: 'dependencies-are-declared-and-do-not-install-silently',
  RESTRICTED_PLATFORM_CAPABILITIES: 'platform-wide-capabilities-are-restricted-and-separately-governed',
  MINIMAL_EVENT_METADATA: 'domain-events-carry-minimal-sensitive-metadata'
});
