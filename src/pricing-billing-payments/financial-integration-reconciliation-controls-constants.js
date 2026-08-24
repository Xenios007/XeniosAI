export const FINANCIAL_INTEGRATION_RECONCILIATION_CONTROLS_ERROR_CODE = 'FINANCIAL_INTEGRATION_RECONCILIATION_CONTROLS_INVALID';

export const FINANCIAL_INTEGRATION_RESPONSIBILITIES = Object.freeze({
  ADAPTERS: 'processor-and-ledger-adapters',
  TOKEN_BOUNDARIES: 'token-boundaries',
  RECONCILIATION: 'financial-reconciliation',
  CLOSE: 'financial-close',
  EXCEPTIONS: 'exception-management',
  CONTROLS: 'financial-controls'
});

export const FINANCIAL_ADAPTER_FIELDS = Object.freeze({
  IDENTIFIER: 'adapter-identifier',
  TENANT: 'tenant-reference',
  PROVIDER: 'provider-reference',
  TYPE: 'adapter-type',
  CONTRACT_VERSION: 'contract-version',
  CAPABILITIES: 'capabilities',
  STATUS: 'lifecycle-status',
  PROVENANCE: 'provenance'
});

export const TOKEN_BOUNDARY_FIELDS = Object.freeze({
  IDENTIFIER: 'token-reference',
  PROVIDER: 'token-provider-reference',
  PURPOSE: 'purpose',
  SCOPE: 'token-scope',
  CLASSIFICATION: 'data-classification',
  EXPIRY: 'expiry',
  ROTATION: 'rotation-reference'
});

export const RECONCILIATION_FIELDS = Object.freeze({
  IDENTIFIER: 'reconciliation-identifier',
  TENANT: 'tenant-reference',
  INTERNAL_SOURCE: 'internal-source-reference',
  EXTERNAL_SOURCE: 'external-source-reference',
  PERIOD: 'reconciliation-period',
  EXPECTED: 'expected-amount',
  OBSERVED: 'observed-amount',
  VARIANCE: 'variance',
  STATUS: 'reconciliation-status',
  EVIDENCE: 'reconciliation-evidence'
});

export const FINANCIAL_CLOSE_FIELDS = Object.freeze({
  IDENTIFIER: 'close-identifier',
  PERIOD: 'close-period',
  CHECKPOINT: 'reconciliation-checkpoint',
  EXCEPTIONS: 'open-exception-references',
  APPROVAL: 'approval-evidence',
  STATUS: 'close-status',
  CLOSED_AT: 'closed-at',
  VERSION: 'close-version'
});

export const FINANCIAL_EXCEPTION_FIELDS = Object.freeze({
  IDENTIFIER: 'exception-identifier',
  TYPE: 'exception-type',
  SOURCE: 'source-reference',
  SEVERITY: 'severity',
  VARIANCE: 'variance-reference',
  OWNER: 'resolution-owner',
  STATUS: 'exception-status',
  RESOLUTION: 'resolution-evidence'
});

export const FINANCIAL_CONTROL_FIELDS = Object.freeze({
  IDENTIFIER: 'control-identifier',
  PURPOSE: 'control-purpose',
  OWNER: 'control-owner',
  FREQUENCY: 'control-frequency',
  THRESHOLD: 'control-threshold',
  SEPARATION: 'separation-of-duties-policy',
  EVIDENCE: 'control-evidence',
  VERSION: 'control-version'
});

export const FINANCIAL_INTEGRATION_INVARIANTS = Object.freeze({
  ONE_OWNER: 'one-authoritative-owner-per-material-transition',
  SOURCE_DISTINCT: 'derived-and-replicated-data-remains-distinct-from-source-truth',
  EXTENSIONS_BOUNDED: 'tenant-and-industry-extensions-cannot-weaken-platform-controls',
  TOKENS_ISOLATED: 'provider-tokens-remain-purpose-scoped-and-isolated',
  RECONCILIATION_EVIDENCED: 'reconciliation-variances-remain-evidenced-and-resolvable',
  CLOSE_GOVERNED: 'financial-close-requires-reconciliation-and-approval',
  RECOVERABLE: 'consequential-changes-are-attributable-versioned-observable-and-recoverable',
  AI_PROMOTION: 'ai-behavior-changes-only-through-arch-029-evaluation-and-promotion'
});
