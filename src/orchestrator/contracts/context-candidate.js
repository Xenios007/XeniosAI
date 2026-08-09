export class ContextCandidate {
  constructor({
    contextId,
    layer,
    content,
    relevance = 0,
    authority = 0,
    recency = 0,
    confidence = 0,
    tokenCost = 1,
    source = undefined,
    traceId = undefined,
    sensitive = false,
    accessAllowed = true,
    metadata = {}
  }) {
    this.contextId = contextId;
    this.layer = layer;
    this.content = content;
    this.relevance = relevance;
    this.authority = authority;
    this.recency = recency;
    this.confidence = confidence;
    this.tokenCost = tokenCost;
    this.source = source;
    this.traceId = traceId;
    this.sensitive = Boolean(sensitive);
    this.accessAllowed = Boolean(accessAllowed);
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
