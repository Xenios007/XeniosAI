export const GOVERNANCE_COMPLIANCE_ERROR_CODES = Object.freeze({
  GOVERNANCE_COMPLIANCE_OVERVIEW_INVALID: 'GOVERNANCE_COMPLIANCE_OVERVIEW_INVALID',
  GOVERNANCE_OPERATING_MODEL_INVALID: 'GOVERNANCE_OPERATING_MODEL_INVALID'
});

export const GOVERNANCE_COMPLIANCE_OVERVIEW_OBJECTIVES = Object.freeze({
  ACCOUNTABLE_ENTERPRISE_DIRECTION: 'accountable-enterprise-direction',
  EXPLICIT_AUTHORITY: 'explicit-authority',
  INTEGRATED_RISK_MANAGEMENT: 'integrated-risk-management',
  TRACEABLE_OBLIGATIONS: 'traceable-obligations',
  CONSISTENT_POLICIES: 'consistent-policies',
  REUSABLE_CONTROLS: 'reusable-controls',
  EVIDENCE_BY_DESIGN: 'evidence-by-design',
  PROPORTIONATE_ASSURANCE: 'proportionate-assurance',
  CONTINUOUS_AUDIT_READINESS: 'continuous-audit-readiness',
  RESPONSIBLE_AI: 'responsible-ai',
  PRIVACY_AND_DATA_ACCOUNTABILITY: 'privacy-and-data-accountability',
  SECURE_AND_RESILIENT_OPERATIONS: 'secure-and-resilient-operations',
  GOVERNED_TENANT_AND_PROPERTY_AUTONOMY: 'governed-tenant-and-property-autonomy',
  THIRD_PARTY_ACCOUNTABILITY: 'third-party-accountability',
  CONTROLLED_EXCEPTIONS: 'controlled-exceptions',
  TIMELY_REMEDIATION: 'timely-remediation',
  JURISDICTION_AWARE_ADAPTABILITY: 'jurisdiction-aware-adaptability',
  SUSTAINABLE_ENTERPRISE_TRUST: 'sustainable-enterprise-trust'
});

export const GOVERNANCE_COMPLIANCE_LANDSCAPE_STAGES = Object.freeze({
  ENTERPRISE_PURPOSE_VALUES_AND_STRATEGY: 'Enterprise Purpose, Values, and Strategy',
  OBLIGATIONS: 'Legal, Regulatory, Contractual, Ethical, and Internal Obligations',
  RISK_APPETITE_POLICIES_STANDARDS_AND_DECISION_RIGHTS: 'Risk Appetite, Policies, Standards, and Decision Rights',
  CONTROL_OBJECTIVES_AND_ACCOUNTABLE_OWNERSHIP: 'Control Objectives and Accountable Ownership',
  ENTERPRISE_EXECUTION_SCOPES: 'Business Capabilities, Services, Data, AI, Workflows, Integrations, and Operations',
  EVIDENCE_MEASUREMENT_MONITORING_AND_RECORDS: 'Evidence, Measurement, Monitoring, and Records',
  ASSURANCE_AUDIT_ATTESTATION_AND_REVIEW: 'Assurance, Audit, Attestation, and Review',
  FINDINGS_EXCEPTIONS_REMEDIATION_AND_IMPROVEMENT: 'Findings, Exceptions, Remediation, and Improvement'
});

export const GOVERNANCE_DOMAINS = Object.freeze({
  ENTERPRISE_GOVERNANCE: 'enterprise-governance',
  ARCHITECTURE_GOVERNANCE: 'architecture-governance',
  POLICY_GOVERNANCE: 'policy-governance',
  RISK_GOVERNANCE: 'risk-governance',
  COMPLIANCE_GOVERNANCE: 'compliance-governance',
  PRIVACY_AND_DATA_GOVERNANCE: 'privacy-and-data-governance',
  AI_AND_ETHICAL_GOVERNANCE: 'ai-and-ethical-governance',
  SECURITY_GOVERNANCE: 'security-governance',
  OPERATIONAL_GOVERNANCE: 'operational-governance',
  THIRD_PARTY_GOVERNANCE: 'third-party-governance',
  TENANT_AND_PROPERTY_GOVERNANCE: 'tenant-and-property-governance'
});

export const GOVERNING_ACTORS = Object.freeze({
  ENTERPRISE_GOVERNING_AUTHORITY: 'enterprise-governing-authority',
  EXECUTIVE_OR_DELEGATED_DECISION_AUTHORITY: 'executive-or-delegated-decision-authority',
  ENTERPRISE_ARCHITECTURE: 'enterprise-architecture',
  BUSINESS_CAPABILITY_OWNERS: 'business-capability-owners',
  POLICY_OWNERS: 'policy-owners',
  OBLIGATION_OWNERS: 'obligation-owners',
  RISK_OWNERS: 'risk-owners',
  CONTROL_OWNERS: 'control-owners',
  CONTROL_OPERATORS: 'control-operators',
  DATA_OWNERS_AND_STEWARDS: 'data-owners-and-stewards',
  PRIVACY_AUTHORITY: 'privacy-authority',
  SECURITY_AUTHORITY: 'security-authority',
  AI_GOVERNANCE_AUTHORITY: 'ai-governance-authority',
  SERVICE_OWNERS: 'service-owners',
  OPERATIONS_OWNERS: 'operations-owners',
  TENANT_ADMINISTRATORS: 'tenant-administrators',
  PROPERTY_OPERATORS: 'property-operators',
  ASSURANCE_PROVIDERS: 'assurance-providers',
  INTERNAL_AUDITORS: 'internal-auditors',
  EXTERNAL_AUDITORS: 'external-auditors',
  LEGAL_AND_REGULATORY_ADVISERS: 'legal-and-regulatory-advisers',
  SUPPLIER_OWNERS: 'supplier-owners',
  ISSUE_OWNERS: 'issue-owners',
  EXCEPTION_AUTHORITIES: 'exception-authorities',
  REMEDIATION_OWNERS: 'remediation-owners'
});

export const GOVERNANCE_OWNED_OBJECTS = Object.freeze({
  PRINCIPLES: 'principles',
  POLICIES: 'policies',
  STANDARDS: 'standards',
  OBLIGATIONS: 'obligations',
  RISKS: 'risks',
  CONTROLS: 'controls',
  EVIDENCE: 'evidence',
  SERVICES: 'services',
  DATA: 'data',
  AI_CAPABILITIES: 'ai-capabilities',
  SUPPLIERS: 'suppliers',
  EXCEPTIONS: 'exceptions',
  FINDINGS: 'findings',
  REMEDIATION: 'remediation',
  REPORTS: 'reports',
  ATTESTATIONS: 'attestations',
  ARCHITECTURE_DECISIONS: 'architecture-decisions'
});

export const GOVERNANCE_ARTIFACT_TYPES = Object.freeze({
  PRINCIPLE: 'principle',
  POLICY: 'policy',
  STANDARD: 'standard',
  GUIDELINE: 'guideline',
  PROCEDURE: 'procedure',
  OBLIGATION: 'obligation',
  RISK: 'risk',
  CONTROL_OBJECTIVE: 'control-objective',
  CONTROL: 'control',
  EVIDENCE: 'evidence',
  ASSURANCE: 'assurance',
  FINDING: 'finding',
  EXCEPTION: 'exception',
  REMEDIATION: 'remediation'
});

export const OBLIGATION_SOURCES = Object.freeze({
  LAWS: 'laws',
  REGULATIONS: 'regulations',
  REGULATORY_GUIDANCE: 'regulatory-guidance',
  LICENSES: 'licenses',
  CONTRACTS: 'contracts',
  TENANT_AGREEMENTS: 'tenant-agreements',
  SUPPLIER_AGREEMENTS: 'supplier-agreements',
  PAYMENT_REQUIREMENTS: 'payment-requirements',
  SECURITY_COMMITMENTS: 'security-commitments',
  PRIVACY_COMMITMENTS: 'privacy-commitments',
  CERTIFICATION_CRITERIA: 'certification-criteria',
  INDUSTRY_STANDARDS: 'industry-standards',
  INTERNAL_POLICY: 'internal-policy',
  ETHICAL_COMMITMENTS: 'ethical-commitments',
  ARCHITECTURE_PRINCIPLES: 'architecture-principles',
  SERVICE_COMMITMENTS: 'service-commitments'
});

export const OBLIGATION_INTERPRETATION_FIELDS = Object.freeze({
  AUTHORITATIVE_SOURCE: 'authoritative-source',
  APPLICABLE_ENTITY: 'applicable-entity',
  JURISDICTION: 'jurisdiction',
  SCOPE: 'scope',
  EFFECTIVE_DATE: 'effective-date',
  REQUIRED_OUTCOME: 'required-outcome',
  PROHIBITIONS: 'prohibitions',
  CONDITIONS: 'conditions',
  EVIDENCE: 'evidence',
  REPORTING: 'reporting',
  RETENTION: 'retention',
  EXCEPTIONS_IF_LEGALLY_PERMITTED: 'exceptions-if-legally-permitted',
  DEPENDENCIES: 'dependencies',
  REVIEW_TRIGGER: 'review-trigger'
});

export const APPLICABILITY_DIMENSIONS = Object.freeze({
  LEGAL_ENTITY: 'legal-entity',
  JURISDICTION: 'jurisdiction',
  TENANT: 'tenant',
  ORGANIZATION: 'organization',
  PROPERTY: 'property',
  GUEST_OR_USER_CATEGORY: 'guest-or-user-category',
  BUSINESS_CAPABILITY: 'business-capability',
  SERVICE: 'service',
  DATA_CATEGORY: 'data-category',
  AI_USE_CASE: 'ai-use-case',
  WORKFLOW: 'workflow',
  INTEGRATION: 'integration',
  PROVIDER: 'provider',
  ENVIRONMENT: 'environment',
  TRANSACTION_TYPE: 'transaction-type',
  TIME_PERIOD: 'time-period'
});

export const GOVERNANCE_TRACEABILITY_STAGES = Object.freeze({
  ENTERPRISE_OBJECTIVE: 'Enterprise Objective',
  OBLIGATION_OR_RISK: 'Obligation or Risk',
  POLICY_REQUIREMENT: 'Policy Requirement',
  CONTROL_OBJECTIVE: 'Control Objective',
  IMPLEMENTED_CONTROL: 'Implemented Control',
  OPERATIONAL_EVIDENCE: 'Operational Evidence',
  ASSURANCE_RESULT: 'Assurance Result',
  COMPLIANCE_POSTURE_OR_FINDING: 'Compliance Posture or Finding'
});

export const GOVERNANCE_CONTROL_TYPES = Object.freeze({
  PREVENTIVE: 'preventive',
  DETECTIVE: 'detective',
  CORRECTIVE: 'corrective',
  DIRECTIVE: 'directive',
  DETERRENT: 'deterrent',
  COMPENSATING: 'compensating',
  RECOVERY_ORIENTED: 'recovery-oriented'
});

export const GOVERNANCE_EVIDENCE_QUALITIES = Object.freeze({
  AUTHENTICITY: 'authenticity',
  INTEGRITY: 'integrity',
  COMPLETENESS: 'completeness',
  ACCURACY: 'accuracy',
  TIMELINESS: 'timeliness',
  RELEVANCE: 'relevance',
  TRACEABILITY: 'traceability',
  AVAILABILITY: 'availability',
  CONFIDENTIALITY: 'confidentiality',
  RETENTION: 'retention',
  REPRODUCIBILITY: 'reproducibility'
});

export const GOVERNANCE_LIFECYCLE_STAGES = Object.freeze({
  ESTABLISH_PURPOSE_AND_ACCOUNTABILITY: 'Establish Purpose and Accountability',
  IDENTIFY_OBLIGATIONS_AND_RISKS: 'Identify Obligations and Risks',
  DEFINE_POLICY_AND_DECISION_RIGHTS: 'Define Policy and Decision Rights',
  DESIGN_CONTROL_OBJECTIVES: 'Design Control Objectives',
  IMPLEMENT_AND_OPERATE_CONTROLS: 'Implement and Operate Controls',
  COLLECT_EVIDENCE: 'Collect Evidence',
  ASSESS_AND_ASSURE: 'Assess and Assure',
  REPORT_POSTURE: 'Report Posture',
  RESOLVE_FINDINGS_AND_EXCEPTIONS: 'Resolve Findings and Exceptions',
  IMPROVE_GOVERNANCE_AND_ARCHITECTURE: 'Improve Governance and Architecture'
});

export const GOVERNANCE_DECISION_TYPES = Object.freeze({
  POLICY_APPROVAL: 'policy-approval',
  RISK_TREATMENT: 'risk-treatment',
  RISK_ACCEPTANCE: 'risk-acceptance',
  CONTROL_APPROVAL: 'control-approval',
  ARCHITECTURE_EXCEPTION: 'architecture-exception',
  AI_USE_AUTHORIZATION: 'ai-use-authorization',
  DATA_USE_AUTHORIZATION: 'data-use-authorization',
  SUPPLIER_ACCEPTANCE: 'supplier-acceptance',
  TENANT_EXCEPTION: 'tenant-exception',
  PROPERTY_DELEGATION: 'property-delegation',
  FINDING_CLOSURE: 'finding-closure',
  REMEDIATION_EXTENSION: 'remediation-extension',
  ATTESTATION: 'attestation',
  AUDIT_RESPONSE: 'audit-response'
});

export const AI_GOVERNANCE_LIFECYCLE_STAGES = Object.freeze({
  PURPOSE: 'Purpose',
  RISK_CLASSIFICATION: 'Risk Classification',
  ASSESSMENT: 'Data, Model, Agent, Tool, and Provider Assessment',
  AUTHORIZATION_AND_GUARDRAILS: 'Authorization and Guardrails',
  EVALUATION_AND_READINESS: 'Evaluation and Readiness',
  DEPLOYMENT_AND_OPERATION: 'Deployment and Operation',
  MONITORING_AND_EVIDENCE: 'Monitoring and Evidence',
  INCIDENT_CHANGE_AND_REVIEW: 'Incident, Change, and Review',
  RESTRICTION_REPLACEMENT_OR_RETIREMENT: 'Restriction, Replacement, or Retirement'
});

export const HUMAN_OVERSIGHT_REQUIREMENTS = Object.freeze({
  SUFFICIENT_INFORMATION: 'sufficient-information',
  APPROPRIATE_EXPERTISE: 'appropriate-expertise',
  TIME_TO_DECIDE: 'time-to-decide',
  AUTHORITY_TO_INTERVENE: 'authority-to-intervene',
  ABILITY_TO_STOP_OR_REVERSE: 'ability-to-stop-or-reverse',
  VISIBILITY_INTO_UNCERTAINTY: 'visibility-into-uncertainty',
  ACCESS_TO_EVIDENCE: 'access-to-evidence',
  FREEDOM_FROM_AUTOMATION_BIAS: 'freedom-from-automation-bias',
  CLEAR_ACCOUNTABILITY: 'clear-accountability'
});

export const COMPLIANCE_POSTURE_STATES = Object.freeze({
  IN_SCOPE: 'in-scope',
  NOT_APPLICABLE: 'not-applicable',
  IMPLEMENTED: 'implemented',
  OPERATING: 'operating',
  EFFECTIVE: 'effective',
  PARTIALLY_EFFECTIVE: 'partially-effective',
  FINDING_OPEN: 'finding-open',
  EXCEPTION_ACTIVE: 'exception-active',
  REMEDIATION_UNDERWAY: 'remediation-underway',
  EVIDENCE_MISSING: 'evidence-missing',
  ASSESSMENT_OVERDUE: 'assessment-overdue',
  INTERPRETATION_PENDING: 'interpretation-pending',
  OBLIGATION_CHANGE_PENDING: 'obligation-change-pending'
});

export const THIRD_PARTY_GOVERNANCE_LIFECYCLE_STAGES = Object.freeze({
  NEED_AND_CLASSIFICATION: 'Need and Classification',
  DUE_DILIGENCE: 'Due Diligence',
  CONTRACT_AND_CONTROL_REQUIREMENTS: 'Contract and Control Requirements',
  ONBOARDING_AND_ACCESS: 'Onboarding and Access',
  OPERATION_MONITORING_AND_EVIDENCE: 'Operation, Monitoring, and Evidence',
  CHANGE_INCIDENT_AND_ASSURANCE: 'Change, Incident, and Assurance',
  RENEWAL_RESTRICTION_OR_EXIT: 'Renewal, Restriction, or Exit'
});

export const GOVERNANCE_REPORTING_AUDIENCES = Object.freeze({
  ENTERPRISE_LEADERS: 'enterprise-leaders',
  GOVERNING_AUTHORITIES: 'governing-authorities',
  BUSINESS_OWNERS: 'business-owners',
  RISK_OWNERS: 'risk-owners',
  POLICY_OWNERS: 'policy-owners',
  SECURITY_AND_PRIVACY: 'security-and-privacy',
  AI_GOVERNANCE: 'ai-governance',
  OPERATIONS: 'operations',
  TENANTS: 'tenants',
  PROPERTY_OPERATORS: 'property-operators',
  CUSTOMERS: 'customers',
  AUDITORS: 'auditors',
  REGULATORS_WHERE_APPLICABLE: 'regulators-where-applicable'
});

export const GOVERNANCE_ARCHITECTURE_RELATIONSHIP_STAGES = Object.freeze({
  ENTERPRISE_ARCHITECTURE: 'Enterprise Architecture',
  DOMAIN_ARCHITECTURES: 'Services, Data, AI, Workflows, Integrations, Deployment, and Security',
  OBSERVABILITY_AND_ENTERPRISE_OPERATIONS: 'Observability and Enterprise Operations',
  GOVERNANCE_RISK_POLICY_CONTROLS_AND_COMPLIANCE: 'Governance, Risk, Policy, Controls, and Compliance',
  EVIDENCE_ASSURANCE_AUDIT_AND_IMPROVEMENT: 'Evidence, Assurance, Audit, and Improvement'
});

export const GOVERNANCE_ARCHITECTURE_BOUNDARIES = Object.freeze({
  LEGAL_ADVICE: 'legal-advice',
  DEFINITIVE_APPLICABILITY_OF_SPECIFIC_LAW: 'definitive-applicability-of-specific-law',
  COMPLIANCE_OR_CERTIFICATION_GUARANTEE: 'compliance-or-certification-guarantee',
  QUALIFIED_PROFESSIONAL_JUDGMENT: 'qualified-professional-judgment',
  SECURITY_ARCHITECTURE: 'security-architecture',
  OPERATIONAL_PROCEDURES: 'operational-procedures',
  AI_AGENT_FRAMEWORK: 'ai-agent-framework',
  DATA_OR_KNOWLEDGE_ARCHITECTURE: 'data-or-knowledge-architecture',
  MULTI_TENANCY_ARCHITECTURE: 'multi-tenancy-architecture',
  GOVERNANCE_PRODUCTS: 'governance-products'
});

export const GOVERNANCE_COMPLIANCE_QUALITY_ATTRIBUTES = Object.freeze({
  ACCOUNTABILITY: 'accountability',
  TRANSPARENCY: 'transparency',
  TRACEABILITY: 'traceability',
  AUDITABILITY: 'auditability',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  EXPLAINABILITY: 'explainability',
  CONSISTENCY: 'consistency',
  ADAPTABILITY: 'adaptability',
  RELIABILITY: 'reliability',
  INTEGRITY: 'integrity',
  SCALABILITY: 'scalability',
  TENANT_ISOLATION: 'tenant-isolation',
  ENTERPRISE_TRUST: 'enterprise-trust'
});

export const GOVERNANCE_COMPLIANCE_ARCHITECTURAL_RULES = Object.freeze({
  BEGIN_WITH_ENTERPRISE_OBJECTIVES_AND_OBLIGATIONS: 'begin-with-enterprise-objectives-and-obligations',
  ASSIGN_ACCOUNTABLE_OWNERSHIP: 'assign-accountable-ownership',
  DEFINE_AUTHORITY_EXPLICITLY: 'define-authority-explicitly',
  DISTINGUISH_AND_INTEGRATE_GRC: 'distinguish-and-integrate-governance-risk-and-compliance',
  MAINTAIN_TRACEABILITY: 'maintain-obligation-risk-policy-control-evidence-assurance-traceability',
  APPLY_PROPORTIONATE_CONTROLS: 'apply-controls-proportionate-to-risk',
  PRESERVE_ASSURANCE_INDEPENDENCE: 'preserve-assurance-independence',
  DESIGN_EVIDENCE_INTO_ARCHITECTURE_AND_OPERATIONS: 'design-evidence-into-architecture-and-operations',
  GOVERN_AI_LIFECYCLE: 'govern-ai-throughout-its-lifecycle',
  PROTECT_CORE_BOUNDARIES: 'protect-privacy-data-security-tenants-and-properties',
  GOVERN_SUPPLIERS_AND_PROVIDERS: 'govern-suppliers-and-external-providers',
  TREAT_EXCEPTIONS_AS_TEMPORARY: 'treat-exceptions-as-temporary-and-expiring',
  VERIFY_REMEDIATION_BEFORE_CLOSURE: 'verify-remediation-before-closure',
  SUPPORT_CONTEXTUAL_APPLICABILITY: 'support-jurisdiction-and-tenant-aware-applicability',
  RESPOND_CONTINUOUSLY_TO_CHANGE: 'respond-continuously-to-change',
  PRESERVE_DOMAIN_BOUNDARIES: 'preserve-architectural-domain-boundaries',
  REMAIN_VENDOR_AND_TECHNOLOGY_NEUTRAL: 'remain-vendor-neutral-and-technology-independent'
});

export const FUTURE_GOVERNANCE_COMPLIANCE_CAPABILITIES = Object.freeze({
  MACHINE_READABLE_OBLIGATIONS: 'machine-readable-obligations',
  POLICY_AS_EXECUTABLE_CONSTRAINT: 'policy-as-executable-constraint',
  CONTINUOUS_CONTROL_VERIFICATION: 'continuous-control-verification',
  AI_ASSISTED_OBLIGATION_MAPPING: 'ai-assisted-obligation-mapping',
  PREDICTIVE_COMPLIANCE_RISK: 'predictive-compliance-risk',
  AUTOMATED_EVIDENCE_CORRELATION: 'automated-evidence-correlation',
  DYNAMIC_APPLICABILITY: 'dynamic-applicability',
  REAL_TIME_GOVERNANCE_POSTURE: 'real-time-governance-posture',
  SEMANTIC_CONTROL_FRAMEWORKS: 'semantic-control-frameworks',
  FEDERATED_TENANT_GOVERNANCE: 'federated-tenant-governance',
  CONTINUOUS_ASSURANCE: 'continuous-assurance',
  DIGITAL_GOVERNANCE_TWINS: 'digital-governance-twins',
  GOVERNED_AUTONOMOUS_COMPLIANCE_OPERATIONS: 'governed-autonomous-compliance-operations'
});

export const GOVERNANCE_OPERATING_MODEL_OBJECTIVES = Object.freeze({
  CLEAR_ENTERPRISE_ACCOUNTABILITY: 'clear-enterprise-accountability',
  EXPLICIT_DECISION_AUTHORITY: 'explicit-decision-authority',
  FEDERATED_GOVERNANCE: 'federated-governance',
  CONSISTENT_ENTERPRISE_GUARDRAILS: 'consistent-enterprise-guardrails',
  APPROPRIATE_LOCAL_AUTONOMY: 'appropriate-local-autonomy',
  SEPARATION_OF_DUTIES: 'separation-of-duties',
  INDEPENDENT_CHALLENGE_AND_ASSURANCE: 'independent-challenge-and-assurance',
  TIMELY_ESCALATION: 'timely-escalation',
  GOVERNED_EMERGENCY_DECISIONS: 'governed-emergency-decisions',
  TENANT_AND_PROPERTY_ISOLATION: 'tenant-and-property-isolation',
  SUPPLIER_ACCOUNTABILITY: 'supplier-accountability',
  EFFICIENT_GOVERNANCE_FORUMS: 'efficient-governance-forums',
  TRACEABLE_DECISIONS: 'traceable-decisions',
  SCALABLE_GOVERNANCE: 'scalable-governance-across-thousands-of-properties',
  CONTINUOUS_GOVERNANCE_IMPROVEMENT: 'continuous-governance-improvement'
});

export const GOVERNANCE_OPERATING_MODEL_PRINCIPLES = Object.freeze({
  AUTHORITY_FOLLOWS_ACCOUNTABILITY: 'authority-follows-accountability',
  FEDERATE_WITHIN_GUARDRAILS: 'federate-within-guardrails',
  ONE_ACCOUNTABLE_OWNER: 'one-accountable-owner',
  SEPARATE_DECISION_EXECUTION_AND_ASSURANCE: 'separate-decision-execution-and-assurance',
  ESCALATE_BY_RISK_AND_AUTHORITY: 'escalate-by-risk-and-authority',
  EVIDENCE_BEFORE_CONCLUSION: 'evidence-before-conclusion',
  AVOID_GOVERNANCE_BY_COMMITTEE: 'avoid-governance-by-committee',
  EMERGENCY_AUTHORITY_IS_CONTROLLED: 'emergency-authority-is-controlled'
});

export const GOVERNANCE_FEDERATION_SCOPES = Object.freeze({
  ENTERPRISE_GOVERNANCE: 'enterprise-governance',
  ARCHITECTURE_GOVERNANCE: 'architecture-governance',
  RISK_AND_COMPLIANCE_GOVERNANCE: 'risk-and-compliance-governance',
  SECURITY_PRIVACY_AND_AI_GOVERNANCE: 'security-privacy-and-ai-governance',
  PLATFORM_AND_OPERATIONS_GOVERNANCE: 'platform-and-operations-governance',
  BUSINESS_AND_DOMAIN_GOVERNANCE: 'business-and-domain-governance',
  TENANT_GOVERNANCE: 'tenant-governance',
  PROPERTY_GOVERNANCE: 'property-governance',
  SUPPLIER_GOVERNANCE: 'supplier-governance'
});

export const GOVERNANCE_LEVELS = Object.freeze({
  ENTERPRISE: 'enterprise',
  PLATFORM: 'platform',
  BUSINESS_OR_DOMAIN: 'business-or-domain',
  TENANT: 'tenant',
  PROPERTY: 'property',
  SERVICE: 'service'
});

export const GOVERNANCE_AUTHORITIES = Object.freeze({
  ENTERPRISE_GOVERNING_AUTHORITY: 'enterprise-governing-authority',
  EXECUTIVE_AUTHORITY: 'executive-authority',
  ENTERPRISE_ARCHITECTURE_AUTHORITY: 'enterprise-architecture-authority',
  RISK_AUTHORITY: 'risk-authority',
  COMPLIANCE_AUTHORITY: 'compliance-authority',
  SECURITY_AUTHORITY: 'security-authority',
  PRIVACY_AUTHORITY: 'privacy-authority',
  AI_GOVERNANCE_AUTHORITY: 'ai-governance-authority',
  DATA_GOVERNANCE_AUTHORITY: 'data-governance-authority',
  OPERATIONS_AUTHORITY: 'operations-authority',
  CHANGE_AUTHORITY: 'change-authority',
  CONTINUITY_AUTHORITY: 'continuity-authority',
  TENANT_AUTHORITY: 'tenant-authority',
  PROPERTY_AUTHORITY: 'property-authority',
  SUPPLIER_ACCEPTANCE_AUTHORITY: 'supplier-acceptance-authority',
  EXCEPTION_AUTHORITY: 'exception-authority',
  FINDING_CLOSURE_AUTHORITY: 'finding-closure-authority'
});

export const CORE_GOVERNANCE_ROLES = Object.freeze({
  ENTERPRISE_GOVERNANCE_OWNER: 'enterprise-governance-owner',
  GOVERNING_AUTHORITY: 'governing-authority',
  ENTERPRISE_ARCHITECT: 'enterprise-architect',
  BUSINESS_CAPABILITY_OWNER: 'business-capability-owner',
  POLICY_OWNER: 'policy-owner',
  OBLIGATION_OWNER: 'obligation-owner',
  RISK_OWNER: 'risk-owner',
  CONTROL_OWNER: 'control-owner',
  CONTROL_OPERATOR: 'control-operator',
  EVIDENCE_OWNER: 'evidence-owner',
  SERVICE_OWNER: 'service-owner',
  DATA_OWNER: 'data-owner',
  DATA_STEWARD: 'data-steward',
  PRIVACY_AUTHORITY: 'privacy-authority',
  SECURITY_AUTHORITY: 'security-authority',
  AI_GOVERNANCE_OWNER: 'ai-governance-owner',
  TENANT_GOVERNANCE_OWNER: 'tenant-governance-owner',
  PROPERTY_GOVERNANCE_OWNER: 'property-governance-owner',
  SUPPLIER_OWNER: 'supplier-owner',
  ASSURANCE_PROVIDER: 'assurance-provider',
  AUDITOR: 'auditor',
  ISSUE_OWNER: 'issue-owner',
  REMEDIATION_OWNER: 'remediation-owner'
});

export const GOVERNANCE_RESPONSIBILITY_TYPES = Object.freeze({
  ACCOUNTABLE: 'accountable',
  DECISION_AUTHORITY: 'decision-authority',
  RESPONSIBLE: 'responsible',
  APPROVER: 'approver',
  CONSULTED: 'consulted',
  INFORMED: 'informed',
  VERIFIER: 'verifier',
  ASSURANCE_PROVIDER: 'assurance-provider',
  RISK_OWNER: 'risk-owner',
  EVIDENCE_OWNER: 'evidence-owner',
  ESCALATION_OWNER: 'escalation-owner'
});

export const DECISION_RIGHT_FIELDS = Object.freeze({
  DECISION_NAME: 'decision-name',
  PURPOSE: 'purpose',
  AUTHORITY_SOURCE: 'authority-source',
  AUTHORIZED_ROLE_OR_BODY: 'authorized-role-or-body',
  SCOPE: 'scope',
  APPLICABILITY: 'applicability',
  RISK_BOUNDARY: 'risk-boundary',
  FINANCIAL_BOUNDARY: 'financial-boundary',
  TENANT_AND_PROPERTY_BOUNDARY: 'tenant-and-property-boundary',
  PRECONDITIONS: 'preconditions',
  REQUIRED_CONSULTATION: 'required-consultation',
  REQUIRED_APPROVAL: 'required-approval',
  EVIDENCE: 'evidence',
  CONFLICT_RULES: 'conflict-rules',
  ESCALATION: 'escalation',
  EXPIRATION_OR_REVIEW: 'expiration-or-review',
  DELEGATION_RULES: 'delegation-rules'
});

export const GOVERNANCE_DECISION_CLASSES = Object.freeze({
  STRATEGIC: 'strategic',
  POLICY: 'policy',
  RISK: 'risk',
  COMPLIANCE: 'compliance',
  ARCHITECTURE: 'architecture',
  OPERATIONAL: 'operational',
  TENANT: 'tenant',
  PROPERTY: 'property',
  EMERGENCY: 'emergency'
});

export const DELEGATED_AUTHORITY_REQUIREMENTS = Object.freeze({
  DELEGATING_ACTOR_HOLDS_AUTHORITY: 'delegating-actor-holds-authority',
  DECISION_CLASS_PERMITS_DELEGATION: 'decision-class-permits-delegation',
  DELEGATE_HAS_COMPETENCE: 'delegate-has-appropriate-competence',
  SCOPE_AND_LIMITS_EXPLICIT: 'scope-and-limits-explicit',
  CONFLICTS_MANAGED: 'conflicts-of-interest-managed',
  EVIDENCE_RETAINED: 'evidence-retained',
  ESCALATION_DEFINED: 'escalation-defined',
  REVOCABLE: 'delegation-can-be-revoked',
  REVIEW_SCHEDULED: 'review-scheduled',
  SUBDELEGATION_CONTROLLED: 'subdelegation-controlled'
});

export const AUTOMATED_AUTHORITY_REQUIREMENTS = Object.freeze({
  ACTION_CLASS_AUTHORIZED: 'action-class-explicitly-authorized',
  IDENTITY_VERIFIABLE: 'identity-verifiable',
  LEAST_PRIVILEGE_PERMISSION: 'least-privilege-permission',
  SCOPE_BOUNDED: 'scope-bounded',
  RISK_WITHIN_LIMITS: 'risk-within-limits',
  MACHINE_VERIFIABLE_PRECONDITIONS: 'machine-verifiable-preconditions',
  EVIDENCE_PRODUCED: 'evidence-produced',
  OUTCOMES_VERIFIED: 'outcomes-verified',
  STOP_CONDITIONS_EXIST: 'stop-conditions-exist',
  HUMAN_ESCALATION_AVAILABLE: 'human-escalation-available',
  AUTHORITY_REVOCABLE: 'authority-revocable'
});

export const GOVERNANCE_FORUM_TYPES = Object.freeze({
  ENTERPRISE_GOVERNANCE_REVIEW: 'enterprise-governance-review',
  ARCHITECTURE_REVIEW: 'architecture-review',
  RISK_REVIEW: 'risk-review',
  COMPLIANCE_REVIEW: 'compliance-review',
  POLICY_REVIEW: 'policy-review',
  SECURITY_GOVERNANCE_REVIEW: 'security-governance-review',
  PRIVACY_GOVERNANCE_REVIEW: 'privacy-governance-review',
  AI_GOVERNANCE_REVIEW: 'ai-governance-review',
  DATA_GOVERNANCE_REVIEW: 'data-governance-review',
  OPERATIONAL_GOVERNANCE_REVIEW: 'operational-governance-review',
  TENANT_GOVERNANCE_REVIEW: 'tenant-governance-review',
  PROPERTY_GOVERNANCE_REVIEW: 'property-governance-review',
  SUPPLIER_GOVERNANCE_REVIEW: 'supplier-governance-review',
  EXCEPTION_REVIEW: 'exception-review',
  FINDING_AND_REMEDIATION_REVIEW: 'finding-and-remediation-review'
});

export const FORUM_CHARTER_FIELDS = Object.freeze({
  PURPOSE: 'purpose',
  SCOPE: 'scope',
  AUTHORITY: 'authority',
  CHAIR_OR_ACCOUNTABLE_OWNER: 'chair-or-accountable-owner',
  PARTICIPANTS: 'participants',
  QUORUM: 'quorum',
  DECISION_CLASSES: 'decision-classes',
  EVIDENCE_REQUIRED: 'evidence-required',
  CONFLICT_HANDLING: 'conflict-handling',
  ESCALATION: 'escalation',
  RECORDS: 'records',
  ACTION_TRACKING: 'action-tracking',
  CADENCE: 'cadence',
  REVIEW_DATE: 'review-date'
});

export const ASSURANCE_LINES = Object.freeze({
  FIRST_LINE_OWNERSHIP_AND_OPERATION: 'first-line-ownership-and-operation',
  SECOND_LINE_GOVERNANCE_RISK_AND_SPECIALIST_OVERSIGHT: 'second-line-governance-risk-and-specialist-oversight',
  THIRD_LINE_INDEPENDENT_ASSURANCE: 'third-line-independent-assurance'
});

export const EXTERNAL_ASSURANCE_PROVIDERS = Object.freeze({
  INDEPENDENT_AUDITORS: 'independent-auditors',
  CERTIFICATION_BODIES: 'certification-bodies',
  REGULATORY_EXAMINERS: 'regulatory-examiners',
  CUSTOMER_OR_TENANT_ASSESSORS: 'customer-or-tenant-assessors',
  CONTRACTUAL_REVIEWERS: 'contractual-reviewers',
  SPECIALIST_ASSESSORS: 'specialist-assessors',
  PENETRATION_TESTERS: 'penetration-testers',
  PRIVACY_OR_AI_ASSESSORS: 'privacy-or-ai-assessors'
});

export const GOVERNANCE_DECISION_LIFECYCLE_STAGES = Object.freeze({
  IDENTIFY_DECISION_NEED: 'Identify Decision Need',
  CONFIRM_AUTHORITY_AND_SCOPE: 'Confirm Authority and Scope',
  COLLECT_EVIDENCE_AND_EXPERTISE: 'Collect Evidence and Expertise',
  ASSESS_RISK_OBLIGATIONS_AND_ALTERNATIVES: 'Assess Risk, Obligations, and Alternatives',
  MANAGE_CONFLICTS_OF_INTEREST: 'Manage Conflicts of Interest',
  DECIDE_AND_RECORD_RATIONALE: 'Decide and Record Rationale',
  COMMUNICATE_AND_IMPLEMENT: 'Communicate and Implement',
  VERIFY_OUTCOME: 'Verify Outcome',
  MONITOR_CONTINUING_VALIDITY: 'Monitor Continuing Validity',
  REVIEW_RENEW_REPLACE_OR_RETIRE: 'Review, Renew, Replace, or Retire'
});

export const GOVERNANCE_DECISION_RECORD_FIELDS = Object.freeze({
  DECISION_IDENTIFIER: 'decision-identifier',
  DECISION_STATEMENT: 'decision-statement',
  DECISION_CLASS: 'decision-class',
  AUTHORITY: 'authority',
  SCOPE: 'scope',
  DATE: 'date',
  EFFECTIVE_PERIOD: 'effective-period',
  PARTICIPANTS: 'participants',
  CONFLICTS_DISCLOSED: 'conflicts-disclosed',
  EVIDENCE: 'evidence',
  OBLIGATIONS: 'obligations',
  RISKS: 'risks',
  ALTERNATIVES: 'alternatives',
  RATIONALE: 'rationale',
  CONDITIONS: 'conditions',
  ACTIONS: 'actions',
  OWNER: 'owner',
  VERIFICATION: 'verification',
  REVIEW_TRIGGER: 'review-trigger',
  RELATED_ARTIFACTS: 'related-policies-adrs-controls-exceptions-and-findings'
});

export const GOVERNANCE_ESCALATION_TRIGGERS = Object.freeze({
  AUTHORITY_EXCEEDED: 'authority-exceeded',
  POLICY_CONFLICT: 'policy-conflict',
  OBLIGATION_CONFLICT: 'obligation-conflict',
  HIGH_OR_INCREASING_RISK: 'high-or-increasing-risk',
  CROSS_TENANT_IMPACT: 'cross-tenant-impact',
  SECURITY_OR_PRIVACY_CONCERN: 'security-or-privacy-concern',
  AI_SAFETY_CONCERN: 'ai-safety-concern',
  MATERIAL_NONCOMPLIANCE: 'material-noncompliance',
  OVERDUE_FINDING: 'overdue-finding',
  REPEATED_EXCEPTION: 'repeated-exception',
  SUPPLIER_FAILURE: 'supplier-failure',
  INSUFFICIENT_EVIDENCE: 'insufficient-evidence',
  CONFLICT_OF_INTEREST: 'conflict-of-interest',
  UNRESOLVED_DISAGREEMENT: 'unresolved-disagreement',
  CRISIS_CONDITION: 'crisis-condition'
});

export const EMERGENCY_GOVERNANCE_FIELDS = Object.freeze({
  ACTIVATION_CRITERIA: 'activation-criteria',
  EMERGENCY_AUTHORITY: 'emergency-authority',
  SCOPE: 'scope',
  DURATION: 'duration',
  PERMITTED_DECISIONS: 'permitted-decisions',
  PROHIBITED_DECISIONS: 'prohibited-decisions',
  REQUIRED_EVIDENCE: 'required-evidence',
  SECURITY_AND_PRIVACY_CONTROLS: 'security-and-privacy-controls',
  TENANT_AND_PROPERTY_BOUNDARIES: 'tenant-and-property-boundaries',
  COMMUNICATION: 'communication',
  RETROSPECTIVE_REVIEW: 'retrospective-review',
  EXPIRATION: 'expiration',
  REMEDIATION: 'remediation'
});

export const GOVERNANCE_RHYTHMS = Object.freeze({
  CONTINUOUS: 'continuous',
  EVENT_DRIVEN: 'event-driven',
  PERIODIC: 'periodic'
});

export const GOVERNANCE_INFORMATION_TYPES = Object.freeze({
  ACTORS_AND_ROLES: 'actors-and-roles',
  DECISION_RIGHTS: 'decision-rights',
  PRINCIPLES: 'principles',
  POLICIES: 'policies',
  OBLIGATIONS: 'obligations',
  RISKS: 'risks',
  CONTROLS: 'controls',
  SERVICES: 'services',
  DATA: 'data',
  AI_CAPABILITIES: 'ai-capabilities',
  SUPPLIERS: 'suppliers',
  TENANTS: 'tenants',
  PROPERTIES: 'properties',
  EVIDENCE: 'evidence',
  ASSESSMENTS: 'assessments',
  FINDINGS: 'findings',
  EXCEPTIONS: 'exceptions',
  REMEDIATION: 'remediation',
  DECISIONS: 'decisions',
  ATTESTATIONS: 'attestations',
  REPORTS: 'reports'
});

export const GOVERNANCE_REPORT_VIEWS = Object.freeze({
  ENTERPRISE_RISK_POSTURE: 'enterprise-risk-posture',
  COMPLIANCE_POSTURE: 'compliance-posture',
  POLICY_STATUS: 'policy-status',
  CONTROL_EFFECTIVENESS: 'control-effectiveness',
  OPEN_FINDINGS: 'open-findings',
  EXCEPTIONS: 'exceptions',
  REMEDIATION: 'remediation',
  SECURITY_POSTURE: 'security-posture',
  PRIVACY_POSTURE: 'privacy-posture',
  AI_GOVERNANCE_POSTURE: 'ai-governance-posture',
  SUPPLIER_RISK: 'supplier-risk',
  TENANT_GOVERNANCE: 'tenant-governance',
  PROPERTY_GOVERNANCE: 'property-governance',
  AUDIT_STATUS: 'audit-status',
  ARCHITECTURE_DEVIATIONS: 'architecture-deviations'
});

export const ATTESTATION_FIELDS = Object.freeze({
  ATTESTING_AUTHORITY: 'attesting-authority',
  SCOPE: 'scope',
  CRITERIA: 'criteria',
  PERIOD: 'period',
  EVIDENCE_BASIS: 'evidence-basis',
  EXCEPTIONS: 'exceptions',
  FINDINGS: 'findings',
  LIMITATIONS: 'limitations',
  DATE: 'date',
  VALIDITY: 'validity',
  REQUIRED_FOLLOW_UP: 'required-follow-up'
});

export const TENANT_GOVERNANCE_MODEL_FIELDS = Object.freeze({
  TENANT_GOVERNING_AUTHORITY: 'tenant-governing-authority',
  TENANT_ADMINISTRATORS: 'tenant-administrators',
  DELEGATED_ROLES: 'delegated-roles',
  TENANT_POLICIES: 'tenant-policies',
  APPLICABLE_OBLIGATIONS: 'applicable-obligations',
  TENANT_RISKS: 'tenant-risks',
  TENANT_CONTROLS: 'tenant-controls',
  TENANT_DATA: 'tenant-data',
  AI_PERMISSIONS: 'ai-permissions',
  PROPERTY_DELEGATION: 'property-delegation',
  SUPPLIER_AND_INTEGRATION_CHOICES: 'supplier-and-integration-choices',
  EVIDENCE_ACCESS: 'evidence-access',
  REPORTING: 'reporting',
  ESCALATION: 'escalation',
  EXIT: 'exit'
});

export const PROPERTY_GOVERNANCE_MODEL_FIELDS = Object.freeze({
  PROPERTY_ACCOUNTABLE_OWNER: 'property-accountable-owner',
  LOCAL_DECISION_RIGHTS: 'local-decision-rights',
  TENANT_DELEGATION: 'tenant-delegation',
  LOCAL_OBLIGATIONS: 'local-obligations',
  PHYSICAL_OPERATIONS: 'physical-operations',
  GUEST_IMPACT_AUTHORITY: 'guest-impact-authority',
  MANUAL_PROCEDURES: 'manual-procedures',
  LOCAL_CONTINUITY: 'local-continuity',
  PROPERTY_CONFIGURATION: 'property-configuration',
  LOCAL_EVIDENCE: 'local-evidence',
  ESCALATION: 'escalation',
  RECONCILIATION: 'reconciliation'
});

export const SUPPLIER_GOVERNANCE_MODEL_ROLES = Object.freeze({
  BUSINESS_OWNER: 'business-owner',
  RELATIONSHIP_OWNER: 'relationship-owner',
  RISK_OWNER: 'risk-owner',
  SECURITY_AND_PRIVACY_REVIEWERS: 'security-and-privacy-reviewers',
  DATA_OWNER: 'data-owner',
  SERVICE_OWNER: 'service-owner',
  CONTINUITY_OWNER: 'continuity-owner',
  CONTRACT_AUTHORITY: 'contract-authority',
  ASSURANCE_OWNER: 'assurance-owner',
  EXIT_OWNER: 'exit-owner'
});

export const CROSS_TENANT_GOVERNANCE_TRIGGERS = Object.freeze({
  SHARED_SERVICES: 'shared-services',
  COMMON_POLICY: 'common-policy',
  PLATFORM_SECURITY: 'platform-security',
  CAPACITY_ALLOCATION: 'capacity-allocation',
  TENANT_ISOLATION: 'tenant-isolation',
  SHARED_AI_CAPABILITIES: 'shared-ai-capabilities',
  COMMON_SUPPLIERS: 'common-suppliers',
  ENTERPRISE_CONTINUITY: 'enterprise-continuity',
  CROSS_TENANT_INCIDENTS: 'cross-tenant-incidents',
  EVIDENCE_BOUNDARIES: 'evidence-boundaries'
});

export const GOVERNANCE_SERVICE_TYPES = Object.freeze({
  POLICY_SERVICE: 'policy-service',
  OBLIGATION_SERVICE: 'obligation-service',
  RISK_SERVICE: 'risk-service',
  CONTROL_SERVICE: 'control-service',
  EVIDENCE_SERVICE: 'evidence-service',
  ASSURANCE_SERVICE: 'assurance-service',
  EXCEPTION_SERVICE: 'exception-service',
  FINDING_SERVICE: 'finding-service',
  DECISION_SERVICE: 'decision-service',
  ATTESTATION_SERVICE: 'attestation-service',
  GOVERNANCE_REPORTING_SERVICE: 'governance-reporting-service'
});

export const GOVERNANCE_EFFECTIVENESS_OUTCOMES = Object.freeze({
  DECISION_CLARITY: 'decision-clarity',
  ACCOUNTABILITY: 'accountability',
  RISK_REDUCTION: 'risk-reduction',
  OBLIGATION_TRACEABILITY: 'obligation-traceability',
  CONTROL_EFFECTIVENESS: 'control-effectiveness',
  EVIDENCE_QUALITY: 'evidence-quality',
  FINDING_REMEDIATION: 'finding-remediation',
  EXCEPTION_DISCIPLINE: 'exception-discipline',
  INCIDENT_REDUCTION: 'incident-reduction',
  TENANT_TRUST: 'tenant-trust',
  AUDIT_READINESS: 'audit-readiness',
  ARCHITECTURE_ALIGNMENT: 'architecture-alignment',
  ADAPTABILITY: 'adaptability'
});

export const GOVERNANCE_MATURITY_STAGES = Object.freeze({
  REACTIVE: 'reactive',
  REPEATABLE: 'repeatable',
  INTEGRATED: 'integrated',
  MEASURED: 'measured',
  PROACTIVE: 'proactive',
  ADAPTIVE: 'adaptive',
  CONTINUOUS_AND_MACHINE_ASSISTED: 'continuous-and-machine-assisted'
});

export const OPERATING_MODEL_REVIEW_TRIGGERS = Object.freeze({
  ENTERPRISE_STRATEGY_CHANGES: 'enterprise-strategy-changes',
  NEW_ARCHITECTURE_DOMAINS_EMERGE: 'new-architecture-domains-emerge',
  NEW_JURISDICTIONS_OR_TENANTS_ADDED: 'new-jurisdictions-or-tenants-added',
  AI_AUTONOMY_INCREASES: 'ai-autonomy-increases',
  MATERIAL_INCIDENTS_OCCUR: 'material-incidents-occur',
  FINDINGS_RECUR: 'findings-recur',
  DECISION_DELAYS_CREATE_RISK: 'decision-delays-create-risk',
  CONFLICTS_REMAIN_UNRESOLVED: 'conflicts-remain-unresolved',
  SUPPLIER_CONCENTRATION_CHANGES: 'supplier-concentration-changes',
  ASSURANCE_REVEALS_WEAKNESS: 'assurance-reveals-weakness',
  ORGANIZATIONAL_RESPONSIBILITIES_CHANGE: 'organizational-responsibilities-change'
});

export const GOVERNANCE_OPERATING_MODEL_QUALITY_ATTRIBUTES = Object.freeze({
  ACCOUNTABILITY: 'accountability',
  TRANSPARENCY: 'transparency',
  INDEPENDENCE: 'independence',
  TRACEABILITY: 'traceability',
  CONSISTENCY: 'consistency',
  SCALABILITY: 'scalability',
  ADAPTABILITY: 'adaptability',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  EXPLAINABILITY: 'explainability',
  TENANT_ISOLATION: 'tenant-isolation',
  ENTERPRISE_TRUST: 'enterprise-trust'
});

export const GOVERNANCE_OPERATING_MODEL_ARCHITECTURAL_RULES = Object.freeze({
  ASSIGN_ONE_ACCOUNTABLE_OWNER: 'assign-one-accountable-owner',
  ALIGN_AUTHORITY_WITH_ACCOUNTABILITY: 'align-authority-with-accountability',
  FEDERATE_WITHIN_ENTERPRISE_GUARDRAILS: 'federate-governance-within-mandatory-enterprise-guardrails',
  DEFINE_GOVERNANCE_LEVELS_AND_SCOPES: 'define-governance-levels-and-scopes',
  MAKE_DECISION_RIGHTS_EXPLICIT: 'make-decision-rights-explicit',
  CONTROL_DELEGATED_AND_AUTOMATED_AUTHORITY: 'control-delegated-and-automated-authority',
  SEPARATE_HIGH_RISK_RESPONSIBILITIES: 'separate-ownership-execution-verification-and-assurance',
  PRESERVE_CONSTRUCTIVE_CHALLENGE: 'preserve-constructive-challenge',
  MANAGE_CONFLICTS_OF_INTEREST: 'manage-conflicts-of-interest',
  DEFINE_FORUMS_BY_PURPOSE_AND_AUTHORITY: 'define-forums-by-purpose-and-authority',
  ESCALATE_BY_RISK_AND_AUTHORITY: 'escalate-according-to-risk-and-authority',
  GOVERN_EMERGENCY_AUTHORITY: 'govern-emergency-authority-as-temporary-and-reviewable',
  PRESERVE_TENANT_AND_PROPERTY_ISOLATION: 'preserve-tenant-and-property-isolation',
  MAINTAIN_SUPPLIER_RISK_OWNERSHIP: 'maintain-internal-ownership-of-supplier-risk',
  PRODUCE_TRACEABLE_DECISION_RECORDS: 'produce-traceable-decision-records',
  EVALUATE_BY_OUTCOMES: 'evaluate-governance-by-outcomes',
  ADAPT_THROUGH_GOVERNED_REVIEW: 'adapt-operating-model-through-governed-review',
  REMAIN_VENDOR_AND_TECHNOLOGY_NEUTRAL: 'remain-vendor-neutral-and-technology-independent'
});

export const FUTURE_GOVERNANCE_OPERATING_MODEL_CAPABILITIES = Object.freeze({
  MACHINE_READABLE_DECISION_RIGHTS: 'machine-readable-decision-rights',
  DYNAMIC_AUTHORITY_DELEGATION: 'dynamic-authority-delegation',
  AI_ASSISTED_GOVERNANCE_COORDINATION: 'ai-assisted-governance-coordination',
  CONTINUOUS_CONFLICT_DETECTION: 'continuous-conflict-detection',
  SEMANTIC_ROLE_AND_RESPONSIBILITY_MODELS: 'semantic-role-and-responsibility-models',
  FEDERATED_TENANT_GOVERNANCE: 'federated-tenant-governance',
  REAL_TIME_GOVERNANCE_POSTURE: 'real-time-governance-posture',
  AUTOMATED_FORUM_PREPARATION: 'automated-forum-preparation',
  CONTINUOUS_ASSURANCE: 'continuous-assurance',
  POLICY_AWARE_OPERATIONAL_AGENTS: 'policy-aware-operational-agents',
  GOVERNANCE_DIGITAL_TWINS: 'governance-digital-twins',
  ADAPTIVE_GOVERNANCE_RHYTHMS: 'adaptive-governance-rhythms'
});
