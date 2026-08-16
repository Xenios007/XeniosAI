export const KNOWLEDGE_INGESTION_ERROR_CODE = 'KNOWLEDGE_INGESTION_INVALID';

export const KNOWLEDGE_INGESTION_OBJECTIVES = Object.freeze({
  ACQUISITION: 'reliable-source-acquisition',
  SYNCHRONIZATION: 'idempotent-synchronization',
  INTAKE: 'safe-content-intake',
  EXTRACTION: 'structure-preserving-extraction',
  NORMALIZATION: 'traceable-normalization',
  CHUNKING: 'retrieval-suitable-chunks',
  METADATA: 'high-quality-metadata',
  CLASSIFICATION: 'explicit-classification',
  AI_ENRICHMENT: 'governed-ai-enrichment',
  CURATION: 'accountable-human-curation',
  ISOLATION: 'tenant-and-property-isolation',
  REPRODUCIBILITY: 'reproducible-processing',
  HANDOFF: 'controlled-publication-handoff',
  SCALE: 'operational-scalability',
  EVIDENCE: 'auditable-evidence',
  PORTABILITY: 'vendor-neutral-processing'
});

export const KNOWLEDGE_SOURCE_CLASSES = Object.freeze({
  DOMAIN_API: 'domain-service-api',
  DOMAIN_EVENT: 'domain-event',
  DOCUMENT_REPOSITORY: 'document-repository',
  CONTENT_SYSTEM: 'content-management-system',
  FILE: 'file-submission',
  WEB: 'web-resource',
  GIT: 'git-repository',
  FEED: 'structured-feed',
  SUPPLIER: 'supplier-api',
  PROPERTY: 'property-local-system',
  HUMAN: 'human-authoring-interface'
});

export const KNOWLEDGE_CONTENT_CLASSES = Object.freeze({
  TEXT: 'plain-text',
  MARKDOWN: 'markdown',
  HTML: 'html',
  PDF: 'pdf',
  DOCUMENT: 'word-processing-document',
  SPREADSHEET: 'spreadsheet',
  TABULAR: 'csv-or-tabular-export',
  PRESENTATION: 'presentation',
  IMAGE: 'image',
  SCAN: 'scanned-document',
  AUDIO: 'audio-transcript',
  VIDEO: 'video-transcript',
  STRUCTURED: 'structured-json-or-xml',
  CODE_DOCS: 'source-code-documentation'
});

export const KNOWLEDGE_ACQUISITION_MODELS = Object.freeze({
  PUSH: 'push',
  PULL: 'pull',
  EVENT: 'event-notification',
  SCHEDULED: 'scheduled-synchronization',
  CHANGE_EXPORT: 'change-data-export',
  MANUAL: 'manual-upload',
  BATCH: 'batch-import',
  STREAM: 'streaming-update',
  SNAPSHOT: 'snapshot'
});

export const KNOWLEDGE_INTAKE_OUTCOMES = Object.freeze({
  ACCEPTED: 'accepted',
  DUPLICATE: 'duplicate',
  DEFERRED: 'deferred',
  QUARANTINED: 'quarantined',
  REJECTED: 'rejected',
  FAILED: 'failed',
  UNCERTAIN: 'uncertain'
});

export const KNOWLEDGE_QUARANTINE_REASONS = Object.freeze({
  MALWARE: 'malware',
  ACTIVE_CONTENT: 'active-content',
  SIGNATURE: 'invalid-signature',
  SOURCE: 'source-mismatch',
  TENANT: 'tenant-mismatch',
  PROPERTY: 'property-mismatch',
  FORMAT: 'unknown-format',
  SIZE: 'oversized-content',
  CORRUPTION: 'corruption',
  RIGHTS: 'missing-rights',
  CLASSIFICATION: 'classification-uncertainty',
  PROMPT_INJECTION: 'prompt-injection-risk',
  POLICY: 'policy-violation'
});

export const KNOWLEDGE_INGESTION_PIPELINE_STAGES = Object.freeze({
  ACCEPT: 'accept-authorized-acquisition',
  BIND: 'bind-source-scope-and-contract',
  IDEMPOTENCY: 'apply-idempotency',
  VALIDATE: 'validate-envelope-and-artifact',
  QUARANTINE: 'scan-and-quarantine',
  PRESERVE: 'preserve-original-artifact-or-reference',
  DETECT: 'detect-content-type-and-language',
  EXTRACT: 'extract-content-and-structure',
  NORMALIZE: 'normalize-content',
  METADATA: 'extract-and-validate-metadata',
  CLASSIFY: 'classify-content',
  CHUNK: 'generate-candidate-chunks',
  ENRICH: 'apply-governed-enrichment',
  QUALITY: 'perform-quality-checks',
  CURATE: 'route-for-curation',
  CANDIDATE: 'create-publication-candidate',
  HANDOFF: 'handoff-to-lifecycle-review'
});

export const KNOWLEDGE_CHUNKING_STRATEGIES = Object.freeze({
  STRUCTURAL: 'structural-sections',
  PARAGRAPH: 'paragraph-groups',
  SEMANTIC: 'semantic-boundaries',
  SLIDING: 'sliding-windows',
  TABLE: 'table-aware-chunks',
  PROCEDURE: 'procedure-step-chunks',
  FAQ: 'faq-question-and-answer-pairs',
  CODE: 'code-aware-sections',
  TRANSCRIPT: 'transcript-segments'
});

export const KNOWLEDGE_QUALITY_GATES = Object.freeze({
  SOURCE: 'source-gate',
  INTEGRITY: 'integrity-gate',
  SECURITY: 'security-gate',
  CONTRACT: 'contract-gate',
  SCOPE: 'scope-gate',
  CLASSIFICATION: 'classification-gate',
  EXTRACTION: 'extraction-gate',
  STRUCTURE: 'structure-gate',
  METADATA: 'metadata-gate',
  CHUNK: 'chunk-gate',
  ENRICHMENT: 'enrichment-gate',
  CURATION: 'curation-gate',
  PUBLICATION_READY: 'publication-readiness-gate'
});

export const KNOWLEDGE_PROCESSING_STATES = Object.freeze({
  REQUESTED: 'requested',
  ACCEPTED: 'accepted',
  VALIDATING: 'validating',
  QUARANTINED: 'quarantined',
  EXTRACTING: 'extracting',
  NORMALIZING: 'normalizing',
  CLASSIFYING: 'classifying',
  CHUNKING: 'chunking',
  ENRICHING: 'enriching',
  CURATING: 'curating',
  QUALITY_REVIEW: 'quality-review',
  READY: 'ready-for-handoff',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled'
});

export const KNOWLEDGE_PROCESSING_FAILURES = Object.freeze({
  INVALID_INPUT: 'invalid-input',
  SOURCE_UNAUTHORIZED: 'source-unauthorized',
  SOURCE_UNAVAILABLE: 'source-unavailable',
  CONTRACT_UNSUPPORTED: 'contract-unsupported',
  INTEGRITY: 'integrity-failure',
  SECURITY: 'security-failure',
  TENANT: 'tenant-mismatch',
  PROPERTY: 'property-mismatch',
  FORMAT: 'format-unsupported',
  EXTRACTION: 'extraction-failure',
  OCR: 'ocr-insufficient',
  CLASSIFICATION: 'classification-unknown',
  QUALITY: 'quality-gate-failed',
  RIGHTS: 'rights-unclear',
  RESOURCE: 'resource-limit',
  PROVIDER: 'provider-failure',
  UNCERTAIN: 'result-uncertain'
});

export const KNOWLEDGE_INGESTION_APIS = Object.freeze({
  REQUEST: 'request-acquisition',
  SUBMIT: 'submit-artifact',
  QUERY_ACQUISITION: 'query-acquisition',
  START_SYNC: 'start-synchronization',
  QUERY_SYNC: 'query-synchronization',
  CANCEL: 'cancel-processing',
  QUERY_PROCESSING: 'query-processing',
  INSPECT_QUARANTINE: 'inspect-quarantine',
  RESOLVE_QUARANTINE: 'resolve-quarantine',
  CURATION: 'submit-curation-decision',
  PROVENANCE: 'query-provenance',
  REPROCESS: 'request-reprocessing',
  CANDIDATE: 'create-publication-candidate'
});

export const KNOWLEDGE_INGESTION_EVENTS = Object.freeze({
  ACQUISITION_REQUESTED: 'acquisition-requested',
  ARTIFACT_ACCEPTED: 'artifact-accepted',
  DUPLICATE: 'artifact-duplicate-detected',
  QUARANTINED: 'artifact-quarantined',
  REJECTED: 'artifact-rejected',
  SYNC_STARTED: 'synchronization-started',
  CHECKPOINTED: 'synchronization-checkpointed',
  SYNC_COMPLETED: 'synchronization-completed',
  SYNC_FAILED: 'synchronization-failed',
  EXTRACTION: 'extraction-completed',
  CLASSIFICATION: 'classification-completed',
  CHUNKING: 'chunking-completed',
  ENRICHMENT: 'enrichment-completed',
  CURATION: 'curation-requested',
  QUALITY_FAILED: 'quality-gate-failed',
  CANDIDATE_READY: 'publication-candidate-ready',
  REPROCESSING: 'reprocessing-completed'
});

export const KNOWLEDGE_INGESTION_QUALITY_ATTRIBUTES = Object.freeze({
  INTEGRITY: 'integrity',
  ACCURACY: 'accuracy',
  TRACEABILITY: 'traceability',
  REPRODUCIBILITY: 'reproducibility',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  ISOLATION: 'isolation',
  SCALABILITY: 'scalability',
  RELIABILITY: 'reliability',
  RECOVERABILITY: 'recoverability',
  PORTABILITY: 'portability',
  MAINTAINABILITY: 'maintainability',
  AUDITABILITY: 'auditability',
  COST_EFFICIENCY: 'cost-efficiency'
});

export const KNOWLEDGE_INGESTION_RULES = Object.freeze({
  REGISTERED_SOURCE: 'registered-or-excepted-production-sources',
  AUTHENTICATION: 'authenticate-sources-and-processing-workloads',
  INTAKE_BINDING: 'bind-source-scope-contract-and-artifact',
  IDEMPOTENCY: 'idempotent-acquisition',
  IDENTITY_INTEGRITY: 'preserve-source-artifact-version-and-integrity',
  SAFE_DEDUPLICATION: 'deduplication-does-not-merge-incompatible-scopes',
  COMPLETE_SYNC: 'synchronize-content-permission-authority-and-deletion-changes',
  RECONCILIATION: 'periodic-full-reconciliation',
  DELETION_SIGNAL: 'source-deletion-is-governed-lifecycle-signal',
  INTAKE_VALIDATION: 'validate-contract-format-size-classification-rights-policy',
  QUARANTINE: 'quarantine-unsafe-ambiguous-or-unauthorized-content',
  ISOLATED_PROCESSING: 'least-privileged-untrusted-processing',
  ORIGINAL_ARTIFACT: 'preserve-original-or-verifiable-reference',
  CONTENT_DETECTION: 'inspect-content-type-not-extension-only',
  STRUCTURE: 'preserve-structure-tables-order-and-citation-location',
  DERIVED_EXTRACTION: 'ocr-and-extraction-are-derived-output',
  VERSIONED_METHODS: 'version-processing-methods',
  MEANING_PRESERVATION: 'normalization-preserves-material-meaning',
  METADATA_PROVENANCE: 'material-metadata-source-and-confidence',
  CLASSIFICATION_PROPAGATION: 'restrictive-classification-propagates',
  SENSITIVE_DATA: 'detect-and-govern-secrets-and-sensitive-data',
  CHUNK_BOUNDARIES: 'chunks-preserve-scope-authority-classification-and-time',
  CONTENT_AWARE_CHUNKING: 'content-aware-chunking',
  AI_DERIVED: 'ai-enrichment-derived-attributable-and-reviewable',
  AI_BOUNDARY: 'ai-cannot-change-authority-scope-policy-or-publication',
  CURATOR_AUTHORITY: 'authenticated-authorized-curators',
  SEPARATION_OF_DUTIES: 'risk-proportional-curation-separation',
  QUALITY_GATES: 'domain-appropriate-quality-gates',
  HANDOFF_NOT_ACTIVATION: 'publication-readiness-is-handoff-not-activation',
  PROVENANCE: 'processing-provenance-through-every-stage',
  VERSIONED_REPROCESSING: 'controlled-versioned-reprocessing',
  NO_SILENT_REPLACEMENT: 'reprocessing-does-not-silently-replace-active-knowledge',
  BOUNDED_RETRY: 'bounded-retry-for-transient-idempotent-failures',
  POISON_ISOLATION: 'poison-content-isolated-from-shared-capacity',
  TENANT_PROPERTY_ISOLATION: 'scope-isolation-in-queues-data-curation-and-evidence',
  TEMPORARY_DELETION: 'temporary-data-deleted-after-authorized-need',
  PROVIDER_GOVERNANCE: 'external-provider-governance-and-exit',
  VERSIONED_CONTRACTS: 'versioned-apis-and-events',
  NO_DATABASE_ACCESS: 'no-cross-service-database-access',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const KNOWLEDGE_INGESTION_BOUNDARIES = Object.freeze({
  APPROVAL: 'approve-or-activate-knowledge',
  RETRIEVAL: 'define-retrieval-and-ranking',
  MEMORY: 'define-memory-admission-or-lifecycle',
  CONTEXT: 'define-context-assembly',
  CHUNK_SIZE: 'mandate-one-chunk-size',
  PROVIDER: 'mandate-processing-provider',
  PUBLIC_REUSE: 'treat-all-public-content-as-reusable',
  JUDGMENT: 'replace-qualified-content-security-privacy-legal-review',
  AUTHORITY: 'make-derived-output-authoritative-business-truth'
});
