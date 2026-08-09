export const PORTAL_CATALOG_ERROR_CODE = 'PORTAL_CATALOG_INVALID';

export const PORTAL_CATALOG_OBJECTIVES = Object.freeze({
  COHERENT_ENTRY: 'provide-one-coherent-entry-into-platform-journeys',
  DISCOVERABLE_ARCHITECTURE: 'make-architecture-discoverable-before-implementation',
  VISIBLE_OWNERSHIP_BOUNDARIES: 'make-service-ownership-and-boundaries-visible',
  REDUCE_DUPLICATION: 'reduce-duplicate-capabilities',
  PAVED_PATHS_TEMPLATES: 'expose-approved-paved-paths-and-templates',
  CONNECT_LIFECYCLE: 'connect-projects-source-builds-tests-artifacts-environments-releases-and-operations',
  AUTHORITATIVE_STATE: 'present-authoritative-lifecycle-and-governance-state',
  GOVERNED_SELF_SERVICE: 'enable-governed-self-service',
  SOURCE_FRESHNESS_CONFIDENCE: 'preserve-source-version-freshness-and-confidence',
  HUMAN_AI_CONTRIBUTORS: 'support-human-contributors-and-authorized-ai-agents',
  ACCESS_AWARE_DISCOVERY: 'enforce-access-aware-discovery',
  TENANT_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  RELEVANT_DOCUMENTATION: 'make-documentation-relevant-and-maintainable',
  SUPPORT_FEEDBACK: 'provide-contextual-support-and-feedback',
  RELIABLE_NON_MONOLITHIC: 'operate-reliably-without-becoming-a-central-monolith',
  VENDOR_NEUTRAL_CONTRACTS: 'support-vendor-neutral-contracts-and-replaceable-implementations'
});

export const PORTAL_CATALOG_PRINCIPLES = Object.freeze({
  PORTAL_NOT_AUTHORITY: 'portal-is-an-experience-not-the-authority-for-everything',
  CATALOG_DISCOVERY_AUTHORITY: 'catalog-is-a-discovery-authority',
  SOURCE_FRESHNESS_VISIBLE: 'source-and-freshness-are-visible',
  ACCESS_AWARE_DISCOVERY: 'access-aware-discovery',
  ARCHITECTURE_FIRST_CLASS: 'architecture-is-first-class',
  OWNERSHIP_PROMINENT: 'ownership-is-prominent',
  GOVERNED_SELF_SERVICE: 'self-service-uses-governed-contracts',
  MULTIPLE_CHANNELS_SHARED_CONCEPTS: 'multiple-channels-shared-concepts',
  DOCUMENTATION_PRODUCT: 'documentation-is-part-of-the-product',
  AI_CITES_SOURCES: 'ai-assistance-cites-sources'
});

export const PORTAL_ACTORS = Object.freeze({
  APPLICATION_DEVELOPERS: 'application-developers',
  SERVICE_DEVELOPERS: 'service-developers',
  PLATFORM_ENGINEERS: 'platform-engineers',
  AI_AGENT_DEVELOPERS: 'ai-and-agent-developers',
  WORKFLOW_DEVELOPERS: 'workflow-developers',
  INTEGRATION_DEVELOPERS: 'integration-developers',
  DATA_ENGINEERS: 'data-engineers',
  ARCHITECTS: 'architects',
  SERVICE_OWNERS: 'service-owners',
  OPERATIONS_RELIABILITY: 'operations-and-reliability-contributors',
  SECURITY_PRIVACY_RISK_COMPLIANCE: 'security-privacy-risk-and-compliance-contributors',
  QUALITY_ENGINEERS: 'quality-engineers',
  TENANT_SOLUTION_DEVELOPERS: 'tenant-solution-developers',
  PROPERTY_INTEGRATION_DEVELOPERS: 'property-integration-developers',
  TECHNICAL_WRITERS: 'technical-writers',
  SUPPORT_CONTRIBUTORS: 'support-contributors',
  REVIEWERS_APPROVERS: 'reviewers-and-approvers',
  AUTHORIZED_AI_AGENTS: 'authorized-ai-implementation-agents'
});

export const PORTAL_CHANNELS = Object.freeze({
  WEB: 'web-interface',
  MOBILE_RESPONSIVE: 'mobile-or-responsive-interface',
  CLI: 'command-line-interface',
  API: 'api',
  IDE: 'integrated-development-environment',
  CONVERSATIONAL: 'conversational-interface',
  AI_AGENT: 'ai-implementation-agent',
  NOTIFICATIONS: 'notifications',
  WORKFLOW_TASKS: 'workflow-tasks',
  EMBEDDED_VIEWS: 'embedded-service-views'
});

export const PORTAL_CONTEXT_FIELDS = Object.freeze({
  ACTOR_ROLE: 'actor-identity-and-role',
  TEAM: 'team',
  ACTIVE_TASK: 'active-task',
  PROJECT: 'project',
  SERVICE: 'service',
  REPOSITORY: 'repository',
  TENANT: 'tenant',
  PROPERTY: 'property',
  ENVIRONMENT: 'environment',
  ARCHITECTURE_SCOPE: 'architecture-scope',
  LIFECYCLE_STATE: 'lifecycle-state',
  RISK_POLICY_CONTEXT: 'risk-and-policy-context',
  ACTIVE_APPROVALS: 'active-approvals',
  RECENT_ACTIVITY: 'recent-activity'
});

export const PORTAL_INFORMATION_AREAS = Object.freeze({
  HOME_TASKS: 'home-and-tasks',
  ARCHITECTURE_STANDARDS: 'architecture-and-standards',
  PAVED_PATHS_TEMPLATES: 'paved-paths-and-templates',
  PROJECTS: 'projects',
  SERVICES: 'services',
  INTERFACES_DEPENDENCIES: 'interfaces-and-dependencies',
  BUILDS_TESTS_QUALITY: 'builds-tests-and-quality',
  ARTIFACTS_RELEASES: 'artifacts-and-releases',
  ENVIRONMENTS_CONFIGURATION: 'environments-and-configuration',
  DELIVERY_CHANGE: 'delivery-and-change',
  OPERATIONS_HEALTH: 'operations-and-health',
  GOVERNANCE_EVIDENCE: 'governance-and-evidence',
  DOCUMENTATION: 'documentation',
  PLATFORM_STATUS: 'platform-status',
  SUPPORT: 'support',
  FEEDBACK_ROADMAP: 'feedback-and-roadmap'
});

export const PORTAL_SELF_SERVICE_ACTIONS = Object.freeze({
  CREATE_PROJECT: 'create-a-project',
  REGISTER_SERVICE: 'register-a-service',
  SELECT_PAVED_PATH: 'select-a-paved-path',
  APPLY_TEMPLATE: 'apply-a-template',
  REQUEST_ENVIRONMENT: 'request-an-environment',
  REQUEST_ACCESS: 'request-access',
  RUN_BUILD_TEST: 'run-a-build-or-test',
  PROMOTE_ARTIFACT: 'promote-an-artifact',
  REQUEST_DELIVERY: 'request-delivery',
  TRANSFER_OWNERSHIP: 'transfer-ownership',
  REQUEST_EXCEPTION: 'request-an-exception',
  REQUEST_SUPPORT: 'request-support',
  DEPRECATE_RETIRE: 'deprecate-or-retire-a-capability'
});

export const PORTAL_SELF_SERVICE_ACTION_FIELDS = Object.freeze({
  PURPOSE: 'purpose',
  ELIGIBILITY: 'eligibility',
  REQUIRED_INPUTS: 'required-inputs',
  REQUIRED_AUTHORITY: 'required-authority',
  EXPECTED_TIME: 'expected-time',
  COST: 'cost-where-relevant',
  POLICY_APPROVAL: 'policy-and-approval',
  EXECUTION_STATE: 'execution-state',
  OUTPUT: 'output',
  EVIDENCE: 'evidence',
  EXPIRATION_CLEANUP: 'expiration-or-cleanup',
  FAILURE_RECOVERY: 'failure-and-recovery',
  SUPPORT: 'support'
});

export const CATALOG_RECORD_TYPES = Object.freeze({
  SERVICES: 'services',
  APPLICATIONS: 'applications',
  PROJECTS: 'projects',
  REPOSITORIES: 'repositories',
  COMPONENTS: 'components',
  APIS: 'apis',
  EVENTS: 'events',
  MESSAGES: 'messages',
  WORKFLOWS: 'workflows',
  AI_AGENTS: 'ai-agents',
  TOOLS: 'tools',
  INTEGRATIONS: 'integrations',
  DATA_PRODUCTS: 'data-products',
  ARTIFACTS: 'artifacts',
  ENVIRONMENTS: 'environments',
  PAVED_PATHS: 'paved-paths',
  TEMPLATES: 'templates',
  DOCUMENTATION: 'documentation',
  OWNERS_TEAMS: 'owners-and-teams'
});

export const SERVICE_CATALOG_RECORD_FIELDS = Object.freeze({
  SERVICE_IDENTIFIER: 'service-identifier',
  NAME: 'name',
  PURPOSE: 'purpose',
  DOMAIN: 'domain',
  TYPE: 'type',
  CRITICALITY: 'criticality',
  LIFECYCLE_STATE: 'lifecycle-state',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  TECHNICAL_OWNER: 'technical-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  SUPPORT: 'support',
  ARCHITECTURE_ADRS: 'architecture-and-adrs',
  REPOSITORIES_COMPONENTS: 'repositories-and-components',
  INTERFACES: 'interfaces',
  DEPENDENCIES_CONSUMERS: 'dependencies-and-consumers',
  DATA_OWNERSHIP: 'data-ownership',
  AI_PARTICIPATION: 'ai-participation',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  SECURITY_PRIVACY_CLASSIFICATION: 'security-and-privacy-classification',
  RISK_CONTROLS_FINDINGS_EXCEPTIONS: 'risk-controls-findings-and-exceptions',
  SERVICE_COMMITMENTS: 'service-commitments',
  ENVIRONMENTS: 'environments',
  ARTIFACTS_RELEASES: 'artifacts-and-releases',
  HEALTH: 'health',
  INCIDENTS_PROBLEMS: 'incidents-and-problems',
  CAPACITY_COST: 'capacity-and-cost',
  DOCUMENTATION_RUNBOOKS: 'documentation-and-runbooks',
  DEPRECATION_RETIREMENT: 'deprecation-and-retirement',
  SOURCE_FRESHNESS: 'source-and-freshness'
});

export const CATALOG_RELATIONSHIP_TYPES = Object.freeze({
  PROJECT_CHANGES_SERVICE: 'project-creates-or-changes-service',
  REPOSITORY_CONTAINS_COMPONENT: 'repository-contains-component',
  COMPONENT_IMPLEMENTS_SERVICE: 'component-implements-service',
  SERVICE_EXPOSES_INTERFACE: 'service-exposes-interface',
  SERVICE_CONSUMES_INTERFACE: 'service-consumes-interface',
  SERVICE_DEPENDS_ON_SERVICE: 'service-depends-on-service',
  SERVICE_OWNS_DATA: 'service-owns-data',
  SERVICE_USES_AI_AGENT: 'service-uses-ai-agent',
  AI_AGENT_USES_TOOL: 'ai-agent-uses-tool',
  WORKFLOW_INVOKES_SERVICE: 'workflow-invokes-service',
  INTEGRATION_CONNECTS_EXTERNAL_SYSTEM: 'integration-connects-external-system',
  ARTIFACT_REALIZES_COMPONENT: 'artifact-realizes-component',
  RELEASE_INCLUDES_ARTIFACT: 'release-includes-artifact',
  ENVIRONMENT_HOSTS_RELEASE: 'environment-hosts-release',
  TENANT_USES_SERVICE: 'tenant-uses-service',
  PROPERTY_USES_SERVICE: 'property-uses-service',
  DOCUMENT_DESCRIBES_CAPABILITY: 'document-describes-capability',
  POLICY_GOVERNS_CAPABILITY: 'policy-governs-capability'
});

export const CATALOG_AUTHORITY_SOURCES = Object.freeze({
  SERVICE_LIFECYCLE: 'service-lifecycle-capability',
  PROJECT_LIFECYCLE: 'project-lifecycle-capability',
  ARCHITECTURE_REPOSITORY: 'architecture-repository',
  ADR_REPOSITORY: 'adr-repository',
  SOURCE_SYSTEM: 'source-system',
  ARTIFACT_CAPABILITY: 'artifact-capability',
  ENVIRONMENT_CAPABILITY: 'environment-capability',
  DELIVERY_CAPABILITY: 'delivery-capability',
  OBSERVABILITY_AUTHORITY: 'observability-authority',
  POLICY_CAPABILITY: 'policy-capability',
  OPERATIONS_CAPABILITY: 'operations-capability',
  DOCUMENTATION_SOURCE: 'documentation-source'
});

export const CATALOG_REGISTRATION_STEPS = Object.freeze({
  VALIDATE_IDENTITY: 'validate-identity',
  VALIDATE_OWNERSHIP: 'validate-ownership',
  RESOLVE_RECORD_TYPE: 'resolve-record-type',
  RESOLVE_ARCHITECTURE_DOMAIN: 'resolve-architecture-and-domain',
  ESTABLISH_SOURCE_MAPPINGS: 'establish-source-mappings',
  ESTABLISH_REQUIRED_METADATA: 'establish-required-metadata',
  ESTABLISH_RELATIONSHIPS: 'establish-relationships',
  APPLY_ACCESS_CONTROLS: 'apply-access-controls',
  ESTABLISH_FRESHNESS: 'establish-freshness-expectations',
  RECORD_EVIDENCE: 'record-evidence'
});

export const CATALOG_RECONCILIATION_FINDINGS = Object.freeze({
  MISSING_RECORDS: 'missing-records',
  CONFLICTING_IDENTIFIERS: 'conflicting-identifiers',
  STALE_OWNERSHIP: 'stale-ownership',
  UNMAPPED_REPOSITORIES: 'unmapped-repositories',
  UNREGISTERED_PRODUCTION_SERVICES: 'unregistered-production-services',
  MISSING_INTERFACES: 'missing-interfaces',
  UNDECLARED_DEPENDENCIES: 'undeclared-dependencies',
  ORPHANED_ENVIRONMENTS: 'orphaned-environments',
  UNLINKED_ARTIFACTS: 'unlinked-artifacts',
  STALE_DOCUMENTS: 'stale-documents',
  LIFECYCLE_CONFLICTS: 'lifecycle-conflicts',
  TENANT_PROPERTY_INCONSISTENCIES: 'tenant-or-property-inconsistencies'
});

export const OWNERSHIP_DISCOVERY_FIELDS = Object.freeze({
  ACCOUNTABLE_OWNER: 'accountable-owner',
  TECHNICAL_OWNER: 'technical-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  DATA_OWNER: 'data-owner',
  SECURITY_PRIVACY_RESPONSIBILITY: 'security-and-privacy-responsibility',
  SUPPORT_TEAM: 'support-team',
  ESCALATION: 'escalation',
  OWNERSHIP_HISTORY: 'ownership-history'
});

export const DOCUMENTATION_TYPES = Object.freeze({
  ARCHITECTURE: 'architecture',
  ADRS: 'adrs',
  GETTING_STARTED: 'getting-started',
  PAVED_PATHS: 'paved-paths',
  TEMPLATES: 'templates',
  STANDARDS: 'standards',
  SERVICE_CONTRACTS: 'service-contracts',
  INTERFACE_REFERENCES: 'interface-references',
  EXAMPLES: 'examples',
  PROCEDURES: 'procedures',
  TROUBLESHOOTING: 'troubleshooting',
  RUNBOOKS: 'runbooks',
  RECOVERY_PROCEDURES: 'recovery-procedures',
  SECURITY_GUIDANCE: 'security-guidance',
  MIGRATION_GUIDES: 'migration-guides',
  CHANGE_HISTORY: 'change-history',
  DEPRECATION: 'deprecation',
  RETIREMENT: 'retirement'
});

export const DOCUMENTATION_RECORD_FIELDS = Object.freeze({
  DOCUMENT_IDENTIFIER: 'document-identifier',
  TITLE: 'title',
  TYPE: 'type',
  PURPOSE: 'purpose',
  OWNER: 'owner',
  SOURCE: 'source',
  VERSION: 'version',
  STATUS: 'status',
  APPLICABILITY: 'applicable-projects-services-interfaces-or-versions',
  ARCHITECTURE_RELATIONSHIP: 'architecture-relationship',
  ACCESS_CLASSIFICATION: 'access-classification',
  LAST_REVIEW: 'last-review',
  EXPECTED_FRESHNESS: 'expected-freshness',
  DEPRECATION: 'deprecation',
  ARCHIVAL: 'archival'
});

export const DOCUMENTATION_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  DRAFT: 'draft',
  REVIEW: 'review',
  APPROVED: 'approved',
  PUBLISHED: 'published',
  UPDATING: 'updating',
  DEPRECATED: 'deprecated',
  ARCHIVED: 'archived'
});

export const SEARCH_DOMAINS = Object.freeze({
  ARCHITECTURE: 'architecture',
  ADRS: 'adrs',
  PROJECTS: 'projects',
  SERVICES: 'services',
  REPOSITORIES: 'repositories',
  COMPONENTS: 'components',
  INTERFACES: 'interfaces',
  DEPENDENCIES: 'dependencies',
  PAVED_PATHS: 'paved-paths',
  TEMPLATES: 'templates',
  DOCUMENTATION: 'documentation',
  BUILDS_ARTIFACTS: 'builds-and-artifacts',
  ENVIRONMENTS_RELEASES: 'environments-and-releases',
  INCIDENTS_RUNBOOKS: 'incidents-and-runbooks',
  GOVERNANCE_EVIDENCE: 'policies-controls-findings-and-evidence',
  SUPPORT_KNOWLEDGE: 'support-knowledge'
});

export const SEARCH_INDEXING_REQUIREMENTS = Object.freeze({
  STABLE_IDENTIFIERS: 'use-stable-identifiers',
  SOURCE_REFERENCES: 'preserve-source-references',
  ACCESS_ATTRIBUTES: 'preserve-access-control-attributes',
  TENANT_PROPERTY_SCOPE: 'preserve-tenant-and-property-scope',
  VERSION_LIFECYCLE: 'preserve-version-and-lifecycle',
  INDEXING_TIME: 'track-indexing-time',
  DELETION_REVOCATION: 'support-deletion-and-revocation',
  STALE_FAILED_INGESTION: 'detect-stale-or-failed-ingestion',
  NO_SECRET_VALUES: 'avoid-indexing-secret-values'
});

export const AI_DISCOVERY_REQUIREMENTS = Object.freeze({
  CITE_AUTHORITATIVE_SOURCES: 'cite-authoritative-sources',
  DISTINGUISH_FACTS_INFERENCE: 'distinguish-facts-from-inference',
  RESPECT_ACCESS_CONTROLS: 'respect-access-controls',
  PRESERVE_TENANT_PROPERTY_SCOPE: 'preserve-tenant-and-property-scope',
  AVOID_INVENTING_OWNERSHIP_ARCHITECTURE: 'avoid-inventing-ownership-or-architecture',
  ASK_ON_AMBIGUITY: 'ask-when-context-is-ambiguous',
  NO_MATERIAL_ACTION_WITHOUT_AUTHORITY: 'avoid-executing-material-actions-without-authority'
});

export const AI_ANSWER_PROVENANCE_FIELDS = Object.freeze({
  SOURCES: 'sources',
  SOURCE_VERSIONS: 'source-versions',
  RETRIEVAL_TIME: 'retrieval-time',
  ACCESS_CONTEXT: 'access-context',
  TENANT_PROPERTY_CONTEXT: 'tenant-and-property-context',
  INFERENCES: 'inferences',
  UNCERTAINTY: 'uncertainty',
  MISSING_CONFLICTING_INFORMATION: 'missing-or-conflicting-information',
  SUGGESTED_NEXT_ACTION: 'suggested-next-action'
});

export const PORTAL_SECURITY_FIELDS = Object.freeze({
  ENTERPRISE_IDENTITY: 'enterprise-identity',
  STRONG_AUTHENTICATION: 'strong-authentication-where-required',
  LEAST_PRIVILEGE: 'least-privilege',
  ZERO_TRUST_EVALUATION: 'zero-trust-evaluation',
  ACCESS_AWARE_COMPOSITION: 'access-aware-composition',
  TENANT_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  SENSITIVE_FIELD_FILTERING: 'sensitive-field-filtering',
  SECRET_EXCLUSION: 'secret-exclusion',
  INPUT_VALIDATION: 'input-validation',
  SESSION_SECURITY: 'session-security',
  AUDIT: 'audit',
  ABUSE_PREVENTION: 'abuse-prevention',
  INCIDENT_RESPONSE: 'incident-response'
});

export const PORTAL_CATALOG_GOVERNANCE_AREAS = Object.freeze({
  INFORMATION_ARCHITECTURE: 'information-architecture',
  RECORD_TAXONOMY: 'record-taxonomy',
  IDENTIFIER_STANDARDS: 'identifier-standards',
  REQUIRED_METADATA: 'required-metadata',
  OWNERSHIP: 'ownership',
  SOURCE_AUTHORITY: 'source-authority',
  FRESHNESS_EXPECTATIONS: 'freshness-expectations',
  RELATIONSHIP_TYPES: 'relationship-types',
  ACCESS_CLASSIFICATION: 'access-classification',
  SEARCH_INDEXING: 'search-indexing',
  DOCUMENTATION_STANDARDS: 'documentation-standards',
  AI_DISCOVERY_RULES: 'ai-assisted-discovery-rules',
  ACCESSIBILITY: 'accessibility',
  SERVICE_COMMITMENTS: 'service-commitments',
  DEPRECATION: 'deprecation',
  QUALITY_REVIEW: 'quality-review'
});

export const PORTAL_CATALOG_MATURITY_LEVELS = Object.freeze({
  FRAGMENTED: 'fragmented',
  DOCUMENTED: 'documented',
  INTEGRATED: 'integrated',
  GOVERNED: 'governed',
  MEASURED: 'measured',
  ADAPTIVE: 'adaptive'
});

export const PORTAL_CATALOG_MEASURES = Object.freeze({
  ARCHITECTURE_FIND_TIME: 'time-to-find-applicable-architecture',
  OWNER_FIND_TIME: 'time-to-find-a-service-owner',
  SEARCH_SUCCESS_ZERO_RESULT: 'search-success-and-zero-result-rate',
  CATALOG_COVERAGE: 'catalog-coverage',
  OWNERSHIP_COMPLETENESS: 'ownership-completeness',
  METADATA_FRESHNESS: 'metadata-freshness',
  RELATIONSHIP_COMPLETENESS: 'relationship-completeness',
  UNREGISTERED_PRODUCTION_SERVICES: 'unregistered-production-services',
  ORPHAN_FINDINGS: 'orphan-findings',
  DOCUMENTATION_FRESHNESS: 'documentation-freshness',
  DOCUMENTATION_SUCCESS: 'documentation-success',
  SELF_SERVICE_COMPLETION: 'self-service-completion',
  SELF_SERVICE_ABANDONMENT: 'self-service-abandonment',
  PORTAL_AVAILABILITY_LATENCY: 'portal-availability-and-latency',
  INDEXING_LATENCY: 'indexing-latency',
  ACCESS_CONTROL_DEFECTS: 'access-control-defects',
  TENANT_PROPERTY_LEAKAGE_DEFECTS: 'tenant-or-property-leakage-defects',
  AI_CITATION_COMPLETENESS: 'ai-answer-citation-completeness',
  SUPPORT_DEMAND: 'support-demand',
  ACCESSIBILITY_DEFECTS: 'accessibility-defects',
  USER_SATISFACTION: 'user-satisfaction',
  PAVED_PATH_ADOPTION: 'paved-path-adoption'
});

export const PORTAL_CATALOG_ANTI_PATTERNS = Object.freeze({
  PORTAL_AS_PLATFORM: 'treating-the-portal-product-as-the-developer-platform',
  CATALOG_SOURCE_OF_EVERY_FIELD: 'treating-the-catalog-as-the-source-of-every-field',
  COPYING_STATE_WITHOUT_AUTHORITY: 'copying-domain-state-without-authority-or-freshness',
  HIDING_SOURCE_VERSION: 'hiding-source-and-version',
  MONOLITHIC_METADATA_DATABASE: 'creating-one-monolithic-metadata-database',
  STALE_DATA_CURRENT: 'presenting-stale-data-as-current',
  DISCOVERY_ASSIGNS_OWNERSHIP: 'allowing-automated-discovery-to-assign-business-ownership',
  COLLAPSING_RECORD_TYPES: 'treating-repositories-projects-components-and-services-as-the-same-record-type',
  POPULARITY_OVER_AUTHORITY: 'ranking-popularity-above-authoritative-applicability',
  NON_ACCESS_AWARE_INDEXING: 'indexing-restricted-content-without-access-aware-retrieval',
  TENANT_PROPERTY_LEAKAGE: 'leaking-tenant-or-property-existence-through-search-or-counts',
  AI_ANSWERS_WITHOUT_CITATIONS: 'ai-answers-without-citations',
  AI_INFERENCE_AS_FACT: 'writing-ai-inference-back-as-authoritative-fact',
  SELF_SERVICE_BYPASSES_CONTROL_PLANE: 'self-service-actions-that-bypass-control-plane-contracts',
  OWNERLESS_DOCUMENTATION: 'documentation-without-owners-or-lifecycle',
  GRAPHICAL_ONLY_DEPENDENCIES: 'graphical-only-dependency-views',
  SINGLE_PORTAL_CRITICAL_ACTIONS: 'critical-recovery-actions-available-only-through-one-portal',
  INDIVIDUAL_SURVEILLANCE_ANALYTICS: 'analytics-used-for-individual-surveillance',
  GENERIC_OWNER_PLACEHOLDERS: 'generic-ownership-placeholders',
  PERMANENT_STALE_ORPHAN_RECORDS: 'permanent-stale-or-orphan-records'
});

export const PORTAL_CATALOG_ARCHITECTURAL_RULES = Object.freeze({
  PORTAL_EXPERIENCE_NOT_AUTHORITY: 'treat-the-portal-as-a-coherent-experience-capability-not-the-authority-for-every-domain',
  CATALOG_DISCOVERY_VIEW: 'treat-the-service-catalog-as-an-authoritative-discovery-view',
  PRESERVE_SOURCE_METADATA: 'preserve-source-version-freshness-ownership-and-access-for-composed-information',
  STABLE_TYPED_RELATIONSHIPS: 'use-stable-identities-and-typed-relationships',
  DISTINCT_RECORD_TYPES: 'keep-projects-repositories-components-services-releases-and-environments-distinct',
  FIRST_CLASS_ARCHITECTURE: 'make-architecture-adrs-ownership-interfaces-dependencies-and-lifecycle-first-class',
  GOVERNED_SELF_SERVICE: 'invoke-self-service-through-governed-control-plane-contracts',
  CONSISTENT_MULTI_CHANNELS: 'support-multiple-interaction-channels-with-consistent-concepts',
  ACCESS_AWARE_COMPOSITION: 'enforce-access-aware-search-navigation-relationships-and-ai-assistance',
  TENANT_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  NO_INVENTED_OWNERSHIP: 'prevent-automated-discovery-from-inventing-accountable-ownership-or-architecture',
  GOVERN_CATALOG_LIFECYCLE: 'govern-catalog-registration-enrichment-reconciliation-freshness-and-quality',
  DOCUMENTATION_LIFECYCLE_RESOURCE: 'treat-documentation-as-an-owned-versioned-accessible-lifecycle-resource',
  AI_CITES_AND_IDENTIFIES_INFERENCE: 'require-ai-assisted-discovery-to-cite-authoritative-sources-and-identify-inference',
  SUPPORT_AND_STATUS: 'provide-contextual-support-and-platform-status',
  ALTERNATE_CRITICAL_PATHS: 'preserve-alternate-paths-for-critical-actions-during-portal-degradation',
  PRIVACY_SECRET_PROTECTION: 'protect-privacy-and-prevent-secret-indexing',
  OUTCOME_MEASUREMENT: 'measure-discovery-and-task-outcomes-rather-than-record-or-page-volume',
  VENDOR_NEUTRAL_REPLACEABLE: 'preserve-vendor-neutrality-and-replaceable-implementations'
});

export const FUTURE_PORTAL_CATALOG_CAPABILITIES = Object.freeze({
  INTENT_DRIVEN_NAVIGATION: 'intent-driven-developer-navigation',
  SEMANTIC_DISCOVERY: 'semantic-architecture-and-service-discovery',
  ROLE_AWARE_JOURNEYS: 'personalized-role-aware-journeys',
  ACCOUNTABLE_RELATIONSHIP_DISCOVERY: 'automated-relationship-discovery-with-accountable-confirmation',
  PREDICTIVE_DOCUMENTATION_FRESHNESS: 'predictive-documentation-freshness',
  ARCHITECTURE_AWARE_RECOMMENDATIONS: 'architecture-aware-recommendations',
  CROSS_SCOPE_IMPACT_VIEWS: 'cross-tenant-and-cross-property-impact-views',
  DIGITAL_TWINS: 'service-and-dependency-digital-twins',
  NATURAL_LANGUAGE_SELF_SERVICE: 'natural-language-self-service-preparation',
  MULTI_AGENT_CATALOG_ANALYSIS: 'multi-agent-catalog-analysis',
  ORPHAN_OWNERSHIP_RISK_DETECTION: 'proactive-orphan-and-ownership-risk-detection',
  CONTINUOUS_RECONCILIATION: 'continuous-catalog-reconciliation',
  PRIVACY_PRESERVING_ANALYTICS: 'privacy-preserving-usage-analytics',
  FEDERATED_CATALOGS: 'federated-enterprise-catalogs',
  CAPABILITY_MARKETPLACES: 'governed-capability-marketplaces'
});
