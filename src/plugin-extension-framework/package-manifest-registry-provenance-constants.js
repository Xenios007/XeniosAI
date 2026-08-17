export const PACKAGE_MANIFEST_REGISTRY_PROVENANCE_ERROR_CODE = 'PACKAGE_MANIFEST_REGISTRY_PROVENANCE_INVALID';

export const SUPPLY_CHAIN_PRINCIPLES = Object.freeze({
  IMMUTABLE_PACKAGE: 'a-published-package-version-is-immutable', DIGEST_BOUND: 'package-identity-is-bound-to-an-integrity-digest',
  MANIFEST_NO_AUTHORITY: 'manifests-declare-intent-but-confer-no-authority',
  SEPARATE_PUBLISHER_RUNTIME: 'publisher-identity-and-runtime-identity-are-separate',
  TRACEABLE_PROVENANCE: 'provenance-is-traceable-from-source-through-build-and-distribution',
  EXPLICIT_DEPENDENCIES: 'dependencies-are-explicit-inspectable-and-risk-managed',
  SIGNATURES_NOT_SAFETY: 'signatures-prove-association-and-integrity-not-safe-behavior',
  AUTHORITATIVE_REGISTRY: 'registries-are-authoritative-for-package-status',
  DIGEST_VERIFIED_DISTRIBUTION: 'distribution-verifies-exact-digests',
  RAPID_VULNERABILITY_RESPONSE: 'vulnerable-packages-can-be-matched-suspended-rebuilt-and-revoked-quickly',
  NO_SECRETS_IN_PACKAGES: 'secrets-never-enter-packages-or-provenance-records'
});

export const PACKAGE_CONTENTS = Object.freeze({
  ASSETS: 'executable-or-declarative-extension-assets', MANIFEST: 'manifest', CONFIG_SCHEMAS: 'configuration-schemas',
  CONTRACT_METADATA: 'contract-or-interface-metadata', STATIC_RESOURCES: 'static-resources', LICENSE: 'license-and-notices',
  DEPENDENCY_REFERENCE: 'dependency-inventory-reference', PROVENANCE_REFERENCE: 'provenance-and-signature-references'
});

export const MANIFEST_FIELDS = Object.freeze({
  EXTENSION_ID: 'extension-identifier', PACKAGE_VERSION: 'package-version', PUBLISHER_ID: 'publisher-identifier',
  DISPLAY_METADATA: 'display-metadata', SCHEMA_VERSION: 'manifest-schema-version',
  PLATFORM_COMPATIBILITY: 'platform-and-sdk-compatibility', ENTRY_POINTS: 'runtime-and-entry-points',
  EXTENSION_POINTS: 'extension-points-implemented', CAPABILITY_REQUESTS: 'capability-requests',
  CONFIG_SCHEMAS: 'configuration-schemas', SECRET_REFERENCES: 'secret-reference-requirements',
  DATA_HANDLING: 'data-classification-and-handling', EXTERNAL_DESTINATIONS: 'external-destinations-and-processors',
  RESOURCE_REQUIREMENTS: 'resource-requirements', DEPENDENCIES: 'dependencies', LIFECYCLE_HOOKS: 'health-and-lifecycle-hooks',
  SUPPORT_LICENSE_RIGHTS: 'support-license-and-rights-information', PROVENANCE_DIGEST: 'provenance-and-package-digest-references'
});

export const CAPABILITY_DECLARATION_TYPES = Object.freeze({
  API_OPERATION: 'api-operation-and-purpose', EVENT_TYPE: 'event-type-and-direction',
  WORKFLOW_AGENT: 'workflow-or-agent-integration', KNOWLEDGE_FILE_ACCESS: 'knowledge-or-file-access', UI_SLOT: 'ui-slot',
  EXTERNAL_DESTINATION: 'external-destination', SECRET_CLASS: 'secret-class', TENANT_STORAGE: 'tenant-storage',
  SCHEDULE: 'schedule', RESOURCE_BUDGET_CLASS: 'resource-budget-class'
});

export const DATA_HANDLING_DECLARATION_FIELDS = Object.freeze({
  CATEGORIES: 'data-categories-requested', ACCESS_MODE: 'whether-data-is-read-written-exported-or-retained',
  PURPOSE: 'processing-purpose', EXTERNAL_PROCESSORS: 'external-processors',
  STORAGE_RESIDENCY: 'storage-and-residency-needs', RETENTION: 'retention-and-deletion-behavior',
  PORTABILITY: 'tenant-portability-behavior', MODEL_TRAINING_USE: 'model-training-or-improvement-use-if-any'
});

export const CONFIGURATION_SCHEMA_ATTRIBUTES = Object.freeze({
  TYPES: 'types', CONSTRAINTS: 'constraints', SCOPE: 'scope', DEFAULTS: 'defaults', SENSITIVITY: 'sensitivity',
  DEPENDENCIES: 'dependencies', COMPATIBILITY: 'compatibility', PRESENTATION_HINTS: 'presentation-hints'
});

export const ENTRY_POINT_FIELDS = Object.freeze({
  POINT_CONTRACT_VERSION: 'extension-point-and-contract-version', RUNTIME_CLASS: 'runtime-class',
  INVOCATION_MODE: 'invocation-mode', IO_SCHEMA: 'input-and-output-schema',
  TIMEOUT_CANCELLATION: 'timeout-and-cancellation-behavior', IDEMPOTENCY: 'idempotency',
  SIDE_EFFECT_CLASSIFICATION: 'side-effect-classification', HEALTH_BEHAVIOR: 'health-behavior',
  REQUIRED_CAPABILITIES: 'required-capabilities'
});

export const PACKAGE_DEPENDENCY_TYPES = Object.freeze({
  RUNTIME_LIBRARIES: 'runtime-libraries', SDK_COMPONENTS: 'sdk-components', PLATFORM_CONTRACTS: 'platform-contract-versions',
  OTHER_PACKAGES: 'other-extension-packages', NATIVE_COMPONENTS: 'native-or-system-components', EXTERNAL_SERVICES: 'external-services'
});

export const DEPENDENCY_INVENTORY_FIELDS = Object.freeze({
  NAME: 'name', VERSION: 'version', SOURCE: 'source', DIGEST: 'digest-where-applicable', LICENSE: 'license',
  VULNERABILITY_STATUS: 'known-vulnerability-status'
});

export const EXTENSION_DEPENDENCY_REQUIREMENTS = Object.freeze({
  STABLE_IDENTITY: 'stable-extension-identity', COMPATIBLE_RANGE: 'compatible-package-range',
  VISIBLE_PLAN: 'visible-installation-plan', CAPABILITY_REVIEW: 'capability-and-data-flow-review',
  TENANT_APPROVAL: 'independent-tenant-approval-where-required', LIFECYCLE_FAILURE: 'lifecycle-and-failure-behavior'
});

export const PUBLISHER_IDENTITY_ELEMENTS = Object.freeze({
  LEGAL_IDENTITY: 'legal-or-organizational-identity', REPRESENTATIVES: 'authorized-publishing-representatives',
  SIGNING_AUTHORITIES: 'signing-authorities', DOMAIN_OWNERSHIP: 'domain-or-account-ownership',
  SUPPORT_CONTACTS: 'support-contacts', SECURITY_CONTACT: 'security-disclosure-contact',
  RIGHTS_ELIGIBILITY: 'commercial-and-rights-eligibility', STATUS_RESTRICTIONS: 'current-status-and-restrictions'
});

export const PUBLISHING_AUTHORITY_CONTROLS = Object.freeze({
  STRONG_AUTHN: 'strong-authentication', LEAST_PRIVILEGE: 'least-privilege', SEPARATION_OF_DUTIES: 'separation-of-duties',
  SHORT_LIVED_CREDENTIALS: 'short-lived-credentials-where-possible', PROTECTED_SIGNING: 'protected-signing-workflows'
});

export const BUILD_PROVENANCE_LINKS = Object.freeze({
  SOURCE_REPOSITORY: 'source-repository-and-revision', BUILD_DEFINITION: 'build-definition',
  BUILD_ENVIRONMENT: 'build-environment-identity', BUILDER_IDENTITY: 'builder-and-workflow-identity',
  DEPENDENCIES_LOCK: 'dependencies-and-lock-state', TESTS_SCANS: 'tests-and-scans', ARTIFACT_DIGEST: 'artifact-digest',
  TIMESTAMP: 'timestamp', PUBLISHER_APPROVAL: 'publisher-approval'
});

export const SUPPLY_CHAIN_CHECKS = Object.freeze({
  MANIFEST_VALIDATION: 'manifest-validation', SECRET_SCANNING: 'source-and-package-secret-scanning',
  VULNERABILITY_ANALYSIS: 'dependency-vulnerability-analysis', MALWARE_ANALYSIS: 'malware-and-behavior-analysis',
  LICENSE_ANALYSIS: 'license-and-rights-analysis', SECURITY_TESTING: 'static-and-dynamic-security-testing',
  CONFORMANCE: 'contract-conformance', ISOLATION_TESTING: 'tenant-isolation-testing',
  RESOURCE_FAILURE_TESTING: 'resource-and-failure-testing', DATA_FLOW_REVIEW: 'data-flow-and-network-review',
  PROVENANCE_VERIFICATION: 'provenance-verification'
});

export const SIGNATURE_VERIFICATION_CHECKS = Object.freeze({
  TRUSTED_IDENTITY: 'trusted-signing-identity', VALIDITY: 'signature-validity', DIGEST_MATCH: 'package-digest-match',
  CERT_VALIDITY: 'certificate-or-key-validity-at-signing', REVOCATION_STATUS: 'revocation-status',
  APPROVED_PURPOSE: 'approved-signing-purpose'
});

export const KEY_LIFECYCLE_REQUIREMENTS = Object.freeze({
  GENERATION: 'protected-generation', CUSTODY: 'custody', AUTHORIZATION: 'authorization', ROTATION: 'rotation',
  BACKUP: 'backup-where-appropriate', COMPROMISE_RESPONSE: 'compromise-response', EXPIRY: 'expiry', REVOCATION: 'revocation'
});

export const EXTENSION_REGISTRY_RESPONSIBILITIES = Object.freeze({
  IDENTITY: 'extension-and-publisher-identity', VERSION_DIGEST: 'package-version-and-digest',
  MANIFEST_METADATA: 'manifest-and-compatibility-metadata', PROVENANCE_STATUS: 'provenance-and-signature-status',
  DEPENDENCY_REFERENCES: 'dependency-references', REVIEW_STATUS: 'review-and-certification-status',
  DISTRIBUTION_LOCATION: 'distribution-location', ADVISORY_ASSOCIATIONS: 'advisory-and-vulnerability-associations',
  LIFECYCLE_STATE: 'deprecation-suspension-revocation-and-retirement'
});

export const REGISTRY_BOUNDARIES = Object.freeze({
  GRANT_CAPABILITIES: 'grant-tenant-capabilities', STORE_SECRETS: 'store-tenant-secrets', EXECUTE_PACKAGES: 'execute-packages',
  OWN_PRICING: 'own-marketplace-pricing-or-invoices', DECIDE_AUTHORIZATION: 'decide-domain-authorization',
  STORE_TELEMETRY: 'store-arbitrary-publisher-telemetry', REPLACE_BUILD_SYSTEMS: 'replace-source-or-build-systems'
});

export const REGISTRY_NAMESPACE_FIELDS = Object.freeze({
  STABLE_IDENTITY: 'stable-identity', ACCOUNTABLE_OWNER: 'accountable-owner', NAMING_RULES: 'naming-rules',
  ELIGIBLE_PUBLISHERS: 'eligible-publisher-identities', TRANSFER_PROCESS: 'transfer-process',
  DISPUTE_PROCESS: 'dispute-and-abuse-process', RETIREMENT_RULES: 'retirement-rules'
});

export const PACKAGE_PUBLICATION_STATES = Object.freeze({
  SUBMITTED: 'submitted', VALIDATING: 'validating', REVIEW_REQUIRED: 'review-required', APPROVED: 'approved',
  PUBLISHED: 'published', RESTRICTED: 'restricted', DEPRECATED: 'deprecated', SUSPENDED: 'suspended',
  REVOKED: 'revoked', RETIRED: 'retired'
});

export const DISTRIBUTION_VERIFICATION_CHECKS = Object.freeze({
  DIGEST: 'exact-digest', SIGNATURE: 'signature', STATUS: 'status', COMPATIBILITY: 'compatibility',
  TENANT_POLICY: 'tenant-policy'
});

export const PACKAGE_ADVISORY_FIELDS = Object.freeze({
  AFFECTED: 'affected-extension-packages-or-dependency-range', SEVERITY: 'severity-and-exploitability',
  IMPACTED: 'impacted-capability-or-data', FIXED_VERSION: 'fixed-or-mitigated-version',
  REQUIRED_ACTION: 'required-tenant-and-operator-action', EMBARGO_POLICY: 'publication-and-embargo-policy',
  DETECTION_EVIDENCE: 'detection-and-evidence'
});

export const EMERGENCY_REVOCATION_ACTIONS = Object.freeze({
  BLOCK_INSTALLS: 'block-new-installs', PREVENT_EXECUTIONS: 'prevent-new-executions',
  TERMINATE_ACTIVE: 'terminate-or-quarantine-active-executions', DISABLE_CAPABILITIES: 'disable-affected-capabilities',
  ROTATE_CREDENTIALS: 'rotate-credentials', REQUIRE_UPDATE: 'require-update-or-uninstall', PRESERVE_EVIDENCE: 'preserve-evidence'
});

export const REGISTRY_RECOVERY_COVERAGE = Object.freeze({
  IDENTITY_CONSISTENCY: 'identity-and-metadata-consistency', IMMUTABLE_ARTIFACTS: 'immutable-artifact-references',
  SIGNATURE_REVOCATION_DATA: 'signature-and-revocation-data', ADVISORY_HISTORY: 'advisory-history',
  REPLICATION_BACKUP: 'replication-and-backup', READ_ONLY_DEGRADED: 'read-only-degraded-behavior',
  RECONCILIATION: 'reconciliation-with-distribution-stores'
});

export const SUPPLY_CHAIN_EVIDENCE_TYPES = Object.freeze({
  PUBLISHER_VERIFICATION: 'publisher-verification-and-changes', SUBMISSION_DIGEST: 'package-submission-and-digest',
  BUILD_PROVENANCE: 'build-provenance', DEPENDENCY_INVENTORY: 'dependency-inventory',
  SCAN_TEST_RESULTS: 'scan-and-test-results', REVIEW_CERTIFICATION: 'review-and-certification',
  SIGNATURE_VERIFICATION: 'signature-verification', PUBLICATION_DOWNLOAD: 'publication-and-download',
  ADVISORY_MATCHING: 'advisory-matching', SUSPENSION_REVOCATION: 'suspension-and-revocation'
});

export const SUPPLY_CHAIN_ARCHITECTURAL_RULES = Object.freeze({
  IMMUTABLE_DIGEST_BOUND: 'published-package-versions-are-immutable-and-digest-bound',
  DECLARATIVE_NOT_AUTHORITY: 'manifests-are-declarative-capability-requests-not-authority',
  LOCKED_INSPECTABLE_GRAPHS: 'dependency-graphs-are-locked-and-inspectable',
  SEPARATE_IDENTITIES: 'publisher-listing-certification-installation-and-runtime-identities-remain-separate',
  RISK_APPROPRIATE_PROVENANCE: 'production-packages-use-provenance-appropriate-to-risk',
  SIGNATURES_NOT_BEHAVIORAL_SAFETY: 'signatures-prove-integrity-and-association-not-behavioral-safety',
  AUTHORITATIVE_DISTRIBUTION_ELIGIBILITY: 'registry-status-is-authoritative-for-distribution-eligibility',
  PRIVATE_SAME_CONTROLS: 'private-packages-retain-the-same-manifest-supply-chain-host-and-capability-controls',
  EXACT_ADVISORY_MATCHING: 'advisories-match-exact-installed-package-identity-and-versions',
  INDEPENDENT_REVOCATION: 'revocation-can-block-distribution-and-execution-independently'
});
