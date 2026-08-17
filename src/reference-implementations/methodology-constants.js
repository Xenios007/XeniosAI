export const REFERENCE_IMPLEMENTATION_METHODOLOGY_ERROR_CODE = 'REFERENCE_IMPLEMENTATION_METHODOLOGY_INVALID';

export const METHOD_PRINCIPLES = Object.freeze({
  START_FROM_OUTCOMES_RISKS: 'start-from-business-outcomes-and-risks',
  SMALLEST_END_TO_END_SLICE: 'select-the-smallest-end-to-end-slice-that-tests-important-architecture',
  TRACE_EVERY_MATERIAL_PATTERN: 'trace-every-material-pattern-to-normative-architecture',
  SYNTHETIC_OR_APPROVED_DATA: 'use-synthetic-or-approved-data',
  INCLUDE_FAILURE_OPERATIONS_FROM_START: 'include-failure-and-operations-from-the-start',
  AUTOMATE_CONFORMANCE: 'automate-conformance-wherever-practical',
  RECORD_VARIATION_LIMITATIONS: 'record-variation-points-and-limitations',
  FEED_FINDINGS_BACK: 'feed-findings-back-through-architecture-governance'
});

export const SCENARIO_SELECTION_CRITERIA = Object.freeze({
  BUSINESS_RELEVANCE: 'business-relevance', ARCHITECTURE_COVERAGE: 'architecture-coverage', REUSE_POTENTIAL: 'reuse-potential',
  RISK_REDUCTION: 'risk-reduction', DEVELOPER_DEMAND: 'developer-demand', INTEGRATION_IMPORTANCE: 'integration-importance',
  TESTABILITY: 'testability', COST_TO_MAINTAIN: 'cost-to-maintain'
});

export const SCENARIO_DEFINITION_FIELDS = Object.freeze({
  ACTORS_GOALS: 'actors-and-goals', PRECONDITIONS_TRIGGER: 'preconditions-and-trigger', HAPPY_PATH: 'happy-path',
  ALTERNATIVE_FAILURE_PATHS: 'alternative-and-failure-paths', BUSINESS_RULES: 'business-rules',
  COMMANDS_QUERIES_EVENTS_WORKFLOWS: 'commands-queries-events-and-workflows', DATA_OWNERSHIP: 'data-and-ownership',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope', SECURITY_PRIVACY: 'security-and-privacy',
  QUALITY_ATTRIBUTES: 'quality-attributes', ACCEPTANCE_CRITERIA: 'acceptance-criteria', EXCLUSIONS: 'exclusions'
});

export const ARCHITECTURE_TRACEABILITY_MAPPINGS = Object.freeze({
  SERVICE_MODULE: 'service-or-module:bounded-context-layer-and-ownership',
  API_EVENT: 'api-or-event:contract-version-security-tenant-scope',
  WORKFLOW: 'workflow:lifecycle-tasks-retries-compensation',
  AI_EVALUATION: 'ai-evaluation:orchestrator-grounding-tool-and-safety-rules',
  DATA_SCHEMA: 'data-schema:aggregate-ownership-classification-lifecycle',
  DEPLOYMENT: 'deployment:topology-availability-recovery-residency',
  TEST: 'test:requirement-or-control-demonstrated'
});

export const CONFORMANCE_PROFILE_ELEMENTS = Object.freeze({
  MANDATORY_CONTRACTS: 'mandatory-contracts', CONTROL_OBJECTIVES: 'control-objectives', QUALITY_THRESHOLDS: 'quality-thresholds',
  REQUIRED_TESTS: 'required-tests', EVIDENCE_FORMAT: 'evidence-format', ALLOWED_VARIATIONS: 'allowed-variations',
  EXCEPTIONS_EXPIRY: 'exceptions-and-expiry', REVIEW_AUTHORITY: 'review-authority'
});

export const IMPLEMENTATION_LIFECYCLE_STEPS = Object.freeze({
  PROPOSE_SCENARIO: 'propose-scenario', APPROVE_SCOPE_PROFILE: 'approve-scope-and-profile',
  DESIGN_ARCHITECTURE_TRACE: 'design-architecture-trace', CREATE_SYNTHETIC_FIXTURES: 'create-synthetic-fixtures',
  IMPLEMENT_GOLDEN_PATH: 'implement-golden-path', IMPLEMENT_FAILURE_RECOVERY_PATHS: 'implement-failure-and-recovery-paths',
  RUN_CONFORMANCE_EVALUATIONS: 'run-conformance-and-evaluations', REVIEW_SECURITY_OPERATIONS_DOCUMENTATION: 'review-security-operations-and-documentation',
  RELEASE_VERSIONED_REFERENCE: 'release-a-versioned-reference', COLLECT_FEEDBACK_MAINTAIN_RETIRE: 'collect-feedback-and-maintain-or-retire'
});

export const EVIDENCE_PACKAGE_ITEMS = Object.freeze({
  ARCHITECTURE_TRACE: 'architecture-trace', CONTRACT_SCHEMAS: 'contract-schemas', BUILD_PROVENANCE: 'build-provenance',
  TEST_RESULTS: 'test-results', AI_EVALUATION_RESULTS: 'ai-evaluation-results',
  SECURITY_TENANT_ISOLATION_RESULTS: 'security-and-tenant-isolation-results', PERFORMANCE_PROFILE: 'performance-profile',
  DEPLOYMENT_RECOVERY_EXERCISE: 'deployment-and-recovery-exercise', DEPENDENCY_INVENTORY: 'dependency-inventory',
  KNOWN_LIMITATIONS: 'known-limitations', APPROVAL_EXCEPTION_RECORDS: 'approval-and-exception-records'
});

export const VARIATION_POINT_CATEGORIES = Object.freeze({
  LANGUAGE_FRAMEWORK: 'language-or-framework', DATA_TECHNOLOGY: 'data-technology-behind-repositories',
  QUEUE_WORKFLOW_TECHNOLOGY: 'queue-or-workflow-technology', MODEL_PROVIDER: 'model-or-provider',
  IDENTITY_PROVIDER: 'identity-provider', DEPLOYMENT_PLATFORM: 'deployment-platform',
  OBSERVABILITY_IMPLEMENTATION: 'observability-implementation'
});

export const DIVERGENCE_CLASSIFICATIONS = Object.freeze({
  PERMITTED_VARIATION: 'permitted-variation', SCENARIO_SPECIFIC_EXCLUSION: 'scenario-specific-exclusion',
  TEMPORARY_EXCEPTION: 'temporary-exception', ARCHITECTURE_GAP: 'architecture-gap',
  ARCHITECTURE_CHANGE_PROPOSAL: 'architecture-change-proposal'
});

export const REVIEW_GATE_AREAS = Object.freeze({
  BUSINESS_ACCEPTANCE: 'business-acceptance', ARCHITECTURE: 'architecture', SECURITY_PRIVACY: 'security-and-privacy',
  OPERATIONAL_READINESS: 'operational-readiness', TEST_EVIDENCE: 'test-evidence', DOCUMENTATION: 'documentation',
  LICENSING: 'licensing', MAINTENANCE_OWNERSHIP: 'maintenance-ownership'
});

export const MAINTENANCE_MONITORING_AREAS = Object.freeze({
  ARCHITECTURE_CHANGES: 'architecture-changes', SDK_CONTRACT_VERSIONS: 'sdk-and-contract-versions',
  DEPENDENCIES: 'dependencies', VULNERABILITIES: 'vulnerabilities', TEST_DRIFT: 'test-drift',
  PLATFORM_CHANGES: 'platform-changes', USER_FEEDBACK: 'user-feedback'
});

export const RETIREMENT_ELEMENTS = Object.freeze({
  REASON: 'reason', REPLACEMENT: 'replacement', MIGRATION: 'migration', ARCHIVE_POLICY: 'archive-policy',
  EVIDENCE_RETENTION: 'evidence-retention', CREDENTIAL_DEMONSTRATION_REMOVAL: 'removal-of-obsolete-credentials-or-hosted-demonstrations'
});

export const METHODOLOGY_ARCHITECTURAL_RULES = Object.freeze({
  CONFORMANCE_PROFILE_EVIDENCE_BACKED: 'conformance-is-profile-based-and-evidence-backed',
  TRACEABILITY_MANDATORY: 'traceability-is-mandatory-for-material-artifacts',
  VARIATION_EXPLICIT_TEST_PRESERVING: 'variation-is-explicit-and-test-preserving',
  MAINTENANCE_RETIREMENT_IN_SCOPE: 'maintenance-and-retirement-are-part-of-reference-scope',
  CHANGES_FOLLOW_GOVERNANCE_NOT_DRIFT: 'architecture-changes-follow-governance-never-example-drift'
});
