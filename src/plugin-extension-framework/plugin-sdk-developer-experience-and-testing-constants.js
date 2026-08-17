export const PLUGIN_SDK_DEVELOPER_EXPERIENCE_AND_TESTING_ERROR_CODE = 'PLUGIN_SDK_DEVELOPER_EXPERIENCE_AND_TESTING_INVALID';

export const DEVELOPER_EXPERIENCE_PRINCIPLES = Object.freeze({
  PAVED_ROAD: 'paved-road-encodes-architecture-and-security-requirements', SDK_PRESERVES_SEMANTICS: 'sdks-preserve-extension-point-semantics',
  LOCAL_RESEMBLES_HOSTED: 'local-development-resembles-hosted-behavior-without-production-authority',
  MULTI_TENANT_MANDATORY: 'multi-tenant-testing-is-mandatory', TRACEABLE_REPRODUCIBLE: 'generated-artifacts-are-traceable-and-reproducible',
  EARLY_REPEATED_VALIDATION: 'validation-occurs-early-and-repeatedly',
  EXAMPLES_SAFE_PATTERNS: 'examples-demonstrate-safe-patterns-including-failure-and-uninstall',
  NO_BUNDLED_CREDENTIALS: 'credentials-are-never-bundled-in-tools-or-templates',
  CONVENIENCE_CANNOT_WEAKEN: 'language-convenience-cannot-weaken-capability-or-tenant-context',
  ACTIONABLE_FEEDBACK: 'publisher-feedback-is-actionable-and-evidence-linked'
});

export const PLUGIN_SDK_SCOPE_ITEMS = Object.freeze({
  MANIFEST_CONFIG_MODELS: 'manifest-and-configuration-models', EXTENSION_POINT_CONTRACTS: 'extension-point-contracts',
  CAPABILITY_REQUEST_TYPES: 'capability-request-types', RUNTIME_CONTEXT_TYPES: 'runtime-context-types',
  HOST_COMMUNICATION_ADAPTERS: 'host-communication-adapters', DOMAIN_HELPERS: 'api-event-workflow-agent-knowledge-ui-and-mcp-helpers',
  EXECUTION_PRIMITIVES: 'cancellation-timeout-and-idempotency-primitives', TELEMETRY_HEALTH_HOOKS: 'structured-telemetry-and-health-hooks',
  TEST_FIXTURES_MOCK_PROVIDERS: 'test-fixtures-and-mock-providers', LOCAL_SANDBOX: 'local-sandbox',
  PACKAGE_CONSTRUCTION_VERIFICATION: 'package-construction-and-verification', PROVENANCE_SIGNING_INTEGRATION: 'provenance-and-signing-integration',
  PUBLISHING_CLIENTS: 'publishing-clients'
});

export const SDK_LAYERS = Object.freeze({
  CONTRACT_LAYER: 'contract-layer', HOST_ADAPTER_LAYER: 'host-adapter-layer', CAPABILITY_LAYER: 'capability-layer',
  DEVELOPER_CONVENIENCE_LAYER: 'developer-convenience-layer', TEST_AND_PACKAGING_LAYER: 'test-and-packaging-layer'
});

export const SDK_PROHIBITED_BEHAVIORS = Object.freeze({
  INFER_TENANT_FROM_UNTRUSTED_LOCAL_STATE: 'infer-a-tenant-from-untrusted-local-state',
  HIDE_ACTIVE_INSTALLATION_OR_EXECUTION_IDENTITY: 'hide-the-active-installation-or-execution-identity',
  CREATE_UNGRANTED_CAPABILITY_HANDLES: 'create-ungranted-capability-handles',
  EMBED_OR_PERSIST_PRODUCTION_SECRETS: 'embed-or-persist-production-secrets',
  RETRY_NON_IDEMPOTENT_OPERATIONS_BLINDLY: 'retry-non-idempotent-operations-blindly',
  BYPASS_HOST_MEDIATION: 'bypass-host-mediation',
  EXPOSE_SERVICE_DATABASES_OR_INTERNAL_CLASSES: 'expose-service-databases-or-internal-classes',
  CONVERT_DENIED_CAPABILITY_TO_FALLBACK_ALLOW: 'convert-denied-capability-into-a-fallback-allow',
  MASK_MATERIAL_PROVIDER_ERRORS: 'mask-material-provider-errors'
});

export const LANGUAGE_SDK_RELEASE_DECLARATIONS = Object.freeze({
  SUPPORTED_RUNTIME_VERSIONS: 'supported-runtime-versions', CONTRACT_MANIFEST_COMPATIBILITY: 'contract-and-manifest-compatibility',
  PACKAGE_VERSION: 'package-version', GENERATION_SOURCE: 'generation-source', HANDWRITTEN_COMPONENTS: 'handwritten-components',
  SECURITY_DEPENDENCY_STATUS: 'security-and-dependency-status', SUPPORT_WINDOW: 'support-window'
});

export const SDK_GENERATION_PROPERTIES = Object.freeze({
  TRACEABLE_TO_APPROVED_SCHEMAS: 'traceable-to-approved-schemas', REPRODUCIBLE: 'reproducible',
  SEPARATED_FROM_HANDWRITTEN: 'clearly-separated-from-handwritten-code', REVIEWED_AND_TESTED: 'reviewed-and-tested',
  COMPATIBLE_WITH_REGENERATION: 'compatible-with-regeneration', PUBLISHED_WITH_PROVENANCE: 'published-with-provenance'
});

export const DEVELOPER_PORTAL_CAPABILITIES = Object.freeze({
  CONCEPTS_ARCHITECTURE: 'extension-concepts-and-architecture', EXTENSION_POINT_CATALOG: 'extension-point-catalog',
  CAPABILITY_CATALOG: 'capability-catalog', MANIFEST_REFERENCE: 'manifest-reference', SDK_DOCUMENTATION: 'sdk-documentation',
  QUICKSTARTS_EXAMPLES: 'quickstarts-and-examples', SECURITY_PRIVACY_REQUIREMENTS: 'security-and-privacy-requirements',
  TESTING_CERTIFICATION_PROFILES: 'testing-and-certification-profiles', PACKAGE_PUBLISHING_STATUS: 'package-and-publishing-status',
  COMPATIBILITY_DEPRECATION_NOTICES: 'compatibility-and-deprecation-notices', ADVISORIES_SUPPORT: 'advisories-and-support',
  TENANT_SANDBOX_MANAGEMENT: 'tenant-sandbox-management'
});

export const EXTENSION_POINT_CATALOG_FIELDS = Object.freeze({
  OWNER_SUPPORT: 'owner-and-support', PURPOSE_ELIGIBLE_CLASSES: 'purpose-and-eligible-extension-classes',
  CONTRACT_VERSIONS: 'contract-versions', AUTHORITY_DATA_CLASSIFICATION: 'authority-and-data-classification',
  SIDE_EFFECTS: 'side-effects', LIMITS_SERVICE_BEHAVIOR: 'limits-and-service-behavior', EXAMPLES: 'examples',
  TEST_SUITE: 'test-suite', COMPATIBILITY_DEPRECATION: 'compatibility-and-deprecation', KNOWN_RESTRICTIONS: 'known-restrictions'
});

export const PROJECT_TEMPLATE_ELEMENTS = Object.freeze({
  MANIFEST_SKELETON: 'manifest-skeleton', SECURE_CONFIG_SCHEMA: 'secure-configuration-schema',
  CAPABILITY_REQUEST_EXAMPLES: 'capability-request-examples', HEALTH_TELEMETRY_IMPLEMENTATION: 'health-and-telemetry-implementation',
  CANCELLATION_TIMEOUT_HANDLING: 'cancellation-and-timeout-handling', TENANT_AWARE_STORAGE_ACCESS: 'tenant-aware-storage-access',
  MULTI_TENANT_TESTS: 'tests-with-multiple-tenants', PACKAGING_PROVENANCE_WORKFLOW: 'packaging-and-provenance-workflow',
  LICENSE_SUPPORT_METADATA: 'license-and-support-metadata'
});

export const LOCAL_SANDBOX_EMULATIONS = Object.freeze({
  HOST_ADMISSION: 'host-admission', INSTALLATION_TENANT_CONTEXT: 'installation-and-tenant-context',
  CAPABILITY_GRANTS_DENIALS: 'capability-grants-and-denials', MOCK_EXTENSION_POINTS: 'mock-extension-points',
  STORAGE_SECRET_HANDLES: 'storage-and-secret-handles', NETWORK_POLICY: 'network-policy', RESOURCE_BUDGETS: 'resource-budgets',
  LIFECYCLE_CHANGES_REVOCATION: 'lifecycle-changes-and-revocation', TELEMETRY_EVIDENCE: 'telemetry-and-evidence'
});

export const TEST_TENANT_REQUIREMENTS = Object.freeze({
  AT_LEAST_TWO_DISTINCT_FIXTURES: 'at-least-two-deliberately-distinct-tenant-fixtures',
  DIFFERENT_DATA_CONFIG_GRANTS_ENTITLEMENTS: 'different-properties-data-configuration-grants-and-entitlements',
  FORBIDDEN_CROSS_TENANT_ACCESS: 'forbidden-cross-tenant-access', CACHE_COLLISION: 'cache-collision',
  EVENT_CROSSOVER: 'event-crossover', STORAGE_MIX: 'storage-mix', TENANT_SWITCH_MISTAKES: 'tenant-switch-mistakes'
});

export const UNIT_TESTING_COVERAGE_AREAS = Object.freeze({
  MANIFEST_PARSING: 'manifest-parsing', CONFIGURATION_VALIDATION: 'configuration-validation', IO_SCHEMA: 'input-and-output-schema',
  CAPABILITY_DENIAL_HANDLING: 'capability-denial-handling', IDEMPOTENCY: 'idempotency', TIMEOUTS_CANCELLATION: 'timeouts-and-cancellation',
  RESOURCE_BUDGET_BEHAVIOR: 'resource-budget-behavior', ERROR_CLASSIFICATION: 'error-classification',
  DATA_MINIMIZATION: 'data-minimization', HEALTH_TELEMETRY: 'health-and-telemetry'
});

export const CONTRACT_TESTING_AREAS = Object.freeze({
  SCHEMA_COMPATIBILITY: 'schema-compatibility', REQUIRED_CONTEXT: 'required-context', ERROR_RETRY_BEHAVIOR: 'error-and-retry-behavior',
  SIDE_EFFECT_SEMANTICS: 'side-effect-semantics', VERSION_NEGOTIATION: 'version-negotiation', LIMITS: 'limits',
  CANCELLATION: 'cancellation', PROVIDER_AUTHORIZATION: 'provider-authorization'
});

export const INTEGRATION_TESTING_AREAS = Object.freeze({
  PACKAGE_ADMISSION: 'package-admission', HOST_ISOLATION: 'host-isolation', API_EVENT_MEDIATION: 'api-and-event-mediation',
  TENANT_STORAGE: 'tenant-storage', SECRET_NETWORK_POLICY: 'secret-and-network-policy',
  WORKFLOW_AGENT_INVOCATION: 'workflow-and-agent-invocation', KNOWLEDGE_UI_BEHAVIOR: 'knowledge-and-ui-behavior',
  OBSERVABILITY_USAGE: 'observability-and-usage', SUSPENSION_UNINSTALL: 'suspension-and-uninstall'
});

export const SECURITY_TESTING_REQUIREMENTS = Object.freeze({
  STATIC_DEPENDENCY_ANALYSIS: 'static-and-dependency-analysis', SECRET_MALWARE_SCANNING: 'secret-and-malware-scanning',
  FUZZING: 'fuzzing', TENANT_ESCAPE_TESTS: 'tenant-escape-tests', HOST_ESCAPE_TESTS: 'host-escape-tests',
  NETWORK_EXFILTRATION_TESTS: 'network-exfiltration-tests', INJECTION_UNSAFE_CONTENT_TESTS: 'injection-and-unsafe-content-tests',
  UI_DECEPTION_ORIGIN_TESTS: 'ui-deception-and-origin-tests', MCP_TOOL_PROMPT_INJECTION_TESTS: 'mcp-tool-and-prompt-injection-tests',
  RESOURCE_EXHAUSTION_TESTS: 'resource-exhaustion-tests', REVOCATION_TESTS: 'revocation-tests'
});

export const FAILURE_TESTING_SCENARIOS = Object.freeze({
  HOST_RESTART: 'host-restart', TIMEOUT_CANCELLATION: 'timeout-and-cancellation', PROVIDER_DENIAL: 'provider-denial',
  EXTERNAL_DEPENDENCY_OUTAGE: 'external-dependency-outage', QUEUE_REPLAY: 'queue-replay',
  PARTIAL_SIDE_EFFECT: 'partial-side-effect', CONFIGURATION_INVALIDATION: 'configuration-invalidation',
  SECRET_ROTATION: 'secret-rotation', PACKAGE_SUSPENSION: 'package-suspension', RESOURCE_EXHAUSTION: 'resource-exhaustion'
});

export const COMPATIBILITY_TESTING_DIMENSIONS = Object.freeze({
  PLATFORM_HOST_VERSIONS: 'platform-and-host-versions', EXTENSION_POINT_VERSIONS: 'extension-point-versions',
  SDK_VERSIONS: 'sdk-versions', MANIFEST_SCHEMAS: 'manifest-schemas', CONFIGURATION_VERSIONS: 'configuration-versions',
  DEPENDENCY_VERSIONS: 'dependency-versions', DATA_MIGRATION_STATES: 'data-migration-states'
});

export const UNINSTALL_TESTING_REQUIREMENTS = Object.freeze({
  EXECUTION_STOP: 'execution-stop', SUBSCRIPTION_SCHEDULE_REMOVAL: 'subscription-and-schedule-removal',
  CREDENTIAL_REVOCATION: 'credential-revocation', CONNECTION_CLOSURE: 'connection-closure',
  DATA_EXPORT_WHERE_SUPPORTED: 'data-export-where-supported', RETENTION_DELETION: 'retention-and-deletion',
  CACHE_DERIVATIVE_CLEANUP: 'cache-and-derivative-cleanup', EVIDENCE_PRESERVATION: 'evidence-preservation'
});

export const CONFORMANCE_PROFILE_RESULT_FIELDS = Object.freeze({
  PROFILE_VERSION: 'profile-and-version', PACKAGE_DIGEST: 'package-digest', ENVIRONMENT: 'environment',
  TEST_EVIDENCE_REFERENCES: 'test-and-evidence-references', PASS_FAIL_WARNING_EXCEPTION: 'pass-fail-warning-or-exception',
  EXPIRY_RERUN_TRIGGERS: 'expiry-or-rerun-triggers'
});

export const DEVELOPER_WORKFLOW_STEPS = Object.freeze({
  DISCOVER_EXTENSION_POINT: 'discover-an-extension-point', REGISTER_EXTENSION_IDENTITY: 'register-extension-identity',
  SCAFFOLD_WITH_TEMPLATE: 'scaffold-with-an-approved-template', DECLARE_MINIMAL_CAPABILITIES: 'declare-minimal-capabilities',
  DEVELOP_AGAINST_LOCAL_SANDBOX: 'develop-against-local-sandbox',
  RUN_UNIT_CONTRACT_ISOLATION_FAILURE_TESTS: 'run-unit-contract-isolation-and-failure-tests',
  BUILD_PACKAGE_PROVENANCE: 'build-immutable-package-and-provenance', SUBMIT_VALIDATION_REVIEW: 'submit-validation-and-review',
  PUBLISH_TO_APPROVED_REGISTRY: 'publish-to-approved-registry', PILOT_IN_TEST_TENANT: 'pilot-in-a-test-tenant',
  PROMOTE_THROUGH_APPROVED_DISTRIBUTION: 'promote-through-approved-distribution'
});

export const PACKAGING_TOOLING_CAPABILITIES = Object.freeze({
  VALIDATE_MANIFEST: 'validate-manifest', RESOLVE_LOCK_DEPENDENCIES: 'resolve-and-lock-dependencies',
  REJECT_SECRETS_UNSAFE_FILES: 'reject-secrets-and-unsafe-files', DETERMINISTIC_LAYOUT: 'produce-deterministic-layout',
  COMPUTE_DIGEST: 'compute-digest', GENERATE_DEPENDENCY_INVENTORY: 'generate-dependency-inventory',
  ATTACH_PROVENANCE: 'attach-provenance', REQUEST_SIGNING: 'request-signing', VERIFY_PACKAGE_LOCALLY: 'verify-package-locally'
});

export const PUBLISHING_TOOLING_BEHAVIORS = Object.freeze({
  AUTHENTICATE_PUBLISHER_IDENTITY: 'authenticate-publisher-identity', VERIFY_NAMESPACE_OWNERSHIP: 'verify-namespace-ownership',
  UPLOAD_EXACT_PACKAGE: 'upload-exact-package', SUBMIT_EVIDENCE: 'submit-evidence', SELECT_VISIBILITY: 'select-visibility',
  TRACK_REVIEW: 'track-review'
});

export const DOCUMENTATION_REQUIREMENTS = Object.freeze({
  PURPOSE_USE_CASES: 'purpose-and-supported-use-cases', CAPABILITIES_DATA_USE: 'capabilities-and-data-use',
  EXTERNAL_PROCESSORS: 'external-processors', INSTALLATION_CONFIGURATION: 'installation-and-configuration',
  RUNTIME_SERVICE_LIMITS: 'runtime-and-service-limits', ERRORS_RECOVERY: 'errors-and-recovery',
  COMPATIBILITY: 'compatibility', UPDATE_MIGRATION: 'update-and-migration', UNINSTALL_DATA_DISPOSITION: 'uninstall-and-data-disposition',
  SUPPORT_VULNERABILITY_DISCLOSURE: 'support-and-vulnerability-disclosure', LICENSE_COMMERCIAL_TERMS: 'license-and-commercial-terms'
});

export const REFERENCE_EXTENSION_EXAMPLES = Object.freeze({
  READ_ONLY_API_USE: 'read-only-api-use', IDEMPOTENT_BUSINESS_ACTION: 'idempotent-business-action', EVENT_CONSUMER: 'event-consumer',
  WORKFLOW_ACTIVITY: 'workflow-activity', AGENT_TOOL: 'agent-tool', KNOWLEDGE_CONNECTOR: 'knowledge-connector',
  UI_COMPONENT: 'ui-component', MCP_ADAPTER: 'mcp-adapter', EXTERNAL_CONNECTOR: 'external-connector', FULL_UNINSTALL: 'full-uninstall'
});

export const DEVELOPER_OBSERVABILITY_ELEMENTS = Object.freeze({
  STRUCTURED_LOGS: 'structured-logs', TRACES: 'traces', METRICS: 'metrics', CAPABILITY_DECISIONS: 'capability-decisions',
  RESOURCE_USE: 'resource-use', HOST_EVENTS: 'host-events', CORRELATION: 'correlation'
});

export const SDK_LIFECYCLE_FIELDS = Object.freeze({
  VERSION: 'version', PROVENANCE: 'provenance', DEPENDENCIES: 'dependencies', SUPPORTED_RUNTIMES: 'supported-runtimes',
  COMPATIBLE_CONTRACT_RANGES: 'compatible-contract-ranges', MIGRATION_GUIDANCE: 'migration-guidance',
  DEPRECATION: 'deprecation', SUPPORT_WINDOW: 'support-window'
});

export const SDK_ARCHITECTURAL_RULES = Object.freeze({
  SDK_SEMANTIC_ADAPTER: 'plugin-sdk-is-a-semantic-adapter-not-a-security-boundary',
  SAFE_TEMPLATES_MINIMAL_DENY_DEFAULT: 'safe-templates-use-minimal-capabilities-and-deny-by-default-network',
  SANDBOXES_NO_AMBIENT_AUTHORITY: 'local-sandboxes-never-contain-ambient-production-authority',
  MULTI_TENANT_NEGATIVE_TESTS_MANDATORY: 'multi-tenant-negative-tests-are-mandatory',
  CONTRACT_BEHAVIORAL_COMPATIBILITY_TESTED: 'contract-and-behavioral-compatibility-are-tested',
  DETERMINISTIC_INSPECTABLE_PACKAGING: 'packaging-is-deterministic-inspectable-and-provenance-producing',
  SEPARATE_PUBLISHER_INSTALLER_RUNTIME_IDENTITIES: 'publisher-installer-and-runtime-identities-remain-separate',
  PERSISTENT_EXTENSIONS_TEST_UNINSTALL: 'persistent-extensions-must-test-uninstall-and-data-disposition',
  EXAMPLES_INCLUDE_FAILURE_REVOCATION_RECOVERY: 'examples-include-failure-revocation-and-recovery-paths'
});
