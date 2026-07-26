export const GOVERNANCE_COMPLIANCE_ERROR_CODES = Object.freeze({
  GOVERNANCE_COMPLIANCE_OVERVIEW_INVALID: 'GOVERNANCE_COMPLIANCE_OVERVIEW_INVALID'
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
