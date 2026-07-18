import { INTEGRATION_ERROR_CODES } from '../constants.js';
import { IntegrationError } from '../errors/integration-error.js';

export class CircuitBreaker {
  constructor({ failureThreshold = 3 } = {}) {
    this.failureThreshold = failureThreshold;
    this.failures = 0;
    this.open = false;
  }

  async execute(work) {
    if (this.open) {
      throw new IntegrationError(INTEGRATION_ERROR_CODES.CIRCUIT_OPEN, 'Integration circuit is open.');
    }

    try {
      const result = await work();
      this.failures = 0;
      return result;
    } catch (error) {
      this.failures += 1;

      if (this.failures >= this.failureThreshold) {
        this.open = true;
      }

      throw error;
    }
  }
}
