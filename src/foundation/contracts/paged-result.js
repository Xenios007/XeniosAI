export class PagedResult {
  constructor(items, totalCount, page, pageSize) {
    this.items = Object.freeze([...items]);
    this.totalCount = totalCount;
    this.page = page;
    this.pageSize = pageSize;
    Object.freeze(this);
  }
}
