export const WORKFLOW_INTEGRATION_ERROR_CODE = 'WORKFLOW_INTEGRATION_INVALID';

export const WORKFLOW_COMMUNICATION_MODELS = Object.freeze({
  SYNCHRONOUS: 'synchronous-request-response',
  ASYNC_COMMAND: 'asynchronous-command',
  DOMAIN_EVENT: 'domain-event',
  INTEGRATION_EVENT: 'integration-event',
  SIGNAL: 'workflow-signal',
  CALLBACK: 'callback',
  HUMAN_TASK: 'human-task',
  AGENT_TASK: 'agent-task'
});

export const WORKFLOW_INTEGRATION_DOMAINS = Object.freeze({
  BUSINESS: 'business-services',
  PLATFORM: 'platform-services',
  AI_ORCHESTRATOR: 'ai-orchestrator',
  AGENT_FRAMEWORK: 'ai-agent-framework',
  KNOWLEDGE_MEMORY: 'knowledge-and-memory',
  HUMAN: 'human-task-interfaces',
  CHILD_WORKFLOWS: 'parent-and-child-workflows',
  EVENTS: 'event-infrastructure',
  QUEUES: 'queue-infrastructure',
  PROVIDERS: 'external-providers',
  TENANT: 'tenant-systems',
  PROPERTY: 'property-local-systems',
  OPERATIONS_GOVERNANCE: 'operational-and-governance-services'
});

export const WORKFLOW_INTEGRATION_CONTRACT_FIELDS = Object.freeze({
  CAPABILITY: 'logical-capability',
  IDENTITY: 'contract-identity',
  VERSION: 'version',
  OWNER: 'owner',
  INPUT: 'input',
  OUTPUT: 'output',
  ERRORS: 'errors',
  SIDE_EFFECTS: 'side-effects',
  AUTHORITY: 'authority',
  TENANT: 'tenant-behavior',
  PROPERTY: 'property-behavior',
  IDEMPOTENCY: 'idempotency',
  TIMEOUT: 'timeout',
  CANCELLATION: 'cancellation',
  RECONCILIATION: 'reconciliation',
  COMPENSATION: 'compensation-where-supported',
  COMMITMENT: 'service-commitment',
  EVIDENCE: 'evidence',
  DEPRECATION: 'deprecation'
});

export const WORKFLOW_INITIATORS = Object.freeze({
  APPLICATION: 'user-facing-application',
  AI_ORCHESTRATOR: 'ai-orchestrator',
  BUSINESS_SERVICE: 'business-service',
  PLATFORM_SERVICE: 'platform-service',
  DOMAIN_EVENT: 'domain-event',
  SCHEDULE: 'schedule',
  PARENT_WORKFLOW: 'parent-workflow',
  AI_AGENT: 'ai-agent',
  HUMAN_OPERATOR: 'human-operator'
});

export const WORKFLOW_COMMAND_OUTCOMES = Object.freeze({
  ACCEPTED: 'accepted',
  COMPLETED: 'completed',
  REJECTED: 'rejected',
  CONFLICT: 'conflict',
  DEFERRED: 'deferred',
  CANCELLED: 'cancelled',
  FAILED: 'failed',
  UNCERTAIN: 'uncertain'
});

export const WORKFLOW_CHILD_VERSION_BINDINGS = Object.freeze({
  FIXED: 'fixed',
  COMPATIBLE_RANGE: 'approved-compatible-range',
  TENANT_SCOPE: 'active-tenant-scope',
  GOVERNED_ROUTE: 'governed-routing-policy'
});

export const WORKFLOW_INTEGRATION_ERRORS = Object.freeze({
  INVALID_INPUT: 'invalid-input',
  NOT_AUTHORIZED: 'not-authorized',
  INVALID_TENANT: 'invalid-tenant',
  INVALID_PROPERTY: 'invalid-property',
  NOT_FOUND: 'not-found',
  CONFLICT: 'conflict',
  BUSINESS_REJECTION: 'business-rejection',
  RATE_LIMITED: 'rate-limited',
  DEPENDENCY_UNAVAILABLE: 'dependency-unavailable',
  TIMEOUT: 'timeout',
  CANCELLED: 'cancelled',
  RESULT_UNCERTAIN: 'result-uncertain',
  PROVIDER_FAILURE: 'provider-failure',
  POLICY_DENIED: 'policy-denied'
});

export const WORKFLOW_INTEGRATION_OPERATIONS = Object.freeze({
  SUSPEND: 'suspend-integration',
  DRAIN: 'drain-adapter',
  DISABLE_PROVIDER: 'disable-provider-route',
  PAUSE_DISPATCH: 'pause-dispatch',
  REPUBLISH: 'reissue-committed-publication',
  RECONCILE: 'reconcile-uncertain-operations',
  ROTATE_CREDENTIALS: 'rotate-credentials',
  ACTIVATE_VERSION: 'activate-compatible-contract-version'
});

export const WORKFLOW_INTEGRATION_QUALITY_ATTRIBUTES = Object.freeze({
  MODULARITY: 'modularity',
  INTEROPERABILITY: 'interoperability',
  RELIABILITY: 'reliability',
  SECURITY: 'security',
  TRACEABILITY: 'traceability',
  REPLACEABILITY: 'replaceability',
  PORTABILITY: 'portability'
});

export const WORKFLOW_INTEGRATION_RULES = Object.freeze({
  PUBLISHED_INTERFACES: 'published-interfaces-and-governed-adapters',
  NO_DATABASE_ACCESS: 'no-cross-service-database-access',
  AUTHORITATIVE_OWNER: 'one-authoritative-owner-per-business-entity',
  COORDINATION_BOUNDARY: 'workflow-coordination-separate-from-domain-rules',
  REQUEST_BOUNDARY: 'request-orchestration-separate-from-durable-workflow-state',
  VERSIONED_CONTRACTS: 'version-every-material-contract',
  COMPATIBILITY: 'preserve-backward-compatibility',
  VERSION_BINDING: 'bind-effective-version-per-interaction',
  PROPAGATION: 'propagate-identity-authority-scope-correlation-idempotency',
  INDEPENDENT_AUTHORIZATION: 'target-services-authorize-independently',
  STABLE_OPERATION: 'stable-operation-identity-across-retries',
  RELIABILITY_SEMANTICS: 'explicit-timeout-error-cancellation-reconciliation-compensation',
  BUSINESS_COMPLETION: 'transport-success-distinct-from-business-completion',
  PROVIDER_ACL: 'provider-anti-corruption-layer',
  CHILD_IDENTITY: 'preserve-child-workflow-identity-and-version',
  PARTICIPATION_CONTRACTS: 'human-and-agent-participation-contract-bound',
  NO_CREDENTIAL_PAYLOADS: 'credentials-excluded-from-definitions-and-payloads',
  EVIDENCE: 'end-to-end-evidence',
  NEUTRALITY: 'vendor-neutral'
});

export const WORKFLOW_INTEGRATION_BOUNDARIES = Object.freeze({
  SERVICE_INTERNALS: 'define-service-internals',
  PROVIDER_PRODUCTS: 'define-provider-products',
  EVENT_BROKER: 'define-event-broker-technology',
  API_SDK: 'define-detailed-api-and-sdk-fields',
  RUNTIME_STORAGE: 'define-workflow-runtime-storage',
  AGENT_REASONING: 'define-agent-reasoning',
  HUMAN_UI: 'define-human-interface-design',
  REPLACE_ARCH_009: 'replace-integration-architecture',
  REPLACE_ARCH_004: 'replace-ai-orchestrator'
});
