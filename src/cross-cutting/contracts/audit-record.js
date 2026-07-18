export class AuditRecord {
  constructor({
    auditId,
    timestamp,
    actorId,
    action,
    resource,
    outcome,
    correlationId,
    metadata = {}
  }) {
    this.auditId = auditId;
    this.timestamp = timestamp;
    this.actorId = actorId;
    this.action = action;
    this.resource = resource;
    this.outcome = outcome;
    this.correlationId = correlationId;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
