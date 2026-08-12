export const FUTURE_AGENT_FRAMEWORK_EVOLUTION_ERROR_CODE = 'FUTURE_AGENT_FRAMEWORK_EVOLUTION_INVALID';

export const STABLE_AGENT_RESPONSIBILITIES = Object.freeze({
  REGISTERED_IDENTITIES: 'registered-and-accountable-agent-identities',
  EXPLICIT_AUTHORITY: 'explicit-execution-bound-authority',
  BUSINESS_SERVICE_OWNERSHIP: 'business-services-own-business-rules-and-state',
  WORKFLOW_OWNERSHIP: 'workflow-engine-owns-durable-deterministic-processes',
  GOVERNED_KNOWLEDGE: 'governed-knowledge',
  CORRECTABLE_MEMORY: 'contextual-and-correctable-memory',
  MEDIATED_ACTIONS: 'tool-gateway-mediated-actions',
  TENANT_PROPERTY_ISOLATION: 'mandatory-tenant-and-property-isolation',
  ATTRIBUTABLE_HUMAN_DECISIONS: 'attributable-human-decisions',
  CONTROLLABLE_OPERATIONS: 'observable-and-controllable-operations',
  INDEPENDENT_ASSURANCE: 'assurance-independent-of-agent-claims'
});

export const AGENT_EVOLUTION_OBJECTIVES = Object.freeze({
  GOAL_COMPLETION: 'goal-completion', REASONING_QUALITY: 'reasoning-quality', PLANNING_RELIABILITY: 'planning-reliability',
  HUMAN_COLLABORATION: 'human-agent-collaboration', TOOL_EFFECTIVENESS: 'tool-effectiveness',
  MULTI_AGENT_SPECIALIZATION: 'multi-agent-specialization', OPERATIONAL_EFFICIENCY: 'operational-efficiency',
  EVALUATION_COVERAGE: 'evaluation-coverage', SAFETY: 'safety', RESILIENCE: 'resilience',
  TENANT_PROPERTY_ADAPTABILITY: 'tenant-and-property-adaptability', DEVELOPER_EXPERIENCE: 'developer-experience', PORTABILITY: 'portability'
});

export const AGENT_EVOLUTION_PRINCIPLES = Object.freeze({
  EVIDENCE_BEFORE_AUTONOMY: 'evidence-before-autonomy', REVERSIBLE_ADOPTION: 'reversible-adoption',
  MODULAR_INTRODUCTION: 'modular-introduction-through-explicit-contracts', HUMAN_AUTHORITY: 'human-authority',
  DETERMINISTIC_ENFORCEMENT: 'deterministic-enforcement', TENANT_CHOICE: 'tenant-choice',
  PROPERTY_PRACTICALITY: 'property-practicality', TECHNOLOGY_INDEPENDENCE: 'technology-independence'
});

export const AGENT_EVOLUTION_HORIZONS = Object.freeze({
  FOUNDATION_STRENGTHENING: 'foundation-strengthening', ADAPTIVE_ASSISTANCE: 'adaptive-assistance',
  BOUNDED_COORDINATION: 'bounded-coordination', GOVERNED_AUTONOMOUS_OPERATIONS: 'governed-autonomous-operations'
});

export const AGENT_MATURITY_STAGES = Object.freeze({
  INFORMATIONAL: 'informational', ADVISORY: 'advisory', PREPARATORY: 'preparatory',
  SUPERVISED_EXECUTION: 'supervised-execution', BOUNDED_AUTONOMOUS_EXECUTION: 'bounded-autonomous-execution',
  BOUNDED_MULTI_AGENT_COORDINATION: 'bounded-multi-agent-coordination',
  CONTINUOUSLY_ASSURED_AUTONOMOUS_OPERATIONS: 'continuously-assured-autonomous-operations'
});

export const MATURITY_GATE_CRITERIA = Object.freeze({
  BUSINESS_VALUE: 'business-value', GOAL_COMPLETION: 'goal-completion', ACCURACY: 'accuracy', GROUNDING: 'grounding',
  AUTHORITY_COMPLIANCE: 'authority-compliance', POLICY_COMPLIANCE: 'policy-compliance', TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_ISOLATION: 'property-isolation', SAFETY: 'safety', HUMAN_INTERVENTION: 'human-intervention-effectiveness',
  FAILURE_RECOVERY: 'failure-recovery', COST: 'cost', OPERATIONAL_READINESS: 'operational-readiness', ASSURANCE: 'assurance'
});

export const ADAPTIVE_ROUTING_FACTORS = Object.freeze({
  TASK_TYPE: 'task-type', COMPLEXITY: 'complexity', RISK: 'risk', DATA_SENSITIVITY: 'data-sensitivity',
  LANGUAGE: 'language', MODALITY: 'modality', TENANT_CONTRACT: 'tenant-contract', REGION: 'region',
  LATENCY: 'latency', COST: 'cost', EVALUATION_PERFORMANCE: 'evaluation-performance', AVAILABILITY: 'availability'
});

export const MODEL_PORTFOLIO_TYPES = Object.freeze({
  GENERAL: 'general-models', SPECIALIZED: 'specialized-models', LOCAL: 'local-models', PRIVATE: 'private-models',
  MULTIMODAL: 'multimodal-models', VALIDATION: 'validation-models', DETERMINISTIC: 'embedded-deterministic-components'
});

export const MODEL_SUBSTITUTION_REQUIREMENTS = Object.freeze({
  CAPABILITY_COMPATIBILITY: 'capability-compatibility', DATA_ELIGIBILITY: 'data-eligibility',
  OUTPUT_CONTRACT: 'output-contract-compatibility', EVALUATION: 'evaluation', COST_PERFORMANCE: 'cost-and-performance-review',
  PROVIDER_REVIEW: 'provider-review', CONTROLLED_ROLLOUT: 'controlled-rollout', ROLLBACK: 'rollback'
});

export const VERIFIED_PLANNING_CAPABILITIES = Object.freeze({
  FORMAL_CONSTRAINTS: 'formal-constraints', POLICY_AWARE_PLANNERS: 'policy-aware-planners', PLAN_SIMULATION: 'plan-simulation',
  DEPENDENCY_VERIFICATION: 'dependency-verification', RESOURCE_ESTIMATION: 'resource-estimation',
  BUSINESS_RULE_VALIDATION: 'business-rule-validation', NARROW_SAFETY_PROOFS: 'safety-proofs-for-narrow-actions',
  WORKFLOW_COMPILATION: 'workflow-compilation'
});

export const SIMULATION_DIMENSIONS = Object.freeze({
  TASK_PATH: 'expected-task-path', TOOL_EFFECTS: 'tool-effects', RESOURCE_USE: 'resource-consumption',
  FAILURE_BEHAVIOR: 'failure-behavior', TENANT_IMPACT: 'tenant-impact', PROPERTY_IMPACT: 'property-impact',
  HUMAN_DECISION_LOAD: 'human-decision-load', COMPENSATION: 'compensation', COMPLETION_LIKELIHOOD: 'completion-likelihood'
});

export const PROACTIVE_AGENT_REQUIREMENTS = Object.freeze({
  EXPLICIT_SUBSCRIPTION: 'explicit-subscription', APPROVED_PURPOSE: 'approved-purpose', TRIGGER_VALIDATION: 'trigger-validation',
  AUTHORITY: 'authority', RATE_LIMITS: 'rate-limits', QUIET_PERIODS: 'quiet-periods', HUMAN_CONTROLS: 'human-controls',
  DUPLICATE_PREVENTION: 'duplicate-prevention', EVIDENCE: 'evidence'
});

export const LONG_RUNNING_AGENT_REQUIREMENTS = Object.freeze({
  DURABLE_WORKFLOW: 'durable-workflow-participation', CHECKPOINTS: 'checkpoints', AUTHORITY_RENEWAL: 'authority-renewal',
  CONTEXT_REFRESH: 'context-refresh', LIMIT_RENEWAL: 'limit-renewal', HUMAN_REVIEW: 'human-review',
  CANCELLATION: 'cancellation', CONTINUITY: 'continuity', RETIREMENT: 'retirement-behavior'
});

export const DYNAMIC_AUTONOMY_FACTORS = Object.freeze({
  RISK: 'risk', EVALUATION_HEALTH: 'evaluation-health', TENANT_POLICY: 'tenant-policy', PROPERTY_CONDITIONS: 'property-conditions',
  TOOL_HEALTH: 'tool-health', PROVIDER_HEALTH: 'provider-health', HUMAN_AVAILABILITY: 'human-availability',
  INCIDENT_STATUS: 'incident-status', COST: 'cost'
});

export const AGENT_MARKETPLACE_ASSETS = Object.freeze({
  AGENTS: 'agents', TOOLS: 'tools', SKILLS: 'skills', KNOWLEDGE_PACKAGES: 'knowledge-packages',
  EVALUATION_SUITES: 'evaluation-suites', WORKFLOW_PATTERNS: 'workflow-patterns', MODEL_CAPABILITIES: 'model-capabilities'
});

export const AGENT_COMPOSITION_COMPONENTS = Object.freeze({
  IDENTITY_PROFILES: 'identity-profiles', REASONING_STRATEGIES: 'reasoning-strategies', TOOL_BUNDLES: 'tool-bundles',
  POLICY_PROFILES: 'policy-profiles', EVALUATION_PACKS: 'evaluation-packs', HUMAN_INTERACTION: 'human-interaction-patterns',
  WORKFLOW_INTEGRATIONS: 'workflow-integrations'
});

export const DYNAMIC_AGENT_REQUIREMENTS = Object.freeze({
  APPROVED_TEMPLATE: 'approved-template', PARENT_EXECUTION: 'parent-execution', TEMPORARY_IDENTITY: 'stable-temporary-identity',
  PURPOSE: 'purpose', AUTHORITY_SUBSET: 'authority-subset', TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  LIMITS: 'limits', TOOL_ALLOWLIST: 'tool-allowlist', EXPIRATION: 'expiration', EVIDENCE: 'evidence',
  GUARANTEED_RETIREMENT: 'guaranteed-retirement'
});

export const CONTINUOUS_EVALUATION_METHODS = Object.freeze({
  SHADOW_SCENARIOS: 'always-on-shadow-scenarios', SYNTHETIC_TRANSACTIONS: 'synthetic-transactions',
  RED_TEAMING: 'continuous-red-teaming', ONLINE_OUTCOMES: 'online-outcome-measurement',
  DRIFT_TRIGGERED: 'drift-triggered-evaluation', TENANT_SPECIFIC: 'tenant-specific-evaluation',
  PROPERTY_SIMULATION: 'property-simulation', PROVIDER_COMPARISON: 'provider-comparison'
});

export const AUTOMATED_RED_TEAM_CASES = Object.freeze({
  PROMPT_INJECTION: 'prompt-injection-attacks', TOOL_MISUSE: 'tool-misuse-attempts',
  TENANT_ISOLATION: 'tenant-isolation-tests', DELEGATION: 'delegation-attacks',
  RESOURCE_EXHAUSTION: 'resource-exhaustion-tests', SOCIAL_ENGINEERING: 'social-engineering-cases',
  MEMORY_POISONING: 'memory-poisoning-cases'
});

export const SELF_IMPROVEMENT_PROPOSAL_TARGETS = Object.freeze({
  INSTRUCTIONS: 'instructions', PLANS: 'plans', RETRIEVAL: 'retrieval', TOOL_SELECTION: 'tool-selection',
  EVALUATION_SCENARIOS: 'evaluation-scenarios', RUNBOOKS: 'runbooks', DOCUMENTATION: 'documentation'
});

export const AUTONOMOUS_MAINTENANCE_REQUIREMENTS = Object.freeze({
  BOUNDED_PATTERNS: 'known-bounded-patterns', EXPLICIT_AUTHORITY: 'explicit-authority', SAFE_ENVIRONMENT: 'safe-environment',
  REVERSIBLE_ACTION: 'reversible-action', INDEPENDENT_VALIDATION: 'independent-validation',
  INCIDENT_CORRELATION: 'incident-correlation', HUMAN_SUPERVISION: 'human-supervision', STOP_CONDITIONS: 'stop-conditions'
});

export const CROSS_TENANT_INTELLIGENCE_CONTROLS = Object.freeze({
  ANONYMIZATION: 'anonymization', AGGREGATION: 'aggregation', MINIMUM_COHORTS: 'minimum-cohorts',
  CONTRACTUAL_AUTHORITY: 'contractual-authority', PURPOSE_LIMITATION: 'purpose-limitation', PRIVACY_REVIEW: 'privacy-review',
  INDEPENDENT_ASSURANCE: 'independent-assurance', TENANT_TRANSPARENCY: 'tenant-transparency'
});

export const MULTIMODAL_REQUIREMENTS = Object.freeze({
  PROVENANCE: 'provenance', DATA_CLASSIFICATION: 'data-classification', CONSENT: 'consent',
  MODEL_ELIGIBILITY: 'model-eligibility', VALIDATION: 'validation', RETENTION: 'retention', ACCESSIBILITY: 'accessibility'
});

export const PHYSICAL_INTERACTION_REQUIREMENTS = Object.freeze({
  PROPERTY_IDENTITY: 'strong-property-identity', SAFETY_CONSTRAINTS: 'safety-constraints', LOCAL_AUTHORITY: 'local-authority',
  DEVICE_ATTESTATION: 'device-attestation', BOUNDED_COMMANDS: 'bounded-commands', MANUAL_OVERRIDE: 'manual-override',
  CONNECTIVITY_FALLBACK: 'connectivity-fallback', RECONCILIATION: 'reconciliation', INCIDENT_RESPONSE: 'incident-response'
});

export const AGENT_INTEROPERABILITY_CONTRACTS = Object.freeze({
  PORTABLE_DEFINITIONS: 'portable-agent-definitions', TOOL_CONTRACTS: 'versioned-tool-contracts',
  IDENTITY_CLAIMS: 'standard-identity-claims', DELEGATION: 'delegation-contracts', CONTEXT: 'context-packages',
  EVALUATION: 'evaluation-packages', EVIDENCE: 'evidence-formats'
});

export const AGENT_EVOLUTION_ADR_TRIGGERS = Object.freeze({
  AUTONOMY_LEVEL: 'new-autonomy-level', AGENT_TOPOLOGY: 'new-agent-topology', DYNAMIC_CREATION: 'dynamic-agent-creation',
  CROSS_TENANT: 'cross-tenant-capability', PHYSICAL_ACTION: 'physical-environment-action', PROVIDER_CLASS: 'new-provider-class',
  IDENTITY_MODEL: 'new-identity-model', SELF_MODIFICATION: 'self-modification-proposal', EVIDENCE_MODEL: 'new-evidence-model',
  HUMAN_AUTHORITY: 'major-change-to-human-authority'
});

export const INNOVATION_SANDBOX_REQUIREMENTS = Object.freeze({
  ISOLATED_ENVIRONMENT: 'isolated-environment', APPROVED_DATA: 'synthetic-or-approved-data',
  NO_PRODUCTION_AUTHORITY: 'no-production-authority', BOUNDED_RESOURCES: 'bounded-resources', OWNER: 'explicit-owner',
  EXPIRATION: 'expiration', EVALUATION: 'evaluation', EXIT_CRITERIA: 'exit-criteria', CLEANUP: 'cleanup'
});

export const AGENT_ADOPTION_PIPELINE = Object.freeze({
  RESEARCH: 'research', ARCHITECTURE_ASSESSMENT: 'architecture-assessment', ISOLATED_PROTOTYPE: 'isolated-prototype',
  EVALUATION: 'evaluation', SECURITY_GOVERNANCE_REVIEW: 'security-and-governance-review', SHADOW_OPERATION: 'shadow-operation',
  CONTROLLED_PILOT: 'controlled-pilot', LIMITED_PRODUCTION: 'limited-production', SCALED_ADOPTION: 'scaled-adoption',
  CONTINUOUS_REVIEW: 'continuous-review'
});

export const AGENT_ADOPTION_CRITERIA = Object.freeze({
  BUSINESS_VALUE: 'business-value', USER_VALUE: 'user-value', TENANT_DEMAND: 'tenant-demand',
  PROPERTY_PRACTICALITY: 'property-practicality', RISK: 'risk', SECURITY: 'security', PRIVACY: 'privacy', QUALITY: 'quality',
  RELIABILITY: 'reliability', COST: 'cost', OPERABILITY: 'operability', REVERSIBILITY: 'reversibility',
  PROVIDER_CONCENTRATION: 'provider-concentration', EXIT_STRATEGY: 'exit-strategy'
});

export const AGENT_EVOLUTION_RISKS = Object.freeze({
  AUTHORITY_CREEP: 'authority-creep', AUTOMATION_BIAS: 'automation-bias', PROVIDER_DEPENDENCY: 'hidden-provider-dependency',
  AGENT_PROLIFERATION: 'agent-proliferation', TOOL_PROLIFERATION: 'tool-proliferation', EVALUATION_GAMING: 'evaluation-gaming',
  CONTEXT_EXPANSION: 'context-expansion', CROSS_TENANT_LEAKAGE: 'cross-tenant-leakage',
  RESOURCE_AMPLIFICATION: 'resource-amplification', LOSS_OF_HUMAN_SKILL: 'loss-of-human-skill',
  IRREVERSIBLE_COUPLING: 'irreversible-coupling', UNCLEAR_ACCOUNTABILITY: 'unclear-accountability'
});

export const AGENT_EVOLUTION_NON_GOALS = Object.freeze({
  FULL_AUTONOMY: 'fully-autonomous-enterprise-operation', REMOVE_HUMAN_ACCOUNTABILITY: 'removal-of-human-accountability',
  SELF_AUTHORIZATION: 'self-authorizing-agents', UNRESTRICTED_SELF_MODIFICATION: 'unrestricted-self-modification',
  CROSS_TENANT_MEMORY: 'cross-tenant-memory-sharing', UNIVERSAL_AGENT: 'one-universal-agent',
  PERMANENT_PROVIDER: 'one-permanent-model-provider', REMOVE_DETERMINISTIC_SERVICES: 'elimination-of-deterministic-services',
  REPLACE_WORKFLOWS: 'replacement-of-workflows-with-model-reasoning'
});

export const FUTURE_AGENT_ARCHITECTURAL_RULES = Object.freeze({
  REGISTERED_IDENTITY: 'preserve-registered-identity-and-accountable-ownership',
  EXECUTION_AUTHORITY: 'preserve-explicit-execution-bound-authority', EVIDENCE_FOR_AUTONOMY: 'increase-autonomy-only-after-evidence',
  SAFE_WITHDRAWAL: 'support-rollback-and-safe-withdrawal', VERSIONED_CONTRACTS: 'introduce-capabilities-through-versioned-contracts',
  BUSINESS_OWNERSHIP: 'preserve-business-service-ownership', WORKFLOW_RESPONSIBILITY: 'preserve-workflow-engine-responsibility',
  ISOLATION: 'preserve-tenant-and-property-isolation', GOVERNED_CONTEXT: 'keep-context-and-memory-governed',
  MEDIATED_TOOLS: 'keep-tools-mediated', HUMAN_CONTROL: 'maintain-human-intervention-and-contestability',
  MODEL_CHANGE: 'treat-model-substitution-as-behavioral-change', EVALUATE_ADAPTATION: 'evaluate-adaptive-routing-and-planning',
  BOUND_EXECUTION: 'bound-proactive-and-long-running-execution', REGISTER_TEMPORARY_AGENTS: 'prevent-unregistered-temporary-actors',
  AUTHORIZATION_NOT_REPUTATION: 'prevent-reputation-from-replacing-authorization',
  NO_DIRECT_SELF_MODIFICATION: 'prevent-direct-deployment-of-self-modification',
  STRONG_EFFECT_ASSURANCE: 'require-stronger-assurance-for-physical-and-cross-tenant-effects',
  CONTROLLED_ADOPTION: 'use-controlled-adoption-stages', ADRS: 'require-adrs-for-material-architectural-change',
  RETIRE_WEAK_CAPABILITIES: 'retire-weak-and-redundant-capabilities', NEUTRALITY: 'remain-vendor-model-and-product-neutral'
});

export const FUTURE_AGENT_ARCHITECTURE_BOUNDARIES = Object.freeze({
  DELIVERY_DATES: 'commit-delivery-dates', SELECT_MODELS_VENDORS: 'select-models-or-vendors',
  APPROVE_AUTONOMY: 'approve-future-autonomy', REPLACE_ADRS: 'replace-adrs',
  REPLACE_SECURITY_GOVERNANCE: 'replace-security-or-governance-review',
  EXPERIMENT_PRODUCTION_AUTHORITY: 'grant-production-authority-to-experiments'
});