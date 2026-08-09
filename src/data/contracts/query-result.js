export class QueryResult {
  constructor({
    records = [],
    totalCount,
    metadata = {}
  }) {
    this.records = Object.freeze([...records]);
    this.totalCount = totalCount ?? records.length;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
