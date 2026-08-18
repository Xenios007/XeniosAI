export const CONVERSATIONAL_AI_AGENT_AND_KNOWLEDGE_REFERENCE_ERROR_CODE = 'CONVERSATIONAL_AI_AGENT_AND_KNOWLEDGE_REFERENCE_INVALID';

export const REFERENCE_FLOW_STEPS = Object.freeze({
  NORMALIZE_CONTENT_AND_METADATA: 'channel-adapter-normalizes-content-and-metadata',
  AUTHENTICATE_ESTABLISH_TENANT_PROPERTY_CONTEXT: 'gateway-authenticates-and-establishes-tenant-property-context',
  LOAD_BOUNDED_CONVERSATION_STATE: 'conversation-service-loads-bounded-conversation-state',
  IDENTIFY_INTENT_MISSING_INPUTS_RISK: 'orchestrator-identifies-intent-missing-inputs-and-risk',
  RETRIEVE_AUTHORIZED_KNOWLEDGE_AND_MEMORY: 'context-assembly-retrieves-authorized-knowledge-and-memory',
  FILTER_AVAILABLE_TOOLS_AND_AGENTS: 'policy-filters-available-tools-and-agents',
  PROPOSE_RESPONSE_OR_TOOL_REQUEST: 'model-proposes-a-response-or-tool-request',
  AUTHORIZE_AND_EXECUTE_TOOLS: 'deterministic-validation-authorizes-and-executes-tools',
  GROUND_AND_EXPLAIN_RESULT: 'orchestrator-grounds-and-explains-the-result',
  CAPTURE_TELEMETRY_AND_EVALUATION_EVIDENCE: 'telemetry-and-evaluation-capture-evidence'
});

export const NORMALIZED_REQUEST_FIELDS = Object.freeze({
  CHANNEL: 'channel', ACTOR: 'actor', TENANT: 'tenant', PROPERTY: 'property', CONVERSATION: 'conversation',
  LOCALE: 'locale', MESSAGE: 'message', ATTACHMENTS: 'attachments', CORRELATION: 'correlation',
  CONSENT: 'consent', CLASSIFICATION: 'classification'
});

export const ORCHESTRATOR_RESPONSIBILITIES = Object.freeze({
  INTENT_AND_ENTITY_INTERPRETATION: 'intent-and-entity-interpretation', CONTEXT_SELECTION: 'context-selection',
  PROMPT_AND_MODEL_POLICY: 'prompt-and-model-policy', TOOL_AND_AGENT_SELECTION: 'tool-and-agent-selection',
  REASONING_BUDGET: 'reasoning-budget', SAFETY_AND_GROUNDING: 'safety-and-grounding',
  CLARIFICATION_AND_ESCALATION: 'clarification-and-escalation', EVIDENCE: 'evidence'
});

export const ORCHESTRATOR_EXCLUSIONS = Object.freeze({
  BOOKINGS: 'bookings', RATES: 'rates', PAYMENTS: 'payments', PROPERTY_DATA: 'property-data',
  IDENTITY: 'identity', AUTHORIZATION: 'authorization'
});

export const TOOL_ATTRIBUTES = Object.freeze({
  STABLE_IDENTITY: 'stable-identity', SCHEMA: 'schema', PROVIDER: 'provider', REQUIRED_AUTHORITY: 'required-authority',
  TENANT_SEMANTICS: 'tenant-semantics', SIDE_EFFECTS: 'side-effects', IDEMPOTENCY: 'idempotency',
  TIMEOUT: 'timeout', COST: 'cost', CONFIRMATION: 'confirmation', EVIDENCE: 'evidence'
});

export const TOOL_EXAMPLES = Object.freeze({
  AVAILABILITY_QUERY: 'availability-query', RATE_COMPUTATION: 'rate-computation', RESERVATION_REQUEST: 'reservation-request',
  PROPERTY_INFORMATION: 'property-information', NOTIFICATION: 'notification', SUPPORT_ESCALATION: 'support-escalation'
});

export const AGENT_ATTRIBUTES = Object.freeze({
  OWNER: 'owner', PURPOSE: 'purpose', SUPPORTED_GOALS: 'supported-goals', PROHIBITED_GOALS: 'prohibited-goals',
  TENANT_PROPERTY_SCOPE: 'tenant-property-scope', TOOL_SET: 'tool-set', AUTONOMY_LEVEL: 'autonomy-level',
  BUDGET: 'budget', STOP_CONDITIONS: 'stop-conditions', HUMAN_APPROVAL: 'human-approval', EVALUATION_PROFILE: 'evaluation-profile'
});

export const KNOWLEDGE_SOURCES = Object.freeze({
  APPROVED_PROPERTY_INFORMATION: 'approved-property-information', POLICIES: 'policies', FAQS: 'faqs',
  LOCAL_GUIDES: 'local-guides', OPERATING_PROCEDURES: 'operating-procedures'
});

export const KNOWLEDGE_INGESTION_LINEAGE_FIELDS = Object.freeze({
  SOURCE: 'source', VERSION: 'version', OWNERSHIP: 'ownership', CLASSIFICATION: 'classification',
  VALIDITY: 'validity', TRANSFORMATION: 'transformation', DELETION_LINEAGE: 'deletion-lineage'
});

export const MEMORY_QUALITIES = Object.freeze({
  CORRECTABLE: 'correctable', EXPIRING: 'expiring', ATTRIBUTABLE: 'attributable', DELETABLE: 'deletable'
});

export const GROUNDING_CATEGORIES = Object.freeze({
  AUTHORITATIVE_TOOL_RESULTS: 'authoritative-tool-results', GOVERNED_KNOWLEDGE: 'governed-knowledge',
  BOUNDED_MEMORY: 'bounded-memory', MODEL_INFERENCE: 'model-inference',
  UNKNOWN_OR_CONFLICTING_INFORMATION: 'unknown-or-conflicting-information'
});

export const HUMAN_SUPERVISION_MATERIAL_ACTIONS = Object.freeze({
  RESERVATION_CONFIRMATION: 'reservation-confirmation', FINANCIAL_COMMITMENTS: 'financial-commitments',
  SENSITIVE_GUEST_COMMUNICATION: 'sensitive-guest-communication', EXCEPTION_HANDLING: 'exception-handling',
  HIGH_RISK_AGENT_BEHAVIOR: 'high-risk-agent-behavior'
});

export const SAFETY_CASES = Object.freeze({
  PROMPT_INJECTION_IN_RETRIEVED_CONTENT: 'prompt-injection-in-retrieved-content',
  TOOL_DESCRIPTION_MANIPULATION: 'tool-description-manipulation',
  FABRICATED_AVAILABILITY_OR_RATE: 'fabricated-availability-or-rate',
  CROSS_TENANT_RETRIEVAL: 'cross-tenant-retrieval', SENSITIVE_MEMORY_ADMISSION: 'sensitive-memory-admission',
  AGENT_RETRY_LOOP: 'agent-retry-loop', UNAUTHORIZED_DELEGATION: 'unauthorized-delegation',
  CONFLICTING_KNOWLEDGE: 'conflicting-knowledge'
});

export const EVALUATION_DIMENSIONS = Object.freeze({
  INTENT_ACCURACY: 'intent-accuracy', TOOL_SELECTION: 'tool-selection', ARGUMENT_VALIDITY: 'argument-validity',
  AUTHORIZATION: 'authorization', GROUNDING: 'grounding', CITATION: 'citation', HALLUCINATION: 'hallucination',
  POLICY_COMPLIANCE: 'policy-compliance', LATENCY: 'latency', COST: 'cost', ESCALATION: 'escalation',
  TENANT_ISOLATION: 'tenant-isolation'
});

export const EVALUATION_DATASET_CATEGORIES = Object.freeze({
  SYNTHETIC: 'synthetic', ADVERSARIAL: 'adversarial', MULTILINGUAL: 'multilingual',
  AMBIGUOUS: 'ambiguous', FAILURE_CASES: 'failure-cases'
});

export const CONVERSATIONAL_REFERENCE_ACCEPTANCE_CRITERIA = Object.freeze({
  AI_CANNOT_ALTER_BUSINESS_STATE_WITHOUT_GOVERNED_TOOL_OR_WORKFLOW: 'ai-cannot-alter-business-state-without-a-governed-tool-or-workflow',
  TOOL_PROVIDERS_VALIDATE_ACTOR_TENANT_PROPERTY_AND_RESOURCE: 'tool-providers-validate-actor-tenant-property-and-resource',
  RETRIEVAL_CANNOT_CROSS_TENANT_OR_PROPERTY_POLICY: 'retrieval-cannot-cross-tenant-or-property-policy',
  MEMORY_ADMISSION_IS_EXPLICIT: 'memory-admission-is-explicit',
  AGENT_BUDGETS_AND_STOP_CONDITIONS_ARE_ENFORCED: 'agent-budgets-and-stop-conditions-are-enforced',
  UNSUPPORTED_ANSWERS_STATE_UNCERTAINTY_OR_ESCALATE: 'unsupported-answers-state-uncertainty-or-escalate'
});

export const CONVERSATIONAL_ARCHITECTURAL_RULES = Object.freeze({
  AI_INTERPRETS_AND_ORCHESTRATES_DETERMINISTIC_PROVIDERS_EXECUTE: 'ai-interprets-and-orchestrates-deterministic-providers-execute',
  TOOL_DISCOVERY_AND_INVOCATION_ARE_SEPARATE_AUTHORIZATION_DECISIONS: 'tool-discovery-and-invocation-are-separate-authorization-decisions',
  KNOWLEDGE_RETRIEVAL_IS_NOT_AUTHORITY: 'knowledge-retrieval-is-not-authority',
  MEMORY_IS_DELIBERATE_AND_PURPOSE_BOUND: 'memory-is-deliberate-and-purpose-bound',
  EVALUATIONS_ARE_RELEASE_AND_OPERATIONAL_EVIDENCE: 'evaluations-are-release-and-operational-evidence'
});
