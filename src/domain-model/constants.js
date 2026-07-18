export const DOMAIN_MODEL_ERROR_CODES = Object.freeze({
  DOMAIN_NOT_FOUND: 'DOMAIN_MODEL_DOMAIN_NOT_FOUND',
  DOMAIN_OVERVIEW_INVALID: 'DOMAIN_MODEL_OVERVIEW_INVALID',
  DOMAIN_CONCEPT_INVALID: 'DOMAIN_MODEL_CONCEPT_INVALID',
  DOMAIN_CAPABILITY_INVALID: 'DOMAIN_MODEL_CAPABILITY_INVALID',
  DOMAIN_RELATIONSHIP_INVALID: 'DOMAIN_MODEL_RELATIONSHIP_INVALID',
  DOMAIN_STATE_INVALID: 'DOMAIN_MODEL_STATE_INVALID'
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
