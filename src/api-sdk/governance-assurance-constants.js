export const API_SDK_GOVERNANCE_ASSURANCE_ERROR_CODE = 'API_SDK_GOVERNANCE_ASSURANCE_INVALID';

export const API_SDK_GOVERNANCE_OBJECTIVES = Object.freeze({
  ACCOUNTABLE_OWNER: 'one-accountable-owner-for-every-supported-product',
  MATERIAL_AUTHORITY: 'clear-authority-for-material-decisions',
  FEDERATED_GUARDRAILS: 'consistent-enterprise-guardrails-with-federated-execution',
  PROPORTIONATE_REVIEW: 'proportionate-review-based-on-risk-and-reach',
  TRACEABLE_DECISIONS: 'traceable-product-contract-release-sdk-and-consumer-decisions',
  PREVENTIVE_WORKFLOW_CONTROLS: 'preventive-controls-embedded-in-developer-workflows',
  LIFECYCLE_EVIDENCE: 'evidence-designed-into-lifecycle-activities',
  COMPATIBILITY_RETIREMENT: 'reliable-compatibility-and-retirement-governance',
  TENANT_PARTNER_PUBLIC: 'explicit-tenant-property-partner-and-public-obligations',
  SECURITY_PRIVACY_SUPPLY_CHAIN: 'governed-security-privacy-data-ai-and-supply-chain-outcomes',
  TEMPORARY_EXCEPTIONS: 'time-bounded-exceptions-and-owned-remediation',
  INDEPENDENT_CHALLENGE: 'independent-challenge-where-risk-requires',
  MEASURABLE_EFFECTIVENESS: 'measurable-governance-effectiveness',
  TECHNOLOGY_INDEPENDENT_CONTROLS: 'technology-independent-control-outcomes'
});

export const API_SDK_GOVERNANCE_PRINCIPLES = Object.freeze({
  AUTHORITY_ACCOUNTABILITY: 'authority-follows-accountability',
  FEDERATE_GUARDRAILS: 'federate-within-guardrails',
  CONTRACTS_GOVERNED_PRODUCTS: 'contracts-are-governed-products',
  RISK_PROPORTIONATE_ASSURANCE: 'assurance-is-proportionate-to-risk',
  EVIDENCE_PRECEDES_CONCLUSION: 'evidence-precedes-conclusion',
  DECISION_EXECUTION_ASSURANCE_DISTINCT: 'decision-execution-and-assurance-are-distinct',
  EXCEPTIONS_TEMPORARY: 'exceptions-are-temporary',
  AUTOMATION_INSPECTABLE: 'automation-must-be-inspectable',
  EMERGENCY_AUTHORITY_CONTROLLED: 'emergency-authority-is-controlled',
  TECHNOLOGY_INDEPENDENCE: 'technology-independence'
});

export const API_SDK_GOVERNANCE_DEFINITIONS = Object.freeze({
  GOVERNANCE: 'governance',
  ASSURANCE: 'assurance',
  GOVERNING_AUTHORITY: 'governing-authority',
  API_PRODUCT_OWNER: 'api-product-owner',
  SDK_PRODUCT_OWNER: 'sdk-product-owner',
  CONTROL: 'control',
  EVIDENCE: 'evidence',
  EXCEPTION: 'exception',
  FINDING: 'finding'
});

export const API_SDK_GOVERNANCE_LIFECYCLE_DOMAINS = Object.freeze({
  API_PRODUCT: 'api-product',
  CONTRACT: 'contract',
  RELEASE: 'release',
  SDK: 'sdk',
  CONSUMER_ADOPTION: 'consumer-adoption'
});

export const API_SDK_GOVERNANCE_LEVELS = Object.freeze({
  ENTERPRISE: 'enterprise-level',
  PLATFORM: 'platform-level',
  BUSINESS_DOMAIN: 'business-or-domain-level',
  TENANT: 'tenant-level',
  PROPERTY: 'property-level',
  PRODUCT_SERVICE: 'product-and-service-level'
});

export const API_SDK_GOVERNANCE_ROLES = Object.freeze({
  API_PRODUCT_OWNER: 'api-product-owner',
  SDK_PRODUCT_OWNER: 'sdk-product-owner',
  DOMAIN_OWNER: 'business-capability-or-domain-owner',
  TECHNICAL_OWNER: 'technical-owner',
  PROVIDER_SERVICE_OWNER: 'provider-service-owner',
  OPERATIONAL_OWNER: 'operational-owner',
  CONSUMER_OWNER: 'consumer-owner',
  ENTERPRISE_ARCHITECT: 'enterprise-architect',
  API_PLATFORM_OWNER: 'api-platform-owner',
  DEVELOPER_PLATFORM_OWNER: 'developer-platform-owner',
  SECURITY_AUTHORITY: 'security-authority',
  PRIVACY_AUTHORITY: 'privacy-authority',
  DATA_OWNER_STEWARD: 'data-owner-and-steward',
  TENANT_GOVERNANCE_OWNER: 'tenant-governance-owner',
  PROPERTY_GOVERNANCE_OWNER: 'property-governance-owner',
  AI_GOVERNANCE_OWNER: 'ai-governance-owner',
  WORKFLOW_OWNER: 'workflow-owner',
  PARTNER_OWNER: 'supplier-or-partner-owner',
  RISK_OWNER: 'risk-owner',
  POLICY_OWNER: 'policy-owner',
  CONTROL_OWNER_OPERATOR: 'control-owner-and-operator',
  EVIDENCE_OWNER_CUSTODIAN: 'evidence-owner-and-custodian',
  ASSURANCE_PROVIDER: 'assurance-provider',
  AUDITOR: 'auditor',
  REMEDIATION_OWNER: 'issue-and-remediation-owner',
  EMERGENCY_COMMAND_AUTHORITY: 'emergency-command-authority'
});

export const API_SDK_DECISION_RECORD_FIELDS = Object.freeze({
  PROPOSER: 'proposer',
  ACCOUNTABLE_DECISION_MAKER: 'accountable-decision-maker',
  REQUIRED_APPROVERS: 'required-approvers',
  REVIEWERS_CHALLENGERS: 'required-reviewers-or-challengers',
  IMPLEMENTERS: 'implementers',
  EVIDENCE_PROVIDERS: 'evidence-providers',
  AFFECTED_STAKEHOLDERS: 'affected-stakeholders',
  ESCALATION_AUTHORITY: 'escalation-authority'
});

export const API_SDK_DECISION_CLASSES = Object.freeze({
  PRODUCT: 'product-decisions',
  CONTRACT: 'contract-decisions',
  ARCHITECTURE: 'architecture-decisions',
  SECURITY_PRIVACY: 'security-and-privacy-decisions',
  LIFECYCLE: 'lifecycle-decisions',
  OPERATIONAL: 'operational-decisions',
  TENANT_PROPERTY: 'tenant-and-property-decisions',
  ASSURANCE: 'assurance-decisions'
});

export const API_SDK_REGISTRATION_FIELDS = Object.freeze({
  PRODUCT_IDENTITY_DOMAIN: 'product-identity-and-domain',
  PURPOSE_SCOPE: 'purpose-and-scope',
  OWNERS: 'accountable-technical-and-operational-owners',
  PROVIDERS: 'provider-services',
  AUDIENCES: 'intended-audiences',
  EXPOSURE: 'exposure-classification',
  DATA_CLASSIFICATION: 'data-classification',
  TENANT_PROPERTY: 'tenant-and-property-declaration',
  IDENTITY_AUTHORIZATION: 'identity-and-authorization-model',
  CONTRACTS: 'contract-sources-and-versions',
  SDKS_DOCS: 'sdks-and-documentation',
  SERVICE_LIMITS: 'service-expectations-and-limits',
  SUPPORT: 'support-and-incident-routes',
  RISK_CONTROLS: 'risk-and-control-references',
  LIFECYCLE: 'lifecycle-state',
  DEPENDENCIES_CONSUMERS: 'dependencies-and-consumers',
  EVIDENCE_EXCEPTIONS: 'evidence-and-exceptions'
});

export const API_SDK_POLICY_INSTRUMENTS = Object.freeze({
  POLICY: 'policy',
  STANDARD: 'standard',
  ARCHITECTURE_PATTERN: 'architecture-pattern',
  PROCEDURE: 'procedure',
  GUIDANCE: 'guidance',
  CONFORMANCE_PROFILE: 'conformance-profile'
});

export const API_SDK_CLASSIFICATION_DIMENSIONS = Object.freeze({
  AUDIENCE: 'audience-classification',
  DATA: 'data-classification',
  PRIVILEGE: 'privilege-classification',
  CRITICALITY: 'criticality-classification',
  CHANGE: 'change-classification'
});

export const API_SDK_RISK_FACTORS = Object.freeze({
  CAPABILITY_CRITICALITY: 'business-capability-and-criticality',
  EXPOSURE: 'exposure-and-discoverability',
  CONSUMER_CONCENTRATION: 'consumer-population-and-dependency-concentration',
  PRIVILEGE_REVERSIBILITY: 'operation-privilege-and-reversibility',
  DATA_VOLUME: 'data-classification-and-volume',
  TENANT_PROPERTY_REACH: 'tenant-and-property-reach',
  AUTONOMY: 'human-workflow-agent-and-autonomous-use',
  THIRD_PARTY_PUBLIC: 'third-party-and-public-access',
  SERVICE_COMMITMENTS: 'availability-and-performance-commitments',
  MIGRATION_IMPACT: 'compatibility-and-migration-impact',
  SUPPLY_CHAIN: 'package-and-dependency-supply-chain',
  OPERATIONAL_COMPLEXITY: 'operational-complexity',
  HISTORY: 'incident-vulnerability-and-exception-history',
  LEGAL_OBLIGATIONS: 'legal-regulatory-contractual-and-residency-obligations'
});

export const API_SDK_CONTROL_TYPES = Object.freeze({
  PREVENTIVE: 'preventive',
  DETECTIVE: 'detective',
  CORRECTIVE: 'corrective',
  RECOVERY: 'recovery',
  MANUAL: 'manual',
  AUTOMATED: 'automated',
  HYBRID: 'hybrid'
});

export const API_SDK_PREVENTIVE_CONTROLS = Object.freeze({
  DECLARATIONS: 'required-product-and-sdk-declarations',
  TEMPLATES_PATTERNS: 'approved-templates-and-patterns',
  CONTRACT_REVIEW: 'contract-linting-and-semantic-review',
  IDENTITY_AUTH_CHECKS: 'identity-and-authorization-design-checks',
  TENANT_PROPERTY: 'tenant-and-property-declarations',
  COMPATIBILITY: 'compatibility-analysis',
  DEPENDENCY_ADMISSION: 'dependency-admission',
  PACKAGE_NAMESPACE: 'protected-package-namespaces',
  CONFORMANCE_PROFILES: 'required-test-and-conformance-profiles',
  RELEASE_GATES: 'release-gates',
  PUBLICATION_RIGHTS: 'least-privilege-publication-rights'
});

export const API_SDK_DETECTIVE_CONTROLS = Object.freeze({
  REGISTRY_SCANS: 'registry-completeness-scans',
  DRIFT: 'contract-and-implementation-drift-detection',
  UNSUPPORTED_VERSION: 'unsupported-version-discovery',
  UNDOCUMENTED_API: 'undocumented-api-discovery',
  CONSUMER_ACCESS: 'consumer-and-access-inventory-review',
  PACKAGE_DEPENDENCY: 'package-and-dependency-monitoring',
  SECURITY_PRIVACY: 'security-and-privacy-monitoring',
  TENANT_ISOLATION: 'tenant-isolation-checks',
  EVIDENCE_COMPLETENESS: 'evidence-completeness-checks',
  EXPIRY_ALERTS: 'deprecation-and-exception-expiry-alerts',
  SERVICE_REVIEW: 'service-objective-and-quota-review'
});

export const API_SDK_GOVERNANCE_REVIEW_AREAS = Object.freeze({
  PRODUCT_PROPOSAL: 'product-proposal-governance',
  CONTRACT_APPROVAL: 'contract-approval-governance',
  EXPOSURE: 'exposure-governance',
  SECURITY: 'security-governance',
  PRIVACY_DATA: 'privacy-and-data-governance',
  TENANT_PROPERTY: 'tenant-and-property-governance',
  AI_WORKFLOW: 'ai-agent-and-workflow-governance',
  PARTNER_PUBLIC: 'partner-and-public-api-governance',
  INTERNAL_API: 'internal-api-governance',
  ADMINISTRATIVE_API: 'administrative-api-governance',
  SDK: 'sdk-governance',
  PACKAGE_SUPPLY_CHAIN: 'package-and-supply-chain-governance',
  DOCUMENTATION_EXAMPLE: 'documentation-and-example-governance',
  TEST_CONFORMANCE: 'test-and-conformance-governance'
});

export const API_SDK_LIFECYCLE_GATES = Object.freeze({
  PROPOSAL_TO_DESIGN: 'proposal-to-design',
  DESIGN_TO_APPROVAL: 'design-to-approval',
  APPROVAL_TO_REGISTRATION: 'approval-to-registration',
  REGISTRATION_TO_RELEASE: 'registration-to-release',
  RELEASE_TO_ACTIVE: 'release-to-active-use',
  SDK_STABLE_PROMOTION: 'stable-channel-sdk-promotion',
  CHANGE_APPROVAL: 'compatible-or-breaking-change-approval',
  RESTRICTION_SUSPENSION: 'restriction-or-suspension',
  DEPRECATION: 'deprecation',
  RETIREMENT: 'retirement',
  ARCHIVAL: 'archival'
});

export const API_SDK_CHANGE_GOVERNANCE_FIELDS = Object.freeze({
  AFFECTED_SCOPE: 'affected-products-contracts-releases-sdks-and-consumers',
  PURPOSE_OWNER: 'purpose-and-owner',
  CLASSIFICATION: 'change-classification',
  ARCHITECTURE_DOMAIN_IMPACT: 'architecture-and-domain-impact',
  SECURITY_PRIVACY_DATA_IMPACT: 'security-privacy-data-tenant-and-property-impact',
  COMPATIBILITY: 'compatibility-analysis',
  TESTING: 'testing-and-conformance-evidence',
  OPERATIONS: 'operational-readiness',
  MIGRATION_COMMUNICATION: 'migration-and-communication',
  RECOVERY: 'rollback-or-roll-forward-strategy',
  RISK_EXCEPTIONS: 'risk-and-exceptions'
});

export const API_SDK_ASSURANCE_LEVELS = Object.freeze({
  SELF_ASSESSMENT: 'management-self-assessment',
  TECHNICAL_CONFORMANCE: 'technical-conformance-assessment',
  SPECIALIST_CONTROL: 'specialist-control-assessment',
  INTERNAL_ASSURANCE: 'independent-internal-assurance',
  EXTERNAL_ASSURANCE: 'independent-external-assurance'
});

export const API_SDK_ASSURANCE_METHODS = Object.freeze({
  DOCUMENT_INSPECTION: 'document-and-contract-inspection',
  ARCHITECTURE_THREAT_REVIEW: 'architecture-and-threat-review',
  POLICY_EVALUATION: 'automated-policy-evaluation',
  CONFORMANCE_REVIEW: 'test-and-conformance-result-review',
  REPERFORMANCE: 'reperformance',
  SAMPLING: 'sampling',
  FULL_POPULATION: 'full-population-analysis',
  CONFIGURATION: 'configuration-inspection',
  INVENTORY: 'access-and-consumer-inventory-review',
  PROVENANCE: 'package-and-provenance-verification',
  OPERATIONAL_OBSERVATION: 'operational-observation',
  INTERVIEWS: 'interviews-and-walkthroughs',
  INCIDENT_CHANGE: 'incident-and-change-analysis'
});

export const API_SDK_EVIDENCE_RECORD_FIELDS = Object.freeze({
  IDENTITY_TYPE: 'evidence-identity-and-type',
  SUBJECT_ACTIVITY: 'subject-and-lifecycle-activity',
  PRODUCER_OWNER: 'producer-and-owner',
  SOURCE: 'source-system-or-process',
  TIME: 'creation-and-effective-time',
  CORRELATION: 'product-contract-release-sdk-consumer-tenant-property-and-environment-correlation',
  INTEGRITY: 'integrity-and-provenance',
  CLASSIFICATION_ACCESS: 'classification-and-access',
  RETENTION: 'retention-and-disposal',
  QUALITY_LIMITATIONS: 'quality-and-known-limitations',
  RELATED_CLAIM: 'related-decision-control-finding-or-assurance-claim'
});

export const API_SDK_EVIDENCE_QUALITY_FACTORS = Object.freeze({
  RELEVANCE: 'relevance',
  RELIABILITY: 'reliability',
  COMPLETENESS: 'completeness',
  ACCURACY: 'accuracy',
  TIMELINESS: 'timeliness',
  PROVENANCE: 'provenance',
  INTEGRITY: 'integrity',
  INDEPENDENCE: 'independence',
  REPRODUCIBILITY: 'reproducibility',
  UNDERSTANDABILITY: 'understandability'
});

export const API_SDK_EXCEPTION_FIELDS = Object.freeze({
  REQUIREMENT_AUTHORITY: 'requirement-and-authority',
  REASON: 'reason-and-business-need',
  AFFECTED_SCOPE: 'affected-products-versions-consumers-tenants-properties-and-environments',
  DATES: 'start-and-expiry-dates',
  RISK: 'risk-assessment',
  ELIGIBILITY: 'legal-and-policy-eligibility',
  COMPENSATING_CONTROLS: 'compensating-controls',
  MONITORING_EVIDENCE: 'monitoring-and-evidence',
  REMEDIATION: 'remediation-plan-and-owner',
  COMMUNICATION: 'communication-needs',
  REVOCATION: 'revocation-conditions'
});

export const API_SDK_ISSUE_FIELDS = Object.freeze({
  OWNER: 'owner',
  CLASSIFICATION: 'classification',
  IMPACT: 'impact',
  CONTAINMENT: 'containment',
  DUE_DATE: 'due-date',
  TREATMENT: 'treatment',
  EVIDENCE: 'evidence',
  ESCALATION_STATE: 'escalation-state'
});

export const API_SDK_AUTOMATION_CAPABILITIES = Object.freeze({
  REGISTRY_COMPLETENESS: 'registry-completeness',
  CONTRACT_VALIDATION: 'contract-validation',
  POLICY_STANDARD_CHECKS: 'policy-and-standard-checks',
  COMPATIBILITY: 'compatibility-analysis',
  REVIEW_ROUTING: 'required-review-routing',
  CONFORMANCE_GATES: 'test-and-conformance-gates',
  PACKAGE_CONTROLS: 'dependency-and-package-controls',
  EVIDENCE_CAPTURE: 'evidence-capture-and-correlation',
  ACCESS_REVIEW: 'access-and-consumer-review',
  EXPIRY: 'deprecation-and-exception-expiry',
  DRIFT_ORPHAN: 'drift-and-orphan-detection',
  REPORTING: 'reporting-and-escalation'
});

export const API_SDK_REPORTING_FIELDS = Object.freeze({
  PORTFOLIO: 'product-and-sdk-portfolio-by-lifecycle-and-risk',
  OWNERSHIP: 'ownership-completeness',
  EXPOSURE: 'exposure-and-classification',
  VERSIONS: 'supported-and-deprecated-versions',
  CONSUMERS: 'consumer-and-migration-state',
  DRIFT: 'contract-and-implementation-drift',
  CONFORMANCE: 'conformance-and-assurance-status',
  EXCEPTIONS: 'open-exceptions-and-expiry',
  FINDINGS: 'findings-and-overdue-remediation',
  SECURITY_DEPENDENCY: 'security-and-dependency-risk',
  TENANT_PROPERTY: 'tenant-and-property-issues',
  RELEASE_INCIDENT: 'release-and-incident-trends',
  EVIDENCE: 'evidence-completeness'
});

export const API_SDK_GOVERNANCE_MATURITY_LEVELS = Object.freeze({
  REACTIVE: 'reactive',
  REPEATABLE: 'repeatable',
  INTEGRATED: 'integrated',
  MEASURED: 'measured',
  PROACTIVE: 'proactive',
  ADAPTIVE: 'adaptive'
});

export const API_SDK_GOVERNANCE_RULES = Object.freeze({
  ACCOUNTABLE_OWNER: 'supported-api-and-sdk-product-has-one-accountable-owner',
  TRACEABLE_CORRELATED_DECISIONS: 'product-contract-release-sdk-and-consumer-adoption-decisions-correlated-and-traceable',
  AUTHORITY_NOT_GRANTED_BY_VISIBILITY: 'discoverability-reachability-sdk-possession-or-prior-success-never-grants-authority',
  PROVIDER_ENFORCEMENT: 'providers-remain-responsible-for-identity-authorization-tenant-property-policy-and-domain-enforcement',
  NO_CROSS_SERVICE_DATABASE: 'cross-service-data-access-uses-governed-apis-or-events-direct-cross-service-database-access-prohibited',
  MATERIAL_CHANGES_GOVERNED: 'public-partner-administrative-cross-tenant-and-breaking-changes-require-explicit-proportionate-governance',
  UNKNOWN_ESCALATES: 'unknown-ownership-or-compatibility-escalates-and-never-defaults-to-approval',
  PROTECTED_EVIDENCE: 'evidence-designed-into-lifecycle-workflows-and-protected-by-classification',
  SCOPED_ASSURANCE: 'assurance-conclusions-identify-scope-criteria-evidence-limitations-independence-and-validity',
  NON_PASS_VISIBLE: 'skipped-blocked-inconclusive-failed-and-excepted-requirements-remain-visible',
  TEMPORARY_EXCEPTIONS: 'exceptions-require-lawful-authority-scope-risk-controls-evidence-expiry-and-remediation-ownership',
  INDEPENDENT_CLOSURE: 'high-risk-remediation-closure-requires-independent-validation-proportionate-to-risk',
  INSPECTABLE_AUTOMATION: 'automated-governance-versioned-explainable-testable-observable-and-governed-overridable',
  BOUNDED_EMERGENCY: 'emergency-authority-bounded-recorded-reviewed-and-followed-by-permanent-remediation',
  AI_ASSISTS_NOT_ACCOUNTABLE: 'ai-may-assist-governance-but-must-not-assume-unbounded-accountability-or-decision-authority'
});

export const API_SDK_GOVERNANCE_BOUNDARIES = Object.freeze({
  ARCH_012: 'specializes-arch-012-without-defining-laws-contracts-regulatory-interpretations-risk-methodology-or-audit-procedures',
  ARCH_013: 'developer-platform-implements-governance-workflows-through-catalogs-tooling-gates-artifacts-documentation-evidence-and-guardrails',
  ARCH_018: 'detailed-tenant-and-property-topology-isolation-administration-lifecycle-and-cross-tenant-controls-remain-owned-by-arch-018',
  ARCH_017_09: 'operational-observability-performance-reliability-and-service-health-defined-by-arch-017-09',
  TECHNOLOGY_NEUTRAL: 'does-not-depend-on-specific-gateway-registry-policy-engine-schema-technology-source-platform-cloud-or-vendor'
});
