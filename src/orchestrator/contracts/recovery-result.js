export class RecoveryResult {
  constructor({
    failureId,
    correlationId,
    strategy,
    succeeded,
    outcome,
    validationErrors = [],
    telemetry
  }) {
    this.failureId = failureId;
    this.correlationId = correlationId;
    this.strategy = strategy;
    this.succeeded = Boolean(succeeded);
    this.outcome = outcome;
    this.validationErrors = Object.freeze([...validationErrors]);
    this.telemetry = telemetry;

    Object.freeze(this);
  }
}
