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
  VALUE_OBJECT_EQUALITY_INVALID: 'DOMAIN_MODEL_VALUE_OBJECT_EQUALITY_INVALID'
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
