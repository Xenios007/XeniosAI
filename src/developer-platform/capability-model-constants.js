export const PLATFORM_CAPABILITY_MODEL_ERROR_CODE = 'PLATFORM_CAPABILITY_MODEL_INVALID';

export const PLATFORM_CAPABILITY_MODEL_OBJECTIVES = Object.freeze({
  COHERENT_NON_MONOLITHIC_PLATFORM: 'coherent-platform-without-monolith',
  JOURNEY_RESPONSIBILITY_MAPPING: 'map-journeys-to-explicit-responsibilities',
  SEPARATE_EXPERIENCE_CONTROL_EXECUTION: 'separate-user-experience-from-control-and-execution',
  STABLE_REPLACEABLE_CONTRACTS: 'stable-versioned-replaceable-contracts',
  PRESERVE_ADD: 'preserve-architecture-driven-development',
  GOVERNED_SELF_SERVICE: 'support-governed-self-service',
  HUMAN_AND_AI_CONTRIBUTORS: 'support-human-and-authorized-ai-contributors',
  EVIDENCE_DURING_EXECUTION: 'generate-evidence-during-normal-execution',
  TENANT_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  EXPLICIT_OWNERSHIP_COMMITMENTS: 'make-ownership-and-service-commitments-explicit',
  INDEPENDENT_EVOLUTION: 'enable-independent-capability-evolution',
  PREVENT_DUPLICATION: 'prevent-duplicate-or-conflicting-platform-functions',
  MULTIPLE_TOOLS_CONSISTENT_CONTRACTS: 'support-multiple-tools-behind-consistent-platform-contracts',
  GRADUAL_MATURITY: 'allow-gradual-implementation-and-maturity',
  VENDOR_NEUTRALITY: 'preserve-vendor-neutrality'
});

export const PLATFORM_CAPABILITY_PRINCIPLES = Object.freeze({
  CAPABILITY_BEFORE_TOOL: 'capability-before-tool',
  PRODUCT_ORIENTED_CAPABILITIES: 'product-oriented-capabilities',
  EXPLICIT_BOUNDARIES: 'explicit-boundaries',
  OPEN_REPLACEABLE_CONTRACTS: 'open-and-replaceable-contracts',
  ORCHESTRATE_NOT_CENTRALIZE: 'orchestrate-do-not-centralize-everything',
  EVIDENCE_BY_DESIGN: 'evidence-by-design',
  CONTEXT_PRESERVATION: 'context-preservation',
  LEAST_REQUIRED_KNOWLEDGE: 'least-required-knowledge',
  INDEPENDENT_EVOLUTION: 'independent-evolution',
  DETERMINISTIC_CONTROL: 'deterministic-control'
});

export const DEVELOPER_PLATFORM_PLANES = Object.freeze({
  EXPERIENCE: 'experience-plane',
  CONTROL: 'control-plane',
  EXECUTION: 'execution-plane',
  RESOURCE: 'resource-plane',
  EVIDENCE_INTELLIGENCE: 'evidence-and-intelligence-plane'
});

export const PLATFORM_CAPABILITY_DOMAINS = Object.freeze({
  EXPERIENCE_ENGAGEMENT: 'experience-and-engagement',
  ARCHITECTURE_KNOWLEDGE_PAVED_PATHS: 'architecture-knowledge-and-paved-paths',
  IDENTITY_AUTHORITY_CONTEXT: 'identity-authority-and-context',
  PROJECT_SERVICE_LIFECYCLE: 'project-and-service-lifecycle',
  SOURCE_COLLABORATION: 'source-and-collaboration',
  BUILD_DEPENDENCY_ARTIFACT: 'build-dependency-and-artifact',
  TEST_EVALUATION_QUALITY: 'test-evaluation-and-quality',
  SECURITY_GOVERNANCE_EVIDENCE: 'security-governance-and-evidence',
  ENVIRONMENT_CONFIGURATION_SECRETS: 'environment-configuration-and-secrets',
  DELIVERY_RELEASE_CHANGE: 'delivery-release-and-change',
  PORTAL_CATALOG_DOCUMENTATION: 'portal-catalog-and-documentation',
  OPERATIONS_SUPPORT_FEEDBACK: 'operations-support-and-feedback'
});

export const EXPERIENCE_PLANE_CAPABILITIES = Object.freeze({
  DEVELOPER_PORTAL: 'developer-portal',
  SERVICE_CATALOG: 'service-catalog',
  DOCUMENTATION_DISCOVERY: 'documentation-and-knowledge-discovery',
  COMMAND_API_ACCESS: 'command-and-api-access',
  CONVERSATIONAL_INTERACTION: 'conversational-interaction',
  JOURNEY_STATUS: 'journey-status',
  SELF_SERVICE_REQUESTS: 'self-service-requests',
  REVIEW_APPROVAL: 'review-and-approval',
  PLATFORM_STATUS: 'platform-status',
  SUPPORT: 'support',
  FEEDBACK: 'feedback'
});

export const CONTROL_PLANE_CAPABILITIES = Object.freeze({
  REQUEST_INTAKE: 'request-intake',
  IDENTITY_CONTEXT_RESOLUTION: 'identity-and-context-resolution',
  AUTHORIZATION: 'authorization',
  PROJECT_SERVICE_REGISTRATION: 'project-and-service-registration',
  PAVED_PATH_SELECTION: 'paved-path-selection',
  TEMPLATE_RESOLUTION: 'template-resolution',
  WORKFLOW_ORCHESTRATION: 'workflow-orchestration',
  POLICY_EVALUATION: 'policy-evaluation',
  APPROVAL_ROUTING: 'approval-routing',
  BUILD_TEST_ORCHESTRATION: 'build-and-test-orchestration',
  ARTIFACT_PROMOTION: 'artifact-promotion',
  ENVIRONMENT_REQUESTS: 'environment-requests',
  DELIVERY_ORCHESTRATION: 'delivery-orchestration',
  READINESS_EVALUATION: 'readiness-evaluation',
  EVIDENCE_CORRELATION: 'evidence-correlation',
  STATUS_NOTIFICATION: 'status-and-notification'
});

export const EXECUTION_PLANE_CAPABILITIES = Object.freeze({
  SOURCE_OPERATIONS: 'source-operations',
  BUILD_EXECUTION: 'build-execution',
  TEST_EXECUTION: 'test-execution',
  QUALITY_ANALYSIS: 'quality-analysis',
  SECURITY_ANALYSIS: 'security-analysis',
  DEPENDENCY_ANALYSIS: 'dependency-analysis',
  ARTIFACT_PRODUCTION: 'artifact-production',
  ENVIRONMENT_PROVISIONING: 'environment-provisioning',
  CONFIGURATION_APPLICATION: 'configuration-application',
  DELIVERY_EXECUTION: 'delivery-execution',
  VERIFICATION: 'verification',
  CLEANUP: 'cleanup'
});

export const RESOURCE_PLANE_RESOURCES = Object.freeze({
  PROJECTS: 'projects',
  REPOSITORIES: 'repositories',
  SOURCE_REVISIONS: 'source-revisions',
  SERVICES: 'services',
  APPLICATIONS: 'applications',
  WORKFLOWS: 'workflows',
  AI_AGENTS: 'ai-agents',
  TOOLS: 'tools',
  INTEGRATIONS: 'integrations',
  DEPENDENCIES: 'dependencies',
  ARTIFACTS: 'artifacts',
  ENVIRONMENTS: 'environments',
  CONFIGURATION: 'configuration',
  SECRET_REFERENCES: 'secret-references',
  INFRASTRUCTURE: 'infrastructure',
  DOCUMENTATION: 'documentation',
  CATALOG_RECORDS: 'catalog-records',
  EVIDENCE: 'evidence'
});

export const EVIDENCE_INTELLIGENCE_CAPABILITIES = Object.freeze({
  EXECUTION_EVIDENCE: 'execution-evidence',
  POLICY_EVIDENCE: 'policy-evidence',
  PROVENANCE: 'provenance',
  AUDIT_HISTORY: 'audit-history',
  JOURNEY_ANALYTICS: 'journey-analytics',
  PLATFORM_OBSERVABILITY: 'platform-observability',
  DEVELOPER_FEEDBACK: 'developer-feedback',
  QUALITY_TRENDS: 'quality-trends',
  SECURITY_RISK_FINDINGS: 'security-and-risk-findings',
  OPERATIONAL_READINESS_STATUS: 'operational-readiness-status',
  CAPABILITY_HEALTH: 'capability-health',
  ADOPTION_ANALYSIS: 'adoption-analysis',
  RECOMMENDATION: 'recommendation',
  IMPROVEMENT_PRIORITIZATION: 'improvement-prioritization'
});

export const CORE_PLATFORM_CAPABILITIES = Object.freeze({
  EXPERIENCE_COMPOSITION: 'experience-composition',
  ONBOARDING: 'onboarding',
  ARCHITECTURE_CONTEXT: 'architecture-context',
  PAVED_PATH: 'paved-path',
  TEMPLATE: 'template',
  DEVELOPER_IDENTITY: 'developer-identity',
  AI_AGENT_IDENTITY_DELEGATION: 'ai-agent-identity-and-delegation',
  CONTEXT_RESOLUTION: 'context-resolution',
  PROJECT_MANAGEMENT: 'project-management',
  SERVICE_REGISTRATION: 'service-registration',
  OWNERSHIP: 'ownership',
  REPOSITORY_REGISTRATION: 'repository-registration',
  CHANGE_COLLABORATION: 'change-collaboration',
  BUILD_ORCHESTRATION: 'build-orchestration',
  DEPENDENCY_GOVERNANCE: 'dependency-governance',
  ARTIFACT_MANAGEMENT: 'artifact-management'
});

export const CONTROL_PLANE_REQUEST_LIFECYCLE = Object.freeze({
  RECEIVE_INTENT: 'Receive Intent',
  RESOLVE_IDENTITY_SCOPE_CONTEXT: 'Resolve Identity, Scope, and Context',
  VALIDATE_AUTHORITY_POLICY: 'Validate Authority and Policy',
  PLAN_CAPABILITY_EXECUTION: 'Plan Capability Execution',
  EXECUTE_AND_OBSERVE: 'Execute and Observe',
  EVALUATE_OUTCOME_EVIDENCE: 'Evaluate Outcome and Evidence',
  COMPLETE_COMPENSATE_ESCALATE_STOP: 'Complete, Compensate, Escalate, or Stop'
});

export const PLATFORM_REQUEST_FIELDS = Object.freeze({
  REQUEST_IDENTITY: 'request-identity',
  REQUEST_TYPE: 'request-type',
  ACTOR_IDENTITY: 'actor-identity',
  AI_AGENT_IDENTITY_SPONSOR: 'ai-agent-identity-and-sponsor',
  INTENT: 'intent',
  TARGET: 'target',
  PROJECT_AND_SERVICE: 'project-and-service',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  ENVIRONMENT: 'environment',
  ARCHITECTURE_SCOPE: 'architecture-scope',
  INPUTS: 'inputs',
  PERMISSIONS: 'permissions',
  RISK_POLICY_CONTEXT: 'risk-and-policy-context',
  APPROVAL: 'approval',
  TIME_COST_BOUNDS: 'time-and-cost-bounds',
  CORRELATION_CAUSATION_IDENTITIES: 'correlation-and-causation-identities',
  IDEMPOTENCY_IDENTITY: 'idempotency-identity',
  EXPECTED_RESULT: 'expected-result',
  EXPIRATION: 'expiration'
});

export const PLATFORM_REQUEST_STATES = Object.freeze({
  RECEIVED: 'received',
  VALIDATING: 'validating',
  REJECTED: 'rejected',
  AUTHORIZED: 'authorized',
  PLANNED: 'planned',
  WAITING: 'waiting',
  EXECUTING: 'executing',
  VERIFYING: 'verifying',
  COMPLETED: 'completed',
  PARTIALLY_COMPLETED: 'partially-completed',
  FAILED: 'failed',
  COMPENSATING: 'compensating',
  COMPENSATED: 'compensated',
  CANCELLED: 'cancelled',
  EXPIRED: 'expired',
  ESCALATED: 'escalated'
});

export const CAPABILITY_COLLABORATION_MODES = Object.freeze({
  COMMANDS: 'commands',
  QUERIES: 'queries',
  EVENTS: 'events',
  WORKFLOWS: 'workflows'
});

export const CAPABILITY_CONTRACT_FIELDS = Object.freeze({
  CAPABILITY_IDENTITY: 'capability-identity',
  PURPOSE: 'purpose',
  USERS_CONSUMERS: 'users-and-consumers',
  OWNER: 'owner',
  SCOPE_EXCLUSIONS: 'scope-and-exclusions',
  INPUTS_OUTPUTS: 'inputs-and-outputs',
  COMMANDS_QUERIES_EVENTS: 'commands-queries-and-events',
  STATE_OWNERSHIP: 'state-ownership',
  DEPENDENCIES: 'dependencies',
  IDENTITY_AUTHORIZATION: 'identity-and-authorization',
  TENANT_PROPERTY_BEHAVIOR: 'tenant-and-property-behavior',
  DATA_CLASSIFICATION: 'data-classification',
  POLICIES_CONTROLS: 'policies-and-controls',
  EVIDENCE: 'evidence',
  SERVICE_COMMITMENTS: 'service-commitments',
  ERROR_RECOVERY: 'error-and-recovery-behavior',
  OBSERVABILITY: 'observability',
  CAPACITY_COST: 'capacity-and-cost',
  VERSIONING: 'versioning',
  COMPATIBILITY: 'compatibility',
  SUPPORT: 'support',
  DEPRECATION: 'deprecation',
  CONTINUITY: 'continuity'
});

export const STATE_AUTHORITY_ASSIGNMENTS = Object.freeze({
  ARCHITECTURE_CONTENT: 'architecture-repository',
  ADR_CONTENT: 'adr-repository',
  SOURCE_REVISION: 'source-system',
  PROJECT_IDENTITY: 'project-lifecycle-capability',
  SERVICE_IDENTITY: 'service-lifecycle-authority',
  ARTIFACT_IDENTITY: 'artifact-capability',
  ENVIRONMENT_STATE: 'environment-capability',
  DELIVERY_STATE: 'delivery-capability',
  POLICY_DECISION: 'policy-capability',
  APPROVAL: 'approval-authority',
  OPERATIONAL_HEALTH: 'observability-authority',
  EVIDENCE_RECORD: 'evidence-capability'
});

export const SHARED_METADATA_IDENTIFIERS = Object.freeze({
  ACTOR: 'actor',
  AGENT: 'agent',
  TEAM: 'team',
  TASK: 'task',
  PROJECT: 'project',
  REPOSITORY: 'repository',
  REVISION: 'revision',
  SERVICE: 'service',
  INTERFACE: 'interface',
  DEPENDENCY: 'dependency',
  ARTIFACT: 'artifact',
  ENVIRONMENT: 'environment',
  RELEASE: 'release',
  DELIVERY: 'delivery',
  TENANT: 'tenant',
  PROPERTY: 'property',
  POLICY: 'policy',
  CONTROL: 'control',
  EVIDENCE: 'evidence',
  INCIDENT: 'incident'
});

export const CAPABILITY_SCOPE_TYPES = Object.freeze({
  GLOBAL: 'global',
  PLATFORM_WIDE: 'platform-wide',
  TENANT_SCOPED: 'tenant-scoped',
  PROPERTY_SCOPED: 'property-scoped',
  CROSS_TENANT: 'cross-tenant',
  CROSS_PROPERTY: 'cross-property'
});

export const ENVIRONMENT_CONTEXT_TYPES = Object.freeze({
  LOCAL_DEVELOPMENT: 'local-development',
  SHARED_DEVELOPMENT: 'shared-development',
  TEST: 'test',
  INTEGRATION: 'integration',
  PRE_PRODUCTION: 'pre-production',
  PRODUCTION: 'production',
  TEMPORARY_EPHEMERAL: 'temporary-or-ephemeral',
  EVALUATION_SIMULATION: 'specialized-evaluation-or-simulation'
});

export const HUMAN_AI_PARTICIPATION_FIELDS = Object.freeze({
  HUMAN_ACTIONS: 'actions-available-to-humans',
  AI_ACTIONS: 'actions-available-to-ai-agents',
  HUMAN_SPONSORSHIP: 'required-human-sponsorship',
  REVIEW: 'required-review',
  APPROVAL: 'required-approval',
  AUTOMATED_DECISIONS: 'automated-decisions',
  HUMAN_ONLY_DECISIONS: 'human-only-decisions',
  STOP_CONDITIONS: 'stop-conditions',
  ATTRIBUTION: 'attribution',
  REVOCATION: 'revocation'
});

export const CAPABILITY_OWNERSHIP_FIELDS = Object.freeze({
  PRODUCT_OWNER: 'product-owner',
  ARCHITECTURE_OWNER: 'architecture-owner',
  TECHNICAL_OWNER: 'technical-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  SECURITY_RISK_OWNERSHIP: 'security-and-risk-ownership',
  SUPPORT_OWNERSHIP: 'support-ownership',
  COST_OWNERSHIP: 'cost-ownership',
  DATA_OWNERSHIP: 'data-ownership-where-applicable',
  LIFECYCLE_AUTHORITY: 'lifecycle-authority'
});

export const CAPABILITY_SERVICE_COMMITMENT_FIELDS = Object.freeze({
  AVAILABILITY: 'availability',
  RESPONSE_TIME: 'response-time',
  COMPLETION_TIME: 'completion-time',
  THROUGHPUT: 'throughput',
  DATA_FRESHNESS: 'data-freshness',
  STATE_CONSISTENCY: 'state-consistency',
  RECOVERY_TIME: 'recovery-time',
  RECOVERY_POINT: 'recovery-point',
  SUPPORT_RESPONSE: 'support-response',
  MAINTENANCE: 'maintenance',
  NOTIFICATION: 'notification',
  EVIDENCE_AVAILABILITY: 'evidence-availability'
});

export const CAPABILITY_CRITICALITY_CLASSES = Object.freeze({
  CRITICAL_CONTROL: 'critical-control-capability',
  CRITICAL_EXECUTION: 'critical-execution-capability',
  REQUIRED_LIFECYCLE: 'required-lifecycle-capability',
  STANDARD_PRODUCTIVITY: 'standard-productivity-capability',
  OPTIONAL_ENHANCEMENT: 'optional-enhancement',
  EXPERIMENTAL: 'experimental-capability'
});

export const CAPABILITY_DEPENDENCY_RULES = Object.freeze({
  EXPERIENCE_NOT_HIDDEN_AUTHORITY: 'experience-composes-domain-state-not-hidden-authority',
  CONTROL_NOT_EXECUTION_INTERNALS: 'control-orchestrates-without-duplicating-execution-internals',
  EXECUTION_NO_UNAPPROVED_POLICY: 'execution-does-not-make-unapproved-policy-decisions',
  EVIDENCE_PRESERVES_MEANING: 'evidence-records-facts-without-changing-original-meaning',
  RECOMMENDATIONS_NOT_AUTHORITY: 'analytics-and-ai-recommendations-not-silent-authority',
  CONTRACTS_NOT_VENDOR_INTERNALS: 'depend-on-contracts-not-vendor-specific-internals',
  AVOID_CIRCULAR_SYNC_DEPENDENCIES: 'avoid-circular-synchronous-dependencies',
  OPTIONAL_NOT_CRITICAL_RECOVERY_BLOCKER: 'optional-capabilities-do-not-block-critical-recovery',
  CONTEXT_SURVIVES_BOUNDARIES: 'tenant-and-property-context-survives-every-boundary',
  FAILURE_OWNERSHIP_IDENTIFIABLE: 'failure-ownership-identifiable'
});

export const CAPABILITY_FAILURE_FIELDS = Object.freeze({
  FAILURE_CLASSIFICATION: 'failure-classification',
  PARTIAL_EFFECTS: 'partial-effects',
  RETRY_SAFETY: 'retry-safety',
  TIMEOUT: 'timeout',
  CANCELLATION: 'cancellation',
  COMPENSATION: 'compensation',
  FALLBACK: 'fallback',
  DEGRADED_BEHAVIOR: 'degraded-behavior',
  STATE_RECOVERY: 'state-recovery',
  EVIDENCE: 'evidence',
  ESCALATION: 'escalation'
});

export const CAPABILITY_OBSERVABILITY_SIGNALS = Object.freeze({
  HEALTH: 'health',
  AVAILABILITY: 'availability',
  REQUEST_VOLUME: 'request-volume',
  LATENCY: 'latency',
  SUCCESS_AND_FAILURE: 'success-and-failure',
  QUEUE_WAIT_STATE: 'queue-or-wait-state',
  DEPENDENCY_HEALTH: 'dependency-health',
  CAPACITY: 'capacity',
  COST: 'cost',
  POLICY_DECISIONS: 'policy-decisions',
  EVIDENCE_PRODUCTION: 'evidence-production',
  TENANT_PROPERTY_IMPACT: 'tenant-and-property-impact-where-authorized',
  USER_JOURNEY_IMPACT: 'user-and-journey-impact'
});

export const CAPABILITY_SECURITY_FIELDS = Object.freeze({
  TRUST_BOUNDARY: 'trust-boundary',
  IDENTITY: 'identity',
  AUTHENTICATION: 'authentication',
  AUTHORIZATION: 'authorization',
  LEAST_PRIVILEGE: 'least-privilege',
  DATA_CLASSIFICATION: 'data-classification',
  SECRET_BEHAVIOR: 'secret-behavior',
  INTEGRITY: 'integrity',
  AUDIT: 'audit',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_SCOPE: 'property-scope',
  SUPPLY_CHAIN_EXPOSURE: 'supply-chain-exposure',
  THREAT_MODEL: 'threat-model',
  INCIDENT_RESPONSE: 'incident-response',
  CONTINUITY: 'continuity'
});

export const CAPABILITY_COST_CAPACITY_FIELDS = Object.freeze({
  DEMAND: 'demand',
  RESOURCE_CONSUMPTION: 'resource-consumption',
  UNIT_COST_DRIVERS: 'unit-cost-drivers',
  CAPACITY_LIMITS: 'capacity-limits',
  QUOTAS: 'quotas',
  WAIT_TIME: 'wait-time',
  SCALING_BEHAVIOR: 'scaling-behavior',
  TENANT_PROJECT_ATTRIBUTION: 'tenant-or-project-attribution',
  BUDGET_THRESHOLDS: 'budget-thresholds',
  OPTIMIZATION_OPPORTUNITIES: 'optimization-opportunities'
});

export const CAPABILITY_PORTFOLIO_FIELDS = Object.freeze({
  CAPABILITY: 'capability',
  DOMAIN: 'domain',
  OWNER: 'owner',
  USERS: 'users',
  JOURNEYS: 'journeys',
  CRITICALITY: 'criticality',
  MATURITY: 'maturity',
  SERVICE_COMMITMENTS: 'service-commitments',
  IMPLEMENTATION_SYSTEMS: 'implementation-systems',
  DEPENDENCIES: 'dependencies',
  RISK: 'risk',
  COST: 'cost',
  ADOPTION: 'adoption',
  ROADMAP: 'roadmap',
  LIFECYCLE_STATE: 'lifecycle-state'
});

export const CAPABILITY_LIFECYCLE_STAGES = Object.freeze({
  PROPOSED: 'Proposed',
  INCUBATING: 'Incubating',
  SUPPORTED: 'Supported',
  STRATEGIC: 'Strategic',
  DEPRECATED: 'Deprecated',
  RETIRED: 'Retired'
});

export const CAPABILITY_MATURITY_LEVELS = Object.freeze({
  AD_HOC: 'ad-hoc',
  DOCUMENTED: 'documented',
  REPEATABLE: 'repeatable',
  GOVERNED: 'governed',
  MEASURED: 'measured',
  ADAPTIVE: 'adaptive'
});

export const CAPABILITY_INTRODUCTION_FIELDS = Object.freeze({
  USER_PLATFORM_NEED: 'user-and-platform-need',
  JOURNEYS_SUPPORTED: 'journeys-supported',
  EXISTING_OVERLAP: 'existing-capability-overlap',
  ARCHITECTURE_ALIGNMENT: 'architecture-alignment',
  CONTRACT: 'contract',
  STATE_OWNERSHIP: 'state-ownership',
  DEPENDENCIES: 'dependencies',
  SECURITY_TENANT_BEHAVIOR: 'security-and-tenant-behavior',
  EVIDENCE: 'evidence',
  SERVICE_EXPECTATIONS: 'service-expectations',
  COST: 'cost',
  OWNER: 'owner',
  LIFECYCLE_PLAN: 'lifecycle-plan',
  BUILD_BUY_INTEGRATE_DECISION: 'build-buy-or-integrate-decision'
});

export const BUILD_BUY_INTEGRATE_FACTORS = Object.freeze({
  STRATEGIC_DIFFERENTIATION: 'strategic-differentiation',
  CONTRACT_FIT: 'contract-fit',
  VENDOR_INDEPENDENCE: 'vendor-independence',
  INTEGRATION_COMPLEXITY: 'integration-complexity',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  TENANT_ISOLATION: 'tenant-isolation',
  DATA_PORTABILITY: 'data-portability',
  RELIABILITY: 'reliability',
  CONTINUITY: 'continuity',
  COST: 'cost',
  SKILLS: 'skills',
  EXIT_STRATEGY: 'exit-strategy',
  EVIDENCE: 'evidence'
});

export const CAPABILITY_DEPRECATION_FIELDS = Object.freeze({
  REASON: 'reason',
  OWNER: 'owner',
  AFFECTED_JOURNEYS: 'affected-journeys',
  CONSUMERS: 'consumers',
  REPLACEMENT: 'replacement',
  COMPATIBILITY: 'compatibility',
  MIGRATION_PATH: 'migration-path',
  COMMUNICATION: 'communication',
  SUPPORT_PERIOD: 'support-period',
  EVIDENCE: 'evidence',
  FINAL_RETIREMENT_DATE: 'final-retirement-date'
});

export const CAPABILITY_MEASURES = Object.freeze({
  JOURNEY_COMPLETION: 'journey-completion',
  TIME_TO_OUTCOME: 'time-to-outcome',
  SUCCESS_RATE: 'success-rate',
  FAILURE_RATE: 'failure-rate',
  RETRY_RATE: 'retry-rate',
  WAIT_TIME: 'wait-time',
  AVAILABILITY: 'availability',
  EVIDENCE_COMPLETENESS: 'evidence-completeness',
  POLICY_DECISION_ACCURACY: 'policy-decision-accuracy',
  SUPPORT_DEMAND: 'support-demand',
  INCIDENT_CONTRIBUTION: 'incident-contribution',
  PAVED_PATH_ADOPTION: 'paved-path-adoption',
  CONSUMER_SATISFACTION: 'consumer-satisfaction',
  AI_AGENT_SUCCESS_INTERVENTION: 'ai-agent-success-and-intervention',
  TENANT_PROPERTY_DEFECTS: 'tenant-and-property-defects',
  CAPACITY: 'capacity',
  UNIT_COST: 'unit-cost',
  UPGRADE_SUCCESS: 'upgrade-success',
  DEPRECATION_PROGRESS: 'deprecation-progress'
});

export const CAPABILITY_GOVERNANCE_AREAS = Object.freeze({
  CAPABILITY_TAXONOMY: 'capability-taxonomy',
  NAMING_STANDARDS: 'naming-standards',
  OWNERSHIP_STANDARDS: 'ownership-standards',
  CONTRACT_STANDARDS: 'contract-standards',
  METADATA_STANDARDS: 'metadata-standards',
  CRITICALITY_CLASSIFICATION: 'criticality-classification',
  MATURITY_ASSESSMENT: 'maturity-assessment',
  ARCHITECTURE_REVIEW: 'architecture-review',
  SECURITY_PRIVACY_REVIEW: 'security-and-privacy-review',
  SERVICE_COMMITMENT_REVIEW: 'service-commitment-review',
  PORTFOLIO_REVIEW: 'portfolio-review',
  INVESTMENT_PRIORITIZATION: 'investment-prioritization',
  EXCEPTION_MANAGEMENT: 'exception-management',
  DEPRECATION_RETIREMENT: 'deprecation-and-retirement'
});

export const CAPABILITY_ANTI_PATTERNS = Object.freeze({
  PRODUCT_AS_MODEL: 'treating-products-as-capability-model',
  PLATFORM_MONOLITH: 'building-one-developer-platform-monolith',
  TOOL_AUTHORITY_MODELS: 'separate-authority-models-per-tool',
  DUPLICATED_STATE: 'duplicating-state-without-authority-rules',
  CENTRALIZED_EXECUTION: 'centralizing-all-execution-in-control-plane',
  EXECUTION_REDEFINES_POLICY: 'execution-systems-redefine-policy',
  DASHBOARDS_AS_EVIDENCE_AUTHORITY: 'dashboards-as-evidence-authority',
  HIDDEN_SCOPE_DEFAULTS: 'hidden-tenant-or-property-scope-defaults',
  AI_AUTHORITY_FROM_CREDENTIALS: 'ai-authority-through-available-credentials',
  UNOWNED_SCRIPTED_PAVED_PATHS: 'paved-paths-as-unowned-scripts',
  REBUILD_ON_PROMOTION: 'rebuilding-artifacts-during-promotion-without-justification',
  AUDIT_ONLY_EVIDENCE: 'collecting-evidence-only-after-audit-request',
  CAPABILITIES_WITHOUT_OWNERS: 'capabilities-without-owners-or-service-commitments',
  INDEFINITE_DEPRECATION: 'deprecated-capabilities-kept-indefinitely',
  ACTIVITY_ONLY_METRICS: 'measuring-only-activity-volume',
  VENDOR_INTERNALS_AS_CONTRACTS: 'vendor-specific-internals-as-platform-contracts'
});

export const PLATFORM_CAPABILITY_ARCHITECTURAL_RULES = Object.freeze({
  CAPABILITIES_INDEPENDENT_OF_PRODUCTS: 'define-capabilities-independently-of-products-and-vendors',
  EXPLICIT_LOGICAL_DOMAINS: 'organize-responsibilities-into-explicit-logical-domains',
  SEPARATE_PLANES: 'separate-experience-control-execution-resource-and-evidence-concerns',
  VERSIONED_CONTRACTS: 'use-explicit-and-versioned-capability-contracts',
  ONE_AUTHORITY_PER_STATE: 'preserve-one-authoritative-source-for-each-material-state',
  CONSISTENT_IDENTITIES: 'maintain-consistent-identities-across-capability-boundaries',
  PRESERVE_CONTEXT: 'preserve-human-ai-agent-tenant-property-and-environment-context',
  GOVERNED_PAVED_PATH_COMPOSITIONS: 'treat-paved-paths-as-governed-capability-compositions',
  ARCHITECTURE_ADRS_AUTHORITATIVE: 'keep-architecture-and-adrs-authoritative',
  PREVENT_CONTROL_PLANE_MONOLITH: 'prevent-control-plane-from-becoming-platform-monolith',
  DETERMINISTIC_POLICY: 'make-policy-decisions-deterministic-and-explainable',
  DISTINGUISH_EVIDENCE_ANALYTICS_AUTHORITY: 'distinguish-evidence-analytics-recommendations-and-authority',
  EXECUTION_EVIDENCE: 'generate-evidence-during-execution',
  DEFINE_OWNERSHIP_COMMITMENTS: 'define-ownership-service-commitments-security-observability-support-and-continuity',
  FAILURE_ISOLATION: 'design-failure-isolation-retry-cancellation-compensation-and-recovery',
  INDEPENDENT_EVOLUTION_REPLACEMENT: 'support-independent-capability-evolution-and-replacement',
  GOVERN_LIFECYCLE: 'govern-capability-maturity-introduction-investment-deprecation-and-retirement',
  MEASURE_OUTCOMES: 'measure-developer-and-production-outcomes',
  VENDOR_TECHNOLOGY_NEUTRAL: 'preserve-vendor-neutrality-and-technology-independence'
});

export const FUTURE_CAPABILITY_MODEL_CAPABILITIES = Object.freeze({
  INTENT_DRIVEN_COMPOSITION: 'intent-driven-capability-composition',
  SEMANTIC_DISCOVERY: 'semantic-capability-discovery',
  ARCHITECTURE_AWARE_PLANNING: 'architecture-aware-control-plane-planning',
  RISK_BASED_VALIDATION: 'dynamic-risk-based-validation',
  FEDERATED_DEVELOPER_PLATFORMS: 'federated-developer-platforms',
  CROSS_TENANT_PROPERTY_SIMULATION: 'cross-tenant-and-cross-property-simulation',
  MULTI_AGENT_ENGINEERING: 'governed-multi-agent-engineering',
  PREDICTIVE_OPTIMIZATION: 'predictive-capacity-and-journey-optimization',
  DEPENDENCY_ANALYSIS: 'automated-capability-dependency-analysis',
  CONTINUOUS_MATURITY: 'continuous-maturity-assessment',
  SELF_IMPROVING_PAVED_PATHS: 'self-improving-paved-paths',
  CAPABILITY_MARKETPLACES: 'policy-aware-capability-marketplaces',
  CAPABILITY_DIGITAL_TWINS: 'capability-digital-twins',
  AUTONOMOUS_MAINTENANCE: 'governed-autonomous-maintenance'
});
