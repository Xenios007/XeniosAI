export const API_SDK_OPERATIONS_ERROR_CODE = 'API_SDK_OPERATIONS_INVALID';

export const API_SDK_OPERATIONS_OBJECTIVES = Object.freeze({
  ACCOUNTABLE_OPERATIONS: 'clear-operational-accountability-and-support',
  CONSUMER_HEALTH: 'consumer-outcome-service-health',
  MEASURABLE_COMMITMENTS: 'measurable-and-explainable-service-commitments',
  FAST_RECOVERY: 'fast-detection-diagnosis-containment-and-recovery',
  PRIVACY_SAFE_TELEMETRY: 'privacy-safe-and-tenant-safe-telemetry',
  FAIR_CAPACITY: 'fair-and-predictable-resource-use',
  CONTROLLED_DEGRADATION: 'controlled-degradation-under-stress',
  EVIDENCE_IMPROVEMENT: 'evidence-based-performance-improvement'
});

export const API_SDK_OPERATIONS_PRINCIPLES = Object.freeze({
  PRODUCT_NOT_ENDPOINT: 'operate-the-product-not-only-the-endpoint',
  OUTCOMES_DEFINE_HEALTH: 'consumer-outcomes-define-health',
  OBSERVABILITY_IN_CONTRACTS: 'observability-is-designed-into-contracts',
  FAILURES_BOUNDED: 'failures-are-expected-and-bounded',
  TENANT_FAIRNESS: 'tenant-fairness-is-explicit',
  TELEMETRY_GOVERNED: 'telemetry-is-governed-data',
  PERFORMANCE_END_TO_END: 'performance-is-end-to-end',
  OPERATIONS_LIFECYCLE: 'change-and-operations-are-one-lifecycle',
  CONTROLLED_AUTOMATION: 'automation-remains-controllable',
  TECHNOLOGY_INDEPENDENCE: 'technology-independence'
});

export const API_SDK_OPERATIONAL_DEFINITIONS = Object.freeze({
  SERVICE_COMMITMENT: 'api-service-commitment',
  SLI: 'service-level-indicator',
  SLO: 'service-level-objective',
  ERROR_BUDGET: 'error-budget',
  OPERATIONAL_EVENT: 'operational-event',
  CORRELATION_ID: 'correlation-identifier',
  CAUSATION_ID: 'causation-identifier',
  DEGRADED_MODE: 'degraded-mode',
  PERFORMANCE_BUDGET: 'performance-budget'
});

export const API_SDK_OPERATIONAL_DOMAINS = Object.freeze({
  API_PRODUCT: 'api-product', GATEWAY_EDGE: 'gateway-and-edge', PROVIDER: 'provider',
  ASYNC_INFRASTRUCTURE: 'asynchronous-infrastructure', SDK_PRODUCT: 'sdk-product',
  CONSUMER_INTEGRATION: 'consumer-integration', DEVELOPER_PLATFORM: 'developer-platform'
});

export const API_SDK_OPERATIONAL_LIFECYCLE_STATES = Object.freeze({
  NOT_READY: 'not-ready', CONTROLLED: 'ready-for-controlled-use', ACTIVE: 'active',
  DEGRADED: 'degraded', RESTRICTED: 'restricted', SUSPENDED: 'suspended',
  MAINTENANCE: 'under-maintenance', RECOVERING: 'recovering', DEPRECATED: 'deprecated',
  RETIRED: 'retired'
});

export const API_SDK_HEALTH_DIMENSIONS = Object.freeze({
  REACHABILITY: 'reachability', AUTHENTICATION: 'authentication-capability',
  AUTHORIZATION: 'authorization-correctness', ISOLATION: 'tenant-and-property-isolation',
  CONTRACT: 'contract-conformance', DOMAIN: 'domain-correctness', LATENCY: 'latency-and-throughput',
  DEPENDENCY: 'dependency-health', ASYNC_PROGRESS: 'queue-and-asynchronous-progress',
  FRESHNESS: 'data-freshness-and-consistency', FAIRNESS: 'quota-and-fairness-behavior',
  EVIDENCE: 'telemetry-and-evidence-production', RECOVERY: 'support-and-recovery-readiness'
});

export const API_SDK_OBSERVABILITY_SIGNALS = Object.freeze({
  METRICS: 'metrics', LOGS: 'logs', TRACES: 'traces', OPERATIONAL_EVENTS: 'operational-events',
  AUDIT_EVIDENCE: 'audit-evidence'
});

export const API_SDK_TELEMETRY_CONTEXT_FIELDS = Object.freeze({
  OPERATION: 'operation-identity', PRODUCT: 'api-product-identity', CONTRACT: 'contract-and-version',
  RELEASE: 'release-identity', SDK: 'sdk-and-runtime-version', CONSUMER: 'consumer-identity',
  TENANT: 'tenant-scope', PROPERTY: 'property-scope', ENVIRONMENT: 'environment-and-region',
  CORRELATION: 'correlation-identifier', CAUSATION: 'causation-identifier', OUTCOME: 'outcome-category'
});

export const API_SDK_OPERATIONAL_CAPABILITIES = Object.freeze({
  READINESS: 'operational-readiness', DASHBOARDS: 'dashboards-and-operational-views',
  ALERTING: 'alerting-and-triage', RUNBOOKS: 'runbooks', INCIDENTS: 'incident-management',
  PROBLEMS: 'problem-management', RELEASE_VERIFICATION: 'release-verification',
  CAPACITY: 'demand-and-capacity-management', ADMISSION: 'admission-control',
  BACKPRESSURE: 'backpressure', FAIRNESS: 'tenant-performance-fairness',
  DEGRADATION: 'graceful-degradation', DEPENDENCIES: 'dependency-operations',
  RESILIENCE: 'resilience-and-continuity', RECOVERY: 'recovery-verification', SUPPORT: 'consumer-support'
});

export const API_SDK_PERFORMANCE_AREAS = Object.freeze({
  OBJECTIVES: 'performance-objectives', BUDGETS: 'performance-budgets', BASELINES: 'performance-baselines',
  TESTING: 'performance-testing', OPTIMIZATION: 'performance-optimization', CACHING: 'caching-operations',
  CONNECTIONS: 'connection-and-resource-management', RETRIES: 'bounded-retry-operations',
  QUEUES: 'queue-and-backlog-management', COST: 'cost-and-efficiency'
});

export const API_SDK_OPERATIONS_RULES = Object.freeze({
  OWNERSHIP_REQUIRED: 'every-supported-api-and-sdk-product-has-accountable-operational-ownership',
  HEALTH_IS_OUTCOME: 'health-includes-correctness-authorization-isolation-timeliness-and-completion',
  PROVIDER_ENFORCEMENT: 'providers-enforce-identity-authorization-tenant-property-policy-and-domain-rules',
  TELEMETRY_MINIMIZED: 'telemetry-excludes-credentials-tokens-unrestricted-payloads-and-sensitive-data-by-default',
  SCOPE_PRESERVED: 'tenant-and-property-scope-is-preserved-across-operational-evidence',
  CORRELATION_NO_AUTHORITY: 'correlation-identifiers-provide-traceability-and-never-grant-authority',
  BOUNDS_OBSERVABLE: 'retries-queues-buffers-connections-concurrency-and-background-work-are-bounded-and-observable',
  FAIRNESS_ENFORCED: 'quotas-rate-limits-admission-and-fairness-are-enforced-at-trusted-boundaries',
  PERFORMANCE_SAFE: 'performance-optimization-does-not-weaken-correctness-security-privacy-isolation-or-compatibility',
  UNKNOWN_NOT_HEALTHY: 'unknown-or-missing-material-health-evidence-is-not-reported-as-healthy',
  RECOVERY_COMPLETE: 'recovery-verifies-identity-isolation-domain-state-async-work-capacity-telemetry-and-consumers',
  AUTOMATION_BOUNDED: 'operational-automation-is-bounded-explainable-reversible-where-practical-and-accountable'
});

export const API_SDK_OPERATIONS_BOUNDARIES = Object.freeze({
  ARCH_009: 'specializes-integration-boundaries-and-communication-health',
  ARCH_010: 'specializes-platform-observability-and-telemetry-governance',
  ARCH_011: 'specializes-enterprise-operations-and-command-governance',
  ARCH_012: 'specializes-governance-risk-controls-evidence-and-assurance',
  ARCH_013: 'specializes-developer-platform-catalog-delivery-and-support',
  ARCH_018: 'detailed-tenant-and-property-topology-remains-owned-by-arch-018',
  TECHNOLOGY_NEUTRAL: 'does-not-mandate-a-telemetry-gateway-cloud-or-vendor-product'
});
