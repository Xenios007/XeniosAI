export const WORKFLOW_SECURITY_GOVERNANCE_ERROR_CODE = 'WORKFLOW_SECURITY_GOVERNANCE_INVALID';

export const WORKFLOW_SECURITY_IDENTITIES = Object.freeze({
  DEFINITION: 'definition-identity',
  DEFINITION_VERSION: 'definition-version-identity',
  EXECUTION: 'execution-identity',
  TASK: 'task-identity',
  ATTEMPT: 'attempt-identity',
  WORKER: 'worker-identity',
  HUMAN: 'human-identity',
  AGENT: 'agent-identity',
  SERVICE: 'service-identity',
  OPERATOR: 'operator-identity'
});

export const WORKFLOW_SECURITY_OBJECTIVES = Object.freeze({
  AUTHENTICITY: 'authenticity',
  AUTHORIZATION: 'authorization',
  CONFIDENTIALITY: 'confidentiality',
  INTEGRITY: 'integrity',
  AVAILABILITY: 'availability',
  ACCOUNTABILITY: 'accountability',
  NON_REPUDIATION: 'non-repudiation-where-required',
  TENANT_ISOLATION: 'tenant-isolation',
  PROPERTY_ISOLATION: 'property-isolation',
  LEAST_PRIVILEGE: 'least-privilege',
  CONTROLLED_DELEGATION: 'controlled-delegation',
  TRACEABILITY: 'traceability',
  RECOVERABILITY: 'recoverability',
  POLICY_COMPLIANCE: 'policy-compliance',
  ABUSE_RESISTANCE: 'abuse-resistance'
});

export const WORKFLOW_UNTRUSTED_INPUTS = Object.freeze({
  START: 'start-requests',
  SIGNALS: 'signals',
  EVENTS: 'events',
  CALLBACKS: 'callbacks',
  HUMAN: 'human-decisions',
  AGENT: 'agent-results',
  WORKER: 'worker-results',
  PROVIDER: 'provider-responses',
  CONFIGURATION: 'configuration-changes',
  DEFINITIONS: 'definition-packages',
  OPERATIONS: 'operational-commands',
  RECOVERY: 'recovery-inputs'
});

export const WORKFLOW_RISK_TIERS = Object.freeze({
  STANDARD: 'standard',
  CONTROLLED: 'controlled',
  HIGH_IMPACT: 'high-impact',
  CRITICAL: 'critical'
});

export const WORKFLOW_POLICY_ENFORCEMENT_POINTS = Object.freeze({
  AUTHORING: 'definition-authoring',
  BUILD: 'build-and-validation',
  RELEASE: 'release-approval',
  ACTIVATION: 'activation',
  START: 'workflow-start',
  DISPATCH: 'task-dispatch',
  HUMAN_ASSIGNMENT: 'human-assignment',
  AGENT_ASSIGNMENT: 'agent-assignment',
  TOOL: 'tool-invocation',
  DATA: 'data-access',
  INPUT: 'event-or-signal-receipt',
  TRANSITION: 'transition-application',
  COMPENSATION: 'compensation',
  OPERATIONS: 'operational-intervention',
  EVIDENCE: 'evidence-disclosure',
  RETIREMENT: 'retirement'
});

export const WORKFLOW_SECURITY_THREATS = Object.freeze({
  UNAUTHORIZED_START: 'unauthorized-workflow-start',
  UNAUTHORIZED_TRANSITION: 'unauthorized-transition',
  SCOPE_BREACH: 'cross-tenant-or-cross-property-access',
  IDENTITY_SPOOFING: 'identity-spoofing',
  DELEGATION_ABUSE: 'delegation-abuse',
  CONFUSED_DEPUTY: 'confused-deputy-behavior',
  REPLAY: 'replay-of-events-callbacks-or-decisions',
  TASK_THEFT: 'task-theft',
  STALE_COMPLETION: 'stale-worker-completion',
  DEFINITION_TAMPERING: 'definition-tampering',
  STATE_TAMPERING: 'state-tampering',
  INJECTION: 'input-or-expression-injection',
  PAYLOAD_EXPANSION: 'malicious-payload-expansion',
  SECRET_DISCLOSURE: 'secret-disclosure',
  EVIDENCE_TAMPERING: 'evidence-deletion-or-alteration',
  OPERATOR_MISUSE: 'operator-misuse',
  AGENT_MANIPULATION: 'agent-prompt-or-tool-manipulation',
  PROVIDER_IMPERSONATION: 'provider-impersonation',
  RESOURCE_EXHAUSTION: 'resource-exhaustion',
  RETRY_AMPLIFICATION: 'retry-amplification',
  TIMER_FLOODING: 'timer-flooding',
  QUEUE_STARVATION: 'queue-starvation',
  COMPENSATION_ABUSE: 'compensation-abuse',
  RECOVERY_EXPLOITATION: 'recovery-path-exploitation'
});

export const WORKFLOW_EVIDENCE_FIELDS = Object.freeze({
  IDENTITY: 'evidence-identity',
  TYPE: 'evidence-type',
  SOURCE: 'source',
  PRODUCER: 'producer-identity',
  WORKFLOW: 'workflow-and-version',
  EXECUTION: 'execution',
  TASK: 'task-or-transition',
  SCOPE: 'tenant-and-property',
  ACTOR: 'actor-and-represented-principal',
  EVENT_TIME: 'event-time',
  RECORDING_TIME: 'recording-time',
  CORRELATION: 'correlation-and-causation',
  CONTROL: 'policy-or-control-reference',
  OUTCOME: 'outcome',
  PROVENANCE: 'provenance',
  INTEGRITY: 'integrity-metadata',
  CLASSIFICATION: 'classification',
  RETENTION: 'retention-class',
  ACCESS: 'access-policy'
});

export const WORKFLOW_ASSURANCE_METHODS = Object.freeze({
  STATIC_ANALYSIS: 'definition-static-analysis',
  POLICY: 'policy-tests',
  AUTHORIZATION: 'authorization-tests',
  TENANT_ISOLATION: 'tenant-isolation-tests',
  PROPERTY_ISOLATION: 'property-isolation-tests',
  STATE_MACHINE: 'state-machine-tests',
  REPLAY: 'replay-tests',
  IDEMPOTENCY: 'idempotency-tests',
  FAILURE_INJECTION: 'failure-injection-tests',
  COMPENSATION: 'compensation-tests',
  HUMAN: 'human-control-tests',
  AGENT: 'agent-evaluation',
  PRIVILEGED_ACCESS: 'privileged-access-review',
  EVIDENCE_INTEGRITY: 'evidence-integrity-tests',
  RECOVERY: 'recovery-exercises',
  SUPPLIER: 'supplier-evidence-review'
});

export const WORKFLOW_SECURITY_OPERATIONS = Object.freeze({
  SUSPEND_EXECUTION: 'suspend-execution',
  SUSPEND_VERSION: 'suspend-definition-version',
  SUSPEND_TENANT: 'suspend-tenant-scope',
  SUSPEND_PROPERTY: 'suspend-property-scope',
  SUSPEND_TASK_CLASS: 'suspend-task-class',
  SUSPEND_WORKER_CLASS: 'suspend-worker-class',
  SUSPEND_INTEGRATION: 'suspend-integration',
  TERMINATE: 'controlled-termination',
  BREAK_GLASS: 'break-glass-access',
  REVOKE_CREDENTIALS: 'revoke-credentials',
  REQUIRE_MANUAL_APPROVAL: 'require-manual-approval'
});

export const WORKFLOW_SECURITY_QUALITY_ATTRIBUTES = Object.freeze({
  CONFIDENTIALITY: 'confidentiality',
  INTEGRITY: 'integrity',
  AVAILABILITY: 'availability',
  AUTHENTICITY: 'authenticity',
  ACCOUNTABILITY: 'accountability',
  AUDITABILITY: 'auditability',
  TRACEABILITY: 'traceability',
  ISOLATION: 'isolation',
  RESILIENCE: 'resilience',
  EXPLAINABILITY: 'explainability',
  RECOVERABILITY: 'recoverability',
  MAINTAINABILITY: 'maintainability',
  PORTABILITY: 'portability',
  COMPLIANCE: 'compliance'
});

export const WORKFLOW_SECURITY_RULES = Object.freeze({
  PROTECTED_TRANSITION: 'every-transition-is-a-protected-state-change',
  AUTHENTICATION: 'authenticate-every-material-actor-and-workload',
  EFFECTIVE_AUTHORITY: 'evaluate-effective-authority-at-each-trust-boundary',
  DELEGATION: 'preserve-actor-principal-and-delegation',
  SCOPE_BINDING: 'bind-execution-to-tenant-and-property',
  SCOPE_ISOLATION: 'prevent-cross-tenant-and-unauthorized-cross-property-access',
  IMMUTABLE_DEFINITION: 'activated-definition-versions-immutable',
  LIFECYCLE_GOVERNANCE: 'govern-definition-lifecycle',
  SEPARATION_OF_DUTIES: 'risk-proportional-separation-of-duties',
  RUNTIME_TRANSITIONS: 'runtime-validates-all-state-mutations',
  DOMAIN_OWNERSHIP: 'preserve-domain-business-truth-and-authorization',
  AGENT_OWNERSHIP: 'preserve-agent-framework-identity-and-reasoning-ownership',
  CREDENTIAL_MEDIATION: 'least-privilege-secret-and-credential-mediation',
  INPUT_VALIDATION: 'validate-all-external-inputs-and-results',
  THREAT_PROTECTION: 'protect-replay-confused-deputy-injection-tampering-abuse',
  HUMAN_DECISION: 'explicit-authenticated-material-human-decisions',
  AGENT_BOUNDARY: 'bound-agent-autonomy-tools-data-resources-and-results',
  EVIDENCE: 'protected-attributable-tenant-safe-evidence-by-design',
  DOMAIN_EVIDENCE: 'workflow-evidence-distinct-from-domain-evidence',
  PRIVACY: 'govern-privacy-retention-deletion-disclosure-and-legal-hold',
  INCIDENTS: 'integrate-security-events-with-enterprise-incident-management',
  ASSURANCE: 'risk-based-control-testing-and-assurance',
  EXCEPTIONS: 'govern-exceptions-with-expiry-controls-and-remediation',
  REASSESSMENT: 'reassess-assurance-after-material-change',
  RECOVERY: 'authorized-reconciliation-not-blind-replay',
  CLAIMS: 'no-unsupported-exactly-once-compliance-or-assurance-claims',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const WORKFLOW_SECURITY_BOUNDARIES = Object.freeze({
  IDENTITY: 'replace-enterprise-identity-and-access-architecture',
  SECURITY: 'replace-security-architecture',
  GOVERNANCE: 'replace-governance-and-compliance-processes',
  BUSINESS_RULES: 'define-authoritative-business-rules',
  DOMAIN_RECORD: 'become-domain-system-of-record',
  AGENT_REASONING: 'transfer-agent-reasoning-ownership',
  CORRELATION_AUTHORITY: 'grant-authority-through-correlation-identifiers',
  DATABASE_ACCESS: 'permit-cross-service-database-access',
  EXACTLY_ONCE: 'guarantee-universal-exactly-once-effects',
  PROFESSIONAL_JUDGMENT: 'replace-qualified-professional-judgment'
});
