export class HealthCheckResult {
  constructor({
    component,
    status,
    checkedAt,
    details = {}
  }) {
    this.component = component;
    this.status = status;
    this.checkedAt = checkedAt;
    this.details = Object.freeze({ ...details });
    Object.freeze(this);
  }
}
