export const PLATFORM_OPERATIONS_ADOPTION_ERROR_CODE = 'PLATFORM_OPERATIONS_ADOPTION_INVALID';

export const PLATFORM_OPERATIONS_ADOPTION_OBJECTIVES = Object.freeze({
  CRITICAL_JOURNEYS_AVAILABLE: 'keep-critical-developer-journeys-available',
  PROTECT_DELIVERY_RECOVERY: 'protect-delivery-and-recovery-capabilities',
  CLEAR_OWNERSHIP_SUPPORT: 'provide-clear-ownership-and-support',
  EARLY_IMPACT_DETECTION: 'detect-developer-and-production-impact-early',
  INCIDENT_DEGRADED_COORDINATION: 'coordinate-incidents-and-degraded-operation',
  CAPACITY_COST_SUPPLIERS: 'manage-capacity-performance-cost-and-suppliers',
  SECURITY_PRIVACY_EVIDENCE_BOUNDARIES: 'protect-security-privacy-evidence-and-tenant-boundaries',
  CONTINUITY_RECOVERY: 'provide-continuity-and-tested-recovery',
  TRUSTWORTHY_PAVED_PATHS: 'make-paved-paths-supported-and-trustworthy',
  REDUCE_ONBOARDING_LOAD: 'reduce-onboarding-time-and-cognitive-load',
  VALUE_BASED_ADOPTION: 'enable-voluntary-adoption-through-value-and-safe-defaults',
  GOVERNED_LEGACY_MIGRATION: 'provide-governed-migration-from-legacy-paths',
  OUTCOME_MEASUREMENT: 'measure-outcomes-rather-than-activity-volume',
  LEARN_FROM_SIGNALS: 'learn-from-users-ai-agents-incidents-and-production',
  ACCOUNTABLE_ROADMAP: 'maintain-an-accountable-roadmap-and-lifecycle'
});

export const PLATFORM_OPERATIONS_ADOPTION_PRINCIPLES = Object.freeze({
  PLATFORM_IS_PRODUCT: 'the-platform-is-a-product',
  OPERATIONS_PROTECT_OUTCOMES: 'operations-protect-outcomes',
  ADOPTION_IS_EARNED: 'adoption-is-earned',
  PAVED_PATHS_SERVICE_COMMITMENTS: 'paved-paths-are-service-commitments',
  NO_INVISIBLE_DEGRADATION: 'no-invisible-degradation',
  CRITICAL_RECOVERY_AVAILABLE: 'critical-recovery-paths-remain-available',
  FEEDBACK_PRODUCES_CHANGE: 'feedback-produces-change',
  METRICS_PROTECT_QUALITY: 'metrics-protect-quality'
});

export const PRODUCT_OWNERSHIP_FIELDS = Object.freeze({
  PRODUCT_VISION: 'product-vision',
  USER_OUTCOMES: 'user-outcomes',
  PLATFORM_SCOPE: 'platform-scope',
  CAPABILITY_PORTFOLIO: 'capability-portfolio',
  ADOPTION: 'adoption',
  ROADMAP: 'roadmap',
  INVESTMENT: 'investment',
  SERVICE_COMMITMENTS: 'service-commitments',
  SUPPORT_MODEL: 'support-model',
  USER_RESEARCH: 'user-research',
  MEASURES: 'measures',
  DEPRECATION: 'deprecation',
  VALUE_COST: 'value-and-cost'
});

export const PLATFORM_OWNERSHIP_ROLES = Object.freeze({
  PRODUCT_OWNER: 'product-owner',
  ARCHITECTURE_OWNER: 'architecture-owner',
  TECHNICAL_OWNER: 'technical-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  SECURITY_RISK_OWNER: 'security-and-risk-owner',
  DATA_OWNER: 'data-owner-where-applicable',
  COST_OWNER: 'cost-owner',
  SUPPORT_TEAM: 'support-team',
  ESCALATION: 'escalation',
  LIFECYCLE_AUTHORITY: 'lifecycle-authority'
});

export const SERVICE_COMMITMENT_FIELDS = Object.freeze({
  AVAILABILITY: 'availability',
  RESPONSE_TIME: 'response-time',
  COMPLETION_TIME: 'completion-time',
  DATA_FRESHNESS: 'data-freshness',
  QUEUE_TIME: 'queue-time',
  EVIDENCE_AVAILABILITY: 'evidence-availability',
  RECOVERY_TIME: 'recovery-time',
  RECOVERY_POINT: 'recovery-point',
  SUPPORT_RESPONSE: 'support-response',
  MAINTENANCE_NOTIFICATION: 'maintenance-notification',
  DEPRECATION_NOTICE: 'deprecation-notice'
});

export const CRITICAL_PLATFORM_CAPABILITIES = Object.freeze({
  IDENTITY_AUTHORIZATION: 'identity-and-authorization',
  SOURCE_ACCESS: 'source-access',
  POLICY_EVALUATION: 'policy-evaluation',
  BUILD_ARTIFACT_TRUST: 'build-and-artifact-trust',
  SECRET_REFERENCES: 'secret-references',
  ENVIRONMENT_CONTROL: 'environment-control',
  DELIVERY_ROLLBACK: 'delivery-and-rollback',
  OBSERVABILITY: 'observability',
  EVIDENCE: 'evidence',
  INCIDENT_SUPPORT_ACCESS: 'incident-and-support-access'
});

export const COMMAND_CONTROL_FIELDS = Object.freeze({
  OPERATIONAL_CONDITION: 'operational-condition',
  USER_BUSINESS_IMPACT: 'user-and-business-impact',
  PRIORITY: 'priority',
  DECISION_AUTHORITY: 'decision-authority',
  RESPONSE_OWNERSHIP: 'response-ownership',
  PERMITTED_ACTIONS: 'permitted-actions',
  COMMUNICATION: 'communication',
  ESCALATION: 'escalation',
  RECOVERY: 'recovery',
  EVIDENCE: 'evidence'
});

export const OPERATIONAL_CONTROL_LOOP_STAGES = Object.freeze({
  OBSERVE: 'observe-platform-and-journey-state',
  ASSESS: 'assess-impact-and-risk',
  DECIDE: 'decide-and-authorize',
  ACT: 'act-contain-or-recover',
  VERIFY: 'verify-developer-and-production-outcomes',
  LEARN: 'learn-and-improve'
});

export const PLATFORM_HEALTH_FIELDS = Object.freeze({
  CAPABILITY_AVAILABILITY: 'capability-availability',
  JOURNEY_COMPLETION: 'journey-completion',
  QUEUE_STATE: 'queue-state',
  DEPENDENCY_HEALTH: 'dependency-health',
  DATA_FRESHNESS: 'data-freshness',
  POLICY_EVIDENCE_AVAILABILITY: 'policy-and-evidence-availability',
  SECURITY_STATE: 'security-state',
  CAPACITY: 'capacity',
  COST: 'cost',
  TENANT_PROPERTY_IMPACT: 'tenant-and-property-impact',
  USER_EXPERIENCE: 'user-experience'
});

export const HEALTH_ENDPOINT_TYPES = Object.freeze({
  LIVENESS: 'liveness',
  READINESS: 'readiness',
  GENERAL_HEALTH: 'general-health',
  DEPENDENCY_HEALTH: 'dependency-health',
  DEGRADED_STATE: 'degraded-state'
});

export const OBSERVABILITY_CORRELATION_FIELDS = Object.freeze({
  ACTOR_AI_IDENTITY: 'actor-and-ai-agent-identity',
  JOURNEY: 'journey',
  REQUEST: 'request',
  PROJECT_SERVICE: 'project-and-service',
  CAPABILITY_EXECUTION: 'capability-execution',
  DEPENDENCY: 'dependency',
  ENVIRONMENT: 'environment',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  POLICY_DECISION: 'policy-decision',
  EVIDENCE: 'evidence',
  ERROR: 'error',
  OUTCOME: 'outcome',
  COST: 'cost'
});

export const PLATFORM_SIGNAL_TYPES = Object.freeze({
  AVAILABILITY: 'availability',
  LATENCY: 'latency',
  QUEUE_LENGTH: 'queue-length',
  ERROR_RATE: 'error-rate',
  CPU_MEMORY: 'cpu-and-memory',
  STORAGE: 'storage',
  DEPENDENCY_AVAILABILITY: 'dependency-availability',
  BUILD_TEST_DURATION: 'build-and-test-duration',
  ARTIFACT_PUBLICATION: 'artifact-publication',
  ENVIRONMENT_PROVISIONING: 'environment-provisioning',
  DELIVERY_SUCCESS: 'delivery-success',
  SEARCH_FRESHNESS: 'search-freshness',
  POLICY_LATENCY: 'policy-latency',
  AI_PROVIDER_USE: 'token-and-ai-provider-use',
  COST: 'cost',
  SUPPORT_DEMAND: 'support-demand'
});

export const LOG_REQUIREMENTS = Object.freeze({
  STRUCTURED: 'structured',
  CORRELATED: 'correlated',
  TIME_ORDERED: 'time-ordered',
  ACCESS_CONTROLLED: 'access-controlled',
  REDACTED: 'redacted',
  RETAINED_BY_POLICY: 'retained-by-policy',
  SEARCHABLE_WITH_AUTHORIZATION: 'searchable-within-authorization',
  CONNECTED_TO_AUDIT: 'connected-to-audit-where-appropriate'
});

export const PLATFORM_STATUS_FIELDS = Object.freeze({
  CURRENT_CAPABILITY_STATE: 'current-capability-state',
  AFFECTED_JOURNEYS: 'affected-journeys',
  USER_BUSINESS_IMPACT: 'user-and-business-impact',
  START_TIME: 'start-time',
  CURRENT_OWNER: 'current-owner',
  WORKAROUND: 'workaround',
  RECOVERY_PROGRESS: 'recovery-progress',
  NEXT_UPDATE: 'next-update',
  RESOLUTION: 'resolution'
});

export const INCIDENT_MANAGEMENT_STEPS = Object.freeze({
  ESTABLISH_IDENTITY: 'establish-incident-identity',
  ASSESS_IMPACT: 'assess-developer-and-production-impact',
  IDENTIFY_CAPABILITIES_DEPENDENCIES: 'identify-affected-capabilities-and-dependencies',
  IDENTIFY_TENANT_PROPERTY_IMPACT: 'identify-tenant-and-property-impact',
  ASSIGN_COMMAND_OWNERSHIP: 'assign-command-and-ownership',
  CONTAIN_HARM: 'contain-harm',
  PRESERVE_RECOVERY_PATHS: 'preserve-critical-recovery-paths',
  COMMUNICATE: 'communicate',
  RESTORE_SERVICE: 'restore-service',
  VERIFY_OUTCOMES: 'verify-outcomes',
  PRESERVE_EVIDENCE: 'preserve-evidence',
  INITIATE_PROBLEM_ANALYSIS: 'initiate-problem-analysis-where-required'
});

export const INCIDENT_PRIORITY_FACTORS = Object.freeze({
  PRODUCTION_DELIVERY_BLOCKED: 'production-delivery-blocked',
  ROLLBACK_RECOVERY_BLOCKED: 'rollback-or-recovery-blocked',
  SECURITY_REMEDIATION_BLOCKED: 'security-remediation-blocked',
  SOURCE_ARTIFACT_INTEGRITY: 'source-or-artifact-integrity',
  CROSS_TENANT_RISK: 'cross-tenant-risk',
  PROPERTY_OPERATIONAL_IMPACT: 'property-operational-impact',
  TEAM_COUNT: 'number-of-teams-affected',
  DURATION: 'duration',
  WORKAROUND: 'workaround',
  DATA_EVIDENCE_LOSS: 'data-or-evidence-loss'
});

export const DEGRADED_OPERATION_FIELDS = Object.freeze({
  AVAILABLE_CAPABILITIES: 'available-capabilities',
  UNAVAILABLE_CAPABILITIES: 'unavailable-capabilities',
  DATA_FRESHNESS: 'data-freshness',
  MANUAL_ALTERNATE_PATHS: 'manual-or-alternate-paths',
  SECURITY_MINIMUMS: 'security-minimums',
  AUTHORITY: 'authority',
  QUEUEING: 'queueing',
  RECONCILIATION: 'reconciliation',
  COMMUNICATION: 'communication',
  STOP_CONDITIONS: 'stop-conditions'
});

export const OPERATIONS_DOMAINS = Object.freeze({
  INCIDENT_MANAGEMENT: 'incident-management',
  PROBLEM_MANAGEMENT: 'problem-management',
  CHANGE_RELEASE_OPERATIONS: 'change-and-release-operations',
  PLATFORM_DOGFOODING: 'platform-dogfooding',
  CAPACITY_MANAGEMENT: 'capacity-management',
  PERFORMANCE_MANAGEMENT: 'performance-management',
  COST_MANAGEMENT: 'cost-management',
  SUPPLIER_DEPENDENCY_OPERATIONS: 'supplier-and-dependency-operations',
  SECURITY_OPERATIONS: 'security-operations',
  CONTINUITY_RECOVERY: 'continuity-and-recovery',
  BACKUP_RESTORE: 'backup-and-restore'
});

export const SUPPORT_MODEL_TYPES = Object.freeze({
  SELF_SERVICE_GUIDANCE: 'self-service-guidance',
  DOCUMENTATION_KNOWLEDGE: 'documentation-and-knowledge',
  COMMUNITY_SUPPORT: 'community-support',
  SERVICE_DESK: 'service-desk',
  CAPABILITY_SPECIALISTS: 'capability-specialists',
  INCIDENT_ESCALATION: 'incident-escalation',
  SECURITY_ESCALATION: 'security-escalation',
  ARCHITECTURE_CONSULTATION: 'architecture-consultation',
  TENANT_PROPERTY_SUPPORT: 'tenant-and-property-support'
});

export const CONTEXTUAL_SUPPORT_FIELDS = Object.freeze({
  ACTOR: 'actor',
  JOURNEY: 'journey',
  PROJECT_SERVICE: 'project-and-service',
  REQUEST_EXECUTION_IDENTITY: 'request-or-execution-identity',
  ENVIRONMENT: 'environment',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  ERROR_CLASSIFICATION: 'error-classification',
  DIAGNOSTICS: 'diagnostics',
  ACTIONS_ATTEMPTED: 'actions-attempted',
  IMPACT: 'impact',
  URGENCY: 'urgency'
});

export const OPERATIONAL_REQUEST_TYPES = Object.freeze({
  ACCESS: 'access',
  ENVIRONMENT: 'environment',
  CAPACITY: 'capacity',
  PAVED_PATH_SUPPORT: 'paved-path-support',
  TEMPLATE_SUPPORT: 'template-support',
  MIGRATION_HELP: 'migration-help',
  OWNERSHIP_TRANSFER: 'ownership-transfer',
  CATALOG_CORRECTION: 'catalog-correction',
  DOCUMENTATION_HELP: 'documentation-help',
  EXCEPTION_GUIDANCE: 'exception-guidance',
  SUPPLIER_ESCALATION: 'supplier-escalation'
});

export const SUPPORT_KNOWLEDGE_REQUIREMENTS = Object.freeze({
  OWNED: 'owned',
  VERSIONED: 'versioned',
  SEARCHABLE: 'searchable',
  ACCESS_CONTROLLED: 'access-controlled',
  CONNECTED_TO_CAPABILITIES: 'connected-to-capabilities',
  CONNECTED_TO_INCIDENTS_PROBLEMS: 'connected-to-incidents-and-problems',
  TESTED_WHERE_PRACTICAL: 'tested-where-practical',
  REVIEWED_FOR_FRESHNESS: 'reviewed-for-freshness',
  DEPRECATED_WHEN_OBSOLETE: 'deprecated-when-obsolete'
});

export const ADOPTION_LIFECYCLE_STATES = Object.freeze({
  AWARE: 'aware',
  EVALUATING: 'evaluating',
  ONBOARDING: 'onboarding',
  USING: 'using',
  SCALING: 'scaling',
  ADVOCATING_IMPROVING: 'advocating-or-improving',
  BLOCKED: 'blocked',
  CHURNED: 'churned',
  MIGRATING: 'migrating'
});

export const ADOPTION_PERSONAS = Object.freeze({
  NEW_DEVELOPER: 'new-developer',
  EXPERIENCED_SERVICE_DEVELOPER: 'experienced-service-developer',
  PLATFORM_ENGINEER: 'platform-engineer',
  SERVICE_OWNER: 'service-owner',
  ARCHITECT: 'architect',
  OPERATIONS_CONTRIBUTOR: 'operations-contributor',
  SECURITY_GOVERNANCE_CONTRIBUTOR: 'security-and-governance-contributor',
  TENANT_DEVELOPER: 'tenant-developer',
  PROPERTY_INTEGRATOR: 'property-integrator',
  AI_IMPLEMENTATION_AGENT: 'ai-implementation-agent',
  LEGACY_MIGRATION_TEAM: 'team-migrating-legacy-capabilities'
});

export const ADOPTION_VALUE_PROPOSITIONS = Object.freeze({
  FASTER_ONBOARDING: 'faster-onboarding',
  ARCHITECTURE_DISCOVERY: 'architecture-discovery',
  REDUCED_SETUP: 'reduced-setup',
  RELIABLE_BUILD_TEST: 'reliable-build-and-test',
  SECURE_DEFAULTS: 'secure-defaults',
  TRUSTED_ARTIFACTS: 'trusted-artifacts',
  EASIER_ENVIRONMENTS: 'easier-environments',
  SAFER_DELIVERY: 'safer-delivery',
  SERVICE_DISCOVERY: 'service-discovery',
  EVIDENCE_AUTOMATION: 'evidence-automation',
  BETTER_SUPPORT: 'better-support',
  LOWER_OPERATIONAL_RISK: 'lower-operational-risk'
});

export const ONBOARDING_FIELDS = Object.freeze({
  IDENTITY_ACCESS: 'identity-and-access',
  ARCHITECTURE_ORIENTATION: 'architecture-orientation',
  PLATFORM_TERMINOLOGY: 'platform-terminology',
  PAVED_PATHS_TEMPLATES: 'paved-paths-and-templates',
  GUIDED_FIRST_TASK: 'guided-first-task',
  BUILD_TEST: 'build-and-test',
  ENVIRONMENT_DELIVERY: 'environment-and-delivery',
  SECURITY_GOVERNANCE: 'security-and-governance',
  OPERATIONS_SUPPORT: 'operations-and-support',
  AI_AGENT_RESPONSIBILITIES: 'ai-agent-responsibilities-where-applicable'
});

export const MIGRATION_FIELDS = Object.freeze({
  CURRENT_STATE_ASSESSMENT: 'current-state-assessment',
  TARGET_PATH_VERSION: 'target-path-and-version',
  ARCHITECTURE_IMPACT: 'architecture-impact',
  DEPENDENCY_ANALYSIS: 'dependency-analysis',
  SECURITY_GOVERNANCE_IMPACT: 'security-and-governance-impact',
  DATA_TENANT_IMPACT: 'data-and-tenant-impact',
  COMPATIBILITY: 'compatibility',
  MIGRATION_TOOLING: 'migration-tooling',
  VALIDATION: 'validation',
  ROLLBACK: 'rollback',
  SUPPORT: 'support',
  EVIDENCE: 'evidence'
});

export const ENABLEMENT_CHANNELS = Object.freeze({
  ROLE_BASED_ONBOARDING: 'role-based-onboarding',
  GUIDED_LABS: 'guided-labs',
  ARCHITECTURE_WORKSHOPS: 'architecture-workshops',
  PAVED_PATH_EXAMPLES: 'paved-path-examples',
  SECURITY_PRIVACY: 'security-and-privacy',
  OPERATIONS: 'operations',
  AI_AGENT_USE: 'ai-agent-use',
  MIGRATION: 'migration',
  TROUBLESHOOTING: 'advanced-troubleshooting',
  OFFICE_HOURS: 'office-hours',
  COMMUNITIES_OF_PRACTICE: 'communities-of-practice',
  MIGRATION_CLINICS: 'migration-clinics'
});

export const FEEDBACK_SOURCES = Object.freeze({
  DEVELOPERS: 'developers',
  AI_AGENTS: 'ai-agents',
  SERVICE_OWNERS: 'service-owners',
  ARCHITECTS: 'architects',
  OPERATIONS: 'operations',
  SECURITY_GOVERNANCE: 'security-and-governance',
  TENANTS: 'tenants',
  PROPERTY_INTEGRATORS: 'property-integrators',
  SUPPORT: 'support',
  INCIDENTS_PROBLEMS: 'incidents-and-problems',
  PLATFORM_TELEMETRY: 'platform-telemetry',
  PRODUCTION_OUTCOMES: 'production-outcomes'
});

export const AI_AGENT_OUTCOME_FIELDS = Object.freeze({
  TASK_SUCCESS: 'task-success',
  VALIDATION_SUCCESS: 'validation-success',
  STOP_CONDITION_USE: 'stop-condition-use',
  HUMAN_INTERVENTION: 'human-intervention',
  SCOPE_VIOLATIONS: 'scope-violations',
  REWORK: 'rework',
  TEST_QUALITY: 'test-quality',
  SECURITY_FINDINGS: 'security-findings',
  COST_DURATION: 'cost-and-duration',
  TOOL_FAILURES: 'tool-failures',
  DEVELOPER_SATISFACTION: 'developer-satisfaction'
});

export const PRODUCTIVITY_FIELDS = Object.freeze({
  TIME_TO_AUTHORIZED_ACCESS: 'time-to-authorized-access',
  TIME_TO_FIRST_TASK: 'time-to-first-successful-task',
  TIME_TO_COMPLIANT_SERVICE: 'time-to-create-a-compliant-service',
  FEEDBACK_LATENCY: 'feedback-latency',
  CHANGE_LEAD_TIME: 'change-lead-time',
  DELIVERY_SUCCESS: 'delivery-success',
  CHANGE_FAILURE: 'change-failure',
  RECOVERY_TIME: 'recovery-time',
  COGNITIVE_LOAD: 'cognitive-load',
  SUPPORT_DEMAND: 'support-demand',
  UPGRADE_EFFORT: 'upgrade-effort',
  OPERATIONAL_READINESS: 'operational-readiness-attainment'
});

export const PLATFORM_VALUE_FIELDS = Object.freeze({
  REDUCED_DUPLICATION: 'reduced-duplicated-engineering',
  REDUCED_SETUP: 'reduced-setup-effort',
  FASTER_SAFE_DELIVERY: 'faster-safe-delivery',
  FEWER_DEFECTS: 'fewer-defects',
  FEWER_SECURITY_FINDINGS: 'fewer-security-findings',
  BETTER_ARTIFACT_TRUST: 'better-artifact-trust',
  FASTER_RECOVERY: 'faster-recovery',
  BETTER_SERVICE_OWNERSHIP: 'better-service-ownership',
  BETTER_TENANT_ISOLATION: 'better-tenant-isolation',
  LOWER_SUPPORT_BURDEN: 'lower-support-burden',
  LOWER_TOTAL_COST: 'lower-total-cost',
  IMPROVED_GUEST_PROPERTY_OUTCOMES: 'improved-guest-and-property-outcomes'
});

export const ADOPTION_MEASURES = Object.freeze({
  AWARENESS: 'awareness',
  ONBOARDING_COMPLETION: 'onboarding-completion',
  TIME_TO_FIRST_TASK: 'time-to-first-task',
  ACTIVE_TEAMS: 'active-teams',
  PAVED_PATH_ADOPTION: 'paved-path-eligibility-and-adoption',
  SUCCESSFUL_SELF_SERVICE: 'successful-self-service',
  UPGRADE_ADOPTION: 'upgrade-adoption',
  MIGRATION_PROGRESS: 'migration-progress',
  ESCAPE_PATH_DEMAND: 'escape-path-demand',
  CHURN: 'churn',
  SATISFACTION: 'satisfaction',
  SUPPORT_DEMAND: 'support-demand',
  DOCUMENTATION_SUCCESS: 'documentation-success',
  PRODUCTION_OUTCOMES: 'production-outcomes'
});

export const OPERATIONAL_MEASURES = Object.freeze({
  AVAILABILITY: 'availability',
  JOURNEY_SUCCESS: 'journey-success',
  QUEUE_TIME: 'queue-time',
  INCIDENT_IMPACT: 'incident-count-and-impact',
  RECOVERY_TIME: 'recovery-time',
  PROBLEM_RECURRENCE: 'problem-recurrence',
  CHANGE_SUCCESS: 'change-success',
  CAPACITY_SATURATION: 'capacity-saturation',
  COST: 'cost',
  SECURITY_FINDINGS: 'security-findings',
  EVIDENCE_AVAILABILITY: 'evidence-availability',
  CONTINUITY_TEST_SUCCESS: 'continuity-test-success',
  SUPPLIER_IMPACT: 'supplier-impact',
  TENANT_PROPERTY_IMPACT: 'tenant-and-property-impact'
});

export const ROADMAP_DECISION_FACTORS = Object.freeze({
  USER_VALUE: 'user-value',
  ARCHITECTURE: 'architecture',
  OPERATIONAL_RISK: 'operational-risk',
  SECURITY_GOVERNANCE: 'security-and-governance',
  ADOPTION_BARRIERS: 'adoption-barriers',
  SUPPORT_DEMAND: 'support-demand',
  INCIDENTS: 'incidents',
  TECHNICAL_DEBT: 'technical-debt',
  SUPPLIER_LIFECYCLE: 'supplier-lifecycle',
  TENANT_PROPERTY_SCALE: 'tenant-and-property-scale',
  COST: 'cost',
  FUTURE_ARCHITECTURE: 'future-architecture'
});

export const BACKLOG_ITEM_FIELDS = Object.freeze({
  USER_OPERATIONAL_PROBLEM: 'user-or-operational-problem',
  EVIDENCE: 'evidence',
  PERSONAS_JOURNEYS: 'affected-personas-and-journeys',
  BUSINESS_IMPACT: 'business-impact',
  RISK: 'risk',
  ARCHITECTURE_RELATIONSHIP: 'architecture-relationship',
  PROPOSED_OUTCOME: 'proposed-outcome',
  OWNER: 'owner',
  PRIORITY: 'priority',
  MEASURE: 'measure'
});

export const OPERATIONS_ADOPTION_GOVERNANCE_AREAS = Object.freeze({
  PRODUCT_SERVICE_OWNERSHIP: 'product-and-service-ownership',
  OPERATING_MODEL: 'operating-model',
  SERVICE_COMMITMENTS: 'service-commitments',
  INCIDENT_PROBLEM_INTEGRATION: 'incident-and-problem-integration',
  CHANGE_CONTINUITY: 'change-and-continuity',
  CAPACITY_COST: 'capacity-and-cost',
  SUPPORT: 'support',
  ADOPTION_STRATEGY: 'adoption-strategy',
  USER_RESEARCH: 'user-research',
  METRICS: 'metrics',
  ROADMAP: 'roadmap',
  PAVED_PATH_LIFECYCLE: 'paved-path-lifecycle',
  DEPRECATION: 'deprecation',
  EVIDENCE: 'evidence',
  IMPROVEMENT: 'improvement'
});

export const OPERATIONS_ADOPTION_MATURITY_LEVELS = Object.freeze({
  TOOL_COLLECTION: 'tool-collection',
  OWNED: 'owned',
  RELIABLE: 'reliable',
  GOVERNED: 'governed',
  MEASURED: 'measured',
  ADAPTIVE: 'adaptive'
});

export const OPERATIONS_ADOPTION_ANTI_PATTERNS = Object.freeze({
  UNOWNED_TOOL_COLLECTION: 'treating-the-platform-as-an-unowned-tool-collection',
  TOOL_UPTIME_ONLY: 'measuring-only-tool-uptime',
  ADOPTION_BY_ACCESS: 'assuming-adoption-because-access-exists',
  UNRELIABLE_MANDATED_PATHS: 'mandating-paths-that-are-unreliable-or-unsupported',
  PLATFORM_OWNS_APP_INCIDENTS: 'platform-teams-owning-every-application-incident',
  OPERABILITY_IGNORED: 'capability-owners-ignoring-operability',
  SINGLE_PORTAL_RECOVERY: 'critical-recovery-available-only-through-one-portal',
  HIDDEN_DEGRADATION: 'hidden-degradation-or-stale-status',
  ALERTS_WITHOUT_IMPACT: 'alerting-without-user-or-business-impact',
  AVERAGE_LOAD_CAPACITY: 'capacity-planning-based-only-on-average-load',
  CONTROL_REMOVING_COST_CUTS: 'cost-reduction-that-removes-required-controls',
  SUPPORT_NO_KNOWLEDGE: 'support-cases-resolved-without-improving-knowledge',
  PAVED_PATH_NO_LIFECYCLE: 'paved-paths-without-upgrade-and-deprecation',
  MIGRATION_NO_ROLLBACK: 'legacy-migration-without-rollback-or-support',
  USAGE_COUNT_ADOPTION: 'adoption-measured-only-by-usage-count',
  CODE_COMMIT_PRODUCTIVITY: 'developer-productivity-measured-by-code-or-commit-volume',
  AI_AUTONOMY_VOLUME: 'ai-agent-success-measured-by-autonomous-action-volume',
  TELEMETRY_SURVEILLANCE: 'telemetry-used-for-individual-surveillance',
  FEATURES_OVER_RELIABILITY: 'new-features-prioritized-over-chronic-reliability-issues',
  DEPRECATION_NO_MIGRATION: 'deprecation-without-migration',
  HIDDEN_TENANT_PROPERTY_IMPACT: 'tenant-and-property-impact-hidden-in-global-metrics'
});

export const OPERATIONS_ADOPTION_ARCHITECTURAL_RULES = Object.freeze({
  PRODUCTION_INTERNAL_PRODUCT: 'be-operated-as-a-production-internal-product',
  EXPLICIT_OWNERSHIP: 'have-explicit-product-architecture-capability-service-support-security-and-cost-ownership',
  CRITICALITY_COMMITMENTS: 'define-service-commitments-by-capability-criticality',
  OUTCOME_CONNECTED_HEALTH: 'connect-platform-health-to-developer-delivery-recovery-tenant-property-and-production-outcomes',
  INTEGRATED_OPERATIONS: 'integrate-command-and-control-incidents-problems-changes-capacity-security-and-continuity',
  ALTERNATE_CRITICAL_PATHS: 'preserve-critical-alternate-paths-during-portal-or-convenience-feature-failure',
  CONTEXTUAL_SUPPORT_KNOWLEDGE: 'provide-contextual-support-and-durable-knowledge',
  OWNED_PAVED_PATH_LIFECYCLES: 'operate-paved-paths-templates-and-platform-contracts-through-owned-lifecycles',
  PROTECTED_RECOVERY_CAPACITY: 'protect-capacity-for-remediation-rollback-and-recovery',
  GOVERN_SUPPLIERS_COST_EVIDENCE_DEBT: 'govern-suppliers-cost-evidence-and-technical-debt',
  ADOPTION_AS_JOURNEY: 'treat-adoption-as-a-user-journey-and-product-outcome',
  ONBOARDING_MIGRATION_TRAINING_DEPRECATION: 'provide-onboarding-migration-training-communication-and-deprecation',
  SAFE_VALUE_METRICS: 'measure-safe-value-rather-than-activity-volume',
  AI_OUTCOME_METRICS: 'measure-ai-agent-quality-intervention-and-stop-behavior',
  DEVELOPER_PRIVACY: 'protect-developer-privacy',
  TENANT_PROPERTY_VISIBILITY: 'preserve-tenant-and-property-impact-visibility',
  FEEDBACK_PRIORITIZED_IMPROVEMENT: 'use-research-feedback-incidents-and-evidence-to-prioritize-improvement',
  BALANCE_GROWTH_RELIABILITY_RETIREMENT: 'balance-capability-growth-with-reliability-and-retirement',
  VENDOR_NEUTRAL_TECH_INDEPENDENT: 'preserve-vendor-neutrality-and-technology-independence'
});

export const FUTURE_OPERATIONS_ADOPTION_CAPABILITIES = Object.freeze({
  PREDICTIVE_JOURNEY_IMPACT: 'predictive-journey-impact-detection',
  SUPPLIER_IMPACT_ANALYSIS: 'automated-dependency-and-supplier-impact-analysis',
  INTENT_AWARE_SUPPORT: 'intent-aware-support',
  AI_INCIDENT_DIAGNOSIS: 'ai-assisted-incident-diagnosis',
  SELF_HEALING_INFRASTRUCTURE: 'self-healing-platform-infrastructure',
  PREDICTIVE_CAPACITY_COST: 'predictive-capacity-and-cost-optimization',
  CONTINUOUS_RECOVERY_VALIDATION: 'continuous-recovery-validation',
  PERSONALIZED_ONBOARDING: 'personalized-onboarding',
  ADAPTIVE_TRAINING: 'adaptive-training',
  SEMANTIC_SUPPORT_KNOWLEDGE: 'semantic-support-knowledge',
  AUTOMATED_MIGRATION_ASSESSMENT: 'automated-paved-path-migration-assessment',
  TENANT_PROPERTY_SIMULATION: 'cross-tenant-and-property-impact-simulation',
  PLATFORM_DIGITAL_TWINS: 'platform-digital-twins',
  MULTI_AGENT_OPERATIONS: 'multi-agent-operations-coordination',
  GOVERNED_AUTONOMOUS_REMEDIATION: 'governed-autonomous-low-risk-remediation'
});
