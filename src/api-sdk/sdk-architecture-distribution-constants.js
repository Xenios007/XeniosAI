export const SDK_ARCHITECTURE_DISTRIBUTION_ERROR_CODE = 'SDK_ARCHITECTURE_DISTRIBUTION_INVALID';

export const SDK_ARCHITECTURE_OBJECTIVES = Object.freeze({
  FAITHFUL_CONSUMPTION: 'faithful-and-predictable-api-consumption',
  SAFE_DEFAULTS: 'safe-defaults-without-hidden-behavior',
  CONSISTENT_CONCEPTS: 'consistent-concepts-across-supported-ecosystems',
  IDIOMATIC_EXPERIENCE: 'idiomatic-use-within-supported-language-and-runtime',
  EXPLICIT_BOUNDARIES: 'explicit-security-tenant-and-property-boundaries',
  REPRODUCIBLE_BUILDS: 'reproducible-generation-and-builds',
  PACKAGE_INTEGRITY: 'verifiable-package-integrity-and-provenance',
  SUPPLY_CHAIN_CONTROL: 'controlled-dependencies-and-supply-chain-risk',
  COMPATIBLE_EVOLUTION: 'compatible-evolution-linked-to-api-lifecycle',
  DISCOVERABLE_RELEASES: 'discoverable-releases-and-migration-paths',
  DIAGNOSTICS_SUPPORT: 'effective-diagnostics-and-support',
  REPLACEABLE_TECHNOLOGY: 'replaceable-generation-transport-and-distribution-technologies'
});

export const SDK_ARCHITECTURAL_PRINCIPLES = Object.freeze({
  CONTRACT_AUTHORITATIVE: 'api-contract-is-authoritative',
  SDKS_ARE_PRODUCTS: 'sdks-are-products',
  CONVENIENCE_NOT_AUTHORITY: 'convenience-must-not-create-authority',
  GENERATED_HANDWRITTEN_SEPARATED: 'generated-and-handwritten-code-are-separated',
  BEHAVIOR_EXPLICIT: 'behavior-is-explicit',
  SAFE_DEFAULTS_VISIBLE_OVERRIDES: 'safe-defaults-visible-overrides',
  PORTABLE_NOT_LOWEST_COMMON_DENOMINATOR: 'portability-does-not-mean-lowest-common-denominator',
  DISTRIBUTION_SECURITY_BOUNDARY: 'distribution-is-a-security-boundary',
  LIFECYCLE_END_TO_END: 'lifecycle-is-end-to-end',
  TECHNOLOGY_INDEPENDENCE: 'technology-independence'
});

export const SDK_CORE_DEFINITIONS = Object.freeze({
  SUPPORTED_SDK: 'supported-sdk',
  SDK_PRODUCT: 'sdk-product',
  SDK_DECLARATION: 'sdk-declaration',
  CONTRACT_DERIVED_CORE: 'contract-derived-core',
  HANDWRITTEN_EXTENSION: 'handwritten-extension',
  DISTRIBUTION_UNIT: 'distribution-unit',
  RELEASE_CHANNEL: 'release-channel',
  PACKAGE_PROVENANCE: 'package-provenance'
});

export const SDK_DECLARATION_FIELDS = Object.freeze({
  PRODUCT_ID: 'sdk-product-identifier',
  PACKAGE_COORDINATES: 'package-name-and-coordinates',
  PURPOSE_CONSUMERS: 'purpose-and-intended-consumers',
  PRODUCT_OWNER: 'accountable-product-owner',
  TECHNICAL_OWNER: 'technical-owner',
  SUPPORT_OWNER: 'operational-and-support-owner',
  CONTRACT_COVERAGE: 'covered-api-products-and-contract-versions',
  CONTRACT_SOURCES: 'contract-source-locations-and-revisions',
  RUNTIMES: 'supported-language-and-runtime-versions',
  MIN_RECOMMENDED_RUNTIME: 'minimum-and-recommended-runtime-levels',
  PLATFORMS: 'supported-platforms-where-materially-different',
  RELEASE_CHANNEL: 'stability-and-release-channel',
  SDK_VERSION: 'sdk-version',
  COMPATIBILITY_RANGE: 'api-compatibility-range',
  DEPENDENCY_POLICY: 'dependency-policy',
  AUTHENTICATION_MODEL: 'authentication-integration-model',
  TENANT_PROPERTY_MODEL: 'tenant-and-property-context-model',
  TIMEOUT_RETRY_POLICY: 'default-timeout-and-retry-policy',
  TELEMETRY_BEHAVIOR: 'telemetry-behavior',
  REGISTRY_SCOPE: 'package-registry-and-publication-scope',
  BUILD_PROVENANCE: 'build-and-provenance-identity',
  DOCS_EXAMPLES: 'documentation-and-examples',
  SUPPORT_ROUTES: 'support-and-vulnerability-reporting-routes',
  LIFECYCLE_STATE: 'lifecycle-state',
  DEPRECATION_EOS: 'deprecation-and-end-of-support-dates',
  EVIDENCE_EXCEPTIONS: 'evidence-and-exception-references'
});

export const SDK_AUDIENCE_CLASSIFICATIONS = Object.freeze({
  SERVICE_INTERNAL: 'service-internal-consumers',
  PLATFORM_INTERNAL: 'platform-internal-consumers',
  TENANT_APPLICATIONS: 'tenant-applications',
  PROPERTY_APPLICATIONS: 'property-applications',
  APPROVED_PARTNERS: 'approved-partners',
  PUBLIC_DEVELOPERS: 'public-developers',
  ADMIN_TOOLING: 'administrative-tooling',
  OPERATIONAL_TOOLING: 'operational-tooling',
  WORKFLOW_WORKERS: 'workflow-workers',
  AI_ORCHESTRATORS_AGENTS: 'ai-orchestrators-and-agents',
  PLUGINS_EXTENSIONS: 'approved-plugins-and-extensions'
});

export const SDK_DISTRIBUTION_LOGICAL_LAYERS = Object.freeze({
  CONTRACT: 'contract-layer',
  TRANSPORT_ADAPTER: 'transport-adapter',
  POLICY_CONFIGURATION: 'policy-and-configuration-layer',
  DEVELOPER_CONVENIENCE: 'developer-convenience-layer',
  EXTENSION_BOUNDARY: 'extension-boundary',
  TEST_SUPPORT: 'test-support-layer'
});

export const SDK_CONTRACT_LAYER_ELEMENTS = Object.freeze({
  PRODUCT_CONTRACT_IDENTITY: 'api-product-and-contract-identity',
  OPERATIONS: 'operations-and-operation-identifiers',
  REQUEST_RESPONSE_MODELS: 'request-and-response-models',
  EVENT_CALLBACK_MODELS: 'event-and-callback-models',
  FIELD_PRESENCE: 'required-and-optional-fields',
  FIELD_CONSTRAINTS: 'field-constraints-and-documented-defaults',
  ENUMERATIONS: 'enumerations-and-extensible-values',
  ERRORS: 'error-codes-and-structured-details',
  PAGINATION: 'pagination-and-continuation-metadata',
  IDEMPOTENCY_CONCURRENCY: 'idempotency-and-concurrency-inputs',
  LONG_RUNNING_STATE: 'long-running-operation-state',
  LIMITS: 'rate-quota-and-limit-metadata',
  DEPRECATION: 'deprecation-annotations',
  DOCUMENTATION: 'documentation-references'
});

export const SDK_GENERATION_MANIFEST_FIELDS = Object.freeze({
  CONTRACT_SOURCE: 'contract-source-and-revision',
  GENERATOR_IDENTITY: 'generator-identity-and-version',
  CONFIGURATION: 'generation-configuration',
  SDK_TARGET: 'sdk-target-and-version',
  TIMESTAMP: 'generation-timestamp-where-required',
  DIGEST: 'integrity-digest',
  EXCLUSIONS: 'known-exclusions-or-transformations'
});

export const SDK_PRODUCTION_FLOW_STAGES = Object.freeze({
  APPROVE_CONTRACT: 'approve-and-version-api-contract-source',
  RESOLVE_DECLARATION: 'resolve-sdk-declaration-and-target-ecosystem',
  VALIDATE_COMPATIBILITY: 'validate-contract-completeness-and-compatibility',
  GENERATE_CORE: 'generate-or-update-contract-derived-core',
  VALIDATE_GENERATED: 'compile-or-validate-generated-output',
  INTEGRATE_HANDWRITTEN: 'integrate-reviewed-handwritten-layers',
  RUN_TESTS: 'run-unit-contract-conformance-security-compatibility-and-package-tests',
  PRODUCE_ARTIFACTS: 'produce-immutable-distribution-units-and-documentation',
  GENERATE_EVIDENCE: 'generate-provenance-dependency-integrity-and-quality-evidence',
  APPROVE_PUBLISH: 'approve-and-publish-to-intended-release-channel',
  VERIFY_INSTALLATION: 'verify-installation-and-representative-api-interaction',
  OBSERVE_ADOPTION: 'observe-adoption-defects-vulnerabilities-and-api-compatibility'
});

export const SDK_CLIENT_CONFIGURATION_FIELDS = Object.freeze({
  ENDPOINT_ENVIRONMENT: 'endpoint-or-environment-selector',
  CREDENTIAL_PROVIDER: 'credential-provider',
  TENANT_PROPERTY_PROVIDER: 'authorized-tenant-or-property-context-provider',
  TIMEOUT_DEADLINE: 'timeout-and-deadline-policy',
  RETRY_POLICY: 'retry-policy-within-sdk-limits',
  TRANSPORT_ADAPTER: 'transport-adapter',
  NETWORK_SETTINGS: 'proxy-or-network-settings-where-supported',
  TELEMETRY_HOOKS: 'telemetry-hooks',
  CORRELATION_SOURCE: 'correlation-source',
  LOGGING_INTEGRATION: 'logging-integration',
  CLIENT_IDENTITY: 'user-agent-or-client-identity-metadata',
  RESOURCE_LIMITS: 'resource-limits'
});

export const SDK_BEHAVIOR_CONTROLS = Object.freeze({
  SERIALIZATION: 'preserve-contract-required-optional-null-precision-time-binary-enum-ordering-and-encoding-semantics',
  VALIDATION: 'stable-actionable-client-validation-with-provider-validation-authoritative',
  ERROR_MAPPING: 'preserve-structured-provider-errors-with-safe-correlation-retryability-and-documentation',
  PAGINATION: 'visible-pagination-with-stable-continuation-boundaries-limits-cancellation-and-scope',
  IDEMPOTENCY: 'idempotency-identifiers-scoped-lifetimed-and-reused-only-for-same-business-intent',
  RETRY: 'bounded-retry-based-on-safety-idempotency-guidance-limits-deadline-and-observability',
  DEADLINE_CANCELLATION: 'distinguish-attempt-timeout-deadline-idle-timeout-caller-cancellation-and-provider-async-completion',
  LONG_RUNNING: 'typed-operation-handle-with-state-polling-cancellation-resumption-correlation-and-support-context',
  CALLBACKS: 'callback-registration-signature-verification-replay-correlation-and-acknowledgment-without-disabled-verification',
  STREAMS: 'stream-authorization-backpressure-resumption-ordering-failure-timeout-cancellation-and-termination',
  BATCHES: 'batch-per-item-outcomes-partial-completion-limits-idempotency-correlation-and-retry-boundaries',
  FILES: 'bounded-file-memory-integrity-size-streaming-cancellation-temporary-storage-and-classification-diagnostics',
  TELEMETRY: 'vendor-neutral-authorized-logs-metrics-traces-and-diagnostics-with-safe-defaults',
  RESOURCE_SAFETY: 'documented-concurrency-resource-ownership-pooling-cleanup-limits-and-background-activity'
});

export const SDK_EXTENSION_BOUNDARY_TYPES = Object.freeze({
  CREDENTIAL_PROVIDERS: 'credential-providers',
  TRANSPORT_ADAPTERS: 'transport-adapters',
  ENDPOINT_RESOLUTION: 'endpoint-resolution',
  TELEMETRY_EXPORTERS: 'telemetry-exporters',
  LOGGING_ADAPTERS: 'logging-adapters',
  EXTENSIBLE_VALUE_SERIALIZATION: 'serialization-of-explicitly-extensible-values',
  RETRY_OBSERVATION: 'retry-observation',
  TEST_TRANSPORTS: 'test-transports'
});

export const SDK_TEST_SUPPORT_TYPES = Object.freeze({
  CONTRACT_EXAMPLES: 'contract-examples',
  REQUEST_RESPONSE_BUILDERS: 'request-and-response-builders',
  DETERMINISTIC_CLOCKS: 'deterministic-identifiers-and-clocks',
  TRANSPORT_DOUBLES: 'in-memory-or-local-transport-doubles',
  ERROR_RETRY_SIMULATION: 'error-and-retry-simulation',
  PAGINATION_STREAM_FIXTURES: 'pagination-and-stream-fixtures',
  CALLBACK_FIXTURES: 'callback-verification-fixtures',
  ISOLATION_SCENARIOS: 'tenant-and-property-isolation-scenarios',
  CONFORMANCE_HARNESSES: 'conformance-test-harnesses'
});

export const SDK_VERSION_RELEASE_FIELDS = Object.freeze({
  SDK_VERSION: 'sdk-version',
  SUPPORTED_CONTRACTS: 'supported-api-products-and-contract-versions',
  RUNTIME_MATRIX: 'supported-runtime-matrix',
  STABILITY_CHANNEL: 'stability-channel',
  CHANGE_CLASSIFICATION: 'change-classification',
  COMPATIBILITY_STATEMENT: 'compatibility-statement',
  DEPENDENCY_CHANGES: 'dependency-changes',
  SECURITY_IMPACT: 'security-impact',
  DEPRECATIONS: 'deprecations',
  MIGRATION_REQUIREMENTS: 'migration-requirements',
  SUPPORT_PERIOD: 'support-period'
});

export const SDK_DISTRIBUTION_CONTROLS = Object.freeze({
  PACKAGE_IDENTITY: 'unique-stable-package-identity-namespace-version-runtime-channel-digest-publisher-and-provenance',
  DEPENDENCIES: 'dependencies-minimized-declared-constrained-evaluated-monitored-and-removable',
  BUILD_PROVENANCE: 'automated-isolated-repeatable-traceable-build-with-source-contract-generator-dependency-test-package-sbom-signing-approval-and-publication-evidence',
  INTEGRITY_SIGNING: 'verify-package-integrity-publisher-namespace-provenance-version-channel-and-revocation-status',
  REGISTRY: 'approved-registry-with-namespace-ownership-publisher-auth-visibility-immutability-integrity-retention-abuse-vulnerability-deprecation-revocation-and-audit-controls',
  RELEASE_CHANNELS: 'governed-experimental-preview-stable-lts-and-deprecated-channels-with-audience-support-promotion-exit-and-security-expectations',
  PROMOTION: 'same-verified-artifact-or-cryptographically-identical-distribution-unit-promoted-across-channels',
  INSTALL_UPDATE_ROLLBACK: 'approved-source-integrity-runtime-dependency-authentication-context-upgrade-migration-validation-and-rollback-viability-guidance'
});

export const SDK_LIFECYCLE_CONTROLS = Object.freeze({
  DOCUMENTATION: 'getting-started-client-authentication-context-operation-error-pagination-retry-telemetry-runtime-compatibility-changelog-deprecation-migration-support-and-vulnerability-guidance',
  EXAMPLES: 'safe-placeholders-least-privilege-bounded-operations-explicit-error-handling-and-non-production-data',
  DEPRECATION: 'affected-package-versions-reason-replacement-contracts-announcement-eos-distribution-migration-security-exceptions-and-retirement-action',
  RETIREMENT: 'governed-observable-deprecation-support-end-documentation-removal-publication-blocking-evidence-archive-installation-restriction-and-revocation',
  SUPPLY_CHAIN_SECURITY: 'contract-source-generator-build-dependency-provenance-sbom-signing-registry-publisher-vulnerability-publication-incident-and-recovery-controls',
  INCIDENT_RESPONSE: 'detect-analyze-contain-notify-fix-rebuild-publish-revoke-migrate-preserve-evidence-and-improve-controls',
  OPERATIONS_SUPPORT: 'release-registry-installation-compatibility-runtime-dependency-security-docs-consumer-support-adoption-incident-and-evidence-ownership',
  ADOPTION_MEASURES: 'supported-version-adoption-first-operation-installation-upgrade-coverage-runtime-health-defects-migration-docs-vulnerability-release-measures'
});

export const SDK_GOVERNANCE_DECISIONS = Object.freeze({
  PRODUCT_CREATION: 'sdk-product-creation',
  CONTRACT_COVERAGE: 'contract-coverage',
  PACKAGE_NAMESPACE: 'public-package-namespace',
  RUNTIME_MATRIX: 'supported-runtime-matrix',
  COMPATIBILITY_CLASSIFICATION: 'compatibility-classification',
  STABLE_PROMOTION: 'stable-channel-promotion',
  SECURITY_EXCEPTION: 'security-exception',
  DEPRECATION_EOS: 'deprecation-and-end-of-support',
  EMERGENCY_REVOCATION: 'emergency-revocation'
});

export const SDK_QUALITY_ASSURANCE_GATES = Object.freeze({
  PRODUCT_DECLARATION: 'authoritative-product-declaration',
  CONTRACT_TRACEABILITY: 'traceability-to-approved-api-contracts',
  BOUNDARY_INTEGRITY: 'generated-and-handwritten-boundary-integrity',
  REPRODUCIBLE_BUILD: 'reproducible-generation-and-build',
  CONFORMANCE: 'contract-and-conformance-coverage',
  COMPATIBILITY: 'compatible-public-surface',
  RUNTIME_EVIDENCE: 'supported-runtime-evidence',
  SECURITY_INTEGRATION: 'authentication-and-authorization-integration',
  ISOLATION_BEHAVIOR: 'tenant-and-property-isolation-behavior',
  SAFE_BEHAVIOR: 'safe-retry-timeout-cancellation-and-error-behavior',
  DEPENDENCY_LICENSE: 'dependency-and-license-control',
  SECURITY_ASSESSMENT: 'security-assessment',
  PACKAGE_PROVENANCE: 'package-integrity-and-provenance',
  INSTALLATION: 'installation-verification',
  DOCUMENTATION: 'documentation-and-examples',
  SUPPORT_READINESS: 'support-and-incident-readiness',
  LIFECYCLE_METADATA: 'lifecycle-and-deprecation-metadata',
  EXCEPTIONS: 'approved-exceptions'
});

export const SDK_REQUIRED_EVIDENCE_TYPES = Object.freeze({
  DECLARATION_REVISION: 'sdk-declaration-revision',
  CONTRACT_REVISIONS: 'api-contract-revisions',
  SOURCE_REVISION: 'source-revision',
  GENERATION_MANIFEST: 'generation-manifest',
  GENERATOR_CONFIGURATION: 'generator-and-configuration-identity',
  COMPATIBILITY_ANALYSIS: 'compatibility-analysis',
  TEST_RESULTS: 'test-and-conformance-results',
  RUNTIME_RESULTS: 'runtime-matrix-results',
  SBOM: 'dependency-inventory-and-software-bill-of-materials',
  SECURITY_RESULTS: 'security-and-vulnerability-results',
  BUILD_PROVENANCE: 'build-provenance',
  PACKAGE_SIGNING: 'package-digest-and-signing-evidence',
  PUBLICATION_APPROVAL: 'publication-approval-and-registry-record',
  INSTALLATION_VERIFICATION: 'installation-verification',
  CHANGELOG_MIGRATION: 'changelog-and-migration-guide',
  EXCEPTIONS: 'exceptions-and-risk-acceptance',
  ADOPTION_RETIREMENT: 'adoption-and-retirement-evidence'
});

export const SDK_ARCHITECTURAL_RULES = Object.freeze({
  CONTRACT_AUTHORITATIVE: 'approved-api-contract-authoritative-over-sdk-behavior',
  POSSESSION_NOT_AUTHORITY: 'sdk-possession-or-configuration-never-grants-api-authority',
  PROVIDER_ENFORCEMENT: 'providers-enforce-identity-authorization-tenant-property-policy-and-domain-invariants',
  GENERATED_HANDWRITTEN_BOUNDARIES: 'generated-and-handwritten-code-have-explicit-reviewable-boundaries',
  SUPPORTED_SDK_GOVERNED: 'supported-sdk-has-ownership-lifecycle-documentation-tests-and-support',
  NO_HIDDEN_BEHAVIOR: 'sdk-behavior-must-not-hide-material-errors-retries-side-effects-or-compatibility-changes',
  NO_SECRET_EXPOSURE: 'credentials-and-sensitive-payloads-not-in-packages-examples-logs-or-telemetry',
  SAFE_SIDE_EFFECT_RETRY: 'automatic-side-effect-retry-requires-explicit-contract-and-idempotency-support',
  IMMUTABLE_DISTRIBUTION: 'distribution-units-immutable-identifiable-and-traceable-to-verified-source-and-build-inputs',
  GOVERNED_DEPENDENCIES: 'dependencies-declared-governed-monitored-and-removable',
  STABLE_EVIDENCE: 'stable-publication-requires-contract-compatibility-security-package-and-installation-evidence',
  CONTEXT_ISOLATION: 'tenant-and-property-context-isolated-across-clients-requests-caches-diagnostics-and-tests',
  PREVIEW_EXPLICIT: 'preview-status-explicit-and-not-stable-support',
  DEPRECATION_GOVERNED: 'deprecation-and-retirement-require-consumer-impact-migration-support-and-evidence',
  AGENT_WORKFLOW_BOUNDS: 'ai-agents-and-workflows-using-sdk-remain-bounded-by-identity-purpose-policy-and-approval'
});

export const SDK_ARCHITECTURE_BOUNDARIES = Object.freeze({
  NO_LANGUAGE_SELECTION: 'does-not-select-programming-languages-package-managers-generators-transports-registries-identity-providers-build-systems-or-vendors',
  API_CONTRACT: 'sdk-does-not-replace-authoritative-api-contract',
  PROVIDER_AUTHORITY: 'sdk-does-not-move-provider-authentication-authorization-policy-or-domain-decisions-into-client-code',
  ARCH_018: 'sdk-preserves-tenant-and-property-context-without-redefining-arch-018-multi-tenancy',
  ARCH_017_07: 'developer-experience-testing-and-conformance-defined-by-arch-017-07',
  ARCH_017_09: 'api-and-sdk-operations-observability-and-performance-defined-by-arch-017-09'
});
