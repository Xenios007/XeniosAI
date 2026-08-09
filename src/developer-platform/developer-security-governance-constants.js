export const DEVELOPER_SECURITY_GOVERNANCE_ERROR_CODE = 'DEVELOPER_SECURITY_GOVERNANCE_INVALID';

export const DEVELOPER_SECURITY_GOVERNANCE_OBJECTIVES = Object.freeze({
  VERIFY_ACTORS_WORKLOADS: 'verify-every-actor-and-workload',
  LEAST_PRIVILEGE_CONTINUOUS_AUTHORIZATION: 'apply-least-privilege-and-continuous-authorization',
  BOUNDED_AI_DELEGATION: 'give-ai-agents-explicit-identities-and-bounded-delegation',
  PROTECT_ENGINEERING_ASSETS: 'protect-source-secrets-dependencies-artifacts-environments-and-evidence',
  EMBED_POLICY_CONTROLS: 'embed-policy-and-controls-into-normal-workflows',
  EARLY_ISSUE_DETECTION: 'detect-issues-early',
  EXPLAIN_CONTROL_DECISIONS: 'make-control-decisions-explainable',
  SEPARATION_OF_DUTIES: 'preserve-separation-of-duties',
  AUTOMATIC_EVIDENCE: 'produce-evidence-automatically',
  TENANT_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  INFORMATION_PROTECTION: 'protect-guest-tenant-employee-and-developer-information',
  TEMPORARY_EXCEPTIONS: 'govern-exceptions-as-temporary-risk-decisions',
  VERIFIED_REMEDIATION: 'connect-findings-to-remediation-and-verified-closure',
  SECURE_SELF_SERVICE: 'support-secure-self-service',
  EMERGENCY_RESPONSE_RECOVERY: 'preserve-emergency-response-and-recovery',
  VENDOR_NEUTRAL_REPLACEABLE: 'remain-vendor-neutral-and-replaceable'
});

export const DEVELOPER_SECURITY_GOVERNANCE_PRINCIPLES = Object.freeze({
  NO_ACTION_WITHOUT_IDENTITY: 'no-action-without-identity',
  AUTHORITY_IS_EXPLICIT: 'authority-is-explicit',
  LEAST_PRIVILEGE: 'least-privilege',
  ZERO_TRUST: 'zero-trust',
  SEPARATION_OF_DUTIES: 'separation-of-duties',
  SECURE_COMPLIANT_DEFAULTS: 'secure-and-compliant-defaults',
  EXPLAINABLE_CONTROLS: 'explainable-controls',
  EVIDENCE_BY_DESIGN: 'evidence-by-design',
  TENANT_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  HUMAN_ACCOUNTABILITY_FOR_AI: 'human-accountability-for-ai'
});

export const DEVELOPER_SECURITY_ACTORS = Object.freeze({
  HUMAN_DEVELOPERS: 'human-developers',
  SERVICE_OWNERS: 'service-owners',
  ARCHITECTS: 'architects',
  REVIEWERS: 'reviewers',
  APPROVERS: 'approvers',
  PLATFORM_OPERATORS: 'platform-operators',
  SECURITY_ENGINEERS: 'security-engineers',
  PRIVACY_CONTRIBUTORS: 'privacy-contributors',
  RISK_COMPLIANCE: 'risk-and-compliance-contributors',
  QUALITY_ENGINEERS: 'quality-engineers',
  TENANT_ADMINISTRATORS: 'tenant-administrators',
  PROPERTY_OPERATORS: 'property-operators',
  AI_IMPLEMENTATION_AGENTS: 'ai-implementation-agents',
  BUILD_TEST_WORKLOADS: 'build-and-test-workloads',
  DELIVERY_AUTOMATION: 'delivery-automation',
  PLATFORM_SERVICES: 'platform-services',
  EXTERNAL_SYSTEMS_SUPPLIERS: 'external-systems-and-suppliers'
});

export const DEVELOPER_IDENTITY_TYPES = Object.freeze({
  HUMAN: 'human-identity',
  SERVICE: 'service-identity',
  WORKLOAD: 'workload-identity',
  AUTOMATION: 'automation-identity',
  AI_AGENT: 'ai-agent-identity',
  EXTERNAL_SYSTEM: 'external-system-identity',
  EMERGENCY: 'emergency-identity'
});

export const AI_AGENT_IDENTITY_FIELDS = Object.freeze({
  AGENT_IDENTIFIER: 'agent-identifier',
  AGENT_TYPE_VERSION: 'agent-type-and-version',
  HUMAN_SPONSOR: 'human-sponsor',
  TASK_PURPOSE: 'task-purpose',
  PROJECT_REPOSITORY_SCOPE: 'project-and-repository-scope',
  SERVICE_COMPONENT_SCOPE: 'service-and-component-scope',
  TOOL_PERMISSIONS: 'tool-permissions',
  DATA_SECRET_RESTRICTIONS: 'data-and-secret-restrictions',
  NETWORK_RESTRICTIONS: 'network-restrictions',
  ENVIRONMENT_SCOPE: 'environment-scope',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  TIME_COST_BOUNDS: 'time-and-cost-bounds',
  REVIEW_REQUIREMENTS: 'review-requirements',
  STOP_CONDITIONS: 'stop-conditions',
  REVOCATION: 'revocation',
  ATTRIBUTION: 'attribution'
});

export const AUTHORIZATION_FACTORS = Object.freeze({
  IDENTITY: 'identity',
  ROLE_ATTRIBUTES: 'role-and-attributes',
  ACTION: 'action',
  RESOURCE: 'resource',
  PROJECT_SERVICE: 'project-and-service',
  ENVIRONMENT: 'environment',
  TENANT_PROPERTY: 'tenant-and-property',
  DATA_CLASSIFICATION: 'data-classification',
  RISK: 'risk',
  APPROVAL: 'approval',
  TIME: 'time',
  POSTURE: 'device-or-workload-posture',
  INCIDENT_RESTRICTION: 'active-incident-or-restriction'
});

export const AUTHORIZATION_MODELS = Object.freeze({
  RBAC: 'role-based-access',
  ABAC: 'attribute-based-access',
  REBAC: 'relationship-based-access',
  POLICY: 'policy-based-access',
  RESOURCE_OWNERSHIP: 'resource-ownership',
  DELEGATED_AUTHORITY: 'delegated-authority',
  JUST_IN_TIME: 'just-in-time-access'
});

export const ACCESS_LIFECYCLE_STATES = Object.freeze({
  REQUESTED: 'requested',
  VALIDATING: 'validating',
  APPROVED: 'approved',
  PROVISIONED: 'provisioned',
  ACTIVE: 'active',
  REVIEWED: 'reviewed',
  SUSPENDED: 'suspended',
  REVOKED: 'revoked',
  EXPIRED: 'expired'
});

export const AI_DELEGATION_CONTRACT_FIELDS = Object.freeze({
  REPOSITORY_FILE_BOUNDARIES: 'repository-and-file-boundaries',
  PERMITTED_TOOLS: 'permitted-tools',
  NETWORK_DESTINATIONS: 'network-destinations',
  SECRET_RESTRICTIONS: 'secret-restrictions',
  DATA_RESTRICTIONS: 'data-restrictions',
  WRITE_AUTHORITY: 'write-authority',
  COMMIT_PUSH_AUTHORITY: 'commit-and-push-authority',
  DELIVERY_AUTHORITY: 'delivery-authority',
  COMMUNICATION_AUTHORITY: 'communication-authority',
  TEST_EXPECTATIONS: 'test-expectations',
  HUMAN_DECISION_BOUNDARIES: 'human-decision-boundaries',
  STOP_REPORTING_BEHAVIOR: 'stop-and-reporting-behavior'
});

export const SEPARATION_OF_DUTIES_PAIRS = Object.freeze({
  AUTHOR_REVIEWER: 'author-and-reviewer',
  DEVELOPER_PRODUCTION_APPROVER: 'developer-and-production-approver',
  BUILD_PRODUCER_ARTIFACT_PROMOTER: 'build-producer-and-artifact-promoter',
  POLICY_AUTHOR_EXCEPTION_APPROVER: 'policy-author-and-exception-approver',
  FINDING_OWNER_CLOSURE_VERIFIER: 'finding-owner-and-closure-verifier',
  AI_AGENT_ACCOUNTABLE_APPROVER: 'ai-implementation-agent-and-accountable-approver',
  TENANT_CONFIGURATOR_CROSS_TENANT_AUTHORITY: 'tenant-configurator-and-cross-tenant-authority',
  EMERGENCY_ACTOR_RETROSPECTIVE_REVIEWER: 'emergency-actor-and-retrospective-reviewer'
});

export const SOURCE_SECURITY_CONTROLS = Object.freeze({
  REPOSITORY_IDENTITY_OWNERSHIP: 'repository-identity-and-ownership',
  LEAST_PRIVILEGE_ACCESS: 'least-privilege-access',
  CHANGE_ISOLATION: 'change-isolation',
  PROTECTED_INTEGRATION_PATHS: 'protected-integration-paths',
  REQUIRED_REVIEW: 'required-review',
  REQUIRED_CHECKS: 'required-checks',
  CONTRIBUTOR_ATTRIBUTION: 'contributor-attribution',
  SENSITIVE_DATA_PREVENTION: 'sensitive-data-prevention',
  INTEGRITY: 'integrity',
  RETENTION: 'retention',
  ARCHIVAL: 'archival',
  INCIDENT_RESPONSE: 'incident-response'
});

export const SECRET_PROHIBITED_LOCATIONS = Object.freeze({
  SOURCE: 'source',
  TEMPLATES: 'templates',
  BUILD_DEFINITIONS: 'build-definitions',
  ARTIFACTS: 'artifacts',
  LOGS: 'logs',
  PROMPTS: 'prompts',
  AI_CONTEXT: 'ai-context',
  DOCUMENTATION: 'documentation',
  GENERAL_METADATA: 'general-metadata',
  TEST_FIXTURES: 'test-fixtures'
});

export const SECRET_RESPONSE_STEPS = Object.freeze({
  CONTAIN_EXPOSURE: 'contain-exposure',
  VALIDATE_WITHOUT_DISCLOSURE: 'validate-without-unsafe-disclosure',
  ROTATE_OR_REVOKE: 'rotate-or-revoke-credential',
  ASSESS_SOURCE_ARTIFACTS: 'assess-affected-source-and-artifacts',
  EVALUATE_LOGS_CACHES_AI_CONTEXT: 'evaluate-logs-caches-and-ai-context',
  ASSESS_TENANT_PROPERTY_IMPACT: 'assess-tenant-and-property-impact',
  PRESERVE_EVIDENCE: 'preserve-evidence',
  REMEDIATE_ROOT_CAUSE: 'remediate-root-cause'
});

export const ENGINEERING_SECURITY_DOMAINS = Object.freeze({
  DEVELOPMENT_ENVIRONMENTS: 'development-environments',
  DEVELOPER_WORKSTATIONS: 'developer-workstations',
  BUILD_AND_TEST: 'build-and-test',
  SUPPLY_CHAIN: 'supply-chain',
  ARTIFACTS: 'artifacts',
  ENVIRONMENTS: 'environments',
  DELIVERY: 'delivery',
  DATA_PROTECTION: 'data-protection',
  PRIVACY: 'privacy',
  TENANT_SECURITY: 'tenant-security',
  PROPERTY_SECURITY: 'property-security',
  AI_ASSISTED_DEVELOPMENT: 'ai-assisted-development'
});

export const AI_TOOL_SECURITY_STEPS = Object.freeze({
  AUTHORIZED_PLAN: 'authorized-plan',
  PERMISSION_CHECK: 'permission-check',
  INPUT_SCOPE_VALIDATION: 'input-and-scope-validation',
  TOOL_EXECUTION: 'tool-execution',
  RESULT_VALIDATION: 'result-validation',
  EVIDENCE_REPORTING: 'evidence-and-reporting'
});

export const AI_SECURITY_STOP_CONDITIONS = Object.freeze({
  MISSING_AUTHORITY: 'authority-is-missing',
  AMBIGUOUS_OR_EXPANDING_SCOPE: 'scope-is-ambiguous-or-expands-materially',
  ARCHITECTURE_CONFLICT: 'architecture-conflicts',
  SECRET_OR_SENSITIVE_EXPOSURE: 'secret-or-sensitive-data-exposure-may-occur',
  UNCERTAIN_TENANT_PROPERTY_BOUNDARIES: 'tenant-or-property-boundaries-are-uncertain',
  UNAUTHORIZED_DESTRUCTIVE_ACTION: 'destructive-or-irreversible-action-lacks-authority',
  VALIDATION_CANNOT_RUN: 'required-validation-cannot-run',
  SECURITY_PRIVACY_LEGAL_SAFETY_COMPLIANCE: 'security-privacy-legal-safety-or-compliance-concern-appears',
  UNOWNED_CHANGES: 'existing-unowned-changes-would-be-overwritten',
  HUMAN_JUDGMENT_REQUIRED: 'human-judgment-is-required'
});

export const THREAT_MODEL_FIELDS = Object.freeze({
  ASSETS: 'assets',
  ACTORS: 'actors',
  TRUST_BOUNDARIES: 'trust-boundaries',
  ENTRY_POINTS: 'entry-points',
  DATA_FLOWS: 'data-flows',
  ABUSE_CASES: 'abuse-cases',
  TENANT_PROPERTY_BOUNDARIES: 'tenant-and-property-boundaries',
  AI_THREATS: 'ai-specific-threats',
  SUPPLY_CHAIN_THREATS: 'supply-chain-threats',
  OPERATIONAL_THREATS: 'operational-threats',
  CONTROLS: 'controls',
  RESIDUAL_RISK: 'residual-risk',
  VALIDATION: 'validation',
  OWNER: 'owner'
});

export const POLICY_CHARACTERISTICS = Object.freeze({
  OWNED: 'owned',
  VERSIONED: 'versioned',
  TRACEABLE_TO_AUTHORITY: 'traceable-to-authority',
  HUMAN_UNDERSTANDABLE: 'human-understandable',
  MACHINE_EVALUABLE: 'machine-evaluable-where-practical',
  TESTABLE: 'testable',
  EXPLAINABLE: 'explainable',
  EXCEPTION_AWARE: 'exception-aware',
  OBSERVABLE: 'observable',
  RETIRABLE: 'retirable'
});

export const POLICY_EVALUATION_FIELDS = Object.freeze({
  DECISION_IDENTITY: 'decision-identity',
  POLICY_VERSION: 'policy-and-version',
  INPUTS: 'inputs',
  EVIDENCE: 'evidence',
  SCOPE: 'scope',
  OUTCOME: 'outcome',
  REASON: 'reason',
  REMEDIATION: 'remediation',
  EXCEPTION_ELIGIBILITY: 'exception-eligibility',
  DECISION_TIME: 'decision-time',
  EXPIRATION: 'expiration'
});

export const POLICY_ENFORCEMENT_POINTS = Object.freeze({
  PROJECT_CREATION: 'project-creation',
  SERVICE_REGISTRATION: 'service-registration',
  SOURCE_CONTRIBUTION: 'source-contribution',
  REVIEW: 'review',
  BUILD: 'build',
  TEST: 'test',
  ARTIFACT_PUBLICATION: 'artifact-publication',
  ENVIRONMENT_CREATION: 'environment-creation',
  ACCESS_REQUEST: 'access-request',
  CONFIGURATION_CHANGE: 'configuration-change',
  RELEASE_READINESS: 'release-readiness',
  DELIVERY: 'delivery',
  TENANT_PROPERTY_ROLLOUT: 'tenant-or-property-rollout',
  DEPRECATION: 'deprecation',
  RETIREMENT: 'retirement'
});

export const RISK_CONTROL_EVIDENCE_FIELDS = Object.freeze({
  RISK_IDENTITY: 'risk-identity',
  CONTROL_IDENTITY: 'control-identity',
  REQUIREMENT_SOURCE: 'requirement-source',
  APPLICABLE_SCOPE: 'applicable-scope',
  OWNER: 'owner',
  IMPLEMENTATION: 'implementation',
  EVIDENCE: 'evidence',
  FREQUENCY: 'frequency',
  TEST: 'test',
  EFFECTIVENESS: 'effectiveness',
  EXCEPTIONS: 'exceptions',
  LIFECYCLE: 'lifecycle'
});

export const EVIDENCE_LINKS = Object.freeze({
  IDENTITY_DELEGATION: 'identity-and-delegation',
  INTENT_TASK: 'intent-and-task',
  ARCHITECTURE_ADRS: 'architecture-and-adrs',
  SOURCE_REVIEW: 'source-and-review',
  BUILD_PROVENANCE: 'build-and-provenance',
  DEPENDENCIES: 'dependencies',
  TESTS_EVALUATIONS: 'tests-and-evaluations',
  ARTIFACT_INTEGRITY: 'artifact-integrity',
  POLICY_DECISIONS: 'policy-decisions',
  ENVIRONMENTS: 'environments',
  CONFIGURATION_SECRET_REFERENCES: 'configuration-and-secret-reference-use',
  RELEASES_DELIVERIES: 'releases-and-deliveries',
  VERIFICATION: 'verification',
  FINDINGS_EXCEPTIONS: 'findings-and-exceptions',
  OPERATIONAL_OUTCOMES: 'operational-outcomes'
});

export const REVIEW_APPROVAL_TYPES = Object.freeze({
  TECHNICAL_REVIEW: 'technical-review',
  ARCHITECTURE_REVIEW: 'architecture-review',
  SECURITY_REVIEW: 'security-review',
  PRIVACY_REVIEW: 'privacy-review',
  RISK_ACCEPTANCE: 'risk-acceptance',
  POLICY_EXCEPTION: 'policy-exception',
  CHANGE_AUTHORIZATION: 'change-authorization',
  PRODUCTION_AUTHORIZATION: 'production-authorization',
  TENANT_PROPERTY_AUTHORITY: 'tenant-or-property-authority'
});

export const FINDING_FIELDS = Object.freeze({
  FINDING_IDENTITY: 'finding-identity',
  SOURCE: 'source',
  REQUIREMENT: 'requirement',
  AFFECTED_SCOPE: 'affected-project-service-artifact-environment-tenant-or-property',
  DESCRIPTION: 'description',
  SEVERITY: 'severity',
  CONFIDENCE: 'confidence',
  EVIDENCE: 'evidence',
  OWNER: 'owner',
  REQUIRED_ACTION: 'required-action',
  DUE_DATE: 'due-date',
  STATUS: 'status',
  EXCEPTION_RELATIONSHIP: 'exception-relationship',
  VERIFICATION: 'verification'
});

export const EXCEPTION_LIFECYCLE_STATES = Object.freeze({
  REQUESTED: 'requested',
  ASSESSING: 'assessing',
  APPROVED: 'approved',
  ACTIVE: 'active',
  MONITORING: 'monitoring',
  EXPIRING: 'expiring',
  EXTENDED: 'extended',
  REVOKED: 'revoked',
  REMEDIATED: 'remediated',
  CLOSED: 'closed',
  REJECTED: 'rejected'
});

export const REMEDIATION_STEPS = Object.freeze({
  CONTAIN_IMPACT: 'contain-immediate-impact',
  IDENTIFY_OWNER: 'identify-owner',
  ANALYZE_CAUSE: 'analyze-cause',
  DEFINE_CORRECTIVE_PREVENTIVE_ACTIONS: 'define-corrective-and-preventive-actions',
  USE_GOVERNED_CHANGE: 'use-governed-change',
  RETEST: 'retest',
  VERIFY_EFFECTIVENESS: 'verify-effectiveness',
  CLOSE_WITH_EVIDENCE: 'close-with-evidence',
  FEED_LEARNING: 'feed-learning-into-architecture-policy-controls-and-paved-paths'
});

export const ASSURANCE_AREAS = Object.freeze({
  CONTROL_DESIGN: 'control-design',
  CONTROL_IMPLEMENTATION: 'control-implementation',
  OPERATING_EFFECTIVENESS: 'operating-effectiveness',
  EVIDENCE_COMPLETENESS: 'evidence-completeness',
  EXCEPTION_VALIDITY: 'exception-validity',
  FINDING_REMEDIATION: 'finding-remediation',
  ACCESS_REVIEWS: 'access-reviews',
  SUPPLY_CHAIN_CONTROLS: 'supply-chain-controls',
  AI_AGENT_CONTROLS: 'ai-agent-controls',
  TENANT_ISOLATION: 'tenant-isolation',
  DELIVERY_CONTROLS: 'delivery-controls'
});

export const SECURITY_INCIDENT_TRIGGERS = Object.freeze({
  UNAUTHORIZED_ACCESS: 'unauthorized-access',
  SECRET_COMPROMISE: 'secret-compromise',
  SOURCE_COMPROMISE: 'source-compromise',
  MALICIOUS_DEPENDENCY: 'malicious-dependency',
  ARTIFACT_COMPROMISE: 'artifact-compromise',
  CROSS_TENANT_EXPOSURE: 'cross-tenant-exposure',
  DATA_LOSS: 'data-loss',
  UNSAFE_AI_BEHAVIOR: 'unsafe-ai-behavior',
  DELIVERY_COMPROMISE: 'delivery-compromise',
  AUDIT_FAILURE: 'audit-failure'
});

export const SUPPLIER_GOVERNANCE_FIELDS = Object.freeze({
  BUSINESS_PURPOSE: 'business-purpose',
  DATA_ACCESS: 'data-access',
  SOURCE_ACCESS: 'source-access',
  MODEL_OR_AI_USE: 'model-or-ai-use',
  TENANT_PROPERTY_EXPOSURE: 'tenant-and-property-exposure',
  IDENTITY_INTEGRATION: 'identity-integration',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  COMPLIANCE: 'compliance',
  AVAILABILITY: 'availability',
  CONTINUITY: 'continuity',
  DATA_PORTABILITY: 'data-portability',
  EXIT_STRATEGY: 'exit-strategy',
  COST: 'cost'
});

export const SECURITY_OBSERVABILITY_SIGNALS = Object.freeze({
  AUTHENTICATION_AUTHORIZATION: 'authentication-and-authorization',
  ACCESS_CHANGES: 'access-changes',
  DENIED_ACTIONS: 'denied-actions',
  SECRET_REFERENCE_USE: 'secret-reference-use',
  REPOSITORY_PROTECTION_CHANGES: 'repository-protection-changes',
  DEPENDENCY_ARTIFACT_FINDINGS: 'dependency-and-artifact-findings',
  POLICY_OUTCOMES: 'policy-outcomes',
  AI_AGENT_TOOL_ACTIONS: 'ai-agent-tool-actions',
  TENANT_PROPERTY_SCOPE: 'tenant-and-property-scope',
  EXCEPTION_ACTIVITY: 'exception-activity',
  REMEDIATION_STATUS: 'remediation-status',
  SECURITY_INCIDENTS: 'security-incidents'
});

export const SECURITY_GOVERNANCE_AREAS = Object.freeze({
  IDENTITY_STANDARDS: 'identity-standards',
  AUTHENTICATION_REQUIREMENTS: 'authentication-requirements',
  AUTHORIZATION_DELEGATION: 'authorization-and-delegation',
  SEPARATION_OF_DUTIES: 'separation-of-duties',
  REPOSITORY_PROTECTIONS: 'repository-protections',
  WORKSTATION_ENVIRONMENT_REQUIREMENTS: 'workstation-and-environment-requirements',
  SECRETS_STANDARDS: 'secrets-standards',
  SUPPLY_CHAIN_CONTROLS: 'supply-chain-controls',
  DATA_PRIVACY_RULES: 'data-and-privacy-rules',
  AI_DEVELOPMENT_CONTROLS: 'ai-development-controls',
  POLICY_CONTROL_STANDARDS: 'policy-and-control-standards',
  EVIDENCE_AUDIT: 'evidence-and-audit',
  FINDINGS_REMEDIATION: 'findings-and-remediation',
  EXCEPTIONS: 'exceptions',
  ASSURANCE: 'assurance',
  TENANT_PROPERTY_SAFEGUARDS: 'tenant-and-property-safeguards',
  SUPPLIER_GOVERNANCE: 'supplier-governance',
  MATURITY_IMPROVEMENT: 'maturity-and-improvement'
});

export const DEVELOPER_SECURITY_MATURITY_LEVELS = Object.freeze({
  REACTIVE: 'reactive',
  DOCUMENTED: 'documented',
  INTEGRATED: 'integrated',
  GOVERNED: 'governed',
  MEASURED: 'measured',
  ADAPTIVE: 'adaptive'
});

export const DEVELOPER_SECURITY_MEASURES = Object.freeze({
  TIME_TO_AUTHORIZED_ACCESS: 'time-to-authorized-access',
  EXCESS_ACCESS_FINDINGS: 'excess-access-findings',
  ACCESS_REVIEW_COMPLETION: 'access-review-completion',
  REVOCATION_TIME: 'revocation-time',
  STANDING_PRIVILEGED_ACCESS: 'standing-privileged-access',
  SECRET_EXPOSURES: 'secret-exposures',
  SECRET_ROTATION_SUCCESS: 'secret-rotation-success',
  REPOSITORY_PROTECTION_COMPLIANCE: 'repository-protection-compliance',
  SUPPLY_CHAIN_FINDINGS: 'dependency-and-supply-chain-findings',
  ARTIFACT_PROVENANCE_COMPLETENESS: 'artifact-provenance-completeness',
  POLICY_DECISION_RELIABILITY: 'policy-decision-reliability',
  EVIDENCE_COMPLETENESS: 'evidence-completeness',
  FINDINGS_BY_SEVERITY_AGE: 'findings-by-severity-and-age',
  REMEDIATION_TIME: 'remediation-time',
  REPEAT_FINDINGS: 'repeat-findings',
  EXCEPTION_COUNT_AGE: 'exception-count-and-age',
  EXPIRED_EXCEPTIONS: 'expired-exceptions',
  AI_STOP_CONDITION_QUALITY: 'ai-agent-stop-condition-quality',
  UNAUTHORIZED_AI_ACTIONS: 'unauthorized-ai-actions',
  TENANT_ISOLATION_FINDINGS: 'tenant-isolation-findings',
  PROPERTY_SCOPE_FINDINGS: 'property-scope-findings',
  EMERGENCY_ACTIONS: 'emergency-actions',
  ASSURANCE_OUTCOMES: 'assurance-outcomes'
});

export const DEVELOPER_SECURITY_ANTI_PATTERNS = Object.freeze({
  SHARED_IDENTITIES: 'shared-developer-or-automation-identities',
  AUTHORITY_FROM_CREDENTIALS_NETWORK: 'authority-inferred-from-credentials-or-network-location',
  STANDING_BROAD_PRODUCTION_ACCESS: 'standing-broad-production-access',
  AI_IMPERSONATES_HUMAN: 'ai-agents-impersonating-human-sponsors',
  AI_SELF_APPROVAL: 'ai-agents-approving-their-own-material-changes',
  SECRETS_IN_UNSAFE_LOCATIONS: 'secrets-in-source-prompts-logs-artifacts-or-documentation',
  UNTRUSTED_CODE_BROAD_AUTHORITY: 'untrusted-code-running-with-broad-platform-authority',
  LATE_SECURITY_REVIEW_ONLY: 'security-review-only-at-release-time',
  POLICY_AUTOMATION_WITHOUT_READABLE_POLICY: 'policy-automation-without-human-readable-policy',
  SCANNER_OUTPUT_FINAL_RISK: 'scanner-output-treated-as-final-risk',
  MISSING_CONTEXT_AS_PERMISSION: 'missing-context-interpreted-as-permission',
  CROSS_TENANT_CONVENIENCE_ACCESS: 'cross-tenant-development-access-for-convenience',
  UNCONTROLLED_PRODUCTION_DATA_IN_DEV: 'production-data-copied-into-development-without-control',
  AUTOMATED_SECURITY_OWNERSHIP: 'automated-discovery-assigning-security-or-data-ownership',
  INDEFINITE_EXCEPTIONS: 'exceptions-without-expiration-or-remediation',
  FINDINGS_CLOSED_WITHOUT_EVIDENCE: 'findings-closed-without-effectiveness-evidence',
  EMERGENCY_ACCESS_ROUTINE: 'emergency-access-becoming-routine-access',
  UNRESTRICTED_THIRD_PARTY_AI: 'third-party-ai-tools-receiving-unrestricted-source',
  DEVELOPER_SURVEILLANCE: 'developer-telemetry-used-as-surveillance',
  AUDIT_LOG_SECRETS: 'audit-logs-containing-secrets',
  RECONSTRUCTED_EVIDENCE: 'compliance-evidence-reconstructed-after-the-fact'
});

export const DEVELOPER_SECURITY_ARCHITECTURAL_RULES = Object.freeze({
  VERIFY_ALL_IDENTITIES: 'verify-every-human-workload-automation-service-and-ai-agent-identity',
  EXPLICIT_CONTEXTUAL_AUTHORITY: 'make-authority-explicit-and-contextual',
  LEAST_PRIVILEGE_ZERO_TRUST_SOD: 'apply-least-privilege-zero-trust-and-separation-of-duties',
  BOUNDED_AI_DELEGATION: 'give-ai-agents-bounded-delegation-stop-conditions-attribution-and-revocation',
  PROTECT_ENGINEERING_LIFECYCLE: 'protect-source-repositories-development-environments-builds-dependencies-artifacts-environments-and-delivery',
  PREVENT_SECRET_ENTRY: 'prevent-secrets-from-entering-source-prompts-logs-artifacts-documentation-or-general-metadata',
  WORKLOAD_IDENTITY_SECRET_REFERENCES: 'use-workload-identity-and-secret-references-where-practical',
  SECURITY_PRIVACY_IN_PAVED_PATHS: 'embed-security-and-privacy-in-paved-paths',
  PROTECT_TENANT_PROPERTY_ISOLATION: 'protect-tenant-and-property-isolation-throughout-developer-workflows',
  MINIMIZE_SENSITIVE_DATA: 'minimize-sensitive-data-in-development-and-ai-context',
  APPROVED_POLICY_AT_BOUNDARIES: 'resolve-and-evaluate-approved-policy-at-lifecycle-boundaries',
  POLICY_AUTOMATION_NOT_AUTHORITY: 'keep-policy-automation-distinct-from-policy-authority',
  INTEGRITY_PROTECTED_EVIDENCE: 'generate-integrity-protected-evidence-during-execution',
  INDEPENDENT_REVIEW: 'preserve-independent-review-where-risk-requires-it',
  TEMPORARY_SCOPED_EXCEPTIONS: 'treat-exceptions-as-temporary-scoped-evidenced-risk-decisions',
  OWNED_FINDINGS: 'keep-findings-owned-until-verified-remediation-or-authorized-disposition',
  INCIDENTS_EMERGENCY_CONTINUITY: 'integrate-incidents-emergency-access-recovery-and-continuity',
  GOVERN_EXTERNAL_TOOLS_AI: 'govern-external-tools-and-third-party-ai',
  PROTECT_DEVELOPER_PRIVACY: 'protect-developer-privacy',
  MEASURE_WITHOUT_SUPPRESSION_FRICTION: 'measure-security-outcomes-without-rewarding-suppression-or-excessive-friction',
  VENDOR_NEUTRAL_TECH_INDEPENDENT: 'preserve-vendor-neutrality-and-technology-independence'
});

export const FUTURE_DEVELOPER_SECURITY_CAPABILITIES = Object.freeze({
  ADAPTIVE_AUTHORIZATION: 'continuous-adaptive-authorization',
  SECRETLESS_WORKLOAD_IDENTITY: 'broad-secretless-workload-identity',
  ARCHITECTURE_AWARE_POLICY: 'architecture-aware-policy-resolution',
  THREAT_MODEL_ASSISTANCE: 'automated-threat-model-assistance',
  SEMANTIC_CONTROL_MAPPING: 'semantic-control-mapping',
  PREDICTIVE_SUPPLY_CHAIN_RISK: 'predictive-supply-chain-risk',
  PRIVACY_PRESERVING_ANALYTICS: 'privacy-preserving-development-analytics',
  CONTINUOUS_TENANT_ISOLATION: 'continuous-tenant-isolation-verification',
  AI_BEHAVIOR_ATTESTATION: 'ai-agent-behavior-attestation',
  MULTI_AGENT_SOD: 'multi-agent-separation-of-duties-enforcement',
  AUTOMATED_EVIDENCE_GRAPHS: 'automated-evidence-graphs',
  CONTINUOUS_ASSURANCE: 'continuous-assurance',
  PREDICTIVE_EXCEPTION_REMEDIATION_RISK: 'predictive-exception-and-remediation-risk',
  CONTROL_DIGITAL_TWINS: 'security-control-digital-twins',
  GOVERNED_AUTONOMOUS_REMEDIATION: 'governed-autonomous-low-risk-remediation'
});
