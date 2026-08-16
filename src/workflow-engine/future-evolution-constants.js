export const WORKFLOW_FUTURE_EVOLUTION_ERROR_CODE = 'WORKFLOW_FUTURE_EVOLUTION_INVALID';

export const WORKFLOW_EVOLUTION_GOALS = Object.freeze({
  AGILITY: 'improve-business-agility',
  RELIABILITY: 'increase-process-reliability',
  DECOUPLING: 'reduce-integration-coupling',
  DEVELOPER_PRODUCTIVITY: 'improve-developer-productivity',
  OPERATIONAL_CLARITY: 'improve-operational-clarity',
  REUSE: 'increase-reuse',
  ENTERPRISE_SCALE: 'support-enterprise-scale',
  VARIATION: 'support-tenant-and-property-variation',
  SAFE_AI: 'enable-safe-ai-participation',
  GOVERNANCE: 'strengthen-governance',
  PORTABILITY: 'improve-portability',
  PROVIDER_INDEPENDENCE: 'reduce-provider-dependence',
  RECOVERY: 'improve-recovery',
  MANUAL_EFFORT: 'reduce-avoidable-manual-effort',
  BUSINESS_VALUE: 'provide-measurable-business-value'
});

export const WORKFLOW_EVOLUTION_GUARDRAILS = Object.freeze({
  OWNER: 'accountable-owner',
  PROBLEM: 'defined-problem',
  AUTHORITY: 'preserved-authoritative-ownership',
  CONTRACTS: 'explicit-contracts',
  SECURITY_PRIVACY: 'defined-security-and-privacy',
  SCOPE: 'preserved-tenant-and-property',
  RECOVERY: 'defined-failure-and-recovery',
  EVIDENCE: 'evidence-producing',
  OBSERVABILITY: 'observable',
  COEXISTENCE: 'version-coexistence',
  MIGRATION: 'defined-migration',
  EXIT: 'defined-exit',
  TESTING: 'tested-before-production',
  REPLACEABILITY: 'replaceable-where-practical'
});

export const WORKFLOW_MATURITY_STAGES = Object.freeze({
  DURABLE_FOUNDATION: 'durable-foundation',
  ENTERPRISE_PLATFORM: 'enterprise-workflow-platform',
  INTELLIGENT_ADAPTIVE: 'intelligent-and-adaptive-processes',
  OPEN_ECOSYSTEM: 'open-workflow-ecosystem'
});

export const WORKFLOW_EVOLUTION_HORIZONS = Object.freeze({
  NEAR: 'near-horizon',
  INTERMEDIATE: 'intermediate-horizon',
  LONG: 'long-horizon'
});

export const WORKFLOW_CANONICAL_MODEL_ELEMENTS = Object.freeze({
  IDENTITY: 'identity',
  VERSION: 'version',
  OWNERSHIP: 'ownership',
  INPUT_OUTPUT: 'inputs-and-outputs',
  STATES: 'states',
  TRANSITIONS: 'transitions',
  TASKS: 'tasks',
  EVENTS: 'events',
  TIMERS: 'timers',
  BRANCHES_JOINS: 'branches-and-joins',
  HUMAN_DECISIONS: 'human-decisions',
  AGENT_TASKS: 'agent-tasks',
  RETRIES: 'retries',
  TIMEOUTS: 'timeouts',
  CANCELLATION: 'cancellation',
  COMPENSATION: 'compensation',
  COMPLETION: 'completion',
  FAILURE: 'failure',
  POLICY: 'policy',
  EVIDENCE: 'evidence'
});

export const WORKFLOW_EVOLUTION_VALIDATION_FINDINGS = Object.freeze({
  UNREACHABLE_STATE: 'unreachable-states',
  TERMINAL_PATH: 'missing-terminal-paths',
  UNBOUNDED_LOOP: 'unbounded-loops',
  UNSAFE_JOIN: 'unsafe-parallel-joins',
  CANCELLATION: 'inconsistent-cancellation',
  COMPENSATION: 'incomplete-compensation',
  DEADLINE: 'contradictory-deadlines',
  ERROR: 'unhandled-normalized-errors',
  AUTHORITY: 'authority-gaps',
  CLASSIFICATION: 'data-classification-conflicts',
  TENANT_SCOPE: 'tenant-scope-ambiguity',
  CONTRACT: 'incompatible-contracts',
  BUDGET: 'resource-budget-risk'
});

export const WORKFLOW_ADAPTATION_INPUTS = Object.freeze({
  POLICY: 'policy',
  TENANT: 'tenant-entitlement',
  PROPERTY: 'property-capability',
  DEPENDENCY: 'dependency-health',
  CAPACITY: 'capacity',
  DEADLINE: 'deadline-risk',
  COST: 'cost',
  QUALITY: 'quality',
  SECURITY: 'security',
  HUMAN: 'human-availability'
});

export const WORKFLOW_MIGRATION_PATTERNS = Object.freeze({
  NEW_EXECUTIONS: 'new-executions-only-cutover',
  COEXISTENCE: 'side-by-side-runtime-coexistence',
  TENANT: 'tenant-by-tenant-migration',
  PROPERTY: 'property-by-property-migration',
  WORKFLOW: 'workflow-by-workflow-migration',
  DRAIN: 'version-bound-draining',
  ACTIVE_TRANSFER: 'controlled-active-execution-transfer',
  RECREATE: 'recreate-from-authoritative-state'
});

export const WORKFLOW_TECHNOLOGY_RADAR_STATES = Object.freeze({
  ADOPT: 'adopt',
  TRIAL: 'trial',
  ASSESS: 'assess',
  HOLD: 'hold'
});

export const WORKFLOW_ADOPTION_GATES = Object.freeze({
  EXPLORE: 'explore',
  EXPERIMENT: 'experiment',
  PILOT: 'pilot',
  SCALE: 'scale',
  STANDARDIZE: 'standardize',
  RETIRE: 'retire'
});

export const WORKFLOW_EVOLUTION_STOP_CRITERIA = Object.freeze({
  VALUE: 'business-value-not-demonstrated',
  SAFETY_SECURITY: 'unacceptable-safety-or-security',
  ISOLATION: 'tenant-isolation-not-assured',
  OWNERSHIP: 'ambiguous-domain-ownership',
  AGENT_AUTONOMY: 'agent-autonomy-exceeds-control',
  RELIABILITY: 'inadequate-reliability',
  OPERATIONS: 'unsupported-operational-capability',
  MIGRATION: 'excessive-migration-risk',
  EXIT: 'impractical-provider-exit',
  EVIDENCE: 'insufficient-evidence',
  COST: 'unsustainable-cost'
});

export const WORKFLOW_FUTURE_QUALITY_ATTRIBUTES = Object.freeze({
  DURABILITY: 'durability',
  DETERMINISM: 'determinism',
  RELIABILITY: 'reliability',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  ACCOUNTABILITY: 'accountability',
  AUDITABILITY: 'auditability',
  EXPLAINABILITY: 'explainability',
  INTEROPERABILITY: 'interoperability',
  PORTABILITY: 'portability',
  SCALABILITY: 'scalability',
  RESILIENCE: 'resilience',
  MAINTAINABILITY: 'maintainability',
  USABILITY: 'usability',
  ADAPTABILITY: 'adaptability',
  COST_EFFICIENCY: 'cost-efficiency'
});

export const WORKFLOW_FUTURE_RULES = Object.freeze({
  PROCESS_STATE: 'workflow-engine-owns-durable-process-state',
  DOMAIN_TRUTH: 'domain-services-own-business-truth-and-rules',
  AGENT_OWNERSHIP: 'agent-framework-owns-identity-and-reasoning',
  HUMAN_AUTHORITY: 'human-authority-for-consequential-decisions',
  DETERMINISTIC_CONTROL: 'deterministic-workflow-control-state',
  VERSION_BINDING: 'immutable-definition-version-per-execution',
  ISOLATION: 'tenant-and-property-isolation',
  VERSIONED_CONTRACTS: 'versioned-api-event-task-policy-evidence-contracts',
  NO_DATABASE_ACCESS: 'no-cross-service-database-access',
  CANONICAL_MODEL: 'provider-independent-canonical-workflow-model',
  SEMANTIC_EQUIVALENCE: 'semantic-equivalence-across-representations',
  GOVERNED_ASSETS: 'govern-templates-components-packages-extensions-marketplaces',
  VALIDATION: 'static-validation-and-testing-before-activation',
  PROPORTIONAL_VERIFICATION: 'risk-proportional-simulation-and-formal-methods',
  DERIVED_INTELLIGENCE: 'predictions-and-recommendations-are-not-facts',
  BOUNDED_ADAPTATION: 'pre-approved-deterministic-adaptation',
  AGENT_REVIEW: 'agents-cannot-self-activate-proposals',
  CONVERSATION_BOUNDARY: 'conversation-not-durable-workflow-authority',
  PROVIDER_EXIT: 'provider-replaceability-and-documented-exit',
  NO_SEMANTIC_LOSS: 'reject-silent-semantic-loss',
  SINGLE_AUTHORITY: 'one-transition-authority-per-execution',
  SAFE_DRAIN: 'drain-when-active-transfer-not-proven-safe',
  MIGRATION_INTEGRITY: 'preserve-idempotency-reconciliation-compensation-evidence',
  SCALE_READINESS: 'readiness-security-governance-assurance-before-scale',
  STAGED_ADOPTION: 'staged-adoption-with-success-stop-rollback-retirement',
  ADRS: 'material-evolution-decisions-recorded-as-adrs',
  RISK_REASSESSMENT: 'reassess-risk-as-autonomy-and-federation-increase',
  CLAIMS: 'no-unsupported-evolution-claims',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const WORKFLOW_FUTURE_BOUNDARIES = Object.freeze({
  PRODUCT: 'commit-to-specific-workflow-product',
  STANDARD: 'commit-to-specific-workflow-standard',
  DATES: 'establish-delivery-dates',
  AUTONOMY: 'authorize-unbounded-autonomous-workflows',
  DOMAIN_AUTHORITY: 'transfer-domain-authority-to-workflow-engine',
  AGENT_REASONING: 'transfer-agent-reasoning-ownership',
  SCOPE: 'permit-cross-tenant-or-unauthorized-cross-property-execution',
  ADJACENT_ARCHITECTURE: 'replace-security-governance-privacy-operations-assurance',
  EXACTLY_ONCE: 'guarantee-universal-exactly-once',
  PATTERN: 'require-event-sourcing-serverless-formal-verification-or-multi-engine',
  EXPERIMENT: 'treat-experiment-as-production-approved',
  ADR: 'replace-adr-based-decision-making'
});
