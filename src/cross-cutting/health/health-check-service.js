import { HEALTH_STATUS } from '../constants.js';
import { HealthCheckResult } from '../contracts/health-check-result.js';

export class HealthCheckService {
  constructor({ clock }) {
    this.clock = clock;
    this.checks = new Map();
  }

  register(component, check) {
    this.checks.set(component, check);
    return this;
  }

  async checkAll() {
    const results = [];

    for (const [component, check] of this.checks.entries()) {
      try {
        const details = await check();
        results.push(
          new HealthCheckResult({
            component,
            status: details.status ?? HEALTH_STATUS.HEALTHY,
            checkedAt: this.clock.now().toISOString(),
            details
          })
        );
      } catch (error) {
        results.push(
          new HealthCheckResult({
            component,
            status: HEALTH_STATUS.UNHEALTHY,
            checkedAt: this.clock.now().toISOString(),
            details: { message: error.message }
          })
        );
      }
    }

    return results;
  }
}
