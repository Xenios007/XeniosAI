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
  LIFECYCLE_TRACE_INVALID: 'ORCHESTRATOR_LIFECYCLE_TRACE_INVALID'
});
