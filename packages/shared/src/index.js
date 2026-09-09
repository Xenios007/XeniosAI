export function assertNonEmpty(value, fieldName) { if (!String(value || '').trim()) throw new Error(`${fieldName} is required.`); return String(value).trim(); }
