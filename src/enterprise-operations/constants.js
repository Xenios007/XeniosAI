export const ENTERPRISE_OPERATIONS_ERROR_CODES = Object.freeze({
  ENTERPRISE_OPERATIONS_INVALID: 'ENTERPRISE_OPERATIONS_INVALID',
  ENTERPRISE_OPERATIONS_OVERVIEW_INVALID: 'ENTERPRISE_OPERATIONS_OVERVIEW_INVALID',
  ENTERPRISE_OPERATING_MODEL_INVALID: 'ENTERPRISE_OPERATING_MODEL_INVALID',
  OPERATIONS_COMMAND_CONTROL_INVALID: 'OPERATIONS_COMMAND_CONTROL_INVALID',
  SERVICE_OPERATIONS_INVALID: 'SERVICE_OPERATIONS_INVALID',
  INCIDENT_PROBLEM_MANAGEMENT_INVALID: 'INCIDENT_PROBLEM_MANAGEMENT_INVALID',
  CHANGE_RELEASE_OPERATIONS_INVALID: 'CHANGE_RELEASE_OPERATIONS_INVALID',
  CAPACITY_PERFORMANCE_MANAGEMENT_INVALID: 'CAPACITY_PERFORMANCE_MANAGEMENT_INVALID',
  CONTINUITY_RESILIENCE_OPERATIONS_INVALID: 'CONTINUITY_RESILIENCE_OPERATIONS_INVALID',
  OPERATIONS_GOVERNANCE_INVALID: 'OPERATIONS_GOVERNANCE_INVALID',
  FUTURE_OPERATIONS_EVOLUTION_INVALID: 'FUTURE_OPERATIONS_EVOLUTION_INVALID'
});

export const ENTERPRISE_OPERATIONS_OBJECTIVES = Object.freeze({
  RELIABLE_BUSINESS_AND_PLATFORM_OPERATIONS: 'reliable-business-and-platform-operations',
  UNIFIED_OPERATIONAL_CONTROL: 'unified-operational-control',
  CLEAR_OWNERSHIP_AND_ACCOUNTABILITY: 'clear-ownership-and-accountability',
  PREDICTABLE_SERVICE_QUALITY: 'predictable-service-quality',
  FAST_COORDINATED_DISRUPTION_RESPONSE: 'fast-coordinated-disruption-response',
  CONTROLLED_OPERATIONAL_CHANGE: 'controlled-operational-change',
  CONTINUOUS_AVAILABILITY: 'continuous-availability',
  SCALABLE_MULTI_PROPERTY_MULTI_TENANT_OPERATIONS: 'scalable-multi-property-multi-tenant-operations',
  POLICY_DRIVEN_AUTOMATION_WITH_HUMAN_OVERSIGHT: 'policy-driven-automation-with-human-oversight',
  MEASURABLE_OPERATIONAL_HEALTH: 'measurable-operational-health',
  CONTINUOUS_OPERATIONAL_LEARNING: 'continuous-operational-learning',
  TECHNOLOGY_INDEPENDENT_OPERATIONAL_CAPABILITIES: 'technology-independent-operational-capabilities'
});

export const ENTERPRISE_OPERATIONS_PRINCIPLES = Object.freeze({
  BUSINESS_FIRST_OPERATIONS: 'business-first-operations',
  ONE_ENTERPRISE_OPERATING_MODEL: 'one-enterprise-operating-model',
  OPERATIONS_BY_DESIGN: 'operations-by-design',
  OBSERVABLE_AND_ACTIONABLE_OPERATIONS: 'observable-and-actionable-operations',
  AUTOMATION_WITH_ACCOUNTABILITY: 'automation-with-accountability',
  SERVICE_OWNERSHIP: 'service-ownership',
  RESILIENCE_OVER_REACTION: 'resilience-over-reaction',
  TENANT_AND_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  POLICY_DRIVEN_CONTROL: 'policy-driven-control',
  TECHNOLOGY_INDEPENDENCE: 'technology-independence'
});

export const ENTERPRISE_OPERATIONS_DOMAINS = Object.freeze({
  BUSINESS_OPERATIONS: 'business-operations',
  PLATFORM_OPERATIONS: 'platform-operations',
  SERVICE_OPERATIONS: 'service-operations',
  AI_OPERATIONS: 'ai-operations',
  WORKFLOW_OPERATIONS: 'workflow-operations',
  INTEGRATION_OPERATIONS: 'integration-operations',
  DATA_OPERATIONS: 'data-operations',
  SECURITY_OPERATIONS: 'security-operations',
  PROPERTY_OPERATIONS: 'property-operations'
});

export const OPERATIONAL_CONTROL_LOOP_STAGES = Object.freeze({
  OBSERVE: 'Observe',
  ASSESS: 'Assess',
  PRIORITIZE: 'Prioritize',
  DECIDE: 'Decide',
  ACT: 'Act',
  VERIFY: 'Verify',
  LEARN: 'Learn',
  IMPROVE: 'Improve'
});

export const OPERATIONAL_COMMAND_CONTROL_CAPABILITIES = Object.freeze({
  BUSINESS_AND_TECHNICAL_IMPACT_ASSESSMENT: 'business-and-technical-impact-assessment',
  OPERATIONAL_PRIORITIZATION: 'operational-prioritization',
  OWNERSHIP_ASSIGNMENT: 'ownership-assignment',
  CROSS_DOMAIN_COORDINATION: 'cross-domain-coordination',
  ESCALATION_MANAGEMENT: 'escalation-management',
  DECISION_LOGGING: 'decision-logging',
  STAKEHOLDER_COMMUNICATION: 'stakeholder-communication',
  RECOVERY_COORDINATION: 'recovery-coordination',
  OPERATIONAL_EVIDENCE: 'operational-evidence',
  POST_EVENT_LEARNING: 'post-event-learning'
});

export const ENTERPRISE_OPERATIONS_RELATIONSHIP_STAGES = Object.freeze({
  SYSTEM_OVERVIEW: 'ARCH-001 System Overview',
  PLATFORM_LAYERS: 'ARCH-002 Platform Layers',
  SERVICE_ARCHITECTURE: 'ARCH-003 Service Architecture',
  AI_ORCHESTRATOR: 'ARCH-004 AI Orchestrator',
  DATA_FLOW: 'ARCH-005 Data Flow',
  DOMAIN_MODEL: 'ARCH-006 Domain Model',
  DEPLOYMENT: 'ARCH-007 Deployment',
  SECURITY: 'ARCH-008 Security',
  INTEGRATION: 'ARCH-009 Integration',
  OBSERVABILITY: 'ARCH-010 Observability',
  ENTERPRISE_OPERATIONS: 'ARCH-011 Enterprise Operations'
});

export const ENTERPRISE_OPERATIONS_CHAPTERS = Object.freeze({
  ENTERPRISE_OPERATIONS_OVERVIEW: '01-enterprise-operations-overview.md',
  OPERATING_MODEL: '02-operating-model.md',
  OPERATIONS_COMMAND_AND_CONTROL: '03-operations-command-and-control.md',
  SERVICE_OPERATIONS: '04-service-operations.md',
  INCIDENT_AND_PROBLEM_MANAGEMENT: '05-incident-and-problem-management.md',
  CHANGE_AND_RELEASE_OPERATIONS: '06-change-and-release-operations.md',
  CAPACITY_AND_PERFORMANCE_MANAGEMENT: '07-capacity-and-performance-management.md',
  CONTINUITY_AND_RESILIENCE_OPERATIONS: '08-continuity-and-resilience-operations.md',
  OPERATIONS_GOVERNANCE: '09-operations-governance.md',
  FUTURE_OPERATIONS_EVOLUTION: '10-future-operations-evolution.md'
});

export const ENTERPRISE_OPERATIONS_EXPECTED_OUTCOMES = Object.freeze({
  CONSISTENT_ENTERPRISE_AND_PROPERTY_OPERATIONS: 'consistent-enterprise-and-property-operations',
  RELIABLE_BUSINESS_CAPABILITY_EXECUTION: 'reliable-business-capability-execution',
  CLEAR_OPERATIONAL_ACCOUNTABILITY: 'clear-operational-accountability',
  COORDINATED_RESPONSE: 'coordinated-response',
  REDUCED_DISRUPTION_AND_RECOVERY_TIME: 'reduced-disruption-and-recovery-time',
  CONTROLLED_AUDITABLE_CHANGE: 'controlled-auditable-change',
  SCALABLE_PROPERTY_OPERATIONS: 'scalable-property-operations',
  SAFE_AI_AND_WORKFLOW_SUPERVISION: 'safe-ai-and-workflow-supervision',
  STRONG_OPERATIONAL_RESILIENCE: 'strong-operational-resilience',
  BETTER_AUTOMATION_USE: 'better-automation-use',
  CONTINUOUS_OPERATIONAL_LEARNING: 'continuous-operational-learning',
  LONG_TERM_PLATFORM_SUSTAINABILITY: 'long-term-platform-sustainability'
});

export const ENTERPRISE_OPERATIONS_SCOPE_EXCLUSIONS = Object.freeze({
  IMPLEMENTATION_TECHNOLOGIES: 'implementation-technologies',
  SERVICE_MANAGEMENT_PRODUCTS: 'service-management-products',
  ORCHESTRATION_PLATFORMS: 'orchestration-platforms',
  MONITORING_VENDORS: 'monitoring-vendors',
  TICKETING_SYSTEMS: 'ticketing-systems',
  DEPLOYMENT_TOOLS: 'deployment-tools',
  INFRASTRUCTURE_PROVIDERS: 'infrastructure-providers',
  ORGANIZATIONAL_CHARTS: 'organizational-charts',
  IMPLEMENTATION_RUNBOOKS: 'implementation-runbooks',
  PROPERTY_SPECIFIC_PROCEDURES: 'property-specific-procedures'
});

export const ENTERPRISE_OPERATIONS_OVERVIEW_OBJECTIVES = Object.freeze({
  RELIABLE_BUSINESS_AND_PLATFORM_EXECUTION: 'reliable-business-and-platform-execution',
  CONSISTENT_OPERATIONAL_PRACTICES: 'consistent-operational-practices',
  CLEAR_ACCOUNTABILITY: 'clear-accountability',
  END_TO_END_OPERATIONAL_VISIBILITY: 'end-to-end-operational-visibility',
  COORDINATED_COMMAND_AND_CONTROL: 'coordinated-command-and-control',
  PREDICTABLE_SERVICE_QUALITY: 'predictable-service-quality',
  EFFECTIVE_INCIDENT_AND_PROBLEM_MANAGEMENT: 'effective-incident-and-problem-management',
  CONTROLLED_CHANGE_AND_RELEASE_ACTIVITY: 'controlled-change-and-release-activity',
  OPERATIONAL_RESILIENCE_AND_CONTINUITY: 'operational-resilience-and-continuity',
  SCALABLE_MULTI_TENANT_MULTI_PROPERTY_OPERATIONS: 'scalable-multi-tenant-multi-property-operations',
  SAFE_OPERATIONAL_AUTOMATION: 'safe-operational-automation',
  MEASURABLE_OPERATIONAL_PERFORMANCE: 'measurable-operational-performance',
  CONTINUOUS_OPERATIONAL_LEARNING: 'continuous-operational-learning',
  VENDOR_NEUTRAL_OPERATIONAL_CAPABILITIES: 'vendor-neutral-operational-capabilities'
});

export const ENTERPRISE_OPERATIONS_LANDSCAPE_STAGES = Object.freeze({
  ENTERPRISE_OBJECTIVES: 'Enterprise Objectives',
  BUSINESS_AND_GUEST_OUTCOMES: 'Business and Guest Outcomes',
  BUSINESS_CAPABILITIES_AND_PROPERTY_OPERATIONS: 'Business Capabilities and Property Operations',
  SERVICES_AI_WORKFLOWS_DATA_AND_INTEGRATIONS: 'Services, AI Agents, Workflows, Data, and Integrations',
  PLATFORM_AND_DEPLOYMENT_CAPABILITIES: 'Platform and Deployment Capabilities',
  OPERATIONAL_EVIDENCE: 'Operational Evidence',
  OPERATIONAL_DECISIONS_AND_ACTIONS: 'Operational Decisions and Actions',
  VERIFIED_OUTCOMES_AND_IMPROVEMENT: 'Verified Outcomes and Improvement'
});

export const ENTERPRISE_OPERATIONS_CAPABILITY_GROUPS = Object.freeze({
  DIRECT: 'direct',
  OPERATE: 'operate',
  PROTECT: 'protect',
  CHANGE: 'change',
  IMPROVE: 'improve'
});

export const ENTERPRISE_OPERATIONS_DIRECT_CAPABILITIES = Object.freeze({
  OPERATIONAL_STRATEGY: 'operational-strategy',
  COMMAND_AND_CONTROL: 'command-and-control',
  PRIORITY_MANAGEMENT: 'priority-management',
  DECISION_AUTHORITY: 'decision-authority',
  ESCALATION: 'escalation',
  STAKEHOLDER_COORDINATION: 'stakeholder-coordination'
});

export const ENTERPRISE_OPERATIONS_OPERATE_CAPABILITIES = Object.freeze({
  BUSINESS_OPERATIONS: 'business-operations',
  PROPERTY_OPERATIONS: 'property-operations',
  SERVICE_OPERATIONS: 'service-operations',
  AI_OPERATIONS: 'ai-operations',
  WORKFLOW_OPERATIONS: 'workflow-operations',
  INTEGRATION_OPERATIONS: 'integration-operations',
  DATA_OPERATIONS: 'data-operations',
  PLATFORM_OPERATIONS: 'platform-operations'
});

export const ENTERPRISE_OPERATIONS_PROTECT_CAPABILITIES = Object.freeze({
  EVENT_MANAGEMENT: 'event-management',
  INCIDENT_MANAGEMENT: 'incident-management',
  PROBLEM_MANAGEMENT: 'problem-management',
  SECURITY_OPERATIONS: 'security-operations',
  AVAILABILITY_MANAGEMENT: 'availability-management',
  CONTINUITY_MANAGEMENT: 'continuity-management',
  RECOVERY_COORDINATION: 'recovery-coordination'
});

export const ENTERPRISE_OPERATIONS_CHANGE_CAPABILITIES = Object.freeze({
  CHANGE_ASSESSMENT: 'change-assessment',
  RELEASE_COORDINATION: 'release-coordination',
  OPERATIONAL_READINESS: 'operational-readiness',
  CONFIGURATION_CONTROL: 'configuration-control',
  DEPLOYMENT_COORDINATION: 'deployment-coordination',
  CHANGE_VERIFICATION: 'change-verification',
  ROLLBACK_AND_RECOVERY: 'rollback-and-recovery'
});

export const ENTERPRISE_OPERATIONS_IMPROVE_CAPABILITIES = Object.freeze({
  PERFORMANCE_MANAGEMENT: 'performance-management',
  CAPACITY_PLANNING: 'capacity-planning',
  OPERATIONAL_REVIEW: 'operational-review',
  ROOT_CAUSE_LEARNING: 'root-cause-learning',
  AUTOMATION_IMPROVEMENT: 'automation-improvement',
  SERVICE_IMPROVEMENT: 'service-improvement',
  OPERATIONAL_MATURITY_MANAGEMENT: 'operational-maturity-management'
});

export const ENTERPRISE_OPERATIONS_ACTOR_TYPES = Object.freeze({
  HUMAN: 'human',
  AUTOMATED: 'automated'
});

export const ENTERPRISE_OPERATIONS_HUMAN_ACTORS = Object.freeze({
  ENTERPRISE_OPERATIONS_LEADERS: 'enterprise-operations-leaders',
  BUSINESS_CAPABILITY_OWNERS: 'business-capability-owners',
  PROPERTY_OPERATORS: 'property-operators',
  SERVICE_OWNERS: 'service-owners',
  PRODUCT_OWNERS: 'product-owners',
  PLATFORM_OPERATORS: 'platform-operators',
  AI_OPERATIONS_SPECIALISTS: 'ai-operations-specialists',
  WORKFLOW_OWNERS: 'workflow-owners',
  INTEGRATION_OWNERS: 'integration-owners',
  DATA_STEWARDS: 'data-stewards',
  SECURITY_OPERATORS: 'security-operators',
  INCIDENT_COMMANDERS: 'incident-commanders',
  CHANGE_AUTHORITIES: 'change-authorities',
  SUPPORT_TEAMS: 'support-teams',
  EXTERNAL_PARTNERS: 'external-partners'
});

export const ENTERPRISE_OPERATIONS_AUTOMATED_ACTORS = Object.freeze({
  MONITORING_AND_OBSERVABILITY_CAPABILITIES: 'monitoring-and-observability-capabilities',
  POLICY_ENGINES: 'policy-engines',
  AI_AGENTS: 'ai-agents',
  WORKFLOW_ENGINES: 'workflow-engines',
  AUTOMATION_SERVICES: 'automation-services',
  SCHEDULERS: 'schedulers',
  RECOVERY_CONTROLLERS: 'recovery-controllers',
  NOTIFICATION_SERVICES: 'notification-services',
  DEPLOYMENT_CONTROLLERS: 'deployment-controllers',
  CAPACITY_CONTROLLERS: 'capacity-controllers'
});

export const ENTERPRISE_OPERATIONS_RESPONSIBILITY_TYPES = Object.freeze({
  ACCOUNTABILITY: 'accountability',
  DECISION_AUTHORITY: 'decision-authority',
  EXECUTION_RESPONSIBILITY: 'execution-responsibility',
  CONSULTATION: 'consultation',
  NOTIFICATION: 'notification',
  EVIDENCE_OWNERSHIP: 'evidence-ownership',
  RISK_ACCEPTANCE: 'risk-acceptance',
  ESCALATION_RESPONSIBILITY: 'escalation-responsibility'
});

export const ENTERPRISE_OPERATIONS_INFORMATION_TYPES = Object.freeze({
  BUSINESS_IMPACT: 'business-impact',
  GUEST_IMPACT: 'guest-impact',
  PROPERTY_IMPACT: 'property-impact',
  TENANT_IMPACT: 'tenant-impact',
  SERVICE_HEALTH: 'service-health',
  WORKFLOW_STATE: 'workflow-state',
  AI_ACTIVITY: 'ai-activity',
  INTEGRATION_STATE: 'integration-state',
  DATA_CONDITION: 'data-condition',
  SECURITY_CONDITION: 'security-condition',
  DEPENDENCY_HEALTH: 'dependency-health',
  SERVICE_COMMITMENTS: 'service-commitments',
  OPERATIONAL_RISK: 'operational-risk',
  INCIDENT_STATE: 'incident-state',
  CHANGE_STATE: 'change-state',
  RECOVERY_STATE: 'recovery-state',
  DECISION_RECORDS: 'decision-records',
  ACTION_HISTORY: 'action-history',
  VERIFICATION_EVIDENCE: 'verification-evidence'
});

export const ENTERPRISE_OPERATIONS_CONTROL_FLOW_STAGES = Object.freeze({
  OBSERVE: 'Observe',
  CONTEXTUALIZE: 'Contextualize',
  ASSESS_IMPACT_AND_RISK: 'Assess Impact and Risk',
  PRIORITIZE: 'Prioritize',
  ASSIGN_OWNERSHIP: 'Assign Ownership',
  DECIDE: 'Decide',
  ACT: 'Act',
  VERIFY: 'Verify',
  COMMUNICATE: 'Communicate',
  LEARN_AND_IMPROVE: 'Learn and Improve'
});

export const ENTERPRISE_OPERATIONS_OPERATIONAL_STATES = Object.freeze({
  NORMAL: 'normal',
  AT_RISK: 'at-risk',
  DEGRADED: 'degraded',
  DISRUPTED: 'disrupted',
  CONTAINED: 'contained',
  RECOVERING: 'recovering',
  RESTORED: 'restored',
  UNDER_OBSERVATION: 'under-observation',
  CLOSED: 'closed',
  IMPROVEMENT_REQUIRED: 'improvement-required'
});

export const ENTERPRISE_OPERATIONS_PRIORITY_FACTORS = Object.freeze({
  BUSINESS_CRITICALITY: 'business-criticality',
  GUEST_IMPACT: 'guest-impact',
  REVENUE_IMPACT: 'revenue-impact',
  PROPERTY_IMPACT: 'property-impact',
  TENANT_SCOPE: 'tenant-scope',
  SERVICE_SCOPE: 'service-scope',
  SECURITY_RISK: 'security-risk',
  COMPLIANCE_RISK: 'compliance-risk',
  DATA_RISK: 'data-risk',
  DURATION: 'duration',
  RECOVERABILITY: 'recoverability',
  TIME_SENSITIVITY: 'time-sensitivity',
  AVAILABILITY_OF_ALTERNATIVES: 'availability-of-alternatives'
});

export const ENTERPRISE_OPERATIONS_HIGH_IMPACT_DECISION_REQUIREMENTS = Object.freeze({
  HUMAN_APPROVAL: 'human-approval',
  MULTIPLE_ROLE_AUTHORIZATION: 'multiple-role-authorization',
  BUSINESS_OWNER_PARTICIPATION: 'business-owner-participation',
  SECURITY_REVIEW: 'security-review',
  CHANGE_AUTHORITY: 'change-authority',
  EXECUTIVE_ESCALATION: 'executive-escalation',
  TENANT_OR_PROPERTY_COMMUNICATION: 'tenant-or-property-communication'
});

export const ENTERPRISE_OPERATIONS_ESCALATION_TRIGGERS = Object.freeze({
  INCREASING_BUSINESS_IMPACT: 'increasing-business-impact',
  MISSED_RESPONSE_OBJECTIVES: 'missed-response-objectives',
  UNCLEAR_OWNERSHIP: 'unclear-ownership',
  FAILED_AUTOMATION: 'failed-automation',
  RECOVERY_FAILURE: 'recovery-failure',
  CROSS_DOMAIN_IMPACT: 'cross-domain-impact',
  SECURITY_IMPLICATIONS: 'security-implications',
  COMPLIANCE_OBLIGATIONS: 'compliance-obligations',
  EXTERNAL_DEPENDENCY_FAILURE: 'external-dependency-failure',
  NEED_FOR_GREATER_DECISION_AUTHORITY: 'need-for-greater-decision-authority'
});

export const ENTERPRISE_OPERATIONS_OPERATING_MODES = Object.freeze({
  NORMAL: 'normal-operations',
  DEGRADED: 'degraded-operations',
  CRISIS: 'crisis-operations'
});

export const ENTERPRISE_OPERATIONS_HUMAN_AUTOMATION_COLLABORATION_REQUIREMENTS = Object.freeze({
  CLEAR_ACTION_ATTRIBUTION: 'clear-action-attribution',
  POLICY_CONTROLLED_PERMISSIONS: 'policy-controlled-permissions',
  EXPLAINABLE_RECOMMENDATIONS: 'explainable-recommendations',
  CONFIDENCE_AND_RISK_AWARENESS: 'confidence-and-risk-awareness',
  APPROVAL_WHERE_REQUIRED: 'approval-where-required',
  SAFE_EXECUTION_BOUNDARIES: 'safe-execution-boundaries',
  VERIFICATION: 'verification',
  REVERSAL_OR_COMPENSATION: 'reversal-or-compensation',
  HUMAN_TAKEOVER: 'human-takeover',
  CONTINUOUS_LEARNING: 'continuous-learning'
});

export const ENTERPRISE_OPERATIONS_SCOPE_BOUNDARIES = Object.freeze({
  ENTERPRISE_WIDE_CONDITIONS: 'enterprise-wide-conditions',
  SHARED_PLATFORM_CONDITIONS: 'shared-platform-conditions',
  TENANT_SPECIFIC_CONDITIONS: 'tenant-specific-conditions',
  ORGANIZATION_SPECIFIC_CONDITIONS: 'organization-specific-conditions',
  PROPERTY_SPECIFIC_CONDITIONS: 'property-specific-conditions',
  CHANNEL_SPECIFIC_CONDITIONS: 'channel-specific-conditions',
  PARTNER_SPECIFIC_CONDITIONS: 'partner-specific-conditions'
});

export const ENTERPRISE_OPERATIONS_OVERVIEW_RELATIONSHIP_STAGES = Object.freeze({
  ARCHITECTURE_AND_POLICY: 'Architecture and Policy',
  BUSINESS_CAPABILITIES: 'Business Capabilities',
  SERVICES_AI_WORKFLOWS_DATA_AND_INTEGRATIONS: 'Services, AI, Workflows, Data, and Integrations',
  DEPLOYMENT_AND_SECURITY_CONTROLS: 'Deployment and Security Controls',
  OBSERVABILITY_AND_OPERATIONAL_EVIDENCE: 'Observability and Operational Evidence',
  ENTERPRISE_OPERATIONS: 'Enterprise Operations',
  GOVERNED_ACTION_AND_BUSINESS_OUTCOMES: 'Governed Action and Business Outcomes'
});

export const ENTERPRISE_OPERATIONS_QUALITY_ATTRIBUTES = Object.freeze({
  RELIABILITY: 'reliability',
  AVAILABILITY: 'availability',
  RESILIENCE: 'resilience',
  RECOVERABILITY: 'recoverability',
  SCALABILITY: 'scalability',
  SECURITY: 'security',
  ACCOUNTABILITY: 'accountability',
  TRACEABILITY: 'traceability',
  EXPLAINABILITY: 'explainability',
  MAINTAINABILITY: 'maintainability',
  OPERABILITY: 'operability',
  ADAPTABILITY: 'adaptability',
  EFFICIENCY: 'efficiency',
  BUSINESS_CONTINUITY: 'business-continuity'
});

export const ENTERPRISE_OPERATIONS_GOVERNANCE_FOUNDATIONS = Object.freeze({
  OPERATIONAL_POLICIES: 'operational-policies',
  SERVICE_OWNERSHIP: 'service-ownership',
  DECISION_AUTHORITY: 'decision-authority',
  AUTOMATION_PERMISSIONS: 'automation-permissions',
  CHANGE_CONTROL: 'change-control',
  INCIDENT_LEADERSHIP: 'incident-leadership',
  RISK_ACCEPTANCE: 'risk-acceptance',
  ESCALATION: 'escalation',
  EVIDENCE_RETENTION: 'evidence-retention',
  COMMUNICATION: 'communication',
  CONTINUITY_OBLIGATIONS: 'continuity-obligations',
  IMPROVEMENT_COMMITMENTS: 'improvement-commitments'
});

export const ENTERPRISE_OPERATIONS_OVERVIEW_ARCHITECTURAL_RULES = Object.freeze({
  BEGIN_WITH_BUSINESS_AND_GUEST_OUTCOMES: 'begin-with-business-and-guest-outcomes',
  DEFINE_ACCOUNTABLE_OPERATIONAL_OWNERSHIP: 'define-accountable-operational-ownership',
  COORDINATE_HUMAN_AND_AUTOMATED_ACTORS: 'coordinate-human-and-automated-actors',
  CONVERT_OBSERVABLE_EVIDENCE_INTO_GOVERNED_ACTION: 'convert-observable-evidence-into-governed-action',
  PRESERVE_TENANT_AND_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  SUPPORT_NORMAL_DEGRADED_AND_CRISIS_OPERATIONS: 'support-normal-degraded-and-crisis-operations',
  MAKE_DECISION_AUTHORITY_EXPLICIT: 'make-decision-authority-explicit',
  SCALE_ACROSS_SERVICES_TENANTS_AND_PROPERTIES: 'scale-across-services-tenants-and-properties',
  DESIGN_FOR_FAILURE_RECOVERY_AND_CONTINUITY: 'design-for-failure-recovery-and-continuity',
  VERIFY_OPERATIONAL_ACTION_OUTCOMES: 'verify-operational-action-outcomes',
  CAPTURE_OPERATIONAL_LEARNING: 'capture-operational-learning',
  PRESERVE_VENDOR_NEUTRALITY: 'preserve-vendor-neutrality',
  REMAIN_TECHNOLOGY_INDEPENDENT: 'remain-technology-independent'
});

export const FUTURE_ENTERPRISE_OPERATIONS_CAPABILITIES = Object.freeze({
  PREDICTIVE_OPERATIONS: 'predictive-operations',
  AUTONOMOUS_REMEDIATION: 'autonomous-remediation',
  AI_ASSISTED_INCIDENT_COMMAND: 'ai-assisted-incident-command',
  DYNAMIC_SERVICE_COMMITMENTS: 'dynamic-service-commitments',
  ADAPTIVE_CAPACITY_MANAGEMENT: 'adaptive-capacity-management',
  DIGITAL_OPERATIONAL_TWINS: 'digital-operational-twins',
  CROSS_PROPERTY_OPERATIONAL_OPTIMIZATION: 'cross-property-operational-optimization',
  SELF_IMPROVING_RUNBOOKS: 'self-improving-runbooks',
  SEMANTIC_OPERATIONAL_KNOWLEDGE: 'semantic-operational-knowledge',
  FEDERATED_ENTERPRISE_OPERATIONS: 'federated-enterprise-operations',
  POLICY_AWARE_AUTONOMOUS_AGENTS: 'policy-aware-autonomous-agents',
  BUSINESS_IMPACT_SIMULATION: 'business-impact-simulation'
});

export const ENTERPRISE_OPERATING_MODEL_OBJECTIVES = Object.freeze({
  CLEAR_ACCOUNTABILITY_FOR_OUTCOMES: 'clear-accountability-for-outcomes',
  CONSISTENT_ENTERPRISE_AND_PROPERTY_OPERATIONS: 'consistent-enterprise-and-property-operations',
  LOCAL_AUTONOMY_WITH_ENTERPRISE_GUARDRAILS: 'local-autonomy-with-enterprise-guardrails',
  RAPID_CROSS_DOMAIN_COORDINATION: 'rapid-cross-domain-coordination',
  EXPLICIT_DECISION_AND_ESCALATION_AUTHORITY: 'explicit-decision-and-escalation-authority',
  SCALABLE_PROPERTY_OPERATIONS: 'scalable-property-operations',
  SAFE_PEOPLE_AUTOMATION_COLLABORATION: 'safe-people-automation-collaboration',
  PREDICTABLE_OPERATIONAL_HANDOFFS: 'predictable-operational-handoffs',
  MEASURABLE_SERVICE_COMMITMENTS: 'measurable-service-commitments',
  SHARED_DEPENDENCY_MANAGEMENT: 'shared-dependency-management',
  CONTINUOUS_OPERATIONAL_LEARNING: 'continuous-operational-learning',
  ORGANIZATION_AND_TECHNOLOGY_INDEPENDENCE: 'organization-and-technology-independence'
});

export const ENTERPRISE_OPERATING_MODEL_PRINCIPLES = Object.freeze({
  BUSINESS_OUTCOME_OWNERSHIP: 'business-outcome-ownership',
  FEDERATED_EXECUTION: 'federated-execution',
  EXPLICIT_ACCOUNTABILITY: 'explicit-accountability',
  BOUNDED_AUTONOMY: 'bounded-autonomy',
  SEPARATION_OF_DUTIES: 'separation-of-duties',
  EVIDENCE_BASED_OPERATIONS: 'evidence-based-operations',
  AUTOMATION_WITH_HUMAN_AUTHORITY: 'automation-with-human-authority',
  CONTINUOUS_IMPROVEMENT: 'continuous-improvement'
});

export const FEDERATED_OPERATING_STRUCTURE_NODES = Object.freeze({
  ENTERPRISE_OPERATIONS: 'enterprise-operations',
  SHARED_PLATFORM_OPERATIONS: 'shared-platform-operations',
  BUSINESS_CAPABILITY_OPERATIONS: 'business-capability-operations',
  TENANT_AND_ORGANIZATION_OPERATIONS: 'tenant-and-organization-operations',
  PROPERTY_OPERATIONS: 'property-operations',
  SPECIALIZED_OPERATIONS: 'specialized-operations',
  SERVICE_OPERATIONS: 'service-operations',
  AI_OPERATIONS: 'ai-operations',
  WORKFLOW_OPERATIONS: 'workflow-operations',
  INTEGRATION_OPERATIONS: 'integration-operations',
  DATA_OPERATIONS: 'data-operations',
  SECURITY_OPERATIONS: 'security-operations'
});

export const OPERATIONAL_AUTHORITY_LEVELS = Object.freeze({
  ENTERPRISE_AUTHORITY: 'enterprise-authority',
  PLATFORM_AUTHORITY: 'platform-authority',
  DOMAIN_AUTHORITY: 'domain-authority',
  TENANT_OR_ORGANIZATION_AUTHORITY: 'tenant-or-organization-authority',
  PROPERTY_AUTHORITY: 'property-authority',
  SERVICE_AUTHORITY: 'service-authority'
});

export const ENTERPRISE_AUTHORITY_RESPONSIBILITIES = Object.freeze({
  ENTERPRISE_OPERATIONAL_POLICY: 'enterprise-operational-policy',
  CROSS_DOMAIN_PRIORITIZATION: 'cross-domain-prioritization',
  CRISIS_DECLARATION: 'crisis-declaration',
  ENTERPRISE_CONTINUITY_DECISIONS: 'enterprise-continuity-decisions',
  SHARED_PLATFORM_RISK_ACCEPTANCE: 'shared-platform-risk-acceptance',
  MAJOR_CHANGE_AUTHORIZATION: 'major-change-authorization',
  CROSS_TENANT_COMMUNICATION: 'cross-tenant-communication',
  ENTERPRISE_SERVICE_COMMITMENTS: 'enterprise-service-commitments'
});

export const PLATFORM_AUTHORITY_RESPONSIBILITIES = Object.freeze({
  SHARED_PLATFORM_HEALTH: 'shared-platform-health',
  PLATFORM_CAPACITY: 'platform-capacity',
  PLATFORM_MAINTENANCE: 'platform-maintenance',
  SHARED_RECOVERY: 'shared-recovery',
  COMMON_CONFIGURATION: 'common-configuration',
  PLATFORM_RELEASE_COORDINATION: 'platform-release-coordination',
  DEPENDENCY_RISK: 'dependency-risk'
});

export const DOMAIN_AUTHORITY_RESPONSIBILITIES = Object.freeze({
  DOMAIN_SERVICE_HEALTH: 'domain-service-health',
  DOMAIN_WORKFLOWS: 'domain-workflows',
  DOMAIN_DATA: 'domain-data',
  DOMAIN_OPERATIONAL_POLICY: 'domain-operational-policy',
  DOMAIN_INCIDENT_RESPONSE: 'domain-incident-response',
  DOMAIN_IMPROVEMENT_PRIORITIES: 'domain-improvement-priorities'
});

export const OPERATING_MODEL_RESPONSIBILITY_TYPES = Object.freeze({
  ACCOUNTABLE: 'accountable',
  DECISION_AUTHORITY: 'decision-authority',
  RESPONSIBLE: 'responsible',
  APPROVER: 'approver',
  CONSULTED: 'consulted',
  INFORMED: 'informed',
  VERIFIER: 'verifier',
  EVIDENCE_OWNER: 'evidence-owner',
  ESCALATION_OWNER: 'escalation-owner'
});

export const CORE_OPERATIONAL_ROLES = Object.freeze({
  ENTERPRISE_OPERATIONS_OWNER: 'enterprise-operations-owner',
  BUSINESS_CAPABILITY_OWNER: 'business-capability-owner',
  PROPERTY_OPERATIONS_OWNER: 'property-operations-owner',
  SERVICE_OWNER: 'service-owner',
  PRODUCT_OWNER: 'product-owner',
  PLATFORM_OPERATIONS_OWNER: 'platform-operations-owner',
  AI_OPERATIONS_OWNER: 'ai-operations-owner',
  WORKFLOW_OWNER: 'workflow-owner',
  INTEGRATION_OWNER: 'integration-owner',
  DATA_OWNER_OR_STEWARD: 'data-owner-or-steward',
  SECURITY_OPERATIONS_OWNER: 'security-operations-owner',
  INCIDENT_COMMANDER: 'incident-commander',
  CHANGE_AUTHORITY: 'change-authority',
  OPERATIONS_PRACTITIONER: 'operations-practitioner'
});

export const OPERATIONAL_ENGAGEMENT_MODELS = Object.freeze({
  ROUTINE_OPERATIONS: 'routine-operations',
  COORDINATED_OPERATIONS: 'coordinated-operations',
  MAJOR_INCIDENT_OPERATIONS: 'major-incident-operations',
  CRISIS_OPERATIONS: 'crisis-operations',
  IMPROVEMENT_OPERATIONS: 'improvement-operations'
});

export const SERVICE_COMMITMENT_TYPES = Object.freeze({
  BUSINESS_OUTCOME_EXPECTATIONS: 'business-outcome-expectations',
  AVAILABILITY_OBJECTIVES: 'availability-objectives',
  PERFORMANCE_OBJECTIVES: 'performance-objectives',
  SUPPORT_COVERAGE: 'support-coverage',
  RESPONSE_OBJECTIVES: 'response-objectives',
  RECOVERY_OBJECTIVES: 'recovery-objectives',
  DATA_FRESHNESS: 'data-freshness',
  WORKFLOW_COMPLETION_EXPECTATIONS: 'workflow-completion-expectations',
  AI_QUALITY_AND_SAFETY_EXPECTATIONS: 'ai-quality-and-safety-expectations',
  INTEGRATION_DELIVERY_EXPECTATIONS: 'integration-delivery-expectations',
  COMMUNICATION_EXPECTATIONS: 'communication-expectations',
  ESCALATION_THRESHOLDS: 'escalation-thresholds'
});

export const OPERATIONAL_HANDOFF_CONTEXT = Object.freeze({
  BUSINESS_IMPACT: 'business-impact',
  CURRENT_OPERATIONAL_STATE: 'current-operational-state',
  SCOPE_AND_AFFECTED_BOUNDARIES: 'scope-and-affected-boundaries',
  OWNERSHIP: 'ownership',
  DECISIONS_MADE: 'decisions-made',
  ACTIONS_COMPLETED: 'actions-completed',
  ACTIONS_PENDING: 'actions-pending',
  RISKS_AND_CONSTRAINTS: 'risks-and-constraints',
  EVIDENCE_AND_REFERENCES: 'evidence-and-references',
  REQUIRED_RESPONSE_TIME: 'required-response-time',
  ESCALATION_CONDITIONS: 'escalation-conditions',
  COMMUNICATION_OBLIGATIONS: 'communication-obligations'
});

export const TIME_BOUND_OPERATING_REQUIREMENTS = Object.freeze({
  COVERAGE_WINDOWS: 'coverage-windows',
  HANDOFF_SCHEDULES: 'handoff-schedules',
  ON_CALL_RESPONSIBILITIES: 'on-call-responsibilities',
  ESCALATION_AVAILABILITY: 'escalation-availability',
  LOCAL_AND_ENTERPRISE_AUTHORITY: 'local-and-enterprise-authority',
  COMMUNICATION_CHANNELS: 'communication-channels',
  OUTSTANDING_WORK_TRANSFER: 'outstanding-work-transfer',
  CONTINUITY_DURING_UNAVAILABLE_COVERAGE: 'continuity-during-unavailable-coverage'
});

export const OPERATING_RHYTHMS = Object.freeze({
  CONTINUOUS: 'continuous',
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY_OR_PERIODIC: 'monthly-or-periodic',
  EVENT_DRIVEN: 'event-driven'
});

export const OPERATIONAL_FORUMS = Object.freeze({
  ENTERPRISE_OPERATIONS_REVIEW: 'enterprise-operations-review',
  SERVICE_PERFORMANCE_REVIEW: 'service-performance-review',
  INCIDENT_REVIEW: 'incident-review',
  PROBLEM_REVIEW: 'problem-review',
  CHANGE_REVIEW: 'change-review',
  CAPACITY_REVIEW: 'capacity-review',
  RESILIENCE_REVIEW: 'resilience-review',
  SECURITY_OPERATIONS_REVIEW: 'security-operations-review',
  TENANT_OPERATIONS_REVIEW: 'tenant-operations-review',
  PROPERTY_OPERATIONS_REVIEW: 'property-operations-review',
  SUPPLIER_OPERATIONS_REVIEW: 'supplier-operations-review',
  AUTOMATION_OVERSIGHT_REVIEW: 'automation-oversight-review'
});

export const OPERATIONAL_COMMUNICATION_REQUIREMENTS = Object.freeze({
  TIMELY: 'timely',
  AUDIENCE_APPROPRIATE: 'audience-appropriate',
  BUSINESS_CONTEXTUAL: 'business-contextual',
  CONSISTENT: 'consistent',
  ACCESS_CONTROLLED: 'access-controlled',
  TRACEABLE: 'traceable',
  ACTIONABLE: 'actionable',
  PROPORTIONATE_TO_IMPACT: 'proportionate-to-impact'
});

export const AUTOMATION_OPERATING_MODEL_CAPABILITIES = Object.freeze({
  DETECT_CONDITIONS: 'detect-conditions',
  CORRELATE_EVIDENCE: 'correlate-evidence',
  CLASSIFY_AND_PRIORITIZE: 'classify-and-prioritize',
  RECOMMEND_ACTIONS: 'recommend-actions',
  EXECUTE_APPROVED_ACTIONS: 'execute-approved-actions',
  COORDINATE_WORKFLOWS: 'coordinate-workflows',
  NOTIFY_STAKEHOLDERS: 'notify-stakeholders',
  VERIFY_OUTCOMES: 'verify-outcomes',
  CAPTURE_EVIDENCE: 'capture-evidence',
  PROPOSE_IMPROVEMENTS: 'propose-improvements'
});

export const AUTOMATION_AUTHORITY_CONSTRAINTS = Object.freeze({
  SCOPE: 'scope',
  IDENTITY: 'identity',
  PERMISSION: 'permission',
  RISK: 'risk',
  CONFIDENCE: 'confidence',
  TENANT_AND_PROPERTY_BOUNDARIES: 'tenant-and-property-boundaries',
  REVERSIBILITY: 'reversibility',
  RATE_AND_IMPACT_LIMITS: 'rate-and-impact-limits',
  APPROVAL_REQUIREMENTS: 'approval-requirements',
  AUDITABILITY: 'auditability'
});

export const AI_ASSISTED_OPERATIONS_SUPPORT_TYPES = Object.freeze({
  EVIDENCE_SUMMARIZATION: 'evidence-summarization',
  IMPACT_ANALYSIS: 'impact-analysis',
  DEPENDENCY_ANALYSIS: 'dependency-analysis',
  SUGGESTED_DIAGNOSIS: 'suggested-diagnosis',
  RUNBOOK_RECOMMENDATION: 'runbook-recommendation',
  COMMUNICATION_DRAFTING: 'communication-drafting',
  RISK_IDENTIFICATION: 'risk-identification',
  CAPACITY_FORECASTING: 'capacity-forecasting',
  PATTERN_DISCOVERY: 'pattern-discovery',
  IMPROVEMENT_PROPOSALS: 'improvement-proposals'
});

export const MULTI_TENANT_OPERATING_MODEL_SCOPES = Object.freeze({
  SHARED_OPERATIONS: 'shared-operations',
  TENANT_OPERATIONS: 'tenant-operations',
  PROPERTY_OPERATIONS: 'property-operations'
});

export const PARTNER_OPERATING_AGREEMENT_ELEMENTS = Object.freeze({
  OWNERSHIP_BOUNDARIES: 'ownership-boundaries',
  SERVICE_COMMITMENTS: 'service-commitments',
  SUPPORT_INTERFACES: 'support-interfaces',
  ESCALATION_PATHS: 'escalation-paths',
  EVIDENCE_EXCHANGE: 'evidence-exchange',
  SECURITY_OBLIGATIONS: 'security-obligations',
  INCIDENT_PARTICIPATION: 'incident-participation',
  CHANGE_NOTIFICATION: 'change-notification',
  CONTINUITY_EXPECTATIONS: 'continuity-expectations',
  EXIT_AND_REPLACEMENT_PROCEDURES: 'exit-and-replacement-procedures'
});

export const OPERATIONAL_READINESS_REQUIREMENTS = Object.freeze({
  ACCOUNTABLE_OWNER: 'accountable-owner',
  DEFINED_SERVICE_COMMITMENTS: 'defined-service-commitments',
  IDENTIFIED_DEPENDENCIES: 'identified-dependencies',
  OBSERVABLE_HEALTH_AND_BUSINESS_OUTCOMES: 'observable-health-and-business-outcomes',
  SUPPORT_AND_ESCALATION_PATHS: 'support-and-escalation-paths',
  FAILURE_AND_RECOVERY_BEHAVIOR: 'failure-and-recovery-behavior',
  CAPACITY_EXPECTATIONS: 'capacity-expectations',
  SECURITY_AND_ACCESS_CONTROLS: 'security-and-access-controls',
  CHANGE_AND_RELEASE_PROCEDURES: 'change-and-release-procedures',
  CONTINUITY_REQUIREMENTS: 'continuity-requirements',
  OPERATIONAL_DOCUMENTATION: 'operational-documentation',
  VERIFIED_DEPLOYMENT_AND_ROLLBACK: 'verified-deployment-and-rollback',
  EVIDENCE_AND_REVIEW_MECHANISMS: 'evidence-and-review-mechanisms'
});

export const OPERATIONAL_MATURITY_STAGES = Object.freeze({
  REACTIVE: 'reactive',
  REPEATABLE: 'repeatable',
  MEASURED: 'measured',
  PROACTIVE: 'proactive',
  ADAPTIVE: 'adaptive',
  AUTONOMOUS_WITHIN_GUARDRAILS: 'autonomous-within-guardrails'
});

export const OPERATING_MODEL_RELATIONSHIP_STAGES = Object.freeze({
  OPERATING_MODEL: 'Operating Model',
  OWNERSHIP_AND_AUTHORITY: 'Ownership and Authority',
  COMMAND_AND_CONTROL: 'Command and Control',
  COORDINATED_ACTION: 'Coordinated Action',
  VERIFIED_OUTCOME: 'Verified Outcome'
});

export const OPERATING_MODEL_QUALITY_ATTRIBUTES = Object.freeze({
  ACCOUNTABILITY: 'accountability',
  RELIABILITY: 'reliability',
  RESPONSIVENESS: 'responsiveness',
  SCALABILITY: 'scalability',
  RESILIENCE: 'resilience',
  CONSISTENCY: 'consistency',
  ADAPTABILITY: 'adaptability',
  TRACEABILITY: 'traceability',
  SECURITY: 'security',
  MAINTAINABILITY: 'maintainability',
  OPERABILITY: 'operability',
  ORGANIZATIONAL_SUSTAINABILITY: 'organizational-sustainability'
});

export const OPERATING_MODEL_ARCHITECTURAL_RULES = Object.freeze({
  ASSIGN_ONE_ACCOUNTABLE_OWNER: 'assign-one-accountable-owner',
  ALIGN_PRIORITIES_WITH_BUSINESS_AND_GUEST_OUTCOMES: 'align-priorities-with-business-and-guest-outcomes',
  FEDERATE_EXECUTION_WITH_ENTERPRISE_GUARDRAILS: 'federate-execution-with-enterprise-guardrails',
  DEFINE_DECISION_AND_ESCALATION_AUTHORITY: 'define-decision-and-escalation-authority',
  PRESERVE_TENANT_AND_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  SEPARATE_DUTIES_FOR_HIGH_RISK_ACTIVITY: 'separate-duties-for-high-risk-activity',
  SUPPORT_NORMAL_DEGRADED_MAJOR_INCIDENT_AND_CRISIS_OPERATIONS: 'support-normal-degraded-major-incident-and-crisis-operations',
  MAKE_HANDOFFS_EXPLICIT_AND_ACKNOWLEDGED: 'make-handoffs-explicit-and-acknowledged',
  GOVERN_AUTOMATED_ACTORS_AS_OPERATIONAL_PARTICIPANTS: 'govern-automated-actors-as-operational-participants',
  RETAIN_HUMAN_ACCOUNTABILITY_FOR_CONSEQUENTIAL_DECISIONS: 'retain-human-accountability-for-consequential-decisions',
  DEFINE_MEASURABLE_SERVICE_COMMITMENTS: 'define-measurable-service-commitments',
  REQUIRE_OPERATIONAL_READINESS_BEFORE_PRODUCTION_USE: 'require-operational-readiness-before-production-use',
  TURN_OPERATIONAL_LEARNING_INTO_IMPROVEMENT: 'turn-operational-learning-into-improvement',
  REMAIN_INDEPENDENT_OF_ORGANIZATIONAL_CHARTS_AND_VENDOR_PRODUCTS: 'remain-independent-of-organizational-charts-and-vendor-products'
});

export const FUTURE_OPERATING_MODEL_CAPABILITIES = Object.freeze({
  FEDERATED_AUTONOMOUS_OPERATIONS: 'federated-autonomous-operations',
  DYNAMIC_OPERATIONAL_TEAMS: 'dynamic-operational-teams',
  AI_ASSISTED_COMMAND_STRUCTURES: 'ai-assisted-command-structures',
  INTENT_DRIVEN_SERVICE_COMMITMENTS: 'intent-driven-service-commitments',
  ADAPTIVE_AUTHORITY_DELEGATION: 'adaptive-authority-delegation',
  CROSS_PROPERTY_OPERATIONAL_OPTIMIZATION: 'cross-property-operational-optimization',
  OPERATIONAL_DIGITAL_TWINS: 'operational-digital-twins',
  REAL_TIME_OPERATING_MODEL_SIMULATION: 'real-time-operating-model-simulation',
  SEMANTIC_RESPONSIBILITY_MODELS: 'semantic-responsibility-models',
  SELF_IMPROVING_OPERATING_RHYTHMS: 'self-improving-operating-rhythms'
});

export const OPERATIONS_COMMAND_CONTROL_OBJECTIVES = Object.freeze({
  RAPID_ACCURATE_SITUATIONAL_AWARENESS: 'rapid-accurate-situational-awareness',
  BUSINESS_IMPACT_DRIVEN_PRIORITIZATION: 'business-impact-driven-prioritization',
  CLEAR_OPERATIONAL_LEADERSHIP: 'clear-operational-leadership',
  EXPLICIT_DECISION_RIGHTS: 'explicit-decision-rights',
  COORDINATED_CROSS_DOMAIN_ACTION: 'coordinated-cross-domain-action',
  SAFE_DELEGATION_AND_BOUNDED_AUTONOMY: 'safe-delegation-and-bounded-autonomy',
  TIMELY_ESCALATION: 'timely-escalation',
  CONSISTENT_STAKEHOLDER_COMMUNICATION: 'consistent-stakeholder-communication',
  CONTROLLED_AUTOMATED_ACTION: 'controlled-automated-action',
  TENANT_AND_PROPERTY_BOUNDARY_PROTECTION: 'tenant-and-property-boundary-protection',
  VERIFIED_RECOVERY: 'verified-recovery',
  COMPLETE_DECISION_AND_ACTION_TRACEABILITY: 'complete-decision-and-action-traceability',
  CONTINUOUS_OPERATIONAL_LEARNING: 'continuous-operational-learning',
  SCALABLE_RESPONSE_ACROSS_PROPERTIES: 'scalable-response-across-properties'
});

export const OPERATIONS_COMMAND_CONTROL_PRINCIPLES = Object.freeze({
  OUTCOME_ORIENTED_COMMAND: 'outcome-oriented-command',
  SINGLE_ACCOUNTABLE_COMMAND: 'single-accountable-command',
  AUTHORITY_PROPORTIONAL_TO_IMPACT: 'authority-proportional-to-impact',
  SHARED_SITUATIONAL_AWARENESS: 'shared-situational-awareness',
  FEDERATED_EXECUTION: 'federated-execution',
  EVIDENCE_BASED_DECISIONS: 'evidence-based-decisions',
  CONTROLLED_TEMPO: 'controlled-tempo',
  COMMUNICATION_AS_OPERATIONAL_CAPABILITY: 'communication-as-operational-capability',
  REPLACEABLE_LEADERSHIP: 'replaceable-leadership'
});

export const OPERATIONAL_CONTROL_PLANE_STAGES = Object.freeze({
  OPERATIONAL_EVIDENCE: 'Operational Evidence',
  SITUATION_MANAGEMENT: 'Situation Management',
  IMPACT_AND_RISK_ASSESSMENT: 'Impact and Risk Assessment',
  PRIORITY_AND_COMMAND_ASSIGNMENT: 'Priority and Command Assignment',
  DECISION_MANAGEMENT: 'Decision Management',
  COORDINATED_EXECUTION: 'Coordinated Execution',
  VERIFICATION_AND_COMMUNICATION: 'Verification and Communication',
  TRANSITION_CLOSURE_AND_LEARNING: 'Transition, Closure, and Learning'
});

export const OPERATIONAL_SITUATION_ORIGINS = Object.freeze({
  BUSINESS_OUTCOME_DEVIATION: 'business-outcome-deviation',
  GUEST_OR_PROPERTY_REPORT: 'guest-or-property-report',
  SERVICE_DEGRADATION: 'service-degradation',
  WORKFLOW_EXCEPTION: 'workflow-exception',
  AI_QUALITY_OR_SAFETY_CONCERN: 'ai-quality-or-safety-concern',
  INTEGRATION_FAILURE: 'integration-failure',
  DATA_QUALITY_OR_INTEGRITY_CONCERN: 'data-quality-or-integrity-concern',
  SECURITY_EVENT: 'security-event',
  CAPACITY_RISK: 'capacity-risk',
  DEPLOYMENT_OR_CHANGE: 'deployment-or-change',
  EXTERNAL_PARTNER_DISRUPTION: 'external-partner-disruption',
  REGULATORY_OR_ENVIRONMENTAL_CONDITION: 'regulatory-or-environmental-condition',
  PREDICTIVE_OPERATIONAL_ANALYSIS: 'predictive-operational-analysis'
});

export const OPERATIONAL_SITUATION_MODEL_FIELDS = Object.freeze({
  SITUATION_IDENTIFIER: 'situation-identifier',
  DETECTION_TIME: 'detection-time',
  CURRENT_STATUS: 'current-status',
  BUSINESS_IMPACT: 'business-impact',
  GUEST_IMPACT: 'guest-impact',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  AFFECTED_CAPABILITIES: 'affected-capabilities',
  AFFECTED_SERVICES_AND_DEPENDENCIES: 'affected-services-and-dependencies',
  SECURITY_AND_COMPLIANCE_IMPLICATIONS: 'security-and-compliance-implications',
  CURRENT_PRIORITY: 'current-priority',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  COMMAND_LEVEL: 'command-level',
  DECISION_AUTHORITY: 'decision-authority',
  ACTIVE_PARTICIPANTS: 'active-participants',
  KNOWN_FACTS: 'known-facts',
  ASSUMPTIONS_AND_UNCERTAINTIES: 'assumptions-and-uncertainties',
  ACTIONS_COMPLETED: 'actions-completed',
  ACTIONS_PLANNED: 'actions-planned',
  RISKS: 'risks',
  COMMUNICATION_STATUS: 'communication-status',
  RECOVERY_CRITERIA: 'recovery-criteria',
  EVIDENCE_REFERENCES: 'evidence-references',
  NEXT_ASSESSMENT_TIME: 'next-assessment-time'
});

export const OPERATIONAL_COMMAND_LEVELS = Object.freeze({
  LOCAL_CONTROL: 'level-0-local-control',
  COORDINATED_RESPONSE: 'level-1-coordinated-response',
  MAJOR_OPERATIONAL_COMMAND: 'level-2-major-operational-command',
  ENTERPRISE_CRISIS_COMMAND: 'level-3-enterprise-crisis-command'
});

export const OPERATIONS_COMMAND_ROLES = Object.freeze({
  COMMAND_OWNER: 'command-owner',
  SITUATION_MANAGER: 'situation-manager',
  BUSINESS_IMPACT_LEAD: 'business-impact-lead',
  TECHNICAL_COORDINATION_LEAD: 'technical-coordination-lead',
  SECURITY_LEAD: 'security-lead',
  COMMUNICATIONS_LEAD: 'communications-lead',
  DOMAIN_OWNERS: 'domain-owners',
  ACTION_OWNERS: 'action-owners',
  DECISION_AUTHORITY: 'decision-authority',
  RECORDER_OR_EVIDENCE_CUSTODIAN: 'recorder-or-evidence-custodian'
});

export const COMMAND_ASSIGNMENT_FACTORS = Object.freeze({
  BUSINESS_CRITICALITY: 'business-criticality',
  SCOPE_OF_IMPACT: 'scope-of-impact',
  PRIMARY_AFFECTED_CAPABILITY: 'primary-affected-capability',
  REQUIRED_AUTHORITY: 'required-authority',
  DOMAIN_EXPERTISE: 'domain-expertise',
  AVAILABILITY: 'availability',
  CONFLICT_OF_INTEREST: 'conflict-of-interest',
  SECURITY_IMPLICATIONS: 'security-implications',
  TENANT_OR_PROPERTY_CONTEXT: 'tenant-or-property-context',
  CONTINUITY_OBLIGATIONS: 'continuity-obligations'
});

export const OPERATIONAL_DECLARATION_STEPS = Object.freeze({
  CORRELATE_AVAILABLE_EVIDENCE: 'correlate-available-evidence',
  ESTABLISH_INITIAL_SCOPE: 'establish-initial-scope',
  ESTIMATE_BUSINESS_AND_OPERATIONAL_IMPACT: 'estimate-business-and-operational-impact',
  ASSIGN_PROVISIONAL_PRIORITY: 'assign-provisional-priority',
  ASSIGN_ACCOUNTABLE_OWNER: 'assign-accountable-owner',
  DETERMINE_COMMAND_LEVEL: 'determine-command-level',
  INITIATE_APPROPRIATE_COMMUNICATION: 'initiate-appropriate-communication',
  DEFINE_NEXT_ASSESSMENT_POINT: 'define-next-assessment-point'
});

export const OPERATIONAL_IMPACT_DIMENSIONS = Object.freeze({
  GUEST_EXPERIENCE: 'guest-experience',
  BOOKING_AND_REVENUE: 'booking-and-revenue',
  PROPERTY_OPERATIONS: 'property-operations',
  TENANT_OPERATIONS: 'tenant-operations',
  SHARED_PLATFORM_CAPABILITY: 'shared-platform-capability',
  SERVICE_AVAILABILITY: 'service-availability',
  WORKFLOW_COMPLETION: 'workflow-completion',
  AI_QUALITY_AND_SAFETY: 'ai-quality-and-safety',
  DATA_INTEGRITY_OR_AVAILABILITY: 'data-integrity-or-availability',
  INTEGRATION_DELIVERY: 'integration-delivery',
  SECURITY_EXPOSURE: 'security-exposure',
  PRIVACY: 'privacy',
  COMPLIANCE: 'compliance',
  REPUTATION: 'reputation',
  GEOGRAPHIC_SCOPE: 'geographic-scope',
  DURATION: 'duration',
  RECOVERABILITY: 'recoverability',
  DEPENDENCY_PROPAGATION: 'dependency-propagation'
});

export const OPERATIONAL_RISK_FACTORS = Object.freeze({
  PROBABILITY_OF_WORSENING_IMPACT: 'probability-of-worsening-impact',
  UNCERTAINTY: 'uncertainty',
  BLAST_RADIUS: 'blast-radius',
  TIME_SENSITIVITY: 'time-sensitivity',
  IRREVERSIBILITY: 'irreversibility',
  DEPENDENCY_CONCENTRATION: 'dependency-concentration',
  SECURITY_EXPOSURE: 'security-exposure',
  DATA_LOSS_POTENTIAL: 'data-loss-potential',
  AVAILABILITY_OF_ALTERNATIVES: 'availability-of-alternatives',
  RECOVERY_COMPLEXITY: 'recovery-complexity',
  AUTOMATION_CONFIDENCE: 'automation-confidence',
  HUMAN_RESOURCE_CONSTRAINTS: 'human-resource-constraints',
  EXTERNAL_DEPENDENCY: 'external-dependency',
  CHANGE_COLLISION: 'change-collision'
});

export const OPERATIONAL_PRIORITY_USES = Object.freeze({
  RESPONSE_OBJECTIVE: 'response-objective',
  COMMAND_ASSIGNMENT: 'command-assignment',
  RESOURCE_ALLOCATION: 'resource-allocation',
  COMMUNICATION_FREQUENCY: 'communication-frequency',
  ESCALATION_TIMING: 'escalation-timing',
  CHANGE_RESTRICTIONS: 'change-restrictions',
  RECOVERY_SEQUENCING: 'recovery-sequencing'
});

export const BUSINESS_SERVICE_PRIORITY_EXAMPLES = Object.freeze({
  SAFETY_AND_SECURITY: 'safety-and-security',
  GUEST_ACCESS_AND_ESSENTIAL_COMMUNICATION: 'guest-access-and-essential-communication',
  ACTIVE_STAY_SUPPORT: 'active-stay-support',
  BOOKING_INTEGRITY: 'booking-integrity',
  AVAILABILITY_ACCURACY: 'availability-accuracy',
  PAYMENT_AND_FINANCIAL_PROTECTION: 'payment-and-financial-protection',
  PROPERTY_CONTINUITY: 'property-continuity',
  REGULATORY_OBLIGATIONS: 'regulatory-obligations',
  REVENUE_OPTIMIZATION: 'revenue-optimization',
  ANALYTICS_AND_NONCRITICAL_PROCESSING: 'analytics-and-noncritical-processing'
});

export const OPERATIONAL_DECISION_RECORD_FIELDS = Object.freeze({
  DECISION_IDENTIFIER: 'decision-identifier',
  DECISION_STATEMENT: 'decision-statement',
  DECISION_OWNER: 'decision-owner',
  AUTHORITY_BASIS: 'authority-basis',
  TIME: 'time',
  SITUATION_CONTEXT: 'situation-context',
  OPTIONS_CONSIDERED: 'options-considered',
  EVIDENCE_USED: 'evidence-used',
  RISKS: 'risks',
  CONSTRAINTS: 'constraints',
  EXPECTED_OUTCOME: 'expected-outcome',
  REQUIRED_ACTIONS: 'required-actions',
  VERIFICATION_CRITERIA: 'verification-criteria',
  REVERSAL_OR_COMPENSATION_PATH: 'reversal-or-compensation-path',
  REVIEW_REQUIREMENT: 'review-requirement'
});

export const OPERATIONAL_DECISION_CLASSES = Object.freeze({
  PREAUTHORIZED_DECISIONS: 'preauthorized-decisions',
  DELEGATED_DECISIONS: 'delegated-decisions',
  COORDINATED_DECISIONS: 'coordinated-decisions',
  CONTROLLED_DECISIONS: 'controlled-decisions',
  EMERGENCY_DECISIONS: 'emergency-decisions'
});

export const OPERATIONAL_ACTION_CONTROL_FIELDS = Object.freeze({
  ACTION_OWNER: 'action-owner',
  AUTHORIZED_SCOPE: 'authorized-scope',
  TARGET: 'target',
  EXPECTED_OUTCOME: 'expected-outcome',
  PRECONDITIONS: 'preconditions',
  RISK: 'risk',
  DEPENDENCIES: 'dependencies',
  START_AND_COMPLETION_TIME: 'start-and-completion-time',
  VERIFICATION_METHOD: 'verification-method',
  REVERSAL_OR_COMPENSATION: 'reversal-or-compensation',
  EVIDENCE_PRODUCED: 'evidence-produced'
});

export const OPERATIONAL_GUARDRAILS = Object.freeze({
  LEAST_PRIVILEGE: 'least-privilege',
  TENANT_AND_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  ENVIRONMENT_SEPARATION: 'environment-separation',
  CHANGE_AUTHORIZATION: 'change-authorization',
  RATE_AND_IMPACT_LIMITS: 'rate-and-impact-limits',
  SENSITIVE_DATA_PROTECTION: 'sensitive-data-protection',
  SEGREGATION_OF_DUTIES: 'segregation-of-duties',
  APPROVED_AUTOMATION_SCOPE: 'approved-automation-scope',
  REVERSIBILITY_WHERE_PRACTICAL: 'reversibility-where-practical',
  EVIDENCE_CAPTURE: 'evidence-capture',
  COMMUNICATION_OBLIGATIONS: 'communication-obligations',
  STOP_CONDITIONS: 'stop-conditions'
});

export const ESCALATION_INCREASES = Object.freeze({
  EXPERTISE: 'expertise',
  COORDINATION: 'coordination',
  AUTHORITY: 'authority',
  RESOURCES: 'resources',
  COMMUNICATION: 'communication',
  BUSINESS_PARTICIPATION: 'business-participation',
  SECURITY_INVOLVEMENT: 'security-involvement',
  EXECUTIVE_OVERSIGHT: 'executive-oversight',
  EXTERNAL_ENGAGEMENT: 'external-engagement'
});

export const COMMAND_ESCALATION_TRIGGERS = Object.freeze({
  INCREASED_IMPACT: 'increased-impact',
  EXPANDING_SCOPE: 'expanding-scope',
  MISSED_RESPONSE_OR_RECOVERY_OBJECTIVES: 'missed-response-or-recovery-objectives',
  FAILED_RECOVERY: 'failed-recovery',
  UNKNOWN_OWNERSHIP: 'unknown-ownership',
  CONFLICTING_DECISIONS: 'conflicting-decisions',
  INSUFFICIENT_AUTHORITY: 'insufficient-authority',
  CROSS_TENANT_EFFECTS: 'cross-tenant-effects',
  SECURITY_OR_COMPLIANCE_IMPLICATIONS: 'security-or-compliance-implications',
  LOSS_OF_SITUATIONAL_AWARENESS: 'loss-of-situational-awareness',
  RESOURCE_EXHAUSTION: 'resource-exhaustion',
  EXTERNAL_DEPENDENCY_FAILURE: 'external-dependency-failure'
});

export const COMMAND_DE_ESCALATION_CRITERIA = Object.freeze({
  IMPACT_CONTAINED: 'impact-contained',
  RECOVERY_STABLE: 'recovery-stable',
  COMMAND_COMPLEXITY_REDUCED: 'command-complexity-reduced',
  REQUIRED_AUTHORITY_DECREASES: 'required-authority-decreases',
  OUTSTANDING_ACTIONS_FIT_LOWER_COMMAND_LEVEL: 'outstanding-actions-fit-lower-command-level',
  COMMUNICATION_OBLIGATIONS_SATISFIED: 'communication-obligations-satisfied',
  OWNERSHIP_ACCEPTED_BY_RECEIVING_LEVEL: 'ownership-accepted-by-receiving-level'
});

export const OPERATIONAL_COMMUNICATION_CLASSES = Object.freeze({
  INTERNAL_OPERATIONAL_COORDINATION: 'internal-operational-coordination',
  LEADERSHIP_UPDATES: 'leadership-updates',
  TENANT_COMMUNICATION: 'tenant-communication',
  PROPERTY_COMMUNICATION: 'property-communication',
  GUEST_COMMUNICATION: 'guest-communication',
  PARTNER_COMMUNICATION: 'partner-communication',
  SECURITY_NOTIFICATION: 'security-notification',
  REGULATORY_COMMUNICATION: 'regulatory-communication',
  RECOVERY_CONFIRMATION: 'recovery-confirmation',
  POST_EVENT_REPORTING: 'post-event-reporting'
});

export const COMMUNICATION_CADENCE_FACTORS = Object.freeze({
  COMMAND_LEVEL: 'command-level',
  RATE_OF_CHANGE: 'rate-of-change',
  BUSINESS_IMPACT: 'business-impact',
  STAKEHOLDER_NEED: 'stakeholder-need',
  REGULATORY_OBLIGATIONS: 'regulatory-obligations',
  RECOVERY_PROGRESS: 'recovery-progress',
  UNCERTAINTY: 'uncertainty'
});

export const OPERATIONAL_TIMELINE_EVENTS = Object.freeze({
  DETECTION: 'detection',
  DECLARATION: 'declaration',
  PRIORITY_CHANGES: 'priority-changes',
  COMMAND_ASSIGNMENTS: 'command-assignments',
  SIGNIFICANT_EVIDENCE: 'significant-evidence',
  DECISIONS: 'decisions',
  ACTIONS: 'actions',
  ESCALATIONS: 'escalations',
  COMMUNICATIONS: 'communications',
  RECOVERY_MILESTONES: 'recovery-milestones',
  VERIFICATION: 'verification',
  TRANSITION_AND_CLOSURE: 'transition-and-closure'
});

export const SITUATION_REVIEW_CYCLE_STAGES = Object.freeze({
  CURRENT_STATE: 'Current State',
  NEW_EVIDENCE: 'New Evidence',
  IMPACT_AND_RISK_REASSESSMENT: 'Impact and Risk Reassessment',
  DECISION_REVIEW: 'Decision Review',
  ACTION_COORDINATION: 'Action Coordination',
  OUTCOME_VERIFICATION: 'Outcome Verification',
  NEXT_REVIEW: 'Next Review'
});

export const AI_ASSISTED_COMMAND_SUPPORT_TYPES = Object.freeze({
  EVIDENCE_CORRELATION: 'evidence-correlation',
  SITUATION_SUMMARIZATION: 'situation-summarization',
  IMPACT_INFERENCE: 'impact-inference',
  DEPENDENCY_MAPPING: 'dependency-mapping',
  PRIORITY_RECOMMENDATIONS: 'priority-recommendations',
  OPTION_ANALYSIS: 'option-analysis',
  ACTION_RECOMMENDATIONS: 'action-recommendations',
  TIMELINE_MAINTENANCE: 'timeline-maintenance',
  COMMUNICATION_DRAFTING: 'communication-drafting',
  RISK_IDENTIFICATION: 'risk-identification',
  RECOVERY_VERIFICATION: 'recovery-verification',
  POST_EVENT_ANALYSIS: 'post-event-analysis'
});

export const AUTONOMOUS_OPERATIONAL_ACTION_CRITERIA = Object.freeze({
  PREAUTHORIZED: 'preauthorized',
  LOW_RISK: 'low-risk',
  BOUNDED_IN_SCOPE: 'bounded-in-scope',
  TENANT_ISOLATED: 'tenant-isolated',
  OBSERVABLE: 'observable',
  REVERSIBLE_OR_COMPENSATABLE: 'reversible-or-compensatable',
  RATE_LIMITED: 'rate-limited',
  VERIFIABLE: 'verifiable',
  ATTRIBUTABLE: 'attributable',
  SUBJECT_TO_STOP_CONDITIONS: 'subject-to-stop-conditions'
});

export const AUTONOMOUS_ACTION_ESCALATION_TRIGGERS = Object.freeze({
  CONFIDENCE_INSUFFICIENT: 'confidence-insufficient',
  IMPACT_EXPANDS: 'impact-expands',
  VERIFICATION_FAILS: 'verification-fails',
  REQUIRED_AUTHORITY_EXCEEDED: 'required-authority-exceeded',
  SECURITY_CONCERNS_ARISE: 'security-concerns-arise',
  REPEATED_ATTEMPTS_FAIL: 'repeated-attempts-fail',
  HUMAN_INTERVENTION_REQUESTED: 'human-intervention-requested'
});

export const MULTI_TENANT_COMMAND_SCOPES = Object.freeze({
  SINGLE_PROPERTY_SITUATIONS: 'single-property-situations',
  MULTI_PROPERTY_WITHIN_ONE_TENANT: 'multi-property-within-one-tenant',
  SINGLE_TENANT_SHARED_SERVICE_SITUATIONS: 'single-tenant-shared-service-situations',
  MULTI_TENANT_PLATFORM_SITUATIONS: 'multi-tenant-platform-situations',
  ENTERPRISE_WIDE_SITUATIONS: 'enterprise-wide-situations',
  EXTERNAL_ECOSYSTEM_SITUATIONS: 'external-ecosystem-situations'
});

export const PROPERTY_COORDINATION_CONTEXT = Object.freeze({
  GUEST_IMPACT: 'guest-impact',
  FACILITY_CONDITIONS: 'facility-conditions',
  LOCAL_STAFFING: 'local-staffing',
  LOCAL_REGULATIONS: 'local-regulations',
  PHYSICAL_ACCESS: 'physical-access',
  LOCAL_COMMUNICATION_CHANNELS: 'local-communication-channels',
  LOCAL_BUSINESS_PRIORITIES: 'local-business-priorities',
  AVAILABLE_MANUAL_ALTERNATIVES: 'available-manual-alternatives'
});

export const EXTERNAL_COORDINATION_PARTNERS = Object.freeze({
  PAYMENT_PROVIDERS: 'payment-providers',
  MESSAGING_PLATFORMS: 'messaging-platforms',
  ONLINE_TRAVEL_AGENCIES: 'online-travel-agencies',
  IDENTITY_PROVIDERS: 'identity-providers',
  AI_PROVIDERS: 'ai-providers',
  INFRASTRUCTURE_PROVIDERS: 'infrastructure-providers',
  PROPERTY_SYSTEMS: 'property-systems',
  REGULATORY_BODIES: 'regulatory-bodies',
  EMERGENCY_SERVICES: 'emergency-services'
});

export const RECOVERY_VERIFICATION_DIMENSIONS = Object.freeze({
  BUSINESS_OUTCOME_RESTORATION: 'business-outcome-restoration',
  GUEST_JOURNEY_COMPLETION: 'guest-journey-completion',
  PROPERTY_OPERATION_RESTORATION: 'property-operation-restoration',
  SERVICE_HEALTH: 'service-health',
  WORKFLOW_COMPLETION: 'workflow-completion',
  AI_QUALITY_AND_SAFETY: 'ai-quality-and-safety',
  DATA_CONSISTENCY: 'data-consistency',
  INTEGRATION_DELIVERY: 'integration-delivery',
  SECURITY_POSTURE: 'security-posture',
  CAPACITY_STABILITY: 'capacity-stability',
  ABSENCE_OF_HIDDEN_DEGRADATION: 'absence-of-hidden-degradation',
  STAKEHOLDER_CONFIRMATION: 'stakeholder-confirmation'
});

export const OPERATIONAL_TRANSITION_CRITERIA = Object.freeze({
  IMMEDIATE_IMPACT_RESOLVED_OR_ACCEPTED: 'immediate-impact-resolved-or-accepted',
  RECOVERY_VERIFIED: 'recovery-verified',
  RESIDUAL_RISK_HAS_OWNER: 'residual-risk-has-owner',
  TEMPORARY_CONTROLS_DOCUMENTED: 'temporary-controls-documented',
  OUTSTANDING_WORK_TRANSFERRED: 'outstanding-work-transferred',
  STAKEHOLDERS_INFORMED: 'stakeholders-informed',
  EVIDENCE_PRESERVED: 'evidence-preserved',
  REVIEW_OBLIGATIONS_SCHEDULED: 'review-obligations-scheduled'
});

export const POST_EVENT_LEARNING_AREAS = Object.freeze({
  DETECTION: 'detection',
  SITUATIONAL_AWARENESS: 'situational-awareness',
  OWNERSHIP: 'ownership',
  DECISION_QUALITY: 'decision-quality',
  RESPONSE_TIMING: 'response-timing',
  COMMUNICATION: 'communication',
  AUTOMATION: 'automation',
  DEPENDENCIES: 'dependencies',
  RECOVERY: 'recovery',
  BUSINESS_CONTINUITY: 'business-continuity',
  ARCHITECTURE: 'architecture',
  POLICIES: 'policies',
  DOCUMENTATION: 'documentation',
  TRAINING: 'training',
  CAPACITY: 'capacity'
});

export const COMMAND_CONTROL_QUALITY_ATTRIBUTES = Object.freeze({
  RESPONSIVENESS: 'responsiveness',
  ACCOUNTABILITY: 'accountability',
  COORDINATION: 'coordination',
  RELIABILITY: 'reliability',
  RESILIENCE: 'resilience',
  TRACEABILITY: 'traceability',
  EXPLAINABILITY: 'explainability',
  SECURITY: 'security',
  SCALABILITY: 'scalability',
  ADAPTABILITY: 'adaptability',
  BUSINESS_CONTINUITY: 'business-continuity',
  STAKEHOLDER_TRUST: 'stakeholder-trust'
});

export const COMMAND_CONTROL_ARCHITECTURAL_RULES = Object.freeze({
  DEFINE_ACCOUNTABLE_COMMAND_OWNER: 'define-accountable-command-owner',
  PRIORITIZE_BUSINESS_AND_GUEST_OUTCOMES: 'prioritize-business-and-guest-outcomes',
  MAINTAIN_SHARED_SITUATIONAL_AWARENESS: 'maintain-shared-situational-awareness',
  MAKE_DECISION_AUTHORITY_EXPLICIT: 'make-decision-authority-explicit',
  COORDINATE_FEDERATED_EXECUTION: 'coordinate-federated-execution',
  RECORD_MATERIAL_DECISIONS_AND_ACTIONS: 'record-material-decisions-and-actions',
  PRESERVE_TENANT_AND_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  KEEP_GUARDRAILS_ACTIVE_DURING_URGENCY: 'keep-guardrails-active-during-urgency',
  SUPPORT_ESCALATION_AND_DE_ESCALATION: 'support-escalation-and-de-escalation',
  TREAT_COMMUNICATION_AS_OPERATIONAL_CAPABILITY: 'treat-communication-as-operational-capability',
  BOUND_AND_GOVERN_AI_AND_AUTOMATION: 'bound-and-govern-ai-and-automation',
  VERIFY_RECOVERY_WITH_BUSINESS_AND_TECHNICAL_EVIDENCE: 'verify-recovery-with-business-and-technical-evidence',
  PRESERVE_AUTHORITATIVE_OPERATIONAL_TIMELINE: 'preserve-authoritative-operational-timeline',
  TRANSFER_RESIDUAL_WORK_BEFORE_CLOSURE: 'transfer-residual-work-before-closure',
  CONVERT_OPERATIONAL_EXPERIENCE_INTO_IMPROVEMENT: 'convert-operational-experience-into-improvement',
  REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT: 'remain-vendor-neutral-and-technology-independent'
});

export const FUTURE_COMMAND_CONTROL_CAPABILITIES = Object.freeze({
  PREDICTIVE_SITUATION_FORMATION: 'predictive-situation-formation',
  AI_ASSISTED_INCIDENT_COMMAND: 'ai-assisted-incident-command',
  DYNAMIC_COMMAND_STRUCTURES: 'dynamic-command-structures',
  AUTOMATED_DEPENDENCY_AWARE_COORDINATION: 'automated-dependency-aware-coordination',
  OPERATIONAL_DIGITAL_TWINS: 'operational-digital-twins',
  BUSINESS_IMPACT_SIMULATION: 'business-impact-simulation',
  POLICY_DRIVEN_AUTONOMOUS_RESPONSE: 'policy-driven-autonomous-response',
  CROSS_PROPERTY_RESPONSE_OPTIMIZATION: 'cross-property-response-optimization',
  SEMANTIC_OPERATIONAL_TIMELINES: 'semantic-operational-timelines',
  ADAPTIVE_COMMUNICATION: 'adaptive-communication',
  FEDERATED_CROSS_ENTERPRISE_COMMAND: 'federated-cross-enterprise-command'
});

export const SERVICE_OPERATIONS_OBJECTIVES = Object.freeze({
  RELIABLE_PREDICTABLE_SERVICE_DELIVERY: 'reliable-predictable-service-delivery',
  CLEAR_SERVICE_ACCOUNTABILITY: 'clear-service-accountability',
  BUSINESS_ALIGNED_SERVICE_HEALTH: 'business-aligned-service-health',
  MEASURABLE_SERVICE_COMMITMENTS: 'measurable-service-commitments',
  CONSISTENT_OPERATIONAL_READINESS: 'consistent-operational-readiness',
  CONTROLLED_SERVICE_DEPENDENCIES: 'controlled-service-dependencies',
  EFFECTIVE_REQUEST_AND_EVENT_HANDLING: 'effective-request-and-event-handling',
  SAFE_DEGRADED_OPERATION: 'safe-degraded-operation',
  RAPID_SERVICE_RESTORATION: 'rapid-service-restoration',
  SCALABLE_TENANT_AND_PROPERTY_SUPPORT: 'scalable-tenant-and-property-support',
  LIFECYCLE_VISIBILITY: 'lifecycle-visibility',
  CONTINUOUS_SERVICE_IMPROVEMENT: 'continuous-service-improvement',
  VENDOR_NEUTRAL_OPERATIONAL_CAPABILITIES: 'vendor-neutral-operational-capabilities'
});

export const SERVICE_OPERATIONS_PRINCIPLES = Object.freeze({
  SERVICE_OUTCOME_FIRST: 'service-outcome-first',
  ONE_ACCOUNTABLE_SERVICE_OWNER: 'one-accountable-service-owner',
  OPERATIONAL_READINESS_BEFORE_PRODUCTION: 'operational-readiness-before-production',
  HEALTH_IS_MULTIDIMENSIONAL: 'health-is-multidimensional',
  DEPENDENCIES_OPERATED_EXPLICITLY: 'dependencies-operated-explicitly',
  FAILURE_IS_EXPECTED: 'failure-is-expected',
  AUTOMATION_IS_GOVERNED: 'automation-is-governed',
  IMPROVEMENT_IS_CONTINUOUS: 'improvement-is-continuous'
});

export const SERVICE_OPERATIONAL_LIFECYCLE_STAGES = Object.freeze({
  DEFINE: 'Define',
  PREPARE: 'Prepare',
  INTRODUCE: 'Introduce',
  OPERATE: 'Operate',
  MEASURE: 'Measure',
  SUPPORT: 'Support',
  RECOVER: 'Recover',
  IMPROVE: 'Improve',
  EVOLVE_OR_RETIRE: 'Evolve or Retire'
});

export const SERVICE_CLASSIFICATION_DIMENSIONS = Object.freeze({
  BUSINESS_CRITICALITY: 'business-criticality',
  GUEST_IMPACT: 'guest-impact',
  REVENUE_IMPACT: 'revenue-impact',
  TENANT_SCOPE: 'tenant-scope',
  PROPERTY_SCOPE: 'property-scope',
  DATA_SENSITIVITY: 'data-sensitivity',
  SECURITY_RISK: 'security-risk',
  AVAILABILITY_REQUIREMENT: 'availability-requirement',
  RECOVERY_REQUIREMENT: 'recovery-requirement',
  DEPENDENCY_CENTRALITY: 'dependency-centrality',
  EXTERNAL_EXPOSURE: 'external-exposure',
  AI_PARTICIPATION: 'ai-participation',
  WORKFLOW_DURATION: 'workflow-duration',
  REGULATORY_RELEVANCE: 'regulatory-relevance',
  SUPPORT_COMPLEXITY: 'support-complexity'
});

export const SERVICE_OPERATION_TYPES = Object.freeze({
  BUSINESS_SERVICES: 'business-services',
  APPLICATION_SERVICES: 'application-services',
  PLATFORM_SERVICES: 'platform-services',
  AI_SERVICES: 'ai-services',
  WORKFLOW_SERVICES: 'workflow-services',
  INTEGRATION_SERVICES: 'integration-services',
  DATA_SERVICES: 'data-services',
  SECURITY_SERVICES: 'security-services'
});

export const SERVICE_OWNER_ACCOUNTABILITIES = Object.freeze({
  SERVICE_PURPOSE: 'service-purpose',
  BUSINESS_OUTCOMES: 'business-outcomes',
  SERVICE_COMMITMENTS: 'service-commitments',
  OPERATIONAL_CLASSIFICATION: 'operational-classification',
  OPERATIONAL_READINESS: 'operational-readiness',
  SERVICE_HEALTH: 'service-health',
  DEPENDENCIES: 'dependencies',
  CAPACITY: 'capacity',
  SECURITY: 'security',
  SUPPORT: 'support',
  INCIDENT_PARTICIPATION: 'incident-participation',
  RECOVERY: 'recovery',
  CHANGE_READINESS: 'change-readiness',
  DOCUMENTATION: 'documentation',
  RISK: 'risk',
  IMPROVEMENT: 'improvement',
  LIFECYCLE_DECISIONS: 'lifecycle-decisions'
});

export const SERVICE_OPERATIONS_SUPPORTING_ROLES = Object.freeze({
  BUSINESS_CAPABILITY_OWNER: 'business-capability-owner',
  PRODUCT_OWNER: 'product-owner',
  PLATFORM_OPERATIONS_OWNER: 'platform-operations-owner',
  TECHNICAL_SERVICE_LEAD: 'technical-service-lead',
  SUPPORT_TEAM: 'support-team',
  AI_OPERATIONS_OWNER: 'ai-operations-owner',
  WORKFLOW_OWNER: 'workflow-owner',
  INTEGRATION_OWNER: 'integration-owner',
  DATA_OWNER: 'data-owner',
  SECURITY_OWNER: 'security-owner',
  CAPACITY_OWNER: 'capacity-owner',
  CHANGE_AUTHORITY: 'change-authority',
  INCIDENT_COMMANDER: 'incident-commander',
  SUPPLIER_OR_PARTNER_OWNER: 'supplier-or-partner-owner',
  TENANT_ADMINISTRATOR: 'tenant-administrator',
  PROPERTY_OPERATOR: 'property-operator'
});

export const SERVICE_CATALOG_RECORD_FIELDS = Object.freeze({
  SERVICE_IDENTIFIER: 'service-identifier',
  SERVICE_NAME: 'service-name',
  PURPOSE: 'purpose',
  BUSINESS_CAPABILITIES_SUPPORTED: 'business-capabilities-supported',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  SUPPORTING_ROLES: 'supporting-roles',
  SERVICE_CLASSIFICATION: 'service-classification',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  CONSUMERS: 'consumers',
  INTERFACES: 'interfaces',
  DEPENDENCIES: 'dependencies',
  DATA_RESPONSIBILITIES: 'data-responsibilities',
  SECURITY_CLASSIFICATION: 'security-classification',
  SERVICE_COMMITMENTS: 'service-commitments',
  HEALTH_MODEL: 'health-model',
  SUPPORT_MODEL: 'support-model',
  ESCALATION_PATH: 'escalation-path',
  RECOVERY_OBJECTIVES: 'recovery-objectives',
  CONTINUITY_REQUIREMENTS: 'continuity-requirements',
  CHANGE_POLICY: 'change-policy',
  LIFECYCLE_STATE: 'lifecycle-state',
  DOCUMENTATION_REFERENCES: 'documentation-references'
});

export const SERVICE_OPERATIONS_COMMITMENT_TYPES = Object.freeze({
  AVAILABILITY: 'availability',
  PERFORMANCE: 'performance',
  ACCURACY: 'accuracy',
  COMPLETION_TIME: 'completion-time',
  DATA_FRESHNESS: 'data-freshness',
  DELIVERY_TIMELINESS: 'delivery-timeliness',
  AI_QUALITY_AND_SAFETY: 'ai-quality-and-safety',
  SUPPORT_RESPONSE: 'support-response',
  RECOVERY_TIME: 'recovery-time',
  RECOVERY_POINT: 'recovery-point',
  COMMUNICATION: 'communication',
  CAPACITY: 'capacity',
  SECURITY: 'security',
  COMPLIANCE: 'compliance',
  MAINTENANCE_NOTICE: 'maintenance-notice'
});

export const SERVICE_COMMITMENT_QUALITY_REQUIREMENTS = Object.freeze({
  BUSINESS_ALIGNED: 'business-aligned',
  MEASURABLE: 'measurable',
  OWNED: 'owned',
  ACHIEVABLE: 'achievable',
  DEPENDENCY_AWARE: 'dependency-aware',
  TENANT_APPROPRIATE: 'tenant-appropriate',
  REVIEWED_REGULARLY: 'reviewed-regularly'
});

export const SERVICE_LEVEL_INDICATOR_TYPES = Object.freeze({
  BUSINESS_INDICATORS: 'business-indicators',
  SERVICE_INDICATORS: 'service-indicators',
  DEPENDENCY_INDICATORS: 'dependency-indicators',
  USER_EXPERIENCE_INDICATORS: 'user-experience-indicators',
  SECURITY_INDICATORS: 'security-indicators',
  AI_QUALITY_INDICATORS: 'ai-quality-indicators',
  WORKFLOW_INDICATORS: 'workflow-indicators',
  INTEGRATION_INDICATORS: 'integration-indicators',
  DATA_QUALITY_INDICATORS: 'data-quality-indicators',
  CAPACITY_INDICATORS: 'capacity-indicators'
});

export const SERVICE_OPERATIONAL_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  DESIGNED: 'designed',
  OPERATIONALLY_PREPARING: 'operationally-preparing',
  READY: 'ready',
  LIMITED_PRODUCTION: 'limited-production',
  ACTIVE: 'active',
  DEGRADED: 'degraded',
  UNDER_MAINTENANCE: 'under-maintenance',
  RECOVERING: 'recovering',
  RESTRICTED: 'restricted',
  DEPRECATED: 'deprecated',
  RETIRING: 'retiring',
  RETIRED: 'retired'
});

export const SERVICE_OPERATIONAL_READINESS_REQUIREMENTS = Object.freeze({
  ACCOUNTABLE_OWNER: 'accountable-owner',
  APPROVED_SERVICE_CLASSIFICATION: 'approved-service-classification',
  DEFINED_CONSUMERS_AND_BUSINESS_OUTCOMES: 'defined-consumers-and-business-outcomes',
  DEFINED_COMMITMENTS: 'defined-commitments',
  COMPLETE_DEPENDENCY_INFORMATION: 'complete-dependency-information',
  OBSERVABLE_BUSINESS_AND_TECHNICAL_HEALTH: 'observable-business-and-technical-health',
  SUPPORT_COVERAGE: 'support-coverage',
  ESCALATION_PATHS: 'escalation-paths',
  CAPACITY_EXPECTATIONS: 'capacity-expectations',
  SECURITY_CONTROLS: 'security-controls',
  DATA_PROTECTIONS: 'data-protections',
  FAILURE_AND_DEGRADATION_BEHAVIOR: 'failure-and-degradation-behavior',
  RECOVERY_PROCEDURES: 'recovery-procedures',
  CONTINUITY_REQUIREMENTS: 'continuity-requirements',
  CHANGE_AND_RELEASE_PROCEDURES: 'change-and-release-procedures',
  CONFIGURATION_OWNERSHIP: 'configuration-ownership',
  OPERATIONAL_DOCUMENTATION: 'operational-documentation',
  VERIFIED_ROLLBACK_OR_COMPENSATION: 'verified-rollback-or-compensation',
  EVIDENCE_AND_AUDIT_CAPABILITY: 'evidence-and-audit-capability',
  TENANT_AND_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  KNOWN_RESIDUAL_RISKS: 'known-residual-risks'
});

export const SERVICE_HEALTH_DIMENSIONS = Object.freeze({
  BUSINESS_OUTCOME_HEALTH: 'business-outcome-health',
  USER_EXPERIENCE_HEALTH: 'user-experience-health',
  FUNCTIONAL_HEALTH: 'functional-health',
  DEPENDENCY_HEALTH: 'dependency-health',
  DATA_HEALTH: 'data-health',
  SECURITY_HEALTH: 'security-health',
  CAPACITY_HEALTH: 'capacity-health',
  RECOVERY_READINESS: 'recovery-readiness'
});

export const SERVICE_HEALTH_STATES = Object.freeze({
  HEALTHY: 'healthy',
  AT_RISK: 'at-risk',
  DEGRADED: 'degraded',
  PARTIALLY_UNAVAILABLE: 'partially-unavailable',
  UNAVAILABLE: 'unavailable',
  RECOVERING: 'recovering',
  UNDER_OBSERVATION: 'under-observation',
  MAINTENANCE: 'maintenance',
  RESTRICTED: 'restricted'
});

export const SERVICE_EVENT_MANAGEMENT_STEPS = Object.freeze({
  RECEIVE_OR_DETECT_EVIDENCE: 'receive-or-detect-evidence',
  VALIDATE_AND_ENRICH: 'validate-and-enrich',
  CORRELATE_RELATED_EVIDENCE: 'correlate-related-evidence',
  DETERMINE_OPERATIONAL_RELEVANCE: 'determine-operational-relevance',
  CLASSIFY_CONDITION: 'classify-condition',
  ROUTE_TO_OWNER_OR_AUTOMATION: 'route-to-owner-or-automation',
  INITIATE_ACTION_WHEN_REQUIRED: 'initiate-action-when-required',
  VERIFY_OUTCOME: 'verify-outcome',
  RETAIN_APPROPRIATE_EVIDENCE: 'retain-appropriate-evidence'
});

export const SERVICE_EVENT_CATEGORIES = Object.freeze({
  INFORMATIONAL: 'informational',
  ADVISORY: 'advisory',
  WARNING: 'warning',
  EXCEPTION: 'exception',
  CRITICAL: 'critical'
});

export const SERVICE_REQUEST_TYPES = Object.freeze({
  TENANT_CONFIGURATION: 'tenant-configuration',
  PROPERTY_ONBOARDING: 'property-onboarding',
  ACCESS_REQUEST: 'access-request',
  INTEGRATION_ENABLEMENT: 'integration-enablement',
  DATA_EXPORT: 'data-export',
  STANDARD_RECOVERY: 'standard-recovery',
  CAPACITY_ADJUSTMENT: 'capacity-adjustment',
  OPERATIONAL_INFORMATION: 'operational-information',
  SERVICE_ACTIVATION_OR_DEACTIVATION: 'service-activation-or-deactivation'
});

export const SERVICE_REQUEST_REQUIREMENTS = Object.freeze({
  DEFINED_ELIGIBILITY: 'defined-eligibility',
  REQUIRED_AUTHORIZATION: 'required-authorization',
  EXPECTED_FULFILLMENT: 'expected-fulfillment',
  SERVICE_COMMITMENT: 'service-commitment',
  FULFILLMENT_OWNER: 'fulfillment-owner',
  EVIDENCE: 'evidence',
  VERIFICATION: 'verification',
  ESCALATION: 'escalation'
});

export const SERVICE_SUPPORT_MODEL_FIELDS = Object.freeze({
  SUPPORT_CONSUMERS: 'support-consumers',
  COVERAGE: 'coverage',
  CONTACT_AND_INTAKE: 'contact-and-intake',
  TRIAGE_OWNERSHIP: 'triage-ownership',
  RESPONSE_OBJECTIVES: 'response-objectives',
  ESCALATION: 'escalation',
  SPECIALIST_SUPPORT: 'specialist-support',
  TENANT_AND_PROPERTY_RESPONSIBILITIES: 'tenant-and-property-responsibilities',
  SUPPLIER_PARTICIPATION: 'supplier-participation',
  COMMUNICATION_EXPECTATIONS: 'communication-expectations',
  KNOWN_LIMITATIONS: 'known-limitations',
  OUT_OF_HOURS_ARRANGEMENTS: 'out-of-hours-arrangements',
  EVIDENCE_REQUIREMENTS: 'evidence-requirements'
});

export const SERVICE_SUPPORT_TIERS = Object.freeze({
  SELF_SERVICE_AND_AUTOMATED_SUPPORT: 'self-service-and-automated-support',
  OPERATIONAL_TRIAGE: 'operational-triage',
  DOMAIN_AND_SERVICE_EXPERTISE: 'domain-and-service-expertise',
  ENGINEERING_OR_ARCHITECTURE_SUPPORT: 'engineering-or-architecture-support',
  SUPPLIER_OR_EXTERNAL_SUPPORT: 'supplier-or-external-support'
});

export const SERVICE_DEPENDENCY_TYPES = Object.freeze({
  UPSTREAM_DEPENDENCIES: 'upstream-dependencies',
  DOWNSTREAM_CONSUMERS: 'downstream-consumers',
  SHARED_PLATFORM_SERVICES: 'shared-platform-services',
  DATA_DEPENDENCIES: 'data-dependencies',
  AI_PROVIDERS_AND_MODELS: 'ai-providers-and-models',
  WORKFLOW_DEPENDENCIES: 'workflow-dependencies',
  EXTERNAL_INTEGRATIONS: 'external-integrations',
  IDENTITY_AND_SECURITY_SERVICES: 'identity-and-security-services',
  INFRASTRUCTURE_DEPENDENCIES: 'infrastructure-dependencies',
  HUMAN_AND_PROPERTY_PROCEDURES: 'human-and-property-procedures'
});

export const SERVICE_DEPENDENCY_OPERATION_FIELDS = Object.freeze({
  OWNERSHIP: 'ownership',
  COMMITMENTS: 'commitments',
  HEALTH_EXCHANGE: 'health-exchange',
  FAILURE_BEHAVIOR: 'failure-behavior',
  TIMEOUTS_AND_LIMITS: 'timeouts-and-limits',
  ESCALATION: 'escalation',
  DEGRADATION: 'degradation',
  RECOVERY_ORDER: 'recovery-order',
  CHANGE_NOTIFICATION: 'change-notification',
  CONTINUITY_ALTERNATIVES: 'continuity-alternatives'
});

export const SHARED_SERVICE_OPERATION_CONTROLS = Object.freeze({
  STRONG_ISOLATION: 'strong-isolation',
  FAIR_POLICY_DRIVEN_CAPACITY: 'fair-policy-driven-capacity',
  CROSS_TENANT_IMPACT_ASSESSMENT: 'cross-tenant-impact-assessment',
  CONTROLLED_CONFIGURATION: 'controlled-configuration',
  ENTERPRISE_COMMUNICATION: 'enterprise-communication',
  DEPENDENCY_TRANSPARENCY: 'dependency-transparency',
  SCALABLE_SUPPORT: 'scalable-support',
  COORDINATED_MAINTENANCE: 'coordinated-maintenance',
  TESTED_RECOVERY: 'tested-recovery',
  ENTERPRISE_LEVEL_OWNERSHIP: 'enterprise-level-ownership'
});

export const DEGRADED_SERVICE_MODES = Object.freeze({
  REDUCED_FUNCTIONALITY: 'reduced-functionality',
  LOWER_PRIORITY_WORK_DEFERRAL: 'lower-priority-work-deferral',
  READ_ONLY_OPERATION: 'read-only-operation',
  MANUAL_PROCESSING: 'manual-processing',
  CACHED_OR_LAST_KNOWN_INFORMATION: 'cached-or-last-known-information',
  ALTERNATIVE_CHANNELS: 'alternative-channels',
  REDUCED_AUTOMATION: 'reduced-automation',
  HUMAN_APPROVAL: 'human-approval',
  TENANT_SPECIFIC_RESTRICTIONS: 'tenant-specific-restrictions',
  PROPERTY_LOCAL_OPERATION: 'property-local-operation',
  CONTROLLED_QUEUEING: 'controlled-queueing'
});

export const SERVICE_RESTORATION_PRIORITIES = Object.freeze({
  SAFETY_AND_SECURITY: 'safety-and-security',
  DATA_INTEGRITY: 'data-integrity',
  CRITICAL_BUSINESS_AND_GUEST_OUTCOMES: 'critical-business-and-guest-outcomes',
  TENANT_AND_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  ESSENTIAL_DEPENDENCIES: 'essential-dependencies',
  STABLE_SERVICE_OPERATION: 'stable-service-operation',
  DEFERRED_WORK_RECOVERY: 'deferred-work-recovery',
  FULL_CAPABILITY_RESTORATION: 'full-capability-restoration',
  VERIFICATION: 'verification',
  IMPROVEMENT_FOLLOW_UP: 'improvement-follow-up'
});

export const SERVICE_RECOVERY_VERIFICATION_DIMENSIONS = Object.freeze({
  BUSINESS_TRANSACTIONS: 'business-transactions',
  GUEST_JOURNEYS: 'guest-journeys',
  PROPERTY_WORKFLOWS: 'property-workflows',
  SERVICE_FUNCTIONS: 'service-functions',
  DEPENDENCIES: 'dependencies',
  DATA_CONSISTENCY: 'data-consistency',
  INTEGRATION_DELIVERY: 'integration-delivery',
  AI_BEHAVIOR: 'ai-behavior',
  SECURITY_POSTURE: 'security-posture',
  CAPACITY_STABILITY: 'capacity-stability',
  DEFERRED_QUEUES: 'deferred-queues',
  ERROR_RATES: 'error-rates',
  USER_CONFIRMATION_WHERE_APPROPRIATE: 'user-confirmation-where-appropriate'
});

export const SERVICE_MAINTENANCE_PLANNING_FIELDS = Object.freeze({
  PURPOSE: 'purpose',
  SCOPE: 'scope',
  RISK: 'risk',
  DEPENDENCIES: 'dependencies',
  TENANT_AND_PROPERTY_IMPACT: 'tenant-and-property-impact',
  TIMING: 'timing',
  AUTHORIZATION: 'authorization',
  COMMUNICATION: 'communication',
  EXECUTION_OWNER: 'execution-owner',
  VERIFICATION: 'verification',
  ROLLBACK: 'rollback',
  CONTINUITY_ALTERNATIVES: 'continuity-alternatives'
});

export const SERVICE_CONFIGURATION_REQUIREMENTS = Object.freeze({
  OWNED: 'owned',
  VERSIONED: 'versioned',
  AUTHORIZED: 'authorized',
  VALIDATED: 'validated',
  ENVIRONMENT_SCOPED: 'environment-scoped',
  TENANT_SCOPED_WHERE_APPLICABLE: 'tenant-scoped-where-applicable',
  SECURE: 'secure',
  OBSERVABLE: 'observable',
  RECOVERABLE: 'recoverable',
  AUDITABLE: 'auditable'
});

export const AI_SERVICE_HEALTH_DIMENSIONS = Object.freeze({
  AVAILABILITY: 'availability',
  LATENCY: 'latency',
  MODEL_QUALITY: 'model-quality',
  SAFETY: 'safety',
  TOOL_EXECUTION: 'tool-execution',
  CONTEXT_QUALITY: 'context-quality',
  COST: 'cost',
  PROVIDER_DEPENDENCY: 'provider-dependency',
  POLICY_COMPLIANCE: 'policy-compliance',
  EXPLAINABILITY: 'explainability',
  HUMAN_ESCALATION: 'human-escalation',
  DRIFT: 'drift'
});

export const WORKFLOW_SERVICE_HEALTH_DIMENSIONS = Object.freeze({
  WORKFLOW_INITIATION: 'workflow-initiation',
  STATE_PERSISTENCE: 'state-persistence',
  PROGRESS: 'progress',
  DEADLINE_ADHERENCE: 'deadline-adherence',
  RETRY_BEHAVIOR: 'retry-behavior',
  COMPENSATION: 'compensation',
  EXCEPTION_HANDLING: 'exception-handling',
  MANUAL_INTERVENTION: 'manual-intervention',
  IDEMPOTENCY: 'idempotency',
  COMPLETION: 'completion',
  RECOVERY: 'recovery'
});

export const INTEGRATION_SERVICE_HEALTH_DIMENSIONS = Object.freeze({
  CONNECTIVITY: 'connectivity',
  AUTHENTICATION: 'authentication',
  CONTRACT_COMPATIBILITY: 'contract-compatibility',
  DELIVERY: 'delivery',
  ORDERING: 'ordering',
  DUPLICATION: 'duplication',
  RATE_CONSTRAINTS: 'rate-constraints',
  EXTERNAL_AVAILABILITY: 'external-availability',
  DATA_MAPPING: 'data-mapping',
  FAILURE_QUEUES: 'failure-queues',
  RECONCILIATION: 'reconciliation',
  PARTNER_COMMUNICATION: 'partner-communication'
});

export const DATA_SERVICE_HEALTH_DIMENSIONS = Object.freeze({
  AVAILABILITY: 'availability',
  INTEGRITY: 'integrity',
  CONSISTENCY: 'consistency',
  QUALITY: 'quality',
  FRESHNESS: 'freshness',
  LINEAGE: 'lineage',
  SECURITY: 'security',
  RETENTION: 'retention',
  BACKUP: 'backup',
  RECOVERY: 'recovery',
  REPLICATION: 'replication',
  AUTHORIZED_ACCESS: 'authorized-access'
});

export const MULTI_TENANT_SERVICE_OPERATION_SCOPES = Object.freeze({
  PLATFORM_WIDE_HEALTH: 'platform-wide-health',
  TENANT_SPECIFIC_HEALTH: 'tenant-specific-health',
  ORGANIZATION_SPECIFIC_HEALTH: 'organization-specific-health',
  PROPERTY_SPECIFIC_HEALTH: 'property-specific-health',
  CHANNEL_SPECIFIC_HEALTH: 'channel-specific-health',
  PARTNER_SPECIFIC_HEALTH: 'partner-specific-health'
});

export const PROPERTY_FACING_SERVICE_CONTEXT = Object.freeze({
  LOCAL_OPERATING_HOURS: 'local-operating-hours',
  GUEST_ARRIVAL_AND_STAY_ACTIVITY: 'guest-arrival-and-stay-activity',
  CONNECTIVITY_LIMITATIONS: 'connectivity-limitations',
  MANUAL_ALTERNATIVES: 'manual-alternatives',
  LOCAL_STAFF_AVAILABILITY: 'local-staff-availability',
  PHYSICAL_PROCESSES: 'physical-processes',
  LOCAL_REGULATIONS: 'local-regulations',
  PROPERTY_SPECIFIC_CONFIGURATION: 'property-specific-configuration',
  CRITICAL_LOCAL_EVENTS: 'critical-local-events',
  COMMUNICATION_CHANNELS: 'communication-channels'
});

export const SERVICE_PERFORMANCE_REVIEW_INPUTS = Object.freeze({
  BUSINESS_OUTCOMES: 'business-outcomes',
  SERVICE_COMMITMENTS: 'service-commitments',
  USER_EXPERIENCE: 'user-experience',
  INCIDENTS_AND_PROBLEMS: 'incidents-and-problems',
  REQUEST_PERFORMANCE: 'request-performance',
  CAPACITY: 'capacity',
  CHANGES_AND_RELEASES: 'changes-and-releases',
  SECURITY: 'security',
  AI_QUALITY: 'ai-quality',
  WORKFLOW_COMPLETION: 'workflow-completion',
  INTEGRATION_RELIABILITY: 'integration-reliability',
  DATA_QUALITY: 'data-quality',
  COST_AND_EFFICIENCY: 'cost-and-efficiency',
  TENANT_AND_PROPERTY_FEEDBACK: 'tenant-and-property-feedback',
  IMPROVEMENT_PROGRESS: 'improvement-progress'
});

export const SERVICE_IMPROVEMENT_SOURCES = Object.freeze({
  SERVICE_LEVEL_TRENDS: 'service-level-trends',
  INCIDENTS: 'incidents',
  PROBLEMS: 'problems',
  CAPACITY_CONSTRAINTS: 'capacity-constraints',
  CHANGE_OUTCOMES: 'change-outcomes',
  SECURITY_FINDINGS: 'security-findings',
  AUDIT_FINDINGS: 'audit-findings',
  AI_EVALUATION: 'ai-evaluation',
  WORKFLOW_EXCEPTIONS: 'workflow-exceptions',
  INTEGRATION_FAILURES: 'integration-failures',
  TENANT_FEEDBACK: 'tenant-feedback',
  PROPERTY_FEEDBACK: 'property-feedback',
  OPERATIONAL_TOIL: 'operational-toil',
  ARCHITECTURE_EVOLUTION: 'architecture-evolution'
});

export const SERVICE_RETIREMENT_REQUIREMENTS = Object.freeze({
  CONSUMER_MIGRATION: 'consumer-migration',
  DEPENDENCY_REMOVAL: 'dependency-removal',
  DATA_DISPOSITION: 'data-disposition',
  SECURITY_ACCESS_REMOVAL: 'security-access-removal',
  INTEGRATION_CLOSURE: 'integration-closure',
  WORKFLOW_COMPLETION: 'workflow-completion',
  TENANT_AND_PROPERTY_COMMUNICATION: 'tenant-and-property-communication',
  OPERATIONAL_RECORD_RETENTION: 'operational-record-retention',
  SUPPORT_CLOSURE: 'support-closure',
  CONTRACT_TERMINATION: 'contract-termination',
  RECOVERY_DATA_DISPOSITION: 'recovery-data-disposition',
  CATALOG_UPDATE: 'catalog-update'
});

export const SERVICE_OPERATIONS_QUALITY_ATTRIBUTES = Object.freeze({
  RELIABILITY: 'reliability',
  AVAILABILITY: 'availability',
  SUPPORTABILITY: 'supportability',
  RECOVERABILITY: 'recoverability',
  SCALABILITY: 'scalability',
  SECURITY: 'security',
  PERFORMANCE: 'performance',
  TRACEABILITY: 'traceability',
  MAINTAINABILITY: 'maintainability',
  OPERABILITY: 'operability',
  ADAPTABILITY: 'adaptability',
  TENANT_ISOLATION: 'tenant-isolation',
  BUSINESS_CONTINUITY: 'business-continuity'
});

export const SERVICE_OPERATIONS_ARCHITECTURAL_RULES = Object.freeze({
  ASSIGN_ONE_ACCOUNTABLE_OWNER_TO_EVERY_PRODUCTION_SERVICE: 'assign-one-accountable-owner-to-every-production-service',
  DEFINE_SERVICES_THROUGH_BUSINESS_OUTCOMES: 'define-services-through-business-outcomes',
  CLASSIFY_SERVICES_BY_IMPACT_AND_OPERATIONAL_RISK: 'classify-services-by-impact-and-operational-risk',
  MAINTAIN_AUTHORITATIVE_SERVICE_CATALOG: 'maintain-authoritative-service-catalog',
  DEFINE_MEASURABLE_SERVICE_COMMITMENTS: 'define-measurable-service-commitments',
  VERIFY_OPERATIONAL_READINESS_BEFORE_PRODUCTION_USE: 'verify-operational-readiness-before-production-use',
  MODEL_SERVICE_HEALTH_ACROSS_BUSINESS_AND_TECHNICAL_DIMENSIONS: 'model-service-health-across-business-and-technical-dimensions',
  OPERATE_DEPENDENCIES_EXPLICITLY: 'operate-dependencies-explicitly',
  SUPPORT_ROUTINE_REQUESTS_AND_MEANINGFUL_EVENT_HANDLING: 'support-routine-requests-and-meaningful-event-handling',
  DEFINE_SUPPORT_AND_ESCALATION_MODELS: 'define-support-and-escalation-models',
  DESIGN_APPROVED_DEGRADED_MODES: 'design-approved-degraded-modes',
  VERIFY_RESTORATION_END_TO_END: 'verify-restoration-end-to-end',
  GOVERN_CONFIGURATION_AND_MAINTENANCE_AS_OPERATIONAL_CHANGE: 'govern-configuration-and-maintenance-as-operational-change',
  ADDRESS_AI_WORKFLOW_INTEGRATION_AND_DATA_CHARACTERISTICS: 'address-ai-workflow-integration-and-data-characteristics',
  PRESERVE_TENANT_AND_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  REVIEW_AND_IMPROVE_SERVICES_CONTINUOUSLY: 'review-and-improve-services-continuously',
  COMPLETE_OPERATIONAL_OBLIGATIONS_BEFORE_RETIREMENT: 'complete-operational-obligations-before-retirement',
  REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT: 'remain-vendor-neutral-and-technology-independent'
});

export const FUTURE_SERVICE_OPERATIONS_CAPABILITIES = Object.freeze({
  PREDICTIVE_SERVICE_HEALTH: 'predictive-service-health',
  AUTOMATED_SERVICE_LEVEL_OPTIMIZATION: 'automated-service-level-optimization',
  INTENT_BASED_SERVICE_OPERATIONS: 'intent-based-service-operations',
  AI_ASSISTED_DIAGNOSIS: 'ai-assisted-diagnosis',
  AUTONOMOUS_BOUNDED_REMEDIATION: 'autonomous-bounded-remediation',
  DYNAMIC_SERVICE_COMMITMENTS: 'dynamic-service-commitments',
  SERVICE_DIGITAL_TWINS: 'service-digital-twins',
  CROSS_PROPERTY_SERVICE_OPTIMIZATION: 'cross-property-service-optimization',
  ADAPTIVE_SUPPORT_MODELS: 'adaptive-support-models',
  SEMANTIC_DEPENDENCY_MAPS: 'semantic-dependency-maps',
  SELF_IMPROVING_RUNBOOKS: 'self-improving-runbooks',
  FEDERATED_SERVICE_OPERATIONS: 'federated-service-operations'
});

export const INCIDENT_PROBLEM_OBJECTIVES = Object.freeze({
  RAPID_RESTORATION_OF_BUSINESS_OUTCOMES: 'rapid-restoration-of-business-outcomes',
  CONSISTENT_INCIDENT_HANDLING: 'consistent-incident-handling',
  BUSINESS_IMPACT_BASED_PRIORITY: 'business-impact-based-priority',
  CLEAR_OWNERSHIP_AND_COMMAND: 'clear-ownership-and-command',
  SAFE_AND_VERIFIED_RECOVERY: 'safe-and-verified-recovery',
  ACCURATE_TIMELY_COMMUNICATION: 'accurate-timely-communication',
  PRESERVATION_OF_OPERATIONAL_EVIDENCE: 'preservation-of-operational-evidence',
  EFFECTIVE_CONTROL_OF_RECURRING_RISK: 'effective-control-of-recurring-risk',
  SYSTEMATIC_ROOT_CAUSE_LEARNING: 'systematic-root-cause-learning',
  ACCOUNTABLE_REMEDIATION: 'accountable-remediation',
  REDUCED_INCIDENT_FREQUENCY_AND_IMPACT: 'reduced-incident-frequency-and-impact',
  CROSS_TENANT_PROTECTION: 'cross-tenant-protection',
  SCALABLE_PROPERTY_OPERATIONS: 'scalable-property-operations',
  VENDOR_NEUTRAL_MANAGEMENT_CAPABILITIES: 'vendor-neutral-management-capabilities'
});

export const INCIDENT_PROBLEM_PRINCIPLES = Object.freeze({
  RESTORE_BUSINESS_OUTCOMES_FIRST: 'restore-business-outcomes-first',
  SEPARATE_RESTORATION_FROM_ROOT_CAUSE: 'separate-restoration-from-root-cause',
  ONE_ACCOUNTABLE_INCIDENT_OWNER: 'one-accountable-incident-owner',
  EVIDENCE_BEFORE_ASSUMPTION: 'evidence-before-assumption',
  CONTAIN_BEFORE_EXPANDING: 'contain-before-expanding',
  COMMUNICATE_WITH_CONTEXT: 'communicate-with-context',
  LEARN_WITHOUT_BLAME: 'learn-without-blame',
  REMEDIATION_MUST_BE_OWNED: 'remediation-must-be-owned'
});

export const INCIDENT_EXAMPLES = Object.freeze({
  GUEST_JOURNEY_FAILURE: 'guest-journey-failure',
  BOOKING_OR_AVAILABILITY_DISRUPTION: 'booking-or-availability-disruption',
  INCORRECT_PRICING_BEHAVIOR: 'incorrect-pricing-behavior',
  PROPERTY_OPERATION_FAILURE: 'property-operation-failure',
  SERVICE_UNAVAILABILITY: 'service-unavailability',
  WORKFLOW_FAILURE: 'workflow-failure',
  AI_SAFETY_OR_QUALITY_FAILURE: 'ai-safety-or-quality-failure',
  INTEGRATION_DISRUPTION: 'integration-disruption',
  DATA_CORRUPTION_OR_UNAVAILABILITY: 'data-corruption-or-unavailability',
  SECURITY_COMPROMISE: 'security-compromise',
  CAPACITY_EXHAUSTION: 'capacity-exhaustion',
  DEPLOYMENT_FAILURE: 'deployment-failure',
  EXTERNAL_PROVIDER_DISRUPTION: 'external-provider-disruption',
  SERVICE_COMMITMENT_VIOLATION: 'service-commitment-violation'
});

export const PROBLEM_EXAMPLES = Object.freeze({
  ARCHITECTURAL_WEAKNESS: 'architectural-weakness',
  DEFECTIVE_IMPLEMENTATION: 'defective-implementation',
  FRAGILE_DEPENDENCY: 'fragile-dependency',
  CAPACITY_LIMITATION: 'capacity-limitation',
  UNSAFE_AUTOMATION: 'unsafe-automation',
  CONFIGURATION_DRIFT: 'configuration-drift',
  INADEQUATE_OBSERVABILITY: 'inadequate-observability',
  MISSING_RECOVERY_CAPABILITY: 'missing-recovery-capability',
  PROCESS_FAILURE: 'process-failure',
  AMBIGUOUS_OWNERSHIP: 'ambiguous-ownership',
  REPEATED_HUMAN_ERROR_ENABLED_BY_WEAK_CONTROLS: 'repeated-human-error-enabled-by-weak-controls',
  EXTERNAL_PROVIDER_LIMITATION: 'external-provider-limitation',
  DATA_QUALITY_DEFECT: 'data-quality-defect',
  SECURITY_CONTROL_WEAKNESS: 'security-control-weakness'
});

export const INCIDENT_DETECTION_SOURCES = Object.freeze({
  BUSINESS_OUTCOME_MONITORING: 'business-outcome-monitoring',
  GUEST_REPORTS: 'guest-reports',
  PROPERTY_REPORTS: 'property-reports',
  TENANT_SUPPORT: 'tenant-support',
  SERVICE_TELEMETRY: 'service-telemetry',
  AI_EVALUATION: 'ai-evaluation',
  WORKFLOW_SUPERVISION: 'workflow-supervision',
  INTEGRATION_EVIDENCE: 'integration-evidence',
  DATA_QUALITY_CONTROLS: 'data-quality-controls',
  SECURITY_MONITORING: 'security-monitoring',
  CAPACITY_INDICATORS: 'capacity-indicators',
  AUTOMATED_ANOMALY_DETECTION: 'automated-anomaly-detection',
  PARTNER_NOTIFICATION: 'partner-notification',
  CHANGE_VERIFICATION: 'change-verification',
  OPERATOR_OBSERVATION: 'operator-observation'
});

export const INCIDENT_RECORD_FIELDS = Object.freeze({
  INCIDENT_IDENTIFIER: 'incident-identifier',
  DETECTION_AND_REPORTING_TIME: 'detection-and-reporting-time',
  REPORTER_OR_DETECTION_SOURCE: 'reporter-or-detection-source',
  BUSINESS_IMPACT: 'business-impact',
  GUEST_IMPACT: 'guest-impact',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  AFFECTED_CAPABILITIES: 'affected-capabilities',
  AFFECTED_SERVICES: 'affected-services',
  DEPENDENCIES: 'dependencies',
  SECURITY_AND_DATA_IMPLICATIONS: 'security-and-data-implications',
  CLASSIFICATION: 'classification',
  PRIORITY: 'priority',
  CURRENT_STATE: 'current-state',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  COMMAND_LEVEL: 'command-level',
  PARTICIPANTS: 'participants',
  KNOWN_FACTS: 'known-facts',
  HYPOTHESES: 'hypotheses',
  DECISIONS: 'decisions',
  ACTIONS: 'actions',
  WORKAROUNDS: 'workarounds',
  COMMUNICATIONS: 'communications',
  RECOVERY_CRITERIA: 'recovery-criteria',
  TIMELINE: 'timeline',
  EVIDENCE_REFERENCES: 'evidence-references',
  RELATED_CHANGES: 'related-changes',
  RELATED_INCIDENTS: 'related-incidents',
  RELATED_PROBLEMS: 'related-problems',
  CLOSURE_AND_REVIEW_STATUS: 'closure-and-review-status'
});

export const INCIDENT_CLASSIFICATION_DIMENSIONS = Object.freeze({
  BUSINESS_CAPABILITY: 'business-capability',
  SERVICE: 'service',
  AI: 'ai',
  WORKFLOW: 'workflow',
  INTEGRATION: 'integration',
  DATA: 'data',
  SECURITY: 'security',
  PLATFORM: 'platform',
  TENANT: 'tenant',
  PROPERTY: 'property',
  EXTERNAL_PROVIDER: 'external-provider',
  CHANGE_RELATED: 'change-related',
  CAPACITY_RELATED: 'capacity-related',
  CONTINUITY_RELATED: 'continuity-related'
});

export const INCIDENT_IMPACT_DIMENSIONS = Object.freeze({
  GUESTS: 'guests',
  PROPERTIES: 'properties',
  TENANTS: 'tenants',
  REVENUE: 'revenue',
  BOOKINGS: 'bookings',
  AVAILABILITY: 'availability',
  PAYMENTS: 'payments',
  COMMUNICATIONS: 'communications',
  SERVICES: 'services',
  WORKFLOWS: 'workflows',
  AI_BEHAVIOR: 'ai-behavior',
  DATA: 'data',
  SECURITY: 'security',
  COMPLIANCE: 'compliance',
  REPUTATION: 'reputation',
  EXTERNAL_PARTNERS: 'external-partners'
});

export const INCIDENT_URGENCY_FACTORS = Object.freeze({
  ACTIVE_GUEST_IMPACT: 'active-guest-impact',
  ARRIVAL_OR_DEPARTURE_WINDOWS: 'arrival-or-departure-windows',
  BOOKING_DEADLINES: 'booking-deadlines',
  PAYMENT_DEADLINES: 'payment-deadlines',
  SECURITY_EXPOSURE: 'security-exposure',
  DATA_LOSS_PROGRESSION: 'data-loss-progression',
  EXPANDING_BLAST_RADIUS: 'expanding-blast-radius',
  REGULATORY_TIMELINES: 'regulatory-timelines',
  RECOVERY_WINDOW_CONSTRAINTS: 'recovery-window-constraints',
  LACK_OF_ALTERNATIVES: 'lack-of-alternatives',
  EXTERNAL_COMMUNICATION_COMMITMENTS: 'external-communication-commitments'
});

export const INCIDENT_PRIORITY_USES = Object.freeze({
  RESPONSE_OBJECTIVE: 'response-objective',
  COMMAND_LEVEL: 'command-level',
  RESOURCE_ALLOCATION: 'resource-allocation',
  COMMUNICATION_CADENCE: 'communication-cadence',
  ESCALATION_TIMING: 'escalation-timing',
  CHANGE_RESTRICTIONS: 'change-restrictions',
  REVIEW_REQUIREMENTS: 'review-requirements'
});

export const INCIDENT_LIFECYCLE_STAGES = Object.freeze({
  DETECT_OR_REPORT: 'Detect or Report',
  RECORD_AND_CORRELATE: 'Record and Correlate',
  CLASSIFY_AND_PRIORITIZE: 'Classify and Prioritize',
  ASSIGN_OWNERSHIP: 'Assign Ownership',
  ASSESS_AND_DIAGNOSE: 'Assess and Diagnose',
  CONTAIN: 'Contain',
  RESTORE_OR_WORK_AROUND: 'Restore or Work Around',
  VERIFY_BUSINESS_OUTCOME: 'Verify Business Outcome',
  MONITOR_STABILITY: 'Monitor Stability',
  TRANSITION_AND_CLOSE: 'Transition and Close',
  REVIEW_AND_IMPROVE: 'Review and Improve'
});

export const INCIDENT_STATES = Object.freeze({
  NEW: 'new',
  ASSESSING: 'assessing',
  ASSIGNED: 'assigned',
  INVESTIGATING: 'investigating',
  CONTAINING: 'containing',
  RESTORING: 'restoring',
  MONITORING: 'monitoring',
  RESOLVED: 'resolved',
  CLOSED: 'closed',
  REOPENED: 'reopened',
  TRANSFERRED_TO_PROBLEM: 'transferred-to-problem',
  TRANSFERRED_TO_CONTINUITY_OPERATIONS: 'transferred-to-continuity-operations'
});

export const INCIDENT_ROLES = Object.freeze({
  INCIDENT_OWNER: 'incident-owner',
  INCIDENT_COMMANDER: 'incident-commander',
  BUSINESS_IMPACT_LEAD: 'business-impact-lead',
  SERVICE_OR_DOMAIN_LEAD: 'service-or-domain-lead',
  SECURITY_LEAD: 'security-lead',
  COMMUNICATIONS_LEAD: 'communications-lead',
  ACTION_OWNER: 'action-owner',
  EVIDENCE_CUSTODIAN: 'evidence-custodian',
  PROBLEM_OWNER: 'problem-owner'
});

export const INCIDENT_DIAGNOSIS_ACTIVITIES = Object.freeze({
  ESTABLISH_KNOWN_FACTS: 'establish-known-facts',
  IDENTIFY_AFFECTED_AND_UNAFFECTED_BOUNDARIES: 'identify-affected-and-unaffected-boundaries',
  TRACE_DEPENDENCIES: 'trace-dependencies',
  CORRELATE_RECENT_CHANGES: 'correlate-recent-changes',
  COMPARE_EXPECTED_AND_ACTUAL_BEHAVIOR: 'compare-expected-and-actual-behavior',
  EVALUATE_SECURITY_IMPLICATIONS: 'evaluate-security-implications',
  EVALUATE_DATA_INTEGRITY: 'evaluate-data-integrity',
  REPRODUCE_SAFELY_WHERE_APPROPRIATE: 'reproduce-safely-where-appropriate',
  TEST_HYPOTHESES: 'test-hypotheses',
  AVOID_UNCONTROLLED_EXPERIMENTATION: 'avoid-uncontrolled-experimentation',
  PRESERVE_EVIDENCE: 'preserve-evidence',
  IDENTIFY_RESTORATION_OPTIONS: 'identify-restoration-options'
});

export const INCIDENT_CONTAINMENT_OPTIONS = Object.freeze({
  ISOLATE_TENANT_PROPERTY_SERVICE_WORKFLOW_OR_INTEGRATION: 'isolate-tenant-property-service-workflow-or-integration',
  DISABLE_UNSAFE_FUNCTIONALITY: 'disable-unsafe-functionality',
  REDUCE_AI_AUTONOMY: 'reduce-ai-autonomy',
  BLOCK_HARMFUL_TOOL_EXECUTION: 'block-harmful-tool-execution',
  SUSPEND_CHANGE: 'suspend-change',
  RESTRICT_TRAFFIC: 'restrict-traffic',
  PRESERVE_DATA_FROM_CORRUPTION: 'preserve-data-from-corruption',
  ACTIVATE_CIRCUIT_BREAKER: 'activate-circuit-breaker',
  USE_SAFE_FALLBACK: 'use-safe-fallback',
  SWITCH_TO_MANUAL_OPERATIONS: 'switch-to-manual-operations',
  REVOKE_CREDENTIALS: 'revoke-credentials',
  INCREASE_REVIEW_OR_APPROVAL: 'increase-review-or-approval'
});

export const WORKAROUND_FIELDS = Object.freeze({
  APPLICABLE_CONDITION: 'applicable-condition',
  AUTHORIZED_SCOPE: 'authorized-scope',
  EXPECTED_OUTCOME: 'expected-outcome',
  RISKS_AND_LIMITATIONS: 'risks-and-limitations',
  SECURITY_IMPACT: 'security-impact',
  DATA_IMPACT: 'data-impact',
  TENANT_AND_PROPERTY_IMPACT: 'tenant-and-property-impact',
  DURATION: 'duration',
  EXECUTION_STEPS: 'execution-steps',
  VERIFICATION: 'verification',
  REVERSAL: 'reversal',
  OWNER: 'owner',
  EXPIRATION_OR_REVIEW_DATE: 'expiration-or-review-date'
});

export const INCIDENT_RESTORATION_OPTIONS = Object.freeze({
  RESTART_OR_FAILOVER: 'restart-or-failover',
  ROLLBACK: 'rollback',
  TRAFFIC_REROUTING: 'traffic-rerouting',
  CAPACITY_ADJUSTMENT: 'capacity-adjustment',
  QUEUE_REPLAY: 'queue-replay',
  DATA_RECOVERY: 'data-recovery',
  CONFIGURATION_CORRECTION: 'configuration-correction',
  INTEGRATION_FALLBACK: 'integration-fallback',
  WORKFLOW_COMPENSATION: 'workflow-compensation',
  MODEL_OR_PROVIDER_SUBSTITUTION: 'model-or-provider-substitution',
  REDUCED_AUTONOMY: 'reduced-autonomy',
  MANUAL_PROCEDURE: 'manual-procedure',
  FEATURE_RESTRICTION: 'feature-restriction',
  EMERGENCY_CHANGE: 'emergency-change'
});

export const INCIDENT_RECOVERY_VERIFICATION_DIMENSIONS = Object.freeze({
  GUEST_JOURNEY_COMPLETION: 'guest-journey-completion',
  BOOKING_CORRECTNESS: 'booking-correctness',
  PROPERTY_OPERATION_RESTORATION: 'property-operation-restoration',
  SERVICE_HEALTH: 'service-health',
  WORKFLOW_COMPLETION: 'workflow-completion',
  AI_QUALITY_AND_SAFETY: 'ai-quality-and-safety',
  INTEGRATION_DELIVERY: 'integration-delivery',
  DATA_CONSISTENCY: 'data-consistency',
  SECURITY_POSTURE: 'security-posture',
  CAPACITY_STABILITY: 'capacity-stability',
  QUEUE_PROCESSING: 'queue-processing',
  TENANT_CONFIRMATION: 'tenant-confirmation',
  PROPERTY_CONFIRMATION: 'property-confirmation'
});

export const POST_RESTORATION_OBSERVATION_CHECKS = Object.freeze({
  STABILITY: 'stability',
  NO_RECURRENCE: 'no-recurrence',
  BACKLOG_RECOVERY: 'backlog-recovery',
  DEPENDENCY_HEALTH: 'dependency-health',
  CAPACITY_MARGIN: 'capacity-margin',
  DATA_CONSISTENCY: 'data-consistency',
  SECURITY_CONFIDENCE: 'security-confidence',
  WORKAROUND_EFFECTIVENESS: 'workaround-effectiveness',
  USER_OUTCOME: 'user-outcome',
  NO_HIDDEN_CROSS_TENANT_IMPACT: 'no-hidden-cross-tenant-impact'
});

export const MAJOR_INCIDENT_REQUIREMENTS = Object.freeze({
  EXPLICIT_DECLARATION: 'explicit-declaration',
  DEDICATED_COMMAND: 'dedicated-command',
  BUSINESS_OWNER_INVOLVEMENT: 'business-owner-involvement',
  CROSS_DOMAIN_PARTICIPATION: 'cross-domain-participation',
  AUTHORITATIVE_TIMELINE: 'authoritative-timeline',
  FREQUENT_IMPACT_REASSESSMENT: 'frequent-impact-reassessment',
  CONTROLLED_COMMUNICATIONS: 'controlled-communications',
  DECISION_LOGGING: 'decision-logging',
  CHANGE_COORDINATION: 'change-coordination',
  DEFINED_RECOVERY_CRITERIA: 'defined-recovery-criteria',
  POST_INCIDENT_REVIEW: 'post-incident-review'
});

export const CRISIS_CONTINUITY_TRANSITION_CRITERIA = Object.freeze({
  NORMAL_RECOVERY_NOT_ACHIEVABLE: 'normal-recovery-not-achievable',
  CRITICAL_CAPABILITY_NEEDS_ALTERNATE_MODE: 'critical-capability-needs-alternate-mode',
  MULTIPLE_PROPERTIES_OR_TENANTS_SUSTAINED_DISRUPTION: 'multiple-properties-or-tenants-sustained-disruption',
  SAFETY_LEGAL_REGULATORY_OR_ENTERPRISE_VIABILITY_THREAT: 'safety-legal-regulatory-or-enterprise-viability-threat',
  EXTERNAL_COORDINATION_EXCEEDS_NORMAL_INCIDENT_STRUCTURES: 'external-coordination-exceeds-normal-incident-structures',
  STRATEGIC_BUSINESS_PRIORITIZATION_REQUIRED: 'strategic-business-prioritization-required'
});

export const INCIDENT_COMMUNICATION_FIELDS = Object.freeze({
  WHAT_IS_AFFECTED: 'what-is-affected',
  WHO_IS_AFFECTED: 'who-is-affected',
  KNOWN_BUSINESS_IMPACT: 'known-business-impact',
  CURRENT_RESPONSE: 'current-response',
  AVAILABLE_WORKAROUND: 'available-workaround',
  CURRENT_RISK: 'current-risk',
  USER_OR_OPERATOR_ACTION: 'user-or-operator-action',
  EXPECTED_NEXT_UPDATE: 'expected-next-update',
  VERIFIED_RECOVERY_CONFIRMATION: 'verified-recovery-confirmation'
});

export const TENANT_PROPERTY_INCIDENT_COMMUNICATION_FIELDS = Object.freeze({
  AUTHORIZED_SCOPE: 'authorized-scope',
  LOCAL_OPERATIONAL_IMPACT: 'local-operational-impact',
  GUEST_FACING_IMPLICATIONS: 'guest-facing-implications',
  MANUAL_ALTERNATIVES: 'manual-alternatives',
  REQUIRED_LOCAL_ACTION: 'required-local-action',
  EXPECTED_DURATION: 'expected-duration',
  RECOVERY_PROGRESS: 'recovery-progress',
  CONFIRMATION_REQUIREMENTS: 'confirmation-requirements'
});

export const INCIDENT_EVIDENCE_TYPES = Object.freeze({
  BUSINESS_EVENTS: 'business-events',
  SERVICE_TELEMETRY: 'service-telemetry',
  AI_EXECUTION_RECORDS: 'ai-execution-records',
  WORKFLOW_STATE: 'workflow-state',
  INTEGRATION_EXCHANGES: 'integration-exchanges',
  DATA_QUALITY_RESULTS: 'data-quality-results',
  SECURITY_RECORDS: 'security-records',
  CONFIGURATION_STATE: 'configuration-state',
  DEPLOYMENT_HISTORY: 'deployment-history',
  COMMUNICATIONS: 'communications',
  DECISIONS: 'decisions',
  ACTION_OUTCOMES: 'action-outcomes',
  USER_REPORTS: 'user-reports',
  PARTNER_REPORTS: 'partner-reports'
});

export const SECURITY_INCIDENT_REQUIREMENTS = Object.freeze({
  ENGAGE_SECURITY_OPERATIONS: 'engage-security-operations',
  PRIORITIZE_EVIDENCE_PRESERVATION: 'prioritize-evidence-preservation',
  RESTRICT_ACCESS_AND_DISCLOSURE: 'restrict-access-and-disclosure',
  FOLLOW_SECURITY_AUTHORITY_FOR_CONTAINMENT: 'follow-security-authority-for-containment',
  ASSESS_REGULATORY_AND_LEGAL_OBLIGATIONS: 'assess-regulatory-and-legal-obligations',
  CONTROL_COMMUNICATION: 'control-communication',
  CONFIRM_SECURITY_POSTURE_ON_RECOVERY: 'confirm-security-posture-on-recovery'
});

export const DATA_INCIDENT_TYPES = Object.freeze({
  LOSS: 'loss',
  CORRUPTION: 'corruption',
  UNAUTHORIZED_CHANGE: 'unauthorized-change',
  UNAVAILABILITY: 'unavailability',
  INCONSISTENCY: 'inconsistency',
  PRIVACY_EXPOSURE: 'privacy-exposure',
  STALE_INFORMATION: 'stale-information',
  INCORRECT_LINEAGE: 'incorrect-lineage',
  FAILED_REPLICATION: 'failed-replication',
  RECOVERY_FAILURE: 'recovery-failure'
});

export const AI_INCIDENT_TYPES = Object.freeze({
  UNSAFE_OUTPUT: 'unsafe-output',
  INCORRECT_DECISIONS: 'incorrect-decisions',
  TOOL_MISUSE: 'tool-misuse',
  POLICY_VIOLATION: 'policy-violation',
  CONTEXT_LEAKAGE: 'context-leakage',
  PROVIDER_FAILURE: 'provider-failure',
  MODEL_QUALITY_DEGRADATION: 'model-quality-degradation',
  PROMPT_INJECTION: 'prompt-injection',
  COST_ANOMALY: 'cost-anomaly',
  LOSS_OF_EXPLAINABILITY: 'loss-of-explainability',
  UNCONTROLLED_AUTONOMY: 'uncontrolled-autonomy'
});

export const AI_INCIDENT_CONTROLS = Object.freeze({
  REDUCE_AUTONOMY: 'reduce-autonomy',
  DISABLE_TOOL: 'disable-tool',
  SWITCH_MODEL_OR_PROVIDER: 'switch-model-or-provider',
  RESTRICT_CONTEXT: 'restrict-context',
  REQUIRE_HUMAN_APPROVAL: 'require-human-approval',
  SUSPEND_AGENT: 'suspend-agent',
  ISOLATE_AFFECTED_TENANTS: 'isolate-affected-tenants',
  REVERT_POLICY_OR_PROMPT_CHANGES: 'revert-policy-or-prompt-changes'
});

export const WORKFLOW_INCIDENT_TYPES = Object.freeze({
  STALLED_EXECUTION: 'stalled-execution',
  DUPLICATE_EXECUTION: 'duplicate-execution',
  LOST_STATE: 'lost-state',
  MISSED_DEADLINE: 'missed-deadline',
  FAILED_COMPENSATION: 'failed-compensation',
  INCORRECT_TRANSITION: 'incorrect-transition',
  REPEATED_RETRY: 'repeated-retry',
  MANUAL_TASK_FAILURE: 'manual-task-failure',
  DEPENDENCY_DISRUPTION: 'dependency-disruption'
});

export const INTEGRATION_INCIDENT_TYPES = Object.freeze({
  AUTHENTICATION_FAILURE: 'authentication-failure',
  CONTRACT_MISMATCH: 'contract-mismatch',
  PARTNER_UNAVAILABILITY: 'partner-unavailability',
  RATE_LIMITING: 'rate-limiting',
  LOST_DELIVERY: 'lost-delivery',
  DUPLICATE_DELIVERY: 'duplicate-delivery',
  ORDERING_FAILURE: 'ordering-failure',
  MAPPING_DEFECT: 'mapping-defect',
  RECONCILIATION_FAILURE: 'reconciliation-failure',
  CREDENTIAL_COMPROMISE: 'credential-compromise'
});

export const PROBLEM_IDENTIFICATION_SOURCES = Object.freeze({
  MAJOR_INCIDENTS: 'major-incidents',
  REPEATED_INCIDENTS: 'repeated-incidents',
  INCIDENT_TRENDS: 'incident-trends',
  RECURRING_WORKAROUNDS: 'recurring-workarounds',
  CAPACITY_TRENDS: 'capacity-trends',
  SECURITY_FINDINGS: 'security-findings',
  DATA_QUALITY_TRENDS: 'data-quality-trends',
  AI_EVALUATION: 'ai-evaluation',
  WORKFLOW_EXCEPTIONS: 'workflow-exceptions',
  INTEGRATION_FAILURE_PATTERNS: 'integration-failure-patterns',
  CHANGE_FAILURES: 'change-failures',
  AUDIT_FINDINGS: 'audit-findings',
  ARCHITECTURE_REVIEWS: 'architecture-reviews',
  PREDICTIVE_ANALYSIS: 'predictive-analysis',
  OPERATOR_EXPERIENCE: 'operator-experience'
});

export const PROBLEM_RECORD_FIELDS = Object.freeze({
  PROBLEM_IDENTIFIER: 'problem-identifier',
  DESCRIPTION: 'description',
  BUSINESS_RISK: 'business-risk',
  AFFECTED_CAPABILITIES: 'affected-capabilities',
  RELATED_INCIDENTS: 'related-incidents',
  KNOWN_SYMPTOMS: 'known-symptoms',
  SCOPE: 'scope',
  OWNER: 'owner',
  PRIORITY: 'priority',
  INVESTIGATION_STATUS: 'investigation-status',
  HYPOTHESES: 'hypotheses',
  ROOT_CAUSE_OR_CONTRIBUTING_CONDITIONS: 'root-cause-or-contributing-conditions',
  KNOWN_ERROR: 'known-error',
  WORKAROUND: 'workaround',
  REMEDIATION_OPTIONS: 'remediation-options',
  SELECTED_REMEDIATION: 'selected-remediation',
  RISKS: 'risks',
  TARGET_COMPLETION: 'target-completion',
  VERIFICATION_CRITERIA: 'verification-criteria',
  RESIDUAL_RISK: 'residual-risk',
  CLOSURE_EVIDENCE: 'closure-evidence'
});

export const PROBLEM_LIFECYCLE_STAGES = Object.freeze({
  IDENTIFY: 'Identify',
  RECORD_AND_PRIORITIZE: 'Record and Prioritize',
  ASSIGN_OWNERSHIP: 'Assign Ownership',
  INVESTIGATE: 'Investigate',
  ANALYZE_CAUSE_AND_CONTRIBUTORS: 'Analyze Cause and Contributors',
  CONTROL_WITH_WORKAROUND_OR_KNOWN_ERROR: 'Control with Workaround or Known Error',
  SELECT_REMEDIATION: 'Select Remediation',
  IMPLEMENT_THROUGH_CONTROLLED_CHANGE: 'Implement through Controlled Change',
  VERIFY_RISK_REDUCTION: 'Verify Risk Reduction',
  CLOSE_AND_LEARN: 'Close and Learn'
});

export const PROBLEM_PRIORITY_FACTORS = Object.freeze({
  INCIDENT_FREQUENCY: 'incident-frequency',
  INCIDENT_IMPACT: 'incident-impact',
  POTENTIAL_FUTURE_IMPACT: 'potential-future-impact',
  BUSINESS_CRITICALITY: 'business-criticality',
  SECURITY_AND_COMPLIANCE_RISK: 'security-and-compliance-risk',
  TENANT_OR_PROPERTY_SCOPE: 'tenant-or-property-scope',
  WORKAROUND_EFFECTIVENESS: 'workaround-effectiveness',
  PROBABILITY_OF_RECURRENCE: 'probability-of-recurrence',
  DEPENDENCY_CENTRALITY: 'dependency-centrality',
  REMEDIATION_COMPLEXITY: 'remediation-complexity',
  COST_OF_INACTION: 'cost-of-inaction',
  STRATEGIC_IMPORTANCE: 'strategic-importance'
});

export const ROOT_CAUSE_ANALYSIS_DIMENSIONS = Object.freeze({
  ARCHITECTURE: 'architecture',
  IMPLEMENTATION: 'implementation',
  CONFIGURATION: 'configuration',
  CAPACITY: 'capacity',
  DEPENDENCIES: 'dependencies',
  DATA: 'data',
  AI_BEHAVIOR: 'ai-behavior',
  SECURITY_CONTROLS: 'security-controls',
  CHANGE_PROCESS: 'change-process',
  OPERATIONAL_PROCEDURE: 'operational-procedure',
  AUTOMATION: 'automation',
  HUMAN_INTERFACE_DESIGN: 'human-interface-design',
  OWNERSHIP: 'ownership',
  COMMUNICATION: 'communication',
  TRAINING: 'training',
  SUPPLIER_BEHAVIOR: 'supplier-behavior',
  BUSINESS_RULES: 'business-rules',
  ENVIRONMENTAL_CONDITIONS: 'environmental-conditions'
});

export const CONTRIBUTING_CONDITION_TYPES = Object.freeze({
  WEAK_ISOLATION: 'weak-isolation',
  MISSING_TIMEOUT: 'missing-timeout',
  INADEQUATE_CAPACITY: 'inadequate-capacity',
  AMBIGUOUS_OWNERSHIP: 'ambiguous-ownership',
  INCOMPLETE_TEST_COVERAGE: 'incomplete-test-coverage',
  UNSAFE_DEFAULT: 'unsafe-default',
  POOR_OBSERVABILITY: 'poor-observability',
  FAILED_ESCALATION: 'failed-escalation',
  INACCURATE_DEPENDENCY_MAP: 'inaccurate-dependency-map',
  MANUAL_PROCESS_GAP: 'manual-process-gap',
  SUPPLIER_LIMITATION: 'supplier-limitation'
});

export const KNOWN_ERROR_FIELDS = Object.freeze({
  RECOGNIZABLE_SYMPTOMS: 'recognizable-symptoms',
  AFFECTED_SCOPE: 'affected-scope',
  BUSINESS_IMPACT: 'business-impact',
  DETECTION_GUIDANCE: 'detection-guidance',
  WORKAROUND: 'workaround',
  RISKS: 'risks',
  RESTRICTIONS: 'restrictions',
  ESCALATION: 'escalation',
  PLANNED_REMEDIATION: 'planned-remediation',
  OWNER: 'owner',
  REVIEW_OR_EXPIRATION_DATE: 'review-or-expiration-date'
});

export const PROBLEM_REMEDIATION_TYPES = Object.freeze({
  ARCHITECTURAL_CHANGE: 'architectural-change',
  CODE_CORRECTION: 'code-correction',
  CONFIGURATION_CORRECTION: 'configuration-correction',
  CAPACITY_INCREASE: 'capacity-increase',
  DEPENDENCY_REPLACEMENT: 'dependency-replacement',
  ADDITIONAL_ISOLATION: 'additional-isolation',
  IMPROVED_RECOVERY: 'improved-recovery',
  SAFER_AUTOMATION: 'safer-automation',
  POLICY_CHANGE: 'policy-change',
  PROCESS_IMPROVEMENT: 'process-improvement',
  DOCUMENTATION: 'documentation',
  TRAINING: 'training',
  SUPPLIER_ACTION: 'supplier-action',
  ENHANCED_OBSERVABILITY: 'enhanced-observability',
  SECURITY_CONTROL: 'security-control',
  DATA_CORRECTION: 'data-correction'
});

export const REMEDIATION_VERIFICATION_CRITERIA = Object.freeze({
  CAUSE_OR_RISK_REDUCED: 'cause-or-risk-reduced',
  RELATED_INCIDENTS_NO_LONGER_RECUR: 'related-incidents-no-longer-recur',
  BUSINESS_OUTCOMES_PROTECTED: 'business-outcomes-protected',
  NO_UNACCEPTABLE_NEW_RISK: 'no-unacceptable-new-risk',
  WORKAROUNDS_CAN_BE_RETIRED: 'workarounds-can-be-retired',
  DOCUMENTATION_UPDATED: 'documentation-updated',
  OPERATIONAL_CONTROLS_EFFECTIVE: 'operational-controls-effective',
  RESIDUAL_RISK_ACCEPTED: 'residual-risk-accepted'
});

export const POST_INCIDENT_REVIEW_AREAS = Object.freeze({
  DETECTION: 'detection',
  CLASSIFICATION: 'classification',
  PRIORITY: 'priority',
  OWNERSHIP: 'ownership',
  COMMAND: 'command',
  DIAGNOSIS: 'diagnosis',
  CONTAINMENT: 'containment',
  RESTORATION: 'restoration',
  VERIFICATION: 'verification',
  COMMUNICATION: 'communication',
  ESCALATION: 'escalation',
  AUTOMATION: 'automation',
  DEPENDENCIES: 'dependencies',
  CHANGE_RELATIONSHIP: 'change-relationship',
  SECURITY: 'security',
  DATA: 'data',
  CONTINUITY: 'continuity',
  BUSINESS_IMPACT: 'business-impact',
  WHAT_WORKED: 'what-worked',
  WHAT_SHOULD_IMPROVE: 'what-should-improve'
});

export const POST_INCIDENT_REVIEW_CULTURE_ATTRIBUTES = Object.freeze({
  EVIDENCE_BASED: 'evidence-based',
  BLAMELESS: 'blameless',
  BUSINESS_ORIENTED: 'business-oriented',
  CROSS_DOMAIN: 'cross-domain',
  PROPORTIONATE: 'proportionate',
  ACTIONABLE: 'actionable',
  TRANSPARENT_WITHIN_AUTHORIZED_BOUNDARIES: 'transparent-within-authorized-boundaries',
  FOCUSED_ON_SYSTEM_IMPROVEMENT: 'focused-on-system-improvement'
});

export const RECURRING_INCIDENT_TRIGGERS = Object.freeze({
  CORRELATION_WITH_EXISTING_PROBLEM: 'correlation-with-existing-problem',
  PROBLEM_CREATION_WHEN_NONE_EXISTS: 'problem-creation-when-none-exists',
  WORKAROUND_REVIEW: 'workaround-review',
  PRIORITY_REASSESSMENT: 'priority-reassessment',
  SERVICE_OWNER_REVIEW: 'service-owner-review',
  CAPACITY_REVIEW: 'capacity-review',
  DEPENDENCY_REVIEW: 'dependency-review',
  CHANGE_REVIEW: 'change-review',
  ARCHITECTURE_REVIEW: 'architecture-review'
});

export const MULTI_TENANT_INCIDENT_REQUIREMENTS = Object.freeze({
  ENTERPRISE_COMMAND_WHERE_APPROPRIATE: 'enterprise-command-where-appropriate',
  TENANT_ISOLATED_EVIDENCE_AND_COMMUNICATIONS: 'tenant-isolated-evidence-and-communications',
  CROSS_TENANT_IMPACT_ASSESSMENT: 'cross-tenant-impact-assessment',
  FAIR_RECOVERY_PRIORITIZATION: 'fair-recovery-prioritization',
  SHARED_SERVICE_OWNERSHIP: 'shared-service-ownership',
  STRONG_ACTION_SCOPING: 'strong-action-scoping',
  PROTECTION_FROM_INFORMATION_LEAKAGE: 'protection-from-information-leakage',
  TENANT_SPECIFIC_VERIFICATION: 'tenant-specific-verification'
});

export const PROPERTY_INCIDENT_CONTEXT = Object.freeze({
  GUEST_IMPACT: 'guest-impact',
  ACTIVE_STAYS: 'active-stays',
  ARRIVALS_AND_DEPARTURES: 'arrivals-and-departures',
  PHYSICAL_OPERATIONS: 'physical-operations',
  LOCAL_CONNECTIVITY: 'local-connectivity',
  STAFF_AVAILABILITY: 'staff-availability',
  MANUAL_ALTERNATIVES: 'manual-alternatives',
  LOCAL_SAFETY: 'local-safety',
  LOCAL_REGULATION: 'local-regulation',
  PROPERTY_COMMUNICATION: 'property-communication'
});

export const EXTERNAL_PROVIDER_PROBLEM_REQUIREMENTS = Object.freeze({
  INTERNAL_OWNERSHIP: 'internal-ownership',
  PARTNER_ESCALATION: 'partner-escalation',
  CONTRACT_AND_COMMITMENT_AWARENESS: 'contract-and-commitment-awareness',
  EVIDENCE_EXCHANGE: 'evidence-exchange',
  WORKAROUNDS: 'workarounds',
  ALTERNATIVE_STRATEGIES: 'alternative-strategies',
  CONTINUITY_PLANS: 'continuity-plans',
  REMEDIATION_TRACKING: 'remediation-tracking',
  EXIT_OPTIONS_WHERE_APPROPRIATE: 'exit-options-where-appropriate'
});

export const INCIDENT_MEASURES = Object.freeze({
  INCIDENT_VOLUME: 'incident-volume',
  BUSINESS_IMPACT_DURATION: 'business-impact-duration',
  TIME_TO_DETECT: 'time-to-detect',
  TIME_TO_ACKNOWLEDGE: 'time-to-acknowledge',
  TIME_TO_ASSIGN: 'time-to-assign',
  TIME_TO_CONTAIN: 'time-to-contain',
  TIME_TO_RESTORE: 'time-to-restore',
  TIME_TO_VERIFY: 'time-to-verify',
  REOPEN_RATE: 'reopen-rate',
  RECURRENCE: 'recurrence',
  COMMUNICATION_TIMELINESS: 'communication-timeliness',
  SERVICE_COMMITMENT_IMPACT: 'service-commitment-impact',
  TENANT_AND_PROPERTY_IMPACT: 'tenant-and-property-impact',
  AUTOMATION_SUCCESS: 'automation-success',
  ESCALATION_EFFECTIVENESS: 'escalation-effectiveness'
});

export const PROBLEM_MEASURES = Object.freeze({
  PROBLEM_BACKLOG: 'problem-backlog',
  PROBLEM_AGE: 'problem-age',
  RECURRING_INCIDENT_REDUCTION: 'recurring-incident-reduction',
  KNOWN_ERROR_USAGE: 'known-error-usage',
  WORKAROUND_AGE: 'workaround-age',
  REMEDIATION_COMPLETION: 'remediation-completion',
  RESIDUAL_RISK: 'residual-risk',
  PREVENTED_INCIDENTS: 'prevented-incidents',
  ROOT_CAUSE_QUALITY: 'root-cause-quality',
  ACTION_COMPLETION: 'action-completion'
});

export const INCIDENT_PROBLEM_GOVERNANCE_AREAS = Object.freeze({
  CLASSIFICATION: 'classification',
  PRIORITY: 'priority',
  COMMAND_THRESHOLDS: 'command-thresholds',
  EVIDENCE: 'evidence',
  COMMUNICATION: 'communication',
  EMERGENCY_ACTION: 'emergency-action',
  CLOSURE: 'closure',
  REVIEW: 'review',
  PROBLEM_OWNERSHIP: 'problem-ownership',
  KNOWN_ERRORS: 'known-errors',
  REMEDIATION: 'remediation',
  RESIDUAL_RISK: 'residual-risk',
  METRICS: 'metrics',
  SENSITIVE_INFORMATION: 'sensitive-information'
});

export const INCIDENT_PROBLEM_QUALITY_ATTRIBUTES = Object.freeze({
  RELIABILITY: 'reliability',
  RESILIENCE: 'resilience',
  RECOVERABILITY: 'recoverability',
  ACCOUNTABILITY: 'accountability',
  TRACEABILITY: 'traceability',
  RESPONSIVENESS: 'responsiveness',
  SECURITY: 'security',
  LEARNABILITY: 'learnability',
  MAINTAINABILITY: 'maintainability',
  BUSINESS_CONTINUITY: 'business-continuity',
  STAKEHOLDER_TRUST: 'stakeholder-trust',
  TENANT_ISOLATION: 'tenant-isolation'
});

export const INCIDENT_PROBLEM_ARCHITECTURAL_RULES = Object.freeze({
  PRIORITIZE_BUSINESS_AND_GUEST_RESTORATION: 'prioritize-business-and-guest-restoration',
  SEPARATE_INCIDENT_RESTORATION_FROM_PROBLEM_PREVENTION: 'separate-incident-restoration-from-problem-prevention',
  ASSIGN_ACCOUNTABLE_OWNERSHIP: 'assign-accountable-ownership',
  CLASSIFY_PRIORITY_USING_IMPACT_URGENCY_AND_RISK: 'classify-priority-using-impact-urgency-and-risk',
  PRESERVE_FACTS_HYPOTHESES_DECISIONS_ACTIONS_AND_EVIDENCE: 'preserve-facts-hypotheses-decisions-actions-and-evidence',
  CONTAIN_EXPANDING_IMPACT_BEFORE_BROAD_RECOVERY: 'contain-expanding-impact-before-broad-recovery',
  PROTECT_TENANT_PROPERTY_DATA_AND_SECURITY_BOUNDARIES: 'protect-tenant-property-data-and-security-boundaries',
  GOVERN_WORKAROUNDS_AND_PREVENT_UNDOCUMENTED_PERMANENCE: 'govern-workarounds-and-prevent-undocumented-permanence',
  VERIFY_RECOVERY_END_TO_END: 'verify-recovery-end-to-end',
  USE_COMMAND_STRUCTURES_FOR_MAJOR_INCIDENTS: 'use-command-structures-for-major-incidents',
  COMMUNICATE_ACCURATELY_AND_REGULARLY: 'communicate-accurately-and-regularly',
  TRANSITION_TO_CONTINUITY_WHEN_NORMAL_RECOVERY_INSUFFICIENT: 'transition-to-continuity-when-normal-recovery-insufficient',
  IDENTIFY_PROBLEMS_PROACTIVELY_AND_REACTIVELY: 'identify-problems-proactively-and-reactively',
  ANALYZE_SYSTEMIC_CONTRIBUTING_CONDITIONS: 'analyze-systemic-contributing-conditions',
  MAINTAIN_GOVERNED_KNOWN_ERROR_INFORMATION: 'maintain-governed-known-error-information',
  IMPLEMENT_REMEDIATION_THROUGH_CONTROLLED_CHANGE: 'implement-remediation-through-controlled-change',
  VERIFY_RISK_REDUCTION_BEFORE_PROBLEM_CLOSURE: 'verify-risk-reduction-before-problem-closure',
  CONDUCT_EVIDENCE_BASED_BLAMELESS_REVIEWS: 'conduct-evidence-based-blameless-reviews',
  TRACK_IMPROVEMENT_ACTIONS_TO_COMPLETION: 'track-improvement-actions-to-completion',
  REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT: 'remain-vendor-neutral-and-technology-independent'
});

export const FUTURE_INCIDENT_PROBLEM_CAPABILITIES = Object.freeze({
  PREDICTIVE_INCIDENT_DETECTION: 'predictive-incident-detection',
  AUTOMATED_SITUATION_CORRELATION: 'automated-situation-correlation',
  AI_ASSISTED_DIAGNOSIS: 'ai-assisted-diagnosis',
  AUTONOMOUS_BOUNDED_CONTAINMENT: 'autonomous-bounded-containment',
  DYNAMIC_IMPACT_ASSESSMENT: 'dynamic-impact-assessment',
  CROSS_PROPERTY_INCIDENT_PATTERN_ANALYSIS: 'cross-property-incident-pattern-analysis',
  SEMANTIC_KNOWN_ERROR_DISCOVERY: 'semantic-known-error-discovery',
  AUTOMATED_ROOT_CAUSE_HYPOTHESIS_GENERATION: 'automated-root-cause-hypothesis-generation',
  DIGITAL_TWIN_INCIDENT_SIMULATION: 'digital-twin-incident-simulation',
  PREVENTIVE_REMEDIATION: 'preventive-remediation',
  SELF_IMPROVING_RECOVERY_GUIDANCE: 'self-improving-recovery-guidance',
  FEDERATED_PROBLEM_INTELLIGENCE: 'federated-problem-intelligence'
});

export const CHANGE_RELEASE_OBJECTIVES = Object.freeze({
  SAFE_AND_PREDICTABLE_CHANGE: 'safe-and-predictable-change',
  BUSINESS_ALIGNED_RELEASE_OUTCOMES: 'business-aligned-release-outcomes',
  EXPLICIT_AUTHORIZATION: 'explicit-authorization',
  PROPORTIONATE_CONTROL: 'proportionate-control',
  CLEAR_OWNERSHIP: 'clear-ownership',
  EARLY_IMPACT_AND_DEPENDENCY_ASSESSMENT: 'early-impact-and-dependency-assessment',
  VERIFIED_OPERATIONAL_READINESS: 'verified-operational-readiness',
  COORDINATED_DEPLOYMENT: 'coordinated-deployment',
  PROTECTED_TENANT_AND_PROPERTY_BOUNDARIES: 'protected-tenant-and-property-boundaries',
  RELIABLE_ROLLBACK_OR_COMPENSATION: 'reliable-rollback-or-compensation',
  CONTROLLED_EMERGENCY_ACTION: 'controlled-emergency-action',
  COMPLETE_TRACEABILITY: 'complete-traceability',
  CONTINUOUS_IMPROVEMENT: 'continuous-improvement',
  VENDOR_NEUTRAL_CHANGE_CAPABILITIES: 'vendor-neutral-change-capabilities'
});

export const CHANGE_RELEASE_PRINCIPLES = Object.freeze({
  CHANGE_ENABLES_BUSINESS_VALUE: 'change-enables-business-value',
  RISK_PROPORTIONATE_CONTROL: 'risk-proportionate-control',
  ONE_ACCOUNTABLE_CHANGE_OWNER: 'one-accountable-change-owner',
  NO_PRODUCTION_CHANGE_WITHOUT_AUTHORITY: 'no-production-change-without-authority',
  READINESS_BEFORE_INTRODUCTION: 'readiness-before-introduction',
  SMALL_AND_REVERSIBLE: 'small-and-reversible',
  SEPARATE_DEPLOYMENT_FROM_RELEASE: 'separate-deployment-from-release',
  VERIFY_OUTCOMES: 'verify-outcomes',
  LEARN_FROM_MATERIAL_CHANGE: 'learn-from-material-change'
});

export const CHANGE_EXAMPLES = Object.freeze({
  APPLICATION_DEPLOYMENT: 'application-deployment',
  SERVICE_CONFIGURATION: 'service-configuration',
  INFRASTRUCTURE_MODIFICATION: 'infrastructure-modification',
  DATA_MIGRATION: 'data-migration',
  SCHEMA_EVOLUTION: 'schema-evolution',
  AI_MODEL_SUBSTITUTION: 'ai-model-substitution',
  PROMPT_OR_POLICY_UPDATE: 'prompt-or-policy-update',
  AGENT_PERMISSION_CHANGE: 'agent-permission-change',
  WORKFLOW_DEFINITION_CHANGE: 'workflow-definition-change',
  INTEGRATION_CONTRACT_CHANGE: 'integration-contract-change',
  CREDENTIAL_ROTATION: 'credential-rotation',
  CAPACITY_ADJUSTMENT: 'capacity-adjustment',
  SECURITY_CONTROL_UPDATE: 'security-control-update',
  FEATURE_ACTIVATION: 'feature-activation',
  TENANT_MIGRATION: 'tenant-migration',
  PROPERTY_ONBOARDING: 'property-onboarding',
  SERVICE_RETIREMENT: 'service-retirement',
  OPERATIONAL_PROCEDURE_CHANGE: 'operational-procedure-change'
});

export const RELEASE_RECORD_FIELDS = Object.freeze({
  PURPOSE: 'purpose',
  BUSINESS_VALUE: 'business-value',
  INCLUDED_CHANGES: 'included-changes',
  EXCLUDED_CHANGES: 'excluded-changes',
  TARGET_SCOPE: 'target-scope',
  DEPENDENCIES: 'dependencies',
  SCHEDULE: 'schedule',
  READINESS_STATUS: 'readiness-status',
  DEPLOYMENT_APPROACH: 'deployment-approach',
  AVAILABILITY_APPROACH: 'availability-approach',
  COMMUNICATION: 'communication',
  VERIFICATION: 'verification',
  RECOVERY_STRATEGY: 'recovery-strategy',
  OWNERSHIP: 'ownership'
});

export const CHANGE_TYPES = Object.freeze({
  STANDARD_CHANGE: 'standard-change',
  NORMAL_CHANGE: 'normal-change',
  EMERGENCY_CHANGE: 'emergency-change',
  EXCEPTIONAL_CHANGE: 'exceptional-change'
});

export const CHANGE_CLASSIFICATION_DIMENSIONS = Object.freeze({
  BUSINESS_CAPABILITY: 'business-capability',
  SERVICE_OR_DOMAIN: 'service-or-domain',
  CHANGE_TYPE: 'change-type',
  RISK: 'risk',
  BUSINESS_IMPACT: 'business-impact',
  GUEST_IMPACT: 'guest-impact',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  SECURITY_IMPACT: 'security-impact',
  DATA_IMPACT: 'data-impact',
  AI_IMPACT: 'ai-impact',
  WORKFLOW_IMPACT: 'workflow-impact',
  INTEGRATION_IMPACT: 'integration-impact',
  CAPACITY_IMPACT: 'capacity-impact',
  COMPLIANCE_RELEVANCE: 'compliance-relevance',
  REVERSIBILITY: 'reversibility',
  COMPLEXITY: 'complexity',
  DEPENDENCY_REACH: 'dependency-reach',
  PLANNED_OR_EMERGENCY_STATUS: 'planned-or-emergency-status'
});

export const CHANGE_RECORD_FIELDS = Object.freeze({
  CHANGE_IDENTIFIER: 'change-identifier',
  TITLE_AND_DESCRIPTION: 'title-and-description',
  BUSINESS_PURPOSE: 'business-purpose',
  EXPECTED_VALUE: 'expected-value',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  REQUESTOR: 'requestor',
  IMPLEMENTERS: 'implementers',
  APPROVER_OR_AUTHORITY: 'approver-or-authority',
  CHANGE_TYPE: 'change-type',
  CLASSIFICATION: 'classification',
  TARGET_SCOPE: 'target-scope',
  AFFECTED_TENANTS_AND_PROPERTIES: 'affected-tenants-and-properties',
  AFFECTED_SERVICES_AND_DEPENDENCIES: 'affected-services-and-dependencies',
  RISK_AND_IMPACT_ASSESSMENT: 'risk-and-impact-assessment',
  SECURITY_ASSESSMENT: 'security-assessment',
  DATA_ASSESSMENT: 'data-assessment',
  AI_AND_WORKFLOW_ASSESSMENT: 'ai-and-workflow-assessment',
  CAPACITY_ASSESSMENT: 'capacity-assessment',
  TEST_EVIDENCE: 'test-evidence',
  OPERATIONAL_READINESS: 'operational-readiness',
  IMPLEMENTATION_PLAN: 'implementation-plan',
  SCHEDULE: 'schedule',
  COMMUNICATION_PLAN: 'communication-plan',
  VERIFICATION_PLAN: 'verification-plan',
  ROLLBACK_OR_COMPENSATION_PLAN: 'rollback-or-compensation-plan',
  STOP_CONDITIONS: 'stop-conditions',
  RELATED_RELEASE: 'related-release',
  RELATED_INCIDENTS_OR_PROBLEMS: 'related-incidents-or-problems',
  OUTCOME: 'outcome',
  EVIDENCE: 'evidence',
  REVIEW_STATUS: 'review-status'
});

export const CHANGE_LIFECYCLE_STAGES = Object.freeze({
  IDENTIFY_NEED: 'Identify Need',
  RECORD_AND_CLASSIFY: 'Record and Classify',
  ASSESS_IMPACT_AND_RISK: 'Assess Impact and Risk',
  DESIGN_AND_VALIDATE: 'Design and Validate',
  AUTHORIZE: 'Authorize',
  SCHEDULE_AND_COMMUNICATE: 'Schedule and Communicate',
  PREPARE_AND_VERIFY_READINESS: 'Prepare and Verify Readiness',
  IMPLEMENT_OR_DEPLOY: 'Implement or Deploy',
  VERIFY_AND_RELEASE: 'Verify and Release',
  OBSERVE: 'Observe',
  CLOSE_OR_RECOVER: 'Close or Recover',
  REVIEW_AND_IMPROVE: 'Review and Improve'
});

export const CHANGE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  ASSESSING: 'assessing',
  DESIGNED: 'designed',
  AWAITING_AUTHORIZATION: 'awaiting-authorization',
  AUTHORIZED: 'authorized',
  SCHEDULED: 'scheduled',
  PREPARING: 'preparing',
  READY: 'ready',
  IMPLEMENTING: 'implementing',
  VERIFYING: 'verifying',
  RELEASED: 'released',
  OBSERVING: 'observing',
  COMPLETED: 'completed',
  FAILED: 'failed',
  ROLLED_BACK: 'rolled-back',
  COMPENSATED: 'compensated',
  CANCELLED: 'cancelled',
  DEFERRED: 'deferred',
  UNDER_REVIEW: 'under-review'
});

export const CHANGE_RELEASE_ROLES = Object.freeze({
  CHANGE_OWNER: 'change-owner',
  RELEASE_OWNER: 'release-owner',
  IMPLEMENTER: 'implementer',
  VERIFIER: 'verifier',
  CHANGE_AUTHORITY: 'change-authority',
  SERVICE_AND_DOMAIN_OWNERS: 'service-and-domain-owners',
  BUSINESS_OWNER: 'business-owner'
});

export const CHANGE_AUTHORITY_LEVELS = Object.freeze({
  PREAUTHORIZED_AUTHORITY: 'preauthorized-authority',
  SERVICE_OR_DOMAIN_AUTHORITY: 'service-or-domain-authority',
  TENANT_OR_PROPERTY_AUTHORITY: 'tenant-or-property-authority',
  ENTERPRISE_CHANGE_AUTHORITY: 'enterprise-change-authority',
  EMERGENCY_AUTHORITY: 'emergency-authority'
});

export const CHANGE_RISK_FACTORS = Object.freeze({
  BUSINESS_CRITICALITY: 'business-criticality',
  GUEST_AND_PROPERTY_IMPACT: 'guest-and-property-impact',
  TENANT_SCOPE: 'tenant-scope',
  SHARED_SERVICE_IMPACT: 'shared-service-impact',
  SECURITY_EXPOSURE: 'security-exposure',
  DATA_INTEGRITY: 'data-integrity',
  AI_BEHAVIOR: 'ai-behavior',
  WORKFLOW_STATE: 'workflow-state',
  INTEGRATION_COMPATIBILITY: 'integration-compatibility',
  CAPACITY: 'capacity',
  COMPLEXITY: 'complexity',
  NOVELTY: 'novelty',
  DEPENDENCY_REACH: 'dependency-reach',
  TIMING: 'timing',
  CONCURRENCY_WITH_OTHER_CHANGES: 'concurrency-with-other-changes',
  TEST_CONFIDENCE: 'test-confidence',
  OPERATIONAL_READINESS: 'operational-readiness',
  REVERSIBILITY: 'reversibility',
  RECOVERY_TIME: 'recovery-time',
  PROVIDER_DEPENDENCY: 'provider-dependency',
  PERSONNEL_AVAILABILITY: 'personnel-availability',
  REGULATORY_RELEVANCE: 'regulatory-relevance'
});

export const CHANGE_IMPACT_DIMENSIONS = Object.freeze({
  INTENDED_BUSINESS_OUTCOME: 'intended-business-outcome',
  POTENTIAL_NEGATIVE_OUTCOME: 'potential-negative-outcome',
  AFFECTED_CAPABILITIES: 'affected-capabilities',
  AFFECTED_USERS: 'affected-users',
  GUEST_JOURNEYS: 'guest-journeys',
  PROPERTY_OPERATIONS: 'property-operations',
  TENANTS_AND_ORGANIZATIONS: 'tenants-and-organizations',
  SERVICES: 'services',
  DATA: 'data',
  AI_AGENTS_AND_MODELS: 'ai-agents-and-models',
  WORKFLOWS_IN_PROGRESS: 'workflows-in-progress',
  INTEGRATIONS: 'integrations',
  SECURITY_CONTROLS: 'security-controls',
  INFRASTRUCTURE: 'infrastructure',
  EXTERNAL_PARTNERS: 'external-partners',
  SUPPORT_DEMAND: 'support-demand',
  CONTINUITY_ARRANGEMENTS: 'continuity-arrangements'
});

export const CHANGE_COLLISION_FACTORS = Object.freeze({
  SHARED_COMPONENTS: 'shared-components',
  SHARED_DATA: 'shared-data',
  SHARED_DEPENDENCIES: 'shared-dependencies',
  OVERLAPPING_TENANTS_OR_PROPERTIES: 'overlapping-tenants-or-properties',
  CONFLICTING_CONFIGURATION: 'conflicting-configuration',
  COMPETING_CAPACITY: 'competing-capacity',
  WORKFLOW_VERSION_INTERACTIONS: 'workflow-version-interactions',
  INTEGRATION_CONTRACT_TIMING: 'integration-contract-timing',
  RECOVERY_CONFLICTS: 'recovery-conflicts',
  LIMITED_SUPPORT_RESOURCES: 'limited-support-resources'
});

export const CHANGE_WINDOW_FACTORS = Object.freeze({
  GUEST_ACTIVITY: 'guest-activity',
  BOOKING_ACTIVITY: 'booking-activity',
  PROPERTY_OPERATING_HOURS: 'property-operating-hours',
  TENANT_BUSINESS_CYCLES: 'tenant-business-cycles',
  PEAK_DEMAND: 'peak-demand',
  SUPPORT_COVERAGE: 'support-coverage',
  PARTNER_AVAILABILITY: 'partner-availability',
  RECOVERY_DURATION: 'recovery-duration',
  REGULATORY_RESTRICTIONS: 'regulatory-restrictions',
  RELATED_RELEASES: 'related-releases',
  FREEZE_PERIODS: 'freeze-periods'
});

export const CHANGE_FREEZE_CONDITIONS = Object.freeze({
  MAJOR_INCIDENTS: 'major-incidents',
  CRISIS_OPERATIONS: 'crisis-operations',
  PEAK_BUSINESS_PERIODS: 'peak-business-periods',
  CRITICAL_EVENTS: 'critical-events',
  FINANCIAL_CLOSE: 'financial-close',
  MAJOR_MIGRATIONS: 'major-migrations',
  SECURITY_INVESTIGATIONS: 'security-investigations',
  CONTINUITY_ACTIVATION: 'continuity-activation'
});

export const CHANGE_READINESS_REQUIREMENTS = Object.freeze({
  APPROVED_SCOPE: 'approved-scope',
  ACCOUNTABLE_OWNERSHIP: 'accountable-ownership',
  TEST_EVIDENCE: 'test-evidence',
  SECURITY_REVIEW: 'security-review',
  DATA_PROTECTION: 'data-protection',
  CAPACITY_SUFFICIENCY: 'capacity-sufficiency',
  DEPENDENCY_READINESS: 'dependency-readiness',
  TENANT_AND_PROPERTY_READINESS: 'tenant-and-property-readiness',
  SUPPORT_COVERAGE: 'support-coverage',
  OBSERVABILITY: 'observability',
  COMMUNICATION: 'communication',
  IMPLEMENTATION_PROCEDURE: 'implementation-procedure',
  VERIFICATION_PROCEDURE: 'verification-procedure',
  ROLLBACK_OR_COMPENSATION: 'rollback-or-compensation',
  STOP_CONDITIONS: 'stop-conditions',
  REQUIRED_ACCESS: 'required-access',
  EVIDENCE_CAPTURE: 'evidence-capture',
  CONTINUITY_ARRANGEMENTS: 'continuity-arrangements'
});

export const RELEASE_COMPOSITION_FACTORS = Object.freeze({
  SHARED_BUSINESS_OUTCOME: 'shared-business-outcome',
  DEPENDENCY_ORDER: 'dependency-order',
  COMPATIBILITY: 'compatibility',
  RISK_AGGREGATION: 'risk-aggregation',
  RECOVERY_STRATEGY: 'recovery-strategy',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  OPERATIONAL_OWNERSHIP: 'operational-ownership',
  COMMUNICATION: 'communication',
  VERIFICATION: 'verification',
  SUPPORT_READINESS: 'support-readiness'
});

export const RELEASE_MODELS = Object.freeze({
  SINGLE_SERVICE_RELEASE: 'single-service-release',
  DOMAIN_RELEASE: 'domain-release',
  PLATFORM_RELEASE: 'platform-release',
  TENANT_SPECIFIC_RELEASE: 'tenant-specific-release',
  PROPERTY_SPECIFIC_RELEASE: 'property-specific-release',
  COHORT_RELEASE: 'cohort-release',
  PROGRESSIVE_RELEASE: 'progressive-release',
  FEATURE_CONTROLLED_RELEASE: 'feature-controlled-release',
  DATA_RELEASE: 'data-release',
  INTEGRATION_RELEASE: 'integration-release',
  AI_CAPABILITY_RELEASE: 'ai-capability-release',
  WORKFLOW_RELEASE: 'workflow-release'
});

export const PROGRESSIVE_INTRODUCTION_SCOPES = Object.freeze({
  INTERNAL_USERS: 'internal-users',
  TEST_PROPERTIES: 'test-properties',
  SELECTED_TENANTS: 'selected-tenants',
  TENANT_COHORTS: 'tenant-cohorts',
  GEOGRAPHIC_GROUPS: 'geographic-groups',
  TRAFFIC_PERCENTAGES: 'traffic-percentages',
  SERVICE_INSTANCES: 'service-instances',
  CHANNELS: 'channels',
  BUSINESS_CAPABILITIES: 'business-capabilities'
});

export const PROGRESSION_CRITERIA = Object.freeze({
  VERIFIED_HEALTH: 'verified-health',
  BUSINESS_OUTCOME: 'business-outcome',
  ERROR_AND_FAILURE_CONDITIONS: 'error-and-failure-conditions',
  CAPACITY: 'capacity',
  SECURITY: 'security',
  DATA_QUALITY: 'data-quality',
  AI_QUALITY: 'ai-quality',
  TENANT_FEEDBACK: 'tenant-feedback',
  SUPPORT_DEMAND: 'support-demand'
});

export const DEPLOYMENT_RELEASE_SEPARATION_CONTROLS = Object.freeze({
  FEATURE_CONTROLS: 'feature-controls',
  TENANT_ACTIVATION: 'tenant-activation',
  PROPERTY_ACTIVATION: 'property-activation',
  CONFIGURATION: 'configuration',
  ROUTING: 'routing',
  POLICY: 'policy',
  ACCESS_CONTROL: 'access-control',
  WORKFLOW_VERSION_SELECTION: 'workflow-version-selection',
  MODEL_SELECTION: 'model-selection'
});

export const CHANGE_IMPLEMENTATION_CONTROLS = Object.freeze({
  AUTHORIZED_SCOPE: 'authorized-scope',
  REQUIRED_PARTICIPANT_AVAILABILITY: 'required-participant-availability',
  VERIFIED_PRECONDITIONS: 'verified-preconditions',
  ATTRIBUTABLE_ACTIONS: 'attributable-actions',
  EVIDENCE_CAPTURE: 'evidence-capture',
  DEPENDENCY_MONITORING: 'dependency-monitoring',
  STOP_CONDITION_ENFORCEMENT: 'stop-condition-enforcement',
  PLANNED_COMMUNICATION: 'planned-communication',
  UNEXPECTED_CONDITION_REASSESSMENT: 'unexpected-condition-reassessment',
  NO_UNAUTHORIZED_SCOPE_EXPANSION: 'no-unauthorized-scope-expansion'
});

export const CHANGE_VERIFICATION_DIMENSIONS = Object.freeze({
  INTENDED_BUSINESS_OUTCOME: 'intended-business-outcome',
  GUEST_AND_OPERATOR_EXPERIENCE: 'guest-and-operator-experience',
  SERVICE_HEALTH: 'service-health',
  FUNCTIONAL_CORRECTNESS: 'functional-correctness',
  DATA_INTEGRITY: 'data-integrity',
  AI_QUALITY_AND_SAFETY: 'ai-quality-and-safety',
  WORKFLOW_CONTINUITY: 'workflow-continuity',
  INTEGRATION_DELIVERY: 'integration-delivery',
  SECURITY_POSTURE: 'security-posture',
  CAPACITY_AND_PERFORMANCE: 'capacity-and-performance',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_BEHAVIOR: 'property-behavior',
  SUPPORT_IMPACT: 'support-impact',
  NO_UNINTENDED_SCOPE: 'no-unintended-scope'
});

export const CHANGE_OBSERVATION_CHECKS = Object.freeze({
  STABILITY: 'stability',
  BUSINESS_PERFORMANCE: 'business-performance',
  ERROR_TRENDS: 'error-trends',
  CAPACITY: 'capacity',
  SECURITY: 'security',
  DATA_CONSISTENCY: 'data-consistency',
  AI_BEHAVIOR: 'ai-behavior',
  WORKFLOW_COMPLETION: 'workflow-completion',
  INTEGRATION_RELIABILITY: 'integration-reliability',
  TENANT_OR_PROPERTY_FEEDBACK: 'tenant-or-property-feedback',
  DELAYED_EFFECTS: 'delayed-effects'
});

export const ROLLBACK_PLAN_FIELDS = Object.freeze({
  TRIGGER: 'trigger',
  AUTHORITY: 'authority',
  PROCEDURE: 'procedure',
  SCOPE: 'scope',
  DATA_IMPLICATIONS: 'data-implications',
  WORKFLOW_IMPLICATIONS: 'workflow-implications',
  INTEGRATION_IMPLICATIONS: 'integration-implications',
  SECURITY_IMPLICATIONS: 'security-implications',
  VERIFICATION: 'verification',
  COMMUNICATION: 'communication',
  MAXIMUM_DECISION_TIME: 'maximum-decision-time'
});

export const COMPENSATION_EXAMPLES = Object.freeze({
  REVERSING_BUSINESS_TRANSACTION: 'reversing-business-transaction',
  REPAIRING_DATA: 'repairing-data',
  COMPENSATING_WORKFLOW: 'compensating-workflow',
  CORRECTIVE_EVENT: 'corrective-event',
  FORWARD_CONFIGURATION_RESTORE: 'forward-configuration-restore',
  COMPATIBLE_STATE_MIGRATION: 'compatible-state-migration',
  MANUAL_RECONCILIATION: 'manual-reconciliation'
});

export const CHANGE_STOP_CONDITIONS = Object.freeze({
  UNEXPECTED_BUSINESS_IMPACT: 'unexpected-business-impact',
  SECURITY_CONCERN: 'security-concern',
  DATA_INTEGRITY_RISK: 'data-integrity-risk',
  CROSS_TENANT_IMPACT: 'cross-tenant-impact',
  VERIFICATION_FAILURE: 'verification-failure',
  CAPACITY_EXHAUSTION: 'capacity-exhaustion',
  DEPENDENCY_FAILURE: 'dependency-failure',
  LOSS_OF_OBSERVABILITY: 'loss-of-observability',
  AUTOMATION_UNCERTAINTY: 'automation-uncertainty',
  RECOVERY_PATH_FAILURE: 'recovery-path-failure',
  SCOPE_DEVIATION: 'scope-deviation',
  REQUIRED_OWNER_UNAVAILABLE: 'required-owner-unavailable'
});

export const FAILED_CHANGE_REQUIREMENTS = Object.freeze({
  ENTER_INCIDENT_HANDLING_WHEN_IMPACT_EXISTS: 'enter-incident-handling-when-impact-exists',
  STOP_FURTHER_INTRODUCTION: 'stop-further-introduction',
  PRESERVE_EVIDENCE: 'preserve-evidence',
  PROTECT_AFFECTED_BOUNDARIES: 'protect-affected-boundaries',
  EXECUTE_AUTHORIZED_ROLLBACK_OR_COMPENSATION: 'execute-authorized-rollback-or-compensation',
  COMMUNICATE_IMPACT_AND_ACTION: 'communicate-impact-and-action',
  REASSESS_DEPENDENT_CHANGES: 'reassess-dependent-changes',
  VERIFY_RECOVERY: 'verify-recovery',
  RECORD_OUTCOME: 'record-outcome',
  TRIGGER_REVIEW_BY_RISK_AND_IMPACT: 'trigger-review-by-risk-and-impact'
});

export const EMERGENCY_CHANGE_FIELDS = Object.freeze({
  ACCOUNTABLE_OWNER: 'accountable-owner',
  EMERGENCY_AUTHORITY: 'emergency-authority',
  BUSINESS_JUSTIFICATION: 'business-justification',
  SCOPE: 'scope',
  RISK: 'risk',
  EVIDENCE: 'evidence',
  IMPLEMENTATION_ACTION: 'implementation-action',
  VERIFICATION: 'verification',
  RECOVERY_PATH: 'recovery-path',
  COMMUNICATION: 'communication',
  RETROSPECTIVE_REVIEW: 'retrospective-review'
});

export const CONFIGURATION_CHANGE_REQUIREMENTS = Object.freeze({
  OWNERSHIP: 'ownership',
  AUTHORIZATION: 'authorization',
  VERSION_HISTORY: 'version-history',
  VALIDATION: 'validation',
  TENANT_SCOPE: 'tenant-scope',
  ENVIRONMENT_SCOPE: 'environment-scope',
  SENSITIVE_VALUE_PROTECTION: 'sensitive-value-protection',
  DEPLOYMENT_CONSISTENCY: 'deployment-consistency',
  VERIFICATION: 'verification',
  RECOVERY: 'recovery',
  EVIDENCE: 'evidence'
});

export const DATA_CHANGE_TYPES = Object.freeze({
  SCHEMA_EVOLUTION: 'schema-evolution',
  MIGRATION: 'migration',
  CORRECTION: 'correction',
  RECLASSIFICATION: 'reclassification',
  RETENTION_CHANGE: 'retention-change',
  IMPORT_OR_EXPORT: 'import-or-export',
  BACKFILL: 'backfill',
  RECONCILIATION: 'reconciliation',
  ARCHIVAL: 'archival',
  DELETION: 'deletion'
});

export const DATA_CHANGE_PROTECTIONS = Object.freeze({
  DOMAIN_INVARIANTS: 'domain-invariants',
  INTEGRITY: 'integrity',
  LINEAGE: 'lineage',
  PRIVACY: 'privacy',
  SECURITY: 'security',
  AVAILABILITY: 'availability',
  RECOVERABILITY: 'recoverability',
  TENANT_ISOLATION: 'tenant-isolation',
  AUDITABILITY: 'auditability'
});

export const AI_CHANGE_TYPES = Object.freeze({
  MODEL_REPLACEMENT: 'model-replacement',
  PROVIDER_CHANGE: 'provider-change',
  PROMPT_CHANGE: 'prompt-change',
  POLICY_CHANGE: 'policy-change',
  TOOL_PERMISSION: 'tool-permission',
  AGENT_CAPABILITY: 'agent-capability',
  CONTEXT_SOURCE: 'context-source',
  EVALUATION_THRESHOLD: 'evaluation-threshold',
  SAFETY_CONTROL: 'safety-control',
  AUTONOMY_LEVEL: 'autonomy-level'
});

export const AI_CHANGE_ASSESSMENT_DIMENSIONS = Object.freeze({
  QUALITY: 'quality',
  SAFETY: 'safety',
  PRIVACY: 'privacy',
  EXPLAINABILITY: 'explainability',
  COST: 'cost',
  LATENCY: 'latency',
  PROVIDER_DEPENDENCY: 'provider-dependency',
  BEHAVIORAL_VARIANCE: 'behavioral-variance',
  TENANT_IMPACT: 'tenant-impact',
  HUMAN_ESCALATION: 'human-escalation',
  REVERSIBILITY: 'reversibility'
});

export const WORKFLOW_CHANGE_CONSIDERATIONS = Object.freeze({
  IN_FLIGHT_INSTANCES: 'in-flight-instances',
  VERSION_COEXISTENCE: 'version-coexistence',
  STATE_COMPATIBILITY: 'state-compatibility',
  IDEMPOTENCY: 'idempotency',
  DEADLINES: 'deadlines',
  RETRY_BEHAVIOR: 'retry-behavior',
  COMPENSATION: 'compensation',
  MANUAL_TASKS: 'manual-tasks',
  EVENT_CONTRACTS: 'event-contracts',
  MIGRATION: 'migration',
  RECOVERY: 'recovery'
});

export const INTEGRATION_CHANGE_ASSESSMENT_DIMENSIONS = Object.freeze({
  CONTRACT_COMPATIBILITY: 'contract-compatibility',
  AUTHENTICATION: 'authentication',
  CREDENTIALS: 'credentials',
  DATA_MAPPING: 'data-mapping',
  EVENT_ORDERING: 'event-ordering',
  DELIVERY_GUARANTEES: 'delivery-guarantees',
  RATE_LIMITS: 'rate-limits',
  PARTNER_READINESS: 'partner-readiness',
  VERSION_COEXISTENCE: 'version-coexistence',
  RECONCILIATION: 'reconciliation',
  FALLBACK: 'fallback',
  COMMUNICATION: 'communication'
});

export const SECURITY_CHANGE_REQUIREMENTS = Object.freeze({
  SECURITY_OWNERSHIP: 'security-ownership',
  IMPACT_ASSESSMENT: 'impact-assessment',
  LEAST_PRIVILEGE: 'least-privilege',
  EVIDENCE_PROTECTION: 'evidence-protection',
  RECOVERY_PLANNING: 'recovery-planning',
  INDEPENDENT_VERIFICATION: 'independent-verification',
  COMPLIANCE_CONSIDERATION: 'compliance-consideration',
  CONTROLLED_COMMUNICATION: 'controlled-communication'
});

export const MULTI_TENANT_CHANGE_REQUIREMENTS = Object.freeze({
  TENANT_ISOLATION: 'tenant-isolation',
  COHORT_CONTROL: 'cohort-control',
  TENANT_SPECIFIC_ACTIVATION: 'tenant-specific-activation',
  CROSS_TENANT_IMPACT_DETECTION: 'cross-tenant-impact-detection',
  FAIR_CAPACITY: 'fair-capacity',
  SEPARATE_EVIDENCE: 'separate-evidence',
  TARGETED_ROLLBACK: 'targeted-rollback',
  TENANT_COMMUNICATION: 'tenant-communication',
  COMPATIBILITY_DURING_PROGRESSION: 'compatibility-during-progression'
});

export const PROPERTY_CHANGE_CONSIDERATIONS = Object.freeze({
  LOCAL_OPERATING_SCHEDULE: 'local-operating-schedule',
  ACTIVE_STAYS: 'active-stays',
  ARRIVALS_AND_DEPARTURES: 'arrivals-and-departures',
  STAFF_AVAILABILITY: 'staff-availability',
  PHYSICAL_PROCEDURES: 'physical-procedures',
  CONNECTIVITY: 'connectivity',
  MANUAL_ALTERNATIVES: 'manual-alternatives',
  LOCAL_REGULATIONS: 'local-regulations',
  PROPERTY_CONFIGURATION: 'property-configuration',
  GUEST_COMMUNICATION: 'guest-communication'
});

export const RELEASE_COMMUNICATION_FIELDS = Object.freeze({
  PURPOSE_AND_VALUE: 'purpose-and-value',
  SCOPE: 'scope',
  TARGET_AUDIENCES: 'target-audiences',
  TIMING: 'timing',
  EXPECTED_IMPACT: 'expected-impact',
  REQUIRED_ACTION: 'required-action',
  SUPPORT_INFORMATION: 'support-information',
  KNOWN_LIMITATIONS: 'known-limitations',
  RECOVERY_STATUS: 'recovery-status',
  COMPLETION_CONFIRMATION: 'completion-confirmation'
});

export const POST_CHANGE_REVIEW_TRIGGERS = Object.freeze({
  FAILED_CHANGES: 'failed-changes',
  EMERGENCY_CHANGES: 'emergency-changes',
  HIGH_RISK_CHANGES: 'high-risk-changes',
  UNEXPECTED_IMPACT: 'unexpected-impact',
  MAJOR_RELEASES: 'major-releases',
  REPEATED_ROLLBACK: 'repeated-rollback',
  SECURITY_SENSITIVE_CHANGES: 'security-sensitive-changes',
  CROSS_TENANT_CHANGES: 'cross-tenant-changes',
  SIGNIFICANT_OPERATIONAL_LEARNING: 'significant-operational-learning'
});

export const CHANGE_RELEASE_MEASURES = Object.freeze({
  CHANGE_SUCCESS_RATE: 'change-success-rate',
  FAILED_CHANGE_RATE: 'failed-change-rate',
  ROLLBACK_OR_COMPENSATION_RATE: 'rollback-or-compensation-rate',
  EMERGENCY_CHANGE_RATE: 'emergency-change-rate',
  BUSINESS_VALUE_REALIZATION: 'business-value-realization',
  INCIDENT_CORRELATION: 'incident-correlation',
  LEAD_TIME: 'lead-time',
  VERIFICATION_COMPLETION: 'verification-completion',
  UNAUTHORIZED_CHANGE: 'unauthorized-change',
  SCOPE_DEVIATION: 'scope-deviation',
  RELEASE_STABILITY: 'release-stability',
  TENANT_AND_PROPERTY_IMPACT: 'tenant-and-property-impact',
  PROGRESSIVE_RELEASE_STOP_RATE: 'progressive-release-stop-rate',
  RECOVERY_EFFECTIVENESS: 'recovery-effectiveness',
  REVIEW_ACTION_COMPLETION: 'review-action-completion'
});

export const CHANGE_RELEASE_GOVERNANCE_AREAS = Object.freeze({
  CHANGE_MODELS: 'change-models',
  CLASSIFICATION: 'classification',
  AUTHORITY: 'authority',
  RISK_THRESHOLDS: 'risk-thresholds',
  READINESS: 'readiness',
  SCHEDULING: 'scheduling',
  FREEZE_PERIODS: 'freeze-periods',
  EMERGENCY_ACTION: 'emergency-action',
  EVIDENCE: 'evidence',
  VERIFICATION: 'verification',
  RECOVERY: 'recovery',
  COMMUNICATION: 'communication',
  CLOSURE: 'closure',
  REVIEW: 'review',
  METRICS: 'metrics'
});

export const CHANGE_RELEASE_QUALITY_ATTRIBUTES = Object.freeze({
  RELIABILITY: 'reliability',
  SAFETY: 'safety',
  AGILITY: 'agility',
  RECOVERABILITY: 'recoverability',
  SECURITY: 'security',
  TRACEABILITY: 'traceability',
  ACCOUNTABILITY: 'accountability',
  SCALABILITY: 'scalability',
  COMPATIBILITY: 'compatibility',
  MAINTAINABILITY: 'maintainability',
  BUSINESS_CONTINUITY: 'business-continuity',
  TENANT_ISOLATION: 'tenant-isolation'
});

export const CHANGE_RELEASE_ARCHITECTURAL_RULES = Object.freeze({
  ALIGN_EVERY_CHANGE_WITH_BUSINESS_OR_OPERATIONAL_PURPOSE: 'align-every-change-with-business-or-operational-purpose',
  ASSIGN_ONE_ACCOUNTABLE_CHANGE_OWNER: 'assign-one-accountable-change-owner',
  REQUIRE_AUTHORITY_FOR_ALL_PRODUCTION_CHANGE: 'require-authority-for-all-production-change',
  APPLY_CONTROLS_PROPORTIONATE_TO_RISK_AND_IMPACT: 'apply-controls-proportionate-to-risk-and-impact',
  ASSESS_INTENDED_AND_FAILURE_IMPACT: 'assess-intended-and-failure-impact',
  VERIFY_OPERATIONAL_READINESS_BEFORE_IMPLEMENTATION: 'verify-operational-readiness-before-implementation',
  COORDINATE_DEPENDENCIES_AND_CHANGE_COLLISIONS: 'coordinate-dependencies-and-change-collisions',
  SEPARATE_DEPLOYMENT_FROM_RELEASE_WHERE_BENEFICIAL: 'separate-deployment-from-release-where-beneficial',
  MINIMIZE_BLAST_RADIUS_THROUGH_PROGRESSIVE_INTRODUCTION: 'minimize-blast-radius-through-progressive-introduction',
  DEFINE_VERIFICATION_BEFORE_EXECUTION: 'define-verification-before-execution',
  PROVIDE_ROLLBACK_OR_COMPENSATION: 'provide-rollback-or-compensation',
  ENFORCE_STOP_CONDITIONS: 'enforce-stop-conditions',
  GOVERN_CONFIGURATION_DATA_AI_WORKFLOW_INTEGRATION_AND_SECURITY_MODIFICATIONS: 'govern-configuration-data-ai-workflow-integration-and-security-modifications',
  PRESERVE_TENANT_AND_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  GOVERN_EMERGENCY_CHANGE_WITH_ACCOUNTABILITY: 'govern-emergency-change-with-accountability',
  CONVERT_FAILED_CHANGES_INTO_INCIDENT_AND_PROBLEM_LEARNING: 'convert-failed-changes-into-incident-and-problem-learning',
  VERIFY_BUSINESS_OUTCOMES_BEFORE_CLOSURE: 'verify-business-outcomes-before-closure',
  REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT: 'remain-vendor-neutral-and-technology-independent'
});

export const FUTURE_CHANGE_RELEASE_CAPABILITIES = Object.freeze({
  PREDICTIVE_CHANGE_RISK: 'predictive-change-risk',
  AI_ASSISTED_IMPACT_ANALYSIS: 'ai-assisted-impact-analysis',
  AUTOMATED_DEPENDENCY_AWARE_SCHEDULING: 'automated-dependency-aware-scheduling',
  POLICY_DRIVEN_AUTHORIZATION: 'policy-driven-authorization',
  AUTONOMOUS_PROGRESSIVE_DELIVERY: 'autonomous-progressive-delivery',
  DIGITAL_TWIN_CHANGE_SIMULATION: 'digital-twin-change-simulation',
  INTENT_BASED_RELEASE_CONTROL: 'intent-based-release-control',
  ADAPTIVE_ROLLBACK: 'adaptive-rollback',
  CROSS_PROPERTY_RELEASE_OPTIMIZATION: 'cross-property-release-optimization',
  SEMANTIC_CHANGE_RECORDS: 'semantic-change-records',
  CONTINUOUS_READINESS_VERIFICATION: 'continuous-readiness-verification',
  SELF_IMPROVING_CHANGE_MODELS: 'self-improving-change-models'
});

export const CAPACITY_PERFORMANCE_OBJECTIVES = Object.freeze({
  SUFFICIENT_CAPACITY_FOR_BUSINESS_DEMAND: 'sufficient-capacity-for-business-demand',
  PREDICTABLE_GUEST_AND_OPERATOR_EXPERIENCE: 'predictable-guest-and-operator-experience',
  SCALABLE_MULTI_TENANT_MULTI_PROPERTY_OPERATIONS: 'scalable-multi-tenant-multi-property-operations',
  EARLY_CAPACITY_RISK_IDENTIFICATION: 'early-capacity-risk-identification',
  BUSINESS_ALIGNED_PERFORMANCE_OBJECTIVES: 'business-aligned-performance-objectives',
  FAIR_RESOURCE_ALLOCATION: 'fair-resource-allocation',
  SAFE_SCALING_AND_DEGRADATION: 'safe-scaling-and-degradation',
  PROTECTED_CRITICAL_WORKLOADS: 'protected-critical-workloads',
  EFFICIENT_RESOURCE_USE: 'efficient-resource-use',
  CONTROLLED_AI_AND_EXTERNAL_PROVIDER_CONSUMPTION: 'controlled-ai-and-external-provider-consumption',
  RESILIENT_DEMAND_SPIKES: 'resilient-demand-spikes',
  EVIDENCE_BASED_INVESTMENT_DECISIONS: 'evidence-based-investment-decisions',
  CONTINUOUS_OPTIMIZATION: 'continuous-optimization',
  VENDOR_NEUTRAL_CAPACITY_CAPABILITIES: 'vendor-neutral-capacity-capabilities'
});

export const CAPACITY_PERFORMANCE_PRINCIPLES = Object.freeze({
  BUSINESS_DEMAND_DRIVES_CAPACITY: 'business-demand-drives-capacity',
  END_TO_END_PERFORMANCE: 'end-to-end-performance',
  CAPACITY_BEFORE_SATURATION: 'capacity-before-saturation',
  ELASTICITY_WITH_GUARDRAILS: 'elasticity-with-guardrails',
  FAIRNESS_WITH_BUSINESS_PRIORITY: 'fairness-with-business-priority',
  DEGRADE_GRACEFULLY: 'degrade-gracefully',
  COST_IS_OPERATIONAL_CONSTRAINT: 'cost-is-operational-constraint',
  EVIDENCE_BASED_PLANNING: 'evidence-based-planning',
  PROVIDER_INDEPENDENCE: 'provider-independence'
});

export const CAPACITY_DOMAINS = Object.freeze({
  BUSINESS_CAPACITY: 'business-capacity',
  SERVICE_CAPACITY: 'service-capacity',
  AI_CAPACITY: 'ai-capacity',
  WORKFLOW_CAPACITY: 'workflow-capacity',
  INTEGRATION_CAPACITY: 'integration-capacity',
  DATA_CAPACITY: 'data-capacity',
  PLATFORM_CAPACITY: 'platform-capacity',
  HUMAN_OPERATIONAL_CAPACITY: 'human-operational-capacity'
});

export const CAPACITY_DEMAND_SOURCES = Object.freeze({
  GUEST_INTERACTIONS: 'guest-interactions',
  BOOKING_SEARCHES_AND_TRANSACTIONS: 'booking-searches-and-transactions',
  AVAILABILITY_SYNCHRONIZATION: 'availability-synchronization',
  PRICING_CALCULATION: 'pricing-calculation',
  MESSAGING_CHANNELS: 'messaging-channels',
  PROPERTY_OPERATIONS: 'property-operations',
  TENANT_ONBOARDING: 'tenant-onboarding',
  PROPERTY_ONBOARDING: 'property-onboarding',
  AI_CONVERSATIONS: 'ai-conversations',
  AGENT_EXECUTION: 'agent-execution',
  WORKFLOW_SCHEDULES: 'workflow-schedules',
  EXTERNAL_EVENTS: 'external-events',
  DATA_PROCESSING: 'data-processing',
  ANALYTICS: 'analytics',
  SECURITY_CONTROLS: 'security-controls',
  OBSERVABILITY: 'observability',
  RELEASES_AND_MIGRATIONS: 'releases-and-migrations',
  RECOVERY_ACTIVITY: 'recovery-activity',
  SEASONAL_EVENTS: 'seasonal-events',
  MARKETING_CAMPAIGNS: 'marketing-campaigns',
  PARTNER_BEHAVIOR: 'partner-behavior',
  REGULATORY_PROCESSES: 'regulatory-processes'
});

export const CAPACITY_DEMAND_DIMENSIONS = Object.freeze({
  VOLUME: 'volume',
  CONCURRENCY: 'concurrency',
  ARRIVAL_RATE: 'arrival-rate',
  COMPLETION_RATE: 'completion-rate',
  DURATION: 'duration',
  PAYLOAD_SIZE: 'payload-size',
  COMPLEXITY: 'complexity',
  PRIORITY: 'priority',
  TENANT: 'tenant',
  PROPERTY: 'property',
  CHANNEL: 'channel',
  GEOGRAPHY: 'geography',
  TIME: 'time',
  SEASON: 'season',
  WORKFLOW_TYPE: 'workflow-type',
  AI_MODEL_OR_AGENT: 'ai-model-or-agent',
  EXTERNAL_PROVIDER: 'external-provider',
  DATA_CLASS: 'data-class',
  SERVICE_DEPENDENCY: 'service-dependency'
});

export const CAPACITY_DEMAND_PROFILES = Object.freeze({
  STEADY_BASELINE: 'steady-baseline',
  DAILY_PEAK: 'daily-peak',
  WEEKLY_CYCLE: 'weekly-cycle',
  SEASONAL_PEAK: 'seasonal-peak',
  EVENT_DRIVEN_BURST: 'event-driven-burst',
  CAMPAIGN_DRIVEN_GROWTH: 'campaign-driven-growth',
  PROPERTY_ONBOARDING_SURGE: 'property-onboarding-surge',
  TENANT_MIGRATION: 'tenant-migration',
  RECOVERY_BACKLOG: 'recovery-backlog',
  EXTERNAL_PROVIDER_RETRY_STORM: 'external-provider-retry-storm',
  SECURITY_EVENT: 'security-event',
  MAJOR_INCIDENT: 'major-incident',
  DISASTER_RECOVERY_ACTIVATION: 'disaster-recovery-activation',
  LONG_TERM_GROWTH: 'long-term-growth'
});

export const CAPACITY_PLANNING_HORIZONS = Object.freeze({
  IMMEDIATE: 'immediate',
  TACTICAL: 'tactical',
  STRATEGIC: 'strategic'
});

export const CAPACITY_FORECAST_INPUTS = Object.freeze({
  HISTORICAL_DEMAND: 'historical-demand',
  BUSINESS_PLANS: 'business-plans',
  TENANT_PIPELINE: 'tenant-pipeline',
  PROPERTY_PIPELINE: 'property-pipeline',
  SEASONAL_PATTERNS: 'seasonal-patterns',
  CHANNEL_GROWTH: 'channel-growth',
  PRODUCT_ADOPTION: 'product-adoption',
  SERVICE_TRENDS: 'service-trends',
  AI_USAGE: 'ai-usage',
  DATA_GROWTH: 'data-growth',
  EXTERNAL_PROVIDER_LIMITS: 'external-provider-limits',
  INCIDENT_AND_RECOVERY_HISTORY: 'incident-and-recovery-history',
  SCENARIO_ASSUMPTIONS: 'scenario-assumptions'
});

export const CAPACITY_FORECAST_SCENARIOS = Object.freeze({
  EXPECTED: 'expected',
  HIGH_GROWTH: 'high-growth',
  SEASONAL_PEAK: 'seasonal-peak',
  PROVIDER_DEGRADATION: 'provider-degradation',
  RECOVERY_SURGE: 'recovery-surge',
  MULTI_TENANT_INCIDENT: 'multi-tenant-incident',
  STRATEGIC_EXPANSION: 'strategic-expansion'
});

export const CAPACITY_PLAN_FIELDS = Object.freeze({
  BUSINESS_ASSUMPTIONS: 'business-assumptions',
  DEMAND_FORECASTS: 'demand-forecasts',
  SERVICE_AND_DEPENDENCY_SCOPE: 'service-and-dependency-scope',
  CURRENT_CAPACITY: 'current-capacity',
  USABLE_CAPACITY: 'usable-capacity',
  RESERVED_CAPACITY: 'reserved-capacity',
  PERFORMANCE_OBJECTIVES: 'performance-objectives',
  BOTTLENECKS: 'bottlenecks',
  PROVIDER_CONSTRAINTS: 'provider-constraints',
  HUMAN_CONSTRAINTS: 'human-constraints',
  SCALING_OPTIONS: 'scaling-options',
  COST_IMPLICATIONS: 'cost-implications',
  RISKS: 'risks',
  DECISION_POINTS: 'decision-points',
  REQUIRED_CHANGES: 'required-changes',
  OWNERS: 'owners',
  REVIEW_DATES: 'review-dates'
});

export const PERFORMANCE_OBJECTIVE_EXAMPLES = Object.freeze({
  GUEST_RESPONSE_TIME: 'guest-response-time',
  BOOKING_COMPLETION_TIME: 'booking-completion-time',
  AVAILABILITY_FRESHNESS: 'availability-freshness',
  PRICING_RESPONSE: 'pricing-response',
  MESSAGE_DELIVERY: 'message-delivery',
  WORKFLOW_DEADLINE: 'workflow-deadline',
  INTEGRATION_DELIVERY: 'integration-delivery',
  AI_RESPONSE_TIME: 'ai-response-time',
  PROPERTY_OPERATION_COMPLETION: 'property-operation-completion',
  RECOVERY_PROCESSING: 'recovery-processing',
  DATA_QUERY_RESPONSIVENESS: 'data-query-responsiveness'
});

export const PERFORMANCE_INDICATORS = Object.freeze({
  END_TO_END_DURATION: 'end-to-end-duration',
  QUEUE_DELAY: 'queue-delay',
  PROCESSING_DURATION: 'processing-duration',
  THROUGHPUT: 'throughput',
  CONCURRENCY: 'concurrency',
  COMPLETION_RATE: 'completion-rate',
  TIMEOUT_RATE: 'timeout-rate',
  RETRY_RATE: 'retry-rate',
  ERROR_RATE: 'error-rate',
  TAIL_LATENCY: 'tail-latency',
  DATA_FRESHNESS: 'data-freshness',
  AI_TIME_TO_FIRST_RESPONSE: 'ai-time-to-first-response',
  AI_COMPLETION_TIME: 'ai-completion-time',
  WORKFLOW_AGE: 'workflow-age',
  INTEGRATION_LAG: 'integration-lag',
  RESOURCE_SATURATION: 'resource-saturation',
  USER_ABANDONMENT: 'user-abandonment',
  MANUAL_FALLBACK_DEMAND: 'manual-fallback-demand'
});

export const CAPACITY_BASELINE_CONDITIONS = Object.freeze({
  NORMAL_OPERATIONS: 'normal-operations',
  PEAK_OPERATIONS: 'peak-operations',
  DEGRADED_DEPENDENCIES: 'degraded-dependencies',
  PROGRESSIVE_RELEASES: 'progressive-releases',
  RECOVERY_ACTIVITY: 'recovery-activity',
  TENANT_ONBOARDING: 'tenant-onboarding',
  PROPERTY_ONBOARDING: 'property-onboarding',
  AI_PROVIDER_VARIATION: 'ai-provider-variation',
  WORKFLOW_BACKLOGS: 'workflow-backlogs',
  EXTERNAL_RATE_LIMITS: 'external-rate-limits'
});

export const CAPACITY_LIMIT_TYPES = Object.freeze({
  HARD_LIMIT: 'hard-limit',
  SOFT_LIMIT: 'soft-limit',
  OPERATIONAL_TARGET: 'operational-target',
  SCALING_THRESHOLD: 'scaling-threshold',
  DEGRADATION_THRESHOLD: 'degradation-threshold',
  ADMISSION_CONTROL_THRESHOLD: 'admission-control-threshold',
  SAFETY_MARGIN: 'safety-margin',
  RECOVERY_THRESHOLD: 'recovery-threshold',
  PROVIDER_QUOTA: 'provider-quota',
  CONTRACTUAL_LIMIT: 'contractual-limit',
  COST_LIMIT: 'cost-limit'
});

export const USABLE_CAPACITY_FACTORS = Object.freeze({
  RESILIENCE_RESERVE: 'resilience-reserve',
  FAILOVER_REQUIREMENTS: 'failover-requirements',
  MAINTENANCE: 'maintenance',
  RECOVERY: 'recovery',
  TENANT_ISOLATION: 'tenant-isolation',
  SECURITY_OVERHEAD: 'security-overhead',
  OBSERVABILITY_OVERHEAD: 'observability-overhead',
  PERFORMANCE_VARIABILITY: 'performance-variability',
  PROVIDER_CONSTRAINTS: 'provider-constraints',
  DATA_REPLICATION: 'data-replication',
  PEAK_UNCERTAINTY: 'peak-uncertainty',
  SAFE_OPERATING_MARGIN: 'safe-operating-margin'
});

export const CAPACITY_HEADROOM_FACTORS = Object.freeze({
  BUSINESS_CRITICALITY: 'business-criticality',
  SCALING_SPEED: 'scaling-speed',
  DEMAND_VARIABILITY: 'demand-variability',
  FORECAST_CONFIDENCE: 'forecast-confidence',
  DEPENDENCY_RISK: 'dependency-risk',
  RECOVERY_REQUIREMENTS: 'recovery-requirements',
  PROVIDER_LIMITS: 'provider-limits',
  TENANT_SCOPE: 'tenant-scope',
  COST_TOLERANCE: 'cost-tolerance'
});

export const RESOURCE_ALLOCATION_QUALITIES = Object.freeze({
  POLICY_DRIVEN: 'policy-driven',
  BUSINESS_ALIGNED: 'business-aligned',
  TENANT_AWARE: 'tenant-aware',
  PRIORITY_AWARE: 'priority-aware',
  OBSERVABLE: 'observable',
  AUDITABLE: 'auditable',
  ADJUSTABLE: 'adjustable',
  PROTECTED_FROM_STARVATION: 'protected-from-starvation',
  COMPATIBLE_WITH_SERVICE_COMMITMENTS: 'compatible-with-service-commitments'
});

export const TENANT_FAIRNESS_CONTROLS = Object.freeze({
  TENANT_QUOTAS: 'tenant-quotas',
  RATE_BOUNDARIES: 'rate-boundaries',
  CONCURRENCY_LIMITS: 'concurrency-limits',
  RESERVED_MINIMUMS: 'reserved-minimums',
  PRIORITY_CLASSES: 'priority-classes',
  BURST_ALLOWANCES: 'burst-allowances',
  COST_ATTRIBUTION: 'cost-attribution',
  ISOLATION: 'isolation',
  BACKPRESSURE: 'backpressure',
  ADMISSION_CONTROL: 'admission-control'
});

export const PROPERTY_PRIORITIZATION_FACTORS = Object.freeze({
  ACTIVE_STAYS: 'active-stays',
  ARRIVALS_AND_DEPARTURES: 'arrivals-and-departures',
  BOOKING_ACTIVITY: 'booking-activity',
  GUEST_EMERGENCIES: 'guest-emergencies',
  LOCAL_OUTAGES: 'local-outages',
  PROPERTY_SIZE: 'property-size',
  OPERATIONAL_SCHEDULE: 'operational-schedule',
  TENANT_POLICY: 'tenant-policy',
  LOCAL_MANUAL_ALTERNATIVES: 'local-manual-alternatives'
});

export const CAPACITY_SCALING_ACTIONS = Object.freeze({
  INCREASING_RESOURCES: 'increasing-resources',
  ADDING_PARALLEL_CAPACITY: 'adding-parallel-capacity',
  PARTITIONING_WORKLOAD: 'partitioning-workload',
  DISTRIBUTING_WORKLOAD: 'distributing-workload',
  REDUCING_NONCRITICAL_DEMAND: 'reducing-noncritical-demand',
  SHIFTING_SCHEDULES: 'shifting-schedules',
  USING_ALTERNATE_PROVIDERS: 'using-alternate-providers',
  INCREASING_HUMAN_CAPACITY: 'increasing-human-capacity',
  CHANGING_EXECUTION_PRIORITY: 'changing-execution-priority',
  ACTIVATING_RESERVED_CAPACITY: 'activating-reserved-capacity'
});

export const ELASTICITY_POLICY_FIELDS = Object.freeze({
  SIGNALS: 'signals',
  THRESHOLDS: 'thresholds',
  MINIMUM_AND_MAXIMUM_CAPACITY: 'minimum-and-maximum-capacity',
  SCALING_RATE: 'scaling-rate',
  COOLDOWN: 'cooldown',
  TENANT_SCOPE: 'tenant-scope',
  PRIORITY: 'priority',
  COST_BOUNDARIES: 'cost-boundaries',
  PROVIDER_LIMITS: 'provider-limits',
  FAILURE_HANDLING: 'failure-handling',
  VERIFICATION: 'verification',
  HUMAN_ESCALATION: 'human-escalation'
});

export const ADMISSION_CONTROL_ACTIONS = Object.freeze({
  REJECT_NONCRITICAL_WORK: 'reject-noncritical-work',
  DEFER_WORK: 'defer-work',
  QUEUE_WORK: 'queue-work',
  LIMIT_CONCURRENCY: 'limit-concurrency',
  LIMIT_TENANT_BURSTS: 'limit-tenant-bursts',
  REQUIRE_RETRY: 'require-retry',
  RESTRICT_EXPENSIVE_OPERATIONS: 'restrict-expensive-operations',
  REDUCE_AI_CONTEXT_OR_CAPABILITY: 'reduce-ai-context-or-capability',
  SHIFT_TO_ALTERNATE_CHANNELS: 'shift-to-alternate-channels',
  PRIORITIZE_ACTIVE_GUEST_OPERATIONS: 'prioritize-active-guest-operations',
  ACTIVATE_MANUAL_HANDLING: 'activate-manual-handling'
});

export const BACKPRESSURE_FAILURE_MODES = Object.freeze({
  UNBOUNDED_QUEUES: 'unbounded-queues',
  RETRY_STORMS: 'retry-storms',
  CASCADING_FAILURE: 'cascading-failure',
  MEMORY_EXHAUSTION: 'memory-exhaustion',
  PROVIDER_LIMIT_VIOLATION: 'provider-limit-violation',
  HIDDEN_LATENCY_GROWTH: 'hidden-latency-growth',
  DATA_LOSS_RISK: 'data-loss-risk'
});

export const BACKLOG_MANAGEMENT_DIMENSIONS = Object.freeze({
  AGE: 'age',
  PRIORITY: 'priority',
  BUSINESS_DEADLINE: 'business-deadline',
  TENANT: 'tenant',
  PROPERTY: 'property',
  WORK_TYPE: 'work-type',
  RETRY_COUNT: 'retry-count',
  FAILURE_REASON: 'failure-reason',
  RESOURCE_COST: 'resource-cost',
  EXPIRATION: 'expiration',
  COMPENSATION_NEED: 'compensation-need'
});

export const GRACEFUL_DEGRADATION_OPTIONS = Object.freeze({
  DEFERRING_ANALYTICS: 'deferring-analytics',
  REDUCING_REFRESH_FREQUENCY: 'reducing-refresh-frequency',
  LIMITING_NONCRITICAL_AUTOMATION: 'limiting-noncritical-automation',
  REDUCING_AI_AUTONOMY: 'reducing-ai-autonomy',
  USING_SMALLER_OR_ALTERNATE_MODELS: 'using-smaller-or-alternate-models',
  SHORTENING_CONTEXT_WITHIN_POLICY: 'shortening-context-within-policy',
  DISABLING_OPTIONAL_FEATURES: 'disabling-optional-features',
  PRIORITIZING_CRITICAL_WORKFLOWS: 'prioritizing-critical-workflows',
  SERVING_CACHED_INFORMATION: 'serving-cached-information',
  SWITCHING_TO_MANUAL_OPERATIONS: 'switching-to-manual-operations',
  RESTRICTING_TENANT_BURSTS: 'restricting-tenant-bursts'
});

export const PERFORMANCE_ISOLATION_DIMENSIONS = Object.freeze({
  TENANTS: 'tenants',
  PROPERTIES: 'properties',
  BUSINESS_CAPABILITIES: 'business-capabilities',
  SERVICES: 'services',
  AI_AGENTS: 'ai-agents',
  WORKFLOW_CLASSES: 'workflow-classes',
  INTEGRATIONS: 'integrations',
  DATA_WORKLOADS: 'data-workloads',
  BACKGROUND_PROCESSING: 'background-processing',
  RECOVERY_PROCESSING: 'recovery-processing',
  ADMINISTRATIVE_WORK: 'administrative-work'
});

export const AI_CAPACITY_FACTORS = Object.freeze({
  MODEL_AND_PROVIDER_QUOTAS: 'model-and-provider-quotas',
  CONCURRENT_REQUESTS: 'concurrent-requests',
  CONTEXT_SIZE: 'context-size',
  TOKEN_OR_COMPUTE_CONSUMPTION: 'token-or-compute-consumption',
  TOOL_EXECUTION: 'tool-execution',
  MULTI_STEP_REASONING: 'multi-step-reasoning',
  AGENT_COORDINATION: 'agent-coordination',
  EVALUATION: 'evaluation',
  SAFETY_PROCESSING: 'safety-processing',
  LATENCY: 'latency',
  COST: 'cost',
  PROVIDER_VARIATION: 'provider-variation',
  FALLBACK_CAPACITY: 'fallback-capacity'
});

export const AI_PERFORMANCE_FACTORS = Object.freeze({
  RESPONSE_LATENCY: 'response-latency',
  TIME_TO_FIRST_OUTPUT: 'time-to-first-output',
  TASK_COMPLETION: 'task-completion',
  QUALITY: 'quality',
  TOOL_SUCCESS: 'tool-success',
  SAFETY: 'safety',
  COST: 'cost',
  RETRY_BEHAVIOR: 'retry-behavior',
  HUMAN_ESCALATION: 'human-escalation',
  PROVIDER_AVAILABILITY: 'provider-availability'
});

export const WORKFLOW_CAPACITY_FACTORS = Object.freeze({
  ACTIVE_INSTANCES: 'active-instances',
  LONG_RUNNING_STATE: 'long-running-state',
  SCHEDULED_TRIGGERS: 'scheduled-triggers',
  TIMERS: 'timers',
  EVENT_VOLUME: 'event-volume',
  PARALLEL_BRANCHES: 'parallel-branches',
  RETRIES: 'retries',
  COMPENSATION: 'compensation',
  MANUAL_TASKS: 'manual-tasks',
  DEADLINES: 'deadlines',
  BACKLOG_RECOVERY: 'backlog-recovery'
});

export const INTEGRATION_CAPACITY_FACTORS = Object.freeze({
  PROVIDER_QUOTAS: 'provider-quotas',
  CONNECTION_LIMITS: 'connection-limits',
  API_RATES: 'api-rates',
  EVENT_VOLUME: 'event-volume',
  MESSAGE_SIZE: 'message-size',
  DELIVERY_WINDOWS: 'delivery-windows',
  RETRY_BEHAVIOR: 'retry-behavior',
  BATCH_CONSTRAINTS: 'batch-constraints',
  RECONCILIATION: 'reconciliation',
  PARTNER_MAINTENANCE: 'partner-maintenance',
  AUTHENTICATION_LIMITS: 'authentication-limits'
});

export const DATA_CAPACITY_FACTORS = Object.freeze({
  TRANSACTION_VOLUME: 'transaction-volume',
  STORAGE_GROWTH: 'storage-growth',
  QUERY_DEMAND: 'query-demand',
  INDEX_GROWTH: 'index-growth',
  ANALYTICS: 'analytics',
  REPLICATION: 'replication',
  BACKUP: 'backup',
  RECOVERY: 'recovery',
  RETENTION: 'retention',
  ARCHIVAL: 'archival',
  DATA_MIGRATION: 'data-migration',
  TENANT_ISOLATION: 'tenant-isolation'
});

export const HUMAN_CAPACITY_FACTORS = Object.freeze({
  SUPPORT_VOLUME: 'support-volume',
  INCIDENT_CONCURRENCY: 'incident-concurrency',
  CHANGE_SCHEDULE: 'change-schedule',
  PROPERTY_COVERAGE: 'property-coverage',
  SPECIALIST_AVAILABILITY: 'specialist-availability',
  APPROVAL_DEMAND: 'approval-demand',
  MANUAL_WORKFLOW_TASKS: 'manual-workflow-tasks',
  TRAINING: 'training',
  FATIGUE: 'fatigue',
  HANDOFFS: 'handoffs',
  CRISIS_RESERVE: 'crisis-reserve'
});

export const EXTERNAL_PROVIDER_CAPACITY_CONSTRAINTS = Object.freeze({
  CONTRACTUAL_QUOTAS: 'contractual-quotas',
  PROVIDER_RATE_LIMITS: 'provider-rate-limits',
  REGIONAL_AVAILABILITY: 'regional-availability',
  COST: 'cost',
  SUPPORT_RESPONSE: 'support-response',
  MAINTENANCE_WINDOWS: 'maintenance-windows',
  MODEL_ACCESS: 'model-access',
  CHANNEL_RESTRICTIONS: 'channel-restrictions',
  PARTNER_PROCESSING_LIMITS: 'partner-processing-limits'
});

export const PERFORMANCE_TESTING_SCENARIOS = Object.freeze({
  NORMAL_DEMAND: 'normal-demand',
  PEAK_DEMAND: 'peak-demand',
  BURST: 'burst',
  SUSTAINED_LOAD: 'sustained-load',
  CAPACITY_LIMITS: 'capacity-limits',
  DEPENDENCY_DEGRADATION: 'dependency-degradation',
  PROVIDER_CONSTRAINTS: 'provider-constraints',
  MULTI_TENANT_CONTENTION: 'multi-tenant-contention',
  FAILOVER: 'failover',
  RECOVERY_BACKLOG: 'recovery-backlog',
  DATA_GROWTH: 'data-growth',
  AI_WORKLOAD_VARIATION: 'ai-workload-variation',
  WORKFLOW_CONCURRENCY: 'workflow-concurrency',
  INTEGRATION_THROTTLING: 'integration-throttling'
});

export const CAPACITY_CHANGE_VALIDATION_TRIGGERS = Object.freeze({
  NEW_TENANT_OR_PROPERTY_COHORTS: 'new-tenant-or-property-cohorts',
  NEW_SERVICES: 'new-services',
  AI_MODEL_CHANGES: 'ai-model-changes',
  WORKFLOW_CHANGES: 'workflow-changes',
  INTEGRATION_CHANGES: 'integration-changes',
  DATA_MIGRATIONS: 'data-migrations',
  MAJOR_RELEASES: 'major-releases',
  INFRASTRUCTURE_CHANGES: 'infrastructure-changes',
  SECURITY_CONTROLS: 'security-controls',
  OBSERVABILITY_CHANGES: 'observability-changes',
  CONTINUITY_CHANGES: 'continuity-changes'
});

export const CAPACITY_EVENT_TYPES = Object.freeze({
  ADVISORY_EVENT: 'advisory-event',
  SCALING_ACTION: 'scaling-action',
  DEMAND_RESTRICTION: 'demand-restriction',
  CAPACITY_RESERVATION: 'capacity-reservation',
  DEGRADED_MODE: 'degraded-mode',
  INCIDENT: 'incident',
  MAJOR_INCIDENT: 'major-incident',
  CONTINUITY_ACTION: 'continuity-action',
  PROVIDER_ESCALATION: 'provider-escalation',
  INVESTMENT_DECISION: 'investment-decision'
});

export const CAPACITY_COST_EFFICIENCY_FACTORS = Object.freeze({
  BUSINESS_VALUE: 'business-value',
  SERVICE_COMMITMENT: 'service-commitment',
  RESILIENCE: 'resilience',
  PERFORMANCE: 'performance',
  GROWTH: 'growth',
  COST: 'cost',
  OPERATIONAL_COMPLEXITY: 'operational-complexity',
  PROVIDER_CONCENTRATION: 'provider-concentration',
  ENVIRONMENTAL_EFFICIENCY: 'environmental-efficiency'
});

export const CAPACITY_RESERVATION_REASONS = Object.freeze({
  CRITICAL_BUSINESS_SERVICES: 'critical-business-services',
  FAILOVER: 'failover',
  RECOVERY: 'recovery',
  SECURITY_RESPONSE: 'security-response',
  PEAK_SEASONS: 'peak-seasons',
  TENANT_COMMITMENTS: 'tenant-commitments',
  PROPERTY_EMERGENCIES: 'property-emergencies',
  MAJOR_RELEASES: 'major-releases',
  DATA_MIGRATION: 'data-migration',
  AI_FALLBACK: 'ai-fallback',
  EXTERNAL_PROVIDER_LOSS: 'external-provider-loss'
});

export const CAPACITY_REVIEW_INPUTS = Object.freeze({
  BUSINESS_DEMAND: 'business-demand',
  FORECAST_ACCURACY: 'forecast-accuracy',
  CURRENT_UTILIZATION: 'current-utilization',
  USABLE_CAPACITY: 'usable-capacity',
  HEADROOM: 'headroom',
  SERVICE_PERFORMANCE: 'service-performance',
  TENANT_FAIRNESS: 'tenant-fairness',
  PROPERTY_DEMAND: 'property-demand',
  AI_CONSUMPTION: 'ai-consumption',
  WORKFLOW_BACKLOG: 'workflow-backlog',
  INTEGRATION_CONSTRAINTS: 'integration-constraints',
  DATA_GROWTH: 'data-growth',
  HUMAN_CAPACITY: 'human-capacity',
  PROVIDER_RISK: 'provider-risk',
  COST: 'cost',
  PLANNED_CHANGES: 'planned-changes',
  REQUIRED_DECISIONS: 'required-decisions'
});

export const PERFORMANCE_OPTIMIZATION_TARGETS = Object.freeze({
  BUSINESS_PROCESS: 'business-process',
  SERVICE_INTERACTION: 'service-interaction',
  DATA_ACCESS: 'data-access',
  AI_MODEL_OR_CONTEXT: 'ai-model-or-context',
  WORKFLOW_DESIGN: 'workflow-design',
  INTEGRATION_PATTERN: 'integration-pattern',
  SCHEDULING: 'scheduling',
  CACHING: 'caching',
  CONCURRENCY: 'concurrency',
  CAPACITY_ALLOCATION: 'capacity-allocation',
  USER_EXPERIENCE: 'user-experience',
  MANUAL_ACTIVITY: 'manual-activity'
});

export const CAPACITY_RISK_TRIGGERS = Object.freeze({
  FORECAST_DEMAND_EXCEEDS_PLANNED_SUPPLY: 'forecast-demand-exceeds-planned-supply',
  HEADROOM_INSUFFICIENT: 'headroom-insufficient',
  SCALING_SLOWER_THAN_DEMAND_GROWTH: 'scaling-slower-than-demand-growth',
  PROVIDER_QUOTA_CONSTRAINED: 'provider-quota-constrained',
  HUMAN_COVERAGE_INADEQUATE: 'human-coverage-inadequate',
  SHARED_SERVICE_CONCENTRATION_RISK: 'shared-service-concentration-risk',
  FAILOVER_CANNOT_MEET_COMMITMENTS: 'failover-cannot-meet-commitments',
  COST_LIMITS_PREVENT_REQUIRED_CAPACITY: 'cost-limits-prevent-required-capacity',
  DEMAND_POORLY_UNDERSTOOD: 'demand-poorly-understood',
  PERFORMANCE_OBJECTIVES_REPEATEDLY_MISSED: 'performance-objectives-repeatedly-missed'
});

export const CAPACITY_PERFORMANCE_MEASURES = Object.freeze({
  DEMAND_VOLUME_AND_GROWTH: 'demand-volume-and-growth',
  FORECAST_ACCURACY: 'forecast-accuracy',
  USABLE_CAPACITY: 'usable-capacity',
  HEADROOM: 'headroom',
  SATURATION_FREQUENCY: 'saturation-frequency',
  SCALING_SUCCESS: 'scaling-success',
  ADMISSION_CONTROL_FREQUENCY: 'admission-control-frequency',
  BACKLOG_SIZE_AND_AGE: 'backlog-size-and-age',
  TENANT_FAIRNESS: 'tenant-fairness',
  PROPERTY_SERVICE_IMPACT: 'property-service-impact',
  PROVIDER_QUOTA_USE: 'provider-quota-use',
  HUMAN_SUPPORT_LOAD: 'human-support-load',
  CAPACITY_RELATED_INCIDENTS: 'capacity-related-incidents',
  PERFORMANCE_OBJECTIVE_ATTAINMENT: 'performance-objective-attainment',
  COST_PER_BUSINESS_OUTCOME: 'cost-per-business-outcome',
  RECOVERY_CAPACITY: 'recovery-capacity',
  RESERVED_CAPACITY_ADEQUACY: 'reserved-capacity-adequacy'
});

export const CAPACITY_PERFORMANCE_GOVERNANCE_AREAS = Object.freeze({
  FORECAST_ASSUMPTIONS: 'forecast-assumptions',
  PERFORMANCE_OBJECTIVES: 'performance-objectives',
  CAPACITY_MODELS: 'capacity-models',
  HEADROOM: 'headroom',
  ALLOCATION: 'allocation',
  TENANT_FAIRNESS: 'tenant-fairness',
  PRIORITY: 'priority',
  SCALING_LIMITS: 'scaling-limits',
  ADMISSION_CONTROL: 'admission-control',
  PROVIDER_QUOTAS: 'provider-quotas',
  COST_BOUNDARIES: 'cost-boundaries',
  CAPACITY_RISK: 'capacity-risk',
  TESTING: 'testing',
  REVIEW: 'review',
  INVESTMENT_DECISIONS: 'investment-decisions'
});

export const CAPACITY_PERFORMANCE_QUALITY_ATTRIBUTES = Object.freeze({
  SCALABILITY: 'scalability',
  PERFORMANCE: 'performance',
  RELIABILITY: 'reliability',
  AVAILABILITY: 'availability',
  RESILIENCE: 'resilience',
  EFFICIENCY: 'efficiency',
  PREDICTABILITY: 'predictability',
  FAIRNESS: 'fairness',
  ADAPTABILITY: 'adaptability',
  RECOVERABILITY: 'recoverability',
  TENANT_ISOLATION: 'tenant-isolation',
  BUSINESS_CONTINUITY: 'business-continuity'
});

export const CAPACITY_PERFORMANCE_ARCHITECTURAL_RULES = Object.freeze({
  DERIVE_CAPACITY_FROM_BUSINESS_DEMAND: 'derive-capacity-from-business-demand',
  MEASURE_PERFORMANCE_END_TO_END: 'measure-performance-end-to-end',
  MODEL_ALL_CAPACITY_DOMAINS: 'model-all-capacity-domains',
  DEFINE_PERFORMANCE_OBJECTIVES_AND_CAPACITY_LIMITS: 'define-performance-objectives-and-capacity-limits',
  PRESERVE_SAFE_OPERATING_HEADROOM: 'preserve-safe-operating-headroom',
  FORECAST_ACROSS_ALL_HORIZONS: 'forecast-across-all-horizons',
  ALLOCATE_SHARED_CAPACITY_THROUGH_POLICY: 'allocate-shared-capacity-through-policy',
  PROTECT_TENANT_AND_PROPERTY_WORKLOADS: 'protect-tenant-and-property-workloads',
  GOVERN_ELASTICITY_AND_AUTOMATED_SCALING: 'govern-elasticity-and-automated-scaling',
  USE_ADMISSION_CONTROL_AND_BACKPRESSURE: 'use-admission-control-and-backpressure',
  DESIGN_GRACEFUL_DEGRADATION: 'design-graceful-degradation',
  PROTECT_CRITICAL_WORKLOADS: 'protect-critical-workloads',
  VALIDATE_CAPACITY_BEFORE_MATERIAL_CHANGE: 'validate-capacity-before-material-change',
  ACCOUNT_FOR_FAILOVER_AND_RECOVERY_DEMAND: 'account-for-failover-and-recovery-demand',
  BALANCE_COST_WITH_SERVICE_QUALITY_AND_RESILIENCE: 'balance-cost-with-service-quality-and-resilience',
  RECORD_AND_GOVERN_CAPACITY_RISK: 'record-and-govern-capacity-risk',
  REVIEW_AND_OPTIMIZE_CONTINUOUSLY: 'review-and-optimize-continuously',
  REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT: 'remain-vendor-neutral-and-technology-independent'
});

export const FUTURE_CAPACITY_PERFORMANCE_CAPABILITIES = Object.freeze({
  AI_ASSISTED_DEMAND_FORECASTING: 'ai-assisted-demand-forecasting',
  PREDICTIVE_SATURATION_PREVENTION: 'predictive-saturation-prevention',
  INTENT_BASED_CAPACITY_ALLOCATION: 'intent-based-capacity-allocation',
  AUTONOMOUS_BOUNDED_SCALING: 'autonomous-bounded-scaling',
  DYNAMIC_PERFORMANCE_BUDGETS: 'dynamic-performance-budgets',
  CROSS_PROPERTY_DEMAND_OPTIMIZATION: 'cross-property-demand-optimization',
  OPERATIONAL_DIGITAL_TWINS: 'operational-digital-twins',
  CAPACITY_MARKET_ABSTRACTION: 'capacity-market-abstraction',
  ADAPTIVE_TENANT_FAIRNESS: 'adaptive-tenant-fairness',
  SEMANTIC_WORKLOAD_CLASSIFICATION: 'semantic-workload-classification',
  CARBON_AWARE_SCHEDULING: 'carbon-aware-scheduling',
  SELF_OPTIMIZING_SERVICE_PERFORMANCE: 'self-optimizing-service-performance'
});

export const CONTINUITY_RESILIENCE_OBJECTIVES = Object.freeze({
  PROTECT_CRITICAL_GUEST_AND_BUSINESS_OUTCOMES: 'protect-critical-guest-and-business-outcomes',
  DEFINED_DISRUPTION_TOLERANCE: 'defined-disruption-tolerance',
  COORDINATED_CONTINUITY_ACTIVATION: 'coordinated-continuity-activation',
  SAFE_DEGRADED_OPERATING_MODES: 'safe-degraded-operating-modes',
  BUSINESS_ALIGNED_RECOVERY_PRIORITIES: 'business-aligned-recovery-priorities',
  RELIABLE_DATA_AND_SERVICE_RESTORATION: 'reliable-data-and-service-restoration',
  TENANT_AND_PROPERTY_ISOLATION_DURING_RECOVERY: 'tenant-and-property-isolation-during-recovery',
  PROVIDER_AND_DEPENDENCY_RESILIENCE: 'provider-and-dependency-resilience',
  HUMAN_AND_AUTOMATED_CONTINUITY: 'human-and-automated-continuity',
  VERIFIED_RETURN_TO_STABLE_SERVICE: 'verified-return-to-stable-service',
  SCALABLE_MULTI_PROPERTY_RECOVERY: 'scalable-multi-property-recovery',
  REGULAR_TESTING_AND_EVIDENCE: 'regular-testing-and-evidence',
  CONTINUOUS_RESILIENCE_IMPROVEMENT: 'continuous-resilience-improvement',
  VENDOR_NEUTRAL_CONTINUITY_CAPABILITIES: 'vendor-neutral-continuity-capabilities'
});

export const CONTINUITY_RESILIENCE_PRINCIPLES = Object.freeze({
  BUSINESS_OUTCOMES_DEFINE_RESILIENCE: 'business-outcomes-define-resilience',
  ASSUME_DISRUPTION: 'assume-disruption',
  CONTINUE_BEFORE_FULL_RESTORATION: 'continue-before-full-restoration',
  CONTAIN_THE_BLAST_RADIUS: 'contain-the-blast-radius',
  RECOVER_IN_BUSINESS_PRIORITY_ORDER: 'recover-in-business-priority-order',
  DATA_INTEGRITY_BEFORE_SPEED: 'data-integrity-before-speed',
  PRACTICE_BEFORE_CRISIS: 'practice-before-crisis',
  EXPLICIT_AUTHORITY: 'explicit-authority',
  LEARN_AND_ADAPT: 'learn-and-adapt'
});

export const RESILIENCE_LIFECYCLE_STAGES = Object.freeze({
  UNDERSTAND_CRITICAL_OUTCOMES: 'Understand Critical Outcomes',
  ASSESS_DISRUPTION_RISK: 'Assess Disruption Risk',
  DEFINE_TOLERANCES_AND_OBJECTIVES: 'Define Tolerances and Objectives',
  DESIGN_RESILIENCE_AND_CONTINUITY_STRATEGIES: 'Design Resilience and Continuity Strategies',
  PREPARE_PLANS_PEOPLE_DATA_AND_CAPABILITIES: 'Prepare Plans, People, Data, and Capabilities',
  EXERCISE_AND_VALIDATE: 'Exercise and Validate',
  ACTIVATE_WHEN_REQUIRED: 'Activate when Required',
  CONTINUE_AND_RECOVER: 'Continue and Recover',
  VERIFY_AND_RECONCILE: 'Verify and Reconcile',
  RETURN_TO_NORMAL: 'Return to Normal',
  LEARN_AND_IMPROVE: 'Learn and Improve'
});

export const CRITICAL_BUSINESS_SERVICE_EXAMPLES = Object.freeze({
  GUEST_ACCESS_AND_ESSENTIAL_COMMUNICATION: 'guest-access-and-essential-communication',
  ACTIVE_STAY_SUPPORT: 'active-stay-support',
  BOOKING_INTEGRITY: 'booking-integrity',
  AVAILABILITY_MANAGEMENT: 'availability-management',
  PRICING_INTEGRITY: 'pricing-integrity',
  PAYMENT_PROTECTION: 'payment-protection',
  PROPERTY_OPERATIONS: 'property-operations',
  IDENTITY_AND_AUTHORIZATION: 'identity-and-authorization',
  SECURITY_RESPONSE: 'security-response',
  DATA_PROTECTION: 'data-protection',
  CRITICAL_CHANNEL_COMMUNICATION: 'critical-channel-communication',
  EMERGENCY_PROPERTY_COORDINATION: 'emergency-property-coordination'
});

export const CRITICAL_SERVICE_RECORD_FIELDS = Object.freeze({
  SERVICE_NAME_AND_PURPOSE: 'service-name-and-purpose',
  BUSINESS_OWNER: 'business-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  GUESTS_AND_USERS_SERVED: 'guests-and-users-served',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  CRITICAL_TIME_PERIODS: 'critical-time-periods',
  MAXIMUM_TOLERABLE_DISRUPTION: 'maximum-tolerable-disruption',
  MINIMUM_ACCEPTABLE_SERVICE: 'minimum-acceptable-service',
  RECOVERY_TIME_OBJECTIVE: 'recovery-time-objective',
  RECOVERY_POINT_OBJECTIVE: 'recovery-point-objective',
  DEPENDENCIES: 'dependencies',
  DATA_REQUIREMENTS: 'data-requirements',
  SECURITY_REQUIREMENTS: 'security-requirements',
  PEOPLE_AND_PROPERTY_DEPENDENCIES: 'people-and-property-dependencies',
  EXTERNAL_PROVIDERS: 'external-providers',
  CONTINUITY_STRATEGY: 'continuity-strategy',
  RECOVERY_STRATEGY: 'recovery-strategy',
  COMMUNICATION_OBLIGATIONS: 'communication-obligations',
  TESTING_REQUIREMENTS: 'testing-requirements',
  RESIDUAL_RISKS: 'residual-risks'
});

export const BUSINESS_IMPACT_ANALYSIS_DIMENSIONS = Object.freeze({
  GUEST_IMPACT: 'guest-impact',
  PROPERTY_IMPACT: 'property-impact',
  TENANT_IMPACT: 'tenant-impact',
  REVENUE: 'revenue',
  BOOKING_INTEGRITY: 'booking-integrity',
  ACTIVE_STAYS: 'active-stays',
  SAFETY: 'safety',
  SECURITY: 'security',
  DATA: 'data',
  COMPLIANCE: 'compliance',
  REPUTATION: 'reputation',
  EXTERNAL_OBLIGATIONS: 'external-obligations',
  MANUAL_WORKLOAD: 'manual-workload',
  DEPENDENCY_PROPAGATION: 'dependency-propagation',
  RECOVERY_COMPLEXITY: 'recovery-complexity'
});

export const TIME_BASED_IMPACT_DIMENSIONS = Object.freeze({
  IMMEDIATE_IMPACT: 'immediate-impact',
  SHORT_DISRUPTION_IMPACT: 'short-disruption-impact',
  PROLONGED_DISRUPTION_IMPACT: 'prolonged-disruption-impact',
  TIME_CRITICAL_DEADLINES: 'time-critical-deadlines',
  IRREVERSIBLE_THRESHOLDS: 'irreversible-thresholds',
  BACKLOG_GROWTH: 'backlog-growth',
  RECOVERY_WORKLOAD: 'recovery-workload',
  REGULATORY_DEADLINES: 'regulatory-deadlines',
  GUEST_JOURNEY_MILESTONES: 'guest-journey-milestones',
  PROPERTY_OPERATING_WINDOWS: 'property-operating-windows'
});

export const CONTINUITY_TOLERANCE_TYPES = Object.freeze({
  DURATION: 'duration',
  TRANSACTION_LOSS: 'transaction-loss',
  DATA_LOSS: 'data-loss',
  BACKLOG: 'backlog',
  GUEST_DELAY: 'guest-delay',
  PROPERTY_DELAY: 'property-delay',
  REDUCED_FUNCTIONALITY: 'reduced-functionality',
  MANUAL_WORKLOAD: 'manual-workload',
  AI_QUALITY: 'ai-quality',
  INTEGRATION_DELAY: 'integration-delay',
  SECURITY_EXPOSURE: 'security-exposure',
  FINANCIAL_IMPACT: 'financial-impact',
  TENANT_SCOPE: 'tenant-scope'
});

export const RECOVERY_OBJECTIVE_TYPES = Object.freeze({
  RECOVERY_TIME_OBJECTIVE: 'recovery-time-objective',
  RECOVERY_POINT_OBJECTIVE: 'recovery-point-objective',
  MAXIMUM_TOLERABLE_DISRUPTION: 'maximum-tolerable-disruption',
  MINIMUM_BUSINESS_CONTINUITY_OBJECTIVE: 'minimum-business-continuity-objective',
  RECOVERY_CAPACITY_OBJECTIVE: 'recovery-capacity-objective'
});

export const RESILIENCE_STRATEGIES = Object.freeze({
  REDUNDANCY: 'redundancy',
  ISOLATION: 'isolation',
  DISTRIBUTION: 'distribution',
  FAILOVER: 'failover',
  GRACEFUL_DEGRADATION: 'graceful-degradation',
  QUEUEING: 'queueing',
  BACKPRESSURE: 'backpressure',
  ALTERNATE_PROVIDERS: 'alternate-providers',
  MANUAL_PROCEDURES: 'manual-procedures',
  LOCAL_PROPERTY_OPERATION: 'local-property-operation',
  CACHED_OR_LAST_KNOWN_INFORMATION: 'cached-or-last-known-information',
  RESERVED_CAPACITY: 'reserved-capacity',
  REDUCED_AI_AUTONOMY: 'reduced-ai-autonomy',
  WORKFLOW_COMPENSATION: 'workflow-compensation',
  DATA_BACKUP_AND_REPLICATION: 'data-backup-and-replication',
  CROSS_REGION_OR_ALTERNATE_ENVIRONMENT_RECOVERY: 'cross-region-or-alternate-environment-recovery',
  SUPPLIER_SUBSTITUTION: 'supplier-substitution',
  STAFF_CROSS_TRAINING: 'staff-cross-training'
});

export const CONTINUITY_PLAN_FIELDS = Object.freeze({
  SCOPE: 'scope',
  CRITICAL_OUTCOMES: 'critical-outcomes',
  ACTIVATION_CRITERIA: 'activation-criteria',
  AUTHORITY: 'authority',
  COMMAND_STRUCTURE: 'command-structure',
  PARTICIPANTS: 'participants',
  MINIMUM_SERVICE: 'minimum-service',
  CONTINUITY_PROCEDURES: 'continuity-procedures',
  DEPENDENCIES: 'dependencies',
  DATA_REQUIREMENTS: 'data-requirements',
  SECURITY_CONTROLS: 'security-controls',
  TENANT_AND_PROPERTY_BOUNDARIES: 'tenant-and-property-boundaries',
  MANUAL_ALTERNATIVES: 'manual-alternatives',
  COMMUNICATION: 'communication',
  RECOVERY_OBJECTIVES: 'recovery-objectives',
  RESOURCE_REQUIREMENTS: 'resource-requirements',
  EXTERNAL_COORDINATION: 'external-coordination',
  VERIFICATION: 'verification',
  RECONCILIATION: 'reconciliation',
  RETURN_TO_NORMAL_CRITERIA: 'return-to-normal-criteria',
  EXERCISE_SCHEDULE: 'exercise-schedule',
  EVIDENCE_AND_MAINTENANCE_OWNER: 'evidence-and-maintenance-owner'
});

export const CONTINUITY_OPERATING_MODES = Object.freeze({
  NORMAL_MODE: 'normal-mode',
  HEIGHTENED_READINESS: 'heightened-readiness',
  DEGRADED_MODE: 'degraded-mode',
  CONTINUITY_MODE: 'continuity-mode',
  RECOVERY_MODE: 'recovery-mode',
  RETURN_TO_NORMAL_MODE: 'return-to-normal-mode'
});

export const CONTINUITY_ACTIVATION_TRIGGERS = Object.freeze({
  RECOVERY_OBJECTIVES_AT_RISK: 'recovery-objectives-at-risk',
  PROLONGED_SERVICE_DISRUPTION: 'prolonged-service-disruption',
  REGIONAL_OR_PROVIDER_FAILURE: 'regional-or-provider-failure',
  DATA_CENTER_OR_ENVIRONMENT_LOSS: 'data-center-or-environment-loss',
  CRITICAL_DATA_UNAVAILABILITY: 'critical-data-unavailability',
  CYBERSECURITY_EVENT: 'cybersecurity-event',
  INTEGRATION_ECOSYSTEM_FAILURE: 'integration-ecosystem-failure',
  COMMUNICATIONS_CHANNEL_LOSS: 'communications-channel-loss',
  PROPERTY_CONNECTIVITY_FAILURE: 'property-connectivity-failure',
  WORKFORCE_UNAVAILABILITY: 'workforce-unavailability',
  FACILITY_DISRUPTION: 'facility-disruption',
  NATURAL_DISASTER: 'natural-disaster',
  REGULATORY_ACTION: 'regulatory-action',
  SUPPLY_CHAIN_DISRUPTION: 'supply-chain-disruption',
  MULTIPLE_SIMULTANEOUS_INCIDENTS: 'multiple-simultaneous-incidents',
  CRISIS_DECLARATION: 'crisis-declaration'
});

export const CONTINUITY_AUTHORITY_LEVELS = Object.freeze({
  SERVICE_OWNER: 'service-owner',
  PROPERTY_OPERATIONS_OWNER: 'property-operations-owner',
  TENANT_OPERATIONS_OWNER: 'tenant-operations-owner',
  INCIDENT_COMMANDER: 'incident-commander',
  ENTERPRISE_OPERATIONS_OWNER: 'enterprise-operations-owner',
  CRISIS_AUTHORITY: 'crisis-authority'
});

export const CONTINUITY_COMMAND_FIELDS = Object.freeze({
  ACCOUNTABLE_LEADER: 'accountable-leader',
  BUSINESS_PRIORITIES: 'business-priorities',
  ACTIVE_MODE: 'active-mode',
  SCOPE: 'scope',
  DECISION_AUTHORITY: 'decision-authority',
  RESOURCE_ALLOCATION: 'resource-allocation',
  SERVICE_PRIORITIES: 'service-priorities',
  PROPERTY_PRIORITIES: 'property-priorities',
  SECURITY_CONSTRAINTS: 'security-constraints',
  COMMUNICATION: 'communication',
  RECOVERY_SEQUENCING: 'recovery-sequencing',
  REASSESSMENT_CADENCE: 'reassessment-cadence',
  EXIT_CRITERIA: 'exit-criteria'
});

export const SERVICE_CONTINUITY_FIELDS = Object.freeze({
  MINIMUM_ACCEPTABLE_FUNCTIONALITY: 'minimum-acceptable-functionality',
  DEPENDENCY_ALTERNATIVES: 'dependency-alternatives',
  DEGRADED_MODES: 'degraded-modes',
  FAILOVER_BEHAVIOR: 'failover-behavior',
  STATE_RECOVERY: 'state-recovery',
  CAPACITY: 'capacity',
  SUPPORT: 'support',
  COMMUNICATION: 'communication',
  RECOVERY_ORDER: 'recovery-order',
  VERIFICATION: 'verification',
  RETURN_TO_NORMAL: 'return-to-normal'
});

export const AI_CONTINUITY_RISKS = Object.freeze({
  MODEL_PROVIDER_FAILURE: 'model-provider-failure',
  MODEL_QUALITY_DEGRADATION: 'model-quality-degradation',
  TOOL_UNAVAILABILITY: 'tool-unavailability',
  CONTEXT_SOURCE_FAILURE: 'context-source-failure',
  SAFETY_CONTROL_FAILURE: 'safety-control-failure',
  QUOTA_EXHAUSTION: 'quota-exhaustion',
  COST_CONSTRAINT: 'cost-constraint',
  LATENCY_DEGRADATION: 'latency-degradation',
  AGENT_COORDINATION_FAILURE: 'agent-coordination-failure'
});

export const AI_CONTINUITY_OPTIONS = Object.freeze({
  ALTERNATE_MODEL_OR_PROVIDER: 'alternate-model-or-provider',
  REDUCED_CONTEXT: 'reduced-context',
  REDUCED_AUTONOMY: 'reduced-autonomy',
  RESTRICTED_TOOL_ACCESS: 'restricted-tool-access',
  RULE_BASED_FALLBACK: 'rule-based-fallback',
  CACHED_APPROVED_RESPONSES: 'cached-approved-responses',
  HUMAN_APPROVAL: 'human-approval',
  MANUAL_HANDLING: 'manual-handling',
  SUSPENDING_NONCRITICAL_AI_CAPABILITIES: 'suspending-noncritical-ai-capabilities'
});

export const WORKFLOW_CONTINUITY_REQUIREMENTS = Object.freeze({
  DURABLE_STATE: 'durable-state',
  BUSINESS_INVARIANTS: 'business-invariants',
  DEADLINES: 'deadlines',
  IN_FLIGHT_INSTANCES: 'in-flight-instances',
  RETRY_LIMITS: 'retry-limits',
  COMPENSATION: 'compensation',
  MANUAL_TASKS: 'manual-tasks',
  VERSION_COMPATIBILITY: 'version-compatibility',
  EVENT_ORDERING: 'event-ordering',
  RECOVERY_OWNERSHIP: 'recovery-ownership',
  RECONCILIATION: 'reconciliation'
});

export const INTEGRATION_CONTINUITY_RISKS = Object.freeze({
  PROVIDER_UNAVAILABILITY: 'provider-unavailability',
  AUTHENTICATION_FAILURE: 'authentication-failure',
  NETWORK_FAILURE: 'network-failure',
  CONTRACT_INCOMPATIBILITY: 'contract-incompatibility',
  RATE_LIMITATION: 'rate-limitation',
  DELIVERY_BACKLOG: 'delivery-backlog',
  DUPLICATE_OR_OUT_OF_ORDER_MESSAGES: 'duplicate-or-out-of-order-messages',
  CREDENTIAL_COMPROMISE: 'credential-compromise',
  PARTNER_DISASTER: 'partner-disaster',
  CHANNEL_LOSS: 'channel-loss'
});

export const INTEGRATION_CONTINUITY_OPTIONS = Object.freeze({
  BUFFERING: 'buffering',
  CONTROLLED_RETRY: 'controlled-retry',
  ALTERNATE_PROVIDER: 'alternate-provider',
  ALTERNATE_CHANNEL: 'alternate-channel',
  MANUAL_EXCHANGE: 'manual-exchange',
  DEFERRED_DELIVERY: 'deferred-delivery',
  RECONCILIATION: 'reconciliation',
  REDUCED_SCOPE: 'reduced-scope',
  PROPERTY_LOCAL_PROCEDURE: 'property-local-procedure'
});

export const DATA_CONTINUITY_PROTECTIONS = Object.freeze({
  AVAILABILITY: 'availability',
  INTEGRITY: 'integrity',
  CONFIDENTIALITY: 'confidentiality',
  DOMAIN_INVARIANTS: 'domain-invariants',
  TRANSACTION_CONSISTENCY: 'transaction-consistency',
  TENANT_ISOLATION: 'tenant-isolation',
  LINEAGE: 'lineage',
  RETENTION: 'retention',
  BACKUP: 'backup',
  RECOVERY: 'recovery',
  RECONCILIATION: 'reconciliation',
  EVIDENCE: 'evidence'
});

export const PLATFORM_CONTINUITY_CAPABILITIES = Object.freeze({
  IDENTITY: 'identity',
  AUTHORIZATION: 'authorization',
  CONFIGURATION: 'configuration',
  RUNTIME: 'runtime',
  MESSAGING: 'messaging',
  STORAGE: 'storage',
  NETWORK: 'network',
  DEPLOYMENT: 'deployment',
  OBSERVABILITY: 'observability',
  SECRETS: 'secrets',
  SERVICE_DISCOVERY: 'service-discovery',
  SCHEDULING: 'scheduling'
});

export const SECURITY_CONTINUITY_CONTROLS = Object.freeze({
  IDENTITY: 'identity',
  LEAST_PRIVILEGE: 'least-privilege',
  TENANT_ISOLATION: 'tenant-isolation',
  SECRETS_PROTECTION: 'secrets-protection',
  ENCRYPTION: 'encryption',
  AUDIT: 'audit',
  EVIDENCE: 'evidence',
  SECURITY_MONITORING: 'security-monitoring',
  INCIDENT_RESPONSE: 'incident-response',
  APPROVAL_CONTROLS: 'approval-controls'
});

export const HUMAN_CONTINUITY_FACTORS = Object.freeze({
  KEY_PERSON_DEPENDENCY: 'key-person-dependency',
  ON_CALL_COVERAGE: 'on-call-coverage',
  CROSS_TRAINING: 'cross-training',
  ALTERNATE_ROLES: 'alternate-roles',
  DELEGATED_AUTHORITY: 'delegated-authority',
  REMOTE_OPERATIONS: 'remote-operations',
  COMMUNICATION_ALTERNATIVES: 'communication-alternatives',
  FATIGUE: 'fatigue',
  CRISIS_STAFFING: 'crisis-staffing',
  PARTNER_SUPPORT: 'partner-support',
  MANUAL_WORK_CAPACITY: 'manual-work-capacity'
});

export const PROPERTY_CONTINUITY_CONSIDERATIONS = Object.freeze({
  GUEST_ACCESS: 'guest-access',
  ACTIVE_STAYS: 'active-stays',
  ARRIVALS_AND_DEPARTURES: 'arrivals-and-departures',
  LOCAL_STAFF: 'local-staff',
  BUILDING_SYSTEMS: 'building-systems',
  PHYSICAL_KEYS_OR_ACCESS_ALTERNATIVES: 'physical-keys-or-access-alternatives',
  LOCAL_CONNECTIVITY: 'local-connectivity',
  POWER: 'power',
  LOCAL_PAYMENT: 'local-payment',
  MANUAL_BOOKING_RECORDS: 'manual-booking-records',
  EMERGENCY_CONTACTS: 'emergency-contacts',
  LOCAL_REGULATIONS: 'local-regulations',
  GUEST_COMMUNICATION: 'guest-communication'
});

export const TENANT_CONTINUITY_FIELDS = Object.freeze({
  TENANT_SPECIFIC_PRIORITIES: 'tenant-specific-priorities',
  CRITICAL_PROPERTIES: 'critical-properties',
  TENANT_COMMUNICATION: 'tenant-communication',
  TENANT_ADMINISTRATORS: 'tenant-administrators',
  DATA_AND_CONFIGURATION: 'data-and-configuration',
  TENANT_SPECIFIC_INTEGRATIONS: 'tenant-specific-integrations',
  MANUAL_ALTERNATIVES: 'manual-alternatives',
  RECOVERY_ORDER: 'recovery-order',
  SERVICE_COMMITMENTS: 'service-commitments',
  RISK_ACCEPTANCE: 'risk-acceptance'
});

export const MULTI_TENANT_RECOVERY_FACTORS = Object.freeze({
  SAFETY: 'safety',
  ACTIVE_GUEST_IMPACT: 'active-guest-impact',
  CRITICAL_BUSINESS_SERVICES: 'critical-business-services',
  CONTRACTUAL_COMMITMENTS: 'contractual-commitments',
  PROPERTY_CONDITIONS: 'property-conditions',
  TENANT_SCOPE: 'tenant-scope',
  DEPENDENCY_ORDER: 'dependency-order',
  AVAILABLE_ALTERNATIVES: 'available-alternatives',
  RECOVERY_FAIRNESS: 'recovery-fairness',
  REGULATORY_OBLIGATIONS: 'regulatory-obligations'
});

export const EXTERNAL_PROVIDER_CONTINUITY_FIELDS = Object.freeze({
  PROVIDER_CRITICALITY: 'provider-criticality',
  CONTRACT_AND_COMMITMENT: 'contract-and-commitment',
  FAILURE_MODES: 'failure-modes',
  HEALTH_EVIDENCE: 'health-evidence',
  ESCALATION: 'escalation',
  ALTERNATE_PROVIDER: 'alternate-provider',
  DATA_PORTABILITY: 'data-portability',
  CREDENTIAL_READINESS: 'credential-readiness',
  SWITCHING_PROCEDURE: 'switching-procedure',
  RETURN_PROCEDURE: 'return-procedure',
  RECONCILIATION: 'reconciliation',
  EXIT_STRATEGY: 'exit-strategy'
});

export const PROVIDER_CONCENTRATION_RISK_CONTROLS = Object.freeze({
  IDENTIFIED: 'identified',
  MEASURED: 'measured',
  OWNED: 'owned',
  TESTED: 'tested',
  REDUCED_WHERE_JUSTIFIED: 'reduced-where-justified',
  SUPPORTED_BY_CONTINUITY_STRATEGY: 'supported-by-continuity-strategy',
  ACCEPTED_ONLY_BY_APPROPRIATE_AUTHORITY: 'accepted-only-by-appropriate-authority'
});

export const DISASTER_RECOVERY_OPERATION_FIELDS = Object.freeze({
  DISASTER_CRITERIA: 'disaster-criteria',
  AUTHORITY: 'authority',
  TARGET_ENVIRONMENT: 'target-environment',
  RECOVERY_SEQUENCE: 'recovery-sequence',
  DEPENDENCIES: 'dependencies',
  IDENTITY_AND_SECURITY: 'identity-and-security',
  DATA_RESTORATION: 'data-restoration',
  NETWORK_AND_INTEGRATION_RESTORATION: 'network-and-integration-restoration',
  CAPACITY: 'capacity',
  SERVICE_ACTIVATION: 'service-activation',
  TENANT_AND_PROPERTY_COORDINATION: 'tenant-and-property-coordination',
  VERIFICATION: 'verification',
  FAILBACK: 'failback',
  EVIDENCE: 'evidence'
});

export const BACKUP_OPERATION_REQUIREMENTS = Object.freeze({
  DEFINED_DATA_SCOPE: 'defined-data-scope',
  FREQUENCY_ALIGNED_WITH_RECOVERY_OBJECTIVES: 'frequency-aligned-with-recovery-objectives',
  ISOLATION_FROM_PRIMARY_FAILURE: 'isolation-from-primary-failure',
  SECURITY_AND_ENCRYPTION: 'security-and-encryption',
  TENANT_PROTECTION: 'tenant-protection',
  INTEGRITY_CHECKING: 'integrity-checking',
  RETENTION: 'retention',
  ACCESS_CONTROL: 'access-control',
  CATALOGING: 'cataloging',
  MONITORING: 'monitoring',
  RESTORATION_TESTING: 'restoration-testing',
  LIFECYCLE_OWNERSHIP: 'lifecycle-ownership'
});

export const RESTORATION_STEPS = Object.freeze({
  CONFIRM_AUTHORITY_AND_TARGET: 'Confirm authority and target',
  PRESERVE_EVIDENCE: 'Preserve evidence',
  ESTABLISH_SECURE_RECOVERY_CAPABILITY: 'Establish secure recovery capability',
  RESTORE_DEPENDENCIES_IN_REQUIRED_ORDER: 'Restore dependencies in required order',
  RESTORE_DATA_AND_STATE: 'Restore data and state',
  VALIDATE_INTEGRITY: 'Validate integrity',
  ACTIVATE_MINIMUM_SERVICES: 'Activate minimum services',
  VERIFY_CRITICAL_BUSINESS_OUTCOMES: 'Verify critical business outcomes',
  EXPAND_CAPABILITY_PROGRESSIVELY: 'Expand capability progressively',
  PROCESS_BACKLOG_SAFELY: 'Process backlog safely',
  RECONCILE_ALTERNATE_OPERATIONS: 'Reconcile alternate operations',
  MONITOR_STABILITY: 'Monitor stability'
});

export const RECOVERY_PRIORITIES = Object.freeze({
  SAFETY_AND_SECURITY: 'safety-and-security',
  IDENTITY_AND_AUTHORIZATION: 'identity-and-authorization',
  DATA_INTEGRITY: 'data-integrity',
  GUEST_ACCESS_AND_ACTIVE_STAY_SUPPORT: 'guest-access-and-active-stay-support',
  CRITICAL_BOOKING_AND_AVAILABILITY: 'critical-booking-and-availability',
  PROPERTY_OPERATIONS: 'property-operations',
  PAYMENTS_AND_FINANCIAL_PROTECTION: 'payments-and-financial-protection',
  ESSENTIAL_COMMUNICATION: 'essential-communication',
  CRITICAL_INTEGRATIONS_AND_WORKFLOWS: 'critical-integrations-and-workflows',
  SUPPORTING_SERVICES: 'supporting-services',
  DEFERRED_AND_NONCRITICAL_CAPABILITIES: 'deferred-and-noncritical-capabilities'
});

export const RECOVERY_DEPENDENCY_AREAS = Object.freeze({
  BUSINESS_SERVICES: 'business-services',
  PLATFORM_SERVICES: 'platform-services',
  IDENTITY: 'identity',
  SECURITY: 'security',
  DATA: 'data',
  MESSAGING: 'messaging',
  AI: 'ai',
  WORKFLOWS: 'workflows',
  INTEGRATIONS: 'integrations',
  EXTERNAL_PROVIDERS: 'external-providers',
  NETWORK: 'network',
  HUMAN_ROLES: 'human-roles',
  PROPERTY_PROCEDURES: 'property-procedures'
});

export const CONTINUITY_BACKLOG_RECOVERY_CONTROLS = Object.freeze({
  BUSINESS_PRIORITY: 'business-priority',
  GUEST_DEADLINES: 'guest-deadlines',
  TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  AGE: 'age',
  DATA_CONSISTENCY: 'data-consistency',
  DEPENDENCY_LIMITS: 'dependency-limits',
  RATE_CONSTRAINTS: 'rate-constraints',
  CAPACITY_RESERVATION: 'capacity-reservation',
  DUPLICATE_PROTECTION: 'duplicate-protection',
  RECONCILIATION: 'reconciliation',
  EXPIRATION_AND_COMPENSATION: 'expiration-and-compensation'
});

export const RECONCILIATION_REQUIREMENTS = Object.freeze({
  IDENTIFY_ALTERNATE_ACTIVITY: 'identify-alternate-activity',
  CORRELATE_RECORDS: 'correlate-records',
  DETECT_CONFLICTS: 'detect-conflicts',
  PRESERVE_BUSINESS_INVARIANTS: 'preserve-business-invariants',
  RESOLVE_DUPLICATES: 'resolve-duplicates',
  COMPLETE_OR_COMPENSATE_WORKFLOWS: 'complete-or-compensate-workflows',
  CONFIRM_INTEGRATION_DELIVERY: 'confirm-integration-delivery',
  VALIDATE_FINANCIAL_EFFECTS: 'validate-financial-effects',
  PROTECT_AUDIT_HISTORY: 'protect-audit-history',
  OBTAIN_BUSINESS_APPROVAL_WHERE_REQUIRED: 'obtain-business-approval-where-required'
});

export const RETURN_TO_NORMAL_CRITERIA = Object.freeze({
  PRIMARY_CAPABILITIES_STABLE: 'primary-capabilities-stable',
  BUSINESS_OUTCOMES_VERIFIED: 'business-outcomes-verified',
  DATA_RECONCILED: 'data-reconciled',
  SECURITY_POSTURE_CONFIRMED: 'security-posture-confirmed',
  BACKLOGS_CONTROLLED: 'backlogs-controlled',
  DEPENDENCIES_STABLE: 'dependencies-stable',
  SUPPORT_READY: 'support-ready',
  TEMPORARY_RISKS_OWNED: 'temporary-risks-owned',
  STAKEHOLDERS_INFORMED: 'stakeholders-informed',
  CONTINUITY_ACTIONS_TRANSFERRED_OR_CLOSED: 'continuity-actions-transferred-or-closed',
  OBSERVATION_PERIOD_COMPLETED: 'observation-period-completed'
});

export const FAILBACK_PLAN_FIELDS = Object.freeze({
  AUTHORITY: 'authority',
  TIMING: 'timing',
  DATA_SYNCHRONIZATION: 'data-synchronization',
  STATE_COMPATIBILITY: 'state-compatibility',
  TENANT_AND_PROPERTY_IMPACT: 'tenant-and-property-impact',
  SERVICE_SEQUENCING: 'service-sequencing',
  INTEGRATION_BEHAVIOR: 'integration-behavior',
  VERIFICATION: 'verification',
  ROLLBACK: 'rollback',
  COMMUNICATION: 'communication'
});

export const CONTINUITY_COMMUNICATION_FIELDS = Object.freeze({
  CURRENT_OPERATING_MODE: 'current-operating-mode',
  AFFECTED_SERVICES: 'affected-services',
  BUSINESS_AND_GUEST_IMPACT: 'business-and-guest-impact',
  AVAILABLE_ALTERNATIVES: 'available-alternatives',
  REQUIRED_LOCAL_ACTION: 'required-local-action',
  DATA_OR_SECURITY_CONSIDERATIONS: 'data-or-security-considerations',
  RECOVERY_PRIORITY: 'recovery-priority',
  EXPECTED_UPDATES: 'expected-updates',
  RETURN_TO_NORMAL_PROGRESS: 'return-to-normal-progress'
});

export const CONTINUITY_EXERCISE_TYPES = Object.freeze({
  PLAN_REVIEW: 'plan-review',
  WALKTHROUGH: 'walkthrough',
  TABLETOP_EXERCISE: 'tabletop-exercise',
  TECHNICAL_RECOVERY_TEST: 'technical-recovery-test',
  BACKUP_RESTORATION_TEST: 'backup-restoration-test',
  DEPENDENCY_FAILURE_EXERCISE: 'dependency-failure-exercise',
  PROVIDER_FAILOVER_EXERCISE: 'provider-failover-exercise',
  PROPERTY_CONTINUITY_EXERCISE: 'property-continuity-exercise',
  TENANT_CONTINUITY_EXERCISE: 'tenant-continuity-exercise',
  COMMUNICATION_EXERCISE: 'communication-exercise',
  MAJOR_INCIDENT_SIMULATION: 'major-incident-simulation',
  FULL_OR_PARTIAL_CONTINUITY_EXERCISE: 'full-or-partial-continuity-exercise'
});

export const EXERCISE_DESIGN_FIELDS = Object.freeze({
  OBJECTIVE: 'objective',
  SCENARIO: 'scenario',
  SCOPE: 'scope',
  PARTICIPANTS: 'participants',
  ASSUMPTIONS: 'assumptions',
  INJECTED_CONDITIONS: 'injected-conditions',
  SUCCESS_CRITERIA: 'success-criteria',
  SAFETY_CONTROLS: 'safety-controls',
  EVIDENCE: 'evidence',
  OBSERVERS: 'observers',
  STOP_CONDITIONS: 'stop-conditions',
  REVIEW_METHOD: 'review-method'
});

export const RESILIENCE_VALIDATION_AREAS = Object.freeze({
  FAILURE_CONTAINMENT: 'failure-containment',
  DEGRADED_OPERATION: 'degraded-operation',
  RECOVERY_OBJECTIVES: 'recovery-objectives',
  DATA_INTEGRITY: 'data-integrity',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_PROCEDURES: 'property-procedures',
  PROVIDER_ALTERNATIVES: 'provider-alternatives',
  HUMAN_COVERAGE: 'human-coverage',
  SECURITY_CONTROLS: 'security-controls',
  BACKLOG_RECOVERY: 'backlog-recovery',
  RETURN_TO_NORMAL: 'return-to-normal',
  EVIDENCE_QUALITY: 'evidence-quality'
});

export const RESILIENCE_ASSESSMENT_AREAS = Object.freeze({
  CRITICAL_BUSINESS_SERVICES: 'critical-business-services',
  ARCHITECTURE: 'architecture',
  SERVICES: 'services',
  DATA: 'data',
  AI: 'ai',
  WORKFLOWS: 'workflows',
  INTEGRATIONS: 'integrations',
  PLATFORM: 'platform',
  SECURITY: 'security',
  PROVIDERS: 'providers',
  PEOPLE: 'people',
  PROPERTIES: 'properties',
  TENANTS: 'tenants',
  COMMUNICATIONS: 'communications',
  RECOVERY_CAPACITY: 'recovery-capacity'
});

export const CONTINUITY_INCIDENT_TRANSITIONS = Object.freeze({
  NORMAL_RESTORATION: 'normal-restoration',
  ACTIVATE_DEGRADED_MODE: 'activate-degraded-mode',
  ACTIVATE_SERVICE_CONTINUITY: 'activate-service-continuity',
  ACTIVATE_PROPERTY_CONTINUITY: 'activate-property-continuity',
  ACTIVATE_TENANT_CONTINUITY: 'activate-tenant-continuity',
  ACTIVATE_ENTERPRISE_CONTINUITY: 'activate-enterprise-continuity',
  ESCALATE_TO_CRISIS: 'escalate-to-crisis',
  TRANSITION_TO_RECOVERY_AND_RETURN_TO_NORMAL: 'transition-to-recovery-and-return-to-normal'
});

export const CONTINUITY_RESILIENCE_MEASURES = Object.freeze({
  CRITICAL_SERVICES_ASSESSED: 'critical-services-assessed',
  PLANS_CURRENT: 'plans-current',
  EXERCISES_COMPLETED: 'exercises-completed',
  EXERCISE_SUCCESS: 'exercise-success',
  RECOVERY_TIME_ATTAINMENT: 'recovery-time-attainment',
  RECOVERY_POINT_ATTAINMENT: 'recovery-point-attainment',
  MAXIMUM_DISRUPTION_COMPLIANCE: 'maximum-disruption-compliance',
  BACKUP_RESTORATION_SUCCESS: 'backup-restoration-success',
  FAILOVER_SUCCESS: 'failover-success',
  RECONCILIATION_COMPLETION: 'reconciliation-completion',
  CONTINUITY_ACTIVATION_FREQUENCY: 'continuity-activation-frequency',
  PROVIDER_ALTERNATIVE_READINESS: 'provider-alternative-readiness',
  TENANT_AND_PROPERTY_COVERAGE: 'tenant-and-property-coverage',
  RECOVERY_BACKLOG: 'recovery-backlog',
  IMPROVEMENT_ACTION_COMPLETION: 'improvement-action-completion',
  RESIDUAL_RESILIENCE_RISK: 'residual-resilience-risk'
});

export const CONTINUITY_RESILIENCE_GOVERNANCE_AREAS = Object.freeze({
  CRITICAL_SERVICE_CLASSIFICATION: 'critical-service-classification',
  IMPACT_ANALYSIS: 'impact-analysis',
  TOLERANCES: 'tolerances',
  RECOVERY_OBJECTIVES: 'recovery-objectives',
  STRATEGIES: 'strategies',
  PLANS: 'plans',
  ACTIVATION_AUTHORITY: 'activation-authority',
  RECOVERY_PRIORITIES: 'recovery-priorities',
  SECURITY: 'security',
  PROVIDER_RISK: 'provider-risk',
  TESTING: 'testing',
  EVIDENCE: 'evidence',
  RESIDUAL_RISK: 'residual-risk',
  RETURN_TO_NORMAL: 'return-to-normal',
  IMPROVEMENT: 'improvement'
});

export const CONTINUITY_RESILIENCE_QUALITY_ATTRIBUTES = Object.freeze({
  RESILIENCE: 'resilience',
  AVAILABILITY: 'availability',
  RECOVERABILITY: 'recoverability',
  RELIABILITY: 'reliability',
  SECURITY: 'security',
  INTEGRITY: 'integrity',
  SCALABILITY: 'scalability',
  ADAPTABILITY: 'adaptability',
  ACCOUNTABILITY: 'accountability',
  TRACEABILITY: 'traceability',
  TENANT_ISOLATION: 'tenant-isolation',
  BUSINESS_CONTINUITY: 'business-continuity'
});

export const CONTINUITY_RESILIENCE_ARCHITECTURAL_RULES = Object.freeze({
  DEFINE_RESILIENCE_THROUGH_CRITICAL_BUSINESS_OUTCOMES: 'define-resilience-through-critical-business-outcomes',
  IDENTIFY_CRITICAL_BUSINESS_SERVICES: 'identify-critical-business-services',
  PERFORM_TIME_BASED_BUSINESS_IMPACT_ANALYSIS: 'perform-time-based-business-impact-analysis',
  DEFINE_AUTHORIZED_TOLERANCES_AND_OBJECTIVES: 'define-authorized-tolerances-and-objectives',
  DESIGN_SAFE_DEGRADED_AND_CONTINUITY_MODES: 'design-safe-degraded-and-continuity-modes',
  PRESERVE_SECURITY_DATA_INTEGRITY_AND_TENANT_ISOLATION: 'preserve-security-data-integrity-and-tenant-isolation',
  ASSIGN_EXPLICIT_ACTIVATION_AND_RECOVERY_AUTHORITY: 'assign-explicit-activation-and-recovery-authority',
  COORDINATE_CONTINUITY_THROUGH_COMMAND_AND_CONTROL: 'coordinate-continuity-through-command-and-control',
  INCLUDE_ALL_OPERATIONAL_DOMAINS: 'include-all-operational-domains',
  RECOVER_IN_BUSINESS_PRIORITY_AND_DEPENDENCY_ORDER: 'recover-in-business-priority-and-dependency-order',
  MAINTAIN_SUFFICIENT_RECOVERY_CAPACITY: 'maintain-sufficient-recovery-capacity',
  TEST_BACKUPS_THROUGH_RESTORATION: 'test-backups-through-restoration',
  RECONCILE_ALTERNATE_OPERATIONS_AND_DIVERGENT_STATE: 'reconcile-alternate-operations-and-divergent-state',
  GOVERN_FAILBACK_AS_CHANGE: 'govern-failback-as-change',
  VERIFY_BUSINESS_OUTCOMES_BEFORE_RETURN_TO_NORMAL: 'verify-business-outcomes-before-return-to-normal',
  EXERCISE_CONTINUITY_REGULARLY: 'exercise-continuity-regularly',
  RECORD_AND_ADDRESS_RESILIENCE_WEAKNESSES: 'record-and-address-resilience-weaknesses',
  REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT: 'remain-vendor-neutral-and-technology-independent'
});

export const FUTURE_CONTINUITY_RESILIENCE_CAPABILITIES = Object.freeze({
  PREDICTIVE_RESILIENCE_ANALYSIS: 'predictive-resilience-analysis',
  AI_ASSISTED_CONTINUITY_COMMAND: 'ai-assisted-continuity-command',
  AUTONOMOUS_BOUNDED_FAILOVER: 'autonomous-bounded-failover',
  DIGITAL_TWIN_DISRUPTION_SIMULATION: 'digital-twin-disruption-simulation',
  DYNAMIC_RECOVERY_PRIORITIZATION: 'dynamic-recovery-prioritization',
  CROSS_PROPERTY_CONTINUITY_OPTIMIZATION: 'cross-property-continuity-optimization',
  SEMANTIC_DEPENDENCY_RECOVERY: 'semantic-dependency-recovery',
  ADAPTIVE_RECOVERY_OBJECTIVES: 'adaptive-recovery-objectives',
  AUTOMATED_RECONCILIATION: 'automated-reconciliation',
  FEDERATED_PROVIDER_PORTABILITY: 'federated-provider-portability',
  SELF_VALIDATING_CONTINUITY_PLANS: 'self-validating-continuity-plans',
  CONTINUOUS_RESILIENCE_VERIFICATION: 'continuous-resilience-verification'
});

export const OPERATIONS_GOVERNANCE_OBJECTIVES = Object.freeze({
  ALIGN_OPERATIONS_WITH_ENTERPRISE_OBJECTIVES: 'align-operations-with-enterprise-objectives',
  CLEAR_OPERATIONAL_ACCOUNTABILITY: 'clear-operational-accountability',
  EXPLICIT_DECISION_AUTHORITY: 'explicit-decision-authority',
  CONSISTENT_OPERATIONAL_POLICY: 'consistent-operational-policy',
  PROPORTIONATE_CONTROLS: 'proportionate-controls',
  TRANSPARENT_RISK_OWNERSHIP: 'transparent-risk-ownership',
  RELIABLE_CONTROL_EVIDENCE: 'reliable-control-evidence',
  INDEPENDENT_ASSURANCE_WHERE_NEEDED: 'independent-assurance-where-needed',
  SAFE_AUTOMATION_AND_AI_PARTICIPATION: 'safe-automation-and-ai-participation',
  TENANT_AND_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  CONSISTENT_SUPPLIER_OVERSIGHT: 'consistent-supplier-oversight',
  MEASURABLE_OPERATIONAL_PERFORMANCE: 'measurable-operational-performance',
  GOVERNED_EXCEPTIONS: 'governed-exceptions',
  CONTINUOUS_OPERATIONAL_IMPROVEMENT: 'continuous-operational-improvement',
  VENDOR_NEUTRAL_GOVERNANCE_CAPABILITIES: 'vendor-neutral-governance-capabilities'
});

export const OPERATIONS_GOVERNANCE_PRINCIPLES = Object.freeze({
  GOVERNANCE_PROTECTS_OUTCOMES: 'governance-protects-outcomes',
  ACCOUNTABILITY_IS_EXPLICIT: 'accountability-is-explicit',
  AUTHORITY_IS_DELEGATED_NOT_ASSUMED: 'authority-is-delegated-not-assumed',
  CONTROLS_ARE_PROPORTIONATE: 'controls-are-proportionate',
  EVIDENCE_SUPPORTS_TRUST: 'evidence-supports-trust',
  SEPARATION_OF_DUTIES: 'separation-of-duties',
  EXCEPTIONS_ARE_TEMPORARY_AND_OWNED: 'exceptions-are-temporary-and-owned',
  AUTOMATION_REMAINS_GOVERNED: 'automation-remains-governed',
  GOVERNANCE_MUST_ENABLE_OPERATIONS: 'governance-must-enable-operations'
});

export const OPERATIONS_GOVERNANCE_DOMAINS = Object.freeze({
  OPERATING_MODEL_GOVERNANCE: 'operating-model-governance',
  COMMAND_AND_CONTROL_GOVERNANCE: 'command-and-control-governance',
  SERVICE_GOVERNANCE: 'service-governance',
  INCIDENT_GOVERNANCE: 'incident-governance',
  PROBLEM_GOVERNANCE: 'problem-governance',
  CHANGE_AND_RELEASE_GOVERNANCE: 'change-and-release-governance',
  CAPACITY_AND_PERFORMANCE_GOVERNANCE: 'capacity-and-performance-governance',
  CONTINUITY_AND_RESILIENCE_GOVERNANCE: 'continuity-and-resilience-governance',
  AI_AND_AUTOMATION_GOVERNANCE: 'ai-and-automation-governance',
  WORKFLOW_GOVERNANCE: 'workflow-governance',
  INTEGRATION_GOVERNANCE: 'integration-governance',
  DATA_OPERATIONS_GOVERNANCE: 'data-operations-governance',
  SECURITY_OPERATIONS_GOVERNANCE: 'security-operations-governance',
  TENANT_GOVERNANCE: 'tenant-governance',
  PROPERTY_GOVERNANCE: 'property-governance',
  SUPPLIER_GOVERNANCE: 'supplier-governance',
  OPERATIONAL_EVIDENCE_GOVERNANCE: 'operational-evidence-governance',
  CONTINUAL_IMPROVEMENT_GOVERNANCE: 'continual-improvement-governance'
});

export const OPERATIONS_GOVERNANCE_LEVELS = Object.freeze({
  ENTERPRISE_GOVERNANCE: 'enterprise-governance',
  PLATFORM_GOVERNANCE: 'platform-governance',
  DOMAIN_GOVERNANCE: 'domain-governance',
  TENANT_GOVERNANCE: 'tenant-governance',
  PROPERTY_GOVERNANCE: 'property-governance',
  SERVICE_GOVERNANCE: 'service-governance'
});

export const OPERATIONAL_POLICY_AREAS = Object.freeze({
  OWNERSHIP: 'ownership',
  SERVICE_CLASSIFICATION: 'service-classification',
  SERVICE_COMMITMENTS: 'service-commitments',
  SUPPORT: 'support',
  INCIDENT_PRIORITY: 'incident-priority',
  COMMAND_ACTIVATION: 'command-activation',
  CHANGE_AUTHORITY: 'change-authority',
  EMERGENCY_ACTION: 'emergency-action',
  CAPACITY_ALLOCATION: 'capacity-allocation',
  TENANT_FAIRNESS: 'tenant-fairness',
  CONTINUITY_OBJECTIVES: 'continuity-objectives',
  RECOVERY_PRIORITY: 'recovery-priority',
  AUTOMATION_AUTHORITY: 'automation-authority',
  AI_AUTONOMY: 'ai-autonomy',
  DATA_OPERATIONS: 'data-operations',
  SECURITY_OPERATIONS: 'security-operations',
  EVIDENCE_RETENTION: 'evidence-retention',
  COMMUNICATION: 'communication',
  SUPPLIER_PARTICIPATION: 'supplier-participation',
  EXCEPTIONS: 'exceptions',
  REVIEW: 'review'
});

export const POLICY_HIERARCHY_LEVELS = Object.freeze({
  ENTERPRISE_PRINCIPLES: 'enterprise-principles',
  ENTERPRISE_OPERATIONAL_POLICIES: 'enterprise-operational-policies',
  DOMAIN_STANDARDS: 'domain-standards',
  TENANT_POLICIES: 'tenant-policies',
  PROPERTY_PROCEDURES: 'property-procedures',
  SERVICE_PROCEDURES: 'service-procedures',
  AUTOMATED_CONTROLS_AND_RUNBOOKS: 'automated-controls-and-runbooks'
});

export const POLICY_LIFECYCLE_STAGES = Object.freeze({
  IDENTIFY_NEED: 'Identify Need',
  DESIGN_POLICY: 'Design Policy',
  REVIEW_IMPACT_AND_ALIGNMENT: 'Review Impact and Alignment',
  AUTHORIZE: 'Authorize',
  PUBLISH_AND_ENABLE: 'Publish and Enable',
  IMPLEMENT_CONTROLS: 'Implement Controls',
  MEASURE_AND_ASSURE: 'Measure and Assure',
  REVIEW_AND_IMPROVE: 'Review and Improve',
  REPLACE_OR_RETIRE: 'Replace or Retire'
});

export const DECISION_RIGHTS_FIELDS = Object.freeze({
  DECISION_CLASS: 'decision-class',
  AUTHORIZED_ROLE: 'authorized-role',
  SCOPE: 'scope',
  RISK_LIMIT: 'risk-limit',
  TENANT_AND_PROPERTY_BOUNDARY: 'tenant-and-property-boundary',
  PRECONDITIONS: 'preconditions',
  REQUIRED_CONSULTATION: 'required-consultation',
  REQUIRED_APPROVAL: 'required-approval',
  EVIDENCE: 'evidence',
  ESCALATION: 'escalation',
  EXPIRATION_OR_REVIEW: 'expiration-or-review'
});

export const DELEGATED_AUTHORITY_REQUIREMENTS = Object.freeze({
  SCOPE_EXPLICIT: 'scope-explicit',
  RISK_LIMITS_DEFINED: 'risk-limits-defined',
  COMPETENCE_ESTABLISHED: 'competence-established',
  IDENTITY_VERIFIED: 'identity-verified',
  ACTIONS_OBSERVABLE: 'actions-observable',
  EVIDENCE_RETAINED: 'evidence-retained',
  ESCALATION_AVAILABLE: 'escalation-available',
  DELEGATION_REVOCABLE: 'delegation-revocable',
  SEPARATION_OF_DUTIES_APPROPRIATE: 'separation-of-duties-appropriate'
});

export const GOVERNANCE_RESPONSIBILITY_ROLES = Object.freeze({
  ACCOUNTABLE_OWNER: 'accountable-owner',
  DECISION_AUTHORITY: 'decision-authority',
  RESPONSIBLE_EXECUTOR: 'responsible-executor',
  APPROVER: 'approver',
  VERIFIER: 'verifier',
  ASSURANCE_PROVIDER: 'assurance-provider',
  RISK_OWNER: 'risk-owner',
  EVIDENCE_OWNER: 'evidence-owner',
  ESCALATION_OWNER: 'escalation-owner',
  INFORMED_STAKEHOLDER: 'informed-stakeholder'
});

export const SERVICE_GOVERNANCE_REQUIREMENTS = Object.freeze({
  ACCOUNTABLE_OWNERSHIP: 'accountable-ownership',
  BUSINESS_PURPOSE: 'business-purpose',
  SERVICE_CLASSIFICATION: 'service-classification',
  SERVICE_COMMITMENTS: 'service-commitments',
  OPERATIONAL_READINESS: 'operational-readiness',
  SUPPORT_MODEL: 'support-model',
  DEPENDENCY_OWNERSHIP: 'dependency-ownership',
  CAPACITY: 'capacity',
  SECURITY: 'security',
  DATA_RESPONSIBILITY: 'data-responsibility',
  RECOVERY: 'recovery',
  CHANGE_CONTROL: 'change-control',
  PERFORMANCE_REVIEW: 'performance-review',
  LIFECYCLE_STATUS: 'lifecycle-status',
  IMPROVEMENT_PLAN: 'improvement-plan',
  RESIDUAL_RISK: 'residual-risk'
});

export const SERVICE_REVIEW_INPUTS_GOVERNANCE = Object.freeze({
  BUSINESS_OUTCOMES: 'business-outcomes',
  GUEST_AND_OPERATOR_EXPERIENCE: 'guest-and-operator-experience',
  SERVICE_COMMITMENTS: 'service-commitments',
  RELIABILITY_AND_AVAILABILITY: 'reliability-and-availability',
  INCIDENTS_AND_PROBLEMS: 'incidents-and-problems',
  CHANGES_AND_RELEASES: 'changes-and-releases',
  CAPACITY_AND_PERFORMANCE: 'capacity-and-performance',
  SECURITY: 'security',
  DATA_QUALITY: 'data-quality',
  AI_QUALITY: 'ai-quality',
  WORKFLOW_PERFORMANCE: 'workflow-performance',
  INTEGRATION_PERFORMANCE: 'integration-performance',
  CONTINUITY_READINESS: 'continuity-readiness',
  COST_AND_EFFICIENCY: 'cost-and-efficiency',
  TENANT_AND_PROPERTY_FEEDBACK: 'tenant-and-property-feedback',
  SUPPLIER_PERFORMANCE: 'supplier-performance',
  IMPROVEMENT_ACTIONS: 'improvement-actions'
});

export const OPERATIONAL_RISK_SOURCES = Object.freeze({
  SERVICE_FRAGILITY: 'service-fragility',
  DEPENDENCY_CONCENTRATION: 'dependency-concentration',
  CAPACITY_CONSTRAINTS: 'capacity-constraints',
  UNSAFE_AUTOMATION: 'unsafe-automation',
  AI_UNCERTAINTY: 'ai-uncertainty',
  DATA_QUALITY: 'data-quality',
  SECURITY_EXPOSURE: 'security-exposure',
  CHANGE_FAILURE: 'change-failure',
  RECOVERY_WEAKNESS: 'recovery-weakness',
  AMBIGUOUS_OWNERSHIP: 'ambiguous-ownership',
  SUPPLIER_DEPENDENCY: 'supplier-dependency',
  PROPERTY_CONDITIONS: 'property-conditions',
  HUMAN_CAPACITY: 'human-capacity',
  INADEQUATE_EVIDENCE: 'inadequate-evidence',
  POLICY_CONFLICT: 'policy-conflict'
});

export const OPERATIONAL_RISK_RECORD_FIELDS = Object.freeze({
  RISK_IDENTIFIER: 'risk-identifier',
  DESCRIPTION: 'description',
  CAUSE: 'cause',
  POTENTIAL_OUTCOME: 'potential-outcome',
  AFFECTED_SCOPE: 'affected-scope',
  BUSINESS_IMPACT: 'business-impact',
  LIKELIHOOD: 'likelihood',
  CURRENT_CONTROLS: 'current-controls',
  CONTROL_EFFECTIVENESS: 'control-effectiveness',
  RESIDUAL_RISK: 'residual-risk',
  OWNER: 'owner',
  TREATMENT: 'treatment',
  TARGET_DATE: 'target-date',
  ACCEPTANCE_AUTHORITY: 'acceptance-authority',
  EVIDENCE: 'evidence',
  REVIEW_DATE: 'review-date',
  RELATED_RECORDS: 'related-incidents-problems-services-and-changes'
});

export const OPERATIONAL_RISK_TREATMENTS = Object.freeze({
  AVOIDED: 'avoided',
  REDUCED: 'reduced',
  TRANSFERRED: 'transferred',
  SHARED: 'shared',
  ACCEPTED: 'accepted',
  MONITORED: 'monitored'
});

export const RISK_ACCEPTANCE_FIELDS = Object.freeze({
  RISK: 'risk',
  BUSINESS_JUSTIFICATION: 'business-justification',
  SCOPE: 'scope',
  DURATION: 'duration',
  CURRENT_CONTROLS: 'current-controls',
  RESIDUAL_EXPOSURE: 'residual-exposure',
  COMPENSATING_CONTROLS: 'compensating-controls',
  MONITORING: 'monitoring',
  ACCEPTANCE_AUTHORITY: 'acceptance-authority',
  REVIEW_OR_EXPIRATION: 'review-or-expiration',
  COMMUNICATION_OBLIGATIONS: 'communication-obligations'
});

export const OPERATIONAL_CONTROL_TYPES = Object.freeze({
  PREVENTIVE: 'preventive',
  DETECTIVE: 'detective',
  CORRECTIVE: 'corrective',
  DIRECTIVE: 'directive',
  DETERRENT: 'deterrent',
  COMPENSATING: 'compensating',
  RECOVERY_ORIENTED: 'recovery-oriented'
});

export const CONTROL_IMPLEMENTATION_MECHANISMS = Object.freeze({
  POLICY: 'policy',
  ROLE_AND_AUTHORITY: 'role-and-authority',
  PROCESS: 'process',
  ARCHITECTURE: 'architecture',
  AUTOMATION: 'automation',
  SECURITY: 'security',
  VALIDATION: 'validation',
  MONITORING: 'monitoring',
  APPROVAL: 'approval',
  VERIFICATION: 'verification',
  REVIEW: 'review',
  TRAINING: 'training',
  SUPPLIER_AGREEMENT: 'supplier-agreement'
});

export const CONTROL_RECORD_FIELDS = Object.freeze({
  CONTROL_OBJECTIVE: 'control-objective',
  RISK_ADDRESSED: 'risk-addressed',
  OWNER: 'owner',
  APPLICABILITY: 'applicability',
  TRIGGER_OR_FREQUENCY: 'trigger-or-frequency',
  EXECUTION_METHOD: 'execution-method',
  EVIDENCE: 'evidence',
  VERIFICATION: 'verification',
  FAILURE_HANDLING: 'failure-handling',
  EXCEPTION_PROCESS: 'exception-process',
  DEPENDENCIES: 'dependencies',
  AUTOMATION_STATUS: 'automation-status',
  REVIEW_DATE: 'review-date'
});

export const CONTROL_EVIDENCE_TYPES = Object.freeze({
  DECISIONS: 'decisions',
  APPROVALS: 'approvals',
  ACTION_RECORDS: 'action-records',
  IDENTITY_AND_AUTHORIZATION: 'identity-and-authorization',
  SERVICE_MEASUREMENTS: 'service-measurements',
  INCIDENT_TIMELINES: 'incident-timelines',
  CHANGE_RECORDS: 'change-records',
  RECOVERY_TESTS: 'recovery-tests',
  CAPACITY_REVIEWS: 'capacity-reviews',
  AI_EXECUTION_EVIDENCE: 'ai-execution-evidence',
  WORKFLOW_STATE: 'workflow-state',
  INTEGRATION_EXCHANGES: 'integration-exchanges',
  DATA_QUALITY_RESULTS: 'data-quality-results',
  SECURITY_EVENTS: 'security-events',
  COMMUNICATIONS: 'communications',
  SUPPLIER_REPORTS: 'supplier-reports',
  REVIEW_OUTCOMES: 'review-outcomes'
});

export const ASSURANCE_TYPES = Object.freeze({
  SELF_ASSESSMENT: 'self-assessment',
  SERVICE_OWNER_REVIEW: 'service-owner-review',
  CONTROL_OWNER_TESTING: 'control-owner-testing',
  INDEPENDENT_OPERATIONAL_REVIEW: 'independent-operational-review',
  ARCHITECTURE_REVIEW: 'architecture-review',
  SECURITY_REVIEW: 'security-review',
  COMPLIANCE_REVIEW: 'compliance-review',
  INTERNAL_AUDIT: 'internal-audit',
  EXTERNAL_ASSURANCE: 'external-assurance',
  EXERCISE_AND_SIMULATION: 'exercise-and-simulation',
  AUTOMATED_CONTROL_VALIDATION: 'automated-control-validation'
});

export const ASSURANCE_RESPONSIBILITY_LINES = Object.freeze({
  OPERATIONAL_OWNERSHIP: 'operational-ownership',
  RISK_AND_GOVERNANCE_OVERSIGHT: 'risk-and-governance-oversight',
  INDEPENDENT_ASSURANCE: 'independent-assurance'
});

export const EXCEPTION_RECORD_FIELDS = Object.freeze({
  REQUIREMENT_AFFECTED: 'requirement-affected',
  BUSINESS_JUSTIFICATION: 'business-justification',
  SCOPE: 'scope',
  RISK: 'risk',
  OWNER: 'owner',
  AUTHORITY: 'authority',
  COMPENSATING_CONTROLS: 'compensating-controls',
  MONITORING: 'monitoring',
  START_DATE: 'start-date',
  EXPIRATION: 'expiration',
  REMEDIATION_PLAN: 'remediation-plan',
  REVIEW: 'review',
  CLOSURE_EVIDENCE: 'closure-evidence'
});

export const NONCOMPLIANCE_MANAGEMENT_STEPS = Object.freeze({
  DETECTED: 'detected',
  RECORDED: 'recorded',
  CLASSIFIED: 'classified',
  ASSIGNED: 'assigned',
  CONTAINED_WHERE_NECESSARY: 'contained-where-necessary',
  ASSESSED_FOR_RISK: 'assessed-for-risk',
  REMEDIATED: 'remediated',
  VERIFIED: 'verified',
  ESCALATED_WHEN_REPEATED_OR_MATERIAL: 'escalated-when-repeated-or-material',
  REVIEWED_FOR_SYSTEMIC_CAUSES: 'reviewed-for-systemic-causes'
});

export const INCIDENT_GOVERNANCE_FIELDS = Object.freeze({
  CLASSIFICATION: 'classification',
  PRIORITY: 'priority',
  OWNERSHIP: 'ownership',
  COMMAND_THRESHOLDS: 'command-thresholds',
  ESCALATION: 'escalation',
  COMMUNICATION: 'communication',
  EVIDENCE: 'evidence',
  EMERGENCY_ACTION: 'emergency-action',
  RESOLUTION_CRITERIA: 'resolution-criteria',
  CLOSURE: 'closure',
  REVIEW_REQUIREMENTS: 'review-requirements',
  IMPROVEMENT_TRACKING: 'improvement-tracking'
});

export const PROBLEM_GOVERNANCE_REQUIREMENTS = Object.freeze({
  PROACTIVE_AND_REACTIVE_IDENTIFICATION: 'proactive-and-reactive-identification',
  SYSTEMIC_ROOT_CAUSE_ANALYSIS: 'systemic-root-cause-analysis',
  KNOWN_ERROR_GOVERNANCE: 'known-error-governance',
  OWNED_EXPIRING_WORKAROUNDS: 'owned-expiring-workarounds',
  PRIORITIZED_REMEDIATION: 'prioritized-remediation',
  AUTHORIZED_RESIDUAL_RISK_ACCEPTANCE: 'authorized-residual-risk-acceptance',
  RECURRING_INCIDENTS_NOT_NORMALIZED: 'recurring-incidents-not-normalized',
  RISK_REDUCTION_VERIFIED_AT_CLOSURE: 'risk-reduction-verified-at-closure'
});

export const CHANGE_GOVERNANCE_FIELDS = Object.freeze({
  CHANGE_TYPES: 'change-types',
  RISK_THRESHOLDS: 'risk-thresholds',
  CHANGE_AUTHORITY: 'change-authority',
  READINESS: 'readiness',
  SCHEDULING: 'scheduling',
  FREEZE_PERIODS: 'freeze-periods',
  EMERGENCY_CHANGE: 'emergency-change',
  VERIFICATION: 'verification',
  ROLLBACK_OR_COMPENSATION: 'rollback-or-compensation',
  FAILED_CHANGE_REVIEW: 'failed-change-review',
  UNAUTHORIZED_CHANGE_HANDLING: 'unauthorized-change-handling'
});

export const CAPACITY_GOVERNANCE_FIELDS = Object.freeze({
  FORECAST_OWNERSHIP: 'forecast-ownership',
  PERFORMANCE_OBJECTIVES: 'performance-objectives',
  HEADROOM: 'headroom',
  ALLOCATION: 'allocation',
  TENANT_FAIRNESS: 'tenant-fairness',
  PRIORITY: 'priority',
  SCALING_BOUNDARIES: 'scaling-boundaries',
  COST_LIMITS: 'cost-limits',
  PROVIDER_QUOTAS: 'provider-quotas',
  CAPACITY_RISK: 'capacity-risk',
  INVESTMENT_DECISIONS: 'investment-decisions',
  REVIEW_CADENCE: 'review-cadence'
});

export const CONTINUITY_GOVERNANCE_FIELDS = Object.freeze({
  CRITICAL_BUSINESS_SERVICES: 'critical-business-services',
  BUSINESS_IMPACT_ANALYSIS: 'business-impact-analysis',
  TOLERANCES: 'tolerances',
  RECOVERY_OBJECTIVES: 'recovery-objectives',
  PLAN_OWNERSHIP: 'plan-ownership',
  ACTIVATION_AUTHORITY: 'activation-authority',
  RECOVERY_PRIORITY: 'recovery-priority',
  EXERCISES: 'exercises',
  PROVIDER_CONTINUITY: 'provider-continuity',
  RESIDUAL_RISK: 'residual-risk',
  RETURN_TO_NORMAL_AUTHORITY: 'return-to-normal-authority',
  IMPROVEMENT: 'improvement'
});

export const AI_OPERATIONS_GOVERNANCE_CONTROLS = Object.freeze({
  MODEL_AND_PROVIDER_USE: 'model-and-provider-use',
  AGENT_IDENTITY: 'agent-identity',
  TOOL_PERMISSIONS: 'tool-permissions',
  CONTEXT_ACCESS: 'context-access',
  AUTONOMY: 'autonomy',
  SAFETY: 'safety',
  QUALITY: 'quality',
  EXPLAINABILITY: 'explainability',
  COST: 'cost',
  HUMAN_ESCALATION: 'human-escalation',
  MONITORING: 'monitoring',
  CHANGE: 'change',
  INCIDENT_RESPONSE: 'incident-response',
  EVIDENCE: 'evidence',
  RETIREMENT: 'retirement'
});

export const AUTOMATION_GOVERNANCE_FIELDS = Object.freeze({
  OWNER: 'owner',
  PURPOSE: 'purpose',
  IDENTITY: 'identity',
  PERMISSIONS: 'permissions',
  SCOPE: 'scope',
  PRECONDITIONS: 'preconditions',
  RISK_LIMIT: 'risk-limit',
  ACTION_LIMIT: 'action-limit',
  TENANT_BOUNDARY: 'tenant-boundary',
  STOP_CONDITIONS: 'stop-conditions',
  VERIFICATION: 'verification',
  REVERSAL_OR_COMPENSATION: 'reversal-or-compensation',
  EVIDENCE: 'evidence',
  HUMAN_ESCALATION: 'human-escalation',
  REVIEW: 'review'
});

export const WORKFLOW_GOVERNANCE_FIELDS = Object.freeze({
  OWNERSHIP: 'ownership',
  BUSINESS_PURPOSE: 'business-purpose',
  STATE: 'state',
  DEADLINES: 'deadlines',
  HUMAN_TASKS: 'human-tasks',
  AUTHORITY: 'authority',
  RETRY: 'retry',
  COMPENSATION: 'compensation',
  VERSIONING: 'versioning',
  CHANGE: 'change',
  EXCEPTION_HANDLING: 'exception-handling',
  EVIDENCE: 'evidence',
  RECOVERY: 'recovery',
  RETIREMENT: 'retirement'
});

export const INTEGRATION_GOVERNANCE_FIELDS = Object.freeze({
  OWNERSHIP: 'ownership',
  PARTNER: 'partner',
  CONTRACT: 'contract',
  AUTHENTICATION: 'authentication',
  DATA_EXCHANGE: 'data-exchange',
  RATE_LIMITS: 'rate-limits',
  RELIABILITY: 'reliability',
  CHANGE_NOTIFICATION: 'change-notification',
  INCIDENT_PARTICIPATION: 'incident-participation',
  CONTINUITY: 'continuity',
  EVIDENCE: 'evidence',
  EXIT: 'exit'
});

export const DATA_OPERATIONS_GOVERNANCE_FIELDS = Object.freeze({
  OWNERSHIP: 'ownership',
  ACCESS: 'access',
  INTEGRITY: 'integrity',
  QUALITY: 'quality',
  AVAILABILITY: 'availability',
  LINEAGE: 'lineage',
  RETENTION: 'retention',
  BACKUP: 'backup',
  RECOVERY: 'recovery',
  MIGRATION: 'migration',
  RECONCILIATION: 'reconciliation',
  TENANT_ISOLATION: 'tenant-isolation',
  EVIDENCE: 'evidence'
});

export const SECURITY_OPERATIONS_GOVERNANCE_FIELDS = Object.freeze({
  DETECTION: 'detection',
  TRIAGE: 'triage',
  CONTAINMENT: 'containment',
  EVIDENCE: 'evidence',
  ACCESS: 'access',
  INVESTIGATION: 'investigation',
  RECOVERY: 'recovery',
  COMMUNICATION: 'communication',
  REGULATORY_ESCALATION: 'regulatory-escalation',
  CONTROL_RESTORATION: 'control-restoration',
  REVIEW: 'review'
});

export const TENANT_GOVERNANCE_FIELDS = Object.freeze({
  TENANT_OWNERSHIP: 'tenant-ownership',
  TENANT_ADMINISTRATORS: 'tenant-administrators',
  AUTHORIZED_CONFIGURATION: 'authorized-configuration',
  TENANT_SERVICE_COMMITMENTS: 'tenant-service-commitments',
  DATA_ACCESS: 'data-access',
  INTEGRATION_CONTROL: 'integration-control',
  PROPERTY_DELEGATION: 'property-delegation',
  TENANT_SPECIFIC_RISK: 'tenant-specific-risk',
  COMMUNICATION: 'communication',
  CONTINUITY: 'continuity',
  EVIDENCE: 'evidence',
  ESCALATION: 'escalation'
});

export const PROPERTY_GOVERNANCE_FIELDS = Object.freeze({
  PROPERTY_OWNER_OR_OPERATOR: 'property-owner-or-operator',
  LOCAL_AUTHORITY: 'local-authority',
  GUEST_IMPACT_DECISIONS: 'guest-impact-decisions',
  LOCAL_CONFIGURATION: 'local-configuration',
  MANUAL_PROCEDURES: 'manual-procedures',
  PHYSICAL_OPERATIONS: 'physical-operations',
  LOCAL_CONTINUITY: 'local-continuity',
  ESCALATION: 'escalation',
  COMMUNICATION: 'communication',
  RECONCILIATION: 'reconciliation',
  EVIDENCE: 'evidence'
});

export const SUPPLIER_GOVERNANCE_FIELDS = Object.freeze({
  OWNERSHIP: 'ownership',
  DUE_DILIGENCE: 'due-diligence',
  SERVICE_COMMITMENTS: 'service-commitments',
  SECURITY: 'security',
  DATA_HANDLING: 'data-handling',
  CAPACITY: 'capacity',
  CHANGE_NOTIFICATION: 'change-notification',
  INCIDENT_PARTICIPATION: 'incident-participation',
  EVIDENCE: 'evidence',
  CONTINUITY: 'continuity',
  CONCENTRATION_RISK: 'concentration-risk',
  SUBCONTRACTORS: 'subcontractors',
  EXIT: 'exit',
  PERFORMANCE_REVIEW: 'performance-review'
});

export const GOVERNANCE_FORUM_TYPES = Object.freeze({
  ENTERPRISE_OPERATIONS_REVIEW: 'enterprise-operations-review',
  SERVICE_REVIEW: 'service-review',
  MAJOR_INCIDENT_REVIEW: 'major-incident-review',
  PROBLEM_REVIEW: 'problem-review',
  CHANGE_REVIEW: 'change-review',
  CAPACITY_REVIEW: 'capacity-review',
  RESILIENCE_REVIEW: 'resilience-review',
  SECURITY_OPERATIONS_REVIEW: 'security-operations-review',
  AI_OPERATIONS_REVIEW: 'ai-operations-review',
  TENANT_OPERATIONS_REVIEW: 'tenant-operations-review',
  PROPERTY_OPERATIONS_REVIEW: 'property-operations-review',
  SUPPLIER_REVIEW: 'supplier-review',
  RISK_AND_EXCEPTION_REVIEW: 'risk-and-exception-review'
});

export const OPERATIONAL_REPORTING_AUDIENCES = Object.freeze({
  ENTERPRISE_LEADERSHIP: 'enterprise-leadership',
  BUSINESS_OWNERS: 'business-owners',
  SERVICE_OWNERS: 'service-owners',
  TENANT_ADMINISTRATORS: 'tenant-administrators',
  PROPERTY_OPERATORS: 'property-operators',
  SECURITY: 'security',
  ARCHITECTURE: 'architecture',
  RISK_AND_COMPLIANCE: 'risk-and-compliance',
  SUPPLIERS: 'suppliers',
  OPERATIONAL_PRACTITIONERS: 'operational-practitioners'
});

export const OPERATIONAL_REPORT_DIMENSIONS = Object.freeze({
  OUTCOME: 'outcome',
  TREND: 'trend',
  RISK: 'risk',
  EXCEPTION: 'exception',
  DECISION: 'decision',
  ACTION: 'action',
  OWNER: 'owner',
  DEADLINE: 'deadline'
});

export const OPERATIONS_GOVERNANCE_MEASURES = Object.freeze({
  OWNERSHIP_COMPLETENESS: 'ownership-completeness',
  SERVICE_REVIEW_COMPLETION: 'service-review-completion',
  SERVICE_COMMITMENT_ATTAINMENT: 'service-commitment-attainment',
  CONTROL_EFFECTIVENESS: 'control-effectiveness',
  CONTROL_FAILURES: 'control-failures',
  RISK_AGE: 'risk-age',
  EXCEPTION_AGE: 'exception-age',
  UNAUTHORIZED_ACTIONS: 'unauthorized-actions',
  EMERGENCY_CHANGE_RATE: 'emergency-change-rate',
  REPEAT_INCIDENTS: 'repeat-incidents',
  PROBLEM_REMEDIATION_COMPLETION: 'problem-remediation-completion',
  CAPACITY_RISK_EXPOSURE: 'capacity-risk-exposure',
  CONTINUITY_TEST_ATTAINMENT: 'continuity-test-attainment',
  AUTOMATION_INTERVENTION_RATE: 'automation-intervention-rate',
  AI_POLICY_COMPLIANCE: 'ai-policy-compliance',
  TENANT_AND_PROPERTY_EXCEPTIONS: 'tenant-and-property-exceptions',
  SUPPLIER_COMMITMENT_ATTAINMENT: 'supplier-commitment-attainment',
  IMPROVEMENT_ACTION_COMPLETION: 'improvement-action-completion'
});

export const OPERATIONAL_SCORECARD_DIMENSIONS = Object.freeze({
  BUSINESS_OUTCOMES: 'business-outcomes',
  GUEST_EXPERIENCE: 'guest-experience',
  SERVICE_HEALTH: 'service-health',
  RELIABILITY: 'reliability',
  SECURITY: 'security',
  CAPACITY: 'capacity',
  CHANGE: 'change',
  INCIDENTS_AND_PROBLEMS: 'incidents-and-problems',
  CONTINUITY: 'continuity',
  AI_QUALITY: 'ai-quality',
  WORKFLOW_PERFORMANCE: 'workflow-performance',
  INTEGRATION_PERFORMANCE: 'integration-performance',
  DATA_QUALITY: 'data-quality',
  COST: 'cost',
  RISK: 'risk',
  IMPROVEMENT: 'improvement'
});

export const GOVERNANCE_REVIEW_CYCLE_STAGES = Object.freeze({
  SET_OBJECTIVES_AND_POLICY: 'Set Objectives and Policy',
  OPERATE_AND_CONTROL: 'Operate and Control',
  COLLECT_EVIDENCE: 'Collect Evidence',
  MEASURE_AND_ASSURE: 'Measure and Assure',
  IDENTIFY_RISK_AND_GAPS: 'Identify Risk and Gaps',
  DECIDE_AND_ASSIGN_ACTION: 'Decide and Assign Action',
  VERIFY_IMPROVEMENT: 'Verify Improvement',
  UPDATE_POLICY_AND_CONTROLS: 'Update Policy and Controls'
});

export const OPERATIONAL_MATURITY_ASSESSMENT_AREAS = Object.freeze({
  OWNERSHIP: 'ownership',
  POLICY: 'policy',
  STANDARDIZATION: 'standardization',
  EVIDENCE: 'evidence',
  AUTOMATION: 'automation',
  MEASUREMENT: 'measurement',
  RISK: 'risk',
  RESILIENCE: 'resilience',
  LEARNING: 'learning',
  ADAPTABILITY: 'adaptability'
});

export const OPERATIONAL_MATURITY_LEVELS = Object.freeze({
  REACTIVE: 'reactive',
  REPEATABLE: 'repeatable',
  DEFINED: 'defined',
  MEASURED: 'measured',
  PROACTIVE: 'proactive',
  ADAPTIVE: 'adaptive',
  AUTONOMOUS_WITHIN_GUARDRAILS: 'autonomous-within-guardrails'
});

export const GOVERNANCE_IMPROVEMENT_SOURCES = Object.freeze({
  OPERATIONAL_OUTCOMES: 'operational-outcomes',
  INCIDENTS: 'incidents',
  PROBLEMS: 'problems',
  FAILED_CHANGES: 'failed-changes',
  CAPACITY_CONSTRAINTS: 'capacity-constraints',
  CONTINUITY_EXERCISES: 'continuity-exercises',
  SECURITY_FINDINGS: 'security-findings',
  AI_EVALUATION: 'ai-evaluation',
  TENANT_FEEDBACK: 'tenant-feedback',
  PROPERTY_FEEDBACK: 'property-feedback',
  SUPPLIER_REVIEW: 'supplier-review',
  AUDIT: 'audit',
  ARCHITECTURE_EVOLUTION: 'architecture-evolution',
  NEW_BUSINESS_OBJECTIVES: 'new-business-objectives'
});

export const OPERATIONS_GOVERNANCE_BOUNDARY_EXCLUSIONS = Object.freeze({
  ENTERPRISE_GOVERNANCE_ARCHITECTURE: 'enterprise-governance-architecture',
  LEGAL_INTERPRETATION: 'legal-interpretation',
  REGULATORY_MAPPING: 'regulatory-mapping',
  PRIVACY_GOVERNANCE: 'privacy-governance',
  ETHICAL_GOVERNANCE: 'ethical-governance',
  FINANCIAL_GOVERNANCE: 'financial-governance',
  CORPORATE_RISK_GOVERNANCE: 'corporate-risk-governance',
  FORMAL_COMPLIANCE_CERTIFICATION: 'formal-compliance-certification'
});

export const OPERATIONS_GOVERNANCE_QUALITY_ATTRIBUTES = Object.freeze({
  ACCOUNTABILITY: 'accountability',
  TRACEABILITY: 'traceability',
  RELIABILITY: 'reliability',
  SECURITY: 'security',
  CONSISTENCY: 'consistency',
  TRANSPARENCY: 'transparency',
  RESILIENCE: 'resilience',
  AUDITABILITY: 'auditability',
  SCALABILITY: 'scalability',
  ADAPTABILITY: 'adaptability',
  TENANT_ISOLATION: 'tenant-isolation',
  ENTERPRISE_TRUST: 'enterprise-trust'
});

export const OPERATIONS_GOVERNANCE_ARCHITECTURAL_RULES = Object.freeze({
  ALIGN_GOVERNANCE_WITH_BUSINESS_AND_GUEST_OUTCOMES: 'align-governance-with-business-and-guest-outcomes',
  ASSIGN_ACCOUNTABLE_OWNERS: 'assign-accountable-owners',
  DEFINE_DECISION_RIGHTS_AND_DELEGATED_AUTHORITY_EXPLICITLY: 'define-decision-rights-and-delegated-authority-explicitly',
  APPLY_CONTROLS_PROPORTIONATE_TO_RISK: 'apply-controls-proportionate-to-risk',
  SEPARATE_DUTIES_FOR_HIGH_RISK_OPERATIONS: 'separate-duties-for-high-risk-operations',
  REQUIRE_RELIABLE_OPERATIONAL_EVIDENCE: 'require-reliable-operational-evidence',
  GOVERN_SERVICES_THROUGHOUT_LIFECYCLE: 'govern-services-throughout-lifecycle',
  RECORD_AND_MANAGE_OPERATIONAL_RISK: 'record-and-manage-operational-risk',
  REQUIRE_AUTHORIZED_RISK_ACCEPTANCE: 'require-authorized-risk-acceptance',
  TREAT_EXCEPTIONS_AS_TEMPORARY_OWNED_AND_EXPIRING: 'treat-exceptions-as-temporary-owned-and-expiring',
  GOVERN_ALL_OPERATIONAL_ACTORS_AND_DOMAINS: 'govern-all-operational-actors-and-domains',
  PROTECT_TENANT_AND_PROPERTY_ISOLATION: 'protect-tenant-and-property-isolation',
  PROVIDE_INDEPENDENT_ASSURANCE_WHERE_RISK_REQUIRES: 'provide-independent-assurance-where-risk-requires',
  TURN_REVIEWS_INTO_OWNED_AND_VERIFIED_ACTIONS: 'turn-reviews-into-owned-and-verified-actions',
  MEASURE_OUTCOMES_RATHER_THAN_ADMINISTRATIVE_ACTIVITY: 'measure-outcomes-rather-than-administrative-activity',
  PRESERVE_ARCH_012_BOUNDARY: 'preserve-arch-012-boundary',
  REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT: 'remain-vendor-neutral-and-technology-independent'
});

export const FUTURE_OPERATIONS_GOVERNANCE_CAPABILITIES = Object.freeze({
  MACHINE_READABLE_OPERATIONAL_POLICY: 'machine-readable-operational-policy',
  CONTINUOUS_CONTROL_VERIFICATION: 'continuous-control-verification',
  AI_ASSISTED_ASSURANCE: 'ai-assisted-assurance',
  PREDICTIVE_OPERATIONAL_RISK: 'predictive-operational-risk',
  DYNAMIC_AUTHORITY_DELEGATION: 'dynamic-authority-delegation',
  AUTONOMOUS_LOW_RISK_GOVERNANCE: 'autonomous-low-risk-governance',
  SEMANTIC_CONTROL_MAPPING: 'semantic-control-mapping',
  REAL_TIME_RISK_POSTURE: 'real-time-risk-posture',
  CROSS_PROPERTY_GOVERNANCE_OPTIMIZATION: 'cross-property-governance-optimization',
  FEDERATED_TENANT_GOVERNANCE: 'federated-tenant-governance',
  DIGITAL_OPERATIONAL_TWINS: 'digital-operational-twins',
  SELF_IMPROVING_CONTROLS: 'self-improving-controls'
});

export const FUTURE_OPERATIONS_VISION_CAPABILITIES = Object.freeze({
  UNDERSTAND_BUSINESS_INTENT: 'understand-business-intent',
  OBSERVE_ENTERPRISE_CONDITIONS_CONTINUOUSLY: 'observe-enterprise-conditions-continuously',
  CORRELATE_BUSINESS_AND_TECHNICAL_EVIDENCE: 'correlate-business-and-technical-evidence',
  PREDICT_RISK_AND_DEMAND: 'predict-risk-and-demand',
  RECOMMEND_OR_EXECUTE_BOUNDED_ACTION: 'recommend-or-execute-bounded-action',
  ADAPT_SERVICE_WORKFLOW_AI_INTEGRATION_AND_CAPACITY: 'adapt-service-workflow-ai-integration-and-capacity',
  COORDINATE_ACROSS_TENANTS_AND_PROPERTIES: 'coordinate-across-tenants-and-properties',
  PRESERVE_CONTINUITY_DURING_DISRUPTION: 'preserve-continuity-during-disruption',
  EXPLAIN_DECISIONS_AND_ACTIONS: 'explain-decisions-and-actions',
  VERIFY_OUTCOMES: 'verify-outcomes',
  LEARN_FROM_EXPERIENCE: 'learn-from-experience',
  IMPROVE_CONTROLS_AND_OPERATING_MODELS: 'improve-controls-and-operating-models',
  ESCALATE_TO_ACCOUNTABLE_HUMANS: 'escalate-to-accountable-humans'
});

export const OPERATIONS_EVOLUTION_DRIVERS = Object.freeze({
  TENANT_AND_PROPERTY_GROWTH: 'tenant-and-property-growth',
  SERVICE_AND_WORKFLOW_COMPLEXITY: 'service-and-workflow-complexity',
  EXPANDING_AI_AGENT_PARTICIPATION: 'expanding-ai-agent-participation',
  HIGHER_INTERACTION_VOLUME: 'higher-interaction-volume',
  ADDITIONAL_CHANNELS_AND_INTEGRATIONS: 'additional-channels-and-integrations',
  GREATER_DATA_SCALE: 'greater-data-scale',
  STRONGER_SECURITY_AND_COMPLIANCE_OBLIGATIONS: 'stronger-security-and-compliance-obligations',
  INCREASING_PROVIDER_DIVERSITY: 'increasing-provider-diversity',
  DEMAND_FOR_FASTER_CHANGE: 'demand-for-faster-change',
  HIGHER_SERVICE_EXPECTATIONS: 'higher-service-expectations',
  GEOGRAPHIC_EXPANSION: 'geographic-expansion',
  OPERATIONAL_COST_PRESSURE: 'operational-cost-pressure',
  STRONGER_CONTINUITY_NEED: 'stronger-continuity-need',
  AUTOMATION_OPPORTUNITIES: 'automation-opportunities',
  EXPLAINABILITY_DEMAND: 'explainability-demand'
});

export const OPERATIONS_EVOLUTION_FOUNDATIONS = Object.freeze({
  BUSINESS_FIRST_OPERATIONS: 'business-first-operations',
  ACCOUNTABLE_OWNERSHIP: 'accountable-ownership',
  EXPLICIT_AUTHORITY: 'explicit-authority',
  SERVICE_AUTONOMY: 'service-autonomy',
  TENANT_ISOLATION: 'tenant-isolation',
  SECURITY: 'security',
  OPERATIONAL_EVIDENCE: 'operational-evidence',
  RESILIENCE: 'resilience',
  CONTROLLED_CHANGE: 'controlled-change',
  HUMAN_OVERSIGHT: 'human-oversight',
  VENDOR_NEUTRALITY: 'vendor-neutrality'
});

export const FUTURE_OPERATIONS_EVOLUTION_PRINCIPLES = Object.freeze({
  PRESERVE_FOUNDATIONAL_ARCHITECTURE: 'preserve-foundational-architecture',
  AUTOMATE_PROVEN_DECISIONS: 'automate-proven-decisions',
  INCREASE_AUTONOMY_GRADUALLY: 'increase-autonomy-gradually',
  KEEP_HUMANS_ACCOUNTABLE: 'keep-humans-accountable',
  DESIGN_FOR_REVERSAL: 'design-for-reversal',
  LEARN_UNDER_GOVERNANCE: 'learn-under-governance'
});

export const OPERATIONS_EVOLUTION_MATURITY_STAGES = Object.freeze({
  REACTIVE_OPERATIONS: 'reactive-operations',
  STANDARDIZED_OPERATIONS: 'standardized-operations',
  MEASURED_OPERATIONS: 'measured-operations',
  PROACTIVE_OPERATIONS: 'proactive-operations',
  ADAPTIVE_OPERATIONS: 'adaptive-operations',
  AUTONOMOUS_OPERATIONS_WITHIN_GUARDRAILS: 'autonomous-operations-within-guardrails',
  SELF_IMPROVING_ENTERPRISE_OPERATIONS: 'self-improving-enterprise-operations'
});

export const PREDICTIVE_OPERATIONS_CAPABILITIES = Object.freeze({
  INCIDENT_LIKELIHOOD_PREDICTION: 'incident-likelihood-prediction',
  CAPACITY_DEMAND_FORECASTING: 'capacity-demand-forecasting',
  SERVICE_DEGRADATION_PREDICTION: 'service-degradation-prediction',
  PROVIDER_RISK_FORECASTING: 'provider-risk-forecasting',
  WORKFLOW_DEADLINE_PREDICTION: 'workflow-deadline-prediction',
  INTEGRATION_BACKLOG_PREDICTION: 'integration-backlog-prediction',
  AI_QUALITY_DEGRADATION_PREDICTION: 'ai-quality-degradation-prediction',
  SECURITY_RISK_PREDICTION: 'security-risk-prediction',
  PROPERTY_IMPACT_PREDICTION: 'property-impact-prediction',
  TENANT_DEMAND_FORECASTING: 'tenant-demand-forecasting',
  CONTINUITY_RISK_FORECASTING: 'continuity-risk-forecasting'
});

export const PREDICTION_RECORD_FIELDS = Object.freeze({
  EVIDENCE: 'evidence',
  CONFIDENCE: 'confidence',
  TIME_HORIZON: 'time-horizon',
  SCOPE: 'scope',
  ASSUMPTIONS: 'assumptions',
  LIMITATIONS: 'limitations',
  POTENTIAL_IMPACT: 'potential-impact',
  RECOMMENDED_ACTION: 'recommended-action',
  OWNER: 'owner',
  VERIFICATION: 'verification'
});

export const PRESCRIPTIVE_OPERATION_RECOMMENDATIONS = Object.freeze({
  SCALE_CAPACITY: 'scale-capacity',
  RESTRICT_NONCRITICAL_DEMAND: 'restrict-noncritical-demand',
  SHIFT_WORKLOAD: 'shift-workload',
  ACTIVATE_FALLBACK: 'activate-fallback',
  CHANGE_WORKFLOW_ROUTE: 'change-workflow-route',
  REDUCE_AI_AUTONOMY: 'reduce-ai-autonomy',
  ENGAGE_HUMAN_SUPPORT: 'engage-human-support',
  SCHEDULE_MAINTENANCE: 'schedule-maintenance',
  DELAY_RELEASE: 'delay-release',
  INCREASE_OBSERVATION: 'increase-observation',
  ACTIVATE_HEIGHTENED_READINESS: 'activate-heightened-readiness',
  ESCALATE_PROVIDER: 'escalate-provider',
  ADJUST_PROPERTY_SUPPORT: 'adjust-property-support'
});

export const ADAPTIVE_OPERATION_TARGETS = Object.freeze({
  CAPACITY: 'capacity',
  WORKLOAD_PRIORITY: 'workload-priority',
  SERVICE_ROUTING: 'service-routing',
  TENANT_QUOTAS: 'tenant-quotas',
  PROPERTY_SUPPORT_PRIORITY: 'property-support-priority',
  WORKFLOW_EXECUTION: 'workflow-execution',
  AI_MODEL_OR_PROVIDER: 'ai-model-or-provider',
  AI_AUTONOMY: 'ai-autonomy',
  INTEGRATION_RETRY: 'integration-retry',
  DATA_PROCESSING_SCHEDULE: 'data-processing-schedule',
  SUPPORT_ALLOCATION: 'support-allocation',
  OBSERVABILITY_DEPTH: 'observability-depth',
  CONTINUITY_MODE: 'continuity-mode'
});

export const ADAPTIVE_BEHAVIOR_FIELDS = Object.freeze({
  TRIGGER: 'trigger',
  OBJECTIVE: 'objective',
  SCOPE: 'scope',
  ALLOWED_ADJUSTMENT: 'allowed-adjustment',
  RISK_BOUNDARY: 'risk-boundary',
  DURATION: 'duration',
  VERIFICATION: 'verification',
  STOP_CONDITION: 'stop-condition',
  REVERSAL: 'reversal',
  ESCALATION: 'escalation',
  EVIDENCE: 'evidence'
});

export const AUTONOMY_SUITABILITY_CRITERIA = Object.freeze({
  REPEATABLE: 'repeatable',
  WELL_UNDERSTOOD: 'well-understood',
  LOW_OR_CONTROLLED_RISK: 'low-or-controlled-risk',
  BOUNDED_IN_SCOPE: 'bounded-in-scope',
  TENANT_ISOLATED: 'tenant-isolated',
  REVERSIBLE_OR_COMPENSATABLE: 'reversible-or-compensatable',
  OBSERVABLE: 'observable',
  VERIFIABLE: 'verifiable',
  RATE_LIMITED: 'rate-limited',
  RELIABLE_EVIDENCE_SUPPORTED: 'reliable-evidence-supported',
  COVERED_BY_STOP_CONDITIONS: 'covered-by-stop-conditions',
  ASSIGNED_TO_ACCOUNTABLE_OWNERSHIP: 'assigned-to-accountable-ownership'
});

export const OPERATIONAL_AUTONOMY_LEVELS = Object.freeze({
  MANUAL: 'manual',
  ASSISTED: 'assisted',
  RECOMMENDED: 'recommended',
  SUPERVISED_EXECUTION: 'supervised-execution',
  BOUNDED_AUTONOMY: 'bounded-autonomy',
  ADAPTIVE_BOUNDED_AUTONOMY: 'adaptive-bounded-autonomy'
});

export const AI_ASSISTED_COMMAND_CAPABILITIES = Object.freeze({
  SITUATION_CORRELATION: 'situation-correlation',
  BUSINESS_IMPACT_ANALYSIS: 'business-impact-analysis',
  DEPENDENCY_REASONING: 'dependency-reasoning',
  COMMAND_LEVEL_RECOMMENDATION: 'command-level-recommendation',
  ACTION_OPTION_ANALYSIS: 'action-option-analysis',
  RISK_IDENTIFICATION: 'risk-identification',
  DECISION_BRIEFING: 'decision-briefing',
  TIMELINE_MAINTENANCE: 'timeline-maintenance',
  COMMUNICATION_DRAFTING: 'communication-drafting',
  RECOVERY_VERIFICATION: 'recovery-verification',
  POST_EVENT_ANALYSIS: 'post-event-analysis',
  IMPROVEMENT_RECOMMENDATION: 'improvement-recommendation'
});

export const INTELLIGENT_INCIDENT_CAPABILITIES = Object.freeze({
  AUTOMATIC_DUPLICATE_CORRELATION: 'automatic-duplicate-correlation',
  DYNAMIC_IMPACT_ESTIMATION: 'dynamic-impact-estimation',
  PROBABLE_DEPENDENCY_IDENTIFICATION: 'probable-dependency-identification',
  KNOWN_ERROR_MATCHING: 'known-error-matching',
  SUGGESTED_CONTAINMENT: 'suggested-containment',
  RUNBOOK_SELECTION: 'runbook-selection',
  BOUNDED_AUTOMATED_RESTORATION: 'bounded-automated-restoration',
  STAKEHOLDER_COMMUNICATION_ASSISTANCE: 'stakeholder-communication-assistance',
  RECOVERY_VERIFICATION: 'recovery-verification',
  RECURRENCE_PREDICTION: 'recurrence-prediction'
});

export const INTELLIGENT_PROBLEM_CAPABILITIES = Object.freeze({
  CROSS_INCIDENT_PATTERN_DISCOVERY: 'cross-incident-pattern-discovery',
  ROOT_CAUSE_HYPOTHESIS_GENERATION: 'root-cause-hypothesis-generation',
  CONTRIBUTING_CONDITION_ANALYSIS: 'contributing-condition-analysis',
  ARCHITECTURE_WEAKNESS_DETECTION: 'architecture-weakness-detection',
  REMEDIATION_SIMULATION: 'remediation-simulation',
  RISK_REDUCTION_PREDICTION: 'risk-reduction-prediction',
  KNOWN_ERROR_LIFECYCLE_AUTOMATION: 'known-error-lifecycle-automation',
  PREVENTIVE_CHANGE_RECOMMENDATION: 'preventive-change-recommendation'
});

export const INTELLIGENT_CHANGE_RELEASE_CAPABILITIES = Object.freeze({
  AUTOMATED_DEPENDENCY_ANALYSIS: 'automated-dependency-analysis',
  PREDICTIVE_CHANGE_RISK: 'predictive-change-risk',
  CHANGE_COLLISION_DETECTION: 'change-collision-detection',
  DYNAMIC_RELEASE_COHORTS: 'dynamic-release-cohorts',
  PROGRESSIVE_RELEASE_CONTROL: 'progressive-release-control',
  BUSINESS_OUTCOME_VERIFICATION: 'business-outcome-verification',
  AUTOMATED_ROLLBACK_RECOMMENDATION: 'automated-rollback-recommendation',
  ADAPTIVE_DEPLOYMENT_PACING: 'adaptive-deployment-pacing',
  POLICY_BASED_AUTHORIZATION: 'policy-based-authorization',
  CONTINUOUS_OPERATIONAL_READINESS_ASSESSMENT: 'continuous-operational-readiness-assessment'
});

export const INTELLIGENT_CAPACITY_CAPABILITIES = Object.freeze({
  MULTI_HORIZON_DEMAND_FORECASTING: 'multi-horizon-demand-forecasting',
  CROSS_PROPERTY_SEASONAL_MODELING: 'cross-property-seasonal-modeling',
  PREDICTIVE_SATURATION: 'predictive-saturation',
  DYNAMIC_PERFORMANCE_BUDGETS: 'dynamic-performance-budgets',
  INTENT_BASED_CAPACITY_ALLOCATION: 'intent-based-capacity-allocation',
  ADAPTIVE_TENANT_FAIRNESS: 'adaptive-tenant-fairness',
  PROVIDER_QUOTA_OPTIMIZATION: 'provider-quota-optimization',
  AI_COST_OPTIMIZATION: 'ai-cost-optimization',
  RECOVERY_CAPACITY_RESERVATION: 'recovery-capacity-reservation',
  CARBON_AWARE_WORKLOAD_SCHEDULING: 'carbon-aware-workload-scheduling',
  AUTONOMOUS_BOUNDED_SCALING: 'autonomous-bounded-scaling'
});

export const INTELLIGENT_RESILIENCE_CAPABILITIES = Object.freeze({
  CONTINUOUS_DEPENDENCY_RISK_ANALYSIS: 'continuous-dependency-risk-analysis',
  PREDICTIVE_CONTINUITY_ACTIVATION: 'predictive-continuity-activation',
  AUTOMATED_READINESS_VERIFICATION: 'automated-readiness-verification',
  DYNAMIC_RECOVERY_PRIORITIZATION: 'dynamic-recovery-prioritization',
  BOUNDED_FAILOVER: 'bounded-failover',
  PROVIDER_SUBSTITUTION: 'provider-substitution',
  RECOVERY_PLAN_SIMULATION: 'recovery-plan-simulation',
  AUTOMATED_RECONCILIATION: 'automated-reconciliation',
  CROSS_PROPERTY_CONTINUITY_COORDINATION: 'cross-property-continuity-coordination',
  ADAPTIVE_RECOVERY_OBJECTIVES: 'adaptive-recovery-objectives',
  CONTINUOUS_RESTORATION_TESTING: 'continuous-restoration-testing'
});

export const SEMANTIC_OPERATIONAL_KNOWLEDGE_ENTITIES = Object.freeze({
  BUSINESS_CAPABILITIES: 'business-capabilities',
  SERVICES: 'services',
  TENANTS: 'tenants',
  PROPERTIES: 'properties',
  GUESTS: 'guests',
  DEPENDENCIES: 'dependencies',
  EVENTS: 'events',
  INCIDENTS: 'incidents',
  PROBLEMS: 'problems',
  CHANGES: 'changes',
  RISKS: 'risks',
  CONTROLS: 'controls',
  RUNBOOKS: 'runbooks',
  DECISIONS: 'decisions',
  ACTIONS: 'actions',
  OUTCOMES: 'outcomes'
});

export const OPERATIONAL_MEMORY_ITEMS = Object.freeze({
  HISTORICAL_SITUATIONS: 'historical-situations',
  INCIDENT_TIMELINES: 'incident-timelines',
  DECISIONS: 'decisions',
  ACTIONS: 'actions',
  OUTCOMES: 'outcomes',
  KNOWN_ERRORS: 'known-errors',
  WORKAROUNDS: 'workarounds',
  RECOVERY_RESULTS: 'recovery-results',
  CHANGE_OUTCOMES: 'change-outcomes',
  CAPACITY_PATTERNS: 'capacity-patterns',
  CONTINUITY_EXERCISES: 'continuity-exercises',
  TENANT_AND_PROPERTY_CONTEXT: 'tenant-and-property-context',
  SUPPLIER_BEHAVIOR: 'supplier-behavior',
  LESSONS_LEARNED: 'lessons-learned'
});

export const DIGITAL_OPERATIONAL_TWIN_USES = Object.freeze({
  CHANGE_SIMULATION: 'change-simulation',
  CAPACITY_SIMULATION: 'capacity-simulation',
  FAILURE_SIMULATION: 'failure-simulation',
  RECOVERY_SEQUENCE_VALIDATION: 'recovery-sequence-validation',
  CONTINUITY_EXERCISES: 'continuity-exercises',
  TENANT_GROWTH_ANALYSIS: 'tenant-growth-analysis',
  PROPERTY_DEMAND_SCENARIOS: 'property-demand-scenarios',
  PROVIDER_LOSS_ANALYSIS: 'provider-loss-analysis',
  WORKFLOW_IMPACT_ANALYSIS: 'workflow-impact-analysis',
  AI_COST_AND_QUALITY_SCENARIOS: 'ai-cost-and-quality-scenarios'
});

export const CROSS_PROPERTY_INTELLIGENCE_CAPABILITIES = Object.freeze({
  DEMAND_PATTERN_DISCOVERY: 'demand-pattern-discovery',
  INCIDENT_PATTERN_DISCOVERY: 'incident-pattern-discovery',
  CAPACITY_FORECASTING: 'capacity-forecasting',
  SUPPORT_OPTIMIZATION: 'support-optimization',
  CONTINUITY_COORDINATION: 'continuity-coordination',
  SERVICE_QUALITY_COMPARISON: 'service-quality-comparison',
  OPERATIONAL_ANOMALY_DETECTION: 'operational-anomaly-detection',
  SHARED_KNOWN_ERRORS: 'shared-known-errors',
  PROPERTY_ARCHETYPES: 'property-archetypes',
  SEASONAL_PLANNING: 'seasonal-planning'
});

export const FEDERATED_OPERATIONS_PARTICIPANTS = Object.freeze({
  CENTRAL_PLATFORM_OPERATIONS: 'central-platform-operations',
  TENANT_OPERATIONS: 'tenant-operations',
  PROPERTY_OPERATIONS: 'property-operations',
  REGIONAL_OPERATIONS: 'regional-operations',
  SERVICE_DOMAINS: 'service-domains',
  EXTERNAL_PARTNERS: 'external-partners',
  AUTOMATED_AGENTS: 'automated-agents'
});

export const OPERATIONAL_AGENT_SPECIALIZATIONS = Object.freeze({
  SERVICE_HEALTH: 'service-health',
  INCIDENT_TRIAGE: 'incident-triage',
  CAPACITY: 'capacity',
  CHANGE_RISK: 'change-risk',
  CONTINUITY: 'continuity',
  SECURITY: 'security',
  AI_QUALITY: 'ai-quality',
  WORKFLOW_SUPERVISION: 'workflow-supervision',
  INTEGRATION_HEALTH: 'integration-health',
  DATA_QUALITY: 'data-quality',
  PROPERTY_SUPPORT: 'property-support',
  COMMUNICATIONS: 'communications',
  GOVERNANCE_EVIDENCE: 'governance-evidence'
});

export const OPERATIONAL_AGENT_REQUIREMENTS = Object.freeze({
  DEFINED_PURPOSE: 'defined-purpose',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  IDENTITY: 'identity',
  PERMISSIONS: 'permissions',
  SCOPE: 'scope',
  TOOLS: 'tools',
  DATA_BOUNDARIES: 'data-boundaries',
  AUTONOMY_LEVEL: 'autonomy-level',
  POLICIES: 'policies',
  EVIDENCE: 'evidence',
  EVALUATION: 'evaluation',
  STOP_CONDITIONS: 'stop-conditions',
  HUMAN_ESCALATION: 'human-escalation',
  LIFECYCLE_STATE: 'lifecycle-state'
});

export const MULTI_AGENT_OPERATIONS_REQUIREMENTS = Object.freeze({
  COORDINATION_OWNER: 'coordination-owner',
  ROLE_BOUNDARIES: 'role-boundaries',
  SHARED_CONTEXT: 'shared-context',
  CONFLICT_RESOLUTION: 'conflict-resolution',
  DECISION_AUTHORITY: 'decision-authority',
  ACTION_ARBITRATION: 'action-arbitration',
  TENANT_ISOLATION: 'tenant-isolation',
  EVIDENCE_CORRELATION: 'evidence-correlation',
  FAILURE_HANDLING: 'failure-handling',
  HUMAN_TAKEOVER: 'human-takeover'
});

export const HUMAN_OPERATION_STRENGTHS = Object.freeze({
  ACCOUNTABILITY: 'accountability',
  STRATEGIC_JUDGMENT: 'strategic-judgment',
  ETHICAL_JUDGMENT: 'ethical-judgment',
  AMBIGUOUS_TRADEOFFS: 'ambiguous-tradeoffs',
  RISK_ACCEPTANCE: 'risk-acceptance',
  CRISIS_LEADERSHIP: 'crisis-leadership',
  STAKEHOLDER_TRUST: 'stakeholder-trust',
  POLICY: 'policy',
  EXCEPTION: 'exception',
  ARCHITECTURE: 'architecture',
  IMPROVEMENT_PRIORITIES: 'improvement-priorities'
});

export const MACHINE_OPERATION_STRENGTHS = Object.freeze({
  CONTINUOUS_OBSERVATION: 'continuous-observation',
  CORRELATION: 'correlation',
  REPETITIVE_EXECUTION: 'repetitive-execution',
  LARGE_SCALE_ANALYSIS: 'large-scale-analysis',
  PATTERN_DETECTION: 'pattern-detection',
  SIMULATION: 'simulation',
  RAPID_BOUNDED_RESPONSE: 'rapid-bounded-response',
  EVIDENCE_CAPTURE: 'evidence-capture',
  VERIFICATION: 'verification'
});

export const FUTURE_OPERATIONS_TRUST_FACTORS = Object.freeze({
  IDENTITY: 'identity',
  AUTHORIZATION: 'authorization',
  PROVEN_CAPABILITY: 'proven-capability',
  EVIDENCE_QUALITY: 'evidence-quality',
  HISTORICAL_OUTCOMES: 'historical-outcomes',
  SCOPE: 'scope',
  RISK: 'risk',
  VERIFICATION: 'verification',
  EXPLAINABILITY: 'explainability',
  CURRENT_CONDITION: 'current-condition'
});

export const FUTURE_OPERATIONS_EXPLAINABILITY_FIELDS = Object.freeze({
  OBSERVED_CONDITION: 'observed-condition',
  EVIDENCE_USED: 'evidence-used',
  OBJECTIVE_APPLIED: 'objective-applied',
  OPTIONS_CONSIDERED: 'options-considered',
  AUTHORIZING_POLICY: 'authorizing-policy',
  UNCERTAINTY: 'uncertainty',
  SELECTION_REASON: 'selection-reason',
  EXPECTED_OUTCOME: 'expected-outcome',
  RESULT_VERIFICATION: 'result-verification',
  HUMAN_OVERSIGHT: 'human-oversight'
});

export const EXECUTABLE_POLICY_AREAS = Object.freeze({
  AUTHORITY: 'authority',
  SCOPE: 'scope',
  TENANT_BOUNDARIES: 'tenant-boundaries',
  RISK_LIMITS: 'risk-limits',
  APPROVAL: 'approval',
  CHANGE_WINDOWS: 'change-windows',
  CAPACITY_LIMITS: 'capacity-limits',
  AI_AUTONOMY: 'ai-autonomy',
  RECOVERY_PRIORITIES: 'recovery-priorities',
  DATA_ACCESS: 'data-access',
  SECURITY: 'security',
  EVIDENCE: 'evidence',
  STOP_CONDITIONS: 'stop-conditions'
});

export const CONTINUOUS_CONTROL_VERIFICATION_CAPABILITIES = Object.freeze({
  AUTHORITY_VALIDATION: 'authority-validation',
  CONFIGURATION_CONTROL: 'configuration-control',
  TENANT_ISOLATION_VALIDATION: 'tenant-isolation-validation',
  BACKUP_RESTORATION_CHECKS: 'backup-restoration-checks',
  RECOVERY_READINESS: 'recovery-readiness',
  CAPACITY_HEADROOM_VALIDATION: 'capacity-headroom-validation',
  AI_POLICY_CONFORMANCE: 'ai-policy-conformance',
  CHANGE_READINESS_CHECKS: 'change-readiness-checks',
  EVIDENCE_COMPLETENESS: 'evidence-completeness',
  EXCEPTION_EXPIRATION: 'exception-expiration'
});

export const SELF_IMPROVING_OPERATION_TARGETS = Object.freeze({
  THRESHOLDS: 'thresholds',
  RUNBOOKS: 'runbooks',
  CAPACITY_POLICIES: 'capacity-policies',
  INCIDENT_CORRELATION: 'incident-correlation',
  KNOWN_ERRORS: 'known-errors',
  RECOVERY_SEQUENCES: 'recovery-sequences',
  AUTOMATION: 'automation',
  SUPPORT_ROUTING: 'support-routing',
  SERVICE_COMMITMENTS: 'service-commitments',
  CONTROL_DESIGN: 'control-design',
  OBSERVABILITY: 'observability',
  TRAINING: 'training',
  ARCHITECTURE: 'architecture'
});

export const SELF_IMPROVING_OPERATION_REQUIREMENTS = Object.freeze({
  EXPLAINABLE: 'explainable',
  EVIDENCE_BASED: 'evidence-based',
  EVALUATED: 'evaluated',
  RISK_ASSESSED: 'risk-assessed',
  AUTHORIZED: 'authorized',
  TESTED: 'tested',
  VERSIONED: 'versioned',
  REVERSIBLE: 'reversible',
  MEASURED_AFTER_INTRODUCTION: 'measured-after-introduction'
});

export const TENANT_SPECIFIC_EVOLUTION_FACTORS = Object.freeze({
  SERVICE_COMMITMENTS: 'service-commitments',
  RISK_TOLERANCE: 'risk-tolerance',
  REGULATORY_OBLIGATIONS: 'regulatory-obligations',
  PROPERTY_SCALE: 'property-scale',
  OPERATIONAL_MATURITY: 'operational-maturity',
  AI_POLICY: 'ai-policy',
  AUTOMATION_PREFERENCE: 'automation-preference',
  DATA_POLICY: 'data-policy',
  INTEGRATION_LANDSCAPE: 'integration-landscape'
});

export const PROPERTY_SPECIFIC_EVOLUTION_FACTORS = Object.freeze({
  SIZE: 'size',
  STAFFING: 'staffing',
  CONNECTIVITY: 'connectivity',
  GUEST_VOLUME: 'guest-volume',
  FACILITY_COMPLEXITY: 'facility-complexity',
  LOCAL_REGULATION: 'local-regulation',
  MANUAL_CAPABILITY: 'manual-capability',
  TENANT_POLICY: 'tenant-policy',
  RISK: 'risk',
  GEOGRAPHY: 'geography'
});

export const PROVIDER_PORTABILITY_TARGETS = Object.freeze({
  CLOUD_PROVIDER: 'cloud-provider',
  AI_PROVIDER: 'ai-provider',
  MODEL: 'model',
  COMMUNICATION_CHANNEL: 'communication-channel',
  IDENTITY_PROVIDER: 'identity-provider',
  PAYMENT_PROVIDER: 'payment-provider',
  INTEGRATION_PARTNER: 'integration-partner',
  OPERATIONS_PLATFORM: 'operations-platform',
  OBSERVABILITY_PLATFORM: 'observability-platform'
});

export const FUTURE_ARCHITECTURE_RELATIONSHIPS = Object.freeze({
  ARCH_012_GOVERNANCE_AND_COMPLIANCE: 'ARCH-012 Governance & Compliance',
  ARCH_013_DEVELOPER_PLATFORM: 'ARCH-013 Developer Platform',
  ARCH_014_AI_AGENT_FRAMEWORK: 'ARCH-014 AI Agent Framework',
  ARCH_015_WORKFLOW_ENGINE: 'ARCH-015 Workflow Engine',
  ARCH_016_KNOWLEDGE_AND_MEMORY: 'ARCH-016 Knowledge & Memory',
  ARCH_017_API_AND_SDK_ARCHITECTURE: 'ARCH-017 API & SDK Architecture',
  ARCH_018_MULTI_TENANCY: 'ARCH-018 Multi-Tenancy',
  ARCH_019_PLUGIN_AND_EXTENSION_FRAMEWORK: 'ARCH-019 Plugin & Extension Framework',
  ARCH_020_REFERENCE_IMPLEMENTATIONS: 'ARCH-020 Reference Implementations'
});

export const FUTURE_OPERATIONS_TRANSITION_CRITERIA = Object.freeze({
  BUSINESS_VALUE_CLEAR: 'business-value-clear',
  ACCOUNTABLE_OWNERSHIP_EXISTS: 'accountable-ownership-exists',
  CURRENT_OPERATIONS_DEFINED_AND_STABLE: 'current-operations-defined-and-stable',
  EVIDENCE_RELIABLE: 'evidence-reliable',
  POLICIES_EXPLICIT: 'policies-explicit',
  RISKS_UNDERSTOOD: 'risks-understood',
  TENANT_AND_PROPERTY_BOUNDARIES_ENFORCEABLE: 'tenant-and-property-boundaries-enforceable',
  SECURITY_CONTROLS_EFFECTIVE: 'security-controls-effective',
  DECISIONS_EXPLAINABLE: 'decisions-explainable',
  ACTIONS_BOUNDED: 'actions-bounded',
  RECOVERY_AND_REVERSAL_EXIST: 'recovery-and-reversal-exist',
  PERFORMANCE_EVALUATED: 'performance-evaluated',
  HUMAN_TAKEOVER_AVAILABLE: 'human-takeover-available',
  INDEPENDENT_ASSURANCE_PROPORTIONATE: 'independent-assurance-proportionate',
  OUTCOMES_VERIFIABLE: 'outcomes-verifiable'
});

export const FUTURE_OPERATIONS_EVOLUTION_RISKS = Object.freeze({
  AUTOMATION_BIAS: 'automation-bias',
  FALSE_CONFIDENCE: 'false-confidence',
  HIDDEN_COUPLING: 'hidden-coupling',
  CASCADING_AUTOMATED_ACTION: 'cascading-automated-action',
  POLICY_CONFLICT: 'policy-conflict',
  MODEL_DRIFT: 'model-drift',
  DATA_LEAKAGE: 'data-leakage',
  CROSS_TENANT_IMPACT: 'cross-tenant-impact',
  UNCONTROLLED_COST: 'uncontrolled-cost',
  LOSS_OF_HUMAN_SKILL: 'loss-of-human-skill',
  OPAQUE_DECISIONS: 'opaque-decisions',
  PROVIDER_CONCENTRATION: 'provider-concentration',
  UNSAFE_SELF_MODIFICATION: 'unsafe-self-modification',
  FEEDBACK_LOOP_INSTABILITY: 'feedback-loop-instability',
  OPTIMIZATION_AGAINST_INCOMPLETE_MEASURES: 'optimization-against-incomplete-measures'
});

export const AUTONOMOUS_OPERATIONS_FAILURE_HANDLING = Object.freeze({
  STOP: 'stop',
  CONTAIN: 'contain',
  REDUCE_AUTONOMY: 'reduce-autonomy',
  REVOKE_PERMISSION: 'revoke-permission',
  RESTORE_PREVIOUS_POLICY: 'restore-previous-policy',
  ROLL_BACK_OR_COMPENSATE: 'roll-back-or-compensate',
  PRESERVE_EVIDENCE: 'preserve-evidence',
  NOTIFY_ACCOUNTABLE_OWNER: 'notify-accountable-owner',
  ESCALATE_TO_HUMAN_COMMAND: 'escalate-to-human-command',
  VERIFY_BUSINESS_OUTCOME: 'verify-business-outcome',
  INITIATE_INCIDENT_AND_PROBLEM_MANAGEMENT: 'initiate-incident-and-problem-management'
});

export const ARCHITECTURE_EVOLUTION_GOVERNANCE_REQUIREMENTS = Object.freeze({
  ARCHITECTURE_REVIEW: 'architecture-review',
  ADRS: 'adrs',
  RISK_ASSESSMENT: 'risk-assessment',
  SECURITY_REVIEW: 'security-review',
  DATA_AND_PRIVACY_REVIEW: 'data-and-privacy-review',
  TENANT_IMPACT_REVIEW: 'tenant-impact-review',
  OPERATIONAL_READINESS_REVIEW: 'operational-readiness-review',
  CONTROLLED_CHANGE: 'controlled-change',
  PROGRESSIVE_INTRODUCTION: 'progressive-introduction',
  INDEPENDENT_ASSURANCE: 'independent-assurance',
  OUTCOME_MEASUREMENT: 'outcome-measurement',
  PERIODIC_REEVALUATION: 'periodic-reevaluation'
});

export const FUTURE_OPERATIONS_LONG_TERM_QUALITY_ATTRIBUTES = Object.freeze({
  RELIABILITY: 'reliability',
  RESILIENCE: 'resilience',
  SCALABILITY: 'scalability',
  ADAPTABILITY: 'adaptability',
  EXPLAINABILITY: 'explainability',
  ACCOUNTABILITY: 'accountability',
  SECURITY: 'security',
  EFFICIENCY: 'efficiency',
  RECOVERABILITY: 'recoverability',
  INTEROPERABILITY: 'interoperability',
  TENANT_ISOLATION: 'tenant-isolation',
  BUSINESS_CONTINUITY: 'business-continuity',
  ENTERPRISE_TRUST: 'enterprise-trust'
});

export const FUTURE_OPERATIONS_ARCHITECTURAL_RULES = Object.freeze({
  EXTEND_ARCH_011_FOUNDATIONS: 'extend-arch-011-foundations',
  PRESERVE_ACCOUNTABLE_HUMAN_AUTHORITY: 'preserve-accountable-human-authority',
  INTRODUCE_AUTONOMY_GRADUALLY: 'introduce-autonomy-gradually',
  AUTOMATE_PROVEN_AND_BOUNDED_DECISIONS: 'automate-proven-and-bounded-decisions',
  REQUIRE_EXPLICIT_IDENTITY_PERMISSION_SCOPE_AND_POLICY: 'require-explicit-identity-permission-scope-and-policy',
  PRESERVE_SECURITY_PRIVACY_DATA_INTEGRITY_AND_TENANT_ISOLATION: 'preserve-security-privacy-data-integrity-and-tenant-isolation',
  MAKE_OPERATIONS_EXPLAINABLE: 'make-operations-explainable',
  DISTINGUISH_HYPOTHESES_FROM_FACTS: 'distinguish-hypotheses-from-facts',
  DEFINE_STOP_REVERSAL_COMPENSATION_AND_HUMAN_TAKEOVER: 'define-stop-reversal-compensation-and-human-takeover',
  VERIFY_OUTCOMES_CONTINUOUSLY: 'verify-outcomes-continuously',
  GOVERN_LEARNING_BEFORE_PRODUCTION_CHANGE: 'govern-learning-before-production-change',
  PREVENT_UNCONTROLLED_SELF_MODIFICATION: 'prevent-uncontrolled-self-modification',
  SUPPORT_TENANT_AND_PROPERTY_SPECIFIC_ADOPTION: 'support-tenant-and-property-specific-adoption',
  REDUCE_UNNECESSARY_PROVIDER_DEPENDENCE: 'reduce-unnecessary-provider-dependence',
  INTEGRATE_WITH_ARCH_012_THROUGH_ARCH_020: 'integrate-with-arch-012-through-arch-020',
  USE_ARCHITECTURE_REVIEW_AND_ADRS_FOR_MATERIAL_EVOLUTION: 'use-architecture-review-and-adrs-for-material-evolution',
  REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT: 'remain-vendor-neutral-and-technology-independent'
});

export const FUTURE_CAPABILITY_ROADMAP_SEQUENCE = Object.freeze({
  STANDARDIZED_OPERATIONS: 'Standardized Operations',
  MEASURED_OPERATIONS: 'Measured Operations',
  PROACTIVE_OPERATIONS: 'Proactive Operations',
  PREDICTIVE_OPERATIONS: 'Predictive Operations',
  ADAPTIVE_OPERATIONS: 'Adaptive Operations',
  BOUNDED_AUTONOMOUS_OPERATIONS: 'Bounded Autonomous Operations',
  GOVERNED_SELF_IMPROVING_OPERATIONS: 'Governed Self-Improving Operations'
});
