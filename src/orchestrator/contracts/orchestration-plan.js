export class OrchestrationPlan {
  constructor({ requestId, correlationId, steps = [], decisions = [], metadata = {} }) {
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.steps = Object.freeze([...steps]);
    this.decisions = Object.freeze([...decisions]);
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
