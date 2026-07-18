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
  AUTHORIZATION_DELEGATION_INVALID: 'SECURITY_ARCHITECTURE_AUTHORIZATION_DELEGATION_INVALID',
  ZERO_TRUST_ARCHITECTURE_INVALID: 'SECURITY_ARCHITECTURE_ZERO_TRUST_INVALID',
  ZERO_TRUST_EVALUATION_INVALID: 'SECURITY_ARCHITECTURE_ZERO_TRUST_EVALUATION_INVALID',
  ZERO_TRUST_BOUNDARY_INVALID: 'SECURITY_ARCHITECTURE_ZERO_TRUST_BOUNDARY_INVALID',
  SECRETS_KEY_MANAGEMENT_INVALID: 'SECURITY_ARCHITECTURE_SECRETS_KEY_MANAGEMENT_INVALID',
  SECRET_LIFECYCLE_INVALID: 'SECURITY_ARCHITECTURE_SECRET_LIFECYCLE_INVALID',
  KEY_LIFECYCLE_INVALID: 'SECURITY_ARCHITECTURE_KEY_LIFECYCLE_INVALID',
  SECRET_DISTRIBUTION_INVALID: 'SECURITY_ARCHITECTURE_SECRET_DISTRIBUTION_INVALID',
  CRYPTOGRAPHY_DATA_PROTECTION_INVALID: 'SECURITY_ARCHITECTURE_CRYPTOGRAPHY_DATA_PROTECTION_INVALID',
  DATA_PROTECTION_PROFILE_INVALID: 'SECURITY_ARCHITECTURE_DATA_PROTECTION_PROFILE_INVALID',
  CRYPTOGRAPHIC_PROTECTION_POLICY_INVALID: 'SECURITY_ARCHITECTURE_CRYPTOGRAPHIC_PROTECTION_POLICY_INVALID',
  DATA_SHARING_RETENTION_POLICY_INVALID: 'SECURITY_ARCHITECTURE_DATA_SHARING_RETENTION_POLICY_INVALID',
  AI_SECURITY_ARCHITECTURE_INVALID: 'SECURITY_ARCHITECTURE_AI_SECURITY_INVALID',
  AI_SECURITY_PROFILE_INVALID: 'SECURITY_ARCHITECTURE_AI_SECURITY_PROFILE_INVALID',
  AI_TOOL_INVOCATION_POLICY_INVALID: 'SECURITY_ARCHITECTURE_AI_TOOL_INVOCATION_POLICY_INVALID',
  AI_GOVERNANCE_POLICY_INVALID: 'SECURITY_ARCHITECTURE_AI_GOVERNANCE_POLICY_INVALID',
  PLATFORM_SUPPLY_CHAIN_SECURITY_INVALID: 'SECURITY_ARCHITECTURE_PLATFORM_SUPPLY_CHAIN_SECURITY_INVALID',
  SOFTWARE_DELIVERY_SECURITY_PROFILE_INVALID: 'SECURITY_ARCHITECTURE_SOFTWARE_DELIVERY_SECURITY_PROFILE_INVALID',
  DEPENDENCY_ARTIFACT_GOVERNANCE_INVALID: 'SECURITY_ARCHITECTURE_DEPENDENCY_ARTIFACT_GOVERNANCE_INVALID',
  PLATFORM_OPERATIONAL_SECURITY_INVALID: 'SECURITY_ARCHITECTURE_PLATFORM_OPERATIONAL_SECURITY_INVALID',
  COMPLIANCE_GOVERNANCE_INVALID: 'SECURITY_ARCHITECTURE_COMPLIANCE_GOVERNANCE_INVALID',
  SECURITY_GOVERNANCE_PROFILE_INVALID: 'SECURITY_ARCHITECTURE_SECURITY_GOVERNANCE_PROFILE_INVALID',
  AUDIT_COMPLIANCE_POLICY_INVALID: 'SECURITY_ARCHITECTURE_AUDIT_COMPLIANCE_POLICY_INVALID',
  GOVERNANCE_IMPROVEMENT_POLICY_INVALID: 'SECURITY_ARCHITECTURE_GOVERNANCE_IMPROVEMENT_POLICY_INVALID'
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

export const ZERO_TRUST_OBJECTIVES = Object.freeze({
  CONTINUOUS_VERIFICATION: 'continuous-verification',
  EXPLICIT_TRUST_EVALUATION: 'explicit-trust-evaluation',
  REDUCED_ATTACK_SURFACE: 'reduced-attack-surface',
  LEAST_PRIVILEGE_ENFORCEMENT: 'least-privilege-enforcement',
  SECURE_SERVICE_COMMUNICATION: 'secure-service-communication',
  STRONG_WORKLOAD_ISOLATION: 'strong-workload-isolation',
  ADAPTIVE_SECURITY: 'adaptive-security',
  ENTERPRISE_RESILIENCE: 'enterprise-resilience'
});

export const ZERO_TRUST_PRINCIPLES = Object.freeze({
  VERIFY_EXPLICITLY: 'verify-explicitly',
  LEAST_PRIVILEGE: 'least-privilege',
  ASSUME_BREACH: 'assume-breach',
  CONTINUOUS_VALIDATION: 'continuous-validation'
});

export const TRUST_LIFECYCLE_STAGES = Object.freeze({
  ESTABLISHED: 'Established',
  EVALUATED: 'Evaluated',
  MAINTAINED: 'Maintained',
  REVOKED: 'Revoked'
});

export const ZERO_TRUST_DECISION_FLOW_STAGES = Object.freeze({
  REQUEST: 'Request',
  IDENTITY_VERIFICATION: 'Identity Verification',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  CONTEXT_EVALUATION: 'Context Evaluation',
  RISK_ASSESSMENT: 'Risk Assessment',
  POLICY_DECISION: 'Policy Decision',
  ACCESS_OUTCOME: 'Access Granted or Denied'
});

export const ZERO_TRUST_BOUNDARY_NAMES = Object.freeze({
  CLIENT_EDGE: 'Client to Edge',
  EDGE_GATEWAY: 'Edge to Gateway',
  GATEWAY_SERVICES: 'Gateway to Services',
  SERVICE_SERVICE: 'Service to Service',
  SERVICE_AI: 'Service to AI',
  AI_KNOWLEDGE_SOURCES: 'AI to Knowledge Sources',
  SERVICE_DATA: 'Service to Data',
  PLATFORM_THIRD_PARTY_SYSTEMS: 'Platform to Third-party Systems',
  OPERATIONS_PRODUCTION: 'Operations to Production'
});

export const ZERO_TRUST_SUBJECT_TYPES = Object.freeze({
  HUMAN: 'human',
  SERVICE: 'service',
  AI_COMPONENT: 'ai-component',
  DEVICE: 'device',
  WORKLOAD: 'workload',
  NETWORK: 'network',
  DATA: 'data'
});

export const HUMAN_TRUST_REQUIREMENTS = Object.freeze({
  AUTHENTICATION: 'authentication',
  SESSION_VALIDATION: 'session-validation',
  RISK_EVALUATION: 'risk-evaluation',
  PRIVILEGE_VERIFICATION: 'privilege-verification'
});

export const SERVICE_TRUST_REQUIREMENTS = Object.freeze({
  CALLING_SERVICE_IDENTITY: 'calling-service-identity',
  REQUESTED_OPERATION: 'requested-operation',
  AUTHORIZATION: 'authorization',
  COMMUNICATION_INTEGRITY: 'communication-integrity'
});

export const AI_TRUST_REQUIREMENTS = Object.freeze({
  AUTHENTICATE: 'authenticate',
  AUTHORIZE_REQUESTS: 'authorize-requests',
  ASSIGNED_PERMISSIONS: 'assigned-permissions',
  AUDITABLE_ACTIONS: 'auditable-actions'
});

export const DEVICE_TRUST_FACTORS = Object.freeze({
  DEVICE_REGISTRATION: 'device-registration',
  SECURITY_POSTURE: 'security-posture',
  COMPLIANCE_STATUS: 'compliance-status',
  PLATFORM_INTEGRITY: 'platform-integrity'
});

export const WORKLOAD_TRUST_IDENTITIES = Object.freeze({
  BACKGROUND_JOBS: 'background-jobs',
  SCHEDULED_PROCESSES: 'scheduled-processes',
  BATCH_OPERATIONS: 'batch-operations',
  EVENT_PROCESSORS: 'event-processors'
});

export const DATA_TRUST_RESOURCES = Object.freeze({
  CUSTOMER_INFORMATION: 'customer-information',
  FINANCIAL_RECORDS: 'financial-records',
  CONFIGURATION: 'configuration',
  AI_KNOWLEDGE: 'ai-knowledge',
  OPERATIONAL_TELEMETRY: 'operational-telemetry',
  ADMINISTRATIVE_DATA: 'administrative-data'
});

export const ZERO_TRUST_CONTEXT_GROUPS = Object.freeze({
  IDENTITY_CONTEXT: 'identity-context',
  OPERATIONAL_CONTEXT: 'operational-context',
  SECURITY_CONTEXT: 'security-context'
});

export const ZERO_TRUST_RISK_FACTORS = Object.freeze({
  SENSITIVE_RESOURCES: 'sensitive-resources',
  ADMINISTRATIVE_OPERATIONS: 'administrative-operations',
  UNUSUAL_REQUEST_PATTERNS: 'unusual-request-patterns',
  HIGH_VALUE_TRANSACTIONS: 'high-value-transactions',
  ELEVATED_PRIVILEGES: 'elevated-privileges'
});

export const ZERO_TRUST_SESSION_REQUIREMENTS = Object.freeze({
  REAUTHENTICATION: 'reauthentication',
  POLICY_REEVALUATION: 'policy-reevaluation',
  PERMISSION_VALIDATION: 'permission-validation',
  EXPLICIT_TERMINATION: 'explicit-termination'
});

export const SERVICE_TO_SERVICE_TRUST_REQUIREMENTS = Object.freeze({
  VERIFIED_CALLER_IDENTITY: 'verified-caller-identity',
  SECURE_COMMUNICATION: 'secure-communication',
  AUTHORIZATION_EVALUATION: 'authorization-evaluation',
  AUDIT_LOGGING: 'audit-logging'
});

export const ZERO_TRUST_OBSERVABILITY_EVENTS = Object.freeze({
  AUTHENTICATION_EVENTS: 'authentication-events',
  AUTHORIZATION_DECISIONS: 'authorization-decisions',
  TRUST_EVALUATIONS: 'trust-evaluations',
  RISK_ASSESSMENTS: 'risk-assessments',
  POLICY_VIOLATIONS: 'policy-violations',
  SESSION_LIFECYCLE: 'session-lifecycle',
  SERVICE_COMMUNICATION: 'service-communication'
});

export const ZERO_TRUST_GOVERNANCE_ACTIVITIES = Object.freeze({
  TRUST_POLICY_MANAGEMENT: 'trust-policy-management',
  IDENTITY_GOVERNANCE: 'identity-governance',
  AUTHORIZATION_REVIEWS: 'authorization-reviews',
  RISK_ASSESSMENTS: 'risk-assessments',
  SECURITY_AUDITS: 'security-audits',
  CONTINUOUS_POLICY_IMPROVEMENT: 'continuous-policy-improvement'
});

export const FUTURE_ZERO_TRUST_CAPABILITIES = Object.freeze({
  CONTINUOUS_ADAPTIVE_TRUST_SCORING: 'Continuous adaptive trust scoring',
  AI_ASSISTED_POLICY_EVALUATION: 'AI-assisted policy evaluation',
  AUTONOMOUS_TRUST_DECISIONS: 'Autonomous trust decisions',
  BEHAVIORAL_ANOMALY_DETECTION: 'Behavioral anomaly detection',
  DYNAMIC_MICRO_SEGMENTATION: 'Dynamic micro-segmentation',
  REAL_TIME_RISK_ADAPTATION: 'Real-time risk adaptation',
  CONFIDENTIAL_COMPUTING_INTEGRATION: 'Confidential computing integration',
  POST_QUANTUM_TRUST_MECHANISMS: 'Post-quantum trust mechanisms'
});

export const SECRETS_KEY_MANAGEMENT_OBJECTIVES = Object.freeze({
  SECURE_SECRET_STORAGE: 'secure-secret-storage',
  CONTROLLED_SECRET_DISTRIBUTION: 'controlled-secret-distribution',
  AUTOMATED_ROTATION: 'automated-rotation',
  STRONG_KEY_GOVERNANCE: 'strong-key-governance',
  COMPLETE_AUDITABILITY: 'complete-auditability',
  MINIMAL_SECRET_EXPOSURE: 'minimal-secret-exposure',
  LEAST_PRIVILEGE: 'least-privilege',
  VENDOR_NEUTRALITY: 'vendor-neutrality'
});

export const SECRET_CATEGORY_NAMES = Object.freeze({
  USER_CREDENTIALS: 'User Credentials',
  SERVICE_CREDENTIALS: 'Service Credentials',
  API_CREDENTIALS: 'API Credentials',
  CERTIFICATES: 'Certificates',
  ENCRYPTION_KEYS: 'Encryption Keys',
  SIGNING_KEYS: 'Signing Keys',
  INFRASTRUCTURE_SECRETS: 'Infrastructure Secrets',
  AI_SECRETS: 'AI Secrets'
});

export const SECRET_EXAMPLE_GROUPS = Object.freeze({
  AUTHENTICATION: 'Authentication',
  PLATFORM: 'Platform',
  INFRASTRUCTURE: 'Infrastructure',
  CRYPTOGRAPHY: 'Cryptography',
  AI: 'AI'
});

export const SECRET_OWNERSHIP_RESPONSIBILITIES = Object.freeze({
  CREATION: 'creation',
  ROTATION: 'rotation',
  DISTRIBUTION: 'distribution',
  REVOCATION: 'revocation',
  RETIREMENT: 'retirement',
  AUDIT_REVIEW: 'audit-review'
});

export const SECRET_LIFECYCLE_STAGES = Object.freeze({
  GENERATE: 'Generate',
  VALIDATE: 'Validate',
  STORE: 'Store',
  DISTRIBUTE: 'Distribute',
  USE: 'Use',
  ROTATE: 'Rotate',
  REVOKE: 'Revoke',
  RETIRE: 'Retire'
});

export const SECRET_GENERATION_REQUIREMENTS = Object.freeze({
  UNIQUE: 'unique',
  HIGH_ENTROPY: 'high-entropy',
  NON_PREDICTABLE: 'non-predictable',
  PURPOSE_SPECIFIC: 'purpose-specific'
});

export const PROHIBITED_SECRET_STORAGE_LOCATIONS = Object.freeze({
  SOURCE_CODE: 'source-code',
  APPLICATION_BINARIES: 'application-binaries',
  CONTAINER_IMAGES: 'container-images',
  DEPLOYMENT_TEMPLATES: 'deployment-templates',
  VERSION_CONTROL_SYSTEMS: 'version-control-systems',
  DOCUMENTATION: 'documentation'
});

export const SECRET_DISTRIBUTION_REQUIREMENTS = Object.freeze({
  AUTHORIZED_WORKLOADS_ONLY: 'authorized-workloads-only',
  SPECIFIC_REQUIRED_SECRETS: 'specific-required-secrets',
  JUST_IN_TIME: 'just-in-time',
  LIMITED_DURATION: 'limited-duration',
  AVOID_DUPLICATION: 'avoid-duplication'
});

export const SECRET_USAGE_REQUIREMENTS = Object.freeze({
  ACCESS_WHEN_NEEDED: 'access-when-needed',
  MEMORY_MINIMIZATION: 'memory-minimization',
  AVOID_LOGGING: 'avoid-logging',
  AVOID_SERIALIZATION: 'avoid-serialization',
  NO_DIAGNOSTIC_OUTPUT: 'no-diagnostic-output'
});

export const SECRET_ROTATION_TRIGGERS = Object.freeze({
  SCHEDULED_POLICY: 'scheduled-policy',
  PERSONNEL_CHANGES: 'personnel-changes',
  SECURITY_INCIDENTS: 'security-incidents',
  CREDENTIAL_COMPROMISE: 'credential-compromise',
  COMPLIANCE_REQUIREMENTS: 'compliance-requirements'
});

export const SECRET_REVOCATION_REQUIREMENTS = Object.freeze({
  IMMEDIATE_INVALIDATION: 'immediate-invalidation',
  CONTROLLED_REPLACEMENT: 'controlled-replacement',
  OPERATIONAL_CONTINUITY: 'operational-continuity',
  AUDIT_RECORDING: 'audit-recording'
});

export const CRYPTOGRAPHIC_KEY_TYPES = Object.freeze({
  ENCRYPTION_KEYS: 'encryption-keys',
  SIGNING_KEYS: 'signing-keys',
  CERTIFICATE_KEYS: 'certificate-keys',
  IDENTITY_KEYS: 'identity-keys',
  SERVICE_AUTHENTICATION_KEYS: 'service-authentication-keys'
});

export const KEY_LIFECYCLE_STAGES = Object.freeze({
  GENERATE: 'Generate',
  ACTIVATE: 'Activate',
  USE: 'Use',
  ROTATE: 'Rotate',
  ARCHIVE: 'Archive',
  DESTROY: 'Destroy'
});

export const KEY_PURPOSES = Object.freeze({
  DATA_ENCRYPTION: 'data-encryption',
  TRANSPORT_SECURITY: 'transport-security',
  DIGITAL_SIGNATURES: 'digital-signatures',
  SERVICE_AUTHENTICATION: 'service-authentication',
  BACKUP_ENCRYPTION: 'backup-encryption'
});

export const AI_SECRET_ACCESS_TARGETS = Object.freeze({
  EXTERNAL_MODEL_PROVIDERS: 'external-model-providers',
  KNOWLEDGE_REPOSITORIES: 'knowledge-repositories',
  TOOL_INTEGRATIONS: 'tool-integrations',
  WORKFLOW_SERVICES: 'workflow-services',
  RETRIEVAL_SYSTEMS: 'retrieval-systems'
});

export const SECRET_ENVIRONMENT_NAMES = Object.freeze({
  DEVELOPMENT: 'Development',
  TESTING: 'Testing',
  STAGING: 'Staging',
  PRODUCTION: 'Production'
});

export const SECRET_ADMINISTRATIVE_CONTROLS = Object.freeze({
  MULTI_PARTY_APPROVAL: 'multi-party-approval',
  AUDIT_LOGGING: 'audit-logging',
  SEPARATION_OF_DUTIES: 'separation-of-duties',
  CHANGE_MANAGEMENT: 'change-management',
  EMERGENCY_REVOCATION: 'emergency-revocation'
});

export const SECRET_OBSERVABILITY_EVENTS = Object.freeze({
  SECRET_CREATION: 'secret-creation',
  SECRET_ROTATION: 'secret-rotation',
  ACCESS_REQUESTS: 'access-requests',
  FAILED_ACCESS_ATTEMPTS: 'failed-access-attempts',
  REVOCATIONS: 'revocations',
  KEY_LIFECYCLE_EVENTS: 'key-lifecycle-events'
});

export const SECRET_GOVERNANCE_ACTIVITIES = Object.freeze({
  OWNERSHIP_REVIEWS: 'ownership-reviews',
  ROTATION_VALIDATION: 'rotation-validation',
  LIFECYCLE_AUDITS: 'lifecycle-audits',
  COMPLIANCE_VERIFICATION: 'compliance-verification',
  POLICY_ENFORCEMENT: 'policy-enforcement',
  INVENTORY_MANAGEMENT: 'inventory-management'
});

export const SECRETS_RELATIONSHIP_FLOW_STAGES = Object.freeze({
  IDENTITY: 'Identity',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  ZERO_TRUST: 'Zero Trust',
  SECRETS: 'Secrets',
  PROTECTED_COMMUNICATION: 'Protected Communication'
});

export const FUTURE_SECRETS_KEY_MANAGEMENT_CAPABILITIES = Object.freeze({
  AUTOMATED_SECRET_ROTATION: 'Automated secret rotation',
  SHORT_LIVED_DYNAMIC_CREDENTIALS: 'Short-lived dynamic credentials',
  HARDWARE_BACKED_KEY_PROTECTION: 'Hardware-backed key protection',
  CONFIDENTIAL_COMPUTING_INTEGRATION: 'Confidential computing integration',
  AI_ASSISTED_SECRET_ANOMALY_DETECTION: 'AI-assisted secret anomaly detection',
  AUTONOMOUS_CREDENTIAL_REVOCATION: 'Autonomous credential revocation',
  POST_QUANTUM_KEY_MANAGEMENT: 'Post-quantum key management',
  POLICY_DRIVEN_SECRET_ORCHESTRATION: 'Policy-driven secret orchestration'
});

export const CRYPTOGRAPHY_DATA_PROTECTION_OBJECTIVES = Object.freeze({
  CONFIDENTIALITY: 'confidentiality',
  INTEGRITY: 'integrity',
  AUTHENTICITY: 'authenticity',
  NON_REPUDIATION: 'non-repudiation',
  PRIVACY: 'privacy',
  SECURE_INFORMATION_SHARING: 'secure-information-sharing',
  REGULATORY_COMPLIANCE: 'regulatory-compliance',
  LONG_TERM_RESILIENCE: 'long-term-resilience'
});

export const CRYPTOGRAPHY_PHILOSOPHY_OBJECTIVES = Object.freeze({
  PROTECT_SENSITIVE_INFORMATION: 'protect-sensitive-information',
  PREVENT_UNAUTHORIZED_DISCLOSURE: 'prevent-unauthorized-disclosure',
  DETECT_UNAUTHORIZED_MODIFICATION: 'detect-unauthorized-modification',
  VERIFY_AUTHENTICITY: 'verify-authenticity',
  SUPPORT_SECURE_COMMUNICATION: 'support-secure-communication',
  ENABLE_TRUSTED_DIGITAL_OPERATIONS: 'enable-trusted-digital-operations'
});

export const INFORMATION_CLASSIFICATION_LEVELS = Object.freeze({
  PUBLIC: 'Public',
  INTERNAL: 'Internal',
  CONFIDENTIAL: 'Confidential',
  RESTRICTED: 'Restricted'
});

export const CLASSIFICATION_INFLUENCES = Object.freeze({
  STORAGE_REQUIREMENTS: 'storage-requirements',
  ACCESS_CONTROLS: 'access-controls',
  ENCRYPTION_REQUIREMENTS: 'encryption-requirements',
  RETENTION_POLICIES: 'retention-policies',
  MONITORING_REQUIREMENTS: 'monitoring-requirements'
});

export const DATA_CATEGORY_NAMES = Object.freeze({
  BUSINESS_DATA: 'Business Data',
  PLATFORM_DATA: 'Platform Data',
  SECURITY_DATA: 'Security Data',
  AI_DATA: 'AI Data'
});

export const DATA_LIFECYCLE_STAGES = Object.freeze({
  CREATE: 'Create',
  STORE: 'Store',
  USE: 'Use',
  SHARE: 'Share',
  ARCHIVE: 'Archive',
  RETAIN: 'Retain',
  DISPOSE: 'Dispose'
});

export const ENCRYPTION_COVERAGE_AREAS = Object.freeze({
  STORED_INFORMATION: 'stored-information',
  DATA_IN_TRANSIT: 'data-in-transit',
  BACKUP_MEDIA: 'backup-media',
  ADMINISTRATIVE_COMMUNICATION: 'administrative-communication',
  INTER_SERVICE_COMMUNICATION: 'inter-service-communication',
  EXTERNAL_INTEGRATIONS: 'external-integrations'
});

export const DATA_AT_REST_LOCATIONS = Object.freeze({
  DATABASES: 'databases',
  OBJECT_STORAGE: 'object-storage',
  BACKUPS: 'backups',
  AI_KNOWLEDGE_REPOSITORIES: 'ai-knowledge-repositories',
  CONFIGURATION_REPOSITORIES: 'configuration-repositories'
});

export const DATA_IN_TRANSIT_CHANNELS = Object.freeze({
  CLIENT_COMMUNICATION: 'client-communication',
  SERVICE_TO_SERVICE_COMMUNICATION: 'service-to-service-communication',
  AI_SERVICE_INTERACTION: 'ai-service-interaction',
  EXTERNAL_INTEGRATIONS: 'external-integrations',
  ADMINISTRATIVE_OPERATIONS: 'administrative-operations'
});

export const INTEGRITY_PROTECTION_TARGETS = Object.freeze({
  BUSINESS_TRANSACTIONS: 'business-transactions',
  CONFIGURATION: 'configuration',
  DEPLOYMENT_ARTIFACTS: 'deployment-artifacts',
  AUDIT_LOGS: 'audit-logs',
  AI_OUTPUTS: 'ai-outputs',
  KNOWLEDGE_REPOSITORIES: 'knowledge-repositories'
});

export const AUTHENTICITY_TARGETS = Object.freeze({
  SERVICE_COMMUNICATION: 'service-communication',
  ADMINISTRATIVE_ACTIONS: 'administrative-actions',
  SOFTWARE_ARTIFACTS: 'software-artifacts',
  AI_GENERATED_OUTPUTS: 'ai-generated-outputs',
  SYSTEM_NOTIFICATIONS: 'system-notifications'
});

export const DIGITAL_SIGNATURE_CAPABILITIES = Object.freeze({
  MESSAGE_AUTHENTICITY: 'message-authenticity',
  INTEGRITY_VALIDATION: 'integrity-validation',
  SOFTWARE_VERIFICATION: 'software-verification',
  ARTIFACT_VERIFICATION: 'artifact-verification',
  ADMINISTRATIVE_APPROVALS: 'administrative-approvals'
});

export const DATA_MINIMIZATION_BENEFITS = Object.freeze({
  REDUCED_PRIVACY_RISK: 'reduced-privacy-risk',
  LOWER_STORAGE_COSTS: 'lower-storage-costs',
  SIMPLIFIED_COMPLIANCE: 'simplified-compliance',
  SMALLER_ATTACK_SURFACE: 'smaller-attack-surface'
});

export const PRIVACY_PROTECTION_PRINCIPLES = Object.freeze({
  PURPOSE_LIMITATION: 'purpose-limitation',
  TRANSPARENCY: 'transparency',
  DATA_MINIMIZATION: 'data-minimization',
  CONTROLLED_ACCESS: 'controlled-access',
  RETENTION_MANAGEMENT: 'retention-management',
  SECURE_DISPOSAL: 'secure-disposal'
});

export const AI_DATA_PROTECTION_ASSETS = Object.freeze({
  USER_PROMPTS: 'user-prompts',
  AI_RESPONSES: 'ai-responses',
  EMBEDDINGS: 'embeddings',
  RETRIEVED_KNOWLEDGE: 'retrieved-knowledge',
  AGENT_MEMORY: 'agent-memory',
  TOOL_EXECUTION_RESULTS: 'tool-execution-results'
});

export const DATA_SHARING_DECISION_FACTORS = Object.freeze({
  RECIPIENT_IDENTITY: 'recipient-identity',
  INFORMATION_CLASSIFICATION: 'information-classification',
  BUSINESS_PURPOSE: 'business-purpose',
  LEGAL_OBLIGATIONS: 'legal-obligations',
  ORGANIZATIONAL_POLICY: 'organizational-policy'
});

export const RETENTION_JUSTIFICATIONS = Object.freeze({
  BUSINESS_OPERATIONS: 'business-operations',
  LEGAL_OBLIGATIONS: 'legal-obligations',
  REGULATORY_REQUIREMENTS: 'regulatory-requirements',
  SECURITY_INVESTIGATIONS: 'security-investigations',
  ORGANIZATIONAL_POLICY: 'organizational-policy'
});

export const SECURE_DISPOSAL_TARGETS = Object.freeze({
  DATABASES: 'databases',
  STORAGE_MEDIA: 'storage-media',
  BACKUPS: 'backups',
  AI_MEMORY: 'ai-memory',
  TEMPORARY_FILES: 'temporary-files',
  CRYPTOGRAPHIC_MATERIAL: 'cryptographic-material'
});

export const DATA_PROTECTION_OBSERVABILITY_EVENTS = Object.freeze({
  ENCRYPTION_EVENTS: 'encryption-events',
  INTEGRITY_VERIFICATION: 'integrity-verification',
  SIGNATURE_VALIDATION: 'signature-validation',
  PROTECTED_DATA_ACCESS: 'protected-data-access',
  RETENTION_ACTIONS: 'retention-actions',
  SECURE_DISPOSAL_ACTIVITIES: 'secure-disposal-activities'
});

export const DATA_PROTECTION_GOVERNANCE_ACTIVITIES = Object.freeze({
  INFORMATION_CLASSIFICATION_REVIEWS: 'information-classification-reviews',
  DATA_PROTECTION_AUDITS: 'data-protection-audits',
  PRIVACY_ASSESSMENTS: 'privacy-assessments',
  RETENTION_POLICY_REVIEWS: 'retention-policy-reviews',
  CRYPTOGRAPHIC_GOVERNANCE: 'cryptographic-governance',
  COMPLIANCE_VALIDATION: 'compliance-validation'
});

export const CRYPTOGRAPHY_RELATIONSHIP_FLOW_STAGES = Object.freeze({
  IDENTITY: 'Identity',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  ZERO_TRUST: 'Zero Trust',
  SECRETS_KEYS: 'Secrets & Keys',
  CRYPTOGRAPHY: 'Cryptography',
  PROTECTED_INFORMATION: 'Protected Information'
});

export const FUTURE_CRYPTOGRAPHY_DATA_PROTECTION_CAPABILITIES = Object.freeze({
  CONFIDENTIAL_COMPUTING: 'Confidential computing',
  PRIVACY_PRESERVING_ANALYTICS: 'Privacy-preserving analytics',
  HOMOMORPHIC_ENCRYPTION: 'Homomorphic encryption',
  SECURE_MULTI_PARTY_COMPUTATION: 'Secure multi-party computation',
  AUTOMATED_DATA_CLASSIFICATION: 'Automated data classification',
  AI_ASSISTED_PRIVACY_ENFORCEMENT: 'AI-assisted privacy enforcement',
  POST_QUANTUM_CRYPTOGRAPHY: 'Post-quantum cryptography',
  AUTONOMOUS_DATA_GOVERNANCE: 'Autonomous data governance'
});

export const AI_SECURITY_OBJECTIVES = Object.freeze({
  SECURE_AI_EXECUTION: 'secure-ai-execution',
  CONTROLLED_INFORMATION_ACCESS: 'controlled-information-access',
  PROTECTED_PROMPT_PROCESSING: 'protected-prompt-processing',
  SAFE_TOOL_INVOCATION: 'safe-tool-invocation',
  TRUSTED_AGENT_COLLABORATION: 'trusted-agent-collaboration',
  AI_ACCOUNTABILITY: 'ai-accountability',
  HUMAN_OVERSIGHT: 'human-oversight',
  ENTERPRISE_RESILIENCE: 'enterprise-resilience'
});

export const AI_SECURITY_PRINCIPLES = Object.freeze({
  AI_AS_SECURITY_SUBJECT: 'ai-as-security-subject',
  LEAST_PRIVILEGE: 'least-privilege',
  HUMAN_ACCOUNTABILITY: 'human-accountability',
  DEFENSE_IN_DEPTH: 'defense-in-depth'
});

export const AI_COMPONENT_IDENTITY_TYPES = Object.freeze({
  AI_ORCHESTRATOR: 'AI Orchestrator',
  PLANNING_AGENT: 'Planning Agent',
  RETRIEVAL_AGENT: 'Retrieval Agent',
  CODING_AGENT: 'Coding Agent',
  ANALYTICS_AGENT: 'Analytics Agent',
  WORKFLOW_AGENT: 'Workflow Agent'
});

export const AI_TRUST_MODEL_STAGES = Object.freeze({
  AI_IDENTITY: 'AI Identity',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  PROMPT_EVALUATION: 'Prompt Evaluation',
  KNOWLEDGE_EVALUATION: 'Knowledge Evaluation',
  TOOL_AUTHORIZATION: 'Tool Authorization',
  EXECUTION: 'Execution',
  AUDIT: 'Audit'
});

export const AI_IDENTITY_CAPABILITIES = Object.freeze({
  AUTHENTICATION: 'authentication',
  AUTHORIZATION: 'authorization',
  AUDITABILITY: 'auditability',
  DELEGATION: 'delegation',
  MONITORING: 'monitoring'
});

export const AI_PROTECTED_OPERATIONS = Object.freeze({
  PROMPT_EXECUTION: 'prompt-execution',
  KNOWLEDGE_RETRIEVAL: 'knowledge-retrieval',
  TOOL_INVOCATION: 'tool-invocation',
  WORKFLOW_EXECUTION: 'workflow-execution',
  MEMORY_ACCESS: 'memory-access',
  ADMINISTRATIVE_ASSISTANCE: 'administrative-assistance'
});

export const PROMPT_SECURITY_CONTROLS = Object.freeze({
  VALIDATION: 'validation',
  SANITIZATION: 'sanitization',
  CONTEXT_ISOLATION: 'context-isolation',
  AUTHORIZATION_CHECKS: 'authorization-checks',
  AUDITABILITY: 'auditability'
});

export const PROMPT_INJECTION_RESISTANCE_CONTROLS = Object.freeze({
  INSTRUCTION_ISOLATION: 'instruction-isolation',
  TRUSTED_SYSTEM_INSTRUCTIONS: 'trusted-system-instructions',
  CONTEXT_SEPARATION: 'context-separation',
  INPUT_VALIDATION: 'input-validation',
  TOOL_AUTHORIZATION: 'tool-authorization',
  KNOWLEDGE_FILTERING: 'knowledge-filtering'
});

export const KNOWLEDGE_PROTECTION_CONTROLS = Object.freeze({
  IDENTITY_VERIFICATION: 'identity-verification',
  AUTHORIZATION: 'authorization',
  INFORMATION_CLASSIFICATION: 'information-classification',
  DATA_MINIMIZATION: 'data-minimization',
  AUDIT_LOGGING: 'audit-logging'
});

export const AGENT_COMMUNICATION_CONTROLS = Object.freeze({
  VERIFIED_IDENTITIES: 'verified-identities',
  AUTHORIZED_DELEGATION: 'authorized-delegation',
  SECURE_MESSAGING: 'secure-messaging',
  CONTROLLED_CONTEXT_SHARING: 'controlled-context-sharing',
  COMPLETE_AUDITABILITY: 'complete-auditability'
});

export const AI_TOOL_CATEGORIES = Object.freeze({
  RESERVATION_SYSTEMS: 'reservation-systems',
  PAYMENT_SERVICES: 'payment-services',
  NOTIFICATION_SERVICES: 'notification-services',
  REPORTING_SYSTEMS: 'reporting-systems',
  EXTERNAL_APIS: 'external-apis'
});

export const AI_TOOL_INVOCATION_REQUIREMENTS = Object.freeze({
  EXPLICIT_AUTHORIZATION: 'explicit-authorization',
  PARAMETER_VALIDATION: 'parameter-validation',
  AUDIT_LOGGING: 'audit-logging',
  ERROR_HANDLING: 'error-handling',
  OPERATIONAL_MONITORING: 'operational-monitoring'
});

export const AI_MEMORY_ASSET_TYPES = Object.freeze({
  CONVERSATION_HISTORY: 'conversation-history',
  USER_PREFERENCES: 'user-preferences',
  WORKFLOW_CONTEXT: 'workflow-context',
  AGENT_STATE: 'agent-state',
  LONG_TERM_KNOWLEDGE: 'long-term-knowledge'
});

export const AI_MEMORY_PROTECTION_CONTROLS = Object.freeze({
  AUTHORIZATION: 'authorization',
  RETENTION: 'retention',
  ENCRYPTION_WHERE_APPROPRIATE: 'encryption-where-appropriate',
  SECURE_DISPOSAL: 'secure-disposal',
  AUDITABILITY: 'auditability'
});

export const MODEL_GOVERNANCE_ACTIVITIES = Object.freeze({
  MODEL_APPROVAL: 'model-approval',
  VERSION_MANAGEMENT: 'version-management',
  RISK_ASSESSMENT: 'risk-assessment',
  CAPABILITY_REVIEW: 'capability-review',
  OPERATIONAL_MONITORING: 'operational-monitoring',
  RETIREMENT_PLANNING: 'retirement-planning'
});

export const AI_SUPPLY_CHAIN_COMPONENTS = Object.freeze({
  FOUNDATION_MODELS: 'foundation-models',
  EMBEDDING_MODELS: 'embedding-models',
  EXTERNAL_APIS: 'external-apis',
  KNOWLEDGE_REPOSITORIES: 'knowledge-repositories',
  PLUGINS: 'plugins',
  AGENT_EXTENSIONS: 'agent-extensions'
});

export const AI_SECURITY_RISK_TYPES = Object.freeze({
  PROMPT_INJECTION: 'prompt-injection',
  UNAUTHORIZED_INFORMATION_DISCLOSURE: 'unauthorized-information-disclosure',
  HALLUCINATED_OUTPUTS: 'hallucinated-outputs',
  UNSAFE_TOOL_EXECUTION: 'unsafe-tool-execution',
  EXCESSIVE_PERMISSIONS: 'excessive-permissions',
  DATA_LEAKAGE: 'data-leakage',
  MODEL_MISUSE: 'model-misuse'
});

export const HUMAN_OVERSIGHT_ACTIVITIES = Object.freeze({
  HIGH_VALUE_TRANSACTIONS: 'high-value-transactions',
  REGULATORY_DECISIONS: 'regulatory-decisions',
  SECURITY_POLICY_CHANGES: 'security-policy-changes',
  PRODUCTION_DEPLOYMENTS: 'production-deployments',
  PRIVILEGED_ADMINISTRATIVE_ACTIONS: 'privileged-administrative-actions'
});

export const AI_SECURITY_OBSERVABILITY_EVENTS = Object.freeze({
  PROMPT_EXECUTION: 'prompt-execution',
  KNOWLEDGE_RETRIEVAL: 'knowledge-retrieval',
  TOOL_INVOCATION: 'tool-invocation',
  AUTHORIZATION_DECISIONS: 'authorization-decisions',
  AGENT_DELEGATION: 'agent-delegation',
  MODEL_SELECTION: 'model-selection',
  SECURITY_VIOLATIONS: 'security-violations'
});

export const AI_SECURITY_GOVERNANCE_ACTIVITIES = Object.freeze({
  SECURITY_POLICY_REVIEWS: 'security-policy-reviews',
  MODEL_RISK_ASSESSMENTS: 'model-risk-assessments',
  AGENT_PERMISSION_REVIEWS: 'agent-permission-reviews',
  PROMPT_GOVERNANCE: 'prompt-governance',
  KNOWLEDGE_GOVERNANCE: 'knowledge-governance',
  COMPLIANCE_VALIDATION: 'compliance-validation',
  OPERATIONAL_AUDITS: 'operational-audits'
});

export const AI_SECURITY_RELATIONSHIP_FLOW_STAGES = Object.freeze({
  IDENTITY: 'Identity',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  ZERO_TRUST: 'Zero Trust',
  SECRETS_KEYS: 'Secrets & Keys',
  CRYPTOGRAPHY: 'Cryptography',
  AI_SECURITY: 'AI Security',
  TRUSTED_AI_OPERATIONS: 'Trusted AI Operations'
});

export const FUTURE_AI_SECURITY_CAPABILITIES = Object.freeze({
  AUTONOMOUS_POLICY_VALIDATION: 'Autonomous policy validation',
  AI_ASSISTED_THREAT_DETECTION: 'AI-assisted threat detection',
  DYNAMIC_TRUST_SCORING_FOR_AGENTS: 'Dynamic trust scoring for agents',
  BEHAVIORAL_ANOMALY_DETECTION: 'Behavioral anomaly detection',
  SECURE_MULTI_AGENT_COORDINATION: 'Secure multi-agent coordination',
  CONFIDENTIAL_AI_EXECUTION: 'Confidential AI execution',
  VERIFIABLE_AI_REASONING: 'Verifiable AI reasoning',
  CRYPTOGRAPHIC_ATTESTATION_OF_AI_OUTPUTS: 'Cryptographic attestation of AI outputs'
});

export const PLATFORM_SUPPLY_CHAIN_SECURITY_OBJECTIVES = Object.freeze({
  TRUSTED_SOFTWARE_DELIVERY: 'trusted-software-delivery',
  SECURE_INFRASTRUCTURE: 'secure-infrastructure',
  VERIFIED_SOFTWARE_ARTIFACTS: 'verified-software-artifacts',
  DEPENDENCY_INTEGRITY: 'dependency-integrity',
  DEPLOYMENT_ASSURANCE: 'deployment-assurance',
  OPERATIONAL_RESILIENCE: 'operational-resilience',
  VENDOR_INDEPENDENCE: 'vendor-independence',
  END_TO_END_TRACEABILITY: 'end-to-end-traceability'
});

export const PLATFORM_SECURITY_DOMAIN_STAGES = Object.freeze({
  SOURCE_CODE: 'Source Code',
  DEPENDENCIES: 'Dependencies',
  BUILD: 'Build',
  ARTIFACTS: 'Artifacts',
  DEPLOYMENT: 'Deployment',
  RUNTIME: 'Runtime',
  OPERATIONS: 'Operations',
  RETIREMENT: 'Retirement'
});

export const SECURE_DEVELOPMENT_PRACTICES = Object.freeze({
  SECURE_CODING_STANDARDS: 'secure-coding-standards',
  CODE_REVIEW: 'code-review',
  CHANGE_TRACEABILITY: 'change-traceability',
  BRANCH_PROTECTION: 'branch-protection',
  CONTROLLED_APPROVALS: 'controlled-approvals',
  SECURITY_TESTING: 'security-testing'
});

export const DEPENDENCY_COMPONENT_TYPES = Object.freeze({
  FRAMEWORKS: 'frameworks',
  LIBRARIES: 'libraries',
  SDKS: 'sdks',
  AI_PACKAGES: 'ai-packages',
  OPERATING_SYSTEM_PACKAGES: 'operating-system-packages',
  BUILD_PLUGINS: 'build-plugins'
});

export const DEPENDENCY_GOVERNANCE_REQUIREMENTS = Object.freeze({
  APPROVED: 'approved',
  VERSIONED: 'versioned',
  REVIEWED: 'reviewed',
  MAINTAINED: 'maintained',
  REPLACEABLE: 'replaceable'
});

export const SBOM_COMPONENT_TYPES = Object.freeze({
  LIBRARIES: 'libraries',
  FRAMEWORKS: 'frameworks',
  RUNTIME_COMPONENTS: 'runtime-components',
  AI_PACKAGES: 'ai-packages',
  THIRD_PARTY_MODULES: 'third-party-modules',
  BUILD_DEPENDENCIES: 'build-dependencies'
});

export const BUILD_SECURITY_REQUIREMENTS = Object.freeze({
  CONTROLLED_INPUTS: 'controlled-inputs',
  VERIFIED_SOURCE: 'verified-source',
  ISOLATED_EXECUTION: 'isolated-execution',
  REPEATABLE_OUTPUTS: 'repeatable-outputs',
  BUILD_TRACEABILITY: 'build-traceability'
});

export const ARTIFACT_TYPES = Object.freeze({
  EXECUTABLES: 'executables',
  PACKAGES: 'packages',
  CONTAINER_IMAGES: 'container-images',
  AI_MODELS: 'ai-models',
  CONFIGURATION_BUNDLES: 'configuration-bundles',
  DEPLOYMENT_MANIFESTS: 'deployment-manifests'
});

export const DEPLOYMENT_INTEGRITY_CONTROLS = Object.freeze({
  APPROVAL_WORKFLOWS: 'approval-workflows',
  INTEGRITY_VERIFICATION: 'integrity-verification',
  VERSION_VALIDATION: 'version-validation',
  CHANGE_TRACKING: 'change-tracking',
  ROLLBACK_CAPABILITY: 'rollback-capability'
});

export const INFRASTRUCTURE_PROTECTION_AREAS = Object.freeze({
  COMPUTE_RESOURCES: 'compute-resources',
  NETWORKING: 'networking',
  STORAGE: 'storage',
  VIRTUALIZATION: 'virtualization',
  ORCHESTRATION: 'orchestration',
  ADMINISTRATIVE_INTERFACES: 'administrative-interfaces'
});

export const RUNTIME_HARDENING_PRACTICES = Object.freeze({
  MINIMAL_SERVICES: 'minimal-services',
  RESTRICTED_ADMINISTRATIVE_ACCESS: 'restricted-administrative-access',
  SECURE_DEFAULTS: 'secure-defaults',
  CONFIGURATION_MANAGEMENT: 'configuration-management',
  CONTINUOUS_PATCHING: 'continuous-patching',
  OPERATIONAL_MONITORING: 'operational-monitoring'
});

export const CONFIGURATION_INTEGRITY_CONTROLS = Object.freeze({
  VERSION_CONTROL: 'version-control',
  AUTHORIZATION: 'authorization',
  CHANGE_REVIEW: 'change-review',
  AUDITABILITY: 'auditability',
  INTEGRITY_VALIDATION: 'integrity-validation'
});

export const THIRD_PARTY_SERVICE_TYPES = Object.freeze({
  PAYMENT_SERVICES: 'payment-services',
  IDENTITY_PROVIDERS: 'identity-providers',
  MESSAGING_PLATFORMS: 'messaging-platforms',
  AI_MODEL_PROVIDERS: 'ai-model-providers',
  ANALYTICS_PLATFORMS: 'analytics-platforms'
});

export const PLATFORM_AI_SUPPLY_CHAIN_COMPONENTS = Object.freeze({
  FOUNDATION_MODELS: 'foundation-models',
  EMBEDDING_MODELS: 'embedding-models',
  PROMPT_LIBRARIES: 'prompt-libraries',
  AGENT_EXTENSIONS: 'agent-extensions',
  RETRIEVAL_PLUGINS: 'retrieval-plugins',
  EXTERNAL_AI_SERVICES: 'external-ai-services'
});

export const PLATFORM_ADMINISTRATIVE_CONTROLS = Object.freeze({
  STRONG_AUTHENTICATION: 'strong-authentication',
  LEAST_PRIVILEGE: 'least-privilege',
  SEPARATION_OF_DUTIES: 'separation-of-duties',
  COMPREHENSIVE_AUDIT_LOGGING: 'comprehensive-audit-logging',
  CONTROLLED_APPROVALS: 'controlled-approvals'
});

export const PLATFORM_SECURITY_OBSERVABILITY_EVENTS = Object.freeze({
  BUILD_EVENTS: 'build-events',
  ARTIFACT_VERIFICATION: 'artifact-verification',
  DEPLOYMENT_APPROVALS: 'deployment-approvals',
  CONFIGURATION_CHANGES: 'configuration-changes',
  DEPENDENCY_UPDATES: 'dependency-updates',
  ADMINISTRATIVE_ACTIONS: 'administrative-actions'
});

export const INCIDENT_CONTAINMENT_ACTIONS = Object.freeze({
  ARTIFACT_WITHDRAWAL: 'artifact-withdrawal',
  DEPLOYMENT_ROLLBACK: 'deployment-rollback',
  DEPENDENCY_REPLACEMENT: 'dependency-replacement',
  CREDENTIAL_ROTATION: 'credential-rotation',
  INFRASTRUCTURE_ISOLATION: 'infrastructure-isolation'
});

export const PLATFORM_SECURITY_GOVERNANCE_ACTIVITIES = Object.freeze({
  DEPENDENCY_REVIEWS: 'dependency-reviews',
  INFRASTRUCTURE_ASSESSMENTS: 'infrastructure-assessments',
  BUILD_PROCESS_VALIDATION: 'build-process-validation',
  CONFIGURATION_AUDITS: 'configuration-audits',
  THIRD_PARTY_RISK_ASSESSMENTS: 'third-party-risk-assessments',
  SOFTWARE_LIFECYCLE_MANAGEMENT: 'software-lifecycle-management'
});

export const PLATFORM_SECURITY_RELATIONSHIP_FLOW_STAGES = Object.freeze({
  IDENTITY: 'Identity',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  ZERO_TRUST: 'Zero Trust',
  SECRETS_KEYS: 'Secrets & Keys',
  CRYPTOGRAPHY: 'Cryptography',
  AI_SECURITY: 'AI Security',
  PLATFORM_SECURITY: 'Platform Security',
  TRUSTED_SOFTWARE_DELIVERY: 'Trusted Software Delivery'
});

export const FUTURE_PLATFORM_SUPPLY_CHAIN_SECURITY_CAPABILITIES = Object.freeze({
  END_TO_END_SOFTWARE_PROVENANCE: 'End-to-end software provenance',
  AUTOMATED_ARTIFACT_ATTESTATION: 'Automated artifact attestation',
  CONTINUOUS_DEPENDENCY_RISK_ANALYSIS: 'Continuous dependency risk analysis',
  AI_ASSISTED_SUPPLY_CHAIN_MONITORING: 'AI-assisted supply chain monitoring',
  POLICY_DRIVEN_DEPLOYMENT_VERIFICATION: 'Policy-driven deployment verification',
  CONFIDENTIAL_BUILD_ENVIRONMENTS: 'Confidential build environments',
  AUTONOMOUS_VULNERABILITY_REMEDIATION: 'Autonomous vulnerability remediation',
  CRYPTOGRAPHIC_VERIFICATION_OF_AI_MODEL_PROVENANCE: 'Cryptographic verification of AI model provenance'
});

export const COMPLIANCE_GOVERNANCE_OBJECTIVES = Object.freeze({
  CLEAR_ACCOUNTABILITY: 'clear-accountability',
  POLICY_CONSISTENCY: 'policy-consistency',
  RISK_VISIBILITY: 'risk-visibility',
  REGULATORY_ALIGNMENT: 'regulatory-alignment',
  AUDIT_READINESS: 'audit-readiness',
  OPERATIONAL_TRANSPARENCY: 'operational-transparency',
  CONTINUOUS_IMPROVEMENT: 'continuous-improvement',
  ENTERPRISE_RESILIENCE: 'enterprise-resilience'
});

export const GOVERNANCE_DOMAIN_STAGES = Object.freeze({
  POLICIES: 'Policies',
  STANDARDS: 'Standards',
  CONTROLS: 'Controls',
  MONITORING: 'Monitoring',
  AUDITING: 'Auditing',
  COMPLIANCE: 'Compliance',
  IMPROVEMENT: 'Improvement'
});

export const GOVERNANCE_PRINCIPLES = Object.freeze({
  ACCOUNTABILITY: 'accountability',
  TRANSPARENCY: 'transparency',
  CONSISTENCY: 'consistency',
  CONTINUOUS_IMPROVEMENT: 'continuous-improvement'
});

export const SECURITY_RESPONSIBILITY_AREAS = Object.freeze({
  IDENTITY_GOVERNANCE: 'identity-governance',
  AI_GOVERNANCE: 'ai-governance',
  INFRASTRUCTURE_GOVERNANCE: 'infrastructure-governance',
  DATA_GOVERNANCE: 'data-governance',
  INCIDENT_MANAGEMENT: 'incident-management',
  COMPLIANCE_OVERSIGHT: 'compliance-oversight'
});

export const TRANSPARENCY_SUPPORT_AREAS = Object.freeze({
  INTERNAL_REVIEW: 'internal-review',
  EXECUTIVE_OVERSIGHT: 'executive-oversight',
  REGULATORY_REPORTING: 'regulatory-reporting',
  CUSTOMER_TRUST: 'customer-trust',
  INCIDENT_INVESTIGATIONS: 'incident-investigations'
});

export const GOVERNANCE_APPLICATION_DOMAINS = Object.freeze({
  BUSINESS_SERVICES: 'business-services',
  AI_SYSTEMS: 'ai-systems',
  INFRASTRUCTURE: 'infrastructure',
  DEVELOPMENT: 'development',
  OPERATIONS: 'operations',
  THIRD_PARTY_INTEGRATIONS: 'third-party-integrations'
});

export const POLICY_MANAGEMENT_STAGES = Object.freeze({
  POLICY_CREATION: 'policy-creation',
  APPROVAL: 'approval',
  PUBLICATION: 'publication',
  REVIEW: 'review',
  REVISION: 'revision',
  RETIREMENT: 'retirement'
});

export const POLICY_CONTROL_HIERARCHY_STAGES = Object.freeze({
  POLICY: 'Policy',
  STANDARD: 'Standard',
  CONTROL: 'Control',
  VERIFICATION: 'Verification'
});

export const RISK_GOVERNANCE_ACTIVITIES = Object.freeze({
  RISK_IDENTIFICATION: 'risk-identification',
  RISK_ANALYSIS: 'risk-analysis',
  RISK_PRIORITIZATION: 'risk-prioritization',
  RISK_TREATMENT: 'risk-treatment',
  RISK_MONITORING: 'risk-monitoring',
  RISK_ACCEPTANCE: 'risk-acceptance'
});

export const COMPLIANCE_OBLIGATION_TYPES = Object.freeze({
  PRIVACY_REGULATIONS: 'privacy-regulations',
  INFORMATION_SECURITY_FRAMEWORKS: 'information-security-frameworks',
  INDUSTRY_STANDARDS: 'industry-standards',
  CUSTOMER_CONTRACTUAL_REQUIREMENTS: 'customer-contractual-requirements',
  INTERNAL_ORGANIZATIONAL_POLICIES: 'internal-organizational-policies'
});

export const AUDIT_EVIDENCE_TYPES = Object.freeze({
  SECURITY_LOGS: 'security-logs',
  CONFIGURATION_HISTORY: 'configuration-history',
  IDENTITY_RECORDS: 'identity-records',
  AUTHORIZATION_DECISIONS: 'authorization-decisions',
  AI_ACTIVITY_RECORDS: 'ai-activity-records',
  DEPLOYMENT_HISTORY: 'deployment-history',
  ADMINISTRATIVE_ACTIONS: 'administrative-actions'
});

export const DATA_GOVERNANCE_ACTIVITIES = Object.freeze({
  DATA_CLASSIFICATION: 'data-classification',
  OWNERSHIP_ASSIGNMENT: 'ownership-assignment',
  RETENTION_POLICIES: 'retention-policies',
  ACCESS_REVIEWS: 'access-reviews',
  PRIVACY_ASSESSMENTS: 'privacy-assessments',
  DISPOSAL_VALIDATION: 'disposal-validation'
});

export const COMPLIANCE_AI_GOVERNANCE_ACTIVITIES = Object.freeze({
  MODEL_APPROVAL: 'model-approval',
  CAPABILITY_ASSESSMENT: 'capability-assessment',
  RISK_CLASSIFICATION: 'risk-classification',
  HUMAN_OVERSIGHT: 'human-oversight',
  PROMPT_GOVERNANCE: 'prompt-governance',
  AGENT_GOVERNANCE: 'agent-governance',
  OPERATIONAL_REVIEW: 'operational-review'
});

export const THIRD_PARTY_GOVERNANCE_CRITERIA = Object.freeze({
  SECURITY_POSTURE: 'security-posture',
  COMPLIANCE_COMMITMENTS: 'compliance-commitments',
  OPERATIONAL_RESILIENCE: 'operational-resilience',
  CONTRACTUAL_OBLIGATIONS: 'contractual-obligations',
  DATA_HANDLING_PRACTICES: 'data-handling-practices'
});

export const SECURITY_METRIC_TYPES = Object.freeze({
  AUTHENTICATION_SUCCESS_RATES: 'authentication-success-rates',
  POLICY_COMPLIANCE: 'policy-compliance',
  INCIDENT_FREQUENCY: 'incident-frequency',
  VULNERABILITY_REMEDIATION_TIME: 'vulnerability-remediation-time',
  SECRET_ROTATION_COMPLIANCE: 'secret-rotation-compliance',
  ACCESS_REVIEW_COMPLETION: 'access-review-completion',
  AI_POLICY_ADHERENCE: 'ai-policy-adherence'
});

export const GOVERNANCE_LIFECYCLE_STAGES = Object.freeze({
  DEFINE: 'Define',
  IMPLEMENT: 'Implement',
  MONITOR: 'Monitor',
  AUDIT: 'Audit',
  IMPROVE: 'Improve',
  REPEAT: 'Repeat'
});

export const INCIDENT_GOVERNANCE_STAGES = Object.freeze({
  DETECTION: 'detection',
  ESCALATION: 'escalation',
  INVESTIGATION: 'investigation',
  COMMUNICATION: 'communication',
  RECOVERY: 'recovery',
  POST_INCIDENT_REVIEW: 'post-incident-review'
});

export const ORGANIZATIONAL_RESPONSIBILITY_ASSIGNMENTS = Object.freeze({
  SECURITY_STRATEGY: 'Security Architecture',
  IDENTITY_GOVERNANCE: 'Identity Platform',
  AI_GOVERNANCE: 'AI Platform',
  INFRASTRUCTURE_GOVERNANCE: 'Platform Operations',
  DATA_GOVERNANCE: 'Data Owners',
  COMPLIANCE_OVERSIGHT: 'Governance Team',
  RISK_MANAGEMENT: 'Security Leadership'
});

export const GOVERNANCE_OBSERVABILITY_EVENTS = Object.freeze({
  POLICY_CHANGES: 'policy-changes',
  ADMINISTRATIVE_ACTIONS: 'administrative-actions',
  AUDIT_EVENTS: 'audit-events',
  COMPLIANCE_STATUS: 'compliance-status',
  RISK_INDICATORS: 'risk-indicators',
  AI_GOVERNANCE_EVENTS: 'ai-governance-events',
  SECURITY_EXCEPTIONS: 'security-exceptions'
});

export const COMPLIANCE_GOVERNANCE_RELATIONSHIP_FLOW_STAGES = Object.freeze({
  IDENTITY: 'Identity',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  ZERO_TRUST: 'Zero Trust',
  SECRETS: 'Secrets',
  CRYPTOGRAPHY: 'Cryptography',
  AI_SECURITY: 'AI Security',
  PLATFORM_SECURITY: 'Platform Security',
  GOVERNANCE: 'Governance',
  CONTINUOUS_IMPROVEMENT: 'Continuous Improvement'
});

export const FUTURE_COMPLIANCE_GOVERNANCE_CAPABILITIES = Object.freeze({
  AI_ASSISTED_COMPLIANCE_VALIDATION: 'AI-assisted compliance validation',
  CONTINUOUS_CONTROL_MONITORING: 'Continuous control monitoring',
  AUTOMATED_POLICY_VERIFICATION: 'Automated policy verification',
  REAL_TIME_RISK_SCORING: 'Real-time risk scoring',
  PREDICTIVE_GOVERNANCE_ANALYTICS: 'Predictive governance analytics',
  AUTONOMOUS_EVIDENCE_COLLECTION: 'Autonomous evidence collection',
  POLICY_AS_CODE_GOVERNANCE: 'Policy-as-code governance',
  ADAPTIVE_COMPLIANCE_REPORTING: 'Adaptive compliance reporting'
});
