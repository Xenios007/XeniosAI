export const ORCHESTRATOR_COMPONENTS = Object.freeze({
  ORCHESTRATOR: 'orchestrator',
  REASONING_ENGINE: 'reasoning-engine',
  MEMORY_SYSTEM: 'memory-system',
  KNOWLEDGE_SERVICE: 'knowledge-service',
  TOOL_ORCHESTRATOR: 'tool-orchestrator',
  BUSINESS_SERVICES: 'business-services',
  WORKFLOW_ENGINE: 'workflow-engine',
  RESPONSE_COMPOSER: 'response-composer'
});

export const ORCHESTRATION_STAGES = Object.freeze({
  RECEIVE_REQUEST: 'receive-request',
  UNDERSTAND_INTENT: 'understand-intent',
  BUILD_CONTEXT: 'build-context',
  DETERMINE_PLAN: 'determine-plan',
  EXECUTE_CAPABILITIES: 'execute-capabilities',
  VALIDATE_RESULTS: 'validate-results',
  COMPOSE_RESPONSE: 'compose-response',
  RETURN_RESPONSE: 'return-response'
});

export const REQUEST_LIFECYCLE_STAGES = Object.freeze({
  RECEIVE_REQUEST: 'receive-request',
  NORMALIZE_REQUEST: 'normalize-request',
  IDENTIFY_INTENT: 'identify-intent',
  BUILD_CONTEXT: 'build-context',
  RETRIEVE_MEMORY: 'retrieve-memory',
  RETRIEVE_KNOWLEDGE: 'retrieve-knowledge',
  PLAN_EXECUTION: 'plan-execution',
  EXECUTE_TOOLS: 'execute-tools',
  VALIDATE_RESULTS: 'validate-results',
  COMPOSE_RESPONSE: 'compose-response',
  APPLY_POLICIES: 'apply-policies',
  RETURN_RESPONSE: 'return-response'
});

export const REQUEST_LIFECYCLE_CHARACTERISTICS = Object.freeze({
  DETERMINISTIC: 'deterministic',
  OBSERVABLE: 'observable',
  TRACEABLE: 'traceable',
  REPEATABLE: 'repeatable',
  SECURE: 'secure',
  POLICY_COMPLIANT: 'policy-compliant'
});

export const REQUEST_LIFECYCLE_TELEMETRY_FIELDS = Object.freeze({
  START_TIME: 'startedAt',
  END_TIME: 'endedAt',
  DURATION: 'durationMs',
  INPUTS: 'inputs',
  OUTPUTS: 'outputs',
  ERRORS: 'errors',
  CORRELATION_ID: 'correlationId',
  REQUEST_ID: 'requestId'
});

export const REASONING_PIPELINE_STAGES = Object.freeze({
  INPUT: 'input',
  INTENT_ANALYSIS: 'intent-analysis',
  GOAL_EXTRACTION: 'goal-extraction',
  CONTEXT_EVALUATION: 'context-evaluation',
  KNOWLEDGE_ASSESSMENT: 'knowledge-assessment',
  TOOL_PLANNING: 'tool-planning',
  EXECUTION_STRATEGY: 'execution-strategy',
  CONFIDENCE_EVALUATION: 'confidence-evaluation',
  DECISION_OUTPUT: 'decision-output'
});

export const REASONING_DECISION_CATEGORIES = Object.freeze({
  DIRECT_RESPONSE: 'direct-response',
  TOOL_EXECUTION: 'tool-execution',
  MULTI_STEP_WORKFLOW: 'multi-step-workflow',
  CLARIFICATION_REQUEST: 'clarification-request',
  ESCALATION: 'escalation',
  FAILURE: 'failure'
});

export const REASONING_EXECUTION_STRATEGIES = Object.freeze({
  SINGLE_TOOL_INVOCATION: 'single-tool-invocation',
  SEQUENTIAL_EXECUTION: 'sequential-execution',
  PARALLEL_EXECUTION: 'parallel-execution',
  WORKFLOW_ORCHESTRATION: 'workflow-orchestration',
  CLARIFICATION_BEFORE_EXECUTION: 'clarification-before-execution'
});

export const TOOL_ORCHESTRATION_STAGES = Object.freeze({
  CAPABILITY_NEEDED: 'capability-needed',
  TOOL_DISCOVERY: 'tool-discovery',
  CAPABILITY_MATCHING: 'capability-matching',
  AUTHORIZATION: 'authorization',
  EXECUTION_PLAN: 'execution-plan',
  TOOL_EXECUTION: 'tool-execution',
  RESULT_VALIDATION: 'result-validation',
  NORMALIZATION: 'normalization',
  RETURN_RESULT: 'return-result'
});

export const TOOL_CATEGORIES = Object.freeze({
  BUSINESS: 'business',
  KNOWLEDGE: 'knowledge',
  MEMORY: 'memory',
  INTEGRATION: 'integration',
  PLATFORM: 'platform'
});

export const TOOL_SELECTION_PRINCIPLES = Object.freeze({
  AUTHORITATIVE: 'authoritative',
  STABLE: 'stable',
  VERSION_COMPATIBLE: 'version-compatible',
  OBSERVABLE: 'observable',
  DETERMINISTIC: 'deterministic',
  POLICY_COMPLIANT: 'policy-compliant'
});

export const TOOL_INVOCATION_TELEMETRY_FIELDS = Object.freeze({
  TOOL_ID: 'toolId',
  CAPABILITY_REQUESTED: 'capabilityRequested',
  START_TIME: 'startedAt',
  END_TIME: 'endedAt',
  EXECUTION_DURATION: 'durationMs',
  SUCCESS: 'success',
  RETRY_COUNT: 'retryCount',
  CORRELATION_ID: 'correlationId'
});

export const MEMORY_CATEGORIES = Object.freeze({
  CONVERSATION: 'conversation',
  SESSION: 'session',
  LONG_TERM: 'long-term',
  PROCEDURAL: 'procedural',
  EXECUTION: 'execution'
});

export const MEMORY_ORCHESTRATION_STAGES = Object.freeze({
  NEED_MEMORY: 'need-memory',
  DETERMINE_MEMORY_TYPE: 'determine-memory-type',
  RETRIEVE_CANDIDATES: 'retrieve-candidates',
  RANK_RELEVANCE: 'rank-relevance',
  VALIDATE_FRESHNESS: 'validate-freshness',
  BUILD_MEMORY_CONTEXT: 'build-memory-context',
  RETURN_CONTEXT: 'return-context'
});

export const MEMORY_FRESHNESS_STATUS = Object.freeze({
  CURRENT: 'current',
  EXPIRED: 'expired',
  CONFLICTING: 'conflicting',
  POLICY_RESTRICTED: 'policy-restricted'
});

export const MEMORY_OPERATION_TELEMETRY_FIELDS = Object.freeze({
  MEMORY_CATEGORY: 'memoryCategory',
  RETRIEVAL_DURATION: 'retrievalDurationMs',
  CANDIDATE_COUNT: 'candidateCount',
  SELECTED_MEMORIES: 'selectedMemories',
  CONFIDENCE: 'confidence',
  FRESHNESS_EVALUATION: 'freshnessEvaluation',
  CORRELATION_ID: 'correlationId'
});

export const CONTEXT_LAYERS = Object.freeze({
  USER_REQUEST: 'user-request',
  CONVERSATION: 'conversation',
  SESSION: 'session',
  MEMORY: 'memory',
  KNOWLEDGE: 'knowledge',
  BUSINESS: 'business',
  EXECUTION: 'execution',
  POLICY: 'policy'
});

export const CONTEXT_ASSEMBLY_STAGES = Object.freeze({
  IDENTIFY_NEED: 'identify-need',
  COLLECT_CANDIDATES: 'collect-candidates',
  REMOVE_DUPLICATES: 'remove-duplicates',
  RESOLVE_CONFLICTS: 'resolve-conflicts',
  RANK_IMPORTANCE: 'rank-importance',
  APPLY_TOKEN_BUDGET: 'apply-token-budget',
  ASSEMBLE_CONTEXT: 'assemble-context',
  DELIVER_TO_REASONING: 'deliver-to-reasoning'
});

export const CONTEXT_TELEMETRY_FIELDS = Object.freeze({
  SELECTED_CONTEXT_LAYERS: 'selectedContextLayers',
  CANDIDATE_COUNT: 'candidateCount',
  FINAL_TOKEN_USAGE: 'finalTokenUsage',
  OMITTED_ITEMS: 'omittedItems',
  ASSEMBLY_DURATION: 'assemblyDurationMs',
  CORRELATION_ID: 'correlationId'
});

export const CONTEXT_CONFLICT_PRIORITY = Object.freeze([
  CONTEXT_LAYERS.BUSINESS,
  CONTEXT_LAYERS.KNOWLEDGE,
  CONTEXT_LAYERS.EXECUTION,
  CONTEXT_LAYERS.SESSION,
  CONTEXT_LAYERS.MEMORY,
  CONTEXT_LAYERS.CONVERSATION
]);

export const ORCHESTRATION_DECISIONS = Object.freeze({
  CONSULT_MEMORY: 'consult-memory',
  RETRIEVE_KNOWLEDGE: 'retrieve-knowledge',
  SELECT_TOOLS: 'select-tools',
  INVOKE_BUSINESS_SERVICE: 'invoke-business-service',
  CONTINUE_WORKFLOW: 'continue-workflow',
  STOP_EXECUTION: 'stop-execution'
});

export const ORCHESTRATOR_ERROR_CODES = Object.freeze({
  COMPONENT_NOT_FOUND: 'ORCHESTRATOR_COMPONENT_NOT_FOUND',
  FORBIDDEN_RESPONSIBILITY: 'ORCHESTRATOR_FORBIDDEN_RESPONSIBILITY',
  INVALID_COORDINATION_REQUEST: 'ORCHESTRATOR_INVALID_COORDINATION_REQUEST',
  LIFECYCLE_STAGE_NOT_FOUND: 'ORCHESTRATOR_LIFECYCLE_STAGE_NOT_FOUND',
  LIFECYCLE_TRAVERSAL_INVALID: 'ORCHESTRATOR_LIFECYCLE_TRAVERSAL_INVALID',
  LIFECYCLE_TRACE_INVALID: 'ORCHESTRATOR_LIFECYCLE_TRACE_INVALID',
  REASONING_STAGE_NOT_FOUND: 'ORCHESTRATOR_REASONING_STAGE_NOT_FOUND',
  REASONING_TRAVERSAL_INVALID: 'ORCHESTRATOR_REASONING_TRAVERSAL_INVALID',
  REASONING_DECISION_INVALID: 'ORCHESTRATOR_REASONING_DECISION_INVALID',
  TOOL_ORCHESTRATION_STAGE_NOT_FOUND: 'ORCHESTRATOR_TOOL_STAGE_NOT_FOUND',
  TOOL_DISCOVERY_FAILED: 'ORCHESTRATOR_TOOL_DISCOVERY_FAILED',
  TOOL_AUTHORIZATION_DENIED: 'ORCHESTRATOR_TOOL_AUTHORIZATION_DENIED',
  TOOL_RESULT_INVALID: 'ORCHESTRATOR_TOOL_RESULT_INVALID',
  TOOL_EXECUTOR_MISSING: 'ORCHESTRATOR_TOOL_EXECUTOR_MISSING',
  MEMORY_ORCHESTRATION_STAGE_NOT_FOUND: 'ORCHESTRATOR_MEMORY_STAGE_NOT_FOUND',
  MEMORY_RETRIEVAL_UNPURPOSED: 'ORCHESTRATOR_MEMORY_RETRIEVAL_UNPURPOSED',
  MEMORY_PROVIDER_MISSING: 'ORCHESTRATOR_MEMORY_PROVIDER_MISSING',
  MEMORY_CONTEXT_INVALID: 'ORCHESTRATOR_MEMORY_CONTEXT_INVALID',
  CONTEXT_ASSEMBLY_STAGE_NOT_FOUND: 'ORCHESTRATOR_CONTEXT_STAGE_NOT_FOUND',
  CONTEXT_ASSEMBLY_INVALID: 'ORCHESTRATOR_CONTEXT_ASSEMBLY_INVALID'
});
