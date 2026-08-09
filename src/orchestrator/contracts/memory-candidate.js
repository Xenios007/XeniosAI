export class MemoryCandidate {
  constructor({
    memoryId,
    category,
    content,
    relevanceScore = 0,
    confidence = 0,
    createdAt = undefined,
    expiresAt = undefined,
    userId = undefined,
    sessionId = undefined,
    policyCompliant = true,
    conflicting = false,
    metadata = {}
  }) {
    this.memoryId = memoryId;
    this.category = category;
    this.content = content;
    this.relevanceScore = relevanceScore;
    this.confidence = confidence;
    this.createdAt = createdAt;
    this.expiresAt = expiresAt;
    this.userId = userId;
    this.sessionId = sessionId;
    this.policyCompliant = Boolean(policyCompliant);
    this.conflicting = Boolean(conflicting);
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
