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
  DATA_SHARING_RETENTION_POLICY_INVALID: 'SECURITY_ARCHITECTURE_DATA_SHARING_RETENTION_POLICY_INVALID'
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
