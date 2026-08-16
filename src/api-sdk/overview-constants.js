export const API_SDK_OVERVIEW_ERROR_CODE = 'API_SDK_OVERVIEW_INVALID';

export const API_SDK_BUSINESS_DRIVERS = Object.freeze({
  GUEST: 'consistent-digital-guest-experiences', PROPERTY: 'property-system-integration',
  TENANT: 'tenant-application-integration', PARTNER: 'partner-ecosystem-growth',
  PUBLIC: 'approved-public-developer-access', INTERNAL: 'reliable-internal-service-collaboration',
  AUTOMATION: 'workflow-and-agent-capability-access', DELIVERY: 'faster-application-development',
  COST: 'reduced-integration-cost', THIRD_PARTY: 'controlled-third-party-access',
  EVOLUTION: 'predictable-platform-evolution', CONSISTENCY: 'cross-channel-consistency',
  SELF_SERVICE: 'developer-self-service', OPERATIONS: 'enterprise-support-and-operations',
  ADOPTION: 'measurable-interface-adoption', PORTABILITY: 'vendor-and-technology-portability'
});

export const API_SDK_OBJECTIVES = Object.freeze({
  CAPABILITY: 'business-capability-oriented-apis', OWNERSHIP: 'explicit-api-product-ownership',
  CONTRACTS: 'published-and-testable-contracts', EXPERIENCE: 'consistent-consumer-experiences',
  IDENTITY: 'secure-identity-and-least-privilege', SCOPE: 'end-to-end-tenant-and-property-context',
  ERRORS: 'stable-error-and-recovery-behavior', IDEMPOTENCY: 'safe-idempotency-and-concurrency',
  VERSIONING: 'predictable-versioning', COMPATIBILITY: 'evidence-based-compatibility-decisions',
  RETIREMENT: 'governed-deprecation-and-retirement', SDKS: 'supported-portable-sdks',
  GENERATION: 'reproducible-generated-artifacts', DISCOVERY: 'discoverable-documentation',
  CONFORMANCE: 'automated-conformance', OBSERVABILITY: 'observable-provider-and-consumer-behavior',
  OPERATIONS: 'reliable-operations-and-support', NEUTRALITY: 'vendor-neutral-evolution'
});

export const API_SDK_ARCHITECTURAL_SEPARATIONS = Object.freeze({
  CAPABILITY_EXPOSURE: 'capability-separate-from-exposure', CONTRACT_IMPLEMENTATION: 'contract-separate-from-implementation',
  REACHABILITY_AUTHORITY: 'reachability-separate-from-authority', GATEWAY_DOMAIN: 'gateway-policy-separate-from-domain-policy',
  SDK_AUTHORITY: 'sdk-convenience-separate-from-server-authority',
  ARTIFACT_CONTRACT: 'generated-artifacts-separate-from-contract-authority'
});

export const API_SDK_CORE_CONCEPTS = Object.freeze({
  CAPABILITY: 'capability', API: 'api', PRODUCT: 'api-product', CONTRACT: 'api-contract',
  OPERATION: 'operation', SDK: 'sdk', CONSUMER: 'consumer', PROVIDER: 'provider',
  CONTRACT_SOURCE: 'contract-source', COMPATIBILITY: 'compatibility-boundary', CONFORMANCE: 'conformance'
});

export const API_SDK_CORE_PRINCIPLES = Object.freeze({
  CAPABILITY_FIRST: 'business-capability-before-endpoint', OWNERSHIP_FIRST: 'ownership-before-publication',
  CONTRACT_FIRST: 'contract-before-implementation', IDENTITY_FIRST: 'identity-before-processing',
  AUTHORITY_FIRST: 'authority-before-action', TRUST_BOUNDARIES: 'validate-at-every-trust-boundary',
  COMPATIBILITY_FIRST: 'compatibility-before-convenience', IDEMPOTENCY_FIRST: 'idempotency-before-blind-retry',
  CONTRACTUAL_ERRORS: 'errors-are-contractual', EVIDENCE_FIRST: 'evidence-before-retirement',
  TECHNOLOGY_INDEPENDENCE: 'technology-independence'
});

export const API_PRODUCT_FIELDS = Object.freeze({
  IDENTITY: 'stable-product-identity', PURPOSE: 'purpose', SCOPE: 'domain-and-capability-scope',
  ACCOUNTABLE_OWNER: 'accountable-owner', TECHNICAL_OWNER: 'technical-owner',
  OPERATIONAL_OWNER: 'operational-owner', CONSUMERS: 'intended-consumers',
  EXPOSURE: 'exposure-classification', CLASSIFICATION: 'data-classification',
  INTERACTIONS: 'operations-and-events', TENANCY: 'tenant-and-property-behavior',
  AUTHORITY: 'identity-and-authorization-model', CONTRACTS: 'contract-sources',
  COMPATIBILITY: 'compatibility-policy', COMMITMENTS: 'service-commitments',
  LIMITS: 'quotas-and-limits', DOCUMENTATION: 'documentation', SDK: 'sdk-support', SUPPORT: 'support-route',
  VERSIONS: 'current-versions', LIFECYCLE: 'lifecycle-state', RETIREMENT: 'deprecation-and-retirement-policy',
  EVIDENCE: 'evidence-requirements'
});

export const API_CONSUMER_TYPES = Object.freeze({
  USER_APP: 'first-party-user-applications', SERVICE_APP: 'first-party-service-applications',
  TENANT_APP: 'tenant-applications', PROPERTY_APP: 'property-applications', PARTNER: 'partner-applications',
  PUBLIC: 'public-developer-applications', WORKFLOW: 'workflow-workers', ORCHESTRATOR: 'ai-orchestrators',
  AGENT: 'ai-agents', EXTENSION: 'approved-extensions', OPERATIONS: 'operational-and-administrative-tools'
});

export const API_AUDIENCE_CLASSIFICATIONS = Object.freeze({
  SERVICE_INTERNAL: 'service-internal', PLATFORM_INTERNAL: 'platform-internal', TENANT: 'tenant-facing',
  PROPERTY: 'property-facing', PARTNER: 'partner-facing', PUBLIC: 'public',
  ADMINISTRATIVE: 'administrative', OPERATIONAL: 'operational'
});

export const API_INTERACTION_CLASSIFICATIONS = Object.freeze({
  QUERY: 'query', COMMAND: 'command', ACTION: 'action', EVENT: 'event', CALLBACK: 'callback',
  STREAM: 'stream', BATCH: 'batch', ADMINISTRATIVE: 'administrative-control'
});

export const API_SDK_LOGICAL_LAYERS = Object.freeze({
  CONSUMER: 'consumer-experience-layer', PRODUCT: 'product-and-contract-layer',
  ACCESS: 'access-and-edge-layer', PROVIDER: 'provider-interface-layer',
  SDK: 'sdk-and-developer-artifact-layer', ASSURANCE: 'lifecycle-and-assurance-layer',
  OPERATIONS: 'operations-and-feedback-layer'
});

export const API_SDK_CAPABILITIES = Object.freeze({
  PRODUCT_REGISTRY: 'api-product-registry', CONTRACT_REPOSITORY: 'contract-repository',
  CONTRACT_VALIDATOR: 'contract-validator', EXPOSURE_CONTROLLER: 'exposure-controller',
  GATEWAY: 'api-gateway', CONSUMER_REGISTRY: 'consumer-registry', ACCESS: 'access-integration',
  PORTAL: 'developer-portal', SDK_FACTORY: 'sdk-factory', CONFORMANCE: 'test-and-conformance',
  LIFECYCLE: 'lifecycle-manager', ANALYTICS: 'analytics-and-feedback',
  OPERATIONS: 'operations-control', EVIDENCE: 'evidence-service'
});

export const API_CONTRACT_FIELDS = Object.freeze({
  IDENTITY: 'product-and-operation-identity', PURPOSE: 'purpose-and-semantics',
  CONSUMERS: 'eligible-consumers', AUTHENTICATION: 'authentication', AUTHORIZATION: 'authorization',
  ACTING_IDENTITY: 'acting-identity-and-delegation', TENANCY: 'tenant-and-property-context',
  REQUESTS: 'request-messages', RESPONSES: 'response-messages', EVENTS: 'event-messages',
  FIELDS: 'required-and-optional-fields', VALIDATION: 'validation', TEMPORAL: 'temporal-semantics',
  IDEMPOTENCY: 'idempotency', CONCURRENCY: 'concurrency', ORDERING: 'ordering', PAGINATION: 'pagination',
  SEARCH: 'filtering-and-search', ERRORS: 'errors', LIMITS: 'limits', TIMEOUTS: 'timeouts',
  RETRY: 'retry-guidance', CORRELATION: 'correlation-and-trace-context', EVIDENCE: 'evidence',
  VERSION: 'version', LIFECYCLE: 'lifecycle-state'
});

export const API_AUTHORITY_CONTEXT_FIELDS = Object.freeze({
  CONSUMER: 'consumer-identity', ACTOR: 'acting-identity', DELEGATION: 'delegation', PURPOSE: 'purpose',
  OPERATION: 'operation', RESOURCE: 'resource-scope', TENANT: 'tenant', PROPERTY: 'property',
  CLASSIFICATION: 'data-classification', POLICY: 'policy-decision', APPROVAL: 'approval-state',
  CONTRACT: 'contract-version'
});

export const API_ERROR_CLASSES = Object.freeze({
  INVALID: 'invalid-request', AUTHENTICATION: 'authentication-failure', AUTHORIZATION: 'authorization-denial',
  NOT_FOUND: 'resource-absence', STATE_CONFLICT: 'state-conflict', IDEMPOTENCY: 'idempotency-conflict',
  RATE_LIMIT: 'rate-or-quota-limit', DEPENDENCY: 'dependency-failure', TIMEOUT: 'timeout',
  UNAVAILABLE: 'temporary-unavailability', UNSUPPORTED: 'unsupported-version',
  DEPRECATED: 'deprecated-operation', INTERNAL: 'internal-failure'
});

export const API_CONTRACT_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed', PREVIEW: 'experimental-or-preview', ACTIVE: 'active',
  DEPRECATED: 'deprecated', RESTRICTED: 'restricted', RETIRED: 'retired'
});

export const SDK_CAPABILITIES = Object.freeze({
  CLIENT: 'client-construction', TYPES: 'contract-types', AUTHENTICATION: 'authentication-integration',
  SCOPE: 'tenant-and-property-context-handling', VALIDATION: 'request-validation', SERIALIZATION: 'serialization',
  PAGINATION: 'pagination-helpers', IDEMPOTENCY: 'idempotency-support',
  TIMEOUTS: 'timeout-and-cancellation', RETRY: 'safe-retry-behavior', ERRORS: 'error-mapping',
  ASYNC: 'callback-or-stream-helpers', TELEMETRY: 'telemetry-hooks', TESTING: 'test-utilities', EXAMPLES: 'examples'
});

export const SDK_LOGICAL_LAYERS = Object.freeze({
  CONTRACT: 'contract-layer', TRANSPORT: 'transport-adapter', CONFIGURATION: 'configuration-and-policy-layer',
  CONVENIENCE: 'convenience-layer', LANGUAGE: 'language-extension-boundary'
});

export const API_PRODUCT_LIFECYCLE_STAGES = Object.freeze({
  NEED: 'identify-need', DESIGN: 'design-and-classify', REVIEW: 'review-contract-and-controls',
  IMPLEMENT: 'implement-and-validate', TEST: 'test-and-approve', RELEASE: 'publish-and-release',
  OPERATE: 'operate-measure-and-improve', RETIRE: 'deprecate-migrate-and-retire'
});

export const API_SDK_OPERATING_ROLES = Object.freeze({
  PRODUCT_OWNER: 'api-product-owner', DOMAIN_OWNER: 'capability-or-domain-owner',
  TECHNICAL_OWNER: 'technical-owner', OPERATIONAL_OWNER: 'operational-owner',
  SECURITY_PRIVACY: 'security-and-privacy-owners', DEVELOPER_PLATFORM: 'developer-platform-owner',
  CONSUMER_OWNER: 'consumer-owner', GOVERNANCE: 'governance-and-assurance'
});

export const API_SDK_QUALITY_ATTRIBUTES = Object.freeze({
  SECURITY: 'security', COMPATIBILITY: 'compatibility', RELIABILITY: 'reliability', USABILITY: 'usability',
  OBSERVABILITY: 'observability', SCALABILITY: 'scalability', PORTABILITY: 'portability',
  MAINTAINABILITY: 'maintainability', AUDITABILITY: 'auditability', RECOVERABILITY: 'recoverability'
});

export const API_SDK_ARCHITECTURAL_RULES = Object.freeze({
  OWNERSHIP: 'explicit-accountable-technical-and-operational-ownership',
  CAPABILITY_EXPOSURE: 'apis-expose-owned-capabilities-not-database-representations',
  CONTRACT_AUTHORITY: 'approved-versioned-contract-defines-consumer-visible-behavior',
  GATEWAY_BOUNDARY: 'gateway-does-not-own-domain-rules-or-business-state',
  PROVIDER_VALIDATION: 'providers-validate-identity-authority-scope-contract-and-domain-rules',
  REACHABILITY_NOT_AUTHORITY: 'reachability-credentials-sdk-and-discovery-are-not-complete-authority',
  SCOPE_END_TO_END: 'tenant-and-property-scope-explicit-validated-propagated-and-observed',
  NO_DATABASE_ACCESS: 'no-cross-service-database-access',
  SIDE_EFFECT_SAFETY: 'side-effects-define-idempotency-concurrency-timeout-retry-and-completion',
  CONTRACTUAL_ERRORS: 'errors-stable-safe-correlated-and-actionable',
  COMPATIBILITY: 'backward-compatibility-preserved-where-practical',
  BREAKING_CHANGE: 'breaking-change-has-boundary-migration-evidence-and-retirement',
  SDK_BOUNDARY: 'sdks-preserve-semantics-without-expanding-authority-or-domain-rules',
  ARTIFACT_TRACEABILITY: 'generated-artifacts-reproducible-and-contract-traceable',
  VERSION_ALIGNMENT: 'docs-examples-sdks-tests-and-runtime-version-aligned',
  CONSUMER_PARITY: 'agents-workflows-partners-and-plugins-use-explicit-authority-boundaries',
  TELEMETRY_PROTECTION: 'observability-protects-secrets-payloads-and-scope-data',
  GOVERNED_RETIREMENT: 'retirement-requires-impact-communication-migration-exceptions-and-evidence',
  REPLACEABILITY: 'technology-replaceable-behind-stable-business-contracts',
  ARCHITECTURE_REVIEW: 'material-architecture-changes-require-review'
});

export const API_SDK_ARCHITECTURE_BOUNDARIES = Object.freeze({
  INTEGRATION: 'replace-integration-architecture', DOMAIN: 'replace-domain-service-ownership',
  GATEWAY_LOGIC: 'centralize-business-logic-in-gateway', PUBLIC_ALL: 'expose-every-capability-publicly',
  IDENTICAL: 'make-every-service-interface-identical', TRANSPORT: 'require-one-transport-or-schema',
  LANGUAGE: 'require-one-programming-language', GENERATION: 'require-one-sdk-generation-approach',
  NETWORK_AUTHORITY: 'treat-network-reachability-as-authorization', KEY_AUTHORITY: 'treat-api-key-as-complete-authority',
  CLIENT_RULES: 'reproduce-authoritative-business-rules-in-clients', EXACTLY_ONCE: 'guarantee-exactly-once-delivery',
  HIDDEN_FAILURES: 'hide-provider-failures-in-sdk', PERMANENT: 'preserve-obsolete-interfaces-indefinitely',
  DATABASE: 'allow-direct-cross-service-database-access', TENANCY: 'define-multi-tenancy-internals',
  PLUGINS: 'define-plugin-execution-internals', PRODUCTS: 'select-gateway-registry-cloud-or-vendor-products'
});

export const API_SDK_EXPECTED_OUTCOMES = Object.freeze({
  PRODUCTS: 'owned-and-discoverable-api-products', CONTRACTS: 'stable-versioned-testable-contracts',
  ACCESS: 'secure-and-scoped-consumer-access', ISOLATION: 'end-to-end-tenant-and-property-isolation',
  BEHAVIOR: 'predictable-interaction-and-error-behavior', COMPATIBILITY: 'evidence-based-compatibility-management',
  SDKS: 'portable-and-supported-sdks', ADOPTION: 'faster-and-safer-developer-adoption',
  AUTOMATION: 'governed-ai-workflow-partner-and-extension-access',
  OBSERVABILITY: 'observable-provider-and-consumer-behavior', RETIREMENT: 'controlled-deprecation-and-retirement',
  OPERATIONS: 'reliable-support-and-operations', NEUTRALITY: 'vendor-neutral-evolution'
});
