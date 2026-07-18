export const CONVERSATION_STATES = Object.freeze({
  NEW: 'new',
  ACTIVE: 'active',
  WAITING_FOR_GUEST: 'waiting_for_guest',
  WAITING_FOR_STAFF: 'waiting_for_staff',
  ESCALATED: 'escalated',
  CLOSED: 'closed',
  ARCHIVED: 'archived'
});

export const CONVERSATION_ERROR_CODES = Object.freeze({
  CONVERSATION_NOT_FOUND: 'CONVERSATION_NOT_FOUND',
  SESSION_EXPIRED: 'SESSION_EXPIRED',
  HANDOFF_FAILED: 'CONVERSATION_HANDOFF_FAILED'
});
