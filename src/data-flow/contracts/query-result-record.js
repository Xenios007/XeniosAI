export class QueryResultRecord {
  constructor({
    queryId,
    queryName,
    owningService,
    status,
    data = undefined,
    dataSource,
    freshness = undefined,
    failureReason = undefined,
    metadata = {}
  }) {
    this.queryId = queryId;
    this.queryName = queryName;
    this.owningService = owningService;
    this.status = status;
    this.data = data;
    this.dataSource = dataSource;
    this.freshness = freshness;
    this.failureReason = failureReason;
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
