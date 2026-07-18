import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  FAILURE_CATEGORIES,
  FAILURE_RECOVERY_STAGES,
  FAILURE_SEVERITIES,
  FAILURE_TELEMETRY_FIELDS,
  ORCHESTRATOR_ERROR_CODES,
  RECOVERY_OUTCOMES,
  RECOVERY_STRATEGIES
} from '../constants.js';
import { FailureRecoveryStage } from '../contracts/failure-recovery-stage.js';
import { FailureTelemetry } from '../contracts/failure-telemetry.js';
import { OrchestrationFailureEvent } from '../contracts/orchestration-failure-event.js';
import { RecoveryPlan } from '../contracts/recovery-plan.js';
import { RecoveryResult } from '../contracts/recovery-result.js';
import { RecoveryValidationResult } from '../contracts/recovery-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [FAILURE_RECOVERY_STAGES.FAILURE_DETECTED, 'Record a failure reported near its source.'],
  [FAILURE_RECOVERY_STAGES.CLASSIFY_FAILURE, 'Classify the failure consistently across the platform.'],
  [FAILURE_RECOVERY_STAGES.DETERMINE_SEVERITY, 'Assign low, medium, high, or critical severity.'],
  [FAILURE_RECOVERY_STAGES.SELECT_RECOVERY_STRATEGY, 'Select a deterministic recovery strategy.'],
  [FAILURE_RECOVERY_STAGES.EXECUTE_RECOVERY, 'Coordinate the selected recovery action.'],
  [FAILURE_RECOVERY_STAGES.VALIDATE_RECOVERY, 'Verify recovery succeeded and preserved constraints.'],
  [FAILURE_RECOVERY_STAGES.RESUME_OR_ESCALATE, 'Resume execution or escalate safely.']
]);

export class FailureRecoveryCoordinator {
  constructor({ clock = () => new Date() } = {}) {
    this.clock = clock;
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, purpose], index) =>
        new FailureRecoveryStage({ sequence: index + 1, stage, purpose })
      )
    );
  }

  describePipeline() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  categories() {
    return Object.freeze(Object.values(FAILURE_CATEGORIES));
  }

  severities() {
    return Object.freeze(Object.values(FAILURE_SEVERITIES));
  }

  strategies() {
    return Object.freeze(Object.values(RECOVERY_STRATEGIES));
  }

  outcomes() {
    return Object.freeze(Object.values(RECOVERY_OUTCOMES));
  }

  telemetryFields() {
    return Object.freeze(Object.values(FAILURE_TELEMETRY_FIELDS));
  }

  getStage(stage) {
    const recoveryStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!recoveryStage) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.FAILURE_RECOVERY_STAGE_NOT_FOUND,
        `Failure recovery stage is not defined: ${stage}`,
        { stage }
      );
    }

    return recoveryStage;
  }

  classifyFailure(eventInput) {
    const event = this.#toEvent(eventInput);
    this.#assertValidEvent(event);

    if (this.categories().includes(event.category)) {
      return event.category;
    }

    const component = String(event.component).toLowerCase();

    if (component.includes('tool')) return FAILURE_CATEGORIES.TOOL;
    if (component.includes('memory')) return FAILURE_CATEGORIES.MEMORY;
    if (component.includes('knowledge')) return FAILURE_CATEGORIES.KNOWLEDGE;
    if (component.includes('workflow')) return FAILURE_CATEGORIES.WORKFLOW;
    if (component.includes('business')) return FAILURE_CATEGORIES.BUSINESS;
    if (component.includes('provider')) return FAILURE_CATEGORIES.EXTERNAL_PROVIDER;
    if (component.includes('infrastructure')) return FAILURE_CATEGORIES.INFRASTRUCTURE;

    return FAILURE_CATEGORIES.REASONING;
  }

  determineSeverity(eventInput) {
    const event = this.#toEvent(eventInput);

    if (this.severities().includes(event.severity)) {
      return event.severity;
    }

    if (event.policyEnforced === false || event.category === FAILURE_CATEGORIES.POLICY) {
      return FAILURE_SEVERITIES.CRITICAL;
    }

    if (event.recoverable === false) {
      return FAILURE_SEVERITIES.HIGH;
    }

    if (event.fallbackAvailable || event.alternativeToolAvailable || event.partialCompletionPossible) {
      return FAILURE_SEVERITIES.MEDIUM;
    }

    return FAILURE_SEVERITIES.LOW;
  }

  selectRecoveryStrategy(eventInput) {
    const event = this.#toEvent(eventInput);

    if (event.policyEnforced === false || event.category === FAILURE_CATEGORIES.POLICY) {
      return RECOVERY_STRATEGIES.ESCALATION;
    }

    if (event.recoverable === false) {
      return RECOVERY_STRATEGIES.SAFE_TERMINATION;
    }

    if (event.retryable) {
      return RECOVERY_STRATEGIES.RETRY;
    }

    if (event.alternativeToolAvailable) {
      return RECOVERY_STRATEGIES.ALTERNATIVE_TOOL;
    }

    if (event.fallbackAvailable) {
      return RECOVERY_STRATEGIES.FALLBACK;
    }

    if (event.clarificationPossible) {
      return RECOVERY_STRATEGIES.CLARIFICATION;
    }

    if (event.partialCompletionPossible) {
      return RECOVERY_STRATEGIES.PARTIAL_COMPLETION;
    }

    if (event.workflowRollbackAvailable) {
      return RECOVERY_STRATEGIES.WORKFLOW_ROLLBACK;
    }

    return RECOVERY_STRATEGIES.ESCALATION;
  }

  createRecoveryPlan(eventInput) {
    const event = this.#toEvent(eventInput);
    const category = this.classifyFailure(event);
    const severity = this.determineSeverity({ ...event, category });
    const strategy = this.selectRecoveryStrategy({ ...event, category });

    return new RecoveryPlan({
      failureId: event.failureId,
      correlationId: event.correlationId,
      category,
      severity,
      strategy,
      component: event.component,
      isolated: true,
      policyEnforced: event.policyEnforced,
      steps: recoveryStepsFor(strategy),
      metadata: {
        sourceMessage: event.message
      }
    });
  }

  validateRecovery(planInput, executionResult = {}) {
    const plan = this.#toPlan(planInput);
    const errors = [];

    if (plan.policyEnforced !== true) {
      errors.push('Recovery must not bypass policy enforcement.');
    }

    if (plan.isolated !== true) {
      errors.push('Recovery must isolate the failed component.');
    }

    if (plan.strategy === RECOVERY_STRATEGIES.SAFE_TERMINATION && executionResult.resumed === true) {
      errors.push('Safe termination recovery must not resume execution.');
    }

    if (executionResult.dataConsistent === false) {
      errors.push('Recovery validation failed data consistency.');
    }

    if (executionResult.workflowIntegrity === false) {
      errors.push('Recovery validation failed workflow integrity.');
    }

    if (executionResult.policyCompliant === false) {
      errors.push('Recovery validation failed policy compliance.');
    }

    return new RecoveryValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  completeRecovery({ plan, executionResult = {}, durationMs = 0 }) {
    const recoveryPlan = this.#toPlan(plan);
    const validation = this.validateRecovery(recoveryPlan, executionResult);
    const succeeded = validation.isValid && executionResult.succeeded === true;
    const outcome = this.#recoveryOutcome(recoveryPlan, succeeded);
    const telemetry = new FailureTelemetry({
      failureCategory: recoveryPlan.category,
      severity: recoveryPlan.severity,
      component: recoveryPlan.component,
      recoveryStrategy: recoveryPlan.strategy,
      recoveryResult: outcome,
      durationMs,
      correlationId: recoveryPlan.correlationId,
      timestamp: this.clock().toISOString()
    });

    return new RecoveryResult({
      failureId: recoveryPlan.failureId,
      correlationId: recoveryPlan.correlationId,
      strategy: recoveryPlan.strategy,
      succeeded,
      outcome,
      validationErrors: validation.errors,
      telemetry
    });
  }

  recover(eventInput, executionResult = {}) {
    const started = this.clock();
    const plan = this.createRecoveryPlan(eventInput);
    const ended = this.clock();

    return this.completeRecovery({
      plan,
      executionResult,
      durationMs: Math.max(0, ended.getTime() - started.getTime())
    });
  }

  #recoveryOutcome(plan, succeeded) {
    if (succeeded) {
      return RECOVERY_OUTCOMES.RESUME;
    }

    if (plan.strategy === RECOVERY_STRATEGIES.SAFE_TERMINATION) {
      return RECOVERY_OUTCOMES.TERMINATE_SAFELY;
    }

    if (plan.strategy === RECOVERY_STRATEGIES.CLARIFICATION || plan.strategy === RECOVERY_STRATEGIES.PARTIAL_COMPLETION) {
      return RECOVERY_OUTCOMES.CONTROLLED_RESPONSE;
    }

    return RECOVERY_OUTCOMES.ESCALATE;
  }

  #assertValidEvent(event) {
    if (!event.failureId || !event.correlationId || !event.component || !event.message) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.FAILURE_EVENT_INVALID,
        'Failure events must include failureId, correlationId, component, and message.',
        { failureId: event.failureId, correlationId: event.correlationId }
      );
    }
  }

  #toEvent(eventInput) {
    return eventInput instanceof OrchestrationFailureEvent
      ? eventInput
      : new OrchestrationFailureEvent(eventInput);
  }

  #toPlan(planInput) {
    return planInput instanceof RecoveryPlan ? planInput : new RecoveryPlan(planInput);
  }
}

function recoveryStepsFor(strategy) {
  const steps = {
    [RECOVERY_STRATEGIES.RETRY]: ['isolate failure', 'retry operation', 'validate retry result'],
    [RECOVERY_STRATEGIES.FALLBACK]: ['isolate failure', 'invoke fallback capability', 'validate fallback result'],
    [RECOVERY_STRATEGIES.ALTERNATIVE_TOOL]: ['isolate failure', 'select alternative tool', 'validate alternative result'],
    [RECOVERY_STRATEGIES.CLARIFICATION]: ['isolate failure', 'request clarification', 'resume after user input'],
    [RECOVERY_STRATEGIES.PARTIAL_COMPLETION]: ['isolate failure', 'continue with reduced functionality', 'report omitted capability'],
    [RECOVERY_STRATEGIES.WORKFLOW_ROLLBACK]: ['isolate failure', 'rollback to safe checkpoint', 'validate workflow integrity'],
    [RECOVERY_STRATEGIES.ESCALATION]: ['isolate failure', 'escalate to decision authority', 'prepare controlled response'],
    [RECOVERY_STRATEGIES.SAFE_TERMINATION]: ['isolate failure', 'stop execution', 'return controlled termination']
  };

  return Object.freeze(steps[strategy] ?? steps[RECOVERY_STRATEGIES.ESCALATION]);
}
