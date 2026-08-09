export const MULTI_AGENT_COORDINATION_ERROR_CODE = 'MULTI_AGENT_COORDINATION_INVALID';

export const MULTI_AGENT_SELECTION_CRITERIA = Object.freeze({
  SPECIALIZED_ROLES: 'specialized-domain-roles-improve-quality',
  INDEPENDENT_REVIEW: 'independent-review-is-required',
  SEPARATION_OF_DUTIES: 'separation-of-duties-reduces-risk',
  SAFE_PARALLELISM: 'tasks-can-run-safely-in-parallel',
  DIFFERENT_TOOLS_ENVIRONMENTS: 'different-tools-or-environments-are-required',
  TENANT_AUTHORIZED_ROLES: 'different-tenant-authorized-roles-participate',
  SYNTHESIS_REQUIRED: 'coordinator-synthesizes-bounded-contributions',
  INDEPENDENTLY_VERIFIABLE: 'work-divides-into-independently-verifiable-tasks'
});

export const MULTI_AGENT_INAPPROPRIATE_CRITERIA = Object.freeze({
  ONE_STEP_SUFFICIENT: 'one-bounded-reasoning-step-is-sufficient',
  TIGHTLY_SEQUENTIAL: 'tasks-are-tightly-sequential',
  SHARED_CONTEXT_DOMINATES: 'shared-context-dominates-coordination',
  UNSAFE_DELEGATION: 'delegation-cannot-be-safely-authorized',
  RESULTS_NOT_VALIDATABLE: 'results-cannot-be-independently-validated',
  COST_EXCEEDS_BENEFIT: 'coordination-cost-exceeds-expected-benefit',
  WORKFLOW_FULLY_DEFINES: 'deterministic-workflow-fully-defines-process',
  FALSE_CONSENSUS: 'repeats-same-model-for-appearance-of-consensus'
});

export const COORDINATION_GOALS = Object.freeze({
  PRESERVE_PARENT_GOAL: 'preserve-parent-goal',
  ONE_OWNER_PER_TASK: 'assign-one-owner-per-task',
  ATTENUATE_AUTHORITY: 'attenuate-delegated-authority',
  MINIMIZE_CONTEXT: 'minimize-shared-context',
  TENANT_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  VERSIONED_MESSAGES: 'use-versioned-message-contracts',
  EXPLICIT_DEPENDENCIES: 'make-dependencies-explicit',
  BOUND_DELEGATION: 'bound-delegation-depth-and-fan-out',
  DETECT_CONFLICTS_STALLS: 'detect-conflicts-and-stalled-work',
  VALIDATE_CONTRIBUTIONS: 'validate-contributions-independently',
  PROPAGATE_STOP_CONTROLS: 'propagate-cancellation-and-suspension',
  COMPLETE_ATTRIBUTION: 'produce-complete-attribution',
  HUMAN_ACCOUNTABILITY: 'preserve-human-accountability'
});

export const COORDINATION_ROLES = Object.freeze({
  COORDINATOR: 'coordinator',
  PLANNER: 'planner',
  SPECIALIST: 'specialist',
  RESEARCHER: 'researcher',
  EXECUTOR: 'executor',
  REVIEWER: 'reviewer',
  VERIFIER: 'verifier',
  SAFETY_MONITOR: 'safety-monitor',
  HUMAN_SUPERVISOR: 'human-supervisor'
});

export const COORDINATION_PATTERNS = Object.freeze({
  COORDINATOR_SPECIALISTS: 'coordinator-and-specialists',
  PLANNER_EXECUTOR: 'planner-and-executor',
  PRODUCER_REVIEWER: 'producer-and-reviewer',
  PARALLEL_SPECIALISTS: 'parallel-specialists',
  DEBATE_ALTERNATIVE_ANALYSIS: 'debate-or-alternative-analysis',
  HIERARCHICAL_DELEGATION: 'hierarchical-delegation',
  WORKFLOW_MEDIATED: 'workflow-mediated-agents'
});

export const COORDINATION_TOPOLOGIES = Object.freeze({
  HUB_SPOKE: 'hub-and-spoke',
  HIERARCHICAL_TREE: 'hierarchical-tree',
  BOUNDED_PEER_GROUP: 'bounded-peer-group',
  PIPELINE: 'pipeline',
  WORKFLOW_DIRECTED_GRAPH: 'workflow-directed-graph'
});

export const SHARED_GOAL_FIELDS = Object.freeze({
  IDENTIFIER: 'shared-goal-identifier',
  DESIRED_OUTCOME: 'desired-outcome',
  INITIATOR: 'initiator',
  ACCOUNTABLE_OWNER: 'accountable-owner',
  TENANT: 'tenant',
  PROPERTY: 'property',
  CONSTRAINTS: 'constraints',
  COMPLETION_CRITERIA: 'completion-criteria',
  PROHIBITED_OUTCOMES: 'prohibited-outcomes',
  AUTONOMY: 'autonomy',
  LIMITS: 'limits',
  HUMAN_DECISION_POINTS: 'human-decision-points'
});

export const TASK_OWNERSHIP_FIELDS = Object.freeze({
  ASSIGNED_AGENT: 'assigned-agent',
  ASSIGNMENT_TIME: 'assignment-time',
  REQUIRED_RESULT: 'required-result',
  AUTHORITY: 'authority',
  DEPENDENCIES: 'dependencies',
  DEADLINE: 'deadline',
  STATUS: 'status',
  RETURN_CONTRACT: 'return-contract'
});

export const COORDINATION_DELEGATION_CONTRACT_FIELDS = Object.freeze({
  IDENTIFIER: 'delegation-identifier',
  PARENT_EXECUTION: 'parent-execution',
  PARENT_TASK: 'parent-task',
  DELEGATING_AGENT: 'delegating-agent',
  DELEGATE_AGENT_VERSION: 'delegate-agent-and-version',
  SHARED_GOAL: 'shared-goal',
  ASSIGNED_TASK: 'assigned-task',
  EXPECTED_OUTPUT: 'expected-output',
  COMPLETION_CRITERIA: 'completion-criteria',
  TENANT: 'tenant',
  PROPERTY: 'property',
  CONTEXT_REFERENCES: 'context-references',
  DATA_PERMISSIONS: 'data-permissions',
  TOOL_PERMISSIONS: 'tool-permissions',
  ACTION_PERMISSIONS: 'action-permissions',
  AUTONOMY: 'autonomy',
  HUMAN_DECISIONS: 'human-decision-requirements',
  TIME_LIMIT: 'time-limit',
  COST_LIMIT: 'cost-limit',
  STEP_LIMIT: 'step-limit',
  RETRY_LIMIT: 'retry-limit',
  FURTHER_DELEGATION: 'further-delegation-permission',
  RETURN_CONTRACT: 'return-contract',
  CANCELLATION_BEHAVIOR: 'cancellation-behavior',
  EVIDENCE_REQUIREMENTS: 'evidence-requirements',
  EXPIRATION: 'expiration'
});

export const AUTHORITY_ATTENUATION_DIMENSIONS = Object.freeze({
  TASK_PURPOSE: 'task-purpose',
  TENANT: 'tenant',
  PROPERTY: 'property',
  DATA: 'data',
  TOOL: 'tool',
  OPERATION: 'operation',
  ACTION_CLASS: 'action-class',
  TIME: 'time',
  COST: 'cost',
  DELEGATION_DEPTH: 'delegation-depth',
  ENVIRONMENT: 'environment'
});

export const DELEGATION_ADMISSION_CHECKS = Object.freeze({
  PARENT_ACTIVE: 'parent-execution-is-active',
  TASK_BELONGS_TO_GOAL: 'task-belongs-to-parent-goal',
  DELEGATOR_MAY_DELEGATE: 'delegator-may-delegate',
  DELEGATE_REGISTERED_ACTIVE: 'delegate-is-registered-and-active',
  DELEGATE_SUPPORTS_TASK: 'delegate-supports-task',
  VALID_SCOPE: 'tenant-and-property-scope-are-valid',
  SAFE_ATTENUATION: 'authority-can-be-attenuated-safely',
  CONTEXT_SHAREABLE: 'required-context-may-be-shared',
  LIMITS_AVAILABLE: 'limits-remain-available',
  DEPTH_FANOUT_WITHIN_POLICY: 'delegation-depth-and-fan-out-remain-within-policy',
  NO_SUSPENSION: 'no-suspension-applies'
});

export const DELEGATION_CHAIN_FIELDS = Object.freeze({
  PARENT: 'parent',
  CHILD: 'child',
  DELEGATOR: 'delegator',
  DELEGATE: 'delegate',
  TASK: 'task',
  AUTHORITY_SUBSET: 'authority-subset',
  CONTEXT_SUBSET: 'context-subset',
  LIMITS: 'limits',
  START: 'start',
  EXPIRATION: 'expiration',
  OUTCOME: 'outcome'
});

export const DELEGATION_LIFECYCLE_STATES = Object.freeze({
  PROPOSED: 'proposed',
  VALIDATING: 'validating',
  ACCEPTED: 'accepted',
  ACTIVE: 'active',
  WAITING: 'waiting',
  COMPLETED: 'completed',
  REJECTED: 'rejected',
  FAILED: 'failed',
  CANCELLING: 'cancelling',
  CANCELLED: 'cancelled',
  EXPIRED: 'expired',
  REVOKED: 'revoked'
});

export const DELEGATE_SELECTION_FACTORS = Object.freeze({
  SUPPORTED_CAPABILITIES: 'supported-capabilities',
  DOMAIN: 'domain',
  LIFECYCLE_STATE: 'approved-lifecycle-state',
  TENANT_ELIGIBILITY: 'tenant-eligibility',
  PROPERTY_ELIGIBILITY: 'property-eligibility',
  REQUIRED_TOOLS: 'required-tools',
  DATA_CLASSIFICATION: 'data-classification',
  EVALUATION_PERFORMANCE: 'evaluation-performance',
  AVAILABILITY: 'availability',
  COST: 'cost',
  LATENCY: 'latency',
  CURRENT_LOAD: 'current-load',
  CONFLICT_OF_INTEREST: 'conflict-of-interest-rules'
});

export const MESSAGE_TYPES = Object.freeze({
  TASK_ASSIGNMENT: 'task-assignment',
  ACCEPTANCE: 'acceptance',
  CLARIFICATION: 'clarification',
  PROGRESS: 'progress',
  EVIDENCE_REFERENCE: 'evidence-reference',
  RESULT: 'result',
  CONFLICT: 'conflict',
  FAILURE: 'failure',
  CANCELLATION: 'cancellation',
  COMPLETION: 'completion'
});

export const MESSAGE_ENVELOPE_FIELDS = Object.freeze({
  MESSAGE_IDENTIFIER: 'message-identifier',
  CONTRACT_VERSION: 'contract-version',
  SENDER: 'sender',
  SENDER_EXECUTION: 'sender-execution',
  RECIPIENT: 'recipient',
  RECIPIENT_EXECUTION_TASK: 'recipient-execution-or-task',
  PARENT_EXECUTION: 'parent-execution',
  TENANT: 'tenant',
  PROPERTY: 'property',
  MESSAGE_TYPE: 'message-type',
  CORRELATION: 'correlation',
  TIME: 'time',
  EXPIRATION: 'expiration',
  TRUST_CLASSIFICATION: 'trust-classification',
  CONTENT_REFERENCE: 'content-reference',
  EVIDENCE_REFERENCE: 'evidence-reference'
});

export const MESSAGE_AUTHORIZATION_CHECKS = Object.freeze({
  SENDER_IDENTITY: 'sender-identity',
  RECIPIENT_IDENTITY: 'recipient-identity',
  ACTIVE_RELATIONSHIP: 'active-relationship',
  MESSAGE_PURPOSE: 'message-purpose',
  TENANT_PROPERTY: 'tenant-and-property',
  DATA_SHARING_PERMISSION: 'data-sharing-permission',
  CONTRACT_VALIDITY: 'contract-validity',
  EXPIRATION: 'expiration',
  RATE_LIMITS: 'rate-limits'
});

export const SHARED_STATE_FIELDS = Object.freeze({
  GOAL: 'goal',
  ACTIVE_PLAN: 'active-plan',
  TASK_ASSIGNMENTS: 'task-assignments',
  DEPENDENCIES: 'dependencies',
  STATUS: 'status',
  DELEGATION_RELATIONSHIPS: 'delegation-relationships',
  LIMITS: 'limits',
  HUMAN_DECISIONS: 'human-decisions',
  VALIDATED_RESULTS: 'validated-results',
  COMPLETION_EVIDENCE: 'completion-evidence'
});

export const CONCURRENCY_REQUIREMENTS = Object.freeze({
  DEPENDENCY_CHECKS: 'dependency-checks',
  STATE_VERSIONING: 'state-versioning',
  RESOURCE_RESERVATION: 'resource-reservation',
  CONFLICT_DETECTION: 'conflict-detection',
  COMPLETION_BARRIERS: 'completion-barriers',
  CANCELLATION_PROPAGATION: 'cancellation-propagation'
});

export const COORDINATION_BARRIER_FIELDS = Object.freeze({
  REQUIRED_TASKS: 'required-tasks',
  OPTIONAL_TASKS: 'optional-tasks',
  MINIMUM_VALID_RESULTS: 'minimum-valid-results',
  DEADLINE: 'deadline',
  FAILURE_THRESHOLD: 'failure-threshold',
  CANCELLATION_BEHAVIOR: 'cancellation-behavior',
  AGGREGATION_RULE: 'aggregation-rule'
});

export const CONFLICT_TYPES = Object.freeze({
  CONTRADICTORY_FACTS: 'contradictory-facts',
  DIFFERENT_INTERPRETATIONS: 'different-interpretations',
  COMPETING_PLANS: 'competing-plans',
  RESOURCE_CONTENTION: 'resource-contention',
  STATE_VERSION_CONFLICT: 'state-version-conflict',
  AUTHORITY_CONFLICT: 'authority-conflict',
  POLICY_CONFLICT: 'policy-conflict',
  DUPLICATE_TASK_OWNERSHIP: 'duplicate-task-ownership',
  DIFFERENT_COMPLETION_CLAIMS: 'different-completion-claims'
});

export const CONFLICT_RESOLUTION_ORDER = Object.freeze({
  BUSINESS_STATE: 'authoritative-business-state',
  POLICY: 'approved-policy',
  VERIFIED_SOURCES: 'verified-sources',
  HUMAN_DECISION: 'explicit-human-decision',
  DETERMINISTIC_RULE: 'deterministic-rule',
  INDEPENDENT_VALIDATION: 'independent-validation',
  ESCALATION: 'escalation'
});

export const INDEPENDENT_REVIEW_CRITERIA = Object.freeze({
  SEPARATE_TASK_ROLE: 'separate-task-and-role',
  EXPLICIT_CRITERIA: 'explicit-criteria',
  REJECTION_POWER: 'can-reject-contribution',
  NO_BLIND_ASSUMPTION_INHERITANCE: 'does-not-inherit-producer-assumptions-blindly',
  APPROPRIATE_EVIDENCE: 'access-to-appropriate-evidence',
  SEPARATION_WHERE_REQUIRED: 'does-not-share-conflicting-action-authority-where-required'
});

export const DELEGATE_RESULT_FIELDS = Object.freeze({
  DELEGATION_IDENTIFIER: 'delegation-identifier',
  TASK_IDENTIFIER: 'task-identifier',
  STATUS: 'status',
  OUTPUT: 'output',
  SOURCES: 'sources',
  ASSUMPTIONS: 'assumptions',
  TOOL_RESULTS: 'tool-results',
  EVIDENCE: 'evidence',
  UNCERTAINTY: 'uncertainty',
  LIMITS_CONSUMED: 'limits-consumed',
  SIDE_EFFECTS: 'side-effects',
  COMPLETION_CLAIM: 'completion-claim',
  REMAINING_ISSUES: 'remaining-issues'
});

export const RESULT_AGGREGATION_REQUIREMENTS = Object.freeze({
  ATTRIBUTION: 'preserve-attribution',
  PROVENANCE: 'preserve-source-provenance',
  DEDUPLICATION: 'remove-duplicates',
  CONFLICT_IDENTIFICATION: 'identify-conflicts',
  CONTRACT_CONFORMANCE: 'validate-contract-conformance',
  FACT_INFERENCE_DISTINCTION: 'distinguish-verified-facts-from-inference',
  TENANT_PROPERTY_SCOPE: 'preserve-tenant-and-property-scope',
  ACCEPT_REJECT_RECORDS: 'record-accepted-and-rejected-contributions',
  COMPLETION_CRITERIA: 'evaluate-shared-completion-criteria'
});

export const FAILURE_PROPAGATION_POLICIES = Object.freeze({
  FAIL_PARENT: 'fail-parent-immediately',
  CONTINUE_INDEPENDENT: 'continue-independent-tasks',
  WAIT_THRESHOLD: 'wait-for-threshold',
  ALTERNATE_DELEGATE: 'use-alternate-delegate',
  ESCALATE: 'escalate',
  COMPENSATE: 'compensate',
  PARTIAL_RESULT: 'return-partial-result'
});

export const CANCELLATION_FLOW_STEPS = Object.freeze({
  RECORD_INTENT: 'record-cancellation-intent',
  STOP_ASSIGNMENTS: 'stop-new-assignments',
  SIGNAL_CHILDREN: 'signal-active-children',
  RECONCILE_ACTIONS: 'reconcile-material-actions',
  COLLECT_STATUSES: 'collect-final-statuses',
  CLOSE_DELEGATIONS: 'close-delegation-records',
  PRODUCE_EVIDENCE: 'produce-evidence'
});

export const HUMAN_SUPERVISION_ACTIONS = Object.freeze({
  APPROVE_PLAN: 'approve-coordination-plan',
  APPROVE_DELEGATES: 'approve-delegates',
  RESOLVE_CONFLICT: 'resolve-conflict',
  CHANGE_PRIORITY: 'change-priority',
  PAUSE_WORK: 'pause-work',
  CANCEL_WORK: 'cancel-work',
  REPLACE_COORDINATOR: 'replace-coordinator',
  TAKE_OVER_TASK: 'take-over-task',
  ACCEPT_PARTIAL_OUTCOME: 'accept-partial-outcome',
  ACCEPT_RISK: 'accept-risk'
});

export const HUMAN_TAKEOVER_STEPS = Object.freeze({
  IDENTIFY_HUMAN: 'identify-authorized-human',
  PAUSE_AGENT_WORK: 'pause-affected-agent-work',
  PRESERVE_STATE_EVIDENCE: 'preserve-state-and-evidence',
  REDUCE_AUTHORITY: 'revoke-or-reduce-agent-authority',
  TRANSFER_OWNERSHIP: 'transfer-task-ownership',
  RECONCILE_ACTIONS: 'reconcile-active-actions',
  RECORD_DECISION: 'record-decision',
  DEFINE_RESUME: 'define-whether-agents-may-resume'
});

export const COORDINATION_SECURITY_THREATS = Object.freeze({
  AGENT_IMPERSONATION: 'agent-impersonation',
  FORGED_DELEGATION: 'forged-delegation',
  AUTHORITY_AMPLIFICATION: 'authority-amplification',
  CROSS_TENANT_CONTEXT_LEAKAGE: 'cross-tenant-context-leakage',
  MALICIOUS_MESSAGES: 'malicious-agent-messages',
  PROMPT_INJECTION: 'prompt-injection-between-agents',
  CIRCULAR_DELEGATION: 'circular-delegation',
  RESOURCE_AMPLIFICATION: 'resource-amplification',
  COORDINATOR_COMPROMISE: 'coordinator-compromise',
  EVIDENCE_SUPPRESSION: 'evidence-suppression',
  COLLUSIVE_FALSE_VALIDATION: 'collusive-false-validation'
});

export const COORDINATION_EVIDENCE_FIELDS = Object.freeze({
  SHARED_GOAL: 'shared-goal',
  COORDINATION_PATTERN: 'coordination-pattern',
  PARTICIPANTS_VERSIONS: 'participants-and-versions',
  ROLES: 'roles',
  DELEGATION_CONTRACTS: 'delegation-contracts',
  AUTHORITY_SUBSETS: 'authority-subsets',
  CONTEXT_REFERENCES: 'context-references',
  MESSAGES: 'messages',
  TASK_TRANSITIONS: 'task-transitions',
  TOOL_ACTIONS: 'tool-actions',
  CONFLICTS: 'conflicts',
  REVIEWS: 'reviews',
  ACCEPTED_REJECTED_RESULTS: 'accepted-and-rejected-results',
  HUMAN_DECISIONS: 'human-decisions',
  CANCELLATIONS: 'cancellations',
  FAILURES: 'failures',
  AGGREGATED_OUTCOME: 'aggregated-outcome'
});

export const COORDINATION_OBSERVABILITY_SIGNALS = Object.freeze({
  ACTIVE_EXECUTIONS: 'active-multi-agent-executions',
  PARTICIPANT_COUNT: 'participant-count',
  DELEGATION_DEPTH: 'delegation-depth',
  DELEGATION_FANOUT: 'delegation-fan-out',
  MESSAGE_VOLUME: 'message-volume',
  TASK_LATENCY: 'task-latency',
  QUEUE_WAIT_TIME: 'queue-and-wait-time',
  CONFLICT_COUNT: 'conflict-count',
  REVIEW_REJECTION: 'review-rejection',
  CHILD_FAILURE: 'child-failure',
  CANCELLATION_LATENCY: 'cancellation-latency',
  RESOURCE_CONSUMPTION: 'resource-consumption',
  CROSS_AGENT_TOOL_USE: 'cross-agent-tool-use',
  HUMAN_INTERVENTIONS: 'human-interventions',
  COMPLETION_RATE: 'completion-rate'
});

export const COORDINATION_EVALUATION_MEASURES = Object.freeze({
  OUTCOME_QUALITY: 'outcome-quality',
  ACCURACY: 'accuracy',
  COMPLETION: 'completion',
  REVIEW_VALUE: 'independent-review-value',
  CONFLICT_RESOLUTION: 'conflict-resolution',
  LATENCY: 'latency',
  COST: 'cost',
  RESOURCE_AMPLIFICATION: 'resource-amplification',
  FAILURE_RECOVERY: 'failure-recovery',
  HUMAN_INTERVENTION: 'human-intervention',
  AUTHORITY_COMPLIANCE: 'authority-compliance',
  TENANT_ISOLATION: 'tenant-isolation'
});

export const COORDINATION_OPERATIONS = Object.freeze({
  PARTICIPANT_INVENTORY: 'participant-inventory',
  TOPOLOGY_INSPECTION: 'execution-topology-inspection',
  DELEGATION_TRACING: 'delegation-tracing',
  MESSAGE_TRACING: 'message-tracing',
  TASK_OWNERSHIP: 'task-ownership',
  SAFE_PAUSE: 'safe-pause',
  SCOPED_SUSPENSION: 'scoped-suspension',
  CANCELLATION: 'cancellation',
  COORDINATOR_REPLACEMENT: 'coordinator-replacement',
  RECONCILIATION: 'reconciliation',
  INCIDENT_CORRELATION: 'incident-correlation',
  LIMIT_ADJUSTMENT: 'limit-adjustment',
  EVIDENCE_ACCESS: 'evidence-access'
});

export const COORDINATION_QUALITY_ATTRIBUTES = Object.freeze({
  BOUNDEDNESS: 'boundedness',
  ACCOUNTABILITY: 'accountability',
  ISOLATION: 'isolation',
  RELIABILITY: 'reliability',
  EXPLAINABILITY: 'explainability',
  SCALABILITY: 'scalability',
  TESTABILITY: 'testability',
  PORTABILITY: 'portability'
});

export const COORDINATION_ARCHITECTURAL_RULES = Object.freeze({
  VALUE_JUSTIFIES_COMPLEXITY: 'use-multiple-agents-only-when-measurable-value-justifies-complexity',
  REGISTER_PARTICIPANTS: 'register-and-identify-every-participant',
  SHARED_GOAL: 'preserve-one-shared-authorized-goal',
  ONE_TASK_OWNER: 'assign-one-owner-per-active-task',
  EXPLICIT_DELEGATION: 'use-explicit-delegation-contracts',
  ATTENUATE_AUTHORITY: 'attenuate-delegated-authority',
  NO_CREDENTIAL_TRANSFER: 'prevent-credential-transfer',
  PRESERVE_INITIATOR_PRINCIPAL: 'preserve-original-initiator-and-represented-principal',
  PRESERVE_SCOPE: 'preserve-tenant-and-property-scope',
  BOUND_DEPTH_FANOUT: 'bound-delegation-depth-and-fan-out',
  PREVENT_CIRCULAR_DELEGATION: 'prevent-circular-delegation',
  VERSIONED_MESSAGES: 'use-versioned-message-contracts',
  AUTHORIZE_MESSAGES_CONTEXT: 'authorize-messages-and-context-sharing',
  TRUST_LEVEL_MESSAGES: 'treat-agent-messages-according-to-trust-level',
  SHARED_STATE_OUTSIDE_CONVERSATIONS: 'maintain-authoritative-shared-state-outside-conversations',
  SYSTEM_OF_RECORD_OWNERSHIP: 'preserve-system-of-record-ownership',
  VALIDATE_RESULTS: 'validate-delegate-results-before-task-completion',
  PRESERVE_DISAGREEMENT_ATTRIBUTION: 'preserve-disagreement-and-attribution-during-aggregation',
  NO_MAJORITY_AS_TRUTH: 'avoid-majority-as-truth',
  DEFINE_FAILURE_PROPAGATION: 'define-failure-propagation',
  PROPAGATE_STOP_CONTROLS: 'propagate-cancellation-and-suspension',
  CHILD_LIMITS_COUNT_PARENT: 'count-child-resource-use-against-parent-limits',
  HUMAN_SUPERVISION: 'support-human-supervision-and-takeover',
  COMPLETE_EVIDENCE: 'produce-complete-coordination-evidence',
  WORKFLOW_FOR_DURABILITY: 'use-workflow-engine-for-durable-coordination',
  MODEL_FRAMEWORK_NEUTRAL: 'remain-model-and-framework-neutral'
});

export const COORDINATION_ARCHITECTURE_BOUNDARIES = Object.freeze({
  MODEL_INTERNALS: 'model-internals',
  WORKFLOW_INTERNALS: 'workflow-engine-internals',
  AUTHORITY_GRANTS: 'grant-authority',
  TOOL_IMPLEMENTATION: 'tool-implementation',
  KNOWLEDGE_MEMORY_STORAGE: 'knowledge-and-memory-storage',
  COMMUNICATION_PROTOCOL: 'agent-communication-protocol',
  FRAMEWORK_PRODUCT: 'multi-agent-framework-product'
});
