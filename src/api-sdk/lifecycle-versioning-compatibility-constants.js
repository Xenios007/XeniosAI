export const API_LIFECYCLE_VERSIONING_COMPATIBILITY_ERROR_CODE = 'API_LIFECYCLE_VERSIONING_COMPATIBILITY_INVALID';

export const API_LIFECYCLE_OBJECTIVES = Object.freeze({
  STABLE_COMMITMENTS: 'stable-contract-commitments',
  PREDICTABLE_EVOLUTION: 'predictable-evolution',
  INDEPENDENT_PROVIDER_CHANGE: 'independent-provider-implementation-change',
  BACKWARD_COMPATIBILITY: 'backward-compatibility-whenever-practical',
  BREAKING_BOUNDARIES: 'explicit-breaking-change-boundaries',
  EVIDENCE_CLASSIFICATION: 'evidence-based-change-classification',
  PROGRESSIVE_INTRODUCTION: 'progressive-introduction',
  SAFE_MIGRATION: 'safe-consumer-migration',
  BOUNDED_PARALLEL_SUPPORT: 'bounded-parallel-version-support',
  CLEAR_DEPRECATION: 'clear-deprecation',
  CONTROLLED_EXCEPTIONS: 'controlled-exceptions',
  RELIABLE_RETIREMENT: 'reliable-retirement',
  EMERGENCY_RESPONSE: 'emergency-risk-response',
  TRACEABLE_DECISIONS: 'traceable-decisions',
  VENDOR_NEUTRAL_PORTABILITY: 'vendor-neutral-portability'
});

export const API_LIFECYCLE_DOMAINS = Object.freeze({
  API_PRODUCT: 'api-product-lifecycle',
  CONTRACT: 'contract-lifecycle',
  RELEASE: 'release-lifecycle',
  SDK: 'sdk-lifecycle',
  CONSUMER_ADOPTION: 'consumer-adoption-lifecycle'
});

export const API_PRODUCT_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  DESIGNING: 'designing',
  UNDER_REVIEW: 'under-review',
  APPROVED: 'approved',
  REGISTERED: 'registered',
  RELEASED: 'released',
  ACTIVE: 'active',
  RESTRICTED: 'restricted',
  SUSPENDED: 'suspended',
  DEPRECATED: 'deprecated',
  RETIRED: 'retired',
  ARCHIVED: 'archived'
});

export const API_LIFECYCLE_TRANSITION_FIELDS = Object.freeze({
  CURRENT_STATE: 'current-state',
  REQUESTED_NEXT_STATE: 'requested-next-state',
  REQUESTING_IDENTITY: 'requesting-identity',
  REQUIRED_AUTHORITY: 'required-authority',
  PRODUCT_CONTRACT_VERSIONS: 'product-and-contract-versions',
  PRECONDITIONS: 'preconditions',
  EVIDENCE: 'evidence',
  APPROVALS: 'approvals',
  ENVIRONMENT: 'environment',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  CONSUMER_IMPACT: 'consumer-impact',
  EFFECTIVE_TIME: 'effective-time',
  NOTIFICATIONS: 'notifications',
  ROLLBACK_REVERSAL: 'rollback-or-reversal-behavior',
  OPERATIONAL_BEHAVIOR: 'resulting-operational-behavior'
});

export const API_LIFECYCLE_GATES = Object.freeze({
  PROPOSAL: 'proposal-gate',
  DESIGN: 'design-gate',
  REVIEW: 'review-gate',
  APPROVAL: 'approval-gate',
  RELEASE: 'release-gate',
  ACTIVATION: 'activation-gate',
  CHANGE: 'change-gate',
  DEPRECATION: 'deprecation-gate',
  RETIREMENT: 'retirement-gate'
});

export const API_VERSION_IDENTITY_TYPES = Object.freeze({
  PRODUCT_VERSION: 'api-product-version',
  CONTRACT_VERSION: 'logical-contract-version',
  MESSAGE_SCHEMA_VERSION: 'message-or-schema-version',
  EVENT_VERSION: 'event-version',
  PROVIDER_RELEASE_VERSION: 'provider-release-version',
  SDK_VERSION: 'sdk-version',
  DOCUMENTATION_REVISION: 'documentation-revision',
  POLICY_VERSION: 'policy-version',
  ENVIRONMENT_ACTIVATION: 'environment-activation'
});

export const API_SEMVER_COMPONENTS = Object.freeze({
  MAJOR: 'major-breaking-change-to-supported-consumer-behavior',
  MINOR: 'minor-backward-compatible-capability-addition',
  PATCH: 'patch-backward-compatible-correction'
});

export const API_COMPATIBILITY_BOUNDARY_FIELDS = Object.freeze({
  PRODUCT_SURFACE: 'api-product-and-surface',
  CONTRACT_FAMILY: 'contract-version-family',
  CONSUMER_CLASSES: 'consumer-classes',
  OPERATIONS: 'operations',
  MESSAGES: 'messages',
  EVENTS: 'events',
  CALLBACKS: 'callbacks',
  STREAMS: 'streams',
  SDKS: 'sdks',
  SERVICE_COMMITMENTS: 'service-commitments',
  SUPPORT_PERIOD: 'support-period',
  EXCLUSIONS: 'explicit-exclusions'
});

export const API_COMPATIBILITY_DIMENSIONS = Object.freeze({
  STRUCTURAL: 'structural-compatibility',
  SEMANTIC: 'semantic-compatibility',
  BEHAVIORAL: 'behavioral-compatibility',
  SECURITY: 'security-compatibility',
  AUTHORIZATION: 'authorization-compatibility',
  TENANT: 'tenant-compatibility',
  PROPERTY: 'property-compatibility',
  DATA_CLASSIFICATION: 'data-classification-compatibility',
  TEMPORAL: 'temporal-compatibility',
  CONSISTENCY_FRESHNESS: 'consistency-and-freshness-compatibility',
  ERROR: 'error-compatibility',
  IDEMPOTENCY: 'idempotency-compatibility',
  CONCURRENCY: 'concurrency-compatibility',
  ORDERING: 'ordering-compatibility',
  PERFORMANCE: 'performance-compatibility',
  LIMIT_QUOTA: 'limit-and-quota-compatibility',
  EVENT_REPLAY: 'event-and-replay-compatibility',
  CALLBACK: 'callback-compatibility',
  STREAM: 'stream-compatibility',
  SDK: 'sdk-compatibility',
  OPERATIONAL: 'operational-compatibility'
});

export const API_COMPATIBILITY_CLASSIFICATIONS = Object.freeze({
  COMPATIBLE: 'compatible',
  CONDITIONALLY_COMPATIBLE: 'conditionally-compatible',
  BREAKING: 'breaking',
  UNKNOWN: 'unknown'
});

export const API_POTENTIALLY_COMPATIBLE_CHANGES = Object.freeze({
  OPTIONAL_REQUEST_FIELD: 'add-optional-request-field-with-safe-absence',
  RESPONSE_FIELD: 'add-response-field-with-unknown-field-tolerance',
  NEW_OPERATION: 'add-new-operation',
  EVENT_FIELD: 'add-non-required-event-field',
  OPEN_ENUM_VALUE: 'add-open-enumeration-value-with-unknown-handling',
  EXPAND_LIMIT: 'expand-documented-limit-without-weakening-fairness',
  IMPROVE_LATENCY: 'improve-latency-within-commitments',
  DOC_CORRECTION: 'correct-documentation-without-behavior-change',
  SDK_CONVENIENCE: 'add-sdk-convenience-method-without-existing-interface-change'
});

export const API_CONDITIONALLY_COMPATIBLE_CHANGES = Object.freeze({
  NEGOTIATED_FIELDS: 'new-fields-visible-after-capability-negotiation',
  EXPLICIT_EVENT_SUBSCRIBERS: 'new-event-types-for-explicit-subscribers',
  OPT_IN_OPERATIONS: 'new-surface-operations-for-opted-in-consumers',
  CERTIFIED_ENUMS: 'expanded-enum-values-for-certified-consumers',
  CONFIGURED_SDK_BEHAVIOR: 'new-sdk-behavior-behind-explicit-configuration',
  APPROVED_HIGHER_LIMITS: 'higher-limits-for-approved-tenants-or-consumers',
  CONFIGURED_PROPERTY_SCOPE: 'new-property-scope-after-tenant-configuration'
});

export const API_BREAKING_CHANGE_TYPES = Object.freeze({
  REMOVE_FIELD: 'remove-field',
  RENAME_FIELD: 'rename-field',
  CHANGE_FIELD_TYPE: 'change-field-type',
  OPTIONAL_TO_REQUIRED: 'make-optional-input-required',
  CHANGE_NULLABILITY: 'change-nullability',
  NARROW_RANGE: 'narrow-range',
  REDUCE_PRECISION: 'reduce-supported-precision',
  CHANGE_COLLECTION_SHAPE: 'change-collection-shape',
  REMOVE_OPERATION: 'remove-operation',
  REMOVE_EVENT_TYPE: 'remove-event-type',
  CLOSE_OPEN_ENUM: 'close-open-enumeration',
  CHANGE_FIELD_MEANING: 'change-field-meaning-without-name-change',
  CHANGE_UNITS: 'change-units',
  CHANGE_DEFAULT: 'change-default-behavior',
  CHANGE_TIME_SEMANTICS: 'change-local-or-universal-time-semantics',
  CHANGE_SUCCESS_MEANING: 'change-success-meaning',
  CHANGE_AUTHORITY: 'change-authoritative-or-informational-status'
});

export const API_CHANGE_ASSESSMENT_FIELDS = Object.freeze({
  PRODUCT_CONTRACT: 'product-and-contract',
  CHANGE_DESCRIPTION: 'change-description',
  REQUESTING_ACTOR: 'requesting-actor',
  AFFECTED_OPERATIONS: 'affected-operations',
  AFFECTED_MESSAGES: 'affected-messages',
  AFFECTED_CONSUMERS: 'affected-consumers',
  COMPATIBILITY_DIMENSIONS: 'compatibility-dimensions',
  CLASSIFICATION: 'classification',
  EVIDENCE: 'evidence',
  SECURITY_PRIVACY_IMPACT: 'security-and-privacy-impact',
  TENANT_PROPERTY_IMPACT: 'tenant-and-property-impact',
  SDK_DOC_IMPACT: 'sdk-and-documentation-impact',
  MIGRATION_REQUIRED: 'migration-required',
  APPROVALS: 'approvals',
  ROLLOUT: 'rollout',
  ROLLBACK_ROLLFORWARD: 'rollback-or-roll-forward'
});

export const API_RELEASE_ACTIVATION_FIELDS = Object.freeze({
  PRODUCT_CONTRACT_VERSIONS: 'product-and-contract-versions',
  PROVIDER_ARTIFACT: 'provider-artifact-and-configuration',
  PROVENANCE_INTEGRITY: 'provenance-and-integrity',
  SDK_DOC_VERSIONS: 'sdk-and-documentation-versions',
  POLICY_VERSIONS: 'policy-versions',
  TARGET_ENVIRONMENTS: 'target-environments',
  TENANT_PROPERTY_SCOPES: 'eligible-tenant-and-property-scopes',
  CONFORMANCE_EVIDENCE: 'conformance-evidence',
  RECOVERY_PLAN: 'rollback-or-roll-forward-plan',
  RELEASE_AUTHORITY: 'release-authority',
  CAPACITY: 'capacity',
  OBSERVABILITY: 'observability',
  SUPPORT: 'support',
  SUSPENSION_CONTROL: 'controlled-suspension-capability'
});

export const API_ACTIVATION_SCOPES = Object.freeze({
  ENVIRONMENT: 'environment',
  PRODUCT_SURFACE: 'product-surface',
  CONTRACT_VERSION: 'contract-version',
  TENANT: 'tenant',
  PROPERTY: 'property',
  CONSUMER_CLASS: 'consumer-class',
  OPERATION: 'operation'
});

export const API_PARALLEL_VERSION_REQUIREMENTS = Object.freeze({
  OWNER: 'owner',
  SUPPORTED_VERSIONS: 'supported-versions',
  ROUTING_POLICY: 'routing-policy',
  CONSUMER_INVENTORY: 'consumer-inventory',
  CAPACITY_PLAN: 'capacity-plan',
  SUPPORT_MODEL: 'support-model',
  SECURITY_PATCHING: 'security-patching',
  OBSERVABILITY: 'observability',
  MIGRATION_PLAN: 'migration-plan',
  EXIT_DATE: 'exit-date'
});

export const API_VERSION_ROUTING_PROHIBITIONS = Object.freeze({
  UNVERIFIED_CLIENT_LABELS: 'unverified-client-labels',
  TENANT_AS_VERSION: 'tenant-identifiers-as-implicit-versions',
  PROPERTY_AS_VERSION: 'property-identifiers-as-implicit-versions',
  HIDDEN_HEURISTICS: 'hidden-heuristic-routing',
  UNDOCUMENTED_PAYLOAD_INSPECTION: 'undocumented-payload-inspection'
});

export const API_MIGRATION_PLAN_FIELDS = Object.freeze({
  AFFECTED_CONSUMER: 'affected-consumer',
  CURRENT_VERSION: 'current-version',
  TARGET_VERSION: 'target-version',
  REQUIRED_CHANGES: 'required-changes',
  SDK_UPGRADE: 'sdk-upgrade',
  CREDENTIAL_POLICY_CHANGES: 'credential-or-policy-changes',
  TENANT_PROPERTY_CONFIG: 'tenant-and-property-configuration',
  DATA_TRANSFORMATION: 'data-transformation',
  TEST_PLAN: 'test-plan',
  ENVIRONMENT_PLAN: 'environment-plan',
  PRODUCTION_ACTIVATION: 'production-activation',
  ROLLBACK_CONTINGENCY: 'rollback-or-contingency',
  SUPPORT_CONTACTS: 'support-contacts',
  COMPLETION_CRITERIA: 'completion-criteria',
  DEADLINE: 'deadline',
  EVIDENCE: 'evidence'
});

export const API_DEPRECATION_NOTICE_FIELDS = Object.freeze({
  AFFECTED_INTERFACE: 'affected-product-surface-contract-operation-field-event-or-sdk',
  REASON: 'reason',
  REPLACEMENT: 'replacement',
  ANNOUNCEMENT_DATE: 'announcement-date',
  NEW_ADOPTION_CUTOFF: 'new-adoption-cutoff',
  END_OF_SUPPORT: 'end-of-standard-support-date',
  RETIREMENT_TARGET: 'retirement-target',
  MIGRATION_GUIDE: 'migration-guide',
  CONSUMER_IMPACT: 'known-consumer-impact',
  SUPPORT_ROUTE: 'support-route',
  EXCEPTION_PROCESS: 'exception-process',
  STATUS_REFERENCE: 'status-page-or-catalog-reference'
});

export const API_DEPRECATION_ENFORCEMENT_MECHANISMS = Object.freeze({
  CATALOG_STATUS: 'catalog-and-documentation-status',
  SDK_WARNINGS: 'sdk-warnings',
  BUILD_TEST_WARNINGS: 'build-or-test-warnings',
  CONSUMER_NOTIFICATIONS: 'consumer-notifications',
  NEW_ACCESS_RESTRICTIONS: 'new-access-restrictions',
  CONTRACT_LINTING: 'contract-linting',
  DASHBOARDS: 'operational-dashboards',
  APPROVED_QUOTA_RESTRICTIONS: 'quota-restrictions-where-approved',
  SUPPORT_LEVEL_CHANGES: 'support-level-changes'
});

export const API_EXCEPTION_FIELDS = Object.freeze({
  REQUESTING_CONSUMER_OWNER: 'requesting-consumer-and-owner',
  JUSTIFICATION: 'business-justification',
  CURRENT_TARGET_VERSIONS: 'current-and-target-versions',
  TENANT_PROPERTIES: 'affected-tenant-and-properties',
  RISK: 'risk',
  SECURITY_PRIVACY_IMPACT: 'security-and-privacy-impact',
  DURATION: 'required-duration',
  COMPENSATING_CONTROLS: 'compensating-controls',
  MIGRATION_PLAN: 'migration-plan',
  EXPIRATION: 'expiration',
  APPROVAL: 'approval',
  MONITORING: 'monitoring',
  EVIDENCE: 'evidence'
});

export const API_RETIREMENT_READINESS_FIELDS = Object.freeze({
  NOTICE_COMPLETED: 'required-notice-completed',
  CONSUMERS_MIGRATED: 'known-consumers-migrated-or-closed',
  EXCEPTIONS_RESOLVED: 'exceptions-resolved',
  TRAFFIC_ABSENT: 'traffic-absent-or-understood',
  UNKNOWN_CONSUMER_RISK: 'unknown-consumer-risk-assessed',
  DEPENDENCIES_UPDATED: 'dependencies-updated',
  SDK_DOCS_UPDATED: 'sdks-and-documentation-updated',
  ROUTING_READY: 'gateway-and-routing-changes-ready',
  DELIVERY_RESOLVED: 'callbacks-streams-and-subscriptions-resolved',
  DATA_CACHE_DISPOSITION: 'data-and-cache-disposition-ready',
  SUPPORT_OPERATIONS_READY: 'support-and-operations-ready',
  EMERGENCY_PLAN: 'rollback-or-emergency-plan-defined',
  EVIDENCE_COMPLETE: 'evidence-complete'
});

export const API_EMERGENCY_TRIGGERS = Object.freeze({
  ACTIVE_EXPLOITATION: 'active-exploitation',
  CREDENTIAL_COMPROMISE: 'credential-compromise',
  CROSS_TENANT_EXPOSURE: 'cross-tenant-exposure',
  CROSS_PROPERTY_EXPOSURE: 'cross-property-exposure',
  SEVERE_DATA_CORRUPTION: 'severe-data-corruption',
  UNSAFE_BUSINESS_OUTCOMES: 'unsafe-business-outcomes',
  REGULATORY_LEGAL: 'regulatory-or-legal-instruction',
  PROVIDER_INTEGRITY_FAILURE: 'provider-integrity-failure'
});

export const API_ROLLBACK_SAFETY_FIELDS = Object.freeze({
  PRIOR_VERSION_SUPPORTED: 'prior-version-secure-and-supported',
  CONTRACT_DATA_COMPATIBLE: 'contract-and-data-compatibility-preserved',
  STATE_INTERPRETABLE: 'state-changes-interpretable-correctly',
  TENANT_PROPERTY_VALID: 'tenant-and-property-configuration-valid',
  DEPENDENCIES_COMPATIBLE: 'dependencies-compatible',
  CONSUMERS_COMPATIBLE: 'consumers-compatible'
});

export const API_ORPHAN_DETECTION_SIGNALS = Object.freeze({
  MISSING_OWNER: 'missing-owner',
  INACTIVE_OWNER: 'inactive-owner',
  MISSING_SUPPORT_TEAM: 'missing-support-team',
  EXPIRED_APPROVAL: 'expired-approval',
  UNRECOGNIZED_CONTRACT_VERSION: 'unrecognized-contract-version',
  RELEASE_WITHOUT_CONTRACT: 'provider-release-without-approved-contract',
  DEPRECATED_PAST_DEADLINE: 'active-deprecated-version-past-deadline',
  SDK_RETIRED_API: 'sdk-supporting-retired-api-versions',
  CONSUMER_UNSUPPORTED_VERSION: 'consumer-using-unsupported-version',
  NO_CONFORMANCE_EVIDENCE: 'product-with-no-current-conformance-evidence',
  RETIRED_DEPENDENCY: 'product-depending-on-retired-capability'
});

export const API_LIFECYCLE_OBSERVABILITY_FIELDS = Object.freeze({
  LIFECYCLE_STATE: 'product-and-contract-lifecycle-state',
  PROVIDER_RELEASES: 'active-provider-releases',
  CONTRACT_VERSIONS: 'active-contract-versions',
  CONSUMER_ADOPTION: 'consumer-version-adoption',
  SDK_ADOPTION: 'sdk-version-adoption',
  DEPRECATED_TRAFFIC: 'deprecated-version-traffic',
  UNSUPPORTED_TRAFFIC: 'unsupported-traffic',
  MIGRATION_PROGRESS: 'migration-progress',
  EXCEPTION_STATUS: 'exception-status',
  TENANT_PROPERTY_IMPACT: 'tenant-and-property-impact',
  COMPATIBILITY_ERRORS: 'compatibility-errors',
  ROUTING_BEHAVIOR: 'version-routing-behavior',
  RETIREMENT_READINESS: 'retirement-readiness'
});

export const API_LIFECYCLE_EVIDENCE_TYPES = Object.freeze({
  PROPOSAL_DESIGN: 'proposal-and-design-decisions',
  OWNERSHIP: 'ownership',
  CONTRACT_SOURCE: 'contract-source-revisions',
  COMPATIBILITY: 'compatibility-assessments',
  REVIEWS_APPROVALS: 'reviews-and-approvals',
  CONFORMANCE: 'provider-and-consumer-conformance',
  SECURITY_PRIVACY: 'security-and-privacy-assessments',
  ISOLATION_TESTING: 'tenant-and-property-isolation-testing',
  RELEASE_ACTIVATION: 'release-and-activation',
  NOTIFICATIONS: 'consumer-notifications',
  MIGRATION: 'migration-status',
  EXCEPTIONS: 'exceptions',
  DEPRECATION: 'deprecation-decisions',
  RETIREMENT: 'retirement-readiness-and-execution',
  EMERGENCY_ACTIONS: 'emergency-actions',
  POST_CHANGE: 'post-change-outcomes'
});

export const API_LIFECYCLE_METRICS = Object.freeze({
  PROPOSAL_TO_ACTIVE: 'time-from-proposal-to-first-active-release',
  CHANGE_LEAD_TIME: 'change-lead-time',
  COMPATIBILITY_DEFECT_RATE: 'compatibility-defect-rate',
  BREAKING_CHANGES: 'breaking-changes-by-product',
  ACTIVE_VERSION_COUNT: 'number-of-active-versions',
  DEPRECATED_TRAFFIC: 'deprecated-version-traffic',
  MIGRATION_COMPLETION: 'migration-completion-rate',
  EXCEPTION_COUNT_AGE: 'exception-count-and-age',
  NOTIFICATION_EFFECTIVENESS: 'consumer-notification-effectiveness',
  SDK_ADOPTION: 'sdk-adoption',
  RETIREMENT_DURATION: 'retirement-duration',
  EMERGENCY_CHANGE_RATE: 'emergency-change-rate',
  RECOVERY_OUTCOMES: 'rollback-and-roll-forward-outcomes',
  SUPPORT_DEMAND: 'support-demand-by-version'
});

export const API_LIFECYCLE_OPERATIONS = Object.freeze({
  PROPOSE_PRODUCT: 'propose-product',
  SUBMIT_CONTRACT_VERSION: 'submit-contract-version',
  CLASSIFY_CHANGE: 'classify-change',
  RECORD_COMPATIBILITY: 'record-compatibility-assessment',
  APPROVE_VERSION: 'approve-version',
  REGISTER_RELEASE: 'register-release',
  ACTIVATE_VERSION: 'activate-version',
  RESTRICT_VERSION: 'restrict-version',
  SUSPEND_PRODUCT_VERSION: 'suspend-product-or-version',
  REGISTER_ADOPTION: 'register-consumer-adoption',
  RECORD_MIGRATION: 'record-migration-plan',
  PUBLISH_DEPRECATION: 'publish-deprecation',
  APPROVE_EXCEPTION: 'approve-exception',
  REVOKE_EXCEPTION: 'revoke-exception',
  RECORD_RETIREMENT_READINESS: 'record-retirement-readiness',
  RETIRE_VERSION: 'retire-version',
  ARCHIVE_EVIDENCE: 'archive-lifecycle-evidence'
});

export const API_LIFECYCLE_ARCHITECTURAL_RULES = Object.freeze({
  DISTINCT_IDENTITIES: 'api-products-contracts-provider-releases-sdks-and-consumer-adoption-have-distinct-lifecycle-identities',
  IMMUTABLE_RELEASED_BEHAVIOR: 'released-contract-behavior-immutable-within-supported-compatibility-boundary',
  BACKWARD_COMPATIBILITY: 'backward-compatibility-preserved-whenever-practical',
  BREAKING_MAJOR: 'breaking-api-changes-require-new-major-version',
  VERSION_NOT_IMPACT_SUBSTITUTE: 'new-version-not-substitute-for-consumer-impact-analysis-or-migration-planning',
  MULTIDIMENSIONAL_COMPATIBILITY: 'compatibility-assessment-includes-semantics-security-authorization-tenant-property-errors-timing-limits-events-sdks-and-operations',
  UNKNOWN_NOT_COMPATIBLE: 'unknown-compatibility-not-classified-as-compatible',
  NO_WEAKENED_SECURITY: 'security-privacy-and-tenant-isolation-not-weakened-to-preserve-compatibility',
  PROVIDER_CONFORMANCE: 'provider-releases-evolve-independently-only-while-conforming-to-supported-contracts',
  SDK_DECLARED_SUPPORT: 'sdk-versions-declare-supported-api-contract-versions',
  PREVIEW_CONTROLS: 'preview-status-does-not-waive-security-privacy-isolation-or-evidence',
  SCOPED_ACTIVATION: 'activation-independently-controllable-by-environment-tenant-property-consumer-surface-operation-or-version',
  PARALLEL_EXIT_PLAN: 'parallel-version-operation-has-owner-capacity-support-and-exit-date',
  ADAPTER_LIMITATIONS: 'compatibility-adapters-do-not-hide-semantic-loss-or-unsupported-behavior',
  OWNED_MIGRATION: 'consumer-migration-owned-tested-supported-observable-and-evidenced',
  DEPRECATION_COMPLETE: 'deprecation-identifies-replacement-or-closure-consumers-dates-migration-support-exceptions-and-retirement-target',
  TIME_BOUNDED_EXCEPTIONS: 'exceptions-explicit-approved-monitored-and-time-bounded',
  RETIREMENT_READINESS: 'retirement-based-on-consumer-dependency-traffic-access-data-support-and-evidence-readiness',
  RETIRED_IDS_RESERVED: 'retired-identities-not-reused-for-different-capabilities',
  EMERGENCY_GOVERNED: 'emergency-restriction-or-retirement-uses-authorized-command-control-evidence-and-retrospective-review',
  ROLLBACK_NOT_ASSUMED: 'rollback-not-assumed-safe-after-incompatible-data-or-business-state-change',
  ISOLATION_PRESERVED: 'lifecycle-decisions-preserve-tenant-and-property-isolation-end-to-end',
  ARTIFACT_SYNC: 'generated-sdks-documentation-tests-and-routing-artifacts-synchronized-with-active-contract-versions',
  ARCHITECTURE_REVIEW: 'major-lifecycle-or-compatibility-changes-require-architecture-and-adr-review'
});

export const API_LIFECYCLE_BOUNDARIES = Object.freeze({
  PRODUCT_MODEL: 'replace-api-product-and-contract-model',
  INTERACTION_SEMANTICS: 'replace-api-design-and-interaction-patterns',
  SECURITY_ACCESS: 'define-detailed-api-security-access-and-isolation',
  SDK_DISTRIBUTION: 'define-sdk-architecture-and-distribution-implementation',
  DEVELOPER_EXPERIENCE: 'define-developer-experience-testing-and-conformance',
  GOVERNANCE_ASSURANCE: 'define-api-sdk-governance-and-assurance',
  OPERATIONS_PERFORMANCE: 'define-api-sdk-operations-observability-and-performance',
  PRESERVE_ALL_HISTORY_FOREVER: 'preserve-every-historical-mistake-indefinitely',
  SILENT_PROVIDER_DRIFT: 'permit-silent-provider-drift',
  ONE_VERSION_ALIGNMENT: 'overload-one-version-number-to-imply-unvalidated-alignment'
});
