export const WORKFLOW_AND_BUSINESS_SERVICE_REFERENCE_ERROR_CODE = 'WORKFLOW_AND_BUSINESS_SERVICE_REFERENCE_INVALID';

export const WORKFLOW_REFERENCE_BOUNDED_SERVICES = Object.freeze({
  PROPERTY: 'property', AVAILABILITY: 'availability', PRICING: 'pricing', RESERVATION: 'reservation',
  GUEST: 'guest', NOTIFICATION: 'notification', INTEGRATION: 'integration'
});

export const SERVICE_OWNERSHIP_RESPONSIBILITIES = Object.freeze({
  DOMAIN_MODEL: 'domain-model', REPOSITORY: 'repository', API: 'api', EVENTS: 'events',
  HEALTH: 'health', TELEMETRY: 'telemetry', LIFECYCLE: 'lifecycle', RECOVERY: 'recovery'
});

export const COMMAND_FIELDS = Object.freeze({
  COMMAND_ID: 'command-id', ACTOR: 'actor', TENANT_PROPERTY_CONTEXT: 'tenant-property-context',
  EXPECTED_VERSION: 'expected-version', PAYLOAD: 'payload', PURPOSE: 'purpose', TIME: 'time', CORRELATION: 'correlation'
});

export const COMMAND_PROVIDER_VALIDATIONS = Object.freeze({
  AUTHORIZATION: 'authorization', OWNERSHIP: 'ownership', INVARIANTS: 'invariants',
  CONCURRENCY: 'concurrency', IDEMPOTENCY: 'idempotency'
});

export const QUERY_CHARACTERISTICS = Object.freeze({
  SIDE_EFFECT_FREE: 'side-effect-free', TENANT_SCOPED: 'tenant-scoped', CONTRACT_VERSIONED: 'contract-versioned',
  FILTERED: 'filtered', PAGINATED_WHERE_NEEDED: 'paginated-where-needed',
  EXPLICIT_ABOUT_FRESHNESS: 'explicit-about-freshness', EXPLICIT_ABOUT_SOURCE: 'explicit-about-source'
});

export const EVENT_FIELDS = Object.freeze({
  STABLE_IDENTITY: 'stable-identity', SCHEMA: 'schema', TENANT_PROPERTY_SCOPE: 'tenant-property-scope',
  OCCURRED_TIME: 'occurred-time', SOURCE_AUTHORITY: 'source-authority', CORRELATION: 'correlation',
  MINIMAL_PAYLOAD: 'minimal-payload'
});

export const RESERVATION_WORKFLOW_STEPS = Object.freeze({
  VALIDATE_REQUEST: 'validate-request', CREATE_AVAILABILITY_HOLD: 'create-availability-hold',
  PRODUCE_PRICING_SNAPSHOT: 'produce-pricing-snapshot', REQUEST_DEPOSIT_OR_PAYMENT_CONFIRMATION: 'request-deposit-or-payment-confirmation',
  COLLECT_GUEST_AUTHORIZATION_DETAILS: 'collect-guest-authorization-details', CONFIRM_RESERVATION: 'confirm-reservation',
  PUBLISH_CONFIRMATION_EVENTS: 'publish-confirmation-events', SEND_NOTIFICATIONS: 'send-notifications',
  EXPIRE_OR_COMPENSATE_INCOMPLETE_WORK: 'expire-or-compensate-incomplete-work'
});

export const WORKFLOW_STATE_ELEMENTS = Object.freeze({
  PROGRESS: 'progress', REFERENCES: 'references', TIMERS: 'timers', DECISIONS: 'decisions',
  ATTEMPTS: 'attempts', COMPENSATION_STATUS: 'compensation-status'
});

export const IDEMPOTENCY_EXAMPLES = Object.freeze({
  RESERVATION: 'reservation', PAYMENT_CALLBACK: 'payment-callback', NOTIFICATION: 'notification',
  EVENT_CONSUMPTION: 'event-consumption', WORKFLOW_ACTIVITY: 'workflow-activity'
});

export const CONCURRENCY_CONTROLS = Object.freeze({
  OPTIMISTIC_VERSIONING: 'optimistic-versioning', EQUIVALENT_CONCURRENCY_BOUNDARY: 'equivalent-concurrency-boundary',
  EXPLICIT_RETRY: 'explicit-retry', BUSINESS_RESOLUTION_BEHAVIOR: 'business-resolution-behavior'
});

export const WORKFLOW_FAILURE_SCENARIOS = Object.freeze({
  AVAILABILITY_SERVICE_TIMEOUT: 'availability-service-timeout', HOLD_CONFLICT: 'hold-conflict',
  PAYMENT_AMBIGUITY: 'payment-ambiguity', GUEST_DATA_MISSING: 'guest-data-missing',
  NOTIFICATION_FAILURE: 'notification-failure', WORKFLOW_WORKER_LOSS: 'workflow-worker-loss',
  CANCELLATION_AFTER_CONFIRMATION: 'cancellation-after-confirmation'
});

export const RECONCILIATION_CHECKED_RECORDS = Object.freeze({
  HOLDS: 'holds', CONFIRMED_RESERVATIONS: 'confirmed-reservations', PAYMENT_REFERENCES: 'payment-references',
  NOTIFICATION_STATUS: 'notification-status', EVENT_PROJECTIONS: 'event-projections', WORKFLOW_STATE: 'workflow-state'
});

export const OBSERVABILITY_TRACE_CORRELATION_POINTS = Object.freeze({
  COMMAND: 'command', SERVICE_TRANSACTION: 'service-transaction', EVENT: 'event', WORKFLOW: 'workflow',
  INTEGRATION: 'integration', NOTIFICATION: 'notification'
});

export const WORKFLOW_REFERENCE_ACCEPTANCE_CRITERIA = Object.freeze({
  SERVICES_OWN_AND_PROTECT_THEIR_REPOSITORIES: 'services-own-and-protect-their-repositories',
  DUPLICATE_COMMANDS_DO_NOT_DUPLICATE_MATERIAL_EFFECTS: 'duplicate-commands-do-not-duplicate-material-effects',
  CROSS_SERVICE_WORKFLOW_RECOVERS_AFTER_WORKER_RESTART: 'cross-service-workflow-recovers-after-worker-restart',
  PARTIAL_FAILURE_PRODUCES_VISIBLE_STATE_AND_COMPENSATION: 'partial-failure-produces-visible-state-and-compensation',
  EVENTS_CORRESPOND_TO_COMMITTED_FACTS: 'events-correspond-to-committed-facts',
  TENANT_CONTEXT_REMAINS_PRESENT_IN_EVERY_BOUNDARY: 'tenant-context-remains-present-in-every-boundary'
});

export const WORKFLOW_ARCHITECTURAL_RULES = Object.freeze({
  BUSINESS_STATE_CHANGES_ARE_DETERMINISTIC_SERVICE_COMMANDS: 'business-state-changes-are-deterministic-service-commands',
  WORKFLOWS_COORDINATE_BUT_DO_NOT_OWN_DOMAIN_TRUTH: 'workflows-coordinate-but-do-not-own-domain-truth',
  LOCAL_TRANSACTIONS_AND_RELIABLE_EVENTS_REPLACE_SHARED_TRANSACTIONS: 'local-transactions-and-reliable-events-replace-shared-transactions',
  RECONCILIATION_IS_A_FIRST_CLASS_RECOVERY_CONTROL: 'reconciliation-is-a-first-class-recovery-control'
});
