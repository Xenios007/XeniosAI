export const SINGLE_PROPERTY_HOSPITALITY_REFERENCE_ERROR_CODE = 'SINGLE_PROPERTY_HOSPITALITY_REFERENCE_INVALID';

export const SCENARIO_ACTORS = Object.freeze({
  GUEST: 'guest', TENANT_OWNER_ADMINISTRATOR: 'tenant-owner-or-administrator', PROPERTY_OPERATOR: 'property-operator',
  SUPPORT_OPERATOR: 'support-operator', CHANNEL_ADAPTER: 'channel-adapter', AI_ORCHESTRATOR: 'ai-orchestrator',
  DETERMINISTIC_BUSINESS_SERVICES: 'deterministic-business-services',
  EXTERNAL_SYSTEMS: 'external-calendar-messaging-payment-and-property-systems'
});

export const BUSINESS_CAPABILITIES = Object.freeze({
  PROPERTY_INFORMATION: 'property-information', AVAILABILITY_CALENDAR: 'availability-calendar',
  RATE_ADD_ON_COMPUTATION: 'rate-and-add-on-computation', OCCUPANCY_POLICY: 'occupancy-policy',
  RESERVATION_REQUEST_CONFIRMATION: 'reservation-request-and-confirmation', DEPOSIT_PAYMENT_REFERENCE: 'deposit-or-payment-reference',
  GUEST_AUTHORIZATION: 'guest-authorization', POOL_TICKET_HANDLING: 'pool-ticket-handling',
  PARKING: 'motorcycle-or-car-parking', NOTIFICATION_SELF_CHECK_IN: 'notification-and-self-check-in-guidance',
  BOOKING_MODIFICATION_CANCELLATION: 'booking-modification-and-cancellation'
});

export const DOMAIN_OWNERSHIP_MAPPINGS = Object.freeze({
  PROPERTY_PROFILE_RULES: 'property-profile-and-operating-rules:property-service',
  DATE_AVAILABILITY_HOLDS: 'date-availability-and-holds:availability-service',
  RATES_ADD_ON_PRICES: 'rates-and-add-on-prices:pricing-service',
  RESERVATION_STATE: 'reservation-state:reservation-service',
  GUEST_AUTHORIZATION_DATA: 'guest-authorization-data:guest-service',
  PAYMENT_DEPOSIT_STATUS: 'payment-or-deposit-status:payment-integration-or-payment-service',
  MESSAGES_DELIVERY: 'messages-and-delivery:notification-service',
  PROPERTY_FAQS_NEARBY_INFORMATION: 'property-faqs-and-nearby-information:knowledge-capability'
});

export const REQUEST_FLOW_STEPS = Object.freeze({
  NORMALIZE_REQUEST: 'channel-adapter-normalizes-the-guest-request',
  ESTABLISH_IDENTITY_CONTEXT: 'gateway-establishes-identity-or-session-and-tenant-property-context',
  CLASSIFY_INTENT_ASSEMBLE_CONTEXT: 'orchestrator-classifies-intent-and-assembles-minimum-context',
  RETRIEVE_AVAILABILITY: 'availability-query-retrieves-authoritative-date-state',
  COMPUTE_RATE: 'pricing-query-computes-rate-using-date-stay-guest-count-and-selected-add-ons',
  EXPLAIN_DETERMINISTIC_RESULT: 'orchestrator-explains-the-deterministic-result',
  RESERVATION_COMMAND_IDEMPOTENT: 'reservation-command-uses-idempotency-and-current-availability-version',
  WORKFLOW_COORDINATES_LIFECYCLE: 'workflow-coordinates-hold-deposit-guest-authorization-confirmation-and-notifications',
  EVENTS_UPDATE_PROJECTIONS: 'events-update-projections-telemetry-and-evidence'
});

export const CONFIGURABLE_VALUES = Object.freeze({
  PROPERTY_NAME: 'property-name', OCCUPANCY_LIMIT: 'occupancy-limit', STAY_DURATION: 'stay-duration',
  CHECK_IN_OUT_TIMES: 'check-in-out-times', WEEKDAY_WEEKEND_RATES: 'weekday-weekend-rates',
  GUEST_COUNT_TIERS: 'guest-count-tiers', POOL_PRICES: 'pool-prices', PARKING_PRICES: 'parking-prices',
  DEPOSIT_POLICY: 'deposit-policy', COMMUNICATION_TEMPLATES: 'communication-templates', NEARBY_INFORMATION: 'nearby-information'
});

export const AVAILABILITY_MODEL_DIMENSIONS = Object.freeze({
  PROPERTY: 'property', STAY_INTERVAL: 'stay-interval', BOOKING_STATE: 'booking-state', HOLD: 'hold',
  MAINTENANCE_BLOCK: 'maintenance-block', VERSION: 'version'
});

export const PRICING_MODEL_OUTPUT_FIELDS = Object.freeze({
  ITEMIZED_LINES: 'itemized-lines', CURRENCY: 'currency', POLICY_VERSION: 'policy-version', VALIDITY: 'validity', TOTAL: 'total'
});

export const RESERVATION_WORKFLOW_STATES = Object.freeze({
  REQUESTED: 'requested', HELD: 'held', AWAITING_DEPOSIT: 'awaiting-deposit', AWAITING_GUEST_DETAILS: 'awaiting-guest-details',
  CONFIRMED: 'confirmed', CHECKED_IN: 'checked-in', CHECKED_OUT: 'checked-out', CANCELLED: 'cancelled',
  EXPIRED: 'expired', EXCEPTION: 'exception'
});

export const RESERVATION_WORKFLOW_CONCERNS = Object.freeze({
  TIMEOUTS: 'timeouts', DUPLICATE_COMMANDS: 'duplicate-commands', EXPIRED_HOLDS: 'expired-holds',
  FAILED_NOTIFICATIONS: 'failed-notifications', PAYMENT_AMBIGUITY: 'payment-ambiguity', COMPENSATION: 'compensation',
  OPERATOR_ESCALATION: 'operator-escalation'
});

export const DATA_PRIVACY_CONTROLS = Object.freeze({
  CLASSIFIED: 'classified', MINIMIZED: 'minimized', ENCRYPTED: 'encrypted', ACCESS_CONTROLLED: 'access-controlled',
  RETAINED_FOR_DEFINED_PURPOSE: 'retained-for-defined-purpose',
  EXCLUDED_FROM_LOGS_PROMPTS_FIXTURES_SOURCE_CONTROL: 'excluded-from-logs-prompts-fixtures-and-source-control'
});

export const KNOWLEDGE_TOPIC_AREAS = Object.freeze({
  PROPERTY_RULES: 'property-rules', AMENITIES: 'amenities', NEARBY_LOCATIONS: 'nearby-locations',
  BOOKING_INSTRUCTIONS: 'booking-instructions', CHECK_IN_GUIDANCE: 'check-in-guidance'
});

export const BUSINESS_FACT_QUERY_SOURCES = Object.freeze({
  CURRENT_AVAILABILITY: 'current-availability', TOTAL_PRICE: 'total-price', PAYMENT_STATUS: 'payment-status',
  RESERVATION_STATE: 'reservation-state'
});

export const OBSERVABILITY_SIGNALS = Object.freeze({
  REQUEST_CORRELATION: 'request-correlation', INTENT: 'intent', TOOL_USE: 'tool-use',
  AVAILABILITY_LATENCY: 'availability-latency', PRICING_VERSION: 'pricing-version',
  RESERVATION_WORKFLOW_STATE: 'reservation-workflow-state', INTEGRATION_DELIVERY: 'integration-delivery',
  SECURITY_DENIALS: 'security-denials', TENANT_SAFE_SERVICE_HEALTH: 'tenant-safe-service-health'
});

export const FAILURE_SCENARIOS = Object.freeze({
  EXTERNAL_CALENDAR_UNAVAILABLE: 'external-calendar-unavailable', CONFLICTING_BOOKING_UPDATE: 'conflicting-booking-update',
  DUPLICATE_RESERVATION_REQUEST: 'duplicate-reservation-request', PAYMENT_CALLBACK_REPLAY: 'payment-callback-replay',
  GUEST_EXCEEDS_OCCUPANCY: 'guest-exceeds-occupancy', NOTIFICATION_DELIVERY_FAILURE: 'notification-delivery-failure',
  AI_TOOL_REQUEST_LACKS_AUTHORITY: 'ai-tool-request-lacks-authority', KNOWLEDGE_ANSWER_STALE: 'knowledge-answer-is-stale',
  OPERATOR_SUPPORT_ACCESS_EXPIRES: 'operator-support-access-expires'
});

export const REFERENCE_ACCEPTANCE_CRITERIA = Object.freeze({
  SAME_INPUTS_SAME_RATE: 'the-same-inputs-produce-the-same-authoritative-rate',
  NO_DOUBLE_CONFIRMATION: 'a-booked-interval-cannot-be-confirmed-twice',
  OCCUPANCY_ENFORCED_BY_SERVICE: 'occupancy-policy-is-enforced-by-a-business-service',
  COMMANDS_SCOPED_IDEMPOTENT: 'all-commands-are-tenant-property-scoped-and-idempotent-where-required',
  AI_CANNOT_CHANGE_STATE: 'ai-output-cannot-change-reservation-state-directly',
  GUEST_DATA_ABSENT_FROM_LOGS_FIXTURES: 'guest-data-is-absent-from-logs-and-synthetic-fixtures',
  FAILURE_RECOVERY_OBSERVABLE: 'failure-and-recovery-are-observable'
});

export const SINGLE_PROPERTY_ARCHITECTURAL_RULES = Object.freeze({
  FIRST_PRODUCTION_SHAPED_SLICE: 'casa-lluvia-is-the-first-production-shaped-vertical-slice',
  CONFIGURATION_HOLDS_VALUES_SERVICES_ENFORCE_RULES: 'configuration-holds-variable-business-values-services-enforce-rules',
  CALENDARS_ARE_INTEGRATIONS_NOT_AUTHORITATIVE: 'external-calendars-are-integrations-not-authoritative-internal-repositories',
  RESERVATION_COORDINATED_THROUGH_DURABLE_WORKFLOW: 'reservation-is-coordinated-through-a-durable-workflow',
  KNOWLEDGE_AND_BUSINESS_DATA_DISTINCT: 'knowledge-and-authoritative-business-data-remain-distinct'
});
