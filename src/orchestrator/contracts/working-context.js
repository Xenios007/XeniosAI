export class WorkingContext {
  constructor({
    purpose,
    items = [],
    omittedItems = [],
    telemetry,
    correlationId,
    tokenBudget = undefined,
    deliveredToReasoning = false
  }) {
    this.purpose = purpose;
    this.items = Object.freeze([...items]);
    this.omittedItems = Object.freeze([...omittedItems]);
    this.telemetry = telemetry;
    this.correlationId = correlationId;
    this.tokenBudget = tokenBudget;
    this.deliveredToReasoning = Boolean(deliveredToReasoning);

    Object.freeze(this);
  }
}
