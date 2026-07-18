export const EXECUTION_LIFECYCLE_STAGES = Object.freeze({
  RECEIVE_REQUEST: 'receive-request',
  NORMALIZE_REQUEST: 'normalize-request',
  ANALYZE_INTENT: 'analyze-intent',
  BUILD_CONTEXT: 'build-context',
  AUTHORIZE_EXECUTION: 'authorize-execution',
  EXECUTE_BUSINESS_OPERATIONS: 'execute-business-operations',
  VALIDATE_RESULTS: 'validate-results',
  COMPOSE_RESPONSE: 'compose-response',
  RETURN_RESPONSE: 'return-response'
});

export const EXECUTION_PARTICIPANTS = Object.freeze({
  EXPERIENCE_LAYER: 'experience-layer',
  AI_ORCHESTRATOR: 'ai-orchestrator',
  DECISION_ENGINE: 'decision-engine',
  BUSINESS_SERVICES: 'business-services',
  DATA_LAYER: 'data-layer',
  INTEGRATION_LAYER: 'integration-layer'
});

export const EXECUTION_RESPONSIBILITIES = Object.freeze({
  REQUEST_RECEPTION: 'request-reception',
  INPUT_VALIDATION: 'input-validation',
  CHANNEL_NORMALIZATION: 'channel-normalization',
  INTENT_ANALYSIS: 'intent-analysis',
  CONTEXT_CONSTRUCTION: 'context-construction',
  DECISION_COORDINATION: 'decision-coordination',
  TOOL_ORCHESTRATION: 'tool-orchestration',
  WORKFLOW_COORDINATION: 'workflow-coordination',
  POLICY_EVALUATION: 'policy-evaluation',
  AUTHORIZATION: 'authorization',
  CONFIDENCE_ASSESSMENT: 'confidence-assessment',
  EXECUTION_APPROVAL: 'execution-approval',
  BUSINESS_CAPABILITY_EXECUTION: 'business-capability-execution',
  DATA_PERSISTENCE: 'data-persistence',
  QUERY_EXECUTION: 'query-execution',
  TRANSACTION_SUPPORT: 'transaction-support',
  DATA_INTEGRITY: 'data-integrity',
  EXTERNAL_COMMUNICATION: 'external-communication'
});

export const EXECUTION_STATES = Object.freeze({
  RECEIVED: 'received',
  VALIDATED: 'validated',
  ORCHESTRATED: 'orchestrated',
  AUTHORIZED: 'authorized',
  EXECUTING: 'executing',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled'
});

export const EXECUTION_TELEMETRY_FIELDS = Object.freeze({
  CORRELATION_ID: 'correlationId',
  REQUEST_ID: 'requestId',
  EXECUTION_DURATION: 'executionDurationMs',
  PARTICIPATING_COMPONENTS: 'participatingComponents',
  SERVICE_INTERACTIONS: 'serviceInteractions',
  STATUS: 'status',
  EXECUTION_OUTCOME: 'executionOutcome'
});

export const DATA_FLOW_ERROR_CODES = Object.freeze({
  EXECUTION_STAGE_NOT_FOUND: 'DATA_FLOW_EXECUTION_STAGE_NOT_FOUND',
  EXECUTION_PARTICIPANT_NOT_FOUND: 'DATA_FLOW_EXECUTION_PARTICIPANT_NOT_FOUND',
  EXECUTION_LIFECYCLE_INVALID: 'DATA_FLOW_EXECUTION_LIFECYCLE_INVALID',
  EXECUTION_STATE_TRANSITION_INVALID: 'DATA_FLOW_EXECUTION_STATE_TRANSITION_INVALID',
  EXECUTION_TELEMETRY_INVALID: 'DATA_FLOW_EXECUTION_TELEMETRY_INVALID',
  EXECUTION_BOUNDARY_INVALID: 'DATA_FLOW_EXECUTION_BOUNDARY_INVALID'
});
