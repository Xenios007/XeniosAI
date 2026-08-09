export const AGENT_OPERATIONS_OBSERVABILITY_EVALUATION_ERROR_CODE = 'AGENT_OPERATIONS_OBSERVABILITY_EVALUATION_INVALID';

export const AGENT_OPERATIONAL_SCOPE = Object.freeze({
  DEFINITIONS: 'agent-definitions',
  VERSIONS: 'agent-versions',
  RUNTIME_SERVICES: 'runtime-services',
  MODELS: 'models',
  MODEL_PROVIDERS: 'model-providers',
  TOOLS: 'tools',
  KNOWLEDGE_DEPENDENCIES: 'knowledge-dependencies',
  MEMORY_DEPENDENCIES: 'memory-dependencies',
  WORKFLOWS: 'workflows',
  INTEGRATIONS: 'integrations',
  TENANT_CONFIGURATIONS: 'tenant-configurations',
  PROPERTY_CONFIGURATIONS: 'property-configurations',
  EVALUATION_SUITES: 'evaluation-suites',
  EVIDENCE_SYSTEMS: 'evidence-systems',
  HUMAN_SUPPORT_PROCESSES: 'human-support-processes'
});

export const AGENT_OPERATIONAL_OWNERSHIP_ROLES = Object.freeze({
  ACCOUNTABLE_OWNER: 'accountable-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  PRODUCT_BUSINESS_OWNER: 'product-or-business-owner',
  IMPLEMENTATION_OWNER: 'implementation-owner',
  SUPPORT_PATH: 'support-path',
  ESCALATION_PATH: 'escalation-path',
  SECURITY_CONTACT: 'security-contact',
  GOVERNANCE_CONTACT: 'governance-contact-where-required'
});

export const AGENT_OPERATIONAL_RESPONSIBILITIES = Object.freeze({
  AVAILABILITY: 'availability',
  RUNTIME_HEALTH: 'runtime-health',
  CAPACITY: 'capacity',
  PERFORMANCE: 'performance',
  QUALITY: 'quality',
  SAFETY: 'safety',
  COST: 'cost',
  DEPENDENCIES: 'dependencies',
  INCIDENTS: 'incidents',
  PROBLEMS: 'problems',
  CHANGES: 'changes',
  CONTINUITY: 'continuity',
  SUSPENSION: 'suspension',
  RECOVERY: 'recovery',
  SUPPORT: 'support',
  OPERATIONAL_EVIDENCE: 'operational-evidence'
});

export const AGENT_OPERATIONAL_READINESS_ITEMS = Object.freeze({
  APPROVED_DEFINITION_VERSION: 'approved-definition-and-version',
  OWNERSHIP: 'ownership',
  RISK_CLASSIFICATION: 'risk-classification',
  REQUIRED_EVALUATIONS: 'required-evaluations',
  SERVICE_COMMITMENTS: 'service-commitments',
  HEALTH_INDICATORS: 'health-indicators',
  DASHBOARDS: 'dashboards',
  ALERTS: 'alerts',
  RUNBOOKS: 'runbooks',
  CAPACITY: 'capacity',
  COST_LIMITS: 'cost-limits',
  INCIDENT_PROCEDURES: 'incident-procedures',
  SUSPENSION_CONTROLS: 'suspension-controls',
  ROLLBACK: 'rollback',
  CONTINUITY: 'continuity',
  SUPPORT: 'support',
  KNOWN_LIMITATIONS: 'known-limitations',
  REQUIRED_EVIDENCE: 'required-evidence'
});

export const AGENT_SERVICE_MODEL_FIELDS = Object.freeze({
  SERVICE_IDENTIFIER: 'service-identifier',
  PURPOSE: 'purpose',
  USERS: 'users',
  TENANTS: 'tenants',
  PROPERTIES: 'properties',
  DEPENDENCIES: 'dependencies',
  SERVICE_COMMITMENTS: 'service-commitments',
  SUPPORT_HOURS: 'support-hours',
  CRITICALITY: 'criticality',
  RECOVERY_OBJECTIVES: 'recovery-objectives',
  LIFECYCLE_STATE: 'lifecycle-state',
  CURRENT_VERSIONS: 'current-versions',
  RUNBOOKS: 'runbooks'
});

export const AGENT_SERVICE_COMMITMENTS = Object.freeze({
  AVAILABILITY: 'availability',
  ADMISSION_LATENCY: 'admission-latency',
  RESPONSE_LATENCY: 'response-latency',
  COMPLETION_TIME: 'completion-time',
  GOAL_SUCCESS: 'goal-success',
  ACCURACY: 'accuracy',
  SAFETY: 'safety',
  HUMAN_ESCALATION: 'human-escalation',
  RECOVERY: 'recovery',
  TENANT_ISOLATION: 'tenant-isolation',
  SUPPORT_RESPONSE: 'support-response'
});

export const AGENT_HEALTH_DIMENSIONS = Object.freeze({
  BUSINESS: 'business-health',
  QUALITY: 'quality-health',
  RUNTIME: 'runtime-health',
  DEPENDENCY: 'dependency-health',
  GOVERNANCE: 'governance-health'
});

export const AGENT_HEALTH_STATES = Object.freeze({
  HEALTHY: 'healthy',
  DEGRADED: 'degraded',
  RESTRICTED: 'restricted',
  SUSPENDED: 'suspended',
  RECOVERING: 'recovering',
  UNAVAILABLE: 'unavailable',
  UNKNOWN: 'unknown'
});

export const AGENT_HEALTH_STATE_ACTIONS = Object.freeze({
  NORMAL_OPERATION: 'normal-operation',
  REDUCED_AUTONOMY: 'reduced-autonomy',
  READ_ONLY_MODE: 'read-only-mode',
  HUMAN_APPROVAL: 'human-approval',
  PROVIDER_FALLBACK: 'provider-fallback',
  ADMISSION_THROTTLING: 'admission-throttling',
  SUSPENSION: 'suspension'
});

export const AGENT_SIGNAL_TYPES = Object.freeze({
  METRICS: 'metrics',
  LOGS: 'logs',
  TRACES: 'traces',
  DOMAIN_EVENTS: 'domain-events',
  AUDIT_EVENTS: 'audit-events',
  EVALUATION_RESULTS: 'evaluation-results',
  HUMAN_FEEDBACK: 'human-feedback',
  USER_COMPLAINTS: 'user-complaints',
  INCIDENTS: 'incidents',
  BUSINESS_OUTCOMES: 'business-outcomes',
  COST_RECORDS: 'cost-records',
  PROVIDER_NOTIFICATIONS: 'provider-notifications'
});

export const AGENT_METRICS = Object.freeze({
  ADMISSION_COUNT: 'admission-count',
  ADMISSION_DENIAL: 'admission-denial',
  EXECUTION_COUNT: 'execution-count',
  EXECUTION_STATE_DISTRIBUTION: 'execution-state-distribution',
  COMPLETION_RATE: 'completion-rate',
  FAILURE_RATE: 'failure-rate',
  CANCELLATION_RATE: 'cancellation-rate',
  ESCALATION_RATE: 'escalation-rate',
  HUMAN_INTERVENTION_RATE: 'human-intervention-rate',
  TOOL_SUCCESS: 'tool-success',
  DELEGATION_SUCCESS: 'delegation-success',
  CONTEXT_RETRIEVAL_QUALITY: 'context-retrieval-quality',
  MODEL_LATENCY: 'model-latency',
  TOOL_LATENCY: 'tool-latency',
  TOTAL_EXECUTION_LATENCY: 'total-execution-latency',
  RETRY_COUNT: 'retry-count',
  COST: 'cost',
  LIMIT_EXHAUSTION: 'limit-exhaustion',
  TENANT_PROPERTY_OUTCOMES: 'tenant-and-property-outcomes'
});

export const AGENT_LOG_EVENTS = Object.freeze({
  STATE_TRANSITION: 'state-transition',
  ERROR: 'error',
  POLICY_DECISION_REFERENCE: 'policy-decision-reference',
  TOOL_INVOCATION_REFERENCE: 'tool-invocation-reference',
  MODEL_INVOCATION_REFERENCE: 'model-invocation-reference',
  WAIT_RESUME: 'wait-and-resume',
  DELEGATION: 'delegation',
  CANCELLATION: 'cancellation',
  SUSPENSION: 'suspension',
  RECONCILIATION: 'reconciliation',
  COMPLETION: 'completion'
});

export const PROHIBITED_LOG_CONTENT = Object.freeze({
  CREDENTIALS: 'credentials',
  SECRETS: 'secrets',
  UNNECESSARY_PERSONAL_DATA: 'unnecessary-personal-data',
  CROSS_TENANT_CONTENT: 'cross-tenant-content',
  UNRESTRICTED_HIDDEN_REASONING: 'unrestricted-hidden-reasoning'
});

export const TRACE_CORRELATION_POINTS = Object.freeze({
  USER_INTERACTION: 'user-interaction',
  AGENT_EXECUTION: 'agent-execution',
  REASONING_STEP: 'reasoning-step',
  CONTEXT_RETRIEVAL: 'context-retrieval',
  MODEL_INVOCATION: 'model-invocation',
  TOOL_INVOCATION: 'tool-invocation',
  WORKFLOW: 'workflow',
  BUSINESS_SERVICE: 'business-service',
  DELEGATED_AGENT: 'delegated-agent',
  HUMAN_DECISION: 'human-decision',
  EXTERNAL_PROVIDER: 'external-provider'
});

export const AGENT_DOMAIN_EVENTS = Object.freeze({
  GOAL_ADMITTED: 'goal-admitted',
  PLAN_ACTIVATED: 'plan-activated',
  TASK_ASSIGNED: 'task-assigned',
  APPROVAL_REQUESTED: 'approval-requested',
  TOOL_ACTION_COMPLETED: 'tool-action-completed',
  DELEGATION_CREATED: 'delegation-created',
  GOAL_COMPLETED: 'goal-completed',
  AGENT_SUSPENDED: 'agent-suspended',
  EVALUATION_FAILED: 'evaluation-failed'
});

export const AGENT_AUDIT_EVENTS = Object.freeze({
  IDENTITY: 'identity',
  AUTHORITY: 'authority',
  POLICY: 'policy',
  APPROVAL: 'approval',
  SENSITIVE_DATA_ACCESS: 'sensitive-data-access',
  MATERIAL_TOOL_ACTION: 'material-tool-action',
  DELEGATION: 'delegation',
  HUMAN_INTERVENTION: 'human-intervention',
  SUSPENSION: 'suspension',
  EXCEPTION: 'exception',
  LIFECYCLE_TRANSITION: 'lifecycle-transition'
});

export const BUSINESS_OBSERVABILITY_OUTCOMES = Object.freeze({
  GUEST_ASSISTANCE: 'successful-guest-assistance',
  RESERVATION_CONVERSION: 'reservation-conversion',
  CORRECT_PRICE_PRESENTATION: 'correct-price-presentation',
  PROPERTY_RESPONSE_TIME: 'property-response-time',
  ISSUE_RESOLUTION: 'issue-resolution',
  DEVELOPER_DELIVERY_QUALITY: 'developer-delivery-quality',
  REDUCED_MANUAL_EFFORT: 'reduced-manual-effort',
  AVOIDED_INCIDENT_IMPACT: 'avoided-incident-impact'
});

export const QUALITY_OBSERVABILITY_SIGNALS = Object.freeze({
  GROUNDED_ANSWER_RATE: 'grounded-answer-rate',
  UNSUPPORTED_CLAIM_RATE: 'unsupported-claim-rate',
  CORRECT_TOOL_SELECTION_RATE: 'correct-tool-selection-rate',
  COMPLETION_PRECISION: 'completion-precision',
  COMPLETION_RECALL: 'completion-recall',
  HUMAN_CORRECTION: 'human-correction',
  ESCALATION_APPROPRIATENESS: 'escalation-appropriateness',
  SAFETY_VIOLATION: 'safety-violation',
  POLICY_VIOLATION: 'policy-violation',
  TENANT_ISOLATION_VIOLATION: 'tenant-isolation-violation',
  REPLANNING_EFFECTIVENESS: 'replanning-effectiveness',
  LOOP_DETECTION: 'loop-detection'
});

export const AGENT_DASHBOARD_FIELDS = Object.freeze({
  IDENTITY_VERSION: 'identity-and-version',
  LIFECYCLE_HEALTH: 'lifecycle-and-health',
  OWNERSHIP: 'ownership',
  TENANTS_PROPERTIES: 'tenants-and-properties',
  EXECUTION_VOLUME: 'execution-volume',
  OUTCOMES: 'outcomes',
  QUALITY: 'quality',
  SAFETY: 'safety',
  LATENCY: 'latency',
  COST: 'cost',
  DEPENDENCIES: 'dependencies',
  INCIDENTS: 'incidents',
  CHANGES: 'changes',
  EVALUATIONS: 'evaluations',
  EXCEPTIONS: 'exceptions',
  CURRENT_RESTRICTIONS: 'current-restrictions'
});

export const AGENT_ALERT_FIELDS = Object.freeze({
  CONDITION: 'condition',
  IMPACT: 'impact',
  AGENT: 'agent',
  VERSION: 'version',
  TENANT: 'tenant',
  PROPERTY: 'property',
  TIME: 'time',
  EVIDENCE: 'evidence',
  OWNER: 'owner',
  REQUIRED_ACTION: 'required-action',
  ESCALATION: 'escalation'
});

export const AGENT_ALERT_CONDITIONS = Object.freeze({
  COMPLETION_COLLAPSE: 'completion-collapse',
  UNSUPPORTED_CLAIM_INCREASE: 'unsupported-claim-increase',
  TOOL_FAILURE_SPIKE: 'tool-failure-spike',
  PROVIDER_LATENCY: 'provider-latency',
  COST_ANOMALY: 'cost-anomaly',
  TENANT_MISMATCH: 'tenant-mismatch',
  PROPERTY_MISMATCH: 'property-mismatch',
  POLICY_VIOLATION: 'policy-violation',
  PROMPT_INJECTION_SIGNAL: 'prompt-injection-signal',
  DELEGATION_LOOP: 'delegation-loop',
  EXCESSIVE_HUMAN_INTERVENTION: 'excessive-human-intervention',
  CHECKPOINT_FAILURE: 'checkpoint-failure',
  RECONCILIATION_BACKLOG: 'reconciliation-backlog',
  EVALUATION_REGRESSION: 'evaluation-regression',
  EVIDENCE_GAP: 'evidence-gap'
});

export const EVALUATION_METHODS = Object.freeze({
  DETERMINISTIC_TESTS: 'deterministic-tests',
  SCENARIO_TESTS: 'scenario-tests',
  SIMULATION: 'simulation',
  MODEL_BASED_EVALUATION: 'model-based-evaluation',
  HUMAN_REVIEW: 'human-review',
  SECURITY_TESTING: 'security-testing',
  RED_TEAMING: 'red-teaming',
  PRODUCTION_OUTCOME_ANALYSIS: 'production-outcome-analysis'
});

export const EVALUATION_LAYERS = Object.freeze({
  COMPONENT: 'component-evaluation',
  AGENT: 'agent-evaluation',
  MULTI_AGENT: 'multi-agent-evaluation',
  WORKFLOW: 'workflow-evaluation',
  SYSTEM: 'system-evaluation',
  PRODUCTION: 'production-evaluation'
});

export const EVALUATION_DATASET_FIELDS = Object.freeze({
  USE_CASE_COVERAGE: 'use-case-coverage',
  RISK_COVERAGE: 'risk-coverage',
  TENANT_SCENARIOS: 'tenant-scenarios',
  PROPERTY_SCENARIOS: 'property-scenarios',
  LANGUAGE_COVERAGE: 'language-coverage',
  EDGE_CASES: 'edge-cases',
  ADVERSARIAL_CASES: 'adversarial-cases',
  FAILURE_CASES: 'failure-cases',
  HUMAN_DECISION_CASES: 'human-decision-cases',
  EXPECTED_OUTCOMES: 'known-expected-outcomes',
  VERSIONING: 'versioning',
  PROVENANCE: 'provenance',
  DATA_RIGHTS: 'data-rights'
});

export const EVALUATION_SCENARIO_FIELDS = Object.freeze({
  GOAL: 'goal',
  AGENT_VERSION: 'agent-version',
  INITIAL_STATE: 'initial-state',
  TENANT_PROPERTY: 'tenant-and-property',
  INPUTS: 'inputs',
  AVAILABLE_CONTEXT: 'available-context',
  AVAILABLE_TOOLS: 'available-tools',
  POLICY: 'policy',
  EXPECTED_OUTCOME: 'expected-outcome',
  PROHIBITED_OUTCOMES: 'prohibited-outcomes',
  REQUIRED_EVIDENCE: 'required-evidence',
  EVALUATION_CRITERIA: 'evaluation-criteria'
});

export const DETERMINISTIC_EVALUATION_CHECKS = Object.freeze({
  SCHEMA: 'schema',
  BUSINESS_SERVICE_CALL: 'correct-business-service-call',
  TOOL_AUTHORIZATION: 'tool-authorization',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_ISOLATION: 'property-isolation',
  REQUIRED_APPROVAL: 'required-approval',
  STATE_TRANSITION: 'state-transition',
  COMPLETION_CRITERIA: 'completion-criteria',
  STOP_CONDITIONS: 'stop-conditions',
  EVIDENCE: 'evidence'
});

export const MODEL_BASED_EVALUATION_CONTROLS = Object.freeze({
  VERSIONED_CRITERIA: 'versioned-criteria',
  CALIBRATED_EVALUATORS: 'calibrated-evaluators',
  BIAS_ANALYSIS: 'bias-analysis',
  HUMAN_VALIDATION: 'human-validation',
  DISAGREEMENT_HANDLING: 'disagreement-handling'
});

export const EVALUATION_METRICS = Object.freeze({
  GOAL_COMPLETION: 'goal-completion',
  FACTUAL_ACCURACY: 'factual-accuracy',
  GROUNDING: 'grounding',
  TOOL_SELECTION: 'tool-selection',
  ACTION_CORRECTNESS: 'action-correctness',
  AUTHORITY_COMPLIANCE: 'authority-compliance',
  POLICY_COMPLIANCE: 'policy-compliance',
  SAFETY: 'safety',
  ROBUSTNESS: 'robustness',
  HUMAN_INTERACTION_QUALITY: 'human-interaction-quality',
  RECOVERY: 'recovery',
  LATENCY: 'latency',
  COST: 'cost',
  BUSINESS_VALUE: 'business-value'
});

export const RELEASE_GATE_REQUIREMENTS = Object.freeze({
  REQUIRED_TESTS_PASSED: 'required-tests-passed',
  NO_CRITICAL_SAFETY_FAILURES: 'no-critical-safety-failures',
  NO_TENANT_ISOLATION_FAILURES: 'no-tenant-isolation-failures',
  NO_UNAUTHORIZED_ACTIONS: 'no-unauthorized-actions',
  QUALITY_ABOVE_THRESHOLD: 'quality-above-threshold',
  PERFORMANCE_WITHIN_OBJECTIVE: 'performance-within-objective',
  COST_WITHIN_LIMIT: 'cost-within-limit',
  SECURITY_REVIEW: 'security-review',
  OPERATIONAL_READINESS: 'operational-readiness',
  EVIDENCE_COMPLETE: 'evidence-complete',
  REQUIRED_APPROVAL: 'required-approval'
});

export const CONTROLLED_ROLLOUT_STAGES = Object.freeze({
  INTERNAL_USERS: 'internal-users',
  TEST_TENANTS: 'test-tenants',
  SELECTED_TENANTS: 'selected-tenants',
  SELECTED_PROPERTIES: 'selected-properties',
  LIMITED_TRAFFIC: 'limited-traffic',
  READ_ONLY_MODE: 'read-only-mode',
  RECOMMENDATION_MODE: 'recommendation-mode',
  HUMAN_APPROVAL_MODE: 'human-approval-mode',
  BOUNDED_EXECUTION: 'bounded-execution'
});

export const DRIFT_AREAS = Object.freeze({
  INPUT_DISTRIBUTION: 'input-distribution',
  USER_BEHAVIOR: 'user-behavior',
  TENANT_CONFIGURATION: 'tenant-configuration',
  PROPERTY_CONDITIONS: 'property-conditions',
  KNOWLEDGE: 'knowledge',
  MEMORY: 'memory',
  MODEL_BEHAVIOR: 'model-behavior',
  TOOL_BEHAVIOR: 'tool-behavior',
  PROVIDER_BEHAVIOR: 'provider-behavior',
  OUTCOMES: 'outcomes',
  COST: 'cost'
});

export const DRIFT_RESPONSES = Object.freeze({
  INVESTIGATION: 'investigation',
  NEW_EVALUATION_SCENARIOS: 'new-evaluation-scenarios',
  SCOPE_REDUCTION: 'scope-reduction',
  AUTONOMY_REDUCTION: 'autonomy-reduction',
  ROUTING_CHANGE: 'routing-change',
  CONTEXT_UPDATE: 'context-update',
  TOOL_RESTRICTION: 'tool-restriction',
  MODEL_ROLLBACK: 'model-rollback',
  SUSPENSION: 'suspension',
  GOVERNED_REPLACEMENT: 'governed-retraining-or-replacement'
});

export const AGENT_INCIDENT_TYPES = Object.freeze({
  UNSAFE_RESPONSE: 'unsafe-response',
  UNAUTHORIZED_ACTION: 'unauthorized-action',
  TENANT_LEAKAGE: 'tenant-leakage',
  PROPERTY_LEAKAGE: 'property-leakage',
  INCORRECT_BUSINESS_OUTCOME: 'incorrect-business-outcome',
  TOOL_MISUSE: 'tool-misuse',
  PROVIDER_OUTAGE: 'provider-outage',
  COST_RUNAWAY: 'cost-runaway',
  DELEGATION_LOOP: 'delegation-loop',
  EVIDENCE_FAILURE: 'evidence-failure',
  INABILITY_TO_CANCEL: 'inability-to-cancel'
});

export const AGENT_CONTAINMENT_ACTIONS = Object.freeze({
  SUSPEND_AGENT: 'suspend-agent',
  SUSPEND_VERSION: 'suspend-version',
  RESTRICT_AUTONOMY: 'restrict-autonomy',
  DISABLE_TOOL: 'disable-tool',
  DISABLE_PROVIDER: 'disable-provider',
  BLOCK_TENANT_SCOPE: 'block-tenant-scope',
  BLOCK_PROPERTY_SCOPE: 'block-property-scope',
  REVOKE_CREDENTIALS: 'revoke-credentials',
  CANCEL_EXECUTIONS: 'cancel-executions',
  REQUIRE_HUMAN_APPROVAL: 'require-human-approval'
});

export const CHANGE_OPERATION_FIELDS = Object.freeze({
  CHANGED_ARTIFACT: 'changed-artifact',
  RISK: 'risk',
  EVALUATION_IMPACT: 'evaluation-impact',
  TENANT_IMPACT: 'tenant-impact',
  PROPERTY_IMPACT: 'property-impact',
  OPERATIONAL_IMPACT: 'operational-impact',
  ROLLOUT: 'rollout',
  STOP_CONDITIONS: 'stop-conditions',
  ROLLBACK: 'rollback',
  EVIDENCE: 'evidence',
  COMMUNICATION: 'communication'
});

export const ROLLBACK_SCOPES = Object.freeze({
  AGENT_VERSION: 'agent-version',
  PROMPT_PACKAGE: 'prompt-package',
  MODEL_ROUTING: 'model-routing',
  TOOL_VERSION: 'tool-version',
  POLICY: 'policy',
  CONFIGURATION: 'configuration',
  TENANT_ACTIVATION: 'tenant-activation',
  PROPERTY_ACTIVATION: 'property-activation'
});

export const CAPACITY_DIMENSIONS = Object.freeze({
  EXECUTION_VOLUME: 'execution-volume',
  CONCURRENT_STEPS: 'concurrent-steps',
  CONTEXT_RETRIEVAL: 'context-retrieval',
  MODEL_LIMITS: 'model-limits',
  PROVIDER_QUOTAS: 'provider-quotas',
  TOOL_LIMITS: 'tool-limits',
  WORKFLOW_LOAD: 'workflow-load',
  STATE_STORAGE: 'state-storage',
  EVALUATION_LOAD: 'evaluation-load',
  TENANT_GROWTH: 'tenant-growth',
  PROPERTY_GROWTH: 'property-growth',
  PEAK_EVENTS: 'peak-events'
});

export const PERFORMANCE_DIMENSIONS = Object.freeze({
  ADMISSION_LATENCY: 'admission-latency',
  SCHEDULING_LATENCY: 'scheduling-latency',
  CONTEXT_LATENCY: 'context-latency',
  MODEL_LATENCY: 'model-latency',
  TOOL_LATENCY: 'tool-latency',
  HUMAN_WAIT: 'human-wait',
  WORKFLOW_WAIT: 'workflow-wait',
  END_TO_END_COMPLETION: 'end-to-end-completion'
});

export const COST_ATTRIBUTION_DIMENSIONS = Object.freeze({
  AGENT: 'agent',
  VERSION: 'version',
  EXECUTION: 'execution',
  TENANT: 'tenant',
  PROPERTY: 'property',
  MODEL: 'model',
  PROVIDER: 'provider',
  TOOL: 'tool',
  EVALUATION: 'evaluation'
});

export const CONTINUITY_FAILURE_MODES = Object.freeze({
  RUNTIME_OUTAGE: 'runtime-outage',
  MODEL_OUTAGE: 'model-outage',
  PROVIDER_OUTAGE: 'provider-outage',
  TOOL_OUTAGE: 'tool-outage',
  KNOWLEDGE_OUTAGE: 'knowledge-outage',
  MEMORY_OUTAGE: 'memory-outage',
  WORKFLOW_OUTAGE: 'workflow-outage',
  REGIONAL_OUTAGE: 'regional-outage',
  EVIDENCE_OUTAGE: 'evidence-outage'
});

export const GRACEFUL_DEGRADATION_MODES = Object.freeze({
  READ_ONLY: 'read-only',
  RECOMMENDATION_ONLY: 'recommendation-only',
  HUMAN_APPROVAL_REQUIRED: 'human-approval-required',
  LIMITED_TOOLS: 'limited-tools',
  ALTERNATE_APPROVED_MODEL: 'alternate-approved-model',
  CACHED_KNOWLEDGE_WITHIN_FRESHNESS: 'cached-knowledge-within-freshness',
  MANUAL_PROPERTY_PROCEDURE: 'manual-property-procedure',
  SAFE_UNAVAILABILITY: 'safe-unavailability'
});

export const RECOVERY_REQUIREMENTS = Object.freeze({
  RESTORE_AUTHORITATIVE_STATE: 'restore-authoritative-state',
  RECONCILE_ACTIVE_ACTIONS: 'reconcile-active-actions',
  RESTORE_CHECKPOINTS: 'restore-checkpoints',
  REVALIDATE_AUTHORITY: 'revalidate-authority',
  REVALIDATE_DEPENDENCIES: 'revalidate-dependencies',
  RESUME_SAFELY: 'resume-safely',
  PRESERVE_TENANT_ISOLATION: 'preserve-tenant-isolation',
  VALIDATE_SERVICE_HEALTH: 'validate-service-health',
  INCREASE_MONITORING: 'increase-monitoring'
});

export const HUMAN_INTERVENTION_ACTIONS = Object.freeze({
  PAUSE: 'pause',
  RESUME: 'resume',
  CANCEL: 'cancel',
  TAKEOVER: 'takeover',
  CORRECT: 'correct',
  APPROVE: 'approve',
  RESTRICT: 'restrict',
  SUSPEND: 'suspend',
  RESTORE: 'restore',
  RETIRE: 'retire'
});

export const AGENT_RUNBOOK_TOPICS = Object.freeze({
  QUALITY_DEGRADATION: 'quality-degradation',
  PROVIDER_OUTAGE: 'provider-outage',
  TOOL_FAILURE: 'tool-failure',
  CONTEXT_FAILURE: 'context-failure',
  TENANT_ISOLATION_ALERT: 'tenant-isolation-alert',
  COST_ANOMALY: 'cost-anomaly',
  STUCK_EXECUTION: 'stuck-execution',
  FAILED_CANCELLATION: 'failed-cancellation',
  RECONCILIATION_BACKLOG: 'reconciliation-backlog',
  AGENT_SUSPENSION: 'agent-suspension',
  SECURE_RESTORATION: 'secure-restoration',
  ROLLBACK: 'rollback'
});

export const OPERATIONAL_EVIDENCE_PURPOSES = Object.freeze({
  SERVICE_REVIEW: 'service-review',
  INCIDENT_INVESTIGATION: 'incident-investigation',
  CHANGE_REVIEW: 'change-review',
  GOVERNANCE_REVIEW: 'governance-review',
  ASSURANCE: 'assurance',
  TENANT_REPORTING: 'tenant-reporting',
  PROPERTY_REPORTING: 'property-reporting',
  CONTINUOUS_IMPROVEMENT: 'continuous-improvement'
});

export const FEEDBACK_SOURCES = Object.freeze({
  USERS: 'users',
  TENANTS: 'tenants',
  PROPERTIES: 'properties',
  OPERATORS: 'operators',
  DEVELOPERS: 'developers',
  BUSINESS_OWNERS: 'business-owners',
  SECURITY: 'security',
  GOVERNANCE: 'governance',
  EVALUATORS: 'evaluators',
  INCIDENTS: 'incidents',
  SUPPORT: 'support',
  OUTCOME_ANALYTICS: 'outcome-analytics'
});

export const FEEDBACK_PROCESSING_STEPS = Object.freeze({
  ATTRIBUTABLE: 'attributable-where-appropriate',
  CLASSIFIED: 'classified',
  DEDUPLICATED: 'de-duplicated',
  PRIORITIZED_BY_IMPACT: 'prioritized-by-impact',
  LINKED_TO_AGENT_VERSION: 'linked-to-agent-and-version',
  PRIVACY_PROTECTED: 'privacy-protected',
  CONVERTED_TO_EVALUATION_OR_REMEDIATION: 'converted-into-evaluation-or-remediation',
  CLOSED_WITH_OUTCOME: 'closed-with-outcome'
});

export const OPERATIONAL_REVIEW_DIMENSIONS = Object.freeze({
  BUSINESS_VALUE: 'business-value',
  QUALITY: 'quality',
  SAFETY: 'safety',
  RELIABILITY: 'reliability',
  COST: 'cost',
  HUMAN_INTERVENTION: 'human-intervention',
  INCIDENTS: 'incidents',
  DRIFT: 'drift',
  EXCEPTIONS: 'exceptions',
  FINDINGS: 'findings',
  TENANT_ADOPTION: 'tenant-adoption',
  PROPERTY_ADOPTION: 'property-adoption',
  PROVIDER_RISK: 'provider-risk',
  RETIREMENT_NEED: 'retirement-need'
});

export const AGENT_OPERATIONS_QUALITY_ATTRIBUTES = Object.freeze({
  OPERABILITY: 'operability',
  MEASURABILITY: 'measurability',
  TRACEABILITY: 'traceability',
  RELIABILITY: 'reliability',
  SCALABILITY: 'scalability',
  ADAPTABILITY: 'adaptability',
  ACCOUNTABILITY: 'accountability'
});

export const AGENT_OPERATIONS_ARCHITECTURAL_RULES = Object.freeze({
  ASSIGN_OWNERS: 'assign-accountable-and-operational-owners',
  READINESS_BEFORE_ACTIVATION: 'define-operational-readiness-before-activation',
  BUSINESS_OUTCOMES_NOT_INFRASTRUCTURE: 'measure-business-outcomes-not-infrastructure-alone',
  CORRELATE_EVIDENCE: 'correlate-identities-executions-models-tools-workflows-and-business-results',
  PRESERVE_SCOPE_IN_TELEMETRY: 'preserve-tenant-and-property-scope-in-telemetry',
  PROTECT_LOG_CONTENT: 'keep-secrets-and-unnecessary-hidden-reasoning-out-of-logs',
  ACTIONABLE_HEALTH_STATES: 'use-actionable-health-states',
  SERVICE_QUALITY_COMMITMENTS: 'define-service-and-quality-commitments',
  LIFECYCLE_EVALUATION: 'evaluate-throughout-the-lifecycle',
  DETERMINISTIC_FOR_DETERMINISTIC: 'use-deterministic-tests-for-deterministic-requirements',
  NO_MODEL_ONLY_EVALUATION: 'avoid-relying-solely-on-model-based-evaluation',
  VERSIONED_EVALUATION_ASSETS: 'maintain-versioned-evaluation-datasets-and-scenarios',
  RISK_BASED_THRESHOLDS: 'apply-risk-based-release-thresholds',
  NO_AVERAGE_MASKING: 'prevent-averages-from-hiding-critical-failures',
  REGRESSION_AFTER_CHANGE: 'run-regression-evaluations-after-material-changes',
  CONTROLLED_ROLLOUT: 'use-controlled-rollout-with-explicit-stop-conditions',
  DRIFT_RESPONSE: 'detect-and-respond-to-drift',
  SCOPED_CONTAINMENT: 'support-rapid-scoped-containment',
  INCIDENTS_TO_REGRESSION: 'feed-incident-findings-into-regression-suites',
  PROVIDER_MODEL_CHANGE_PRODUCTION: 'treat-provider-and-model-changes-as-production-changes',
  ROLLBACK_RECONCILIATION: 'support-rollback-and-reconciliation',
  ATTRIBUTE_CAPACITY_COST: 'attribute-capacity-and-cost',
  COST_PER_OUTCOME: 'optimize-cost-per-successful-outcome',
  CONTINUITY_DEGRADATION: 'define-graceful-degradation-and-continuity',
  AUTHORIZED_HUMAN_INTERVENTION: 'support-authorized-human-intervention',
  GOVERNED_FEEDBACK: 'convert-feedback-through-governed-change',
  REVIEW_VALUE_RETIREMENT: 'review-continued-business-value-and-retirement-need'
});

export const AGENT_OPERATIONS_BOUNDARIES = Object.freeze({
  OBSERVABILITY_PRODUCT_SELECTION: 'observability-product-selection',
  EVALUATION_PRODUCT_SELECTION: 'evaluation-product-selection',
  MODEL_TRAINING: 'model-training',
  SERVICE_MANAGEMENT_PRODUCT_SELECTION: 'service-management-product-selection',
  OBSERVABILITY_REPLACEMENT: 'replace-arch-010-observability',
  ENTERPRISE_OPERATIONS_REPLACEMENT: 'replace-arch-011-enterprise-operations',
  GOVERNANCE_COMPLIANCE_REPLACEMENT: 'replace-arch-012-governance-and-compliance'
});
