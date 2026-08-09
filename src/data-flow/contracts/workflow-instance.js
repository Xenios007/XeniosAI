export class WorkflowInstance {
  constructor({
    workflowId,
    workflowName,
    correlationId,
    initiationSource,
    currentState,
    context = {},
    variables = {},
    activeStep = undefined,
    completedSteps = [],
    failedSteps = [],
    retryCount = 0,
    originalRequestActive = true
  }) {
    this.workflowId = workflowId;
    this.workflowName = workflowName;
    this.correlationId = correlationId;
    this.initiationSource = initiationSource;
    this.currentState = currentState;
    this.context = Object.freeze({ ...context });
    this.variables = Object.freeze({ ...variables });
    this.activeStep = activeStep;
    this.completedSteps = Object.freeze([...completedSteps]);
    this.failedSteps = Object.freeze([...failedSteps]);
    this.retryCount = retryCount;
    this.originalRequestActive = Boolean(originalRequestActive);

    Object.freeze(this);
  }
}
