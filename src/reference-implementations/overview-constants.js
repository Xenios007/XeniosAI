export const REFERENCE_IMPLEMENTATION_OVERVIEW_ERROR_CODE = 'REFERENCE_IMPLEMENTATION_OVERVIEW_INVALID';

export const REFERENCE_MISSION_QUESTIONS = Object.freeze({
  MODULE_COLLABORATION: 'how-do-architecture-modules-work-together',
  DECISION_OWNERSHIP: 'which-service-owns-each-decision-and-record',
  AI_VERSUS_DETERMINISTIC: 'where-may-ai-reason-and-where-must-deterministic-logic-execute',
  SCOPE_PROPAGATION: 'how-do-tenant-property-identity-data-workflow-and-integration-scopes-propagate',
  FAILURE_CONTAINMENT: 'how-is-failure-contained-and-recovered',
  CONFORMANCE_EVIDENCE: 'what-evidence-demonstrates-conformance'
});

export const PORTFOLIO_REFERENCE_TIERS = Object.freeze({
  SINGLE_PROPERTY_BASELINE: 'casa-lluvia-staycation-demonstrates-one-tenant-and-one-property-with-availability-pricing-reservation-add-ons-guest-authorization-communication-knowledge-and-operations',
  ENTERPRISE_BASELINE: 'the-multi-property-reference-adds-tenant-portfolios-delegated-administration-federation-service-tiers-regional-policy-shared-and-local-knowledge-integrations-extensions-capacity-and-continuity',
  CROSS_CUTTING_PATTERN_REFERENCES: 'smaller-examples-demonstrate-ai-tool-use-workflows-apis-events-knowledge-retrieval-extension-hosting-tenant-isolation-observability-and-delivery'
});

export const REFERENCE_STAKEHOLDER_NEEDS = Object.freeze({
  PRODUCT_OWNERS: 'product-owners:demonstrated-business-outcomes-and-scope',
  ARCHITECTS: 'architects:traceability-and-architectural-feedback',
  DEVELOPERS: 'developers:golden-paths-contracts-examples-and-tests',
  SECURITY_PRIVACY: 'security-and-privacy:threat-scenarios-controls-and-evidence',
  OPERATIONS: 'operations:health-incident-capacity-continuity-and-support',
  TEST_ASSURANCE: 'test-and-assurance:executable-conformance-and-acceptance-criteria',
  TENANTS_PARTNERS: 'tenants-and-partners:understandable-behavior-integration-and-boundaries'
});

export const REFERENCE_TARGET_STATE_CHARACTERISTICS = Object.freeze({
  VERSIONED_MAINTAINED: 'versioned-and-maintained', TRACEABLE: 'traceable-to-architecture-decisions',
  EXECUTABLE_DEMONSTRABLE: 'executable-or-demonstrable', TECHNOLOGY_NEUTRAL: 'technology-neutral-at-logical-boundaries',
  SECURE_BY_DEFAULT: 'secure-by-default', MULTI_TENANT_TESTABLE: 'multi-tenant-testable',
  OBSERVABLE_FAILURE_AWARE: 'observable-and-failure-aware', REPRODUCIBLE_AUTOMATED_DELIVERY: 'reproducible-through-automated-delivery',
  EXPLICIT_LIMITATIONS: 'explicit-about-limitations', GOVERNED_FEEDBACK_RETIREMENT: 'governed-through-feedback-and-retirement'
});

export const REFERENCE_QUALITY_ATTRIBUTES = Object.freeze({
  CORRECTNESS: 'correctness:business-acceptance-and-domain-tests',
  SECURITY: 'security:authentication-authorization-isolation-secrets-negative-tests',
  RELIABILITY: 'reliability:timeouts-retries-idempotency-compensation-recovery',
  PERFORMANCE: 'performance:load-profile-budgets-latency-capacity-thresholds',
  SCALABILITY: 'scalability:property-tenant-workload-and-data-growth-paths',
  OPERABILITY: 'operability:health-telemetry-incidents-runbooks-evidence',
  EVOLVABILITY: 'evolvability:contracts-versioning-configuration-extensions-migration',
  PORTABILITY: 'portability:replaceable-adapters-and-technology-variants'
});

export const REFERENCE_ADOPTION_PATH_STEPS = Object.freeze({
  RUN_DOCUMENTED_SCENARIO: 'run-the-documented-scenario-with-synthetic-data',
  INSPECT_TRACE_TESTS: 'inspect-architecture-trace-and-tests',
  SELECT_REUSABLE_PATTERNS: 'select-reusable-patterns-rather-than-copying-the-entire-solution',
  ASSESS_PRODUCTION_FIT: 'assess-production-business-data-security-scale-and-operations',
  RECORD_ARCHITECTURE_DECISIONS: 'record-necessary-architecture-decisions',
  ADAPT_THROUGH_VARIATION_POINTS: 'adapt-through-supported-variation-points',
  RUN_CONFORMANCE_PROFILE: 'run-the-complete-conformance-profile',
  PILOT_OBSERVE_PRODUCTIONIZE: 'pilot-observe-and-productionize-through-governance'
});

export const REFERENCE_SUCCESS_MEASURES = Object.freeze({
  REQUIREMENTS_COVERED_BY_EVIDENCE: 'architecture-requirements-covered-by-executable-evidence',
  TIME_TO_CONFORMANT_SERVICE: 'time-to-create-a-conformant-service-or-integration',
  GOLDEN_PATH_ADOPTION: 'golden-path-adoption', CONTRACT_ISOLATION_TEST_COVERAGE: 'contract-and-tenant-isolation-test-coverage',
  BOUNDARY_MISUNDERSTANDING_DEFECTS: 'production-defects-caused-by-misunderstood-boundaries',
  RECOVERY_EXERCISE_SUCCESS: 'recovery-exercise-success',
  FEEDBACK_RESOLVED_INTO_IMPROVEMENTS: 'reference-feedback-resolved-into-architecture-or-platform-improvements',
  DEPENDENCY_SECURITY_UPDATE_TIMELINESS: 'dependency-and-security-update-timeliness'
});

export const REFERENCE_DECLARATION_FIELDS = Object.freeze({
  PURPOSE: 'purpose', CLASSIFICATION: 'classification', ARCHITECTURE_COVERAGE: 'architecture-coverage', ACTORS: 'actors',
  ACCEPTANCE_CRITERIA: 'acceptance-criteria', LIMITATIONS: 'limitations', DATA_POLICY: 'data-policy', TESTS: 'tests',
  OPERATIONS: 'operations', MAINTENANCE_OWNER: 'maintenance-owner'
});

export const REFERENCE_ARCHITECTURAL_RULES = Object.freeze({
  BEGINS_CASA_LLUVIA_EXPANDS_ENTERPRISE: 'the-portfolio-begins-with-casa-lluvia-and-expands-to-enterprise-operation',
  VALUE_MEASURED_THROUGH_OUTCOMES_CONFORMANCE: 'reference-value-is-measured-through-demonstrated-outcomes-and-conformance',
  CROSS_CUTTING_IN_EVERY_SCENARIO: 'cross-cutting-requirements-are-included-in-every-complete-scenario',
  CONSUMERS_REUSE_PATTERNS_NOT_ACCIDENTS: 'consumers-reuse-patterns-not-undocumented-implementation-accidents',
  NAMED_OWNERSHIP_LIFECYCLE: 'reference-maintenance-has-named-ownership-and-lifecycle'
});
