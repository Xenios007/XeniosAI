export const KNOWLEDGE_MEMORY_SECURITY_ERROR_CODE = 'KNOWLEDGE_MEMORY_SECURITY_GOVERNANCE_INVALID';

export const KNOWLEDGE_MEMORY_SECURITY_OBJECTIVES = Object.freeze({
  ZERO_TRUST: 'zero-trust-access', LEAST_PRIVILEGE: 'least-privilege',
  TENANT: 'strong-tenant-isolation', PROPERTY: 'strong-property-isolation',
  PURPOSE: 'purpose-based-processing', PROVENANCE: 'protected-provenance',
  SOURCE: 'source-integrity', MALICIOUS_CONTENT: 'malicious-content-resistance',
  INJECTION: 'prompt-injection-resistance', MEMORY_WRITES: 'controlled-memory-writes',
  PRIVACY: 'privacy-by-design', RESPONSIBLE_AI: 'responsible-ai-use',
  OWNERSHIP: 'explicit-ownership-and-stewardship', RISK: 'risk-based-controls',
  EXCEPTIONS: 'governed-exceptions', FORGETTING: 'correction-and-forgetting',
  EVIDENCE: 'evidence-by-design', ASSURANCE: 'continuous-assurance',
  INDEPENDENCE: 'independent-assessment-for-high-risk-use',
  NEUTRALITY: 'vendor-neutral-control-outcomes'
});

export const KNOWLEDGE_MEMORY_SECURITY_SUBJECTS = Object.freeze({
  END_USER: 'end-users', STAFF: 'staff-users', TENANT_ADMIN: 'tenant-administrators',
  PROPERTY_OPERATOR: 'property-operators', ENTERPRISE_ADMIN: 'enterprise-administrators',
  SERVICE: 'service-identities', WORKLOAD: 'workload-identities', ORCHESTRATOR: 'ai-orchestrator',
  AGENT: 'ai-agents', WORKFLOW: 'workflow-instances', CONNECTOR: 'source-connectors',
  PROVIDER: 'provider-adapters', CURATOR: 'human-curators', ASSURANCE: 'assurance-personnel',
  EMERGENCY: 'emergency-operators'
});

export const KNOWLEDGE_MEMORY_SECURITY_RESOURCES = Object.freeze({
  SOURCES: 'source-registrations', CREDENTIALS: 'source-credentials', ARTIFACTS: 'artifacts',
  KNOWLEDGE: 'knowledge-items-and-versions', METADATA: 'metadata', TAXONOMIES: 'taxonomies',
  PROVENANCE: 'provenance', LEXICAL: 'lexical-indexes', VECTORS: 'vector-representations',
  GRAPHS: 'graph-relationships', SUMMARIES: 'summaries', CITATIONS: 'citations',
  RETRIEVAL: 'retrieval-requests-and-results', MEMORY: 'memory-candidates-and-records',
  CONTEXT: 'context-packages', EVALUATION: 'evaluation-datasets-and-results',
  POLICY: 'policy-decisions', ADMINISTRATION: 'administrative-operations', EVIDENCE: 'evidence',
  BACKUPS: 'backups-and-exports'
});

export const KNOWLEDGE_MEMORY_TRUST_FACTORS = Object.freeze({
  IDENTITY: 'identity', AUTHENTICATION: 'authentication-strength', STATE: 'device-or-workload-state',
  PURPOSE: 'purpose', TENANT: 'tenant', PROPERTY: 'property', RESOURCE: 'resource',
  CLASSIFICATION: 'classification', LIFECYCLE: 'lifecycle', RISK: 'risk', ENVIRONMENT: 'environment',
  TIME: 'time', POLICY: 'policy-version'
});

export const KNOWLEDGE_MEMORY_SECURITY_CAPABILITIES = Object.freeze({
  REGISTER_SOURCE: 'register-source', INGEST: 'ingest-content', CURATE: 'curate-knowledge',
  PUBLISH: 'publish-knowledge', RETRIEVE: 'retrieve-knowledge', CITATION: 'resolve-citation',
  QUERY_MEMORY: 'query-memory', PROPOSE_MEMORY: 'propose-memory', CONFIRM_MEMORY: 'confirm-memory',
  ADMIT_MEMORY: 'admit-memory', CORRECT_MEMORY: 'correct-memory', DELETE_MEMORY: 'delete-memory',
  LEGAL_HOLD: 'apply-legal-hold', CONTEXT: 'assemble-context', INFRASTRUCTURE: 'administer-infrastructure',
  EVIDENCE: 'inspect-evidence', ASSURANCE: 'run-assurance'
});

export const KNOWLEDGE_MEMORY_CLASSIFICATIONS = Object.freeze({
  PUBLIC: 'public', INTERNAL: 'internal', CONFIDENTIAL: 'confidential', RESTRICTED: 'restricted',
  TENANT_CONFIDENTIAL: 'tenant-confidential', PROPERTY_RESTRICTED: 'property-restricted',
  PERSONAL: 'personal', SENSITIVE_PERSONAL: 'sensitive-personal'
});

export const KNOWLEDGE_MEMORY_CONTROL_FIELDS = Object.freeze({
  IDENTITY: 'control-identity', OBJECTIVE: 'control-objective', RISK: 'risk-or-obligation', OWNER: 'owner',
  SCOPE: 'scope', FREQUENCY: 'frequency-or-trigger', TYPE: 'preventive-detective-or-corrective',
  IMPLEMENTATION: 'implementation', EVIDENCE: 'evidence', TEST: 'test-method',
  FAILURE: 'failure-response', EXCEPTION: 'exception-behavior', REVIEW: 'review-date'
});

export const KNOWLEDGE_MEMORY_CONTROL_CATEGORIES = Object.freeze({
  ACCESS: 'identity-and-access', SOURCE: 'source-security', INTEGRITY: 'content-integrity',
  CLASSIFICATION: 'classification', ISOLATION: 'tenant-and-property-isolation', PRIVACY: 'privacy',
  QUALITY: 'knowledge-quality', MEMORY: 'memory-admission', RETRIEVAL: 'retrieval-authorization',
  INJECTION: 'prompt-injection-defense', PROVIDER: 'provider-governance', LIFECYCLE: 'lifecycle',
  FORGETTING: 'correction-and-deletion', RESILIENCE: 'operational-resilience',
  ASSURANCE: 'evidence-and-assurance'
});

export const KNOWLEDGE_MEMORY_RISK_FIELDS = Object.freeze({
  OBJECTIVE: 'objective-at-risk', CAUSE: 'cause-or-threat', EVENT: 'event-or-condition',
  IMPACT: 'potential-impact', SCOPE: 'affected-tenants-and-properties', INHERENT: 'inherent-risk',
  CONTROLS: 'controls', RESIDUAL: 'residual-risk', OWNER: 'owner', TREATMENT: 'treatment',
  ACCEPTANCE: 'acceptance-authority', INDICATORS: 'indicators', REVIEW: 'review'
});

export const KNOWLEDGE_MEMORY_RISK_TYPES = Object.freeze({
  ACCESS: 'unauthorized-access', TENANT: 'tenant-leakage', PROPERTY: 'property-leakage',
  IMPERSONATION: 'source-impersonation', POISONING: 'knowledge-poisoning', INJECTION: 'prompt-injection',
  FALSE_KNOWLEDGE: 'false-or-stale-knowledge', CITATION: 'incorrect-citation', FALSE_MEMORY: 'false-memory',
  INFERENCE: 'sensitive-inference', RETENTION: 'excessive-retention', DELETION: 'failed-deletion',
  PROVIDER: 'provider-misuse', DRIFT: 'model-or-representation-drift', EVIDENCE: 'evidence-failure',
  CONCENTRATION: 'concentration-risk', RECOVERY: 'recovery-failure', RIGHTS: 'rights-handling-failure',
  GOVERNANCE: 'governance-failure'
});

export const KNOWLEDGE_MEMORY_GOVERNANCE_GATES = Object.freeze({
  SOURCE: 'register-high-risk-source', RESTRICTED_KNOWLEDGE: 'publish-restricted-knowledge',
  SENSITIVE_MEMORY: 'enable-sensitive-memory', INFERRED_MEMORY: 'enable-inferred-memory',
  SHARED_MEMORY: 'enable-shared-memory', MODEL: 'use-new-embedding-or-reranking-model',
  PROVIDER: 'send-protected-content-to-provider', CONSEQUENTIAL_AI: 'enable-consequential-ai-use',
  RETENTION: 'change-retention', MIGRATION: 'migrate-tenant-data', CROSS_SCOPE: 'enable-cross-scope-access',
  INTEGRATION: 'launch-high-risk-integration'
});

export const KNOWLEDGE_MEMORY_ASSURANCE_METHODS = Object.freeze({
  FIRST_LINE: 'first-line-control-monitoring', SECOND_LINE: 'second-line-risk-privacy-security-review',
  INTERNAL: 'independent-internal-assessment', EXTERNAL: 'external-assessment',
  CONTINUOUS: 'continuous-automated-assurance', THEMATIC: 'targeted-thematic-review',
  TENANT: 'tenant-specific-assurance', PROVIDER: 'provider-assurance'
});

export const KNOWLEDGE_MEMORY_ASSURANCE_SCOPE_FIELDS = Object.freeze({
  OBJECTIVE: 'objective', CRITERIA: 'criteria', SCOPE: 'scope', PERIOD: 'period',
  TENANTS: 'tenants-and-properties', RESOURCES: 'resources', CONTROLS: 'controls', EVIDENCE: 'evidence',
  SAMPLING: 'sampling', INDEPENDENCE: 'independence', LIMITATIONS: 'limitations', REPORTING: 'reporting'
});

export const KNOWLEDGE_MEMORY_EVIDENCE_FIELDS = Object.freeze({
  IDENTITY: 'evidence-identity', TYPE: 'evidence-type', PRODUCER: 'producer-identity-and-version',
  SUBJECT: 'subject-or-resource-reference', CONTROL: 'control-or-decision-reference', TENANT: 'tenant',
  PROPERTY: 'property', PURPOSE: 'purpose', CLASSIFICATION: 'classification',
  EVENT_TIME: 'event-or-decision-time', COLLECTION_TIME: 'collection-time', PROVENANCE: 'provenance',
  INTEGRITY: 'integrity-metadata', RETENTION: 'retention', ACCESS: 'access-policy',
  CORRELATION: 'related-correlation'
});

export const KNOWLEDGE_MEMORY_EVIDENCE_TYPES = Object.freeze({
  SOURCE: 'source-approval', INGESTION: 'ingestion-validation', QUARANTINE: 'quarantine-decision',
  PUBLICATION: 'publication-approval', ACCESS: 'access-decision', RETRIEVAL: 'retrieval-evidence',
  CITATION: 'citation-resolution', MEMORY_ADMISSION: 'memory-admission',
  MEMORY_CONFIRMATION: 'memory-confirmation', CONTEXT: 'context-assembly', CORRECTION: 'correction',
  DELETION: 'deletion', LEGAL_HOLD: 'legal-hold', PROVIDER: 'provider-use', POLICY: 'policy-decision',
  EXCEPTION: 'exception', EVALUATION: 'evaluation-result', CONTROL_TEST: 'control-test', FINDING: 'finding'
});

export const KNOWLEDGE_MEMORY_DEGRADED_CONTROL_MODES = Object.freeze({
  RETRIEVAL_DISABLED: 'retrieval-disabled', PUBLIC_ONLY: 'curated-public-knowledge-only',
  NO_ADMISSION: 'no-new-memory-admission', CONFIRMED_MEMORY: 'read-only-confirmed-memory',
  ADMIN_SUSPENDED: 'administrative-actions-suspended', PROVIDER_DISABLED: 'provider-disabled',
  MANUAL_APPROVAL: 'manual-approval-required', SCOPE_ISOLATED: 'tenant-or-property-scope-isolated'
});

export const KNOWLEDGE_MEMORY_SECURITY_QUALITY_ATTRIBUTES = Object.freeze({
  CONFIDENTIALITY: 'confidentiality', INTEGRITY: 'integrity', AVAILABILITY: 'availability',
  PRIVACY: 'privacy', ISOLATION: 'isolation', ACCOUNTABILITY: 'accountability',
  TRACEABILITY: 'traceability', CORRECTABILITY: 'correctability', FORGETTABILITY: 'forgettability',
  EXPLAINABILITY: 'explainability', RESILIENCE: 'resilience', AUDITABILITY: 'auditability',
  PORTABILITY: 'portability', NEUTRALITY: 'vendor-neutrality'
});

export const KNOWLEDGE_MEMORY_SECURITY_RULES = Object.freeze({
  PROTECTED_RESOURCES: 'all-knowledge-memory-context-and-evidence-protected',
  ZERO_TRUST: 'zero-trust-and-least-privilege', VERIFIABLE_IDENTITIES: 'all-subjects-verifiably-identified',
  DELEGATION: 'represented-principal-explicit-bounded-and-revocable',
  AUTHORIZATION_CONTEXT: 'purpose-scope-classification-lifecycle-time-and-policy-evaluated',
  AUTHORIZATION_FIRST: 'authorization-before-candidate-retrieval-or-disclosure',
  CAPABILITY_SEPARATION: 'read-write-publication-admission-lifecycle-admin-and-evidence-separated',
  DUTIES: 'high-risk-decisions-use-separation-of-duties', ISOLATION: 'tenant-and-property-isolation-end-to-end',
  NO_SIDE_CHANNELS: 'no-scope-leakage-through-metadata-counts-scores-timing-or-diagnostics',
  CROSS_SCOPE: 'cross-scope-use-explicitly-authorized', CLASSIFICATION: 'all-content-and-metadata-classified',
  CLASSIFICATION_INHERITANCE: 'derived-resources-preserve-highest-applicable-protection',
  ENCRYPTION: 'protected-data-encrypted-by-policy', NO_SECRETS: 'secrets-excluded-from-content-and-evidence',
  SOURCE_AUTHENTICATION: 'sources-authenticated-and-content-integrity-validated',
  QUARANTINE: 'unsafe-suspicious-and-unsupported-content-quarantined',
  POISONING_DEFENSE: 'knowledge-poisoning-and-false-memory-controlled',
  UNTRUSTED_CONTENT: 'retrieved-and-provider-content-treated-as-untrusted-data',
  INSTRUCTION_BOUNDARY: 'system-policy-tool-scope-and-write-authority-outside-content',
  RELEVANCE_NOT_AUTHORITY: 'retrieval-relevance-does-not-grant-instruction-priority',
  ELIGIBILITY_FIRST: 'unauthorized-content-excluded-before-candidate-generation',
  DERIVED_SECURITY: 'search-vector-graph-citation-cache-and-diagnostic-side-channels-controlled',
  EMBEDDINGS_PROTECTED: 'embeddings-are-protected-derived-data',
  MEMORY_ADMISSION: 'durable-memory-requires-governed-admission',
  CONTEXT_BINDING: 'context-bound-to-consumer-request-purpose-scope-integrity-and-expiration',
  NO_CONTEXT_REUSE: 'context-not-reused-across-incompatible-purpose-or-scope',
  MINIMIZATION: 'data-minimized-across-lifecycle', EXFILTRATION: 'model-tool-agent-provider-and-writeback-exfiltration-controlled',
  PRIVILEGED_ACCESS: 'privileged-and-break-glass-access-narrow-monitored-and-reviewed',
  SUPPLY_CHAIN: 'connectors-models-providers-plugins-and-libraries-governed',
  PERSONAL_PURPOSE: 'personal-processing-has-documented-purpose-and-basis',
  RIGHTS: 'transparency-access-correction-objection-deletion-portability-and-review',
  SENSITIVE_INFERENCE: 'sensitive-inference-explicit-proportionate-labeled-and-controlled',
  NO_IMPLIED_CONSENT: 'conversation-silence-repetition-and-availability-are-not-consent',
  TRAINING_SEPARATION: 'production-data-not-automatic-training-data',
  RESIDENCY: 'residency-and-transfer-policy-enforced', OWNERSHIP: 'accountable-owners-and-stewards-assigned',
  POLICY_HIERARCHY: 'policy-hierarchy-applicability-version-time-and-conflict-governed',
  RISK: 'risk-owned-treated-monitored-and-time-bounded', GATES: 'high-risk-use-requires-governance-gates',
  STATUS_DISTINCTION: 'draft-derived-inferred-historical-disputed-and-approved-distinct',
  LIFECYCLE_GOVERNANCE: 'quality-taxonomy-retention-correction-deletion-provider-and-retirement-governed',
  AI_PROVENANCE: 'ai-output-retains-method-version-input-confidence-validation-and-lifecycle',
  EXCEPTIONS: 'exceptions-risk-assessed-compensated-approved-expiring-and-evidenced',
  PROHIBITED_EXCEPTIONS: 'exceptions-cannot-bypass-core-security-privacy-and-evidence-controls',
  EVIDENCE_BY_DESIGN: 'controls-generate-trustworthy-evidence',
  EVIDENCE_AUTHORIZATION: 'evidence-access-separate-and-chain-of-custody-preserved',
  RISK_BASED_ASSURANCE: 'assurance-risk-proportionate-and-independent-for-high-risk-use',
  CONTROL_TESTING: 'control-design-and-operating-effectiveness-tested',
  CONTINUOUS_ASSURANCE: 'critical-controls-continuously-assessed-where-practical',
  REMEDIATION: 'findings-contained-root-causes-remediated-and-closure-verified',
  INCIDENT_CONTEXT: 'incidents-preserve-source-lifecycle-scope-provider-and-evidence-context',
  SAFE_DEGRADATION: 'degraded-controls-preserve-confidentiality-isolation-lifecycle-and-accountability',
  VERSIONED_CONTRACTS: 'versioned-apis-and-events', NO_DATABASE_ACCESS: 'no-cross-service-database-access',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const KNOWLEDGE_MEMORY_SECURITY_BOUNDARIES = Object.freeze({
  LEGAL: 'provide-legal-advice', SECURITY_PRODUCT: 'select-security-product',
  IDENTITY: 'select-identity-provider', POLICY: 'select-policy-engine',
  GOVERNANCE: 'select-governance-platform', AUDIT: 'select-audit-tool',
  PRIVACY: 'select-privacy-framework', REGULATORY: 'select-regulatory-framework',
  CRYPTOGRAPHY: 'define-cryptographic-algorithms', INCIDENTS: 'define-detailed-incident-runbooks',
  OPERATIONS: 'define-detailed-operational-procedures', TENANCY: 'define-multi-tenancy-internals',
  ARCH_008: 'replace-security-architecture', ARCH_012: 'replace-governance-and-compliance',
  ARCH_016_09: 'replace-knowledge-memory-operational-architecture'
});
