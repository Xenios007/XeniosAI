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
  INVALID_COORDINATION_REQUEST: 'ORCHESTRATOR_INVALID_COORDINATION_REQUEST'
});
