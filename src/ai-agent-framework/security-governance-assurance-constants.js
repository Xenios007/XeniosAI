export const AGENT_SECURITY_GOVERNANCE_ASSURANCE_ERROR_CODE = 'AGENT_SECURITY_GOVERNANCE_ASSURANCE_INVALID';

export const AGENT_SECURITY_OBJECTIVES = Object.freeze({
  IDENTITY: 'identity',
  AUTHORITY: 'authority',
  TENANT_BOUNDARIES: 'tenant-boundaries',
  PROPERTY_BOUNDARIES: 'property-boundaries',
  DATA: 'data',
  CONTEXT: 'context',
  MEMORY: 'memory',
  KNOWLEDGE: 'knowledge',
  TOOLS: 'tools',
  CREDENTIALS: 'credentials',
  RUNTIME_STATE: 'runtime-state',
  MODELS: 'models',
  PROVIDERS: 'providers',
  EVIDENCE: 'evidence',
  HUMAN_DECISIONS: 'human-decisions',
  BUSINESS_SERVICES: 'business-services',
  EXTERNAL_SYSTEMS: 'external-systems'
});

export const AGENT_GOVERNANCE_OBJECTIVES = Object.freeze({
  DECISION_RIGHTS: 'clear-decision-rights',
  ACCOUNTABLE_OWNERSHIP: 'accountable-ownership',
  INVENTORY: 'agent-inventory',
  RISK_CONTROLS: 'risk-proportionate-controls',
  POLICY_TRACEABILITY: 'policy-traceability',
  LIFECYCLE_APPROVAL: 'lifecycle-approval',
  CONTROLLED_AUTONOMY: 'controlled-autonomy',
  HUMAN_OVERSIGHT: 'human-oversight',
  TRANSPARENT_LIMITATIONS: 'transparent-limitations',
  EVIDENCE_BY_DESIGN: 'evidence-by-design',
  INDEPENDENT_ASSURANCE: 'independent-assurance',
  GOVERNED_EXCEPTIONS: 'governed-exceptions',
  TIMELY_REMEDIATION: 'timely-remediation',
  CONTINUOUS_REASSESSMENT: 'continuous-reassessment'
});

export const AGENT_SECURITY_TRUST_ELEMENTS = Object.freeze({
  PLATFORM_CONTROLS: 'trusted-platform-controls',
  AUTHENTICATED_IDENTITIES: 'authenticated-identities',
  AUTHORIZED_SERVICES: 'authorized-services',
  AGENT_ARTIFACTS: 'approved-agent-artifacts',
  MODEL_PROVIDERS: 'approved-model-providers',
  GOVERNED_KNOWLEDGE: 'governed-knowledge',
  USER_CONTENT: 'user-provided-content',
  EXTERNAL_CONTENT: 'externally-retrieved-content',
  TOOL_OUTPUT: 'tool-output',
  AGENT_OUTPUT: 'agent-generated-output',
  UNTRUSTED_CODE: 'untrusted-code'
});

export const AGENT_SECURITY_BOUNDARIES = Object.freeze({
  DEFINITION: 'agent-definition',
  REGISTRATION: 'agent-registration',
  SUPPLY_CHAIN: 'artifact-supply-chain',
  RUNTIME_ADMISSION: 'runtime-admission',
  EXECUTION_IDENTITY: 'execution-identity',
  CONTEXT_ASSEMBLY: 'context-assembly',
  MODEL_INVOCATION: 'model-invocation',
  TOOL_INVOCATION: 'tool-invocation',
  DELEGATION: 'delegation',
  SHARED_STATE: 'shared-state',
  HUMAN_APPROVAL: 'human-approval',
  EVIDENCE: 'evidence',
  OPERATIONS: 'operations',
  RETIREMENT: 'retirement'
});

export const AGENT_THREAT_ACTORS = Object.freeze({
  EXTERNAL_ATTACKERS: 'external-attackers',
  MALICIOUS_USERS: 'malicious-users',
  COMPROMISED_TENANT_USERS: 'compromised-tenant-users',
  COMPROMISED_PROPERTY_USERS: 'compromised-property-users',
  MALICIOUS_CONTENT_PUBLISHERS: 'malicious-content-publishers',
  COMPROMISED_TOOL_PROVIDERS: 'compromised-tool-providers',
  COMPROMISED_MODEL_PROVIDERS: 'compromised-model-providers',
  MALICIOUS_PLUGINS: 'malicious-plugins',
  INSIDER_THREATS: 'insider-threats',
  COMPROMISED_AGENTS: 'compromised-agents',
  MISCONFIGURED_AUTOMATION: 'misconfigured-automation'
});

export const AGENT_THREAT_CATEGORIES = Object.freeze({
  IDENTITY_SPOOFING: 'identity-spoofing',
  AUTHORITY_ESCALATION: 'authority-escalation',
  CONFUSED_DEPUTY: 'confused-deputy',
  PROMPT_INJECTION: 'prompt-injection',
  INDIRECT_PROMPT_INJECTION: 'indirect-prompt-injection',
  DATA_EXFILTRATION: 'data-exfiltration',
  CROSS_TENANT_LEAKAGE: 'cross-tenant-leakage',
  CROSS_PROPERTY_LEAKAGE: 'cross-property-leakage',
  CREDENTIAL_EXPOSURE: 'credential-exposure',
  TOOL_MISUSE: 'tool-misuse',
  DESTRUCTIVE_ACTION: 'destructive-action',
  MEMORY_POISONING: 'memory-poisoning',
  KNOWLEDGE_POISONING: 'knowledge-poisoning',
  CONTEXT_CONTAMINATION: 'context-contamination',
  DELEGATION_AMPLIFICATION: 'delegation-amplification',
  RESOURCE_EXHAUSTION: 'resource-exhaustion',
  DENIAL_OF_SERVICE: 'denial-of-service',
  MODEL_MANIPULATION: 'model-manipulation',
  SUPPLY_CHAIN_COMPROMISE: 'supply-chain-compromise',
  EVIDENCE_TAMPERING: 'evidence-tampering',
  UNSAFE_AUTONOMOUS_PERSISTENCE: 'unsafe-autonomous-persistence'
});

export const AGENT_LEAST_PRIVILEGE_DIMENSIONS = Object.freeze({
  PURPOSE: 'purpose',
  GOAL: 'goal',
  AGENT: 'agent',
  VERSION: 'version',
  INITIATOR: 'initiator',
  REPRESENTED_PRINCIPAL: 'represented-principal',
  TENANT: 'tenant',
  PROPERTY: 'property',
  ENVIRONMENT: 'environment',
  DATA: 'data',
  TOOL: 'tool',
  OPERATION: 'operation',
  ACTION_CLASS: 'action-class',
  TIME: 'time',
  COST: 'cost',
  DELEGATION: 'delegation'
});

export const AGENT_CREDENTIAL_SECURITY_REQUIREMENTS = Object.freeze({
  BROKERED_OUTSIDE_MODEL: 'brokered-outside-model',
  SHORT_LIVED: 'short-lived',
  EXECUTION_BOUND: 'execution-bound',
  TENANT_SCOPED: 'tenant-scoped',
  PROPERTY_SCOPED: 'property-scoped-where-required',
  TOOL_OPERATION_SCOPED: 'tool-and-operation-scoped',
  ENVIRONMENT_SPECIFIC: 'environment-specific',
  ROTATABLE: 'rotatable',
  REVOCABLE: 'revocable',
  NON_EXPORTABLE: 'non-exportable-where-practical'
});

export const AGENT_RUNTIME_SECURITY_CONTROLS = Object.freeze({
  WORKLOAD_ISOLATION: 'workload-isolation',
  EXECUTION_ISOLATION: 'execution-isolation',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_ISOLATION: 'property-isolation',
  NETWORK_RESTRICTIONS: 'network-restrictions',
  FILESYSTEM_RESTRICTIONS: 'filesystem-restrictions',
  RESOURCE_LIMITS: 'resource-limits',
  STATE_INTEGRITY: 'state-integrity',
  ARTIFACT_VERIFICATION: 'artifact-verification',
  SUSPENSION: 'suspension',
  CANCELLATION: 'cancellation',
  EMERGENCY_TERMINATION: 'emergency-termination'
});

export const PROMPT_INJECTION_CONTROLS = Object.freeze({
  INSTRUCTION_HIERARCHY: 'instruction-hierarchy',
  TRUST_CLASSIFICATION: 'trust-classification',
  CONTENT_ISOLATION: 'content-isolation',
  TOOL_AUTHORIZATION: 'tool-authorization',
  OUTPUT_VALIDATION: 'output-validation',
  SENSITIVE_DATA_FILTERING: 'sensitive-data-filtering',
  HUMAN_APPROVAL: 'human-approval',
  DETECTION_MONITORING: 'detection-and-monitoring'
});

export const AGENT_DATA_PROTECTION_CONTROLS = Object.freeze({
  CLASSIFICATION: 'classification',
  COLLECTION: 'collection',
  PURPOSE: 'purpose',
  MINIMIZATION: 'minimization',
  ACCESS: 'access',
  SHARING: 'sharing',
  ENCRYPTION: 'encryption',
  RESIDENCY: 'residency',
  RETENTION: 'retention',
  CORRECTION: 'correction',
  DELETION: 'deletion',
  LEGAL_HOLD: 'legal-hold',
  EVIDENCE: 'evidence'
});

export const AGENT_MODEL_SECURITY_CONTROLS = Object.freeze({
  APPROVED_USE_CASES: 'approved-use-cases',
  MODEL_IDENTITY: 'model-identity',
  VERSION_CHANGES: 'version-changes',
  DATA_ELIGIBILITY: 'data-eligibility',
  CONTEXT_LIMITS: 'context-limits',
  SAFETY_CONFIGURATION: 'safety-configuration',
  ADVERSARIAL_ROBUSTNESS: 'adversarial-robustness',
  PROVIDER_BEHAVIOR: 'provider-behavior',
  OUTPUT_VALIDATION: 'output-validation',
  EVALUATION: 'evaluation',
  WITHDRAWAL: 'withdrawal'
});

export const AGENT_PROVIDER_GOVERNANCE_FIELDS = Object.freeze({
  DATA_PROCESSED: 'data-processed',
  REGION: 'region',
  RETENTION: 'retention',
  TRAINING_USE_RESTRICTIONS: 'training-use-restrictions',
  SUBPROCESSORS: 'subprocessors',
  SECURITY_COMMITMENTS: 'security-commitments',
  INCIDENT_NOTIFICATION: 'incident-notification',
  SERVICE_COMMITMENTS: 'service-commitments',
  MODEL_CHANGE_NOTIFICATION: 'model-change-notification',
  AUDIT_RIGHTS: 'audit-rights',
  EXIT_STRATEGY: 'exit-strategy'
});

export const AGENT_SUPPLY_CHAIN_CONTROLS = Object.freeze({
  SOURCE: 'source',
  DEPENDENCIES: 'dependencies',
  MODELS: 'models',
  PROMPT_PACKAGES: 'prompt-packages',
  TOOL_PACKAGES: 'tool-packages',
  PLUGINS: 'plugins',
  EVALUATION_DATA: 'evaluation-data',
  ARTIFACTS: 'containers-or-artifacts',
  PROVENANCE: 'provenance',
  INTEGRITY: 'integrity',
  VULNERABILITIES: 'vulnerabilities',
  LICENSING: 'licensing'
});

export const SECURE_FAILURE_ACTIONS = Object.freeze({
  DENY: 'deny',
  PAUSE: 'pause',
  REDUCE_CAPABILITY: 'reduce-capability',
  REQUEST_CLARIFICATION: 'request-clarification',
  ESCALATE: 'escalate',
  TERMINATE_SAFELY: 'terminate-safely'
});

export const EMERGENCY_SUSPENSION_SCOPES = Object.freeze({
  AGENT: 'agent',
  VERSION: 'version',
  ENVIRONMENT: 'environment',
  TENANT: 'tenant',
  PROPERTY: 'property',
  TOOL: 'tool',
  MODEL: 'model',
  PROVIDER: 'provider',
  ACTION_CLASS: 'action-class'
});

export const GOVERNANCE_MODEL_STAGES = Object.freeze({
  PURPOSE_ACCOUNTABILITY: 'purpose-and-accountability',
  RISK_IMPACT: 'risk-and-impact-classification',
  POLICY_CONTROLS: 'policy-authority-and-control-objectives',
  DESIGN_APPROVAL: 'design-evaluation-and-approval',
  ACTIVATION_OPERATION: 'controlled-activation-and-operation',
  EVIDENCE_ASSURANCE: 'evidence-monitoring-and-assurance',
  REMEDIATION_IMPROVEMENT: 'issues-exceptions-remediation-and-improvement'
});

export const AGENT_INVENTORY_FIELDS = Object.freeze({
  IDENTITY: 'agent-identity',
  VERSION: 'version',
  PURPOSE: 'purpose',
  OWNER: 'owner',
  OPERATIONAL_OWNER: 'operational-owner',
  LIFECYCLE_STATE: 'lifecycle-state',
  RISK_CLASSIFICATION: 'risk-classification',
  AUTONOMY: 'autonomy',
  TENANTS: 'tenants',
  PROPERTIES: 'properties',
  DATA: 'data',
  TOOLS: 'tools',
  MODELS: 'models',
  PROVIDERS: 'providers',
  DELEGATION: 'delegation',
  CONTROLS: 'controls',
  EVALUATIONS: 'evaluations',
  APPROVALS: 'approvals',
  EXCEPTIONS: 'exceptions',
  INCIDENTS: 'incidents',
  REVIEW_DATE: 'review-date'
});

export const RISK_CLASSIFICATION_FACTORS = Object.freeze({
  BUSINESS_IMPACT: 'business-impact',
  GUEST_IMPACT: 'guest-impact',
  FINANCIAL_EFFECT: 'financial-effect',
  DATA_SENSITIVITY: 'data-sensitivity',
  AUTONOMY: 'autonomy',
  REVERSIBILITY: 'reversibility',
  TENANT_SCOPE: 'tenant-scope',
  PROPERTY_SCOPE: 'property-scope',
  EXTERNAL_COMMUNICATION: 'external-communication',
  REGULATORY_EFFECT: 'legal-and-regulatory-effect',
  SAFETY: 'safety',
  MODEL_UNCERTAINTY: 'model-uncertainty',
  PROVIDER_DEPENDENCY: 'provider-dependency',
  DELEGATION: 'delegation',
  OPERATIONAL_CRITICALITY: 'operational-criticality'
});

export const AGENT_IMPACT_LEVELS = Object.freeze({
  LOW: 'low',
  MODERATE: 'moderate',
  HIGH: 'high',
  CRITICAL: 'critical'
});

export const DECISION_RIGHTS = Object.freeze({
  PROPOSE_AGENT: 'propose-agent',
  APPROVE_DESIGN: 'approve-design',
  ACCEPT_RISK: 'accept-risk',
  APPROVE_DATA_USE: 'approve-data-use',
  APPROVE_PROVIDERS: 'approve-providers',
  APPROVE_AUTONOMY: 'approve-autonomy',
  ACTIVATE: 'activate',
  EXPAND_TENANT_SCOPE: 'expand-tenant-scope',
  EXPAND_PROPERTY_SCOPE: 'expand-property-scope',
  GRANT_EXCEPTIONS: 'grant-exceptions',
  SUSPEND: 'suspend',
  RESTORE: 'restore',
  DEPRECATE: 'deprecate',
  RETIRE: 'retire'
});

export const AGENT_POLICY_DOMAINS = Object.freeze({
  PURPOSE: 'purpose',
  GOALS: 'goals',
  PROHIBITED_BEHAVIOR: 'prohibited-behavior',
  DATA: 'data',
  MODELS: 'models',
  PROVIDERS: 'providers',
  TOOLS: 'tools',
  ACTIONS: 'actions',
  AUTONOMY: 'autonomy',
  DELEGATION: 'delegation',
  HUMAN_DECISIONS: 'human-decisions',
  LIMITS: 'limits',
  EVIDENCE: 'evidence',
  RETENTION: 'retention',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  SUSPENSION: 'suspension'
});

export const POLICY_ENFORCEMENT_POINTS = Object.freeze({
  DESIGN: 'design',
  REGISTRATION: 'registration',
  RELEASE: 'release',
  ACTIVATION: 'activation',
  ADMISSION: 'admission',
  CONTEXT_RETRIEVAL: 'context-retrieval',
  MODEL_ROUTING: 'model-routing',
  TOOL_INVOCATION: 'tool-invocation',
  DELEGATION: 'delegation',
  MEMORY_WRITE: 'memory-write',
  KNOWLEDGE_PUBLICATION: 'knowledge-publication',
  COMPLETION: 'completion',
  EVIDENCE_ACCESS: 'evidence-access',
  RETIREMENT: 'retirement'
});

export const AGENT_CONTROL_OBJECTIVES = Object.freeze({
  APPROVED_AGENTS_ONLY: 'only-approved-agents-operate',
  AUTHORIZED_GOALS_ONLY: 'only-authorized-goals-are-admitted',
  BOUNDARIES_PRESERVED: 'tenant-and-property-boundaries-are-preserved',
  SENSITIVE_DATA_APPROVED: 'sensitive-data-reaches-only-approved-models-and-tools',
  MATERIAL_AUTHORITY: 'material-actions-require-appropriate-authority',
  DELEGATION_NO_EXPANSION: 'delegation-cannot-expand-authority',
  OUTPUT_NOT_TRUTH: 'agent-output-does-not-become-truth-automatically',
  UNSAFE_STOPPED: 'unsafe-behavior-is-detected-and-stopped',
  ATTRIBUTABLE_ACTIVITY: 'material-activity-is-attributable',
  SUSPEND_RETIRE: 'agents-can-be-suspended-and-retired'
});

export const RESPONSIBLE_AI_DIMENSIONS = Object.freeze({
  PURPOSE_LEGITIMACY: 'purpose-legitimacy',
  HUMAN_ACCOUNTABILITY: 'human-accountability',
  TRANSPARENCY: 'transparency',
  FAIRNESS: 'fairness',
  PRIVACY: 'privacy',
  SECURITY: 'security',
  SAFETY: 'safety',
  ROBUSTNESS: 'robustness',
  EXPLAINABILITY: 'explainability',
  CONTESTABILITY: 'contestability',
  ACCESSIBILITY: 'accessibility',
  HUMAN_OVERSIGHT: 'human-oversight',
  RESOURCE_PROPORTIONALITY: 'environmental-and-resource-proportionality'
});

export const EVIDENCE_GENERATION_POINTS = Object.freeze({
  DEFINITION: 'definition',
  RISK_ASSESSMENT: 'risk-assessment',
  EVALUATION: 'evaluation',
  APPROVAL: 'approval',
  RELEASE: 'release',
  ADMISSION: 'admission',
  CONTEXT_USE: 'context-use',
  MODEL_USE: 'model-use',
  TOOL_ACTION: 'tool-action',
  DELEGATION: 'delegation',
  HUMAN_DECISION: 'human-decision',
  COMPLETION: 'completion',
  MONITORING: 'monitoring',
  INCIDENT: 'incident',
  CHANGE: 'change',
  RETIREMENT: 'retirement'
});

export const EVIDENCE_PROPERTIES = Object.freeze({
  ATTRIBUTABLE: 'attributable',
  TIME_STAMPED: 'time-stamped',
  INTEGRITY_PROTECTED: 'integrity-protected',
  COMPLETE_ENOUGH: 'complete-enough',
  SOURCE_LINKED: 'source-linked',
  TENANT_SCOPED: 'tenant-scoped',
  PROPERTY_SCOPED: 'property-scoped',
  ACCESS_CONTROLLED: 'access-controlled',
  RETAINED_APPROPRIATELY: 'retained-appropriately',
  REPRODUCIBLE: 'reproducible-where-practical'
});

export const ASSURANCE_ACTIVITIES = Object.freeze({
  ARCHITECTURE_REVIEW: 'architecture-review',
  SECURITY_TESTING: 'security-testing',
  PRIVACY_REVIEW: 'privacy-review',
  POLICY_TESTING: 'policy-testing',
  EVALUATION_REVIEW: 'evaluation-review',
  CONTROL_TESTING: 'control-testing',
  RED_TEAMING: 'red-teaming',
  PENETRATION_TESTING: 'penetration-testing',
  OPERATIONAL_REVIEW: 'operational-review',
  INTERNAL_AUDIT: 'internal-audit',
  EXTERNAL_ASSURANCE: 'external-assurance'
});

export const RED_TEAM_SCENARIOS = Object.freeze({
  PROMPT_INJECTION: 'prompt-injection',
  DATA_EXFILTRATION: 'data-exfiltration',
  CROSS_TENANT_LEAKAGE: 'cross-tenant-leakage',
  AUTHORITY_ESCALATION: 'authority-escalation',
  TOOL_MISUSE: 'tool-misuse',
  SOCIAL_ENGINEERING: 'social-engineering',
  MEMORY_POISONING: 'memory-poisoning',
  DELEGATION_LOOPS: 'delegation-loops',
  RESOURCE_EXHAUSTION: 'resource-exhaustion',
  EVIDENCE_SUPPRESSION: 'evidence-suppression',
  UNSAFE_RECOVERY: 'unsafe-recovery'
});

export const EXCEPTION_FIELDS = Object.freeze({
  REQUIREMENT: 'requirement',
  SCOPE: 'scope',
  REASON: 'reason',
  RISK: 'risk',
  COMPENSATING_CONTROLS: 'compensating-controls',
  OWNER: 'owner',
  APPROVER: 'approver',
  EFFECTIVE_DATE: 'effective-date',
  EXPIRATION: 'expiration',
  REVIEW: 'review',
  REMEDIATION_PLAN: 'remediation-plan'
});

export const FINDING_SOURCES = Object.freeze({
  EVALUATION: 'evaluation',
  MONITORING: 'monitoring',
  INCIDENT: 'incident',
  AUDIT: 'audit',
  RED_TEAM: 'red-team',
  USER_COMPLAINT: 'user-complaint',
  TENANT_REVIEW: 'tenant-review',
  PROPERTY_REVIEW: 'property-review',
  PROVIDER_CHANGE: 'provider-change'
});

export const REMEDIATION_ACTIONS = Object.freeze({
  SCOPE_REDUCTION: 'scope-reduction',
  AUTONOMY_REDUCTION: 'autonomy-reduction',
  POLICY_UPDATE: 'policy-update',
  TOOL_RESTRICTION: 'tool-restriction',
  MODEL_REPLACEMENT: 'model-replacement',
  PROVIDER_RESTRICTION: 'provider-restriction',
  DATA_CORRECTION: 'data-correction',
  MEMORY_DELETION: 'memory-deletion',
  PROMPT_REVISION: 'prompt-revision',
  ADDITIONAL_VALIDATION: 'additional-validation',
  HUMAN_OVERSIGHT: 'human-oversight',
  SUSPENSION: 'suspension',
  RETIREMENT: 'retirement'
});

export const REASSESSMENT_TRIGGERS = Object.freeze({
  AGENT_VERSION_CHANGE: 'agent-version-change',
  MODEL_CHANGE: 'model-change',
  PROVIDER_CHANGE: 'provider-change',
  TOOL_CHANGE: 'tool-change',
  DATA_CHANGE: 'data-change',
  AUTONOMY_INCREASE: 'autonomy-increase',
  TENANT_EXPANSION: 'tenant-expansion',
  PROPERTY_EXPANSION: 'property-expansion',
  POLICY_CHANGE: 'policy-change',
  LEGAL_CONTRACTUAL_CHANGE: 'legal-or-contractual-change',
  INCIDENT: 'incident',
  EVALUATION_REGRESSION: 'evaluation-regression',
  NEW_THREAT: 'new-threat'
});

export const SECURITY_MONITORING_SIGNALS = Object.freeze({
  AUTHENTICATION_FAILURE: 'authentication-failure',
  AUTHORIZATION_DENIAL: 'authorization-denial',
  POLICY_DENIAL: 'policy-denial',
  TENANT_MISMATCH: 'tenant-mismatch',
  PROPERTY_MISMATCH: 'property-mismatch',
  TOOL_ANOMALY: 'tool-anomaly',
  UNEXPECTED_DATA_ACCESS: 'unexpected-data-access',
  PROMPT_INJECTION_SIGNALS: 'prompt-injection-signals',
  DELEGATION_ANOMALY: 'delegation-anomaly',
  RESOURCE_ANOMALY: 'resource-anomaly',
  MODEL_BEHAVIOR_CHANGE: 'model-behavior-change',
  EVIDENCE_FAILURE: 'evidence-failure',
  SUSPENSION_EVENTS: 'suspension-events'
});

export const INCIDENT_RESPONSE_CAPABILITIES = Object.freeze({
  DETECTION: 'detection',
  TRIAGE: 'triage',
  SCOPED_CONTAINMENT: 'scoped-containment',
  AGENT_SUSPENSION: 'agent-suspension',
  CREDENTIAL_REVOCATION: 'credential-revocation',
  TOOL_SUSPENSION: 'tool-suspension',
  PROVIDER_ISOLATION: 'provider-isolation',
  STATE_PRESERVATION: 'state-preservation',
  EVIDENCE_PRESERVATION: 'evidence-preservation',
  TENANT_COMMUNICATION: 'tenant-communication',
  PROPERTY_COMMUNICATION: 'property-communication',
  RECOVERY: 'recovery',
  POST_INCIDENT_EVALUATION: 'post-incident-evaluation'
});

export const SECURE_RESTORATION_REQUIREMENTS = Object.freeze({
  CAUSE_UNDERSTOOD: 'cause-understood',
  RISK_REASSESSED: 'risk-reassessed',
  REMEDIATION_COMPLETED: 'remediation-completed',
  EVALUATIONS_PASSED: 'evaluations-passed',
  CREDENTIALS_RENEWED: 'credentials-renewed',
  DEPENDENCIES_VERIFIED: 'dependencies-verified',
  APPROVAL: 'approval',
  CONTROLLED_ROLLOUT: 'controlled-rollout',
  ENHANCED_MONITORING: 'enhanced-monitoring'
});

export const GOVERNANCE_SECURITY_METRICS = Object.freeze({
  INVENTORY_COMPLETENESS: 'inventory-completeness',
  OWNERSHIP_COMPLETENESS: 'ownership-completeness',
  RISK_ASSESSMENT_CURRENCY: 'risk-assessment-currency',
  EVALUATION_COVERAGE: 'evaluation-coverage',
  POLICY_DENIAL: 'policy-denial',
  SECURITY_FINDINGS: 'security-findings',
  CROSS_TENANT_EVENTS: 'cross-tenant-events',
  HUMAN_INTERVENTION: 'human-intervention',
  EXCEPTION_COUNT_AGE: 'exception-count-and-age',
  REMEDIATION_TIME: 'remediation-time',
  SUSPENSION_COUNT: 'suspension-count',
  PROVIDER_CONCENTRATION: 'provider-concentration',
  EVIDENCE_COMPLETENESS: 'evidence-completeness',
  ASSURANCE_COVERAGE: 'assurance-coverage'
});

export const AGENT_SECURITY_GOVERNANCE_QUALITY_ATTRIBUTES = Object.freeze({
  CONFIDENTIALITY: 'confidentiality',
  INTEGRITY: 'integrity',
  AVAILABILITY: 'availability',
  ACCOUNTABILITY: 'accountability',
  SAFETY: 'safety',
  PRIVACY: 'privacy',
  ASSURANCE: 'assurance',
  ADAPTABILITY: 'adaptability'
});

export const AGENT_SECURITY_GOVERNANCE_ARCHITECTURAL_RULES = Object.freeze({
  UNTRUSTED_OUTPUT: 'treat-agent-output-as-untrusted-until-validated',
  REQUIRED_OWNERS: 'require-accountable-and-operational-owners',
  AUTHORITATIVE_INVENTORY: 'maintain-authoritative-agent-inventory',
  CLASSIFY_RISK_IMPACT: 'classify-risk-and-impact',
  RISK_PROPORTIONATE_CONTROLS: 'apply-risk-proportionate-controls',
  LEAST_PRIVILEGE: 'grant-least-privilege-per-execution',
  PRESERVE_IDENTITIES: 'preserve-initiator-tenant-and-property-identity',
  PROTECT_CREDENTIALS: 'protect-credentials-from-models-and-context',
  ISOLATE_TENANT_PROPERTY: 'enforce-tenant-and-property-isolation-at-every-layer',
  TRUST_RETRIEVED_CONTENT: 'treat-retrieved-content-and-agent-messages-according-to-trust',
  PROMPT_INJECTION_DEFENSE: 'defend-against-direct-and-indirect-prompt-injection',
  VALIDATE_MATERIAL_ACTIONS: 'validate-every-material-tool-action-independently',
  CONTROL_MODEL_PROVIDER_BOUNDARIES: 'control-model-and-provider-data-boundaries',
  PROTECT_SUPPLY_CHAIN: 'protect-agent-supply-chain',
  BOUND_RESOURCES_DELEGATION: 'bound-resource-use-and-delegation',
  HUMAN_OVERSIGHT: 'provide-human-oversight-proportionate-to-impact',
  TRANSPARENCY_CONTESTABILITY: 'support-transparency-and-contestability',
  TRUSTWORTHY_EVIDENCE: 'produce-trustworthy-evidence-during-normal-operation',
  NO_HIDDEN_REASONING_EVIDENCE: 'avoid-unrestricted-hidden-reasoning-in-evidence',
  INDEPENDENT_ASSURANCE: 'require-independent-assurance-for-higher-risk-agents',
  GOVERN_EXCEPTIONS: 'govern-exceptions-with-owners-and-expiration',
  VERIFIED_REMEDIATION: 'track-findings-through-verified-remediation',
  REASSESS: 'reassess-after-material-change-or-incident',
  SUSPEND_RESTORE: 'support-rapid-scoped-suspension-and-secure-restoration',
  NO_SELF_RISK_ACCEPTANCE: 'prevent-agents-from-accepting-their-own-risk-or-exceptions',
  TECHNOLOGY_NEUTRAL: 'remain-technology-model-and-provider-neutral'
});

export const AGENT_SECURITY_GOVERNANCE_BOUNDARIES = Object.freeze({
  SECURITY_PRODUCT_IMPLEMENTATION: 'security-product-implementation',
  IDENTITY_PROVIDER_IMPLEMENTATION: 'identity-provider-implementation',
  LEGAL_INTERPRETATION: 'legal-interpretation',
  COMPLIANCE_FRAMEWORK_SELECTION: 'compliance-framework-selection',
  MODEL_PROVIDER_SELECTION: 'model-or-provider-selection',
  ENTERPRISE_SECURITY_REPLACEMENT: 'replace-enterprise-security-architecture',
  GOVERNANCE_REPLACEMENT: 'replace-arch-012-governance-and-compliance',
  HUMAN_DECISION_REPLACEMENT: 'replace-accountable-human-decision-making'
});
