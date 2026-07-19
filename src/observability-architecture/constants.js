export const OBSERVABILITY_ARCHITECTURE_ERROR_CODES = Object.freeze({
  OBSERVABILITY_OVERVIEW_INVALID: 'OBSERVABILITY_OVERVIEW_INVALID',
  OBSERVABILITY_PRINCIPLES_INVALID: 'OBSERVABILITY_PRINCIPLES_INVALID',
  OBSERVABILITY_DOMAIN_INVALID: 'OBSERVABILITY_DOMAIN_INVALID',
  OBSERVABILITY_PRINCIPLE_INVALID: 'OBSERVABILITY_PRINCIPLE_INVALID',
  OBSERVABILITY_RESPONSIBILITY_INVALID: 'OBSERVABILITY_RESPONSIBILITY_INVALID',
  TELEMETRY_SOURCE_INVALID: 'TELEMETRY_SOURCE_INVALID',
  OPERATIONAL_EVIDENCE_INVALID: 'OPERATIONAL_EVIDENCE_INVALID'
});

export const OBSERVABILITY_OBJECTIVES = Object.freeze({
  ENTERPRISE_TRANSPARENCY: 'enterprise-transparency',
  OPERATIONAL_INTELLIGENCE: 'operational-intelligence',
  BUSINESS_VISIBILITY: 'business-visibility',
  AI_EXPLAINABILITY: 'ai-explainability',
  DISTRIBUTED_DIAGNOSTICS: 'distributed-diagnostics',
  SECURITY_AWARENESS: 'security-awareness',
  GOVERNANCE_SUPPORT: 'governance-support',
  CONTINUOUS_IMPROVEMENT: 'continuous-architectural-improvement'
});

export const OBSERVABILITY_PRINCIPLES = Object.freeze({
  BUSINESS_ORIENTED_VISIBILITY: 'business-oriented-visibility',
  END_TO_END_UNDERSTANDING: 'end-to-end-understanding',
  CROSS_DOMAIN_COVERAGE: 'cross-domain-coverage',
  CONTINUOUS_EVIDENCE: 'continuous-evidence',
  EXPLAINABILITY: 'explainability',
  TECHNOLOGY_INDEPENDENCE: 'technology-independence',
  VENDOR_NEUTRALITY: 'vendor-neutrality'
});

export const OBSERVABILITY_PRINCIPLE_NAMES = Object.freeze({
  BUSINESS_DRIVEN_OBSERVABILITY: 'business-driven-observability',
  OBSERVABILITY_BY_DESIGN: 'observability-by-design',
  END_TO_END_CORRELATION: 'end-to-end-correlation',
  ARCHITECTURAL_CONSISTENCY: 'architectural-consistency',
  EXPLAINABILITY: 'explainability',
  MINIMAL_COUPLING: 'minimal-coupling',
  CONTINUOUS_EVIDENCE: 'continuous-evidence',
  GOVERNANCE_ALIGNMENT: 'governance-alignment',
  PRIVACY_AND_SECURITY: 'privacy-and-security',
  TECHNOLOGY_NEUTRALITY: 'technology-neutrality'
});

export const OBSERVABILITY_PRINCIPLE_OBJECTIVES = Object.freeze({
  CONSISTENT_ARCHITECTURAL_GUIDANCE: 'consistent-architectural-guidance',
  ENTERPRISE_WIDE_VISIBILITY: 'enterprise-wide-visibility',
  EXPLAINABLE_OPERATIONS: 'explainable-operations',
  RELIABLE_DIAGNOSTICS: 'reliable-diagnostics',
  BUSINESS_ALIGNMENT: 'business-alignment',
  GOVERNANCE_SUPPORT: 'governance-support',
  SUSTAINABLE_OBSERVABILITY: 'sustainable-observability',
  TECHNOLOGY_INDEPENDENCE: 'technology-independence'
});

export const OBSERVABILITY_CORRELATION_TARGETS = Object.freeze({
  USERS: 'users',
  BUSINESS_PROCESSES: 'business-processes',
  SERVICES: 'services',
  AI_AGENTS: 'ai-agents',
  WORKFLOWS: 'workflows',
  INTEGRATIONS: 'integrations',
  INFRASTRUCTURE: 'infrastructure'
});

export const OBSERVABILITY_CONSISTENCY_AREAS = Object.freeze({
  NAMING: 'naming',
  BUSINESS_IDENTIFIERS: 'business-identifiers',
  EVENT_CORRELATION: 'event-correlation',
  LIFECYCLE_VISIBILITY: 'lifecycle-visibility',
  OPERATIONAL_REPORTING: 'operational-reporting',
  GOVERNANCE: 'governance'
});

export const OBSERVABILITY_EXPLAINABILITY_TARGETS = Object.freeze({
  BUSINESS_DECISIONS: 'business-decisions',
  WORKFLOW_TRANSITIONS: 'workflow-transitions',
  AI_RECOMMENDATIONS: 'ai-recommendations',
  INTEGRATION_BEHAVIOR: 'integration-behavior',
  SECURITY_EVENTS: 'security-events'
});

export const OBSERVABILITY_GOVERNANCE_ACTIVITIES = Object.freeze({
  COMPLIANCE: 'compliance',
  RISK_MANAGEMENT: 'risk-management',
  PERFORMANCE_EVALUATION: 'performance-evaluation',
  SECURITY_OVERSIGHT: 'security-oversight',
  OPERATIONAL_REVIEW: 'operational-review'
});

export const OBSERVABILITY_PRIVACY_SECURITY_REQUIREMENTS = Object.freeze({
  PROTECT_SENSITIVE_INFORMATION: 'protect-sensitive-information',
  RESPECT_DATA_OWNERSHIP: 'respect-data-ownership',
  SUPPORT_LEAST_PRIVILEGE: 'support-least-privilege',
  FOLLOW_ENTERPRISE_GOVERNANCE: 'follow-enterprise-governance'
});

export const OBSERVABILITY_RESPONSIBILITY_OWNERS = Object.freeze({
  BUSINESS_CAPABILITY_OWNER: 'business-capability-owner',
  SERVICE_OWNER: 'service-owner',
  AI_ARCHITECTURE: 'ai-architecture',
  SECURITY_ARCHITECTURE: 'security-architecture',
  PLATFORM_OPERATIONS: 'platform-operations',
  ENTERPRISE_ARCHITECTURE: 'enterprise-architecture'
});

export const OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES = Object.freeze({
  BUSINESS_ALIGNMENT: 'business-alignment',
  OBSERVABILITY_BY_DESIGN: 'observability-by-design',
  CONTINUOUS_EVIDENCE: 'continuous-evidence',
  CORRELATION: 'correlation',
  EXPLAINABILITY: 'explainability',
  GOVERNANCE: 'governance',
  ENTERPRISE_IMPROVEMENT: 'enterprise-improvement'
});

export const OBSERVABILITY_DOMAIN_NAMES = Object.freeze({
  BUSINESS: 'business-observability',
  SERVICE: 'service-observability',
  AI: 'ai-observability',
  INTEGRATION: 'integration-observability',
  SECURITY: 'security-observability',
  OPERATIONAL: 'operational-observability',
  GOVERNANCE: 'governance-observability'
});

export const ENTERPRISE_VISIBILITY_ELEMENTS = Object.freeze({
  BUSINESS_TRANSACTIONS: 'business-transactions',
  CUSTOMER_JOURNEYS: 'customer-journeys',
  WORKFLOW_EXECUTION: 'workflow-execution',
  SERVICE_COLLABORATION: 'service-collaboration',
  AI_DECISIONS: 'ai-decisions',
  EXTERNAL_INTERACTIONS: 'external-interactions',
  SECURITY_EVENTS: 'security-events',
  OPERATIONAL_HEALTH: 'operational-health'
});

export const OPERATIONAL_EVIDENCE_TYPES = Object.freeze({
  BUSINESS_EVENT: 'business-event',
  SERVICE_INTERACTION: 'service-interaction',
  WORKFLOW_TRANSITION: 'workflow-transition',
  AI_ACTIVITY: 'ai-activity',
  INTEGRATION_EXCHANGE: 'integration-exchange',
  OPERATIONAL_MEASUREMENT: 'operational-measurement',
  SECURITY_RECORD: 'security-record'
});

export const OBSERVABILITY_LIFECYCLE_STAGES = Object.freeze({
  OBSERVE: 'observe',
  UNDERSTAND: 'understand',
  DIAGNOSE: 'diagnose',
  IMPROVE: 'improve',
  VALIDATE: 'validate'
});

export const OBSERVABILITY_QUALITY_ATTRIBUTES = Object.freeze({
  TRANSPARENCY: 'transparency',
  RELIABILITY: 'reliability',
  EXPLAINABILITY: 'explainability',
  TRACEABILITY: 'traceability',
  ACCOUNTABILITY: 'accountability',
  MAINTAINABILITY: 'maintainability',
  SCALABILITY: 'scalability',
  OPERATIONAL_EXCELLENCE: 'operational-excellence'
});

export const OBSERVABILITY_GOVERNANCE_FOUNDATIONS = Object.freeze({
  EVIDENCE_BASED_DECISION_MAKING: 'evidence-based-decision-making',
  OPERATIONAL_ACCOUNTABILITY: 'operational-accountability',
  COMPLIANCE_SUPPORT: 'compliance-support',
  PERFORMANCE_ANALYSIS: 'performance-analysis',
  CONTINUOUS_IMPROVEMENT: 'continuous-improvement',
  RISK_VISIBILITY: 'risk-visibility'
});

export const FUTURE_OBSERVABILITY_CAPABILITIES = Object.freeze({
  AI_ASSISTED_DIAGNOSTICS: 'ai-assisted-diagnostics',
  PREDICTIVE_OPERATIONAL_ANALYSIS: 'predictive-operational-analysis',
  AUTONOMOUS_ANOMALY_DETECTION: 'autonomous-anomaly-detection',
  SEMANTIC_OBSERVABILITY: 'semantic-observability',
  INTELLIGENT_BUSINESS_TELEMETRY: 'intelligent-business-telemetry',
  ADAPTIVE_VISIBILITY_MODELS: 'adaptive-visibility-models',
  CROSS_ENTERPRISE_OBSERVABILITY: 'cross-enterprise-observability',
  SELF_IMPROVING_OPERATIONAL_INTELLIGENCE: 'self-improving-operational-intelligence'
});

export const FUTURE_OBSERVABILITY_PRINCIPLE_CAPABILITIES = Object.freeze({
  AI_ASSISTED_EVIDENCE_CORRELATION: 'ai-assisted-evidence-correlation',
  AUTONOMOUS_DIAGNOSTICS: 'autonomous-diagnostics',
  SEMANTIC_OPERATIONAL_UNDERSTANDING: 'semantic-operational-understanding',
  ADAPTIVE_OBSERVABILITY_MODELS: 'adaptive-observability-models',
  CONTEXT_AWARE_TELEMETRY: 'context-aware-telemetry',
  PREDICTIVE_GOVERNANCE: 'predictive-governance',
  SELF_IMPROVING_OBSERVABILITY: 'self-improving-observability',
  CROSS_ENTERPRISE_OPERATIONAL_INTELLIGENCE: 'cross-enterprise-operational-intelligence'
});
