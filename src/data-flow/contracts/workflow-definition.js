import { WorkflowStep } from './workflow-step.js';

export class WorkflowDefinition {
  constructor({
    workflowName,
    businessObjective,
    coordinator,
    initiationSources = [],
    steps = [],
    timeoutAction = undefined,
    completionEvents = []
  }) {
    this.workflowName = workflowName;
    this.businessObjective = businessObjective;
    this.coordinator = coordinator;
    this.initiationSources = Object.freeze([...initiationSources]);
    this.steps = Object.freeze(steps.map((step) => step instanceof WorkflowStep ? step : new WorkflowStep(step)));
    this.timeoutAction = timeoutAction;
    this.completionEvents = Object.freeze([...completionEvents]);

    Object.freeze(this);
  }
}
