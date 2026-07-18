export class WorkflowStepOutcome {
  constructor({
    workflowId,
    stepName,
    outcome,
    nextStep = undefined,
    recoveryStrategy = undefined,
    compensationOwner = undefined,
    failureReason = undefined
  }) {
    this.workflowId = workflowId;
    this.stepName = stepName;
    this.outcome = outcome;
    this.nextStep = nextStep;
    this.recoveryStrategy = recoveryStrategy;
    this.compensationOwner = compensationOwner;
    this.failureReason = failureReason;

    Object.freeze(this);
  }
}
