export class WorkflowTelemetryRecord {
  constructor({
    workflowId,
    correlationId,
    currentState,
    activeStep = undefined,
    completedSteps = [],
    failedSteps = [],
    executionDurationMs,
    retryCount,
    completionStatus
  }) {
    this.workflowId = workflowId;
    this.correlationId = correlationId;
    this.currentState = currentState;
    this.activeStep = activeStep;
    this.completedSteps = Object.freeze([...completedSteps]);
    this.failedSteps = Object.freeze([...failedSteps]);
    this.executionDurationMs = executionDurationMs;
    this.retryCount = retryCount;
    this.completionStatus = completionStatus;

    Object.freeze(this);
  }
}
