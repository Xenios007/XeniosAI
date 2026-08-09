export const AI_AGENT_FRAMEWORK_OVERVIEW_ERROR_CODE = 'AI_AGENT_FRAMEWORK_OVERVIEW_INVALID';

export const AGENT_FRAMEWORK_OBJECTIVES = Object.freeze({
  EXPLICIT_IDENTITY_ACCOUNTABILITY: 'explicit-agent-identity-and-accountability',
  BOUNDED_AUTONOMY: 'bounded-and-reviewable-autonomy',
  RELIABLE_GOAL_EXECUTION: 'reliable-goal-directed-execution',
  DETERMINISTIC_AUTHORITY: 'deterministic-enforcement-of-authority',
  SAFE_TOOL_USE: 'safe-tool-and-business-action-use',
  REUSABLE_CAPABILITIES: 'reusable-agent-capabilities',
  HUMAN_AGENT_COLLABORATION: 'governed-human-agent-collaboration',
  MULTI_AGENT_COORDINATION: 'controlled-multi-agent-coordination',
  TENANT_PROPERTY_EXECUTION: 'tenant-aware-and-property-aware-execution',
  DURABLE_PROGRESS: 'durable-progress-where-required',
  OBSERVABLE_DECISIONS: 'observable-decisions-and-actions',
  REPEATABLE_EVALUATION: 'repeatable-evaluation',
  FAILURE_RECOVERY: 'graceful-failure-and-recovery',
  VENDOR_MODEL_NEUTRALITY: 'vendor-and-model-neutrality',
  SCALABLE_OPERATIONS: 'scalable-agent-operations',
  SUSTAINABLE_EVOLUTION: 'sustainable-framework-evolution'
});

export const AGENT_FRAMEWORK_PRINCIPLES = Object.freeze({
  FIRST_CLASS_IDENTITIES: 'agents-are-first-class-platform-identities',
  EXPLICIT_AUTHORITY: 'authority-is-explicit',
  BOUNDED_AUTONOMY: 'autonomy-is-bounded',
  DETERMINISTIC_BUSINESS_ACTIONS: 'business-actions-remain-deterministic',
  TRUTH_BEFORE_FLUENCY: 'truth-before-fluency',
  LEAST_PRIVILEGE: 'least-privilege-by-construction',
  HUMAN_ACCOUNTABILITY: 'human-accountability-remains-explicit',
  DELEGATION_NO_EXPANSION: 'delegation-does-not-expand-authority',
  MATERIAL_ACTION_ATTRIBUTION: 'every-material-action-is-attributable',
  FAILURE_EXPECTED: 'failure-is-an-expected-state',
  REPLACEABLE_MODELS_PROVIDERS: 'models-and-providers-are-replaceable'
});

export const NON_AGENT_CAPABILITIES = Object.freeze({
  MODEL: 'model',
  PROMPT: 'prompt',
  CONVERSATION: 'conversation',
  TOOL: 'tool',
  BUSINESS_SERVICE: 'business-service',
  WORKFLOW_DEFINITION: 'workflow-definition',
  SCHEDULED_JOB: 'scheduled-job',
  SEARCH_INDEX: 'search-index',
  MEMORY_RECORD: 'memory-record',
  RULES_ENGINE: 'rules-engine',
  USER_INTERFACE: 'user-interface'
});

export const AGENT_USE_CRITERIA = Object.freeze({
  AMBIGUOUS_INTENT: 'interpretation-of-ambiguous-human-intent',
  CONTEXT_SENSITIVE_GOAL: 'context-sensitive-goal-pursuit',
  DYNAMIC_CAPABILITY_SELECTION: 'dynamic-selection-among-approved-capabilities',
  PLANNING_INCOMPLETE_INFORMATION: 'planning-under-incomplete-information',
  ITERATIVE_ADJUSTMENT: 'iterative-observation-and-adjustment',
  EXPLANATION_CLARIFICATION: 'explanation-and-clarification',
  SPECIALIZED_COORDINATION: 'coordination-of-specialized-reasoning-roles',
  HUMAN_AGENT_COLLABORATION: 'human-agent-collaboration',
  UNSTRUCTURED_EVALUATION: 'evaluation-of-unstructured-information'
});

export const AGENT_INAPPROPRIATE_CRITERIA = Object.freeze({
  COMPLETE_DETERMINISTIC_RULES: 'rules-are-complete-and-deterministic',
  STABLE_FULLY_SPECIFIED_PROCESS: 'process-is-stable-and-fully-specified',
  IDENTICAL_STEP_EXECUTION: 'every-step-must-execute-identically',
  SIMPLE_API_SUFFICIENT: 'simple-api-call-is-sufficient',
  DURABLE_WORKFLOW_EXISTS: 'durable-workflow-already-models-the-process',
  PROBABILISTIC_NOT_TOLERATED: 'action-cannot-tolerate-probabilistic-interpretation',
  AUTHORITY_NOT_BOUNDABLE: 'required-authority-cannot-be-safely-bounded'
});

export const AGENT_FRAMEWORK_LAYERS = Object.freeze({
  EXPERIENCE_INITIATION: 'experience-and-initiation-layer',
  AGENT_CONTROL: 'agent-control-layer',
  AGENT_RUNTIME: 'agent-runtime-layer',
  INTELLIGENCE_CONTEXT: 'intelligence-and-context-layer',
  CAPABILITY_ACTION: 'capability-and-action-layer',
  COORDINATION_HUMAN: 'coordination-and-human-layer',
  ASSURANCE_OPERATIONS: 'assurance-and-operations-layer'
});

export const AGENT_FRAMEWORK_CAPABILITIES = Object.freeze({
  AGENT_REGISTRY: 'agent-registry',
  IDENTITY_SERVICE: 'identity-service',
  POLICY_AUTHORITY: 'policy-and-authority',
  RUNTIME_MANAGER: 'runtime-manager',
  GOAL_TASK_MANAGER: 'goal-and-task-manager',
  PLANNER: 'planner',
  CONTEXT_SERVICE: 'context-service',
  TOOL_GATEWAY: 'tool-gateway',
  COORDINATION_SERVICE: 'coordination-service',
  HUMAN_INTERACTION: 'human-interaction',
  STATE_CHECKPOINT_SERVICE: 'state-and-checkpoint-service',
  EVALUATION_SERVICE: 'evaluation-service',
  OBSERVABILITY_SERVICE: 'observability-service',
  OPERATIONS_CONTROL: 'operations-control'
});

export const AGENT_DEFINITION_FIELDS = Object.freeze({
  STABLE_IDENTIFIER: 'stable-agent-identifier',
  NAME_DESCRIPTION: 'name-and-description',
  PURPOSE: 'purpose',
  DOMAIN: 'domain',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  INTENDED_INITIATORS: 'intended-initiators',
  SUPPORTED_GOALS: 'supported-goals',
  PROHIBITED_GOALS: 'prohibited-goals',
  CLASSIFICATION: 'classification',
  RISK_LEVEL: 'risk-level',
  AUTONOMY_LEVEL: 'autonomy-level',
  TENANT_PROPERTY_MODEL: 'tenant-and-property-model',
  REASONING_REQUIREMENTS: 'reasoning-requirements',
  MODEL_SELECTION_POLICY: 'model-selection-policy',
  TOOL_PERMISSIONS: 'tool-permissions',
  DATA_PERMISSIONS: 'data-permissions',
  KNOWLEDGE_SOURCES: 'knowledge-sources',
  MEMORY_POLICY: 'memory-policy',
  DELEGATION_RULES: 'delegation-rules',
  HUMAN_DECISION_POINTS: 'human-decision-points',
  LIMITS_BUDGETS: 'limits-and-budgets',
  COMPLETION_CONDITIONS: 'completion-conditions',
  STOP_CONDITIONS: 'stop-conditions',
  EVALUATION_REQUIREMENTS: 'evaluation-requirements',
  EVIDENCE_REQUIREMENTS: 'evidence-requirements',
  SERVICE_COMMITMENTS: 'service-commitments',
  DEPENDENCIES: 'dependencies',
  VERSION: 'version',
  LIFECYCLE_STATE: 'lifecycle-state'
});

export const AGENT_CONCEPT_IDENTITIES = Object.freeze({
  DEFINITION: 'agent-definition',
  INSTANCE: 'agent-instance',
  EXECUTION: 'agent-execution',
  STEP: 'agent-step',
  TASK: 'agent-task',
  SESSION: 'agent-session'
});

export const AGENT_PURPOSE_CLASSIFICATIONS = Object.freeze({
  INFORMATIONAL: 'informational',
  ADVISORY: 'advisory',
  ANALYTICAL: 'analytical',
  TRANSACTIONAL: 'transactional',
  OPERATIONAL: 'operational',
  DEVELOPMENT: 'development',
  GOVERNANCE: 'governance',
  COORDINATION: 'coordination'
});

export const AGENT_DURATION_CLASSIFICATIONS = Object.freeze({
  REQUEST_SCOPED: 'request-scoped',
  SESSION_SCOPED: 'session-scoped',
  TASK_SCOPED: 'task-scoped',
  LONG_RUNNING: 'long-running',
  EVENT_DRIVEN: 'event-driven',
  SCHEDULED: 'scheduled'
});

export const AGENT_INTERACTION_CLASSIFICATIONS = Object.freeze({
  USER_FACING: 'user-facing',
  SERVICE_FACING: 'service-facing',
  AGENT_FACING: 'agent-facing',
  HUMAN_SUPERVISED: 'human-supervised',
  BACKGROUND: 'background'
});

export const AGENT_IMPACT_CLASSIFICATIONS = Object.freeze({
  NO_STATE_CHANGE: 'no-state-change',
  PROPOSED_STATE_CHANGE: 'proposed-state-change',
  REVERSIBLE_STATE_CHANGE: 'reversible-state-change',
  MATERIAL_STATE_CHANGE: 'material-state-change',
  CROSS_SYSTEM_COORDINATION: 'cross-system-coordination'
});

export const AGENT_AUTONOMY_LEVELS = Object.freeze({
  A0_INFORM: 'a0-inform',
  A1_RECOMMEND: 'a1-recommend',
  A2_PREPARE: 'a2-prepare',
  A3_EXECUTE_BOUNDED: 'a3-execute-bounded',
  A4_COORDINATE_BOUNDED: 'a4-coordinate-bounded'
});

export const AGENT_LIFECYCLE_STAGES = Object.freeze({
  PROPOSE: 'propose',
  DESIGN_CLASSIFY: 'design-and-classify',
  IMPLEMENT_EVALUATE: 'implement-and-evaluate',
  APPROVE_REGISTER: 'approve-and-register',
  RELEASE_ACTIVATE: 'release-and-activate',
  OPERATE_IMPROVE: 'operate-and-improve',
  SUSPEND_DEPRECATE_RETIRE: 'suspend-deprecate-and-retire'
});

export const AGENT_EXECUTION_STATES = Object.freeze({
  REQUESTED: 'requested',
  ADMITTED: 'admitted',
  INITIALIZED: 'initialized',
  RUNNING: 'running',
  COMPLETED: 'completed',
  WAITING_FOR_INPUT: 'waiting-for-input',
  WAITING_FOR_APPROVAL: 'waiting-for-approval',
  WAITING_FOR_DEPENDENCY: 'waiting-for-dependency',
  PAUSED: 'paused',
  SUSPENDED: 'suspended',
  CANCELLING: 'cancelling',
  CANCELLED: 'cancelled',
  COMPENSATING: 'compensating',
  FAILED: 'failed',
  ESCALATED: 'escalated',
  EXPIRED: 'expired'
});

export const AGENT_EXECUTION_LOOP_STEPS = Object.freeze({
  OBSERVE: 'observe-current-goal-state-context-and-operating-conditions',
  ORIENT: 'orient-using-authorized-knowledge-memory-policy-and-prior-results',
  SELECT_TASK: 'select-or-revise-the-next-bounded-task',
  VALIDATE_AUTHORITY: 'validate-authority-and-limits',
  ACT: 'act-through-an-approved-capability',
  VALIDATE_RESULT: 'validate-the-result',
  RECORD_PROGRESS: 'record-evidence-and-update-progress',
  DECIDE_NEXT: 'continue-replan-ask-complete-pause-escalate-or-stop'
});

export const AGENT_GOAL_FIELDS = Object.freeze({
  GOAL_IDENTIFIER: 'goal-identifier',
  INITIATING_ACTOR: 'initiating-actor',
  DESIRED_OUTCOME: 'desired-outcome',
  BUSINESS_CONTEXT: 'business-context',
  TENANT_PROPERTY: 'tenant-and-property',
  CONSTRAINTS: 'constraints',
  COMPLETION_CRITERIA: 'completion-criteria',
  PROHIBITED_OUTCOMES: 'prohibited-outcomes',
  VALIDITY_PERIOD: 'validity-period',
  PRIORITY: 'priority',
  RISK: 'risk',
  AUTHORITY_SOURCE: 'authority-source',
  REQUIRED_EVIDENCE: 'required-evidence'
});

export const TOOL_BOUNDARY_REQUIREMENTS = Object.freeze({
  IDENTITY: 'identity',
  AUTHORIZATION: 'authorization',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  INPUT_SCHEMA: 'input-schema',
  DATA_CLASSIFICATION: 'data-classification',
  APPROVAL: 'approval',
  RATE_COST_LIMITS: 'rate-and-cost-limits',
  IDEMPOTENCY: 'idempotency',
  TIMEOUT: 'timeout',
  CANCELLATION: 'cancellation',
  OUTPUT_SCHEMA: 'output-schema',
  ERROR_CLASSIFICATION: 'error-classification',
  EVIDENCE: 'evidence',
  OBSERVABILITY: 'observability'
});

export const HUMAN_PARTICIPATION_ROLES = Object.freeze({
  INITIATORS: 'initiators',
  GOAL_OWNERS: 'goal-owners',
  APPROVERS: 'approvers',
  SUPERVISORS: 'supervisors',
  SUBJECT_MATTER_EXPERTS: 'subject-matter-experts',
  EXCEPTION_AUTHORITIES: 'exception-authorities',
  REVIEWERS: 'reviewers',
  OPERATORS: 'operators',
  OUTCOME_OWNERS: 'outcome-owners'
});

export const DELEGATION_CONTRACT_FIELDS = Object.freeze({
  PARENT_EXECUTION: 'parent-execution',
  DELEGATING_AGENT: 'delegating-agent',
  DELEGATE: 'delegate',
  ASSIGNED_TASK: 'assigned-task',
  EXPECTED_RESULT: 'expected-result',
  AUTHORITY: 'authority',
  CONTEXT: 'context',
  TENANT_PROPERTY: 'tenant-and-property',
  TOOLS: 'tools',
  DATA_SCOPE: 'data-scope',
  LIMITS: 'limits',
  DEADLINE: 'deadline',
  RETURN_CONTRACT: 'return-contract',
  CANCELLATION_BEHAVIOR: 'cancellation-behavior',
  EVIDENCE: 'evidence'
});

export const CONTEXT_REQUIREMENTS = Object.freeze({
  AUTHORIZED: 'authorized',
  PURPOSE_LIMITED: 'purpose-limited',
  MINIMAL: 'minimal',
  CURRENT: 'current',
  SOURCE_ATTRIBUTABLE: 'source-attributable',
  CLASSIFIED: 'classified',
  TENANT_SCOPED: 'tenant-scoped',
  PROPERTY_SCOPED: 'property-scoped',
  VERSION_AWARE: 'version-aware'
});

export const QUALITY_ATTRIBUTES = Object.freeze({
  RELIABILITY: 'reliability',
  SECURITY: 'security',
  SAFETY: 'safety',
  EXPLAINABILITY: 'explainability',
  AUDITABILITY: 'auditability',
  SCALABILITY: 'scalability',
  RESILIENCE: 'resilience',
  INTEROPERABILITY: 'interoperability',
  PORTABILITY: 'portability',
  MAINTAINABILITY: 'maintainability',
  TESTABILITY: 'testability',
  OPERABILITY: 'operability'
});

export const AGENT_FRAMEWORK_ARCHITECTURAL_RULES = Object.freeze({
  FIRST_CLASS_IDENTITIES: 'treat-agents-as-first-class-platform-identities',
  ACCOUNTABLE_OWNERSHIP: 'require-accountable-ownership',
  VERSION_DEFINITIONS: 'version-agent-definitions',
  SCOPE_BEFORE_ACCESS: 'establish-tenant-and-property-scope-before-scoped-access',
  AUTHORITY_BEFORE_CAPABILITY: 'establish-authority-before-making-a-capability-available',
  EXPLICIT_AUTONOMY: 'represent-autonomy-explicitly',
  PLANS_WITHIN_GOALS: 'keep-plans-within-authorized-goals',
  GOVERNED_TOOLS: 'use-governed-tools-and-service-contracts',
  BUSINESS_RULES_IN_SERVICES: 'preserve-deterministic-business-rules-in-business-services',
  WORKFLOW_FOR_DURABLE_PROCESS: 'use-the-workflow-engine-for-durable-deterministic-processes',
  STATE_OUTSIDE_MODEL_CONTEXT: 'keep-authoritative-execution-state-outside-model-context',
  VALIDATE_STEPS: 'validate-material-step-results',
  BOUND_LIMITS: 'bound-retries-delegation-time-cost-and-step-count',
  HUMAN_CONTROLS: 'support-human-clarification-approval-intervention-and-cancellation',
  ATTRIBUTABLE_EVIDENCE: 'produce-attributable-evidence',
  EVALUATE_AGENTS: 'evaluate-agents-before-release-and-during-operation',
  SUSPENSION_STOP_CONTROLS: 'provide-suspension-and-emergency-stop-controls',
  TENANT_ISOLATION: 'preserve-tenant-isolation-in-state-context-tools-memory-telemetry-and-evidence',
  TRUST_CLASSIFICATION: 'treat-external-and-retrieved-content-according-to-trust-level',
  VENDOR_MODEL_NEUTRAL: 'remain-vendor-and-model-neutral'
});

export const ARCHITECTURE_BOUNDARIES = Object.freeze({
  DETAILED_IDENTITY_LIFECYCLE: 'detailed-identity-lifecycle-mechanics',
  DETAILED_RUNTIME_STATE_MACHINES: 'detailed-runtime-state-machines',
  PLANNING_ALGORITHMS: 'planning-algorithms',
  INDIVIDUAL_TOOL_CONTRACTS: 'individual-tool-contracts',
  MULTI_AGENT_PROTOCOLS: 'multi-agent-protocols-in-detail',
  KNOWLEDGE_MEMORY_INTERNALS: 'knowledge-and-memory-internals',
  DETAILED_SECURITY_CONTROLS: 'detailed-security-controls',
  EVALUATION_SUITES: 'evaluation-suites',
  MODELS_PROVIDERS: 'models-or-providers',
  AGENT_FRAMEWORK_PRODUCT: 'agent-framework-product',
  BUSINESS_SERVICE_REPLACEMENT: 'business-services',
  WORKFLOW_ENGINE_REPLACEMENT: 'workflow-engine',
  HUMAN_ACCOUNTABILITY_REPLACEMENT: 'human-accountability'
});

export const FUTURE_AGENT_FRAMEWORK_CAPABILITIES = Object.freeze({
  ADAPTIVE_MODEL_ROUTING: 'adaptive-model-routing',
  POLICY_AWARE_DYNAMIC_AUTONOMY: 'policy-aware-dynamic-autonomy',
  FORMAL_DELEGATION_CONTRACTS: 'formal-delegation-contracts',
  AGENT_CAPABILITY_MARKETPLACES: 'agent-capability-marketplaces',
  CROSS_AGENT_REPUTATION: 'cross-agent-reputation-signals',
  CONTINUOUS_SIMULATION: 'continuous-simulation',
  AUTOMATED_RED_TEAMING: 'automated-red-teaming',
  DIGITAL_TWIN_ENVIRONMENTS: 'digital-twin-environments',
  PREDICTIVE_INTERVENTION: 'predictive-intervention',
  SELF_OPTIMIZING_EXECUTION: 'self-optimizing-execution',
  VERIFIED_PLANNING: 'verified-planning',
  PRIVACY_PRESERVING_COLLABORATION: 'privacy-preserving-collaboration',
  CROSS_PROPERTY_OPERATIONAL_AGENTS: 'cross-property-operational-agents',
  GOVERNED_AUTONOMOUS_MAINTENANCE: 'governed-autonomous-maintenance'
});
