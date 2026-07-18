export class RateLimiter {
  check() {
    throw new Error('RateLimiter.check must be implemented by a subclass.');
  }
}
