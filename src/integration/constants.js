export const INTEGRATION_TYPES = Object.freeze({
  MESSAGING: 'messaging',
  CALENDAR: 'calendar',
  PAYMENT: 'payment',
  AI_PROVIDER: 'ai_provider',
  NOTIFICATION: 'notification',
  HOSPITALITY_PLATFORM: 'hospitality_platform'
});

export const COMMUNICATION_STYLES = Object.freeze({
  REQUEST_RESPONSE: 'request_response',
  EVENT: 'event',
  MESSAGE: 'message',
  WORKFLOW: 'workflow'
});

export const INTEGRATION_ERROR_CODES = Object.freeze({
  ADAPTER_NOT_REGISTERED: 'INTEGRATION_ADAPTER_NOT_REGISTERED',
  PROVIDER_FAILURE: 'INTEGRATION_PROVIDER_FAILURE',
  CIRCUIT_OPEN: 'INTEGRATION_CIRCUIT_OPEN',
  TIMEOUT: 'INTEGRATION_TIMEOUT'
});
