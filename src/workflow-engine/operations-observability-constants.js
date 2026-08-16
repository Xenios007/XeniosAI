export const WORKFLOW_OPERATIONS_ERROR_CODE = 'WORKFLOW_OPERATIONS_INVALID';

export const WORKFLOW_OPERATIONAL_OBJECTIVES = Object.freeze({
  RELIABLE_EXECUTION: 'reliable-execution',
  PREDICTABLE_SERVICE: 'predictable-service',
  EARLY_DETECTION: 'early-degradation-detection',
  BUSINESS_IMPACT: 'business-impact-visibility',
  RAPID_DIAGNOSIS: 'rapid-diagnosis',
  SAFE_CONTAINMENT: 'safe-containment',
  CONTROLLED_RECOVERY: 'controlled-recovery',
  CAPACITY_HEADROOM: 'capacity-headroom',
  EFFICIENCY: 'efficient-resource-use',
  ISOLATION: 'tenant-and-property-isolation',
  EVIDENCE: 'operational-evidence',
  IMPROVEMENT: 'continuous-improvement',
  PORTABILITY: 'vendor-neutral-portability'
});

export const WORKFLOW_HEALTH_DIMENSIONS = Object.freeze({
  BUSINESS: 'business-health',
  EXECUTION: 'execution-health',
  TASK: 'task-health',
  WAIT_TIMER: 'wait-and-timer-health',
  DEPENDENCY: 'dependency-health',
  PLATFORM: 'platform-health',
  SECURITY_POLICY: 'security-and-policy-health',
  CAPACITY: 'capacity-health'
});

export const WORKFLOW_HEALTH_STATES = Object.freeze({
  HEALTHY: 'healthy',
  AT_RISK: 'at-risk',
  DEGRADED: 'degraded',
  PARTIAL: 'partially-unavailable',
  UNAVAILABLE: 'unavailable',
  RECOVERING: 'recovering',
  UNKNOWN: 'unknown'
});

export const WORKFLOW_OBSERVABILITY_SIGNALS = Object.freeze({
  METRICS: 'metrics',
  LOGS: 'logs',
  TRACES: 'distributed-traces',
  DOMAIN_EVENTS: 'domain-events',
  TRANSITIONS: 'workflow-transition-records',
  AUDIT: 'audit-evidence',
  PROFILES: 'profiles-where-appropriate',
  SYNTHETICS: 'synthetic-checks',
  HEALTH_CHECKS: 'health-checks',
  FEEDBACK: 'user-and-operator-feedback',
  RECONCILIATION: 'business-outcome-reconciliation'
});

export const WORKFLOW_TELEMETRY_CORRELATIONS = Object.freeze({
  DEFINITION: 'workflow-definition',
  VERSION: 'definition-version',
  EXECUTION: 'workflow-execution',
  PARENT: 'parent-execution',
  CHILD: 'child-execution',
  TASK: 'task',
  ATTEMPT: 'attempt',
  WAIT: 'wait',
  TIMER: 'timer',
  BUSINESS: 'business-correlation',
  DOMAIN: 'domain-operation',
  EVENT: 'event-identity',
  PROVIDER: 'provider-operation',
  AGENT: 'agent-execution',
  HUMAN: 'human-task',
  INCIDENT: 'incident',
  CHANGE: 'change',
  TRACE: 'trace'
});

export const WORKFLOW_OPERATIONAL_SLIS = Object.freeze({
  START_AVAILABILITY: 'start-admission-availability',
  START_LATENCY: 'start-admission-latency',
  TRANSITION_AVAILABILITY: 'transition-processing-availability',
  TRANSITION_LATENCY: 'transition-processing-latency',
  DISPATCH_DELAY: 'task-dispatch-delay',
  TIMER_DELAY: 'timer-firing-delay',
  EVENT_CORRELATION: 'event-correlation-latency',
  DEADLINE: 'deadline-attainment',
  COMPLETION: 'valid-completion-ratio',
  STALL: 'execution-stall-ratio',
  RECOVERY: 'recovery-completion',
  EVIDENCE: 'evidence-completeness'
});

export const WORKFLOW_ALERT_CONDITIONS = Object.freeze({
  START_FAILURE: 'start-admission-failure',
  TRANSITION_FAILURE: 'transition-failure',
  PERSISTENCE: 'persistence-degradation',
  QUEUE_AGE: 'queue-age-breach',
  TIMER_DELAY: 'timer-delay-breach',
  WORKERS: 'worker-unavailability',
  STALL: 'stalled-execution',
  DEADLINE: 'deadline-risk',
  UNMATCHED_EVENTS: 'unmatched-event-surge',
  RETRY: 'retry-amplification',
  COMPENSATION: 'compensation-failure',
  HUMAN: 'human-backlog',
  AGENT: 'agent-control-failure',
  DEPENDENCY: 'dependency-outage',
  ISOLATION: 'tenant-isolation-risk',
  EVIDENCE: 'evidence-gap',
  CAPACITY: 'capacity-saturation'
});

export const WORKFLOW_CAPACITY_DIMENSIONS = Object.freeze({
  RUNTIME: 'runtime-compute',
  STATE: 'state-persistence',
  HISTORY: 'history-storage',
  QUEUE: 'queue-throughput',
  TIMER: 'timer-throughput',
  EVENTS: 'event-consumption',
  WORKERS: 'worker-pools',
  AGENTS: 'agent-capacity',
  PEOPLE: 'human-capacity',
  NETWORK: 'network',
  PROVIDERS: 'external-provider-quotas',
  TELEMETRY: 'observability-ingestion',
  EVIDENCE: 'evidence-storage',
  RECOVERY: 'recovery-infrastructure'
});

export const WORKFLOW_DEGRADATION_MODES = Object.freeze({
  READ_ONLY: 'read-only-status',
  NO_STARTS: 'no-new-starts',
  PRIORITY_ONLY: 'priority-workflows-only',
  REDUCED_CONCURRENCY: 'reduced-concurrency',
  DEFERRED_EXTERNAL: 'deferred-external-actions',
  MANUAL_APPROVAL: 'manual-approval-required',
  PROPERTY_MANUAL: 'manual-property-procedure',
  NO_AGENT: 'agent-disabled-deterministic-path',
  PROVIDER_ALTERNATIVE: 'provider-alternative-path',
  CONTROLLED_QUEUE: 'controlled-queueing'
});

export const WORKFLOW_EXECUTION_TRIAGE_STATES = Object.freeze({
  PROGRESSING: 'progressing-normally',
  EXPECTED_WAIT: 'expected-wait',
  DELAYED: 'delayed',
  STALLED: 'stalled',
  DEPENDENCY_BLOCKED: 'dependency-blocked',
  HUMAN_BLOCKED: 'human-blocked',
  AGENT_BLOCKED: 'agent-blocked',
  UNCERTAIN: 'outcome-uncertain',
  COMPENSATION: 'compensation-required',
  RECOVERY: 'recovery-required',
  TERMINAL: 'terminal'
});

export const WORKFLOW_OPERATIONAL_ACTIONS = Object.freeze({
  SEARCH: 'execution-search',
  INSPECT_STATE: 'state-inspection',
  INSPECT_HISTORY: 'transition-history-inspection',
  INSPECT_TASKS: 'task-and-attempt-inspection',
  INSPECT_WAITS: 'wait-and-timer-inspection',
  INSPECT_CORRELATION: 'correlation-inspection',
  SUSPEND: 'suspension',
  CANCEL: 'cancellation-request',
  RECONCILE: 'reconciliation',
  RETRY: 'controlled-retry',
  ESCALATE: 'escalation',
  SCALE: 'bounded-scaling',
  REBALANCE: 'queue-rebalancing'
});

export const WORKFLOW_OPERATIONS_QUALITY_ATTRIBUTES = Object.freeze({
  RELIABILITY: 'reliability',
  AVAILABILITY: 'availability',
  RESILIENCE: 'resilience',
  RECOVERABILITY: 'recoverability',
  PERFORMANCE: 'performance',
  SCALABILITY: 'scalability',
  SUPPORTABILITY: 'supportability',
  OPERABILITY: 'operability',
  AUDITABILITY: 'auditability',
  TRACEABILITY: 'traceability',
  SECURITY: 'security',
  PRIVACY: 'privacy',
  TENANT_ISOLATION: 'tenant-isolation',
  COST_EFFICIENCY: 'cost-efficiency',
  PORTABILITY: 'portability'
});

export const WORKFLOW_OPERATIONS_RULES = Object.freeze({
  MULTIDIMENSIONAL_HEALTH: 'multidimensional-workflow-health',
  ACCOUNTABLE_OWNER: 'one-accountable-owner-per-production-capability',
  READINESS: 'operational-readiness-before-activation',
  CORRELATION: 'cross-participant-telemetry-correlation',
  CARDINALITY: 'bounded-cardinality-and-protected-operational-data',
  TASK_ATTEMPT: 'logical-tasks-distinct-from-attempts',
  WAIT_STALL: 'expected-wait-distinct-from-stall',
  BUSINESS_OUTCOME: 'transport-success-distinct-from-business-outcome',
  DOMAIN_EVIDENCE: 'runtime-telemetry-distinct-from-domain-evidence',
  BUSINESS_SLOS: 'business-relevant-service-objectives',
  UNKNOWN_HEALTH: 'unknown-health-remains-unknown',
  VERSION_VISIBILITY: 'definition-version-visible-in-operational-signals',
  SCOPE: 'tenant-property-scope-in-views-alerts-diagnostics-actions',
  CONTROLLED_CONSOLE: 'no-unrestricted-state-mutation',
  EVIDENCED_ACTIONS: 'controlled-authorized-evidenced-actions',
  END_TO_END_CAPACITY: 'capacity-planned-across-all-workflow-resources',
  FAIRNESS: 'tenant-fairness-and-property-constraints',
  LOAD_CONTROL: 'admission-control-and-backpressure',
  TAIL_BEHAVIOR: 'distributions-and-tail-behavior',
  REALISTIC_TESTING: 'realistic-load-soak-failure-recovery-testing',
  DECLARED_DEGRADATION: 'degraded-modes-defined-before-incidents',
  RECONCILED_RECOVERY: 'authoritative-outcome-reconciliation',
  NO_BLIND_RETRY: 'no-blind-retry-of-uncertain-material-actions',
  SINGLE_AUTHORITY: 'failover-preserves-one-transition-authority',
  CONTROLLED_BACKLOG: 'bounded-backlog-recovery',
  BOUNDED_AUTOMATION: 'bounded-attributable-operational-automation',
  ADVISORY_AI: 'ai-operational-recommendations-are-advisory',
  DATA_GOVERNANCE: 'operational-data-governance-and-privacy',
  CHANGE_CORRELATION: 'release-and-configuration-correlation',
  CONTINUOUS_REVIEW: 'continuous-operational-review-and-improvement',
  CLAIMS: 'no-unsupported-operational-claims',
  NEUTRALITY: 'vendor-neutral-and-technology-independent'
});

export const WORKFLOW_OPERATIONS_BOUNDARIES = Object.freeze({
  OBSERVABILITY: 'replace-enterprise-observability-architecture',
  OPERATIONS: 'replace-enterprise-operations-processes',
  SECURITY: 'replace-security-architecture',
  DOMAIN_METRICS: 'define-domain-service-business-metrics',
  DOMAIN_OUTCOMES: 'become-authoritative-for-domain-outcomes',
  AGENT_OBSERVABILITY: 'transfer-agent-observability-ownership',
  DATABASE_ACCESS: 'permit-cross-service-database-access',
  EXACTLY_ONCE: 'guarantee-universal-exactly-once-execution',
  PRODUCT: 'prescribe-monitoring-or-workflow-product',
  JUDGMENT: 'replace-qualified-operational-judgment'
});
