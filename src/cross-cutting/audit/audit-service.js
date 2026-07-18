import { AuditRecord } from '../contracts/audit-record.js';

export class AuditService {
  constructor({ clock, idGenerator, logger, meter }) {
    this.clock = clock;
    this.idGenerator = idGenerator;
    this.logger = logger;
    this.meter = meter;
    this.records = [];
  }

  record({ actorId, action, resource, outcome, correlationId, metadata = {} }) {
    const record = new AuditRecord({
      auditId: this.idGenerator.generate(),
      timestamp: this.clock.now().toISOString(),
      actorId,
      action,
      resource,
      outcome,
      correlationId,
      metadata
    });

    this.records.push(record);
    this.logger.info('Audit record created.', {
      auditId: record.auditId,
      action,
      resource,
      outcome,
      correlationId
    });
    this.meter.incrementCounter('audit_records_total', 1, { action, outcome });

    return record;
  }
}
