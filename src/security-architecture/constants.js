export const SECURITY_ARCHITECTURE_ERROR_CODES = Object.freeze({
  SECURITY_OVERVIEW_INVALID: 'SECURITY_ARCHITECTURE_OVERVIEW_INVALID',
  SECURITY_DOMAIN_INVALID: 'SECURITY_ARCHITECTURE_DOMAIN_INVALID',
  TRUST_BOUNDARY_INVALID: 'SECURITY_ARCHITECTURE_TRUST_BOUNDARY_INVALID',
  SECURITY_RESPONSIBILITY_INVALID: 'SECURITY_ARCHITECTURE_RESPONSIBILITY_INVALID',
  SECURITY_RISK_ASSESSMENT_INVALID: 'SECURITY_ARCHITECTURE_RISK_ASSESSMENT_INVALID'
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
