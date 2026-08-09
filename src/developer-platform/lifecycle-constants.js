export const PROJECT_SERVICE_LIFECYCLE_ERROR_CODE = 'PROJECT_SERVICE_LIFECYCLE_INVALID';

export const PROJECT_SERVICE_LIFECYCLE_OBJECTIVES = Object.freeze({
  IDENTITY_BEFORE_WORK: 'establish-identity-before-material-work',
  ACCOUNTABLE_OWNERSHIP: 'establish-accountable-ownership-before-resources',
  BUSINESS_ARCHITECTURE_BINDING: 'bind-work-to-business-purpose-and-architecture',
  AUTHORITATIVE_DISCOVERABLE_STATE: 'make-lifecycle-state-authoritative-and-discoverable',
  PROJECT_SERVICE_DISTINCTION: 'preserve-project-and-operational-service-distinction',
  SOURCE_OPERATIONAL_OUTCOMES: 'connect-source-changes-to-operational-outcomes',
  PREVENT_DUPLICATE_ORPHANED_CAPABILITIES: 'prevent-duplicate-or-orphaned-capabilities',
  DOMAIN_DATA_BOUNDARIES: 'preserve-domain-and-data-ownership-boundaries',
  HUMAN_AI_CONTRIBUTORS: 'support-human-and-authorized-ai-contributors',
  TENANT_PROPERTY_SCOPE: 'preserve-tenant-and-property-scope',
  INTEGRATED_CONTROLS_EVIDENCE: 'integrate-security-privacy-risk-controls-and-evidence',
  OPERATIONAL_READINESS: 'require-operational-readiness-before-production-use',
  CONTROLLED_EVOLUTION: 'support-controlled-evolution-and-compatibility',
  DEPRECATION_RETIREMENT: 'make-deprecation-and-retirement-first-class-stages',
  PRESERVE_HISTORY: 'preserve-history-after-active-work-ends'
});

export const LIFECYCLE_PRINCIPLES = Object.freeze({
  IDENTITY_BEFORE_AUTOMATION: 'identity-before-automation',
  BUSINESS_PURPOSE_BEFORE_STRUCTURE: 'business-purpose-before-structure',
  ARCHITECTURE_BEFORE_IMPLEMENTATION: 'architecture-before-implementation',
  PROJECT_IS_NOT_SERVICE: 'project-is-not-service',
  OWNERSHIP_IS_CONTINUOUS: 'ownership-is-continuous',
  STATE_IS_AUTHORITATIVE: 'lifecycle-state-is-authoritative',
  METADATA_IS_OPERATIONAL: 'metadata-is-operational',
  READINESS_IS_CONTINUOUS: 'readiness-is-continuous',
  RETIREMENT_IS_DESIGNED: 'retirement-is-designed',
  TENANT_PROPERTY_SCOPE_EXPLICIT: 'tenant-and-property-scope-is-explicit'
});

export const LIFECYCLE_CONCEPTS = Object.freeze({
  PROJECT: 'project',
  SERVICE: 'service',
  APPLICATION: 'application',
  COMPONENT: 'component',
  WORKFLOW: 'workflow',
  AI_AGENT: 'ai-agent',
  INTEGRATION: 'integration',
  REPOSITORY: 'repository',
  RELEASE: 'release',
  DEPLOYMENT: 'deployment'
});

export const PROJECT_SERVICE_RELATIONSHIPS = Object.freeze({
  ONE_PROJECT_ONE_SERVICE: 'one-project-creating-one-service',
  ONE_PROJECT_MULTIPLE_SERVICES: 'one-project-creating-multiple-services',
  ONE_PROJECT_MULTIPLE_EXISTING_SERVICES: 'one-project-changing-multiple-existing-services',
  MULTIPLE_PROJECTS_ONE_SERVICE: 'multiple-projects-changing-one-service-over-time',
  ONE_REPOSITORY_MULTIPLE_PROJECTS: 'one-repository-supporting-multiple-projects',
  ONE_REPOSITORY_MULTIPLE_COMPONENTS: 'one-repository-containing-multiple-components',
  ONE_SERVICE_MULTIPLE_REPOSITORIES: 'one-service-implemented-across-multiple-repositories',
  ONE_SERVICE_MULTIPLE_ENVIRONMENTS: 'one-service-deployed-to-multiple-environments',
  MULTI_TENANT_PROPERTY_SCOPE: 'one-service-serving-multiple-tenants-or-properties-with-explicit-boundaries'
});

export const PROJECT_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  ASSESSING: 'assessing',
  AUTHORIZED: 'authorized',
  ACTIVE: 'active',
  PAUSED: 'paused',
  BLOCKED: 'blocked',
  CLOSING: 'closing',
  CLOSED: 'closed',
  ARCHIVED: 'archived',
  CANCELLED_OR_REJECTED: 'cancelled-or-rejected'
});

export const PROJECT_CREATION_FIELDS = Object.freeze({
  PROJECT_NAME: 'project-name',
  PURPOSE: 'purpose',
  DESIRED_OUTCOME: 'desired-outcome',
  REQUESTOR: 'requestor',
  CANDIDATE_ACCOUNTABLE_OWNER: 'candidate-accountable-owner',
  PROJECT_TYPE: 'project-type',
  ARCHITECTURE_SCOPE: 'architecture-scope',
  DOMAIN: 'domain',
  PAVED_PATH: 'paved-path',
  SERVICES_OR_CAPABILITY_TYPES: 'services-or-capability-types',
  REPOSITORY_STRATEGY: 'repository-strategy',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  DATA_CLASSIFICATION: 'data-classification',
  AI_PARTICIPATION: 'ai-participation',
  INTEGRATIONS: 'integrations',
  EXPECTED_ENVIRONMENTS: 'expected-environments',
  RISK_AND_CONTROLS: 'risk-and-controls',
  REQUIRED_APPROVALS: 'required-approvals',
  CLOSURE_EXPECTATIONS: 'closure-expectations'
});

export const PROJECT_TYPES = Object.freeze({
  NEW_SERVICE: 'new-service',
  NEW_APPLICATION: 'new-application',
  EXISTING_SERVICE_CHANGE: 'existing-service-change',
  PLATFORM_CAPABILITY: 'platform-capability',
  AI_AGENT: 'ai-agent',
  WORKFLOW: 'workflow',
  INTEGRATION_CONNECTOR: 'integration-connector',
  DATA_CAPABILITY: 'data-capability',
  TENANT_ONBOARDING: 'tenant-onboarding',
  PROPERTY_ONBOARDING: 'property-onboarding',
  MIGRATION: 'migration',
  SECURITY_REMEDIATION: 'security-remediation',
  RELIABILITY_IMPROVEMENT: 'reliability-improvement',
  COMPLIANCE_REMEDIATION: 'compliance-remediation',
  RESEARCH_EXPERIMENT: 'research-or-experiment',
  DEPRECATION: 'deprecation',
  RETIREMENT: 'retirement'
});

export const PROJECT_IDENTITY_FIELDS = Object.freeze({
  GLOBALLY_UNIQUE: 'globally-unique-within-xeniosai',
  STABLE: 'stable',
  NON_SECRET: 'non-secret',
  HUMAN_DISCOVERABLE: 'human-discoverable',
  MACHINE_USABLE: 'machine-usable',
  REPOSITORY_INDEPENDENT: 'independent-of-repository-name',
  TEMPORARY_TEAM_INDEPENDENT: 'independent-of-temporary-team-name',
  RETAINED_AFTER_CLOSURE: 'retained-after-closure'
});

export const PROJECT_METADATA_FIELDS = Object.freeze({
  PROJECT_IDENTIFIER: 'project-identifier',
  NAME: 'name',
  PURPOSE: 'purpose',
  TYPE: 'type',
  LIFECYCLE_STATE: 'lifecycle-state',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  TEAM: 'team',
  REQUESTOR: 'requestor',
  ARCHITECTURE_SCOPE: 'architecture-scope',
  ADRS: 'adrs',
  DOMAIN: 'domain',
  PAVED_PATH_AND_VERSION: 'paved-path-and-version',
  TEMPLATES_AND_VERSIONS: 'templates-and-versions',
  REPOSITORIES: 'repositories',
  SERVICES_AND_CAPABILITIES: 'services-and-other-capabilities',
  DEPENDENCIES: 'dependencies',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  DATA_CLASSIFICATION: 'data-classification',
  AI_PARTICIPATION: 'ai-participation',
  INTEGRATIONS: 'integrations',
  ENVIRONMENTS: 'environments',
  RISK_AND_CONTROLS: 'risk-and-controls',
  EXCEPTIONS: 'exceptions',
  SUPPORT_PATH: 'support-path',
  EVIDENCE: 'evidence',
  CLOSURE_STATUS: 'closure-status'
});

export const SERVICE_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  DESIGNING: 'designing',
  DEVELOPING: 'developing',
  VALIDATING: 'validating',
  READY: 'ready',
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  DEPRECATED: 'deprecated',
  RETIRING: 'retiring',
  RETIRED: 'retired'
});

export const SERVICE_IDENTITY_FIELDS = Object.freeze({
  STABLE: 'stable',
  UNIQUE: 'unique',
  TECHNOLOGY_INDEPENDENT: 'independent-of-implementation-technology',
  REPOSITORY_INDEPENDENT: 'independent-of-one-repository',
  ENVIRONMENT_INDEPENDENT: 'independent-of-one-environment',
  OWNER_NAME_INDEPENDENT: 'independent-of-current-owner-name',
  RETAINED_THROUGH_RETIREMENT: 'retained-through-replacement-and-retirement',
  CROSS_CAPABILITY_USABLE: 'usable-across-catalog-observability-delivery-governance-and-support'
});

export const SERVICE_METADATA_FIELDS = Object.freeze({
  SERVICE_IDENTIFIER: 'service-identifier',
  NAME: 'name',
  BUSINESS_OR_PLATFORM_PURPOSE: 'business-or-platform-purpose',
  DOMAIN: 'domain',
  TYPE: 'type',
  LIFECYCLE_STATE: 'lifecycle-state',
  CRITICALITY: 'criticality',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  TECHNICAL_OWNER: 'technical-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  SUPPORT_TEAM: 'support-team',
  PROJECTS: 'projects',
  REPOSITORIES: 'repositories',
  COMPONENTS: 'components',
  ARCHITECTURE_AND_ADRS: 'architecture-and-adrs',
  INTERFACES: 'interfaces',
  DEPENDENCIES: 'dependencies',
  CONSUMERS: 'consumers',
  DATA_OWNERSHIP: 'data-ownership',
  AI_PARTICIPATION: 'ai-participation',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  SECURITY_CLASSIFICATION: 'security-classification',
  PRIVACY_CLASSIFICATION: 'privacy-classification',
  RISK_AND_CONTROLS: 'risk-and-controls',
  SERVICE_COMMITMENTS: 'service-commitments',
  OBSERVABILITY: 'observability',
  RUNBOOKS: 'runbooks',
  DEPRECATION_AND_RETIREMENT: 'deprecation-and-retirement',
  EVIDENCE: 'evidence'
});

export const SERVICE_OWNERSHIP_FIELDS = Object.freeze({
  ACCOUNTABLE_SERVICE_OWNER: 'accountable-service-owner',
  BUSINESS_OR_PLATFORM_OWNER: 'business-or-platform-owner',
  TECHNICAL_OWNER: 'technical-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  DATA_OWNER: 'data-owner',
  SECURITY_PRIVACY_RESPONSIBILITIES: 'security-and-privacy-responsibilities',
  RELIABILITY_RESPONSIBILITY: 'reliability-responsibility',
  COST_OWNER: 'cost-owner',
  SUPPORT_TEAM: 'support-team',
  PRIMARY_SECONDARY_ESCALATION: 'primary-and-secondary-escalation',
  TENANT_PROPERTY_RESPONSIBILITY: 'tenant-or-property-responsibility-where-applicable'
});

export const SERVICE_BOUNDARY_FIELDS = Object.freeze({
  OWNED_BUSINESS_CAPABILITY: 'owned-business-capability',
  OWNED_BUSINESS_RULES: 'owned-business-rules',
  OWNED_DATA_SCHEMA: 'owned-data-and-schema',
  COMMANDS: 'commands',
  QUERIES: 'queries',
  EVENTS: 'events',
  APIS: 'apis',
  CONFIGURATION: 'configuration',
  SECURITY_POLICY: 'security-policy',
  SERVICE_COMMITMENTS: 'service-commitments',
  OBSERVABILITY: 'observability',
  FAILURE_BEHAVIOR: 'failure-behavior',
  DEPENDENCIES: 'dependencies',
  EXCLUDED_RESPONSIBILITIES: 'excluded-responsibilities'
});

export const SERVICE_READINESS_FIELDS = Object.freeze({
  PURPOSE_AND_OWNERSHIP: 'purpose-and-ownership',
  ARCHITECTURE: 'architecture',
  SECURITY_AND_PRIVACY: 'security-and-privacy',
  RISK_AND_CONTROLS: 'risk-and-controls',
  AI_GOVERNANCE: 'ai-governance',
  BUILD_ARTIFACT_TRUST: 'build-and-artifact-trust',
  TESTS_AND_EVALUATIONS: 'tests-and-evaluations',
  CAPACITY_AND_PERFORMANCE: 'capacity-and-performance',
  OBSERVABILITY: 'observability',
  INCIDENT_RESPONSE: 'incident-response',
  SUPPORT: 'support',
  RECOVERY: 'recovery',
  CONTINUITY: 'continuity',
  DATA_PROTECTION: 'data-protection',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_PROCEDURES: 'property-procedures',
  DOCUMENTATION: 'documentation',
  RUNBOOKS: 'runbooks',
  COST: 'cost',
  EVIDENCE: 'evidence'
});

export const LIFECYCLE_CONTROLS = Object.freeze({
  REQUIRED_IDENTITY: 'required-identity',
  OWNERSHIP_VALIDATION: 'ownership-validation',
  ARCHITECTURE_BINDING: 'architecture-binding',
  DOMAIN_REVIEW: 'domain-review',
  DUPLICATE_DETECTION: 'duplicate-detection',
  PAVED_PATH_ELIGIBILITY: 'paved-path-eligibility',
  DATA_CLASSIFICATION: 'data-classification',
  AI_CLASSIFICATION: 'ai-classification',
  TENANT_PROPERTY_VALIDATION: 'tenant-and-property-validation',
  SECURITY_PRIVACY_REVIEW: 'security-and-privacy-review',
  RISK_ASSESSMENT: 'risk-assessment',
  REQUIRED_TESTS: 'required-tests',
  OPERATIONAL_READINESS: 'operational-readiness',
  CHANGE_AUTHORIZATION: 'change-authorization',
  EVIDENCE_COMPLETENESS: 'evidence-completeness',
  DEPRECATION_NOTICE: 'deprecation-notice',
  RETIREMENT_VERIFICATION: 'retirement-verification'
});

export const LIFECYCLE_GATES = Object.freeze({
  PROPOSAL_ACCEPTANCE: 'proposal-acceptance',
  PROJECT_AUTHORIZATION: 'project-authorization',
  SERVICE_DESIGN_ACCEPTANCE: 'service-design-acceptance',
  DEVELOPMENT_READINESS: 'development-readiness',
  VALIDATION_COMPLETION: 'validation-completion',
  OPERATIONAL_READINESS: 'operational-readiness',
  PRODUCTION_AUTHORIZATION: 'production-authorization',
  BROAD_TENANT_ROLLOUT: 'broad-tenant-rollout',
  DEPRECATION_AUTHORIZATION: 'deprecation-authorization',
  RETIREMENT_AUTHORIZATION: 'retirement-authorization',
  PROJECT_CLOSURE: 'project-closure'
});

export const LIFECYCLE_EVENTS = Object.freeze({
  PROJECT_PROPOSED: 'ProjectProposed',
  PROJECT_AUTHORIZED: 'ProjectAuthorized',
  PROJECT_ACTIVATED: 'ProjectActivated',
  PROJECT_PAUSED: 'ProjectPaused',
  PROJECT_BLOCKED: 'ProjectBlocked',
  PROJECT_CLOSED: 'ProjectClosed',
  PROJECT_ARCHIVED: 'ProjectArchived',
  SERVICE_PROPOSED: 'ServiceProposed',
  SERVICE_REGISTERED: 'ServiceRegistered',
  SERVICE_READY: 'ServiceReady',
  SERVICE_ACTIVATED: 'ServiceActivated',
  SERVICE_OWNERSHIP_TRANSFERRED: 'ServiceOwnershipTransferred',
  SERVICE_DEPRECATED: 'ServiceDeprecated',
  SERVICE_RETIREMENT_STARTED: 'ServiceRetirementStarted',
  SERVICE_RETIRED: 'ServiceRetired',
  TENANT_ONBOARDED: 'TenantOnboarded',
  TENANT_OFFBOARDED: 'TenantOffboarded',
  PROPERTY_ONBOARDED: 'PropertyOnboarded',
  PROPERTY_OFFBOARDED: 'PropertyOffboarded'
});

export const LIFECYCLE_COMMANDS = Object.freeze({
  PROPOSE_PROJECT: 'ProposeProject',
  ASSESS_PROJECT: 'AssessProject',
  AUTHORIZE_PROJECT: 'AuthorizeProject',
  ACTIVATE_PROJECT: 'ActivateProject',
  PAUSE_PROJECT: 'PauseProject',
  CLOSE_PROJECT: 'CloseProject',
  PROPOSE_SERVICE: 'ProposeService',
  REGISTER_SERVICE: 'RegisterService',
  UPDATE_SERVICE_METADATA: 'UpdateServiceMetadata',
  TRANSFER_SERVICE_OWNERSHIP: 'TransferServiceOwnership',
  MARK_SERVICE_READY: 'MarkServiceReady',
  ACTIVATE_SERVICE: 'ActivateService',
  DEPRECATE_SERVICE: 'DeprecateService',
  START_SERVICE_RETIREMENT: 'StartServiceRetirement',
  RETIRE_SERVICE: 'RetireService'
});

export const LIFECYCLE_AUTHORITY_SOURCES = Object.freeze({
  ARCHITECTURE_CONTENT: 'architecture-content',
  ADR_CONTENT: 'adr-content',
  SOURCE_REVISIONS: 'source-revisions',
  BUILD_RESULTS: 'build-results',
  ARTIFACTS: 'artifacts',
  ENVIRONMENTS: 'environments',
  DELIVERIES: 'deliveries',
  OPERATIONAL_HEALTH: 'operational-health',
  POLICY_DECISIONS: 'policy-decisions',
  APPROVALS: 'approvals',
  INCIDENTS: 'incidents'
});

export const METADATA_VALIDATION_AREAS = Object.freeze({
  REQUIRED_FIELDS: 'required-fields',
  IDENTIFIER_VALIDITY: 'identifier-validity',
  OWNERSHIP_VALIDITY: 'ownership-validity',
  ARCHITECTURE_REFERENCES: 'architecture-references',
  DOMAIN_CONSISTENCY: 'domain-consistency',
  REPOSITORY_RELATIONSHIPS: 'repository-relationships',
  SERVICE_BOUNDARIES: 'service-boundaries',
  INTERFACE_RELATIONSHIPS: 'interface-relationships',
  DEPENDENCY_RELATIONSHIPS: 'dependency-relationships',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  DATA_CLASSIFICATION: 'data-classification',
  LIFECYCLE_STATE_CONSISTENCY: 'lifecycle-state-consistency',
  FRESHNESS: 'freshness',
  CONFLICTS: 'conflicts'
});

export const LIFECYCLE_FAILURE_RECOVERY_FIELDS = Object.freeze({
  VALIDATION_FAILURE: 'validation-failure',
  AUTHORIZATION_FAILURE: 'authorization-failure',
  STATE_CONFLICT: 'state-conflict',
  PARTIAL_RESOURCE_CREATION: 'partial-resource-creation',
  DUPLICATE_REQUEST: 'duplicate-request',
  TIMEOUT: 'timeout',
  DEPENDENCY_FAILURE: 'dependency-failure',
  RETRY_SAFETY: 'retry-safety',
  COMPENSATION: 'compensation',
  MANUAL_RECOVERY: 'manual-recovery',
  ESCALATION: 'escalation',
  EVIDENCE: 'evidence'
});

export const LIFECYCLE_MEASURES = Object.freeze({
  PROPOSAL_TO_AUTHORIZATION_TIME: 'time-from-proposal-to-authorization',
  OWNERSHIP_ESTABLISHMENT_TIME: 'time-to-establish-ownership',
  PROJECT_CREATION_SUCCESS: 'project-creation-success',
  FIRST_SUCCESSFUL_BUILD_TIME: 'time-to-first-successful-build',
  SERVICE_PROPOSAL_TO_READINESS_TIME: 'time-from-service-proposal-to-readiness',
  READINESS_FAILURE_REASONS: 'readiness-failure-reasons',
  INCOMPLETE_METADATA_ACTIVE_SERVICES: 'active-services-without-complete-metadata',
  ORPHANED_RESOURCES: 'orphaned-resources',
  DUPLICATE_CAPABILITY_PROPOSALS: 'duplicate-capability-proposals',
  OWNERSHIP_TRANSFER_DURATION: 'ownership-transfer-duration',
  DEPENDENCY_FRESHNESS: 'dependency-freshness',
  CONSUMER_COMPLETENESS: 'consumer-completeness',
  SERVICE_CHANGE_SUCCESS: 'service-change-success',
  DEPRECATION_AGE: 'deprecation-age',
  CONSUMER_MIGRATION_PROGRESS: 'consumer-migration-progress',
  RETIREMENT_DURATION: 'retirement-duration',
  ENVIRONMENT_CLEANUP_COMPLETION: 'environment-cleanup-completion',
  TENANT_ONBOARDING_OFFBOARDING_SUCCESS: 'tenant-onboarding-and-offboarding-success',
  PROJECT_CLOSURE_COMPLETENESS: 'project-closure-completeness',
  METADATA_FRESHNESS: 'metadata-freshness',
  EVIDENCE_COMPLETENESS: 'evidence-completeness'
});

export const LIFECYCLE_GOVERNANCE_AREAS = Object.freeze({
  TAXONOMY: 'project-and-service-taxonomy',
  NAMING_IDENTITY_STANDARDS: 'naming-and-identity-standards',
  REQUIRED_METADATA: 'required-metadata',
  STATE_MODELS: 'state-models',
  TRANSITION_AUTHORITY: 'transition-authority',
  OWNERSHIP_STANDARDS: 'ownership-standards',
  ARCHITECTURE_BINDING: 'architecture-binding',
  SERVICE_BOUNDARY_REVIEW: 'service-boundary-review',
  CRITICALITY_CLASSIFICATION: 'criticality-classification',
  READINESS_CRITERIA: 'readiness-criteria',
  VERSIONING_COMPATIBILITY: 'versioning-and-compatibility',
  TENANT_PROPERTY_REQUIREMENTS: 'tenant-and-property-requirements',
  EVIDENCE: 'evidence',
  PORTFOLIO_REVIEW: 'portfolio-review',
  DEPRECATION: 'deprecation',
  RETIREMENT: 'retirement'
});

export const LIFECYCLE_ANTI_PATTERNS = Object.freeze({
  REPOSITORIES_AS_PROJECTS: 'treating-repositories-as-projects',
  DEPLOYMENT_UNITS_AS_SERVICES: 'treating-deployment-units-as-services-automatically',
  TEAMS_AS_SERVICE_IDENTITIES: 'treating-teams-as-permanent-service-identities',
  ABANDONING_SERVICES_AFTER_PROJECT_CLOSE: 'closing-a-project-and-abandoning-its-services',
  SERVICE_WITHOUT_OWNERSHIP: 'creating-services-without-domain-and-data-ownership',
  DUPLICATE_BUSINESS_ENTITY_OWNERSHIP: 'allowing-two-services-to-own-the-same-business-entity',
  SERVICE_PER_SMALL_COMPONENT: 'creating-a-new-service-for-every-small-component',
  UNRELATED_RESPONSIBILITIES: 'combining-unrelated-responsibilities-in-one-service',
  PRODUCTION_AS_READINESS: 'using-production-deployment-as-the-readiness-decision',
  SILENT_SOURCE_STATE_CHANGE: 'allowing-source-merges-to-change-lifecycle-state-silently',
  STALE_CATALOG_AUTHORITY: 'using-stale-catalog-data-as-authority',
  INDEFINITE_EXPERIMENTS: 'keeping-experimental-services-indefinitely',
  AI_ACCOUNTABLE_OWNERSHIP: 'granting-ai-agents-accountable-ownership',
  MISSING_CONTEXT_AS_CROSS_TENANT: 'inferring-cross-tenant-scope-from-missing-context',
  TENANT_CODE_FORKS_WITHOUT_ARCHITECTURE: 'creating-tenant-specific-code-forks-without-architecture',
  DEPRECATION_WITHOUT_MIGRATION: 'deprecating-without-a-consumer-migration-plan',
  RETIREMENT_WITHOUT_DISPOSITION: 'retiring-without-data-and-integration-disposition',
  REUSING_RETIRED_IDENTIFIERS: 'reusing-retired-identifiers',
  COUNT_AS_SUCCESS: 'measuring-success-by-project-or-service-count'
});

export const PROJECT_SERVICE_LIFECYCLE_ARCHITECTURAL_RULES = Object.freeze({
  DISTINCT_IDENTITIES: 'maintain-distinct-project-and-service-identities',
  IDENTITY_PURPOSE_OWNERSHIP_ARCHITECTURE_FIRST: 'establish-identity-purpose-ownership-and-architecture-before-material-automation',
  AUTHORITATIVE_STATE_TRANSITIONS: 'preserve-authoritative-lifecycle-state-and-permitted-transitions',
  OPERATIONAL_METADATA_RECORDS: 'treat-project-and-service-metadata-as-operational-records',
  MANY_TO_MANY_OVER_TIME: 'allow-projects-and-services-to-have-many-to-many-relationships-over-time',
  DISTINCT_DELIVERY_CONCEPTS: 'keep-repository-project-component-service-release-and-deployment-concepts-distinct',
  PRESERVE_SERVICE_IDENTITY: 'preserve-service-identity-across-projects-implementations-releases-and-owners',
  SINGULAR_BUSINESS_DATA_OWNERSHIP: 'require-explicit-service-boundaries-and-singular-business-and-data-ownership',
  ARCHITECTURE_ADR_BINDING: 'bind-projects-and-services-to-architecture-and-adrs',
  HUMAN_AI_ATTRIBUTION: 'preserve-human-and-ai-agent-attribution',
  AI_NOT_ACCOUNTABLE_OWNER: 'prevent-ai-agents-from-becoming-accountable-owners',
  TENANT_PROPERTY_SCOPE: 'preserve-tenant-and-property-scope-throughout-lifecycle-actions',
  READINESS_BEFORE_PRODUCTION: 'require-operational-readiness-before-production-authorization',
  VERSION_COMPATIBILITY_GOVERNANCE: 'govern-interface-versioning-and-compatibility',
  DUPLICATE_ORPHAN_DETECTION: 'detect-duplicate-and-orphaned-capabilities',
  OWNERSHIP_TRANSFER_GOVERNANCE: 'govern-ownership-transfer',
  DEPRECATION_RETIREMENT_FIRST_CLASS: 'treat-deprecation-consumer-migration-and-retirement-as-first-class-states',
  EVIDENCE_HISTORY_RETENTION: 'preserve-evidence-and-history-after-closure-or-retirement',
  FAILURE_CONCURRENCY_RECOVERY: 'design-failure-concurrency-retry-compensation-and-recovery',
  VENDOR_NEUTRAL_TECHNOLOGY_INDEPENDENT: 'preserve-vendor-neutrality-and-technology-independence'
});

export const FUTURE_LIFECYCLE_CAPABILITIES = Object.freeze({
  INTENT_DRIVEN_PROPOSALS: 'intent-driven-project-proposals',
  SEMANTIC_DUPLICATE_DETECTION: 'semantic-duplicate-capability-detection',
  ARCHITECTURE_AWARE_BOUNDARY_RECOMMENDATIONS: 'architecture-aware-service-boundary-recommendations',
  AUTOMATED_RELATIONSHIP_DISCOVERY: 'automated-relationship-discovery-with-accountable-confirmation',
  PREDICTIVE_ORPHAN_RISK: 'predictive-orphan-and-ownership-risk-detection',
  READINESS_SCORING: 'continuous-operational-readiness-scoring',
  DYNAMIC_RISK_GATES: 'dynamic-risk-based-lifecycle-gates',
  AI_METADATA_MAINTENANCE: 'governed-ai-assisted-metadata-maintenance',
  MULTI_AGENT_PROJECT_EXECUTION: 'multi-agent-project-execution',
  CROSS_SCOPE_IMPACT_SIMULATION: 'cross-tenant-and-cross-property-impact-simulation',
  CONSUMER_MIGRATION_PLANNING: 'automated-consumer-migration-planning',
  DIGITAL_TWINS: 'service-and-project-digital-twins',
  CONTINUOUS_DEPRECATION: 'continuous-deprecation-management',
  AUTONOMOUS_RETIREMENT_PREPARATION: 'governed-autonomous-retirement-preparation'
});
