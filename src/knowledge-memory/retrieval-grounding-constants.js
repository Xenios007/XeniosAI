export const KNOWLEDGE_RETRIEVAL_ERROR_CODE = 'KNOWLEDGE_RETRIEVAL_INVALID';

export const KNOWLEDGE_RETRIEVAL_OBJECTIVES = Object.freeze({
  RELEVANCE: 'relevant-knowledge',
  AUTHORIZATION: 'authorized-knowledge-only',
  CURRENTNESS: 'current-and-effective-knowledge',
  ATTRIBUTION: 'source-attribution',
  CITATIONS: 'stable-citations',
  AUTHORITY: 'explicit-authority',
  FRESHNESS: 'explicit-freshness',
  HYBRID: 'hybrid-search',
  RANKING: 'explainable-ranking',
  BOUNDED: 'bounded-results',
  CONFLICT: 'conflict-visibility',
  INSUFFICIENCY: 'safe-insufficiency',
  ISOLATION: 'tenant-and-property-isolation',
  PERFORMANCE: 'predictable-performance',
  PORTABILITY: 'provider-portability',
  EVALUATION: 'evaluation-and-evidence'
});

export const KNOWLEDGE_RETRIEVAL_CONSUMERS = Object.freeze({
  GUEST: 'guest-facing-applications',
  STAFF: 'staff-applications',
  SEARCH: 'search-interfaces',
  ORCHESTRATOR: 'ai-orchestrator',
  AGENT: 'ai-agents',
  WORKFLOW: 'workflow-tasks',
  SUPPORT: 'support-tools',
  DEVELOPER: 'developer-tools',
  OPERATIONS: 'operational-tools',
  GOVERNANCE: 'governance-and-assurance-tools'
});

export const KNOWLEDGE_RETRIEVAL_PURPOSES = Object.freeze({
  GUEST_ANSWER: 'guest-answer',
  STAFF_GUIDANCE: 'staff-guidance',
  POLICY: 'policy-lookup',
  TRAINING: 'training',
  WORKFLOW: 'workflow-task-support',
  AGENT: 'agent-task-support',
  TECHNICAL: 'technical-support',
  HISTORICAL: 'historical-review',
  AUDIT: 'audit-or-assurance',
  CURATION: 'knowledge-curation'
});

export const KNOWLEDGE_SEARCH_METHODS = Object.freeze({
  EXACT: 'exact-retrieval',
  METADATA: 'metadata-retrieval',
  LEXICAL: 'lexical-retrieval',
  SEMANTIC: 'semantic-retrieval',
  VECTOR: 'vector-retrieval',
  GRAPH: 'graph-retrieval',
  STRUCTURED: 'structured-retrieval',
  TEMPORAL: 'temporal-retrieval',
  CURATED: 'curated-answer-retrieval',
  DOMAIN: 'domain-service-lookup',
  HYBRID: 'hybrid-retrieval'
});

export const KNOWLEDGE_ELIGIBLE_CORPUS_FACTORS = Object.freeze({
  DOMAIN: 'authorized-knowledge-domains',
  TENANT: 'tenant-scope',
  PROPERTY: 'property-scope',
  CLASSIFICATION: 'classification-allowance',
  CHANNEL: 'publication-channel',
  LIFECYCLE: 'active-lifecycle-state',
  EFFECTIVE_TIME: 'effective-time',
  FRESHNESS: 'freshness-requirement',
  LANGUAGE: 'language',
  RIGHTS: 'rights-and-use-restrictions',
  PROFILE: 'consumer-profile'
});

export const KNOWLEDGE_SEARCH_PLAN_FIELDS = Object.freeze({
  CORPUS: 'eligible-corpus',
  VARIANTS: 'query-variants',
  METHODS: 'retrieval-methods',
  FILTERS: 'filters',
  CANDIDATES: 'candidate-budget',
  TIMEOUT: 'timeout',
  FUSION: 'fusion-method',
  RANKING: 'ranking-method',
  RERANKING: 'reranking-method',
  DIVERSITY: 'diversity-rule',
  CITATION: 'citation-requirement',
  FALLBACK: 'fallback',
  EVIDENCE: 'evidence'
});

export const KNOWLEDGE_CANDIDATE_FIELDS = Object.freeze({
  ITEM: 'knowledge-item-version',
  CONTENT: 'chunk-or-structured-record',
  SOURCE: 'source',
  CITATION: 'citation',
  METHOD: 'retrieval-method',
  SCORE: 'method-specific-score',
  AUTHORITY: 'authority',
  FRESHNESS: 'freshness',
  EFFECTIVE_TIME: 'effective-time',
  SCOPE: 'tenant-and-property',
  CLASSIFICATION: 'classification',
  LIFECYCLE: 'lifecycle',
  PROVENANCE: 'provenance'
});

export const KNOWLEDGE_RESULT_STATUSES = Object.freeze({
  SUFFICIENT: 'sufficient',
  PARTIAL: 'partially-sufficient',
  EMPTY: 'empty',
  AMBIGUOUS: 'ambiguous',
  CONFLICTING: 'conflicting',
  STALE: 'stale',
  AUTHORIZATION_LIMITED: 'authorization-limited',
  SOURCE_UNAVAILABLE: 'source-unavailable',
  REPRESENTATION_DEGRADED: 'representation-degraded',
  FAILED: 'failed'
});

export const KNOWLEDGE_GROUNDING_PACKAGE_FIELDS = Object.freeze({
  IDENTITY: 'package-identity',
  CONSUMER: 'consumer',
  PURPOSE: 'purpose',
  SCOPE: 'tenant-and-property',
  QUERY: 'query',
  EVIDENCE: 'knowledge-excerpts-or-structured-records',
  CITATIONS: 'citations',
  PROVENANCE: 'provenance',
  AUTHORITY: 'authority',
  FRESHNESS: 'freshness',
  EFFECTIVE_TIME: 'effective-time',
  METHOD: 'retrieval-method',
  LIMITATIONS: 'limitations',
  CONFLICT: 'conflict-status',
  INSTRUCTION_BOUNDARY: 'instruction-boundary-metadata',
  EXPIRATION: 'expiration'
});

export const KNOWLEDGE_CITATION_FIELDS = Object.freeze({
  IDENTITY: 'citation-identity',
  SOURCE: 'source',
  ARTIFACT: 'artifact-version',
  ITEM: 'knowledge-item-version',
  LOCATION: 'location',
  SCOPE: 'tenant-and-property',
  LIFECYCLE: 'lifecycle-state',
  EFFECTIVE_TIME: 'effective-time',
  ACCESS: 'access-policy',
  INTEGRITY: 'integrity',
  REPLACEMENT: 'replacement-relationship'
});

export const KNOWLEDGE_DEGRADED_RETRIEVAL_MODES = Object.freeze({
  LEXICAL_ONLY: 'lexical-without-semantic',
  EXACT_ONLY: 'exact-retrieval-only',
  CURATED_ONLY: 'curated-answers-only',
  NO_RERANKING: 'no-reranking',
  RESTRICTED_SOURCES: 'restricted-source-set',
  CACHED: 'cached-approved-results-within-freshness-limit',
  DOMAIN: 'direct-domain-service-lookup',
  HUMAN: 'human-escalation',
  UNAVAILABLE: 'retrieval-unavailable'
});

export const KNOWLEDGE_RETRIEVAL_TIMEOUTS = Object.freeze({
  ADMISSION: 'admission-timeout',
  PLANNING: 'query-planning-timeout',
  SEARCH: 'search-timeout',
  RERANKING: 'reranking-timeout',
  CITATION: 'citation-timeout',
  DOMAIN: 'domain-lookup-timeout',
  OVERALL: 'overall-deadline'
});

export const KNOWLEDGE_RETRIEVAL_EVALUATION_DIMENSIONS = Object.freeze({
  RELEVANCE: 'relevance',
  PRECISION: 'precision',
  RECALL: 'recall-where-measurable',
  AUTHORITY: 'authority',
  FRESHNESS: 'freshness',
  CITATION_CORRECTNESS: 'citation-correctness',
  CITATION_COMPLETENESS: 'citation-completeness',
  GROUNDING: 'grounding-completeness',
  CONFLICT: 'conflict-detection',
  INSUFFICIENCY: 'insufficiency-detection',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_ISOLATION: 'property-isolation',
  PROMPT_INJECTION: 'prompt-injection-resilience',
  LATENCY: 'latency',
  COST: 'cost'
});

export const KNOWLEDGE_RETRIEVAL_QUALITY_ATTRIBUTES = Object.freeze({
  RELEVANCE: 'relevance',
  PRECISION: 'precision',
  COVERAGE: 'coverage',
  AUTHORITY: 'authority',
  FRESHNESS: 'freshness',
  EXPLAINABILITY: 'explainability',
  TRACEABILITY: 'traceability',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  ISOLATION: 'isolation',
  AVAILABILITY: 'availability',
  PERFORMANCE: 'performance',
  SCALABILITY: 'scalability',
  RESILIENCE: 'resilience',
  PORTABILITY: 'portability',
  AUDITABILITY: 'auditability'
});

export const KNOWLEDGE_RETRIEVAL_RULES = Object.freeze({
  EVIDENCE_NOT_AUTHORITY: 'retrieval-is-evidence-not-business-authority',
  IDENTITY_PURPOSE_SCOPE: 'authenticated-consumer-principal-purpose-and-scope',
  AUTHORIZATION_FIRST: 'authorization-before-candidate-retrieval',
  NO_SIDE_CHANNEL: 'no-leakage-through-scores-counts-timing-logs-caches-citations',
  ELIGIBLE_CORPUS: 'eligible-corpus-from-hard-policy-and-lifecycle-factors',
  CURRENT_USE: 'exclude-ineligible-lifecycle-states-from-current-use',
  HISTORICAL_PROFILE: 'explicit-historical-retrieval-profile',
  TRUSTED_SCOPE: 'query-text-does-not-create-trusted-scope',
  METHOD_FIT: 'retrieval-method-matches-information-need',
  DISTINCT_METHODS: 'retrieval-method-semantics-remain-distinct',
  SIMILARITY_SIGNAL: 'semantic-similarity-is-not-truth-or-authority',
  VECTOR_COMPATIBILITY: 'vector-compatibility-metadata-preserved',
  GRAPH_PROVENANCE: 'graph-edge-provenance-and-confidence',
  DOMAIN_CURRENTNESS: 'current-business-facts-from-domain-services',
  HYBRID_PROVENANCE: 'method-identity-and-scores-preserved-through-fusion',
  SCORE_NORMALIZATION: 'versioned-evaluated-score-normalization',
  HARD_CONSTRAINTS: 'authority-and-freshness-as-required-constraints',
  PERSONALIZATION_BOUNDARY: 'personalization-does-not-expand-corpus',
  SAFE_DEDUPLICATION: 'deduplication-preserves-source-conflict',
  RESULT_BUDGET: 'bounded-candidates-results-context-latency-and-cost',
  EXPLICIT_STATUS: 'explicit-result-sufficiency-and-failure-status',
  NO_FABRICATION: 'no-fabrication-to-hide-insufficiency',
  CONFLICT_VISIBILITY: 'conflicts-preserved-not-false-consensus',
  GROUNDED_PACKAGE: 'grounding-preserves-source-version-authority-time-and-limitations',
  CONTENT_DISTINCTION: 'direct-normalized-translated-summarized-inferred-distinct',
  STABLE_CITATIONS: 'citations-stable-version-aware-access-controlled-and-scope-safe',
  HISTORICAL_CITATIONS: 'citations-do-not-change-historical-evidence',
  CLAIM_SUPPORT: 'citations-validated-against-claims',
  INSTRUCTION_BOUNDARY: 'retrieved-content-separated-from-trusted-instructions',
  NO_AUTHORITY_EXPANSION: 'retrieval-cannot-change-tool-memory-scope-or-policy-authority',
  ACTION_AUTHORIZATION: 'retrieval-informed-actions-separately-authorized',
  VERSIONED_SEARCH: 'versioned-query-planning-ranking-and-configuration',
  COMPREHENSIVE_EVALUATION: 'evaluate-quality-security-isolation-performance-and-cost',
  FEEDBACK_EVIDENCE: 'feedback-is-evidence-not-authority',
  DERIVED_PROJECTIONS: 'indexes-and-caches-lifecycle-synchronized-projections',
  INDEX_RECONCILIATION: 'indexes-reconciled-with-knowledge-registry',
  SAFE_DEGRADATION: 'degraded-modes-preserve-security-and-lifecycle',
  EVIDENCE: 'protected-retrieval-evidence',
  VERSIONED_CONTRACTS: 'versioned-apis-and-events',
  NO_DATABASE_ACCESS: 'no-cross-service-database-access',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const KNOWLEDGE_RETRIEVAL_BOUNDARIES = Object.freeze({
  MEMORY: 'define-memory-retrieval-policy',
  CONTEXT: 'define-final-context-assembly',
  PROMPTING: 'define-model-prompting',
  RANKING: 'define-one-ranking-formula',
  DISTANCE: 'define-one-vector-distance-method',
  PRODUCT: 'select-search-vector-graph-reranker-or-ai-provider',
  SCORE_TRUTH: 'make-relevance-score-probability-of-truth',
  ACTION: 'authorize-external-actions',
  DOMAIN: 'replace-domain-service-current-fact-queries',
  CORRECTNESS: 'guarantee-grounded-ai-output-is-correct'
});
