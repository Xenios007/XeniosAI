export class RateLimitResult {
  constructor({
    allowed,
    limit,
    remaining,
    retryAfterSeconds = 0
  }) {
    this.allowed = allowed;
    this.limit = limit;
    this.remaining = remaining;
    this.retryAfterSeconds = retryAfterSeconds;
    Object.freeze(this);
  }
}
