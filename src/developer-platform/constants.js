export const DEVELOPER_PLATFORM_ERROR_CODES = Object.freeze({
  DEVELOPER_PLATFORM_OVERVIEW_INVALID: 'DEVELOPER_PLATFORM_OVERVIEW_INVALID'
});

export const DEVELOPER_PLATFORM_OVERVIEW_OBJECTIVES = Object.freeze({
  RAPID_ONBOARDING: 'rapid-onboarding',
  ARCHITECTURE_ALIGNED_IMPLEMENTATION: 'architecture-aligned-implementation',
  GOVERNED_SELF_SERVICE: 'governed-self-service',
  REDUCED_COGNITIVE_LOAD: 'reduced-cognitive-load',
  EVOLVABLE_PAVED_PATHS: 'standardized-but-evolvable-paved-paths',
  SECURE_COMPLIANT_DEFAULTS: 'secure-and-compliant-defaults',
  REPEATABLE_BUILDS: 'repeatable-builds',
  COMPREHENSIVE_TESTING: 'comprehensive-testing',
  TRUSTED_ARTIFACTS: 'trusted-artifacts',
  PREDICTABLE_ENVIRONMENTS: 'predictable-environments',
  SAFE_PROGRESSIVE_DELIVERY: 'safe-progressive-delivery',
  OPERATIONAL_READINESS: 'operational-readiness',
  SERVICE_DISCOVERY: 'service-discovery',
  DOCUMENTATION_BY_DESIGN: 'documentation-by-design',
  AI_IMPLEMENTATION_AGENT_SUPPORT: 'support-for-ai-implementation-agents',
  TENANT_AWARE_DEVELOPMENT: 'tenant-aware-development',
  FAST_FEEDBACK: 'fast-feedback',
  MEASURABLE_DEVELOPER_EXPERIENCE: 'measurable-developer-experience',
  SUSTAINABLE_PLATFORM_EVOLUTION: 'sustainable-platform-evolution'
});

export const DEVELOPER_PLATFORM_USERS = Object.freeze({
  APPLICATION_DEVELOPER: 'application-developer',
  SERVICE_DEVELOPER: 'service-developer',
  AI_AND_AGENT_DEVELOPER: 'ai-and-agent-developer',
  WORKFLOW_DEVELOPER: 'workflow-developer',
  INTEGRATION_DEVELOPER: 'integration-developer',
  DATA_ENGINEER: 'data-engineer',
  PLATFORM_ENGINEER: 'platform-engineer',
  SECURITY_ENGINEER: 'security-engineer',
  RELIABILITY_OPERATIONS_ENGINEER: 'reliability-and-operations-engineer',
  ARCHITECT: 'architect',
  QUALITY_ENGINEER: 'quality-engineer',
  TECHNICAL_WRITER: 'technical-writer',
  TENANT_PROPERTY_INTEGRATOR: 'tenant-and-property-integrator',
  AI_IMPLEMENTATION_AGENT: 'ai-implementation-agent'
});

export const DEVELOPER_PLATFORM_LANDSCAPE_STAGES = Object.freeze({
  ENTERPRISE_ARCHITECTURE_POLICY_RISK_CONTROLS: 'Enterprise Architecture, Policy, Risk, and Controls',
  DEVELOPER_EXPERIENCE_PORTAL_CATALOG_PAVED_PATHS: 'Developer Experience, Portal, Catalog, and Paved Paths',
  PROJECT_SOURCE_BUILD_TEST_SECURITY_QUALITY: 'Project, Source, Build, Test, Security, and Quality Services',
  ARTIFACTS_ENVIRONMENTS_CONFIGURATION_DELIVERY: 'Artifacts, Environments, Configuration, and Delivery Services',
  APPLICATIONS_SERVICES_AGENTS_WORKFLOWS_DATA_INTEGRATIONS: 'Applications, Services, Agents, Workflows, Data, and Integrations',
  OPERATIONS_OBSERVABILITY_EVIDENCE_FEEDBACK: 'Operations, Observability, Evidence, and Service Feedback',
  PLATFORM_PRODUCT_IMPROVEMENT: 'Developer Platform Product Improvement'
});

export const DEVELOPER_PLATFORM_CAPABILITY_DOMAINS = Object.freeze({
  DEVELOPER_EXPERIENCE: 'developer-experience',
  PROJECT_AND_SERVICE_LIFECYCLE: 'project-and-service-lifecycle',
  SOURCE_AND_COLLABORATION: 'source-and-collaboration',
  BUILD_AND_ARTIFACT: 'build-and-artifact',
  TEST_AND_QUALITY: 'test-and-quality',
  SECURITY_AND_GOVERNANCE: 'security-and-governance',
  ENVIRONMENT_AND_CONFIGURATION: 'environment-and-configuration',
  DELIVERY_AND_RELEASE: 'delivery-and-release',
  PORTAL_AND_CATALOG: 'portal-and-catalog',
  OPERATIONS_AND_FEEDBACK: 'operations-and-feedback'
});

export const DEVELOPER_CONTROL_PLANE_SERVICES = Object.freeze({
  IDENTITY_AND_AUTHORIZATION: 'identity-and-authorization',
  PROJECT_REGISTRATION: 'project-registration',
  TEMPLATE_SELECTION: 'template-selection',
  METADATA: 'metadata',
  POLICY_EVALUATION: 'policy-evaluation',
  WORKFLOW_ORCHESTRATION: 'workflow-orchestration',
  BUILD_REQUESTS: 'build-requests',
  TEST_REQUESTS: 'test-requests',
  ARTIFACT_PROMOTION: 'artifact-promotion',
  ENVIRONMENT_REQUESTS: 'environment-requests',
  CONFIGURATION: 'configuration',
  DELIVERY_REQUESTS: 'delivery-requests',
  READINESS_CHECKS: 'readiness-checks',
  EVIDENCE: 'evidence',
  CATALOG_REGISTRATION: 'catalog-registration',
  STATUS: 'status',
  SUPPORT: 'support'
});

export const DEVELOPER_CONTROL_LOOP_STAGES = Object.freeze({
  DISCOVER: 'Discover',
  CREATE_OR_CHANGE: 'Create or Change',
  BUILD: 'Build',
  TEST_AND_EVALUATE: 'Test and Evaluate',
  REVIEW_AND_AUTHORIZE: 'Review and Authorize',
  DELIVER: 'Deliver',
  VERIFY_AND_OPERATE: 'Verify and Operate',
  LEARN_AND_IMPROVE: 'Learn and Improve'
});

export const DEVELOPER_PLATFORM_PRODUCT_FIELDS = Object.freeze({
  PRODUCT_OWNER: 'product-owner',
  ARCHITECTURE_OWNER: 'architecture-owner',
  SERVICE_OWNERS: 'service-owners',
  USERS_AND_PERSONAS: 'users-and-personas',
  STRATEGY: 'strategy',
  ROADMAP: 'roadmap',
  SERVICE_COMMITMENTS: 'service-commitments',
  SUPPORT: 'support',
  CAPACITY: 'capacity',
  SECURITY: 'security',
  COMPLIANCE: 'compliance',
  OBSERVABILITY: 'observability',
  ADOPTION_GOALS: 'adoption-goals',
  USER_RESEARCH: 'user-research',
  FEEDBACK: 'feedback',
  DEPRECATION: 'deprecation',
  CONTINUITY: 'continuity',
  BUDGET_AND_COST_OWNERSHIP: 'budget-and-cost-ownership'
});

export const PAVED_PATH_TYPES = Object.freeze({
  BUSINESS_SERVICE: 'business-service',
  PLATFORM_SERVICE: 'platform-service',
  API_SERVICE: 'api-service',
  EVENT_CONSUMER: 'event-consumer',
  INTEGRATION_CONNECTOR: 'integration-connector',
  DATA_SERVICE: 'data-service',
  WORKFLOW: 'workflow',
  AI_AGENT: 'ai-agent',
  TOOL: 'tool',
  USER_INTERFACE: 'user-interface',
  SCHEDULED_TASK: 'scheduled-task',
  PROPERTY_ADAPTER: 'property-adapter',
  GOVERNANCE_AUTOMATION: 'governance-automation'
});

export const PAVED_PATH_CONTRACT_FIELDS = Object.freeze({
  INTENDED_USE: 'intended-use',
  ARCHITECTURE_ALIGNMENT: 'architecture-alignment',
  SUPPORTED_TECHNOLOGIES_OR_ABSTRACTIONS: 'supported-technologies-or-abstractions',
  REQUIRED_OWNERSHIP: 'required-ownership',
  REQUIRED_METADATA: 'required-metadata',
  SECURITY_DEFAULTS: 'security-defaults',
  PRIVACY_DEFAULTS: 'privacy-defaults',
  DATA_CONTROLS: 'data-controls',
  AI_CONTROLS: 'ai-controls-where-applicable',
  TEST_EXPECTATIONS: 'test-expectations',
  BUILD_BEHAVIOR: 'build-behavior',
  ARTIFACT_MODEL: 'artifact-model',
  ENVIRONMENT_BEHAVIOR: 'environment-behavior',
  DELIVERY_MODEL: 'delivery-model',
  OBSERVABILITY: 'observability',
  OPERATIONAL_READINESS: 'operational-readiness',
  SERVICE_COMMITMENTS: 'service-commitments',
  DOCUMENTATION: 'documentation',
  UPGRADE_PATH: 'upgrade-path',
  SUPPORT: 'support',
  DEPRECATION: 'deprecation'
});

export const ESCAPE_PATH_REASONS = Object.freeze({
  UNSUPPORTED_USE_CASE: 'use-case-not-supported',
  ARCHITECTURE_REQUIRES_DIFFERENT_APPROACH: 'architecture-requires-different-approach',
  STRONGER_CONTROLS_REQUIRED: 'risk-or-regulation-requires-stronger-controls',
  TECHNOLOGY_CONSTRAINT: 'technology-constraint-exists',
  TRANSITION_UNDERWAY: 'transition-is-underway',
  RESEARCH_REQUIRED: 'research-is-required'
});

export const TEMPLATE_CONTENTS = Object.freeze({
  SOURCE_STRUCTURE: 'source-structure',
  DOMAIN_BOUNDARIES: 'domain-boundaries',
  INTERFACES: 'interfaces',
  DEPENDENCY_RULES: 'dependency-rules',
  TESTS: 'tests',
  CONFIGURATION: 'configuration',
  OBSERVABILITY: 'observability',
  HEALTH_ENDPOINTS: 'health-endpoints',
  SECURITY_CONTROLS: 'security-controls',
  PRIVACY_CONTROLS: 'privacy-controls',
  AI_EVALUATION: 'ai-evaluation',
  BUILD_DEFINITIONS: 'build-definitions',
  DELIVERY_METADATA: 'delivery-metadata',
  DOCUMENTATION: 'documentation',
  RUNBOOKS: 'runbooks',
  OWNERSHIP_METADATA: 'ownership-metadata'
});

export const TEMPLATE_LIFECYCLE_FIELDS = Object.freeze({
  OWNER: 'owner',
  VERSION: 'version',
  SUPPORTED_USE: 'supported-use',
  DEPENDENCIES: 'dependencies',
  SECURITY_POSTURE: 'security-posture',
  CONTROL_MAPPINGS: 'control-mappings',
  TESTS: 'tests',
  DOCUMENTATION: 'documentation',
  UPGRADE_PATH: 'upgrade-path',
  DEPRECATION: 'deprecation',
  COMPATIBILITY: 'compatibility',
  EVIDENCE: 'evidence'
});

export const SELF_SERVICE_ACTIONS = Object.freeze({
  CREATE_PROJECTS: 'create-projects',
  REGISTER_SERVICES: 'register-services',
  REQUEST_ENVIRONMENTS: 'request-environments',
  REQUEST_BUILDS: 'request-builds',
  RUN_TESTS: 'run-tests',
  PRODUCE_ARTIFACTS: 'produce-artifacts',
  CONFIGURE_APPROVED_VALUES: 'configure-approved-values',
  REQUEST_SECRETS_REFERENCES: 'request-secrets-references',
  DELIVER_CHANGES: 'deliver-changes',
  VIEW_SERVICE_STATUS: 'view-service-status',
  ACCESS_DOCUMENTATION: 'access-documentation',
  REQUEST_SUPPORT: 'request-support',
  RETIRE_CAPABILITIES: 'retire-capabilities'
});

export const SELF_SERVICE_REQUEST_FIELDS = Object.freeze({
  REQUESTOR: 'requestor',
  PURPOSE: 'purpose',
  TARGET: 'target',
  SCOPE: 'scope',
  TENANT_AND_PROPERTY: 'tenant-and-property',
  PAVED_PATH: 'paved-path',
  POLICY: 'policy',
  PERMISSIONS: 'permissions',
  INPUTS: 'inputs',
  COST: 'cost',
  RISK: 'risk',
  APPROVAL_IF_REQUIRED: 'approval-if-required',
  EXECUTION: 'execution',
  OUTCOME: 'outcome',
  EVIDENCE: 'evidence',
  EXPIRATION_OR_CLEANUP: 'expiration-or-cleanup'
});

export const DEVELOPER_PLATFORM_SERVICES = Object.freeze({
  DEVELOPER_IDENTITY_SERVICE: 'developer-identity-service',
  PROJECT_CREATION_SERVICE: 'project-creation-service',
  TEMPLATE_SERVICE: 'template-service',
  METADATA_SERVICE: 'metadata-service',
  BUILD_SERVICE: 'build-service',
  TEST_SERVICE: 'test-service',
  QUALITY_SERVICE: 'quality-service',
  ARTIFACT_SERVICE: 'artifact-service',
  DEPENDENCY_SERVICE: 'dependency-service',
  ENVIRONMENT_SERVICE: 'environment-service',
  CONFIGURATION_SERVICE: 'configuration-service',
  DELIVERY_SERVICE: 'delivery-service',
  READINESS_SERVICE: 'readiness-service',
  DOCUMENTATION_SERVICE: 'documentation-service',
  CATALOG_SERVICE: 'catalog-service',
  EVIDENCE_SERVICE: 'evidence-service',
  SUPPORT_SERVICE: 'support-service',
  PLATFORM_STATUS_SERVICE: 'platform-status-service'
});

export const PROJECT_METADATA_FIELDS = Object.freeze({
  PROJECT_IDENTIFIER: 'project-identifier',
  PURPOSE: 'purpose',
  ARCHITECTURE_SCOPE: 'architecture-scope',
  OWNER: 'owner',
  DOMAIN: 'domain',
  REPOSITORY: 'repository',
  PAVED_PATH: 'paved-path',
  SERVICE_RELATIONSHIPS: 'service-relationships',
  DATA: 'data',
  AI_PARTICIPATION: 'ai-participation',
  DEPENDENCIES: 'dependencies',
  SECURITY_CLASSIFICATION: 'security-classification',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  BUILD: 'build',
  TESTS: 'tests',
  ARTIFACTS: 'artifacts',
  ENVIRONMENTS: 'environments',
  DELIVERY: 'delivery',
  DOCUMENTATION: 'documentation',
  LIFECYCLE_STATE: 'lifecycle-state',
  RISK_AND_CONTROLS: 'risk-and-controls'
});

export const SERVICE_METADATA_FIELDS = Object.freeze({
  SERVICE_IDENTIFIER: 'service-identifier',
  BUSINESS_PURPOSE: 'business-purpose',
  OWNER: 'owner',
  DOMAIN: 'domain',
  TYPE: 'type',
  LIFECYCLE: 'lifecycle',
  CONSUMERS: 'consumers',
  INTERFACES: 'interfaces',
  DEPENDENCIES: 'dependencies',
  DATA_OWNERSHIP: 'data-ownership',
  AI_PARTICIPATION: 'ai-participation',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  SECURITY: 'security',
  SERVICE_COMMITMENTS: 'service-commitments',
  ENVIRONMENTS: 'environments',
  ARTIFACTS: 'artifacts',
  RELEASES: 'releases',
  OBSERVABILITY: 'observability',
  RUNBOOKS: 'runbooks',
  SUPPORT: 'support',
  RISK: 'risk',
  CONTROLS: 'controls',
  DOCUMENTATION: 'documentation'
});

export const METADATA_AUTHORITY_FIELDS = Object.freeze({
  OWNER: 'owner',
  SOURCE: 'source',
  VERSION: 'version',
  VALIDATION: 'validation',
  FRESHNESS: 'freshness',
  ACCESS_CONTROL: 'access-control',
  HISTORY: 'history',
  EVIDENCE: 'evidence',
  UPDATE_WORKFLOW: 'update-workflow',
  RETIREMENT: 'retirement'
});

export const ARCHITECTURE_INTEGRATION_CAPABILITIES = Object.freeze({
  ARCHITECTURE_DISCOVERY: 'architecture-discovery',
  READING_ORDER: 'reading-order',
  MODULE_REFERENCES: 'module-references',
  ADR_CREATION: 'adr-creation',
  ARCHITECTURE_DEPENDENCY_VALIDATION: 'architecture-dependency-validation',
  LAYER_AND_DOMAIN_RULES: 'layer-and-domain-rules',
  SERVICE_BOUNDARY_VALIDATION: 'service-boundary-validation',
  ARCHITECTURE_REVIEW: 'architecture-review',
  DEVIATION_WORKFLOW: 'deviation-workflow',
  TRACEABILITY: 'traceability',
  IMPACT_ANALYSIS: 'impact-analysis',
  ARCHITECTURE_EVIDENCE: 'architecture-evidence'
});

export const HUMAN_DEVELOPER_JOURNEY_STEPS = Object.freeze({
  DISCOVER_APPLICABLE_ARCHITECTURE: 'discover-applicable-architecture',
  SELECT_APPROVED_PATH: 'select-an-approved-path',
  CREATE_OR_MODIFY_PROJECT: 'create-or-modify-a-project',
  DEVELOP_IN_SAFE_ENVIRONMENT: 'develop-in-a-safe-environment',
  RECEIVE_FAST_LOCAL_FEEDBACK: 'receive-fast-local-feedback',
  BUILD_REPRODUCIBLY: 'build-reproducibly',
  RUN_REQUIRED_VALIDATION: 'run-required-validation',
  OBTAIN_REVIEW_AND_AUTHORITY: 'obtain-review-and-authority',
  DELIVER_PROGRESSIVELY: 'deliver-progressively',
  VERIFY_OUTCOMES: 'verify-business-and-service-outcomes',
  OPERATE_AND_SUPPORT: 'operate-and-support-the-capability',
  IMPROVE_OR_RETIRE: 'improve-or-retire-it'
});

export const AI_IMPLEMENTATION_AGENT_JOURNEY_STEPS = Object.freeze({
  RESOLVE_SCOPE: 'resolve-repository-and-task-scope',
  READ_ARCHITECTURE: 'read-applicable-architecture-and-instructions',
  INSPECT_IMPLEMENTATION: 'inspect-implementation-and-tests',
  SELECT_WORK_UNIT: 'select-the-authorized-work-unit',
  MAKE_BOUNDED_CHANGES: 'make-bounded-changes',
  ADD_OR_UPDATE_TESTS: 'add-or-update-tests',
  RUN_VALIDATION: 'run-validation',
  DOCUMENT_ASSUMPTIONS: 'document-assumptions-and-deviations',
  PREPARE_ATTRIBUTABLE_CHANGE: 'prepare-an-attributable-change',
  STOP_AT_BOUNDARIES: 'stop-at-required-human-decision-boundaries',
  REPORT_EVIDENCE: 'report-evidence-and-outcomes'
});

export const AI_AGENT_AUTHORITY_REQUIREMENTS = Object.freeze({
  EXPLICIT_IDENTITY: 'explicit-identity',
  AUTHORIZED_REPOSITORY: 'authorized-repository',
  TASK_SCOPE: 'task-scope',
  TOOL_PERMISSIONS: 'tool-permissions',
  READ_AND_WRITE_BOUNDARIES: 'read-and-write-boundaries',
  SECRET_RESTRICTIONS: 'secret-restrictions',
  NETWORK_RESTRICTIONS: 'network-restrictions',
  ARCHITECTURE_INSTRUCTIONS: 'architecture-instructions',
  CHANGE_ISOLATION: 'change-isolation',
  REVIEW_REQUIREMENTS: 'review-requirements',
  EVIDENCE: 'evidence',
  STOP_CONDITIONS: 'stop-conditions',
  HUMAN_ACCOUNTABILITY: 'human-accountability',
  REVOCATION: 'revocation'
});

export const AI_CHANGE_ATTRIBUTION_FIELDS = Object.freeze({
  AGENT_IDENTITY: 'agent-identity',
  HUMAN_REQUESTOR: 'human-requestor',
  SCOPE: 'scope',
  ARCHITECTURE_CONTEXT: 'architecture-context',
  FILES_CHANGED: 'files-changed',
  TESTS: 'tests',
  TOOL_ACTIONS: 'tool-actions',
  ASSUMPTIONS: 'assumptions',
  REVIEW: 'review',
  COMMIT_OR_CHANGE_IDENTITY: 'commit-or-change-identity',
  OUTCOME: 'outcome'
});

export const BUILD_ARTIFACT_QUALITIES = Object.freeze({
  IDENTIFIED: 'identified',
  VERSIONED: 'versioned',
  TRACEABLE: 'traceable',
  REPRODUCIBLE_WHERE_PRACTICAL: 'reproducible-where-practical',
  INTEGRITY_PROTECTED: 'integrity-protected',
  DEPENDENCY_AWARE: 'dependency-aware',
  SECURITY_ASSESSED: 'security-assessed',
  POLICY_EVALUATED: 'policy-evaluated',
  PROMOTABLE: 'promotable',
  RETAINABLE: 'retainable',
  DEPRECATABLE: 'deprecatable'
});

export const DEVELOPER_QUALITY_VALIDATION_AREAS = Object.freeze({
  BUSINESS_BEHAVIOR: 'business-behavior',
  DOMAIN_INVARIANTS: 'domain-invariants',
  INTERFACES: 'interfaces',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  DATA: 'data',
  AI_QUALITY: 'ai-quality',
  PERFORMANCE: 'performance',
  RESILIENCE: 'resilience',
  ARCHITECTURE: 'architecture',
  ACCESSIBILITY: 'accessibility',
  OPERATIONS: 'operations',
  DOCUMENTATION: 'documentation'
});

export const ENVIRONMENT_QUALITIES = Object.freeze({
  PURPOSE_DEFINED: 'purpose-defined',
  ISOLATED: 'isolated',
  AUTHORIZED: 'authorized',
  CONFIGURED: 'configured',
  OBSERVABLE: 'observable',
  COST_CONTROLLED: 'cost-controlled',
  DATA_GOVERNED: 'data-governed',
  TENANT_AWARE: 'tenant-aware',
  TIME_BOUNDED_WHERE_TEMPORARY: 'time-bounded-where-temporary',
  CLEANABLE: 'cleanable',
  TRACEABLE: 'traceable'
});

export const DELIVERY_COMPONENTS = Object.freeze({
  APPROVED_SOURCE: 'approved-source',
  TRUSTED_ARTIFACT: 'trusted-artifact',
  TARGET_ENVIRONMENT: 'target-environment',
  CONFIGURATION: 'configuration',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  CHANGE_AUTHORITY: 'change-authority',
  PROGRESSIVE_INTRODUCTION: 'progressive-introduction',
  VERIFICATION: 'verification',
  STOP_CONDITIONS: 'stop-conditions',
  ROLLBACK_OR_COMPENSATION: 'rollback-or-compensation',
  EVIDENCE: 'evidence',
  OBSERVATION: 'observation'
});

export const OPERATIONAL_READINESS_ITEMS = Object.freeze({
  OWNERSHIP: 'ownership',
  ARCHITECTURE: 'architecture',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  AI_GOVERNANCE: 'ai-governance',
  TESTS: 'tests',
  CAPACITY: 'capacity',
  OBSERVABILITY: 'observability',
  SUPPORT: 'support',
  INCIDENTS: 'incidents',
  RECOVERY: 'recovery',
  CONTINUITY: 'continuity',
  DOCUMENTATION: 'documentation',
  SERVICE_COMMITMENTS: 'service-commitments',
  EVIDENCE: 'evidence',
  KNOWN_RISKS: 'known-risks'
});

export const DEVELOPER_PORTAL_INTERFACES = Object.freeze({
  ARCHITECTURE: 'architecture',
  PAVED_PATHS: 'paved-paths',
  TEMPLATES: 'templates',
  PROJECTS: 'projects',
  SERVICES: 'services',
  DOCUMENTATION: 'documentation',
  BUILDS: 'builds',
  TESTS: 'tests',
  ARTIFACTS: 'artifacts',
  ENVIRONMENTS: 'environments',
  DELIVERY: 'delivery',
  SERVICE_HEALTH: 'service-health',
  OWNERSHIP: 'ownership',
  SUPPORT: 'support',
  GOVERNANCE_STATUS: 'governance-status',
  PLATFORM_STATUS: 'platform-status',
  FEEDBACK: 'feedback'
});

export const SERVICE_CATALOG_FIELDS = Object.freeze({
  SERVICE_PURPOSE: 'service-purpose',
  OWNERSHIP: 'ownership',
  ARCHITECTURE: 'architecture',
  INTERFACES: 'interfaces',
  DEPENDENCIES: 'dependencies',
  DATA: 'data',
  AI: 'ai',
  TENANTS_AND_PROPERTIES: 'tenants-and-properties',
  SERVICE_COMMITMENTS: 'service-commitments',
  BUILD_AND_ARTIFACTS: 'build-and-artifacts',
  ENVIRONMENTS: 'environments',
  DELIVERY: 'delivery',
  OPERATIONS: 'operations',
  DOCUMENTATION: 'documentation',
  RISK_AND_CONTROLS: 'risk-and-controls',
  LIFECYCLE: 'lifecycle'
});

export const DEVELOPER_DOCUMENTATION_QUALITIES = Object.freeze({
  DISCOVERABLE: 'discoverable',
  OWNED: 'owned',
  VERSIONED: 'versioned',
  RELEVANT: 'relevant',
  TESTABLE_WHERE_PRACTICAL: 'testable-where-practical',
  LINKED_TO_SERVICES_AND_ARCHITECTURE: 'linked-to-services-and-architecture',
  UPDATED_THROUGH_CHANGE: 'updated-through-change',
  DEPRECATABLE: 'deprecatable',
  ACCESSIBLE_TO_AUTHORIZED_USERS_AND_AGENTS: 'accessible-to-authorized-users-and-agents'
});

export const TENANT_AWARE_DEVELOPMENT_REQUIREMENTS = Object.freeze({
  TENANT_ISOLATION: 'tenant-isolation',
  TENANT_CONFIGURATION: 'tenant-configuration',
  TENANT_DATA_BOUNDARIES: 'tenant-data-boundaries',
  TENANT_POLICY: 'tenant-policy',
  TENANT_SPECIFIC_INTEGRATIONS: 'tenant-specific-integrations',
  TENANT_ROLLOUT_SCOPE: 'tenant-rollout-scope',
  TENANT_EVIDENCE: 'tenant-evidence',
  TENANT_ROLLBACK: 'tenant-rollback',
  TENANT_ASSURANCE: 'tenant-assurance'
});

export const PROPERTY_AWARE_DEVELOPMENT_REQUIREMENTS = Object.freeze({
  LOCAL_OPERATIONS: 'local-operations',
  GUEST_JOURNEYS: 'guest-journeys',
  CONNECTIVITY: 'connectivity',
  PHYSICAL_PROCEDURES: 'physical-procedures',
  PROPERTY_CONFIGURATION: 'property-configuration',
  TENANT_DELEGATION: 'tenant-delegation',
  MANUAL_FALLBACK: 'manual-fallback',
  LOCAL_REGULATION: 'local-regulation',
  PROGRESSIVE_ROLLOUT: 'progressive-rollout',
  RECONCILIATION: 'reconciliation'
});

export const DEVELOPER_PLATFORM_SECURITY_AREAS = Object.freeze({
  DEVELOPER_IDENTITY: 'developer-identity',
  AI_AGENT_IDENTITY: 'ai-agent-identity',
  LEAST_PRIVILEGE: 'least-privilege',
  SOURCE_PROTECTION: 'source-protection',
  SECRETS: 'secrets',
  DEPENDENCY_SECURITY: 'dependency-security',
  ARTIFACT_INTEGRITY: 'artifact-integrity',
  SUPPLY_CHAIN: 'supply-chain',
  ENVIRONMENT_ISOLATION: 'environment-isolation',
  DELIVERY_AUTHORIZATION: 'delivery-authorization',
  EVIDENCE: 'evidence',
  INCIDENT_RESPONSE: 'incident-response'
});

export const DEVELOPER_PLATFORM_GOVERNANCE_AREAS = Object.freeze({
  ARCHITECTURE_ALIGNMENT: 'architecture-alignment',
  POLICY_EVALUATION: 'policy-evaluation',
  RISK: 'risk',
  CONTROLS: 'controls',
  EVIDENCE: 'evidence',
  EXCEPTIONS: 'exceptions',
  FINDINGS: 'findings',
  ASSURANCE: 'assurance',
  CHANGE: 'change',
  SERVICE_OWNERSHIP: 'service-ownership',
  TENANT_BOUNDARIES: 'tenant-boundaries',
  AI_GOVERNANCE: 'ai-governance'
});

export const PLATFORM_FEEDBACK_SOURCES = Object.freeze({
  USER_RESEARCH: 'user-research',
  DEVELOPER_SUPPORT: 'developer-support',
  AI_AGENT_OUTCOMES: 'ai-agent-outcomes',
  BUILD_AND_TEST_PERFORMANCE: 'build-and-test-performance',
  DELIVERY_RESULTS: 'delivery-results',
  INCIDENTS: 'incidents',
  SERVICE_REVIEWS: 'service-reviews',
  SECURITY_FINDINGS: 'security-findings',
  PRIVACY_FINDINGS: 'privacy-findings',
  TENANT_FEEDBACK: 'tenant-feedback',
  PROPERTY_FEEDBACK: 'property-feedback',
  PLATFORM_ADOPTION: 'platform-adoption',
  DOCUMENTATION_USE: 'documentation-use',
  ARCHITECTURE_DEVIATIONS: 'architecture-deviations'
});

export const DEVELOPER_PLATFORM_MEASURES = Object.freeze({
  ONBOARDING_TIME: 'onboarding-time',
  TIME_TO_FIRST_BUILD: 'time-to-first-build',
  TIME_TO_CREATE_SERVICE: 'time-to-create-a-service',
  FEEDBACK_LATENCY: 'feedback-latency',
  BUILD_RELIABILITY: 'build-reliability',
  TEST_RELIABILITY: 'test-reliability',
  DELIVERY_SUCCESS: 'delivery-success',
  CHANGE_FAILURE: 'change-failure',
  PAVED_PATH_ADOPTION: 'paved-path-adoption',
  DOCUMENTATION_USEFULNESS: 'documentation-usefulness',
  SERVICE_OWNERSHIP_COMPLETENESS: 'service-ownership-completeness',
  OPERATIONAL_READINESS_ATTAINMENT: 'operational-readiness-attainment',
  SECURITY_FINDINGS: 'security-findings',
  SUPPORT_DEMAND: 'support-demand',
  UPGRADE_EFFORT: 'upgrade-effort',
  DEVELOPER_SATISFACTION: 'developer-satisfaction',
  AI_AGENT_SUCCESS_AND_INTERVENTION: 'ai-agent-success-and-intervention',
  PLATFORM_AVAILABILITY: 'platform-availability'
});

export const DEVELOPER_PLATFORM_RELATIONSHIP_STAGES = Object.freeze({
  ARCHITECTURE_SECURITY_OBSERVABILITY_OPERATIONS_GOVERNANCE: 'Architecture, Security, Observability, Operations, and Governance',
  DEVELOPER_PLATFORM: 'Developer Platform',
  DOWNSTREAM_APPLICATION_PLATFORM: 'AI Agents, Workflows, Knowledge, APIs, Multi-Tenancy, Plugins, and Applications'
});

export const DEVELOPER_PLATFORM_BOUNDARIES = Object.freeze({
  SELECT_TOOLS_OR_VENDORS: 'select-tools-or-vendors',
  DEFINE_AGENT_RUNTIME_BEHAVIOR: 'define-detailed-agent-runtime-behavior',
  DEFINE_WORKFLOW_EXECUTION_INTERNALS: 'define-workflow-execution-internals',
  DEFINE_KNOWLEDGE_MEMORY_SEMANTICS: 'define-knowledge-or-memory-semantics',
  DEFINE_API_SDK_CONTRACT_ARCHITECTURE: 'define-api-and-sdk-contract-architecture',
  DEFINE_TENANT_RUNTIME_ARCHITECTURE: 'define-tenant-runtime-architecture',
  DEFINE_PLUGIN_EXECUTION: 'define-plugin-execution',
  REPLACE_ARCHITECTURE_OR_ADR_AUTHORITY: 'replace-architecture-or-adr-authority',
  REPLACE_ACCOUNTABLE_CODE_REVIEW: 'replace-accountable-code-review',
  REPLACE_ENTERPRISE_OPERATIONS: 'replace-enterprise-operations'
});

export const DEVELOPER_PLATFORM_QUALITY_ATTRIBUTES = Object.freeze({
  USABILITY: 'usability',
  PRODUCTIVITY: 'productivity',
  RELIABILITY: 'reliability',
  SECURITY: 'security',
  COMPLIANCE: 'compliance',
  SCALABILITY: 'scalability',
  MAINTAINABILITY: 'maintainability',
  EXTENSIBILITY: 'extensibility',
  INTEROPERABILITY: 'interoperability',
  TRACEABILITY: 'traceability',
  OPERABILITY: 'operability',
  TESTABILITY: 'testability',
  PORTABILITY: 'portability',
  TENANT_ISOLATION: 'tenant-isolation',
  ENTERPRISE_TRUST: 'enterprise-trust'
});

export const DEVELOPER_PLATFORM_ARCHITECTURAL_RULES = Object.freeze({
  MANAGED_AS_INTERNAL_PRODUCT: 'managed-as-an-internal-product',
  SERVE_HUMANS_AND_AUTHORIZED_AI_AGENTS: 'serve-human-developers-and-authorized-ai-implementation-agents',
  REINFORCE_ADD: 'reinforce-architecture-driven-development',
  SELF_SERVICE_WITH_GUARDRAILS: 'provide-self-service-within-guardrails',
  EVOLVABLE_PAVED_PATHS: 'make-paved-paths-supported-and-evolvable',
  REDUCE_COGNITIVE_LOAD_TRANSPARENTLY: 'reduce-cognitive-load-without-concealing-critical-behavior',
  SECURE_COMPLIANT_DEFAULTS: 'provide-secure-and-compliant-defaults',
  TRUSTED_TRACEABLE_ARTIFACTS: 'produce-trusted-and-traceable-artifacts',
  COMPREHENSIVE_TESTING_QUALITY: 'integrate-comprehensive-testing-and-quality',
  PRESERVE_TENANT_PROPERTY_BOUNDARIES: 'preserve-tenant-and-property-boundaries',
  REQUIRE_OPERATIONAL_READINESS: 'require-operational-readiness',
  AUTHORITATIVE_METADATA: 'maintain-authoritative-project-and-service-metadata',
  DISCOVERABLE_DOCUMENTATION_SUPPORT: 'provide-discoverable-documentation-and-support',
  GENERATE_GOVERNANCE_EVIDENCE: 'generate-governance-evidence',
  MEASURE_OUTCOMES: 'measure-developer-and-production-outcomes',
  ESCAPE_PATHS_WITH_ADRS_EXCEPTIONS: 'support-escape-paths-through-ADRs-and-exceptions',
  VENDOR_TECHNOLOGY_NEUTRALITY: 'preserve-vendor-neutrality-and-technology-independence'
});

export const FUTURE_DEVELOPER_PLATFORM_CAPABILITIES = Object.freeze({
  INTENT_DRIVEN_PROJECT_CREATION: 'intent-driven-project-creation',
  AI_NATIVE_DEVELOPER_ASSISTANCE: 'ai-native-developer-assistance',
  ARCHITECTURE_AWARE_CODING_AGENTS: 'architecture-aware-coding-agents',
  CONTINUOUS_ARCHITECTURE_VALIDATION: 'continuous-architecture-validation',
  AUTOMATED_SERVICE_OWNERSHIP: 'automated-service-ownership',
  SELF_OPTIMIZING_PAVED_PATHS: 'self-optimizing-paved-paths',
  EPHEMERAL_DEVELOPMENT_ENVIRONMENTS: 'ephemeral-development-environments',
  CONTINUOUS_OPERATIONAL_READINESS: 'continuous-operational-readiness',
  PREDICTIVE_BUILD_TEST_OPTIMIZATION: 'predictive-build-and-test-optimization',
  SEMANTIC_SERVICE_CATALOGS: 'semantic-service-catalogs',
  CROSS_PROPERTY_DEVELOPMENT_SIMULATION: 'cross-property-development-simulation',
  POLICY_AWARE_DELIVERY: 'policy-aware-delivery',
  DEVELOPER_PLATFORM_DIGITAL_TWINS: 'developer-platform-digital-twins',
  GOVERNED_AUTONOMOUS_MAINTENANCE: 'governed-autonomous-maintenance'
});
