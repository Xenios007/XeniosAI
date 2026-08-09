export class OrchestrationPlanStep {
  constructor({
    sequence,
    stage,
    component,
    description,
    required = true
  }) {
    this.sequence = sequence;
    this.stage = stage;
    this.component = component;
    this.description = description;
    this.required = Boolean(required);

    Object.freeze(this);
  }
}
