export const PLUGIN_EXTENSION_OVERVIEW_ERROR_CODE = 'PLUGIN_EXTENSION_OVERVIEW_INVALID';

export const EXTENSION_BUSINESS_SCOPE = Object.freeze({
  PARTICIPANTS: 'ecosystem-participants-and-responsibilities', COMMERCIAL: 'marketplace-and-commercial-boundaries',
  ADOPTION: 'tenant-adoption-and-consent', SUPPORT_OWNERSHIP: 'support-and-service-ownership',
  PUBLISHER_TRUST: 'publisher-trust-and-accountability'
});

export const EXTENSION_INFORMATION_SCOPE = Object.freeze({
  PACKAGE_METADATA: 'package-and-manifest-metadata', CONFIGURATION: 'extension-configuration-and-secrets-references',
  OWNED_DATA: 'tenant-and-extension-owned-data', PROVENANCE: 'provenance-certification-and-advisory-data',
  USAGE_EVIDENCE: 'usage-telemetry-evidence-and-support-records'
});

export const EXTENSION_APPLICATION_SCOPE = Object.freeze({
  REGISTRIES: 'registries-and-catalogs', MARKETPLACES: 'marketplaces-and-developer-portals',
  SDKS: 'plugin-sdks-and-test-harnesses', INSTALLATION_SERVICES: 'installation-and-capability-services',
  RUNTIME_HOSTS: 'runtime-hosts', EXTENSION_POINTS: 'api-event-workflow-agent-knowledge-ui-and-mcp-extension-points'
});

export const EXTENSION_TECHNOLOGY_SCOPE = Object.freeze({
  PACKAGING: 'packaging-and-integrity', ISOLATION: 'runtime-isolation', MEDIATION: 'network-and-storage-mediation',
  RESOURCE_CONTROLS: 'resource-controls', LIFECYCLE_AUTOMATION: 'lifecycle-automation',
  OBSERVABILITY: 'observability-and-incident-containment'
});

export const EXTENSION_SCOPE_BOUNDARIES = Object.freeze({
  ARBITRARY_CODE_SAFE: 'make-arbitrary-code-safe-by-declaration', REPLACE_DOMAIN_APIS: 'replace-domain-service-apis-or-ownership',
  DEFINE_PRICES: 'define-commercial-marketplace-prices', SELECT_RUNTIME: 'select-a-programming-language-or-runtime',
  SIGNING_AS_CERTIFICATION: 'treat-code-signing-as-behavioral-certification',
  CROSS_SERVICE_DATABASE: 'permit-direct-cross-service-database-access', WEAKEN_CONTROLS: 'allow-tenants-to-weaken-platform-security-controls',
  REPLACE_ARCHITECTURE: 'replace-general-api-workflow-agent-knowledge-or-multi-tenancy-architecture',
  GUARANTEE_COMPATIBILITY: 'guarantee-backward-compatibility-for-undocumented-behavior',
  AUTOMATIC_PRODUCTION_ELIGIBILITY: 'make-community-contributions-automatically-production-eligible'
});

export const EXTENSION_ECOSYSTEM_STAKEHOLDERS = Object.freeze({
  TENANTS: 'tenants', PROPERTY_ADMINISTRATORS: 'property-administrators', PUBLISHERS: 'extension-publishers',
  PRODUCT_TEAMS: 'platform-product-teams', DOMAIN_OWNERS: 'domain-service-owners', DEVELOPER_PLATFORM: 'developer-platform-team',
  SECURITY_PRIVACY: 'security-and-privacy', OPERATIONS_SUPPORT: 'operations-and-support', MARKETPLACE_OPERATIONS: 'marketplace-operations',
  RISK_COMPLIANCE: 'risk-and-compliance', END_USERS: 'end-users', AI_WORKFLOW_OWNERS: 'ai-and-workflow-owners'
});

export const EXTENSION_ECOSYSTEM_BENEFITS = Object.freeze({
  REGIONAL_INTEGRATION: 'faster-integration-with-regional-and-specialist-systems',
  TENANT_SPECIFIC_CAPABILITY: 'tenant-specific-capabilities-without-platform-forks',
  REUSABLE_AUTOMATION: 'reusable-workflows-and-automation-packages', AI_TOOLS: 'new-ai-tools-and-supervised-agents',
  KNOWLEDGE_CONNECTORS: 'knowledge-and-content-source-connectors', PARTNER_INNOVATION: 'partner-and-developer-innovation',
  MARKETPLACE_OFFERINGS: 'commercial-marketplace-offerings', COMMUNITY_CONTRIBUTION: 'community-contribution-under-controlled-trust',
  INDEPENDENT_RELEASE: 'independent-capability-release-cycles', PORTABLE_SOLUTIONS: 'portable-industry-solution-packages'
});

export const EXTENSION_COMMON_FAILURE_MODES = Object.freeze({
  DIRECT_DATABASE_ACCESS: 'direct-access-to-service-databases', SHARED_CREDENTIALS: 'shared-platform-credentials-in-plugin-configuration',
  UNRESTRICTED_NETWORK: 'unrestricted-outbound-network-access', TRUSTED_PAYLOAD_TENANT: 'tenant-identifiers-trusted-from-plugin-payloads',
  UNCONTAINED_LOADING: 'extensions-loaded-inside-critical-processes-without-containment',
  PERMANENT_MARKETPLACE_TRUST: 'marketplace-approval-treated-as-permanent-trust',
  UNDOCUMENTED_DEPENDENCIES: 'undocumented-dependencies-on-internal-apis',
  UNCONSENTED_UPDATES: 'updates-applied-without-compatibility-or-tenant-consent',
  POST_UNINSTALL_EXECUTION: 'plugins-continuing-to-run-after-uninstall',
  OMITTED_DATA_DISPOSITION: 'extension-owned-data-omitted-from-export-and-deletion',
  UNCLASSIFIED_AGENT_TOOLS: 'agent-tools-exposed-without-authority-or-side-effect-classification',
  UNPROVENANCED_COMMUNITY_PACKAGES: 'community-packages-published-without-provenance',
  SHARED_CAPACITY_EXHAUSTION: 'one-extension-exhausting-shared-worker-or-model-capacity',
  AMBIGUOUS_SUPPORT: 'support-responsibility-becoming-ambiguous'
});

export const EXTENSION_ARCHITECTURE_GOALS = Object.freeze({
  EXTENSIBILITY: 'extensibility', SAFETY: 'safety', ISOLATION: 'isolation', DEVELOPER_EXPERIENCE: 'developer-experience',
  ECOSYSTEM_TRUST: 'ecosystem-trust', EVOLVABILITY: 'evolvability', OPERABILITY: 'operability'
});

export const EXTENSION_NON_GOALS = Object.freeze({
  IN_PROCESS_LOADING: 'support-unrestricted-in-process-code-loading',
  EVERY_CAPABILITY_AS_EXTENSION_POINT: 'expose-every-platform-capability-as-an-extension-point',
  GUARANTEE_ACCEPTANCE: 'guarantee-acceptance-of-every-publisher-or-package',
  ARBITRARY_RUNTIME_PERMISSIONS: 'allow-packages-to-request-arbitrary-permissions-at-runtime',
  PERMANENT_CERTIFICATION: 'provide-permanent-certification', HIDE_IDENTITY: 'hide-extension-identity-from-tenants-or-users',
  UNSUPPORTED_PRIVATE_HOOKS: 'replace-platform-functionality-with-unsupported-private-hooks',
  THIRD_PARTY_OUTAGE_IN_CORE: 'make-third-party-outages-part-of-the-core-service-transaction-by-default',
  MUTATE_PUBLISHED_VERSION: 'permit-extensions-to-mutate-their-published-package-version',
  PRESERVE_DATA_INDEFINITELY: 'preserve-extension-data-indefinitely-after-uninstall'
});

export const EXTENSION_FOUNDATIONAL_INVARIANTS = Object.freeze({
  STABLE_IDENTITY: 'every-extension-has-stable-identity-and-accountable-ownership',
  IMMUTABLE_PACKAGE: 'every-package-version-is-immutable-and-integrity-verifiable',
  OWNED_EXTENSION_POINT: 'every-extension-point-has-an-owning-platform-or-domain-capability',
  MANIFEST_IS_REQUEST: 'every-manifest-is-validated-but-remains-a-request-for-capability',
  EXPLICIT_INSTALLATION_SCOPE: 'every-installation-has-explicit-tenant-or-platform-scope',
  CURRENT_CAPABILITY_POLICY: 'every-runtime-action-uses-current-capability-and-policy',
  NO_DIRECT_DATABASE: 'extensions-never-directly-access-another-services-database',
  NO_AMBIENT_CREDENTIALS: 'extensions-receive-no-ambient-platform-or-tenant-credentials',
  DENY_BY_DEFAULT_NETWORK: 'network-access-is-deny-by-default',
  ISOLATED_STORAGE: 'extension-storage-is-isolated-and-attributable',
  NO_CROSS_TENANT_GRANT: 'one-tenant-installation-grants-nothing-to-another-tenant',
  CONTAINED_FAILURE: 'failure-and-resource-consumption-are-contained',
  NO_MARKETPLACE_AUTHORITY: 'marketplace-status-does-not-grant-runtime-authority',
  NO_SILENT_BOUNDARY_CROSSING: 'package-updates-do-not-silently-cross-compatibility-or-consent-boundaries',
  UNINSTALL_DISPOSES_DATA: 'uninstall-removes-execution-paths-and-disposes-of-eligible-data',
  RAPID_SUSPENSION: 'high-risk-extensions-can-be-rapidly-suspended-or-revoked',
  MATERIAL_EVIDENCE: 'material-actions-and-lifecycle-changes-produce-evidence'
});

export const EXTENSION_CATEGORIES = Object.freeze({
  INTEGRATION: 'integration-extensions', WORKFLOW: 'workflow-extensions', AI_TOOL: 'ai-tool-extensions',
  AGENT: 'agent-extensions', KNOWLEDGE: 'knowledge-extensions', EXPERIENCE: 'experience-extensions',
  DATA: 'data-extensions', PROTOCOL: 'protocol-extensions'
});

export const EXTENSION_ECOSYSTEM_ROLES = Object.freeze({
  CONSUMER: 'extension-consumer', PUBLISHER: 'publisher', EXTENSION_POINT_OWNER: 'extension-point-owner',
  REGISTRY_OPERATOR: 'registry-operator', MARKETPLACE_OPERATOR: 'marketplace-operator', TENANT_INSTALLER: 'tenant-installer',
  HOST_OPERATOR: 'host-operator'
});

export const EXTENSION_CONTROL_PLANE_ELEMENTS = Object.freeze({
  IDENTITY: 'extension-and-publisher-identity', MANIFESTS_PROVENANCE: 'package-manifests-and-provenance',
  REVIEW_STATE: 'review-and-certification-state', REGISTRY_METADATA: 'registry-and-marketplace-metadata',
  INSTALLATIONS: 'installations-and-configuration', GRANTS: 'capability-grants', ENTITLEMENTS: 'entitlements-and-update-policy',
  SUSPENSION: 'suspension-revocation-and-advisories', INVENTORY_EVIDENCE: 'inventory-and-evidence'
});

export const EXTENSION_RUNTIME_PLANE_ELEMENTS = Object.freeze({
  HOST_INVOCATION: 'host-invocation', API_DATA_ACCESS: 'api-and-data-access', EVENT_PROCESSING: 'event-processing',
  WORKFLOW_ACTIVITIES: 'workflow-activities', AGENT_TOOLS: 'agent-tools', KNOWLEDGE_PROCESSING: 'knowledge-processing',
  UI_MESSAGING: 'ui-messaging', NETWORK_CALLS: 'external-network-calls', TENANT_STORAGE: 'tenant-storage',
  TELEMETRY_USAGE: 'telemetry-and-usage'
});

export const EXTENSION_CAPABILITY_MAP_AREAS = Object.freeze({
  STRATEGY_GOVERNANCE: 'strategy-and-governance', EXTENSION_POINT_MANAGEMENT: 'extension-point-management',
  PACKAGE_PROVENANCE: 'package-and-provenance', REGISTRY_MARKETPLACE: 'registry-and-marketplace',
  PUBLISHING_CERTIFICATION: 'publishing-and-certification', INSTALLATION_CONSENT: 'installation-and-consent',
  RUNTIME_HOSTING: 'runtime-hosting', SDK_DEVELOPER_EXPERIENCE: 'plugin-sdk-and-developer-experience',
  OPERATIONS_ASSURANCE: 'operations-and-assurance'
});

export const EXTENSION_TRUST_MODEL_SIGNALS = Object.freeze({
  PUBLISHER_IDENTITY: 'publisher-identity-trust', PACKAGE_INTEGRITY: 'package-integrity-trust',
  REVIEW_CONFIDENCE: 'review-and-certification-confidence', INSTALLATION_APPROVAL: 'tenant-installation-approval',
  RUNTIME_IDENTITY: 'runtime-identity-and-capability', DATA_AUTHORIZATION: 'data-and-resource-authorization',
  OPERATIONAL_HEALTH: 'current-operational-health'
});

export const EXTENSION_CAPABILITY_GRANT_FIELDS = Object.freeze({
  API_OPERATION: 'api-operation-and-resource', EVENT_TYPE: 'event-type-and-direction',
  WORKFLOW_AGENT_CAPABILITY: 'workflow-or-agent-capability', SCOPE: 'tenant-and-property-scope',
  DATA_CLASSIFICATION: 'data-classification', EXTERNAL_DESTINATION: 'external-destination', SECRET_REFERENCE: 'secret-reference',
  STORAGE_NAMESPACE: 'storage-namespace', UI_SLOT: 'ui-slot-and-action', EXECUTION_SCHEDULE: 'execution-time-and-schedule',
  RESOURCE_BUDGET: 'resource-budget', VALIDITY: 'validity-and-revocation'
});

export const EXTENSION_POINT_QUESTIONS = Object.freeze({
  VALUE: 'what-business-or-technical-value-is-being-extended', OWNER: 'which-owner-remains-authoritative',
  STABLE_IO: 'what-inputs-and-outputs-are-stable', SIDE_EFFECTS: 'which-side-effects-are-possible',
  AUTHORITY: 'how-is-tenant-and-actor-authority-established',
  TIMEOUT_HANDLING: 'how-are-timeout-retry-cancellation-and-compensation-handled', LOAD: 'how-is-load-governed',
  COMPATIBILITY: 'how-is-compatibility-measured', EVIDENCE: 'what-evidence-is-required',
  SUSPENSION: 'how-can-the-point-be-suspended-or-retired'
});

export const EXTENSION_TARGET_STATE_RUNTIME_STEPS = Object.freeze({
  ESTABLISH_CONTEXT: 'the-caller-or-event-establishes-tenant-bound-execution-context',
  RESOLVE_INSTALLATION: 'the-host-resolves-an-active-installation-and-compatible-package',
  INTERSECT_POLICY: 'policy-intersects-the-manifest-request-with-the-capability-grant',
  START_RUNTIME: 'the-host-starts-or-selects-an-isolated-runtime',
  MEDIATED_INTERFACES: 'the-extension-receives-only-mediated-interfaces',
  VALIDATE_OWNERSHIP: 'provider-services-validate-resource-ownership-and-operation-authority',
  BOUNDED_RESOURCES: 'network-secrets-storage-and-resources-remain-bounded',
  VALIDATE_RESULTS: 'results-are-validated-and-returned-through-the-extension-point',
  IDENTIFYING_TELEMETRY: 'telemetry-usage-and-evidence-identify-tenant-installation-package-and-execution',
  CONTAINED_FAILURE: 'failure-is-contained-and-the-host-can-cancel-or-terminate-execution'
});

export const EXTENSION_TARGET_STATE_CHARACTERISTICS = Object.freeze({
  AUTHORITATIVE_IDENTITIES: 'extension-identities-and-package-versions-are-authoritative-and-discoverable',
  MACHINE_VALIDATED: 'manifests-and-extension-point-schemas-are-machine-validated',
  TRACEABLE_PROVENANCE: 'package-builds-have-traceable-provenance-and-dependency-inventory',
  VISIBLE_CAPABILITIES: 'tenant-administrators-see-requested-data-network-action-and-resource-capabilities-before-approval',
  CONSISTENT_ISOLATION: 'hosts-provide-consistent-isolation-across-supported-runtimes',
  SCOPED_STORAGE: 'extension-storage-secrets-and-telemetry-are-tenant-and-installation-scoped',
  SAFE_DEFAULT_SDKS: 'sdks-make-tenant-safe-capability-aware-development-the-default',
  AUTOMATED_CONFORMANCE: 'automated-conformance-tests-run-before-publication-and-installation',
  GOVERNED_UPDATES: 'updates-use-compatibility-staged-rollout-health-gates-and-rollback',
  SUSPENDABLE_VULNERABLE_PACKAGES: 'vulnerable-packages-can-be-identified-and-suspended-across-installations',
  RECONCILED_UNINSTALL: 'uninstall-is-a-reconciled-data-and-access-lifecycle',
  MARKETPLACE_OUTSIDE_AUTHORIZATION: 'marketplace-and-commercial-systems-remain-outside-runtime-authorization'
});

export const EXTENSION_ADOPTION_PHASES = Object.freeze({
  STANDARDIZE: 'phase-1-standardize', PAVED_ROAD: 'phase-2-provide-the-paved-road',
  GOVERN_DISTRIBUTION: 'phase-3-govern-distribution', GROW_ECOSYSTEM: 'phase-4-grow-the-ecosystem'
});

export const EXTENSION_ARCHITECTURE_RISKS = Object.freeze({
  MALICIOUS_PACKAGE: 'malicious-or-vulnerable-package', EXCESSIVE_CAPABILITY: 'excessive-capability-request',
  CROSS_TENANT_ACCESS: 'cross-tenant-data-access', DIRECT_DOMAIN_MUTATION: 'direct-domain-mutation',
  CREDENTIAL_LEAKAGE: 'credential-leakage', DATA_EXFILTRATION: 'data-exfiltration', HOST_INSTABILITY: 'host-instability',
  COMPATIBILITY_BREAK: 'compatibility-break', DEPENDENCY_COMPROMISE: 'dependency-compromise',
  MARKETPLACE_CONFUSION: 'marketplace-confusion', INCOMPLETE_UNINSTALL: 'incomplete-uninstall',
  UNSUPPORTED_GROWTH: 'unsupported-ecosystem-growth'
});

export const EXTENSION_ECOSYSTEM_MEASURES = Object.freeze({
  PUBLICATION_TIME: 'time-from-extension-development-to-approved-publication',
  CATEGORY_DIVERSITY: 'number-and-diversity-of-supported-extension-categories',
  TENANT_ADOPTION: 'tenant-adoption-and-retained-use', PUBLISHER_PERFORMANCE: 'publisher-support-and-update-performance',
  REUSE_WITHOUT_FORKS: 'reuse-across-tenants-without-code-forks'
});

export const EXTENSION_SAFETY_MEASURES = Object.freeze({
  STANDARD_HOST_USAGE: 'percentage-of-executions-using-standard-hosts-and-grants',
  NEGATIVE_TEST_COVERAGE: 'cross-tenant-negative-test-coverage',
  VIOLATIONS: 'direct-database-and-ambient-credential-violations',
  ADVISORY_CONTAINMENT_TIME: 'critical-advisory-detection-and-containment-time',
  PRIVILEGED_REVIEW: 'privileged-capability-review-completion'
});

export const EXTENSION_RELIABILITY_MEASURES = Object.freeze({
  ERROR_RATE: 'extension-attributable-error-and-incident-rate', CONTAINMENT_EFFECTIVENESS: 'host-containment-effectiveness',
  NOISY_NEIGHBOR: 'noisy-neighbor-events', ROLLBACK_SUCCESS: 'update-rollback-success',
  UNINSTALL_RECONCILIATION: 'uninstall-reconciliation-completion'
});

export const EXTENSION_DEVELOPER_MEASURES = Object.freeze({
  SDK_ADOPTION: 'sdk-adoption', CONFORMANCE_RATE: 'local-to-platform-conformance-rate',
  DOCUMENTATION_SUCCESS: 'documentation-and-example-success', PROVENANCE_COVERAGE: 'build-provenance-coverage',
  COMPATIBILITY_TEST_COVERAGE: 'compatibility-test-coverage'
});

export const EXTENSION_GOVERNANCE_MEASURES = Object.freeze({
  REVIEW_FRESHNESS: 'publisher-and-package-review-freshness', OVERDUE_REMEDIATION: 'exceptions-and-overdue-remediation',
  INVENTORY_COMPLETENESS: 'installation-inventory-completeness', GRANT_RECERTIFICATION: 'capability-grant-recertification',
  EVIDENCE_AVAILABILITY: 'evidence-availability-for-audits-and-tenant-inquiries'
});

export const EXTENSION_ARCHITECTURE_DELIVERABLES = Object.freeze({
  PRINCIPLES_INVARIANTS: 'extension-principles-and-invariants', DOMAIN_CLASSIFICATION: 'extension-domain-and-classification-model',
  EXTENSION_POINT_CONTRACT: 'extension-point-contract-model', PACKAGE_MANIFEST_REGISTRY: 'package-manifest-registry-and-provenance-model',
  LIFECYCLE_COMPATIBILITY: 'lifecycle-and-compatibility-model', CAPABILITY_SECURITY_ISOLATION: 'capability-security-and-isolation-model',
  RUNTIME_HOST_INTEGRATION: 'runtime-host-and-integration-model', SDK_DEVELOPER_EXPERIENCE_MODEL: 'plugin-sdk-and-developer-experience-model',
  INSTALLATION_OPERATIONS: 'tenant-installation-and-operations-model', MARKETPLACE_GOVERNANCE_ASSURANCE: 'marketplace-governance-and-assurance-model',
  FUTURE_ROADMAP: 'future-ecosystem-roadmap', DIAGRAMS: 'five-supporting-mermaid-diagrams'
});

export const EXTENSION_KEY_DECISIONS = Object.freeze({
  OWNED_CONTRACTS: 'extensibility-uses-owned-contracts-rather-than-implementation-hooks',
  UNTRUSTED_IMMUTABLE_PACKAGES: 'packages-are-untrusted-and-immutable',
  MANIFESTS_REQUEST_ONLY: 'manifests-request-but-do-not-grant-capability',
  SEPARATE_INSTALLATION_AUTHORIZATION: 'tenant-installation-and-runtime-authorization-remain-separate',
  HOSTS_MEDIATE: 'hosts-mediate-all-sensitive-access',
  DOMAIN_RETAINS_AUTHORITY: 'domain-services-retain-business-authority-and-data-ownership',
  DISTINCT_STATES: 'marketplace-purchase-certification-installation-and-execution-are-distinct-states',
  MCP_SAME_CONTROLS: 'mcp-providers-follow-the-same-extension-controls',
  NO_AI_SPECIAL_TRUST: 'ai-generated-extensions-receive-no-special-trust',
  UNINSTALL_INCLUDES_REVOCATION: 'uninstall-includes-access-revocation-and-data-disposition',
  EVIDENCE_GOVERNED_GROWTH: 'ecosystem-growth-is-governed-by-measurable-evidence'
});
