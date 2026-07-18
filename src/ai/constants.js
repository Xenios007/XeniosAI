export const AI_DECISIONS = Object.freeze({
  EXECUTE: 'EXECUTE',
  RESPOND: 'RESPOND',
  CLARIFY: 'CLARIFY',
  RETRY: 'RETRY',
  ESCALATE: 'ESCALATE',
  DENY: 'DENY',
  STOP: 'STOP'
});

export const AI_INTENTS = Object.freeze({
  AVAILABILITY: 'availability',
  PRICING: 'pricing',
  BOOKING: 'booking',
  POLICY: 'policy',
  SUPPORT: 'support',
  GENERAL: 'general',
  UNKNOWN: 'unknown'
});

export const AI_ERROR_CODES = Object.freeze({
  TOOL_NOT_FOUND: 'AI_TOOL_NOT_FOUND',
  TOOL_EXECUTION_FAILED: 'AI_TOOL_EXECUTION_FAILED',
  DECISION_DENIED: 'AI_DECISION_DENIED'
});
