import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DATA_FLOW_ERROR_CODES,
  WORKFLOW_INITIATION_SOURCES,
  WORKFLOW_LIFECYCLE_STAGES,
  WORKFLOW_RECOVERY_STRATEGIES,
  WORKFLOW_RESPONSIBILITY_OWNERS,
  WORKFLOW_STATES,
  WORKFLOW_STEP_OUTCOMES,
  WORKFLOW_TELEMETRY_FIELDS,
  WORKFLOW_TIMEOUT_ACTIONS
} from '../constants.js';
import { WorkflowDefinition } from '../contracts/workflow-definition.js';
import { WorkflowInstance } from '../contracts/workflow-instance.js';
import { WorkflowLifecycleStage } from '../contracts/workflow-lifecycle-stage.js';
import { WorkflowStepOutcome } from '../contracts/workflow-step-outcome.js';
import { WorkflowValidationResult } from '../contracts/workflow-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [WORKFLOW_LIFECYCLE_STAGES.WORKFLOW_STARTED, WORKFLOW_RESPONSIBILITY_OWNERS.WORKFLOW_COORDINATION, 'Start from a request, command, event, schedule, or external integration.'],
  [WORKFLOW_LIFECYCLE_STAGES.INITIALIZE_CONTEXT, WORKFLOW_RESPONSIBILITY_OWNERS.WORKFLOW_COORDINATION, 'Prepare workflow identity, correlation, context, variables, and state.'],
  [WORKFLOW_LIFECYCLE_STAGES.EXECUTE_STEP, WORKFLOW_RESPONSIBILITY_OWNERS.WORKFLOW_COORDINATION, 'Coordinate one explicit capability step owned by the responsible component.'],
  [WORKFLOW_LIFECYCLE_STAGES.VALIDATE_OUTCOME, WORKFLOW_RESPONSIBILITY_OWNERS.DECISION_AUTHORIZATION, 'Evaluate success, failure, partial completion, retry, or compensation requirements.'],
  [WORKFLOW_LIFECYCLE_STAGES.CONTINUE_OR_COMPLETE, WORKFLOW_RESPONSIBILITY_OWNERS.WORKFLOW_COORDINATION, 'Determine deterministic continuation or completion.'],
  [WORKFLOW_LIFECYCLE_STAGES.COMPLETE_WORKFLOW, WORKFLOW_RESPONSIBILITY_OWNERS.WORKFLOW_COORDINATION, 'Conclude the workflow without absorbing service-owned business state.'],
  [WORKFLOW_LIFECYCLE_STAGES.PUBLISH_COMPLETION, WORKFLOW_RESPONSIBILITY_OWNERS.WORKFLOW_COORDINATION, 'Publish completion events for interested components.']
]);

const ALLOWED_STATE_TRANSITIONS = Object.freeze({
  [WORKFLOW_STATES.CREATED]: [WORKFLOW_STATES.INITIALIZED, WORKFLOW_STATES.CANCELLED],
  [WORKFLOW_STATES.INITIALIZED]: [WORKFLOW_STATES.RUNNING, WORKFLOW_STATES.CANCELLED],
  [WORKFLOW_STATES.RUNNING]: [WORKFLOW_STATES.WAITING, WORKFLOW_STATES.RETRYING, WORKFLOW_STATES.SUSPENDED, WORKFLOW_STATES.COMPLETED, WORKFLOW_STATES.FAILED, WORKFLOW_STATES.CANCELLED],
  [WORKFLOW_STATES.WAITING]: [WORKFLOW_STATES.RUNNING, WORKFLOW_STATES.SUSPENDED, WORKFLOW_STATES.CANCELLED],
  [WORKFLOW_STATES.RETRYING]: [WORKFLOW_STATES.RUNNING, WORKFLOW_STATES.SUSPENDED, WORKFLOW_STATES.FAILED, WORKFLOW_STATES.CANCELLED],
  [WORKFLOW_STATES.SUSPENDED]: [WORKFLOW_STATES.RUNNING, WORKFLOW_STATES.CANCELLED, WORKFLOW_STATES.FAILED],
  [WORKFLOW_STATES.COMPLETED]: [],
  [WORKFLOW_STATES.FAILED]: [],
  [WORKFLOW_STATES.CANCELLED]: []
});

const DEFAULT_WORKFLOWS = Object.freeze([
  workflow('ReservationProcess', 'Complete reservation process', [
    step('ValidateReservation', 'validate-reservation', 'Booking Service'),
    step('CalculatePricing', 'calculate-pricing', 'Pricing Service'),
    step('ReserveInventory', 'reserve-inventory', 'Calendar Service', ['CalculatePricing'], 'ReleaseInventory', 'Calendar Service'),
    step('ProcessPayment', 'process-payment', 'Payment Service', ['ReserveInventory'], 'RefundPayment', 'Payment Service'),
    step('SendNotification', 'send-notification', 'Notification Service', ['ProcessPayment'])
  ], ['ReservationCompleted']),
  workflow('GuestCheckIn', 'Coordinate guest check-in', [
    step('ValidateStay', 'validate-stay', 'Booking Service'),
    step('ConfirmPaymentStatus', 'confirm-payment-status', 'Payment Service'),
    step('NotifyArrival', 'notify-arrival', 'Notification Service')
  ], ['GuestCheckedIn']),
  workflow('GuestCheckOut', 'Coordinate guest check-out', [
    step('ValidateDeparture', 'validate-departure', 'Booking Service'),
    step('SettleCharges', 'settle-charges', 'Payment Service'),
    step('NotifyDeparture', 'notify-departure', 'Notification Service')
  ], ['GuestCheckedOut']),
  workflow('CancellationProcess', 'Coordinate reservation cancellation', [
    step('CancelReservation', 'cancel-reservation', 'Booking Service'),
    step('RefundPayment', 'refund-payment', 'Payment Service'),
    step('ReleaseCalendar', 'release-calendar', 'Calendar Service'),
    step('SendCancellationNotice', 'send-cancellation-notice', 'Notification Service')
  ], ['WorkflowCompleted']),
  workflow('PaymentProcessing', 'Coordinate payment processing', [
    step('AuthorizePaymentDecision', 'authorize-payment-decision', WORKFLOW_RESPONSIBILITY_OWNERS.DECISION_AUTHORIZATION, [], undefined, undefined, false),
    step('ProcessPayment', 'process-payment', 'Payment Service')
  ], ['PaymentCompleted']),
  workflow('PropertyOnboarding', 'Coordinate property onboarding', [
    step('CreatePropertyProfile', 'create-property-profile', 'Property Service'),
    step('CreateCalendar', 'create-calendar', 'Calendar Service'),
    step('IndexPropertyKnowledge', 'index-property-knowledge', 'Knowledge Service')
  ], ['WorkflowCompleted']),
  workflow('KnowledgeSynchronization', 'Coordinate knowledge synchronization', [
    step('ReadKnowledgeChanges', 'read-knowledge-changes', 'Knowledge Service', [], undefined, undefined, false),
    step('RefreshSearchIndex', 'refresh-search-index', 'Knowledge Service'),
    step('PublishKnowledgeSyncCompletion', 'publish-knowledge-sync-completion', 'Knowledge Service', ['RefreshSearchIndex'])
  ], ['WorkflowCompleted'])
]);

export class WorkflowOrchestrationDescriptor {
  constructor({ workflows = DEFAULT_WORKFLOWS } = {}) {
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, owner, responsibility], index) =>
        new WorkflowLifecycleStage({ sequence: index + 1, stage, owner, responsibility })
      )
    );
    this.workflows = new Map();

    for (const workflowDefinition of workflows) {
      this.registerWorkflow(workflowDefinition);
    }
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  responsibilityOwners() {
    return Object.freeze({ ...WORKFLOW_RESPONSIBILITY_OWNERS });
  }

  initiationSources() {
    return Object.freeze(Object.values(WORKFLOW_INITIATION_SOURCES));
  }

  workflowStates() {
    return Object.freeze(Object.values(WORKFLOW_STATES));
  }

  stepOutcomes() {
    return Object.freeze(Object.values(WORKFLOW_STEP_OUTCOMES));
  }

  recoveryStrategies() {
    return Object.freeze(Object.values(WORKFLOW_RECOVERY_STRATEGIES));
  }

  timeoutActions() {
    return Object.freeze(Object.values(WORKFLOW_TIMEOUT_ACTIONS));
  }

  telemetryFields() {
    return Object.freeze(Object.values(WORKFLOW_TELEMETRY_FIELDS));
  }

  listWorkflows() {
    return Object.freeze([...this.workflows.values()]);
  }

  registerWorkflow(workflowInput) {
    const workflowDefinition = workflowInput instanceof WorkflowDefinition
      ? workflowInput
      : new WorkflowDefinition(workflowInput);
    const result = this.validateWorkflowDefinition(workflowDefinition);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.WORKFLOW_DEFINITION_INVALID,
        'Workflow definition violates ARCH-005-05.',
        { errors: result.errors }
      );
    }

    this.workflows.set(workflowDefinition.workflowName, workflowDefinition);
    return this;
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.WORKFLOW_STAGE_NOT_FOUND,
        `Workflow lifecycle stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  getWorkflow(workflowName) {
    return this.workflows.get(workflowName);
  }

  validateLifecycle(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(`Workflow lifecycle must include ${expectedStages.length} stages in canonical order.`);
    }

    expectedStages.forEach((expectedStage, index) => {
      if (actualStages[index] !== expectedStage) {
        errors.push(`Stage ${index + 1} must be ${expectedStage}; received ${actualStages[index] ?? 'missing'}.`);
      }
    });

    return validation(errors);
  }

  assertLifecycle(stages) {
    const result = this.validateLifecycle(stages);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.WORKFLOW_LIFECYCLE_INVALID,
        'Workflow lifecycle does not match ARCH-005-05.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateWorkflowDefinition(workflowInput) {
    const workflowDefinition = workflowInput instanceof WorkflowDefinition
      ? workflowInput
      : new WorkflowDefinition(workflowInput);
    const errors = [];

    if (!workflowDefinition.workflowName) errors.push('Workflow must have a name.');
    if (!workflowDefinition.businessObjective) errors.push('Workflow must define a business objective.');
    if (workflowDefinition.coordinator !== WORKFLOW_RESPONSIBILITY_OWNERS.WORKFLOW_COORDINATION) {
      errors.push('Workflow coordination must be owned by the AI Orchestrator.');
    }
    if (workflowDefinition.steps.length === 0) errors.push('Workflow must execute through explicit steps.');

    for (const source of workflowDefinition.initiationSources) {
      if (!this.initiationSources().includes(source)) {
        errors.push(`Unsupported workflow initiation source: ${source}.`);
      }
    }

    if (workflowDefinition.timeoutAction && !this.timeoutActions().includes(workflowDefinition.timeoutAction)) {
      errors.push(`Unsupported workflow timeout action: ${workflowDefinition.timeoutAction}.`);
    }

    for (const stepDefinition of workflowDefinition.steps) {
      if (!stepDefinition.stepName) errors.push('Workflow step must have a name.');
      if (!stepDefinition.capability) errors.push(`Workflow step ${stepDefinition.stepName ?? 'unknown'} must define one capability.`);
      if (!stepDefinition.owner) errors.push(`Workflow step ${stepDefinition.stepName ?? 'unknown'} must define an owner.`);
      if (stepDefinition.orchestratorOwnsBusinessLogic) errors.push(`Workflow step ${stepDefinition.stepName} must not place business logic in the orchestrator.`);
      if (stepDefinition.modifiesForeignBusinessState) errors.push(`Workflow step ${stepDefinition.stepName} must not modify foreign business state.`);
      if (stepDefinition.compensationCapability && stepDefinition.compensationOwner !== stepDefinition.owner) {
        errors.push(`Workflow compensation for ${stepDefinition.stepName} must be owned by the service that owns the affected capability.`);
      }
    }

    return validation(errors);
  }

  createWorkflow(workflowInput) {
    const instance = workflowInput instanceof WorkflowInstance
      ? workflowInput
      : new WorkflowInstance(workflowInput);
    const definition = this.getWorkflow(instance.workflowName);
    const errors = [];

    if (!definition) errors.push(`Workflow definition is not registered: ${instance.workflowName}.`);
    if (!instance.workflowId) errors.push('Workflow instance must include a workflow ID.');
    if (!instance.correlationId) errors.push('Workflow instance must include a correlation ID.');
    if (!this.workflowStates().includes(instance.currentState)) errors.push(`Unsupported workflow state: ${instance.currentState}.`);
    if (!this.initiationSources().includes(instance.initiationSource)) {
      errors.push(`Unsupported workflow initiation source: ${instance.initiationSource}.`);
    }
    if (definition && !definition.initiationSources.includes(instance.initiationSource)) {
      errors.push(`Workflow ${instance.workflowName} cannot start from ${instance.initiationSource}.`);
    }
    if (instance.retryCount < 0) errors.push('Workflow retry count must not be negative.');

    if (errors.length > 0) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.WORKFLOW_INSTANCE_INVALID,
        'Workflow instance violates ARCH-005-05.',
        { errors }
      );
    }

    return instance;
  }

  validateStateTransition(fromState, toState) {
    const errors = [];

    if (!this.workflowStates().includes(fromState)) errors.push(`Unsupported current workflow state: ${fromState}.`);
    if (!this.workflowStates().includes(toState)) errors.push(`Unsupported target workflow state: ${toState}.`);
    if (errors.length === 0 && !ALLOWED_STATE_TRANSITIONS[fromState].includes(toState)) {
      errors.push(`Workflow state transition from ${fromState} to ${toState} is not allowed.`);
    }

    return validation(errors);
  }

  assertStateTransition(fromState, toState) {
    const result = this.validateStateTransition(fromState, toState);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.WORKFLOW_STATE_TRANSITION_INVALID,
        'Workflow state transition violates ARCH-005-05.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateStepOutcome(outcomeInput, workflowInput) {
    const outcome = outcomeInput instanceof WorkflowStepOutcome
      ? outcomeInput
      : new WorkflowStepOutcome(outcomeInput);
    const workflowInstance = workflowInput instanceof WorkflowInstance
      ? workflowInput
      : new WorkflowInstance(workflowInput);
    const definition = this.getWorkflow(workflowInstance.workflowName);
    const stepDefinition = definition?.steps.find((stepCandidate) => stepCandidate.stepName === outcome.stepName);
    const errors = [];

    if (outcome.workflowId !== workflowInstance.workflowId) errors.push('Workflow step outcome must refer to the active workflow instance.');
    if (!stepDefinition) errors.push(`Workflow step is not defined for ${workflowInstance.workflowName}: ${outcome.stepName}.`);
    if (!this.stepOutcomes().includes(outcome.outcome)) errors.push(`Unsupported workflow step outcome: ${outcome.outcome}.`);

    if (
      [WORKFLOW_STEP_OUTCOMES.FAILURE, WORKFLOW_STEP_OUTCOMES.PARTIAL_COMPLETION, WORKFLOW_STEP_OUTCOMES.RETRY_REQUIRED, WORKFLOW_STEP_OUTCOMES.COMPENSATION_REQUIRED].includes(outcome.outcome) &&
      !outcome.failureReason
    ) {
      errors.push('Non-successful workflow step outcomes must include a failure reason.');
    }

    if (outcome.recoveryStrategy && !this.recoveryStrategies().includes(outcome.recoveryStrategy)) {
      errors.push(`Unsupported workflow recovery strategy: ${outcome.recoveryStrategy}.`);
    }

    if (
      outcome.outcome === WORKFLOW_STEP_OUTCOMES.COMPENSATION_REQUIRED &&
      stepDefinition?.compensationOwner &&
      outcome.compensationOwner !== stepDefinition.compensationOwner
    ) {
      errors.push(`Workflow compensation for ${outcome.stepName} must be coordinated through ${stepDefinition.compensationOwner}.`);
    }

    return validation(errors);
  }

  validateRecovery({ strategy, resumeFromStep, repeatedWorkMinimized = true, preservesBusinessConsistency = true } = {}) {
    const errors = [];

    if (!this.recoveryStrategies().includes(strategy)) errors.push(`Unsupported workflow recovery strategy: ${strategy}.`);
    if (strategy === WORKFLOW_RECOVERY_STRATEGIES.RESUME_FROM_LAST_SUCCESSFUL_STEP && !resumeFromStep) {
      errors.push('Resume recovery must identify the last successful step.');
    }
    if (repeatedWorkMinimized !== true) errors.push('Workflow recovery should minimize repeated work.');
    if (preservesBusinessConsistency !== true) errors.push('Workflow recovery must preserve business consistency.');

    return validation(errors);
  }

  validateTelemetry(record) {
    const errors = [];

    for (const field of this.telemetryFields()) {
      if (field === WORKFLOW_TELEMETRY_FIELDS.ACTIVE_STEP) continue;

      if (record?.[field] === undefined || record?.[field] === null) {
        errors.push(`Workflow telemetry is missing field ${field}.`);
      }
    }

    if (record?.currentState && !this.workflowStates().includes(record.currentState)) {
      errors.push(`Unsupported workflow telemetry state: ${record.currentState}.`);
    }

    if (record?.completionStatus && !this.workflowStates().includes(record.completionStatus)) {
      errors.push(`Unsupported workflow completion status: ${record.completionStatus}.`);
    }

    if (record?.executionDurationMs !== undefined && record.executionDurationMs < 0) {
      errors.push('Workflow execution duration must not be negative.');
    }

    if (record?.retryCount !== undefined && record.retryCount < 0) {
      errors.push('Workflow retry count must not be negative.');
    }

    if (!Array.isArray(record?.completedSteps)) errors.push('Workflow telemetry completed steps must be an array.');
    if (!Array.isArray(record?.failedSteps)) errors.push('Workflow telemetry failed steps must be an array.');

    return validation(errors);
  }
}

function workflow(workflowName, businessObjective, steps, completionEvents) {
  return new WorkflowDefinition({
    workflowName,
    businessObjective,
    coordinator: WORKFLOW_RESPONSIBILITY_OWNERS.WORKFLOW_COORDINATION,
    initiationSources: Object.values(WORKFLOW_INITIATION_SOURCES),
    steps,
    timeoutAction: WORKFLOW_TIMEOUT_ACTIONS.ESCALATE,
    completionEvents
  });
}

function step(stepName, capability, owner, dependsOn = [], compensationCapability = undefined, compensationOwner = undefined, modifiesBusinessState = true) {
  return {
    stepName,
    capability,
    owner,
    dependsOn,
    compensationCapability,
    compensationOwner,
    modifiesBusinessState
  };
}

function validation(errors) {
  return new WorkflowValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
