export const FINANCIAL_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE = 'FINANCIAL_OPERATIONS_GOVERNANCE_ASSURANCE_INVALID';

export const FINANCIAL_OPERATING_ROLES = Object.freeze({
  DOMAIN_OWNER: 'financial-domain-owner',
  SERVICE_OWNER: 'financial-service-owner',
  CONTROL_OWNER: 'financial-control-owner',
  OPERATIONS: 'financial-operations',
  SECURITY: 'security-owner',
  PRIVACY: 'privacy-compliance-owner',
  FRAUD: 'fraud-risk-owner',
  AUDIT: 'assurance-audit-owner',
  AI_GOVERNANCE: 'ai-governance-owner'
});

export const FINANCIAL_SERVICE_OBJECTIVES = Object.freeze({
  PRICING: 'price-determination-availability-latency',
  BILLING: 'billing-processing-correctness-timeliness',
  PAYMENTS: 'payment-processing-success-latency',
  SETTLEMENT: 'settlement-freshness-completeness',
  RECONCILIATION: 'reconciliation-completion-variance',
  INCIDENTS: 'financial-incident-detection-response',
  RECOVERY: 'recovery-point-time-objectives'
});

export const FINANCIAL_TELEMETRY_FIELDS = Object.freeze({
  TENANT: 'tenant-reference',
  CAPABILITY: 'capability',
  OPERATION: 'operation',
  POLICY: 'policy-result',
  VERSION: 'version',
  SOURCE: 'source-freshness',
  LATENCY: 'latency',
  OUTCOME: 'outcome',
  CORRELATION: 'correlation-identifier'
});

export const FRAUD_BOUNDARIES = Object.freeze({
  SIGNALS: 'fraud-signals-are-advisory-inputs',
  AUTHORITY: 'fraud-models-do-not-own-financial-state',
  DECISIONS: 'consequential-decisions-require-deterministic-policy',
  REVIEW: 'high-risk-decisions-support-human-review',
  APPEAL: 'customer-impacting-decisions-support-appeal',
  MINIMIZATION: 'fraud-telemetry-is-minimized-and-classified'
});

export const FINANCIAL_INCIDENT_CLASSES = Object.freeze({
  CROSS_TENANT: 'cross-tenant-financial-disclosure',
  UNAUTHORIZED_CHANGE: 'unauthorized-financial-state-change',
  PRICE_ERROR: 'incorrect-price-determination',
  BILLING_ERROR: 'incorrect-or-duplicate-billing',
  PAYMENT_ERROR: 'payment-processing-integrity-failure',
  SETTLEMENT_DRIFT: 'settlement-reconciliation-drift',
  TOKEN_EXPOSURE: 'payment-token-boundary-breach',
  FRAUD_CONTROL: 'fraud-control-failure',
  RECOVERY_FAILURE: 'financial-recovery-failure'
});

export const FINANCIAL_RECOVERY_EVIDENCE = Object.freeze({
  IDEMPOTENCY: 'idempotent-retry-evidence',
  STATUS: 'authoritative-status-query',
  REPLAY: 'event-replay-evidence',
  RECONCILIATION: 'reconciliation-checkpoint',
  QUARANTINE: 'quarantine-record',
  ROLLBACK: 'rollback-evidence',
  RUNBOOK: 'operator-runbook-execution',
  POST_INCIDENT: 'post-incident-review'
});

export const FINANCIAL_GOVERNANCE_ARTIFACTS = Object.freeze({
  AUTHORITY: 'financial-authority-registry',
  SCHEMAS: 'financial-contract-schema-registry',
  CONTROLS: 'financial-control-catalog',
  POLICIES: 'pricing-billing-payment-policy-catalog',
  RETENTION: 'financial-retention-deletion-schedule',
  ADAPTERS: 'processor-ledger-adapter-registry',
  OBJECTIVES: 'financial-service-objectives',
  EXCEPTIONS: 'financial-exception-register'
});

export const FINANCIAL_ASSURANCE_ACTIVITIES = Object.freeze({
  CONTRACT: 'contract-conformance-tests',
  SECURITY: 'security-tests',
  PRIVACY: 'privacy-tests',
  TENANT: 'tenant-isolation-tests',
  RESILIENCE: 'resilience-tests',
  PERFORMANCE: 'performance-tests',
  RECONCILIATION: 'reconciliation-control-tests',
  RECOVERY: 'financial-recovery-exercises',
  ACCESS: 'privileged-access-review',
  ARCHITECTURE: 'architecture-conformance-tests'
});

export const FINANCIAL_OPERATIONS_INVARIANTS = Object.freeze({
  ONE_OWNER: 'one-authoritative-owner-per-material-transition',
  SOURCE_DISTINCT: 'derived-and-replicated-data-remains-distinct-from-source-truth',
  EXTENSIONS_BOUNDED: 'tenant-and-industry-extensions-cannot-weaken-platform-controls',
  TELEMETRY_MINIMIZED: 'telemetry-references-protected-financial-payloads-without-copying',
  FRAUD_BOUNDED: 'fraud-detection-does-not-silently-change-money',
  EVIDENCE_PRESERVED: 'financial-control-incident-and-recovery-evidence-is-preserved',
  RECOVERABLE: 'consequential-changes-are-attributable-versioned-observable-and-recoverable',
  AI_PROMOTION: 'ai-behavior-changes-only-through-arch-029-evaluation-and-promotion'
});
