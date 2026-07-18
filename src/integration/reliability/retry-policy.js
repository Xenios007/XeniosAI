export class RetryPolicy {
  constructor({ maxAttempts = 3 } = {}) {
    this.maxAttempts = maxAttempts;
  }

  async execute(work) {
    let lastError;

    for (let attempt = 1; attempt <= this.maxAttempts; attempt += 1) {
      try {
        return {
          result: await work(attempt),
          attempts: attempt
        };
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError;
  }
}
