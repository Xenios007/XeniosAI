export const DOMAIN_MODEL_ERROR_CODES = Object.freeze({
  DOMAIN_NOT_FOUND: 'DOMAIN_MODEL_DOMAIN_NOT_FOUND',
  DOMAIN_OVERVIEW_INVALID: 'DOMAIN_MODEL_OVERVIEW_INVALID',
  DOMAIN_CONCEPT_INVALID: 'DOMAIN_MODEL_CONCEPT_INVALID',
  DOMAIN_CAPABILITY_INVALID: 'DOMAIN_MODEL_CAPABILITY_INVALID',
  DOMAIN_RELATIONSHIP_INVALID: 'DOMAIN_MODEL_RELATIONSHIP_INVALID',
  DOMAIN_STATE_INVALID: 'DOMAIN_MODEL_STATE_INVALID',
  BOUNDED_CONTEXT_NOT_FOUND: 'DOMAIN_MODEL_BOUNDED_CONTEXT_NOT_FOUND',
  BOUNDED_CONTEXT_INVALID: 'DOMAIN_MODEL_BOUNDED_CONTEXT_INVALID',
  BOUNDED_CONTEXT_OWNERSHIP_INVALID: 'DOMAIN_MODEL_BOUNDED_CONTEXT_OWNERSHIP_INVALID',
  BOUNDED_CONTEXT_COLLABORATION_INVALID: 'DOMAIN_MODEL_BOUNDED_CONTEXT_COLLABORATION_INVALID',
  BOUNDED_CONTEXT_ISOLATION_INVALID: 'DOMAIN_MODEL_BOUNDED_CONTEXT_ISOLATION_INVALID',
  CORE_ENTITY_NOT_FOUND: 'DOMAIN_MODEL_CORE_ENTITY_NOT_FOUND',
  CORE_ENTITY_DEFINITION_INVALID: 'DOMAIN_MODEL_CORE_ENTITY_DEFINITION_INVALID',
  CORE_ENTITY_INSTANCE_INVALID: 'DOMAIN_MODEL_CORE_ENTITY_INSTANCE_INVALID',
  CORE_ENTITY_REFERENCE_INVALID: 'DOMAIN_MODEL_CORE_ENTITY_REFERENCE_INVALID',
  CORE_ENTITY_STATE_TRANSITION_INVALID: 'DOMAIN_MODEL_CORE_ENTITY_STATE_TRANSITION_INVALID',
  VALUE_OBJECT_NOT_FOUND: 'DOMAIN_MODEL_VALUE_OBJECT_NOT_FOUND',
  VALUE_OBJECT_DEFINITION_INVALID: 'DOMAIN_MODEL_VALUE_OBJECT_DEFINITION_INVALID',
  VALUE_OBJECT_INSTANCE_INVALID: 'DOMAIN_MODEL_VALUE_OBJECT_INSTANCE_INVALID',
  VALUE_OBJECT_EQUALITY_INVALID: 'DOMAIN_MODEL_VALUE_OBJECT_EQUALITY_INVALID',
  AGGREGATE_NOT_FOUND: 'DOMAIN_MODEL_AGGREGATE_NOT_FOUND',
  AGGREGATE_DEFINITION_INVALID: 'DOMAIN_MODEL_AGGREGATE_DEFINITION_INVALID',
  AGGREGATE_REFERENCE_INVALID: 'DOMAIN_MODEL_AGGREGATE_REFERENCE_INVALID',
  AGGREGATE_TRANSACTION_INVALID: 'DOMAIN_MODEL_AGGREGATE_TRANSACTION_INVALID',
  AGGREGATE_INVARIANT_INVALID: 'DOMAIN_MODEL_AGGREGATE_INVARIANT_INVALID',
  DOMAIN_SERVICE_NOT_FOUND: 'DOMAIN_MODEL_DOMAIN_SERVICE_NOT_FOUND',
  DOMAIN_SERVICE_DEFINITION_INVALID: 'DOMAIN_MODEL_DOMAIN_SERVICE_DEFINITION_INVALID',
  DOMAIN_SERVICE_OPERATION_INVALID: 'DOMAIN_MODEL_DOMAIN_SERVICE_OPERATION_INVALID',
  DOMAIN_SERVICE_COLLABORATION_INVALID: 'DOMAIN_MODEL_DOMAIN_SERVICE_COLLABORATION_INVALID',
  DOMAIN_EVENT_NOT_FOUND: 'DOMAIN_MODEL_DOMAIN_EVENT_NOT_FOUND',
  DOMAIN_EVENT_DEFINITION_INVALID: 'DOMAIN_MODEL_DOMAIN_EVENT_DEFINITION_INVALID',
  DOMAIN_EVENT_PUBLICATION_INVALID: 'DOMAIN_MODEL_DOMAIN_EVENT_PUBLICATION_INVALID',
  DOMAIN_EVENT_CONSUMPTION_INVALID: 'DOMAIN_MODEL_DOMAIN_EVENT_CONSUMPTION_INVALID',
  DOMAIN_EVENT_ORDERING_INVALID: 'DOMAIN_MODEL_DOMAIN_EVENT_ORDERING_INVALID'
});

export const DOMAIN_MODELING_PRINCIPLES = Object.freeze({
  MODEL_BUSINESS_NOT_IMPLEMENTATION: 'model-business-not-implementation',
  PRESERVE_EXPLICIT_OWNERSHIP: 'preserve-explicit-ownership',
  USE_BUSINESS_TERMINOLOGY_CONSISTENTLY: 'use-business-terminology-consistently',
  PROTECT_DOMAIN_BOUNDARIES: 'protect-domain-boundaries',
  KEEP_DOMAINS_COHESIVE: 'keep-domains-cohesive',
  MINIMIZE_UNNECESSARY_DEPENDENCIES: 'minimize-unnecessary-dependencies',
  FAVOR_EXPLICIT_RELATIONSHIPS: 'favor-explicit-relationships'
});

export const DOMAIN_BOUNDARY_RULES = Object.freeze({
  CONSISTENT_TERMINOLOGY: 'consistent-terminology',
  AUTHORITATIVE_BUSINESS_RULES: 'authoritative-business-rules',
  LOCAL_STATE_OWNERSHIP: 'local-state-ownership',
  PRESERVED_INVARIANTS: 'preserved-invariants',
  EXPLICIT_CONTRACT_COMMUNICATION: 'explicit-contract-communication',
  RESPECTED_OWNERSHIP: 'respected-ownership',
  INDEPENDENT_BUSINESS_CONCEPTS: 'independent-business-concepts'
});

export const DOMAIN_CONSISTENCY_MODELS = Object.freeze({
  WITHIN_DOMAIN_AUTHORITATIVE: 'within-domain-authoritative',
  CROSS_DOMAIN_COORDINATED: 'cross-domain-coordinated'
});

export const DOMAIN_RELATIONSHIP_TYPES = Object.freeze({
  REQUIRES: 'requires',
  REFERENCES: 'references',
  SETTLES: 'settles',
  COMMUNICATES: 'communicates',
  SUPPORTS_REASONING: 'supports-reasoning'
});

export const BOUNDED_CONTEXT_NAMES = Object.freeze({
  RESERVATION: 'Reservation',
  PROPERTY: 'Property',
  GUEST: 'Guest',
  PRICING: 'Pricing',
  PAYMENT: 'Payment',
  NOTIFICATION: 'Notification',
  IDENTITY: 'Identity',
  KNOWLEDGE: 'Knowledge',
  WORKFLOW: 'Workflow',
  PLATFORM: 'Platform'
});

export const BOUNDED_CONTEXT_PRINCIPLES = Object.freeze({
  OWNS_ONE_BUSINESS_CAPABILITY: 'owns-one-business-capability',
  ONE_AUTHORITATIVE_OWNER: 'one-authoritative-owner',
  PROTECTS_BUSINESS_RULES: 'protects-business-rules',
  MAINTAINS_OWN_LIFECYCLE: 'maintains-own-lifecycle',
  EXPOSES_EXPLICIT_CONTRACTS: 'exposes-explicit-contracts',
  EVOLVES_INDEPENDENTLY: 'evolves-independently'
});

export const BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS = Object.freeze({
  APIS: 'apis',
  COMMANDS: 'commands',
  QUERIES: 'queries',
  EVENTS: 'events',
  WORKFLOWS: 'workflows'
});

export const BOUNDED_CONTEXT_ISOLATION_ASPECTS = Object.freeze({
  BUSINESS_RULES: 'business-rules',
  DATA_OWNERSHIP: 'data-ownership',
  TERMINOLOGY: 'terminology',
  LIFECYCLES: 'lifecycles',
  VALIDATION: 'validation',
  STATE_TRANSITIONS: 'state-transitions'
});

export const CORE_ENTITY_NAMES = Object.freeze({
  RESERVATION: 'Reservation',
  GUEST: 'Guest',
  PROPERTY: 'Property',
  PAYMENT: 'Payment',
  NOTIFICATION: 'Notification',
  USER: 'User',
  KNOWLEDGE_ITEM: 'Knowledge Item',
  WORKFLOW_INSTANCE: 'Workflow Instance'
});

export const CORE_ENTITY_CHARACTERISTICS = Object.freeze({
  UNIQUE_IDENTITY: 'unique-identity',
  MUTABLE_BUSINESS_STATE: 'mutable-business-state',
  BUSINESS_BEHAVIOR: 'business-behavior',
  LIFECYCLE_TRANSITIONS: 'lifecycle-transitions',
  BUSINESS_INVARIANTS: 'business-invariants',
  DOMAIN_OWNERSHIP: 'domain-ownership'
});

export const ENTITY_REFERENCE_RULES = Object.freeze({
  STABLE_BUSINESS_IDENTITY: 'stable-business-identity',
  NO_FOREIGN_OBJECT_EMBEDDING: 'no-foreign-object-embedding',
  BUSINESS_ASSOCIATION_NOT_OWNERSHIP: 'business-association-not-ownership'
});

export const ENTITY_INTEGRITY_RULES = Object.freeze({
  PRESERVE_IDENTITY: 'preserve-identity',
  VALID_BUSINESS_STATE: 'valid-business-state',
  ENFORCE_INVARIANTS: 'enforce-invariants',
  PRESERVE_OWNERSHIP: 'preserve-ownership',
  MAINTAIN_CONSISTENCY: 'maintain-consistency'
});

export const VALUE_OBJECT_NAMES = Object.freeze({
  MONEY: 'Money',
  CURRENCY: 'Currency',
  DATE_RANGE: 'Date Range',
  EMAIL_ADDRESS: 'Email Address',
  PHONE_NUMBER: 'Phone Number',
  ADDRESS: 'Address',
  TIME_ZONE: 'Time Zone',
  GUEST_COUNT: 'Guest Count',
  COORDINATES: 'Coordinates',
  DURATION: 'Duration',
  PERCENTAGE: 'Percentage',
  LANGUAGE: 'Language'
});

export const VALUE_OBJECT_CHARACTERISTICS = Object.freeze({
  IMMUTABLE: 'immutable',
  NO_INDEPENDENT_IDENTITY: 'no-independent-identity',
  COMPARED_BY_VALUE: 'compared-by-value',
  BUSINESS_MEANING: 'business-meaning',
  SELF_VALIDATING: 'self-validating',
  REUSABLE_ACROSS_DOMAIN: 'reusable-across-domain'
});

export const VALUE_OBJECT_OWNERSHIP_RULES = Object.freeze({
  OWNED_BY_CONTAINING_ENTITY: 'owned-by-containing-entity',
  NO_INDEPENDENT_LIFECYCLE: 'no-independent-lifecycle',
  REPLACED_RATHER_THAN_MUTATED: 'replaced-rather-than-mutated'
});

export const VALUE_OBJECT_FUTURE_CANDIDATES = Object.freeze({
  TAX_RATE: 'Tax Rate',
  LOYALTY_POINTS: 'Loyalty Points',
  DISCOUNT_RULE: 'Discount Rule',
  BUSINESS_HOURS: 'Business Hours',
  EXCHANGE_RATE: 'Exchange Rate',
  AI_CONFIDENCE_SCORE: 'AI Confidence Score',
  SENTIMENT_SCORE: 'Sentiment Score',
  AVAILABILITY_WINDOW: 'Availability Window'
});

export const AGGREGATE_NAMES = Object.freeze({
  RESERVATION: 'Reservation',
  GUEST: 'Guest',
  PROPERTY: 'Property',
  PAYMENT: 'Payment',
  WORKFLOW: 'Workflow'
});

export const AGGREGATE_PRINCIPLES = Object.freeze({
  ONE_AGGREGATE_ROOT: 'one-aggregate-root',
  PROTECT_BUSINESS_INVARIANTS: 'protect-business-invariants',
  OWN_INTERNAL_OBJECTS: 'own-internal-objects',
  MODIFIED_THROUGH_ROOT: 'modified-through-root',
  TRANSACTIONALLY_CONSISTENT: 'transactionally-consistent',
  MINIMIZE_EXTERNAL_DEPENDENCIES: 'minimize-external-dependencies'
});

export const AGGREGATE_REFERENCE_RULES = Object.freeze({
  IDENTITY_ONLY: 'identity-only',
  NO_EXTERNAL_ROOT_CONTAINMENT: 'no-external-root-containment',
  COLLABORATION_NOT_OWNERSHIP: 'collaboration-not-ownership'
});

export const AGGREGATE_COLLABORATION_MECHANISMS = Object.freeze({
  COMMANDS: 'commands',
  EVENTS: 'events',
  WORKFLOWS: 'workflows',
  EXPLICIT_CONTRACTS: 'explicit-contracts'
});

export const FUTURE_AGGREGATE_CANDIDATES = Object.freeze({
  INVOICE: 'Invoice',
  PROMOTION: 'Promotion',
  LOYALTY_ACCOUNT: 'Loyalty Account',
  VENDOR: 'Vendor',
  MAINTENANCE_REQUEST: 'Maintenance Request',
  AI_AGENT: 'AI Agent',
  CONVERSATION: 'Conversation',
  TASK: 'Task',
  CAMPAIGN: 'Campaign'
});

export const DOMAIN_SERVICE_NAMES = Object.freeze({
  RESERVATION_VALIDATION: 'Reservation Validation',
  PRICING_CALCULATION: 'Pricing Calculation',
  AVAILABILITY_EVALUATION: 'Availability Evaluation',
  PAYMENT_AUTHORIZATION: 'Payment Authorization',
  NOTIFICATION_COMPOSITION: 'Notification Composition',
  KNOWLEDGE_SERVICE: 'Knowledge Service'
});

export const DOMAIN_SERVICE_CHARACTERISTICS = Object.freeze({
  BUSINESS_BEHAVIOR: 'business-behavior',
  STATELESS: 'stateless',
  ONE_BOUNDED_CONTEXT: 'one-bounded-context',
  PROTECTS_BUSINESS_RULES: 'protects-business-rules',
  NO_BUSINESS_STATE_OWNERSHIP: 'no-business-state-ownership',
  COLLABORATES_WITH_DOMAIN_OBJECTS: 'collaborates-with-domain-objects'
});

export const DOMAIN_SERVICE_INTERACTION_RULES = Object.freeze({
  READ_AGGREGATE_STATE: 'read-aggregate-state',
  INVOKE_AGGREGATE_BEHAVIOR: 'invoke-aggregate-behavior',
  RESPECT_AGGREGATE_BOUNDARIES: 'respect-aggregate-boundaries',
  NEVER_BYPASS_AGGREGATE_ROOTS: 'never-bypass-aggregate-roots',
  CONSUME_VALUE_OBJECTS: 'consume-value-objects',
  REMAIN_SEPARATE_FROM_APPLICATION_SERVICES: 'remain-separate-from-application-services'
});

export const DOMAIN_SERVICE_COLLABORATION_TARGETS = Object.freeze({
  ENTITIES: 'entities',
  AGGREGATES: 'aggregates',
  VALUE_OBJECTS: 'value-objects',
  DOMAIN_RULES: 'domain-rules'
});

export const FUTURE_DOMAIN_SERVICE_CANDIDATES = Object.freeze({
  RECOMMENDATION_SERVICE: 'Recommendation Service',
  LOYALTY_CALCULATION_SERVICE: 'Loyalty Calculation Service',
  PROMOTION_EVALUATION_SERVICE: 'Promotion Evaluation Service',
  VENDOR_SELECTION_SERVICE: 'Vendor Selection Service',
  AI_RECOMMENDATION_SERVICE: 'AI Recommendation Service',
  RISK_ASSESSMENT_SERVICE: 'Risk Assessment Service',
  SCHEDULING_OPTIMIZATION_SERVICE: 'Scheduling Optimization Service',
  DYNAMIC_PRICING_OPTIMIZATION_SERVICE: 'Dynamic Pricing Optimization Service'
});

export const DOMAIN_EVENT_NAMES = Object.freeze({
  RESERVATION_CREATED: 'Reservation Created',
  RESERVATION_CONFIRMED: 'Reservation Confirmed',
  RESERVATION_MODIFIED: 'Reservation Modified',
  RESERVATION_CANCELLED: 'Reservation Cancelled',
  RESERVATION_CHECKED_IN: 'Reservation Checked In',
  RESERVATION_CHECKED_OUT: 'Reservation Checked Out',
  PAYMENT_INITIATED: 'Payment Initiated',
  PAYMENT_AUTHORIZED: 'Payment Authorized',
  PAYMENT_CAPTURED: 'Payment Captured',
  PAYMENT_FAILED: 'Payment Failed',
  PAYMENT_REFUNDED: 'Payment Refunded',
  GUEST_REGISTERED: 'Guest Registered',
  GUEST_UPDATED: 'Guest Updated',
  GUEST_PROFILE_CHANGED: 'Guest Profile Changed',
  GUEST_PREFERENCE_UPDATED: 'Guest Preference Updated',
  PROPERTY_REGISTERED: 'Property Registered',
  PROPERTY_UPDATED: 'Property Updated',
  AVAILABILITY_CHANGED: 'Availability Changed',
  CAPACITY_UPDATED: 'Capacity Updated',
  MAINTENANCE_SCHEDULED: 'Maintenance Scheduled',
  NOTIFICATION_QUEUED: 'Notification Queued',
  NOTIFICATION_SENT: 'Notification Sent',
  NOTIFICATION_DELIVERED: 'Notification Delivered',
  NOTIFICATION_FAILED: 'Notification Failed',
  KNOWLEDGE_INDEXED: 'Knowledge Indexed',
  KNOWLEDGE_UPDATED: 'Knowledge Updated',
  KNOWLEDGE_REMOVED: 'Knowledge Removed',
  KNOWLEDGE_CLASSIFIED: 'Knowledge Classified',
  WORKFLOW_STARTED: 'Workflow Started',
  WORKFLOW_CONTINUED: 'Workflow Continued',
  WORKFLOW_COMPLETED: 'Workflow Completed',
  WORKFLOW_FAILED: 'Workflow Failed',
  COMPENSATION_STARTED: 'Compensation Started',
  COMPENSATION_COMPLETED: 'Compensation Completed'
});

export const DOMAIN_EVENT_CHARACTERISTICS = Object.freeze({
  COMPLETED_BUSINESS_FACT: 'completed-business-fact',
  IMMUTABLE: 'immutable',
  ONE_OWNING_CONTEXT: 'one-owning-context',
  BUSINESS_MEANING: 'business-meaning',
  INDEPENDENTLY_CONSUMABLE: 'independently-consumable',
  PRESERVES_HISTORICAL_ACCURACY: 'preserves-historical-accuracy'
});

export const DOMAIN_EVENT_PUBLICATION_RULES = Object.freeze({
  AFTER_BUSINESS_VALIDATION: 'after-business-validation',
  AFTER_AGGREGATE_CONSISTENCY: 'after-aggregate-consistency',
  AFTER_SUCCESSFUL_TRANSACTION: 'after-successful-transaction',
  ONE_AUTHORITATIVE_PUBLISHER: 'one-authoritative-publisher',
  PUBLISHER_UNAWARE_OF_CONSUMERS: 'publisher-unaware-of-consumers'
});

export const DOMAIN_EVENT_EVOLUTION_RULES = Object.freeze({
  PRESERVE_EXISTING_SEMANTICS: 'preserve-existing-semantics',
  ADDITIVE_EVOLUTION: 'additive-evolution',
  AVOID_HISTORICAL_REINTERPRETATION: 'avoid-historical-reinterpretation',
  NEW_EVENT_TYPE_FOR_NEW_MEANING: 'new-event-type-for-new-meaning'
});

export const FUTURE_DOMAIN_EVENT_CANDIDATES = Object.freeze({
  PROMOTION_APPLIED: 'Promotion Applied',
  LOYALTY_POINTS_EARNED: 'Loyalty Points Earned',
  INVOICE_GENERATED: 'Invoice Generated',
  VENDOR_ASSIGNED: 'Vendor Assigned',
  AI_RECOMMENDATION_GENERATED: 'AI Recommendation Generated',
  CONVERSATION_STARTED: 'Conversation Started',
  MAINTENANCE_COMPLETED: 'Maintenance Completed',
  DYNAMIC_PRICE_CALCULATED: 'Dynamic Price Calculated'
});
