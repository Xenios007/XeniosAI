import { RateLimitResult } from '../contracts/rate-limit-result.js';
import { RateLimiter } from './rate-limiter.js';

export class InMemoryRateLimiter extends RateLimiter {
  constructor({
    clock,
    limit = 60,
    windowMs = 60000
  } = {}) {
    super();
    this.clock = clock;
    this.limit = limit;
    this.windowMs = windowMs;
    this.windows = new Map();
  }

  check(subjectKey) {
    const now = this.clock.now().getTime();
    const windowStart = now - this.windowMs;
    const current = (this.windows.get(subjectKey) ?? []).filter(timestamp => timestamp > windowStart);

    if (current.length >= this.limit) {
      return new RateLimitResult({
        allowed: false,
        limit: this.limit,
        remaining: 0,
        retryAfterSeconds: Math.ceil(this.windowMs / 1000)
      });
    }

    current.push(now);
    this.windows.set(subjectKey, current);

    return new RateLimitResult({
      allowed: true,
      limit: this.limit,
      remaining: this.limit - current.length
    });
  }
}
