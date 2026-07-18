export class CommandEnvelope {
  constructor({
    commandId,
    commandName,
    correlationId,
    requestId,
    owningService,
    payload = {},
    authorized = false,
    idempotencyKey = undefined,
    metadata = {}
  }) {
    this.commandId = commandId;
    this.commandName = commandName;
    this.correlationId = correlationId;
    this.requestId = requestId;
    this.owningService = owningService;
    this.payload = Object.freeze({ ...payload });
    this.authorized = Boolean(authorized);
    this.idempotencyKey = idempotencyKey;
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
