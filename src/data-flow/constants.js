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

export const COMMAND_LIFECYCLE_STAGES = Object.freeze({
  REQUEST_RECEIVED: 'request-received',
  INTENT_IDENTIFIED: 'intent-identified',
  DECISION_AUTHORIZED: 'decision-authorized',
  COMMAND_CREATED: 'command-created',
  BUSINESS_VALIDATION: 'business-validation',
  BUSINESS_EXECUTION: 'business-execution',
  PERSIST_CHANGES: 'persist-changes',
  PUBLISH_EVENTS: 'publish-events',
  RETURN_RESULT: 'return-result'
});

export const COMMAND_OUTCOMES = Object.freeze({
  SUCCESS: 'success',
  VALIDATION_FAILURE: 'validation-failure',
  AUTHORIZATION_FAILURE: 'authorization-failure',
  BUSINESS_REJECTION: 'business-rejection',
  PARTIAL_SUCCESS: 'partial-success',
  SYSTEM_FAILURE: 'system-failure'
});

export const COMMAND_CHARACTERISTICS = Object.freeze({
  CHANGES_STATE: 'changes-state',
  ONE_BUSINESS_OWNER: 'one-business-owner',
  EXPLICIT_CONTRACT: 'explicit-contract',
  VALIDATED_BEFORE_EXECUTION: 'validated-before-execution',
  NOT_REUSED_AS_QUERY: 'not-reused-as-query',
  OBSERVABLE_OUTCOME: 'observable-outcome'
});

export const COMMAND_FAILURE_TYPES = Object.freeze({
  INVALID_INPUT: 'invalid-input',
  BUSINESS_RULE_VIOLATION: 'business-rule-violation',
  AUTHORIZATION_FAILURE: 'authorization-failure',
  DEPENDENCY_UNAVAILABLE: 'dependency-unavailable',
  PERSISTENCE_FAILURE: 'persistence-failure',
  TIMEOUT: 'timeout'
});

export const COMMAND_TELEMETRY_FIELDS = Object.freeze({
  COMMAND_NAME: 'commandName',
  CORRELATION_ID: 'correlationId',
  REQUEST_ID: 'requestId',
  OWNING_SERVICE: 'owningService',
  EXECUTION_DURATION: 'executionDurationMs',
  RESULT: 'result',
  FAILURE_REASON: 'failureReason'
});

export const QUERY_LIFECYCLE_STAGES = Object.freeze({
  REQUEST_RECEIVED: 'request-received',
  INTENT_IDENTIFIED: 'intent-identified',
  DECISION_AUTHORIZED: 'decision-authorized',
  QUERY_CONSTRUCTED: 'query-constructed',
  RETRIEVE_DATA: 'retrieve-data',
  VALIDATE_RESULT: 'validate-result',
  COMPOSE_RESPONSE: 'compose-response',
  RETURN_RESULT: 'return-result'
});

export const QUERY_CHARACTERISTICS = Object.freeze({
  READ_ONLY: 'read-only',
  SIDE_EFFECT_FREE: 'side-effect-free',
  AUTHORITATIVE: 'authoritative',
  REPEATABLE: 'repeatable',
  OBSERVABLE: 'observable',
  STATELESS_WHEN_PRACTICAL: 'stateless-when-practical'
});

export const QUERY_RESULT_STATUSES = Object.freeze({
  SUCCESS: 'success',
  AUTHORIZATION_DENIED: 'authorization-denied',
  DATA_UNAVAILABLE: 'data-unavailable',
  SERVICE_TIMEOUT: 'service-timeout',
  MISSING_RECORDS: 'missing-records',
  EXTERNAL_PROVIDER_FAILURE: 'external-provider-failure',
  TEMPORARY_INFRASTRUCTURE_ISSUE: 'temporary-infrastructure-issue'
});

export const QUERY_OPTIMIZATION_STRATEGIES = Object.freeze({
  READ_CACHING: 'read-caching',
  SEARCH_INDEXES: 'search-indexes',
  MATERIALIZED_VIEWS: 'materialized-views',
  READ_REPLICAS: 'read-replicas',
  RESPONSE_COMPRESSION: 'response-compression',
  PAGINATION: 'pagination'
});

export const QUERY_TELEMETRY_FIELDS = Object.freeze({
  QUERY_NAME: 'queryName',
  CORRELATION_ID: 'correlationId',
  REQUEST_ID: 'requestId',
  OWNING_SERVICE: 'owningService',
  RESPONSE_DURATION: 'responseDurationMs',
  RESULT_STATUS: 'resultStatus',
  DATA_SOURCE: 'dataSource',
  FAILURE_REASON: 'failureReason'
});

export const DATA_FLOW_ERROR_CODES = Object.freeze({
  EXECUTION_STAGE_NOT_FOUND: 'DATA_FLOW_EXECUTION_STAGE_NOT_FOUND',
  EXECUTION_PARTICIPANT_NOT_FOUND: 'DATA_FLOW_EXECUTION_PARTICIPANT_NOT_FOUND',
  EXECUTION_LIFECYCLE_INVALID: 'DATA_FLOW_EXECUTION_LIFECYCLE_INVALID',
  EXECUTION_STATE_TRANSITION_INVALID: 'DATA_FLOW_EXECUTION_STATE_TRANSITION_INVALID',
  EXECUTION_TELEMETRY_INVALID: 'DATA_FLOW_EXECUTION_TELEMETRY_INVALID',
  EXECUTION_BOUNDARY_INVALID: 'DATA_FLOW_EXECUTION_BOUNDARY_INVALID',
  COMMAND_STAGE_NOT_FOUND: 'DATA_FLOW_COMMAND_STAGE_NOT_FOUND',
  COMMAND_LIFECYCLE_INVALID: 'DATA_FLOW_COMMAND_LIFECYCLE_INVALID',
  COMMAND_DEFINITION_INVALID: 'DATA_FLOW_COMMAND_DEFINITION_INVALID',
  COMMAND_AUTHORIZATION_INVALID: 'DATA_FLOW_COMMAND_AUTHORIZATION_INVALID',
  COMMAND_TELEMETRY_INVALID: 'DATA_FLOW_COMMAND_TELEMETRY_INVALID',
  QUERY_STAGE_NOT_FOUND: 'DATA_FLOW_QUERY_STAGE_NOT_FOUND',
  QUERY_LIFECYCLE_INVALID: 'DATA_FLOW_QUERY_LIFECYCLE_INVALID',
  QUERY_DEFINITION_INVALID: 'DATA_FLOW_QUERY_DEFINITION_INVALID',
  QUERY_AUTHORIZATION_INVALID: 'DATA_FLOW_QUERY_AUTHORIZATION_INVALID',
  QUERY_SIDE_EFFECT_INVALID: 'DATA_FLOW_QUERY_SIDE_EFFECT_INVALID',
  QUERY_TELEMETRY_INVALID: 'DATA_FLOW_QUERY_TELEMETRY_INVALID'
});
