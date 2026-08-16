export const CONTEXT_ASSEMBLY_ERROR_CODE = 'CONTEXT_ASSEMBLY_ORCHESTRATION_INVALID';

export const CONTEXT_ASSEMBLY_OBJECTIVES = Object.freeze({
  RELEVANCE: 'relevant-and-minimal-working-context', ATTRIBUTION: 'strong-source-attribution',
  INSTRUCTIONS: 'explicit-instruction-priority', DOMAIN: 'current-business-references',
  MEMORY: 'authorized-memory-continuity', KNOWLEDGE: 'grounded-knowledge',
  CONFLICT: 'conflict-visibility', UNCERTAINTY: 'uncertainty-preservation',
  BUDGET: 'deterministic-budgets', ISOLATION: 'tenant-and-property-isolation',
  PRIVACY: 'privacy-by-design', INJECTION: 'prompt-injection-resistance',
  SELECTION: 'replaceable-selection-methods', PERFORMANCE: 'bounded-latency-and-cost',
  EVIDENCE: 'reproducible-evidence', DEGRADATION: 'safe-degradation',
  PORTABILITY: 'vendor-neutral-implementation'
});

export const CONTEXT_CONSUMERS = Object.freeze({
  ORCHESTRATOR: 'ai-orchestrator', REASONING: 'reasoning-pipelines', AGENT: 'ai-agents',
  WORKFLOW: 'workflow-tasks', HUMAN_TASK: 'human-task-interfaces', GUEST: 'guest-facing-applications',
  STAFF: 'staff-applications', SUPPORT: 'support-tools', DECISION: 'decision-support-services',
  EVALUATION: 'evaluation-systems'
});

export const CONTEXT_PROFILE_FIELDS = Object.freeze({
  IDENTITY: 'profile-identity', VERSION: 'version', CONSUMER: 'consumer-class',
  PURPOSES: 'permitted-purposes', INSTRUCTIONS: 'required-instruction-layers',
  SOURCES: 'permitted-context-sources', DOMAIN_FACTS: 'required-current-domain-facts',
  KNOWLEDGE: 'allowed-knowledge-domains', MEMORY: 'allowed-memory-types-and-scopes',
  CONVERSATION: 'conversation-window-policy', TOOLS: 'tool-result-policy',
  CLASSIFICATION: 'classification-limit', FRESHNESS: 'freshness-rules', CONFLICT: 'conflict-policy',
  CITATIONS: 'citation-requirements', BUDGET: 'context-budget', CONSUMER_CONSTRAINTS: 'consumer-constraints',
  DEGRADATION: 'degraded-behavior', EVIDENCE: 'evidence-requirements'
});

export const CONTEXT_REQUEST_FIELDS = Object.freeze({
  IDENTITY: 'request-identity', CORRELATION: 'correlation-identity', CONSUMER: 'consumer-identity',
  CONSUMER_VERSION: 'consumer-type-and-version', PRINCIPAL: 'represented-principal', PURPOSE: 'purpose',
  TENANT: 'tenant', PROPERTY: 'property', OPERATION: 'operation-or-task', INPUT: 'current-input-reference',
  CONVERSATION: 'conversation-reference', EXECUTION: 'workflow-or-agent-reference',
  DOMAIN_FACTS: 'required-business-facts', KNOWLEDGE: 'allowed-knowledge-domains',
  MEMORY: 'allowed-memory-scopes', CLASSIFICATION: 'classification-ceiling',
  FRESHNESS: 'freshness-requirements', PROFILE: 'context-profile', BUDGET: 'context-budget',
  DEADLINE: 'deadline', EVIDENCE: 'evidence-requirements'
});

export const CONTEXT_LAYERS = Object.freeze({
  SYSTEM: 'system-instruction-layer', POLICY: 'policy-instruction-layer', REQUEST: 'current-request-layer',
  CONVERSATION: 'conversation-layer', DOMAIN: 'domain-context-layer', KNOWLEDGE: 'knowledge-layer',
  MEMORY: 'memory-layer', WORKFLOW: 'workflow-task-layer', AGENT: 'agent-task-layer',
  TOOL: 'tool-result-layer', RUNTIME: 'runtime-metadata-layer'
});

export const CONTEXT_ASSEMBLY_STAGES = Object.freeze({
  ADMIT: 'admit-context-request', PROFILE: 'select-context-profile', NEED: 'determine-required-layers-and-facts',
  ACQUIRE: 'acquire-authorized-candidates', NORMALIZE: 'normalize-candidate-contracts',
  ELIGIBILITY: 'apply-scope-lifecycle-classification-and-freshness',
  PROVENANCE: 'validate-provenance-and-integrity', CONFLICT: 'detect-duplicates-and-conflicts',
  RANK: 'rank-candidates-within-permitted-role', BUDGET: 'apply-layer-and-total-budgets',
  PRESERVE: 'preserve-mandatory-elements', BUILD: 'build-context-package', VALIDATE: 'validate-package',
  DELIVER: 'deliver-to-authorized-consumer', EVIDENCE: 'record-assembly-evidence',
  UPDATE: 'process-authorized-runtime-updates', DISPOSE: 'dispose-temporary-context',
  PROPOSE: 'submit-bounded-memory-candidates'
});

export const CONTEXT_CANDIDATE_FIELDS = Object.freeze({
  IDENTITY: 'candidate-identity', LAYER: 'layer', CONTENT: 'content-or-reference', SOURCE: 'source-identity',
  SOURCE_VERSION: 'source-version', TENANT: 'tenant', PROPERTY: 'property', SUBJECT: 'subject',
  PURPOSE: 'purpose', AUTHORITY: 'authority', CLASSIFICATION: 'classification',
  EFFECTIVE_TIME: 'effective-time', FRESHNESS: 'freshness', CONFIDENCE: 'confidence',
  PROVENANCE: 'citation-or-provenance', INSTRUCTION: 'instruction-status', INTEGRITY: 'integrity-status',
  LIFECYCLE: 'lifecycle-status', SIZE: 'size', COST: 'cost', LIMITATIONS: 'limitations'
});

export const MEMORY_RETRIEVAL_REQUEST_FIELDS = Object.freeze({
  IDENTITY: 'request-identity', CONSUMER: 'consumer-identity', PRINCIPAL: 'represented-principal',
  PURPOSE: 'purpose', TENANT: 'tenant', PROPERTY: 'property', SUBJECT: 'subject',
  TYPES: 'allowed-memory-types', SCOPES: 'allowed-scopes', CLASSIFICATION: 'classification-limit',
  FRESHNESS: 'freshness-requirement', CONFIRMATION: 'confirmation-requirement',
  CONFLICT: 'conflict-policy', BUDGET: 'result-budget', DEADLINE: 'deadline', CORRELATION: 'correlation'
});

export const MEMORY_RETRIEVAL_STATUSES = Object.freeze({
  SUFFICIENT: 'sufficient', PARTIAL: 'partial', EMPTY: 'empty', AMBIGUOUS: 'ambiguous',
  CONFLICTING: 'conflicting', STALE: 'stale', LIMITED: 'limited', DEGRADED: 'degraded', FAILED: 'failed'
});

export const CONTEXT_CONFLICT_FIELDS = Object.freeze({
  IDENTITY: 'conflict-identity', ELEMENTS: 'conflicting-element-identities', TYPE: 'conflict-type',
  SUBJECT: 'subject', SCOPE: 'scope', AUTHORITY: 'authority-comparison', TEMPORAL: 'temporal-comparison',
  RULE: 'resolution-rule', STATE: 'resolution-state', LIMITATION: 'consumer-visible-limitation',
  ESCALATION: 'required-escalation', EVIDENCE: 'evidence-reference'
});

export const CONTEXT_BUDGET_FIELDS = Object.freeze({
  TOTAL: 'maximum-total-tokens-or-size', LAYERS: 'per-layer-limit', ELEMENTS: 'maximum-elements',
  CANDIDATES: 'maximum-retrieval-candidates', CITATIONS: 'maximum-citations',
  TOOLS: 'maximum-tool-results', LATENCY: 'latency-budget', COST: 'cost-budget',
  RESPONSE: 'reserved-response-capacity', INSTRUCTIONS: 'reserved-mandatory-instruction-capacity',
  SAFETY: 'reserved-safety-and-limitation-capacity'
});

export const CONTEXT_PACKAGE_FIELDS = Object.freeze({
  IDENTITY: 'package-identity', VERSION: 'package-version', REQUEST: 'request-identity',
  CORRELATION: 'correlation-identity', CONSUMER: 'consumer-identity', PRINCIPAL: 'represented-principal',
  PURPOSE: 'purpose', TENANT: 'tenant', PROPERTY: 'property', PROFILE: 'context-profile-and-version',
  METHOD: 'assembly-method-and-version', CREATED: 'created-time', EXPIRATION: 'expiration-time',
  INSTRUCTIONS: 'instruction-elements', REQUEST_ELEMENTS: 'request-elements', DOMAIN: 'domain-elements',
  KNOWLEDGE: 'knowledge-elements', MEMORY: 'memory-elements', CONVERSATION: 'conversation-elements',
  EXECUTION: 'workflow-or-agent-elements', TOOLS: 'tool-result-elements', RUNTIME: 'runtime-metadata',
  CONFLICTS: 'conflicts', LIMITATIONS: 'limitations', BUDGET: 'budget-usage',
  VALIDATION: 'validation-status', EVIDENCE: 'evidence-reference'
});

export const CONTEXT_ASSEMBLY_STATUSES = Object.freeze({
  COMPLETE: 'complete', LIMITED: 'complete-with-limitations', PARTIAL: 'partial',
  CLARIFICATION: 'clarification-required', CONFLICT: 'conflict-requires-review',
  DEGRADED: 'degraded', REJECTED: 'rejected', FAILED: 'failed'
});

export const CONTEXT_ASSEMBLY_OPERATIONS = Object.freeze({
  ASSEMBLE: 'assemble-context', VALIDATE: 'validate-context', REFRESH: 'refresh-context',
  APPEND: 'append-validated-result', METADATA: 'retrieve-package-metadata',
  DISPOSE: 'dispose-context', EVALUATE: 'evaluate-assembly'
});

export const MEMORY_ORCHESTRATION_OPERATIONS = Object.freeze({
  NEED: 'determine-memory-need', QUERY: 'query-eligible-memory', RETRIEVE: 'retrieve-memory-context',
  PROPOSE: 'submit-memory-candidate', CONFIRM: 'request-confirmation', CORRECT: 'request-correction',
  INVALIDATE: 'request-invalidation', DELETE: 'request-deletion', STATUS: 'query-lifecycle-status'
});

export const CONTEXT_DEGRADED_MODES = Object.freeze({
  NO_MEMORY: 'no-memory-retrieval', CONFIRMED_MEMORY: 'confirmed-memory-only',
  CURATED_KNOWLEDGE: 'curated-knowledge-only', LEXICAL_KNOWLEDGE: 'lexical-knowledge-only',
  NO_SUMMARIES: 'no-generated-summaries', READ_ONLY: 'read-only-context',
  DOMAIN_ONLY: 'domain-facts-only', CLARIFICATION: 'human-clarification', ESCALATION: 'human-escalation',
  DISABLED: 'context-assembly-disabled-for-affected-scope'
});

export const CONTEXT_EVALUATION_DIMENSIONS = Object.freeze({
  COVERAGE: 'required-context-coverage', RELEVANCE: 'relevance', AUTHORITY: 'authority',
  FRESHNESS: 'freshness', CITATIONS: 'citation-retention', CONFLICT: 'conflict-preservation',
  INSTRUCTIONS: 'instruction-separation', PRECISION: 'context-precision', EFFICIENCY: 'context-efficiency',
  MEMORY: 'memory-usefulness', MEMORY_OVERUSE: 'memory-overuse', PRIVACY: 'personal-data-minimization',
  TENANT: 'cross-tenant-isolation', PROPERTY: 'property-isolation', INJECTION: 'prompt-injection-resistance',
  RESPONSE: 'response-support', LATENCY: 'latency', COST: 'cost'
});

export const CONTEXT_QUALITY_ATTRIBUTES = Object.freeze({
  RELEVANCE: 'relevance', PRECISION: 'precision', COMPLETENESS: 'completeness', AUTHORITY: 'authority',
  FRESHNESS: 'freshness', MINIMALITY: 'minimality', EXPLAINABILITY: 'explainability',
  TRACEABILITY: 'traceability', SECURITY: 'security', PRIVACY: 'privacy', ISOLATION: 'isolation',
  RELIABILITY: 'reliability', PERFORMANCE: 'performance', SCALABILITY: 'scalability',
  PORTABILITY: 'portability', AUDITABILITY: 'auditability'
});

export const CONTEXT_ASSEMBLY_RULES = Object.freeze({
  TEMPORARY: 'context-is-temporary-purpose-bound-working-set', MINIMAL: 'minimum-authorized-context',
  SOURCE_SEPARATION: 'context-separate-from-source-and-durable-stores',
  REQUEST_IDENTITY: 'authenticated-consumer-principal-purpose-tenant-and-property',
  AUTHORIZATION_FIRST: 'authorization-before-protected-candidate-acquisition',
  SEMANTICS: 'layer-source-scope-classification-lifecycle-and-time-preserved',
  INSTRUCTION_SEPARATION: 'system-and-policy-instructions-separated-from-content',
  NO_CONTENT_AUTHORITY: 'retrieved-content-cannot-gain-instruction-authority',
  EXTERNAL_CONTROLS: 'tool-action-and-memory-write-authority-outside-content',
  DOMAIN_TRUTH: 'current-business-facts-from-domain-services',
  EVIDENCE_ROLES: 'knowledge-is-evidence-and-memory-is-continuity',
  MEMORY_NON_AUTHORITATIVE: 'memory-is-not-authorization-or-current-business-truth',
  MEMORY_NEEDED: 'memory-only-when-material-to-purpose', NO_MEMORY_VALID: 'no-memory-is-valid',
  MEMORY_ELIGIBILITY: 'memory-eligibility-before-candidate-retrieval',
  MEMORY_TYPES_DISTINCT: 'memory-authority-and-type-remain-distinguishable',
  RANKING_BOUNDARY: 'memory-ranking-signals-are-not-truth',
  ATTRIBUTION: 'knowledge-citations-and-memory-provenance-preserved',
  QUALIFICATIONS: 'limitations-uncertainty-conflict-and-human-control-preserved',
  NO_FALSE_CONSENSUS: 'conflicting-context-never-silently-blended',
  CURRENT_AUTHORITY: 'current-domain-truth-and-policy-over-stale-context',
  CURRENT_CHOICE: 'current-explicit-choice-respected-within-policy',
  SAFE_DEDUPLICATION: 'deduplication-preserves-independent-evidence-and-conflict',
  PROFILES_BUDGETS: 'explicit-context-profiles-and-budgets',
  PROTECTED_CAPACITY: 'mandatory-instructions-facts-citations-limitations-and-safety-reserved',
  SAFE_REDUCTION: 'budget-reduction-preserves-safeguards-and-qualifications',
  SUMMARY_DERIVED: 'summaries-are-derived-versioned-representations',
  PACKAGE_VALIDATION: 'every-package-validated-before-delivery',
  PACKAGE_BINDING: 'package-bound-to-consumer-request-purpose-scope-and-expiration',
  NO_REUSE: 'cross-request-or-scope-reuse-requires-new-authorization-and-assembly',
  MODEL_NOT_BOUNDARY: 'model-context-is-not-sole-security-boundary',
  TOOL_VALIDATION: 'tool-results-validated-before-inclusion', UPDATE_VERSIONING: 'runtime-updates-versioned',
  DISPOSAL: 'temporary-context-disposed-by-purpose-classification-and-provider-policy',
  CACHE_INVALIDATION: 'cache-invalidated-on-authorization-policy-source-memory-or-scope-change',
  USE_NOT_REINFORCEMENT: 'memory-use-does-not-automatically-reinforce',
  CANDIDATE_ONLY: 'operation-output-submitted-only-as-memory-candidate',
  NO_ADMISSION_BYPASS: 'orchestrator-agent-tool-and-model-cannot-bypass-memory-admission',
  ACCURATE_LIFECYCLE_STATUS: 'remember-correct-and-forget-status-remains-accurate',
  RESPONSE_VALIDATION: 'responses-and-actions-validated-against-facts-policy-and-authority',
  EXPLICIT_STATUS: 'partial-limited-ambiguous-degraded-rejected-and-failed-explicit',
  NO_FABRICATION: 'missing-context-or-memory-never-fabricated',
  ISOLATION: 'tenant-and-property-isolation-end-to-end', EVIDENCE: 'protected-assembly-and-use-evidence',
  RELIABILITY: 'idempotency-versioning-replay-safety-and-reconciliation',
  SAFE_DEGRADATION: 'degraded-modes-preserve-authorization-isolation-citation-and-safety',
  VERSIONED_CONTRACTS: 'versioned-apis-and-events', NO_DATABASE_ACCESS: 'no-cross-service-database-access',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const CONTEXT_ASSEMBLY_BOUNDARIES = Object.freeze({
  REASONING: 'define-internal-reasoning-algorithm', PROMPT: 'define-one-prompt-template',
  MEMORY_RANKING: 'define-one-memory-ranking-formula', CONTEXT_SCORING: 'define-one-context-scoring-formula',
  API: 'define-detailed-api-schemas', MODEL_ROUTING: 'define-model-routing', TOOL: 'define-tool-implementation',
  AUTHORIZATION: 'define-identity-or-authorization-policy', TENANCY: 'define-multi-tenancy-internals',
  CONVERSATION: 'replace-conversation-service-history', MEMORY: 'replace-memory-manager-lifecycle',
  RETRIEVAL: 'replace-knowledge-retrieval', DOMAIN: 'replace-domain-services',
  WORKFLOW: 'replace-workflow-engine-state', AGENT: 'replace-agent-framework-state',
  PRODUCT: 'select-model-vector-search-context-or-ai-provider'
});
