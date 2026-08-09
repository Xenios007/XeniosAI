export const BUSINESS_SERVICE_NAMES = Object.freeze({
  BOOKING: 'booking',
  PRICING: 'pricing',
  CALENDAR: 'calendar',
  KNOWLEDGE: 'knowledge',
  NOTIFICATION: 'notification',
  PROPERTY: 'property',
  AUTHENTICATION: 'authentication',
  ANALYTICS: 'analytics',
  MEDIA: 'media',
  WORKFLOW: 'workflow'
});

export const BUSINESS_OUTCOMES = Object.freeze({
  SUCCESS: 'success',
  VALIDATION_FAILURE: 'validation_failure',
  BUSINESS_RULE_VIOLATION: 'business_rule_violation',
  AUTHORIZATION_FAILURE: 'authorization_failure',
  RESOURCE_UNAVAILABLE: 'resource_unavailable'
});

export const BUSINESS_ERROR_CODES = Object.freeze({
  CAPABILITY_NOT_REGISTERED: 'BUSINESS_CAPABILITY_NOT_REGISTERED',
  SERVICE_NOT_REGISTERED: 'BUSINESS_SERVICE_NOT_REGISTERED',
  VALIDATION_FAILED: 'BUSINESS_VALIDATION_FAILED',
  OWNERSHIP_VIOLATION: 'BUSINESS_OWNERSHIP_VIOLATION'
});
