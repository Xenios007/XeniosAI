export const DEVELOPER_EXPERIENCE_ERROR_CODE = 'DEVELOPER_EXPERIENCE_INVALID';

export const DEVELOPER_EXPERIENCE_OBJECTIVES = Object.freeze({
  RAPID_PRODUCTIVE_CONTRIBUTION: 'rapid-productive-contribution',
  DISCOVERABLE_ARCHITECTURE_AND_OWNERSHIP: 'discoverable-architecture-and-ownership',
  REDUCED_SETUP_AND_COORDINATION: 'reduced-setup-and-coordination',
  TRUSTWORTHY_FEEDBACK: 'fast-relevant-and-trustworthy-feedback',
  PRESERVED_LIFECYCLE_CONTEXT: 'preserved-lifecycle-context',
  ACTIONABLE_CONTROLS: 'understandable-and-actionable-controls',
  CONSISTENT_HUMAN_AND_AI_SUPPORT: 'consistent-human-and-ai-support',
  GOVERNED_SELF_SERVICE: 'self-service-without-policy-bypass',
  DIAGNOSABLE_RECOVERABLE_FAILURES: 'diagnosable-and-recoverable-failures',
  SAFE_LOCAL_AND_REMOTE_DEVELOPMENT: 'safe-local-and-remote-development',
  PRESERVED_BOUNDARIES: 'preserved-tenant-property-data-and-environment-boundaries',
  ACCOUNTABLE_OWNERSHIP: 'deployed-capabilities-have-accountable-ownership',
  OPERATIONAL_READINESS: 'operational-readiness-during-development',
  VALUE_DELIVERY_MEASURES: 'value-delivery-over-activity-volume'
});

export const DEVELOPER_EXPERIENCE_PRINCIPLES = Object.freeze({
  ARCHITECTURE_BEFORE_IMPLEMENTATION: 'architecture-before-implementation', INTENT_BEFORE_ACTION: 'intent-before-action',
  PROGRESSIVE_DISCLOSURE: 'progressive-disclosure', ONE_COHERENT_JOURNEY: 'one-coherent-journey',
  FAST_LOCAL_FEEDBACK: 'fast-local-feedback', SECURE_COMPLIANT_DEFAULTS: 'secure-and-compliant-defaults',
  EXPLAINABLE_GUARDRAILS: 'explainable-guardrails', REVERSIBLE_PROGRESS: 'reversible-progress',
  OWNERSHIP_THROUGHOUT: 'ownership-throughout', ACCESSIBILITY_BY_DESIGN: 'accessibility-by-design', MEASURED_OUTCOMES: 'measured-outcomes'
});

export const DEVELOPER_EXPERIENCE_ACTORS = Object.freeze({
  APPLICATION_DEVELOPER: 'application-developer', PLATFORM_DEVELOPER: 'platform-developer', SERVICE_OWNER: 'service-owner',
  TECHNICAL_LEAD_OR_ARCHITECT: 'technical-lead-or-architect', QUALITY_ENGINEER: 'quality-engineer',
  SECURITY_PRIVACY_RISK_COMPLIANCE: 'security-privacy-risk-and-compliance-contributor',
  OPERATIONS_OR_RELIABILITY: 'operations-or-reliability-contributor', DATA_AND_AI: 'data-and-ai-contributor',
  INTEGRATION: 'integration-contributor', TENANT_OR_PROPERTY: 'tenant-or-property-contributor',
  AUTHORIZED_AI_IMPLEMENTATION_AGENT: 'authorized-ai-implementation-agent', REVIEWER_OR_APPROVER: 'reviewer-or-approver',
  PLATFORM_SUPPORT: 'platform-support-contributor'
});

export const EXPERIENCE_CONTEXT_FIELDS = Object.freeze({
  ACTOR_IDENTITY_AND_TYPE: 'actor-identity-and-type', HUMAN_SPONSOR: 'human-sponsor-for-ai-agent',
  ORGANIZATION_AND_TEAM: 'organization-and-team', TENANT_AND_PROPERTY_SCOPE: 'tenant-and-property-scope',
  REPOSITORY_AND_PROJECT: 'repository-and-project', SERVICE_OR_CAPABILITY: 'service-or-capability',
  DOMAIN_AND_ARCHITECTURE_SCOPE: 'domain-and-architecture-scope', TASK_OR_CHANGE_INTENT: 'task-or-change-intent',
  LIFECYCLE_STATE: 'lifecycle-state', ENVIRONMENT: 'environment', DATA_CLASSIFICATION: 'data-classification',
  RISK_AND_CONTROL_PROFILE: 'risk-and-control-profile', GRANTED_PERMISSIONS: 'granted-permissions',
  ACTIVE_APPROVALS: 'active-approvals', TIME_AND_COST_BOUNDARIES: 'time-and-cost-boundaries', RELEVANT_EVIDENCE: 'relevant-evidence'
});

export const DEVELOPER_JOURNEY_STAGES = Object.freeze({
  ENTER_AND_UNDERSTAND: 'Enter and Understand', DISCOVER_AND_DECIDE: 'Discover and Decide', CREATE_OR_CHANGE: 'Create or Change',
  BUILD_AND_VALIDATE: 'Build and Validate', REVIEW_AND_AUTHORIZE: 'Review and Authorize', DELIVER_AND_VERIFY: 'Deliver and Verify',
  OWN_AND_OPERATE: 'Own and Operate', LEARN_EVOLVE_OR_RETIRE: 'Learn, Evolve, or Retire'
});

export const DEVELOPER_JOURNEY_STATES = Object.freeze({
  PROPOSED: 'proposed', AUTHORIZED: 'authorized', PREPARING: 'preparing', IN_PROGRESS: 'in-progress',
  WAITING_FOR_DEPENDENCY: 'waiting-for-dependency', WAITING_FOR_EVIDENCE: 'waiting-for-evidence',
  WAITING_FOR_REVIEW: 'waiting-for-review', WAITING_FOR_APPROVAL: 'waiting-for-approval', BLOCKED: 'blocked', FAILED: 'failed',
  READY_FOR_DELIVERY: 'ready-for-delivery', DELIVERING: 'delivering', VERIFYING: 'verifying', OPERATIONAL: 'operational',
  IMPROVING: 'improving', DEPRECATED: 'deprecated', RETIRED: 'retired', CANCELLED: 'cancelled'
});

export const JOURNEY_STATE_FIELDS = Object.freeze({
  CURRENT_OWNER: 'current-owner', ENTRY_CONDITION: 'entry-condition', REQUIRED_ACTIONS: 'required-actions', EVIDENCE: 'evidence',
  DECISION_AUTHORITY: 'decision-authority', TIME_EXPECTATION: 'time-expectation', ESCALATION_PATH: 'escalation-path',
  EXIT_CONDITION: 'exit-condition', PERMITTED_NEXT_STATES: 'permitted-next-states'
});

export const HUMAN_DEVELOPER_EXPERIENCE_STEPS = Object.freeze({
  AUTHENTICATE_AND_SELECT_CONTEXT: 'authenticate-and-select-context', DISCOVER_WORK_AND_ARCHITECTURE: 'discover-work-and-architecture',
  CONFIRM_CAPABILITY_NOT_DUPLICATED: 'confirm-capability-does-not-exist', SELECT_PATH_OR_EXCEPTION: 'select-paved-path-or-initiate-exception',
  CREATE_ISOLATED_CHANGE: 'create-isolated-traceable-change', ESTABLISH_SAFE_ENVIRONMENT: 'establish-safe-development-environment',
  IMPLEMENT_INCREMENTALLY: 'implement-in-understandable-increments', RECEIVE_FAST_FEEDBACK: 'receive-fast-feedback',
  RUN_AUTHORITATIVE_VALIDATION: 'run-authoritative-validation', RESOLVE_FINDINGS: 'resolve-findings-or-document-exceptions',
  REQUEST_REVIEW: 'request-review-with-evidence', OBTAIN_AUTHORIZATION: 'obtain-required-authorization',
  DELIVER_PROGRESSIVELY: 'deliver-trusted-artifact-progressively', VERIFY_OUTCOMES: 'verify-technical-and-business-outcomes',
  OBSERVE_AND_SUPPORT: 'observe-and-support-capability', IMPROVE_OR_RETIRE: 'improve-or-retire-capability'
});

export const AI_DEVELOPER_EXPERIENCE_STEPS = Object.freeze({
  RESOLVE_IDENTITY_AND_SPONSOR: 'resolve-identity-and-human-sponsor', RESOLVE_AUTHORIZED_SCOPE: 'resolve-authorized-scope',
  READ_AUTHORITIES: 'read-instructions-architecture-adrs-and-implementation', SELECT_WORK_UNIT: 'select-authorized-logical-work-unit',
  CONFIRM_BOUNDARIES: 'confirm-permissions-and-boundaries', INSPECT_REPOSITORY: 'inspect-components-dependencies-tests-and-state',
  PLAN: 'form-architecture-consistent-plan', CHANGE: 'make-bounded-attributable-changes',
  TEST_AND_DOCUMENT: 'update-tests-and-documentation', VALIDATE: 'execute-authorized-validation',
  STOP_AT_BOUNDARIES: 'stop-at-conflict-authority-risk-or-dependency-boundary', REPORT: 'report-actions-results-and-evidence',
  REQUEST_REVIEW: 'request-human-review-when-required', COMPLETE_WITHIN_AUTHORITY: 'commit-deliver-or-stop-within-authority'
});

export const PAIRED_JOURNEY_FIELDS = Object.freeze({
  HUMAN_INTENT: 'human-intent', HUMAN_ACCOUNTABILITY: 'human-accountability', AGENT_IDENTITY: 'agent-identity',
  DELEGATED_SCOPE: 'delegated-scope', ARCHITECTURE_CONTEXT: 'architecture-context', TASK_BOUNDARIES: 'clear-task-boundaries',
  CHANGE_ISOLATION: 'change-isolation', REVIEWABLE_INCREMENTS: 'reviewable-increments', ATTRIBUTION: 'tool-action-attribution',
  VALIDATION_EVIDENCE: 'validation-evidence', DECISION_BOUNDARIES: 'decision-boundaries',
  STOP_AND_ESCALATION: 'stop-and-escalation-behavior', HUMAN_ACCEPTANCE: 'final-human-acceptance-where-required'
});

export const DELEGATION_CONTRACT_FIELDS = Object.freeze({
  HUMAN_REQUESTOR: 'human-requestor', AGENT_IDENTITY: 'agent-identity', INTENT: 'business-and-technical-intent',
  REPOSITORY_AND_TARGET: 'repository-and-target', ARCHITECTURE_SCOPE: 'architecture-scope',
  PERMITTED_FILES: 'permitted-files-or-components', PERMITTED_TOOLS: 'permitted-tools',
  NETWORK_BOUNDARIES: 'network-and-external-system-boundaries', DATA_SECRET_RESTRICTIONS: 'data-and-secret-restrictions',
  ALLOWED_WRITE_ACTIONS: 'allowed-write-actions', VALIDATION_EXPECTATIONS: 'test-and-validation-expectations',
  DELIVERY_AUTHORITY: 'commit-push-delivery-and-communication-authority', RESOURCE_LIMITS: 'time-cost-and-resource-limits',
  REQUIRED_APPROVALS: 'required-approvals', STOP_CONDITIONS: 'stop-conditions', REPORTING_EXPECTATIONS: 'reporting-expectations',
  REVOCATION: 'revocation'
});

export const AI_AGENT_STOP_CONDITIONS = Object.freeze({
  ARCHITECTURE_CONFLICT: 'architecture-sources-conflict', MISSING_MANDATORY_REFERENCE: 'mandatory-reference-missing',
  AUTHORITY_EXCEEDED: 'scope-exceeds-authority', UNAUTHORIZED_DESTRUCTIVE_ACTION: 'destructive-action-needs-authorization',
  SENSITIVE_DATA_EXPOSURE: 'secrets-or-sensitive-data-exposure', UNCERTAIN_SCOPE_BOUNDARY: 'tenant-or-property-boundary-uncertain',
  CONTROL_CONCERN: 'security-privacy-safety-legal-or-compliance-concern', UNOWNED_CHANGES_AT_RISK: 'unowned-changes-would-be-overwritten',
  VALIDATION_UNAVAILABLE: 'required-validation-unavailable', UNTRUSTWORTHY_COMPLETION: 'repository-or-build-prevents-trustworthy-completion',
  HUMAN_DECISION_REQUIRED: 'accountable-human-decision-required', MATERIAL_RISK_EXPANSION: 'risk-or-impact-materially-expands'
});

export const DEVELOPER_INTERACTION_CHANNELS = Object.freeze({
  PORTAL: 'developer-portal', SERVICE_CATALOG: 'service-catalog', DOCUMENTATION: 'documentation-interface', CLI: 'command-line-interface',
  API: 'api', IDE: 'integrated-development-environment', SOURCE_COLLABORATION: 'source-collaboration-interface',
  BUILD_DELIVERY: 'build-and-delivery-interface', CONVERSATIONAL: 'chat-or-conversational-interface',
  AI_AGENT: 'ai-implementation-agent', AUTOMATION: 'automation-and-workflow', SUPPORT: 'support-channel'
});

export const DEVELOPER_EXPERIENCE_CONTRACT_FIELDS = Object.freeze({
  INTENDED_USERS: 'intended-users', SUPPORTED_JOURNEYS: 'supported-journeys', PRECONDITIONS: 'preconditions', REQUIRED_INPUTS: 'required-inputs',
  DEFAULT_BEHAVIOR: 'default-behavior', EXPECTED_OUTPUTS: 'expected-outputs', COMPLETION_TIME: 'expected-response-or-completion-time',
  STATE_MODEL: 'state-model', PERMISSION_MODEL: 'permission-model', POLICY_BEHAVIOR: 'policy-behavior', EVIDENCE: 'evidence-produced',
  ERROR_BEHAVIOR: 'error-behavior', RECOVERY_BEHAVIOR: 'recovery-behavior', SUPPORT_PATH: 'support-path',
  ACCESSIBILITY: 'accessibility-expectations', RELIABILITY: 'availability-and-reliability-expectations', VERSIONING: 'versioning-and-deprecation'
});

export const DEVELOPER_FEEDBACK_CLASSES = Object.freeze({
  INFORMATION: 'information', RECOMMENDATION: 'recommendation', WARNING: 'warning', REQUIRED_REMEDIATION: 'required-remediation',
  BLOCKING_POLICY: 'blocking-policy', HUMAN_DECISION_REQUIRED: 'human-decision-required', PLATFORM_FAILURE: 'platform-failure'
});

export const DEVELOPER_EXPERIENCE_MEASURES = Object.freeze({
  AUTHORIZED_ACCESS_TIME: 'time-to-authorized-access', FIRST_TASK_TIME: 'time-to-first-successful-task',
  ARCHITECTURE_DISCOVERY_TIME: 'time-to-discover-applicable-architecture', PROJECT_CREATION_TIME: 'time-to-create-project-or-service',
  FIRST_BUILD_TIME: 'time-to-first-build', FEEDBACK_LATENCY: 'feedback-latency', BUILD_TEST_RELIABILITY: 'build-and-test-reliability',
  REVIEW_WAIT_TIME: 'review-wait-time', AUTHORIZATION_WAIT_TIME: 'authorization-wait-time', DELIVERY_LEAD_TIME: 'delivery-lead-time',
  DELIVERY_SUCCESS: 'delivery-success', CHANGE_FAILURE_RATE: 'change-failure-rate', RECOVERY_TIME: 'recovery-time',
  PAVED_PATH_ADOPTION: 'paved-path-adoption', ESCAPE_PATH_DEMAND: 'escape-path-demand', DOCUMENTATION_SUCCESS: 'documentation-success',
  SUPPORT_DEMAND: 'support-demand-and-recurrence', OWNERSHIP_COMPLETENESS: 'ownership-completeness',
  OPERATIONAL_READINESS: 'operational-readiness-attainment', DEVELOPER_SATISFACTION: 'developer-satisfaction',
  AI_TASK_SUCCESS: 'ai-agent-task-success', HUMAN_INTERVENTION_RATE: 'human-intervention-rate',
  AI_STOP_CONDITION_QUALITY: 'ai-stop-condition-quality', TENANT_PROPERTY_DEFECTS: 'tenant-or-property-defects',
  CONTROL_FINDINGS: 'security-and-compliance-findings', RETIREMENT_TIME: 'time-to-safe-retirement'
});

export const DEVELOPER_EXPERIENCE_ARCHITECTURAL_RULES = Object.freeze({
  END_TO_END_PRODUCT_CONCERN: 'developer-experience-is-an-end-to-end-product-concern',
  HUMAN_AND_AUTHORIZED_AI: 'support-humans-and-authorized-ai-agents', HUMAN_ACCOUNTABILITY: 'preserve-explicit-human-accountability',
  BIND_WORK_TO_CONTEXT: 'bind-work-to-identity-intent-scope-architecture-and-ownership',
  VISIBLE_RESUMABLE_STATE: 'make-journey-state-visible-and-resumable', COHERENT_CHANNEL_CONCEPTS: 'coherent-concepts-across-channels',
  PAVED_PATH_DEFAULT: 'paved-path-is-easiest-supported-route', GOVERNED_ESCAPE_PATHS: 'provide-governed-escape-paths',
  SAFE_DEFAULTS: 'secure-compliant-observable-and-operable-defaults', AUTHORITATIVE_VALIDATION: 'fast-feedback-with-authoritative-validation',
  EXPLAIN_POLICY: 'explain-policy-decisions-and-remediation', PRESERVE_SCOPE: 'preserve-tenant-and-property-context',
  OPERATIONAL_OWNERSHIP: 'integrate-operational-ownership', EXPLICIT_RECOVERY: 'design-failure-retry-recovery-and-support',
  JOURNEY_EVIDENCE: 'generate-evidence-during-the-journey', PROTECT_TELEMETRY: 'protect-developer-and-operational-telemetry',
  ACCESSIBILITY_VALIDATION: 'validate-accessibility', OUTCOME_MEASURES: 'measure-contributor-and-production-outcomes',
  NO_UNSAFE_INCENTIVES: 'avoid-metrics-that-reward-unsafe-activity', VENDOR_NEUTRALITY: 'preserve-vendor-neutrality-and-technology-independence'
});

export const FUTURE_DEVELOPER_EXPERIENCE_CAPABILITIES = Object.freeze({
  INTENT_DRIVEN_JOURNEYS: 'intent-driven-journey-composition', ROLE_AWARE_ONBOARDING: 'personalized-role-aware-onboarding',
  ARCHITECTURE_ASSISTANCE: 'architecture-aware-development-assistance', SEMANTIC_DISCOVERY: 'semantic-cross-domain-discovery',
  PREDICTIVE_BLOCKERS: 'predictive-journey-blockers', ADAPTIVE_VALIDATION: 'risk-adaptive-validation',
  AI_REVIEW_PREPARATION: 'ai-assisted-review-preparation', MULTI_AGENT_DEVELOPMENT: 'governed-multi-agent-development',
  READINESS_GUIDANCE: 'continuous-operational-readiness-guidance', PROPERTY_SIMULATION: 'property-simulation-and-digital-twin-development',
  CROSS_TENANT_SIMULATION: 'cross-tenant-impact-simulation', SELF_IMPROVING_PAVED_PATHS: 'self-improving-paved-paths',
  PROACTIVE_LIFECYCLE_JOURNEYS: 'proactive-dependency-and-deprecation-journeys', NATURAL_LANGUAGE: 'natural-language-platform-interaction'
});