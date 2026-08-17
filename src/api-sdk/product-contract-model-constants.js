export const API_PRODUCT_CONTRACT_MODEL_ERROR_CODE = 'API_PRODUCT_CONTRACT_MODEL_INVALID';

export const API_PRODUCT_MODEL_OBJECTIVES = Object.freeze({
  STABLE_IDENTITY: 'stable-product-and-contract-identity',
  EXPLICIT_OWNERSHIP: 'explicit-ownership',
  CLEAR_BOUNDARIES: 'clear-capability-boundaries',
  DOMAIN_LANGUAGE: 'consistent-domain-language',
  MACHINE_READABLE: 'machine-readable-definitions-where-practical',
  HUMAN_SEMANTICS: 'human-understandable-semantics',
  TRACEABLE_SOURCES: 'traceable-contract-sources',
  SAFE_TENANT_PROPERTY: 'safe-tenant-and-property-behavior',
  SECURITY_PRIVACY: 'explicit-security-and-privacy-declarations',
  TESTABLE_OPERATIONS: 'testable-operation-behavior',
  CONTROLLED_REUSE: 'controlled-composition-and-reuse',
  REPRODUCIBLE_ARTIFACTS: 'reproducible-derived-artifacts',
  DISCOVERABILITY: 'discoverability',
  COMPATIBILITY_ANALYSIS: 'compatibility-analysis',
  OPERATIONAL_VISIBILITY: 'operational-visibility',
  AUDITABLE_EVIDENCE: 'auditable-evidence',
  TECHNOLOGY_PORTABILITY: 'technology-portability'
});

export const CANONICAL_API_PRODUCT_MODEL_ELEMENTS = Object.freeze({
  API_DOMAIN: 'api-domain',
  API_PRODUCT: 'api-product',
  PRODUCT_SURFACE: 'product-surface',
  PRODUCT_VERSION: 'product-version',
  CONTRACT: 'contract',
  CONTRACT_VERSION: 'contract-version',
  OPERATION: 'operation',
  MESSAGE: 'message',
  FIELD: 'field',
  REUSABLE_TYPE: 'reusable-type',
  ERROR_DEFINITION: 'error-definition',
  EVENT_DEFINITION: 'event-definition',
  CALLBACK_DEFINITION: 'callback-definition',
  STREAM_DEFINITION: 'stream-definition',
  BATCH_DEFINITION: 'batch-definition',
  CONSUMER_PROFILE: 'consumer-profile',
  EXPOSURE_DECLARATION: 'exposure-declaration',
  IDENTITY_DECLARATION: 'identity-declaration',
  AUTHORIZATION_DECLARATION: 'authorization-declaration',
  TENANT_PROPERTY_DECLARATION: 'tenant-and-property-declaration',
  DATA_CLASSIFICATION_DECLARATION: 'data-classification-declaration',
  SERVICE_COMMITMENT: 'service-commitment',
  LIMIT_QUOTA_DECLARATION: 'limit-and-quota-declaration',
  DEPENDENCY_DECLARATION: 'dependency-declaration',
  DOCUMENTATION_SET: 'documentation-set',
  SDK_DECLARATION: 'sdk-declaration',
  CONFORMANCE_PROFILE: 'test-and-conformance-profile',
  LIFECYCLE_RECORD: 'lifecycle-record',
  EVIDENCE_REFERENCE: 'evidence-reference'
});

export const API_DOMAIN_RECORD_FIELDS = Object.freeze({
  DOMAIN_IDENTIFIER: 'domain-identifier',
  NAME: 'name',
  PURPOSE: 'purpose',
  ACCOUNTABLE_OWNER: 'accountable-domain-owner',
  BOUNDED_CONTEXTS: 'related-bounded-contexts',
  OWNING_SERVICES: 'owning-services',
  TERMINOLOGY: 'common-terminology',
  DATA_CLASSIFICATIONS: 'data-classifications',
  TENANT_MODEL: 'tenant-model',
  PROPERTY_MODEL: 'property-model',
  AUDIENCE_ELIGIBILITY: 'audience-eligibility',
  SECURITY_REQUIREMENTS: 'security-requirements',
  COMPATIBILITY_EXPECTATIONS: 'compatibility-expectations',
  SERVICE_COMMITMENT_CLASSES: 'service-commitment-classes',
  GOVERNANCE_REQUIREMENTS: 'governance-requirements',
  SUPPORT_ROUTE: 'support-route',
  LIFECYCLE_STATE: 'lifecycle-state'
});

export const API_PRODUCT_RECORD_FIELDS = Object.freeze({
  PRODUCT_IDENTIFIER: 'product-identifier',
  NAME: 'name',
  DESCRIPTION: 'description',
  PURPOSE: 'purpose',
  API_DOMAIN: 'api-domain',
  CAPABILITY_SCOPE: 'capability-scope',
  EXCLUDED_RESPONSIBILITIES: 'excluded-responsibilities',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  TECHNICAL_OWNER: 'technical-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  RESPONSIBLE_TEAM: 'responsible-team',
  INTENDED_AUDIENCES: 'intended-audiences',
  CONSUMER_ELIGIBILITY: 'consumer-eligibility',
  EXPOSURE_CLASSIFICATION: 'exposure-classification',
  DATA_CLASSIFICATION: 'data-classification',
  TENANT_MODEL: 'tenant-model',
  PROPERTY_MODEL: 'property-model',
  IDENTITY_MODEL: 'identity-model',
  AUTHORIZATION_MODEL: 'authorization-model',
  PRODUCT_SURFACES: 'product-surfaces',
  ACTIVE_CONTRACT_VERSIONS: 'active-contract-versions',
  COMPATIBILITY_POLICY: 'compatibility-policy',
  SERVICE_COMMITMENTS: 'service-commitments',
  LIMITS_QUOTAS: 'limits-and-quotas',
  DEPENDENCIES: 'dependencies',
  DOCUMENTATION: 'documentation',
  SDKS: 'sdks',
  SUPPORT_ROUTE: 'support-route',
  INCIDENT_CONTACT: 'incident-contact',
  LIFECYCLE_STATE: 'lifecycle-state',
  REVIEW_DATE: 'review-date',
  DEPRECATION_STATUS: 'deprecation-status',
  RETIREMENT_STATUS: 'retirement-status',
  EVIDENCE_REFERENCES: 'evidence-references'
});

export const API_PRODUCT_SCOPE_FIELDS = Object.freeze({
  INCLUDED_CAPABILITIES: 'capabilities-included',
  INCLUDED_OPERATIONS: 'operations-included',
  INCLUDED_EVENTS: 'events-included',
  CONSUMERS_SERVED: 'consumers-served',
  DATA_SUBJECTS: 'data-subjects-represented',
  TENANTS_PROPERTIES: 'tenants-and-properties-supported',
  ADMINISTRATIVE_CAPABILITIES: 'administrative-capabilities',
  OPERATIONAL_CAPABILITIES: 'operational-capabilities',
  EXPLICIT_EXCLUSIONS: 'explicit-exclusions',
  RELATED_PRODUCTS: 'related-products',
  REQUIRED_DEPENDENCIES: 'required-dependencies'
});

export const API_PRODUCT_SURFACE_TYPES = Object.freeze({
  PLATFORM_INTERNAL: 'platform-internal-surface',
  TENANT: 'tenant-surface',
  PROPERTY: 'property-surface',
  PARTNER: 'partner-surface',
  PUBLIC: 'public-surface',
  ADMINISTRATIVE: 'administrative-surface',
  OPERATIONAL: 'operational-surface'
});

export const API_PROVIDER_RELATIONSHIP_FIELDS = Object.freeze({
  PRIMARY_PROVIDER: 'primary-owning-provider',
  SUPPORTING_PROVIDERS: 'supporting-providers',
  OPERATION_OWNERSHIP: 'operation-ownership',
  EVENT_OWNERSHIP: 'event-ownership',
  COMPOSITION_BOUNDARIES: 'composition-boundaries',
  DEPENDENCY_CONTRACTS: 'dependency-contracts',
  FAILURE_OWNERSHIP: 'failure-ownership',
  SUPPORT_OWNERSHIP: 'support-ownership'
});

export const API_CONTRACT_RECORD_FIELDS = Object.freeze({
  CONTRACT_IDENTIFIER: 'contract-identifier',
  API_PRODUCT: 'api-product',
  PRODUCT_SURFACE: 'product-surface',
  PURPOSE: 'purpose',
  OWNER: 'owner',
  INTENDED_CONSUMERS: 'intended-consumers',
  EXPOSURE_CLASS: 'exposure-class',
  SOURCE_LOCATION: 'contract-source-location',
  SOURCE_DIGEST: 'contract-source-digest',
  VERSION: 'semantic-version-or-approved-version-identifier',
  COMPATIBILITY_BOUNDARY: 'compatibility-boundary',
  OPERATIONS: 'operations',
  MESSAGES: 'messages',
  ERRORS: 'errors',
  EVENTS: 'events',
  CALLBACKS: 'callbacks',
  STREAMS: 'streams',
  BATCHES: 'batches',
  IDENTITY_REQUIREMENTS: 'identity-requirements',
  AUTHORIZATION_REQUIREMENTS: 'authorization-requirements',
  TENANT_PROPERTY_BEHAVIOR: 'tenant-and-property-behavior',
  DATA_CLASSIFICATIONS: 'data-classifications',
  SERVICE_COMMITMENTS: 'service-commitments',
  LIMITS: 'limits',
  DEPENDENCIES: 'dependencies',
  DOCUMENTATION: 'documentation',
  SDK_DECLARATIONS: 'sdk-declarations',
  CONFORMANCE_PROFILE: 'conformance-profile',
  LIFECYCLE_STATE: 'lifecycle-state',
  EFFECTIVE_TIME: 'effective-time',
  SUPPORT_PERIOD: 'support-period',
  EVIDENCE_REFERENCES: 'evidence-references'
});

export const API_CONTRACT_SOURCE_REQUIREMENTS = Object.freeze({
  VERSION_CONTROLLED: 'stored-in-version-control',
  ARCHITECTURE_LINKED: 'linked-to-architecture',
  PRODUCT_LINKED: 'linked-to-owning-product',
  HUMAN_REVIEWABLE: 'human-reviewable',
  MACHINE_VALIDATABLE: 'machine-validatable-where-practical',
  REPRODUCIBLE: 'reproducible',
  CHANGE_CONTROLLED: 'protected-by-change-controls',
  IMMUTABLE_REVISION: 'identified-by-immutable-revision-or-digest',
  AUTHORIZED_AVAILABILITY: 'available-to-authorized-providers-and-consumers',
  RETAINED: 'retained-according-to-lifecycle-and-evidence-policy'
});

export const API_CONTRACT_AUTHORITY_ORDER = Object.freeze({
  ARCHITECTURE_ADR: 'approved-architecture-and-adrs',
  CONTRACT_SOURCE: 'approved-contract-source',
  POLICY_LIFECYCLE: 'approved-policy-and-lifecycle-declarations',
  PROVIDER_CONFORMANCE: 'provider-implementation-conformance-requirements',
  DERIVED_ARTIFACTS: 'generated-documentation-sdks-examples-mocks-and-tests',
  CONSUMER_ASSUMPTIONS: 'consumer-assumptions-or-observed-undocumented-behavior'
});

export const API_CONTRACT_PACKAGE_CONTENTS = Object.freeze({
  PRODUCT_METADATA: 'product-metadata',
  CONTRACT_METADATA: 'contract-metadata',
  OPERATIONS: 'operation-definitions',
  MESSAGES_TYPES: 'message-and-type-definitions',
  ERRORS: 'error-definitions',
  EVENTS: 'event-definitions',
  CALLBACKS: 'callback-definitions',
  STREAMS: 'stream-definitions',
  BATCHES: 'batch-definitions',
  SECURITY: 'security-declarations',
  TENANT_PROPERTY: 'tenant-and-property-declarations',
  LIMITS: 'limit-declarations',
  SERVICE_COMMITMENTS: 'service-commitments',
  EXAMPLES: 'examples',
  CONFORMANCE: 'conformance-rules',
  CHANGE_HISTORY: 'change-history',
  LIFECYCLE: 'lifecycle-metadata'
});

export const API_OPERATION_CLASSES = Object.freeze({
  QUERY: 'query',
  COMMAND: 'command',
  ACTION: 'action',
  RESOURCE_MANAGEMENT: 'resource-management',
  SUBMISSION: 'submission',
  EVENT_PUBLICATION: 'event-publication',
  EVENT_SUBSCRIPTION: 'event-subscription',
  CALLBACK_REGISTRATION: 'callback-registration',
  STREAM_SUBSCRIPTION: 'stream-subscription',
  BATCH_PROCESSING: 'batch-processing',
  ADMINISTRATIVE_CONTROL: 'administrative-control',
  OPERATIONAL_CONTROL: 'operational-control'
});

export const API_OPERATION_RECORD_FIELDS = Object.freeze({
  OPERATION_IDENTIFIER: 'operation-identifier',
  NAME: 'name',
  PURPOSE: 'purpose',
  INTERACTION_CLASS: 'interaction-class',
  OWNING_CAPABILITY: 'owning-capability',
  OWNING_PROVIDER: 'owning-provider',
  ELIGIBLE_AUDIENCES: 'eligible-audiences',
  REQUIRED_IDENTITY: 'required-identity',
  REQUIRED_AUTHORITY: 'required-authority',
  TENANT_PROPERTY_BEHAVIOR: 'tenant-and-property-behavior',
  INPUT_MESSAGE: 'input-message',
  OUTPUT_MESSAGE: 'output-message',
  ERROR_SET: 'error-set',
  STATE_CHANGE_SEMANTICS: 'state-change-semantics',
  IDEMPOTENCY: 'idempotency-behavior',
  CONCURRENCY: 'concurrency-behavior',
  CONSISTENCY_FRESHNESS: 'consistency-and-freshness',
  ORDERING: 'ordering',
  TIMEOUTS: 'timeouts',
  RETRY_GUIDANCE: 'retry-guidance',
  LIMITS_QUOTAS: 'limits-and-quotas',
  SERVICE_COMMITMENT: 'service-commitment',
  CORRELATION: 'correlation-requirements',
  AUDIT_EVIDENCE: 'audit-and-evidence-behavior',
  DATA_CLASSIFICATIONS: 'data-classifications',
  LIFECYCLE_STATE: 'lifecycle-state'
});

export const API_MESSAGE_TYPES = Object.freeze({
  REQUEST: 'request',
  RESPONSE: 'response',
  COMMAND: 'command',
  QUERY: 'query',
  RESULT: 'result',
  EVENT: 'event',
  CALLBACK: 'callback',
  STREAM_ITEM: 'stream-item',
  BATCH_ITEM: 'batch-item',
  ERROR: 'error',
  ACKNOWLEDGEMENT: 'acknowledgement',
  STATUS: 'status'
});

export const API_MESSAGE_RECORD_FIELDS = Object.freeze({
  MESSAGE_IDENTIFIER: 'message-identifier',
  NAME: 'name',
  PURPOSE: 'purpose',
  MESSAGE_CLASS: 'message-class',
  OWNING_PRODUCT_OPERATION: 'owning-product-and-operation',
  STRUCTURAL_DEFINITION: 'schema-or-structural-definition',
  REQUIRED_FIELDS: 'required-fields',
  OPTIONAL_FIELDS: 'optional-fields',
  FIELD_SEMANTICS: 'field-semantics',
  VALIDATION_RULES: 'validation-rules',
  TENANT_PROPERTY_CONTEXT: 'tenant-and-property-fields-or-context',
  IDENTITY_DELEGATION_CONTEXT: 'identity-and-delegation-context',
  CLASSIFICATION: 'classification',
  TEMPORAL_SEMANTICS: 'temporal-semantics',
  CORRELATION_CAUSATION: 'correlation-and-causation',
  SIZE_LIMITS: 'size-limits',
  EXTENSIBILITY: 'extensibility-behavior',
  COMPATIBILITY_RULES: 'compatibility-rules',
  EXAMPLES: 'examples',
  LIFECYCLE_STATE: 'lifecycle-state'
});

export const API_FIELD_RECORD_FIELDS = Object.freeze({
  FIELD_IDENTIFIER: 'stable-field-name-or-identifier',
  BUSINESS_MEANING: 'business-meaning',
  DATA_TYPE: 'data-type',
  PRESENCE: 'required-optional-or-conditional-presence',
  NULLABILITY: 'nullability',
  FORMAT: 'format',
  ALLOWED_VALUES: 'allowed-values',
  RANGE_SIZE: 'range-or-size',
  UNITS: 'units',
  DEFAULT_BEHAVIOR: 'default-behavior',
  SENSITIVITY: 'sensitivity',
  TENANT_PROPERTY_RELEVANCE: 'tenant-and-property-relevance',
  SOURCE_OF_TRUTH: 'source-of-truth',
  MUTABILITY: 'mutability',
  TEMPORAL_MEANING: 'temporal-meaning',
  VALIDATION: 'validation',
  EXAMPLE: 'example',
  COMPATIBILITY: 'compatibility-behavior'
});

export const API_FIELD_PRESENCE_STATES = Object.freeze({
  REQUIRED_PRESENT: 'required-and-present',
  OPTIONAL_ABSENT: 'optional-and-absent',
  EMPTY_VALUE: 'present-with-empty-value',
  NULL_VALUE: 'present-with-null-value-where-allowed',
  CONDITIONALLY_REQUIRED: 'conditionally-required',
  PROVIDER_COMPUTED: 'computed-by-provider',
  IGNORED_WHEN_SUPPLIED: 'ignored-when-supplied',
  PROHIBITED_FOR_CONSUMER: 'prohibited-for-consumer'
});

export const API_FIELD_MUTABILITY_CLASSES = Object.freeze({
  CONSUMER_SUPPLIED: 'consumer-supplied',
  PROVIDER_ASSIGNED: 'provider-assigned',
  SYSTEM_DERIVED: 'system-derived',
  READ_ONLY: 'read-only',
  IMMUTABLE_AFTER_CREATION: 'immutable-after-creation',
  CONDITIONALLY_MUTABLE: 'conditionally-mutable',
  DEPRECATED: 'deprecated'
});

export const API_IDENTIFIER_SEMANTICS = Object.freeze({
  STABLE_REFERENCE: 'stable-reference',
  DEDUPLICATION: 'deduplication',
  REPLAY: 'replay',
  TRACING: 'tracing',
  EVIDENCE: 'evidence',
  TENANT_SCOPE: 'tenant-scope',
  PROPERTY_SCOPE: 'property-scope',
  CORRELATION: 'correlation',
  CAUSATION: 'causation'
});

export const API_TENANT_PROPERTY_DECLARATION_FIELDS = Object.freeze({
  TENANT_REQUIRED: 'tenant-required',
  PROPERTY_REQUIRED: 'property-required',
  SOURCE_OF_SCOPE: 'source-of-scope',
  VALIDATION_RULE: 'validation-rule',
  AUTHORITY_BINDING: 'authority-binding',
  CROSS_TENANT_BEHAVIOR: 'cross-tenant-behavior',
  CROSS_PROPERTY_BEHAVIOR: 'cross-property-behavior',
  DEFAULT_SCOPE: 'default-scope',
  MISSING_SCOPE_BEHAVIOR: 'missing-scope-behavior',
  TELEMETRY_SCOPE: 'telemetry-scope'
});

export const API_SECURITY_PRIVACY_DECLARATION_FIELDS = Object.freeze({
  AUTHENTICATION: 'authentication',
  AUTHORIZATION: 'authorization',
  DELEGATION: 'delegation',
  PURPOSE: 'purpose',
  DATA_CLASSIFICATION: 'data-classification',
  PERSONAL_INFORMATION: 'personal-information',
  MINIMIZATION: 'minimization',
  RETENTION: 'retention',
  CORRECTION_DELETION: 'correction-and-deletion',
  LOGGING_RESTRICTIONS: 'logging-restrictions',
  TEST_DATA_RESTRICTIONS: 'test-data-restrictions',
  SDK_CACHING_RESTRICTIONS: 'sdk-caching-restrictions',
  EXPORT_SHARING: 'export-and-sharing-behavior'
});

export const API_TEMPORAL_CONSISTENCY_FIELDS = Object.freeze({
  EFFECTIVE_TIME: 'effective-time',
  OBSERVED_TIME: 'observed-time',
  EXPIRATION: 'expiration',
  FRESHNESS: 'freshness',
  CONSISTENCY_MODEL: 'consistency-model',
  COMPLETION_FINALITY: 'completion-finality',
  ORDERING: 'ordering',
  DELIVERY_EXPECTATION: 'delivery-expectation'
});

export const API_LIMIT_TYPES = Object.freeze({
  REQUEST_SIZE: 'request-size',
  RESPONSE_SIZE: 'response-size',
  FIELD_SIZE: 'field-size',
  COLLECTION_SIZE: 'collection-size',
  PAGE_SIZE: 'page-size',
  BATCH_SIZE: 'batch-size',
  STREAM_DURATION: 'stream-duration',
  CALLBACK_ATTEMPTS: 'callback-attempts',
  REQUEST_RATE: 'request-rate',
  CONCURRENT_REQUESTS: 'concurrent-requests',
  TENANT_QUOTA: 'tenant-quota',
  PROPERTY_QUOTA: 'property-quota',
  CONSUMER_QUOTA: 'consumer-quota',
  COST_RESOURCE_BUDGET: 'cost-or-resource-budget'
});

export const API_SERVICE_COMMITMENT_TYPES = Object.freeze({
  AVAILABILITY: 'availability',
  LATENCY: 'latency',
  THROUGHPUT: 'throughput',
  COMPLETION_TIME: 'completion-time',
  FRESHNESS: 'freshness',
  CONSISTENCY: 'consistency',
  DURABILITY: 'durability',
  CALLBACK_DELIVERY: 'callback-delivery',
  EVENT_PUBLICATION: 'event-publication',
  SUPPORT_RESPONSE: 'support-response',
  INCIDENT_COMMUNICATION: 'incident-communication',
  RECOVERY: 'recovery',
  VERSION_SUPPORT: 'version-support',
  DEPRECATION_NOTICE: 'deprecation-notice'
});

export const API_DEPENDENCY_DECLARATION_FIELDS = Object.freeze({
  DEPENDENCY_OWNER: 'dependency-owner',
  CONTRACT: 'contract',
  CRITICALITY: 'criticality',
  FAILURE_BEHAVIOR: 'failure-behavior',
  TIMEOUT: 'timeout',
  RETRY: 'retry',
  DEGRADATION: 'degradation',
  RECOVERY: 'recovery',
  EVIDENCE: 'evidence'
});

export const API_CONSUMER_PROFILE_FIELDS = Object.freeze({
  CONSUMER_CLASS: 'consumer-class',
  PURPOSE: 'purpose',
  ELIGIBLE_PRODUCTS_SURFACES: 'eligible-products-and-surfaces',
  IDENTITY_MODEL: 'identity-model',
  TENANT_PROPERTY_MODEL: 'tenant-and-property-model',
  DATA_CLASSIFICATION_ELIGIBILITY: 'data-classification-eligibility',
  EXPECTED_OPERATIONS: 'expected-operations',
  EXPECTED_VOLUME: 'expected-volume',
  LATENCY_COMPLETION_NEEDS: 'latency-and-completion-needs',
  SDK_PREFERENCES: 'sdk-preferences',
  ENVIRONMENT_NEEDS: 'environment-needs',
  SUPPORT_NEEDS: 'support-needs',
  LIFECYCLE_REVIEW: 'lifecycle-and-review'
});

export const API_CONTRACT_VIEW_TYPES = Object.freeze({
  PROVIDER_IMPLEMENTATION: 'provider-implementation-view',
  CONSUMER_REFERENCE: 'consumer-reference-view',
  SECURITY_REVIEW: 'security-review-view',
  PRIVACY_REVIEW: 'privacy-review-view',
  OPERATIONS: 'operations-view',
  SDK_GENERATION: 'sdk-generation-view',
  TEST_CONFORMANCE: 'test-and-conformance-view',
  CATALOG: 'catalog-view'
});

export const API_COMPOSITION_REQUIREMENTS = Object.freeze({
  OWNERSHIP: 'ownership',
  AUTHORITY: 'authority',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  ERROR_PROVENANCE: 'error-provenance',
  FRESHNESS: 'freshness',
  COMPLETION_SEMANTICS: 'completion-semantics',
  DEPENDENCY_BEHAVIOR: 'dependency-behavior',
  EVIDENCE: 'evidence'
});

export const API_ANTI_CORRUPTION_TRANSLATIONS = Object.freeze({
  IDENTIFIERS: 'identifiers',
  TERMINOLOGY: 'terminology',
  MESSAGES: 'messages',
  ERRORS: 'errors',
  TIME: 'time',
  MONEY_QUANTITIES: 'money-and-quantities',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  AUTHENTICATION: 'authentication',
  LIFECYCLE_STATE: 'lifecycle-state',
  DELIVERY_BEHAVIOR: 'delivery-behavior'
});

export const API_DERIVED_ARTIFACT_TYPES = Object.freeze({
  PROVIDER_INTERFACES: 'provider-interfaces',
  CLIENT_INTERFACES: 'client-interfaces',
  SDK_CONTRACT_LAYERS: 'sdk-contract-layers',
  DOCUMENTATION: 'documentation',
  EXAMPLES: 'examples',
  MOCKS: 'mocks',
  SIMULATORS: 'simulators',
  TEST_CASES: 'test-cases',
  COMPATIBILITY_REPORTS: 'compatibility-reports',
  GATEWAY_CONFIGURATIONS: 'gateway-configurations',
  POLICY_MAPPINGS: 'policy-mappings',
  CATALOG_ENTRIES: 'catalog-entries',
  TELEMETRY_MAPPINGS: 'telemetry-mappings'
});

export const API_DERIVED_ARTIFACT_REQUIREMENTS = Object.freeze({
  TRACEABLE: 'traceable-to-approved-contract-revision',
  REPRODUCIBLE: 'reproducible',
  VERSIONED: 'versioned',
  VALIDATED: 'validated',
  REPLACEABLE: 'replaceable',
  LIFECYCLE_SYNCHRONIZED: 'lifecycle-synchronized',
  MANUAL_DRIFT_PROTECTED: 'protected-from-manual-drift'
});

export const API_SDK_DECLARATION_FIELDS = Object.freeze({
  SDK_IDENTITY: 'sdk-identity',
  LANGUAGE_RUNTIME_FAMILY: 'language-or-runtime-family',
  SUPPORTED_RUNTIME_VERSIONS: 'supported-runtime-versions',
  SUPPORTED_PRODUCTS_CONTRACTS: 'supported-api-products-and-contract-versions',
  SDK_VERSION: 'sdk-version',
  PACKAGE_IDENTITY: 'package-identity',
  DISTRIBUTION_CHANNEL: 'distribution-channel',
  SUPPORT_STATUS: 'support-status',
  RELEASE_PROVENANCE: 'release-provenance',
  INTEGRITY_INFORMATION: 'integrity-information',
  DOCUMENTATION: 'documentation',
  LIFECYCLE_STATE: 'lifecycle-state'
});

export const API_DOCUMENTATION_SET_FIELDS = Object.freeze({
  PRODUCT_OVERVIEW: 'product-overview',
  INTENDED_AUDIENCE: 'intended-audience',
  CAPABILITY_SCOPE: 'capability-scope',
  PREREQUISITES: 'prerequisites',
  IDENTITY_AUTHORIZATION: 'identity-and-authorization-guidance',
  TENANT_PROPERTY: 'tenant-and-property-guidance',
  OPERATION_REFERENCE: 'operation-reference',
  MESSAGE_FIELD_SEMANTICS: 'message-and-field-semantics',
  ERROR_RECOVERY: 'error-and-recovery-guidance',
  LIMITS_COMMITMENTS: 'limits-and-service-commitments',
  EXAMPLES: 'examples',
  SDK_GUIDANCE: 'sdk-guidance',
  TEST_GUIDANCE: 'test-guidance',
  VERSION_LIFECYCLE: 'version-and-lifecycle-status',
  MIGRATION_GUIDANCE: 'migration-guidance',
  SUPPORT_ROUTE: 'support-route'
});

export const API_EXAMPLE_GOVERNANCE_REQUIREMENTS = Object.freeze({
  CONTRACT_VALID: 'contract-valid',
  TESTED: 'tested-where-practical',
  VERSION_ALIGNED: 'version-aligned',
  FICTITIOUS: 'fictitious',
  NON_SECRET: 'non-secret',
  TENANT_SAFE: 'tenant-safe',
  PROPERTY_SAFE: 'property-safe',
  PRIVACY_SAFE: 'privacy-safe',
  REPRESENTATIVE: 'representative-of-supported-behavior',
  CLEAR_ASYNC_PARTIAL: 'clear-about-asynchronous-or-partial-outcomes'
});

export const API_PRODUCT_REGISTRY_AUTHORITIES = Object.freeze({
  PRODUCT_IDENTITY: 'product-identity',
  PRODUCT_OWNERSHIP: 'product-ownership',
  DOMAIN: 'domain',
  CAPABILITY_SCOPE: 'capability-scope',
  PRODUCT_SURFACES: 'product-surfaces',
  CONTRACT_REFERENCES: 'contract-references',
  SUPPORTED_VERSIONS: 'supported-versions',
  EXPOSURE_CLASS: 'exposure-class',
  SERVICE_COMMITMENTS: 'service-commitments',
  DOCUMENTATION: 'documentation',
  SDK_DECLARATIONS: 'sdk-declarations',
  SUPPORT: 'support',
  LIFECYCLE_STATE: 'lifecycle-state',
  DEPRECATION_RETIREMENT: 'deprecation-and-retirement-status'
});

export const API_REGISTRY_BOUNDARY_EXCLUSIONS = Object.freeze({
  PROVIDER_AUTHENTICATION: 'provider-authentication',
  RUNTIME_AUTHORIZATION: 'runtime-authorization',
  DOMAIN_VALIDATION: 'domain-validation',
  GATEWAY_ROUTING_STATE: 'gateway-routing-state',
  DEPLOYMENT_STATE: 'deployment-state',
  WORKFLOW_STATE: 'workflow-state',
  TENANT_RECORDS: 'tenant-records',
  PROPERTY_RECORDS: 'property-records',
  OPERATIONAL_TELEMETRY: 'operational-telemetry'
});

export const API_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  IN_DESIGN: 'in-design',
  UNDER_REVIEW: 'under-review',
  PREVIEW: 'experimental-or-preview',
  ACTIVE: 'active',
  DEPRECATED: 'deprecated',
  RESTRICTED: 'restricted',
  SUSPENDED: 'suspended',
  RETIRED: 'retired'
});

export const API_CONTRACT_QUALITY_DIMENSIONS = Object.freeze({
  PURPOSE_CLARITY: 'purpose-clarity',
  OWNERSHIP_CLARITY: 'ownership-clarity',
  DOMAIN_ALIGNMENT: 'domain-alignment',
  SEMANTIC_COMPLETENESS: 'semantic-completeness',
  TERMINOLOGY_CONSISTENCY: 'consistent-terminology',
  SECURITY_COMPLETENESS: 'security-completeness',
  TENANT_PROPERTY_COMPLETENESS: 'tenant-and-property-completeness',
  VALIDATION_COMPLETENESS: 'validation-completeness',
  ERROR_COMPLETENESS: 'error-completeness',
  IDEMPOTENCY_COMPLETENESS: 'idempotency-completeness',
  COMPATIBILITY_READINESS: 'compatibility-readiness',
  TESTABILITY: 'testability',
  DOCUMENTATION_QUALITY: 'documentation-quality',
  OPERATIONAL_READINESS: 'operational-readiness',
  PORTABILITY: 'portability',
  TRACEABILITY: 'traceability'
});

export const API_CONTRACT_VALIDATION_CHECKS = Object.freeze({
  PRODUCT_METADATA: 'required-product-metadata',
  UNIQUE_IDENTITIES: 'unique-identities',
  NAMING_RULES: 'naming-rules',
  STRUCTURAL_CORRECTNESS: 'structural-correctness',
  REFERENCE_RESOLUTION: 'reference-resolution',
  OPERATION_METADATA: 'required-operation-metadata',
  FIELD_SEMANTICS: 'required-field-semantics',
  SECURITY_DECLARATIONS: 'security-declarations',
  TENANT_PROPERTY_DECLARATIONS: 'tenant-and-property-declarations',
  CLASSIFICATION_DECLARATIONS: 'classification-declarations',
  ERROR_DEFINITIONS: 'error-definitions',
  LIMIT_DEFINITIONS: 'limit-definitions',
  COMPATIBILITY_RULES: 'compatibility-rules',
  EXAMPLE_VALIDITY: 'example-validity',
  DOCUMENTATION_LINKS: 'documentation-links',
  SDK_GENERATION_READINESS: 'sdk-generation-readiness'
});

export const API_REVIEW_PARTICIPANTS = Object.freeze({
  PRODUCT_OWNER: 'api-product-owner',
  DOMAIN_OWNER: 'domain-owner',
  TECHNICAL_OWNER: 'technical-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  CONSUMER_REPRESENTATIVE: 'consumer-representative',
  ENTERPRISE_ARCHITECT: 'enterprise-architect',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  DATA_GOVERNANCE: 'data-governance',
  DEVELOPER_PLATFORM: 'developer-platform',
  QUALITY_TESTING: 'quality-and-testing',
  GOVERNANCE_ASSURANCE: 'governance-and-assurance'
});

export const API_APPROVAL_ASSERTIONS = Object.freeze({
  OWNERSHIP_ASSIGNED: 'ownership-is-assigned',
  PURPOSE_SCOPE_VALID: 'purpose-and-scope-are-valid',
  DOMAIN_BOUNDARIES: 'domain-boundaries-are-preserved',
  CONSUMER_NEEDS: 'consumer-needs-are-understood',
  SEMANTICS_COMPLETE: 'contract-semantics-are-complete',
  SECURITY_PRIVACY: 'security-and-privacy-are-addressed',
  TENANT_PROPERTY_SAFE: 'tenant-and-property-behavior-is-safe',
  COMPATIBILITY_POLICY: 'compatibility-policy-is-defined',
  PROVIDER_CONFORMANCE: 'provider-conformance-is-demonstrated',
  DOCUMENTATION_READY: 'documentation-is-ready',
  OPERATIONAL_READINESS: 'operational-readiness-is-demonstrated',
  SUPPORT_ASSIGNED: 'support-is-assigned',
  EVIDENCE_RETAINED: 'evidence-is-retained'
});

export const API_TRACEABILITY_LINKS = Object.freeze({
  ARCHITECTURE_ADR: 'architecture-and-adr',
  PRODUCT_OWNERSHIP: 'api-product-and-ownership',
  CONTRACT_SOURCE: 'approved-contract-source',
  IMPLEMENTATION_POLICY: 'provider-implementation-and-policy',
  DERIVED_ARTIFACTS: 'sdks-documentation-tests-and-gateway-configuration',
  RUNTIME_EVIDENCE: 'release-runtime-telemetry-support-and-evidence'
});

export const API_EVIDENCE_TYPES = Object.freeze({
  OWNERSHIP_APPROVAL: 'ownership-approval',
  PRODUCT_SCOPE_APPROVAL: 'product-scope-approval',
  CONTRACT_REVIEW: 'contract-review',
  SOURCE_REVISION_DIGEST: 'contract-source-revision-and-digest',
  SECURITY_PRIVACY_ASSESSMENT: 'security-and-privacy-assessment',
  TENANT_ISOLATION_ASSESSMENT: 'tenant-isolation-assessment',
  PROVIDER_CONFORMANCE_RESULTS: 'provider-conformance-results',
  CONSUMER_CONTRACT_TEST_RESULTS: 'consumer-contract-test-results',
  COMPATIBILITY_ANALYSIS: 'compatibility-analysis',
  DOCUMENTATION_VALIDATION: 'documentation-validation',
  SDK_PROVENANCE: 'sdk-provenance',
  RELEASE_APPROVAL: 'release-approval',
  LIFECYCLE_DECISIONS: 'lifecycle-decisions',
  EXCEPTION_RECORDS: 'exception-records',
  OPERATIONAL_READINESS: 'operational-readiness-evidence'
});

export const API_PRODUCT_MODEL_OPERATIONS = Object.freeze({
  REGISTER_DOMAIN: 'register-api-domain',
  REGISTER_PRODUCT: 'register-api-product',
  ASSIGN_OWNERSHIP: 'assign-ownership',
  REGISTER_SURFACE: 'register-product-surface',
  REGISTER_CONTRACT: 'register-contract',
  SUBMIT_CONTRACT_VERSION: 'submit-contract-version',
  VALIDATE_CONTRACT: 'validate-contract',
  RECORD_REVIEW: 'record-review',
  RECORD_APPROVAL: 'record-approval',
  PUBLISH_CONTRACT: 'publish-contract',
  REGISTER_SDK: 'register-sdk-declaration',
  PUBLISH_DOCUMENTATION: 'publish-documentation',
  QUERY_CATALOG: 'query-product-catalog',
  QUERY_CONTRACT_METADATA: 'query-contract-metadata',
  RECORD_CONSUMER_PROFILE: 'record-consumer-profile',
  RECORD_CONFORMANCE_EVIDENCE: 'record-conformance-evidence',
  PROPOSE_CHANGE: 'propose-change',
  MARK_DEPRECATION: 'mark-deprecation',
  RECORD_RETIREMENT: 'record-retirement'
});

export const API_PRODUCT_MODEL_ARCHITECTURAL_RULES = Object.freeze({
  COHERENT_SCOPE: 'every-api-product-exposes-coherent-owned-capability-scope',
  REQUIRED_OWNERS: 'every-supported-product-has-accountable-technical-and-operational-owners',
  STABLE_IDENTITIES: 'product-and-contract-identities-stable-across-deployment-gateway-and-provider-changes',
  CONTRACT_SOURCE_AUTHORITY: 'approved-contract-source-authoritative-for-consumer-visible-behavior',
  CONTRACT_SEMANTICS: 'contract-defines-semantics-security-tenant-property-failure-limit-and-lifecycle-behavior',
  STABLE_OPERATION_IDS: 'operations-have-stable-identities-for-authorization-telemetry-quotas-support-and-evidence',
  MESSAGE_FIELD_MEANING: 'messages-and-fields-define-meaning-presence-validation-classification-and-compatibility',
  NO_SILENT_VALUE_CONFLATION: 'absence-null-empty-default-unknown-and-not-applicable-not-silently-conflated',
  IDENTIFIERS_NOT_AUTHORITY: 'identifiers-not-treated-as-authority-or-tenant-property-eligibility-proof',
  SHARED_TYPE_OWNERSHIP: 'shared-types-reused-only-when-meaning-and-ownership-are-shared',
  DOMAIN_MEANING_OWNED: 'domain-specific-meaning-remains-with-owning-domain',
  EXPLICIT_SCOPE: 'tenant-and-property-scope-explicit-and-validated-against-authenticated-authority',
  NO_SENSITIVE_METADATA: 'contract-metadata-must-not-embed-credentials-secrets-live-tenant-property-or-personal-data',
  DISTINCT_OUTCOME_STATES: 'success-acceptance-processing-completion-settlement-publication-and-delivery-distinguishable',
  IDEMPOTENCY_CONCURRENCY_CONTRACTUAL: 'idempotency-and-concurrency-semantics-belong-to-operation-contract',
  DERIVED_ARTIFACTS: 'sdks-documentation-examples-mocks-tests-and-gateway-configurations-are-derived-artifacts',
  DERIVED_TRACEABILITY: 'derived-artifacts-reproducible-and-traceable-to-approved-contract-revision',
  COMPOSITION_PRESERVES_BOUNDARIES: 'product-composition-preserves-ownership-authority-scope-errors-freshness-completion-and-evidence',
  DISCOVERY_NOT_ACCESS: 'registry-publication-or-catalog-discovery-does-not-grant-runtime-access',
  NO_SILENT_CONTRACT_MUTATION: 'released-contract-behavior-not-silently-mutated'
});

export const API_PRODUCT_MODEL_BOUNDARIES = Object.freeze({
  INTERACTION_PATTERNS: 'define-detailed-interaction-patterns',
  LIFECYCLE_VERSIONING: 'define-detailed-lifecycle-versioning-and-compatibility',
  SECURITY_ACCESS: 'define-detailed-api-security-access-and-isolation',
  SDK_ARCHITECTURE: 'define-sdk-architecture-and-distribution',
  DEVELOPER_EXPERIENCE: 'define-developer-experience-testing-and-conformance',
  GOVERNANCE_ASSURANCE: 'define-api-sdk-governance-and-assurance',
  OPERATIONS_PERFORMANCE: 'define-api-sdk-operations-observability-and-performance',
  TENANT_INTERNALS: 'define-detailed-tenant-model-internals',
  DOMAIN_SERVICE_OWNERSHIP: 'absorb-domain-service-ownership',
  RUNTIME_AUTHORIZATION: 'replace-runtime-authorization',
  GATEWAY_ROUTING: 'replace-gateway-routing-state',
  DEPLOYMENT_STATE: 'replace-deployment-state'
});
