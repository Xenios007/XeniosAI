export const AGENT_REASONING_PLANNING_ERROR_CODE = 'AGENT_REASONING_PLANNING_INVALID';

export const REASONING_RESPONSIBILITIES = Object.freeze({
  INTERPRET_GOALS: 'interpret-natural-language-goals',
  IDENTIFY_ENTITIES: 'identify-entities-and-constraints',
  RECOGNIZE_MISSING_CONFLICTING: 'recognize-missing-or-conflicting-information',
  FORM_HYPOTHESES: 'form-bounded-hypotheses',
  RETRIEVE_KNOWLEDGE: 'retrieve-relevant-knowledge',
  USE_APPROVED_MEMORY: 'use-approved-memory',
  GENERATE_PLANS: 'generate-candidate-plans',
  DECOMPOSE_WORK: 'decompose-work',
  COMPARE_OPTIONS: 'compare-options',
  RECOMMEND_NEXT_TASK: 'recommend-next-task',
  INTERPRET_TOOL_RESULTS: 'interpret-tool-results',
  EXPLAIN_OUTCOMES: 'explain-outcomes',
  EXPRESS_UNCERTAINTY: 'express-uncertainty',
  RECOMMEND_ESCALATION: 'recommend-escalation'
});

export const REASONING_INPUTS = Object.freeze({
  AUTHORIZED_GOAL: 'authorized-goal',
  GOAL_CONSTRAINTS: 'goal-constraints',
  COMPLETION_CRITERIA: 'completion-criteria',
  AGENT_DEFINITION: 'agent-definition',
  CURRENT_PLAN: 'current-plan',
  ELIGIBLE_TASKS: 'eligible-tasks',
  EXECUTION_STATE_SUMMARY: 'execution-state-summary',
  TENANT_PROPERTY_CONTEXT: 'tenant-and-property-context',
  USER_INFORMATION: 'user-provided-information',
  AUTHORITATIVE_KNOWLEDGE: 'authoritative-knowledge',
  APPROVED_MEMORY: 'approved-memory',
  TOOL_CONTRACTS: 'tool-contracts',
  PRIOR_TOOL_RESULTS: 'prior-tool-results',
  POLICY_DECISIONS: 'policy-decisions',
  HUMAN_DECISIONS: 'human-decisions',
  LIMITS_REMAINING: 'limits-remaining',
  OPERATIONAL_CONDITIONS: 'operational-conditions',
  TRUST_PROVENANCE_LABELS: 'trust-and-provenance-labels'
});

export const REASONING_OUTPUT_TYPES = Object.freeze({
  INTERPRETED_GOAL: 'interpreted-goal',
  CLARIFICATION_REQUEST: 'clarification-request',
  CANDIDATE_PLAN: 'candidate-plan',
  PLAN_REVISION: 'plan-revision',
  CANDIDATE_TASK: 'candidate-task',
  TOOL_RECOMMENDATION: 'tool-recommendation',
  DELEGATION_RECOMMENDATION: 'delegation-recommendation',
  RESULT_INTERPRETATION: 'result-interpretation',
  COMPLETION_RECOMMENDATION: 'completion-recommendation',
  ESCALATION_RECOMMENDATION: 'escalation-recommendation',
  STOP_RECOMMENDATION: 'stop-recommendation',
  USER_EXPLANATION: 'user-facing-explanation'
});

export const REASONING_OUTPUT_FIELDS = Object.freeze({
  OUTPUT_TYPE: 'output-type',
  RELATED_GOAL: 'related-goal',
  RELATED_PLAN_TASK: 'related-plan-and-task',
  ASSUMPTIONS: 'assumptions',
  SOURCES: 'sources',
  UNCERTAINTY: 'uncertainty',
  REQUIRED_VALIDATION: 'required-validation',
  PROPOSED_NEXT_STATE: 'proposed-next-state'
});

export const STRUCTURED_REASONING_FIELDS = Object.freeze({
  INTENT: 'intent',
  ENTITIES: 'entities',
  CONSTRAINTS: 'constraints',
  CANDIDATE_ACTIONS: 'candidate-actions',
  SELECTED_ACTION: 'selected-action',
  REQUIRED_TOOL: 'required-tool',
  EXPECTED_RESULT: 'expected-result',
  RISKS: 'risks',
  ASSUMPTIONS: 'assumptions',
  CONFIDENCE_CATEGORY: 'confidence-category',
  HUMAN_DECISION_REQUIREMENT: 'human-decision-requirement',
  STOP_CONDITION: 'stop-condition'
});

export const GOAL_INTERPRETATION_FIELDS = Object.freeze({
  DESIRED_OUTCOME: 'desired-outcome',
  INITIATING_ACTOR: 'initiating-actor',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  TENANT: 'tenant',
  PROPERTY: 'property',
  DOMAIN: 'domain',
  RELEVANT_ENTITIES: 'relevant-entities',
  TIME_HORIZON: 'time-horizon',
  CONSTRAINTS: 'constraints',
  COMPLETION_CRITERIA: 'completion-criteria',
  PROHIBITED_OUTCOMES: 'prohibited-outcomes',
  REQUESTED_AUTONOMY: 'requested-autonomy',
  REQUIRED_HUMAN_PARTICIPATION: 'required-human-participation'
});

export const AMBIGUITY_CATEGORIES = Object.freeze({
  PERSON: 'person',
  TENANT: 'tenant',
  PROPERTY: 'property',
  DATE: 'date',
  QUANTITY: 'quantity',
  BUSINESS_OBJECT: 'business-object',
  DESIRED_OUTCOME: 'desired-outcome',
  PRIORITY: 'priority',
  APPROVAL: 'approval',
  SCOPE: 'scope',
  ACTION: 'action'
});

export const MISSING_INFORMATION_CLASSES = Object.freeze({
  OPTIONAL: 'optional',
  DERIVABLE: 'derivable-from-authoritative-sources',
  REQUIRED_FOR_PLANNING: 'required-for-planning',
  REQUIRED_FOR_AUTHORIZATION: 'required-for-authorization',
  REQUIRED_FOR_ACTION: 'required-for-action',
  REQUIRED_FOR_COMPLETION: 'required-for-completion'
});

export const CONFLICT_RESOLUTION_FACTORS = Object.freeze({
  SOURCE_AUTHORITY: 'source-authority',
  SOURCE_FRESHNESS: 'source-freshness',
  SOURCE_PROVENANCE: 'source-provenance',
  TENANT_SCOPE: 'tenant-scope',
  PROPERTY_SCOPE: 'property-scope',
  POLICY: 'policy',
  HUMAN_DECISIONS: 'human-decisions',
  BUSINESS_SERVICE_STATE: 'business-service-state'
});

export const REASONING_MODES = Object.freeze({
  CLASSIFICATION: 'classification',
  EXTRACTION: 'extraction',
  RETRIEVAL_GROUNDED: 'retrieval-grounded-reasoning',
  ANALYTICAL: 'analytical-reasoning',
  PLANNING: 'planning',
  REFLECTIVE_VALIDATION: 'reflective-validation',
  SYNTHESIS: 'synthesis',
  CONVERSATIONAL: 'conversational-reasoning'
});

export const REASONING_STRATEGY_FIELDS = Object.freeze({
  REQUIRED_MODES: 'required-reasoning-modes',
  REQUIRED_SOURCES: 'required-sources',
  REQUIRED_TOOLS: 'required-tools',
  REQUIRED_VALIDATIONS: 'required-validations',
  PLANNING_DEPTH: 'planning-depth',
  HUMAN_DECISION_POINTS: 'human-decision-points',
  ESCALATION_RULES: 'escalation-rules',
  STOP_CONDITIONS: 'stop-conditions',
  MODEL_CAPABILITY_REQUIREMENTS: 'model-capability-requirements',
  COST_LATENCY_CONSTRAINTS: 'cost-and-latency-constraints'
});

export const PLAN_FIELDS = Object.freeze({
  PLAN_IDENTIFIER: 'plan-identifier',
  VERSION: 'version',
  EXECUTION: 'execution',
  GOAL_REFERENCE: 'goal-reference',
  OBJECTIVE: 'objective',
  ASSUMPTIONS: 'assumptions',
  CONSTRAINTS: 'constraints',
  TASKS: 'tasks',
  DEPENDENCIES: 'dependencies',
  SEQUENCE: 'sequence',
  PARALLELIZATION: 'parallelization',
  DECISION_POINTS: 'decision-points',
  HUMAN_TASKS: 'human-tasks',
  TOOLS: 'tools',
  DELEGATIONS: 'delegations',
  VALIDATIONS: 'validations',
  CHECKPOINTS: 'checkpoints',
  FAILURE_PATHS: 'failure-paths',
  STOP_CONDITIONS: 'stop-conditions',
  COMPLETION_CRITERIA: 'completion-criteria',
  ESTIMATED_LIMITS: 'estimated-limits',
  CREATION_TIME: 'creation-time',
  SUPERSESSION_RELATIONSHIP: 'supersession-relationship'
});

export const PLAN_STATES = Object.freeze({
  PROPOSED: 'proposed',
  VALIDATING: 'validating',
  AWAITING_APPROVAL: 'awaiting-approval',
  ACTIVE: 'active',
  PAUSED: 'paused',
  SUPERSEDED: 'superseded',
  COMPLETED: 'completed',
  REJECTED: 'rejected',
  INVALIDATED: 'invalidated'
});

export const PLAN_CREATION_STEPS = Object.freeze({
  LOAD_GOAL: 'load-authorized-goal',
  LOAD_CONSTRAINTS_LIMITS: 'load-current-constraints-and-limits',
  IDENTIFY_OUTCOMES: 'identify-required-outcomes',
  IDENTIFY_MISSING_INFO: 'identify-missing-information',
  IDENTIFY_SERVICES_WORKFLOWS: 'identify-deterministic-services-and-workflows',
  IDENTIFY_TASKS: 'identify-candidate-tasks',
  ESTABLISH_DEPENDENCIES: 'establish-dependencies',
  IDENTIFY_HUMAN_DECISIONS: 'identify-human-decisions',
  IDENTIFY_VALIDATIONS: 'identify-validations',
  ESTIMATE_RESOURCES: 'estimate-resource-use',
  IDENTIFY_FAILURE_STOP: 'identify-failure-and-stop-conditions',
  PRODUCE_PLAN: 'produce-candidate-structured-plan',
  SUBMIT_VALIDATION: 'submit-plan-for-deterministic-validation'
});

export const TASK_DEPENDENCY_TYPES = Object.freeze({
  DATA: 'data-dependency',
  KNOWLEDGE: 'knowledge-dependency',
  AUTHORITY: 'authority-dependency',
  APPROVAL: 'approval-dependency',
  TOOL_RESULT: 'tool-result-dependency',
  BUSINESS_STATE: 'business-state-dependency',
  TEMPORAL: 'temporal-dependency',
  WORKFLOW: 'workflow-dependency',
  HUMAN_INPUT: 'human-input-dependency'
});

export const PLAN_CONSTRAINTS = Object.freeze({
  GOAL_SCOPE: 'goal-scope',
  IDENTITY: 'identity',
  TENANT: 'tenant',
  PROPERTY: 'property',
  AUTHORITY: 'authority',
  AUTONOMY_LEVEL: 'autonomy-level',
  DATA_RESTRICTIONS: 'data-restrictions',
  TOOL_RESTRICTIONS: 'tool-restrictions',
  TIME_LIMITS: 'time-limits',
  COST_LIMITS: 'cost-limits',
  STEP_LIMITS: 'step-limits',
  DELEGATION_LIMITS: 'delegation-limits',
  HUMAN_DECISION_REQUIREMENTS: 'human-decision-requirements',
  POLICY: 'policy',
  STOP_CONDITIONS: 'stop-conditions'
});

export const AUTHORITY_AWARE_TASK_FIELDS = Object.freeze({
  REQUIRED_DATA_ACCESS: 'required-data-access',
  REQUIRED_TOOL: 'required-tool',
  REQUIRED_ACTION: 'required-action',
  REQUIRED_TENANT_SCOPE: 'required-tenant-scope',
  REQUIRED_PROPERTY_SCOPE: 'required-property-scope',
  REQUIRED_APPROVAL: 'required-approval',
  REQUIRED_DELEGATION_RIGHT: 'required-delegation-right'
});

export const CAPABILITY_CATALOG_FIELDS = Object.freeze({
  PURPOSE: 'purpose',
  INPUTS: 'inputs',
  OUTPUTS: 'outputs',
  PRECONDITIONS: 'preconditions',
  SIDE_EFFECTS: 'side-effects',
  AUTHORITY_REQUIREMENTS: 'authority-requirements',
  TENANT_BEHAVIOR: 'tenant-behavior',
  PROPERTY_BEHAVIOR: 'property-behavior',
  COST: 'cost',
  LATENCY: 'latency',
  RELIABILITY: 'reliability',
  ERROR_MODEL: 'error-model',
  VERSION: 'version'
});

export const PLAN_SELECTION_FACTORS = Object.freeze({
  GOAL_FIT: 'goal-fit',
  AUTHORITY_FEASIBILITY: 'authority-feasibility',
  POLICY_COMPLIANCE: 'policy-compliance',
  BUSINESS_SERVICE_OWNERSHIP: 'business-service-ownership',
  RISK: 'risk',
  REVERSIBILITY: 'reversibility',
  EVIDENCE_QUALITY: 'evidence-quality',
  COMPLETION_VERIFIABILITY: 'completion-verifiability',
  RESOURCE_USE: 'resource-use',
  LATENCY: 'latency',
  OPERATIONAL_CONDITIONS: 'operational-conditions',
  HUMAN_PREFERENCE: 'human-preference'
});

export const PLAN_VALIDATION_CHECKS = Object.freeze({
  GOAL_ALIGNMENT: 'goal-alignment',
  SUPPORTED_TASKS: 'supported-tasks',
  PROHIBITED_TASKS: 'prohibited-tasks',
  TENANT_SCOPE: 'tenant-scope',
  PROPERTY_SCOPE: 'property-scope',
  AUTHORITY_REQUIREMENTS: 'authority-requirements',
  POLICY: 'policy',
  TOOL_AVAILABILITY: 'tool-availability',
  DATA_ACCESS: 'data-access',
  DEPENDENCIES: 'dependencies',
  HUMAN_DECISIONS: 'human-decisions',
  LIMITS: 'limits',
  FAILURE_PATHS: 'failure-paths',
  STOP_CONDITIONS: 'stop-conditions',
  COMPLETION_CRITERIA: 'completion-criteria',
  CIRCULAR_DEPENDENCIES: 'circular-dependencies',
  UNBOUNDED_LOOPS: 'unbounded-loops'
});

export const PLAN_APPROVAL_BINDINGS = Object.freeze({
  PLAN_IDENTIFIER: 'plan-identifier',
  PLAN_VERSION: 'plan-version',
  GOAL: 'goal',
  SCOPE: 'scope',
  ACTIONS: 'actions',
  LIMITS: 'limits',
  VALIDITY_PERIOD: 'validity-period'
});

export const PLAN_VERSION_RECORD_FIELDS = Object.freeze({
  PREVIOUS_VERSION: 'previous-version',
  REVISION_TRIGGER: 'revision-trigger',
  CHANGED_TASKS: 'changed-tasks',
  CHANGED_DEPENDENCIES: 'changed-dependencies',
  CHANGED_ASSUMPTIONS: 'changed-assumptions',
  CHANGED_ESTIMATES: 'changed-estimates',
  CHANGED_RISKS: 'changed-risks',
  CHANGED_HUMAN_DECISIONS: 'changed-human-decisions',
  CHANGED_COMPLETION_PATH: 'changed-completion-path',
  VALIDATION_RESULT: 'validation-result',
  APPROVAL_STATUS: 'approval-status',
  EFFECTIVE_TIME: 'effective-time'
});

export const REPLANNING_TRIGGERS = Object.freeze({
  NEW_INFORMATION: 'new-information-arrives',
  ASSUMPTION_DISPROVED: 'assumption-is-disproved',
  TOOL_FAILURE: 'tool-fails',
  DEPENDENCY_CHANGE: 'dependency-changes',
  TASK_FAILURE: 'task-fails',
  HUMAN_DECISION_CHANGE: 'human-changes-decision',
  POLICY_CHANGE: 'policy-changes',
  AUTHORITY_CHANGE: 'authority-changes',
  LIMITS_EXHAUSTION: 'limits-approach-exhaustion',
  TENANT_PROPERTY_CHANGE: 'tenant-or-property-conditions-change',
  BETTER_AUTHORIZED_PATH: 'better-authorized-path-becomes-available',
  COMPLETION_CRITERIA_CHANGE: 'completion-criteria-change-through-explicit-authority'
});

export const REPLANNING_RULES = Object.freeze({
  PRESERVE_GOAL: 'preserve-authorized-goal',
  LOAD_STATE: 'load-current-authoritative-state',
  PRESERVE_EVIDENCE: 'preserve-completed-task-evidence',
  RECONCILE_SIDE_EFFECTS: 'reconcile-material-side-effects',
  REVALIDATE_AUTHORITY: 'revalidate-authority',
  REVALIDATE_POLICY: 'revalidate-policy',
  RECALCULATE_LIMITS: 'recalculate-remaining-limits',
  IDENTIFY_INVALID_ASSUMPTIONS: 'identify-invalid-assumptions',
  PRODUCE_NEW_VERSION: 'produce-new-candidate-version',
  OBTAIN_VALIDATION_APPROVAL: 'obtain-required-validation-and-approval',
  SUPERSEDE_PRIOR_PLAN: 'supersede-prior-plan-explicitly'
});

export const PLAN_DRIFT_INDICATORS = Object.freeze({
  UNPLANNED_TOOL_USE: 'unplanned-tool-use',
  NEW_TASK_CATEGORIES: 'new-task-categories',
  EXPANDED_DATA_ACCESS: 'expanded-data-access',
  NEW_TENANT_PROPERTY_SCOPE: 'new-tenant-or-property-scope',
  REPEATED_AD_HOC_STEPS: 'repeated-ad-hoc-steps',
  UNRECORDED_DELEGATION: 'unrecorded-delegation',
  CHANGED_COMPLETION_CRITERIA: 'changed-completion-criteria',
  UNEXPECTED_COST: 'unexpected-cost'
});

export const UNCERTAINTY_CATEGORIES = Object.freeze({
  VERIFIED: 'verified',
  SUPPORTED: 'supported',
  INFERRED: 'inferred',
  UNCERTAIN: 'uncertain',
  UNKNOWN: 'unknown',
  CONFLICTED: 'conflicted'
});

export const GROUNDING_SOURCES = Object.freeze({
  BUSINESS_SERVICE_RESULTS: 'authoritative-business-service-results',
  ENTERPRISE_KNOWLEDGE: 'approved-enterprise-knowledge',
  TENANT_KNOWLEDGE: 'tenant-knowledge',
  PROPERTY_KNOWLEDGE: 'property-knowledge',
  EXECUTION_STATE: 'current-execution-state',
  TOOL_OUTPUT: 'verified-tool-output',
  HUMAN_DECISIONS: 'attributable-human-decisions'
});

export const TRUTH_HIERARCHY_LEVELS = Object.freeze({
  BUSINESS_SERVICE_STATE: 'authoritative-business-service-state',
  POLICY_CONFIGURATION: 'approved-policy-and-configuration',
  GOVERNED_KNOWLEDGE: 'governed-enterprise-tenant-or-property-knowledge',
  CURRENT_HUMAN_INPUT: 'attributable-current-human-input',
  VERIFIED_TOOL_RESULT: 'verified-tool-result',
  APPROVED_MEMORY: 'approved-memory',
  AGENT_INFERENCE: 'agent-inference'
});

export const VALIDATION_MECHANISMS = Object.freeze({
  SCHEMA: 'schema-validation',
  TYPE: 'type-validation',
  CONSTRAINT: 'constraint-validation',
  POLICY: 'policy-evaluation',
  BUSINESS_SERVICE: 'business-service-validation',
  SOURCE_VERIFICATION: 'source-verification',
  CONSISTENCY: 'consistency-checks',
  INDEPENDENT_REASONING: 'independent-reasoning',
  HUMAN_REVIEW: 'human-review',
  SCENARIO_EVALUATION: 'scenario-evaluation'
});

export const HUMAN_DECISION_REQUEST_FIELDS = Object.freeze({
  DECISION_REQUIRED: 'decision-required',
  WHY_REQUIRED: 'why-it-is-required',
  AVAILABLE_OPTIONS: 'available-options',
  RECOMMENDED_OPTION: 'recommended-option',
  SUPPORTING_EVIDENCE: 'supporting-evidence',
  RISKS: 'risks',
  CONSEQUENCES: 'consequences',
  SCOPE: 'scope',
  DEADLINE: 'deadline',
  DEFAULT_BEHAVIOR: 'default-behavior-if-unanswered'
});

export const INSTRUCTION_FIELDS = Object.freeze({
  PURPOSE: 'purpose',
  ROLE: 'role',
  BOUNDARIES: 'boundaries',
  SUPPORTED_GOALS: 'supported-goals',
  PROHIBITED_BEHAVIOR: 'prohibited-behavior',
  AUTHORITY_ASSUMPTIONS: 'authority-assumptions',
  SOURCE_RULES: 'source-rules',
  TOOL_RULES: 'tool-rules',
  HUMAN_DECISION_RULES: 'human-decision-rules',
  OUTPUT_CONTRACTS: 'output-contracts',
  STOP_CONDITIONS: 'stop-conditions'
});

export const INSTRUCTION_PRIORITY_LEVELS = Object.freeze({
  PLATFORM_SAFETY_SECURITY: 'platform-safety-and-security-controls',
  GOVERNANCE_POLICY: 'lawful-governance-and-policy',
  AGENT_DEFINITION_AUTHORITY: 'agent-definition-and-authority',
  EXECUTION_GOAL: 'authorized-execution-goal',
  CURRENT_PLAN: 'current-plan',
  USER_PREFERENCES: 'user-preferences-within-scope',
  RETRIEVED_CONTENT: 'retrieved-content'
});

export const MODEL_SELECTION_FACTORS = Object.freeze({
  TASK_TYPE: 'task-type',
  REQUIRED_QUALITY: 'required-quality',
  DATA_SENSITIVITY: 'data-sensitivity',
  MODALITY: 'modality',
  LANGUAGE: 'language',
  CONTEXT_SIZE: 'context-size',
  LATENCY: 'latency',
  COST: 'cost',
  TENANT_CONTRACT: 'tenant-contract',
  REGIONAL_RESTRICTIONS: 'regional-restrictions',
  EVALUATION_PERFORMANCE: 'evaluation-performance'
});

export const MULTI_AGENT_PLAN_FIELDS = Object.freeze({
  DELEGATE_ROLE: 'delegate-role',
  TASK: 'task',
  EXPECTED_RESULT: 'expected-result',
  AUTHORITY_SUBSET: 'authority-subset',
  CONTEXT_SUBSET: 'context-subset',
  LIMITS: 'limits',
  DEADLINE: 'deadline',
  VALIDATION: 'validation',
  RETURN_CONTRACT: 'return-contract'
});

export const STOP_CONDITIONS = Object.freeze({
  GOAL_COMPLETE: 'goal-is-complete',
  COMPLETION_UNVERIFIABLE: 'completion-cannot-be-verified',
  REQUIRED_INFO_UNAVAILABLE: 'required-information-is-unavailable',
  MATERIAL_SOURCE_CONFLICT: 'sources-conflict-materially',
  AUTHORITY_ABSENT: 'authority-is-absent',
  APPROVAL_DENIED: 'approval-is-denied',
  POLICY_BLOCKS: 'policy-blocks-progress',
  TENANT_PROPERTY_AMBIGUOUS: 'tenant-or-property-is-ambiguous',
  NO_VALID_PLAN: 'no-valid-plan-exists',
  CAPABILITY_UNAVAILABLE: 'required-capability-is-unavailable',
  LIMITS_EXHAUSTED: 'limits-are-exhausted',
  RISK_EXCEEDS_THRESHOLD: 'risk-exceeds-threshold',
  REPLANNING_STALLED: 'replanning-repeats-without-progress',
  HUMAN_CANCELS: 'human-cancels'
});

export const LOOP_DETECTION_SIGNALS = Object.freeze({
  REPEATED_PLAN_VERSIONS: 'repeated-plan-versions',
  REPEATED_TASK_SELECTION: 'repeated-task-selection',
  REPEATED_TOOL_CALLS: 'repeated-tool-calls',
  NO_NEW_EVIDENCE: 'no-new-evidence',
  NO_STATE_PROGRESS: 'no-state-progress',
  REPEATED_CLARIFICATION: 'repeated-clarification',
  LIMIT_CONSUMPTION_NO_IMPROVEMENT: 'limit-consumption-without-outcome-improvement'
});

export const REASONING_OBSERVABILITY_SIGNALS = Object.freeze({
  REASONING_PURPOSE: 'reasoning-purpose',
  MODEL_CONFIGURATION: 'model-and-configuration',
  INPUT_SOURCE_CATEGORIES: 'input-source-categories',
  PLAN_VERSIONS: 'plan-versions',
  ASSUMPTIONS: 'assumptions',
  SELECTED_TASKS: 'selected-tasks',
  REPLAN_TRIGGERS: 'replan-triggers',
  VALIDATION_OUTCOMES: 'validation-outcomes',
  HUMAN_DECISION_REQUESTS: 'human-decision-requests',
  STOP_RECOMMENDATIONS: 'stop-recommendations',
  COST: 'cost',
  LATENCY: 'latency'
});

export const REASONING_EVIDENCE_FIELDS = Object.freeze({
  GOAL_INTERPRETATION: 'goal-interpretation',
  MATERIAL_ASSUMPTIONS: 'material-assumptions',
  SOURCE_REFERENCES: 'source-references',
  CANDIDATE_PLAN: 'candidate-plan',
  SELECTED_PLAN: 'selected-plan',
  PLAN_VALIDATION: 'plan-validation',
  PLAN_APPROVAL: 'plan-approval',
  PLAN_REVISIONS: 'plan-revisions',
  TASK_RECOMMENDATIONS: 'task-recommendations',
  TOOL_RECOMMENDATIONS: 'tool-recommendations',
  HUMAN_DECISION_REQUESTS: 'human-decision-requests',
  VALIDATION_RESULTS: 'validation-results',
  COMPLETION_RECOMMENDATION: 'completion-recommendation',
  STOP_RECOMMENDATION: 'stop-recommendation'
});

export const REASONING_EVALUATION_DIMENSIONS = Object.freeze({
  GOAL_FIDELITY: 'goal-fidelity',
  INTENT_ACCURACY: 'intent-accuracy',
  ENTITY_ACCURACY: 'entity-accuracy',
  SOURCE_GROUNDING: 'source-grounding',
  ASSUMPTION_QUALITY: 'assumption-quality',
  PLAN_COMPLETENESS: 'plan-completeness',
  PLAN_EFFICIENCY: 'plan-efficiency',
  CONSTRAINT_COMPLIANCE: 'constraint-compliance',
  TOOL_SELECTION: 'tool-selection',
  HUMAN_DECISION_QUALITY: 'human-decision-quality',
  REPLANNING_QUALITY: 'replanning-quality',
  LOOP_AVOIDANCE: 'loop-avoidance',
  UNCERTAINTY_COMMUNICATION: 'uncertainty-communication',
  COMPLETION_ACCURACY: 'completion-accuracy',
  STOP_BEHAVIOR: 'stop-behavior',
  COST: 'cost',
  LATENCY: 'latency'
});

export const REASONING_QUALITY_ATTRIBUTES = Object.freeze({
  GOAL_FIDELITY: 'goal-fidelity',
  GROUNDING: 'grounding',
  BOUNDEDNESS: 'boundedness',
  ADAPTABILITY: 'adaptability',
  EXPLAINABILITY: 'explainability',
  TESTABILITY: 'testability',
  PORTABILITY: 'portability',
  EFFICIENCY: 'efficiency',
  SAFETY: 'safety'
});

export const REASONING_ARCHITECTURAL_RULES = Object.freeze({
  PRESERVE_GOAL: 'preserve-authorized-goal',
  IDENTIFY_AMBIGUITY: 'identify-ambiguity-and-missing-material-information',
  CLARIFY_REQUIRED_VALUES: 'ask-for-clarification-rather-than-invent-required-values',
  AUTHORITATIVE_BEFORE_INFERENCE: 'use-authoritative-sources-before-inference',
  LABEL_ASSUMPTIONS_UNCERTAINTY: 'label-material-assumptions-and-uncertainty',
  STRUCTURED_VERSIONED_OUTPUTS: 'produce-structured-versioned-outputs',
  BOUNDED_TASK_PLANS: 'keep-plans-bounded-and-task-oriented',
  DEPENDENCIES_COMPLETION: 'identify-dependencies-and-completion-criteria',
  AUTHORITY_WITHOUT_GRANT: 'identify-required-authority-without-granting-it',
  REGISTERED_CAPABILITIES_ONLY: 'use-registered-capabilities-only',
  BUSINESS_LOGIC_IN_SERVICES: 'preserve-business-logic-in-business-services',
  WORKFLOW_FOR_DURABILITY: 'use-workflow-engine-for-durable-deterministic-processes',
  EXPLICIT_HUMAN_DECISIONS: 'include-human-decisions-explicitly',
  VALIDATE_PLANS: 'validate-plans-before-activation',
  VERSION_REVISIONS: 'version-material-plan-revisions',
  PRESERVE_TASK_EVIDENCE: 'preserve-completed-task-evidence-across-replanning',
  DETECT_PLAN_DRIFT: 'detect-plan-drift',
  DETECT_REASONING_LOOPS: 'detect-reasoning-loops',
  LOCAL_WITHIN_GLOBAL: 'keep-local-adaptation-within-approved-global-constraints',
  RETRIEVED_CONTENT_AS_DATA: 'treat-retrieved-content-as-data-according-to-trust-level',
  CONFIDENCE_NOT_EVIDENCE: 'prevent-model-confidence-from-replacing-evidence',
  INDEPENDENT_VALIDATION: 'require-independent-validation-proportionate-to-risk',
  HIDDEN_REASONING_OUT_OF_EVIDENCE: 'keep-unrestricted-hidden-reasoning-out-of-required-evidence',
  STOP_WHEN_UNESTABLISHED: 'recommend-stopping-when-truth-authority-safety-or-progress-cannot-be-established',
  COMPLETION_TO_RUNTIME_VALIDATION: 'submit-completion-claims-to-deterministic-runtime-validation',
  MODEL_PROVIDER_NEUTRAL: 'remain-model-and-provider-neutral'
});

export const REASONING_ARCHITECTURE_BOUNDARIES = Object.freeze({
  GRANT_AUTHORITY: 'grant-authority',
  CONTROL_RUNTIME_STATE: 'control-runtime-state',
  MODEL_IMPLEMENTATIONS: 'model-implementations',
  TOOL_IMPLEMENTATIONS: 'tool-implementations',
  BUSINESS_RULES: 'business-rules',
  WORKFLOW_INTERNALS: 'durable-workflow-internals',
  KNOWLEDGE_MEMORY_STORAGE: 'knowledge-and-memory-storage',
  MULTI_AGENT_PROTOCOLS: 'detailed-multi-agent-protocols',
  MODEL_AGENT_LIBRARY_SELECTION: 'model-or-agent-library-selection'
});
