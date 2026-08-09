export class QueryEnvelope {
  constructor({
    queryId,
    queryName,
    correlationId,
    requestId,
    owningService,
    parameters = {},
    authorized = false,
    requestedBy = undefined,
    metadata = {}
  }) {
    this.queryId = queryId;
    this.queryName = queryName;
    this.correlationId = correlationId;
    this.requestId = requestId;
    this.owningService = owningService;
    this.parameters = Object.freeze({ ...parameters });
    this.authorized = Boolean(authorized);
    this.requestedBy = requestedBy;
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
