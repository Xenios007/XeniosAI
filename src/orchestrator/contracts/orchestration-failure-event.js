export class OrchestrationFailureEvent {
  constructor({
    failureId,
    correlationId,
    component,
    category,
    severity = undefined,
    message,
    recoverable = true,
    retryable = false,
    fallbackAvailable = false,
    alternativeToolAvailable = false,
    clarificationPossible = false,
    partialCompletionPossible = false,
    workflowRollbackAvailable = false,
    policyEnforced = true,
    timestamp = undefined,
    details = {}
  }) {
    this.failureId = failureId;
    this.correlationId = correlationId;
    this.component = component;
    this.category = category;
    this.severity = severity;
    this.message = message;
    this.recoverable = Boolean(recoverable);
    this.retryable = Boolean(retryable);
    this.fallbackAvailable = Boolean(fallbackAvailable);
    this.alternativeToolAvailable = Boolean(alternativeToolAvailable);
    this.clarificationPossible = Boolean(clarificationPossible);
    this.partialCompletionPossible = Boolean(partialCompletionPossible);
    this.workflowRollbackAvailable = Boolean(workflowRollbackAvailable);
    this.policyEnforced = Boolean(policyEnforced);
    this.timestamp = timestamp;
    this.details = Object.freeze({ ...details });

    Object.freeze(this);
  }
}
