export const SECURITY_ARCHITECTURE_ERROR_CODES = Object.freeze({
  SECURITY_OVERVIEW_INVALID: 'SECURITY_ARCHITECTURE_OVERVIEW_INVALID',
  SECURITY_DOMAIN_INVALID: 'SECURITY_ARCHITECTURE_DOMAIN_INVALID',
  TRUST_BOUNDARY_INVALID: 'SECURITY_ARCHITECTURE_TRUST_BOUNDARY_INVALID',
  SECURITY_RESPONSIBILITY_INVALID: 'SECURITY_ARCHITECTURE_RESPONSIBILITY_INVALID',
  SECURITY_RISK_ASSESSMENT_INVALID: 'SECURITY_ARCHITECTURE_RISK_ASSESSMENT_INVALID',
  IDENTITY_AUTHENTICATION_INVALID: 'SECURITY_ARCHITECTURE_IDENTITY_AUTHENTICATION_INVALID',
  IDENTITY_CATEGORY_INVALID: 'SECURITY_ARCHITECTURE_IDENTITY_CATEGORY_INVALID',
  AUTHENTICATION_POLICY_INVALID: 'SECURITY_ARCHITECTURE_AUTHENTICATION_POLICY_INVALID',
  IDENTITY_LIFECYCLE_INVALID: 'SECURITY_ARCHITECTURE_IDENTITY_LIFECYCLE_INVALID',
  AUTHORIZATION_MODEL_INVALID: 'SECURITY_ARCHITECTURE_AUTHORIZATION_MODEL_INVALID',
  AUTHORIZATION_PERMISSION_INVALID: 'SECURITY_ARCHITECTURE_AUTHORIZATION_PERMISSION_INVALID',
  AUTHORIZATION_POLICY_INVALID: 'SECURITY_ARCHITECTURE_AUTHORIZATION_POLICY_INVALID',
  AUTHORIZATION_DELEGATION_INVALID: 'SECURITY_ARCHITECTURE_AUTHORIZATION_DELEGATION_INVALID'
});

export const SECURITY_OBJECTIVES = Object.freeze({
  CONFIDENTIALITY: 'confidentiality',
  INTEGRITY: 'integrity',
  AVAILABILITY: 'availability',
  AUTHENTICITY: 'authenticity',
  ACCOUNTABILITY: 'accountability',
  PRIVACY: 'privacy'
});

export const SECURITY_PRINCIPLES = Object.freeze({
  SECURITY_BY_DESIGN: 'security-by-design',
  SECURE_BY_DEFAULT: 'secure-by-default',
  ZERO_TRUST: 'zero-trust',
  LEAST_PRIVILEGE: 'least-privilege',
  DEFENSE_IN_DEPTH: 'defense-in-depth',
  SEPARATION_OF_DUTIES: 'separation-of-duties',
  CONTINUOUS_VERIFICATION: 'continuous-verification'
});

export const SECURITY_DOMAIN_NAMES = Object.freeze({
  IDENTITY: 'Identity',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  TRUST: 'Trust',
  SECRETS: 'Secrets',
  CRYPTOGRAPHY: 'Cryptography',
  AI_SECURITY: 'AI Security',
  PLATFORM_SECURITY: 'Platform Security',
  COMPLIANCE: 'Compliance',
  GOVERNANCE: 'Governance'
});

export const TRUST_BOUNDARY_NAMES = Object.freeze({
  INTERNET_EDGE: 'Internet to Edge',
  CLIENT_GATEWAY: 'Client to Gateway',
  GATEWAY_SERVICES: 'Gateway to Services',
  SERVICE_SERVICE: 'Service to Service',
  SERVICE_DATA: 'Service to Data',
  AI_EXTERNAL_MODELS: 'AI to External Models',
  PLATFORM_THIRD_PARTY: 'Platform to Third-party Systems',
  PRODUCTION_ADMIN: 'Production to Administrative Operations'
});

export const SECURITY_RESPONSIBILITY_OWNERS = Object.freeze({
  SECURITY_PLATFORM: 'Security Platform',
  IDENTITY_SERVICES: 'Identity Services',
  BUSINESS_SERVICES: 'Business Services',
  SERVICE_OWNERS: 'Service Owners',
  PLATFORM_OPERATIONS: 'Platform Operations',
  AI_PLATFORM: 'AI Platform',
  OBSERVABILITY_PLATFORM: 'Observability Platform',
  SECURITY_ARCHITECTURE: 'Security Architecture'
});

export const SECURITY_LIFECYCLE_STAGES = Object.freeze({
  DESIGN: 'Design',
  DEVELOP: 'Develop',
  TEST: 'Test',
  DEPLOY: 'Deploy',
  OPERATE: 'Operate',
  MONITOR: 'Monitor',
  IMPROVE: 'Improve'
});

export const SECURITY_RISK_FACTORS = Object.freeze({
  THREAT_LIKELIHOOD: 'threat-likelihood',
  BUSINESS_IMPACT: 'business-impact',
  ASSET_SENSITIVITY: 'asset-sensitivity',
  OPERATIONAL_EXPOSURE: 'operational-exposure',
  REGULATORY_OBLIGATIONS: 'regulatory-obligations'
});

export const SECURITY_GOVERNANCE_ACTIVITIES = Object.freeze({
  POLICY_DEFINITION: 'policy-definition',
  ARCHITECTURE_REVIEW: 'architecture-review',
  RISK_ASSESSMENT: 'risk-assessment',
  COMPLIANCE_VALIDATION: 'compliance-validation',
  SECURITY_METRICS: 'security-metrics',
  INCIDENT_REVIEW: 'incident-review',
  CONTINUOUS_IMPROVEMENT: 'continuous-improvement'
});

export const FUTURE_SECURITY_OVERVIEW_CAPABILITIES = Object.freeze({
  CONTINUOUS_ADAPTIVE_TRUST_EVALUATION: 'Continuous adaptive trust evaluation',
  AI_ASSISTED_THREAT_DETECTION: 'AI-assisted threat detection',
  AUTONOMOUS_POLICY_VALIDATION: 'Autonomous policy validation',
  HARDWARE_BACKED_IDENTITY: 'Hardware-backed identity',
  CONFIDENTIAL_COMPUTING: 'Confidential computing',
  POST_QUANTUM_CRYPTOGRAPHY: 'Post-quantum cryptography',
  AUTONOMOUS_COMPLIANCE_VERIFICATION: 'Autonomous compliance verification',
  PREDICTIVE_RISK_ANALYSIS: 'Predictive risk analysis'
});

export const IDENTITY_OBJECTIVES = Object.freeze({
  STRONG_IDENTITY_VERIFICATION: 'strong-identity-verification',
  CONSISTENT_AUTHENTICATION: 'consistent-authentication',
  FEDERATED_IDENTITY_SUPPORT: 'federated-identity-support',
  MACHINE_IDENTITY_MANAGEMENT: 'machine-identity-management',
  AI_IDENTITY_MANAGEMENT: 'ai-identity-management',
  AUDITABILITY: 'auditability',
  SCALABILITY: 'scalability',
  VENDOR_INDEPENDENCE: 'vendor-independence'
});

export const IDENTITY_CATEGORY_NAMES = Object.freeze({
  HUMAN_USERS: 'Human Users',
  SERVICES: 'Services',
  AI_AGENTS: 'AI Agents',
  INFRASTRUCTURE: 'Infrastructure',
  EXTERNAL_SYSTEMS: 'External Systems'
});

export const IDENTITY_ARCHITECTURE_STAGES = Object.freeze({
  IDENTITY: 'Identity',
  AUTHENTICATION: 'Authentication',
  TRUST_EVALUATION: 'Trust Evaluation',
  AUTHORIZATION: 'Authorization',
  BUSINESS_OPERATIONS: 'Business Operations'
});

export const AUTHENTICATION_PRINCIPLES = Object.freeze({
  EXPLICIT: 'explicit',
  REPEATABLE: 'repeatable',
  AUDITABLE: 'auditable',
  SECURE: 'secure',
  INFRASTRUCTURE_INDEPENDENT: 'infrastructure-independent'
});

export const AUTHENTICATION_FACTOR_TYPES = Object.freeze({
  KNOWLEDGE: 'Knowledge',
  POSSESSION: 'Possession',
  INHERENCE: 'Inherence',
  CRYPTOGRAPHIC: 'Cryptographic'
});

export const CREDENTIAL_MANAGEMENT_CAPABILITIES = Object.freeze({
  SECURE_CREATION: 'secure-creation',
  ROTATION: 'rotation',
  EXPIRATION: 'expiration',
  REVOCATION: 'revocation',
  RECOVERY: 'recovery',
  AUDITABILITY: 'auditability'
});

export const SESSION_MANAGEMENT_CAPABILITIES = Object.freeze({
  SECURE_ESTABLISHMENT: 'secure-establishment',
  CONTROLLED_LIFETIME: 'controlled-lifetime',
  REAUTHENTICATION: 'reauthentication',
  EXPLICIT_TERMINATION: 'explicit-termination',
  AUDIT_LOGGING: 'audit-logging'
});

export const IDENTITY_LIFECYCLE_STAGES = Object.freeze({
  PROVISION: 'Provision',
  ACTIVATE: 'Activate',
  AUTHENTICATE: 'Authenticate',
  OPERATE: 'Operate',
  SUSPEND: 'Suspend',
  REVOKE: 'Revoke',
  RETIRE: 'Retire'
});

export const IDENTITY_VERIFICATION_TRIGGERS = Object.freeze({
  INITIAL_AUTHENTICATION: 'initial-authentication',
  PRIVILEGE_ESCALATION: 'privilege-escalation',
  SENSITIVE_TRANSACTIONS: 'sensitive-transactions',
  ADMINISTRATIVE_OPERATIONS: 'administrative-operations',
  CROSS_BOUNDARY_COMMUNICATION: 'cross-boundary-communication'
});

export const IDENTITY_OBSERVABILITY_EVENTS = Object.freeze({
  AUTHENTICATION_SUCCESS: 'authentication-success',
  AUTHENTICATION_FAILURE: 'authentication-failure',
  SESSION_CREATION: 'session-creation',
  SESSION_TERMINATION: 'session-termination',
  CREDENTIAL_USAGE: 'credential-usage',
  IDENTITY_LIFECYCLE_EVENTS: 'identity-lifecycle-events'
});

export const IDENTITY_GOVERNANCE_CONTROLS = Object.freeze({
  IDENTITY_OWNERSHIP: 'identity-ownership',
  PROVISIONING_STANDARDS: 'provisioning-standards',
  CREDENTIAL_POLICIES: 'credential-policies',
  AUTHENTICATION_POLICIES: 'authentication-policies',
  FEDERATION_AGREEMENTS: 'federation-agreements',
  LIFECYCLE_REVIEWS: 'lifecycle-reviews',
  PERIODIC_AUDITS: 'periodic-audits'
});

export const FUTURE_IDENTITY_CAPABILITIES = Object.freeze({
  PASSWORDLESS_AUTHENTICATION: 'Passwordless authentication',
  DECENTRALIZED_IDENTITY: 'Decentralized identity (DID)',
  VERIFIABLE_CREDENTIALS: 'Verifiable credentials',
  CONTINUOUS_AUTHENTICATION: 'Continuous authentication',
  RISK_ADAPTIVE_AUTHENTICATION: 'Risk-adaptive authentication',
  HARDWARE_BACKED_IDENTITIES: 'Hardware-backed identities',
  AI_ASSISTED_IDENTITY_VERIFICATION: 'AI-assisted identity verification',
  POST_QUANTUM_AUTHENTICATION: 'Post-quantum authentication mechanisms'
});

export const AUTHORIZATION_OBJECTIVES = Object.freeze({
  LEAST_PRIVILEGE: 'least-privilege',
  POLICY_DRIVEN_ACCESS: 'policy-driven-access',
  FINE_GRAINED_PERMISSIONS: 'fine-grained-permissions',
  SEPARATION_OF_DUTIES: 'separation-of-duties',
  CONSISTENT_ENFORCEMENT: 'consistent-enforcement',
  COMPLETE_AUDITABILITY: 'complete-auditability',
  ENTERPRISE_SCALABILITY: 'enterprise-scalability',
  VENDOR_INDEPENDENCE: 'vendor-independence'
});

export const AUTHORIZATION_FLOW_STAGES = Object.freeze({
  IDENTITY: 'Identity',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION_POLICY: 'Authorization Policy',
  ACCESS_DECISION: 'Access Decision',
  BUSINESS_OPERATION: 'Business Operation'
});

export const AUTHORIZATION_COMPONENT_NAMES = Object.freeze({
  AUTHENTICATED_IDENTITY: 'Authenticated Identity',
  REQUESTED_RESOURCE: 'Requested Resource',
  REQUESTED_ACTION: 'Requested Action',
  POLICY_EVALUATION: 'Policy Evaluation',
  ACCESS_DECISION: 'Access Decision'
});

export const ACCESS_CONTROL_PRINCIPLES = Object.freeze({
  LEAST_PRIVILEGE: 'least-privilege',
  DEFAULT_DENY: 'default-deny',
  EXPLICIT_AUTHORIZATION: 'explicit-authorization',
  SEPARATION_OF_DUTIES: 'separation-of-duties'
});

export const PROTECTED_RESOURCE_CATEGORIES = Object.freeze({
  BUSINESS_RESOURCES: 'Business Resources',
  PLATFORM_RESOURCES: 'Platform Resources',
  AI_RESOURCES: 'AI Resources',
  OPERATIONAL_RESOURCES: 'Operational Resources'
});

export const AUTHORIZATION_ACTIONS = Object.freeze({
  CREATE: 'Create',
  READ: 'Read',
  UPDATE: 'Update',
  DELETE: 'Delete',
  EXECUTE: 'Execute',
  APPROVE: 'Approve',
  DEPLOY: 'Deploy',
  CONFIGURE: 'Configure',
  MONITOR: 'Monitor',
  MANAGE: 'Manage'
});

export const POLICY_EVALUATION_INPUTS = Object.freeze({
  IDENTITY: 'identity',
  RESOURCE: 'resource',
  REQUESTED_ACTION: 'requested-action',
  ORGANIZATIONAL_ROLE: 'organizational-role',
  BUSINESS_CONTEXT: 'business-context',
  OPERATIONAL_STATE: 'operational-state',
  ENVIRONMENTAL_CONDITIONS: 'environmental-conditions'
});

export const BUSINESS_AUTHORIZATION_ROLES = Object.freeze({
  CUSTOMER: 'Customer',
  OPERATOR: 'Operator',
  MANAGER: 'Manager',
  AUDITOR: 'Auditor'
});

export const TECHNICAL_AUTHORIZATION_ROLES = Object.freeze({
  DEVELOPER: 'Developer',
  PLATFORM_ENGINEER: 'Platform Engineer',
  SECURITY_ADMINISTRATOR: 'Security Administrator',
  AI_ADMINISTRATOR: 'AI Administrator'
});

export const ATTRIBUTE_AUTHORIZATION_GROUPS = Object.freeze({
  IDENTITY: 'Identity',
  RESOURCE: 'Resource',
  REQUEST: 'Request'
});

export const SERVICE_AUTHORIZATION_CHECKS = Object.freeze({
  CALLER_IDENTITY: 'caller-identity',
  REQUESTED_OPERATION: 'requested-operation',
  RESOURCE_OWNERSHIP: 'resource-ownership',
  BUSINESS_RULES: 'business-rules'
});

export const AI_AUTHORIZATION_CAPABILITIES = Object.freeze({
  PROMPT_EXECUTION: 'prompt-execution',
  MODEL_SELECTION: 'model-selection',
  KNOWLEDGE_RETRIEVAL: 'knowledge-retrieval',
  TOOL_INVOCATION: 'tool-invocation',
  AGENT_DELEGATION: 'agent-delegation',
  MEMORY_ACCESS: 'memory-access'
});

export const ADMINISTRATIVE_AUTHORIZATION_OPERATIONS = Object.freeze({
  INFRASTRUCTURE_MANAGEMENT: 'infrastructure-management',
  DEPLOYMENT: 'deployment',
  SECRET_MANAGEMENT: 'secret-management',
  SECURITY_CONFIGURATION: 'security-configuration',
  USER_ADMINISTRATION: 'user-administration'
});

export const DELEGATED_AUTHORIZATION_REQUIREMENTS = Object.freeze({
  EXPLICIT: 'explicit',
  TIME_LIMITED: 'time-limited',
  ACCOUNTABLE: 'accountable',
  AUDITABLE: 'auditable'
});

export const AUTHORIZATION_OBSERVABILITY_EVENTS = Object.freeze({
  ACCESS_GRANTS: 'access-grants',
  ACCESS_DENIALS: 'access-denials',
  POLICY_EVALUATIONS: 'policy-evaluations',
  ADMINISTRATIVE_OVERRIDES: 'administrative-overrides',
  DELEGATION_EVENTS: 'delegation-events',
  PERMISSION_CHANGES: 'permission-changes'
});

export const AUTHORIZATION_GOVERNANCE_CONTROLS = Object.freeze({
  PERMISSION_REVIEWS: 'permission-reviews',
  ROLE_MANAGEMENT: 'role-management',
  POLICY_VALIDATION: 'policy-validation',
  SEPARATION_OF_DUTY_ANALYSIS: 'separation-of-duty-analysis',
  ACCESS_AUDITS: 'access-audits',
  PERIODIC_RECERTIFICATION: 'periodic-recertification'
});

export const FUTURE_AUTHORIZATION_CAPABILITIES = Object.freeze({
  RISK_ADAPTIVE_AUTHORIZATION: 'Risk-adaptive authorization',
  RELATIONSHIP_BASED_ACCESS_CONTROL: 'Relationship-based access control',
  CONTINUOUS_AUTHORIZATION: 'Continuous authorization',
  AI_ASSISTED_POLICY_ANALYSIS: 'AI-assisted policy analysis',
  POLICY_AS_CODE: 'Policy-as-code',
  AUTONOMOUS_PERMISSION_REVIEWS: 'Autonomous permission reviews',
  CONTEXT_AWARE_AUTHORIZATION: 'Context-aware authorization',
  PREDICTIVE_ACCESS_RECOMMENDATIONS: 'Predictive access recommendations'
});
