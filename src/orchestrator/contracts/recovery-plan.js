export class RecoveryPlan {
  constructor({
    failureId,
    correlationId,
    category,
    severity,
    strategy,
    component,
    isolated = true,
    policyEnforced = true,
    steps = [],
    metadata = {}
  }) {
    this.failureId = failureId;
    this.correlationId = correlationId;
    this.category = category;
    this.severity = severity;
    this.strategy = strategy;
    this.component = component;
    this.isolated = Boolean(isolated);
    this.policyEnforced = Boolean(policyEnforced);
    this.steps = Object.freeze([...steps]);
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
